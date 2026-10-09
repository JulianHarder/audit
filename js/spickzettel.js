/* ===========================================================
   AUDIT – js/spickzettel.js
   Sammelt die Merksätze aus den Gesprächen. Am Ende hat man
   seinen eigenen Lernzettel – auch zum Ausdrucken.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.spickzettel = (function () {
  'use strict';
  var U = AUDIT.util;
  var SCHLUESSEL = 'spickzettel';

  function alle() { return AUDIT.storage.get(SCHLUESSEL, []); }

  function hinzu(eintrag) {
    var liste = alle();
    var schonDa = liste.some(function (e) { return e.text === eintrag.text; });
    if (schonDa) return false;
    eintrag.zeit = new Date().toISOString();
    liste.push(eintrag);
    AUDIT.storage.set(SCHLUESSEL, liste);
    return true;
  }

  function leeren() { AUDIT.storage.set(SCHLUESSEL, []); }

  function zeichne(mount) {
    U.clear(mount);
    var liste = alle();

    mount.appendChild(U.el('h1', { text: '📌 Dein Spickzettel' }));

    if (!liste.length) {
      mount.appendChild(U.el('p', { class: 'lead',
        text: 'Noch leer. Jedes Gespräch endet mit einem Merksatz – der landet automatisch hier.' }));
      mount.appendChild(U.el('button', {
        class: 'btn btn--primary', text: 'Zu den Gesprächen',
        onclick: function () { AUDIT.app.zeige('liste'); }
      }));
      return;
    }

    mount.appendChild(U.el('p', { class: 'lead',
      text: (liste.length === 1 ? 'Ein Merksatz' : liste.length + ' Merksätze') +
        ' aus deinen Gesprächen. Zum Lernen vor der Prüfung – oder ausdrucken.' }));

    var tools = U.el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' } });
    tools.appendChild(U.el('button', {
      class: 'btn btn--sm', text: '🖨 Drucken',
      onclick: function () { window.print(); }
    }));
    tools.appendChild(U.el('button', {
      class: 'btn btn--sm', text: 'Leeren',
      onclick: function () {
        U.modal('Spickzettel leeren?',
          '<p>Alle gesammelten Merksätze werden gelöscht. Sie kommen beim erneuten Durchspielen der Gespräche wieder.</p>',
          [{ label: 'Abbrechen' }, {
            label: 'Leeren', danger: true, onClick: function (close) {
              leeren(); close(); zeichne(mount);
            }
          }]);
      }
    }));
    mount.appendChild(tools);

    /* nach Thema gruppieren */
    var themen = [];
    liste.forEach(function (e) {
      var t = e.thema || 'Sonstiges';
      if (themen.indexOf(t) < 0) themen.push(t);
    });
    themen.forEach(function (t) {
      mount.appendChild(U.el('div', { class: 'zettel__thema', text: t }));
      liste.filter(function (e) { return (e.thema || 'Sonstiges') === t; }).forEach(function (e) {
        var box = U.el('div', { class: 'zettel__satz' });
        box.appendChild(U.el('div', { html: U.rich(e.text) }));
        if (e.titel) box.appendChild(U.el('div', { class: 'zettel__quelle', text: 'aus: ' + e.titel }));
        mount.appendChild(box);
      });
    });
  }

  return { alle: alle, hinzu: hinzu, leeren: leeren, zeichne: zeichne };
})();
