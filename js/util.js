/* ===========================================================
   AUDIT – js/util.js
   Kleine Helfer: DOM, Text, Toasts, Modal, Lexikon-Verlinkung
   Kein Framework, kein Modul – alles an window.AUDIT.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.util = (function () {
  'use strict';

  /* ---------- DOM ---------- */

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    apply(e, attrs, children);
    return e;
  }

  /* SVG-Element erzeugen (eigener Namensraum!) */
  function svg(tag, attrs, children) {
    var e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    apply(e, attrs, children);
    return e;
  }

  function apply(e, attrs, children) {
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') { e.setAttribute('class', v); }
        else if (k === 'text') { e.textContent = v; }
        else if (k === 'html') { e.innerHTML = v; }
        else if (k === 'style' && typeof v === 'object') {
          Object.keys(v).forEach(function (s) { e.style[s] = v[s]; });
        }
        else if (k.indexOf('on') === 0 && typeof v === 'function') {
          e.addEventListener(k.slice(2).toLowerCase(), v);
        }
        else if (k === 'data' && typeof v === 'object') {
          Object.keys(v).forEach(function (d) { e.setAttribute('data-' + d, v[d]); });
        }
        else { e.setAttribute(k, v); }
      });
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c === null || c === undefined || c === false) return;
        e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); }

  /* ---------- Text ---------- */

  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Macht aus [[Begriff]] einen klickbaren Lexikon-Link.
     Erwartet bereits escapten Text. */
  function lexify(html) {
    return String(html || '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
      function (m, key, label) {
        return '<span class="lx" data-lx="' + esc(key) + '">' + esc(label || key) + '</span>';
      });
  }

  /* Lerntext aus den Datendateien: einfaches HTML (<b>, <br>) ist
     erlaubt, [[Begriffe]] werden verlinkt.
     ACHTUNG: Nur für eigene Inhalte verwenden. Alles, was der Nutzer
     selbst eingegeben hat (z. B. Bausteinnamen), vorher mit esc()
     behandeln. */
  function rich(text) { return lexify(text); }

  function id(prefix) {
    AUDIT._idc = (AUDIT._idc || 0) + 1;
    return (prefix || 'id') + '_' + AUDIT._idc + '_' + Math.floor(Math.random() * 9999);
  }

  /* ---------- Mathe ---------- */

  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

  /* ---------- Toasts ---------- */

  var toastHost = null;
  function toast(text, art, dauer) {
    if (!toastHost) {
      toastHost = el('div', { class: 'toasts' });
      document.body.appendChild(toastHost);
    }
    var t = el('div', { class: 'toast' + (art ? ' toast--' + art : ''), html: lexify(text) });
    toastHost.appendChild(t);
    var ms = dauer || Math.min(11000, 3200 + String(text).length * 32);
    setTimeout(function () {
      t.style.transition = 'opacity .35s, transform .35s';
      t.style.opacity = '0';
      t.style.transform = 'translateY(8px)';
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 400);
    }, ms);
    return t;
  }

  /* ---------- Modal ---------- */

  function modal(titel, inhaltHtml, buttons) {
    var box = el('div', { class: 'modal__box' });
    box.appendChild(el('h2', { html: lexify(titel) }));
    var body = el('div', { html: inhaltHtml });
    box.appendChild(body);
    var foot = el('div', { class: 'modal__foot' });
    var wrap = el('div', { class: 'modal' }, box);

    function close() { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }

    (buttons || [{ label: 'Schließen' }]).forEach(function (b) {
      foot.appendChild(el('button', {
        class: 'btn' + (b.primary ? ' btn--primary' : '') + (b.danger ? ' btn--danger' : ''),
        text: b.label,
        onclick: function () { if (b.onClick) b.onClick(close, body); else close(); }
      }));
    });
    box.appendChild(foot);
    wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
    document.body.appendChild(wrap);
    requestAnimationFrame(function () { wrap.classList.add('is-open'); });
    return { close: close, body: body };
  }

  /* ---------- Sonstiges ---------- */

  function stufeName(k) {
    var s = (AUDIT.data.stufen || []).filter(function (x) { return x.key === k; })[0];
    return s ? s.name : k;
  }
  function stufeWert(k) {
    var s = (AUDIT.data.stufen || []).filter(function (x) { return x.key === k; })[0];
    return s ? s.wert : 1;
  }
  function wertStufe(w) {
    var s = (AUDIT.data.stufen || []).filter(function (x) { return x.wert === w; })[0];
    return s ? s.key : 'normal';
  }

  /* Klick auf [[Begriff]] global abfangen -> Lexikon öffnen */
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-lx]') : null;
    if (t && AUDIT.lexikon && AUDIT.lexikon.open) {
      e.preventDefault();
      AUDIT.lexikon.open(t.getAttribute('data-lx'));
    }
  });

  return {
    el: el, svg: svg, $: $, $$: $$, clear: clear,
    esc: esc, lexify: lexify, rich: rich, id: id, clamp: clamp,
    toast: toast, modal: modal,
    stufeName: stufeName, stufeWert: stufeWert, wertStufe: wertStufe
  };
})();
