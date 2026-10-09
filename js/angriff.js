/* ===========================================================
   AUDIT – js/angriff.js
   Station 2 "Angriff": Schadsoftware am Verhalten unterscheiden,
   Schutzmaßnahmen wirken sehen, Zutritt/Zugang/Zugriff üben.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.stationen = AUDIT.stationen || [];

AUDIT.stationen.push({
  key: 'angriff',
  num: '2',
  label: 'Angriff',
  icon: '☣️',
  titel: 'Angriff – Schadsoftware und Schutzmaßnahmen',
  kurz: 'Schadsoftware am Verhalten erkennen, Maßnahmen setzen, Angreifer abwehren.',

  build: function (container) {
    var U = AUDIT.util, F = AUDIT.firma, ui = AUDIT.ui;
    var D = AUDIT.data;

    var pal = U.el('aside', { class: 'palette' });
    var stage = U.el('div', { class: 'stage' });
    var panel = U.el('aside', { class: 'panel' });
    container.appendChild(pal); container.appendChild(stage); container.appendChild(panel);

    var mount = U.el('div', { style: { flex: '1', minHeight: '0', display: 'flex' } });
    stage.appendChild(U.el('div'));
    stage.appendChild(mount);

    var protokoll = [];     // letzte Simulation
    var laeuft = false;

    /* ================= Arbeitsfläche ================= */

    var cv = AUDIT.createCanvas({
      mount: mount,
      modus: 'angriff',
      legende:
        '<b>Balken = Zustand der Schutzziele</b><br>' +
        '<i style="background:var(--sb-normal)"></i>unversehrt &nbsp;' +
        '<i style="background:var(--sb-hoch)"></i>beeinträchtigt &nbsp;' +
        '<i style="background:var(--sb-sehrhoch)"></i>verletzt<br>' +
        '🛡 = gesetzte Schutzmaßnahme',
      onSelect: function (sel) { zeichnePanel(sel); },
      onDrop: function (payload, pt, node, zone) { drop(payload, pt, node, zone); },
      onShield: function (mk) {
        var m = D.massnahmenMap[mk];
        if (m) U.modal(m.icon + ' ' + m.name, '<p>' + U.rich(m.text) + '</p>' +
          '<p class="sub">Kontrollart: ' + U.esc((D.kontrollartenMap[m.kontrolle] || {}).name || '–') + '</p>');
      },
      hoverInfo: function (n) {
        var z = F.zustandVon(n);
        if (!z) return '<b>' + U.esc(n.name) + '</b>' + U.esc(F.def(n).label);
        var inf = n.infektion;
        return '<b>' + U.esc(n.name) + '</b>' +
          (inf && !(inf.versteckt && !inf.aufgedeckt)
            ? '<span style="color:var(--bad)">befallen: ' + U.esc((D.schadsoftwareMap[inf.typ] || {}).name) + '</span><br>'
            : '') +
          'V ' + pct(z.v) + ' · I ' + pct(z.i) + ' · A ' + pct(z.a) +
          ((n.massnahmen || []).length ? '<br>🛡 ' + n.massnahmen.length + ' Maßnahme(n)' : '');
      }
    });

    function pct(x) { return Math.round(x * 100) + '%'; }

    /* Toolbar mit Zusatzknöpfen */
    var btnScan = U.el('button', {
      class: 'btn btn--sm', text: '🔍 Tiefenscan',
      title: 'Prüfung von einem sauberen Boot-Medium – deckt versteckte Rootkits auf',
      onclick: tiefenscan
    });
    var btnHeilen = U.el('button', {
      class: 'btn btn--sm', text: '♻️ Alles bereinigen',
      title: 'Simulation zurücksetzen: Infektionen entfernen, Schutzziele wiederherstellen',
      onclick: function () {
        F.heilen();
        cv.fxLeeren();
        protokoll = [];
        zeichnePanel(cv.sel);
        U.toast('Alle Systeme bereinigt. In der Realität wäre das deutlich mehr Arbeit.', 'ok');
      }
    });
    stage.replaceChild(ui.firmaToolbar(cv, [btnScan, btnHeilen]), stage.firstChild);

    /* ================= Palette ================= */

    var palModus = 'angriff';   /* 'angriff' | 'schutz' */

    function paletteBauen() {
      U.clear(pal);

      /* Umschalter: entweder angreifen oder schützen – nie beides auf einmal */
      var seg = U.el('div', { class: 'seg', style: { marginBottom: '10px' } });
      [['angriff', '☣️ Angreifen'], ['schutz', '🛡 Schützen']].forEach(function (m) {
        seg.appendChild(U.el('button', {
          class: palModus === m[0] ? 'is-on' : '',
          text: m[1],
          style: palModus === m[0] ? { background: 'var(--accent)', color: '#06131a' } : null,
          onclick: function () { palModus = m[0]; paletteBauen(); }
        }));
      });
      pal.appendChild(seg);

      var liste = U.el('div');
      pal.appendChild(liste);

      if (palModus === 'angriff') {
        AUDIT.palette.baue(liste, [
          {
            key: 'schadsoftware', titel: 'Schadsoftware', offen: true,
            hinweis: 'Karte auf ein <b>System</b> ziehen. Hoax und Phishing gehören auf eine <b>Person</b>.',
            items: D.schadsoftware.map(function (x) {
              return {
                icon: x.icon, label: x.name, titel: x.kurz,
                farbe: 'var(--bad)',
                payload: { art: 'malware', key: x.key },
                onClick: function () { zeigeMalware(x); }
              };
            })
          },
          {
            key: 'angreifer', titel: 'Angreifer (Zutritt · Zugang · Zugriff)', offen: false,
            items: D.angreifer.map(function (a) {
              return {
                icon: a.icon, label: a.name, titel: a.versucht,
                farbe: 'var(--warn)',
                payload: { art: 'angreifer', key: a.key },
                onClick: function () { zeigeAngreifer(a); }
              };
            })
          }
        ]);
      } else {
        /* Maßnahmen nach Wirkung gruppiert statt 20 Karten am Stück */
        var gruppen = [
          { key: 'technik', titel: 'Technischer Schutz', offen: true,
            keys: ['virenscanner', 'updates', 'firewall', 'segmentierung', 'backup', 'verschluesselung', 'mailfilter', 'neuaufsetzen'] },
          { key: 'menschen', titel: 'Menschen & Organisation', offen: false,
            keys: ['schulung', 'meldeweg', 'rechte'] },
          { key: 'zutritt', titel: 'Zutritt (Raum)', offen: false,
            keys: ['schluessel', 'alarm', 'besucherbuch'] },
          { key: 'zugang', titel: 'Zugang (System)', offen: false,
            keys: ['passwort', 'zweifaktor', 'bildschirmsperre'] },
          { key: 'zugriff', titel: 'Zugriff (Daten)', offen: false,
            keys: ['berechtigung', 'needtoknow', 'protokollierung'] }
        ];
        AUDIT.palette.baue(liste, gruppen.map(function (g) {
          return {
            key: g.key, titel: g.titel, offen: g.offen,
            hinweis: g.offen ? 'Maßnahme auf ein System, eine Person oder einen Raum ziehen.' : null,
            items: g.keys.map(function (k) { return D.massnahmenMap[k]; }).filter(Boolean)
              .map(function (m) {
                return {
                  icon: m.icon, label: m.name, titel: m.kurz,
                  farbe: 'var(--ok)',
                  payload: { art: 'massnahme', key: m.key },
                  onClick: function () { zeigeMassnahme(m); }
                };
              })
          };
        }));
      }
    }

    paletteBauen();

    /* ================= Drop-Verarbeitung ================= */

    function drop(payload, pt, node, zone) {
      if (!payload) return;

      if (payload.art === 'massnahme') {
        var m = D.massnahmenMap[payload.key];
        var ziel = node || zone;
        if (!ziel) { U.toast('Zieh die Maßnahme direkt auf einen Baustein oder einen Raum.', 'warn'); return; }
        var kat = node ? F.kategorie(node) : 'zone';
        if (m.ziele.indexOf(kat) < 0) {
          U.toast('<b>' + U.esc(m.name) + '</b> passt nicht auf ' + U.esc(node ? F.def(node).label : 'einen Raum') +
            '. Möglich sind: ' + m.ziele.join(', ') + '.', 'warn');
          return;
        }
        if (F.hatMassnahme(ziel, m.key)) { U.toast('Diese Maßnahme ist dort schon gesetzt.', 'warn', 1800); return; }
        F.setzeMassnahme(ziel.id, m.key, true);
        cv.schildBlitz(ziel.id);
        U.toast('<b>' + U.esc(m.name) + '</b> auf <b>' + U.esc(ziel.name) + '</b> gesetzt.<br>' + U.esc(m.kurz), 'ok');
        fortschritt();
        return;
      }

      if (payload.art === 'malware') {
        if (!node) { U.toast('Zieh die Karte auf ein System oder eine Person.', 'warn'); return; }
        starteAngriff(payload.key, node);
        return;
      }

      if (payload.art === 'angreifer') {
        var a = D.angreiferMap[payload.key];
        var zielObj = a.zielart === 'zone' ? (zone || null) : node;
        if (!zielObj) {
          U.toast('Dieser Angreifer gehört auf ' +
            (a.zielart === 'zone' ? 'einen <b>Raum</b>' :
             a.zielart === 'anwendung' ? 'eine <b>Anwendung</b>' : 'ein <b>System</b>') + '.', 'warn');
          return;
        }
        if (a.zielart !== 'zone' && F.kategorie(zielObj) !== a.zielart) {
          U.toast('Dieser Angreifer versucht es bei ' +
            (a.zielart === 'anwendung' ? 'einer Anwendung' : 'einem System') + '.', 'warn');
          return;
        }
        angreiferVersuch(a, zielObj);
      }
    }

    /* ================= Hilfen ================= */

    /* Maßnahmen, die für einen Knoten gelten: eigene + die seines Raums */
    function massnahmenAm(n) {
      var keys = (n.massnahmen || []).slice();
      var z = F.zoneVon(n);
      if (z) keys = keys.concat(z.massnahmen || []);
      /* Maßnahmen auf Anwendungen gelten auch für ihr System und umgekehrt */
      if (F.kategorie(n) === 'system') {
        F.appsOf(n.id).forEach(function (a) { keys = keys.concat(a.massnahmen || []); });
      }
      var out = [];
      keys.forEach(function (k) {
        var m = D.massnahmenMap[k];
        if (m && out.indexOf(m) < 0) out.push(m);
      });
      return out;
    }

    function log(text, art) {
      protokoll.push({ text: text, art: art || '' });
    }

    function systeme(n) { return F.kategorie(n) === 'system'; }

    /* ================= Angriffe ================= */

    function starteAngriff(key, ziel) {
      var s = D.schadsoftwareMap[key];
      if (!s) return;
      if (laeuft) { U.toast('Es läuft schon eine Simulation. Einen Moment …', 'warn', 1800); return; }

      var kat = F.kategorie(ziel);
      if (s.ziel.indexOf(kat) < 0) {
        U.toast('<b>' + U.esc(s.name) + '</b> greift ' +
          (s.ziel[0] === 'person' ? 'Menschen' : 'Systeme') + ' an. ' +
          (s.ziel[0] === 'person' ? 'Zieh die Karte auf einen Mitarbeiter.' : 'Zieh die Karte auf ein System.'), 'warn');
        return;
      }

      protokoll = [];
      log('Angriff mit <b>' + s.name + '</b> auf <b>' + ziel.name + '</b>.', 'bad');

      /* 1. Greift eine Maßnahme vollständig? */
      var vorhanden = massnahmenAm(ziel);
      var stopper = vorhanden.filter(function (m) { return (m.stoppt || []).indexOf(key) >= 0; });
      if (stopper.length) {
        cv.schildBlitz(ziel.id);
        cv.textFx(ziel.id, '🛡 abgewehrt', 'ok');
        log('<b>' + stopper[0].name + '</b> hat den Angriff verhindert: ' + stopper[0].kurz, 'ok');
        U.toast('🛡 <b>' + U.esc(stopper[0].name) + '</b> stoppt <b>' + U.esc(s.name) + '</b>.<br>' +
          U.esc(stopper[0].text), 'ok');
        merkeProbiert(key);
        zeichnePanel(cv.sel);
        return;
      }

      /* 2. Bremsende Maßnahmen mindern den Schaden */
      var bremser = vorhanden.filter(function (m) { return (m.bremst || []).indexOf(key) >= 0; });
      var faktor = Math.max(0.25, 1 - bremser.length * 0.35);
      if (bremser.length) {
        cv.schildBlitz(ziel.id);
        log('Gemildert durch: ' + bremser.map(function (m) { return m.name; }).join(', ') +
          ' – der Angriff gelingt, aber der Schaden ist kleiner.', 'warn');
      }

      laeuft = true;
      befalle(ziel, key, faktor, s.simulation.typ === 'versteckt');

      /* 3. Verhalten je nach Art */
      var typ = s.simulation.typ;
      if (typ === 'netz') wurm(ziel, s, faktor);
      else if (typ === 'verschluessel') ransom(ziel, s, faktor);
      else if (typ === 'exfil') exfiltration(ziel, s, faktor);
      else if (typ === 'fernsteuer') botnetz(ziel, s, faktor);
      else if (typ === 'benutzer') virusWarten(ziel, s, faktor);
      else if (typ === 'versteckt') rootkit(ziel, s, faktor);
      else if (typ === 'social') socialEngineering(ziel, s, faktor);
      else { fertig(s); }

      merkeProbiert(key);
    }

    function befalle(n, key, faktor, versteckt) {
      var s = D.schadsoftwareMap[key];
      n.infektion = { typ: key, versteckt: !!versteckt, aufgedeckt: false };
      var schaden = {};
      ['v', 'i', 'a'].forEach(function (z) { schaden[z] = (s.simulation.schaden[z] || 0) * faktor; });
      F.schaden(n.id, schaden);
      cv.puls(n.id);
      F.changed('angriff');
    }

    function fertig(s, extra) {
      laeuft = false;
      log('Simulation beendet.', '');
      if (extra) log(extra, '');
      zeichnePanel(cv.sel);
      F.changed('angriff');
    }

    /* --- Wurm: breitet sich selbstständig über Netzleitungen aus --- */
    function wurm(start, s, faktor) {
      var besucht = {}; besucht[start.id] = true;
      var welle = [start];
      log('Der Wurm sucht selbstständig nach erreichbaren Systemen – ohne dass jemand etwas anklickt.', 'bad');

      function naechsteWelle() {
        var neu = [];
        var offen = 0;
        welle.forEach(function (von) {
          F.edgesOf(von.id, 'netz').forEach(function (e) {
            var zu = F.node(e.from === von.id ? e.to : e.from);
            if (!zu || besucht[zu.id] || !systeme(zu)) return;
            besucht[zu.id] = true;

            /* Hat das Zielsystem die Lücke geschlossen? */
            var mAn = massnahmenAm(zu);
            var gepatcht = mAn.some(function (m) { return (m.stoppt || []).indexOf('wurm') >= 0; });
            /* Segmentgrenze? */
            var zA = F.zoneVon(von), zB = F.zoneVon(zu);
            var grenze = zA !== zB;
            var trenner = grenze && (massnahmenAm(von).concat(mAn)).some(function (m) {
              return m.key === 'segmentierung' || m.key === 'firewall';
            });

            offen++;
            if (zu.typ === 'firewall') {
              cv.paket(e.id, { klasse: 'bad', dauer: 700, fertig: function () {
                cv.schildBlitz(zu.id); cv.textFx(zu.id, '🧱 Firewall', 'ok');
              } });
              log('Die <b>Firewall</b> trennt die Netzbereiche – hier kommt der Wurm nicht durch.', 'ok');
              return;
            }
            if (gepatcht) {
              cv.paket(e.id, { klasse: 'bad', dauer: 700, fertig: function () {
                cv.schildBlitz(zu.id); cv.textFx(zu.id, '🩹 Lücke zu', 'ok');
              } });
              log('<b>' + zu.name + '</b>: Updates eingespielt – die Lücke ist geschlossen, der Wurm kommt nicht hinein.', 'ok');
              return;
            }
            if (trenner) {
              e._blocked = true;
              cv.paket(e.id, { klasse: 'bad', dauer: 700, fertig: function () {
                cv.schildBlitz(zu.id); cv.textFx(zu.id, '🧩 Segmentgrenze', 'ok');
              } });
              log('Die Ausbreitung von <b>' + von.name + '</b> nach <b>' + zu.name +
                '</b> wird an der Segmentgrenze gestoppt (Netzwerksegmentierung bzw. Firewall).', 'ok');
              return;
            }
            cv.paket(e.id, { klasse: 'bad', dauer: 700, fertig: function () {
              befalle(zu, 'wurm', faktor, false);
              cv.textFx(zu.id, '☣ befallen', 'bad');
            } });
            log('<b>' + zu.name + '</b> wurde über die Netzwerkverbindung befallen.', 'bad');
            neu.push(zu);
          });
        });
        if (neu.length) { welle = neu; setTimeout(naechsteWelle, 1000); }
        else {
          setTimeout(function () {
            var anzahl = Object.keys(besucht).length;
            fertig(s, 'Ergebnis: ' + anzahl + ' System(e) betroffen. Gegen Würmer helfen vor allem ' +
              '<b>zeitnahe Updates</b> und <b>Netzwerksegmentierung</b>.');
            if (anzahl > 2) {
              U.toast('Der [[Wurm]] hat sich ohne jede Benutzeraktion auf <b>' + anzahl +
                ' Systeme</b> ausgebreitet. Genau das unterscheidet ihn vom [[Virus]].', 'bad');
            }
          }, 800);
        }
      }
      setTimeout(naechsteWelle, 600);
    }

    /* --- Ransomware: verschlüsselt alles Erreichbare --- */
    function ransom(start, s, faktor) {
      log('Die Daten auf <b>' + start.name + '</b> werden verschlüsselt. Eine Lösegeldforderung erscheint.', 'bad');
      cv.textFx(start.id, '🔒 verschlüsselt', 'bad');

      var besucht = {}; besucht[start.id] = true;
      var getroffen = [start];
      var backupSicher = null;

      var welle = [start];
      function naechste() {
        var neu = [];
        welle.forEach(function (von) {
          F.edgesOf(von.id, 'netz').forEach(function (e) {
            var zu = F.node(e.from === von.id ? e.to : e.from);
            if (!zu || besucht[zu.id] || !systeme(zu)) return;
            besucht[zu.id] = true;

            var mAn = massnahmenAm(zu);
            var zA = F.zoneVon(von), zB = F.zoneVon(zu);
            var trenner = (zA !== zB) && (massnahmenAm(von).concat(mAn)).some(function (m) {
              return m.key === 'segmentierung';
            });
            if (zu.typ === 'firewall') {
              cv.schildBlitz(zu.id);
              cv.textFx(zu.id, '🧱 Firewall', 'ok');
              log('Die <b>Firewall</b> begrenzt die Ausbreitung auf diesen Netzbereich.', 'ok');
              return;
            }
            var istBackup = zu.typ === 'backup';
            var offlineBackup = istBackup &&
              ((zu.props && zu.props.offline) || F.hatMassnahme(zu, 'backup'));

            if (offlineBackup) {
              backupSicher = zu;
              cv.schildBlitz(zu.id);
              cv.textFx(zu.id, '💾 getrennt – sicher', 'ok');
              log('<b>' + zu.name + '</b> ist vom Netz getrennt und bleibt verschont. ' +
                'Die Daten sind wiederherstellbar.', 'ok');
              return;
            }
            if (trenner) {
              cv.schildBlitz(zu.id);
              cv.textFx(zu.id, '🧩 Segmentgrenze', 'ok');
              log('Die Verschlüsselung stoppt an der Segmentgrenze vor <b>' + zu.name + '</b>.', 'ok');
              return;
            }
            cv.paket(e.id, { klasse: 'bad', dauer: 650, fertig: function () {
              befalle(zu, 'ransomware', faktor, false);
              zu._gesperrt = true;
              cv.textFx(zu.id, '🔒', 'bad');
            } });
            log('<b>' + zu.name + '</b> wird ebenfalls verschlüsselt' +
              (istBackup ? ' – auch das Backup, weil es am Netz hängt!' : '.'),
              istBackup ? 'bad' : 'bad');
            getroffen.push(zu);
            neu.push(zu);
          });
        });
        if (neu.length) { welle = neu; setTimeout(naechste, 900); }
        else {
          setTimeout(function () {
            var rettung = backupSicher
              ? 'Ein <b>getrenntes Backup</b> ist vorhanden: Die Daten lassen sich wiederherstellen. ' +
                'Der Betrieb steht trotzdem erst einmal still.'
              : 'Es gibt <b>kein getrenntes Backup</b>. Die Daten sind weg – zahlen hilft erfahrungsgemäß auch nicht sicher weiter.';
            fertig(s, rettung + ' Betroffen: ' + getroffen.length + ' System(e).');
            U.toast('[[Ransomware]] trifft vor allem die <b>Verfügbarkeit</b>. ' +
              (backupSicher ? 'Dein getrenntes [[Backup]] rettet die Daten.' :
               'Ohne getrenntes [[Backup]] bleibt nur die Neuinstallation.'),
              backupSicher ? 'warn' : 'bad');
            if (!backupSicher) {
              AUDIT.storage.set('ernstfall.backupFehlt', true);
            }
          }, 700);
        }
      }
      setTimeout(naechste, 700);
    }

    /* --- Trojaner / Spyware / Keylogger: Daten fließen nach außen --- */
    function exfiltration(start, s, faktor) {
      var mAn = massnahmenAm(start);
      var fw = mAn.filter(function (m) { return m.key === 'firewall'; })[0];
      var krypto = mAn.filter(function (m) { return m.key === 'verschluesselung'; })[0];

      log(s.key === 'trojaner'
        ? 'Das vermeintlich nützliche Programm öffnet im Hintergrund eine <b>Hintertür</b> (Backdoor).'
        : 'Die Schadsoftware sammelt Daten und baut eine Verbindung nach außen auf.', 'bad');

      /* Weg nach draußen: Netzkanten Richtung Internet-Zone */
      var raus = wegNachAussen(start);
      var i = 0;
      function sende() {
        if (i >= 3) {
          setTimeout(function () {
            if (fw) {
              fertig(s, 'Die <b>Firewall</b> hat die Verbindung nach außen blockiert. Das System ist befallen, ' +
                'die Daten sind aber (noch) nicht abgeflossen.');
            } else if (krypto) {
              fertig(s, 'Die Daten sind abgeflossen, aber <b>verschlüsselt</b> – für den Angreifer wertlos. ' +
                'Das senkt das Risiko für die Betroffenen (wichtig für Art. 34 DSGVO).');
            } else {
              fertig(s, 'Daten sind unverschlüsselt abgeflossen. Das ist eine <b>Datenpanne</b>: ' +
                'Meldung an die Aufsichtsbehörde binnen 72 Stunden prüfen (Art. 33 DSGVO).');
              U.toast('<b>Vertraulichkeit verletzt.</b> Abgeflossene personenbezogene Daten sind eine ' +
                '[[Datenpanne]] – Art. 33 DSGVO beachten.', 'bad');
            }
          }, 500);
          return;
        }
        if (raus.length) {
          raus.forEach(function (e) {
            cv.paket(e.id, { klasse: fw ? 'warn' : 'pii', dauer: 800 });
          });
          if (fw && i === 0) {
            var fwNode = raus.length ? F.node(raus[raus.length - 1].to) : null;
            cv.schildBlitz(start.id);
            cv.textFx(start.id, '🧱 blockiert', 'ok');
            log('Die <b>Firewall</b> blockiert die ausgehende Verbindung.', 'ok');
          }
        } else {
          cv.textFx(start.id, '📡 sendet', 'bad');
        }
        i++;
        setTimeout(sende, 900);
      }
      setTimeout(sende, 500);
    }

    /* Netzkanten, die vom Knoten Richtung Internet/Drittland führen */
    function wegNachAussen(start) {
      var ziel = F.data.nodes.filter(function (n) {
        var zt = F.zonetypVon(n);
        return zt === 'internet' || zt === 'drittland';
      });
      if (!ziel.length) return [];
      /* einfache Breitensuche über Netzkanten */
      var vorgaenger = {}, queue = [start.id], gesehen = {};
      gesehen[start.id] = true;
      var treffer = null;
      while (queue.length && !treffer) {
        var akt = queue.shift();
        F.edgesOf(akt, 'netz').forEach(function (e) {
          var anderId = e.from === akt ? e.to : e.from;
          if (gesehen[anderId]) return;
          gesehen[anderId] = true;
          vorgaenger[anderId] = { e: e, von: akt };
          if (ziel.some(function (z) { return z.id === anderId; })) treffer = anderId;
          queue.push(anderId);
        });
      }
      if (!treffer) return [];
      var pfad = [], akt2 = treffer;
      while (vorgaenger[akt2]) { pfad.unshift(vorgaenger[akt2].e); akt2 = vorgaenger[akt2].von; }
      return pfad;
    }

    /* --- Bot: System wird ferngesteuert --- */
    function botnetz(start, s, faktor) {
      log('Das System meldet sich bei einem Steuerserver und wartet auf Befehle.', 'bad');
      var raus = wegNachAussen(start);
      var mAn = massnahmenAm(start);
      var fw = mAn.some(function (m) { return m.key === 'firewall'; });
      var n = 0;
      function tick() {
        if (n >= 4) {
          fertig(s, fw
            ? 'Die <b>Firewall</b> unterbindet die Verbindung zum Steuerserver – der Bot bleibt ohne Befehle.'
            : 'Das System ist Teil eines <b>Botnetzes</b> und greift fremde Ziele an. ' +
              'Der Schaden entsteht bei Dritten, verantwortlich bleibt trotzdem die Firma.');
          return;
        }
        if (raus.length) raus.forEach(function (e) { cv.paket(e.id, { klasse: fw ? 'warn' : 'bad', dauer: 600 }); });
        cv.textFx(start.id, n % 2 ? '🤖 DDoS' : '🤖 Spam', fw ? 'warn' : 'bad');
        n++;
        setTimeout(tick, 750);
      }
      setTimeout(tick, 400);
    }

    /* --- Virus: wartet auf den Menschen --- */
    function virusWarten(start, s, faktor) {
      start.infektion.wartet = true;
      log('Der Virus sitzt jetzt in einer Datei auf <b>' + start.name + '</b> – und tut <b>nichts</b>. ' +
        'Er braucht einen Menschen, der die Datei öffnet oder weitergibt.', 'warn');
      U.toast('Der [[Virus]] wartet. Klick einen <b>Mitarbeiter</b> an und drücke dort ' +
        '„Datei öffnen“ – dann siehst du den Unterschied zum [[Wurm]].', 'warn', 9000);
      fertig(s);
    }

    /* Mitarbeiter öffnet die Datei */
    function dateiOeffnen(person) {
      var infizierte = F.data.nodes.filter(function (n) {
        return n.infektion && n.infektion.typ === 'virus';
      });
      if (!infizierte.length) { U.toast('Zurzeit liegt keine infizierte Datei bereit.', 'warn'); return; }

      var mAn = massnahmenAm(person);
      if (mAn.some(function (m) { return m.key === 'schulung'; })) {
        cv.schildBlitz(person.id);
        cv.textFx(person.id, '🎓 misstrauisch', 'ok');
        U.toast('<b>' + U.esc(person.name) + '</b> stutzt: unbekannter Absender, komische Dateiendung – ' +
          'und meldet die Mail, statt sie zu öffnen. Schulung wirkt.', 'ok');
        log('Geschulte Person öffnet die Datei nicht.', 'ok');
        zeichnePanel(cv.sel);
        return;
      }

      /* betroffen sind die Systeme und Anwendungen, mit denen die Person
         arbeitet – und die Systeme, auf denen diese Anwendungen laufen */
      var ziele = [];
      F.nachbarn(person.id).forEach(function (x) {
        var k = F.kategorie(x);
        if (k !== 'system' && k !== 'anwendung') return;
        if (ziele.indexOf(x) < 0) ziele.push(x);
        if (k === 'anwendung') {
          F.hostsOf(x.id).forEach(function (h) { if (ziele.indexOf(h) < 0) ziele.push(h); });
        }
      });
      if (!ziele.length) {
        U.toast('Diese Person ist mit keinem System verbunden – verbinde sie z. B. mit ihrem Arbeitsplatz-PC.', 'warn');
        return;
      }
      log('<b>' + person.name + '</b> öffnet die Datei – jetzt wird der Virus aktiv.', 'bad');
      ziele.forEach(function (sys, i) {
        setTimeout(function () {
          befalle(sys, 'virus', 1, false);
          cv.textFx(sys.id, '🦠 aktiv', 'bad');
          cv.puls(sys.id);
        }, 350 * i);
      });
      U.toast('Jetzt breitet sich der [[Virus]] aus – <b>ausgelöst durch den Menschen</b>. ' +
        'Ohne diesen Klick wäre nichts passiert.', 'bad');
      setTimeout(function () { zeichnePanel(cv.sel); }, 400);
    }

    /* --- Rootkit --- */
    function rootkit(start, s, faktor) {
      log('Das Rootkit verankert sich mit höchsten Rechten und <b>versteckt sich selbst</b>. ' +
        'Auf der Fläche sieht das System weiter unauffällig aus.', 'bad');
      U.toast('Das System sieht <b>sauber</b> aus – ist es aber nicht. ' +
        'Erst der <b>Tiefenscan</b> oben in der Leiste deckt das [[Rootkit]] auf.', 'warn', 9000);
      fertig(s);
    }

    function tiefenscan() {
      var versteckte = F.data.nodes.filter(function (n) {
        return n.infektion && n.infektion.versteckt && !n.infektion.aufgedeckt;
      });
      if (!versteckte.length) {
        U.toast('Tiefenscan vom sauberen Boot-Medium: kein verstecktes [[Rootkit]] gefunden.', 'ok');
        return;
      }
      versteckte.forEach(function (n, i) {
        setTimeout(function () {
          n.infektion.aufgedeckt = true;
          F.changed('angriff');
          cv.puls(n.id);
          cv.textFx(n.id, '🫥 aufgedeckt', 'bad');
        }, 300 * i);
      });
      U.toast('Tiefenscan: <b>' + versteckte.length + ' verstecktes Rootkit</b> gefunden. ' +
        'Ein Scan im laufenden System hätte nichts gezeigt – deshalb von einem <b>sauberen Boot-Medium</b> prüfen. ' +
        'Danach hilft nur Neuinstallation.', 'bad', 11000);
      log('Tiefenscan deckt ' + versteckte.length + ' Rootkit(s) auf.', 'warn');
      setTimeout(function () { zeichnePanel(cv.sel); }, 400);
    }

    /* --- Hoax / Phishing --- */
    function socialEngineering(person, s, faktor) {
      var mAn = massnahmenAm(person);
      var geschult = mAn.some(function (m) { return (m.stoppt || []).indexOf(s.key) >= 0; });

      if (geschult) {
        person.infektion = null;
        cv.schildBlitz(person.id);
        cv.textFx(person.id, '🎓 erkannt', 'ok');
        log('<b>' + person.name + '</b> erkennt die Masche und meldet sie. Kein Schaden.', 'ok');
        U.toast('Gegen [[Hoax]] und [[Phishing]] hilft <b>keine Technik</b>, sondern nur ' +
          '[[Mitarbeiterschulung|Schulung]] und ein klarer Meldeweg.', 'ok');
        fertig(s);
        return;
      }

      var ziele = F.nachbarn(person.id).filter(systeme);
      if (s.key === 'hoax') {
        log('<b>' + person.name + '</b> glaubt der Warnung, leitet sie an alle weiter und löscht eine Systemdatei.', 'bad');
        U.toast('Der [[Hoax]] enthielt <b>keinen Schadcode</b> – der Schaden entsteht allein durch die Reaktion ' +
          'der Beschäftigten. Deshalb: nichts weiterleiten, beim ISB nachfragen.', 'bad', 10000);
      } else {
        log('<b>' + person.name + '</b> gibt Benutzername und Passwort auf einer gefälschten Seite ein.', 'bad');
        var zwei = ziele.some(function (sys) {
          return massnahmenAm(sys).some(function (m) { return m.key === 'zweifaktor'; });
        });
        U.toast(zwei
          ? 'Das Passwort ist weg – aber die <b>Zwei-Faktor-Anmeldung</b> verhindert die Anmeldung des Angreifers.'
          : 'Die Zugangsdaten sind beim Angreifer. Ohne <b>zweiten Faktor</b> steht ihm das System offen.',
          zwei ? 'warn' : 'bad');
      }
      ziele.forEach(function (sys, i) {
        setTimeout(function () {
          var sch = {};
          ['v', 'i', 'a'].forEach(function (z) { sch[z] = (s.simulation.schaden[z] || 0) * faktor; });
          F.schaden(sys.id, sch);
          cv.puls(sys.id);
          cv.textFx(sys.id, s.key === 'hoax' ? '🗑 Datei gelöscht' : '🔑 Zugangsdaten weg', 'bad');
          F.changed('angriff');
        }, 300 * i);
      });
      setTimeout(function () { fertig(s); }, 400 + 300 * ziele.length);
    }

    /* --- Angreifer-Figuren --- */
    function angreiferVersuch(a, ziel) {
      protokoll = [];
      log('<b>' + a.name + '</b>: ' + a.versucht, 'warn');

      var vorhanden = (ziel.massnahmen || []).map(function (k) { return D.massnahmenMap[k]; }).filter(Boolean);
      if (F.kategorie && ziel.typ && F.node(ziel.id)) {
        /* Knoten: auch Raum-Maßnahmen berücksichtigen */
        var z = F.zoneVon(ziel);
        if (z) vorhanden = vorhanden.concat((z.massnahmen || []).map(function (k) { return D.massnahmenMap[k]; }).filter(Boolean));
      }
      var passend = vorhanden.filter(function (m) { return m.kontrolle === a.stopptDurch; });

      var ka = D.kontrollartenMap[a.kontrolle];
      if (passend.length) {
        cv.schildBlitz(ziel.id);
        cv.textFx(ziel.id, '🛡 ' + ka.name, 'ok');
        log(a.verhindert, 'ok');
        U.toast('🛡 <b>' + U.esc(ka.name) + '</b> greift (' + U.esc(passend[0].name) + ').<br>' +
          U.esc(a.verhindert), 'ok', 9000);
      } else {
        cv.puls(ziel.id);
        cv.textFx(ziel.id, '⚠ ' + ka.name + ' fehlt', 'bad');
        if (F.node(ziel.id)) F.schaden(ziel.id, a.schaden);
        log(a.erfolg, 'bad');
        log('Hier fehlt die <b>' + ka.name + '</b>: ' + ka.ziel, 'warn');
        U.toast('⚠ <b>' + U.esc(ka.name) + ' fehlt.</b><br>' + U.esc(a.erfolg) + '<br>' +
          'Merkhilfe: <b>Zutritt = Raum · Zugang = System · Zugriff = Daten</b>', 'bad', 11000);
        F.changed('angriff');
      }
      merkeProbiert('ang_' + a.key);
      zeichnePanel(cv.sel);
    }

    /* ================= Panel ================= */

    function zeichnePanel(sel) {
      U.clear(panel);
      if (protokoll.length) panel.appendChild(protokollBox());
      if (!sel) { panelStart(); return; }
      if (sel.typ === 'node') panelKnoten(F.node(sel.id));
      else if (sel.typ === 'zone') panelZone(F.zone(sel.id));
      else if (sel.typ === 'edge') panelStart();
    }

    function protokollBox() {
      var box = U.el('div', { class: 'card card--info' });
      box.appendChild(U.el('div', { class: 'card__h', text: '📋 Was gerade passiert ist' }));
      var b = U.el('div', { class: 'card__b' });
      protokoll.forEach(function (p) {
        var farbe = p.art === 'ok' ? 'var(--ok)' : (p.art === 'bad' ? 'var(--bad)' :
          (p.art === 'warn' ? 'var(--warn)' : 'var(--text-dim)'));
        b.appendChild(U.el('p', { html: U.lexify(p.text), style: { color: farbe } }));
      });
      box.appendChild(b);
      return box;
    }

    function panelStart() {
      panel.appendChild(ui.panelKopf('☣️', 'Angriff',
        'Zieh eine Schadsoftware-Karte auf ein System und sieh zu. Jede Art verhält sich anders.'));

      panel.appendChild(ui.merk('<b>Zutritt = Raum · Zugang = System · Zugriff = Daten</b>'));

      panel.appendChild(U.el('h3', { text: 'Arten von Schadsoftware' }));
      var t = U.el('table', { class: 't' });
      t.innerHTML = '<tr><th>Art</th><th>Verhalten</th><th>Schutzziel</th></tr>' +
        D.schadsoftware.map(function (s) {
          return '<tr><td><b>' + U.esc(s.icon + ' ' + s.name) + '</b></td><td>' + U.esc(s.kurz) + '</td><td>' +
            (s.schutzziele.length
              ? s.schutzziele.map(function (z) { return '<span class="tag tag--' + z + '">' + z.toUpperCase() + '</span>'; }).join(' ')
              : '<span class="tag">–</span>') + '</td></tr>';
        }).join('');
      panel.appendChild(t);

      panel.appendChild(U.el('h3', { text: 'Kontrollarten der TOMs' }));
      panel.appendChild(U.el('p', {
        class: 'sub',
        html: U.lexify('Die Einteilung stammt aus dem alten BDSG (Anlage zu § 9) und wird im Unterricht ' +
          'weiter verwendet. Die [[DSGVO]] nennt die Ziele in [[Art. 32 DSGVO|Art. 32]] allgemeiner.')
      }));
      var t2 = U.el('table', { class: 't' });
      t2.innerHTML = '<tr><th>Kontrollart</th><th>Ziel</th><th>Beispiele</th></tr>' +
        D.kontrollarten.map(function (k) {
          return '<tr><td><b>' + U.esc(k.name) + '</b><br><span class="tag">' + U.esc(k.merk) + '</span></td><td>' +
            U.esc(k.ziel) + '</td><td>' + U.esc(k.bsp) + '</td></tr>';
        }).join('');
      panel.appendChild(t2);
    }

    function panelKnoten(n) {
      if (!n) return;
      var d = F.def(n);
      var kat = d.kategorie;
      panel.appendChild(ui.panelKopf(d.icon, n.name, d.label + ' · ' + (F.zoneVon(n) ? F.zoneVon(n).name : 'keine Zone')));

      /* Zustand */
      var zu = F.zustandVon(n);
      if (zu) {
        panel.appendChild(U.el('h3', { text: 'Zustand der Schutzziele' }));
        AUDIT.data.schutzziele.forEach(function (z) {
          var wert = zu[z.key];
          var block = U.el('div', { class: 'ziel ziel--' + z.key });
          block.appendChild(U.el('div', { class: 'ziel__head' }, [
            U.el('span', { class: 'ziel__name' }, [U.el('span', { class: 'ziel__dot' }), U.el('span', { text: z.name })]),
            U.el('span', {
              class: 'tag tag--' + (wert >= 0.75 ? 'normal' : (wert >= 0.4 ? 'hoch' : 'sehrhoch')),
              text: Math.round(wert * 100) + ' %'
            })
          ]));
          var bar = U.el('div', { class: 'bar' }, U.el('div', {
            class: 'bar__fill',
            style: {
              width: (wert * 100) + '%',
              background: wert >= 0.75 ? 'var(--sb-normal)' : (wert >= 0.4 ? 'var(--sb-hoch)' : 'var(--sb-sehrhoch)')
            }
          }));
          block.appendChild(bar);
          panel.appendChild(block);
        });
      }

      /* Infektion */
      if (n.infektion) {
        var s = D.schadsoftwareMap[n.infektion.typ];
        var versteckt = n.infektion.versteckt && !n.infektion.aufgedeckt;
        panel.appendChild(U.el('div', { class: 'card card--bad' }, [
          U.el('div', { class: 'card__h', text: s.icon + ' Befallen: ' + s.name + (versteckt ? ' (versteckt!)' : '') }),
          U.el('div', { class: 'card__b', html: U.rich(s.text) })
        ]));
        panel.appendChild(U.el('button', {
          class: 'btn btn--sm', text: '♻️ Dieses System bereinigen',
          onclick: function () {
            n.infektion = null; delete n.zustand; delete n._gesperrt;
            F.changed('angriff'); cv.textFx(n.id, '✓ bereinigt', 'ok'); zeichnePanel(cv.sel);
          }
        }));
      }

      /* Virus: Datei öffnen */
      if (kat === 'person') {
        var gibtVirus = F.data.nodes.some(function (x) { return x.infektion && x.infektion.typ === 'virus'; });
        panel.appendChild(U.el('h3', { text: 'Handlung dieser Person' }));
        panel.appendChild(U.el('button', {
          class: 'btn' + (gibtVirus ? ' btn--primary' : ''), text: '📂 Datei öffnen / Mailanhang anklicken',
          onclick: function () { dateiOeffnen(n); }
        }));
        panel.appendChild(ui.note('Ein [[Virus]] wird erst durch diese Handlung aktiv. Ein [[Wurm]] bräuchte sie nicht.', 'info'));
      }

      /* Maßnahmen */
      panel.appendChild(U.el('h3', { text: 'Schutzmaßnahmen' }));
      var passende = D.massnahmen.filter(function (m) { return m.ziele.indexOf(kat) >= 0; });
      if (!passende.length) {
        panel.appendChild(ui.note('Für diesen Bausteintyp gibt es keine eigenen Maßnahmen.', 'info'));
      }
      passende.forEach(function (m) {
        var an = F.hatMassnahme(n, m.key);
        panel.appendChild(ui.checkbox(
          '<b>' + m.icon + ' ' + U.esc(m.name) + '</b> – ' + U.esc(m.kurz),
          an,
          function (v) {
            F.setzeMassnahme(n.id, m.key, v);
            if (v) { cv.schildBlitz(n.id); U.toast(U.esc(m.name) + ': ' + U.esc(m.text), 'ok'); }
            fortschritt();
            zeichnePanel(cv.sel);
          }, m.text));
      });

      /* geerbte Maßnahmen aus dem Raum */
      var zone = F.zoneVon(n);
      if (zone && (zone.massnahmen || []).length) {
        panel.appendChild(ui.note('Aus dem Raum <b>' + U.esc(zone.name) + '</b> gelten zusätzlich: ' +
          zone.massnahmen.map(function (k) { return (D.massnahmenMap[k] || {}).name; }).join(', '), 'ok'));
      }
    }

    function panelZone(z) {
      if (!z) return;
      var d = F.def(z);
      panel.appendChild(ui.panelKopf(d.icon, z.name, 'Raum / Zone'));
      panel.appendChild(ui.note(d.info, 'info'));

      panel.appendChild(U.el('h3', { text: 'Maßnahmen für diesen Raum' }));
      D.massnahmen.filter(function (m) { return m.ziele.indexOf('zone') >= 0; }).forEach(function (m) {
        panel.appendChild(ui.checkbox(
          '<b>' + m.icon + ' ' + U.esc(m.name) + '</b> – ' + U.esc(m.kurz),
          F.hatMassnahme(z, m.key),
          function (v) {
            F.setzeMassnahme(z.id, m.key, v);
            if (v) cv.schildBlitz(z.id);
            fortschritt();
            zeichnePanel(cv.sel);
          }, m.text));
      });
      panel.appendChild(ui.merk('Alles, was den <b>Raum</b> schützt, gehört zur [[Zutrittskontrolle]].'));
    }

    /* ---------- Erklärkarten aus der Palette ---------- */

    function zeigeMalware(s) {
      U.modal(s.icon + ' ' + s.name,
        '<p>' + U.rich(s.text) + '</p>' +
        '<p><b>Betroffene Schutzziele:</b> ' +
        (s.schutzziele.length ? s.schutzziele.map(function (z) {
          return '<span class="tag tag--' + z + '">' + U.esc(zielName(z)) + '</span>';
        }).join(' ') : 'keines unmittelbar') + '</p>' +
        '<p><b>Woran man es erkennt:</b> ' + U.esc(s.erkennung) + '</p>' +
        '<p><b>Was hilft:</b> ' + s.gegen.map(function (k) {
          return U.esc((D.massnahmenMap[k] || {}).name || k);
        }).join(', ') + '</p>' +
        '<div class="merk">' + U.rich(s.merk) + '</div>');
    }
    function zielName(z) {
      var x = AUDIT.data.schutzziele.filter(function (y) { return y.key === z; })[0];
      return x ? x.name : z;
    }
    function zeigeMassnahme(m) {
      U.modal(m.icon + ' ' + m.name,
        '<p>' + U.rich(m.text) + '</p>' +
        '<p><b>Kontrollart:</b> ' + U.esc((D.kontrollartenMap[m.kontrolle] || {}).name || '–') + '</p>' +
        ((m.stoppt || []).length ? '<p><b>Verhindert vollständig:</b> ' +
          m.stoppt.map(function (k) { return U.esc((D.schadsoftwareMap[k] || {}).name || k); }).join(', ') + '</p>' : '') +
        ((m.bremst || []).length ? '<p><b>Begrenzt den Schaden bei:</b> ' +
          m.bremst.map(function (k) { return U.esc((D.schadsoftwareMap[k] || {}).name || k); }).join(', ') + '</p>' : ''));
    }
    function zeigeAngreifer(a) {
      var k = D.kontrollartenMap[a.kontrolle];
      U.modal(a.icon + ' ' + a.name,
        '<p>' + U.esc(a.versucht) + '</p>' +
        '<p><b>Was ihn stoppt:</b> ' + U.esc(k.name) + ' – ' + U.esc(k.ziel) + '</p>' +
        '<p class="sub">Beispiele: ' + U.esc(k.bsp) + '</p>' +
        '<div class="merk">Zutritt = Raum · Zugang = System · Zugriff = Daten</div>');
    }

    /* ---------- Fortschritt ---------- */

    function merkeProbiert(key) {
      var liste = AUDIT.storage.get('angriff.probiert', []);
      if (liste.indexOf(key) < 0) { liste.push(key); AUDIT.storage.set('angriff.probiert', liste); }
      fortschritt();
    }
    function fortschritt() {
      var liste = AUDIT.storage.get('angriff.probiert', []);
      var gesamt = D.schadsoftware.length + D.angreifer.length;
      var gesetzt = F.data.nodes.concat(F.data.zonen)
        .reduce(function (s, n) { return s + (n.massnahmen || []).length; }, 0);
      var wert = (liste.length / gesamt) * 0.7 + Math.min(1, gesetzt / 8) * 0.3;
      AUDIT.storage.setFortschritt('angriff', wert);
    }

    F.onChange(function (was) {
      if (was === 'position') return;
      if (cv && cv.sel) zeichnePanel(cv.sel);
    });

    zeichnePanel(null);

    return {
      onShow: function () { cv.render(); cv.einpassen(); }
    };
  }
});
