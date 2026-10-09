/* ===========================================================
   AUDIT – js/lexikon.js
   Seitenpanel mit allen Fachbegriffen, Suche und Gruppierung.
   Jeder [[Begriff]] in Erklärtexten öffnet hier den Eintrag.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.lexikon = (function () {
  'use strict';
  var U = AUDIT.util;

  var panel = null, body = null, suchfeld = null;
  var offen = false;

  function baue() {
    if (panel) return;
    panel = U.el('aside', { class: 'lexikon', id: 'lexikon' });

    var head = U.el('div', { class: 'lexikon__head' }, [
      U.el('h2', { text: '📖 Lexikon' }),
      U.el('button', { class: 'btn btn--sm', text: '✕', title: 'Schließen', onclick: zu })
    ]);
    panel.appendChild(head);

    var sb = U.el('div', { class: 'lexikon__search' });
    suchfeld = U.el('input', { type: 'text', placeholder: 'Begriff suchen …' });
    suchfeld.addEventListener('input', function () { liste(suchfeld.value); });
    sb.appendChild(suchfeld);
    panel.appendChild(sb);

    body = U.el('div', { class: 'lexikon__body' });
    panel.appendChild(body);
    document.body.appendChild(panel);

    liste('');
  }

  function liste(filter) {
    U.clear(body);
    var f = (filter || '').trim().toLowerCase();
    var treffer = AUDIT.data.lexikon.filter(function (e) {
      if (!f) return true;
      return (e.titel + ' ' + e.key + ' ' + (e.alias || []).join(' ') + ' ' + e.text + ' ' + (e.bsp || ''))
        .toLowerCase().indexOf(f) >= 0;
    });

    if (!treffer.length) {
      body.appendChild(U.el('p', { class: 'panel__empty', text: 'Kein Eintrag gefunden.' }));
      return;
    }

    body.appendChild(U.el('p', {
      class: 'sub',
      text: treffer.length + ' von ' + AUDIT.data.lexikon.length + ' Einträgen'
    }));

    AUDIT.data.lexikonGruppen.forEach(function (g) {
      var inGruppe = treffer.filter(function (e) { return e.gruppe === g; });
      if (!inGruppe.length) return;
      var box = U.el('div', { class: 'lxgroup' });
      box.appendChild(U.el('div', { class: 'lxgroup__h', text: g }));
      inGruppe.sort(function (a, b) { return a.titel.localeCompare(b.titel, 'de'); })
        .forEach(function (e) { box.appendChild(eintrag(e)); });
      body.appendChild(box);
    });

    /* Einträge ohne bekannte Gruppe nicht verlieren */
    var rest = treffer.filter(function (e) { return AUDIT.data.lexikonGruppen.indexOf(e.gruppe) < 0; });
    if (rest.length) {
      var box2 = U.el('div', { class: 'lxgroup' });
      box2.appendChild(U.el('div', { class: 'lxgroup__h', text: 'Weitere' }));
      rest.forEach(function (e) { box2.appendChild(eintrag(e)); });
      body.appendChild(box2);
    }
  }

  function eintrag(e) {
    var box = U.el('div', { class: 'lxentry', data: { key: e.key } });
    box.appendChild(U.el('div', {
      class: 'lxentry__h', text: e.titel,
      onclick: function () { box.classList.toggle('is-open'); }
    }));
    var b = U.el('div', { class: 'lxentry__b' });
    b.appendChild(U.el('p', { html: U.rich(e.text) }));
    if (e.bsp) b.appendChild(U.el('p', { class: 'bsp', html: '<b>Beispiel:</b> ' + U.rich(e.bsp) }));
    if (e.norm) b.appendChild(U.el('p', {}, U.el('span', { class: 'lxentry__norm', text: e.norm })));
    if (e.merk) b.appendChild(U.el('div', { class: 'merk', html: U.rich(e.merk) }));
    box.appendChild(b);
    return box;
  }

  function auf() {
    baue();
    panel.classList.add('is-open');
    offen = true;
    var b = document.getElementById('btnLexikon');
    if (b) b.classList.add('is-active');
  }
  function zu() {
    if (!panel) return;
    panel.classList.remove('is-open');
    offen = false;
    var b = document.getElementById('btnLexikon');
    if (b) b.classList.remove('is-active');
  }
  function umschalten() { offen ? zu() : auf(); }

  /* Einen bestimmten Begriff zeigen */
  function open(key) {
    baue();
    auf();
    var e = AUDIT.data.lexikonIndex[String(key).toLowerCase()];
    if (!e) {
      suchfeld.value = key;
      liste(key);
      U.toast('Für <b>' + U.esc(key) + '</b> gibt es noch keinen Lexikon-Eintrag.', 'warn', 2600);
      return;
    }
    suchfeld.value = '';
    liste('');
    var box = body.querySelector('[data-key="' + cssEsc(e.key) + '"]');
    if (box) {
      box.classList.add('is-open');
      box.scrollIntoView({ block: 'center', behavior: 'smooth' });
      box.style.transition = 'box-shadow .4s';
      box.style.boxShadow = '0 0 0 2px var(--accent)';
      setTimeout(function () { box.style.boxShadow = 'none'; }, 1400);
    }
  }

  function cssEsc(s) { return String(s).replace(/(["\\])/g, '\\$1'); }

  /* Entwicklerhilfe: prüft, ob alle [[Begriffe]] im Code existieren.
     Aufruf in der Konsole: AUDIT.lexikon.pruefe(['Begriff1', ...])   */
  function pruefe(keys) {
    var fehlt = (keys || []).filter(function (k) {
      return !AUDIT.data.lexikonIndex[String(k).toLowerCase()];
    });
    if (fehlt.length) console.warn('Lexikon: keine Einträge für', fehlt);
    else console.info('Lexikon: alle geprüften Begriffe vorhanden.');
    return fehlt;
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && offen) zu();
  });

  return { auf: auf, zu: zu, umschalten: umschalten, open: open, pruefe: pruefe, neuAufbauen: function () { if (body) liste(suchfeld ? suchfeld.value : ''); } };
})();
