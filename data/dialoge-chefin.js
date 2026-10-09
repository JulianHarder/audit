/* ===========================================================
   AUDIT – data/dialoge-chefin.js
   Frau Hagedorn, Geschäftsführerin. Spricht dich mit "Sie" an,
   bleibt durchgehend förmlich und sachlich. Sie ist die
   Verantwortliche im Sinne der DSGVO und fragt entsprechend:
   Was kostet das, was bringt es, und wer haftet?
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'gf-01',
  kontakt: 'chefin',
  titel: 'Erklären Sie mir die Schutzziele',
  thema: 'Schutzziele',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Guten Morgen. Ich war gestern auf einer Veranstaltung der IHK, dort fiel ständig der Begriff „Schutzziele".' },
    { typ: 'nachricht', text: 'Ich habe genickt und nicht nachgefragt. Das möchte ich nachholen, bevor ich am Donnerstag mit der Versicherung spreche.' },

    { typ: 'frage', text: 'Welche drei Schutzziele sind gemeint?',
      optionen: [
        { text: 'Vertraulichkeit, Integrität, Verfügbarkeit', richtig: true,
          antwort: 'Richtig, die klassische Dreiheit – im Englischen <b>CIA-Triade</b>: Confidentiality, Integrity, Availability. Jede Sicherheitsmaßnahme im Haus dient mindestens einem dieser drei Ziele.' },
        { text: 'Datenschutz, Datensicherheit, Datensparsamkeit',
          antwort: 'Das sind Begriffe aus dem Datenschutzrecht. Die drei <b>Schutzziele</b> der Informationssicherheit heißen anders.' },
        { text: 'Prävention, Detektion, Reaktion',
          antwort: 'Das sind Phasen im Umgang mit Vorfällen – nützlich, aber nicht die Schutzziele.' }
      ] },

    { typ: 'karte', titel: 'Die drei Schutzziele', quelle: 'schutzziele' },

    { typ: 'nachricht', text: 'Gut. Dann prüfen wir das an unserem Betrieb, das merke ich mir besser.' },

    { typ: 'frage', text: 'Unser Versandsystem fällt einen Tag lang aus. Welches Ziel ist betroffen?',
      optionen: [
        { text: 'Verfügbarkeit', richtig: true,
          antwort: 'Genau. Berechtigte kommen nicht an Daten und Dienste, wenn sie sie brauchen. Bei uns heißt das: Es wird nichts ausgeliefert – das kostet unmittelbar Umsatz und Vertragsstrafen.' },
        { text: 'Integrität',
          antwort: 'Die wäre betroffen, wenn die Daten <b>falsch</b> wären. Hier sind sie richtig, nur nicht erreichbar.' }
      ] },

    { typ: 'frage', text: 'Und wenn eine Mitarbeiterin heimlich Lieferantenpreise verändert?',
      optionen: [
        { text: 'Integrität', richtig: true,
          antwort: 'Richtig. Die Daten sind nicht mehr korrekt und vertrauenswürdig. Gegenmaßnahmen: Protokollierung, Vier-Augen-Prinzip bei kritischen Änderungen, saubere Berechtigungen.' },
        { text: 'Vertraulichkeit',
          antwort: 'Die wäre betroffen, wenn sie die Preise nur <b>angesehen</b> und weitergegeben hätte. Verändern betrifft ein anderes Ziel.' }
      ] },

    { typ: 'frage', text: 'Und wenn unsere Kalkulationstabelle beim Mitbewerber landet?',
      optionen: [
        { text: 'Vertraulichkeit', richtig: true,
          antwort: 'Richtig. Und beachten Sie: Hier geht es nicht um personenbezogene Daten, sondern um Geschäftsgeheimnisse. Der <b>Datenschutz</b> ist damit gar nicht betroffen – die <b>Informationssicherheit</b> sehr wohl. Das ist ein Unterschied, der in Prüfungen gern abgefragt wird.' },
        { text: 'Integrität',
          antwort: 'Die Tabelle ist unverändert – sie ist nur bei jemandem, der sie nicht haben soll. Das ist ein anderes Ziel.' }
      ] },

    { typ: 'nachricht', text: 'Das ist ein wichtiger Punkt. Ich hatte beides immer gleichgesetzt.' },

    { typ: 'frage', text: 'Wie unterscheiden sich Datenschutz und Informationssicherheit?',
      optionen: [
        { text: 'Datenschutz schützt Personen, Informationssicherheit alle Informationen', richtig: true,
          antwort: 'Genau so würde ich es in der Prüfung formulieren. Der [[Datenschutz]] schützt natürliche Personen und ihre Rechte an ihren Daten. Die [[Informationssicherheit]] schützt <b>alle</b> Informationen des Unternehmens – auch Kalkulationen, Konstruktionsdaten und Verträge, bei denen keine Person betroffen ist.' },
        { text: 'Das ist dasselbe mit anderem Namen',
          antwort: 'Es überschneidet sich, ist aber nicht dasselbe. Unsere Kalkulationstabelle hat keinen Personenbezug – sie ist trotzdem schützenswert. Umgekehrt kann ein Datenschutzverstoß vorliegen, ohne dass Technik versagt hat.' }
      ] },

    { typ: 'nachricht', text: 'Auf der Veranstaltung fielen noch zwei weitere Begriffe. Authentizität und Verbindlichkeit?' },

    { typ: 'frage', text: 'Was bedeutet Verbindlichkeit?',
      optionen: [
        { text: 'Eine Handlung kann später nicht abgestritten werden', richtig: true,
          antwort: 'Richtig, man spricht auch von <b>Nichtabstreitbarkeit</b>. Beispiel bei uns: Eine Freigabe für eine Überweisung ist protokolliert und signiert – niemand kann hinterher sagen, er sei es nicht gewesen. Verwandt ist die [[Authentizität]]: Eine Information oder ein Absender ist nachweislich echt.' },
        { text: 'Die Daten sind verbindlich gespeichert',
          antwort: 'Es geht nicht ums Speichern, sondern darum, dass eine <b>Handlung</b> einer Person eindeutig zugerechnet werden kann.' }
      ] },

    { typ: 'frage', text: 'Letzte Frage: Was hat die Versicherung davon, dass ich das verstehe?',
      optionen: [
        { text: 'Die Prämie richtet sich nach dem Sicherheitsniveau', richtig: true,
          antwort: 'Richtig. Cyber-Versicherer fragen gezielt nach Backups, Zugriffskonzepten, Schulungen und Notfallplänen. Wer nichts vorweisen kann, zahlt mehr oder wird abgelehnt – und im Schadensfall wird genau geprüft, ob die zugesagten Maßnahmen tatsächlich bestanden.' },
        { text: 'Nichts, das ist nur Formalität',
          antwort: 'Im Gegenteil: Der Fragebogen des Versicherers ist faktisch ein Sicherheitsaudit. Falsche Angaben dort können im Schadensfall die Leistung kosten.' }
      ] },

    { typ: 'merk', text: '<b>Vertraulichkeit</b> = nur Berechtigte sehen es · <b>Integrität</b> = es stimmt · <b>Verfügbarkeit</b> = es ist da. Ergänzend: Authentizität (echt), Verbindlichkeit (nicht abstreitbar). <b>Datenschutz</b> schützt Personen, <b>Informationssicherheit</b> alle Informationen.' },

    { typ: 'nachricht', text: 'Vielen Dank, das hat mir sehr geholfen. Ich komme auf Sie zurück, wenn der Fragebogen der Versicherung da ist.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-02',
  kontakt: 'chefin',
  titel: 'Wozu eine Schutzbedarfsermittlung?',
  thema: 'Schutzbedarf',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Der Fragebogen der Versicherung ist eingetroffen. Gleich die zweite Frage lautet, ob wir eine „Schutzbedarfsermittlung" durchgeführt haben.' },
    { typ: 'nachricht', text: 'Ich habe das Feld freigelassen. Erklären Sie mir bitte, was dort gemeint ist.' },

    { typ: 'frage', text: 'Was ist eine Schutzbedarfsermittlung?',
      optionen: [
        { text: 'Eine Bewertung, wie viel Schutz Daten und Systeme brauchen', richtig: true,
          antwort: 'Genau. Für jede Information, Anwendung und jedes System wird bewertet, welchen Schutz sie bei <b>Vertraulichkeit, Integrität und Verfügbarkeit</b> brauchen. Maßstab ist der Schaden, der bei Verletzung des jeweiligen Ziels entstehen würde.' },
        { text: 'Eine Zählung aller Geräte im Unternehmen',
          antwort: 'Das wäre eine Inventarisierung – als Grundlage hilfreich, aber nicht dasselbe. Es geht um die <b>Bewertung</b>, nicht ums Zählen.' },
        { text: 'Eine Prüfung durch die Aufsichtsbehörde',
          antwort: 'Nein, das machen wir selbst. Die Behörde prüft allenfalls, ob wir es getan haben.' }
      ] },

    { typ: 'nachricht', text: 'Und warum sollte ich dafür Arbeitszeit aufwenden?' },

    { typ: 'frage', text: 'Was ist der wirtschaftliche Nutzen?',
      optionen: [
        { text: 'Maßnahmen werden gezielt dort eingesetzt, wo sie nötig sind', richtig: true,
          antwort: 'Das ist das Argument, das bei Ihnen ziehen sollte: Besonders schutzbedürftige Daten bekommen starken Schutz, weniger wichtige weniger. So vermeidet man <b>Über- und Unterschutz</b> – man gibt kein Geld für Unnötiges aus und steht an den wichtigen Stellen nicht ungeschützt da.' },
        { text: 'Die Versicherung wird dadurch billiger',
          antwort: 'Das kann ein Nebeneffekt sein, ist aber nicht der Kern. Der eigentliche Nutzen liegt im gezielten Einsatz der Mittel.' },
        { text: 'Man braucht danach keine weiteren Maßnahmen',
          antwort: 'Im Gegenteil – die Ermittlung ist die <b>Grundlage</b> für die Auswahl der Maßnahmen, nicht ihr Ersatz.' }
      ] },

    { typ: 'frage', text: 'In welchen Stufen bewertet man?',
      optionen: [
        { text: 'niedrig – mittel – hoch', richtig: true,
          antwort: 'Richtig, das ist eine übliche Dreiteilung: <b>niedrig</b> = geringer, überschaubarer Schaden · <b>mittel</b> = spürbarer Schaden mit begrenzten Folgen · <b>hoch</b> = erheblicher Schaden mit schwerwiegenden Folgen. Der BSI-Standard nennt dieselben Stufen <b>normal, hoch und sehr hoch</b> – gemeint ist dasselbe Prinzip. In der Prüfung sollten Sie beide Skalen kennen.' },
        { text: 'A – B – C',
          antwort: 'Das kennt man aus der ABC-Analyse in der Materialwirtschaft. Beim Schutzbedarf arbeitet man mit beschreibenden Stufen.' }
      ] },

    { typ: 'karte', titel: 'Die Stufen nach BSI-Standard', quelle: 'stufen' },

    { typ: 'nachricht', text: 'Eines verstehe ich noch nicht: Wie kommt ein Server zu seinem Schutzbedarf? Der Server selbst enthält ja nichts.' },

    { typ: 'frage', text: 'Auf unserem Server laufen die Warenwirtschaft (mittel) und die Lohnbuchhaltung (hoch). Wie wird der Server eingestuft?',
      optionen: [
        { text: 'Hoch – die empfindlichste Anwendung bestimmt', richtig: true,
          antwort: 'Richtig, das ist das <b>[[Maximumprinzip]]</b>: Das System erbt den höchsten Schutzbedarf der Anwendungen, die darauf laufen. Wer den Server kompromittiert, erreicht auch die Lohnbuchhaltung.' },
        { text: 'Mittel – das ist der Durchschnitt',
          antwort: 'Gemittelt wird nie. Sonst wäre ausgerechnet die empfindlichste Anwendung zu schwach geschützt.' },
        { text: 'Jede Anwendung behält ihren eigenen Wert',
          antwort: 'Die Anwendungen behalten ihre Einstufung – aber das <b>System</b> braucht eine eigene, und die richtet sich nach dem Maximum.' }
      ] },

    { typ: 'nachricht', text: 'Nachvollziehbar. Auf unserem Hauptserver laufen allerdings fünf Anwendungen, die alle als „niedrig" eingestuft wären.' },

    { typ: 'frage', text: 'Bleibt der Server dann bei „niedrig"?',
      optionen: [
        { text: 'Nein, möglicherweise greift der Kumulationseffekt', richtig: true,
          antwort: 'Genau. Beim [[Kumulationseffekt]] summieren sich viele kleine Schäden: Fällt der Server aus, stehen <b>alle fünf</b> Anwendungen gleichzeitig – und damit möglicherweise der gesamte Betrieb. Dann stuft man den Server höher ein als das Maximum der Einzelanwendungen.' },
        { text: 'Ja, das Maximum ist ja niedrig',
          antwort: 'Das wäre zu kurz gedacht. Überlegen Sie, was passiert, wenn <b>alle fünf gleichzeitig</b> ausfallen – dieser Effekt hat einen eigenen Namen.' }
      ] },

    { typ: 'frage', text: 'Und wenn eine Anwendung auf zwei Servern redundant läuft?',
      optionen: [
        { text: 'Dann kann der Schutzbedarf des einzelnen Servers niedriger sein', richtig: true,
          antwort: 'Richtig, das ist der [[Verteilungseffekt]] – allerdings nur für die <b>Verfügbarkeit</b>: Fällt ein Server aus, übernimmt der andere. Für die <b>Vertraulichkeit</b> gilt das ausdrücklich nicht, denn die Daten liegen auf beiden Servern.' },
        { text: 'Nein, beide Server sind gleich wichtig',
          antwort: 'Für die Verfügbarkeit nicht: Wenn einer ausfällt, läuft der andere weiter. Dieser Effekt hat einen eigenen Namen – und gilt nur für die Verfügbarkeit.' }
      ] },

    { typ: 'merk', text: '<b>Schutzbedarfsermittlung</b>: Wie groß wäre der Schaden bei Verletzung von V, I oder A? Stufen niedrig/mittel/hoch (BSI: normal/hoch/sehr hoch). <b>Maximumprinzip</b> (höchster Wert), <b>Kumulation</b> (viele kleine summieren sich), <b>Verteilung</b> (redundant → nur für Verfügbarkeit niedriger).' },

    { typ: 'nachricht', text: 'Danke. Ich trage im Fragebogen „in Vorbereitung" ein – und bitte Sie, mir bis Monatsende einen Vorschlag für unsere wichtigsten Anwendungen zu machen.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-03',
  kontakt: 'chefin',
  titel: 'Die Arztpraxis als Übungsfall',
  thema: 'Schutzbedarf',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Meine Nachbarin führt eine Arztpraxis und hat mich gefragt, wie sie ihre Daten einstufen soll. Üben wir das gemeinsam – dann kann ich ihr antworten und wir beide lernen etwas.' },
    { typ: 'nachricht', text: 'In ihrem System liegen drei Arten von Informationen: die Öffnungszeiten der Praxis, Namen und Telefonnummern der Patienten ohne Behandlungsangaben – und Diagnosen samt Untersuchungsergebnissen.' },

    { typ: 'frage', text: 'Wie stufen Sie die <b>Öffnungszeiten</b> ein?',
      optionen: [
        { text: 'Niedrig', richtig: true,
          antwort: 'Richtig. Die Öffnungszeiten hängen an der Tür und stehen im Internet – ein Vertraulichkeitsschaden ist kaum denkbar. Denkbar wäre allenfalls, dass jemand sie nutzt, um einen Einbruch außerhalb der Öffnungszeiten zu planen. Der Schaden bleibt gering und überschaubar.' },
        { text: 'Mittel',
          antwort: 'Zu hoch für eine Information, die öffentlich aushängt. Maßstab ist immer der <b>schwerwiegendste denkbare Schaden</b> – und der ist hier klein.' }
      ] },

    { typ: 'frage', text: 'Und <b>Namen und Telefonnummern</b> der Patienten, ohne Angaben zur Behandlung?',
      optionen: [
        { text: 'Mittel', richtig: true,
          antwort: 'Gut begründet. Es sind personenbezogene Daten, aber ohne medizinischen Inhalt. Werden sie bekannt, drohen unerwünschte Kontaktaufnahme oder Missbrauch für Betrugsmaschen – spürbarer Schaden mit begrenzten Folgen. Allerdings: Schon die Tatsache, <b>dass</b> jemand Patient dieser Praxis ist, kann je nach Fachrichtung heikel sein.' },
        { text: 'Niedrig',
          antwort: 'Zu niedrig. Es sind personenbezogene Daten, und ein Leck hätte spürbare Folgen für die Betroffenen.' },
        { text: 'Hoch',
          antwort: 'Vertretbar, wenn Sie auf die Fachrichtung abstellen – bei einer allgemeinen Praxis ohne Behandlungsangaben ist „mittel" die übliche Einstufung. Entscheidend ist, dass Sie Ihre Zuordnung <b>begründen</b>.' }
      ] },

    { typ: 'frage', text: 'Und die <b>Diagnosen und Untersuchungsergebnisse</b>?',
      optionen: [
        { text: 'Hoch', richtig: true, norm: 'besondere Kategorie (Gesundheitsdaten)',
          antwort: 'Eindeutig. Das sind <b>Gesundheitsdaten</b> und damit eine [[besondere Kategorien|besondere Kategorie]]. Werden sie öffentlich, drohen schwerwiegende Folgen: Stigmatisierung, Nachteile bei Versicherung oder Arbeitgeber, massiver Vertrauensverlust für die Praxis – dazu empfindliche Bußgelder.' },
        { text: 'Mittel',
          antwort: 'Zu niedrig. Gesundheitsdaten gehören zu den besonders geschützten Datenarten; bei einer Offenlegung drohen für die Betroffenen schwerwiegende, teils dauerhafte Nachteile.' }
      ] },

    { typ: 'nachricht', text: 'Worauf muss man bei der Begründung achten? Meine Nachbarin wird fragen, warum ich das so einschätze.' },

    { typ: 'frage', text: 'Was gehört in eine gute Begründung?',
      optionen: [
        { text: 'Der schwerwiegendste Schaden, der entstehen könnte', richtig: true,
          antwort: 'Genau. Man fragt für jede Information: Was passiert im schlimmsten Fall, wenn sie <b>ausfällt</b>, <b>unbemerkt verfälscht</b> wird oder <b>Unbefugten bekannt</b> wird? Nicht die Stufe selbst bringt die Punkte, sondern diese Begründung.' },
        { text: 'Wie viel die Daten gekostet haben',
          antwort: 'Der Beschaffungswert spielt keine Rolle. Es geht um den <b>Schaden für die Betroffenen und die Praxis</b>.' }
      ] },

    { typ: 'frage', text: 'Noch eine: Bei den Diagnosen – welches Schutzziel ist dort am wichtigsten?',
      optionen: [
        { text: 'Alle drei, aber mit unterschiedlichem Gewicht', richtig: true,
          antwort: 'Sehr gute Antwort. Man bewertet jedes Ziel <b>einzeln</b>: Die <b>Vertraulichkeit</b> ist hoch, weil eine Offenlegung dramatisch wäre. Die <b>Integrität</b> ist ebenfalls hoch – eine verfälschte Diagnose kann Menschen gefährden. Die <b>Verfügbarkeit</b> ist in einer Praxis mit Terminbetrieb etwas geringer als in einer Notaufnahme.' },
        { text: 'Nur die Vertraulichkeit',
          antwort: 'Das greift zu kurz. Überlegen Sie, was eine <b>verfälschte</b> Diagnose anrichten könnte – oder wenn die Ärztin im Notfall nicht an die Daten kommt. Man bewertet jedes Ziel einzeln.' }
      ] },

    { typ: 'merk', text: 'Schutzbedarf über den <b>schwerwiegendsten denkbaren Schaden</b> begründen – und <b>jedes Schutzziel einzeln</b> bewerten. Gesundheitsdaten sind praktisch immer <b>hoch</b>.' },

    { typ: 'nachricht', text: 'Ich rufe sie heute Abend an. Danke für die Übung – mir ist dabei klar geworden, dass wir unsere eigene Liste noch nicht haben.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-04',
  kontakt: 'chefin',
  titel: 'Brauchen wir einen DSB oder einen ISB?',
  thema: 'Rollen (DSB & ISB)',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Ich bekomme ständig Werbung für „externe Datenschutzbeauftragte" und für „Informationssicherheitsbeauftragte". Brauchen wir beide? Und was machen die eigentlich?' },
    { typ: 'nachricht', text: 'Herrn Olschewski haben wir ja schon. Aber ich möchte verstehen, wofür genau.' },

    { typ: 'mehrfach', text: 'Welche Aufgaben hat der Informationssicherheitsbeauftragte (ISB)? (mehrere)',
      optionen: [
        { text: 'Sicherheitsleitlinie und Sicherheitskonzept erstellen und pflegen', richtig: true },
        { text: 'Risikoanalysen und Schutzbedarfsfeststellungen durchführen', richtig: true },
        { text: 'Betroffenenanfragen von Kunden beantworten' },
        { text: 'Die Leitung beraten, Beschäftigte schulen, Vorfälle bearbeiten', richtig: true },
        { text: 'Das Verzeichnis von Verarbeitungstätigkeiten führen' }
      ],
      antwortRichtig: 'Richtig. Der <b>[[IT-Sicherheitsbeauftragter|ISB]]</b> kümmert sich um Konzept, Risikoanalyse, Umsetzungskontrolle, Schulung, Vorfallsbearbeitung und Bericht an die Leitung. Sein Ziel: Vertraulichkeit, Integrität und Verfügbarkeit <b>aller</b> Informationen dauerhaft auf angemessenem Niveau halten. Betroffenenanfragen und das Verarbeitungsverzeichnis gehören zum Datenschutzbeauftragten.',
      antwortFalsch: 'Zwei der Punkte sind klassische Aufgaben des <b>Datenschutz</b>beauftragten. Überlegen Sie, welche sich auf <b>personenbezogene</b> Daten und die Rechte Betroffener beziehen.' },

    { typ: 'mehrfach', text: 'Und welche Aufgaben hat der Datenschutzbeauftragte (DSB)? (mehrere)',
      optionen: [
        { text: 'Einhaltung von DSGVO und BDSG überwachen', richtig: true },
        { text: 'Leitung und Beschäftigte unterrichten, beraten und schulen', richtig: true },
        { text: 'Firewalls konfigurieren' },
        { text: 'Ansprechpartner für Betroffene und die Aufsichtsbehörde sein', richtig: true },
        { text: 'Bei der Datenschutz-Folgenabschätzung beraten', richtig: true }
      ],
      antwortRichtig: 'Genau. Der <b>[[Datenschutzbeauftragter|DSB]]</b> überwacht, berät, schult, wirkt am [[Verzeichnis von Verarbeitungstätigkeiten|Verarbeitungsverzeichnis]] mit und ist Anlaufstelle für Betroffene und Aufsichtsbehörde. Firewalls konfiguriert die IT – der DSB prüft nur, ob die Maßnahmen angemessen sind.',
      antwortFalsch: 'Der DSB <b>berät und überwacht</b>, er setzt nicht selbst technisch um.' },

    { typ: 'nachricht', text: 'Wo liegt der Unterschied – in einem Satz, den ich mir merken kann?' },

    { typ: 'frage', text: 'Was unterscheidet die beiden Rollen?',
      optionen: [
        { text: 'Der DSB schützt Menschen, der ISB schützt Informationen und Systeme', richtig: true,
          antwort: 'Das ist der Kern. Der <b>DSB</b> achtet auf die Rechtmäßigkeit der Verarbeitung personenbezogener Daten und die Rechte der Betroffenen – rechtlich-organisatorische Sicht, weisungsfrei, kontrollierend und beratend. Der <b>ISB</b> schützt <b>alle</b> Informationen, auch nicht personenbezogene wie Kalkulationen, und ist für Konzeption und Umsetzung zuständig.' },
        { text: 'Der DSB ist extern, der ISB intern',
          antwort: 'Beides ist in beiden Rollen möglich. Der Unterschied liegt im <b>Gegenstand</b>, nicht in der Anstellung.' }
      ] },

    { typ: 'nachricht', text: 'Nun die Frage, die mich praktisch betrifft: Müssen wir einen DSB überhaupt haben? Wir sind 48 Personen.' },

    { typ: 'frage', text: 'Wann besteht die Benennungspflicht?',
      optionen: [
        { text: 'Unter anderem bei mindestens 20 Personen, die ständig personenbezogene Daten automatisiert verarbeiten', richtig: true, norm: '§ 38 BDSG',
          antwort: 'Richtig. Dazu kommen weitere Fälle unabhängig von der Zahl: wenn eine [[Datenschutz-Folgenabschätzung|DSFA]] erforderlich ist, bei geschäftsmäßiger Übermittlung, bei umfangreicher systematischer Überwachung als Kerntätigkeit oder bei umfangreicher Verarbeitung besonderer Kategorien. Bei uns greift die 20-Personen-Grenze.' },
        { text: 'Ab 50 Beschäftigten',
          antwort: 'Nicht die Zahl der Beschäftigten ist entscheidend, sondern wie viele <b>ständig mit automatisierter Verarbeitung personenbezogener Daten</b> beschäftigt sind – die Grenze liegt niedriger.' }
      ] },

    { typ: 'frage', text: 'Könnte unser IT-Leiter den Datenschutz übernehmen? Das wäre günstiger.',
      optionen: [
        { text: 'Nein, das wäre ein Interessenkonflikt', richtig: true, norm: 'Art. 38 Abs. 6 DSGVO',
          antwort: 'Richtig, und das ist ein beliebtes Prüfungsthema. Der DSB darf keine Aufgaben haben, bei denen er sich <b>selbst kontrollieren</b> müsste. IT-Leiter, Personalleiter und Geschäftsführung sind deshalb ungeeignet. Deswegen haben wir Herrn Olschewski extern.' },
        { text: 'Ja, er kennt die Systeme am besten',
          antwort: 'Genau das ist das Problem: Er müsste seine eigenen Entscheidungen überwachen. Das ist ein [[Interessenkonflikt]] und unzulässig.' }
      ] },

    { typ: 'frage', text: 'Welche Stellung hat ein Datenschutzbeauftragter?',
      optionen: [
        { text: 'Weisungsfrei, Benachteiligungsverbot, berichtet an die oberste Leitung', richtig: true,
          antwort: 'Richtig. Er ist bei seinen Aufgaben <b>weisungsfrei</b> – ich darf ihm nicht vorschreiben, wie er zu bewerten hat. Er darf wegen seiner Tätigkeit nicht benachteiligt werden, berichtet direkt an mich und unterliegt der Verschwiegenheit. Ein <b>interner</b> DSB hat zusätzlich besonderen Kündigungsschutz.' },
        { text: 'Er ist der IT-Leitung unterstellt',
          antwort: 'Das wäre gerade falsch – dann könnte er die IT nicht unabhängig prüfen. Er ist <b>weisungsfrei</b> und berichtet an die oberste Leitung.' }
      ] },

    { typ: 'frage', text: 'Und wer haftet, wenn die Aufsichtsbehörde ein Bußgeld verhängt?',
      optionen: [
        { text: 'Das Unternehmen, vertreten durch mich', richtig: true, norm: 'Art. 4 Nr. 7, Art. 83 DSGVO',
          antwort: 'Richtig – und das ist der wichtigste Satz dieses Gesprächs. Das Unternehmen ist der <b>[[Verantwortlicher|Verantwortliche]]</b>. Sie können Aufgaben delegieren, die Verantwortung aber nicht. Der Bußgeldrahmen reicht bis <b>20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes</b> – je nachdem, was höher ist.' },
        { text: 'Der Datenschutzbeauftragte',
          antwort: 'Nein. Der DSB <b>berät und überwacht</b>, er haftet nicht für Verstöße des Unternehmens – deshalb ist er auch weisungsfrei. Verantwortlich bleibt die Geschäftsführung.' }
      ] },

    { typ: 'nachricht', text: 'Das wollte ich eigentlich nicht hören. Aber es ist gut, es zu wissen.' },

    { typ: 'frage', text: 'Ist ein ISB für uns gesetzlich vorgeschrieben?',
      optionen: [
        { text: 'In der Regel nicht, aber häufig von Kunden und Normen gefordert', richtig: true,
          antwort: 'Richtig. Für normale Unternehmen besteht keine allgemeine Pflicht – anders als beim DSB. Verlangt wird die Rolle aber von Normen wie [[ISO/IEC 27001]], vom [[BSI IT-Grundschutz]], in bestimmten Branchen und zunehmend von großen Kunden in Verträgen. Bei kritischer Infrastruktur sieht das anders aus.' },
        { text: 'Ja, jede Firma braucht einen ISB',
          antwort: 'Eine allgemeine gesetzliche Pflicht gibt es nicht – im Unterschied zum DSB. Gefordert wird die Rolle aber von Normen, Branchenvorgaben und oft von Kunden.' }
      ] },

    { typ: 'merk', text: '<b>DSB</b>: personenbezogene Daten, Rechte Betroffener, weisungsfrei, berät und überwacht, Pflicht ab 20 Personen mit automatisierter Verarbeitung (§ 38 BDSG), kein Interessenkonflikt. <b>ISB</b>: alle Informationen, Sicherheitskonzept, meist nicht gesetzlich vorgeschrieben. <b>Haftung bleibt bei der Geschäftsführung.</b>' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-05',
  kontakt: 'chefin',
  titel: 'Seit Jahren hat das niemand geprüft',
  thema: 'Praxisfälle',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Ich muss Ihnen etwas anvertrauen. Ein befreundeter Unternehmer hat mir seine Lage geschildert, und mir ist dabei unbehaglich geworden – weil einiges auch auf uns zutrifft.' },
    { typ: 'nachricht', text: 'Bei ihm gilt: Seit Jahren keine Überprüfung der Sicherheitsmaßnahmen. Keine aktuellen Datensicherungen. Alle Mitarbeiter nutzen <b>ein gemeinsames Passwort</b>, das für mehrere Systeme gilt. Zugriffsrechte werden bei einem Abteilungswechsel nicht angepasst.' },
    { typ: 'nachricht', text: 'Jetzt ist zweierlei passiert: Ein Mitarbeiter hat festgestellt, dass er nach seinem Wechsel immer noch die <b>Gehaltsdaten</b> seiner alten Abteilung einsehen kann. Und gleichzeitig ist der zentrale Server ausgefallen – niemand kommt an die Daten.' },

    { typ: 'mehrfach', text: 'Welche Schutzziele sind durch die beiden Vorfälle betroffen? (mehrere)',
      optionen: [
        { text: 'Vertraulichkeit', richtig: true },
        { text: 'Integrität' },
        { text: 'Verfügbarkeit', richtig: true }
      ],
      antwortRichtig: '<b>Vertraulichkeit:</b> Der Mitarbeiter sieht Gehaltsdaten, für die er nicht mehr berechtigt ist – unbefugter Zugriff, verstärkt durch das gemeinsame Passwort. <b>Verfügbarkeit:</b> Durch den Serverausfall kommt niemand an wichtige Daten. Die <b>Integrität</b> ist in den geschilderten Vorfällen nicht unmittelbar betroffen – es wurde nichts verfälscht.',
      antwortFalsch: 'Schauen Sie genau hin: Jemand <b>sieht</b> etwas, das er nicht sehen darf. Und niemand <b>kommt heran</b>. Wurde irgendwo etwas <b>verändert</b>?' },

    { typ: 'mehrfach', text: 'Welche Risiken ergeben sich aus den fehlenden Maßnahmen? (mehrere)',
      optionen: [
        { text: 'Niemand kann nachvollziehen, wer was getan hat', richtig: true },
        { text: 'Ein bekannt gewordenes Passwort öffnet gleich mehrere Systeme', richtig: true },
        { text: 'Bei Ausfall oder Ransomware sind die Daten dauerhaft weg', richtig: true },
        { text: 'Die Stromkosten steigen' },
        { text: 'Rechte wachsen über Jahre an und niemand merkt es', richtig: true }
      ],
      antwortRichtig: 'Alle vier. <b>Gemeinsames Passwort</b> → keine Nachvollziehbarkeit, bei einem Leck sind mehrere Systeme offen, unberechtigte Zugriffe bleiben unbemerkt. <b>Keine Datensicherung</b> → bei Ausfall, Defekt oder Ransomware sind die Daten dauerhaft verloren und der Betrieb steht – im Zweifel ein Existenzrisiko. Dazu Berechtigungs-Wildwuchs und fehlende Überprüfung.',
      antwortFalsch: 'Die Stromkosten haben damit nichts zu tun. Alle anderen Punkte sind reale Folgen.' },

    { typ: 'nachricht', text: 'Was würden ISB und DSB in so einer Lage tun? Ich möchte die Zuständigkeiten verstehen, bevor ich jemanden beauftrage.' },

    { typ: 'frage', text: 'Wer macht was?',
      optionen: [
        { text: 'Der ISB kümmert sich um Technik und Konzept, der DSB um Melde- und Informationspflichten', richtig: true,
          antwort: 'Richtig. Der <b>ISB</b> analysiert den Vorfall, leitet Sofortmaßnahmen ein – Server wiederherstellen, Daten aus Sicherungen retten, Berechtigungen und Passwörter korrigieren –, erstellt ein Sicherheitskonzept mit Risikoanalyse und Schutzbedarfsfeststellung und prüft regelmäßig. Der <b>DSB</b> prüft, ob eine Datenschutzverletzung vorliegt, berät zu Melde- und Informationspflichten – Aufsichtsbehörde binnen <b>72 Stunden</b>, bei hohem Risiko auch die Betroffenen – und schult.' },
        { text: 'Beide machen dasselbe, nur mit anderem Titel',
          antwort: 'Nein. Der ISB ist für <b>Technik und Konzept</b> zuständig, der DSB für <b>Rechtmäßigkeit und Betroffenenrechte</b>. Bei einem Vorfall arbeiten sie eng zusammen – jeder aus seiner Perspektive.' }
      ] },

    { typ: 'frage', text: 'Ist der unberechtigte Blick auf Gehaltsdaten eine meldepflichtige Datenpanne?',
      optionen: [
        { text: 'Das muss geprüft werden – wahrscheinlich ja', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Gut abgewogen. Es liegt eine <b>unbefugte Offenlegung</b> gegenüber einer Person vor, die nicht berechtigt war – das ist eine [[Datenpanne]]. Gemeldet wird, wenn ein Risiko für die Betroffenen nicht unwahrscheinlich ist. Bei Gehaltsdaten gegenüber einem Kollegen wäre ich vorsichtig und würde melden.' },
        { text: 'Nein, es war ja ein eigener Mitarbeiter',
          antwort: 'Das schützt nicht. Entscheidend ist nicht, <b>wer</b> die Daten gesehen hat, sondern dass er <b>nicht berechtigt</b> war. Auch interne unbefugte Zugriffe sind Datenpannen.' }
      ] },

    { typ: 'mehrfach', text: 'Die drei wichtigsten Verbesserungen: (drei)',
      optionen: [
        { text: 'Regelmäßige, getestete Datensicherungen plus Notfallplan', richtig: true },
        { text: 'Individuelle Konten mit starken Passwörtern und 2FA', richtig: true },
        { text: 'Berechtigungskonzept nach Need-to-know, Rechte bei Wechsel sofort anpassen', richtig: true },
        { text: 'Einen zweiten Internetanschluss bestellen' },
        { text: 'Die Festplatten gegen größere tauschen' }
      ],
      antwortRichtig: 'Genau diese drei. Dazu gehören regelmäßige <b>Sicherheitsüberprüfungen</b> und <b>Schulungen</b> – denn das eigentliche Problem war, dass jahrelang niemand hingeschaut hat. Sicherheit ist kein Zustand, sondern ein Prozess ([[PDCA]]).',
      antwortFalsch: 'Mehr Hardware löst keines der geschilderten Probleme. Es fehlen <b>Sicherungen</b>, <b>persönliche Zugänge</b> und ein <b>Berechtigungskonzept</b>.' },

    { typ: 'frage', text: 'Was antworte ich meinem Bekannten auf die Frage, was ihn das kostet?',
      optionen: [
        { text: 'Weniger als ein einziger Betriebsausfall', richtig: true,
          antwort: 'So würde ich argumentieren. Rechnen Sie einen Tag Stillstand durch: Umsatzausfall, Vertragsstrafen, Überstunden, Wiederherstellung, Kundenverlust. Backups und ein Berechtigungskonzept kosten einen Bruchteil davon. Das ist die Sprache, die in der Geschäftsführung verstanden wird.' },
        { text: 'Sicherheit ist leider sehr teuer',
          antwort: 'Das ist die Antwort, mit der man kein Budget bekommt. Stellen Sie die Kosten dem <b>Schaden eines einzigen Ausfalls</b> gegenüber – dann wird die Rechnung eindeutig.' }
      ] },

    { typ: 'merk', text: 'Klassisches Sünden-Trio: <b>keine Backups</b>, <b>gemeinsames Passwort</b>, <b>nicht angepasste Rechte</b>. Gegenmittel: getestete Sicherungen mit Notfallplan, persönliche Konten mit 2FA, Berechtigungskonzept nach Need-to-know – und regelmäßige Überprüfung.' },

    { typ: 'nachricht', text: 'Setzen Sie mir das bitte als Vorlage auf. Ich bringe es in die nächste Leitungsrunde – und zwar für uns, nicht für meinen Bekannten.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-06',
  kontakt: 'chefin',
  titel: 'Compliance – mehr als Datenschutz',
  thema: 'Compliance',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Unser Steuerberater hat das Wort „Compliance" verwendet und ich habe gemerkt, dass ich es nur ungefähr verstehe.' },
    { typ: 'nachricht', text: 'Für mich war das bisher ein Synonym für Datenschutz.' },

    { typ: 'frage', text: 'Was bedeutet Compliance?',
      optionen: [
        { text: 'Regeltreue – Einhaltung von Gesetzen und internen Richtlinien', richtig: true,
          antwort: 'Genau. [[Compliance]] heißt Einhaltung von Gesetzen, internen Richtlinien und freiwilligen Selbstverpflichtungen. Datenschutz und Informationssicherheit sind <b>Teilbereiche</b> davon, nicht das Ganze.' },
        { text: 'Die Einhaltung der DSGVO',
          antwort: 'Das ist nur ein Ausschnitt. Compliance umfasst sehr viel mehr – von Korruptionsprävention über Lizenzrecht bis zu Aufbewahrungsfristen.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört zu einem Compliance-Management-System? (mehrere)',
      optionen: [
        { text: 'Verhaltenskodex (Code of Conduct)', richtig: true },
        { text: 'Interne Richtlinien', richtig: true },
        { text: 'Schulungen', richtig: true },
        { text: 'Kontrollen und klare Zuständigkeiten', richtig: true },
        { text: 'Hinweisgebersystem', richtig: true },
        { text: 'Ein höheres Marketingbudget' }
      ],
      antwortRichtig: 'Richtig. Der [[Code of Conduct]] regelt das Verhalten – Umgang mit Geschenken, Interessenkonflikte, Vertraulichkeit. Dazu interne Richtlinien, Schulungen, Kontrollen, benannte Zuständige und ein [[Hinweisgebersystem]].',
      antwortFalsch: 'Ein Punkt gehört nicht dazu. Überlegen Sie, was der <b>Einhaltung von Regeln</b> dient.' },

    { typ: 'frage', text: 'Was ist ein Hinweisgebersystem?',
      optionen: [
        { text: 'Eine Meldestelle, über die auch anonym Verstöße gemeldet werden können', richtig: true, norm: 'Hinweisgeberschutzgesetz',
          antwort: 'Richtig. Beschäftigte können dort Verstöße melden, auch anonym. Wichtig: Hinweisgeber sind vor Benachteiligung <b>geschützt</b> – Kündigung oder Versetzung als Reaktion ist unzulässig. Ab einer bestimmten Unternehmensgröße ist ein solches System verpflichtend.' },
        { text: 'Ein System, das auf Sicherheitslücken hinweist',
          antwort: 'Das wäre ein technisches Werkzeug. Das [[Hinweisgebersystem]] ist eine <b>organisatorische</b> Meldestelle für Regelverstöße im Unternehmen.' }
      ] },

    { typ: 'nachricht', text: 'Und was fällt bei uns konkret unter IT-Compliance? Außer dem Datenschutz.' },

    { typ: 'mehrfach', text: 'Welche Vorgaben gehören zur IT-Compliance? (mehrere)',
      optionen: [
        { text: 'DSGVO und BDSG', richtig: true },
        { text: 'Aufbewahrungsfristen nach HGB, AO und GoBD', richtig: true },
        { text: 'Lizenzrecht bei Software', richtig: true },
        { text: 'Einwilligung für Cookies nach TDDDG', richtig: true },
        { text: 'Die Garantiebedingungen der Hardwarehersteller' }
      ],
      antwortRichtig: 'Richtig. Besonders die [[GoBD]] werden unterschätzt: Rechnungen müssen revisionssicher und <b>unveränderbar</b> archiviert werden. Und beim [[Lizenzrecht]] haftet die Geschäftsführung persönlich – unlizenzierte Software im Betrieb ist kein Kavaliersdelikt.',
      antwortFalsch: 'Ein Punkt ist eine zivilrechtliche Vereinbarung mit einem Lieferanten, keine Compliance-Vorgabe.' },

    { typ: 'frage', text: 'Was bedeuten die GoBD für unsere Archivierung?',
      optionen: [
        { text: 'Belege müssen unveränderbar und nachvollziehbar archiviert werden', richtig: true,
          antwort: 'Genau. Eine Rechnung, die man nachträglich unbemerkt ändern kann, erfüllt die [[GoBD]] nicht. Interessant ist die Verbindung zur Informationssicherheit: Hier verlangt das Steuerrecht faktisch <b>Integrität</b> – dasselbe Schutzziel, nur mit anderer Begründung.' },
        { text: 'Belege müssen zehn Jahre auf Papier aufbewahrt werden',
          antwort: 'Papier ist nicht verlangt – elektronisch ist zulässig. Entscheidend ist, dass die Archivierung <b>unveränderbar und nachvollziehbar</b> ist.' }
      ] },

    { typ: 'frage', text: 'Welche Folgen drohen bei Compliance-Verstößen?',
      optionen: [
        { text: 'Bußgelder, Schadenersatz, persönliche Haftung der Leitung, Imageschaden', richtig: true,
          antwort: 'Richtig, und der letzte Punkt wird oft unterschätzt: Der Imageschaden hält länger als das Bußgeld. Dazu kommt bei uns ein konkretes Risiko – große Kunden verlangen inzwischen Nachweise, und ohne die verlieren wir Aufträge.' },
        { text: 'Nur Bußgelder',
          antwort: 'Das wäre die angenehme Variante. Es kommen Schadenersatzansprüche, <b>persönliche Haftung</b> der Leitung und Imageschaden hinzu – und zunehmend der Verlust von Aufträgen.' }
      ] },

    { typ: 'frage', text: 'Wer trägt im Unternehmen die Verantwortung für Compliance?',
      optionen: [
        { text: 'Die Geschäftsführung', richtig: true,
          antwort: 'Richtig – auch hier. Man kann einen Compliance-Beauftragten benennen, der aufbaut, schult und kontrolliert. Die <b>Verantwortung</b> bleibt bei der Leitung. Das ist bei Datenschutz, Informationssicherheit und Compliance identisch: Aufgaben lassen sich delegieren, Verantwortung nicht.' },
        { text: 'Der Compliance-Beauftragte',
          antwort: 'Der <b>organisiert</b> es. Verantwortlich bleibt die Geschäftsführung – das Muster ist bei DSB, ISB und Compliance-Beauftragtem immer dasselbe.' }
      ] },

    { typ: 'merk', text: '<b>Compliance</b> = Regeltreue; Datenschutz und IT-Sicherheit sind Teilbereiche. Bausteine: Code of Conduct, Richtlinien, Schulungen, Kontrollen, Zuständigkeiten, Hinweisgebersystem. IT-Compliance: DSGVO, GoBD, Lizenzrecht, TDDDG. <b>Verantwortung immer bei der Leitung.</b>' },

    { typ: 'nachricht', text: 'Sehr aufschlussreich. Ich setze Compliance auf die Agenda der nächsten Leitungsrunde – und zwar vor dem Punkt „Sonstiges".' }
  ]
});
