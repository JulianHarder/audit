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

  function starte(dialog, mount, onFertig) {
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
      wartend = setTimeout(function () { wartend = null; sofortFn = null; fn(); }, ms);
    }

    function tippenZeigen() {
      tippBlase = U.el('div', { class: 'tippen' }, [U.el('i'), U.el('i'), U.el('i')]);
      verlauf.appendChild(tippBlase);
      scrollEnde();
    }
    function tippenWeg() {
      if (tippBlase && tippBlase.parentNode) tippBlase.parentNode.removeChild(tippBlase);
      tippBlase = null;
    }

    function blaseSie(html, extraKlasse, norm) {
      tippenWeg();
      /* Name nur über der ersten Blase einer Folge – sonst wird es unruhig */
      var letzte = verlauf.lastElementChild;
      var zeigeName = !(letzte && letzte.classList.contains('blase--sie'));
      var b = U.el('div', { class: 'blase blase--sie' + (extraKlasse ? ' ' + extraKlasse : '') });
      if (zeigeName) b.appendChild(U.el('div', { class: 'blase__name', text: kontakt.name }));
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
      U.clear(antworten);
      if (i >= dialog.schritte.length) { ende(); return; }
      var s = dialog.schritte[i++];

      if (s.typ === 'nachricht') {
        tippenZeigen();
        warte(tippDauer(s.text), function () {
          blaseSie(s.text, null, s.norm);
          warte(260, weiter);
        });
        return;
      }

      if (s.typ === 'karte') {
        tippenZeigen();
        warte(520, function () {
          tippenWeg();
          var k = U.el('div', { class: 'blase blase--karte' });
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
          var m = U.el('div', { class: 'blase blase--merk' });
          m.appendChild(U.el('div', { class: 'blase__name', text: '📌 Für den Spickzettel' }));
          m.appendChild(U.el('div', { html: U.rich(s.text) }));
          verlauf.appendChild(m);
          scrollEnde();
          if (AUDIT.spickzettel) {
            AUDIT.spickzettel.hinzu({
              text: s.text, thema: dialog.thema,
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
      antworten.appendChild(U.el('div', { class: 'chat__frage', text: s.text || 'Deine Antwort' }));

      s.optionen.forEach(function (o, nr) {
        var knopf = U.el('button', { class: 'antwort' }, [
          U.el('span', { class: 'antwort__nr', text: String(nr + 1) }),
          U.el('span', { html: U.rich(o.text) })
        ]);
        knopf.addEventListener('click', function () {
          if (knopf.classList.contains('is-falsch')) return;
          blaseIch(o.text);

          if (o.richtig) {
            U.clear(antworten);
            tippenZeigen();
            warte(tippDauer(o.antwort), function () {
              blaseSie(o.antwort, 'blase--richtig', o.norm);
              warte(380, weiter);
            });
          } else {
            knopf.classList.add('is-falsch');
            knopf.setAttribute('disabled', 'disabled');
            tippenZeigen();
            warte(tippDauer(o.antwort), function () {
              blaseSie(o.antwort, 'blase--falsch', o.norm);
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

      s.optionen.forEach(function (o, nr) {
        var knopf = U.el('button', { class: 'antwort' }, [
          U.el('span', { class: 'antwort__nr', text: '☐' }),
          U.el('span', { html: U.rich(o.text) })
        ]);
        knopf.addEventListener('click', function () {
          gewaehlt[nr] = !gewaehlt[nr];
          knopf.classList.toggle('is-gewaehlt', !!gewaehlt[nr]);
          knopf.firstChild.textContent = gewaehlt[nr] ? '☑' : '☐';
        });
        antworten.appendChild(knopf);
      });

      var pruefen = U.el('button', { class: 'btn btn--primary', text: 'Antwort abgeben' });
      pruefen.addEventListener('click', function () {
        var richtig = true;
        s.optionen.forEach(function (o, nr) {
          if (!!o.richtig !== !!gewaehlt[nr]) richtig = false;
        });
        var gewaehlteTexte = s.optionen.filter(function (o, nr) { return gewaehlt[nr]; })
          .map(function (o) { return o.text; });
        blaseIch(gewaehlteTexte.length ? gewaehlteTexte.join(' · ') : '(nichts ausgewählt)');

        if (richtig) {
          U.clear(antworten);
          tippenZeigen();
          warte(tippDauer(s.antwortRichtig), function () {
            blaseSie(s.antwortRichtig, 'blase--richtig', s.norm);
            warte(380, weiter);
          });
        } else {
          tippenZeigen();
          warte(tippDauer(s.antwortFalsch), function () {
            blaseSie(s.antwortFalsch || 'Noch nicht ganz – schau es dir noch einmal an.', 'blase--falsch');
            scrollEnde();
          });
        }
      });
      antworten.appendChild(pruefen);
      scrollEnde();
    }

    /* ---------- Ende ---------- */

    function ende() {
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
