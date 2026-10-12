/* ===========================================================
   AUDIT – js/app.js
   Navigation: Themenübersicht → Kontaktliste → Gesprächsliste
   → Gespräch. Hält den Fortschritt fest und baut die Kopfzeile.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.app = (function () {
  'use strict';
  var U = AUDIT.util;

  var seite, kopf, kopfName, kopfRolle, kopfZurueck;
  var ansicht = 'liste';

  /* Welches Themengebiet ist gerade offen? Lexikon und Spickzettel
     zeigen nur, was dazugehoert. Wird beim Zeichnen jeder Ansicht
     gesetzt, die zu einem Gebiet gehoert, und bleibt danach stehen –
     so weiss auch der Spickzettel, aus welchem Gebiet er kommt. */
  var gebiet = null;

  function setzeGebiet(key) {
    gebiet = key || null;
    if (AUDIT.lexikon && AUDIT.lexikon.setzeGebiet) AUDIT.lexikon.setzeGebiet(gebiet);
  }

  /* ---------- Fortschritt ---------- */

  function erledigte() { return AUDIT.storage.get('erledigt', {}); }
  function istErledigt(id) { return !!erledigte()[id]; }
  function merkeErledigt(id) {
    var e = erledigte();
    e[id] = true;
    AUDIT.storage.set('erledigt', e);
  }

  /* Streicht die uebergebenen Gespraeche aus dem Fortschritt. Alle
     anderen bleiben stehen – zurueckgesetzt wird immer nur ein
     Themengebiet. */
  function vergissErledigt(ids) {
    var e = erledigte();
    ids.forEach(function (id) { delete e[id]; });
    AUDIT.storage.set('erledigt', e);
  }

  function dialogeVon(kontaktKey) {
    return AUDIT.data.dialoge.filter(function (d) { return d.kontakt === kontaktKey; });
  }

  /* ---------- Themengebiete ---------- */

  /* Die Kontakte eines Gebiets, in der Reihenfolge aus data/themen.js.
     Unbekannte Schlüssel werden still übersprungen. */
  function kontakteVon(themaKey) {
    var t = AUDIT.data.themenMap[themaKey];
    if (!t) return [];
    return (t.kontakte || [])
      .map(function (k) { return AUDIT.data.kontakteMap[k]; })
      .filter(Boolean);
  }

  function dialogeVonThema(themaKey) {
    return kontakteVon(themaKey).reduce(function (alle, k) {
      return alle.concat(dialogeVon(k.key));
    }, []);
  }

  /* Zu welchem Gebiet gehört ein Kontakt? Fällt auf das erste Gebiet
     zurück, damit die Zurück-Taste auch bei einem Kontakt ohne Zuordnung
     irgendwo landet. */
  function themaVonKontakt(kontaktKey) {
    var key = AUDIT.data.themaVonKontakt[kontaktKey];
    if (key && AUDIT.data.themenMap[key]) return key;
    return (AUDIT.data.themen[0] || {}).key || null;
  }

  function zaehle(dialoge) {
    return dialoge.filter(function (d) { return istErledigt(d.id); }).length;
  }

  /* ---------- Kopfzeile ---------- */

  /* ohneWerkzeug blendet Spickzettel und Lexikon aus. Beides gehoert zu
     einem Themengebiet, auf der Uebersicht darueber hat es nichts zu
     suchen. */
  function setzeKopf(name, rolle, zurueckFn, ohneWerkzeug) {
    kopfName.innerHTML = name;
    kopfRolle.textContent = rolle || '';
    kopf.classList.toggle('has-back', !!zurueckFn);
    kopf.classList.toggle('ohne-werkzeug', !!ohneWerkzeug);
    kopfZurueck.onclick = zurueckFn || null;
  }

  /* ---------- Ansicht: Themenübersicht ---------- */

  function zeigeThemen() {
    ansicht = 'themen';
    setzeGebiet(null);
    setzeKopf('<b>AUDIT</b>', 'Interaktive Lernplattform', null, true);
    U.clear(seite);

    var gesamt = AUDIT.data.dialoge.length;
    var fertig = zaehle(AUDIT.data.dialoge);

    seite.appendChild(U.el('h1', { text: 'Wähle ein Themengebiet' }));
    seite.appendChild(U.el('p', { class: 'lead',
      text: 'Jedes Gebiet hat eigene Kolleginnen und Kollegen, die dir schreiben. ' +
            'Du entscheidest, und du bekommst sofort die Begründung dazu.' }));

    AUDIT.data.themen.forEach(function (t) {
      var kontakte = kontakteVon(t.key);
      var dial = dialogeVonThema(t.key);
      var fert = zaehle(dial);
      var quote = dial.length ? fert / dial.length : 0;

      var karte = U.el('button', {
        class: 'kontakt kontakt--thema' + (dial.length && fert === dial.length ? ' is-fertig' : ''),
        onclick: function () { if (dial.length) zeige('thema', t.key); }
      });
      karte.appendChild(U.el('div', { class: 'kontakt__bild', text: t.bild }));

      var mitte = U.el('div', { class: 'kontakt__mitte' });
      mitte.appendChild(U.el('div', { class: 'kontakt__name', text: t.name }));
      mitte.appendChild(U.el('div', { class: 'kontakt__rolle', text: t.kurz }));
      mitte.appendChild(U.el('div', { class: 'kontakt__themen',
        text: dial.length
          ? kontakte.length + (kontakte.length === 1 ? ' Gesprächspartner' : ' Gesprächspartner') +
            ' · ' + dial.length + (dial.length === 1 ? ' Gespräch' : ' Gespräche')
          : 'Die Gespräche entstehen gerade.' }));
      karte.appendChild(mitte);

      var rechts = U.el('div', { class: 'kontakt__rechts' });
      rechts.appendChild(U.el('div', { class: 'kontakt__zahl',
        text: dial.length ? fert + ' / ' + dial.length : 'bald' }));
      if (dial.length) {
        rechts.appendChild(U.el('div', { class: 'bar kontakt__bar' },
          U.el('div', { class: 'bar__fill', style: { width: (quote * 100) + '%' } })));
      }
      karte.appendChild(rechts);

      if (!dial.length) karte.setAttribute('disabled', 'disabled');
      seite.appendChild(karte);
    });

    seite.appendChild(U.el('p', { class: 'sub', style: { marginTop: '16px' },
      text: fertig + ' von ' + gesamt + ' Gesprächen geführt.' +
            (AUDIT.storage.verfuegbar ? '' : ' (Dieser Browser speichert nichts – ' +
             'der Fortschritt gilt nur, solange die Seite offen bleibt.)') }));
  }

  /* ---------- Ansicht: Kontakte eines Themengebiets ---------- */

  function zeigeThema(key) {
    ansicht = 'thema';
    var t = AUDIT.data.themenMap[key];
    if (!t) { zeige('themen'); return; }   /* unbekanntes Gebiet in der Adresse */

    /* In der Kopfzeile steht das Gebiet ohne Emoji und, wenn vorhanden, in
       der Kurzfassung t.kopf: auf dem Handy bleiben neben Zurueck-Taste und
       den beiden Knoepfen nur rund 230 Pixel. Darunter der Stand statt der
       Kurzbeschreibung – die steht schon auf der Uebersichtskarte. */
    setzeGebiet(key);
    var dialThema = dialogeVonThema(key);
    setzeKopf(U.esc(t.kopf || t.name),
      zaehle(dialThema) + ' von ' + dialThema.length + ' Gesprächen',
      function () { zeige('themen'); });
    U.clear(seite);

    seite.appendChild(U.el('h1', { text: 'Deine Kollegen schreiben dir' }));
    if (t.vorstellung) seite.appendChild(U.el('p', { class: 'lead', text: t.vorstellung }));

    var kontakte = kontakteVon(key);
    kontakte.forEach(function (k) {
      var dial = dialogeVon(k.key);
      var fert = zaehle(dial);
      var quote = dial.length ? fert / dial.length : 0;

      var karte = U.el('button', {
        class: 'kontakt' + (dial.length && fert === dial.length ? ' is-fertig' : ''),
        onclick: function () { if (dial.length) zeige('kontakt', k.key); }
      });
      karte.appendChild(U.el('div', { class: 'kontakt__bild', text: k.bild }));

      var mitte = U.el('div', { class: 'kontakt__mitte' });
      mitte.appendChild(U.el('div', { class: 'kontakt__name', text: k.name }));
      mitte.appendChild(U.el('div', { class: 'kontakt__rolle', text: k.rolle }));
      mitte.appendChild(U.el('div', { class: 'kontakt__themen', text: k.themen }));
      karte.appendChild(mitte);

      var rechts = U.el('div', { class: 'kontakt__rechts' });
      rechts.appendChild(U.el('div', { class: 'kontakt__zahl',
        text: dial.length ? fert + ' / ' + dial.length : 'bald' }));
      if (dial.length) {
        rechts.appendChild(U.el('div', { class: 'bar kontakt__bar' },
          U.el('div', { class: 'bar__fill', style: { width: (quote * 100) + '%' } })));
      }
      karte.appendChild(rechts);

      if (!dial.length) karte.setAttribute('disabled', 'disabled');
      seite.appendChild(karte);
    });

    seite.appendChild(U.el('p', { class: 'sub', style: { marginTop: '16px' },
      text: zaehle(dialThema) + ' von ' + dialThema.length + ' Gesprächen in diesem Gebiet geführt.' +
            (AUDIT.storage.verfuegbar ? '' : ' (Dieser Browser speichert nichts – ' +
             'der Fortschritt gilt nur, solange die Seite offen bleibt.)') }));

    /* Fortschritt dieses Gebiets verwerfen. Mit Rueckfrage, weil es
       nicht rueckholbar ist. */
    var etwasDa = zaehle(dialThema) > 0 || AUDIT.spickzettel.alle(key).length > 0;
    seite.appendChild(U.el('button', {
      class: 'btn btn--danger btn--sm',
      text: '↺ Fortschritt zurücksetzen',
      disabled: etwasDa ? null : 'disabled',
      title: etwasDa ? 'Gespräche und Merksätze dieses Gebiets löschen'
                     : 'In diesem Gebiet ist noch nichts gespeichert',
      onclick: function () { if (etwasDa) fortschrittLoeschenFragen(key); }
    }));
  }

  /* ---------- Fortschritt eines Themengebiets zurücksetzen ---------- */

  function fortschrittLoeschenFragen(key) {
    var t = AUDIT.data.themenMap[key];
    if (!t) return;
    var dial = dialogeVonThema(key);
    var fertig = zaehle(dial);
    var saetze = AUDIT.spickzettel.alle(key).length;

    U.modal('Fortschritt zurücksetzen?',
      '<p>Aus <b>' + U.esc(t.name) + '</b> wird gelöscht:</p>' +
      '<ul>' +
      '<li><b>' + fertig + '</b> als geführt markierte ' + (fertig === 1 ? 'Gespräch' : 'Gespräche') + '</li>' +
      '<li><b>' + saetze + '</b> gesammelte ' + (saetze === 1 ? 'Merksatz' : 'Merksätze') + ' im Spickzettel</li>' +
      '</ul>' +
      '<p class="sub">Andere Themengebiete bleiben unberührt. Das lässt sich nicht ' +
      'rückgängig machen – die Gespräche selbst bleiben natürlich erhalten, du fängst ' +
      'in diesem Gebiet nur wieder bei null an.</p>',
      [
        { label: 'Abbrechen' },
        {
          label: 'Ja, zurücksetzen', danger: true,
          onClick: function (close) {
            vergissErledigt(dial.map(function (d) { return d.id; }));
            AUDIT.spickzettel.leeren(key);
            close();
            zeige('thema', key);
            U.toast('„' + U.esc(t.name) + '“ zurückgesetzt. Viel Erfolg beim zweiten Durchgang.', 'ok');
          }
        }
      ]);
  }

  /* ---------- Ansicht: Gespräche eines Kontakts ---------- */

  function zeigeKontakt(key) {
    ansicht = 'kontakt';
    var k = AUDIT.data.kontakteMap[key];
    if (!k) { zeige('themen'); return; }   /* unbekannter Kontakt in der Adresse */
    var thema = themaVonKontakt(key);
    setzeGebiet(thema);
    setzeKopf(k.bild + ' ' + U.esc(k.name), k.rolle, function () { zeige('thema', thema); });
    U.clear(seite);

    seite.appendChild(U.el('p', { class: 'lead', text: k.vorstellung }));

    var dial = dialogeVon(key);
    dial.forEach(function (d, nr) {
      var fertig = istErledigt(d.id);
      var zeile = U.el('button', {
        class: 'gespraech' + (fertig ? ' is-fertig' : ''),
        onclick: function () { zeige('chat', d.id); }
      });
      zeile.appendChild(U.el('div', { class: 'gespraech__nr', text: fertig ? '✓' : String(nr + 1) }));
      var mitte = U.el('div', { class: 'gespraech__mitte' });
      mitte.appendChild(U.el('div', { class: 'gespraech__titel', text: d.titel }));
      mitte.appendChild(U.el('div', { class: 'gespraech__meta',
        text: d.thema + ' · etwa ' + (d.dauer || 3) + ' Minuten' + (fertig ? ' · schon geführt' : '') }));
      zeile.appendChild(mitte);
      zeile.appendChild(U.el('div', { class: 'gespraech__meta', text: '›' }));
      seite.appendChild(zeile);
    });

    if (!dial.length) {
      seite.appendChild(U.el('div', { class: 'note', text: 'Hier gibt es noch keine Gespräche.' }));
    }
  }

  /* ---------- Ansicht: Gespräch ---------- */

  function zeigeChat(id) {
    ansicht = 'chat';
    var d = AUDIT.data.dialoge.filter(function (x) { return x.id === id; })[0];
    if (!d) { zeige('themen'); return; }   /* unbekanntes Gespräch in der Adresse */
    var k = AUDIT.data.kontakteMap[d.kontakt] || {};
    setzeGebiet(themaVonKontakt(d.kontakt));
    setzeKopf(k.bild + ' ' + U.esc(k.name), d.titel, function () { zeige('kontakt', d.kontakt); });
    U.clear(seite);

    AUDIT.chat.starte(d, seite, function (endeBox) {
      merkeErledigt(d.id);

      var dial = dialogeVon(d.kontakt);
      var pos = dial.map(function (x) { return x.id; }).indexOf(d.id);
      var naechste = dial[pos + 1];

      if (naechste) {
        endeBox.appendChild(U.el('button', {
          class: 'btn btn--primary', text: 'Nächstes Gespräch: ' + naechste.titel,
          onclick: function () { zeige('chat', naechste.id); }
        }));
      }
      endeBox.appendChild(U.el('button', {
        class: 'btn', text: 'Zurück zu ' + (k.name || 'den Gesprächen'),
        onclick: function () { zeige('kontakt', d.kontakt); }
      }));
      endeBox.appendChild(U.el('button', {
        class: 'btn btn--ghost', text: 'Noch einmal von vorn',
        onclick: function () { zeichne('chat', d.id); }
      }));
    });
  }

  /* ---------- Adresszeile und Zurück-Taste ----------
     Die Ansicht steht in der Adresszeile (#/t/sicherheit, #/k/sabrina,
     #/c/sab-01).
     Dadurch funktioniert die Zurück-Taste des Browsers – auf dem
     Handy die natürliche Geste – und ein Gespräch lässt sich direkt
     verlinken. Ein Hash aus einer früheren Fassung (etwa #angriff
     aus der alten Stationsansicht) wird beim Start entfernt. */

  function hashFuer(was, param) {
    if (was === 'thema') return '#/t/' + param;
    if (was === 'kontakt') return '#/k/' + param;
    if (was === 'chat') return '#/c/' + param;
    return '#/';
  }

  /* Liest die Adresszeile. null = unbekannte Route. */
  function routeLesen() {
    var h = (window.location.hash || '').replace(/^#\/?/, '');
    var teile = h.split('/').filter(Boolean);
    if (!teile.length) return { was: 'themen' };
    if (teile[0] === 't' && teile[1]) return { was: 'thema', param: teile[1] };
    if (teile[0] === 'k' && teile[1]) return { was: 'kontakt', param: teile[1] };
    if (teile[0] === 'c' && teile[1]) return { was: 'chat', param: teile[1] };
    /* Alte Lesezeichen auf den Spickzettel: Der ist heute ein Panel und
       keine eigene Ansicht mehr. Wir landen im Themengebiet und schlagen
       ihn dort auf. Ohne Angabe im ersten Gebiet. */
    if (teile[0] === 'zettel') {
      var k = (teile[1] && AUDIT.data.themenMap[teile[1]]) ? teile[1]
            : ((AUDIT.data.themen[0] || {}).key || null);
      return { was: 'thema', param: k, zettel: true };
    }
    return null;
  }

  /* Nur zeichnen, ohne die Adresszeile anzufassen.
     Das Lexikon wird bei jedem Wechsel geschlossen – auch beim Zurueck
     ueber die Browser-Taste. Sonst bliebe es ueber der neuen Ansicht
     stehen. Es muss vor dem Hochscrollen zu, weil es beim Schliessen
     die gemerkte Position wiederherstellt. */
  function zeichne(was, param) {
    if (AUDIT.lexikon && AUDIT.lexikon.zu) AUDIT.lexikon.zu();
    if (AUDIT.spickzettel && AUDIT.spickzettel.zu) AUDIT.spickzettel.zu();
    window.scrollTo(0, 0);
    if (was === 'thema') zeigeThema(param);
    else if (was === 'kontakt') zeigeKontakt(param);
    else if (was === 'chat') zeigeChat(param);
    else zeigeThemen();
  }

  var selbstGesetzt = false;

  /* ---------- Steuerung ---------- */

  function zeige(was, param) {
    var neuerHash = hashFuer(was, param);
    if (window.location.hash !== neuerHash) {
      selbstGesetzt = true;
      try { window.location.hash = neuerHash; }
      catch (e) { selbstGesetzt = false; }
    }
    zeichne(was, param);
  }

  /* Eine gelesene Route anzeigen. Trug sie das alte #/zettel, wird nach
     dem Zeichnen der Spickzettel aufgeschlagen. */
  function routeAnwenden(r) {
    zeige(r.was, r.param);
    if (r.zettel && AUDIT.spickzettel) AUDIT.spickzettel.auf(r.param);
  }

  /* Zurück-Taste des Browsers und von Hand geänderte Adresse */
  function aufHashwechsel() {
    if (selbstGesetzt) { selbstGesetzt = false; return; }
    var r = routeLesen();
    if (!r) { zeige('themen'); return; }
    if (r.zettel) { routeAnwenden(r); return; }
    zeichne(r.was, r.param);
  }

  function init() {
    seite = document.getElementById('seite');
    kopf = document.getElementById('kopf');
    kopfName = document.getElementById('kopfName');
    kopfRolle = document.getElementById('kopfRolle');
    kopfZurueck = document.getElementById('kopfZurueck');

    document.getElementById('btnLexikon').addEventListener('click', function () {
      AUDIT.lexikon.umschalten();
    });
    document.getElementById('btnZettel').addEventListener('click', function () {
      AUDIT.spickzettel.umschalten(gebiet);
    });

    /* Tastatur: 1–4 wählt eine Antwort */
    document.addEventListener('keydown', function (e) {
      if (ansicht !== 'chat') return;
      var n = parseInt(e.key, 10);
      if (!n || n < 1 || n > 9) return;
      var knoepfe = U.$$('.chat__antworten .antwort:not([disabled])');
      if (knoepfe[n - 1]) { e.preventDefault(); knoepfe[n - 1].click(); }
    });

    window.addEventListener('hashchange', aufHashwechsel);

    /* Startansicht aus der Adresszeile – unbekannte oder veraltete
       Hashes werden stillschweigend entfernt. */
    var start = routeLesen();
    if (!start) {
      try { history.replaceState(null, '', window.location.pathname + window.location.search); }
      catch (e) { window.location.hash = ''; }
      zeigeThemen();
    } else if (start.was === 'chat' &&
               !AUDIT.data.dialoge.filter(function (d) { return d.id === start.param; })[0]) {
      zeige('themen');
    } else if (start.was === 'kontakt' && !AUDIT.data.kontakteMap[start.param]) {
      zeige('themen');
    } else if (start.was === 'thema' && !AUDIT.data.themenMap[start.param]) {
      zeige('themen');
    } else if (start.zettel) {
      routeAnwenden(start);
    } else {
      zeichne(start.was, start.param);
    }

    console.info('AUDIT bereit.', AUDIT.data.themen.length, 'Themengebiete,',
      AUDIT.data.dialoge.length, 'Gespräche,',
      AUDIT.data.lexikon.length, 'Lexikoneinträge.');
  }

  return { init: init, zeige: zeige, istErledigt: istErledigt };
})();

document.addEventListener('DOMContentLoaded', function () { AUDIT.app.init(); });
