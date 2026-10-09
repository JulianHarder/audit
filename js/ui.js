/* ===========================================================
   AUDIT – js/ui.js
   Wiederverwendbare Oberflächen-Teile, die mehrere Stationen
   brauchen: Werkzeugleiste für die Firma, Speichern/Laden,
   Schutzbedarfs-Umschalter, Balken, Panel-Gerüst.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.ui = (function () {
  'use strict';
  var U = AUDIT.util;
  var F = AUDIT.firma;

  /* ---------- Werkzeugleiste ---------- */

  function firmaToolbar(cv, extras) {
    var bar = U.el('div', { class: 'toolbar' });

    function btn(label, titel, fn, klasse) {
      return U.el('button', { class: 'btn btn--sm' + (klasse ? ' ' + klasse : ''), text: label, title: titel, onclick: fn });
    }

    bar.appendChild(U.el('span', {
      class: 'toolbar__hint', id: 'firmaName',
      html: '<b style="color:var(--text)">' + U.esc(F.data.name) + '</b>'
    }));
    bar.appendChild(U.el('div', { class: 'toolbar__sep' }));
    bar.appendChild(btn('Vorlage', 'Beispielfirma „Lippe Logistik GmbH“ laden', function () {
      U.modal('Vorlage laden?',
        '<p>Damit wird die aktuelle Arbeitsfläche <b>überschrieben</b>. ' +
        'Die Beispielfirma enthält absichtlich einige Schwachstellen, die du in den Stationen findest.</p>',
        [{ label: 'Abbrechen' }, {
          label: 'Vorlage laden', primary: true, onClick: function (close) {
            F.ladeVorlage(); close(); setTimeout(function () { cv.einpassen(); }, 20);
          }
        }]);
    }));
    bar.appendChild(btn('Leere Fläche', 'Freier Modus: eigene Firma von Null aufbauen', function () {
      U.modal('Leere Fläche?', '<p>Die aktuelle Firma wird verworfen. Fortfahren?</p>',
        [{ label: 'Abbrechen' }, {
          label: 'Leeren', danger: true, onClick: function (close) {
            F.neu(); close(); U.toast('Leere Fläche. Zieh links Bausteine auf die Fläche.', 'ok');
          }
        }]);
    }));
    bar.appendChild(U.el('div', { class: 'toolbar__sep' }));
    bar.appendChild(btn('Speichern', 'Firma im Browser speichern', speichernDialog));
    bar.appendChild(btn('Laden', 'Gespeicherte Firma laden', function () { ladenDialog(cv); }));
    bar.appendChild(U.el('div', { class: 'toolbar__sep' }));
    bar.appendChild(btn('↶ Rückgängig', 'Letzte Änderung zurücknehmen (Strg+Z)', function () { F.undo(); }));
    bar.appendChild(btn('Löschen', 'Ausgewähltes Element löschen (Entf-Taste)', function () {
      if (cv.sel && F.loesche(cv.sel.id)) { cv.select(null, null); U.toast('Element gelöscht.', 'ok', 1500); }
      else U.toast('Erst ein Element anklicken.', 'warn', 1800);
    }, 'btn--danger'));

    if (extras) {
      bar.appendChild(U.el('div', { class: 'toolbar__sep' }));
      extras.forEach(function (e) { bar.appendChild(e); });
    }

    bar.appendChild(U.el('div', { class: 'toolbar__spacer' }));
    bar.appendChild(U.el('span', {
      class: 'toolbar__hint',
      text: 'Ziehen = verschieben · Mausrad = Zoom · Anschlusspunkt ziehen = verbinden'
    }));

    F.onChange(function () {
      var t = bar.querySelector('#firmaName');
      if (t) t.innerHTML = '<b style="color:var(--text)">' + U.esc(F.data.name) + '</b>';
    });
    return bar;
  }

  function speichernDialog() {
    var m = U.modal('Firma speichern',
      '<div class="field"><label for="svname">Name</label>' +
      '<input type="text" id="svname" value="' + U.esc(F.data.name) + '"></div>' +
      (AUDIT.storage.verfuegbar ? '' :
        '<div class="note note--warn">Der Browser erlaubt hier keinen dauerhaften Speicher ' +
        '(localStorage blockiert). Die Firma bleibt nur bis zum Neuladen erhalten.</div>'),
      [{ label: 'Abbrechen' }, {
        label: 'Speichern', primary: true, onClick: function (close, body) {
          var name = (body.querySelector('#svname').value || '').trim() || 'Firma';
          F.data.name = name;
          var ok = AUDIT.storage.firmaSpeichern(name, F.serialisieren());
          F.changed('name');
          close();
          U.toast(ok ? 'Firma <b>' + U.esc(name) + '</b> gespeichert.' :
            'Gespeichert, aber nur für diese Sitzung (kein dauerhafter Speicher verfügbar).',
            ok ? 'ok' : 'warn');
        }
      }]);
    setTimeout(function () { var i = m.body.querySelector('#svname'); if (i) i.select(); }, 60);
  }

  function ladenDialog(cv) {
    var liste = AUDIT.storage.firmenListe();
    var html = liste.length
      ? '<table class="t"><tr><th>Name</th><th>Gespeichert</th><th></th></tr>' +
        liste.map(function (f) {
          var d = new Date(f.zeit);
          return '<tr><td>' + U.esc(f.name) + '</td><td>' +
            (isNaN(d) ? '-' : d.toLocaleString('de-DE')) + '</td>' +
            '<td style="white-space:nowrap">' +
            '<button class="btn btn--sm btn--primary" data-load="' + U.esc(f.name) + '">Laden</button> ' +
            '<button class="btn btn--sm btn--danger" data-del="' + U.esc(f.name) + '">Löschen</button>' +
            '</td></tr>';
        }).join('') + '</table>'
      : '<p>Noch keine Firma gespeichert.</p>';

    var m = U.modal('Firma laden', html, [{ label: 'Schließen' }]);
    m.body.addEventListener('click', function (e) {
      var l = e.target.getAttribute && e.target.getAttribute('data-load');
      var d = e.target.getAttribute && e.target.getAttribute('data-del');
      if (l) {
        var daten = AUDIT.storage.firmaLaden(l);
        if (daten) {
          F.laden(daten);
          U.toast('Firma <b>' + U.esc(l) + '</b> geladen.', 'ok');
          m.close();
          setTimeout(function () { if (cv) cv.einpassen(); }, 20);
        }
      }
      if (d) {
        AUDIT.storage.firmaLoeschen(d);
        m.close();
        U.toast('Gespeicherte Firma gelöscht.', 'ok', 1800);
      }
    });
  }

  /* ---------- Schutzbedarf-Umschalter ---------- */

  function segment(aktuell, onPick) {
    var box = U.el('div', { class: 'seg' });
    AUDIT.data.stufen.forEach(function (s) {
      box.appendChild(U.el('button', {
        class: aktuell === s.key ? 'is-on' : '',
        data: { stufe: s.key },
        text: s.name,
        title: s.auswirkung,
        onclick: function () { onPick(s.key); }
      }));
    });
    return box;
  }

  /* Balken für ein Schutzziel */
  function balken(stufeKey) {
    var w = U.stufeWert(stufeKey) / 3 * 100;
    var farben = { normal: 'var(--sb-normal)', hoch: 'var(--sb-hoch)', sehrhoch: 'var(--sb-sehrhoch)' };
    return U.el('div', { class: 'bar' }, U.el('div', {
      class: 'bar__fill', style: { width: w + '%', background: farben[stufeKey] || 'var(--sb-normal)' }
    }));
  }

  /* kleine Marke für eine Stufe */
  function stufenTag(stufeKey) {
    return U.el('span', { class: 'tag tag--' + stufeKey, text: U.stufeName(stufeKey) });
  }

  /* Überschrift im Panel mit Icon */
  function panelKopf(icon, titel, unter) {
    var wrap = U.el('div');
    wrap.appendChild(U.el('h2', {}, [
      U.el('span', { text: icon || '' }),
      U.el('span', { text: titel })
    ]));
    if (unter) wrap.appendChild(U.el('p', { class: 'sub', html: U.lexify(unter) }));
    return wrap;
  }

  /* Textfeld für den Namen eines Knotens */
  function namensFeld(n, onDone) {
    var f = U.el('div', { class: 'field' });
    f.appendChild(U.el('label', { text: 'Bezeichnung' }));
    var i = U.el('input', { type: 'text', value: n.name || '' });
    i.addEventListener('change', function () {
      F.snapshot();
      n.name = i.value || F.def(n).label;
      F.changed('name');
      if (onDone) onDone();
    });
    f.appendChild(i);
    return f;
  }

  /* Auswahlfeld */
  function select(label, optionen, wert, onChange) {
    var f = U.el('div', { class: 'field' });
    if (label) f.appendChild(U.el('label', { text: label }));
    var s = U.el('select');
    optionen.forEach(function (o) {
      s.appendChild(U.el('option', { value: o.value, text: o.label, selected: o.value === wert ? 'selected' : null }));
    });
    s.value = wert;
    s.addEventListener('change', function () { onChange(s.value); });
    f.appendChild(s);
    return f;
  }

  function checkbox(label, wert, onChange, titel) {
    var l = U.el('label', { class: 'check', title: titel || '' });
    var c = U.el('input', { type: 'checkbox' });
    c.checked = !!wert;
    c.addEventListener('change', function () { onChange(c.checked); });
    l.appendChild(c);
    l.appendChild(U.el('span', { html: U.lexify(label) }));
    return l;
  }

  function note(text, art) {
    return U.el('div', { class: 'note' + (art ? ' note--' + art : ''), html: U.lexify(text) });
  }
  function merk(text) {
    return U.el('div', { class: 'merk', html: U.lexify(text) });
  }
  function karte(titel, inhaltHtml, art) {
    return U.el('div', { class: 'card' + (art ? ' card--' + art : '') }, [
      U.el('div', { class: 'card__h', html: U.lexify(titel) }),
      U.el('div', { class: 'card__b', html: U.lexify(inhaltHtml) })
    ]);
  }

  return {
    firmaToolbar: firmaToolbar, speichernDialog: speichernDialog, ladenDialog: ladenDialog,
    segment: segment, balken: balken, stufenTag: stufenTag, panelKopf: panelKopf,
    namensFeld: namensFeld, select: select, checkbox: checkbox,
    note: note, merk: merk, karte: karte
  };
})();
