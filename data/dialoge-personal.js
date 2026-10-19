/* ===========================================================
   AUDIT – data/dialoge-personal.js
   Frau Gruenwald, Personalleitung.
   Hat 300 Bewerbungen auf dem Tisch und ein Werkzeug, das
   vorsortieren soll.

   Ton: Siezt durchgehend, sachlich und knapp. Fragt nicht,
   ob etwas praktisch ist, sondern ob sie es <darf> – und
   besteht darauf, die Begruendung selbst formulieren zu
   koennen, weil sie sie im Zweifel vor dem Betriebsrat und
   vor abgelehnten Bewerbenden vertreten muss.

   Kernthemen: Hochrisiko in der Bewerberauswahl, Art. 22
   DSGVO und die Grenze der menschlichen Aufsicht, Bias aus
   Altdaten und das AGG, Information und Mitbestimmung,
   Auskunft und Loeschung nach der Absage.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   per-01 – 300 Bewerbungen und ein Werkzeug
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'per-01',
  kontakt: 'personal',
  titel: '300 Bewerbungen und ein Werkzeug',
  thema: 'Hochrisiko im Personalbereich',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Guten Tag. Grünwald, Personalleitung. Wir haben zwei Stellen in der Disposition ausgeschrieben und 300 Bewerbungen erhalten. Zu zweit schaffen wir das in drei Wochen nicht, und gute Leute sind bis dahin weg.' },
    { typ: 'nachricht', text: 'Mir wurde eine Software angeboten, die aus den Unterlagen eine Rangfolge erstellt. Ich lese die ersten fünfzig und entscheide selbst. Ich möchte von Ihnen nicht hören, dass das praktisch ist – das weiß ich. Ich möchte wissen, ob ich es darf.' },

    { typ: 'frage', text: 'Wie ordnet die KI-Verordnung diesen Einsatz ein?',
      optionen: [
        { text: 'Als Hochrisiko-System – Auswahl von Bewerbenden steht in Anhang III', richtig: true, norm: 'Anhang III Nr. 4 KI-VO',
          antwort: 'Richtig. [[Anhang III]] Nummer 4 erfasst Einstellung und Auswahl. Erlaubt ist es damit – aber mit einem Pflichtenprogramm. Die Pflichten der KI-Verordnung greifen erst ab dem 2. Dezember 2027; das Datenschutz- und Arbeitsrecht gilt vollständig schon heute.' },
        { text: 'Als verbotene Praktik, weil über Menschen entschieden wird',
          antwort: 'Verboten sind nur die acht Praktiken in Art. 5. Eine Vorsortierung nach Qualifikation gehört nicht dazu. Verboten wäre, aus Mimik oder Stimme im Gespräch auf Ihre Motivation zu schließen.' },
        { text: 'Als minimales Risiko, weil Sie die Entscheidung treffen',
          antwort: 'Ihre Letztentscheidung ist eine <b>Pflicht</b> im Hochrisikobereich, kein Weg aus ihm hinaus. Die Klasse folgt aus dem Einsatzbereich.' }
      ] },

    { typ: 'nachricht', text: 'Gut, dann ist es erlaubt. Die Pflichten kommen erst Ende 2027 – also könnten wir jetzt starten und bis dahin nachziehen?' },

    { typ: 'frage', text: 'Trägt dieser Schluss?',
      optionen: [
        { text: 'Nein – DSGVO, Beschäftigtendatenschutz und Mitbestimmung gelten unabhängig von der KI-Verordnung bereits jetzt', richtig: true,
          antwort: 'So ist es. Die Verschiebung durch den [[Digital Omnibus]] betrifft die Pflichten <b>eines</b> Gesetzes. [[Art. 22 DSGVO]], der [[Beschäftigtendatenschutz]], die [[Datenschutz-Folgenabschätzung]] und die Beteiligung des [[Betriebsrat|Betriebsrats]] sind davon unberührt – und sie sind in Ihrem Fall die eigentlichen Hürden.' },
        { text: 'Ja, bis zum Geltungsbeginn besteht kein rechtliches Risiko',
          antwort: 'Das würde voraussetzen, dass die KI-Verordnung das einzige einschlägige Gesetz ist. Eine abgelehnte Bewerberin wird sich auf die DSGVO und das AGG berufen, nicht auf den AI Act.' },
        { text: 'Ja, sofern die Bewerbenden in der Stellenanzeige informiert werden',
          antwort: 'Information ist nötig, genügt aber nicht. Es fehlen Rechtsgrundlage, Folgenabschätzung, Beteiligung des Betriebsrats und die Vorkehrungen nach Art. 22 Abs. 3 DSGVO.' }
      ] },

    { typ: 'nachricht', text: 'Dann die Frage, auf die es mir ankommt. Das Werkzeug erstellt eine Rangfolge, ich lese die ersten fünfzig. Ist das eine automatisierte Entscheidung?' },

    { typ: 'frage', text: 'Wie ist das zu beurteilen?',
      optionen: [
        { text: 'Es kommt darauf an, ob Ihre Prüfung tatsächlich etwas verändern kann – wer der Rangfolge regelmäßig folgt, trifft faktisch keine eigene Entscheidung', richtig: true, norm: '[[Art. 22 DSGVO]]',
          antwort: 'Genau diese Abgrenzung ist entscheidend. [[Automatisierte Entscheidung|Art. 22]] verbietet Entscheidungen, die <b>ausschließlich</b> automatisiert ergehen. Nach der Rechtsprechung des EuGH zum Scoring kann aber schon die Bewertung die Entscheidung sein, wenn der Mensch ihr regelmäßig folgt. Die Plätze 51 bis 300 sehen Sie nie – für diese Menschen hat die Maschine entschieden.' },
        { text: 'Nein – sobald ein Mensch beteiligt ist, greift Art. 22 nicht',
          antwort: 'Die bloße Beteiligung genügt nicht. Verlangt wird eine <b>inhaltliche</b> Prüfung mit echtem Entscheidungsspielraum, nicht ein Bestätigungsschritt.' },
        { text: 'Ja – die Software entscheidet, Ihre Prüfung ist rechtlich bedeutungslos',
          antwort: 'So weit geht es nicht. Eine echte eigene Prüfung kann die Entscheidung zu Ihrer machen. Entscheidend ist, ob Sie abweichen können und es tatsächlich tun.' }
      ] },

    { typ: 'mehrfach', text: 'Was folgt aus dem Gesagten für Ihr Vorhaben? (mehrere)',
      optionen: [
        { text: 'Der Einsatz ist zulässig, aber reguliert – nicht verboten', richtig: true },
        { text: 'Das Aussortieren der Plätze 51 bis 300 ist der kritische Punkt, nicht die Rangfolge selbst', richtig: true },
        { text: 'Die Verschiebung der KI-Fristen hilft beim Datenschutzrecht nicht', richtig: true },
        { text: 'Es braucht eine Rechtsgrundlage für die Verarbeitung der Bewerbungsunterlagen', richtig: true },
        { text: 'Mit der Einwilligung der Bewerbenden sind alle Fragen erledigt' }
      ],
      antwortRichtig: 'Vollständig. Zur letzten Aussage: Eine [[Einwilligung]] ist im Bewerbungsverfahren besonders heikel, weil die Freiwilligkeit fehlt – wer die Stelle möchte, kreuzt alles an. Und sie würde weder die Mitbestimmung noch die Folgenabschätzung ersetzen.',
      antwortFalsch: 'Vier Aussagen folgen aus dem, was wir besprochen haben. Eine verspricht eine Lösung über die Zustimmung der Betroffenen – prüfen Sie, ob die hier frei sein kann.' },

    { typ: 'merk', text: '<b>Bewerberauswahl mit KI = [[Hochrisiko-KI-System|Hochrisiko]]</b> ([[Anhang III]] Nr. 4): erlaubt, aber reguliert. KI-Pflichten ab 2.12.2027 – <b>[[DSGVO]], [[Beschäftigtendatenschutz]] und Mitbestimmung gelten heute</b>. Der kritische Punkt ist nicht die Rangfolge, sondern wer <b>nie gelesen</b> wird: Folgt der Mensch der Liste regelmäßig, ist es faktisch eine [[Automatisierte Entscheidung|automatisierte Entscheidung]].' },

    { typ: 'nachricht', text: 'Das ist unangenehm präzise. Dann lassen Sie uns beim nächsten Mal durchgehen, was ich tun muss, damit meine Prüfung mehr ist als ein Haken.' }
  ]
});

/* ---------------------------------------------------------------
   per-02 – Wenn der Mensch nur abnickt
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'per-02',
  kontakt: 'personal',
  titel: 'Wenn der Mensch nur abnickt',
  thema: 'Menschliche Aufsicht',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe nachgedacht. Mir ist unklar, wie eine Prüfung aussehen soll, die nicht nur ein Haken ist. Bei 300 Unterlagen kann ich nicht alles selbst lesen – sonst brauche ich das Werkzeug nicht.' },

    { typ: 'frage', text: 'Was verlangt die KI-Verordnung von der menschlichen Aufsicht?',
      optionen: [
        { text: 'Benannte, fachlich geeignete Personen, die das Ergebnis verwerfen und den Betrieb anhalten können', richtig: true, norm: 'Art. 26 Abs. 2 KI-VO',
          antwort: 'Richtig, und daran hängt alles: [[Menschliche Aufsicht]] ohne <b>Abweichbefugnis</b> ist keine Aufsicht. Nicht „die Personalabteilung prüft", sondern eine Person mit Namen, geschult, die die Rangfolge auch umstoßen darf – und deren Abweichung niemand rechtfertigen muss.' },
        { text: 'Eine Stichprobenprüfung von mindestens zehn Prozent der Fälle',
          antwort: 'Eine feste Quote nennt das Gesetz nicht. Stichproben sind ein gutes Mittel, ersetzen aber nicht die Befugnis, im Einzelfall abzuweichen.' },
        { text: 'Die Freigabe durch die Geschäftsführung vor jeder Einstellung',
          antwort: 'Eine zusätzliche Hierarchiestufe ist keine Aufsicht über das System. Verlangt wird die fachliche Kontrolle an der Stelle, an der das Ergebnis verwendet wird.' }
      ] },

    { typ: 'karte', titel: 'Betreiberpflichten bei Hochrisiko-Systemen', quelle: 'kipflichten' },

    { typ: 'nachricht', text: 'Die Spalte rechts lese ich als Arbeitsauftrag. Zwei Zeilen verstehe ich noch nicht: Was heißt „Eingabedaten verantworten" in meinem Fall – und wozu Protokolle?' },

    { typ: 'frage', text: 'Rampe 7 speist die Lebensläufe der in den letzten zehn Jahren Eingestellten als Beispiel ein, damit das System „unsere Art von Leuten" erkennt. Wie bewerten Sie das?',
      optionen: [
        { text: 'Problematisch – das System lernt die bisherige Auswahlpraxis samt ihrer Schieflagen und schreibt sie fort', richtig: true, norm: 'Art. 26 Abs. 4 KI-VO, AGG',
          antwort: 'Genau. Das ist der klassische [[Bias]]: Wurden bisher überwiegend Männer eingestellt, lernt das Modell, Männer besser zu bewerten – und zwar über Umwegmerkmale, die niemand bemerkt. Als Betreiber verantworten Sie nach Art. 26 Abs. 4 die <b>Eingabedaten</b>, und die Benachteiligung wäre zugleich ein Verstoß gegen das AGG.' },
        { text: 'Unproblematisch – eigene Daten sind die beste Grundlage',
          antwort: 'Sie sind die naheliegendste, aber nicht die beste. Eigene Altdaten enthalten genau die Muster, die man prüfen wollte – das Modell bestätigt dann die Vergangenheit.' },
        { text: 'Unproblematisch, solange Geschlecht und Herkunft aus den Unterlagen entfernt werden',
          antwort: 'Das hilft weniger, als man hofft: Modelle finden Ersatzmerkmale – Lücken im Lebenslauf, Vereinsnamen, Wohnort, Sprachmuster. Die Benachteiligung wird dadurch unsichtbar, nicht beseitigt.' }
      ] },

    { typ: 'frage', text: 'Und die Protokolle – wozu brauchen Sie die?',
      optionen: [
        { text: 'Um später nachvollziehen zu können, welche Eingabe zu welcher Bewertung geführt hat – mindestens sechs Monate aufzubewahren', richtig: true, norm: 'Art. 26 Abs. 6 KI-VO',
          antwort: 'Richtig, und sie sind Ihr eigener Schutz: Beschwert sich eine abgelehnte Bewerberin, ist das Protokoll das einzige Mittel, Ihre Entscheidung zu belegen. Ohne Protokoll stehen Sie mit leeren Händen da – auch gegenüber der [[Aufsichtsbehörde]] und ihrer [[Rechenschaftspflicht]].' },
        { text: 'Um die Trefferquote des Herstellers zu überprüfen',
          antwort: 'Das ist ein möglicher Nebennutzen. Der Zweck der [[Protokollierungspflicht]] ist die Nachvollziehbarkeit der einzelnen Entscheidung.' },
        { text: 'Um die Bewerbungsunterlagen länger aufbewahren zu dürfen',
          antwort: 'Im Gegenteil – die Unterlagen unterliegen der [[Speicherbegrenzung]] und sind nach Abschluss des Verfahrens zu löschen. Protokoll und Unterlagen sind zwei verschiedene Dinge.' }
      ] },

    { typ: 'nachricht', text: 'Dann formuliere ich meine Vorkehrungen. Sagen Sie mir, ob das reicht.' },

    { typ: 'mehrfach', text: 'Welche Vorkehrungen machen Ihre Prüfung zu einer echten Entscheidung? (mehrere)',
      optionen: [
        { text: 'Sie können die Rangfolge im Einzelfall verwerfen, ohne sich dafür rechtfertigen zu müssen', richtig: true },
        { text: 'Sie ziehen regelmäßig Stichproben aus dem unteren Teil der Liste', richtig: true },
        { text: 'Die Gründe für eine Bewertung werden angezeigt, nicht nur eine Punktzahl', richtig: true },
        { text: 'Sie sind im Umgang mit dem System und seinen Grenzen geschult', richtig: true },
        { text: 'Betroffene können eine Überprüfung durch einen Menschen verlangen und ihren Standpunkt darlegen', richtig: true },
        { text: 'Das System wird auf eine Genauigkeit von mindestens 95 Prozent eingestellt' }
      ],
      antwortRichtig: 'Vollständig. Der letzte Punkt ist eine Herstellerangabe, keine Vorkehrung von Ihnen – und eine hohe Trefferquote sagt nichts darüber, ob <b>Ihre</b> Prüfung etwas verändern kann. Die Stichprobe aus dem unteren Teil ist dabei das wirksamste Mittel: Nur so erfahren Sie überhaupt, was Ihnen die Liste verschweigt.',
      antwortFalsch: 'Fünf Punkte beschreiben, was Sie und die Betroffenen <b>tun</b> können. Einer beschreibt eine Eigenschaft der Software.' },

    { typ: 'merk', text: '<b>[[Menschliche Aufsicht]] braucht drei Dinge:</b> eine <b>benannte</b> Person, <b>Kompetenz</b>, und die <b>Befugnis abzuweichen</b>. Dazu nach [[Art. 22 DSGVO]] Abs. 3: Eingreifen eines Menschen, Darlegung des Standpunkts, Anfechtung. [[Bias]] entsteht aus Altdaten und wandert über Ersatzmerkmale – Stichproben aus dem <b>unteren</b> Teil der Liste deckt ihn auf. [[Protokollierungspflicht|Protokolle]]: mindestens sechs Monate.' },

    { typ: 'nachricht', text: 'Verstanden. Dann bleibt die Frage, wem ich das alles vorher sagen muss. Ich ahne, dass die Liste länger ist, als mir lieb ist.' }
  ]
});

/* ---------------------------------------------------------------
   per-03 – Wem ich es vorher sagen muss
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'per-03',
  kontakt: 'personal',
  titel: 'Wem ich es vorher sagen muss',
  thema: 'Information und Mitbestimmung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe die Vorkehrungen aufgeschrieben. Nun die Beteiligten. Mein erster Gedanke war: Das betrifft Bewerbende, also Externe – der Betriebsrat hat damit nichts zu tun.' },

    { typ: 'frage', text: 'Trägt dieser Gedanke?',
      optionen: [
        { text: 'Nein – die Software ist zur Leistungs- und Verhaltenskontrolle geeignet und betrifft künftige Beschäftigte, die Mitbestimmung greift', richtig: true, norm: '§§ 87 Abs. 1 Nr. 6, 90, 95 BetrVG',
          antwort: 'Richtig. Beim [[Betriebsrat]] genügt die <b>Eignung</b> zur Überwachung, die Absicht ist unerheblich. Hinzu kommt § 90 BetrVG – Unterrichtung bei der Planung technischer Anlagen – und bei Auswahlrichtlinien § 95. Das Gremium ist also früh einzubeziehen, nicht nach der Entscheidung.' },
        { text: 'Ja, der Betriebsrat vertritt nur die vorhandenen Beschäftigten',
          antwort: 'Er vertritt die Belegschaft, und die Auswahlkriterien für künftige Kolleginnen und Kollegen betreffen sie unmittelbar – deshalb nennt § 95 BetrVG Auswahlrichtlinien ausdrücklich.' },
        { text: 'Ja, solange keine vorhandenen Beschäftigten bewertet werden',
          antwort: 'Das Werkzeug ist dieselbe Anlage, die später auch für Beförderungen taugt. Die Eignung zur Überwachung entsteht nicht erst mit der ersten Anwendung auf Beschäftigte.' }
      ] },

    { typ: 'nachricht', text: 'Gut. Dann die Bewerbenden selbst. Ich würde einen Satz in die Stellenanzeige aufnehmen: „Wir setzen bei der Vorauswahl KI-gestützte Verfahren ein."' },

    { typ: 'frage', text: 'Genügt dieser Satz?',
      optionen: [
        { text: 'Nein – es braucht Angaben zur Logik, zur Tragweite und zu den Rechten nach Art. 22 Abs. 3, und eine Information bei der Entscheidung selbst', richtig: true, norm: 'Art. 13 Abs. 2 lit. f, Art. 22 DSGVO; Art. 26 Abs. 11 KI-VO',
          antwort: 'Richtig. Bei automatisierten Entscheidungen verlangt die [[Informationspflicht]] Angaben zur <b>Logik</b> sowie zur Tragweite und den angestrebten Auswirkungen. Dazu kommt Art. 26 Abs. 11 KI-VO: Wer von einer mit einem Hochrisiko-System getroffenen Entscheidung betroffen ist, muss das erfahren – also auch in der Absage.' },
        { text: 'Ja, damit sind die Bewerbenden informiert',
          antwort: 'Der Satz ist ein guter Anfang, aber zu unbestimmt. Er sagt nicht, was das Verfahren tut, welche Folgen es hat und welche Rechte bestehen.' },
        { text: 'Nein, es ist zusätzlich die Einwilligung jedes Bewerbenden einzuholen',
          antwort: 'Eine Einwilligung ist hier gerade nicht der Weg – im Bewerbungsverhältnis fehlt die Freiwilligkeit. Die Verarbeitung stützt sich auf die Erforderlichkeit für das vorvertragliche Verhältnis ([[Beschäftigtendatenschutz]]).' }
      ] },

    { typ: 'frage', text: 'Herr Olschewski, unser Datenschutzbeauftragter, fragt nach einer Folgenabschätzung. Ist die nötig?',
      optionen: [
        { text: 'Ja – systematische Bewertung mit Profilbildung und erheblichen Folgen für die Betroffenen ist ihr Standardfall', richtig: true, norm: 'Art. 35 Abs. 3 lit. a DSGVO',
          antwort: 'Richtig. Die [[Datenschutz-Folgenabschätzung]] ist bei systematischer und umfassender Bewertung mittels automatisierter Verarbeitung einschließlich [[Profiling]] vorgeschrieben, wenn sie erhebliche Auswirkungen hat. Der Zugang zu Arbeit ist genau das. Die [[Grundrechte-Folgenabschätzung]] nach Art. 27 KI-VO trifft Rampe 7 dagegen nicht – die gilt nur für bestimmte Betreiber.' },
        { text: 'Nein, die genügt für Hochrisiko-Systeme erst ab Dezember 2027',
          antwort: 'Sie verwechseln die beiden Folgenabschätzungen. Die aus der DSGVO gilt seit 2018 und hängt nicht an der KI-Verordnung.' },
        { text: 'Nein, dafür ist allein der Hersteller zuständig',
          antwort: 'Die Folgenabschätzung betrifft <b>Ihre</b> Verarbeitung und kann niemand anderes für Sie vornehmen. Der Hersteller liefert dafür Angaben, nicht das Ergebnis.' }
      ] },

    { typ: 'mehrfach', text: 'Wer oder was ist vor dem ersten Einsatz zu beteiligen oder zu erledigen? (mehrere)',
      optionen: [
        { text: 'Der Betriebsrat, möglichst über eine Betriebsvereinbarung', richtig: true },
        { text: 'Der Datenschutzbeauftragte, im Rahmen der Folgenabschätzung', richtig: true },
        { text: 'Die vorhandenen Beschäftigten und ihre Vertretung, vor Inbetriebnahme', richtig: true },
        { text: 'Die Bewerbenden, mit Angaben zu Logik, Tragweite und ihren Rechten', richtig: true },
        { text: 'Die Marktüberwachungsbehörde, mit einer Anzeige des geplanten Einsatzes' },
        { text: 'Die Aufsichtsbehörde, mit einer Vorabgenehmigung der Folgenabschätzung' }
      ],
      antwortRichtig: 'Vollständig. Die beiden letzten gibt es nicht: Eine Anzeige des Einsatzes bei der Marktüberwachung ist für Betreiber nicht vorgesehen, und eine [[Datenschutz-Folgenabschätzung]] wird nicht genehmigt – die Behörde ist nur zu <b>konsultieren</b>, wenn die Abschätzung ein hohes Restrisiko ergibt (Art. 36 DSGVO).',
      antwortFalsch: 'Vier Beteiligungen sind Pflicht. Zwei klingen nach Behörde und Formular – prüfen Sie, ob es diese Verfahren für Betreiber überhaupt gibt.' },

    { typ: 'merk', text: '<b>Vor dem ersten Einsatz:</b> [[Betriebsrat]] (§ 87 Abs. 1 Nr. 6 BetrVG – <b>Eignung</b> genügt; §§ 90, 95), [[Datenschutz-Folgenabschätzung]] mit dem [[Datenschutzbeauftragter|DSB]], Information der <b>Beschäftigten</b> (Art. 26 Abs. 7 KI-VO) und der <b>Bewerbenden</b> mit Logik, Tragweite und Rechten (Art. 13 Abs. 2 lit. f DSGVO). Keine Anzeige, keine Genehmigung – aber Konsultation nach Art. 36 DSGVO bei hohem Restrisiko.' },

    { typ: 'nachricht', text: 'Dann habe ich noch einen Fall, der nicht hypothetisch ist. Eine Bewerberin aus dem letzten Verfahren hat geschrieben. Sie will wissen, warum es nicht gereicht hat.' }
  ]
});

/* ---------------------------------------------------------------
   per-04 – Die Bewerberin, die nachfragt
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'per-04',
  kontakt: 'personal',
  titel: 'Die Bewerberin, die nachfragt',
  thema: 'Auskunft und Löschung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Der Brief liegt vor mir. Frau K. hat sich auf die Dispositionsstelle beworben, wurde abgelehnt und schreibt: Sie wolle Auskunft über alle zu ihrer Person verarbeiteten Daten, die Kriterien der Vorauswahl und eine Überprüfung der Entscheidung durch einen Menschen.' },
    { typ: 'nachricht', text: 'Drei Forderungen in einem Brief. Gehen wir sie durch.' },

    { typ: 'frage', text: 'Die Auskunft – was ist herauszugeben?',
      optionen: [
        { text: 'Alle zu ihr verarbeiteten Daten samt Empfängern, Speicherdauer und Angaben zur Logik der automatisierten Entscheidung', richtig: true, norm: '[[Art. 15 DSGVO]]',
          antwort: 'Richtig. Das Auskunftsrecht umfasst bei automatisierten Entscheidungen ausdrücklich die <b>Logik</b> sowie Tragweite und angestrebte Auswirkungen. Das heißt nicht, den Quelltext oder die Gewichtung des Modells offenzulegen – aber verständlich zu machen, welche Kriterien zu welchem Ergebnis geführt haben.' },
        { text: 'Nur die von ihr selbst eingereichten Unterlagen',
          antwort: 'Zu wenig. Erfasst sind auch die <b>erzeugten</b> Daten – Punktzahl, Rangplatz, interne Vermerke.' },
        { text: 'Nichts, weil Bewerbende keine Beschäftigten sind',
          antwort: 'Die Betroffenenrechte gelten für jede betroffene Person. Der Status als Bewerberin ändert daran nichts.' }
      ] },

    { typ: 'nachricht', text: 'Nun wird es unangenehm. Die Punktzahl und der Rangplatz lassen sich nicht mehr aufrufen – wir haben die Rangliste nach Abschluss des Verfahrens verworfen.' },

    { typ: 'frage', text: 'Wie bewerten Sie das?',
      optionen: [
        { text: 'Ein Problem der Nachweisbarkeit – ohne Protokoll lässt sich die Entscheidung nicht belegen', richtig: true, norm: 'Art. 5 Abs. 2 DSGVO, Art. 26 Abs. 6 KI-VO',
          antwort: 'Genau, und hier zeigt sich der Sinn der [[Protokollierungspflicht]]: mindestens sechs Monate. Die [[Rechenschaftspflicht]] trifft Sie – Sie müssen belegen, dass rechtmäßig verarbeitet wurde. Fehlt das Protokoll, geht das zu <b>Ihren</b> Lasten, nicht zu ihren.' },
        { text: 'Unproblematisch – was gelöscht ist, kann nicht herausgegeben werden',
          antwort: 'Für die Auskunft gilt das zwar faktisch. Für die Rechenschaftspflicht und einen möglichen AGG-Vorwurf ist das Fehlen der Unterlagen aber Ihr Risiko.' },
        { text: 'Richtig gehandelt – die Speicherbegrenzung verlangt die sofortige Löschung',
          antwort: 'Die [[Speicherbegrenzung]] betrifft die Bewerbungs<b>unterlagen</b>, für die üblicherweise rund sechs Monate nach Abschluss angesetzt werden – wegen der Klagefristen des AGG. Die Protokolle des Systems sind davon zu trennen und gerade aufzubewahren.' }
      ] },

    { typ: 'frage', text: 'Dritte Forderung: Überprüfung durch einen Menschen. Was folgt daraus?',
      optionen: [
        { text: 'Sie hat Anspruch auf Eingreifen einer Person, auf Darlegung ihres Standpunkts und auf Anfechtung der Entscheidung', richtig: true, norm: 'Art. 22 Abs. 3 DSGVO',
          antwort: 'Richtig, und das sind drei eigenständige Rechte. Praktisch heißt das: Ihre Unterlagen werden von einem Menschen gelesen, sie darf etwas dazu sagen, und die Entscheidung kann geändert werden. Wenn das Verfahren das nicht hergibt, war die Entscheidung von Anfang an nicht zulässig.' },
        { text: 'Nichts – die Entscheidung ist gefallen, die Stelle ist besetzt',
          antwort: 'Die Besetzung beendet den Anspruch nicht. Sie kann zu einer Berichtigung, zu einer Entschuldigung und im Streitfall zu Schadensersatz nach [[Art. 82 DSGVO]] führen.' },
        { text: 'Sie hat Anspruch auf ein neues Bewerbungsgespräch',
          antwort: 'Einen Anspruch auf ein Gespräch gibt Art. 22 nicht her. Verlangt wird die <b>Überprüfung</b> durch einen Menschen, nicht ein bestimmtes Verfahren.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Lehren ziehen Sie für das nächste Verfahren? (mehrere)',
      optionen: [
        { text: 'Protokolle der Bewertungen aufbewahren, mindestens sechs Monate', richtig: true },
        { text: 'Die Kriterien der Vorauswahl vorher schriftlich festhalten', richtig: true },
        { text: 'In der Absage auf die Mitwirkung eines KI-Systems hinweisen', richtig: true },
        { text: 'Einen festen Ablauf für Auskunftsersuchen und Überprüfungen einrichten', richtig: true },
        { text: 'Bewerbungsunterlagen künftig dauerhaft aufbewahren, um jederzeit Auskunft geben zu können' }
      ],
      antwortRichtig: 'Vollständig. Die letzte Aussage wäre der Fehler in die andere Richtung: Dauerhafte Aufbewahrung verstößt gegen die [[Speicherbegrenzung]]. Die Lösung ist nicht, alles zu behalten, sondern das <b>Richtige</b> zu behalten – die Protokolle der Entscheidung, nicht die Unterlagen aller Bewerbenden.',
      antwortFalsch: 'Vier Maßnahmen verbessern die Nachvollziehbarkeit. Eine löst ein Nachweisproblem durch einen Datenschutzverstoß.' },

    { typ: 'merk', text: '<b>Nach der Absage:</b> [[Art. 15 DSGVO|Auskunft]] über alle Daten – auch Punktzahl und Rangplatz – samt Angaben zur <b>Logik</b>; nach [[Art. 22 DSGVO]] Abs. 3 Eingreifen eines Menschen, Standpunkt, Anfechtung; nach Art. 26 Abs. 11 KI-VO Hinweis auf die Mitwirkung des Systems. Unterlagen: ca. <b>sechs Monate</b> (AGG-Klagefristen), Protokolle: <b>mindestens sechs Monate</b>. Fehlt das Protokoll, trägt das Unternehmen die Folgen.' },

    { typ: 'nachricht', text: 'Ich beantworte den Brief und lege den Ablauf fest. Eine Sache noch – über die sollten wir reden, bevor sie jemand als gute Idee verkauft.' }
  ]
});

/* ---------------------------------------------------------------
   per-05 – Die Idee, die niemand vorschlagen sollte
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'per-05',
  kontakt: 'personal',
  titel: 'Die Idee, die niemand vorschlagen sollte',
  thema: 'Grenzen im Personalbereich',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Auf der Messe wurden mir drei Zusatzmodule gezeigt. Erstens eine Auswertung der Videogespräche nach Mimik und Stimmlage. Zweitens eine Recherche in sozialen Netzen zu jedem Bewerbenden. Drittens eine Prognose, wie lange jemand bleibt.' },
    { typ: 'nachricht', text: 'Der Vertrieb nennt alle drei „Marktstandard". Ich möchte für jedes eine klare Einordnung, bevor ich in die Geschäftsführungssitzung gehe.' },

    { typ: 'frage', text: 'Modul eins: Auswertung von Mimik und Stimmlage im Bewerbungsgespräch.',
      optionen: [
        { text: 'Verboten – Emotionserkennung im Beschäftigungskontext, dazu zählen Bewerbende', richtig: true, norm: 'Art. 5 Abs. 1 lit. f KI-VO',
          antwort: 'Richtig, und hier ist nichts abzuwägen. [[Emotionserkennung]] am Arbeitsplatz und in Bildungseinrichtungen ist eine [[Verbotene Praktiken|verbotene Praktik]], mit dem höchsten Bußgeldrahmen der Verordnung – bis 7 Prozent des weltweiten Jahresumsatzes. Die Verfahren sind zudem wissenschaftlich unzuverlässig.' },
        { text: 'Hochrisiko – zulässig mit Folgenabschätzung und menschlicher Aufsicht',
          antwort: 'Das wäre die Einordnung der Vorsortierung nach Qualifikation. Der Schluss aus dem Gesicht auf Gefühle liegt eine Stufe höher und ist nicht genehmigungsfähig.' },
        { text: 'Zulässig mit Einwilligung der Bewerbenden',
          antwort: 'Ein Verbot lässt sich nicht durch Zustimmung aufheben – und im Bewerbungsverhältnis wäre die Einwilligung ohnehin nicht freiwillig.' }
      ] },

    { typ: 'frage', text: 'Modul zwei: automatische Recherche in sozialen Netzen zu jedem Bewerbenden.',
      optionen: [
        { text: 'Unzulässig, soweit es um private Netzwerke geht – es fehlt an der Erforderlichkeit für das Bewerbungsverhältnis', richtig: true, norm: '§ 26 BDSG, Art. 5 Abs. 1 lit. c DSGVO',
          antwort: 'Richtig. Maßstab im [[Beschäftigtendatenschutz]] ist die <b>Erforderlichkeit</b>, nicht die Verfügbarkeit. Ein berufliches Netzwerk, in dem sich jemand gerade für Stellenangebote präsentiert, lässt sich noch rechtfertigen; private Profile nicht. Werden daraus Schlüsse auf Religion, politische Meinung oder Gesundheit gezogen, kommt Art. 9 DSGVO hinzu – und bei einer Punktebewertung wären wir bei [[Social Scoring]].' },
        { text: 'Zulässig – öffentlich zugängliche Daten darf jeder verarbeiten',
          antwort: 'Das ist ein verbreiteter Irrtum. Öffentliche Zugänglichkeit nimmt Daten nicht aus der DSGVO heraus; es bleibt bei der Prüfung von Rechtsgrundlage und Erforderlichkeit.' },
        { text: 'Zulässig, wenn die Bewerbenden in der Stellenanzeige darauf hingewiesen werden',
          antwort: 'Der Hinweis erfüllt die [[Informationspflicht]], schafft aber keine Rechtsgrundlage für eine nicht erforderliche Verarbeitung.' }
      ] },

    { typ: 'frage', text: 'Modul drei: Prognose der Verweildauer, die in die Auswahl einfließt.',
      optionen: [
        { text: 'Hochrisiko-Einsatz mit erheblichem Diskriminierungsrisiko – Prognosemerkmale treffen oft geschützte Gruppen', richtig: true, norm: 'Anhang III Nr. 4 KI-VO, AGG',
          antwort: 'Richtig. Nicht verboten, aber heikel: Eine Verweildauer-Prognose stützt sich auf Alter, Wohnort, Elternzeiten, Lücken im Lebenslauf – genau die Merkmale, deren Verwendung das AGG begrenzt. Als Auswahlkriterium erzeugt das einen [[Bias]], der sich im Streitfall schwer verteidigen lässt.' },
        { text: 'Unproblematisch, es werden keine persönlichen Merkmale verwendet',
          antwort: 'Eine Prognose kann nur aus Merkmalen entstehen. Sind es nicht die geschützten selbst, sind es Ersatzmerkmale, die mit ihnen zusammenhängen.' },
        { text: 'Verboten als Social Scoring',
          antwort: 'Die Grenze ist hier der Bereichswechsel. Eine Prognose aus Bewerbungsdaten für eine Personalentscheidung bleibt im selben Bereich – damit Hochrisiko, nicht verboten. Flössen private Daten aus sozialen Netzen ein, kippte die Einordnung.' }
      ] },

    { typ: 'mehrfach', text: 'Was nehmen Sie in die Geschäftsführungssitzung mit? (mehrere)',
      optionen: [
        { text: 'Modul eins ist verboten und kommt nicht in Betracht – unabhängig vom Preis', richtig: true },
        { text: 'Modul zwei ist für private Profile nicht erforderlich und damit unzulässig', richtig: true },
        { text: 'Modul drei ist zulässig, aber mit einem Diskriminierungsrisiko, das wir nicht tragen wollen', richtig: true },
        { text: 'Die Vorsortierung nach Qualifikation bleibt der tragfähige Weg – mit Aufsicht, Protokoll und Beteiligung', richtig: true },
        { text: 'Dass „Marktstandard" ein Hinweis auf Zulässigkeit ist' }
      ],
      antwortRichtig: 'Vollständig. Zum letzten Punkt: „Marktstandard" ist eine Vertriebsformulierung. Dass ein Modul verkauft wird, sagt nichts über seine Zulässigkeit – und der Bußgeldrahmen trifft nicht den Hersteller, sondern Sie als [[Betreiber]].',
      antwortFalsch: 'Vier Aussagen sind Einordnungen, die Sie vertreten können. Eine übernimmt die Bewertung des Vertriebs.' },

    { typ: 'merk', text: '<b>Drei Stufen im Personalbereich:</b> <b>verboten</b> – [[Emotionserkennung]] aus Mimik und Stimme (Art. 5); <b>unzulässig</b> – Recherche in privaten Profilen, weil nicht erforderlich (§ 26 BDSG); <b>zulässig, aber reguliert</b> – Vorsortierung nach Qualifikation ([[Anhang III]] Nr. 4). Wer bewertet, braucht [[Menschliche Aufsicht|Aufsicht]], Protokoll und Beteiligung. „Marktstandard" ist keine Rechtsgrundlage.' },

    { typ: 'nachricht', text: 'Damit kann ich auftreten. Vielen Dank – das war unangenehm und genau deshalb nützlich.' }
  ]
});
