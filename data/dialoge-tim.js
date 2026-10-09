/* ===========================================================
   AUDIT – data/dialoge-tim.js
   Tim, Azubi im 2. Lehrjahr:
   Zutritt, Zugang, Zugriff, TOMs, Alltagsfehler.
   Hier erklärst du – wer erklären kann, hat es verstanden.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'tim-01',
  kontakt: 'tim',
  titel: 'Zutritt, Zugang, Zugriff',
  thema: 'Kontrollarten (TOMs)',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Du, ich schreib morgen die Klausur über den Datenschutz-Kram 😩' },
    { typ: 'nachricht', text: 'Zutritt, Zugang, Zugriff – das klingt für mich dreimal dasselbe. Kannst du mir das erklären?' },
    { typ: 'nachricht', text: 'Fang mal mit Zutritt an: Was wird da geschützt?' },

    { typ: 'frage', text: 'Was schützt die Zutrittskontrolle?',
      optionen: [
        { text: 'Den Raum', richtig: true, norm: 'Kontrollart der TOMs',
          antwort: 'Ah, okay! Also alles Physische – wer überhaupt ins Gebäude oder in den Serverraum kommt.' },
        { text: 'Das System',
          antwort: 'Hm, das wäre doch der <b>Zugang</b>, oder? Beim Zutritt geht es doch darum, ob ich überhaupt in den Raum reinkomme.' },
        { text: 'Die Daten',
          antwort: 'Das ist der <b>Zugriff</b>. Zutritt ist was Physisches – Tür, Raum, Gebäude.' }
      ] },

    { typ: 'nachricht', text: 'Okay, dann teste mich mal. Ich hab hier eine Liste aus dem Unterricht.' },

    { typ: 'mehrfach', text: 'Welche Maßnahmen gehören zur Zutrittskontrolle? (mehrere)',
      optionen: [
        { text: 'Chipkarte für den Serverraum', richtig: true },
        { text: 'Passwort am Rechner' },
        { text: 'Pförtner und Besucherbuch', richtig: true },
        { text: 'Berechtigungskonzept für die Personalakte' },
        { text: 'Videoüberwachung am Eingang', richtig: true }
      ],
      antwortRichtig: 'Alles klar: Chipkarte, Pförtner und Kamera sind Zutritt – da geht es um den <b>Raum</b>. Das Passwort ist [[Zugangskontrolle|Zugang]] (System), das Berechtigungskonzept ist [[Zugriffskontrolle|Zugriff]] (Daten).',
      antwortFalsch: 'Fast. Denk dran: Zutritt ist alles Physische – Türen, Räume, Gebäude. Passwort und Berechtigungen gehören nicht dazu.' },

    { typ: 'nachricht', text: 'Und wie merk ich mir das in der Klausur?' },

    { typ: 'merk', text: '<b>Zutritt = Raum · Zugang = System · Zugriff = Daten</b>' },

    { typ: 'nachricht', text: 'Das ist gut. Gibt es noch mehr davon? Unser Lehrer hat was von acht Stück gesagt.' },

    { typ: 'karte', titel: 'Alle acht Kontrollarten der TOMs', quelle: 'kontrollarten' },

    { typ: 'frage', text: 'Tim fragt: „Woher kommt diese Einteilung eigentlich?"',
      optionen: [
        { text: 'Direkt aus der DSGVO',
          antwort: 'Hab ich auch gedacht. Aber in der DSGVO steht das so gar nicht – die nennt in [[Art. 32 DSGVO|Art. 32]] nur allgemeine Ziele.' },
        { text: 'Aus dem alten BDSG', richtig: true, norm: 'Anlage zu § 9 BDSG a. F.',
          antwort: 'Stimmt, das hatte unser Lehrer auch gesagt. Die acht Kontrollarten standen in der Anlage zu § 9 des alten BDSG. Die DSGVO formuliert es heute offener – Pseudonymisierung, Verschlüsselung, Vertraulichkeit, Integrität, Verfügbarkeit, Belastbarkeit. Für die Prüfung lernen wir trotzdem die acht.' }
      ] },

    { typ: 'nachricht', text: 'Mega, danke! Ich geh die nochmal durch. 🙏' }
  ]
});
