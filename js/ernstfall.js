/* ===========================================================
   AUDIT – js/ernstfall.js
   Finale: Ransomware-Vorfall in Echtzeit (beschleunigt).
   Alles, was in den Stationen 1–4 eingestellt wurde, wirkt sich
   hier aus. Am Ende gibt es eine Auswertung mit Artikelangaben.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.stationen = AUDIT.stationen || [];

AUDIT.stationen.push({
  key: 'ernstfall',
  num: '5',
  label: 'Ernstfall',
  icon: '🚨',
  titel: 'Ernstfall – 72 Stunden',
  kurz: 'Ransomware trifft die Firma. Richtig reagieren, melden, wiederherstellen.',

  build: function (container) {
    var U = AUDIT.util, F = AUDIT.firma, ui = AUDIT.ui, D = AUDIT.data;

    var stage = U.el('div', { class: 'stage' });
    var panel = U.el('aside', { class: 'panel', style: { width: '420px', flex: '0 0 420px' } });
    container.appendChild(stage);
    container.appendChild(panel);

    var kopf = U.el('div', { class: 'toolbar' });
    stage.appendChild(kopf);
    var mount = U.el('div', { style: { flex: '1', minHeight: '0', display: 'flex' } });
    stage.appendChild(mount);

    /* ---------- Zustand des Szenarios ---------- */
    var S = null;
    function neuerLauf() {
      return {
        gestartet: false, beendet: false,
        stunde: 0, timer: null,
        patientZero: null,
        betroffene: [],
        pbBetroffen: false,
        protokoll: [],
        getan: {},                 /* key -> Stunde der Erledigung */
        schutzzieleGewaehlt: {},
        entscheidungA34: null
      };
    }
    S = neuerLauf();

    var cv = AUDIT.createCanvas({
      mount: mount,
      modus: 'ernstfall',
      legende: '<b>Balken = Zustand der Schutzziele</b><br>Klick ein System an, um zu handeln.',
      onSelect: function (sel) { zeichnePanel(); },
      hoverInfo: function (n) {
        var z = F.zustandVon(n);
        return '<b>' + U.esc(n.name) + '</b>' +
          (n.infektion ? '<span style="color:var(--bad)">befallen</span><br>' : '') +
          (n._getrennt ? '<span style="color:var(--ok)">vom Netz getrennt</span><br>' : '') +
          (z ? 'V ' + Math.round(z.v * 100) + '% · I ' + Math.round(z.i * 100) + '% · A ' + Math.round(z.a * 100) + '%' : '');
      }
    });

    /* ---------- Uhr ---------- */
    var uhr = U.el('div', { class: 'clock' });
    var uhrZeit = U.el('div', { class: 'clock__time', text: '00:00 h' });
    var uhrBar = U.el('div', { class: 'clock__bar' });
    var uhrFill = U.el('div', { class: 'clock__fill' });
    uhrBar.appendChild(uhrFill);
    uhr.appendChild(uhrZeit);
    uhr.appendChild(uhrBar);
    var btnStart = U.el('button', { class: 'btn btn--primary btn--sm', text: '▶ Vorfall starten', onclick: starten });
    var btnPause = U.el('button', { class: 'btn btn--sm', text: '⏸ Pause', onclick: pause, style: { display: 'none' } });
    var btnReset = U.el('button', { class: 'btn btn--sm', text: '↺ Neu', onclick: function () {
      if (S.timer) clearInterval(S.timer);
      F.heilen();
      F.data.nodes.forEach(function (n) { delete n._getrennt; });
      S = neuerLauf();
      cv.fxLeeren(); cv.render();
      uhrSetzen();
      zeichnePanel();
    } });
    kopf.appendChild(btnStart);
    kopf.appendChild(btnPause);
    kopf.appendChild(btnReset);
    kopf.appendChild(U.el('div', { class: 'toolbar__sep' }));
    kopf.appendChild(uhr);
    uhr.style.flex = '1';

    function uhrSetzen() {
      uhrZeit.textContent = (S.stunde < 10 ? '0' : '') + S.stunde + ':00 h';
      var p = Math.min(1, S.stunde / 72);
      uhrFill.style.width = (p * 100) + '%';
      uhrZeit.style.color = S.stunde > 72 ? 'var(--bad)' : (S.stunde > 48 ? 'var(--warn)' : 'var(--ok)');
    }

    function starten() {
      if (S.gestartet) { weiter(); return; }
      /* Patient Zero: ein Mitarbeiter mit Arbeitsplatz, sonst irgendein System */
      var person = F.data.nodes.filter(function (n) { return F.kategorie(n) === 'person' && n.typ === 'mitarbeiter'; })[0];
      var ziel = null;
      if (person) {
        ziel = F.nachbarn(person.id).filter(function (x) { return F.kategorie(x) === 'system'; })[0];
      }
      if (!ziel) ziel = F.data.nodes.filter(function (n) { return F.kategorie(n) === 'system'; })[0];
      if (!ziel) { U.toast('Auf der Fläche ist kein System – lade in Station 1 die Vorlage.', 'warn'); return; }

      S.gestartet = true;
      S.patientZero = ziel.id;
      btnStart.style.display = 'none';
      btnPause.style.display = '';

      log(0, (person ? person.name : 'Eine Mitarbeiterin') +
        ' öffnet den Anhang „Rechnung_2026_offen.pdf.exe“. Die Ransomware wird aktiv.', 'bad');

      /* geschulte Belegschaft merkt es früher */
      var geschult = person && (F.hatMassnahme(person, 'schulung') ||
        (F.zoneVon(person) && F.hatMassnahme(F.zoneVon(person), 'schulung')));
      if (geschult) {
        log(0, '<b>Die Schulung wirkt:</b> ' + (person ? person.name : 'Die Person') +
          ' merkt sofort, dass etwas nicht stimmt, und meldet den Vorfall. Du verlierst keine Zeit.', 'ok');
      } else {
        log(0, 'Niemand meldet etwas – der Befall fällt erst später auf. Eine <b>Schulung</b> und ein ' +
          '<b>Meldeweg</b> hätten hier Stunden gespart.', 'warn');
      }

      befalle(ziel);
      ausbreiten(ziel);
      uhrLaufen();
      zeichnePanel();
      U.toast('🚨 <b>Ransomware-Vorfall!</b> Die Uhr läuft: ab Kenntnis bleiben <b>72 Stunden</b> für die ' +
        'Meldung an die Aufsichtsbehörde ([[Art. 33 DSGVO]]).', 'bad', 10000);
    }

    function uhrLaufen() {
      if (S.timer) clearInterval(S.timer);
      S.timer = setInterval(function () {
        if (S.beendet) { clearInterval(S.timer); return; }
        S.stunde++;
        uhrSetzen();
        if (S.stunde === 24 && !S.getan.melden) {
          U.toast('24 Stunden vorbei. Die Meldung nach [[Art. 33 DSGVO|Art. 33]] muss <b>unverzüglich, ' +
            'möglichst binnen 72 Stunden</b> raus.', 'warn');
        }
        if (S.stunde === 73) {
          U.toast('Die 72 Stunden sind abgelaufen. Eine spätere Meldung ist weiter nötig, muss aber ' +
            '<b>begründet</b> werden (Art. 33 Abs. 1 Satz 2).', 'bad');
        }
        if (S.stunde >= 96) { pause(); }
      }, 900);
    }
    function pause() {
      if (S.timer) clearInterval(S.timer);
      S.timer = null;
      btnPause.textContent = '▶ Weiter';
      btnPause.onclick = weiter;
    }
    function weiter() {
      if (S.beendet) return;
      btnPause.textContent = '⏸ Pause';
      btnPause.onclick = pause;
      uhrLaufen();
    }

    function log(stunde, text, art) {
      S.protokoll.push({ h: stunde, text: text, art: art || '' });
    }

    function befalle(n) {
      n.infektion = { typ: 'ransomware', versteckt: false, aufgedeckt: true };
      F.schaden(n.id, { v: 0.4, i: 0.6, a: 1.0 });
      if (S.betroffene.indexOf(n.id) < 0) S.betroffene.push(n.id);
      cv.puls(n.id);
      cv.textFx(n.id, '🔒', 'bad');
      /* personenbezogene Daten betroffen? */
      var apps = F.appsOf(n.id);
      apps.forEach(function (a) {
        var def = F.def(a);
        if (def.pii) S.pbBetroffen = true;
        F.schaden(a.id, { v: 0.4, i: 0.6, a: 1.0 });
      });
      F.changed('ernstfall');
    }

    /* Ausbreitung in Wellen, begrenzt durch Segmentierung und Trennung */
    function ausbreiten(start) {
      var besucht = {}; besucht[start.id] = true;
      var welle = [start];
      function schritt() {
        if (S.beendet) return;
        var neu = [];
        welle.forEach(function (von) {
          if (von._getrennt) return;
          F.edgesOf(von.id, 'netz').forEach(function (e) {
            var zu = F.node(e.from === von.id ? e.to : e.from);
            if (!zu || besucht[zu.id] || F.kategorie(zu) !== 'system') return;
            besucht[zu.id] = true;
            if (zu._getrennt) {
              cv.schildBlitz(zu.id);
              log(S.stunde, '<b>' + zu.name + '</b> ist vom Netz getrennt und bleibt verschont.', 'ok');
              return;
            }
            if (zu.typ === 'firewall') {
              log(S.stunde, 'Die <b>Firewall</b> begrenzt die Ausbreitung.', 'ok');
              return;
            }
            var zA = F.zoneVon(von), zB = F.zoneVon(zu);
            var getrenntesNetz = (zA !== zB) &&
              [von, zu].some(function (x) { return F.hatMassnahme(x, 'segmentierung'); });
            if (getrenntesNetz) {
              cv.schildBlitz(zu.id);
              log(S.stunde, 'Die <b>Netzwerksegmentierung</b> stoppt die Ausbreitung vor <b>' + zu.name + '</b>.', 'ok');
              return;
            }
            var offlineBackup = zu.typ === 'backup' &&
              ((zu.props && zu.props.offline) || F.hatMassnahme(zu, 'backup'));
            if (offlineBackup) {
              cv.schildBlitz(zu.id);
              log(S.stunde, '<b>' + zu.name + '</b> ist getrennt aufbewahrt – die Sicherung bleibt heil.', 'ok');
              return;
            }
            cv.paket(e.id, { klasse: 'bad', dauer: 600, fertig: function () { befalle(zu); } });
            log(S.stunde, '<b>' + zu.name + '</b> wird ebenfalls verschlüsselt.', 'bad');
            neu.push(zu);
          });
        });
        if (neu.length) { welle = neu; setTimeout(schritt, 2600); }
        else { setTimeout(function () { zeichnePanel(); }, 400); }
        zeichnePanel();
      }
      setTimeout(schritt, 1800);
    }

    /* ---------- Aktionen ---------- */

    function tun(key, text, art) {
      if (S.getan[key] !== undefined) return false;
      S.getan[key] = S.stunde;
      log(S.stunde, text, art || 'ok');
      zeichnePanel();
      return true;
    }

    function trenneSystem(n) {
      if (n._getrennt) { U.toast('Dieses System ist bereits getrennt.', 'warn', 1600); return; }
      n._getrennt = true;
      cv.schildBlitz(n.id);
      cv.textFx(n.id, '🔌 getrennt', 'ok');
      log(S.stunde, '<b>' + n.name + '</b> wurde vom Netz getrennt.', 'ok');
      if (!S.getan.isolieren) S.getan.isolieren = S.stunde;
      F.changed('ernstfall');
      zeichnePanel();
    }

    /* ---------- Panel ---------- */

    function zeichnePanel() {
      U.clear(panel);

      if (!S.gestartet) { panelBriefing(); return; }
      if (S.beendet) { panelAuswertung(); return; }

      panel.appendChild(ui.panelKopf('🚨', 'Vorfall läuft', 'Stunde ' + S.stunde + ' seit Bekanntwerden'));

      /* Lage */
      var inf = F.data.nodes.filter(function (n) { return n.infektion; });
      panel.appendChild(U.el('div', { class: 'card card--bad' }, [
        U.el('div', { class: 'card__h', text: 'Lage' }),
        U.el('div', { class: 'card__b', html:
          '<p><b>' + inf.length + '</b> System(e)/Anwendung(en) verschlüsselt.</p>' +
          '<p>Personenbezogene Daten betroffen: <b>' + (S.pbBetroffen ? 'ja' : 'nein') + '</b></p>' })
      ]));

      /* ausgewählter Knoten */
      var sel = cv.sel;
      if (sel && sel.typ === 'node') {
        var n = F.node(sel.id);
        if (n) {
          panel.appendChild(U.el('h3', { text: 'Ausgewählt: ' + n.name }));
          if (F.kategorie(n) === 'system') {
            panel.appendChild(U.el('button', {
              class: 'btn btn--primary', text: '🔌 Vom Netz trennen',
              onclick: function () { trenneSystem(n); }
            }));
            panel.appendChild(ui.note('Systeme vom Netz zu trennen ist der <b>erste</b> Schritt: ' +
              'Er stoppt die Ausbreitung. Nicht ausschalten – der Arbeitsspeicher kann für die Forensik wichtig sein.', 'info'));
          }
        }
      } else {
        panel.appendChild(ui.note('Klick ein System auf der Fläche an, um es vom Netz zu trennen.', 'info'));
      }

      /* Checkliste */
      panel.appendChild(U.el('h3', { text: 'Was jetzt zu tun ist' }));

      schrittButton('isolieren', '1. Betroffene Systeme vom Netz trennen',
        'Systeme auf der Fläche anklicken und trennen.', null);

      schrittButton('isb', '2. IT-Sicherheitsbeauftragten informieren',
        'Der ISB leitet die Vorfallsbehandlung.', function () {
          tun('isb', 'Der <b>ISB</b> wurde informiert und übernimmt die Vorfallsbehandlung.', 'ok');
        });
      schrittButton('dsb', '3. Datenschutzbeauftragten informieren',
        'Pflicht, sobald personenbezogene Daten betroffen sein können (Art. 39).', function () {
          tun('dsb', 'Der <b>DSB</b> wurde informiert und prüft die Meldepflicht.', 'ok');
        });
      schrittButton('gf', '4. Geschäftsführung informieren',
        'Sie ist der Verantwortliche und entscheidet.', function () {
          tun('gf', 'Die <b>Geschäftsführung</b> wurde informiert.', 'ok');
        });

      /* Schutzziele */
      panel.appendChild(U.el('h3', { text: '5. Welche Schutzziele sind verletzt?' }));
      AUDIT.data.schutzziele.forEach(function (z) {
        panel.appendChild(ui.checkbox('<b>' + z.name + '</b>', !!S.schutzzieleGewaehlt[z.key], function (v) {
          S.schutzzieleGewaehlt[z.key] = v;
          S.getan.schutzziele = S.stunde;
        }));
      });

      /* Meldung */
      panel.appendChild(U.el('h3', { text: '6. Meldung an die Aufsichtsbehörde (Art. 33)' }));
      if (S.getan.melden === undefined) {
        panel.appendChild(U.el('button', {
          class: 'btn btn--primary', text: '📨 Datenpanne melden',
          onclick: function () {
            tun('melden', 'Die Datenpanne wurde der Aufsichtsbehörde gemeldet (Stunde ' + S.stunde + ').',
              S.stunde <= 72 ? 'ok' : 'bad');
            U.toast(S.stunde <= 72
              ? '✓ Gemeldet nach ' + S.stunde + ' Stunden – innerhalb der Frist von [[Art. 33 DSGVO|72 Stunden]].'
              : '⚠ Gemeldet nach ' + S.stunde + ' Stunden – <b>zu spät</b>. Die Verzögerung muss begründet werden.',
              S.stunde <= 72 ? 'ok' : 'bad');
          }
        }));
        panel.appendChild(U.el('button', {
          class: 'btn', style: { marginTop: '6px' }, text: 'Keine Meldung nötig',
          onclick: function () {
            tun('keinemeldung', 'Entscheidung: keine Meldung an die Aufsichtsbehörde.',
              S.pbBetroffen ? 'bad' : 'ok');
          }
        }));
        panel.appendChild(ui.note('Meldepflicht besteht, wenn eine Verletzung des Schutzes personenbezogener Daten ' +
          'vorliegt und ein Risiko für die Betroffenen nicht unwahrscheinlich ist. Verschlüsselte Daten sind ' +
          'trotzdem ein Vorfall – bei Ransomware ist mindestens die <b>Verfügbarkeit</b> verletzt.', 'info'));
      } else {
        panel.appendChild(ui.note('Gemeldet in Stunde ' + S.getan.melden + '.', S.getan.melden <= 72 ? 'ok' : 'bad'));
      }

      /* Art. 34 */
      panel.appendChild(U.el('h3', { text: '7. Betroffene benachrichtigen (Art. 34)?' }));
      if (S.entscheidungA34 === null) {
        panel.appendChild(U.el('button', {
          class: 'btn', text: 'Ja, Betroffene benachrichtigen',
          onclick: function () { S.entscheidungA34 = true; tun('a34', 'Entscheidung: Betroffene werden benachrichtigt.', 'ok'); }
        }));
        panel.appendChild(U.el('button', {
          class: 'btn', style: { marginTop: '6px' }, text: 'Nein, kein hohes Risiko',
          onclick: function () { S.entscheidungA34 = false; tun('a34', 'Entscheidung: keine Benachrichtigung der Betroffenen.', 'ok'); }
        }));
        panel.appendChild(ui.note('Benachrichtigung ist nötig bei <b>voraussichtlich hohem Risiko</b>. ' +
          'Sie kann entfallen, wenn die Daten durch <b>Verschlüsselung</b> oder <b>Pseudonymisierung</b> ' +
          'für Unbefugte unbrauchbar sind (Art. 34 Abs. 3 lit. a).', 'info'));
      }

      /* Wiederherstellung */
      panel.appendChild(U.el('h3', { text: '8. Wiederherstellung' }));
      var backup = F.data.nodes.filter(function (n) {
        return n.typ === 'backup' && !n.infektion &&
          ((n.props && n.props.offline) || F.hatMassnahme(n, 'backup'));
      })[0];
      if (S.getan.restore === undefined) {
        panel.appendChild(U.el('button', {
          class: 'btn' + (backup ? ' btn--primary' : ''), text: '💾 Aus Backup wiederherstellen',
          onclick: function () {
            if (!backup) {
              U.toast('Es gibt <b>kein unversehrtes, getrenntes Backup</b>. Die Daten lassen sich nicht ' +
                'wiederherstellen – genau deshalb gehört das Backup offline.', 'bad', 9000);
              tun('restore_fehl', 'Wiederherstellung nicht möglich: kein getrenntes Backup vorhanden.', 'bad');
              return;
            }
            tun('restore', 'Wiederherstellung aus dem getrennten Backup gestartet.', 'ok');
            F.data.nodes.forEach(function (n) {
              if (n.infektion) {
                n.infektion = null;
                n.zustand = { v: 1, i: 1, a: 1 };
                cv.textFx(n.id, '✓ wiederhergestellt', 'ok');
              }
            });
            F.changed('ernstfall');
            U.toast('Die Systeme werden aus dem Backup zurückgespielt. Vorher müssen sie ' +
              '<b>neu aufgesetzt</b> und die Einbruchsursache geschlossen werden.', 'ok', 9000);
          }
        }));
      }

      panel.appendChild(U.el('button', {
        class: 'btn btn--primary', style: { marginTop: '16px', width: '100%' },
        text: '✓ Vorfall abschließen und auswerten',
        onclick: function () { S.beendet = true; if (S.timer) clearInterval(S.timer); zeichnePanel(); fortschritt(); }
      }));

      /* Protokoll */
      panel.appendChild(U.el('h3', { text: 'Protokoll' }));
      S.protokoll.slice().reverse().forEach(function (p) {
        panel.appendChild(U.el('div', {
          class: 'note' + (p.art ? ' note--' + p.art : ''),
          html: '<b>' + (p.h < 10 ? '0' : '') + p.h + ':00 h</b> · ' + U.lexify(p.text)
        }));
      });
    }

    function schrittButton(key, titel, hinweis, fn) {
      var fertig = S.getan[key] !== undefined;
      var karte = U.el('div', { class: 'card' + (fertig ? ' card--ok' : '') });
      karte.appendChild(U.el('div', { class: 'card__h', text: (fertig ? '✓ ' : '') + titel }));
      var b = U.el('div', { class: 'card__b' });
      b.appendChild(U.el('p', { text: fertig ? 'Erledigt in Stunde ' + S.getan[key] : hinweis }));
      if (!fertig && fn) b.appendChild(U.el('button', { class: 'btn btn--sm btn--primary', text: 'Jetzt erledigen', onclick: fn }));
      karte.appendChild(b);
      panel.appendChild(karte);
    }

    function panelBriefing() {
      panel.appendChild(ui.panelKopf('🚨', 'Ernstfall', 'Alles, was du in den Stationen 1–4 eingestellt hast, wirkt hier.'));
      panel.appendChild(U.el('div', { class: 'card card--info' }, [
        U.el('div', { class: 'card__h', text: 'Die Lage' }),
        U.el('div', { class: 'card__b', html: U.rich(
          '<p>Ein Mitarbeiter öffnet einen Mailanhang. Wenige Minuten später erscheinen auf den ersten ' +
          'Systemen Lösegeldforderungen.</p>' +
          '<p>Ab dem Moment, in dem die Firma davon weiß, laufen die <b>72 Stunden</b> aus ' +
          '[[Art. 33 DSGVO]].</p>') })
      ]));

      /* Vorsorge-Check */
      panel.appendChild(U.el('h3', { text: 'Deine Vorsorge' }));
      vorsorge().forEach(function (v) {
        panel.appendChild(U.el('div', { class: 'note note--' + (v.ok ? 'ok' : 'bad'),
          html: (v.ok ? '✓ ' : '✗ ') + U.lexify(v.text) }));
      });

      panel.appendChild(ui.note('Du kannst jederzeit zurück in die Stationen 1–4 gehen und nachbessern. ' +
        'Danach hier neu starten.', 'info'));
      panel.appendChild(U.el('button', {
        class: 'btn btn--primary', style: { width: '100%', marginTop: '10px' },
        text: '▶ Vorfall starten', onclick: starten
      }));
    }

    function vorsorge() {
      var backupOk = F.data.nodes.some(function (n) {
        return n.typ === 'backup' && ((n.props && n.props.offline) || F.hatMassnahme(n, 'backup'));
      });
      return [
        { key: 'backup', ok: backupOk,
          text: backupOk ? 'Getrenntes [[Backup]] vorhanden – Wiederherstellung möglich.'
            : 'Kein getrenntes [[Backup]]. Ransomware verschlüsselt eine Sicherung am Netz gleich mit.' },
        { key: 'segmentierung', ok: F.massnahmeIrgendwo('segmentierung'),
          text: F.massnahmeIrgendwo('segmentierung') ? '[[Netzwerksegmentierung]] begrenzt die Ausbreitung.'
            : 'Keine [[Netzwerksegmentierung]] – die Ransomware erreicht alles, was am Netz hängt.' },
        { key: 'schulung', ok: F.massnahmeIrgendwo('schulung'),
          text: F.massnahmeIrgendwo('schulung') ? '[[Mitarbeiterschulung]] vorhanden – Vorfälle werden früher bemerkt.'
            : 'Keine [[Mitarbeiterschulung]] – der Anhang wird geöffnet und niemand meldet es.' },
        { key: 'verschluesselung', ok: F.massnahmeIrgendwo('verschluesselung') ||
            F.data.nodes.some(function (n) { return n.props && n.props.verschluesselt; }),
          text: (F.massnahmeIrgendwo('verschluesselung') || F.data.nodes.some(function (n) { return n.props && n.props.verschluesselt; }))
            ? '[[Verschlüsselung]] im Einsatz – gestohlene Daten sind für Unbefugte wertlos (wichtig für Art. 34).'
            : 'Keine [[Verschlüsselung]] – abgeflossene Daten sind im Klartext lesbar.' },
        { key: 'berechtigung', ok: F.massnahmeIrgendwo('berechtigung') || F.massnahmeIrgendwo('rechte'),
          text: (F.massnahmeIrgendwo('berechtigung') || F.massnahmeIrgendwo('rechte'))
            ? '[[Zugriffskontrolle|Berechtigungen]] begrenzen, worauf der betroffene Zugang Zugriff hatte.'
            : 'Keine Berechtigungsbeschränkung – der betroffene Zugang kam überall hin.' },
        { key: 'meldeweg', ok: F.massnahmeIrgendwo('meldeweg'),
          text: F.massnahmeIrgendwo('meldeweg') ? 'Klarer Meldeweg vorhanden – die 72-Stunden-Frist beginnt kontrolliert.'
            : 'Kein geregelter Meldeweg – wertvolle Stunden gehen verloren.' }
      ];
    }

    /* ---------- Auswertung ---------- */

    function panelAuswertung() {
      panel.appendChild(ui.panelKopf('📊', 'Auswertung', 'Vorfall abgeschlossen nach ' + S.stunde + ' Stunden'));

      var punkte = [];
      function p(ok, titel, text, norm) { punkte.push({ ok: ok, titel: titel, text: text, norm: norm }); }

      /* 1. Isolierung */
      p(S.getan.isolieren !== undefined && S.getan.isolieren <= 6,
        'Systeme isoliert',
        S.getan.isolieren !== undefined
          ? 'Erste Trennung in Stunde ' + S.getan.isolieren + '. Je schneller, desto weniger Systeme sind betroffen.'
          : 'Kein System wurde vom Netz getrennt – die Ransomware konnte sich ungehindert ausbreiten.');

      /* 2. Rollen informiert */
      p(S.getan.isb !== undefined, 'ISB informiert',
        S.getan.isb !== undefined ? 'In Stunde ' + S.getan.isb + ' – der ISB leitet die Vorfallsbehandlung.'
          : 'Der IT-Sicherheitsbeauftragte wurde nicht eingebunden.');
      p(S.getan.dsb !== undefined, 'DSB informiert',
        S.getan.dsb !== undefined ? 'In Stunde ' + S.getan.dsb + ' – er prüft die Meldepflicht.'
          : 'Der Datenschutzbeauftragte wurde nicht eingebunden, obwohl personenbezogene Daten im Spiel sind.',
        'Art. 39 DSGVO');
      p(S.getan.gf !== undefined, 'Geschäftsführung informiert',
        S.getan.gf !== undefined ? 'In Stunde ' + S.getan.gf + '.'
          : 'Die Leitung ist der Verantwortliche und muss über die Meldung entscheiden.',
        'Art. 4 Nr. 7 DSGVO');

      /* 3. Schutzziele */
      var a = S.schutzzieleGewaehlt;
      var zieleRichtig = a.a === true;   /* Verfügbarkeit ist bei Ransomware immer verletzt */
      p(zieleRichtig, 'Schutzziele erkannt',
        zieleRichtig
          ? 'Richtig: Ransomware trifft vor allem die <b>Verfügbarkeit</b>' +
            (a.i ? ', durch die Verschlüsselung auch die <b>Integrität</b>' : '') +
            (a.v ? ' und – wenn Daten vorher kopiert wurden – die <b>Vertraulichkeit</b>' : '') + '.'
          : 'Bei Ransomware ist immer die <b>Verfügbarkeit</b> verletzt. Wurden Daten vorher abgezogen ' +
            '(doppelte Erpressung), kommt die Vertraulichkeit dazu.');

      /* 4. Meldung */
      if (S.pbBetroffen) {
        var gemeldet = S.getan.melden !== undefined;
        p(gemeldet && S.getan.melden <= 72, 'Meldung an die Aufsichtsbehörde',
          gemeldet
            ? (S.getan.melden <= 72
                ? 'Gemeldet nach ' + S.getan.melden + ' Stunden – innerhalb der Frist.'
                : 'Gemeldet nach ' + S.getan.melden + ' Stunden – zu spät. Verzögerungen müssen begründet werden.')
            : 'Es wurde nicht gemeldet. Da personenbezogene Daten betroffen sind, war die Meldung ' +
              'binnen 72 Stunden erforderlich.',
          'Art. 33 DSGVO');
      } else {
        p(true, 'Meldung an die Aufsichtsbehörde',
          'Es waren keine personenbezogenen Daten betroffen – dann besteht keine Meldepflicht nach Art. 33. ' +
          'Der Vorfall bleibt trotzdem ein Sicherheitsvorfall.', 'Art. 33 DSGVO');
      }

      /* 5. Art. 34 */
      var geschuetzt = F.massnahmeIrgendwo('verschluesselung') ||
        F.data.nodes.some(function (n) { return n.props && n.props.verschluesselt; });
      var a34Richtig = S.entscheidungA34 === null ? false : (geschuetzt ? S.entscheidungA34 === false : S.entscheidungA34 === true);
      p(a34Richtig, 'Benachrichtigung der Betroffenen',
        S.entscheidungA34 === null
          ? 'Du hast dich nicht entschieden. Art. 34 verlangt eine Benachrichtigung bei voraussichtlich hohem Risiko.'
          : (geschuetzt
              ? (S.entscheidungA34 === false
                  ? 'Richtig: Die Daten waren verschlüsselt und damit für Unbefugte unbrauchbar – ' +
                    'die Benachrichtigung kann entfallen (Art. 34 Abs. 3 lit. a). Melden an die Behörde muss man trotzdem.'
                  : 'Benachrichtigen schadet nie – nötig wäre es hier aber nicht gewesen, weil die Daten ' +
                    'verschlüsselt waren (Art. 34 Abs. 3 lit. a).')
              : (S.entscheidungA34 === true
                  ? 'Richtig: Ohne Verschlüsselung ist von einem hohen Risiko auszugehen – die Betroffenen ' +
                    'müssen unverzüglich informiert werden.'
                  : 'Ohne Verschlüsselung oder Pseudonymisierung ist ein hohes Risiko anzunehmen. ' +
                    'Dann müssen die Betroffenen benachrichtigt werden.')),
        'Art. 34 DSGVO');

      /* 6. Wiederherstellung */
      p(S.getan.restore !== undefined, 'Wiederherstellung',
        S.getan.restore !== undefined
          ? 'Die Daten konnten aus dem getrennten Backup zurückgespielt werden. Wichtig: Systeme vorher ' +
            'neu aufsetzen und die Einbruchsursache schließen.'
          : 'Keine erfolgreiche Wiederherstellung. Ohne getrenntes, getestetes Backup bleibt nur der ' +
            'Neuaufbau – oder der Datenverlust.',
        'Art. 32 Abs. 1 lit. c DSGVO');

      /* 7. Vorsorge */
      var vor = vorsorge();
      vor.forEach(function (v) { p(v.ok, 'Vorsorge: ' + v.key, v.text); });

      var gut = punkte.filter(function (x) { return x.ok; }).length;
      var quote = gut / punkte.length;
      var farbe = quote > 0.75 ? 'ok' : (quote > 0.45 ? 'warn' : 'bad');

      panel.appendChild(U.el('div', { class: 'card card--' + farbe }, [
        U.el('div', { class: 'card__h', text: 'Ergebnis: ' + gut + ' von ' + punkte.length + ' Punkten' }),
        U.el('div', { class: 'card__b' }, [
          U.el('div', { class: 'bar' }, U.el('div', {
            class: 'bar__fill', style: { width: (quote * 100) + '%',
              background: farbe === 'ok' ? 'var(--ok)' : (farbe === 'warn' ? 'var(--warn)' : 'var(--bad)') }
          })),
          U.el('p', { text: F.data.nodes.filter(function (n) { return n.infektion; }).length +
            ' System(e) blieben am Ende verschlüsselt.' })
        ])
      ]));

      punkte.forEach(function (x) {
        panel.appendChild(U.el('div', { class: 'card card--' + (x.ok ? 'ok' : 'bad') }, [
          U.el('div', { class: 'card__h', html: (x.ok ? '✓ ' : '✗ ') + U.esc(x.titel) +
            (x.norm ? ' <span class="tag tag--art">' + U.esc(x.norm) + '</span>' : '') }),
          U.el('div', { class: 'card__b', html: U.rich(x.text) })
        ]));
      });

      panel.appendChild(U.el('h3', { text: 'Nach dem Vorfall' }));
      panel.appendChild(ui.note('Jetzt gehen die Anfragen der Betroffenen ein: „Waren meine Daten betroffen?“ ' +
        '([[Art. 15 DSGVO|Art. 15]]) und „Löschen Sie alles!“ ([[Art. 17 DSGVO|Art. 17]]). ' +
        'Die übst du im <b>Betroffenen-Postfach</b> in Station 3.', 'info'));
      panel.appendChild(U.el('button', {
        class: 'btn', text: 'Zum Betroffenen-Postfach →',
        onclick: function () { AUDIT.main.zeige('daten'); }
      }));
      panel.appendChild(ui.note('<b>Lessons Learned:</b> Nach jedem Vorfall gehört eine Nachbereitung dazu – ' +
        'Ursache beheben, Maßnahmen nachschärfen, Notfallplan und Schulungen anpassen. ' +
        'Das ist der Verbesserungsschritt im Sicherheitsprozess (PDCA).', 'info'));

      panel.appendChild(U.el('h3', { text: 'Protokoll' }));
      S.protokoll.forEach(function (pr) {
        panel.appendChild(U.el('div', { class: 'note' + (pr.art ? ' note--' + pr.art : ''),
          html: '<b>' + (pr.h < 10 ? '0' : '') + pr.h + ':00 h</b> · ' + U.lexify(pr.text) }));
      });

      AUDIT.storage.set('ernstfall.ergebnis', { quote: quote, zeit: S.stunde });
    }

    function fortschritt() {
      var e = AUDIT.storage.get('ernstfall.ergebnis', null);
      AUDIT.storage.setFortschritt('ernstfall', e ? Math.max(0.5, e.quote) : 0.25);
    }

    zeichnePanel();
    uhrSetzen();

    return {
      onShow: function () {
        zeichnePanel();
        cv.render();
        /* erst zeichnen lassen, dann einpassen – sonst stimmt die Breite nicht */
        setTimeout(function () { cv.einpassen(); }, 60);
      }
    };
  }
});
