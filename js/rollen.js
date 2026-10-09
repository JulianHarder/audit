/* ===========================================================
   AUDIT – js/rollen.js
   Station 4 "Rollen": Wer ist zuständig? DSB und ISB
   unterscheiden, Compliance-Ampel für die ganze Firma.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.stationen = AUDIT.stationen || [];

AUDIT.stationen.push({
  key: 'rollen',
  num: '4',
  label: 'Rollen',
  icon: '👥',
  titel: 'Rollen – DSB, ISB und Compliance',
  kurz: 'Zuständigkeiten zuordnen, DSB und ISB unterscheiden, Compliance-Ampel lesen.',

  build: function (container) {
    var U = AUDIT.util, F = AUDIT.firma, ui = AUDIT.ui, D = AUDIT.data;

    var wrap = U.el('div', { style: { display: 'flex', flexDirection: 'column', width: '100%', minWidth: '0', minHeight: '0' } });
    container.appendChild(wrap);
    var tabsBox = U.el('div', { class: 'tabs', style: { margin: '0', padding: '0 14px', background: 'var(--bg-2)' } });
    wrap.appendChild(tabsBox);
    var body = U.el('div', { style: { flex: '1', minHeight: '0', display: 'flex', width: '100%' } });
    wrap.appendChild(body);

    var teile = [
      { key: 'zustaendig', label: 'A · Wer ist zuständig?' },
      { key: 'dsbisb',     label: 'B · DSB und ISB' },
      { key: 'ampel',      label: 'C · Compliance-Ampel' }
    ];
    var inhalte = {}, aktiv = 'zustaendig';
    teile.forEach(function (t) {
      tabsBox.appendChild(U.el('button', {
        class: 'tab', data: { tab: t.key }, text: t.label,
        onclick: function () { zeigeTeil(t.key); }
      }));
      var el = U.el('div', { style: { display: 'none', width: '100%', minWidth: '0', flex: '1' } });
      inhalte[t.key] = el;
      body.appendChild(el);
    });
    function zeigeTeil(k) {
      aktiv = k;
      teile.forEach(function (t) { inhalte[t.key].style.display = t.key === k ? 'flex' : 'none'; });
      U.$$('.tab', tabsBox).forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-tab') === k); });
      if (k === 'ampel') zeichneAmpel();
    }

    /* =======================================================
       TEIL A – Ereignis-Karten den Figuren zuordnen
       ======================================================= */

    var stand = AUDIT.storage.get('rollen.stand', { erledigt: {}, versuche: 0, richtig: 0 });

    var paneA = U.el('div', { class: 'pane' });
    inhalte.zustaendig.appendChild(paneA);

    function zeichneA() {
      U.clear(paneA);
      var inner = U.el('div', { class: 'pane__inner' });
      paneA.appendChild(inner);

      inner.appendChild(U.el('h1', { text: 'Wer ist zuständig?' }));
      inner.appendChild(U.el('p', {
        html: 'Zieh jede Ereignis-Karte auf die Figur, die den Fall <b>federführend</b> bearbeitet. ' +
              'Oft sind mehrere beteiligt – die Erklärung sagt dir, wer sonst noch mitreden muss.'
      }));

      var offen = D.ereignisse.filter(function (e) { return !stand.erledigt[e.key]; });
      if (stand.versuche) {
        inner.appendChild(ui.note('Bisher: <b>' + stand.richtig + ' richtig</b> bei ' + stand.versuche + ' Versuchen · ' +
          offen.length + ' Karten offen', offen.length ? 'info' : 'ok'));
      }

      /* Figuren als Drop-Ziele */
      inner.appendChild(U.el('h2', { text: 'Die Figuren im Unternehmen' }));
      var grid = U.el('div', { class: 'grid3' });
      inner.appendChild(grid);
      D.figuren.forEach(function (f) {
        var kachel = U.el('div', { class: 'tile', style: { cursor: 'default' } });
        kachel.appendChild(U.el('div', { class: 'tile__h', text: f.icon + ' ' + f.name }));
        kachel.appendChild(U.el('div', { class: 'tile__t', text: f.kurz }));
        kachel.appendChild(U.el('button', {
          class: 'btn btn--sm', text: 'Aufgaben ansehen', style: { marginTop: '8px' },
          onclick: function () { zeigeFigur(f); }
        }));
        AUDIT.dnd.ziel(kachel, {
          accept: function (p) { return p && p.art === 'ereignis'; },
          enter: function () { kachel.style.borderColor = 'var(--accent)'; },
          leave: function () { kachel.style.borderColor = ''; },
          drop: function (p) { kachel.style.borderColor = ''; zuordnen(p.key, f.key); }
        });
        grid.appendChild(kachel);
      });

      inner.appendChild(U.el('h2', { text: 'Offene Ereignisse (' + offen.length + ')' }));
      if (!offen.length) {
        inner.appendChild(ui.note('Alle Ereignisse zugeordnet. ' +
          '<button class="btn btn--sm" id="rollenReset">Noch einmal üben</button>', 'ok'));
      }
      var liste = U.el('div', { class: 'grid3' });
      inner.appendChild(liste);
      offen.forEach(function (e) {
        var karte = U.el('div', { class: 'card', style: { cursor: 'grab' } });
        karte.appendChild(U.el('div', { class: 'card__h', text: e.icon + ' Ereignis' }));
        karte.appendChild(U.el('div', { class: 'card__b', text: e.text }));
        AUDIT.dnd.ziehbar(karte, function () { return { art: 'ereignis', key: e.key }; },
          e.icon + ' ' + U.esc(e.text.slice(0, 40)) + '…');
        liste.appendChild(karte);
      });

      var erledigt = D.ereignisse.filter(function (e) { return stand.erledigt[e.key]; });
      if (erledigt.length) {
        inner.appendChild(U.el('h2', { text: 'Erledigt' }));
        erledigt.forEach(function (e) {
          var ok = stand.erledigt[e.key] === 'richtig';
          inner.appendChild(U.el('div', { class: 'card card--' + (ok ? 'ok' : 'warn') }, [
            U.el('div', { class: 'card__h',
              html: (ok ? '✓ ' : '✗ ') + U.esc(e.icon + ' ' + e.text) +
                ' <span class="tag tag--art">' + U.esc(e.norm) + '</span>' }),
            U.el('div', { class: 'card__b', html:
              '<p><b>Federführend:</b> ' + U.esc(D.figurenMap[e.fuehrend].name) + '</p>' +
              '<p><b>Beteiligt:</b> ' + e.richtig.map(function (r) { return U.esc(D.figurenMap[r].name); }).join(', ') + '</p>' +
              '<p>' + U.rich(e.erklaerung) + '</p>' })
          ]));
        });
      }

      var rb = inner.querySelector('#rollenReset');
      if (rb) rb.addEventListener('click', function () {
        stand = { erledigt: {}, versuche: 0, richtig: 0 };
        AUDIT.storage.set('rollen.stand', stand);
        zeichneA();
      });
    }

    function zuordnen(ereignisKey, figurKey) {
      var e = D.ereignisse.filter(function (x) { return x.key === ereignisKey; })[0];
      if (!e) return;
      var f = D.figurenMap[figurKey];
      stand.versuche++;

      if (e.fuehrend === figurKey) {
        stand.richtig++;
        stand.erledigt[e.key] = 'richtig';
        U.toast('✓ Richtig: <b>' + U.esc(f.name) + '</b> ist federführend.<br>' + U.rich(e.erklaerung), 'ok', 13000);
      } else if (e.richtig.indexOf(figurKey) >= 0) {
        stand.erledigt[e.key] = 'teilweise';
        U.toast('Fast: <b>' + U.esc(f.name) + '</b> ist beteiligt, federführend ist aber <b>' +
          U.esc(D.figurenMap[e.fuehrend].name) + '</b>.<br>' + U.rich(e.erklaerung), 'warn', 13000);
      } else {
        U.toast('✗ <b>' + U.esc(f.name) + '</b> ist hier nicht zuständig. Überleg noch einmal: ' +
          'Geht es um <b>personenbezogene Daten</b> (DSB), um <b>Systeme und Informationen</b> (ISB) ' +
          'oder um <b>Regeltreue allgemein</b> (Compliance)?', 'bad', 9000);
      }
      AUDIT.storage.set('rollen.stand', stand);
      zeichneA();
      fortschritt();
    }

    function zeigeFigur(f) {
      U.modal(f.icon + ' ' + f.name,
        '<p>' + U.rich(f.text) + '</p>' +
        (f.rechtsgrundlage ? '<p class="sub">Rechtsgrundlage: ' + U.esc(f.rechtsgrundlage) + '</p>' : '') +
        '<h3 style="font-size:14px;margin:14px 0 4px">Aufgaben</h3><ul style="color:var(--text-dim);line-height:1.8">' +
        f.aufgaben.map(function (a) { return '<li>' + U.esc(a) + '</li>'; }).join('') + '</ul>');
    }

    /* =======================================================
       TEIL B – DSB und ISB
       ======================================================= */

    var zuordnungen = AUDIT.storage.get('rollen.venn', {});
    var paneB = U.el('div', { class: 'pane' });
    inhalte.dsbisb.appendChild(paneB);

    function zeichneB() {
      U.clear(paneB);
      var inner = U.el('div', { class: 'pane__inner' });
      paneB.appendChild(inner);

      inner.appendChild(U.el('h1', { text: 'Datenschutzbeauftragter und IT-Sicherheitsbeauftragter' }));
      inner.appendChild(ui.merk('Der <b>DSB</b> schützt die <b>Menschen</b> und ihre Rechte an ihren Daten. ' +
        'Der <b>ISB</b> schützt die <b>Informationen und Systeme</b> des Unternehmens.'));

      /* Vergleichstabelle */
      var t = U.el('table', { class: 't' });
      t.innerHTML =
        '<tr><th></th><th>DSB</th><th>ISB</th></tr>' +
        '<tr><td>Schützt</td><td>personenbezogene Daten und die Rechte der Betroffenen</td>' +
        '<td>alle Informationen und IT-Systeme (Vertraulichkeit, Integrität, Verfügbarkeit)</td></tr>' +
        '<tr><td>Rechtsgrundlage</td><td>Art. 37–39 DSGVO, § 38 BDSG</td>' +
        '<td>kein allgemeines Gesetz; BSI IT-Grundschutz, ISO/IEC 27001, Branchenvorgaben</td></tr>' +
        '<tr><td>Pflicht?</td><td>ja, wenn die Voraussetzungen vorliegen (siehe unten)</td>' +
        '<td>für normale Unternehmen in der Regel nicht vorgeschrieben</td></tr>' +
        '<tr><td>Stellung</td><td>weisungsfrei, Benachteiligungsverbot, Verschwiegenheit, berichtet an die Leitung</td>' +
        '<td>Stabsstelle, berichtet an die Leitung</td></tr>' +
        '<tr><td>Verantwortung</td><td colspan="2"><b>Keiner von beiden trägt die Verantwortung – die bleibt bei der Geschäftsführung.</b> ' +
        'Beide beraten, überwachen und berichten.</td></tr>';
      inner.appendChild(t);

      /* Venn-Diagramm */
      inner.appendChild(U.el('h2', { text: 'Aufgaben zuordnen' }));
      inner.appendChild(U.el('p', { text: 'Zieh jedes Kärtchen in den richtigen Bereich: nur DSB, nur ISB oder beide.' }));

      var venn = U.el('div', {
        style: { display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '12px 0' }
      });
      inner.appendChild(venn);

      [
        { key: 'dsb', titel: '🛡️ nur DSB', farbe: 'var(--ziel-v)' },
        { key: 'beide', titel: '🤝 beide', farbe: 'var(--accent)' },
        { key: 'isb', titel: '🔐 nur ISB', farbe: 'var(--ziel-i)' }
      ].forEach(function (zone) {
        var box = U.el('div', {
          style: {
            flex: '1', minWidth: '210px', border: '2px dashed ' + zone.farbe,
            borderRadius: '12px', padding: '10px', background: 'var(--bg-2)', minHeight: '140px'
          }
        });
        box.appendChild(U.el('div', { style: { fontWeight: '700', marginBottom: '8px', color: zone.farbe }, text: zone.titel }));
        D.dsbIsbAufgaben.filter(function (a) { return zuordnungen[a.key] === zone.key; }).forEach(function (a) {
          var richtig = a.wo === zone.key;
          box.appendChild(U.el('div', {
            class: 'note note--' + (richtig ? 'ok' : 'bad'),
            html: (richtig ? '✓ ' : '✗ ') + U.esc(a.text) +
              (richtig ? '' : '<br><b>Richtig wäre: ' + (a.wo === 'beide' ? 'beide' : a.wo.toUpperCase()) + '</b>')
          }));
        });
        AUDIT.dnd.ziel(box, {
          accept: function (p) { return p && p.art === 'aufgabe'; },
          enter: function () { box.style.background = 'var(--bg-4)'; },
          leave: function () { box.style.background = 'var(--bg-2)'; },
          drop: function (p) {
            box.style.background = 'var(--bg-2)';
            var a = D.dsbIsbAufgaben.filter(function (x) { return x.key === p.key; })[0];
            zuordnungen[a.key] = zone.key;
            AUDIT.storage.set('rollen.venn', zuordnungen);
            U.toast(a.wo === zone.key
              ? '✓ Richtig. ' + U.esc(a.text)
              : '✗ Das gehört zu <b>' + (a.wo === 'beide' ? 'beiden' : a.wo.toUpperCase()) + '</b>: ' + U.esc(a.text),
              a.wo === zone.key ? 'ok' : 'bad', 6000);
            zeichneB();
            fortschritt();
          }
        });
        venn.appendChild(box);
      });

      var offen = D.dsbIsbAufgaben.filter(function (a) { return !zuordnungen[a.key]; });
      if (offen.length) {
        inner.appendChild(U.el('h3', { text: 'Noch zuzuordnen (' + offen.length + ')' }));
        var kl = U.el('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } });
        offen.forEach(function (a) {
          var k = U.el('div', {
            class: 'pitem', style: { cursor: 'grab', maxWidth: '320px' },
            text: a.text
          });
          AUDIT.dnd.ziehbar(k, function () { return { art: 'aufgabe', key: a.key }; }, U.esc(a.text.slice(0, 40)));
          kl.appendChild(k);
        });
        inner.appendChild(kl);
      } else {
        var richtigN = D.dsbIsbAufgaben.filter(function (a) { return zuordnungen[a.key] === a.wo; }).length;
        inner.appendChild(ui.note('Alle Aufgaben zugeordnet: <b>' + richtigN + ' von ' + D.dsbIsbAufgaben.length +
          '</b> richtig. <button class="btn btn--sm" id="vennReset">Noch einmal</button>',
          richtigN === D.dsbIsbAufgaben.length ? 'ok' : 'warn'));
        var vb = inner.querySelector('#vennReset');
        if (vb) vb.addEventListener('click', function () {
          zuordnungen = {}; AUDIT.storage.set('rollen.venn', zuordnungen); zeichneB();
        });
      }

      /* Benennungspflicht */
      inner.appendChild(U.el('h2', { text: 'Braucht die Lippe Logistik GmbH einen DSB?' }));
      inner.appendChild(U.el('p', { text: 'Beantworte die Fragen für deine Firma – die Prüfung ergibt sich aus Art. 37 DSGVO und § 38 BDSG.' }));
      var antworten = AUDIT.storage.get('rollen.dsbcheck', {});
      D.dsbPflichtFragen.forEach(function (q) {
        inner.appendChild(ui.checkbox('<b>' + U.esc(q.frage) + '</b> <span class="tag tag--art">' + U.esc(q.norm) + '</span>',
          !!antworten[q.key], function (v) {
            antworten[q.key] = v;
            AUDIT.storage.set('rollen.dsbcheck', antworten);
            zeichneB();
          }));
      });
      var treffer = D.dsbPflichtFragen.filter(function (q) { return antworten[q.key]; });
      inner.appendChild(U.el('div', { class: 'card card--' + (treffer.length ? 'warn' : 'info') }, [
        U.el('div', { class: 'card__h', text: treffer.length ? 'Ergebnis: DSB-Pflicht besteht' : 'Ergebnis: keine Benennungspflicht erkennbar' }),
        U.el('div', { class: 'card__b', html: treffer.length
          ? 'Es greift mindestens ein Pflichttatbestand (' + treffer.map(function (q) { return U.esc(q.norm); }).join(', ') + '). ' +
            'Ein Datenschutzbeauftragter muss benannt und der Aufsichtsbehörde gemeldet werden (Art. 37 Abs. 7). ' +
            'Er kann <b>intern</b> (Beschäftigter) oder <b>extern</b> (Dienstleister) sein. ' +
            'Nicht geeignet sind Personen mit Interessenkonflikt – also weder Geschäftsführung noch IT-Leitung ' +
            '(Art. 38 Abs. 6).'
          : 'Nach den angekreuzten Angaben besteht keine Pflicht. Freiwillig benennen darf man trotzdem – dann ' +
            'gelten für den DSB dieselben Rechte und Pflichten.' })
      ]));

      inner.appendChild(U.el('h2', { text: 'Rollen in deiner Firma benennen' }));
      var benannt = AUDIT.storage.get('rollen.benannt', {});
      [['dsb', 'Datenschutzbeauftragter benannt'], ['isb', 'IT-Sicherheitsbeauftragter benannt'],
       ['compliance', 'Compliance-Verantwortlicher benannt']].forEach(function (p) {
        inner.appendChild(ui.checkbox('<b>' + p[1] + '</b>', !!benannt[p[0]], function (v) {
          benannt[p[0]] = v;
          AUDIT.storage.set('rollen.benannt', benannt);
          fortschritt();
          zeichneB();
        }));
      });
      inner.appendChild(ui.note('Diese Angaben fließen in die <b>Compliance-Ampel</b> ein.', 'info'));
      inner.appendChild(ui.note('<b>Interessenkonflikt beachten:</b> Geschäftsführer, IT-Leiter oder Personalleiter ' +
        'dürfen nicht DSB sein – sie würden ihre eigenen Entscheidungen kontrollieren (Art. 38 Abs. 6).', 'warn'));

      /* Compliance-Grundlagen */
      inner.appendChild(U.el('h2', { text: 'Compliance – Regeltreue' }));
      inner.appendChild(U.el('p', {
        html: 'Compliance heißt: Einhaltung von Gesetzen, internen Richtlinien und freiwilligen Selbstverpflichtungen. ' +
              'Datenschutz und Informationssicherheit sind Teilbereiche davon.'
      }));
      var ct = U.el('table', { class: 't' });
      ct.innerHTML =
        '<tr><th>Baustein eines Compliance-Management-Systems</th><th>Beispiel</th></tr>' +
        '<tr><td>Verhaltenskodex (Code of Conduct)</td><td>Umgang mit Geschenken, Interessenkonflikten</td></tr>' +
        '<tr><td>Interne Richtlinien</td><td>IT-Nutzungsrichtlinie, Löschkonzept, Reisekostenregeln</td></tr>' +
        '<tr><td>Schulungen</td><td>Datenschutz, Korruption, Arbeitssicherheit</td></tr>' +
        '<tr><td>Kontrollen</td><td>Stichproben, interne Revision, Audits</td></tr>' +
        '<tr><td>Klare Zuständigkeiten</td><td>DSB, ISB, Compliance-Beauftragter benannt</td></tr>' +
        '<tr><td>Hinweisgebersystem</td><td>anonyme Meldestelle nach dem Hinweisgeberschutzgesetz</td></tr>';
      inner.appendChild(ct);
      inner.appendChild(ui.note('<b>Folgen von Verstößen:</b> Bußgelder (DSGVO bis 20 Mio. € oder 4 % des weltweiten ' +
        'Jahresumsatzes), Schadenersatz (Art. 82), persönliche Haftung der Leitung, Imageschaden, Auftragsverlust.', 'bad'));
      var it = U.el('table', { class: 't' });
      it.innerHTML =
        '<tr><th>IT-Compliance – typische Vorgaben</th><th>Worum es geht</th></tr>' +
        '<tr><td>DSGVO und BDSG</td><td>Umgang mit personenbezogenen Daten</td></tr>' +
        '<tr><td>HGB, AO, GoBD</td><td>Aufbewahrungsfristen, revisionssichere Archivierung</td></tr>' +
        '<tr><td>UrhG und Lizenzverträge</td><td>nur lizenzierte Software einsetzen</td></tr>' +
        '<tr><td>TDDDG (früher TTDSG)</td><td>Cookies und Zugriff auf Endgeräte brauchen Einwilligung</td></tr>' +
        '<tr><td>Branchenvorgaben (z. B. KRITIS, ISO 27001)</td><td>Mindestniveau der IT-Sicherheit</td></tr>';
      inner.appendChild(it);
    }

    /* =======================================================
       TEIL C – Compliance-Ampel
       ======================================================= */

    var paneC = U.el('div', { class: 'pane' });
    inhalte.ampel.appendChild(paneC);

    function zeichneAmpel() {
      U.clear(paneC);
      var inner = U.el('div', { class: 'pane__inner' });
      paneC.appendChild(inner);

      var erg = AUDIT.pruefung.ampel();

      inner.appendChild(U.el('h1', { text: 'Compliance-Ampel' }));
      inner.appendChild(U.el('p', {
        text: 'Das Dashboard fasst zusammen, was du in den Stationen 1 bis 4 an deiner Firma eingestellt hast. ' +
              'Es ist kein echtes Audit, zeigt dir aber, wo noch Lücken sind.'
      }));

      var farbe = erg.gesamt > 0.75 ? 'ok' : (erg.gesamt > 0.45 ? 'warn' : 'bad');
      var kopf = U.el('div', { class: 'card card--' + farbe });
      kopf.appendChild(U.el('div', { class: 'card__h',
        text: 'Gesamtbild: ' + Math.round(erg.gesamt * 100) + ' %' }));
      var kb = U.el('div', { class: 'card__b' });
      kb.appendChild(U.el('div', { class: 'bar' }, U.el('div', {
        class: 'bar__fill',
        style: { width: (erg.gesamt * 100) + '%',
          background: farbe === 'ok' ? 'var(--ok)' : (farbe === 'warn' ? 'var(--warn)' : 'var(--bad)') }
      })));
      kb.appendChild(U.el('p', {
        text: erg.gesamt > 0.75 ? 'Gute Grundlage. Im Ernstfall hast du deutlich bessere Karten.'
          : (erg.gesamt > 0.45 ? 'Solide Ansätze, aber es fehlen noch wichtige Bausteine.'
            : 'Hier ist noch viel zu tun – arbeite die roten Punkte ab.')
      }));
      kopf.appendChild(kb);
      inner.appendChild(kopf);

      erg.bereiche.forEach(function (b) {
        var f = b.wert > 0.75 ? 'ok' : (b.wert > 0.4 ? 'warn' : 'bad');
        var karte = U.el('div', { class: 'card card--' + f });
        karte.appendChild(U.el('div', { class: 'card__h',
          html: (f === 'ok' ? '🟢 ' : (f === 'warn' ? '🟡 ' : '🔴 ')) + U.esc(b.name) +
            ' <span class="tag">' + Math.round(b.wert * 100) + ' %</span>' }));
        var bb = U.el('div', { class: 'card__b' });
        bb.appendChild(U.el('div', { class: 'bar' }, U.el('div', {
          class: 'bar__fill', style: { width: (b.wert * 100) + '%',
            background: f === 'ok' ? 'var(--ok)' : (f === 'warn' ? 'var(--warn)' : 'var(--bad)') }
        })));
        bb.appendChild(U.el('p', { text: b.hinweis }));
        if (b.wert < 1 && b.station) {
          bb.appendChild(U.el('button', {
            class: 'btn btn--sm', text: 'Dort weiterarbeiten →',
            onclick: function () { AUDIT.main.zeige(b.station); }
          }));
        }
        karte.appendChild(bb);
        inner.appendChild(karte);
      });

      inner.appendChild(ui.note('Die <b>Rechenschaftspflicht</b> (Art. 5 Abs. 2) verlangt, dass die Firma die Einhaltung ' +
        '<b>nachweisen</b> kann – mit Verzeichnis von Verarbeitungstätigkeiten, dokumentierten TOMs, ' +
        'Schulungsnachweisen und Protokollen.', 'info'));
    }

    /* ---------- Fortschritt ---------- */
    function fortschritt() {
      var e = D.ereignisse.length ? Object.keys(stand.erledigt).length / D.ereignisse.length : 0;
      var v = D.dsbIsbAufgaben.length
        ? D.dsbIsbAufgaben.filter(function (a) { return zuordnungen[a.key]; }).length / D.dsbIsbAufgaben.length : 0;
      var benannt = AUDIT.storage.get('rollen.benannt', {});
      var r = ['dsb', 'isb', 'compliance'].filter(function (k) { return benannt[k]; }).length / 3;
      AUDIT.storage.setFortschritt('rollen', e * 0.5 + v * 0.3 + r * 0.2);
    }

    zeichneA();
    zeichneB();
    zeigeTeil('zustaendig');

    return { onShow: function () { if (aktiv === 'ampel') zeichneAmpel(); } };
  }
});
