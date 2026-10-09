/* ===========================================================
   AUDIT – js/palette.js
   Baut die linke Leiste mit ziehbaren Karten.
   gruppen = [{ titel, items: [{ icon, label, titel?, payload }] }]
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.palette = (function () {
  'use strict';
  var U = AUDIT.util;

  function baue(container, gruppen) {
    U.clear(container);
    gruppen.forEach(function (g) {
      if (g.titel) container.appendChild(U.el('div', { class: 'palette__title', text: g.titel }));
      if (g.hinweis) container.appendChild(U.el('div', { class: 'note', html: U.lexify(g.hinweis) }));
      (g.items || []).forEach(function (it) {
        var card = U.el('div', {
          class: 'pitem' + (it.klasse ? ' ' + it.klasse : ''),
          title: it.titel || it.label,
          style: it.farbe ? { borderLeftColor: it.farbe } : null
        }, [
          U.el('span', { class: 'pitem__icon', text: it.icon || '▫' }),
          U.el('span', { class: 'pitem__label', text: it.label })
        ]);
        AUDIT.dnd.ziehbar(card, function () { return it.payload; },
          '<span style="margin-right:6px">' + U.esc(it.icon || '') + '</span>' + U.esc(it.label));
        if (it.onClick) card.addEventListener('click', it.onClick);
        container.appendChild(card);
      });
    });
  }

  /* Standard-Bausteingruppen für die Arbeitsfläche */
  function bausteinGruppen(nurKategorien) {
    var namen = {
      system: 'Systeme', anwendung: 'Anwendungen',
      person: 'Personen', zone: 'Standorte & Räume'
    };
    var reihenfolge = nurKategorien || ['system', 'anwendung', 'person', 'zone'];
    return reihenfolge.map(function (kat) {
      return {
        titel: namen[kat] || kat,
        items: AUDIT.data.bausteine.filter(function (b) { return b.kategorie === kat; })
          .map(function (b) {
            return {
              icon: b.icon, label: b.label, titel: b.info,
              payload: { art: 'baustein', key: b.key }
            };
          })
      };
    });
  }

  return { baue: baue, bausteinGruppen: bausteinGruppen };
})();
