/* ===========================================================
   AUDIT – data/dialoge-chefin.js
   Frau Hagedorn, Geschäftsführung:
   Schutzziele, Schutzbedarf, DSB und ISB, Compliance, Haftung.
   Sie ist die Verantwortliche im Sinne der DSGVO und fragt
   entsprechend nach: Was kostet das, und warum brauchen wir das?
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'gf-01',
  kontakt: 'chefin',
  titel: 'Erklären Sie mir die drei Schutzziele',
  thema: 'Schutzziele',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Guten Morgen. Ich war gestern auf einer Veranstaltung der IHK, da fiel ständig der Begriff „Schutzziele".' },
    { typ: 'nachricht', text: 'Ich habe genickt, aber ehrlich gesagt nicht nachgefragt. Können Sie mir das in Ruhe erklären?' },

    { typ: 'frage', text: 'Welche drei Schutzziele sind gemeint?',
      optionen: [
        { text: 'Vertraulichkeit, Integrität, Verfügbarkeit', richtig: true,
          antwort: 'Richtig, die klassische Dreiheit – im Englischen <b>CIA-Triade</b>: Confidentiality, Integrity, Availability. Jede Sicherheitsmaßnahme im Haus dient mindestens einem dieser drei Ziele.' },
        { text: 'Datenschutz, Datensicherheit, Datensparsamkeit',
          antwort: 'Das sind Begriffe aus dem Datenschutzrecht. Die drei <b>Schutzziele</b> der Informationssicherheit heißen anders.' },
        { text: 'Prävention, Detektion, Reaktion',
          antwort: 'Das sind Phasen im Umgang mit Vorfällen – nützlich, aber nicht die Schutzziele.' }
      ] },

    { typ: 'nachricht', text: 'Und was heißt das jeweils konkret? Erklären Sie es mir an unserem Betrieb.' },

    { typ: 'karte', titel: 'Die drei Schutzziele', quelle: 'schutzziele' },

    { typ: 'frage', text: 'Unser Versandsystem fällt einen Tag lang aus. Welches Ziel ist betroffen?',
      optionen: [
        { text: 'Verfügbarkeit', richtig: true,
          antwort: 'Genau. Berechtigte kommen nicht an Daten und Dienste, wenn sie sie brauchen. Bei uns heißt das: Es wird nichts ausgeliefert, und das kostet unmittelbar Geld.' },
        { text: 'Integrität',
          antwort: 'Die wäre betroffen, wenn die Daten <b>falsch</b> wären. Hier sind sie richtig – nur eben nicht erreichbar.' }
      ] },

    { typ: 'frage', text: 'Und wenn eine Mitarbeiterin die Lieferantenpreise heimlich verändert?',
      optionen: [
        { text: 'Integrität', richtig: true,
          antwort: 'Richtig. Die Daten sind nicht mehr korrekt und vertrauenswürdig. Gegenmaßnahmen: Protokollierung, Vier-Augen-Prinzip bei kritischen Änderungen, saubere Berechtigungen.' },
        { text: 'Vertraulichkeit',
          antwort: 'Die wäre betroffen, wenn sie die Preise nur <b>angesehen</b> und weitergegeben hätte. Verändern betrifft ein anderes Ziel.' }
      ] },

    { typ: 'nachricht', text: 'Das ergibt Sinn. Es gibt noch zwei weitere Begriffe, die gefallen sind – Authentizität und Verbindlichkeit?' },

    { typ: 'frage', text: 'Was bedeutet Verbindlichkeit?',
      optionen: [
        { text: 'Eine Handlung kann später nicht abgestritten werden', richtig: true,
          antwort: 'Richtig. Man spricht auch von <b>Nichtabstreitbarkeit</b>. Beispiel bei uns: Eine Freigabe für eine Überweisung ist protokolliert und signiert – niemand kann hinterher sagen, er sei es nicht gewesen. Verwandt ist die [[Authentizität]]: Eine Information oder ein Absender ist nachweislich echt.' },
        { text: 'Die Daten sind verbindlich gespeichert',
          antwort: 'Nicht ganz – es geht nicht ums Speichern, sondern darum, dass eine <b>Handlung</b> einer Person eindeutig zugerechnet werden kann.' }
      ] },

    { typ: 'merk', text: '<b>Vertraulichkeit</b> = nur Berechtigte sehen es · <b>Integrität</b> = es stimmt und ist unverändert · <b>Verfügbarkeit</b> = es ist da, wenn man es braucht. Ergänzend: Authentizität (echt) und Verbindlichkeit (nicht abstreitbar).' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-02',
  kontakt: 'chefin',
  titel: 'Wozu eine Schutzbedarfsermittlung?',
  thema: 'Schutzbedarf',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Unser Versicherer fragt, ob wir eine „Schutzbedarfsermittlung" durchgeführt haben. Was will er von mir?' },

    { typ: 'frage', text: 'Was ist eine Schutzbedarfsermittlung?',
      optionen: [
        { text: 'Eine Bewertung, wie viel Schutz Daten und Systeme brauchen', richtig: true,
          antwort: 'Genau. Für jede Information, Anwendung und jedes IT-System wird bewertet, welchen Schutz sie bei <b>Vertraulichkeit, Integrität und Verfügbarkeit</b> brauchen. Maßstab ist der Schaden, der bei Verletzung des jeweiligen Ziels entstehen würde.' },
        { text: 'Eine Zählung aller Geräte im Unternehmen',
          antwort: 'Das wäre eine Inventarisierung – hilfreich als Grundlage, aber nicht dasselbe. Es geht um die <b>Bewertung</b>, nicht ums Zählen.' },
        { text: 'Eine Prüfung durch die Aufsichtsbehörde',
          antwort: 'Nein, das machen wir selbst. Die Behörde prüft allenfalls, ob wir es getan haben.' }
      ] },

    { typ: 'nachricht', text: 'Und warum sollte ich dafür Zeit und Geld ausgeben?' },

    { typ: 'frage', text: 'Was ist der wirtschaftliche Nutzen?',
      optionen: [
        { text: 'Maßnahmen werden gezielt dort eingesetzt, wo sie nötig sind', richtig: true,
          antwort: 'Das ist das Argument. Besonders schutzbedürftige Daten bekommen starken Schutz, weniger wichtige weniger. So vermeidet man <b>Über- und Unterschutz</b> – man gibt kein Geld für Unnötiges aus und steht an den wichtigen Stellen nicht nackt da.' },
        { text: 'Die Versicherung wird dadurch billiger',
          antwort: 'Kann ein Nebeneffekt sein, ist aber nicht der Kern. Der eigentliche Nutzen liegt im gezielten Einsatz der Mittel.' },
        { text: 'Man braucht danach keine weiteren Maßnahmen',
          antwort: 'Im Gegenteil – die Ermittlung ist die <b>Grundlage</b> für die Auswahl der Maßnahmen, nicht ihr Ersatz.' }
      ] },

    { typ: 'nachricht', text: 'In welchen Stufen bewertet man das?' },

    { typ: 'frage', text: 'Welche Einstufung ist gebräuchlich?',
      optionen: [
        { text: 'niedrig – mittel – hoch', richtig: true,
          antwort: 'Richtig, das ist eine übliche Dreiteilung: <b>niedrig</b> = geringer, überschaubarer Schaden · <b>mittel</b> = spürbarer Schaden mit begrenzten Folgen · <b>hoch</b> = erheblicher Schaden mit schwerwiegenden Folgen. Der BSI-Standard nennt dieselben drei Stufen <b>normal, hoch und sehr hoch</b> – gemeint ist dasselbe Prinzip. Fragen Sie in der Prüfung ruhig nach, welche Skala gemeint ist.' },
        { text: 'A – B – C',
          antwort: 'Das kennt man aus der ABC-Analyse in der Materialwirtschaft. Beim Schutzbedarf arbeitet man mit beschreibenden Stufen.' }
      ] },

    { typ: 'karte', titel: 'Die Stufen nach BSI-Standard', quelle: 'stufen' },

    { typ: 'nachricht', text: 'Eine Sache verstehe ich noch nicht: Wie kommt ein Server zu seinem Schutzbedarf?' },

    { typ: 'frage', text: 'Auf unserem Server laufen die Warenwirtschaft (mittel) und die Lohnbuchhaltung (hoch). Wie wird der Server eingestuft?',
      optionen: [
        { text: 'Hoch – die empfindlichste Anwendung bestimmt', richtig: true,
          antwort: 'Richtig, das ist das <b>[[Maximumprinzip]]</b>: Das System erbt den höchsten Schutzbedarf der Anwendungen, die darauf laufen. Denn wer den Server kompromittiert, erreicht auch die Lohnbuchhaltung.' },
        { text: 'Mittel – das ist der Durchschnitt',
          antwort: 'Gemittelt wird nie. Sonst würde ausgerechnet die empfindlichste Anwendung zu schwach geschützt.' },
        { text: 'Jede Anwendung behält ihren eigenen Wert',
          antwort: 'Die Anwendungen behalten ihre Einstufung, ja – aber das <b>System</b> braucht eine eigene, und die richtet sich nach dem Maximum.' }
      ] },

    { typ: 'merk', text: '<b>Schutzbedarfsermittlung</b>: Wie groß wäre der Schaden bei Verletzung von V, I oder A? Stufen niedrig/mittel/hoch (BSI: normal/hoch/sehr hoch). Systeme erben per <b>Maximumprinzip</b> den höchsten Wert ihrer Anwendungen.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-03',
  kontakt: 'chefin',
  titel: 'Die Arztpraxis unserer Nachbarin',
  thema: 'Schutzbedarf',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Meine Nachbarin führt eine Arztpraxis und hat mich gefragt, wie sie ihre Daten einstufen soll. Üben wir das gemeinsam?' },
    { typ: 'nachricht', text: 'In ihrem System liegen drei Arten von Informationen: die Öffnungszeiten der Praxis, Namen und Telefonnummern der Patienten ohne Behandlungsangaben – und Diagnosen samt Untersuchungsergebnissen.' },

    { typ: 'frage', text: 'Wie stufen Sie die <b>Öffnungszeiten</b> ein?',
      optionen: [
        { text: 'Niedrig', richtig: true,
          antwort: 'Richtig. Die Öffnungszeiten stehen ohnehin an der Tür und im Internet – ein Vertraulichkeitsschaden ist kaum denkbar. Denkbar wäre allenfalls, dass jemand sie nutzt, um einen Einbruch außerhalb der Öffnungszeiten zu planen. Der Schaden bleibt gering und überschaubar.' },
        { text: 'Mittel',
          antwort: 'Zu hoch gegriffen für eine Information, die öffentlich aushängt. Entscheidend ist immer der <b>schwerwiegendste denkbare Schaden</b> – und der ist hier klein.' }
      ] },

    { typ: 'frage', text: 'Und <b>Namen und Telefonnummern</b> der Patienten, ohne Angaben zur Behandlung?',
      optionen: [
        { text: 'Mittel', richtig: true,
          antwort: 'Gut begründet. Es sind personenbezogene Daten, aber ohne medizinischen Inhalt. Werden sie bekannt, drohen unerwünschte Kontaktaufnahme oder Missbrauch für Betrugsmaschen – ein spürbarer Schaden mit begrenzten Folgen. Allerdings: Schon die Tatsache, <b>dass</b> jemand Patient dieser Praxis ist, kann je nach Fachrichtung heikel sein.' },
        { text: 'Niedrig',
          antwort: 'Zu niedrig. Es sind personenbezogene Daten, und ein Leck hätte spürbare Folgen für die Betroffenen.' },
        { text: 'Hoch',
          antwort: 'Verteidigbar, wenn man auf die Fachrichtung abstellt – bei einer allgemeinen Praxis ohne Behandlungsangaben ist „mittel" die üblichere Einstufung. Wichtig ist, dass Sie Ihre Zuordnung <b>begründen</b>.' }
      ] },

    { typ: 'frage', text: 'Und die <b>Diagnosen und Untersuchungsergebnisse</b>?',
      optionen: [
        { text: 'Hoch', richtig: true, norm: 'besondere Kategorie (Gesundheitsdaten)',
          antwort: 'Eindeutig. Das sind <b>Gesundheitsdaten</b> und damit eine [[besondere Kategorien|besondere Kategorie]]. Werden sie öffentlich, drohen schwerwiegende Folgen: Stigmatisierung, Nachteile bei Versicherung oder Arbeitgeber, massiver Vertrauensverlust für die Praxis – dazu Bußgelder. Erheblicher Schaden mit schwerwiegenden Folgen.' },
        { text: 'Mittel',
          antwort: 'Zu niedrig. Gesundheitsdaten gehören zu den besonders geschützten Datenarten; bei einer Offenlegung drohen für die Betroffenen schwerwiegende, teils dauerhafte Nachteile.' }
      ] },

    { typ: 'nachricht', text: 'Worauf muss ich bei der Begründung achten, wenn so etwas in einer Prüfung drankommt?' },

    { typ: 'frage', text: 'Was gehört in eine gute Begründung?',
      optionen: [
        { text: 'Der schwerwiegendste Schaden, der entstehen könnte', richtig: true,
          antwort: 'Genau. Man fragt sich für jede Information: Was passiert im schlimmsten Fall, wenn sie <b>ausfällt</b>, <b>unbemerkt verfälscht</b> wird oder <b>Unbefugten bekannt</b> wird? Die Antwort darauf trägt die Einstufung – nicht die Stufe selbst, sondern die Begründung bringt die Punkte.' },
        { text: 'Wie viel die Daten gekostet haben',
          antwort: 'Der Beschaffungswert spielt keine Rolle. Es geht um den <b>Schaden für die Betroffenen und das Unternehmen</b>.' }
      ] },

    { typ: 'merk', text: 'Schutzbedarf begründet man über den <b>schwerwiegendsten denkbaren Schaden</b> – getrennt für Ausfall (V), Verfälschung (I) und Offenlegung (Vertraulichkeit). Gesundheitsdaten sind praktisch immer <b>hoch</b>.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-04',
  kontakt: 'chefin',
  titel: 'Brauchen wir einen DSB oder einen ISB?',
  thema: 'Rollen (DSB & ISB)',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Ich bekomme ständig Werbung für „externe Datenschutzbeauftragte" und für „Informationssicherheitsbeauftragte". Brauche ich beide? Und was machen die überhaupt?' },

    { typ: 'mehrfach', text: 'Welche Aufgaben hat der Informationssicherheitsbeauftragte (ISB)? (mehrere)',
      optionen: [
        { text: 'Sicherheitsleitlinie und Sicherheitskonzept erstellen und pflegen', richtig: true },
        { text: 'Risikoanalysen und Schutzbedarfsfeststellungen durchführen', richtig: true },
        { text: 'Betroffenenanfragen von Kunden beantworten' },
        { text: 'Die Geschäftsleitung beraten, Beschäftigte schulen, Vorfälle bearbeiten', richtig: true },
        { text: 'Das Verzeichnis von Verarbeitungstätigkeiten führen' }
      ],
      antwortRichtig: 'Richtig. Der <b>[[IT-Sicherheitsbeauftragter|ISB]]</b> kümmert sich um Konzept, Risikoanalyse, Umsetzungskontrolle, Schulung, Vorfallsbearbeitung und Bericht an die Leitung. Sein Ziel: Vertraulichkeit, Integrität und Verfügbarkeit <b>aller</b> Informationen dauerhaft auf angemessenem Niveau halten. Betroffenenanfragen und das Verarbeitungsverzeichnis gehören zum Datenschutzbeauftragten.',
      antwortFalsch: 'Fast. Zwei der Punkte sind klassische Aufgaben des <b>Datenschutz</b>beauftragten – überlegen Sie, welche sich auf <b>personenbezogene</b> Daten und die Rechte Betroffener beziehen.' },

    { typ: 'mehrfach', text: 'Und welche Aufgaben hat der Datenschutzbeauftragte (DSB)? (mehrere)',
      optionen: [
        { text: 'Einhaltung von DSGVO und BDSG überwachen', richtig: true },
        { text: 'Leitung und Beschäftigte unterrichten, beraten und schulen', richtig: true },
        { text: 'Firewalls konfigurieren' },
        { text: 'Ansprechpartner für Betroffene und die Aufsichtsbehörde sein', richtig: true },
        { text: 'Bei der Datenschutz-Folgenabschätzung beraten', richtig: true }
      ],
      antwortRichtig: 'Genau. Der <b>[[Datenschutzbeauftragter|DSB]]</b> überwacht, berät, schult, wirkt am [[Verzeichnis von Verarbeitungstätigkeiten|Verarbeitungsverzeichnis]] mit und ist Anlaufstelle für Betroffene und Aufsichtsbehörde. Firewalls konfiguriert die IT – der DSB prüft nur, ob die Maßnahmen angemessen sind.',
      antwortFalsch: 'Fast. Der DSB <b>berät und überwacht</b>, er setzt nicht selbst technisch um.' },

    { typ: 'nachricht', text: 'Wo liegt denn nun der Unterschied – in einem Satz?' },

    { typ: 'frage', text: 'Was unterscheidet die beiden Rollen?',
      optionen: [
        { text: 'Der DSB schützt Menschen, der ISB schützt Informationen und Systeme', richtig: true,
          antwort: 'Das ist der Kern. Der <b>DSB</b> achtet auf die Rechtmäßigkeit der Verarbeitung personenbezogener Daten und die Rechte der Betroffenen – rechtlich-organisatorische Sicht, weisungsfrei, kontrollierend und beratend. Der <b>ISB</b> schützt <b>alle</b> Informationen des Unternehmens, auch nicht personenbezogene wie Konstruktionsdaten oder Kalkulationen, und ist für Konzeption und Umsetzung zuständig.' },
        { text: 'Der DSB ist extern, der ISB intern',
          antwort: 'Beides ist in beiden Rollen möglich. Der Unterschied liegt im <b>Gegenstand</b>, nicht in der Anstellung.' }
      ] },

    { typ: 'frage', text: 'Eine letzte Frage, die mir wichtig ist: Wer haftet, wenn die Aufsichtsbehörde ein Bußgeld verhängt?',
      optionen: [
        { text: 'Der Datenschutzbeauftragte',
          antwort: 'Nein – und das ist ein wichtiger Punkt. Der DSB <b>berät und überwacht</b>, er haftet nicht für Verstöße des Unternehmens. Deshalb ist er auch weisungsfrei und darf wegen seiner Tätigkeit nicht benachteiligt werden.' },
        { text: 'Das Unternehmen, vertreten durch die Geschäftsführung', richtig: true, norm: 'Verantwortlicher',
          antwort: 'Richtig – und zwar Sie. Das Unternehmen ist der <b>[[Verantwortlicher|Verantwortliche]]</b>. Sie können Aufgaben delegieren, die Verantwortung aber nicht. Der Bußgeldrahmen reicht bis <b>20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes</b> – je nachdem, was höher ist.' }
      ] },

    { typ: 'nachricht', text: 'Das wollte ich eigentlich nicht hören. 😅 Aber gut zu wissen.' },

    { typ: 'merk', text: '<b>DSB</b> = personenbezogene Daten, Rechte der Betroffenen, weisungsfrei, berät und überwacht. <b>ISB</b> = alle Informationen und Systeme, Sicherheitskonzept, Umsetzung. <b>Verantwortlich und haftbar bleibt immer die Geschäftsführung.</b>' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'gf-05',
  kontakt: 'chefin',
  titel: 'Seit Jahren hat das keiner geprüft',
  thema: 'Praxisfälle',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Ich muss Ihnen etwas gestehen. Ein befreundeter Unternehmer hat mir seine Lage geschildert, und mir ist dabei mulmig geworden – weil einiges auch auf uns zutrifft.' },
    { typ: 'nachricht', text: 'Bei ihm gilt: Seit Jahren keine Überprüfung der Sicherheitsmaßnahmen. Keine aktuellen Datensicherungen. Alle Mitarbeiter nutzen <b>ein gemeinsames Passwort</b>, das für mehrere Systeme gilt. Und Zugriffsrechte werden bei einem Abteilungswechsel nicht angepasst.' },
    { typ: 'nachricht', text: 'Jetzt ist zweierlei passiert: Ein Mitarbeiter hat gemerkt, dass er nach seinem Wechsel immer noch die <b>Gehaltsdaten</b> seiner alten Abteilung sieht. Und gleichzeitig ist der zentrale Server ausgefallen – niemand kommt an die Daten.' },

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
      antwortRichtig: 'Alle vier. Zusammengefasst: <b>Gemeinsames Passwort</b> → keine Nachvollziehbarkeit, bei einem Leck sind mehrere Systeme offen, unberechtigte Zugriffe bleiben unbemerkt. <b>Keine Datensicherung</b> → bei Ausfall, Defekt oder Ransomware sind die Daten dauerhaft verloren und der Betrieb steht – im Zweifel ein Existenzrisiko. Dazu der Berechtigungs-Wildwuchs und die fehlende regelmäßige Überprüfung.',
      antwortFalsch: 'Fast – die Stromkosten haben damit nichts zu tun. Alle anderen Punkte sind echte Folgen.' },

    { typ: 'nachricht', text: 'Was würden denn ISB und DSB in so einer Lage tun?' },

    { typ: 'frage', text: 'Wer macht was?',
      optionen: [
        { text: 'Der ISB kümmert sich um Technik und Konzept, der DSB um Melde- und Informationspflichten', richtig: true,
          antwort: 'Richtig. Der <b>ISB</b> analysiert den Vorfall, leitet Sofortmaßnahmen ein – Server wiederherstellen, Daten aus Sicherungen retten, Berechtigungen und Passwörter korrigieren –, erstellt ein Sicherheitskonzept mit Risikoanalyse und Schutzbedarfsfeststellung und prüft die Maßnahmen regelmäßig. Der <b>DSB</b> prüft, ob eine Datenschutzverletzung vorliegt, berät zu Melde- und Informationspflichten – Aufsichtsbehörde binnen <b>72 Stunden</b>, bei hohem Risiko auch die Betroffenen – und schult die Beschäftigten.' },
        { text: 'Beide machen dasselbe, nur mit anderem Titel',
          antwort: 'Nein. Der ISB ist für <b>Technik und Konzept</b> zuständig, der DSB für <b>Rechtmäßigkeit und Betroffenenrechte</b>. Bei einem Vorfall arbeiten sie eng zusammen – jeder aus seiner Perspektive.' }
      ] },

    { typ: 'nachricht', text: 'Und wenn ich jetzt drei Dinge sofort anpacken soll – welche?' },

    { typ: 'mehrfach', text: 'Die drei wichtigsten Verbesserungen: (drei)',
      optionen: [
        { text: 'Regelmäßige, getestete Datensicherungen plus Notfallplan', richtig: true },
        { text: 'Individuelle Konten mit starken Passwörtern und 2FA', richtig: true },
        { text: 'Berechtigungskonzept nach Need-to-know, Rechte bei Wechsel sofort anpassen', richtig: true },
        { text: 'Einen zweiten Internetanschluss bestellen' },
        { text: 'Die Festplatten gegen größere tauschen' }
      ],
      antwortRichtig: 'Genau diese drei. Dazu gehören regelmäßige <b>Sicherheitsüberprüfungen</b> und <b>Schulungen</b> – denn das eigentliche Problem war, dass jahrelang niemand hingeschaut hat. Sicherheit ist kein Zustand, sondern ein Prozess ([[PDCA]]).',
      antwortFalsch: 'Fast. Mehr Hardware löst keines der geschilderten Probleme – es fehlen <b>Sicherungen</b>, <b>persönliche Zugänge</b> und ein <b>Berechtigungskonzept</b>.' },

    { typ: 'merk', text: 'Klassisches Sünden-Trio: <b>keine Backups</b>, <b>gemeinsames Passwort</b>, <b>nicht angepasste Rechte</b>. Gegenmittel: getestete Sicherungen mit Notfallplan, persönliche Konten mit 2FA, Berechtigungskonzept nach Need-to-know – und regelmäßige Überprüfung.' },

    { typ: 'nachricht', text: 'Gut. Setzen Sie mir das bitte als Vorlage auf, ich bringe es in die nächste Leitungsrunde.' }
  ]
});
