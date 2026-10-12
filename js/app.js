/* ===========================================================
   AUDIT – js/app.js
   Navigation: Kontaktliste → Gesprächsliste → Gespräch.
   Hält den Fortschritt fest und baut die Kopfzeile.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.app = (function () {
  'use strict';
  var U = AUDIT.util;

  var seite, kopf, kopfName, kopfRolle, kopfZurueck;
  var ansicht = 'liste';

  /* ---------- Fortschritt ---------- */

  function erledigte() { return AUDIT.storage.get('erledigt', {}); }
  function istErledigt(id) { return !!erledigte()[id]; }
  function merkeErledigt(id) {
    var e = erledigte();
    e[id] = true;
    AUDIT.storage.set('erledigt', e);
  }

  function dialogeVon(kontaktKey) {
    return AUDIT.data.dialoge.filter(function (d) { return d.kontakt === kontaktKey; });
  }

  /* ---------- Kopfzeile ---------- */

  function setzeKopf(name, rolle, zurueckFn) {
    kopfName.innerHTML = name;
    kopfRolle.textContent = rolle || '';
    kopf.classList.toggle('has-back', !!zurueckFn);
    kopfZurueck.onclick = zurueckFn || null;
  }

  /* ---------- Ansicht: Kontaktliste ---------- */

  function zeigeListe() {
    ansicht = 'liste';
    setzeKopf('<b>AUDIT</b>', 'Interaktive Lernplattform', null);
    U.clear(seite);

    var gesamt = AUDIT.data.dialoge.length;
    var fertig = AUDIT.data.dialoge.filter(function (d) { return istErledigt(d.id); }).length;

    seite.appendChild(U.el('h1', { text: 'Deine Kollegen schreiben dir' }));
    seite.appendChild(U.el('p', { class: 'lead',
      text: 'Du bist neu bei der Rampe 7 Logistik GmbH. Wähle jemanden aus – ihr unterhaltet euch, ' +
            'du entscheidest, und du bekommst sofort die Begründung dazu.' }));

    AUDIT.data.kontakte.forEach(function (k) {
      var dial = dialogeVon(k.key);
      var fert = dial.filter(function (d) { return istErledigt(d.id); }).length;
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
      text: fertig + ' von ' + gesamt + ' Gesprächen geführt.' +
            (AUDIT.storage.verfuegbar ? '' : ' (Dieser Browser speichert nichts – ' +
             'der Fortschritt gilt nur, solange die Seite offen bleibt.)') }));

    /* Fortschritt verwerfen. Mit Rueckfrage, weil es nicht
       rueckholbar ist. */
    var fortschrittDa = fertig > 0 || AUDIT.spickzettel.alle().length > 0;
    seite.appendChild(U.el('button', {
      class: 'btn btn--danger btn--sm',
      text: '↺ Fortschritt zurücksetzen',
      disabled: fortschrittDa ? null : 'disabled',
      title: fortschrittDa ? 'Gespräche und Spickzettel löschen' : 'Es ist noch nichts gespeichert',
      onclick: function () { if (fortschrittDa) fortschrittLoeschenFragen(); }
    }));
  }

  /* ---------- Fortschritt zurücksetzen ---------- */

  function fortschrittLoeschenFragen() {
    var fertig = AUDIT.data.dialoge.filter(function (d) { return istErledigt(d.id); }).length;
    var saetze = AUDIT.spickzettel.alle().length;

    U.modal('Fortschritt wirklich löschen?',
      '<p>Gelöscht werden:</p>' +
      '<ul>' +
      '<li><b>' + fertig + '</b> als geführt markierte ' + (fertig === 1 ? 'Gespräch' : 'Gespräche') + '</li>' +
      '<li><b>' + saetze + '</b> gesammelte ' + (saetze === 1 ? 'Merksatz' : 'Merksätze') + ' im Spickzettel</li>' +
      '</ul>' +
      '<p class="sub">Das lässt sich nicht rückgängig machen. Die Gespräche selbst ' +
      'bleiben natürlich erhalten – du fängst nur wieder bei null an.</p>',
      [
        { label: 'Abbrechen' },
        {
          label: 'Ja, alles löschen', danger: true,
          onClick: function (close) {
            AUDIT.storage.alleLoeschen();
            close();
            zeige('liste');
            U.toast('Fortschritt zurückgesetzt. Viel Erfolg beim zweiten Durchgang.', 'ok');
          }
        }
      ]);
  }

  /* ---------- Ansicht: Gespräche eines Kontakts ---------- */

  function zeigeKontakt(key) {
    ansicht = 'kontakt';
    var k = AUDIT.data.kontakteMap[key];
    if (!k) { zeige('liste'); return; }   /* unbekannter Kontakt in der Adresse */
    setzeKopf(k.bild + ' ' + U.esc(k.name), k.rolle, function () { zeige('liste'); });
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
    if (!d) { zeige('liste'); return; }   /* unbekanntes Gespräch in der Adresse */
    var k = AUDIT.data.kontakteMap[d.kontakt] || {};
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

  /* ---------- Ansicht: Spickzettel ---------- */

  function zeigeZettel() {
    ansicht = 'zettel';
    setzeKopf('📌 Spickzettel', 'deine gesammelten Merksätze', function () { zeige('liste'); });
    U.clear(seite);
    AUDIT.spickzettel.zeichne(seite);
  }

  /* ---------- Adresszeile und Zurück-Taste ----------
     Die Ansicht steht in der Adresszeile (#/k/sabrina, #/c/sab-01).
     Dadurch funktioniert die Zurück-Taste des Browsers – auf dem
     Handy die natürliche Geste – und ein Gespräch lässt sich direkt
     verlinken. Ein Hash aus einer früheren Fassung (etwa #angriff
     aus der alten Stationsansicht) wird beim Start entfernt. */

  function hashFuer(was, param) {
    if (was === 'kontakt') return '#/k/' + param;
    if (was === 'chat') return '#/c/' + param;
    if (was === 'zettel') return '#/zettel';
    return '#/';
  }

  /* Liest die Adresszeile. null = unbekannte Route. */
  function routeLesen() {
    var h = (window.location.hash || '').replace(/^#\/?/, '');
    var teile = h.split('/').filter(Boolean);
    if (!teile.length) return { was: 'liste' };
    if (teile[0] === 'k' && teile[1]) return { was: 'kontakt', param: teile[1] };
    if (teile[0] === 'c' && teile[1]) return { was: 'chat', param: teile[1] };
    if (teile[0] === 'zettel') return { was: 'zettel' };
    return null;
  }

  /* Nur zeichnen, ohne die Adresszeile anzufassen */
  function zeichne(was, param) {
    window.scrollTo(0, 0);
    if (was === 'kontakt') zeigeKontakt(param);
    else if (was === 'chat') zeigeChat(param);
    else if (was === 'zettel') zeigeZettel();
    else zeigeListe();
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

  /* Zurück-Taste des Browsers und von Hand geänderte Adresse */
  function aufHashwechsel() {
    if (selbstGesetzt) { selbstGesetzt = false; return; }
    var r = routeLesen();
    if (!r) { zeige('liste'); return; }
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
      if (ansicht === 'zettel') zeige('liste'); else zeige('zettel');
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
      zeigeListe();
    } else if (start.was === 'chat' &&
               !AUDIT.data.dialoge.filter(function (d) { return d.id === start.param; })[0]) {
      zeige('liste');
    } else if (start.was === 'kontakt' && !AUDIT.data.kontakteMap[start.param]) {
      zeige('liste');
    } else {
      zeichne(start.was, start.param);
    }

    console.info('AUDIT bereit.', AUDIT.data.dialoge.length, 'Gespräche,',
      AUDIT.data.lexikon.length, 'Lexikoneinträge.');
  }

  return { init: init, zeige: zeige, istErledigt: istErledigt };
})();

document.addEventListener('DOMContentLoaded', function () { AUDIT.app.init(); });
