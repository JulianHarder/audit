/* ===========================================================
   AUDIT – js/dnd.js
   Eigenes Drag & Drop (Pointer Events, damit es auch mit
   Touch funktioniert). Kein HTML5-DnD, weil das auf der
   SVG-Fläche und auf Tablets zickig ist.

   Benutzung:
     AUDIT.dnd.ziehbar(element, function(){ return payload; }, labelHtml)
     AUDIT.dnd.ziel(element, { accept: fn(payload), drop: fn(payload, evt) })
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.dnd = (function () {
  'use strict';

  var ziele = [];
  var aktiv = null;    // { payload, ghost, hover }

  function ziel(element, handler) {
    ziele.push({ el: element, h: handler });
    return function abmelden() {
      ziele = ziele.filter(function (z) { return z.el !== element; });
    };
  }

  function zielUnter(x, y, payload) {
    var e = document.elementFromPoint(x, y);
    while (e) {
      for (var i = 0; i < ziele.length; i++) {
        if (ziele[i].el === e) {
          if (!ziele[i].h.accept || ziele[i].h.accept(payload)) return ziele[i];
          return null;
        }
      }
      e = e.parentElement;
    }
    return null;
  }

  function start(evt, payload, labelHtml) {
    if (aktiv) return;
    evt.preventDefault();
    var ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.innerHTML = labelHtml || 'Baustein';
    ghost.style.left = evt.clientX + 'px';
    ghost.style.top = evt.clientY + 'px';
    document.body.appendChild(ghost);
    aktiv = { payload: payload, ghost: ghost, hover: null };

    document.addEventListener('pointermove', move, true);
    document.addEventListener('pointerup', up, true);
    document.addEventListener('pointercancel', abbruch, true);
  }

  function setHover(z) {
    if (aktiv.hover === z) return;
    if (aktiv.hover && aktiv.hover.h.leave) aktiv.hover.h.leave();
    aktiv.hover = z;
    if (z && z.h.enter) z.h.enter();
  }

  function move(e) {
    if (!aktiv) return;
    aktiv.ghost.style.left = e.clientX + 'px';
    aktiv.ghost.style.top = e.clientY + 'px';
    var z = zielUnter(e.clientX, e.clientY, aktiv.payload);
    setHover(z);
    if (z && z.h.over) z.h.over(aktiv.payload, e);
  }

  function aufraeumen() {
    document.removeEventListener('pointermove', move, true);
    document.removeEventListener('pointerup', up, true);
    document.removeEventListener('pointercancel', abbruch, true);
    if (aktiv) {
      if (aktiv.hover && aktiv.hover.h.leave) aktiv.hover.h.leave();
      if (aktiv.ghost.parentNode) aktiv.ghost.parentNode.removeChild(aktiv.ghost);
    }
    aktiv = null;
  }

  function up(e) {
    if (!aktiv) return;
    var z = zielUnter(e.clientX, e.clientY, aktiv.payload);
    var p = aktiv.payload;
    aufraeumen();
    if (z && z.h.drop) z.h.drop(p, e);
  }

  function abbruch() { aufraeumen(); }

  /* Element zum Ziehen freigeben */
  function ziehbar(element, payloadFn, labelHtml) {
    element.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      var p = typeof payloadFn === 'function' ? payloadFn() : payloadFn;
      if (!p) return;
      start(e, p, typeof labelHtml === 'function' ? labelHtml() : labelHtml);
    });
  }

  return { ziehbar: ziehbar, ziel: ziel, start: start, get laeuft() { return !!aktiv; } };
})();
