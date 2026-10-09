/* ===========================================================
   AUDIT – js/daten.js
   Station 3 "Daten": DSGVO in vier Teilen
     A  Datenflüsse prüfen (Audit auf der Arbeitsfläche)
     B  Formular-Werkstatt (Privacy by Design / by Default)
     C  Daten-Labor (Pseudonymisierung / Anonymisierung)
     D  Betroffenen-Postfach (Art. 12–22)
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.stationen = AUDIT.stationen || [];

AUDIT.stationen.push({
  key: 'daten',
  num: '3',
  label: 'Daten',
  icon: '🗃️',
  titel: 'Daten – DSGVO, Privacy by Design und Betroffenenrechte',
  kurz: 'Datenflüsse prüfen, Formulare datenschutzfreundlich bauen, anonymisieren, Anfragen beantworten.',

  build: function (container) {
    var U = AUDIT.util, F = AUDIT.firma, ui = AUDIT.ui, D = AUDIT.data;

    var wrap = U.el('div', {
      style: { display: 'flex', flexDirection: 'column', width: '100%', minWidth: '0', minHeight: '0' }
    });
    container.appendChild(wrap);

    var tabsBox = U.el('div', { class: 'tabs', style: { margin: '0', padding: '0 14px', background: 'var(--bg-2)' } });
    wrap.appendChild(tabsBox);

    var body = U.el('div', { style: { flex: '1', minHeight: '0', display: 'flex', width: '100%' } });
    wrap.appendChild(body);

    var teile = [
      { key: 'fluss',    label: 'A · Datenflüsse' },
      { key: 'formular', label: 'B · Formular-Werkstatt' },
      { key: 'labor',    label: 'C · Daten-Labor' },
      { key: 'postfach', label: 'D · Betroffenen-Postfach' }
    ];
    var inhalte = {};
    var aktiv = 'fluss';

    teile.forEach(function (t) {
      tabsBox.appendChild(U.el('button', {
        class: 'tab', data: { tab: t.key }, text: t.label,
        onclick: function () { zeigeTeil(t.key); }
      }));
      var el = U.el('div', { style: { display: 'none', width: '100%', minWidth: '0', flex: '1' } });
      inhalte[t.key] = el;
      body.appendChild(el);
    });

    function zeigeTeil(key) {
      aktiv = key;
      teile.forEach(function (t) {
        inhalte[t.key].style.display = t.key === key ? 'flex' : 'none';
      });
      U.$$('.tab', tabsBox).forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-tab') === key);
      });
      if (key === 'fluss' && cv) setTimeout(function () { cv.render(); cv.einpassen(); }, 20);
    }

    /* =======================================================
       TEIL A – Datenflüsse
       ======================================================= */

    var cv = null;
    var auditLauf = null;

    var stageA = U.el('div', { class: 'stage' });
    var panelA = U.el('aside', { class: 'panel' });
    inhalte.fluss.appendChild(stageA);
    inhalte.fluss.appendChild(panelA);

    var mountA = U.el('div', { style: { flex: '1', minHeight: '0', display: 'flex' } });
    stageA.appendChild(U.el('div'));
    stageA.appendChild(mountA);

    cv = AUDIT.createCanvas({
      mount: mountA,
      modus: 'daten',
      legende: '<b>Datenflüsse</b><br>Gestrichelte Pfeile = personenbezogene Daten<br>' +
               '✈️ = Drittland · 🤝 = Auftragsverarbeiter',
      onSelect: function (sel) { zeichnePanelA(sel); },
      hoverInfo: function (n) {
        var p = n.props || {};
        return '<b>' + U.esc(n.name) + '</b>' +
          ((p.rolle === 'auftragsverarbeiter') ? 'Auftragsverarbeiter' + (p.avvertrag ? ' (AV-Vertrag ✓)' : ' <span style="color:var(--bad)">ohne AV-Vertrag</span>') : 'Verantwortlicher') +
          '<br>Standort: ' + ((p.standort || F.zonetypVon(n)) === 'drittland' ? 'Drittland' : 'EU/EWR');
      }
    });

    var btnAudit = U.el('button', {
      class: 'btn btn--primary btn--sm', text: '🔍 Audit starten',
      title: 'Alle Datenflüsse nacheinander prüfen',
      onclick: starteAudit
    });
    stageA.replaceChild(ui.firmaToolbar(cv, [btnAudit]), stageA.firstChild);

    function starteAudit() {
      var erg = AUDIT.pruefung.audit();
      auditLauf = erg;
      cv.select(null, null);
      zeichnePanelA(null);

      if (!erg.fluesse.length) {
        U.toast('Es gibt noch keine Datenflüsse. Verbinde eine <b>Person</b> mit einer <b>Anwendung</b> ' +
          'und stelle die Verbindung auf „Datenfluss“.', 'warn');
        return;
      }

      /* Pakete nacheinander laufen lassen */
      erg.fluesse.forEach(function (e, i) {
        setTimeout(function () {
          var befunde = erg.proKante[e.id] || [];
          var schlimm = befunde.some(function (b) { return b.schwere === 'bad'; });
          var klasse = !((e.daten || []).length) ? 'ok' : (schlimm ? 'bad' : (befunde.length ? 'warn' : 'ok'));
          cv.paket(e.id, { klasse: klasse, dauer: 850, bleiben: befunde.length ? 900 : 0, endKlasse: klasse });
          if (befunde.length) {
            var ziel = F.node(e.to);
            if (ziel) cv.textFx(ziel.id, befunde[0].norm, schlimm ? 'bad' : 'warn');
          }
        }, i * 420);
      });

      setTimeout(function () {
        zeichnePanelA(null);
        var schwer = erg.befunde.filter(function (b) { return b.befund.schwere === 'bad'; }).length;
        U.toast('Audit fertig: <b>' + erg.befunde.length + ' Befund(e)</b>, davon ' + schwer +
          ' schwerwiegend. Die Auswertung steht rechts im Panel.', schwer ? 'bad' : (erg.befunde.length ? 'warn' : 'ok'));
        fortschritt();
      }, erg.fluesse.length * 420 + 700);
    }

    function zeichnePanelA(sel) {
      U.clear(panelA);
      if (sel && sel.typ === 'edge') { panelKante(F.edge(sel.id)); return; }
      if (sel && sel.typ === 'node') { panelKnoten(F.node(sel.id)); return; }
      panelAuditUebersicht();
    }

    function panelAuditUebersicht() {
      panelA.appendChild(ui.panelKopf('🔍', 'Datenflüsse prüfen',
        'Klick eine gestrichelte Verbindung an und lege fest: welche Daten, welcher Zweck, welche Rechtsgrundlage. ' +
        'Dann „Audit starten“.'));

      if (auditLauf) {
        var erg = auditLauf;
        var schwer = erg.befunde.filter(function (b) { return b.befund.schwere === 'bad'; });
        panelA.appendChild(U.el('div', { class: 'card card--' + (schwer.length ? 'bad' : (erg.befunde.length ? 'warn' : 'ok')) }, [
          U.el('div', { class: 'card__h', text: 'Ergebnis des Audits' }),
          U.el('div', { class: 'card__b', html:
            '<p>' + erg.geprueft.length + ' Datenflüsse mit personenbezogenen Daten geprüft.<br>' +
            '<b style="color:var(--ok)">' + erg.sauber.length + ' ohne Beanstandung</b> · ' +
            '<b style="color:var(--bad)">' + schwer.length + ' schwerwiegende Befunde</b> · ' +
            (erg.befunde.length - schwer.length) + ' Hinweise</p>' })
        ]));

        /* nach Regel gruppieren */
        var nachRegel = {};
        erg.befunde.forEach(function (b) {
          (nachRegel[b.befund.regel] = nachRegel[b.befund.regel] || []).push(b);
        });
        Object.keys(nachRegel).forEach(function (k) {
          var liste = nachRegel[k];
          var r = liste[0].befund;
          var karte = U.el('div', { class: 'card card--' + (r.schwere === 'bad' ? 'bad' : 'warn') });
          karte.appendChild(U.el('div', { class: 'card__h',
            html: U.esc(r.titel) + ' <span class="tag tag--art">' + U.esc(r.norm) + '</span>' }));
          var b = U.el('div', { class: 'card__b' });
          b.appendChild(U.el('p', { html: U.rich(r.text) }));
          liste.forEach(function (x) {
            var von = F.node(x.edge.from), zu = F.node(x.edge.to);
            var zeile = U.el('p', {
              style: { color: 'var(--text-mute)' },
              html: '→ ' + U.esc((von ? von.name : '?') + ' → ' + (zu ? zu.name : '?')) +
                (x.befund.zusatz ? '<br><span style="color:var(--warn)">' + U.esc(x.befund.zusatz) + '</span>' : '')
            });
            zeile.appendChild(U.el('br'));
            zeile.appendChild(U.el('button', {
              class: 'btn btn--sm', text: 'Hinspringen',
              onclick: function () { cv.select('edge', x.edge.id); }
            }));
            b.appendChild(zeile);
          });
          karte.appendChild(b);
          panelA.appendChild(karte);
        });

        if (!erg.befunde.length) {
          panelA.appendChild(ui.note('Alle geprüften Datenflüsse sind in Ordnung. ' +
            'Denk daran: Das ersetzt kein echtes [[Verzeichnis von Verarbeitungstätigkeiten]] (Art. 30).', 'ok'));
        }
      }

      panelA.appendChild(U.el('h3', { text: 'Worauf geprüft wird' }));
      D.pruefregeln.forEach(function (r) {
        panelA.appendChild(U.el('div', { class: 'card card--' + (r.schwere === 'bad' ? 'bad' : 'warn') }, [
          U.el('div', { class: 'card__h', html: U.esc(r.titel) + ' <span class="tag tag--art">' + U.esc(r.norm) + '</span>' }),
          U.el('div', { class: 'card__b', html: U.rich(r.text) })
        ]));
      });

      panelA.appendChild(U.el('h3', { text: 'Grundsätze der Verarbeitung (Art. 5)' }));
      D.grundsaetze.forEach(function (g) {
        panelA.appendChild(ui.karte(g.name, g.text, 'info'));
      });
    }

    function panelKante(e) {
      if (!e) { panelAuditUebersicht(); return; }
      var von = F.node(e.from), zu = F.node(e.to);
      panelA.appendChild(ui.panelKopf('➡️', 'Datenfluss',
        (von ? von.name : '?') + ' → ' + (zu ? zu.name : '?')));

      if (e.art !== 'datenfluss') {
        panelA.appendChild(ui.note('Diese Verbindung ist kein Datenfluss, sondern eine <b>' +
          (e.art === 'netz' ? 'Netzwerkverbindung' : 'Hosting-Beziehung') + '</b>. ' +
          'Du kannst sie in Station 1 umstellen.', 'info'));
        return;
      }

      /* Datenarten */
      panelA.appendChild(U.el('h3', { text: 'Welche Daten fließen hier?' }));
      e.daten = e.daten || [];
      D.datenarten.forEach(function (da) {
        var an = e.daten.indexOf(da.key) >= 0;
        var l = ui.checkbox(
          da.icon + ' <b>' + U.esc(da.name) + '</b>' +
          (da.art9 ? ' <span class="tag tag--bad">Art. 9</span>' : ''),
          an,
          function (v) {
            F.snapshot();
            if (v) { if (e.daten.indexOf(da.key) < 0) e.daten.push(da.key); }
            else { e.daten = e.daten.filter(function (k) { return k !== da.key; }); }
            F.changed('daten');
            zeichnePanelA(cv.sel);
            if (v && da.art9) {
              U.toast('<b>' + U.esc(da.name) + '</b> gehört zu den <b>besonderen Kategorien</b> ' +
                '([[Art. 9 DSGVO]]). Die Verarbeitung ist grundsätzlich verboten – du brauchst eine Ausnahme.', 'warn');
            }
          }, da.info);
        panelA.appendChild(l);
      });

      if (AUDIT.pruefung.hatArt9(e)) {
        panelA.appendChild(ui.checkbox(
          '<b>Ausnahme nach Art. 9 Abs. 2 liegt vor</b> (z. B. ausdrückliche Einwilligung, ' +
          'arbeitsrechtliche Pflicht nach § 26 Abs. 3 BDSG)',
          !!e.art9ausnahme,
          function (v) { F.snapshot(); e.art9ausnahme = v; F.changed('daten'); zeichnePanelA(cv.sel); }));
      }

      /* Zweck */
      panelA.appendChild(U.el('h3', { text: 'Zweck der Verarbeitung' }));
      panelA.appendChild(ui.select(null,
        [{ value: '', label: '– bitte wählen –' }].concat(D.zwecke.map(function (z) {
          return { value: z.key, label: z.name };
        })), e.zweck || '', function (v) {
          F.snapshot(); e.zweck = v; F.changed('daten'); zeichnePanelA(cv.sel);
          var zw = D.zweckeMap[v];
          if (zw && zw.hinweis) U.toast(U.rich(zw.hinweis), 'warn');
        }));
      if (e.zweck && D.zweckeMap[e.zweck]) {
        var zw = D.zweckeMap[e.zweck];
        panelA.appendChild(ui.note('Für diesen Zweck sind üblicherweise erforderlich: ' +
          (zw.noetig.length ? zw.noetig.map(function (k) { return (D.datenartenMap[k] || {}).name; }).join(', ')
                            : 'keine personenbezogenen Daten') +
          '. Alles darüber hinaus verletzt die <b>Datenminimierung</b>.', 'info'));
      }

      /* Rechtsgrundlage */
      panelA.appendChild(U.el('h3', { text: 'Rechtsgrundlage (Art. 6 Abs. 1)' }));
      panelA.appendChild(ui.select(null,
        [{ value: '', label: '– keine angegeben –' }].concat(D.rechtsgrundlagen.map(function (r) {
          return { value: r.key, label: r.name };
        })), e.rechtsgrundlage || '', function (v) {
          F.snapshot(); e.rechtsgrundlage = v; F.changed('daten'); zeichnePanelA(cv.sel);
        }));
      if (e.rechtsgrundlage) {
        var rg = D.rechtsgrundlagenMap[e.rechtsgrundlage];
        panelA.appendChild(ui.karte(rg.name, rg.text + '<br><span style="color:var(--text-mute)">Beispiele: ' +
          U.esc(rg.bsp) + '</span>', 'info'));
        if (e.zweck && D.zweckeMap[e.zweck] && D.zweckeMap[e.zweck].empfohlen !== e.rechtsgrundlage) {
          panelA.appendChild(ui.note('Für diesen Zweck wäre meist <b>' +
            U.esc(D.rechtsgrundlagenMap[D.zweckeMap[e.zweck].empfohlen].name) +
            '</b> die passende Rechtsgrundlage. Deine Wahl kann trotzdem vertretbar sein, ' +
            'wenn du sie begründen kannst.', 'warn'));
        }
      }

      /* Technischer Schutz */
      panelA.appendChild(U.el('h3', { text: 'Technischer Schutz (Art. 32)' }));
      panelA.appendChild(ui.checkbox('Übertragung ist <b>verschlüsselt</b> (TLS/VPN)',
        !!e.verschluesselt,
        function (v) { F.snapshot(); e.verschluesselt = v; F.changed('daten'); zeichnePanelA(cv.sel); }));

      /* Befunde dieser Kante */
      var befunde = AUDIT.pruefung.pruefeKante(e);
      panelA.appendChild(U.el('h3', { text: 'Prüfergebnis' }));
      if (!(e.daten || []).length) {
        panelA.appendChild(ui.note('Hier fließen (noch) keine personenbezogenen Daten – dann greift die DSGVO nicht.', 'info'));
      } else if (!befunde.length) {
        panelA.appendChild(ui.note('✓ Dieser Datenfluss ist in Ordnung.', 'ok'));
      } else {
        befunde.forEach(function (b) {
          panelA.appendChild(U.el('div', { class: 'card card--' + (b.schwere === 'bad' ? 'bad' : 'warn') }, [
            U.el('div', { class: 'card__h', html: U.esc(b.titel) + ' <span class="tag tag--art">' + U.esc(b.norm) + '</span>' }),
            U.el('div', { class: 'card__b', html: U.rich(b.text) + (b.zusatz ? '<p style="color:var(--warn)">' + U.esc(b.zusatz) + '</p>' : '') })
          ]));
        });
      }
    }

    function panelKnoten(n) {
      if (!n) { panelAuditUebersicht(); return; }
      var d = F.def(n);
      n.props = n.props || {};
      panelA.appendChild(ui.panelKopf(d.icon, n.name, d.label));

      if (F.kategorie(n) === 'person') {
        panelA.appendChild(ui.note('Personen sind die <b>betroffenen Personen</b> der [[DSGVO]]. ' +
          'Ihre Rechte übst du in Teil D (Betroffenen-Postfach).', 'info'));
      }

      panelA.appendChild(U.el('h3', { text: 'Rolle in der Verarbeitung' }));
      panelA.appendChild(ui.select(null, D.rollen.map(function (r) {
        return { value: r.key, label: r.name };
      }), n.props.rolle || 'verantwortlicher', function (v) {
        F.snapshot(); n.props.rolle = v; F.changed('daten'); zeichnePanelA(cv.sel);
      }));
      var rolle = D.rollen.filter(function (r) { return r.key === (n.props.rolle || 'verantwortlicher'); })[0];
      panelA.appendChild(ui.note(rolle.text, 'info'));

      if (n.props.rolle === 'auftragsverarbeiter') {
        panelA.appendChild(ui.checkbox('<b>Vertrag zur Auftragsverarbeitung</b> (Art. 28) liegt vor',
          !!n.props.avvertrag,
          function (v) {
            F.snapshot(); n.props.avvertrag = v; F.changed('daten'); zeichnePanelA(cv.sel);
            if (v) U.toast('Gut. Der AV-Vertrag regelt Weisungen, Vertraulichkeit, [[TOMs]], Unterauftragnehmer, ' +
              'Löschung am Ende und Kontrollrechte.', 'ok');
          }));
      }

      panelA.appendChild(U.el('h3', { text: 'Standort der Verarbeitung' }));
      panelA.appendChild(ui.select(null, D.standorte.map(function (s) {
        return { value: s.key, label: s.name };
      }), n.props.standort || (F.zonetypVon(n) === 'drittland' ? 'drittland' : 'eu'), function (v) {
        F.snapshot(); n.props.standort = v; F.changed('daten'); zeichnePanelA(cv.sel);
      }));
      if ((n.props.standort || F.zonetypVon(n)) === 'drittland') {
        panelA.appendChild(ui.note('Übermittlung in ein <b>Drittland</b>: Nach [[Art. 44 ff. DSGVO|Art. 44 ff.]] ' +
          'brauchst du einen Angemessenheitsbeschluss oder geeignete Garantien.', 'warn'));
        panelA.appendChild(ui.select('Garantie', D.garantien.map(function (g) {
          return { value: g.key, label: g.name };
        }), n.props.garantie || 'keine', function (v) {
          F.snapshot(); n.props.garantie = v; F.changed('daten'); zeichnePanelA(cv.sel);
        }));
      }

      panelA.appendChild(U.el('h3', { text: 'Schutz der gespeicherten Daten' }));
      panelA.appendChild(ui.checkbox('Daten werden <b>verschlüsselt gespeichert</b>',
        !!n.props.verschluesselt,
        function (v) { F.snapshot(); n.props.verschluesselt = v; F.changed('daten'); zeichnePanelA(cv.sel); }));
      if (n.typ === 'backup') {
        panelA.appendChild(ui.checkbox('Backup ist vom Netz <b>getrennt</b> (offline/unveränderbar)',
          !!n.props.offline,
          function (v) { F.snapshot(); n.props.offline = v; F.changed('daten'); zeichnePanelA(cv.sel); }));
      }
    }

    /* =======================================================
       TEIL B – Formular-Werkstatt
       ======================================================= */

    var formZustand = { felder: {}, optionen: {} };
    (function initForm() {
      var gespeichert = AUDIT.storage.get('formular', null);
      if (gespeichert) { formZustand = gespeichert; return; }
      D.formularfelder.forEach(function (f) {
        formZustand.felder[f.key] = { aktiv: ['name', 'email', 'passwort', 'adresse', 'agb'].indexOf(f.key) >= 0,
          pflicht: ['name', 'email', 'passwort', 'adresse', 'agb'].indexOf(f.key) >= 0, vor: false };
      });
    })();

    var paneB = U.el('div', { class: 'pane' });
    inhalte.formular.appendChild(paneB);

    function zeichneFormular() {
      U.clear(paneB);
      var inner = U.el('div', { class: 'pane__inner' });
      paneB.appendChild(inner);

      inner.appendChild(U.el('h1', { text: 'Formular-Werkstatt' }));
      inner.appendChild(U.el('p', {
        html: U.rich('Du baust das Anmeldeformular für ein <b>Kundenkonto im Webshop</b>. ' +
          'Zweck: Vertragsabwicklung. Die Bewertung rechts prüft live, ob du ' +
          '[[Privacy by Design]] und [[Privacy by Default]] einhältst.')
      }));

      var btns = U.el('div', { style: { display: 'flex', gap: '6px', margin: '12px 0', flexWrap: 'wrap' } });
      btns.appendChild(U.el('button', {
        class: 'btn btn--sm', text: '👎 Schlechtes Beispiel laden',
        onclick: function () { ladeBeispiel('schlecht'); }
      }));
      btns.appendChild(U.el('button', {
        class: 'btn btn--sm btn--primary', text: '👍 Datenschutzfreundliches Beispiel laden',
        onclick: function () { ladeBeispiel('gut'); }
      }));
      inner.appendChild(btns);

      var cols = U.el('div', { class: 'cols2--wide cols2' });
      inner.appendChild(cols);

      /* --- linke Spalte: Baukasten --- */
      var links = U.el('div');
      cols.appendChild(links);
      links.appendChild(U.el('h2', { text: 'Felder' }));

      D.formularfelder.forEach(function (f) {
        var z = formZustand.felder[f.key] = formZustand.felder[f.key] || { aktiv: false, pflicht: false, vor: false };
        var karte = U.el('div', { class: 'card' + (z.aktiv ? '' : ' ') });
        var kopf = U.el('div', { class: 'card__h', html: f.icon + ' ' + U.esc(f.name) });
        karte.appendChild(kopf);
        var b = U.el('div', { class: 'card__b' });

        b.appendChild(ui.checkbox('Feld im Formular anzeigen', z.aktiv, function (v) {
          z.aktiv = v; if (!v) { z.pflicht = false; z.vor = false; } speichernForm();
        }));
        if (z.aktiv) {
          b.appendChild(ui.checkbox('<b>Pflichtfeld</b>', z.pflicht, function (v) { z.pflicht = v; speichernForm(); }));
          b.appendChild(ui.checkbox('Voreingestellt <b>angekreuzt</b>', z.vor, function (v) { z.vor = v; speichernForm(); }));
        }
        b.appendChild(U.el('p', { style: { color: 'var(--text-mute)' }, text: f.warum }));
        karte.appendChild(b);
        links.appendChild(karte);
      });

      links.appendChild(U.el('h2', { text: 'Technik und Organisation' }));
      D.formularOptionen.forEach(function (o) {
        links.appendChild(ui.checkbox('<b>' + U.esc(o.name) + '</b>',
          !!formZustand.optionen[o.key],
          function (v) { formZustand.optionen[o.key] = v; speichernForm(); }, o.text));
      });

      /* --- rechte Spalte: Vorschau + Bewertung --- */
      var rechts = U.el('div');
      cols.appendChild(rechts);
      rechts.appendChild(U.el('h2', { text: 'Vorschau' }));
      rechts.appendChild(vorschau());
      rechts.appendChild(U.el('h2', { text: 'Bewertung' }));
      bewertung().forEach(function (el) { rechts.appendChild(el); });
    }

    function vorschau() {
      var box = U.el('div', { class: 'card' });
      box.appendChild(U.el('div', { class: 'card__h', text: 'Kundenkonto anlegen' }));
      var b = U.el('div', { class: 'card__b' });
      D.formularfelder.forEach(function (f) {
        var z = formZustand.felder[f.key];
        if (!z || !z.aktiv) return;
        var istCheck = ['newsletter', 'partner', 'tracking', 'agb'].indexOf(f.key) >= 0;
        if (istCheck) {
          var l = U.el('label', { class: 'check' });
          var c = U.el('input', { type: 'checkbox' });
          c.checked = !!z.vor;
          c.disabled = true;
          l.appendChild(c);
          l.appendChild(U.el('span', { html: U.esc(f.name) + (z.pflicht ? ' <span style="color:var(--bad)">*</span>' : '') }));
          b.appendChild(l);
        } else {
          var fe = U.el('div', { class: 'field' });
          fe.appendChild(U.el('label', { html: U.esc(f.name) + (z.pflicht ? ' <span style="color:var(--bad)">*</span>' : ' <span style="color:var(--text-mute)">(freiwillig)</span>') }));
          fe.appendChild(U.el('input', { type: 'text', disabled: 'disabled', placeholder: f.name }));
          b.appendChild(fe);
        }
      });
      if (formZustand.optionen.hinweis) {
        b.appendChild(U.el('p', { style: { color: 'var(--text-mute)', fontSize: '11px' },
          text: 'Hinweise zum Datenschutz: Wir verarbeiten Ihre Daten zur Vertragsabwicklung (Art. 6 Abs. 1 lit. b DSGVO) …' }));
      }
      b.appendChild(U.el('button', { class: 'btn btn--primary btn--sm', text: 'Konto anlegen', disabled: 'disabled' }));
      box.appendChild(b);
      return box;
    }

    function bewertung() {
      var out = [];
      var punkte = 0, max = 0;
      var meldungen = [];

      D.formularfelder.forEach(function (f) {
        var z = formZustand.felder[f.key];
        if (!z || !z.aktiv) {
          if (f.noetig && f.key !== 'agb') {
            max++;
            meldungen.push({ art: 'warn', text: '<b>' + U.esc(f.name) + '</b> fehlt – ohne dieses Feld kann der Vertrag nicht erfüllt werden.' });
          }
          return;
        }
        max += 1;
        if (!f.noetig && z.pflicht) {
          meldungen.push({ art: 'bad', text: '<b>' + U.esc(f.name) + '</b> ist Pflichtfeld, wird für den Zweck aber nicht gebraucht → ' +
            '<b>Datenminimierung verletzt</b> (Art. 5 Abs. 1 lit. c). ' + U.esc(f.warum) });
        } else if (!f.noetig && !z.pflicht) {
          punkte += 0.5;
          meldungen.push({ art: 'warn', text: '<b>' + U.esc(f.name) + '</b> ist freiwillig – vertretbar. Noch besser: ganz weglassen, ' +
            'wenn du die Daten nicht wirklich brauchst.' });
        } else {
          punkte += 1;
        }
        if (f.einwilligung && z.vor) {
          meldungen.push({ art: 'bad', text: '<b>' + U.esc(f.name) + '</b> ist vorangekreuzt → <b>Privacy by Default verletzt</b>. ' +
            'Eine Einwilligung muss <b>aktiv</b> erfolgen (Art. 4 Nr. 11, Art. 25 Abs. 2; EuGH „Planet49“).' });
        }
        if (f.einwilligung && z.pflicht) {
          meldungen.push({ art: 'bad', text: '<b>' + U.esc(f.name) + '</b> als Pflichtfeld koppelt den Vertrag an eine Einwilligung → ' +
            '<b>Kopplungsverbot</b> (Art. 7 Abs. 4). Die Einwilligung wäre nicht freiwillig.' });
        }
        if (f.key === 'agb' && z.vor) {
          meldungen.push({ art: 'bad', text: 'Die <b>AGB-Bestätigung</b> darf nicht vorangekreuzt sein – sie muss aktiv erfolgen.' });
        }
      });

      D.formularOptionen.forEach(function (o) {
        max += 1;
        if (formZustand.optionen[o.key]) {
          punkte += 1;
          meldungen.push({ art: 'ok', text: '✓ <b>' + U.esc(o.name) + '</b> – ' + U.esc(o.text) });
        } else {
          meldungen.push({ art: 'bad', text: '<b>' + U.esc(o.name) + '</b> fehlt. ' + U.esc(o.text) });
        }
      });

      var quote = max ? Math.max(0, punkte) / max : 0;
      var ampelFarbe = quote > 0.8 ? 'ok' : (quote > 0.5 ? 'warn' : 'bad');
      var kopf = U.el('div', { class: 'card card--' + ampelFarbe });
      kopf.appendChild(U.el('div', { class: 'card__h',
        text: 'Datenschutzfreundlichkeit: ' + Math.round(quote * 100) + ' %' }));
      var kb = U.el('div', { class: 'card__b' });
      kb.appendChild(U.el('div', { class: 'bar' }, U.el('div', {
        class: 'bar__fill', style: { width: (quote * 100) + '%',
          background: ampelFarbe === 'ok' ? 'var(--ok)' : (ampelFarbe === 'warn' ? 'var(--warn)' : 'var(--bad)') }
      })));
      kb.appendChild(U.el('p', { html: U.rich(
        '<b>[[Privacy by Design]]</b> (Art. 25 Abs. 1): Datenschutz schon bei der Technikgestaltung mitdenken.<br>' +
        '<b>[[Privacy by Default]]</b> (Art. 25 Abs. 2): Die Voreinstellungen müssen die datenschutzfreundlichsten sein.') }));
      kopf.appendChild(kb);
      out.push(kopf);

      ['bad', 'warn', 'ok'].forEach(function (art) {
        meldungen.filter(function (m) { return m.art === art; }).forEach(function (m) {
          out.push(U.el('div', { class: 'note note--' + art, html: U.lexify(m.text) }));
        });
      });

      AUDIT.storage.set('formular.quote', quote);
      return out;
    }

    function ladeBeispiel(welches) {
      var b = D.formularBeispiele[welches];
      formZustand = { felder: {}, optionen: {} };
      D.formularfelder.forEach(function (f) {
        var v = b.felder[f.key];
        formZustand.felder[f.key] = v ? { aktiv: !!v.aktiv, pflicht: !!v.pflicht, vor: !!v.vor }
                                      : { aktiv: false, pflicht: false, vor: false };
      });
      Object.keys(b.optionen).forEach(function (k) { formZustand.optionen[k] = b.optionen[k]; });
      speichernForm();
      U.toast(welches === 'gut'
        ? 'So sieht ein datenschutzfreundliches Formular aus: nur nötige Pflichtfelder, keine Voreinstellungen, ' +
          'HTTPS, gehashte Passwörter, Löschfristen.'
        : 'Typische Fehler: alles Pflicht, Newsletter und Datenweitergabe vorangekreuzt, keine Hinweise.',
        welches === 'gut' ? 'ok' : 'bad');
    }

    function speichernForm() {
      AUDIT.storage.set('formular', formZustand);
      zeichneFormular();
      fortschritt();
    }

    /* =======================================================
       TEIL C – Daten-Labor
       ======================================================= */

    var labor = { angewandt: {}, zuordnungSichtbar: false };
    var paneC = U.el('div', { class: 'pane' });
    inhalte.labor.appendChild(paneC);

    function laborTabelleBerechnen() {
      var a = labor.angewandt;
      return D.laborTabelle.zeilen.map(function (z, i) {
        var r = {
          name: a.pseudonym ? 'K-' + (1001 + i) : (a.nameweg ? '—' : z.name),
          email: a.mailweg ? '—' : (a.pseudonym ? '—' : z.email),
          geburt: a.altersgruppe ? altersgruppe(z.geburt) : z.geburt,
          plz: a.plzkurz ? z.plz.slice(0, 3) + 'xx' : z.plz,
          bestellungen: z.bestellungen
        };
        return r;
      });
    }
    function altersgruppe(datum) {
      var jahr = parseInt(String(datum).slice(-4), 10);
      var alter = 2026 - jahr;
      var von = Math.floor(alter / 10) * 10;
      return von + '–' + (von + 9) + ' Jahre';
    }

    /* Ist der Personenbezug noch gegeben? */
    function laborStatus() {
      var a = labor.angewandt;
      if (a.aggregieren) {
        return { pb: false, dsgvo: false, stufe: 'anonym',
          text: 'Die Daten sind zu einer Statistik zusammengefasst. Einzelne Personen sind nicht mehr erkennbar – ' +
                'das ist eine <b>Anonymisierung</b>. Die DSGVO gilt für solche Daten nicht mehr (Erwägungsgrund 26).' };
      }
      if (a.pseudonym && !labor.zuordnungSichtbar) {
        return { pb: true, dsgvo: true, stufe: 'pseudonym',
          text: 'Die Namen sind durch Kundennummern ersetzt, die Zuordnungstabelle liegt getrennt. ' +
                'Das ist <b>Pseudonymisierung</b> (Art. 4 Nr. 5): Der Personenbezug ist <b>umkehrbar</b>, ' +
                'deshalb bleiben es personenbezogene Daten und die DSGVO gilt weiter.' };
      }
      if (a.pseudonym && labor.zuordnungSichtbar) {
        return { pb: true, dsgvo: true, stufe: 'aufgedeckt',
          text: 'Mit der Zuordnungstabelle daneben ist jede Zeile sofort wieder einer Person zuzuordnen. ' +
                'Genau deshalb sind pseudonyme Daten weiter personenbezogen.' };
      }
      var direkt = !a.nameweg || !a.mailweg;
      if (direkt) {
        return { pb: true, dsgvo: true, stufe: 'klar',
          text: 'Es sind noch direkte Identifikatoren enthalten (Name oder E-Mail). Die Daten sind eindeutig personenbezogen.' };
      }
      if (!a.altersgruppe || !a.plzkurz) {
        return { pb: true, dsgvo: true, stufe: 'quasi',
          text: 'Name und E-Mail sind weg – trotzdem bleibt die Kombination aus <b>Geburtsdatum, PLZ</b> ' +
                '(und Geschlecht) ein starker Hinweis auf eine bestimmte Person. Solche <b>Quasi-Identifikatoren</b> ' +
                'muss man vergröbern, sonst ist es keine Anonymisierung.' };
      }
      return { pb: false, dsgvo: false, stufe: 'anonym',
        text: 'Keine direkten Identifikatoren, Geburtsdatum und PLZ sind vergröbert: Ein Personenbezug ist ' +
              'praktisch nicht mehr herstellbar. Das ist eine <b>Anonymisierung</b> – die DSGVO gilt nicht mehr.' };
    }

    function zeichneLabor() {
      U.clear(paneC);
      var inner = U.el('div', { class: 'pane__inner' });
      paneC.appendChild(inner);

      inner.appendChild(U.el('h1', { text: 'Daten-Labor' }));
      inner.appendChild(U.el('p', {
        html: U.rich('Die Kundentabelle der Lippe Logistik GmbH soll für eine Auswertung weitergegeben werden. ' +
          'Wende Werkzeuge an und beobachte, ab wann der <b>Personenbezug</b> verschwindet.')
      }));

      var st = laborStatus();
      var status = U.el('div', { class: 'card card--' + (st.pb ? 'warn' : 'ok') });
      status.appendChild(U.el('div', { class: 'card__h',
        html: 'Noch personenbezogen? <b style="color:' + (st.pb ? 'var(--warn)' : 'var(--ok)') + '">' +
          (st.pb ? 'JA' : 'NEIN') + '</b> &nbsp;·&nbsp; Gilt die DSGVO? <b style="color:' +
          (st.dsgvo ? 'var(--warn)' : 'var(--ok)') + '">' + (st.dsgvo ? 'JA' : 'NEIN') + '</b>' }));
      status.appendChild(U.el('div', { class: 'card__b', html: U.lexify(st.text) }));
      inner.appendChild(status);

      var cols = U.el('div', { class: 'cols2--wide cols2' });
      inner.appendChild(cols);

      /* Tabelle */
      var links = U.el('div');
      cols.appendChild(links);
      links.appendChild(U.el('h2', { text: 'Kundentabelle' }));

      if (labor.angewandt.aggregieren) {
        var agg = U.el('table', { class: 't' });
        var plzGruppen = {};
        D.laborTabelle.zeilen.forEach(function (z) {
          var k = z.plz.slice(0, 3) + 'xx';
          plzGruppen[k] = (plzGruppen[k] || 0) + 1;
        });
        var gesamt = D.laborTabelle.zeilen.length;
        agg.innerHTML = '<tr><th>Region</th><th>Anteil der Kunden</th></tr>' +
          Object.keys(plzGruppen).map(function (k) {
            return '<tr><td>' + k + '</td><td>' + Math.round(plzGruppen[k] / gesamt * 100) + ' %</td></tr>';
          }).join('') +
          '<tr><td>Bestellungen gesamt</td><td>' +
          D.laborTabelle.zeilen.reduce(function (s, z) { return s + z.bestellungen; }, 0) + '</td></tr>';
        links.appendChild(agg);
        links.appendChild(ui.note('Nur noch Summen und Anteile – einzelne Personen sind nicht mehr enthalten.', 'ok'));
      } else {
        var t = U.el('table', { class: 't' });
        t.innerHTML = '<tr>' + D.laborTabelle.spalten.map(function (s) {
          return '<th>' + U.esc(s.name) + '</th>';
        }).join('') + '</tr>' +
          laborTabelleBerechnen().map(function (r) {
            return '<tr>' + D.laborTabelle.spalten.map(function (s) {
              var v = r[s.key];
              var grau = (v === '—');
              return '<td' + (grau ? ' style="color:var(--text-mute)"' : '') + '>' + U.esc(v) + '</td>';
            }).join('') + '</tr>';
          }).join('');
        links.appendChild(t);
      }

      if (labor.angewandt.pseudonym && labor.zuordnungSichtbar) {
        links.appendChild(U.el('h3', { text: 'Zuordnungstabelle (eigentlich getrennt aufbewahrt!)' }));
        var zt = U.el('table', { class: 't' });
        zt.innerHTML = '<tr><th>Kundennummer</th><th>Name</th></tr>' +
          D.laborTabelle.zeilen.map(function (z, i) {
            return '<tr><td>K-' + (1001 + i) + '</td><td>' + U.esc(z.name) + '</td></tr>';
          }).join('');
        links.appendChild(zt);
        links.appendChild(ui.note('Mit dieser Tabelle ist der Personenbezug sofort wiederhergestellt. ' +
          'Deshalb sind pseudonyme Daten <b>keine</b> anonymen Daten.', 'bad'));
      }

      /* Werkzeuge */
      var rechts = U.el('div');
      cols.appendChild(rechts);
      rechts.appendChild(U.el('h2', { text: 'Werkzeuge' }));
      D.laborWerkzeuge.forEach(function (w) {
        if (w.key === 'zuordnung') {
          if (!labor.angewandt.pseudonym) return;
          rechts.appendChild(U.el('div', { class: 'card' }, [
            U.el('div', { class: 'card__h', html: w.icon + ' ' + U.esc(w.name) }),
            U.el('div', { class: 'card__b' }, [
              U.el('p', { text: w.kurz }),
              U.el('button', {
                class: 'btn btn--sm' + (labor.zuordnungSichtbar ? ' btn--danger' : ''),
                text: labor.zuordnungSichtbar ? 'wieder wegnehmen' : 'danebenlegen',
                onclick: function () {
                  labor.zuordnungSichtbar = !labor.zuordnungSichtbar;
                  if (labor.zuordnungSichtbar) U.toast(U.rich(w.text), 'bad');
                  zeichneLabor();
                }
              })
            ])
          ]));
          return;
        }
        var an = !!labor.angewandt[w.key];
        var karte = U.el('div', { class: 'card' + (an ? ' card--ok' : '') });
        karte.appendChild(U.el('div', { class: 'card__h', html: w.icon + ' ' + U.esc(w.name) + (an ? ' ✓' : '') }));
        karte.appendChild(U.el('div', { class: 'card__b' }, [
          U.el('p', { text: w.kurz }),
          U.el('button', {
            class: 'btn btn--sm' + (an ? '' : ' btn--primary'),
            text: an ? 'rückgängig' : 'anwenden',
            onclick: function () {
              labor.angewandt[w.key] = !an;
              if (w.key === 'pseudonym' && !an) { labor.angewandt.nameweg = false; }
              if (!an) U.toast('<b>' + U.esc(w.name) + '</b><br>' + U.rich(w.text),
                w.key === 'pseudonym' ? 'warn' : 'ok');
              zeichneLabor();
              fortschritt();
            }
          })
        ]));
        rechts.appendChild(karte);
      });

      rechts.appendChild(U.el('button', {
        class: 'btn btn--sm', text: '↺ Tabelle zurücksetzen',
        style: { marginTop: '10px' },
        onclick: function () { labor = { angewandt: {}, zuordnungSichtbar: false }; zeichneLabor(); }
      }));

      rechts.appendChild(ui.merk('<b>Pseudonym = Maske</b> (kann abgenommen werden) · ' +
        '<b>Anonym = Gesicht weg</b>'));

      inner.appendChild(U.el('h2', { text: 'Der Unterschied in der Prüfung' }));
      var vgl = U.el('table', { class: 't' });
      vgl.innerHTML =
        '<tr><th></th><th>Pseudonymisierung</th><th>Anonymisierung</th></tr>' +
        '<tr><td>Definition</td><td>Verarbeitung so, dass die Daten ohne Zusatzinformationen keiner Person mehr zugeordnet werden können (Art. 4 Nr. 5)</td>' +
        '<td>Personenbezug dauerhaft und unumkehrbar entfernt (Erwägungsgrund 26)</td></tr>' +
        '<tr><td>Umkehrbar?</td><td><b style="color:var(--warn)">ja</b>, mit der getrennt aufbewahrten Zuordnungstabelle</td>' +
        '<td><b style="color:var(--ok)">nein</b></td></tr>' +
        '<tr><td>Gilt die DSGVO?</td><td><b style="color:var(--warn)">ja</b></td><td><b style="color:var(--ok)">nein</b></td></tr>' +
        '<tr><td>Rolle</td><td>empfohlene Schutzmaßnahme (Art. 25, Art. 32)</td><td>Daten fallen ganz aus dem Anwendungsbereich</td></tr>';
      inner.appendChild(vgl);
    }

    /* =======================================================
       TEIL D – Betroffenen-Postfach
       ======================================================= */

    var postfach = { offen: [], erledigt: [], versuche: 0, richtig: 0 };
    (function initPost() {
      postfach.offen = D.anfragen.map(function (a) { return a.key; });
    })();

    var paneD = U.el('div', { class: 'pane' });
    inhalte.postfach.appendChild(paneD);

    function zeichnePostfach() {
      U.clear(paneD);
      var inner = U.el('div', { class: 'pane__inner' });
      paneD.appendChild(inner);

      inner.appendChild(U.el('h1', { text: 'Betroffenen-Postfach' }));
      inner.appendChild(U.el('p', {
        html: U.rich('Im Postfach landen Anfragen von Kunden, Bewerbern und Beschäftigten. ' +
          'Zieh jede Anfrage auf die passende <b>Artikel-Kachel</b>. Danach siehst du, was die Firma tun muss ' +
          'und in welcher Frist.')
      }));

      if (postfach.versuche) {
        inner.appendChild(ui.note('Zuordnungen: <b>' + postfach.richtig + ' richtig</b> von ' +
          postfach.versuche + ' Versuchen.', postfach.richtig === postfach.versuche ? 'ok' : 'warn'));
      }

      var cols = U.el('div', { class: 'cols2' });
      inner.appendChild(cols);

      /* Anfragen */
      var links = U.el('div');
      cols.appendChild(links);
      links.appendChild(U.el('h2', { text: 'Eingang (' + postfach.offen.length + ')' }));
      if (!postfach.offen.length) {
        links.appendChild(ui.note('Alle Anfragen bearbeitet. ' +
          '<button class="btn btn--sm" id="postReset">Noch einmal üben</button>', 'ok'));
      }
      postfach.offen.forEach(function (k) {
        var a = D.anfragen.filter(function (x) { return x.key === k; })[0];
        var karte = U.el('div', { class: 'card', style: { cursor: 'grab' } });
        karte.appendChild(U.el('div', { class: 'card__h', html: a.icon + ' ' + U.esc(a.von) }));
        karte.appendChild(U.el('div', { class: 'card__b', html: '„' + U.esc(a.text) + '“' }));
        AUDIT.dnd.ziehbar(karte, function () { return { art: 'anfrage', key: a.key }; },
          '✉️ ' + U.esc(a.von));
        links.appendChild(karte);
      });

      if (postfach.erledigt.length) {
        links.appendChild(U.el('h2', { text: 'Erledigt' }));
        postfach.erledigt.forEach(function (e) {
          var a = D.anfragen.filter(function (x) { return x.key === e.key; })[0];
          var r = D.betroffenenrechteMap[a.richtig];
          links.appendChild(U.el('div', { class: 'card card--' + (e.richtig ? 'ok' : 'warn') }, [
            U.el('div', { class: 'card__h', html: (e.richtig ? '✓ ' : '✗ ') + U.esc(a.von) +
              ' <span class="tag tag--art">' + U.esc(r.artikel) + '</span>' }),
            U.el('div', { class: 'card__b', html:
              '<p>„' + U.esc(a.text) + '“</p>' +
              '<p><b>Was zu tun ist:</b> ' + U.rich(a.tun) + '</p>' +
              '<p><b>Frist:</b> ' + U.esc(a.frist) + '</p>' +
              '<p><b>Wer ist beteiligt:</b> ' + U.esc(a.wer) + '</p>' })
          ]));
        });
      }

      /* Artikel-Kacheln */
      var rechts = U.el('div');
      cols.appendChild(rechts);
      rechts.appendChild(U.el('h2', { text: 'Artikel der DSGVO' }));
      rechts.appendChild(U.el('p', { class: 'sub', text: 'Die Kacheln bleiben stehen – so prägen sich die Nummern ein.' }));

      D.betroffenenrechte.filter(function (r) { return r.kachel; }).forEach(function (r) {
        var kachel = U.el('div', { class: 'card', data: { art: r.key } });
        kachel.appendChild(U.el('div', { class: 'card__h',
          html: '<span class="tag tag--art">' + U.esc(r.artikel) + '</span> ' + U.esc(r.titel) }));
        kachel.appendChild(U.el('div', { class: 'card__b', text: r.inhalt }));
        AUDIT.dnd.ziel(kachel, {
          accept: function (p) { return p && p.art === 'anfrage'; },
          enter: function () { kachel.style.borderColor = 'var(--accent)'; },
          leave: function () { kachel.style.borderColor = ''; },
          drop: function (p) {
            kachel.style.borderColor = '';
            zuordnen(p.key, r.key);
          }
        });
        rechts.appendChild(kachel);
      });

      rechts.appendChild(U.el('h2', { text: 'Weitere Rechte' }));
      D.betroffenenrechte.filter(function (r) { return !r.kachel; }).forEach(function (r) {
        rechts.appendChild(ui.karte('<span class="tag tag--art">' + U.esc(r.artikel) + '</span> ' + U.esc(r.titel),
          r.inhalt, 'info'));
      });

      var rb = inner.querySelector('#postReset') || links.querySelector('#postReset');
      if (rb) rb.addEventListener('click', function () {
        postfach = { offen: D.anfragen.map(function (a) { return a.key; }), erledigt: [], versuche: 0, richtig: 0 };
        zeichnePostfach();
      });
    }

    function zuordnen(anfrageKey, artikelKey) {
      var a = D.anfragen.filter(function (x) { return x.key === anfrageKey; })[0];
      if (!a) return;
      var richtig = a.richtig === artikelKey;
      postfach.versuche++;
      if (richtig) postfach.richtig++;

      var r = D.betroffenenrechteMap[a.richtig];
      var gewaehlt = D.betroffenenrechteMap[artikelKey];

      if (richtig) {
        postfach.offen = postfach.offen.filter(function (k) { return k !== anfrageKey; });
        postfach.erledigt.push({ key: anfrageKey, richtig: true });
        U.toast('✓ Richtig: <b>' + U.esc(r.artikel) + ' – ' + U.esc(r.titel) + '</b><br>' +
          U.esc(a.tun) + '<br><b>Frist:</b> ' + U.esc(a.frist), 'ok', 12000);
      } else {
        U.toast('✗ Das ist <b>' + U.esc(gewaehlt.artikel) + ' (' + U.esc(gewaehlt.titel) + ')</b>. ' +
          'Hier passt ein anderer Artikel: Lies die Anfrage noch einmal genau.', 'bad', 7000);
      }
      AUDIT.storage.set('postfach', { richtig: postfach.richtig, versuche: postfach.versuche });
      zeichnePostfach();
      fortschritt();
    }

    /* ---------- Fortschritt ---------- */
    function fortschritt() {
      var erg = AUDIT.pruefung.audit();
      var teilA = erg.geprueft.length ? erg.quote : 0;
      var teilB = AUDIT.storage.get('formular.quote', 0);
      var teilC = Object.keys(labor.angewandt).filter(function (k) { return labor.angewandt[k]; }).length / 4;
      var teilD = D.anfragen.length ? postfach.erledigt.length / D.anfragen.length : 0;
      AUDIT.storage.setFortschritt('daten',
        (teilA * 0.3) + (Math.min(1, teilB) * 0.2) + (Math.min(1, teilC) * 0.2) + (teilD * 0.3));
    }

    F.onChange(function (was) {
      if (was === 'position') return;
      if (aktiv === 'fluss' && cv && cv.sel) zeichnePanelA(cv.sel);
    });

    zeichnePanelA(null);
    zeichneFormular();
    zeichneLabor();
    zeichnePostfach();
    zeigeTeil('fluss');

    return {
      onShow: function () {
        if (aktiv === 'fluss' && cv) { cv.render(); cv.einpassen(); }
      }
    };
  }
});
