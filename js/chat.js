/* ===========================================================
   AUDIT – js/chat.js
   Spielt ein Gespräch ab: Nachrichten erscheinen nacheinander,
   bei einer Frage wartet es auf die Antwort, erklärt sie und
   geht weiter. Kein Punktestand, kein Verlieren.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.chat = (function () {
  'use strict';
  var U = AUDIT.util;

  /* ---------- Hilfen ---------- */

  function scrollEnde() {
    requestAnimationFrame(function () {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }

  /* Damit nicht immer derselbe Satz kommt */
  function zufall(liste) { return liste[Math.floor(Math.random() * liste.length)]; }

  function tippDauer(text) {
    return U.clamp(260 + String(text || '').length * 11, 380, 1200);
  }

  /* ---------- Karten aus den vorhandenen Datendateien ---------- */

  function karteInhalt(schritt) {
    var D = AUDIT.data;
    var keys = schritt.keys;

    function tabelle(kopf, zeilen) {
      return '<table class="t"><tr>' + kopf.map(function (k) { return '<th>' + k + '</th>'; }).join('') +
        '</tr>' + zeilen.map(function (z) {
          return '<tr>' + z.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
        }).join('') + '</table>';
    }
    function waehle(liste, mapKey) {
      if (!keys) return liste;
      return keys.map(function (k) {
        return liste.filter(function (x) { return x[mapKey || 'key'] === k; })[0];
      }).filter(Boolean);
    }
    function zielTags(arr) {
      if (!arr || !arr.length) return '<span class="tag">–</span>';
      return arr.map(function (z) { return '<span class="tag tag--' + z + '">' + z.toUpperCase() + '</span>'; }).join(' ');
    }

    switch (schritt.quelle) {
      case 'schadsoftware':
        return tabelle(['Art', 'Verhalten', 'Schutzziel'],
          waehle(D.schadsoftware).map(function (s) {
            return ['<b>' + U.esc(s.icon + ' ' + s.name) + '</b>', U.esc(s.kurz), zielTags(s.schutzziele)];
          }));

      case 'massnahmen':
        return tabelle(['Maßnahme', 'Wirkung'],
          waehle(D.massnahmen).map(function (m) {
            return ['<b>' + U.esc(m.icon + ' ' + m.name) + '</b>', U.esc(m.kurz)];
          }));

      case 'kontrollarten':
        return tabelle(['Kontrollart', 'Ziel', 'Beispiele'],
          waehle(D.kontrollarten).map(function (k) {
            return ['<b>' + U.esc(k.name) + '</b><br><span class="tag">' + U.esc(k.merk) + '</span>',
                    U.esc(k.ziel), U.esc(k.bsp)];
          }));

      case 'betroffenenrechte':
        return tabelle(['Artikel', 'Inhalt'],
          waehle(D.betroffenenrechte).map(function (r) {
            return ['<span class="tag tag--art">' + U.esc(r.artikel) + '</span><br><b>' + U.esc(r.titel) + '</b>',
                    U.esc(r.inhalt)];
          }));

      case 'schutzziele':
        return tabelle(['Schutzziel', 'Bedeutung', 'Verletzt, wenn'],
          waehle(D.schutzziele).map(function (z) {
            return ['<span class="tag tag--' + z.key + '">' + U.esc(z.name) + '</span>',
                    U.esc(z.bedeutung), U.esc(z.verletzung[0])];
          }));

      case 'stufen':
        return tabelle(['Stufe', 'Schadensauswirkung'],
          waehle(D.stufen).map(function (s) {
            return ['<span class="tag tag--' + s.key + '">' + U.esc(s.name) + '</span>', U.esc(s.auswirkung)];
          }));

      case 'rechtsgrundlagen':
        return tabelle(['Rechtsgrundlage', 'Wann', 'Beispiel'],
          waehle(D.rechtsgrundlagen).map(function (r) {
            return ['<b>' + U.esc(r.name) + '</b>', U.esc(r.text), U.esc(r.bsp)];
          }));

      case 'grundsaetze':
        return tabelle(['Grundsatz', 'Bedeutung'],
          waehle(D.grundsaetze).map(function (g) {
            return ['<b>' + U.esc(g.name) + '</b>', U.esc(g.text)];
          }));

      case 'figuren':
        return tabelle(['Rolle', 'Aufgabe'],
          waehle(D.figuren).map(function (f) {
            return ['<b>' + U.esc(f.icon + ' ' + f.name) + '</b>', U.esc(f.kurz)];
          }));

      case 'pruefregeln':
        return tabelle(['Befund', 'Norm'],
          waehle(D.pruefregeln).map(function (r) {
            return ['<b>' + U.esc(r.titel) + '</b><br>' + U.esc(r.text),
                    '<span class="tag tag--art">' + U.esc(r.norm) + '</span>'];
          }));

      default:
        return schritt.html || '';
    }
  }

  /* ===========================================================
     Ein Gespräch abspielen
     =========================================================== */

  /* Laufende Nummer des aktuellen Gesprächs. Wechselt jemand das
     Gespräch, während noch Nachrichten einlaufen, erkennen die alten
     Zeitgeber daran, dass sie nicht mehr gebraucht werden. */
  var laufNr = 0;

  function starte(dialog, mount, onFertig) {
    var meinLauf = ++laufNr;
    function aktiv() { return meinLauf === laufNr; }
    var kontakt = AUDIT.data.kontakteMap[dialog.kontakt] || { name: '?', bild: '💬' };

    U.clear(mount);
    var verlauf = U.el('div', { class: 'chat' });
    var antworten = U.el('div', { class: 'chat__antworten' });
    mount.appendChild(verlauf);
    mount.appendChild(antworten);

    var i = 0;
    var wartend = null;        /* laufender Timeout, für „überspringen" */
    var tippBlase = null;

    /* Klick in den Verlauf überspringt die Wartezeit */
    verlauf.addEventListener('click', function () {
      if (wartend) { clearTimeout(wartend); wartend = null; sofort(); }
    });
    var sofortFn = null;
    function sofort() { var f = sofortFn; sofortFn = null; if (f) f(); }

    function warte(ms, fn) {
      sofortFn = fn;
      wartend = setTimeout(function () {
        wartend = null; sofortFn = null;
        if (aktiv()) fn();
      }, ms);
    }

    function tippenZeigen(von) {
      var sp = sprecher(von);
      tippBlase = U.el('div', { class: 'tippen' }, [U.el('i'), U.el('i'), U.el('i')]);
      if (sp.farbe) tippBlase.style.borderLeft = '3px solid ' + sp.farbe;
      verlauf.appendChild(tippBlase);
      scrollEnde();
    }
    function tippenWeg() {
      if (tippBlase && tippBlase.parentNode) tippBlase.parentNode.removeChild(tippBlase);
      tippBlase = null;
    }

    /* Im Gruppenchat hat jeder Teilnehmer Name und Farbe.
       'von' kann ein Sprecher-Schlüssel aus data/kontakte.js sein
       oder einfach ein Klartextname. */
    function sprecher(von) {
      if (!von) return { name: kontakt.name, farbe: null };
      var s = (AUDIT.data.sprecherMap || {})[von];
      if (s) return s;
      return { name: von, farbe: null };
    }

    function blaseSie(html, extraKlasse, norm, von) {
      tippenWeg();
      var sp = sprecher(von);
      /* Name nur über der ersten Blase einer Folge desselben Absenders */
      var letzte = verlauf.lastElementChild;
      var zeigeName = !(letzte && letzte.classList.contains('blase--sie') &&
                        letzte.getAttribute('data-von') === sp.name);
      var b = U.el('div', {
        class: 'blase blase--sie' + (extraKlasse ? ' ' + extraKlasse : ''),
        data: { von: sp.name }
      });
      if (sp.farbe) {
        b.style.borderLeft = '3px solid ' + sp.farbe;
        b.style.borderBottomLeftRadius = '5px';
      }
      if (zeigeName) {
        b.appendChild(U.el('div', {
          class: 'blase__name',
          text: sp.name,
          style: sp.farbe ? { color: sp.farbe } : null
        }));
      }
      b.appendChild(U.el('div', { html: U.rich(html) }));
      if (norm) b.appendChild(U.el('div', { class: 'blase__norm', text: norm }));
      verlauf.appendChild(b);
      scrollEnde();
      return b;
    }

    function blaseIch(text) {
      var b = U.el('div', { class: 'blase blase--ich', html: U.rich(text) });
      verlauf.appendChild(b);
      scrollEnde();
      return b;
    }

    /* ---------- Schritte ---------- */

    function weiter() {
      if (!aktiv()) return;
      U.clear(antworten);
      if (i >= dialog.schritte.length) { ende(); return; }
      var s = dialog.schritte[i++];

      if (s.typ === 'nachricht') {
        tippenZeigen(s.von);
        warte(tippDauer(s.text), function () {
          blaseSie(s.text, null, s.norm, s.von);
          warte(260, weiter);
        });
        return;
      }

      if (s.typ === 'karte') {
        tippenZeigen();
        warte(520, function () {
          tippenWeg();
          var k = U.el('div', { class: 'blase blase--karte', data: { von: 'karte' } });
          if (s.titel) k.appendChild(U.el('h4', { text: s.titel }));
          k.appendChild(U.el('div', { html: karteInhalt(s) }));
          verlauf.appendChild(k);
          scrollEnde();
          warte(300, weiter);
        });
        return;
      }

      if (s.typ === 'merk') {
        tippenZeigen();
        warte(420, function () {
          tippenWeg();
          var m = U.el('div', { class: 'blase blase--merk', data: { von: 'merk' } });
          m.appendChild(U.el('div', { class: 'blase__name', text: '📌 Für den Spickzettel' }));
          m.appendChild(U.el('div', { html: U.rich(s.text) }));
          verlauf.appendChild(m);
          scrollEnde();
          if (AUDIT.spickzettel) {
            AUDIT.spickzettel.hinzu({
              text: s.text, thema: dialog.thema,
              gebiet: (AUDIT.data.themaVonKontakt || {})[dialog.kontakt],
              dialog: dialog.id, titel: dialog.titel
            });
          }
          warte(300, weiter);
        });
        return;
      }

      if (s.typ === 'frage') { frage(s); return; }
      if (s.typ === 'mehrfach') { mehrfach(s); return; }

      weiter();   /* unbekannter Typ: überspringen */
    }

    /* ---------- Frage mit einer richtigen Antwort ---------- */

    function frage(s) {
      U.clear(antworten);
      var versuche = 0;
      var kopf = U.el('div', { class: 'chat__frage', text: s.text || 'Deine Antwort' });
      antworten.appendChild(kopf);
      var knoepfe = [];

      function loesungZeigen() {
        var richtige = s.optionen.filter(function (o) { return o.richtig; })[0];
        var idx = s.optionen.indexOf(richtige);
        U.clear(antworten);
        blaseIch('Zeig mir die Lösung.');
        tippenZeigen(s.von);
        warte(tippDauer(richtige.antwort), function () {
          blaseSie('Kein Problem, das ist eine fiese Frage. Richtig ist: <b>' +
            U.esc(richtige.text.replace(/<[^>]+>/g, '')) + '</b>', 'blase--loesung', null, s.von);
          warte(500, function () {
            blaseSie(richtige.antwort, 'blase--loesung', richtige.norm, s.von);
            warte(420, weiter);
          });
        });
      }

      function loesungKnopfZeigen() {
        if (antworten.querySelector('.loesung-knopf')) return;
        var k = U.el('button', {
          class: 'btn loesung-knopf', style: { marginTop: '4px' },
          text: '💡 Lösung zeigen',
          onclick: function () { if (aktiv()) loesungZeigen(); }
        });
        antworten.appendChild(k);
        scrollEnde();
      }

      s.optionen.forEach(function (o, nr) {
        var knopf = U.el('button', { class: 'antwort' }, [
          U.el('span', { class: 'antwort__nr', text: String(nr + 1) }),
          U.el('span', { html: U.rich(o.text) })
        ]);
        knoepfe.push(knopf);
        knopf.addEventListener('click', function () {
          if (!aktiv() || knopf.classList.contains('is-falsch')) return;
          blaseIch(o.text);

          if (o.richtig) {
            U.clear(antworten);
            tippenZeigen(s.von);
            warte(tippDauer(o.antwort), function () {
              blaseSie(o.antwort, 'blase--richtig', o.norm, s.von);
              warte(380, weiter);
            });
          } else {
            versuche++;
            knopf.classList.add('is-falsch');
            knopf.setAttribute('disabled', 'disabled');
            tippenZeigen(s.von);
            warte(tippDauer(o.antwort), function () {
              blaseSie(o.antwort, 'blase--falsch', o.norm, s.von);
              /* Wie viele Möglichkeiten bleiben noch? */
              var offen = knoepfe.filter(function (k) { return !k.classList.contains('is-falsch'); }).length;
              if (versuche >= 3 || offen <= 1) {
                warte(500, function () {
                  blaseSie(zufall([
                    'Soll ich dir die Lösung zeigen?',
                    'Wenn du magst, zeige ich dir die Antwort.',
                    'Wir können das auch gemeinsam auflösen.'
                  ]), null, null, s.von);
                  loesungKnopfZeigen();
                });
              }
              scrollEnde();
            });
          }
        });
        antworten.appendChild(knopf);
      });
      scrollEnde();
    }

    /* ---------- Frage mit mehreren richtigen Antworten ---------- */

    function mehrfach(s) {
      U.clear(antworten);
      antworten.appendChild(U.el('div', { class: 'chat__frage', text: s.text || 'Mehrere sind richtig' }));
      var gewaehlt = {};
      var versuche = 0;
      var knoepfe = [];

      s.optionen.forEach(function (o, nr) {
        var knopf = U.el('button', { class: 'antwort' }, [
          U.el('span', { class: 'antwort__nr', text: '☐' }),
          U.el('span', { html: U.rich(o.text) })
        ]);
        knoepfe.push(knopf);
        knopf.addEventListener('click', function () {
          if (!aktiv()) return;
          gewaehlt[nr] = !gewaehlt[nr];
          knopf.classList.toggle('is-gewaehlt', !!gewaehlt[nr]);
          knopf.firstChild.textContent = gewaehlt[nr] ? '☑' : '☐';
          zaehlerAktualisieren();
        });
        antworten.appendChild(knopf);
      });

      /* Zeigt an, wie viele Antworten ausgewählt sind, und sperrt
         die Abgabe, solange gar nichts markiert ist. */
      function anzahlGewaehlt() {
        return Object.keys(gewaehlt).filter(function (k) { return gewaehlt[k]; }).length;
      }
      function zaehlerAktualisieren() {
        var n = anzahlGewaehlt();
        zaehler.textContent = n === 0 ? 'Noch nichts ausgewählt'
          : (n === 1 ? '1 Antwort ausgewählt' : n + ' Antworten ausgewählt');
        if (n === 0) pruefen.setAttribute('disabled', 'disabled');
        else pruefen.removeAttribute('disabled');
      }

      function loesungZeigen() {
        U.clear(antworten);
        blaseIch('Zeig mir die Lösung.');
        var richtigeTexte = s.optionen.filter(function (o) { return o.richtig; })
          .map(function (o) { return o.text.replace(/<[^>]+>/g, ''); });
        tippenZeigen(s.von);
        warte(700, function () {
          blaseSie('Richtig wären gewesen: <b>' +
            richtigeTexte.map(U.esc).join('</b>, <b>') + '</b>', 'blase--loesung', null, s.von);
          warte(500, function () {
            blaseSie(s.antwortRichtig, 'blase--loesung', s.norm, s.von);
            warte(420, weiter);
          });
        });
      }

      var zaehler = U.el('span', { class: 'chat__zaehler' });
      var pruefen = U.el('button', { class: 'btn btn--primary', text: 'Antwort abgeben' });
      pruefen.addEventListener('click', function () {
        if (!aktiv() || pruefen.hasAttribute('disabled')) return;
        var fehlend = 0, zuviel = 0;
        s.optionen.forEach(function (o, nr) {
          if (o.richtig && !gewaehlt[nr]) fehlend++;
          if (!o.richtig && gewaehlt[nr]) zuviel++;
        });
        var gewaehlteTexte = s.optionen.filter(function (o, nr) { return gewaehlt[nr]; })
          .map(function (o) { return o.text; });
        blaseIch(gewaehlteTexte.length ? gewaehlteTexte.join(' · ') : '(nichts ausgewählt)');

        if (!fehlend && !zuviel) {
          U.clear(antworten);
          tippenZeigen(s.von);
          warte(tippDauer(s.antwortRichtig), function () {
            blaseSie(s.antwortRichtig, 'blase--richtig', s.norm, s.von);
            warte(380, weiter);
          });
          return;
        }

        /* Rückmeldung, die sagt, in welche Richtung es danebenliegt */
        versuche++;
        var hinweis;
        if (fehlend && zuviel) {
          hinweis = 'Noch nicht ganz: <b>' + (zuviel === 1 ? 'eine Antwort gehört nicht dazu' : zuviel + ' Antworten gehören nicht dazu') +
            '</b>, und <b>' + (fehlend === 1 ? 'eine fehlt' : fehlend + ' fehlen') + '</b>.';
        } else if (zuviel) {
          hinweis = zuviel === 1
            ? 'Fast. <b>Eine</b> deiner Antworten gehört nicht dazu – die anderen stimmen.'
            : 'Fast. <b>' + zuviel + '</b> deiner Antworten gehören nicht dazu.';
        } else {
          hinweis = fehlend === 1
            ? 'Alles richtig, was du angekreuzt hast – aber <b>eine</b> fehlt noch.'
            : 'Alles richtig, was du angekreuzt hast – aber <b>' + fehlend + '</b> fehlen noch.';
        }

        tippenZeigen(s.von);
        warte(tippDauer(hinweis), function () {
          blaseSie(hinweis, 'blase--falsch', null, s.von);
          if (versuche >= 3) {
            warte(500, function () {
              blaseSie(s.antwortFalsch, null, null, s.von);
              if (!antworten.querySelector('.loesung-knopf')) {
                antworten.appendChild(U.el('button', {
                  class: 'btn loesung-knopf', style: { marginTop: '4px' },
                  text: '💡 Lösung zeigen',
                  onclick: function () { if (aktiv()) loesungZeigen(); }
                }));
              }
              scrollEnde();
            });
          } else if (versuche === 2) {
            warte(450, function () { blaseSie(s.antwortFalsch, null, null, s.von); });
          }
          scrollEnde();
        });
      });
      antworten.appendChild(U.el('div', { class: 'chat__abgeben' }, [zaehler, pruefen]));
      zaehlerAktualisieren();
      scrollEnde();
    }

    /* ---------- Ende ---------- */

    function ende() {
      if (!aktiv()) return;
      tippenWeg();
      U.clear(antworten);
      var box = U.el('div', { class: 'ende' });
      box.appendChild(U.el('div', { class: 'ende__titel', text: '✓ Gespräch beendet' }));
      if (onFertig) onFertig(box);
      antworten.appendChild(box);
      scrollEnde();
    }

    weiter();
  }

  return { starte: starte, karteInhalt: karteInhalt };
})();
