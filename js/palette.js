/* ===========================================================
   AUDIT – js/palette.js
   Linke Leiste mit ziehbaren Karten.

   Damit nicht 30 Karten gleichzeitig erschlagen, sind die
   Gruppen zugeklappt: offen ist nur, was gerade gebraucht wird.

   gruppen = [{ titel, offen, items: [{ icon, label, titel?, payload }] }]
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.palette = (function () {
  'use strict';
  var U = AUDIT.util;

  /* zuletzt gebaute Leisten, damit der Auftrag eine Gruppe öffnen kann */
  var register = [];

  function baue(container, gruppen, opt) {
    opt = opt || {};
    U.clear(container);
    register = register.filter(function (r) { return r.container !== container; });
    var eintrag = { container: container, gruppen: [] };
    register.push(eintrag);

    var alleItems = gruppen.reduce(function (n, g) { return n + (g.items || []).length; }, 0);

    /* Suchfeld erst, wenn es wirklich viele Karten sind */
    var suche = null;
    if (alleItems > 12) {
      suche = U.el('input', {
        type: 'text', placeholder: 'Suchen …',
        style: {
          width: '100%', background: 'var(--bg-4)', border: '1px solid var(--line)',
          borderRadius: 'var(--r-s)', color: 'var(--text)', font: 'inherit',
          fontSize: '12.5px', padding: '6px 9px', marginBottom: '8px'
        }
      });
      suche.addEventListener('input', function () { filtern(suche.value); });
      container.appendChild(suche);
    }

    gruppen.forEach(function (g, i) {
      if (g.hinweis) {
        container.appendChild(U.el('div', { class: 'note', html: U.lexify(g.hinweis) }));
      }
      if (!g.items || !g.items.length) return;

      var offen = g.offen !== undefined ? g.offen : (i === 0);
      var karten = [];

      var box = U.el('div', { class: 'klapp' + (offen ? ' is-open' : ''), data: { gruppe: g.key || g.titel } });
      var kopf = U.el('div', { class: 'klapp__h' }, [
        U.el('span', { text: g.titel || '' }),
        U.el('span', { class: 'klapp__n', text: String(g.items.length) })
      ]);
      kopf.addEventListener('click', function () { box.classList.toggle('is-open'); });
      var body = U.el('div', { class: 'klapp__b', style: { padding: '2px 6px 8px' } });

      g.items.forEach(function (it) {
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
        body.appendChild(card);
        karten.push({ el: card, suchtext: (it.label + ' ' + (it.titel || '')).toLowerCase() });
      });

      box.appendChild(kopf);
      box.appendChild(body);
      container.appendChild(box);
      eintrag.gruppen.push({ key: g.key || g.titel, box: box, karten: karten });
    });

    function filtern(text) {
      var f = (text || '').trim().toLowerCase();
      eintrag.gruppen.forEach(function (gr) {
        var treffer = 0;
        gr.karten.forEach(function (k) {
          var passt = !f || k.suchtext.indexOf(f) >= 0;
          k.el.style.display = passt ? '' : 'none';
          if (passt) treffer++;
        });
        gr.box.style.display = treffer ? '' : 'none';
        if (f) gr.box.classList.add('is-open');
      });
    }
  }

  /* Eine Gruppe aufklappen (nutzt der geführte Modus) */
  function oeffne(key) {
    register.forEach(function (r) {
      if (!r.container.isConnected) return;
      r.gruppen.forEach(function (gr) {
        if (gr.key === key) gr.box.classList.add('is-open');
      });
    });
  }

  /* Standard-Bausteingruppen für die Arbeitsfläche */
  function bausteinGruppen(nurKategorien) {
    var namen = {
      system: 'Systeme', anwendung: 'Anwendungen',
      person: 'Personen', zone: 'Standorte & Räume'
    };
    var reihenfolge = nurKategorien || ['anwendung', 'system', 'person', 'zone'];
    return reihenfolge.map(function (kat, i) {
      return {
        key: kat,
        titel: namen[kat] || kat,
        offen: i === 0,
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

  return { baue: baue, bausteinGruppen: bausteinGruppen, oeffne: oeffne };
})();
