/* ===========================================================
   AUDIT – js/pruefung.js
   Prüfregeln für Datenflüsse (Station 3) und die
   Gesamtbewertung der Firma (Compliance-Ampel, Ernstfall).
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.pruefung = (function () {
  'use strict';
  var F = AUDIT.firma;

  /* Enthält der Datenfluss besondere Kategorien nach Art. 9? */
  function hatArt9(edge) {
    return (edge.daten || []).some(function (k) {
      var d = AUDIT.data.datenartenMap[k];
      return d && d.art9;
    });
  }

  function istPersonenbezogen(edge) {
    return (edge.daten || []).length > 0;
  }

  /* Prüft einen einzelnen Datenfluss.
     Liefert [{regel, text, schwere, norm}] */
  function pruefeKante(e) {
    var befunde = [];
    var R = AUDIT.data.pruefregelnMap;
    var ziel = F.node(e.to), quelle = F.node(e.from);
    if (!ziel || !quelle) return befunde;

    function add(key, zusatz) {
      var r = R[key];
      befunde.push({
        regel: key, titel: r.titel, norm: r.norm, schwere: r.schwere,
        text: r.text, zusatz: zusatz || ''
      });
    }

    if (!istPersonenbezogen(e)) return befunde;   /* keine pb Daten -> nichts zu prüfen */

    if (!e.rechtsgrundlage) add('rechtsgrundlage');
    if (!e.zweck) add('zweck');

    if (hatArt9(e) && !e.art9ausnahme) {
      var liste = (e.daten || []).filter(function (k) {
        var d = AUDIT.data.datenartenMap[k];
        return d && d.art9;
      }).map(function (k) { return AUDIT.data.datenartenMap[k].name; });
      add('art9', 'Betroffen: ' + liste.join(', '));
    }

    var props = ziel.props || {};
    if (props.rolle === 'auftragsverarbeiter' && !props.avvertrag) {
      add('avv', 'Empfänger: ' + ziel.name);
    }

    var standort = props.standort || F.zonetypVon(ziel);
    if (standort === 'drittland' && (!props.garantie || props.garantie === 'keine')) {
      add('drittland', 'Empfänger: ' + ziel.name);
    }

    if (!e.verschluesselt && !props.verschluesselt) {
      add('toms', 'Der Datenfluss zu ' + ziel.name + ' ist nicht verschlüsselt.');
    }

    /* Datenminimierung: passen die Datenarten zum Zweck? */
    if (e.zweck) {
      var zw = AUDIT.data.zweckeMap[e.zweck];
      if (zw) {
        var zuviel = (e.daten || []).filter(function (k) { return zw.noetig.indexOf(k) < 0; });
        if (zuviel.length) {
          add('minim', 'Nicht erforderlich für „' + zw.name + '“: ' +
            zuviel.map(function (k) { return (AUDIT.data.datenartenMap[k] || {}).name || k; }).join(', '));
        }
      }
    }

    return befunde;
  }

  /* Prüft die ganze Firma */
  function audit() {
    var fluesse = F.data.edges.filter(function (e) { return e.art === 'datenfluss'; });
    var proKante = {}, alle = [];
    fluesse.forEach(function (e) {
      var b = pruefeKante(e);
      proKante[e.id] = b;
      b.forEach(function (x) { alle.push({ edge: e, befund: x }); });
    });
    var geprueft = fluesse.filter(istPersonenbezogen);
    var sauber = geprueft.filter(function (e) { return !proKante[e.id].length; });
    return {
      fluesse: fluesse,
      geprueft: geprueft,
      proKante: proKante,
      befunde: alle,
      sauber: sauber,
      quote: geprueft.length ? sauber.length / geprueft.length : 0
    };
  }

  /* Bewertung der gesamten Firma für die Compliance-Ampel (Station 4) */
  function ampel() {
    var erg = audit();
    var bereiche = [];

    /* 1. Schutzbedarf festgestellt? */
    var apps = F.data.nodes.filter(function (n) { return F.kategorie(n) === 'anwendung'; });
    var bewertet = apps.filter(function (n) { return n.props && n.props.bewertet; });
    bereiche.push({
      key: 'schutzbedarf', name: 'Schutzbedarf festgestellt',
      wert: apps.length ? bewertet.length / apps.length : 0,
      hinweis: apps.length
        ? bewertet.length + ' von ' + apps.length + ' Anwendungen bewertet'
        : 'Keine Anwendungen auf der Fläche',
      station: 'werkstatt'
    });

    /* 2. Technische Schutzmaßnahmen */
    var wichtige = ['virenscanner', 'updates', 'firewall', 'backup', 'segmentierung', 'rechte', 'verschluesselung'];
    var gesetzt = wichtige.filter(function (k) { return F.massnahmeIrgendwo(k); });
    bereiche.push({
      key: 'toms', name: 'Technische Maßnahmen (Art. 32)',
      wert: gesetzt.length / wichtige.length,
      hinweis: gesetzt.length + ' von ' + wichtige.length + ' Kernmaßnahmen gesetzt' +
        (gesetzt.length < wichtige.length ? ' – es fehlen: ' +
          wichtige.filter(function (k) { return gesetzt.indexOf(k) < 0; })
            .map(function (k) { return (AUDIT.data.massnahmenMap[k] || {}).name; }).join(', ') : ''),
      station: 'angriff'
    });

    /* 3. Organisatorische Maßnahmen */
    var org = ['schulung', 'meldeweg', 'berechtigung', 'protokollierung'];
    var orgGesetzt = org.filter(function (k) { return F.massnahmeIrgendwo(k); });
    bereiche.push({
      key: 'org', name: 'Organisatorische Maßnahmen',
      wert: orgGesetzt.length / org.length,
      hinweis: orgGesetzt.length + ' von ' + org.length + ' gesetzt (Schulung, Meldeweg, Berechtigungen, Protokollierung)',
      station: 'angriff'
    });

    /* 4. Zutrittsschutz */
    var zutritt = F.data.zonen.some(function (z) {
      return (z.massnahmen || []).some(function (k) {
        return (AUDIT.data.massnahmenMap[k] || {}).kontrolle === 'zutritt';
      });
    });
    bereiche.push({
      key: 'zutritt', name: 'Zutrittskontrolle',
      wert: zutritt ? 1 : 0,
      hinweis: zutritt ? 'Mindestens ein Raum ist geschützt' : 'Kein Raum hat Zutrittsschutz',
      station: 'angriff'
    });

    /* 5. Datenflüsse rechtmäßig */
    bereiche.push({
      key: 'dsgvo', name: 'Datenflüsse nach DSGVO',
      wert: erg.quote,
      hinweis: erg.geprueft.length
        ? erg.sauber.length + ' von ' + erg.geprueft.length + ' Datenflüssen ohne Beanstandung, ' +
          erg.befunde.length + ' Befund(e)'
        : 'Noch keine Datenflüsse mit personenbezogenen Daten festgelegt',
      station: 'daten'
    });

    /* 6. Auftragsverarbeitung */
    var extern = F.data.nodes.filter(function (n) { return (n.props || {}).rolle === 'auftragsverarbeiter'; });
    var mitAVV = extern.filter(function (n) { return n.props.avvertrag; });
    bereiche.push({
      key: 'avv', name: 'Auftragsverarbeitung (Art. 28)',
      wert: extern.length ? mitAVV.length / extern.length : 1,
      hinweis: extern.length
        ? mitAVV.length + ' von ' + extern.length + ' Dienstleistern mit AV-Vertrag'
        : 'Keine externen Auftragsverarbeiter eingetragen',
      station: 'daten'
    });

    /* 7. Backup / Verfügbarkeit */
    var backupOk = F.data.nodes.some(function (n) {
      return n.typ === 'backup' && ((n.props && n.props.offline) || F.hatMassnahme(n, 'backup'));
    });
    bereiche.push({
      key: 'backup', name: 'Backup getrennt aufbewahrt',
      wert: backupOk ? 1 : 0,
      hinweis: backupOk ? 'Es gibt ein getrenntes Backup' : 'Kein getrenntes (offline) Backup vorhanden',
      station: 'angriff'
    });

    /* 8. Rollen benannt */
    var rollenGesetzt = AUDIT.storage.get('rollen.benannt', {});
    var rollenAnzahl = ['dsb', 'isb', 'compliance'].filter(function (k) { return rollenGesetzt[k]; }).length;
    bereiche.push({
      key: 'rollen', name: 'Rollen benannt (DSB, ISB, Compliance)',
      wert: rollenAnzahl / 3,
      hinweis: rollenAnzahl + ' von 3 Rollen benannt',
      station: 'rollen'
    });

    var gesamt = bereiche.reduce(function (s, b) { return s + b.wert; }, 0) / bereiche.length;
    return { bereiche: bereiche, gesamt: gesamt, audit: erg };
  }

  return { pruefeKante: pruefeKante, audit: audit, ampel: ampel, hatArt9: hatArt9 };
})();
