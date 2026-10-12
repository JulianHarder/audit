/* ===========================================================
   AUDIT – js/spickzettel.js
   Sammelt die Merksätze aus den Gesprächen. Am Ende hat man
   seinen eigenen Lernzettel – auch zum Ausdrucken.

   Liegt als Panel über der Seite, genau wie das Lexikon. Das ist
   Absicht: Wer ihn mitten im Gespräch aufschlägt, soll danach
   weiterreden können, wo er aufgehört hat. Als eigene Seite hätte
   das Zurückkommen das Gespräch von vorn begonnen.

   Jeder Merksatz merkt sich, aus welchem Themengebiet er stammt
   (Feld "gebiet"), und der Zettel zeigt immer nur eines davon.
   Das Feld "thema" daneben ist feiner: das Unterthema des
   Gesprächs, etwa "Schadsoftware"; danach wird gruppiert.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.spickzettel = (function () {
  'use strict';
  var U = AUDIT.util;
  var SCHLUESSEL = 'spickzettel';

  var panel = null, body = null;
  var offen = false;
  var gebiet = null;      /* welches Themengebiet gerade gezeigt wird */

  /* Merksätze, die vor der Einführung der Themengebiete gespeichert
     wurden, haben kein "gebiet". Sie stammen zwangsläufig aus dem
     ersten Gebiet und werden ihm zugeschlagen. */
  function erstesGebiet() {
    return ((AUDIT.data.themen || [])[0] || {}).key || null;
  }

  function gebietVon(e) { return e.gebiet || erstesGebiet(); }

  /* Ohne Angabe: alle Merksätze. Mit Angabe: nur die eines Gebiets. */
  function alle(gebiet) {
    var liste = AUDIT.storage.get(SCHLUESSEL, []);
    if (!gebiet) return liste;
    return liste.filter(function (e) { return gebietVon(e) === gebiet; });
  }

  function hinzu(eintrag) {
    var liste = alle();
    var schonDa = liste.some(function (e) { return e.text === eintrag.text; });
    if (schonDa) return false;
    eintrag.zeit = new Date().toISOString();
    liste.push(eintrag);
    AUDIT.storage.set(SCHLUESSEL, liste);
    return true;
  }

  /* Ohne Angabe: alles. Mit Angabe: nur die Merksätze eines Gebiets –
     der Zettel zeigt ja auch nur dieses. */
  function leeren(gebiet) {
    if (!gebiet) { AUDIT.storage.set(SCHLUESSEL, []); return; }
    AUDIT.storage.set(SCHLUESSEL, alle().filter(function (e) {
      return gebietVon(e) !== gebiet;
    }));
  }

  function zeichne(mount, gebiet) {
    U.clear(mount);
    var liste = alle(gebiet);
    var g = gebiet ? (AUDIT.data.themenMap || {})[gebiet] : null;

    if (g) mount.appendChild(U.el('div', { class: 'zettel__gebiet', text: g.name }));

    if (!liste.length) {
      mount.appendChild(U.el('p', { class: 'lead',
        text: 'Noch leer. Jedes Gespräch endet mit einem Merksatz – der landet automatisch hier.' }));
      return;
    }

    mount.appendChild(U.el('p', { class: 'lead',
      text: (liste.length === 1 ? 'Ein Merksatz' : liste.length + ' Merksätze') +
        (g ? ' aus „' + g.name + '“' : ' aus deinen Gesprächen') +
        '. Zum Lernen vor der Prüfung – oder ausdrucken.' }));

    var tools = U.el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' } });
    tools.appendChild(U.el('button', {
      class: 'btn btn--sm', text: '🖨 Drucken',
      onclick: function () { window.print(); }
    }));
    tools.appendChild(U.el('button', {
      class: 'btn btn--sm', text: 'Leeren',
      onclick: function () {
        var einer = liste.length === 1;
        var woher = g ? ' aus „' + U.esc(g.name) + '“' : '';
        U.modal('Spickzettel leeren?',
          '<p>' + (einer ? 'Der eine Merksatz' + woher + ' wird gelöscht. Er kommt'
                         : 'Die ' + liste.length + ' Merksätze' + woher + ' werden gelöscht. Sie kommen') +
          ' beim erneuten Durchspielen der Gespräche wieder.</p>' +
          (g ? '<p class="sub">Merksätze aus anderen Themengebieten bleiben erhalten.</p>' : ''),
          [{ label: 'Abbrechen' }, {
            label: 'Leeren', danger: true, onClick: function (close) {
              leeren(gebiet); close(); zeichne(mount, gebiet);
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

  /* ---------- Panel ---------- */

  function baue() {
    if (panel) return;
    panel = U.el('aside', { class: 'panel panel--zettel', id: 'spickzettel' });
    panel.appendChild(U.el('div', { class: 'panel__head' }, [
      U.el('h2', { text: '📌 Spickzettel' }),
      U.el('button', { class: 'btn btn--sm', text: '✕', title: 'Schließen', onclick: zu })
    ]));
    body = U.el('div', { class: 'panel__body' });
    panel.appendChild(body);
    document.body.appendChild(panel);
  }

  function auf(key) {
    baue();
    /* Nur ein Panel zur Zeit */
    if (AUDIT.lexikon && AUDIT.lexikon.zu) AUDIT.lexikon.zu();
    gebiet = key || null;
    zeichne(body, gebiet);
    U.seiteSperren('zettel');
    panel.classList.add('is-open');
    /* Die Druckansicht blendet damit die Seite dahinter aus. */
    document.body.classList.add('zettel-offen');
    offen = true;
    var b = document.getElementById('btnZettel');
    if (b) b.classList.add('is-active');
  }

  function zu() {
    if (!panel) return;
    panel.classList.remove('is-open');
    document.body.classList.remove('zettel-offen');
    U.seiteFreigeben('zettel');
    offen = false;
    var b = document.getElementById('btnZettel');
    if (b) b.classList.remove('is-active');
  }

  function umschalten(key) { offen ? zu() : auf(key); }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && offen) zu();
  });

  return { alle: alle, hinzu: hinzu, leeren: leeren, zeichne: zeichne,
           auf: auf, zu: zu, umschalten: umschalten };
})();
