/* ===========================================================
   AUDIT – data/dialoge-auditor.js
   Herr Lindemann, ISO-27001-Auditor (extern).
   Prueft nicht die Technik, sondern ob sie nachweisbar
   geregelt ist.

   Ton: Siezt dich, durchgehend foermlich und geduldig. Stellt
   immer dieselbe Frage in drei Varianten: Ist es geregelt?
   Wird es gelebt? Ist es belegt? Er wertet nicht, er stellt
   fest – und er fragt nach dem Dokument.

   Kernthemen: internes und externes Audit, ISMS und PDCA,
   Nachweise und Dokumentation, ISO 27001 und BSI
   IT-Grundschutz, Zertifizierung und Geltungsbereich.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   aud-01 – Ich pruefe nicht die Technik
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'aud-01',
  kontakt: 'auditor',
  titel: 'Ich prüfe nicht die Technik',
  thema: 'Audit – Grundlagen',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Guten Tag. Lindemann, ich führe für die Zertifizierungsstelle das Audit nach ISO 27001 durch. Vorab eine Klarstellung, die uns beiden Zeit spart.' },
    { typ: 'nachricht', text: 'Ihre Kollegin Frau Sarközi hat letzte Woche einen [[Penetrationstest]] gemacht. Ich mache etwas anderes. Beginnen wir damit, weil es regelmäßig verwechselt wird.' },

    { typ: 'frage', text: 'Was unterscheidet ein Audit von einem Penetrationstest?',
      optionen: [
        { text: 'Das Audit prüft, ob Sicherheit geregelt, umgesetzt und nachweisbar ist – der Pentest prüft, ob die Technik hält', richtig: true,
          antwort: 'Zutreffend. Mein Gegenstand ist das <b>Managementsystem</b>, nicht der einzelne Server. Ich frage in drei Schritten: Gibt es eine Vorgabe? Wird sie gelebt? Können Sie es <b>belegen</b>? Fehlt der dritte Schritt, hilft mir Ihre Technik nichts.' },
        { text: 'Das Audit wird intern durchgeführt, der Pentest extern',
          antwort: 'Beides gibt es in beiden Varianten. Es gibt das [[internes Audit|interne Audit]] und meines als [[externes Audit|externes]] – und einen Pentest kann ein eigenes Team durchführen. Der Unterschied liegt im <b>Prüfgegenstand</b>.' },
        { text: 'Das Audit ist gesetzlich vorgeschrieben, der Pentest freiwillig',
          antwort: 'Eine Zertifizierung nach [[ISO/IEC 27001]] ist grundsätzlich freiwillig – sie wird meist von Kunden oder Auftraggebern verlangt, nicht vom Gesetz. Für beide ist die Rechtspflicht nicht das Trennmerkmal.' }
      ] },

    { typ: 'nachricht', text: 'Nun die Unterscheidung, die Sie in jeder Prüfung brauchen: Wer prüft wen. Es gibt drei Konstellationen.' },

    { typ: 'frage', text: 'Ihre eigene IT-Abteilung prüft die Einhaltung der Zugriffsregeln im Lager. Was ist das?',
      optionen: [
        { text: 'Ein internes Audit – vom Unternehmen selbst veranlasst und durchgeführt', richtig: true, norm: 'ISO/IEC 27001 Abschnitt 9.2',
          antwort: 'Richtig. Das [[internes Audit|interne Audit]] ist nach Abschnitt 9.2 <b>Pflicht</b> in geplanten Abständen – es führt aber zu keinem Zertifikat. Entscheidend ist die <b>Unabhängigkeit vom geprüften Bereich</b>: Wer die Zugriffsrechte vergibt, darf sie nicht selbst prüfen.' },
        { text: 'Ein externes Audit, weil die IT eine andere Abteilung ist als das Lager',
          antwort: 'Beide Abteilungen gehören zum gleichen Unternehmen – das macht es intern. Extern heißt: eine Stelle <b>von außerhalb</b> des Unternehmens.' },
        { text: 'Gar kein Audit, sondern eine Kontrolle',
          antwort: 'Es ist ein Audit, sofern es systematisch, dokumentiert und gegen festgelegte Kriterien erfolgt. Genau diese drei Merkmale machen den Unterschied zur beiläufigen Kontrolle.' }
      ] },

    { typ: 'frage', text: 'Ein Großkunde von Rampe 7 kommt und lässt sich die Sicherheitsmaßnahmen zeigen. Was ist das?',
      optionen: [
        { text: 'Ein externes Audit als Zweitparteien-Audit – der Kunde prüft seinen Lieferanten, ohne zertifizieren zu können', richtig: true,
          antwort: 'Zutreffend. Das ist ein [[externes Audit|Zweitparteien-Audit]]. Es ist ein vollwertiges Audit, führt aber zu keinem Zertifikat – zertifizieren darf nur eine <b>akkreditierte dritte Partei</b>. Rechtlich steckt das oft in einem [[AV-Vertrag]]: Art. 28 DSGVO gibt dem [[Verantwortlicher|Verantwortlichen]] ein Kontrollrecht beim [[Auftragsverarbeiter]].' },
        { text: 'Ein Zertifizierungsaudit',
          antwort: 'Das [[Zertifizierungsaudit]] führt eine akkreditierte Stelle durch – ein Kunde kann kein Zertifikat ausstellen, auch wenn er genauso gründlich prüft.' },
        { text: 'Ein internes Audit, weil es im eigenen Haus stattfindet',
          antwort: 'Der <b>Ort</b> entscheidet nicht, sondern wer prüft. Hier prüft eine Stelle von außerhalb des Unternehmens – also extern.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört zur Definition eines Audits? (mehrere)',
      optionen: [
        { text: 'Systematisch – nach einem Plan, nicht beiläufig', richtig: true },
        { text: 'Unabhängig – der Prüfer prüft nicht seinen eigenen Bereich', richtig: true },
        { text: 'Dokumentiert – Plan, Durchführung und Ergebnis sind festgehalten', richtig: true },
        { text: 'Gegen festgelegte Kriterien – Norm, eigene Richtlinien, Verträge, Gesetze', richtig: true },
        { text: 'Unangekündigt, damit niemand etwas vorbereiten kann' },
        { text: 'Durch eine Behörde' }
      ],
      antwortRichtig: 'Vollständig. Ein Audit kommt gerade <b>nicht</b> überraschend: Sie bekommen vorher den [[Auditplan]], damit die richtigen Personen und Unterlagen bereitstehen. Die [[Auditnachweis|Nachweise]] soll man vorzeigen können, nicht in der Nacht davor beschaffen. Und ich bin keine Behörde, sondern von einer akkreditierten Stelle beauftragt.',
      antwortFalsch: 'Zwei Optionen beschreiben eine behördliche Kontrolle, nicht ein Audit. Die vier Merkmale lauten: systematisch, unabhängig, dokumentiert, gegen festgelegte Kriterien.' },

    { typ: 'merk', text: '<b>[[Audit]] = systematisch, unabhängig, dokumentiert, gegen festgelegte Kriterien.</b> Dreiklang jeder Frage: <b>geregelt – umgesetzt – nachgewiesen.</b> [[internes Audit|Intern]] ist Pflicht ohne Zertifikat, [[externes Audit|extern]] gibt es als Kundenaudit (zweite Partei) und als Zertifizierungsaudit (akkreditierte dritte Partei).' },

    { typ: 'nachricht', text: 'Beim nächsten Termin sehen wir uns an, was ich überhaupt prüfe: Ihr Managementsystem. Bitte halten Sie die Sicherheitsleitlinie bereit.' }
  ]
});

/* ---------------------------------------------------------------
   aud-02 – Sicherheit als Kreislauf
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'aud-02',
  kontakt: 'auditor',
  titel: 'Sicherheit als Kreislauf',
  thema: 'ISMS und PDCA',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe Ihre Unterlagen gesichtet. Es gibt eine Firewall, Backups, Virenschutz und eine Berechtigungsliste. Das ist alles vorhanden – und trotzdem ist es noch kein [[ISMS]].' },
    { typ: 'nachricht', text: 'Der Unterschied ist der, der in der Prüfung gefragt wird.' },

    { typ: 'frage', text: 'Was macht aus einer Sammlung von Maßnahmen ein ISMS?',
      optionen: [
        { text: 'Leitlinien, Rollen und Prozesse, mit denen Sicherheit systematisch geplant, umgesetzt, überprüft und verbessert wird', richtig: true, norm: 'ISO/IEC 27001, BSI-Standard 200-1',
          antwort: 'Zutreffend. Ein [[ISMS]] ist ein <b>Managementsystem</b>, kein Maßnahmenkatalog. Entscheidend sind die Fragen: Wer ist zuständig? Nach welchem Verfahren wird entschieden? Wann wird nachgesehen, ob es noch passt? Deshalb der Satz: Sicherheit ist kein Zustand, sondern ein Prozess.' },
        { text: 'Eine vollständige Liste aller eingesetzten Sicherheitsprodukte',
          antwort: 'Produkte sind Werkzeuge. Eine Liste davon sagt nichts darüber, wer entscheidet, nach welchen Kriterien und wie überprüft wird – genau das prüfe ich.' },
        { text: 'Ein Zertifikat nach ISO 27001',
          antwort: 'Das Zertifikat ist die <b>Bestätigung</b>, dass ein ISMS vorhanden und wirksam ist – nicht das System selbst. Man kann ein funktionierendes ISMS ohne Zertifikat betreiben.' }
      ] },

    { typ: 'nachricht', text: 'Das Verbesserungsprinzip dahinter hat vier Buchstaben, und Sie sollten die Phasen benennen können.' },

    { typ: 'frage', text: 'Wofür steht PDCA – und in welcher Reihenfolge?', mischen: false,
      optionen: [
        { text: 'Plan – Do – Check – Act: planen, umsetzen, überprüfen, anpassen', richtig: true,
          antwort: 'Richtig. Der [[PDCA]]-Zyklus ist das Rückgrat jedes Managementsystems. <b>Plan</b>: Risiken bewerten, Maßnahmen festlegen. <b>Do</b>: umsetzen und schulen. <b>Check</b>: [[internes Audit|internes Audit]], Kennzahlen, Vorfälle auswerten. <b>Act</b>: [[Korrekturmaßnahme|Korrekturmaßnahmen]] und Nachschärfen – dann beginnt der Kreis neu.' },
        { text: 'Prüfen – Dokumentieren – Controlling – Abschließen',
          antwort: 'Die Begriffe klingen plausibel, sind aber frei erfunden. PDCA ist englisch und steht für Plan, Do, Check, Act – auch als Deming-Kreis bezeichnet.' },
        { text: 'Planen – Dokumentieren – Checken – Archivieren',
          antwort: 'Das wäre ein Kreis, der mit dem Ablegen endet. Entscheidend ist aber das <b>Act</b>: Aus der Überprüfung folgt eine Änderung, sonst dreht sich nichts.' }
      ] },

    { typ: 'frage', text: 'In welche PDCA-Phase gehört das interne Audit?',
      optionen: [
        { text: 'Check – es überprüft, ob die geplanten Maßnahmen wirken', richtig: true,
          antwort: 'Zutreffend. Das [[internes Audit|interne Audit]] ist das wichtigste Werkzeug der Check-Phase, zusammen mit Kennzahlen und der Auswertung von Vorfällen. Was daraus folgt – Korrekturmaßnahmen und angepasste Vorgaben – gehört in die Act-Phase.' },
        { text: 'Act – daraus folgen ja die Maßnahmen',
          antwort: 'Die <b>Folgen</b> gehören in Act, das Audit selbst ist die Überprüfung und damit Check. Die Trennung wird gern abgefragt: prüfen gegen reagieren.' },
        { text: 'Plan – es legt fest, was geprüft wird',
          antwort: 'Der [[Auditplan]] wird geplant, das Audit selbst aber durchgeführt, um zu prüfen. Es misst den Ist-Zustand gegen das Soll.' }
      ] },

    { typ: 'nachricht', text: 'Nun zum Dokument, nach dem ich in jedem Audit zuerst frage. Ohne es fehlt dem gesamten System die Grundlage.' },

    { typ: 'frage', text: 'Welches Dokument steht an der Spitze des ISMS?',
      optionen: [
        { text: 'Die Informationssicherheitsleitlinie, erlassen und unterschrieben von der Leitung', richtig: true, norm: 'ISO/IEC 27001 Abschnitt 5.2',
          antwort: 'Richtig. Die [[Informationssicherheitsleitlinie]] erklärt Ziele und Verbindlichkeit der Informationssicherheit – und sie muss von der <b>Leitung</b> kommen. Darunter hängen die einzelnen Richtlinien. Fehlt die Unterschrift, fehlt dem ganzen ISMS die Legitimation, und das ist regelmäßig eine [[Nichtkonformität|Hauptabweichung]].' },
        { text: 'Das Verzeichnis von Verarbeitungstätigkeiten',
          antwort: 'Das ist ein Dokument des <b>Datenschutzrechts</b> nach Art. 30 DSGVO. Für das ISMS ist es ein hilfreicher Baustein, aber nicht das oberste Dokument.' },
        { text: 'Das Notfallkonzept',
          antwort: 'Das [[Notfallkonzept]] ist eine wichtige Einzelregelung – es steht aber <b>unter</b> der Leitlinie, nicht über ihr.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Aufgaben kann die Leitung beim ISMS nicht delegieren? (mehrere)',
      optionen: [
        { text: 'Die Verabschiedung der Sicherheitsleitlinie', richtig: true },
        { text: 'Die Bereitstellung der nötigen Mittel – Geld, Personal, Zeit', richtig: true },
        { text: 'Die Gesamtverantwortung für die Informationssicherheit', richtig: true },
        { text: 'Die technische Umsetzung der Maßnahmen' },
        { text: 'Die Durchführung des internen Audits' }
      ],
      antwortRichtig: 'Vollständig. Umsetzung und Audit werden gerade delegiert – an die IT und an den [[IT-Sicherheitsbeauftragter|ISB]] beziehungsweise an unabhängige interne Auditoren. Was bei der Leitung bleibt, ist die <b>Verantwortung</b>, das Bekenntnis und das Budget. Ein ISMS ohne Mittel ist eine Absichtserklärung.',
      antwortFalsch: 'Trennen Sie <b>Verantwortung</b> von <b>Ausführung</b>. Zwei der genannten Aufgaben werden üblicherweise und zulässig delegiert.' },

    { typ: 'merk', text: '<b>[[ISMS]] = Leitlinien + Rollen + Prozesse + Maßnahmen</b>, gesteuert über [[PDCA]]: <b>Plan</b> (Risiken, Maßnahmen) – <b>Do</b> (umsetzen, schulen) – <b>Check</b> ([[internes Audit]], Kennzahlen) – <b>Act</b> ([[Korrekturmaßnahme|Korrekturmaßnahmen]]). An der Spitze die von der Leitung unterschriebene [[Informationssicherheitsleitlinie]]. Sicherheit ist kein Zustand, sondern ein Prozess.' },

    { typ: 'nachricht', text: 'Morgen gehen wir in die Einzelprüfung. Ich warne Sie vor: Ich werde dreimal nach demselben Dokument fragen.' }
  ]
});

/* ---------------------------------------------------------------
   aud-03 – Zeigen Sie mir das Dokument
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'aud-03',
  kontakt: 'auditor',
  titel: 'Zeigen Sie mir das Dokument',
  thema: 'Nachweise',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Erste Frage aus meiner Liste: Werden die Zugriffsberechtigungen regelmäßig überprüft? Ihr Kollege sagt: „Ja, machen wir immer, wenn jemand geht."' },

    { typ: 'frage', text: 'Reicht mir diese Antwort?',
      optionen: [
        { text: 'Nein – eine Aussage im Gespräch ist kein Nachweis. Ich brauche die Regelung und den Beleg der letzten Durchführung', richtig: true,
          antwort: 'Zutreffend. Ich brauche drei Dinge: die <b>Vorgabe</b> (wie oft, von wem, nach welchem Verfahren), den <b>Beleg</b> der letzten Durchführung mit Datum und Unterschrift, und eine <b>Stichprobe</b>, in der ich es nachvollziehe. Ein [[Auditnachweis]] ist etwas, das ich sehen kann.' },
        { text: 'Ja, wenn mehrere Mitarbeiter es unabhängig bestätigen',
          antwort: 'Drei gleichlautende Aussagen bleiben drei Aussagen. Sie belegen vielleicht eine Gewohnheit, aber keine geregelte und überprüfbare Praxis.' },
        { text: 'Ja, wenn die Berechtigungen bei der Stichprobe stimmen',
          antwort: 'Dann wäre der Zustand in Ordnung und der <b>Prozess</b> ungeprüft. Beim nächsten Mal könnte es zufällig anders aussehen – deshalb prüfe ich die Regelung mit.' }
      ] },

    { typ: 'nachricht', text: 'Ergebnis der Stichprobe: Von vierzig Berechtigungen waren zwei nicht fristgerecht überprüft. Die Regelung existiert und wird im Übrigen eingehalten.' },

    { typ: 'frage', text: 'Wie bewerte ich diesen Befund?',
      optionen: [
        { text: 'Als Nebenabweichung – ein Einzelfall mit Frist zur Behebung', richtig: true,
          antwort: 'Richtig. Eine [[Nichtkonformität|Nebenabweichung]] (Minor) ist ein Einzelfall in einem ansonsten funktionierenden Prozess. Sie wird mit Frist behoben und hindert das Zertifikat nicht. Wäre <b>gar keine</b> Überprüfung eingerichtet, wäre es eine Hauptabweichung – dann steht die Wirksamkeit des Systems in Frage.' },
        { text: 'Als Hauptabweichung – Berechtigungen sind sicherheitskritisch',
          antwort: 'Die Bedeutung des Themas entscheidet nicht allein. Maßstab ist, ob der Befund <b>systematisch</b> ist: Zwei von vierzig in einem gelebten Prozess ist ein Einzelfall, kein Systemversagen.' },
        { text: 'Als Verbesserungspotenzial ohne Pflicht zur Behebung',
          antwort: 'Ein Hinweis ohne Pflicht wäre es, wenn die Anforderung <b>erfüllt</b> und nur besser machbar wäre. Hier ist sie in zwei Fällen nicht erfüllt – also eine Abweichung.' }
      ] },

    { typ: 'nachricht', text: 'Sie legen mir nun einen Maßnahmenplan vor. Darin steht: „Die beiden Berechtigungen wurden am Montag überprüft."' },

    { typ: 'frage', text: 'Genügt das als Korrekturmaßnahme?',
      optionen: [
        { text: 'Nein – das ist die Korrektur des Einzelfalls. Die Korrekturmaßnahme muss die Ursache beseitigen', richtig: true,
          antwort: 'Zutreffend, und das ist die wichtigste Unterscheidung in diesem Themenkreis. Die <b>Korrektur</b> heilt den Fall, die [[Korrekturmaßnahme]] heilt den <b>Prozess</b>. Ich erwarte also eine Ursachenanalyse – warum sind genau diese beiden durchgefallen? – und eine Änderung, die das verhindert, etwa einen Pflichtschritt im Ticketsystem.' },
        { text: 'Ja, die Abweichung ist damit behoben',
          antwort: 'Der Zustand ist behoben, die Ursache nicht. Beim nächsten Audit hätte ich mit hoher Wahrscheinlichkeit zwei andere Fälle – damit wäre aus dem Einzelfall ein <b>Muster</b> geworden.' },
        { text: 'Ja, wenn die Geschäftsführung es unterschreibt',
          antwort: 'Eine Unterschrift macht aus einer Korrektur keine Korrekturmaßnahme. Verlangt sind Ursachenanalyse, Maßnahme und ein Wirksamkeitsnachweis.' }
      ] },

    { typ: 'mehrfach', text: 'Was zählt als Auditnachweis? (mehrere)',
      optionen: [
        { text: 'Ein unterschriebenes Freigabeprotokoll mit Datum', richtig: true },
        { text: 'Teilnahmelisten der Sicherheitsschulung', richtig: true },
        { text: 'Tickets mit nachvollziehbarem Verlauf und Abschluss', richtig: true },
        { text: 'Der Bericht des Penetrationstests samt Maßnahmenplan', richtig: true },
        { text: 'Die mündliche Zusicherung des Abteilungsleiters' },
        { text: 'Ein Screenshot ohne Datum und ohne Angabe des Systems' }
      ],
      antwortRichtig: 'Vollständig. Ein Nachweis muss <b>nachvollziehbar</b> sein: Wer, wann, auf welchem System, mit welchem Ergebnis. Ein Bild ohne Zeitpunkt und Zuordnung leistet das nicht, eine Zusicherung ebenso wenig. Übrigens ist der [[Pentest-Bericht]] für mich ein hervorragender Nachweis – aber nur zusammen mit dem Beleg, dass die Maßnahmen umgesetzt und im [[Nachtest]] überprüft wurden.',
      antwortFalsch: 'Prüfen Sie jede Zeile mit der Frage: Kann ein Dritter daraus <b>ohne Rückfrage</b> erkennen, wer wann was getan hat? Zwei Optionen erfüllen das nicht.' },

    { typ: 'frage', text: 'Ihr Kollege fragt mich, warum ich nicht einfach die Firewall-Konfiguration anschaue, statt nach Papier zu fragen.',
      optionen: [
        { text: 'Weil eine richtige Konfiguration heute nichts darüber sagt, ob sie morgen noch stimmt – dafür braucht es einen Prozess', richtig: true,
          antwort: 'Genau das ist die Begründung. Eine Momentaufnahme kann auch Zufall sein. Der Nachweis zeigt mir, dass jemand <b>zuständig</b> ist, dass nach einem Verfahren geändert wird und dass Änderungen überprüft werden. Darum geht es im Audit – die Technik prüft Frau Sarközi.' },
        { text: 'Weil ich die Konfiguration fachlich nicht beurteilen kann',
          antwort: 'Das ist nicht der Grund – ein Auditor darf und soll in Stichproben technisch nachsehen. Nur ist der <b>Prozess</b> der Gegenstand, nicht die einzelne Einstellung.' },
        { text: 'Weil die Norm Dokumente über alles stellt',
          antwort: 'Die Norm verlangt Nachweise, aber nicht Papier um seiner selbst willen. Die Begründung ist die <b>Wiederholbarkeit</b>: Nur ein geregelter Vorgang bleibt auch nach Personalwechsel bestehen.' }
      ] },

    { typ: 'merk', text: '<b>[[Auditnachweis]]: geregelt – umgesetzt – nachgewiesen.</b> Eine Aussage ist kein Nachweis. <b>[[Nichtkonformität]]:</b> systematisch = Hauptabweichung (Zertifikat blockiert), Einzelfall = Nebenabweichung (Frist). <b>Korrektur</b> heilt den Fall, <b>[[Korrekturmaßnahme]]</b> heilt die Ursache.' },

    { typ: 'nachricht', text: 'Morgen die Frage Ihrer Geschäftsführung: ISO 27001 oder BSI IT-Grundschutz. Beide führen zum Ziel, auf verschiedenen Wegen.' }
  ]
});

/* ---------------------------------------------------------------
   aud-04 – ISO 27001 oder IT-Grundschutz
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'aud-04',
  kontakt: 'auditor',
  titel: 'ISO 27001 oder IT-Grundschutz?',
  thema: 'Normen und Standards',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Frau Hagedorn hat gefragt, ob Rampe 7 nicht besser den [[BSI IT-Grundschutz]] nimmt – ein Partner aus der öffentlichen Verwaltung hätte das empfohlen. Eine berechtigte Frage.' },

    { typ: 'frage', text: 'Wie verhalten sich ISO 27001 und BSI IT-Grundschutz zueinander?',
      optionen: [
        { text: 'Dieselbe Zielsetzung: Die ISO gibt Anforderungen an das Managementsystem vor, der IT-Grundschutz einen konkreten Weg mit fertigen Bausteinen', richtig: true,
          antwort: 'Zutreffend. [[ISO/IEC 27001]] sagt im Wesentlichen <b>was</b> erreicht werden muss und lässt den Weg offen. Der [[BSI IT-Grundschutz]] liefert mit den Standards 200-1 bis 200-4 ein ausgearbeitetes <b>Wie</b> samt Bausteinkatalog. Man kann nach IT-Grundschutz arbeiten und sich dabei nach ISO 27001 zertifizieren lassen.' },
        { text: 'Konkurrierende Normen – man muss sich für eine entscheiden',
          antwort: 'Sie schließen sich nicht aus. Das BSI bietet sogar ausdrücklich eine ISO-27001-Zertifizierung <b>auf Basis von IT-Grundschutz</b> an.' },
        { text: 'Der IT-Grundschutz gilt nur für Behörden, die ISO nur für Unternehmen',
          antwort: 'Der IT-Grundschutz stammt aus dem Behördenumfeld und ist dort verbreitet – anwenden darf ihn jeder. Umgekehrt ist die ISO auch im öffentlichen Bereich anerkannt.' }
      ] },

    { typ: 'nachricht', text: 'Der praktische Unterschied liegt im Vorgehen bei der Risikobetrachtung. Das ist das Argument, das in Ihrem Fall zählt.' },

    { typ: 'frage', text: 'Was ist der Vorteil des IT-Grundschutz-Vorgehens für ein Unternehmen Ihrer Größe?',
      optionen: [
        { text: 'Fertige Bausteine mit Standardmaßnahmen – man muss nicht für jedes System eine eigene Risikoanalyse führen', richtig: true,
          antwort: 'Richtig. Der [[IT-Grundschutz-Check]] arbeitet mit Bausteinen: Strukturanalyse, [[Schutzbedarf|Schutzbedarfsfeststellung]], Modellierung, dann der Soll-Ist-Vergleich je Anforderung. Bei normalem Schutzbedarf ersetzt das die freie Risikoanalyse – eine erhebliche Entlastung für ein Haus ohne eigene Sicherheitsabteilung.' },
        { text: 'Es ist billiger, weil keine Zertifizierung nötig ist',
          antwort: 'Zertifizieren lassen kann man sich auch auf Basis IT-Grundschutz – die Kosten der Prüfung bleiben. Der Vorteil liegt im geringeren <b>Eigenaufwand</b> bei der Analyse.' },
        { text: 'Er verlangt keine Dokumentation',
          antwort: 'Im Gegenteil: Der IT-Grundschutz ist in der Dokumentation eher gründlicher, weil die Bausteine je Anforderung einen Umsetzungsstand verlangen.' }
      ] },

    { typ: 'nachricht', text: 'Nun zum Maßnahmenkatalog der ISO. Er steht im Anhang A, und dort entsteht der häufigste Irrtum.' },

    { typ: 'frage', text: 'Muss ein Unternehmen alle Maßnahmen aus Anhang A umsetzen?',
      optionen: [
        { text: 'Nein – es muss je Maßnahme begründen, ob sie angewendet wird. Das steht in der Erklärung zur Anwendbarkeit', richtig: true, norm: 'ISO/IEC 27001 Abschnitt 6.1.3 d)',
          antwort: 'Zutreffend. Der [[Anhang A der ISO 27001|Anhang A]] ist eine Referenzliste – in der Fassung 2022 sind es 93 Maßnahmen in vier Themenblöcken. Ausschließen darf man sie, aber nicht stillschweigend: Die [[Erklärung zur Anwendbarkeit]] nennt je Maßnahme die Entscheidung <b>mit Begründung</b>. Sie ist das zentrale Dokument im Zertifizierungsaudit.' },
        { text: 'Ja, alle 93 Maßnahmen sind verpflichtend',
          antwort: 'Dann müsste ein Logistiker Maßnahmen zur Softwareentwicklung umsetzen, die er nie betreibt. Der Anhang ist eine Referenz – entscheidend ist die begründete Auswahl.' },
        { text: 'Nein, der Anhang ist nur eine Empfehlung ohne weitere Pflichten',
          antwort: 'Die Maßnahmen sind nicht pauschal verbindlich, die <b>Begründungspflicht</b> aber schon. Ohne Erklärung zur Anwendbarkeit kein Zertifikat.' }
      ] },

    { typ: 'frage', text: 'Und wie unterscheiden sich ISO 27001 und ISO 27002?',
      optionen: [
        { text: '27001 enthält die Anforderungen und ist zertifizierbar, 27002 erläutert die Maßnahmen', richtig: true,
          antwort: 'Richtig, eine beliebte Verwechslung. Zertifiziert wird <b>ausschließlich</b> nach [[ISO/IEC 27001]]. Die [[ISO/IEC 27002]] ist der Leitfaden, der jede Maßnahme des Anhangs A ausführlich beschreibt – hilfreich bei der Umsetzung, aber keine Zertifizierungsgrundlage.' },
        { text: '27001 gilt für Großunternehmen, 27002 für kleine Betriebe',
          antwort: 'Beide sind größenunabhängig. Die Unterscheidung ist <b>Anforderung gegen Erläuterung</b>, nicht Betriebsgröße.' },
        { text: '27002 ist die neuere Fassung von 27001',
          antwort: 'Nein, es sind zwei parallele Normen derselben Reihe. Fassungen erkennt man am Jahr, etwa ISO/IEC 27001:2022.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Dokumente verlangt die ISO 27001 ausdrücklich? (mehrere)',
      optionen: [
        { text: 'Die Informationssicherheitsleitlinie', richtig: true },
        { text: 'Den Geltungsbereich des ISMS', richtig: true },
        { text: 'Die Erklärung zur Anwendbarkeit', richtig: true },
        { text: 'Die Ergebnisse der internen Audits', richtig: true },
        { text: 'Den Quelltext der eingesetzten Software' },
        { text: 'Die Berichte aller Penetrationstests' }
      ],
      antwortRichtig: 'Vollständig. Quelltext verlangt die Norm nie, und ein [[Penetrationstest]] ist nicht vorgeschrieben – er ist eine <b>mögliche</b> Maßnahme zur Überprüfung der technischen Sicherheit. Wenn Sie einen durchführen, wird sein Bericht aber zu einem Nachweis, nach dem ich frage.',
      antwortFalsch: 'Trennen Sie, was die Norm <b>verlangt</b>, von dem, was sie als Maßnahme nahelegt. Zwei Optionen werden von der ISO 27001 nirgends gefordert.' },

    { typ: 'merk', text: '<b>[[ISO/IEC 27001]]:</b> Anforderungen an das [[ISMS]], zertifizierbar. <b>[[ISO/IEC 27002]]:</b> Erläuterung der Maßnahmen, nicht zertifizierbar. <b>[[BSI IT-Grundschutz]]:</b> konkreter Weg mit Bausteinen (Standards 200-1 bis 200-4), kombinierbar mit der ISO. <b>[[Anhang A der ISO 27001|Anhang A]]:</b> 93 Maßnahmen – Auswahl erlaubt, Begründung Pflicht ([[Erklärung zur Anwendbarkeit]]).' },

    { typ: 'nachricht', text: 'Letzter Termin: was auf dem Zertifikat steht – und was nicht darauf steht.' }
  ]
});

/* ---------------------------------------------------------------
   aud-05 – Was auf dem Zertifikat steht
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'aud-05',
  kontakt: 'auditor',
  titel: 'Was auf dem Zertifikat steht',
  thema: 'Zertifizierung',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Zum Abschluss der Ablauf der Zertifizierung – und eine Übung, die Sie im Berufsleben häufiger brauchen werden als die Prüfungsfrage.' },

    { typ: 'frage', text: 'Wie läuft ein Zertifizierungsaudit ab?', mischen: false,
      optionen: [
        { text: 'Stufe 1 prüft die Dokumentation und die Audit-Reife, Stufe 2 vor Ort die tatsächliche Umsetzung', richtig: true,
          antwort: 'Richtig. Das [[Zertifizierungsaudit]] ist zweistufig: Erst sehe ich, ob überhaupt ein [[ISMS]] dokumentiert ist – sonst wäre Stufe 2 Zeitverschwendung. Dann prüfe ich vor Ort, ob es gelebt wird. Das Zertifikat gilt anschließend drei Jahre.' },
        { text: 'Erst vor Ort, dann wird die Dokumentation nachgereicht',
          antwort: 'Dann prüfte ich die Umsetzung von Vorgaben, die ich noch nicht kenne. Die Dokumentenprüfung steht deshalb vorn – sie liefert den Maßstab.' },
        { text: 'In einem einzigen Termin mit Stichproben',
          antwort: 'Für kleine Geltungsbereiche liegen die Stufen zeitlich manchmal dicht beieinander, es bleiben aber zwei Stufen mit zwei Ergebnissen.' }
      ] },

    { typ: 'frage', text: 'Das Zertifikat gilt drei Jahre. Was passiert in dieser Zeit?',
      optionen: [
        { text: 'Jährlich ein Überwachungsaudit mit Stichproben, im dritten Jahr die Re-Zertifizierung über den vollen Umfang', richtig: true,
          antwort: 'Zutreffend. Deshalb ist ein [[ISMS]] ein Dauerlauf: Das [[Überwachungsaudit]] prüft jedes Jahr, ob das System noch wirksam ist. Wird es ausgelassen, ruht oder entfällt das Zertifikat – es läuft nicht einfach drei Jahre durch.' },
        { text: 'Nichts – das Zertifikat gilt bis zum Ablauf',
          antwort: 'Das ist der häufigste Irrtum. Ohne Überwachungsaudits verliert das Zertifikat seine Gültigkeit vor dem Ablaufdatum.' },
        { text: 'Monatliche Berichte an die Zertifizierungsstelle',
          antwort: 'Monatliche Berichte verlangt niemand. Vorgesehen sind die jährlichen Audits – und die unverzügliche Mitteilung wesentlicher Änderungen, etwa am [[ISMS-Geltungsbereich|Geltungsbereich]].' }
      ] },

    { typ: 'nachricht', text: 'Nun die Übung. Rampe 7 beauftragt einen Cloud-Dienstleister. Der legt ein ISO-27001-Zertifikat vor. Im Feld „Geltungsbereich" steht: „Rechenzentrumsbetrieb Standort Frankfurt".' },

    { typ: 'frage', text: 'Was sagt dieses Zertifikat über die Software aus, die der Dienstleister für Sie entwickelt?',
      optionen: [
        { text: 'Nichts – der Geltungsbereich umfasst nur den Rechenzentrumsbetrieb in Frankfurt', richtig: true, norm: 'ISO/IEC 27001 Abschnitt 4.3',
          antwort: 'Genau. Deshalb lese ich bei jedem fremden Zertifikat zuerst den [[ISMS-Geltungsbereich|Geltungsbereich]] und erst dann die Urkunde. Entwicklung, Support und andere Standorte können vollständig außerhalb liegen. Das ist im [[AV-Vertrag]] zu berücksichtigen – ein Zertifikat ersetzt die eigene Prüfung des Auftragsverarbeiters nicht.' },
        { text: 'Dass das Unternehmen insgesamt zertifiziert ist',
          antwort: 'Zertifiziert wird immer ein <b>abgegrenzter</b> Bereich, nie „das Unternehmen". Genau deshalb steht der Geltungsbereich auf der Urkunde.' },
        { text: 'Dass die Software sicher entwickelt wurde',
          antwort: 'Eine Aussage über sichere Entwicklung wäre nur möglich, wenn die Entwicklung im Geltungsbereich läge. Hier liegt sie es nicht.' }
      ] },

    { typ: 'mehrfach', text: 'Was sagt ein ISO-27001-Zertifikat aus – und was nicht? (mehrere)',
      optionen: [
        { text: 'Dass im genannten Geltungsbereich ein wirksames ISMS vorhanden ist', richtig: true },
        { text: 'Dass eine unabhängige akkreditierte Stelle das zu einem Zeitpunkt geprüft hat', richtig: true },
        { text: 'Dass es nur mit jährlichen Überwachungsaudits gültig bleibt', richtig: true },
        { text: 'Dass dem Unternehmen kein Sicherheitsvorfall passieren kann' },
        { text: 'Dass alle eingesetzten Systeme technisch fehlerfrei sind' }
      ],
      antwortRichtig: 'Vollständig. Die beiden letzten sind die Versprechen, die ein Zertifikat <b>nicht</b> gibt. Es bescheinigt ein funktionierendes Managementsystem, keine Unverwundbarkeit – ein zertifiziertes Unternehmen kann morgen eine [[Zero-Day]]-Lücke treffen. Der Unterschied ist genau der zwischen [[Audit]] und [[Penetrationstest]].',
      antwortFalsch: 'Fragen Sie bei jeder Aussage: Betrifft sie das <b>Managementsystem</b> oder die technische Sicherheit? Zwei Optionen versprechen das Zweite.' },

    { typ: 'merk', text: '<b>[[Zertifizierung]]:</b> Stufe 1 (Dokumente) → Stufe 2 (vor Ort) → Zertifikat für <b>drei Jahre</b>, gehalten durch jährliche [[Überwachungsaudit]]s, im dritten Jahr Re-Zertifizierung. Bei fremden Zertifikaten <b>zuerst den [[ISMS-Geltungsbereich|Geltungsbereich]] lesen</b>. Ein Zertifikat bescheinigt das Managementsystem, nicht die Unverwundbarkeit.' },

    { typ: 'nachricht', text: 'Damit bin ich durch. Mein [[Auditbericht]] geht mit zwei Nebenabweichungen und drei Hinweisen an die Geschäftsführung. Das ist ein gutes Ergebnis für ein erstes Audit.' }
  ]
});
