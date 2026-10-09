/* ===========================================================
   AUDIT – js/canvas.js
   Die 2D-Arbeitsfläche (SVG): verschieben, zoomen, Bausteine
   ziehen, verbinden, auswählen, löschen.
   Mehrere Stationen können je eine eigene Ansicht auf die
   gemeinsame Firma (AUDIT.firma) erzeugen.

   AUDIT.createCanvas({
     mount:   HTMLElement,
     modus:   'werkstatt' | 'angriff' | 'daten' | 'rollen' | 'ernstfall',
     onSelect(sel),              // sel = {typ,id} oder null
     onDrop(payload, pt, node),  // Drop eines Palette-Elements
     legende: '<html>'           // optionale Legende unten links
   })
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.createCanvas = function (opts) {
  'use strict';

  var U = AUDIT.util;
  var F = AUDIT.firma;
  var SVGNS = 'http://www.w3.org/2000/svg';

  var modus = opts.modus || 'werkstatt';
  var wrap = U.el('div', { class: 'canvas-wrap' });
  var svg = U.svg('svg', { class: 'canvas' });
  wrap.appendChild(svg);
  opts.mount.appendChild(wrap);

  /* ---------- defs: Raster, Glow, Pfeil ---------- */
  var gridId = 'auditGrid';
  var defs = U.svg('defs');
  defs.innerHTML =
    '<pattern id="' + gridId + '" width="40" height="40" patternUnits="userSpaceOnUse">' +
    '  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a2430" stroke-width="1"/>' +
    '</pattern>' +
    '<filter id="auditGlow" x="-60%" y="-60%" width="220%" height="220%">' +
    '  <feGaussianBlur stdDeviation="2.4" result="b"/>' +
    '  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>' +
    '</filter>' +
    '<marker id="auditArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
    '  <path d="M 0 0 L 10 5 L 0 10 z" fill="#5c7898"/>' +
    '</marker>';
  svg.appendChild(defs);

  var gridRect = U.svg('rect', { class: 'grid-rect', x: 0, y: 0, width: '100%', height: '100%' });
  svg.appendChild(gridRect);

  var world = U.svg('g', { class: 'world' });
  var lZonen = U.svg('g', { class: 'layer-zonen' });
  var lEdges = U.svg('g', { class: 'layer-edges' });
  var lNodes = U.svg('g', { class: 'layer-nodes' });
  var lFx = U.svg('g', { class: 'layer-fx' });
  world.appendChild(lZonen); world.appendChild(lEdges);
  world.appendChild(lNodes); world.appendChild(lFx);
  svg.appendChild(world);

  /* Legende + Zoom-Knöpfe */
  if (opts.legende) {
    wrap.appendChild(U.el('div', { class: 'canvas-legend', html: opts.legende }));
  }
  var zoomBox = U.el('div', { class: 'canvas-zoom' }, [
    U.el('button', { class: 'btn btn--sm', text: '−', title: 'Herauszoomen', onclick: function () { zoomUm(1 / 1.25); } }),
    U.el('button', { class: 'btn btn--sm', text: '+', title: 'Hineinzoomen', onclick: function () { zoomUm(1.25); } }),
    U.el('button', { class: 'btn btn--sm', text: 'Alles zeigen', onclick: function () { einpassen(); } })
  ]);
  wrap.appendChild(zoomBox);

  /* ---------- Ansicht ---------- */
  var view = { x: 60, y: 40, k: 0.78 };
  var sel = null;          // {typ:'node'|'edge'|'zone', id}
  var hoverCard = null;

  function anwendenView() {
    world.setAttribute('transform', 'translate(' + view.x + ',' + view.y + ') scale(' + view.k + ')');
    var p = defs.querySelector('#' + gridId);
    if (p) p.setAttribute('patternTransform',
      'translate(' + view.x + ',' + view.y + ') scale(' + view.k + ')');
  }

  function rect() { return svg.getBoundingClientRect(); }

  function zuWelt(clientX, clientY) {
    var r = rect();
    return {
      x: (clientX - r.left - view.x) / view.k,
      y: (clientY - r.top - view.y) / view.k
    };
  }

  function zoomUm(f, cx, cy) {
    var r = rect();
    if (cx === undefined) { cx = r.width / 2; cy = r.height / 2; }
    var k2 = U.clamp(view.k * f, 0.22, 2.6);
    f = k2 / view.k;
    view.x = cx - (cx - view.x) * f;
    view.y = cy - (cy - view.y) * f;
    view.k = k2;
    anwendenView();
  }

  function einpassen() {
    var d = F.data;
    var pts = [];
    d.nodes.forEach(function (n) {
      var b = F.def(n);
      pts.push([n.x, n.y], [n.x + (b.w || 150), n.y + (b.h || 78)]);
    });
    d.zonen.forEach(function (z) { pts.push([z.x, z.y], [z.x + z.w, z.y + z.h]); });
    if (!pts.length) { view = { x: 60, y: 40, k: 0.8 }; anwendenView(); return; }
    var minX = Math.min.apply(null, pts.map(function (p) { return p[0]; }));
    var minY = Math.min.apply(null, pts.map(function (p) { return p[1]; }));
    var maxX = Math.max.apply(null, pts.map(function (p) { return p[0]; }));
    var maxY = Math.max.apply(null, pts.map(function (p) { return p[1]; }));
    var r = rect();
    if (!r.width || !r.height) return;
    var pad = 44;
    var k = Math.min((r.width - pad * 2) / Math.max(1, maxX - minX),
                     (r.height - pad * 2) / Math.max(1, maxY - minY));
    /* nicht beliebig weit herauszoomen – sonst wird nichts mehr lesbar */
    view.k = U.clamp(k, 0.4, 1.2);
    view.x = (r.width - (maxX - minX) * view.k) / 2 - minX * view.k;
    view.y = (r.height - (maxY - minY) * view.k) / 2 - minY * view.k;
    anwendenView();
  }

  /* ---------- Hilfen ---------- */

  function box(n) {
    var d = F.def(n);
    return { x: n.x, y: n.y, w: d.w || 150, h: d.h || 78 };
  }
  function mitte(n) { var b = box(n); return { x: b.x + b.w / 2, y: b.y + b.h / 2 }; }

  /* Schnittpunkt der Linie Mitte->Mitte mit dem Rand von Box b */
  function randPunkt(b, zielX, zielY) {
    var cx = b.x + b.w / 2, cy = b.y + b.h / 2;
    var dx = zielX - cx, dy = zielY - cy;
    if (!dx && !dy) return { x: cx, y: cy };
    var sx = (b.w / 2 + 3) / Math.abs(dx || 1e-6);
    var sy = (b.h / 2 + 3) / Math.abs(dy || 1e-6);
    var s = Math.min(sx, sy);
    return { x: cx + dx * s, y: cy + dy * s };
  }

  function kantenPfad(e) {
    var a = F.node(e.from), b = F.node(e.to);
    if (!a || !b) return null;
    var ma = mitte(a), mb = mitte(b);
    var pa = randPunkt(box(a), mb.x, mb.y);
    var pb = randPunkt(box(b), ma.x, ma.y);
    return { d: 'M ' + pa.x + ' ' + pa.y + ' L ' + pb.x + ' ' + pb.y,
             mx: (pa.x + pb.x) / 2, my: (pa.y + pb.y) / 2 };
  }

  /* ---------- Zeichnen ---------- */

  var vererbtCache = {};

  function render() {
    vererbtCache = F.vererbung();
    U.clear(lZonen); U.clear(lEdges); U.clear(lNodes);
    F.data.zonen.forEach(zeichneZone);
    F.data.edges.forEach(zeichneKante);
    F.data.nodes.forEach(zeichneKnoten);
    anwendenView();
  }

  function zeichneZone(z) {
    var d = F.def(z);
    var g = U.svg('g', {
      class: 'zone zone--' + (d.zonetyp || 'raum') + (istSel('zone', z.id) ? ' is-selected' : ''),
      data: { id: z.id, kind: 'zone' },
      transform: 'translate(' + z.x + ',' + z.y + ')'
    });
    g.appendChild(U.svg('rect', { class: 'zone__box', x: 0, y: 0, width: z.w, height: z.h, rx: 12 }));
    g.appendChild(U.svg('text', { class: 'zone__label', x: 14, y: 22, text: (d.icon || '') + '  ' + z.name }));
    /* Schilde der Zone (Zutrittsmaßnahmen) */
    (z.massnahmen || []).forEach(function (mk, i) {
      g.appendChild(schild(mk, z.w - 26 - i * 24, 8, z.id));
    });
    g.appendChild(U.svg('rect', { class: 'zone__handle', x: z.w - 14, y: z.h - 14, width: 14, height: 14, rx: 3 }));
    lZonen.appendChild(g);
  }

  function zeichneKante(e) {
    var p = kantenPfad(e);
    if (!p) return;
    var g = U.svg('g', {
      class: 'edge edge--' + e.art + (istSel('edge', e.id) ? ' is-selected' : '') +
             (e._infiziert ? ' is-infected' : '') + (e._blocked ? ' is-blocked' : ''),
      data: { id: e.id, kind: 'edge' }
    });
    g.appendChild(U.svg('path', { class: 'edge__hit', d: p.d }));
    g.appendChild(U.svg('path', { class: 'edge__line', d: p.d,
      'marker-end': e.art === 'datenfluss' ? 'url(#auditArrow)' : null }));
    if (modus === 'daten' && e.art === 'datenfluss' && (e.daten || []).length) {
      g.appendChild(U.svg('text', { class: 'edge__label', x: p.mx, y: p.my - 7,
        text: e.daten.length + ' Datenart' + (e.daten.length > 1 ? 'en' : '') }));
    }
    g.appendChild(U.svg('title', { text: beschriftungKante(e) }));
    lEdges.appendChild(g);
  }

  function beschriftungKante(e) {
    var a = F.node(e.from), b = F.node(e.to);
    var namen = (a ? a.name : '?') + ' → ' + (b ? b.name : '?');
    var arten = { netz: 'Netzwerkverbindung', hosting: 'läuft auf', datenfluss: 'Datenfluss' };
    return namen + '  (' + (arten[e.art] || e.art) + ')';
  }

  function schild(mk, x, y, besitzerId) {
    var m = (AUDIT.data.massnahmenMap || {})[mk] || { icon: '🛡', name: mk };
    var g = U.svg('g', { class: 'shield', data: { m: mk, besitzer: besitzerId },
      transform: 'translate(' + x + ',' + y + ')' });
    g.appendChild(U.svg('rect', { class: 'shield__bg', x: 0, y: 0, width: 20, height: 18, rx: 5 }));
    g.appendChild(U.svg('text', { class: 'shield__ico', x: 10, y: 10, text: m.icon }));
    g.appendChild(U.svg('title', { text: m.name + (m.kurz ? ' – ' + m.kurz : '') }));
    return g;
  }

  function zeichneKnoten(n) {
    var d = F.def(n);
    var b = box(n);
    var kat = d.kategorie || 'system';
    var infiziert = n.infektion;
    var versteckt = infiziert && infiziert.versteckt && !infiziert.aufgedeckt;

    var klassen = ['node', 'node--' + kat];
    if (istSel('node', n.id)) klassen.push('is-selected');
    if (infiziert) klassen.push(versteckt ? 'is-infected-hidden' : 'is-infected');

    var g = U.svg('g', {
      class: klassen.join(' '),
      data: { id: n.id, kind: 'node', kat: kat },
      transform: 'translate(' + n.x + ',' + n.y + ')'
    });

    g.appendChild(U.svg('rect', { class: 'node__box', x: 0, y: 0, width: b.w, height: b.h, rx: 10 }));
    g.appendChild(U.svg('rect', { class: 'node__accent', x: 0, y: 10, width: 4, height: b.h - 20, rx: 2 }));
    g.appendChild(U.svg('text', { class: 'node__icon', x: 22, y: 22, text: d.icon || '▫' }));
    g.appendChild(U.svg('text', { class: 'node__title', x: 38, y: 20, text: kurz(n.name, 15) }));
    g.appendChild(U.svg('text', { class: 'node__sub', x: 38, y: 34, text: d.label }));

    /* Schutzbedarfs-Balken (Anwendungen + Systeme mit Vererbung) */
    var sb = F.schutzbedarfVon(n, vererbtCache);
    if (sb && (modus === 'werkstatt' || modus === 'angriff' || modus === 'ernstfall')) {
      var zl = ['v', 'i', 'a'];
      for (var i = 0; i < 3; i++) {
        var z = zl[i];
        var w = U.stufeWert(sb[z]);
        var bx = 10 + i * ((b.w - 24) / 3);
        var bw = (b.w - 24) / 3 - 6;
        g.appendChild(U.svg('rect', { class: 'sb-bar sb-bar--bg', x: bx, y: b.h - 17, width: bw, height: 6, rx: 2 }));
        g.appendChild(U.svg('rect', { class: 'sb-bar sb--' + sb[z], x: bx, y: b.h - 17, width: bw * w / 3, height: 6, rx: 2 }));
        g.appendChild(U.svg('text', { class: 'sb-label', x: bx, y: b.h - 21, text: z.toUpperCase() }));
      }
    }

    /* Schilde = gesetzte Maßnahmen */
    (n.massnahmen || []).forEach(function (mk, i) {
      g.appendChild(schild(mk, b.w - 24 - (i % 4) * 23, 6 + Math.floor(i / 4) * 21, n.id));
    });

    /* Infektions-Markierung */
    if (infiziert && !versteckt) {
      g.appendChild(U.svg('text', { class: 'badge-text', x: b.w - 16, y: b.h - 8,
        text: ((AUDIT.data.schadsoftwareMap || {})[infiziert.typ] || {}).icon || '☣' }));
    }

    /* Rolle / Standort als kleine Marke (Station 3) */
    if (modus === 'daten') {
      var pr = n.props || {};
      if (pr.standort === 'drittland') {
        g.appendChild(U.svg('text', { class: 'badge-text', x: b.w - 18, y: b.h - 8, text: '✈️' }));
      }
      if (pr.rolle === 'auftragsverarbeiter') {
        g.appendChild(U.svg('text', { class: 'badge-text', x: b.w - 36, y: b.h - 8, text: '🤝' }));
      }
    }

    /* Anschlusspunkte */
    [[b.w / 2, 0], [b.w, b.h / 2], [b.w / 2, b.h], [0, b.h / 2]].forEach(function (p, i) {
      g.appendChild(U.svg('circle', { class: 'port', cx: p[0], cy: p[1], r: 5, data: { port: i } }));
    });

    g.appendChild(U.svg('title', { text: n.name + ' – ' + d.label }));
    lNodes.appendChild(g);
  }

  function kurz(s, n) {
    s = String(s || '');
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  /* Nur Position aktualisieren (schnell, während des Ziehens) */
  function updatePos(id) {
    var g = lNodes.querySelector('[data-id="' + id + '"]');
    var n = F.node(id);
    if (g && n) g.setAttribute('transform', 'translate(' + n.x + ',' + n.y + ')');
    var z = F.zone(id);
    var gz = lZonen.querySelector('[data-id="' + id + '"]');
    if (gz && z) gz.setAttribute('transform', 'translate(' + z.x + ',' + z.y + ')');
    /* betroffene Kanten neu zeichnen */
    F.data.edges.forEach(function (e) {
      if (e.from !== id && e.to !== id) return;
      var ge = lEdges.querySelector('[data-id="' + e.id + '"]');
      if (!ge) return;
      var p = kantenPfad(e);
      if (!p) return;
      U.$$('path', ge).forEach(function (pp) { pp.setAttribute('d', p.d); });
    });
  }

  /* ---------- Auswahl ---------- */

  function istSel(typ, id) { return sel && sel.typ === typ && sel.id === id; }

  function select(typ, id, still) {
    sel = (typ && id) ? { typ: typ, id: id } : null;
    U.$$('.is-selected', svg).forEach(function (e) { e.classList.remove('is-selected'); });
    if (sel) {
      var g = svg.querySelector('[data-id="' + id + '"]');
      if (g) g.classList.add('is-selected');
    }
    if (!still && opts.onSelect) opts.onSelect(sel);
  }

  /* ---------- Interaktion ---------- */

  var drag = null;   // {art:'pan'|'node'|'zone'|'resize'|'link', ...}

  svg.addEventListener('pointerdown', function (e) {
    if (e.button !== undefined && e.button > 1) return;
    var t = e.target;
    var portEl = t.classList && t.classList.contains('port') ? t : null;
    var handleEl = t.classList && t.classList.contains('zone__handle') ? t : null;
    var nodeG = t.closest ? t.closest('.node') : null;
    var zoneG = t.closest ? t.closest('.zone') : null;
    var edgeG = t.closest ? t.closest('.edge') : null;
    var shieldG = t.closest ? t.closest('.shield') : null;

    /* Klick auf ein Schild: Maßnahme erklären */
    if (shieldG) {
      e.stopPropagation();
      var mk = shieldG.getAttribute('data-m');
      if (opts.onShield) opts.onShield(mk, shieldG.getAttribute('data-besitzer'));
      return;
    }

    /* Verbinden starten */
    if (portEl && nodeG) {
      e.stopPropagation();
      var startN = F.node(nodeG.getAttribute('data-id'));
      if (!startN) return;
      nodeG.classList.add('is-linksource');
      var pv = U.svg('path', { class: 'linkpreview' });
      lFx.appendChild(pv);
      drag = { art: 'link', from: startN, preview: pv, srcEl: nodeG };
      wrap.classList.add('is-linking');
      svg.setPointerCapture(e.pointerId);
      return;
    }

    /* Zone skalieren */
    if (handleEl && zoneG) {
      e.stopPropagation();
      var zz = F.zone(zoneG.getAttribute('data-id'));
      if (!zz) return;
      F.snapshot();
      drag = { art: 'resize', zone: zz, start: zuWelt(e.clientX, e.clientY), w0: zz.w, h0: zz.h };
      svg.setPointerCapture(e.pointerId);
      return;
    }

    /* Knoten ziehen */
    if (nodeG) {
      var n = F.node(nodeG.getAttribute('data-id'));
      if (!n) return;
      select('node', n.id);
      F.snapshot();
      nodeG.classList.add('is-dragging');
      drag = { art: 'node', node: n, start: zuWelt(e.clientX, e.clientY), x0: n.x, y0: n.y, bewegt: false, el: nodeG };
      svg.setPointerCapture(e.pointerId);
      return;
    }

    /* Kante auswählen */
    if (edgeG) {
      select('edge', edgeG.getAttribute('data-id'));
      return;
    }

    /* Zone ziehen (nimmt enthaltene Knoten mit) */
    if (zoneG) {
      var z = F.zone(zoneG.getAttribute('data-id'));
      if (!z) return;
      select('zone', z.id);
      F.snapshot();
      var drin = F.knotenInZone(z).map(function (k) { return { n: k, x0: k.x, y0: k.y }; });
      drag = { art: 'zone', zone: z, start: zuWelt(e.clientX, e.clientY), x0: z.x, y0: z.y, kinder: drin };
      svg.setPointerCapture(e.pointerId);
      return;
    }

    /* Hintergrund: verschieben */
    select(null, null);
    drag = { art: 'pan', sx: e.clientX, sy: e.clientY, vx: view.x, vy: view.y };
    wrap.classList.add('is-panning');
    svg.setPointerCapture(e.pointerId);
  });

  svg.addEventListener('pointermove', function (e) {
    if (!drag) {
      zeigeHoverKarte(e);
      return;
    }
    if (drag.art === 'pan') {
      view.x = drag.vx + (e.clientX - drag.sx);
      view.y = drag.vy + (e.clientY - drag.sy);
      anwendenView();
      return;
    }
    var p = zuWelt(e.clientX, e.clientY);
    if (drag.art === 'node') {
      drag.node.x = Math.round(drag.x0 + (p.x - drag.start.x));
      drag.node.y = Math.round(drag.y0 + (p.y - drag.start.y));
      drag.bewegt = true;
      updatePos(drag.node.id);
      return;
    }
    if (drag.art === 'zone') {
      var dx = p.x - drag.start.x, dy = p.y - drag.start.y;
      drag.zone.x = Math.round(drag.x0 + dx);
      drag.zone.y = Math.round(drag.y0 + dy);
      drag.kinder.forEach(function (k) {
        k.n.x = Math.round(k.x0 + dx); k.n.y = Math.round(k.y0 + dy);
        updatePos(k.n.id);
      });
      updatePos(drag.zone.id);
      var gz = lZonen.querySelector('[data-id="' + drag.zone.id + '"]');
      if (gz) gz.setAttribute('transform', 'translate(' + drag.zone.x + ',' + drag.zone.y + ')');
      return;
    }
    if (drag.art === 'resize') {
      drag.zone.w = Math.max(140, Math.round(drag.w0 + (p.x - drag.start.x)));
      drag.zone.h = Math.max(110, Math.round(drag.h0 + (p.y - drag.start.y)));
      var g2 = lZonen.querySelector('[data-id="' + drag.zone.id + '"]');
      if (g2) {
        var r = g2.querySelector('.zone__box');
        r.setAttribute('width', drag.zone.w); r.setAttribute('height', drag.zone.h);
        var h = g2.querySelector('.zone__handle');
        h.setAttribute('x', drag.zone.w - 14); h.setAttribute('y', drag.zone.h - 14);
      }
      return;
    }
    if (drag.art === 'link') {
      var m = mitte(drag.from);
      drag.preview.setAttribute('d', 'M ' + m.x + ' ' + m.y + ' L ' + p.x + ' ' + p.y);
      /* Hover-Markierung auf möglichem Ziel */
      U.$$('.node.is-drophover', svg).forEach(function (x) { x.classList.remove('is-drophover'); });
      var ziel = knotenAn(e.clientX, e.clientY);
      if (ziel && ziel.id !== drag.from.id) {
        var gz2 = lNodes.querySelector('[data-id="' + ziel.id + '"]');
        if (gz2) gz2.classList.add('is-drophover');
      }
    }
  });

  function ende(e) {
    if (!drag) return;
    wrap.classList.remove('is-panning', 'is-linking');
    if (drag.art === 'link') {
      if (drag.preview.parentNode) drag.preview.parentNode.removeChild(drag.preview);
      if (drag.srcEl) drag.srcEl.classList.remove('is-linksource');
      U.$$('.node.is-drophover', svg).forEach(function (x) { x.classList.remove('is-drophover'); });
      var ziel = knotenAn(e.clientX, e.clientY);
      if (ziel && ziel.id !== drag.from.id) {
        var neu = F.neueKante(drag.from.id, ziel.id);
        if (neu) {
          select('edge', neu.id, true);
          erklaereKante(neu);
        }
      }
      drag = null;
      return;
    }
    if (drag.art === 'node') {
      if (drag.el) drag.el.classList.remove('is-dragging');
      if (drag.bewegt) F.changed('position'); else undoStack_pop();
    }
    if (drag.art === 'zone' || drag.art === 'resize') F.changed('position');
    drag = null;
  }
  svg.addEventListener('pointerup', ende);
  svg.addEventListener('pointercancel', function () {
    if (drag && drag.art === 'link' && drag.preview.parentNode) {
      drag.preview.parentNode.removeChild(drag.preview);
    }
    wrap.classList.remove('is-panning', 'is-linking');
    drag = null;
  });

  /* Ein Snapshot zu viel? (Klick ohne Bewegung) */
  function undoStack_pop() { /* bewusst leer: ein Snapshot mehr stört nicht */ }

  svg.addEventListener('wheel', function (e) {
    e.preventDefault();
    var r = rect();
    zoomUm(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });

  svg.addEventListener('dblclick', function (e) {
    var g = e.target.closest ? e.target.closest('.node') : null;
    if (g && opts.onDblClick) opts.onDblClick(F.node(g.getAttribute('data-id')));
  });

  function knotenAn(clientX, clientY) {
    var el = document.elementFromPoint(clientX, clientY);
    var g = el && el.closest ? el.closest('.node') : null;
    return g ? F.node(g.getAttribute('data-id')) : null;
  }
  function zoneAn(clientX, clientY) {
    var el = document.elementFromPoint(clientX, clientY);
    var g = el && el.closest ? el.closest('.zone') : null;
    return g ? F.zone(g.getAttribute('data-id')) : null;
  }

  /* Kurze Erklärung, welche Art Verbindung entstanden ist */
  function erklaereKante(e) {
    if (e.art === 'hosting') {
      U.toast('Verbindung <b>„läuft auf“</b>: Die Anwendung wird auf diesem System betrieben. ' +
        'Das System erbt jetzt deren [[Maximumprinzip|Schutzbedarf]].', 'ok');
    } else if (e.art === 'netz') {
      U.toast('<b>Netzwerkverbindung</b> angelegt. Über solche Leitungen breitet sich später ein [[Wurm]] aus.', 'ok');
    } else {
      U.toast('<b>Datenfluss</b> angelegt. In Station 3 legst du fest, welche Daten hier fließen, ' +
        'zu welchem Zweck und auf welcher [[Rechtsgrundlage]].', 'ok');
    }
  }

  /* ---------- Hover-Infokarte ---------- */

  function zeigeHoverKarte(e) {
    if (!opts.hoverInfo) return;
    var n = knotenAn(e.clientX, e.clientY);
    if (!n) { versteckeHoverKarte(); return; }
    var html = opts.hoverInfo(n);
    if (!html) { versteckeHoverKarte(); return; }
    if (!hoverCard) {
      hoverCard = U.el('div', { class: 'hovercard' });
      wrap.appendChild(hoverCard);
    }
    hoverCard.innerHTML = html;
    var r = rect();
    var x = e.clientX - r.left + 16, y = e.clientY - r.top + 10;
    if (x + 260 > r.width) x = r.width - 262;
    if (y + 140 > r.height) y = Math.max(4, r.height - 142);
    hoverCard.style.left = x + 'px';
    hoverCard.style.top = y + 'px';
    hoverCard.style.display = 'block';
  }
  function versteckeHoverKarte() { if (hoverCard) hoverCard.style.display = 'none'; }
  wrap.addEventListener('pointerleave', versteckeHoverKarte);

  /* ---------- Drop-Ziel für die Palette ---------- */

  AUDIT.dnd.ziel(svg, {
    accept: function (p) { return !!p; },
    drop: function (payload, e) {
      var pt = zuWelt(e.clientX, e.clientY);
      var n = knotenAn(e.clientX, e.clientY);
      var z = zoneAn(e.clientX, e.clientY);
      if (opts.onDrop) opts.onDrop(payload, pt, n, z);
    }
  });

  /* ---------- Effekte ---------- */

  /* Datenpaket über eine Kante laufen lassen.
     cb wird am Ende aufgerufen. */
  function paket(edgeId, o) {
    o = o || {};
    var e = F.edge(edgeId);
    if (!e) { if (o.fertig) o.fertig(); return; }
    var p = kantenPfad(e);
    if (!p) { if (o.fertig) o.fertig(); return; }
    var pfad = U.svg('path', { d: p.d, fill: 'none', stroke: 'none' });
    lFx.appendChild(pfad);
    var laenge = pfad.getTotalLength();
    var punkt = U.svg('circle', { class: 'packet' + (o.klasse ? ' packet--' + o.klasse : ''), r: o.r || 4.5 });
    lFx.appendChild(punkt);
    var rueck = o.rueckwaerts;
    var dauer = o.dauer || 900;
    var t0 = null;
    function schritt(t) {
      if (!t0) t0 = t;
      var f = U.clamp((t - t0) / dauer, 0, 1);
      var pos = pfad.getPointAtLength((rueck ? 1 - f : f) * laenge);
      punkt.setAttribute('cx', pos.x);
      punkt.setAttribute('cy', pos.y);
      if (f < 1) { requestAnimationFrame(schritt); }
      else {
        if (o.bleiben) {
          punkt.setAttribute('class', 'packet packet--' + (o.endKlasse || 'bad'));
          setTimeout(function () { weg(); }, o.bleiben);
        } else { weg(); }
        if (o.fertig) o.fertig();
      }
    }
    function weg() {
      if (punkt.parentNode) punkt.parentNode.removeChild(punkt);
      if (pfad.parentNode) pfad.parentNode.removeChild(pfad);
    }
    requestAnimationFrame(schritt);
  }

  /* Pulsierender Ring auf einem Knoten (Infektion) */
  function puls(nodeId, farbklasse) {
    var n = F.node(nodeId);
    if (!n) return;
    var b = box(n);
    var c = U.svg('circle', {
      class: 'infect-pulse', cx: b.x + b.w / 2, cy: b.y + b.h / 2, r: 10,
      stroke: farbklasse === 'ok' ? 'var(--ok)' : 'var(--bad)'
    });
    lFx.appendChild(c);
    var t0 = null, dauer = 800;
    function schritt(t) {
      if (!t0) t0 = t;
      var f = U.clamp((t - t0) / dauer, 0, 1);
      c.setAttribute('r', 10 + f * Math.max(b.w, b.h) * 0.9);
      c.setAttribute('opacity', (1 - f) * 0.9);
      if (f < 1) requestAnimationFrame(schritt);
      else if (c.parentNode) c.parentNode.removeChild(c);
    }
    requestAnimationFrame(schritt);
  }

  /* Aufblitzendes Schild: Maßnahme hat gegriffen */
  function schildBlitz(nodeId) {
    var n = F.node(nodeId) || F.zone(nodeId);
    if (!n) return;
    var b = n.w ? { x: n.x, y: n.y, w: n.w, h: n.h } : box(n);
    var c = U.svg('circle', { class: 'shieldflash', cx: b.x + b.w / 2, cy: b.y + b.h / 2, r: Math.max(b.w, b.h) / 2 });
    lFx.appendChild(c);
    setTimeout(function () { if (c.parentNode) c.parentNode.removeChild(c); }, 950);
  }

  function textFx(nodeId, text, klasse) {
    var n = F.node(nodeId) || F.zone(nodeId);
    if (!n) return;
    var b = n.w ? { x: n.x, y: n.y, w: n.w, h: n.h } : box(n);
    var t = U.svg('text', {
      x: b.x + b.w / 2, y: b.y - 8, text: text,
      'text-anchor': 'middle',
      style: { font: '600 13px var(--font)', fill: klasse === 'ok' ? 'var(--ok)' : (klasse === 'warn' ? 'var(--warn)' : 'var(--bad)') }
    });
    lFx.appendChild(t);
    var t0 = null;
    function schritt(ts) {
      if (!t0) t0 = ts;
      var f = U.clamp((ts - t0) / 1500, 0, 1);
      t.setAttribute('y', b.y - 8 - f * 26);
      t.setAttribute('opacity', 1 - f);
      if (f < 1) requestAnimationFrame(schritt);
      else if (t.parentNode) t.parentNode.removeChild(t);
    }
    requestAnimationFrame(schritt);
  }

  function fxLeeren() { U.clear(lFx); }

  /* ---------- Tastatur ---------- */

  function tasten(e) {
    if (!wrap.offsetParent) return;                       // Station nicht sichtbar
    var tag = (document.activeElement || {}).tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if ((e.key === 'Delete' || e.key === 'Backspace') && sel) {
      e.preventDefault();
      if (F.loesche(sel.id)) { select(null, null); U.toast('Element gelöscht.', 'ok', 1600); }
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
      e.preventDefault(); F.undo(); select(null, null);
    }
  }
  document.addEventListener('keydown', tasten);

  /* ---------- Modell-Änderungen ---------- */

  F.onChange(function (was) {
    if (!wrap.isConnected) return;
    if (was === 'position') return;      // Positionen werden direkt aktualisiert
    render();
  });

  render();
  setTimeout(einpassen, 30);

  return {
    wrap: wrap, svg: svg,
    render: render, einpassen: einpassen, zoomUm: zoomUm,
    select: select, get sel() { return sel; },
    zuWelt: zuWelt, knotenAn: knotenAn, zoneAn: zoneAn, box: box, mitte: mitte,
    paket: paket, puls: puls, schildBlitz: schildBlitz, textFx: textFx, fxLeeren: fxLeeren,
    get modus() { return modus; },
    set modus(m) { modus = m; render(); }
  };
};
