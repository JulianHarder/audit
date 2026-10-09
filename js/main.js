/* ===========================================================
   AUDIT – js/main.js
   Startseite, Navigation zwischen den Stationen, Fortschritt.
   Wird als letztes Skript geladen: sammelt alle Stationen aus
   AUDIT.stationen ein (jede Stationsdatei hängt sich dort an).
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.main = (function () {
  'use strict';
  var U = AUDIT.util;
  var F = AUDIT.firma;

  var app, navBox;
  var gebaut = {};      // key -> {el, api}
  var aktuell = null;

  /* ---------- Startseite ---------- */

  function startseite(container) {
    var ui = AUDIT.ui;
    var box = U.el('div', { class: 'intro' });
    var inner = U.el('div', { class: 'intro__inner' });
    box.appendChild(inner);
    container.appendChild(box);

    inner.appendChild(U.el('h1', { html: '<b>AUDIT</b> – Firma bauen, angreifen, absichern' }));
    inner.appendChild(U.el('p', {
      class: 'intro__lead',
      text: 'Lernwerkstatt für IT-Sicherheit, Datenschutz und Compliance. ' +
        'Du bekommst in jeder Station eine Aufgabe und siehst sofort, was passiert.'
    }));

    /* Großer Einstieg */
    var los = U.el('div', { style: { display: 'flex', gap: '8px', margin: '18px 0 6px', flexWrap: 'wrap', alignItems: 'center' } });
    los.appendChild(U.el('button', {
      class: 'btn btn--primary',
      style: { fontSize: '15px', padding: '11px 20px' },
      text: '▶ Loslegen – Station 1',
      onclick: function () { zeige('werkstatt'); }
    }));
    los.appendChild(U.el('button', {
      class: 'btn btn--sm', text: 'Große Beispielfirma laden',
      title: 'Die vollständige Firma mit 22 Bausteinen – mehr zum Entdecken, aber unübersichtlicher',
      onclick: function () { F.laden(AUDIT.data.vorlage); U.toast('Große Beispielfirma geladen.', 'ok'); zeige('werkstatt'); }
    }));
    los.appendChild(U.el('button', {
      class: 'btn btn--sm', text: 'Leere Fläche',
      onclick: function () { F.neu(); zeige('werkstatt'); }
    }));
    los.appendChild(U.el('button', {
      class: 'btn btn--sm', text: 'Gespeicherte laden',
      onclick: function () { AUDIT.ui.ladenDialog(null); }
    }));
    inner.appendChild(los);

    var fz = U.el('p', { class: 'sub' });
    function fzFuellen() {
      var d = F.data;
      fz.textContent = 'Aktuell auf der Fläche: ' + d.name + ' – ' +
        d.nodes.length + ' Bausteine, ' + d.edges.length + ' Verbindungen.';
    }
    fzFuellen();
    F.onChange(fzFuellen);
    inner.appendChild(fz);

    /* Stationen */
    var grid = U.el('div', { class: 'grid3', style: { marginTop: '18px' } });
    AUDIT.stationen.forEach(function (s) {
      grid.appendChild(U.el('div', { class: 'tile', onclick: function () { zeige(s.key); } }, [
        U.el('div', { class: 'tile__n', text: 'Station ' + s.num }),
        U.el('div', { class: 'tile__h', text: (s.icon || '') + ' ' + s.label }),
        U.el('div', { class: 'tile__t', text: s.kurz || '' }),
        U.el('div', { class: 'tile__prog', data: { prog: s.key }, text: 'noch nicht begonnen' })
      ]));
    });
    inner.appendChild(grid);

    /* Bedienung – zugeklappt, man braucht sie nicht zum Anfangen */
    inner.appendChild(ui.klapp('So bedienst du die Arbeitsfläche', function () {
      var ul = U.el('ul', { style: { color: 'var(--text-dim)', lineHeight: '1.9', margin: '4px 0 0 18px', padding: '0' } });
      [
        'Bausteine aus der <b>linken Leiste</b> auf die Fläche ziehen.',
        'Fläche verschieben: mit der Maus ziehen. Zoomen: Mausrad.',
        '<b>Verbinden</b>: einen der kleinen Anschlusspunkte am Rand eines Bausteins auf einen anderen ziehen.',
        'Rechts im <b>Seitenpanel</b> steht alles zum angeklickten Element.',
        'Fachbegriffe sind <span class="lx" data-lx="Schutzziele">so markiert</span> – ein Klick öffnet das Lexikon.',
        'Löschen: Entf-Taste · Rückgängig: Strg + Z'
      ].forEach(function (t) { ul.appendChild(U.el('li', { html: t })); });
      return ul;
    }));

    inner.appendChild(ui.klapp('Worum geht es in AUDIT?', function () {
      return U.el('div', {}, [
        U.el('p', {
          style: { color: 'var(--text-dim)' },
          text: 'Du arbeitest durchgehend an einer Firma: der Lippe Logistik GmbH. ' +
            'Du stellst ihren Schutzbedarf fest, greifst sie mit Schadsoftware an, sicherst sie ab, ' +
            'prüfst ihre Datenflüsse nach DSGVO, klärst Zuständigkeiten und führst sie durch einen Ernstfall.'
        }),
        U.el('p', {
          style: { color: 'var(--text-dim)' },
          text: 'Kein Quiz und keine Karteikarten: Was du in den Stationen 1 bis 4 absicherst, ' +
            'entscheidet darüber, wie der Ernstfall in Station 5 ausgeht.'
        })
      ]);
    }));

    if (!AUDIT.storage.verfuegbar) {
      inner.appendChild(U.el('div', {
        class: 'note note--warn',
        text: 'Dieser Browser erlaubt hier keinen dauerhaften Speicher. Fortschritt und Firmen ' +
          'gehen beim Neuladen verloren – zum Lernen reicht es trotzdem.'
      }));
    }

    inner.appendChild(U.el('p', {
      class: 'sub', style: { marginTop: '22px' },
      html: U.rich('AUDIT ist eine Lernhilfe für die IHK-Prüfung und keine Rechtsberatung. ' +
        'Artikelangaben beziehen sich auf die [[DSGVO]].')
    }));
    return {};
  }

  /* ---------- Navigation ---------- */

  function navAufbauen() {
    U.clear(navBox);
    /* Start */
    navBox.appendChild(U.el('button', {
      class: 'navbtn', id: 'nav-start', text: '⌂ Start',
      onclick: function () { zeige('start'); }
    }));
    AUDIT.stationen.forEach(function (s) {
      var b = U.el('button', {
        class: 'navbtn', id: 'nav-' + s.key,
        onclick: function () { zeige(s.key); }
      }, [
        U.el('span', { class: 'navbtn__num', text: s.num }),
        U.el('span', { text: s.label }),
        U.el('span', { class: 'navbtn__done', data: { done: s.key }, text: '' })
      ]);
      navBox.appendChild(b);
    });
  }

  function zeige(key) {
    if (!gebaut[key]) {
      var def = key === 'start'
        ? { key: 'start', build: startseite }
        : AUDIT.stationen.filter(function (s) { return s.key === key; })[0];
      if (!def) return;
      var sec = U.el('section', { class: 'station', id: 'st-' + key });
      app.appendChild(sec);
      var api = null;
      try { api = def.build(sec); } catch (e) { console.error('Fehler beim Aufbau der Station ' + key, e); }
      gebaut[key] = { el: sec, api: api || {} };
    }
    Object.keys(gebaut).forEach(function (k) {
      gebaut[k].el.classList.toggle('is-active', k === key);
    });
    U.$$('.navbtn', navBox).forEach(function (b) { b.classList.remove('is-active'); });
    var nb = document.getElementById('nav-' + key);
    if (nb) nb.classList.add('is-active');
    aktuell = key;
    try { window.location.hash = key; } catch (e) {}
    var api = gebaut[key].api;
    if (api && api.onShow) {
      /* kurz warten, damit das Layout steht (Canvas braucht Maße) */
      setTimeout(function () { try { api.onShow(); } catch (e) { console.error(e); } }, 20);
    }
    fortschrittAnzeigen();
  }

  /* ---------- Fortschritt ---------- */

  function fortschrittAnzeigen() {
    var f = AUDIT.storage.fortschritt();
    AUDIT.stationen.forEach(function (s) {
      var p = f[s.key] || 0;
      var tick = document.querySelector('[data-done="' + s.key + '"]');
      if (tick) tick.textContent = p >= 0.999 ? '✓' : (p > 0 ? '•' : '');
      var txt = document.querySelector('[data-prog="' + s.key + '"]');
      if (txt) {
        txt.textContent = p >= 0.999 ? 'abgeschlossen ✓'
          : (p > 0 ? Math.round(p * 100) + ' % bearbeitet' : 'noch nicht begonnen');
      }
    });
  }

  /* ---------- Start ---------- */

  function init() {
    app = document.getElementById('app');
    navBox = document.getElementById('navStations');
    navAufbauen();

    document.getElementById('btnLexikon').addEventListener('click', function () {
      AUDIT.lexikon.umschalten();
    });

    /* Firma: zuletzt bearbeiteter Stand oder Vorlage */
    var letzte = AUDIT.storage.get('letzteFirma', null);
    if (letzte && letzte.nodes && letzte.nodes.length) F.laden(letzte, true);
    else F.laden(AUDIT.data.vorlageKlein, true);   /* klein anfangen */
    /* Mit einer sauberen Firma starten: Simulationsspuren der letzten
       Sitzung entfernen, gesetzte Maßnahmen bleiben erhalten. */
    F.heilen();

    /* bei jeder Änderung den Stand sichern */
    var timer = null;
    F.onChange(function () {
      clearTimeout(timer);
      timer = setTimeout(function () { AUDIT.storage.set('letzteFirma', F.serialisieren()); }, 500);
    });

    var start = (window.location.hash || '').replace('#', '');
    zeige(AUDIT.stationen.some(function (s) { return s.key === start; }) ? start : 'start');

    window.addEventListener('resize', function () {
      var g = gebaut[aktuell];
      if (g && g.api && g.api.onResize) g.api.onResize();
    });

    console.info('AUDIT bereit. Stationen:', AUDIT.stationen.map(function (s) { return s.key; }).join(', '));
  }

  return { init: init, zeige: zeige, fortschrittAnzeigen: fortschrittAnzeigen, get aktuell() { return aktuell; } };
})();

document.addEventListener('DOMContentLoaded', function () { AUDIT.main.init(); });
