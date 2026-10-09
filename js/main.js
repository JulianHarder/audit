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
    var box = U.el('div', { class: 'intro' });
    var inner = U.el('div', { class: 'intro__inner' });
    box.appendChild(inner);
    container.appendChild(box);

    inner.appendChild(U.el('h1', { html: '<b>AUDIT</b> – Firma bauen, angreifen, absichern' }));
    inner.appendChild(U.el('p', {
      class: 'intro__lead',
      text: 'Eine interaktive Lernwerkstatt zu IT-Sicherheit, Datenschutz und Compliance. ' +
        'Du baust die Lippe Logistik GmbH auf, stellst ihren Schutzbedarf fest, greifst sie mit ' +
        'Schadsoftware an, sicherst sie ab, prüfst ihre Datenflüsse nach DSGVO und führst sie ' +
        'durch einen Ernstfall. Kein Quiz – du lernst, indem du etwas tust und siehst, was passiert.'
    }));

    inner.appendChild(U.el('h2', { text: 'So funktioniert AUDIT', style: { marginTop: '26px', fontSize: '17px' } }));
    var ul = U.el('ul', { style: { color: 'var(--text-dim)', lineHeight: '1.9', maxWidth: '72ch' } });
    [
      'Links ist die <b>Baustein-Leiste</b>: Systeme, Anwendungen, Personen, Räume. Zieh sie auf die Fläche.',
      'Die <b>Arbeitsfläche</b> verschiebst du mit der Maus, zoomen mit dem Mausrad.',
      'Bausteine <b>verbindest</b> du, indem du einen der kleinen Anschlusspunkte am Rand auf einen anderen Baustein ziehst.',
      'Rechts erklärt das <b>Seitenpanel</b> immer das Element, das du angeklickt hast.',
      'Fachbegriffe sind <span class="lx" data-lx="Schutzziele">so markiert</span> – ein Klick öffnet das Lexikon.',
      'Deine Firma bleibt über alle Stationen dieselbe. Was du in Station 1–3 absicherst, wirkt im <b>Ernstfall</b>.'
    ].forEach(function (t) { ul.appendChild(U.el('li', { html: t })); });
    inner.appendChild(ul);

    inner.appendChild(U.el('h2', { text: 'Die Stationen', style: { marginTop: '26px', fontSize: '17px' } }));
    var grid = U.el('div', { class: 'grid3' });
    AUDIT.stationen.forEach(function (s) {
      var t = U.el('div', { class: 'tile', onclick: function () { zeige(s.key); } }, [
        U.el('div', { class: 'tile__n', text: 'Station ' + s.num }),
        U.el('div', { class: 'tile__h', text: (s.icon || '') + ' ' + s.label }),
        U.el('div', { class: 'tile__t', text: s.kurz || '' }),
        U.el('div', { class: 'tile__prog', data: { prog: s.key }, text: 'noch nicht begonnen' })
      ]);
      grid.appendChild(t);
    });
    inner.appendChild(grid);

    inner.appendChild(U.el('h2', { text: 'Deine Firma', style: { marginTop: '26px', fontSize: '17px' } }));
    var fz = U.el('div', { class: 'card' });
    function fzFuellen() {
      U.clear(fz);
      var d = F.data;
      fz.appendChild(U.el('div', { class: 'card__h', text: d.name }));
      fz.appendChild(U.el('div', {
        class: 'card__b',
        text: d.nodes.length + ' Bausteine · ' + d.edges.length + ' Verbindungen · ' + d.zonen.length + ' Zonen'
      }));
      var btns = U.el('div', { style: { display: 'flex', gap: '6px', marginTop: '8px', flexWrap: 'wrap' } });
      btns.appendChild(U.el('button', {
        class: 'btn btn--primary btn--sm', text: 'Vorlage „Lippe Logistik GmbH“ laden',
        onclick: function () { F.ladeVorlage(); zeige('werkstatt'); }
      }));
      btns.appendChild(U.el('button', {
        class: 'btn btn--sm', text: 'Leer anfangen',
        onclick: function () { F.neu(); zeige('werkstatt'); }
      }));
      btns.appendChild(U.el('button', {
        class: 'btn btn--sm', text: 'Gespeicherte Firma laden',
        onclick: function () { AUDIT.ui.ladenDialog(null); }
      }));
      fz.appendChild(btns);
      if (!AUDIT.storage.verfuegbar) {
        fz.appendChild(U.el('div', {
          class: 'note note--warn',
          text: 'Dieser Browser erlaubt hier keinen dauerhaften Speicher. Fortschritt und Firmen ' +
            'gehen beim Neuladen verloren – zum Lernen reicht es trotzdem.'
        }));
      }
    }
    fzFuellen();
    F.onChange(fzFuellen);
    inner.appendChild(fz);

    inner.appendChild(U.el('p', {
      class: 'sub', style: { marginTop: '22px' },
      html: U.rich('Hinweis: AUDIT ist eine Lernhilfe für die IHK-Prüfung und keine Rechtsberatung. ' +
        'Die Artikelangaben beziehen sich auf die [[DSGVO]].')
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
    else F.laden(AUDIT.data.vorlage, true);
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
