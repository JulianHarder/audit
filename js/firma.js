/* ===========================================================
   AUDIT – js/firma.js
   Das Datenmodell der Firma: Knoten, Leitungen, Zonen.
   Enthält außerdem die Berechnung der Schutzbedarfs-
   Vererbung (Maximumprinzip, Kumulation, Verteilung).

   Kantenarten:
     'netz'       Netzwerkverbindung  (Weg für Würmer/Angreifer)
     'hosting'    Anwendung läuft auf System (Weg der Vererbung)
     'datenfluss' personenbezogene Daten fließen (Station 3)
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.firma = (function () {
  'use strict';

  var U = AUDIT.util;

  var data = leer('Neue Firma');
  var listeners = [];
  var undoStack = [];
  var MAX_UNDO = 40;

  function leer(name) {
    return { name: name || 'Neue Firma', nodes: [], edges: [], zonen: [] };
  }

  /* ---------- Beobachter ---------- */

  function onChange(fn) { listeners.push(fn); }
  function changed(was) {
    listeners.forEach(function (fn) {
      try { fn(was || 'alles'); } catch (e) { console.error('Listener-Fehler', e); }
    });
  }

  /* ---------- Undo ---------- */

  function snapshot() {
    try {
      undoStack.push(JSON.stringify(data));
      if (undoStack.length > MAX_UNDO) undoStack.shift();
    } catch (e) {}
  }
  function undo() {
    if (!undoStack.length) { U.toast('Nichts mehr zum Rückgängigmachen.', 'warn'); return; }
    try {
      data = JSON.parse(undoStack.pop());
      changed('alles');
      U.toast('Rückgängig gemacht.', 'ok', 1800);
    } catch (e) {}
  }
  function kannUndo() { return undoStack.length > 0; }

  /* ---------- Zugriff ---------- */

  function node(id) {
    for (var i = 0; i < data.nodes.length; i++) if (data.nodes[i].id === id) return data.nodes[i];
    return null;
  }
  function zone(id) {
    for (var i = 0; i < data.zonen.length; i++) if (data.zonen[i].id === id) return data.zonen[i];
    return null;
  }
  function edge(id) {
    for (var i = 0; i < data.edges.length; i++) if (data.edges[i].id === id) return data.edges[i];
    return null;
  }
  function def(n) { return (AUDIT.data.bausteinMap[n && n.typ]) || {}; }
  function kategorie(n) { return def(n).kategorie; }

  /* alle Kanten eines Knotens */
  function edgesOf(id, art) {
    return data.edges.filter(function (e) {
      return (e.from === id || e.to === id) && (!art || e.art === art);
    });
  }
  function nachbarn(id, art) {
    return edgesOf(id, art).map(function (e) {
      return node(e.from === id ? e.to : e.from);
    }).filter(Boolean);
  }
  /* Systeme, auf denen Anwendung a läuft */
  function hostsOf(appId) {
    return data.edges.filter(function (e) { return e.art === 'hosting' && e.from === appId; })
      .map(function (e) { return node(e.to); }).filter(Boolean);
  }
  /* Anwendungen, die auf System s laufen */
  function appsOf(sysId) {
    return data.edges.filter(function (e) { return e.art === 'hosting' && e.to === sysId; })
      .map(function (e) { return node(e.from); }).filter(Boolean);
  }

  /* ---------- Erzeugen / Löschen ---------- */

  function neuerKnoten(typ, x, y, extra) {
    var d = AUDIT.data.bausteinMap[typ];
    if (!d) return null;
    var n = {
      id: U.id('n'),
      typ: typ,
      x: Math.round(x),
      y: Math.round(y),
      name: d.label,
      massnahmen: [],
      props: {}
    };
    if (d.kategorie === 'anwendung') {
      n.schutzbedarf = d.vorschlag
        ? { v: 'normal', i: 'normal', a: 'normal' }   // Nutzer soll selbst einstufen
        : { v: 'normal', i: 'normal', a: 'normal' };
      n.props = { rolle: 'verantwortlicher', standort: 'eu', avvertrag: false, verschluesselt: false };
    }
    if (d.kategorie === 'system') {
      n.props = { rolle: 'verantwortlicher', standort: 'eu', verschluesselt: false, offline: false };
      if (d.extern) { n.props.rolle = 'auftragsverarbeiter'; }
    }
    if (extra) Object.keys(extra).forEach(function (k) { n[k] = extra[k]; });
    snapshot();
    data.nodes.push(n);
    changed('nodes');
    return n;
  }

  function neueZone(typ, x, y) {
    var d = AUDIT.data.bausteinMap[typ];
    if (!d) return null;
    var z = {
      id: U.id('z'), typ: typ, name: d.label,
      x: Math.round(x), y: Math.round(y),
      w: d.w || 320, h: d.h || 200,
      massnahmen: []
    };
    snapshot();
    data.zonen.push(z);
    changed('zonen');
    return z;
  }

  /* Art der Kante aus den beiden Kategorien ableiten */
  function kantenArt(a, b) {
    var ka = kategorie(a), kb = kategorie(b);
    if (ka === 'anwendung' && kb === 'system') return 'hosting';
    if (ka === 'system' && kb === 'anwendung') return 'hosting';
    if (ka === 'system' && kb === 'system') return 'netz';
    return 'datenfluss';
  }

  function neueKante(fromId, toId, art) {
    if (fromId === toId) return null;
    var a = node(fromId), b = node(toId);
    if (!a || !b) return null;
    var schonDa = data.edges.some(function (e) {
      return (e.from === fromId && e.to === toId) || (e.from === toId && e.to === fromId);
    });
    if (schonDa) { U.toast('Diese Verbindung gibt es schon.', 'warn', 2200); return null; }

    var k = art || kantenArt(a, b);
    /* Hosting zeigt immer von der Anwendung zum System */
    if (k === 'hosting' && kategorie(a) === 'system') { var t = fromId; fromId = toId; toId = t; }

    var e = {
      id: U.id('e'), from: fromId, to: toId, art: k,
      daten: [], zweck: '', rechtsgrundlage: '', verschluesselt: false
    };
    snapshot();
    data.edges.push(e);
    changed('edges');
    return e;
  }

  function loesche(id) {
    var vorher = data.nodes.length + data.edges.length + data.zonen.length;
    snapshot();
    data.nodes = data.nodes.filter(function (n) { return n.id !== id; });
    data.zonen = data.zonen.filter(function (z) { return z.id !== id; });
    data.edges = data.edges.filter(function (e) {
      return e.id !== id && e.from !== id && e.to !== id;
    });
    var nachher = data.nodes.length + data.edges.length + data.zonen.length;
    if (vorher === nachher) { undoStack.pop(); return false; }
    changed('alles');
    return true;
  }

  /* ---------- Zonen-Zuordnung (geometrisch) ---------- */

  function zoneVon(n) {
    var treffer = null;
    var d = def(n);
    var cx = n.x + (d.w || 150) / 2, cy = n.y + (d.h || 78) / 2;
    data.zonen.forEach(function (z) {
      if (cx >= z.x && cx <= z.x + z.w && cy >= z.y && cy <= z.y + z.h) {
        /* bei Überlappung die kleinere (innere) Zone nehmen */
        if (!treffer || (z.w * z.h) < (treffer.w * treffer.h)) treffer = z;
      }
    });
    return treffer;
  }
  function zonetypVon(n) {
    var z = zoneVon(n);
    return z ? (AUDIT.data.bausteinMap[z.typ] || {}).zonetyp : null;
  }
  function knotenInZone(z) {
    return data.nodes.filter(function (n) { return zoneVon(n) === z; });
  }

  /* ---------- Schutzbedarf: Vererbung ---------- */

  var ZIELE = ['v', 'i', 'a'];

  /* Liefert für jedes System ein Ergebnisobjekt:
     { v:'hoch', i:'normal', a:'hoch',
       grund: { v:'maximum', a:'kumulation' },
       apps: [...], hinweise: [...] }                            */
  function vererbung() {
    var out = {};
    data.nodes.forEach(function (s) {
      if (kategorie(s) !== 'system') return;
      var apps = appsOf(s.id);
      var erg = { apps: apps, hinweise: [], grund: {}, v: null, i: null, a: null };

      if (!apps.length) { out[s.id] = erg; return; }

      ZIELE.forEach(function (z) {
        var best = 0, bestApp = null, reduziert = false;
        apps.forEach(function (a) {
          var w = U.stufeWert((a.schutzbedarf || {})[z] || 'normal');
          /* Verteilungseffekt: nur bei Verfügbarkeit und nur wenn die
             Anwendung tatsächlich auf mehreren Systemen läuft */
          if (z === 'a' && hostsOf(a.id).length > 1 && w > 1) { w = w - 1; reduziert = true; }
          if (w > best) { best = w; bestApp = a; }
        });
        erg[z] = U.wertStufe(best);
        erg.grund[z] = 'maximum';
        if (reduziert) {
          erg.grund[z] = 'verteilung';
          if (erg.hinweise.indexOf('verteilung') < 0) erg.hinweise.push('verteilung');
        }
        /* Kumulationseffekt: viele kleine Anwendungen summieren sich */
        if (apps.length >= 3 && best === 1) {
          erg[z] = 'hoch';
          erg.grund[z] = 'kumulation';
          if (erg.hinweise.indexOf('kumulation') < 0) erg.hinweise.push('kumulation');
        }
        erg['quelle_' + z] = bestApp ? bestApp.name : null;
      });
      out[s.id] = erg;
    });
    return out;
  }

  /* Effektiver Schutzbedarf eines Knotens (für Anzeige/Angriff) */
  function schutzbedarfVon(n, vererbt) {
    if (!n) return null;
    if (kategorie(n) === 'anwendung') return n.schutzbedarf || { v: 'normal', i: 'normal', a: 'normal' };
    if (kategorie(n) === 'system') {
      var e = (vererbt || vererbung())[n.id];
      if (e && e.v) return { v: e.v, i: e.i, a: e.a };
      return null;
    }
    return null;
  }

  /* höchste Stufe im ganzen Unternehmen (für Dashboard) */
  function maxStufe() {
    var m = 0;
    data.nodes.forEach(function (n) {
      if (kategorie(n) !== 'anwendung') return;
      ZIELE.forEach(function (z) {
        m = Math.max(m, U.stufeWert((n.schutzbedarf || {})[z] || 'normal'));
      });
    });
    return m;
  }

  /* ---------- Zustand der Schutzziele (Station 2 / Ernstfall) ----------
     1 = unversehrt, 0 = vollständig verletzt. Wird durch Angriffe
     gesenkt und von heilen() zurückgesetzt.                          */

  function zustandVon(n) {
    if (!n) return null;
    var k = kategorie(n);
    if (k !== 'system' && k !== 'anwendung') return null;
    return n.zustand || { v: 1, i: 1, a: 1 };
  }

  function schaden(id, s) {
    var n = node(id);
    if (!n) return;
    n.zustand = n.zustand || { v: 1, i: 1, a: 1 };
    ZIELE.forEach(function (z) {
      if (!s[z]) return;
      n.zustand[z] = Math.max(0, Math.round((n.zustand[z] - s[z]) * 100) / 100);
    });
  }

  /* ---------- Maßnahmen ---------- */

  function hatMassnahme(n, key) {
    return !!(n && n.massnahmen && n.massnahmen.indexOf(key) >= 0);
  }
  function setzeMassnahme(id, key, an) {
    var n = node(id) || zone(id);
    if (!n) return false;
    n.massnahmen = n.massnahmen || [];
    var i = n.massnahmen.indexOf(key);
    if (an && i < 0) { snapshot(); n.massnahmen.push(key); changed('massnahmen'); return true; }
    if (!an && i >= 0) { snapshot(); n.massnahmen.splice(i, 1); changed('massnahmen'); return true; }
    return false;
  }
  /* Maßnahme irgendwo in der Firma vorhanden? (für Ernstfall-Auswertung) */
  function massnahmeIrgendwo(key) {
    var alle = data.nodes.concat(data.zonen);
    return alle.some(function (n) { return hatMassnahme(n, key); });
  }

  /* ---------- Laden / Speichern ---------- */

  function serialisieren() { return JSON.parse(JSON.stringify(data)); }

  function laden(obj, stumm) {
    if (!obj) return;
    snapshot();
    data = {
      name: obj.name || 'Firma',
      nodes: (obj.nodes || []).map(function (n) {
        var d = AUDIT.data.bausteinMap[n.typ] || {};
        return {
          id: n.id || U.id('n'), typ: n.typ, x: n.x, y: n.y,
          name: n.name || d.label || n.typ,
          schutzbedarf: n.schutzbedarf ||
            (d.kategorie === 'anwendung' ? { v: 'normal', i: 'normal', a: 'normal' } : undefined),
          props: n.props || {},
          massnahmen: n.massnahmen || [],
          infektion: n.infektion || null,
          zustand: n.zustand || undefined
        };
      }),
      edges: (obj.edges || []).map(function (e) {
        return {
          id: e.id || U.id('e'), from: e.from, to: e.to, art: e.art || 'netz',
          daten: e.daten || [], zweck: e.zweck || '',
          rechtsgrundlage: e.rechtsgrundlage || '',
          verschluesselt: !!e.verschluesselt
        };
      }),
      zonen: (obj.zonen || []).map(function (z) {
        var d = AUDIT.data.bausteinMap[z.typ] || {};
        return {
          id: z.id || U.id('z'), typ: z.typ, name: z.name || d.label,
          x: z.x, y: z.y, w: z.w || d.w || 320, h: z.h || d.h || 200,
          massnahmen: z.massnahmen || []
        };
      })
    };
    if (!stumm) changed('alles');
  }

  /* welche: 'klein' (Standard) oder 'gross' */
  function ladeVorlage(welche) {
    var v = (welche === 'gross') ? AUDIT.data.vorlage : AUDIT.data.vorlageKlein;
    laden(v);
    U.toast('<b>' + v.name + '</b> geladen.', 'ok');
  }

  function neu() {
    snapshot();
    data = leer('Eigene Firma');
    changed('alles');
  }

  /* Alle Infektionen/Simulationsspuren entfernen */
  function heilen() {
    var geaendert = false;
    data.nodes.forEach(function (n) {
      if (n.infektion) { n.infektion = null; geaendert = true; }
      if (n.zustand) { delete n.zustand; geaendert = true; }
      if (n._gesperrt) { delete n._gesperrt; geaendert = true; }
    });
    data.edges.forEach(function (e) {
      if (e._infiziert) { delete e._infiziert; geaendert = true; }
    });
    if (geaendert) changed('alles');
    return geaendert;
  }

  return {
    get data() { return data; },
    leer: leer,
    onChange: onChange, changed: changed,
    snapshot: snapshot, undo: undo, kannUndo: kannUndo,
    node: node, zone: zone, edge: edge, def: def, kategorie: kategorie,
    edgesOf: edgesOf, nachbarn: nachbarn, hostsOf: hostsOf, appsOf: appsOf,
    neuerKnoten: neuerKnoten, neueZone: neueZone, neueKante: neueKante,
    kantenArt: kantenArt, loesche: loesche,
    zoneVon: zoneVon, zonetypVon: zonetypVon, knotenInZone: knotenInZone,
    vererbung: vererbung, schutzbedarfVon: schutzbedarfVon, maxStufe: maxStufe,
    zustandVon: zustandVon, schaden: schaden,
    hatMassnahme: hatMassnahme, setzeMassnahme: setzeMassnahme,
    massnahmeIrgendwo: massnahmeIrgendwo,
    serialisieren: serialisieren, laden: laden, ladeVorlage: ladeVorlage,
    neu: neu, heilen: heilen,
    ZIELE: ZIELE
  };
})();
