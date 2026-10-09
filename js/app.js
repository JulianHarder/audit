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
    setzeKopf('<b>AUDIT</b>', 'IT-Sicherheit & Datenschutz lernen', null);
    U.clear(seite);

    var gesamt = AUDIT.data.dialoge.length;
    var fertig = AUDIT.data.dialoge.filter(function (d) { return istErledigt(d.id); }).length;

    seite.appendChild(U.el('h1', { text: 'Deine Kollegen schreiben dir' }));
    seite.appendChild(U.el('p', { class: 'lead',
      text: 'Du bist neu bei der Lippe Logistik GmbH. Wähle jemanden aus – ihr unterhaltet euch, ' +
            'du entscheidest, und du bekommst sofort die Begründung dazu.' }));

    AUDIT.data.kontakte.forEach(function (k) {
      var dial = dialogeVon(k.key);
      var fert = dial.filter(function (d) { return istErledigt(d.id); }).length;
      var quote = dial.length ? fert / dial.length : 0;

      var karte = U.el('button', {
        class: 'kontakt' + (dial.length && fert === dial.length ? ' is-fertig' : ''),
        onclick: function () { if (dial.length) zeigeKontakt(k.key); }
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
      text: fertig + ' von ' + gesamt + ' Gesprächen geführt.' }));
  }

  /* ---------- Ansicht: Gespräche eines Kontakts ---------- */

  function zeigeKontakt(key) {
    ansicht = 'kontakt';
    var k = AUDIT.data.kontakteMap[key];
    if (!k) { zeigeListe(); return; }
    setzeKopf(k.bild + ' ' + U.esc(k.name), k.rolle, zeigeListe);
    U.clear(seite);

    seite.appendChild(U.el('p', { class: 'lead', text: k.vorstellung }));

    var dial = dialogeVon(key);
    dial.forEach(function (d, nr) {
      var fertig = istErledigt(d.id);
      var zeile = U.el('button', {
        class: 'gespraech' + (fertig ? ' is-fertig' : ''),
        onclick: function () { zeigeChat(d.id); }
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
    if (!d) { zeigeListe(); return; }
    var k = AUDIT.data.kontakteMap[d.kontakt] || {};
    setzeKopf(k.bild + ' ' + U.esc(k.name), d.titel, function () { zeigeKontakt(d.kontakt); });
    U.clear(seite);

    AUDIT.chat.starte(d, seite, function (endeBox) {
      merkeErledigt(d.id);

      var dial = dialogeVon(d.kontakt);
      var pos = dial.map(function (x) { return x.id; }).indexOf(d.id);
      var naechste = dial[pos + 1];

      if (naechste) {
        endeBox.appendChild(U.el('button', {
          class: 'btn btn--primary', text: 'Nächstes Gespräch: ' + naechste.titel,
          onclick: function () { zeigeChat(naechste.id); }
        }));
      }
      endeBox.appendChild(U.el('button', {
        class: 'btn', text: 'Zurück zu ' + (k.name || 'den Gesprächen'),
        onclick: function () { zeigeKontakt(d.kontakt); }
      }));
      endeBox.appendChild(U.el('button', {
        class: 'btn btn--ghost', text: 'Noch einmal von vorn',
        onclick: function () { zeigeChat(d.id); }
      }));
    });
  }

  /* ---------- Ansicht: Spickzettel ---------- */

  function zeigeZettel() {
    ansicht = 'zettel';
    setzeKopf('📌 Spickzettel', 'deine gesammelten Merksätze', zeigeListe);
    U.clear(seite);
    AUDIT.spickzettel.zeichne(seite);
  }

  /* ---------- Steuerung ---------- */

  function zeige(was, param) {
    window.scrollTo(0, 0);
    if (was === 'kontakt') zeigeKontakt(param);
    else if (was === 'chat') zeigeChat(param);
    else if (was === 'zettel') zeigeZettel();
    else zeigeListe();
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
      if (ansicht === 'zettel') zeigeListe(); else zeigeZettel();
    });

    /* Tastatur: 1–4 wählt eine Antwort */
    document.addEventListener('keydown', function (e) {
      if (ansicht !== 'chat') return;
      var n = parseInt(e.key, 10);
      if (!n || n < 1 || n > 9) return;
      var knoepfe = U.$$('.chat__antworten .antwort:not([disabled])');
      if (knoepfe[n - 1]) { e.preventDefault(); knoepfe[n - 1].click(); }
    });

    zeigeListe();
    console.info('AUDIT bereit.', AUDIT.data.dialoge.length, 'Gespräche,',
      AUDIT.data.lexikon.length, 'Lexikoneinträge.');
  }

  return { init: init, zeige: zeige, istErledigt: istErledigt };
})();

document.addEventListener('DOMContentLoaded', function () { AUDIT.app.init(); });
