/* ===========================================================
   AUDIT – data/dialoge-marketing.js
   Marion Rebholz, Online-Marketing bei Rampe 7.

   Ton: Duzt dich, direkt und ungeduldig, argumentiert vom
   Geschaeftsnutzen her. Sie ist nicht uneinsichtig – sie will
   eine Begruendung und einen Weg, der funktioniert. Wenn du
   nur "verboten" sagst, fragt sie zurueck.

   Kernthemen: Analyse-Cookies und warum das berechtigte
   Interesse hier nicht traegt, was ohne Einwilligung bleibt,
   Newsletter und Double Opt-in, Retargeting und Werbepixel,
   die Versuchung des manipulativen Banners.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   mkt-01 – Ich brauche Zahlen
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mkt-01',
  kontakt: 'marketing',
  titel: 'Ich brauche endlich Zahlen zum Shop',
  thema: 'Analyse und Einwilligung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Du, ich komme beim Shop nicht weiter. Ich soll das Werbebudget planen und weiß nicht, welche Produktseite überhaupt besucht wird. Ich will ein Analyse-Werkzeug einbauen.' },
    { typ: 'nachricht', text: 'Die Anwältin hat Nein gesagt, aber ihre Begründung habe ich nicht verstanden. Ich habe ein handfestes Interesse an diesen Zahlen – reicht das nicht?' },

    { typ: 'frage', text: 'Trägt das berechtigte Interesse als Grundlage für das Analyse-Cookie?',
      optionen: [
        { text: 'Nein – auf der Stufe des Gerätezugriffs gilt § 25 TDDDG, und der kennt nur Einwilligung oder Erforderlichkeit', richtig: true, norm: '§ 25 Abs. 1 und 2 TDDDG',
          antwort: 'Genau das ist der Punkt, den du suchst. Es geht um zwei Stufen. Auf der ersten – dem Zugriff auf das [[Endgerät]] – ist [[TDDDG|§ 25 TDDDG]] die speziellere Norm ([[lex specialis]]), und dort gibt es nur zwei Türen: [[Einwilligung]] oder unbedingte Erforderlichkeit. Das [[berechtigtes Interesse|berechtigte Interesse]] ist eine Tür der DSGVO und steht auf dieser Stufe nicht zur Verfügung.' },
        { text: 'Ja, wenn du die Abwägung dokumentierst',
          antwort: 'So geht es bei Art. 6 Abs. 1 lit. f DSGVO – nur kommst du auf diese Stufe nicht, solange der Gerätezugriff nicht erlaubt ist. § 25 TDDDG steht davor.' },
        { text: 'Ja, weil es um den Betrieb des Shops geht',
          antwort: 'Der Shop <b>läuft</b> ja auch ohne Statistik. Genau daran scheitert die Erforderlichkeit: Maßstab ist der Dienst, den die Kundin verlangt hat, nicht unsere Planung.' }
      ] },

    { typ: 'nachricht', text: 'Das heißt, mein Interesse zählt gar nicht? Das kann doch nicht der Sinn sein.' },

    { typ: 'frage', text: 'Wie erklärst du ihr den Unterschied am besten?',
      optionen: [
        { text: 'Ihr Interesse zählt – aber erst auf der zweiten Stufe, und die erste muss vorher passiert sein', richtig: true,
          antwort: 'Gut formuliert. Die Abwägung ist nicht wertlos, sie kommt nur später: Sobald die Daten erhoben sind, braucht deren Verarbeitung eine [[Rechtsgrundlage]], und dort kann ein Interesse tragen. Der <b>Griff auf das fremde Gerät</b> ist davor und braucht eine Erlaubnis.' },
        { text: 'Ihr Interesse zählt grundsätzlich nicht, das Datenschutzrecht kennt keine Unternehmensinteressen',
          antwort: 'Das ist zu pauschal und sachlich falsch – Art. 6 Abs. 1 lit. f DSGVO ist genau dafür da. Es scheitert hier nur an der <b>Reihenfolge</b>, nicht am Prinzip.' },
        { text: 'Ihr Interesse zählt, wenn es wirtschaftlich belegt ist',
          antwort: 'Ein wirtschaftlicher Beleg hilft bei der Abwägung, aber er öffnet keine Tür, die § 25 TDDDG geschlossen hält.' }
      ] },

    { typ: 'frage', text: 'Marion fragt: „Und wenn das Tool die IP-Adresse kürzt und alles anonym auswertet?"',
      optionen: [
        { text: 'Ändert nichts – einwilligungspflichtig ist der Zugriff auf das Gerät, nicht die späteren Daten', richtig: true,
          antwort: 'Richtig, und das ist der Satz, der die meisten Diskussionen beendet. Die IP-Kürzung ist gute [[Datenminimierung]] und nützt der Abwägung auf Stufe zwei. Nur ist der einwilligungspflichtige Vorgang das <b>Setzen des Cookies</b> – und das passiert vorher.' },
        { text: 'Dann ist es erlaubt, anonyme Daten fallen nicht unter die DSGVO',
          antwort: 'Echt [[Anonymisierung|anonymisierte]] Daten fallen tatsächlich nicht unter die DSGVO. Aber § 25 TDDDG gilt <b>unabhängig vom Personenbezug</b> – er schützt das Gerät, nicht die Person.' },
        { text: 'Dann ist es erlaubt, wenn der Anbieter es im Vertrag zusichert',
          antwort: 'Eine Zusicherung des Anbieters ändert die Rechtslage nicht. Sie ist nur ein Baustein für den [[AV-Vertrag]].' }
      ] },

    { typ: 'frage', text: 'Was antwortest du auf „Dann machen wir es einfach, es kontrolliert ja keiner"?',
      optionen: [
        { text: 'Das Risiko ist real: Beschwerde, Prüfung der Aufsichtsbehörde, Bußgeld und Schadenersatz', richtig: true, norm: 'Art. 77, 82, 83 DSGVO',
          antwort: 'Genau, und es ist kein theoretisches Risiko. Jede Besucherin kann sich bei der [[Aufsichtsbehörde]] beschweren ([[Art. 77 DSGVO]]), es gibt [[Bußgelder]] nach Art. 83 und einen Anspruch auf [[Art. 82 DSGVO|Schadenersatz]] – im Fall [[Google Fonts]] waren es 100 Euro, bei tausend Betroffenen also 100.000. Außerdem ist der Verstoß im Quelltext für jeden sichtbar.' },
        { text: 'Stimmt, bei kleinen Unternehmen passiert meist nichts',
          antwort: 'Das wäre ein schlechter Rat. Website-Verstöße sind von außen prüfbar – ohne Betriebsbesichtigung, nur mit dem Browser. Gerade sie werden auffällig oft verfolgt.' },
        { text: 'Dann haftet die Agentur',
          antwort: 'Nein. [[Verantwortlicher|Verantwortliche]] ist Rampe 7, weil Rampe 7 über Zwecke und Mittel entscheidet. Die Agentur ist [[Auftragsverarbeiter]] – nach außen haften wir.' }
      ] },

    { typ: 'merk', text: '<b>Zwei Stufen, zwei Normen:</b> Zugriff auf das [[Endgerät]] → [[TDDDG|§ 25 TDDDG]], nur [[Einwilligung]] oder unbedingte Erforderlichkeit. Verarbeitung der Daten → [[DSGVO]] Art. 6, dort ist ein [[berechtigtes Interesse]] möglich. IP-Kürzung und „anonym" ändern an Stufe eins <b>nichts</b>.' },

    { typ: 'nachricht', text: 'Okay. Verstanden – nicht schön, aber verstanden. Dann frage ich dich beim nächsten Mal, was ich stattdessen bekomme.' }
  ]
});

/* ---------------------------------------------------------------
   mkt-02 – Was ohne Einwilligung bleibt
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mkt-02',
  kontakt: 'marketing',
  titel: 'Was bekomme ich ohne Einwilligung?',
  thema: 'Reichweitenmessung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Also gut, konstruktiv: Angenommen, die Hälfte lehnt ab. Was kann ich dann überhaupt auswerten, ohne irgendwas falsch zu machen?' },

    { typ: 'frage', text: 'Welche Auswertung ist ohne Einwilligung möglich?',
      optionen: [
        { text: 'Server-Logfiles für Betrieb und Sicherheit, kurz aufbewahrt und ohne Profilbildung', richtig: true, norm: 'Art. 6 Abs. 1 lit. f DSGVO',
          antwort: 'Richtig, und der Grund ist wichtig: Beim Server-Log greift niemand auf das [[Endgerät]] zu – die Daten fallen bei uns an. Damit ist § 25 TDDDG nicht berührt, wir sind direkt auf der DSGVO-Stufe, und dort trägt ein [[berechtigtes Interesse]] an Betrieb und Sicherheit.' },
        { text: 'Gar nichts',
          antwort: 'Zu streng. Was auf unseren eigenen Servern anfällt, ist eine andere Rechtsfrage als der Zugriff auf fremde Geräte.' },
        { text: 'Alles, solange es nur aggregiert ausgewertet wird',
          antwort: 'Die Aggregation hilft bei der Abwägung, hebt aber die Einwilligungspflicht für den <b>Gerätezugriff</b> nicht auf. Server-Logs sind nur deshalb möglich, weil es dort keinen Gerätezugriff gibt.' }
      ] },

    { typ: 'frage', text: 'Was darf ich daraus konkret ablesen?',
      optionen: [
        { text: 'Aufgerufene Seiten, Zeitpunkte, Fehlerquoten, groben Herkunftsbereich – aber keine Wiedererkennung über die Zeit', richtig: true,
          antwort: 'Genau die Grenze. Du bekommst Reichweite und Technik, aber keinen Weg durch die Sitzung und keine Wiederkehrerquote – denn die bräuchte eine Wiedererkennung, und die ist [[Tracking]]. Für die Budgetplanung reicht das oft weiter, als man denkt.' },
        { text: 'Auch den Klickweg einzelner Besucher durch den Shop',
          antwort: 'Dafür müsste man einen Besucher wiedererkennen – also im Gerät speichern oder ihn über [[Fingerprinting]] identifizieren. Beides ist einwilligungspflichtig.' },
        { text: 'Auch, welche Besucher wiederkommen',
          antwort: 'Wiederkehrer zu erkennen heißt, eine Kennung über die Zeit zu halten. Das ist genau der Vorgang, für den § 25 TDDDG eine Einwilligung verlangt.' }
      ] },

    { typ: 'nachricht', text: 'Und wenn ich die Logs lange behalte? Je mehr Zeitraum, desto besser der Vergleich.' },

    { typ: 'frage', text: 'Was begrenzt die Aufbewahrung?',
      optionen: [
        { text: 'Die Speicherbegrenzung – nur solange, wie der Zweck es erfordert', richtig: true, norm: 'Art. 5 Abs. 1 lit. e DSGVO',
          antwort: 'Richtig. Für Betrieb und Sicherheit sind kurze Fristen üblich – oft sieben Tage bis wenige Wochen für die IP-Adresse. Die [[Speicherbegrenzung]] verlangt eine Begründung für jede Frist. Der Ausweg ist aber gut für dich: Du kannst die <b>aggregierten Kennzahlen</b> lange behalten, wenn du sie von den Rohdaten trennst.' },
        { text: 'Nichts, Logfiles sind technische Daten',
          antwort: 'Eine IP-Adresse ist ein [[personenbezogene Daten|personenbezogenes Datum]] – „technisch" ist keine Ausnahme vom Datenschutzrecht.' },
        { text: 'Die zehnjährige Aufbewahrungsfrist aus dem Handelsrecht',
          antwort: 'Die gilt für Buchführungsunterlagen wie Rechnungen. Ein Webserver-Log ist kein Handelsbuch – es wäre eine zu lange Aufbewahrung ohne Zweck.' }
      ] },

    { typ: 'frage', text: 'Marion fragt: „Was ist der Unterschied zwischen pseudonym und anonym? Der Anbieter benutzt beides."',
      optionen: [
        { text: 'Pseudonym lässt sich mit Zusatzwissen zurückführen, anonym nicht mehr – nur anonym fällt aus der DSGVO heraus', richtig: true, norm: 'Art. 4 Nr. 5 DSGVO',
          antwort: 'Genau. Bei der [[Pseudonymisierung]] ist der Bezug noch herstellbar, wenn man den Schlüssel hat – die Daten bleiben personenbezogen und die DSGVO gilt weiter. Bei echter [[Anonymisierung]] ist die Rückführung <b>unmöglich</b>, dann greift die DSGVO nicht mehr. Anbieter nennen gern „anonym", was in Wahrheit pseudonym ist.' },
        { text: 'Das ist dasselbe, nur zwei Wörter',
          antwort: 'Es ist der Unterschied zwischen „DSGVO gilt" und „DSGVO gilt nicht" – in der Prüfung eine ganze Aufgabe wert.' },
        { text: 'Pseudonym heißt, dass Namen entfernt wurden',
          antwort: 'Namen zu entfernen genügt nicht. Über [[Quasi-Identifikator|Quasi-Identifikatoren]] wie Postleitzahl, Geburtsjahr und Beruf lässt sich oft trotzdem eine Person ermitteln.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Wege führen zu Erkenntnissen über den Shop, ohne eine Einwilligung zu brauchen? (mehrere)',
      optionen: [
        { text: 'Server-Logfiles im erforderlichen Umfang', richtig: true },
        { text: 'Umsatz- und Bestellstatistiken aus dem eigenen Shopsystem', richtig: true },
        { text: 'Eine freiwillige Kundenbefragung', richtig: true },
        { text: 'Analyse-Cookies mit gekürzter IP-Adresse' },
        { text: 'Fingerprinting ohne Speicherung' }
      ],
      antwortRichtig: 'Richtig. Die Bestelldaten hast du ohnehin – Vertragsdaten, aus denen sich Verkaufszahlen pro Produkt ablesen lassen, ganz ohne Gerätezugriff. Eine Befragung beruht auf Freiwilligkeit. Die letzten beiden sind [[Analyse-Cookies]] und [[Fingerprinting]]: beide einwilligungspflichtig.',
      antwortFalsch: 'Sortier nach der Frage: Wird dabei auf das Gerät der Kundin zugegriffen, oder entstehen die Daten bei uns?' },

    { typ: 'merk', text: '<b>Ohne Einwilligung geht:</b> Server-Logs für Betrieb und Sicherheit ([[berechtigtes Interesse]], kurze Frist), Bestelldaten aus dem eigenen System, freiwillige Befragung. <b>Nicht:</b> alles, was wiedererkennt. [[Pseudonymisierung|Pseudonym]] = DSGVO gilt weiter · [[Anonymisierung|anonym]] = DSGVO gilt nicht mehr.' },

    { typ: 'nachricht', text: 'Das ist mehr, als ich dachte. Aggregierte Kennzahlen lange behalten – die Idee nehme ich mit.' }
  ]
});

/* ---------------------------------------------------------------
   mkt-03 – Der Newsletter
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mkt-03',
  kontakt: 'marketing',
  titel: 'Der Newsletter soll nächste Woche raus',
  thema: 'Einwilligung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Nächstes Thema, und hier bin ich schon weiter. Wir haben 4.000 E-Mail-Adressen von Bestellungen aus den letzten drei Jahren. Da schicke ich den neuen Newsletter raus.' },

    { typ: 'frage', text: 'Geht das?',
      optionen: [
        { text: 'Nein – eine Bestellung ist keine Einwilligung in Werbung', richtig: true, norm: 'Art. 6 Abs. 1 lit. a DSGVO, § 7 UWG',
          antwort: 'Richtig. Die Adresse wurde für die <b>Vertragsabwicklung</b> erhoben; sie für Werbung zu nutzen, ist ein anderer Zweck – das verstößt gegen die [[Zweckbindung]]. Werbung braucht eine eigene [[Einwilligung]], und das Wettbewerbsrecht verlangt sie ebenfalls.' },
        { text: 'Ja, es sind unsere eigenen Kunden',
          antwort: 'Kundenbeziehung allein genügt nicht. Es gibt eine schmale Ausnahme in § 7 Abs. 3 UWG – dazu gleich –, aber sie trägt keinen allgemeinen Newsletter.' },
        { text: 'Ja, wenn ein Abmeldelink enthalten ist',
          antwort: 'Der Abmeldelink ist Pflicht, macht den Versand aber nicht zulässig. Er ist ein [[Opt-out]], und das ersetzt keine Einwilligung.' }
      ] },

    { typ: 'nachricht', text: 'Du hast „schmale Ausnahme" gesagt. Erklär die mal, das klingt nach meiner Rettung.' },

    { typ: 'mehrfach', text: 'Welche Bedingungen müssen für die Bestandskunden-Ausnahme alle erfüllt sein? (mehrere)',
      optionen: [
        { text: 'Die Adresse wurde beim Verkauf einer Ware oder Dienstleistung erlangt', richtig: true },
        { text: 'Es wird für eigene, ähnliche Produkte geworben', richtig: true },
        { text: 'Die Person hat nicht widersprochen', richtig: true },
        { text: 'Bei Erhebung und in jeder Mail wird auf das Widerspruchsrecht hingewiesen', richtig: true },
        { text: 'Die Bestellung liegt weniger als drei Jahre zurück' }
      ],
      antwortRichtig: 'Alle vier müssen <b>zusammen</b> erfüllt sein – § 7 Abs. 3 UWG. Eine starre Drei-Jahres-Grenze steht nicht im Gesetz; bei lange zurückliegenden Bestellungen wird die Erwartung der Person aber zum Problem, deshalb ist Vorsicht angebracht. Und „ähnliche Produkte" ist eng zu lesen: Wer Paletten gekauft hat, erwartet keine Werbung für Bürostühle.',
      antwortFalsch: 'Es sind vier Bedingungen, und sie gelten kumulativ. Prüfe, ob eine starre Jahresfrist wirklich im Gesetz steht – oder ob das eine Faustregel aus der Praxis ist.' },

    { typ: 'frage', text: 'Für alle anderen holst du eine Einwilligung ein. Wie weist du sie nach?',
      optionen: [
        { text: 'Double Opt-in – Bestätigungslink in einer Mail an genau diese Adresse', richtig: true, norm: 'Art. 7 Abs. 1 DSGVO',
          antwort: 'Genau. [[Double Opt-in]] beweist, dass die Inhaberin der Adresse selbst zugestimmt hat – nicht irgendwer, der sie eingetippt hat. Protokolliere Zeitpunkt, IP und den Bestätigungsklick: Das ist der [[Einwilligungsnachweis]].' },
        { text: 'Single Opt-in mit Protokoll der Eintragung',
          antwort: 'Das protokolliert nur, dass <b>jemand</b> die Adresse eingetippt hat. Bei einer Beschwerde kannst du nicht belegen, dass es die Inhaberin war.' },
        { text: 'Ein Hinweis in der Datenschutzerklärung',
          antwort: 'Information ist nicht Einwilligung. Die [[Datenschutzerklärung]] informiert, sie holt keine Zustimmung ein.' }
      ] },

    { typ: 'frage', text: 'Darf das Kästchen „Newsletter abonnieren" im Bestellvorgang vorangekreuzt sein?',
      optionen: [
        { text: 'Nein – es fehlt die aktive Handlung', richtig: true, norm: 'EuGH, C-673/17 „Planet49"',
          antwort: 'Richtig, genau der Fall [[Planet49]]. Dazu kommt: Die Einwilligung muss von der Bestellung <b>getrennt</b> erteilt werden, sonst greift das [[Kopplungsverbot]] – die Bestellung darf nicht von der Newsletter-Zustimmung abhängen.' },
        { text: 'Ja, solange man es abwählen kann',
          antwort: 'Das ist [[Opt-out]]. Wer nichts tut, hat nicht zugestimmt – er hat nur nichts getan.' },
        { text: 'Ja, wenn es im Kleingedruckten erwähnt wird',
          antwort: 'Eine im AGB-Text versteckte Zustimmung ist weder aktiv noch für den konkreten Fall erteilt.' }
      ] },

    { typ: 'frage', text: 'Noch eine Falle: In der Mail soll ein Pixel messen, wer sie geöffnet hat.',
      optionen: [
        { text: 'Braucht eine eigene Einwilligung – Öffnungsmessung ist ein zusätzlicher Zweck', richtig: true,
          antwort: 'Richtig. Ein [[Zählpixel]] in der Mail misst Verhalten und braucht seine eigene, benannte Zustimmung – „Newsletter erhalten" deckt „Öffnungsverhalten messen" nicht ab. Das ist [[zweckgetrennte Einwilligung]] auch hier.' },
        { text: 'Von der Newsletter-Einwilligung mitgedeckt',
          antwort: 'Zwei Zwecke, zwei Entscheidungen. Zusenden und Messen sind nicht dasselbe.' },
        { text: 'Unproblematisch, weil kein Cookie gesetzt wird',
          antwort: 'Ein Pixel braucht kein Cookie – der Abruf allein überträgt IP-Adresse und Zeitpunkt und ordnet beides der Empfängerin zu.' }
      ] },

    { typ: 'merk', text: '<b>Newsletter:</b> Regelweg ist die [[Einwilligung]] mit [[Double Opt-in]]. Ausnahme § 7 Abs. 3 UWG nur bei <b>allen vier</b> Bedingungen: Adresse beim Verkauf erlangt · eigene ähnliche Produkte · kein Widerspruch · Hinweis bei Erhebung und in jeder Mail. Öffnungsmessung braucht eine <b>eigene</b> Einwilligung.' },

    { typ: 'nachricht', text: 'Dann wird es eben ein Anmeldeformular mit Bestätigungsmail. Lieber 400 echte Abonnenten als 4.000 Abmahnungen.' }
  ]
});

/* ---------------------------------------------------------------
   mkt-04 – Retargeting
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mkt-04',
  kontakt: 'marketing',
  titel: 'Retargeting und das Werbepixel',
  thema: 'Marketing und Tracking',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Die Agentur schlägt Retargeting vor: Wer ein Produkt angesehen, aber nicht gekauft hat, bekommt es später woanders als Werbung gezeigt. Dazu bauen wir ein Pixel des Werbenetzwerks ein.' },

    { typ: 'frage', text: 'Welche Cookie-Sorte ist das und was folgt daraus?',
      optionen: [
        { text: 'Marketing – einwilligungspflichtig, und die Dritten müssen benannt werden', richtig: true,
          antwort: 'Richtig. [[Marketing-Cookies]] sind die eindeutigste Gruppe: immer einwilligungspflichtig, und weil [[Third-Party-Cookie|Dritte]] beteiligt sind, müssen diese in der Information <b>namentlich</b> auftauchen – nicht als „unsere Partner".' },
        { text: 'Funktional, es verbessert das Einkaufserlebnis',
          antwort: 'Es verbessert unsere Werbewirkung. [[funktionale Cookies]] sind Komfort für die Nutzerin – eine Anzeige auf einer fremden Seite ist das nicht.' },
        { text: 'Analyse, es wird nur Verhalten gemessen',
          antwort: 'Gemessen wird auch, aber der Zweck ist Werbung und Profilbildung. Das ist Marketing, und die Anforderungen sind strenger.' }
      ] },

    { typ: 'frage', text: 'Warum ist Retargeting rechtlich heikler als eine einfache Besucherzählung?',
      optionen: [
        { text: 'Weil es seitenübergreifende Profile bildet und ein Dritter die Daten mitnutzt', richtig: true,
          antwort: 'Genau. Das Netzwerk sitzt auf tausenden Websites und setzt die Spuren zu einem Interessenprofil zusammen. Für die Person ist das weder sichtbar noch kontrollierbar – deshalb wiegt es in der Abwägung schwer und die Information muss besonders deutlich sein.' },
        { text: 'Weil die Daten das Land verlassen',
          antwort: 'Das kommt oft dazu und löst eine [[Drittland|Drittlandprüfung]] aus. Der Kern ist aber die <b>Profilbildung über Seiten hinweg</b>.' },
        { text: 'Weil Werbung grundsätzlich strenger geregelt ist als Statistik',
          antwort: 'Beide brauchen eine Einwilligung. Der Unterschied liegt in der Eingriffstiefe: Profil über viele Seiten gegen Zählung auf einer.' }
      ] },

    { typ: 'frage', text: 'Das Netzwerk nutzt die Daten auch für eigene Zwecke – zur Verbesserung seiner Modelle. Was sind wir dann?',
      optionen: [
        { text: 'Möglicherweise gemeinsam Verantwortliche, nicht nur Auftraggeber eines Auftragsverarbeiters', richtig: true, norm: 'Art. 26 DSGVO',
          antwort: 'Richtig, und das ist der Punkt, den viele übersehen. Ein [[Auftragsverarbeiter]] handelt <b>nur</b> nach Weisung. Wer eigene Zwecke verfolgt, ist das nicht – dann kommt eine gemeinsame Verantwortlichkeit nach Art. 26 in Betracht, mit einer eigenen Vereinbarung und klarer Zuordnung der Pflichten.' },
        { text: 'Nur Auftraggeber, der AV-Vertrag deckt das ab',
          antwort: 'Ein [[AV-Vertrag]] setzt gerade voraus, dass der Dienstleister <b>keine eigenen Zwecke</b> verfolgt. Tut er es doch, passt die Vertragsart nicht.' },
        { text: 'Nicht verantwortlich, das Netzwerk handelt eigenständig',
          antwort: 'Wir binden das Pixel ein und profitieren davon – damit entscheiden wir mit über die Verarbeitung. Verantwortung lässt sich nicht durch Wegsehen abgeben.' }
      ] },

    { typ: 'mehrfach', text: 'Was ist nötig, bevor das Pixel scharf geschaltet wird? (mehrere)',
      optionen: [
        { text: 'Einwilligung für den Zweck Marketing, getrennt von anderen Zwecken', richtig: true },
        { text: 'Namentliche Nennung des Netzwerks in der Information', richtig: true },
        { text: 'Vertragliche Grundlage – AV-Vertrag oder Vereinbarung nach Art. 26', richtig: true },
        { text: 'Prüfung der Drittlandübermittlung', richtig: true },
        { text: 'Blockierung durch das Consent-Tool bis zur Zustimmung', richtig: true },
        { text: 'Eine Datenschutz-Folgenabschätzung in jedem Fall' }
      ],
      antwortRichtig: 'Die ersten fünf sind Pflicht. Eine [[Datenschutz-Folgenabschätzung]] ist <b>nicht in jedem Fall</b> nötig – sie wird erforderlich bei voraussichtlich hohem Risiko, etwa bei umfangreicher systematischer Beobachtung. Bei großflächigem Profiling kann sie durchaus fällig werden; automatisch ist sie es nicht.',
      antwortFalsch: 'Fünf der sechs sind Pflicht. Überlege beim letzten Punkt, ob die DSFA eine Regel oder eine Ausnahme bei hohem Risiko ist.' },

    { typ: 'merk', text: '<b>Retargeting</b> = [[Marketing-Cookies]]: immer [[Einwilligung]], Dritte <b>namentlich</b> nennen, [[zweckgetrennte Einwilligung|eigener Zweck-Schalter]], Vertrag ([[AV-Vertrag]] oder Art. 26), [[Drittland|Drittlandprüfung]], und bis zur Zustimmung blockiert. Verfolgt der Dienst eigene Zwecke, ist er <b>kein</b> Auftragsverarbeiter.' },

    { typ: 'nachricht', text: 'Das ist eine ordentliche Liste. Ich bringe sie in die Projektrunde – und rechne damit, dass wir erst mal ohne Retargeting starten.' }
  ]
});

/* ---------------------------------------------------------------
   mkt-05 – Die Consent-Rate
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mkt-05',
  kontakt: 'marketing',
  titel: 'Nur 30 Prozent sagen Ja',
  thema: 'Banner und Consent',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Der Shop läuft seit zwei Wochen. Das Banner ist jetzt korrekt – und genau 31 Prozent stimmen der Analyse zu. Die Agentur sagt, mit ein paar Kniffen kämen wir auf 80.' },
    { typ: 'nachricht', text: 'Sie hat drei Vorschläge mitgeschickt. Sag mir zu jedem, ob das geht.' },

    { typ: 'frage', text: '„Ablehnen" nur in blasser grauer Schrift, „Akzeptieren" als großer bunter Knopf.',
      optionen: [
        { text: 'Nicht zulässig – die Gestaltung verzerrt die Wahl und nimmt ihr die Freiwilligkeit', richtig: true,
          antwort: 'Richtig, ein klassisches [[Dark Pattern]]. Die Aufsichtsbehörden sehen genau darauf, und die Folge ist hart: Nicht nur das Banner ist mangelhaft – <b>alle</b> darüber eingeholten Einwilligungen sind unwirksam, auch die echten.' },
        { text: 'Zulässig, Farbe und Größe sind Designfragen',
          antwort: 'Design ist hier keine freie Entscheidung. Wenn es die Wahl lenkt, wird es zur Rechtsfrage – die Einwilligung muss freiwillig sein.' },
        { text: 'Zulässig, solange beide Knöpfe gleich groß sind',
          antwort: 'Gleich groß wären sie ja gerade nicht. Und zur Gleichwertigkeit gehört auch die <b>Farbwirkung</b>, nicht nur die Fläche.' }
      ] },

    { typ: 'frage', text: '„Das Banner erscheint auf jeder Seite wieder, bis jemand zustimmt."',
      optionen: [
        { text: 'Nicht zulässig – wiederholtes Fragen nach einer Ablehnung ist Druck', richtig: true,
          antwort: 'Richtig. Eine Ablehnung ist zu respektieren; sie wird genauso gespeichert wie eine Zustimmung. Wer weiterfragt, bis jemand nachgibt, erzeugt keine freiwillige Entscheidung – und die Kundin verlässt im Zweifel den Shop.' },
        { text: 'Zulässig, die Entscheidung darf man erneut anbieten',
          antwort: 'Nach längerer Zeit erneut zu fragen ist vertretbar – nach jedem Seitenaufruf ist es Nötigung.' },
        { text: 'Zulässig, weil ohne Zustimmung kein Cookie gespeichert werden darf',
          antwort: 'Umgekehrt: Das Cookie für die <b>Ablehnung</b> ist ein [[technisch notwendige Cookies|notwendiges Cookie]] und darf gesetzt werden. Es gibt also keinen technischen Grund, erneut zu fragen.' }
      ] },

    { typ: 'frage', text: '„Wer ablehnt, sieht den Shop nur in einer eingeschränkten Fassung."',
      optionen: [
        { text: 'Nicht zulässig – Nachteil bei Ablehnung verstößt gegen Freiwilligkeit und Kopplungsverbot', richtig: true, norm: 'Art. 7 Abs. 4 DSGVO',
          antwort: 'Richtig. Das ist eine [[Cookie-Wall]] in abgeschwächter Form, und sie scheitert am [[Kopplungsverbot]]: Der Zugang darf nicht von einer für den Dienst nicht erforderlichen Verarbeitung abhängen. Die Analyse ist für den Shop nicht erforderlich – das haben wir geprüft.' },
        { text: 'Zulässig, niemand hat ein Recht auf den vollen Shop',
          antwort: 'Dieses Argument trägt nicht. Maßstab ist, ob man <b>ohne Nachteil</b> ablehnen kann. Ein eingeschränkter Shop ist ein Nachteil.' },
        { text: 'Zulässig, wenn ein Bezahlzugang angeboten wird',
          antwort: 'Über solche Modelle wird diskutiert und sie werden von Behörden nur unter engen Bedingungen hingenommen – für Analyse-Cookies in einem Warenshop ist das kein tragfähiger Weg.' }
      ] },

    { typ: 'nachricht', text: 'Also alle drei weg. Dann sitze ich auf 31 Prozent. Was mache ich damit?' },

    { typ: 'frage', text: 'Was ist der sinnvolle Umgang mit einer Zustimmungsquote von 31 Prozent?',
      optionen: [
        { text: 'Die Quote erfassen und die gemessenen Zahlen hochrechnen – plus die einwilligungsfreien Quellen nutzen', richtig: true,
          antwort: 'Genau das ist die Antwort. Wenn du weißt, dass 31 Prozent gemessen werden, kennst du den Hochrechnungsfaktor für Trends. Dazu kommen die Bestelldaten aus dem Shopsystem und die Server-Logs – zusammen ergibt das eine belastbare Grundlage, und zwar eine rechtmäßige.' },
        { text: 'Die Daten der Ablehnenden schätzen und im Tool ergänzen',
          antwort: 'Hochrechnen auf Basis der Quote ist richtig. Daten über <b>einzelne</b> Ablehnende zu erzeugen wäre eine neue Verarbeitung – genau das, was sie abgelehnt haben.' },
        { text: 'Auf Analyse ganz verzichten, 31 Prozent sind wertlos',
          antwort: 'Zu pessimistisch. Für <b>Trends</b> und Vergleiche zwischen Produktseiten ist eine stabile Stichprobe von 31 Prozent brauchbar – solange man sie als Stichprobe behandelt.' }
      ] },

    { typ: 'frage', text: 'Marion fragt noch: „Gibt es eine Quote, die wir erreichen müssen?"',
      optionen: [
        { text: 'Nein – eine niedrige Quote ist kein Mangel, sondern ein Ergebnis', richtig: true,
          antwort: 'Richtig, und die Umkehrung ist wichtig: Eine <b>auffällig hohe</b> Quote ist für Aufsichtsbehörden ein Anlass, das Banner genauer anzusehen. 80 Prozent Zustimmung sind eher ein Hinweis auf [[Dark Pattern|Dark Patterns]] als ein Erfolg.' },
        { text: 'Ja, unter 50 Prozent muss das Banner nachgebessert werden',
          antwort: 'Eine solche Vorgabe gibt es nicht. Nachzubessern ist ein Banner, wenn es die rechtlichen Anforderungen verfehlt – nicht, wenn Menschen Nein sagen.' },
        { text: 'Ja, die Aufsichtsbehörde erwartet mindestens 30 Prozent',
          antwort: 'Es gibt keine behördliche Mindestquote. Die Behörde prüft die <b>Gestaltung</b>, nicht das Ergebnis.' }
      ] },

    { typ: 'merk', text: 'Eine niedrige Zustimmungsquote ist <b>kein Mangel</b> – eine auffällig hohe weckt Verdacht auf [[Dark Pattern|Dark Patterns]]. Ablehnung speichern und nicht erneut fragen, keine Nachteile für Ablehnende ([[Kopplungsverbot]]), und die gemessene Teilmenge als <b>Stichprobe</b> hochrechnen.' },

    { typ: 'nachricht', text: 'Gut. Dann schreibe ich in den Bericht „31 Prozent, rechtssicher erhoben" und nicht „80 Prozent, Herkunft unklar". Klingt am Ende sogar besser.' }
  ]
});
