/* ===========================================================
   AUDIT – data/dialoge-dsb.js
   Herr Olschewski, Datenschutzbeauftragter:
   DSGVO, Betroffenenrechte, Pseudonymisierung, Privacy by Design.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'dsb-01',
  kontakt: 'dsb',
  titel: '„Löschen Sie alles über mich"',
  thema: 'Betroffenenrechte',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Guten Morgen. Ich habe eine Anfrage weitergeleitet bekommen, die wir zusammen anschauen sollten.' },
    { typ: 'nachricht', text: 'Eine Kundin schreibt: „Löschen Sie bitte mein Kundenkonto und alle Daten, die Sie über mich haben."' },
    { typ: 'nachricht', text: 'Sie hat vor zwei Jahren dreimal bestellt. Im System liegen ihr Konto, der Newsletter-Eintrag – und drei Rechnungen.' },

    { typ: 'frage', text: 'Wie gehen wir damit um?',
      optionen: [
        { text: 'Alles löschen, sie hat ein Recht darauf',
          antwort: 'Das Recht gibt es ([[Art. 17 DSGVO|Art. 17]]), aber es gilt nicht grenzenlos. Rechnungen müssen wir nach Handels- und Steuerrecht <b>zehn Jahre</b> aufbewahren. Die dürfen wir gar nicht löschen.' },
        { text: 'Konto und Newsletter löschen, Rechnungen sperren', richtig: true, norm: 'Art. 17 Abs. 3 lit. b DSGVO',
          antwort: 'Richtig. Alles, was wir nicht mehr brauchen, kommt weg. Die Rechnungen bleiben – aber <b>gesperrt</b>, also nur noch für die Aufbewahrungspflicht nutzbar, nicht mehr für Werbung oder Auswertungen. Und wir erklären ihr das verständlich.' },
        { text: 'Ablehnen, wir haben eine Aufbewahrungspflicht',
          antwort: 'Zu pauschal. Die Pflicht betrifft nur die Rechnungen. Kundenkonto, Newsletter-Verteiler und Bestellhistorie fallen nicht darunter – die müssen raus.' }
      ] },

    { typ: 'nachricht', text: 'Gut. Die nächste Frage stellt mir die Geschäftsführung jedes Mal:' },

    { typ: 'frage', text: 'Wie schnell müssen wir antworten?',
      optionen: [
        { text: 'Noch am selben Tag',
          antwort: 'So streng ist es nicht. „Unverzüglich" heißt „ohne schuldhaftes Zögern", nicht „sofort".' },
        { text: 'Innerhalb eines Monats', richtig: true, norm: 'Art. 12 Abs. 3 DSGVO',
          antwort: 'Genau. Unverzüglich, spätestens aber <b>innerhalb eines Monats</b>. Bei komplizierten Fällen dürfen wir um <b>zwei weitere Monate</b> verlängern – müssen die Person dann aber innerhalb des ersten Monats informieren und die Verzögerung begründen. Und: Das Ganze ist grundsätzlich <b>kostenlos</b>.' },
        { text: 'Innerhalb von drei Monaten',
          antwort: 'Das ist das Maximum <b>mit</b> Verlängerung. Die muss aber angekündigt und begründet werden – der Regelfall ist ein Monat.' }
      ] },

    { typ: 'nachricht', text: 'Noch ein Punkt, der in Prüfungen gern drankommt: Wir haben ihre Adresse damals auch an unseren Versanddienstleister gegeben.' },

    { typ: 'frage', text: 'Müssen wir dort etwas veranlassen?',
      optionen: [
        { text: 'Nein, das ist deren Sache',
          antwort: 'Doch, es ist unsere. Wir sind der [[Verantwortlicher|Verantwortliche]], der Dienstleister ist [[Auftragsverarbeiter]] und handelt nur auf unsere Weisung.' },
        { text: 'Ja, wir müssen die Empfänger informieren', richtig: true, norm: 'Art. 19 DSGVO',
          antwort: 'Richtig. Jeder Empfänger der Daten muss über die Löschung informiert werden – es sei denn, das ist unmöglich oder mit unverhältnismäßigem Aufwand verbunden. Die Kundin darf außerdem verlangen, dass wir ihr sagen, wer die Empfänger waren.' }
      ] },

    { typ: 'karte', titel: 'Die wichtigsten Betroffenenrechte', quelle: 'betroffenenrechte',
      keys: ['a15', 'a16', 'a17', 'a18', 'a20', 'a21'] },

    { typ: 'merk', text: '<b>Löschen ja – aber Aufbewahrungsfristen gehen vor.</b> Dann wird gesperrt statt gelöscht. Frist für die Antwort: ein Monat.' },

    { typ: 'nachricht', text: 'Sehr gut. Ich formuliere das Antwortschreiben, Sie kümmern sich um die technische Umsetzung.' }
  ]
});
