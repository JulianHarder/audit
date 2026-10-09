/* ===========================================================
   AUDIT – js/schutzbedarf.js
   Station 1 "Werkstatt": Firma aufbauen, Schutzziele und
   Schutzbedarf feststellen, Vererbung sichtbar machen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.stationen = AUDIT.stationen || [];

AUDIT.stationen.push({
  key: 'werkstatt',
  num: '1',
  label: 'Werkstatt',
  icon: '🏗️',
  titel: 'Werkstatt – Schutzziele und Schutzbedarf',
  kurz: 'Firma aufbauen, Schutzziele verstehen, Schutzbedarf feststellen.',

  build: function (container) {
    var U = AUDIT.util, F = AUDIT.firma, ui = AUDIT.ui;

    /* ---------- Gerüst ---------- */
    var pal = U.el('aside', { class: 'palette' });
    var stage = U.el('div', { class: 'stage' });
    var panel = U.el('aside', { class: 'panel' });
    container.appendChild(pal);
    container.appendChild(stage);
    container.appendChild(panel);

    var cv = null;

    /* ---------- Arbeitsfläche ---------- */
    var mount = U.el('div', { style: { flex: '1', minHeight: '0', display: 'flex' } });

    stage.appendChild(U.el('div'));   // Platzhalter für Toolbar (wird ersetzt)
    stage.appendChild(mount);

    cv = AUDIT.createCanvas({
      mount: mount,
      modus: 'werkstatt',
      legende:
        '<b>Legende</b><br>' +
        '<i style="background:var(--ziel-v)"></i>V = Vertraulichkeit<br>' +
        '<i style="background:var(--ziel-i)"></i>I = Integrität<br>' +
        '<i style="background:var(--ziel-a)"></i>A = Verfügbarkeit<br>' +
        '<span style="color:var(--sb-normal)">■</span> normal ' +
        '<span style="color:var(--sb-hoch)">■</span> hoch ' +
        '<span style="color:var(--sb-sehrhoch)">■</span> sehr hoch',
      onSelect: function (sel) { zeichnePanel(sel); },
      onDrop: function (payload, pt) {
        if (!payload || payload.art !== 'baustein') return;
        var d = AUDIT.data.bausteinMap[payload.key];
        if (!d) return;
        var neu;
        if (d.kategorie === 'zone') {
          neu = F.neueZone(payload.key, pt.x - d.w / 2, pt.y - d.h / 2);
        } else {
          neu = F.neuerKnoten(payload.key, pt.x - (d.w || 150) / 2, pt.y - (d.h || 78) / 2);
        }
        if (neu) {
          cv.select(d.kategorie === 'zone' ? 'zone' : 'node', neu.id);
          if (d.kategorie === 'anwendung') {
            U.toast('<b>' + U.esc(d.label) + '</b> hinzugefügt. Stelle jetzt rechts den ' +
              '[[Schutzbedarf]] ein und verbinde die Anwendung mit dem [[Server]], auf dem sie läuft.', 'ok');
          }
        }
      },
      hoverInfo: function (n) {
        var sb = F.schutzbedarfVon(n);
        var d = F.def(n);
        var html = '<b>' + U.esc(n.name) + '</b>' + U.esc(d.label);
        if (sb) {
          html += '<div class="taglist">' +
            '<span class="tag tag--' + sb.v + '">V ' + U.stufeName(sb.v) + '</span>' +
            '<span class="tag tag--' + sb.i + '">I ' + U.stufeName(sb.i) + '</span>' +
            '<span class="tag tag--' + sb.a + '">A ' + U.stufeName(sb.a) + '</span></div>';
        }
        return html;
      }
    });

    /* Toolbar nachträglich einsetzen (braucht cv) */
    stage.replaceChild(ui.firmaToolbar(cv), stage.firstChild);

    /* ---------- Palette ---------- */
    AUDIT.palette.baue(pal, AUDIT.palette.bausteinGruppen());

    /* ---------- Panel ---------- */

    function zeichnePanel(sel) {
      U.clear(panel);
      if (!sel) { panelStart(); return; }
      if (sel.typ === 'node') panelKnoten(F.node(sel.id));
      else if (sel.typ === 'edge') panelKante(F.edge(sel.id));
      else if (sel.typ === 'zone') panelZone(F.zone(sel.id));
    }

    /* --- nichts ausgewählt: Lernteil Schutzziele --- */
    function panelStart() {
      panel.appendChild(ui.panelKopf('🎯', 'Die drei Schutzziele',
        'Jede Bewertung in der Informationssicherheit läuft über diese drei Ziele.'));

      AUDIT.data.schutzziele.forEach(function (z) {
        var k = U.el('div', { class: 'card', style: { borderLeft: '3px solid ' + z.farbe } });
        k.appendChild(U.el('div', { class: 'card__h', html: z.name + ' <span class="tag tag--' + z.key + '">' + z.kurz + '</span>' }));
        var b = U.el('div', { class: 'card__b' });
        b.appendChild(U.el('p', { html: '<b>' + z.bedeutung + '</b>' }));
        b.appendChild(U.el('p', { text: 'Verletzt, wenn zum Beispiel:' }));
        var ul = U.el('ul', { style: { margin: '2px 0 6px 18px', padding: '0' } });
        z.verletzung.forEach(function (v) { ul.appendChild(U.el('li', { text: v })); });
        b.appendChild(ul);
        b.appendChild(U.el('p', { html: '<span style="color:var(--text-mute)">Typische Maßnahmen:</span> ' + U.rich(z.massnahmen) }));
        k.appendChild(b);
        panel.appendChild(k);
      });

      panel.appendChild(U.el('h3', { text: 'Schutzbedarfskategorien' }));
      panel.appendChild(U.el('p', { class: 'sub', html: 'Nach [[Schutzbedarfsfeststellung|BSI-Standard 200-2]]. Gefragt wird: Wie schlimm wäre der Schaden?' }));
      AUDIT.data.stufen.forEach(function (s) {
        panel.appendChild(U.el('div', { class: 'card' }, [
          U.el('div', { class: 'card__h', html: '<span class="tag tag--' + s.key + '">' + s.name + '</span>' }),
          U.el('div', { class: 'card__b', text: s.auswirkung })
        ]));
      });

      panel.appendChild(U.el('h3', { text: 'So gehst du vor' }));
      panel.appendChild(ui.note(
        '1. Anwendungen anklicken und für jedes Schutzziel eine Stufe wählen.<br>' +
        '2. Jede Anwendung mit dem System verbinden, auf dem sie läuft.<br>' +
        '3. Systeme anklicken: Sie erben den Schutzbedarf ([[Maximumprinzip]]).', 'info'));

      panel.appendChild(U.el('h3', { text: 'Die drei Prinzipien der Vererbung' }));
      Object.keys(AUDIT.data.vererbung).forEach(function (k) {
        var v = AUDIT.data.vererbung[k];
        panel.appendChild(ui.karte(v.name, v.text, 'info'));
      });

      panel.appendChild(U.el('h3', { text: 'Schadensszenarien zur Begründung' }));
      panel.appendChild(U.el('p', { class: 'sub', text: 'Mit diesen sechs Fragen begründet man eine Einstufung:' }));
      var tab = U.el('table', { class: 't' });
      tab.innerHTML = '<tr><th>Szenario</th><th>Beispiel</th></tr>' +
        AUDIT.data.schadensszenarien.map(function (s) {
          return '<tr><td>' + U.esc(s.name) + '</td><td>' + U.esc(s.bsp) + '</td></tr>';
        }).join('');
      panel.appendChild(tab);
    }

    /* --- Knoten ausgewählt --- */
    function panelKnoten(n) {
      if (!n) { panelStart(); return; }
      var d = F.def(n);
      var kat = d.kategorie;

      panel.appendChild(ui.panelKopf(d.icon, n.name, d.label + ' · ' + zoneText(n)));
      panel.appendChild(ui.namensFeld(n, function () { zeichnePanel(cv.sel); }));
      panel.appendChild(ui.note(d.info, 'info'));

      if (kat === 'anwendung') panelAnwendung(n, d);
      else if (kat === 'system') panelSystem(n, d);
      else panelSonstiges(n, d);

      /* Verbindungen */
      panel.appendChild(U.el('h3', { text: 'Verbindungen' }));
      var ve = F.edgesOf(n.id);
      if (!ve.length) {
        panel.appendChild(ui.note('Noch nichts verbunden. Zieh einen Anschlusspunkt auf einen anderen Baustein.', 'warn'));
      } else {
        ve.forEach(function (e) {
          var ander = F.node(e.from === n.id ? e.to : e.from);
          var arten = { netz: 'Netzwerk', hosting: 'läuft auf', datenfluss: 'Datenfluss' };
          panel.appendChild(U.el('div', { class: 'card' }, [
            U.el('div', { class: 'card__h', html: U.esc(ander ? ander.name : '?') + ' <span class="tag">' + arten[e.art] + '</span>' }),
            U.el('div', { class: 'card__b' }, [
              U.el('button', {
                class: 'btn btn--sm', text: 'Verbindung anzeigen',
                onclick: function () { cv.select('edge', e.id); }
              })
            ])
          ]));
        });
      }
    }

    function zoneText(n) {
      var z = F.zoneVon(n);
      return z ? 'in: ' + z.name : 'keiner Zone zugeordnet';
    }

    /* --- Anwendung: Schutzbedarf einstellen --- */
    function panelAnwendung(n, d) {
      panel.appendChild(U.el('h3', { text: 'Schutzbedarf feststellen' }));
      panel.appendChild(U.el('p', { class: 'sub', text: 'Wie schlimm wäre der Schaden, wenn dieses Schutzziel verletzt wird?' }));

      n.schutzbedarf = n.schutzbedarf || { v: 'normal', i: 'normal', a: 'normal' };

      AUDIT.data.schutzziele.forEach(function (z) {
        var block = U.el('div', { class: 'ziel ziel--' + z.key });
        var head = U.el('div', { class: 'ziel__head' });
        head.appendChild(U.el('span', { class: 'ziel__name' }, [
          U.el('span', { class: 'ziel__dot' }),
          U.el('span', { text: z.name })
        ]));
        head.appendChild(ui.stufenTag(n.schutzbedarf[z.key]));
        block.appendChild(head);
        block.appendChild(ui.segment(n.schutzbedarf[z.key], function (stufe) {
          F.snapshot();
          n.schutzbedarf[z.key] = stufe;
          n.props = n.props || {};
          n.props.bewertet = true;
          F.changed('schutzbedarf');
          zeichnePanel(cv.sel);
          begruendung(n, d, z, stufe);
          fortschritt();
        }));
        /* Begründungshilfe */
        if (d.szenario && d.szenario[z.key]) {
          block.appendChild(U.el('div', { class: 'note', style: { marginTop: '6px' } }, [
            U.el('span', { style: { color: 'var(--text-mute)' }, text: 'Hilfe zur Einstufung: ' }),
            U.el('span', { text: d.szenario[z.key] })
          ]));
        }
        panel.appendChild(block);
      });

      if (d.vorschlag) {
        var gleich = ['v', 'i', 'a'].every(function (z) { return n.schutzbedarf[z] === d.vorschlag[z]; });
        panel.appendChild(U.el('div', { class: 'card card--info' }, [
          U.el('div', { class: 'card__h', text: 'Typische Einstufung in der Praxis' }),
          U.el('div', { class: 'card__b' }, [
            U.el('div', { class: 'taglist' }, ['v', 'i', 'a'].map(function (z) {
              return U.el('span', { class: 'tag tag--' + d.vorschlag[z], text: z.toUpperCase() + ' ' + U.stufeName(d.vorschlag[z]) });
            })),
            U.el('p', { text: gleich ? 'Deine Einstufung passt dazu.' : 'Deine Einstufung weicht ab – das kann richtig sein, wenn du es begründen kannst.' }),
            U.el('button', {
              class: 'btn btn--sm', text: 'Übernehmen', onclick: function () {
                F.snapshot();
                n.schutzbedarf = { v: d.vorschlag.v, i: d.vorschlag.i, a: d.vorschlag.a };
                n.props = n.props || {}; n.props.bewertet = true;
                F.changed('schutzbedarf');
                zeichnePanel(cv.sel);
                fortschritt();
              }
            })
          ])
        ]));
      }

      if (d.art9) {
        panel.appendChild(ui.note('Achtung: Hier werden <b>besondere Kategorien personenbezogener Daten</b> ' +
          'verarbeitet ([[Art. 9 DSGVO]], z. B. Gesundheitsdaten). Das spricht fast immer für einen hohen ' +
          'oder sehr hohen Schutzbedarf bei der Vertraulichkeit.', 'warn'));
      }

      /* läuft auf welchem System? */
      var hosts = F.hostsOf(n.id);
      panel.appendChild(U.el('h3', { text: 'Läuft auf' }));
      if (!hosts.length) {
        panel.appendChild(ui.note('Diese Anwendung läuft noch auf keinem System. Verbinde sie mit einem ' +
          '[[Server]] – dann siehst du die Vererbung des Schutzbedarfs.', 'warn'));
      } else {
        hosts.forEach(function (h) {
          panel.appendChild(U.el('div', { class: 'card' }, [
            U.el('div', { class: 'card__h', text: (F.def(h).icon || '') + ' ' + h.name }),
            U.el('div', { class: 'card__b' }, U.el('button', {
              class: 'btn btn--sm', text: 'System ansehen',
              onclick: function () { cv.select('node', h.id); }
            }))
          ]));
        });
        if (hosts.length > 1) {
          panel.appendChild(ui.note('Die Anwendung läuft auf <b>' + hosts.length + ' Systemen</b> (redundant). ' +
            'Deshalb greift der [[Verteilungseffekt]]: Für die <b>Verfügbarkeit</b> ist der Schutzbedarf ' +
            'des einzelnen Systems eine Stufe niedriger.', 'ok'));
        }
      }
    }

    /* kurze Rückmeldung mit Begründung nach dem Einstellen */
    function begruendung(n, d, ziel, stufe) {
      var s = (AUDIT.data.stufen.filter(function (x) { return x.key === stufe; })[0] || {});
      var txt = '<b>' + U.esc(n.name) + ' · ' + ziel.name + ' = ' + U.stufeName(stufe) + '</b><br>' + s.auswirkung;
      if (d.szenario && d.szenario[ziel.key]) txt += '<br><span style="color:var(--text-mute)">' + U.esc(d.szenario[ziel.key]) + '</span>';
      U.toast(txt, stufe === 'sehrhoch' ? 'bad' : (stufe === 'hoch' ? 'warn' : 'ok'));
    }

    /* --- System: Vererbung anzeigen --- */
    function panelSystem(n, d) {
      var ver = F.vererbung()[n.id];
      panel.appendChild(U.el('h3', { text: 'Geerbter Schutzbedarf' }));

      if (!ver || !ver.apps.length) {
        panel.appendChild(ui.note('Auf diesem System läuft noch keine Anwendung. ' +
          'Ein System hat keinen eigenen Schutzbedarf – es übernimmt den der Anwendungen, die darauf laufen. ' +
          'Verbinde eine Anwendung mit diesem System.', 'warn'));
      } else {
        var grundText = {
          maximum: 'Maximumprinzip',
          kumulation: 'Kumulationseffekt',
          verteilung: 'Verteilungseffekt'
        };
        AUDIT.data.schutzziele.forEach(function (z) {
          var block = U.el('div', { class: 'ziel ziel--' + z.key });
          var head = U.el('div', { class: 'ziel__head' });
          head.appendChild(U.el('span', { class: 'ziel__name' }, [
            U.el('span', { class: 'ziel__dot' }),
            U.el('span', { text: z.name })
          ]));
          head.appendChild(ui.stufenTag(ver[z.key]));
          block.appendChild(head);
          block.appendChild(ui.balken(ver[z.key]));
          block.appendChild(U.el('div', {
            class: 'note', style: { marginTop: '6px' },
            html: '<b>' + grundText[ver.grund[z.key]] + '</b>' +
              (ver['quelle_' + z.key] ? ' · höchster Wert kommt von: ' + U.esc(ver['quelle_' + z.key]) : '')
          }));
          panel.appendChild(block);
        });

        panel.appendChild(U.el('h3', { text: 'Anwendungen auf diesem System (' + ver.apps.length + ')' }));
        ver.apps.forEach(function (a) {
          var sb = a.schutzbedarf || {};
          panel.appendChild(U.el('div', { class: 'card' }, [
            U.el('div', { class: 'card__h', text: (F.def(a).icon || '') + ' ' + a.name }),
            U.el('div', { class: 'card__b' }, [
              U.el('div', { class: 'taglist' }, ['v', 'i', 'a'].map(function (z) {
                return U.el('span', { class: 'tag tag--' + (sb[z] || 'normal'), text: z.toUpperCase() + ' ' + U.stufeName(sb[z] || 'normal') });
              })),
              U.el('button', {
                class: 'btn btn--sm', text: 'Anwendung ansehen',
                onclick: function () { cv.select('node', a.id); }
              })
            ])
          ]));
        });

        if (ver.hinweise.indexOf('kumulation') >= 0) {
          panel.appendChild(ui.note('<b>Kumulationseffekt erkannt:</b> ' +
            AUDIT.data.vererbung.kumulation.text + ' Hier laufen ' + ver.apps.length +
            ' Anwendungen auf einem System – deshalb wurde die Stufe von „normal“ auf „hoch“ angehoben.', 'warn'));
        }
        if (ver.hinweise.indexOf('verteilung') >= 0) {
          panel.appendChild(ui.note('<b>Verteilungseffekt erkannt:</b> ' +
            AUDIT.data.vererbung.verteilung.text, 'ok'));
        }
        if (ver.apps.length >= 4) {
          panel.appendChild(ui.note('Viele Anwendungen auf einem System sind auch ein <b>Risiko für die ' +
            'Verfügbarkeit</b>: Fällt das System aus, steht alles gleichzeitig still. ' +
            'In Station 2 wird dieses System ein lohnendes Ziel für [[Ransomware]].', 'warn'));
        }
      }

      panel.appendChild(U.el('h3', { text: 'Netzwerk' }));
      var nb = F.nachbarn(n.id, 'netz');
      panel.appendChild(nb.length
        ? U.el('p', { text: 'Verbunden mit: ' + nb.map(function (x) { return x.name; }).join(', ') })
        : ui.note('Dieses System hängt an keinem Netz. In Station 2 kann sich hier kein [[Wurm]] ausbreiten – ' +
            'in der Praxis ist ein isoliertes System aber selten.', 'info'));
    }

    /* --- Person / sonstiges --- */
    function panelSonstiges(n, d) {
      if (d.kategorie === 'person') {
        panel.appendChild(ui.note('Personen sind in der [[DSGVO]] die <b>betroffenen Personen</b>. ' +
          'In Station 3 legst du fest, welche Daten von ihnen verarbeitet werden.', 'info'));
      }
      panel.appendChild(U.el('h3', { text: 'Hinweis' }));
      panel.appendChild(U.el('p', {
        text: 'Einen eigenen Schutzbedarf stellt man für Anwendungen bzw. Informationen fest. ' +
          'Systeme erben ihn, Personen und Räume bekommen keinen.'
      }));
    }

    /* --- Kante --- */
    function panelKante(e) {
      if (!e) { panelStart(); return; }
      var a = F.node(e.from), b = F.node(e.to);
      panel.appendChild(ui.panelKopf('🔗', 'Verbindung',
        (a ? a.name : '?') + ' → ' + (b ? b.name : '?')));

      panel.appendChild(ui.select('Art der Verbindung', [
        { value: 'netz', label: 'Netzwerkverbindung' },
        { value: 'hosting', label: 'Anwendung läuft auf System' },
        { value: 'datenfluss', label: 'Datenfluss (personenbezogene Daten)' }
      ], e.art, function (v) {
        F.snapshot();
        e.art = v;
        /* Hosting muss von der Anwendung zum System zeigen */
        if (v === 'hosting' && F.kategorie(F.node(e.from)) === 'system') {
          var t = e.from; e.from = e.to; e.to = t;
        }
        F.changed('edges');
        zeichnePanel(cv.sel);
      }));

      var erkl = {
        netz: 'Über Netzwerkverbindungen breiten sich [[Wurm|Würmer]] selbstständig aus. ' +
              'Mit [[Netzwerksegmentierung]] kannst du solche Wege unterbrechen.',
        hosting: 'Diese Verbindung überträgt den [[Schutzbedarf]] von der Anwendung auf das System ' +
                 '([[Maximumprinzip]]).',
        datenfluss: 'Hier fließen Daten. In Station 3 legst du fest: welche Daten, zu welchem Zweck, ' +
                    'auf welcher [[Rechtsgrundlage]].'
      };
      panel.appendChild(ui.note(erkl[e.art], 'info'));

      panel.appendChild(U.el('button', {
        class: 'btn btn--danger', text: 'Verbindung löschen',
        onclick: function () { F.loesche(e.id); cv.select(null, null); }
      }));
    }

    /* --- Zone --- */
    function panelZone(z) {
      if (!z) { panelStart(); return; }
      var d = F.def(z);
      panel.appendChild(ui.panelKopf(d.icon, z.name, d.label));
      panel.appendChild(ui.namensFeld(z, function () { zeichnePanel(cv.sel); }));
      panel.appendChild(ui.note(d.info, 'info'));

      var drin = F.knotenInZone(z);
      panel.appendChild(U.el('h3', { text: 'Enthält (' + drin.length + ')' }));
      if (!drin.length) {
        panel.appendChild(ui.note('Zieh Bausteine in diese Zone. Die Zuordnung ergibt sich aus der Lage ' +
          'auf der Fläche.', 'info'));
      } else {
        drin.forEach(function (n) {
          panel.appendChild(U.el('div', { class: 'card' }, [
            U.el('div', { class: 'card__h', text: (F.def(n).icon || '') + ' ' + n.name })
          ]));
        });
      }
      panel.appendChild(ui.note('Die Zone kannst du mit dem kleinen Griff unten rechts vergrößern. ' +
        'In Station 2 wird daraus die [[Zutrittskontrolle]].', 'info'));
      panel.appendChild(U.el('button', {
        class: 'btn btn--danger', text: 'Zone löschen',
        onclick: function () { F.loesche(z.id); cv.select(null, null); }
      }));
    }

    /* ---------- Fortschritt ---------- */
    function fortschritt() {
      var apps = F.data.nodes.filter(function (n) { return F.kategorie(n) === 'anwendung'; });
      if (!apps.length) return;
      var bewertet = apps.filter(function (n) { return n.props && n.props.bewertet; }).length;
      var mitHost = apps.filter(function (n) { return F.hostsOf(n.id).length > 0; }).length;
      var wert = (bewertet / apps.length) * 0.6 + (mitHost / apps.length) * 0.4;
      AUDIT.storage.setFortschritt('werkstatt', wert);
    }

    F.onChange(function () { if (cv && cv.sel) zeichnePanel(cv.sel); });

    zeichnePanel(null);

    return {
      onShow: function () { cv.render(); cv.einpassen(); }
    };
  }
});
