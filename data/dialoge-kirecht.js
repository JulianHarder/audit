/* ===========================================================
   AUDIT – data/dialoge-kirecht.js
   Herr Azizi, Compliance-Berater (extern).
   Begleitet Rampe 7 bei der Einfuehrung von KI.

   Ton: Siezt durchgehend, foermlich und sehr geordnet.
   Sortiert jeden Fall zuerst in eine Risikoklasse und redet
   erst danach ueber Pflichten – wer bei ihm mit "aber das
   Werkzeug ist doch nur ein Hilfsmittel" anfaengt, bekommt
   die Frage nach dem Einsatzzweck zurueck.

   Kernthemen: der risikobasierte Ansatz und die vier Klassen,
   verbotene Praktiken nach Art. 5, Hochrisiko nach Anhang III,
   die Rollen Anbieter und Betreiber samt Rollenwechsel, die
   Zeitschiene nach dem Digital Omnibus und die Bussgeldrahmen.

   Rechtsstand: KI-VO (EU) 2024/1689 in der Fassung der
   Digital-Omnibus-Verordnung (EU) 2026/1744.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   kir-01 – Vier Klassen, eine Frage
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kir-01',
  kontakt: 'kirecht',
  titel: 'Vier Klassen, eine Frage',
  thema: 'Risikoklassen',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Guten Tag. Azizi, ich berate Rampe 7 bei der Einführung von KI. Frau Hagedorn hat mir drei Vorhaben auf den Tisch gelegt: einen Assistenten in der Disposition, einen Chatbot im Shop und eine Software, die Bewerbungen vorsortiert.' },
    { typ: 'nachricht', text: 'Alle drei beruhen auf derselben Technik. Trotzdem sind sie rechtlich drei völlig verschiedene Vorgänge. Bevor wir über eine einzige Pflicht sprechen, klären wir, woran das liegt.' },

    { typ: 'frage', text: 'Was ist bei einem KI-Vorhaben die erste Frage, die Sie stellen müssen?',
      optionen: [
        { text: 'Wofür wird das System eingesetzt?', richtig: true,
          antwort: 'Richtig. Die [[KI-Verordnung]] folgt einem [[Risikobasierter Ansatz|risikobasierten Ansatz]]: Reguliert wird nicht die Technik, sondern der <b>Verwendungszweck</b>. Alles Weitere – Klasse, Rolle, Pflichten – hängt an dieser Antwort.' },
        { text: 'Welches Modell steckt darin und wie groß ist es?',
          antwort: 'Das ist eine technische Frage, keine rechtliche. Die Modellgröße spielt nur bei [[Basismodell|Basismodellen]] eine Rolle, und dort für den Modellanbieter – nicht für Sie als Anwender.' },
        { text: 'Verarbeitet das System personenbezogene Daten?',
          antwort: 'Eine wichtige Frage, aber die der [[DSGVO]]. Die KI-Verordnung greift auch dann, wenn gar keine personenbezogenen Daten im Spiel sind. Zwei Regelwerke, zwei Prüfungen – Sie müssen beide durchlaufen.' }
      ] },

    { typ: 'nachricht', text: 'Dann sortieren wir. Es gibt vier Klassen: unannehmbares, hohes, begrenztes und minimales Risiko. Wir fangen beim harmlosesten Vorhaben an.' },

    { typ: 'frage', text: 'Der Dispositionsassistent berechnet aus Aufträgen und Verkehrsdaten Tourenvorschläge. Welche Klasse?',
      optionen: [
        { text: 'Minimales Risiko – aus der KI-Verordnung folgt keine Pflicht', richtig: true,
          antwort: 'So ist es. [[Minimales Risiko]] ist der Normalfall, und dort landet die große Mehrheit betrieblicher KI. Beachten Sie aber: keine Pflicht aus der KI-Verordnung heißt nicht keine Pflicht. Datenschutz-, Arbeits- und Urheberrecht gelten unverändert weiter.' },
        { text: 'Hohes Risiko, weil die Disposition für den Betrieb wesentlich ist',
          antwort: 'Wirtschaftliche Bedeutung ist kein Kriterium. [[Hochrisiko-KI-System|Hochrisiko]] ist eine abschließende Liste von Einsatzbereichen in [[Anhang III]] – Tourenplanung steht dort nicht.' },
        { text: 'Begrenztes Risiko, weil Beschäftigte mit dem System arbeiten',
          antwort: 'Begrenztes Risiko meint die Gefahr der <b>Täuschung</b> – dass jemand nicht merkt, mit einer Maschine zu sprechen. Hier weiß die Disposition genau, womit sie arbeitet.' }
      ] },

    { typ: 'frage', text: 'Und die Software, die Bewerbungen vorsortiert?',
      optionen: [
        { text: 'Hohes Risiko – Beschäftigung steht in Anhang III', richtig: true, norm: 'Anhang III Nr. 4 KI-VO',
          antwort: 'Genau. [[Anhang III]] Nummer 4 erfasst Einstellung, Auswahl, Beförderung, Aufgabenzuweisung und Überwachung. Sobald eine KI über den Zugang zu Arbeit mitentscheidet, sind wir im Hochrisikobereich – unabhängig davon, wie gut die Software ist.' },
        { text: 'Unannehmbares Risiko – über Menschen darf keine KI entscheiden',
          antwort: 'Zu weit gegriffen. Verboten sind nur die acht Praktiken in Art. 5. Die Vorauswahl von Bewerbungen ist <b>erlaubt</b>, aber streng reguliert. Verboten wäre es, im Gespräch aus der Mimik auf Gefühle zu schließen.' },
        { text: 'Minimales Risiko, solange am Ende ein Mensch entscheidet',
          antwort: 'Die menschliche Letztentscheidung ist eine <b>Pflicht</b> im Hochrisikobereich, kein Weg aus ihm heraus. Die Klasse bestimmt sich nach dem Einsatzbereich, nicht nach den Vorkehrungen.' }
      ] },

    { typ: 'karte', titel: 'Die vier Risikoklassen', quelle: 'kirisikoklassen' },

    { typ: 'nachricht', text: 'Sie sehen den entscheidenden Punkt in der Tabelle: In der Spalte Beispiele stehen <b>Zwecke</b>, keine Techniken. Daraus folgt eine Konsequenz, die in der Prüfung gern abgefragt wird.' },

    { typ: 'frage', text: 'Rampe 7 nutzt dasselbe Sprachmodell einmal zum Übersetzen interner Texte und einmal zur Bewertung von Bewerbungen. Was bedeutet das rechtlich?',
      optionen: [
        { text: 'Zwei getrennte Einsätze, zwei getrennte Einordnungen – minimal und hoch', richtig: true,
          antwort: 'Richtig, und deshalb führt man eine Liste der KI-Einsätze, nicht der KI-Programme. Ein Werkzeug kann in der einen Verwendung pflichtfrei und in der anderen voll reguliert sein.' },
        { text: 'Das gesamte Modell wird dadurch zum Hochrisiko-System',
          antwort: 'Nein, die Einordnung hängt am Einsatz, nicht am Modell. Sonst wäre jedes Sprachmodell weltweit Hochrisiko, sobald es irgendwo in einem Personalverfahren auftaucht.' },
        { text: 'Es gilt die mildere Einordnung, weil es dasselbe Werkzeug ist',
          antwort: 'Das wäre eine bequeme Regel, aber es gibt sie nicht. Jeder Einsatzzweck wird <b>für sich</b> geprüft.' }
      ] },

    { typ: 'mehrfach', text: 'Was gilt für den risikobasierten Ansatz? (mehrere)',
      optionen: [
        { text: 'Maßgeblich ist der Verwendungszweck, nicht die verwendete Technik', richtig: true },
        { text: 'Dasselbe Modell kann je Einsatz in verschiedene Klassen fallen', richtig: true },
        { text: 'Die meisten betrieblichen KI-Einsätze fallen unter minimales Risiko', richtig: true },
        { text: 'Die Risikoklasse richtet sich nach der Fehlerquote des Systems' },
        { text: 'Wer eine Einwilligung der Betroffenen einholt, verschiebt die Klasse nach unten' }
      ],
      antwortRichtig: 'Vollständig. Die beiden letzten sind die typischen Irrtümer: Eine niedrige Fehlerquote ist kein Argument gegen Hochrisiko – es geht um den <b>möglichen Schaden</b> am Betroffenen, nicht um die Trefferquote. Und eine [[Einwilligung]] ist ein Instrument der DSGVO; die Risikoklasse der KI-Verordnung berührt sie nicht.',
      antwortFalsch: 'Prüfen Sie jede Aussage an einem Satz: Die Klasse hängt allein am <b>Einsatzzweck</b>. Zwei der Aussagen machen sie von etwas anderem abhängig.' },

    { typ: 'merk', text: '<b>[[Risikobasierter Ansatz|Risikobasierter Ansatz]]:</b> Erst der Zweck, dann die Klasse, dann die Pflichten. Vier Klassen: <b>verboten</b> (Art. 5), <b>hoch</b> (Anhang III), <b>begrenzt</b> (nur Transparenz, Art. 50), <b>minimal</b> (keine Pflicht). Dasselbe Modell kann je Einsatz in verschiedene Klassen fallen.' },

    { typ: 'nachricht', text: 'Beim nächsten Mal die Klasse, über die man nicht verhandeln kann. Frau Grünwald hat mir einen Prospekt gezeigt, der ein ernstes Problem beschreibt – sie hält es für ein Ausstattungsmerkmal.' }
  ]
});

/* ---------------------------------------------------------------
   kir-02 – Was gar nicht geht
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kir-02',
  kontakt: 'kirecht',
  titel: 'Was gar nicht geht',
  thema: 'Verbotene Praktiken',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Der Prospekt, den ich erwähnt habe. Die Software verspricht, im Bewerbungsgespräch „aus Mimik, Blickführung und Stimmlage die Motivation der Bewerbenden" zu bewerten. Der Vertrieb nennt das ein Zusatzmodul.' },
    { typ: 'nachricht', text: 'Ich nenne es anders. Bitte ordnen Sie das ein.' },

    { typ: 'frage', text: 'Wie bewerten Sie das Modul?',
      optionen: [
        { text: 'Verboten – Emotionserkennung am Arbeitsplatz ist eine untersagte Praktik', richtig: true, norm: 'Art. 5 Abs. 1 lit. f KI-VO',
          antwort: 'Korrekt. [[Emotionserkennung]] im Bereich Arbeitsplatz und Bildung ist nach [[Verbotene Praktiken|Art. 5]] untersagt, und Bewerbende zählen dazu. Ausnahmen bestehen nur aus medizinischen oder Sicherheitsgründen – ein Auswahlverfahren ist keines von beiden.' },
        { text: 'Hochrisiko – zulässig mit Dokumentation und menschlicher Aufsicht',
          antwort: 'Das wäre die Einordnung für die Vorsortierung nach Qualifikation. Der Schluss von Mimik und Stimme auf Gefühle fällt eine Stufe höher: Er ist nicht genehmigungsfähig. Keine Dokumentation macht ihn zulässig.' },
        { text: 'Begrenztes Risiko – es genügt, die Bewerbenden darüber zu informieren',
          antwort: 'Die Informationspflicht nach Art. 50 Abs. 3 gilt für Emotionserkennung <b>außerhalb</b> von Arbeit und Bildung. Im Beschäftigungskontext hilft Information nicht, weil der Einsatz dort schon verboten ist.' }
      ] },

    { typ: 'nachricht', text: 'Frau Grünwald hat daraufhin vorgeschlagen, sich die Zustimmung der Bewerbenden geben zu lassen. Zwei Kästchen im Online-Formular, fertig.' },

    { typ: 'frage', text: 'Löst eine Einwilligung das Problem?',
      optionen: [
        { text: 'Nein – ein Verbot ist nicht genehmigungsfähig, und im Abhängigkeitsverhältnis wäre die Einwilligung ohnehin nicht freiwillig', richtig: true,
          antwort: 'Beides zutreffend, und beide Gründe tragen jeweils allein. Art. 5 kennt keine Zustimmungslösung. Und selbst wo eine [[Einwilligung]] möglich ist, scheitert sie im [[Beschäftigtendatenschutz]] regelmäßig an der <b>Freiwilligkeit</b>: Wer eine Stelle möchte, kreuzt alles an.' },
        { text: 'Ja, mit ausdrücklicher und dokumentierter Einwilligung ist es zulässig',
          antwort: 'Das ist die Logik der DSGVO, nicht die der KI-Verordnung. Art. 5 ist ein <b>Verbot</b> – vergleichbar damit, dass niemand in seine eigene Benachteiligung wirksam einwilligen kann.' },
        { text: 'Ja, wenn der Betriebsrat eine Betriebsvereinbarung dazu abschließt',
          antwort: 'Der [[Betriebsrat]] kann vieles mitgestalten, aber keine unionsrechtlichen Verbote aufheben. Eine solche Betriebsvereinbarung wäre unwirksam.' }
      ] },

    { typ: 'karte', titel: 'Verbotene Praktiken nach Art. 5', quelle: 'kiverbote' },

    { typ: 'nachricht', text: 'Ein zweiter Fall aus Ihrem Haus. Die Lagerleitung möchte eine Übersicht, die Krankmeldungen, Pünktlichkeit und – ich zitiere – „das Auftreten in sozialen Netzen" zu einer Punktzahl zusammenfasst. Danach sollen die Schichten verteilt werden.' },

    { typ: 'frage', text: 'Welche verbotene Praktik ist das, und woran erkennen Sie sie?',
      optionen: [
        { text: 'Social Scoring – Verhalten aus einem Lebensbereich wirkt nachteilig in einem unzusammenhängenden anderen', richtig: true, norm: 'Art. 5 Abs. 1 lit. c KI-VO',
          antwort: 'Genau das ist das Kennzeichen von [[Social Scoring]]: der <b>Bereichswechsel</b>. Private Äußerungen schlagen auf die berufliche Stellung durch. Dass Pünktlichkeit arbeitsrechtlich relevant sein kann, ändert daran nichts – entscheidend ist die Vermischung.' },
        { text: 'Keine verbotene Praktik, sondern ein Fall für die Mitbestimmung',
          antwort: 'Die Mitbestimmung wäre zusätzlich nötig, trifft aber nicht den Kern. Hier liegt bereits ein Verstoß gegen Art. 5 vor – und der lässt sich durch Beteiligung nicht heilen.' },
        { text: 'Verbotene unterschwellige Beeinflussung',
          antwort: 'Die betrifft Systeme, die Entscheidungen am Bewusstsein vorbei herbeiführen. Hier wird nicht beeinflusst, sondern <b>bewertet</b> – das ist Social Scoring.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Einsätze sind nach Art. 5 verboten? (mehrere)',
      optionen: [
        { text: 'Emotionserkennung bei Beschäftigten und Bewerbenden', richtig: true },
        { text: 'Punktebewertung von Beschäftigten aus unzusammenhängenden Lebensbereichen', richtig: true },
        { text: 'Aus Gesichtsbildern auf die Herkunft von Bewerbenden schließen', richtig: true },
        { text: 'Gesichtsbilder ungezielt aus dem Internet sammeln, um eine Erkennungsdatenbank zu füllen', richtig: true },
        { text: 'Bewerbungen nach Qualifikation in eine Rangfolge bringen' },
        { text: 'Die Arbeitszeiterfassung über eine Fingerabdruckerkennung' }
      ],
      antwortRichtig: 'Vollständig. Die beiden letzten sind <b>nicht</b> verboten: Die Vorsortierung nach Qualifikation ist Hochrisiko und damit erlaubt, aber reguliert. Und der Fingerabdruck an der Stempeluhr ist eine Frage der [[DSGVO]] und der Mitbestimmung – nicht des Art. 5, solange nicht auf sensible Merkmale geschlossen wird.',
      antwortFalsch: 'Zwei Leitfragen: Wird aus dem <b>Körper</b> auf Gefühle oder sensible Merkmale geschlossen? Und wirkt eine Bewertung in einen <b>fremden Lebensbereich</b> hinein? Was keine der beiden Fragen auslöst, ist allenfalls Hochrisiko.' },

    { typ: 'merk', text: '<b>[[Verbotene Praktiken|Art. 5]] ist nicht genehmigungsfähig</b> – keine Einwilligung, keine Betriebsvereinbarung, keine Auflage hilft. Für den Betrieb wichtig: <b>[[Emotionserkennung]]</b> am Arbeitsplatz (auch im Bewerbungsgespräch), <b>[[Social Scoring]]</b> mit Bereichswechsel, <b>[[Biometrische Kategorisierung]]</b> nach sensiblen Merkmalen. Bußgeldrahmen bis <b>7 %</b> des Jahresumsatzes.' },

    { typ: 'nachricht', text: 'Nächstes Mal die Klasse, in der sich Ihr Bewerbungsverfahren tatsächlich befindet. Dort ist nichts verboten – aber es ist auch nichts geschenkt.' }
  ]
});

/* ---------------------------------------------------------------
   kir-03 – Hochrisiko: wofuer, nicht womit
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kir-03',
  kontakt: 'kirecht',
  titel: 'Hochrisiko: wofür, nicht womit',
  thema: 'Hochrisiko',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Die Vorsortierung von Bewerbungen also. Der Hersteller schreibt im Angebot: „Unsere Lösung ist kein Hochrisiko-System, da die Entscheidung beim Menschen bleibt und die Trefferquote über 96 Prozent liegt."' },
    { typ: 'nachricht', text: 'Zwei Argumente in einem Satz, und beide gehen am Gesetz vorbei. Bitte nehmen Sie sie auseinander.' },

    { typ: 'frage', text: 'Macht eine Trefferquote von 96 Prozent aus dem System ein Nicht-Hochrisiko-System?',
      optionen: [
        { text: 'Nein – die Einordnung richtet sich nach dem Einsatzbereich, nicht nach der Fehlerquote', richtig: true,
          antwort: 'Richtig. [[Hochrisiko-KI-System|Hochrisiko]] folgt aus [[Anhang III]]. Qualität ist kein Einordnungskriterium – sie ist eine <b>Pflicht</b> innerhalb der Klasse. Nebenbei: Vier Prozent Fehler bedeuten bei 300 Bewerbungen zwölf falsch einsortierte Menschen.' },
        { text: 'Ja, ab 95 Prozent Genauigkeit entfällt die Einordnung',
          antwort: 'Eine solche Schwelle gibt es nicht. Genauigkeit, Robustheit und Cybersicherheit sind Anforderungen nach Art. 15 – sie sind zu erfüllen, nicht gegen die Einordnung einzutauschen.' },
        { text: 'Ja, wenn der Hersteller die Quote in der Konformitätserklärung zusichert',
          antwort: 'Die [[Konformitätsbewertung]] setzt die Hochrisiko-Einordnung voraus. Wer eine Konformitätserklärung abgibt, bestätigt die Klasse – er verlässt sie nicht.' }
      ] },

    { typ: 'frage', text: 'Und das zweite Argument: Die Entscheidung bleibt beim Menschen.',
      optionen: [
        { text: 'Das ist eine Pflicht innerhalb der Hochrisikoklasse, kein Ausweg aus ihr', richtig: true, norm: 'Art. 26 Abs. 2 KI-VO',
          antwort: 'Genau. [[Menschliche Aufsicht]] ist vorgeschrieben, weil es Hochrisiko ist. Der Hersteller verkauft Ihnen also eine Pflichterfüllung als Entlastung. Hinzu kommt: Eine Aufsicht, die die Rangfolge nur abnickt, erfüllt die Pflicht nicht.' },
        { text: 'Richtig – mit menschlicher Letztentscheidung ist es nur begrenztes Risiko',
          antwort: 'Begrenztes Risiko betrifft allein Täuschungsgefahren – Chatbots, Deepfakes. Ein Auswahlverfahren fällt nie dort hinein, gleich wie viele Menschen beteiligt sind.' },
        { text: 'Richtig, denn dann liegt keine automatisierte Entscheidung nach Art. 22 DSGVO vor',
          antwort: 'Sie vermischen zwei Regelwerke. Selbst wenn [[Art. 22 DSGVO]] wegen echter menschlicher Beteiligung nicht greift, bleibt die Einordnung nach der KI-Verordnung unverändert. Und für Art. 22 genügt bloßes Abnicken ebenfalls nicht.' }
      ] },

    { typ: 'nachricht', text: 'Halten wir fest: Das System ist Hochrisiko. Erlaubt, aber mit einem Pflichtenprogramm – und das ist zwischen Hersteller und Ihnen aufgeteilt.' },

    { typ: 'karte', titel: 'Drei Betreiberpflichten, die sofort organisatorisch wirken', quelle: 'kipflichten',
      keys: ['aufsicht', 'beschaeftigte', 'betroffene'] },

    { typ: 'frage', text: 'Der Hersteller verweist auf seine Dokumentation und sagt, damit sei Rampe 7 abgedeckt. Stimmt das?',
      optionen: [
        { text: 'Nein – Anbieter- und Betreiberpflichten bestehen nebeneinander, jeder haftet für seine', richtig: true,
          antwort: 'Richtig. Der [[Anbieter]] schuldet Risikomanagement, Dokumentation und [[Konformitätsbewertung]]. Der [[Betreiber]] schuldet Aufsicht, Protokolle und Information. Keine Papierlage des Herstellers nimmt Ihnen Ihre organisatorischen Pflichten ab.' },
        { text: 'Ja, der Betreiber muss nur prüfen, ob eine CE-Kennzeichnung vorliegt',
          antwort: 'Die Prüfung der Kennzeichnung ist eine Ihrer Pflichten, aber nicht die einzige. Art. 26 verlangt vom Betreiber eine ganze Reihe eigener Vorkehrungen.' },
        { text: 'Ja, solange Rampe 7 das System unverändert einsetzt',
          antwort: 'Unverändert einzusetzen bewahrt Sie davor, nach Art. 25 selbst zum [[Anbieter]] zu werden. Die Betreiberpflichten bleiben davon unberührt.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Einsätze bei Rampe 7 wären Hochrisiko-Systeme? (mehrere)',
      optionen: [
        { text: 'Vorsortierung von Bewerbungen nach Eignung', richtig: true },
        { text: 'Software, die Beförderungsvorschläge erstellt', richtig: true },
        { text: 'Dauerhafte Auswertung der Pack- und Laufzeiten je Beschäftigtem zur Leistungsbewertung', richtig: true },
        { text: 'Chatbot im Onlineshop' },
        { text: 'Nachfrageprognose für die Lagerbestände' },
        { text: 'Rechtschreibprüfung in der Angebotserstellung' }
      ],
      antwortRichtig: 'Vollständig. Die drei ersten betreffen alle [[Anhang III]] Nummer 4 – Zugang zu Arbeit, Beförderung, Überwachung der Leistung. Die drei letzten löst die KI-Verordnung nicht aus: Der Chatbot ist begrenztes Risiko, Prognose und Rechtschreibprüfung sind minimales Risiko.',
      antwortFalsch: 'Fragen Sie bei jedem Punkt: Entscheidet das System über den <b>Zugang zu Arbeit oder über die Stellung</b> eines Menschen im Betrieb? Drei der Einsätze tun das, drei nicht.' },

    { typ: 'merk', text: '<b>[[Hochrisiko-KI-System|Hochrisiko]] = Einsatzbereich aus [[Anhang III]]</b>, für Betriebe fast immer <b>Nummer 4 (Beschäftigung)</b>: Einstellung, Beförderung, Aufgabenzuweisung, Leistungsüberwachung. Weder eine gute Trefferquote noch eine menschliche Letztentscheidung ändern die Klasse – [[Menschliche Aufsicht|menschliche Aufsicht]] ist <b>Folge</b> der Einordnung, nicht ihr Ausweg.' },

    { typ: 'nachricht', text: 'Beim nächsten Mal die Frage, die Herr Vollmer mir dreimal gestellt hat: Ob Rampe 7 durch das Nachtrainieren des Modells plötzlich auf der anderen Seite steht.' }
  ]
});

/* ---------------------------------------------------------------
   kir-04 – Anbieter oder Betreiber
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kir-04',
  kontakt: 'kirecht',
  titel: 'Anbieter oder Betreiber',
  thema: 'Rollen',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Die Rollenfrage. Sie ist in der Prüfung beliebt, weil sie einfach aussieht und es nicht ist. Die KI-Verordnung ist wie das Produktsicherheitsrecht gebaut: Es gibt eine Kette von Verantwortlichen, und jedes Glied hat eigene Pflichten.' },

    { typ: 'frage', text: 'Rampe 7 kauft die Bewerbersoftware ein und setzt sie im Personalbereich ein. Welche Rolle?',
      optionen: [
        { text: 'Betreiber – Rampe 7 setzt das System unter eigener Verantwortung ein', richtig: true, norm: 'Art. 3 Nr. 4 KI-VO',
          antwort: 'Richtig. [[Betreiber]] – im englischen Text „deployer" – ist die Rolle, in der ein Unternehmen fast immer steckt. Ausgenommen ist nur die rein private Nutzung; der Einsatz im Betrieb ist es nie.' },
        { text: 'Anbieter, weil Rampe 7 das System in Betrieb nimmt',
          antwort: 'Die Formulierung „in Betrieb nehmen" in Art. 3 Nr. 3 meint das erste Bereitstellen am Markt oder für den eigenen Gebrauch <b>unter eigenem Namen</b>. Wer einfach einkauft und benutzt, ist Betreiber.' },
        { text: 'Händler, weil die Software von einem Dritten stammt',
          antwort: 'Ein [[Anbieter|Händler]] gibt ein System in der Lieferkette weiter. Rampe 7 gibt nichts weiter, sondern nutzt es selbst.' }
      ] },

    { typ: 'karte', titel: 'Die Rollen der KI-Verordnung', quelle: 'kirollen' },

    { typ: 'nachricht', text: 'Nun die drei Fälle, in denen Sie die Seite wechseln. Herr Vollmer plant, das eingekaufte Modell mit Rampe-7-Daten nachzutrainieren, es „Rampe-7-Dispo" zu nennen und einer Partnerspedition anzubieten.' },

    { typ: 'frage', text: 'Was folgt daraus?',
      optionen: [
        { text: 'Rampe 7 gilt als Anbieter – eigener Name und Weitergabe lösen den Rollenwechsel aus', richtig: true, norm: 'Art. 25 KI-VO',
          antwort: 'Genau. Nach [[Rollenwechsel|Art. 25]] gilt als Anbieter, wer seinen Namen oder seine Marke auf das System setzt, es wesentlich verändert oder die Zweckbestimmung so ändert, dass daraus ein Hochrisiko-System wird. Hier treffen gleich zwei Auslöser zu.' },
        { text: 'Nichts – entscheidend ist, wer das Modell ursprünglich entwickelt hat',
          antwort: 'Das ist die verbreitete Fehlannahme. Die Rolle hängt nicht an der Entwicklung, sondern daran, <b>unter wessen Namen</b> das System in Verkehr gelangt.' },
        { text: 'Rampe 7 wird Händler, weil die Software weitergegeben wird',
          antwort: 'Händler ist nur, wer fremde Systeme <b>unverändert und unter fremdem Namen</b> weitergibt. Mit eigenem Produktnamen und Nachtraining ist die Schwelle zum Anbieter überschritten.' }
      ] },

    { typ: 'frage', text: 'Zweiter Fall: Rampe 7 nutzt den Dispositionsassistenten unverändert, aber künftig auch, um die Leistung der Fahrer zu bewerten. Was bedeutet das?',
      optionen: [
        { text: 'Die Zweckbestimmung wird geändert und führt in den Hochrisikobereich – Rampe 7 gilt damit als Anbieter', richtig: true, norm: 'Art. 25 Abs. 1 lit. c KI-VO',
          antwort: 'Richtig, und das ist der gefährlichste der drei Fälle, weil ihn niemand als Rollenwechsel wahrnimmt. Technisch ändert sich nichts, die Software bleibt dieselbe – aber aus Tourenplanung wird Leistungsbewertung, also [[Anhang III]] Nummer 4. Damit treffen Rampe 7 die vollen <b>Anbieterpflichten</b> für ein System, das es nicht gebaut hat.' },
        { text: 'Nichts, solange die Software technisch unverändert bleibt',
          antwort: 'Die technische Unveränderlichkeit ist nur einer der drei Auslöser. Der dritte ist die <b>Zweckänderung</b> – und die liegt hier vor.' },
        { text: 'Rampe 7 bleibt Betreiber, muss aber zusätzlich die Betreiberpflichten für Hochrisiko erfüllen',
          antwort: 'Die Betreiberpflichten kommen hinzu, das ist richtig. Art. 25 geht aber weiter: Wer durch Zweckänderung ein Hochrisiko-System erschafft, <b>gilt als Anbieter</b> – mit Dokumentation und Konformitätsbewertung.' }
      ] },

    { typ: 'mehrfach', text: 'Wann wird aus einem Betreiber ein Anbieter? (mehrere)',
      optionen: [
        { text: 'Er setzt seinen Namen oder seine Marke auf das System', richtig: true },
        { text: 'Er verändert das System wesentlich', richtig: true },
        { text: 'Er ändert die Zweckbestimmung so, dass ein Hochrisiko-System entsteht', richtig: true },
        { text: 'Er setzt das System in mehreren Niederlassungen ein' },
        { text: 'Er gibt dem Hersteller Rückmeldungen, die in die nächste Version einfließen' }
      ],
      antwortRichtig: 'Vollständig – genau diese drei Auslöser nennt Art. 25. Die beiden anderen ändern nichts: Die Zahl der Standorte ist unerheblich, und Rückmeldungen an den Hersteller sind erwünscht. Verändert wird das System dadurch vom <b>Hersteller</b>, nicht von Ihnen.',
      antwortFalsch: 'Drei Auslöser, und alle drei haben mit dem <b>Auftritt nach außen</b> oder mit einem <b>Eingriff</b> zu tun: eigener Name, wesentliche Änderung, neuer Zweck. Zwei der Aussagen beschreiben nur intensivere Nutzung.' },

    { typ: 'merk', text: '<b>[[Anbieter]]</b> bringt in Verkehr, <b>[[Betreiber]]</b> benutzt – ein Unternehmen ist normalerweise Betreiber. [[Rollenwechsel|Art. 25]] kennt drei Auslöser: <b>eigener Name</b>, <b>wesentliche Änderung</b>, <b>neue Zweckbestimmung mit Hochrisikofolge</b>. Der letzte trifft am häufigsten, weil technisch alles gleich bleibt.' },

    { typ: 'nachricht', text: 'Beim nächsten Mal die Zeitschiene. Dort hat sich 2026 etwas verschoben, und ich erlebe gerade, dass daraus die falsche Schlussfolgerung gezogen wird.' }
  ]
});

/* ---------------------------------------------------------------
   kir-05 – Was seit wann gilt
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kir-05',
  kontakt: 'kirecht',
  titel: 'Was seit wann gilt',
  thema: 'Zeitschiene',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Die Geschäftsführung hat mir eine Nachricht geschickt: „Habe gelesen, der AI Act ist auf Ende 2027 verschoben. Dann vertagen wir das Thema, oder?"' },
    { typ: 'nachricht', text: 'Das ist die Schlussfolgerung, die ich derzeit überall höre, und sie ist in diesem Umfang falsch. Verschoben wurde ein <b>Teil</b> – und zwar genau der, der Rampe 7 am wenigsten unter Zeitdruck setzt.' },

    { typ: 'frage', text: 'Was hat die Digital-Omnibus-Verordnung von 2026 verschoben?',
      optionen: [
        { text: 'Die Pflichten für Hochrisiko-Systeme – Anhang III auf den 2. Dezember 2027, Anhang I auf den 2. August 2028', richtig: true, norm: 'Verordnung (EU) 2026/1744',
          antwort: 'Richtig. Der [[Digital Omnibus]] verschiebt die Hochrisiko-Fristen und fasst die [[KI-Kompetenz]] neu. Die Risikosystematik, die Verbote und die Transparenzpflichten bleiben, wie sie waren.' },
        { text: 'Die gesamte Verordnung, sie gilt erst ab Dezember 2027',
          antwort: 'Nein. Verbote und KI-Kompetenz gelten seit Februar 2025, die Transparenzpflichten seit August 2026. Wer bis 2027 wartet, hat drei Jahre Pflichten übersehen.' },
        { text: 'Nur die Bußgeldvorschriften',
          antwort: 'Die Sanktionsvorschriften gelten seit dem 2. August 2025. Verschoben wurden allein die Hochrisiko-Pflichten.' }
      ] },

    { typ: 'karte', titel: 'Geltungsbeginn Stufe für Stufe', quelle: 'kizeitschiene' },

    { typ: 'frage', text: 'Welche Pflicht trifft Rampe 7 bereits heute, ganz unabhängig von jeder Risikoklasse?',
      optionen: [
        { text: 'Maßnahmen zur KI-Kompetenz des Personals', richtig: true, norm: 'Art. 4 KI-VO',
          antwort: 'Richtig, und das ist die am häufigsten übersehene Pflicht. [[KI-Kompetenz]] gilt seit dem 2. Februar 2025 und setzt kein Hochrisiko voraus – ein einziges eingesetztes KI-Werkzeug genügt. Der Omnibus hat sie von „sicherstellen" zu „Maßnahmen ergreifen" abgemildert, abgeschafft hat er sie nicht.' },
        { text: 'Die Registrierung aller KI-Systeme in der EU-Datenbank',
          antwort: 'Das ist eine Anbieterpflicht für Hochrisiko-Systeme. Als Betreiber registrieren Sie nichts – ausgenommen bestimmte öffentliche Stellen.' },
        { text: 'Die Grundrechte-Folgenabschätzung',
          antwort: 'Die [[Grundrechte-Folgenabschätzung]] nach Art. 27 trifft nur bestimmte Betreiber – öffentliche Stellen, Private mit öffentlichen Diensten, Kredit- und Versicherungsfälle. Eine Spedition fällt nicht darunter.' }
      ] },

    { typ: 'nachricht', text: 'Und nun der Punkt, auf den es für die Bewerbersoftware ankommt. Die Hochrisiko-Pflichten der KI-Verordnung greifen erst Ende 2027.' },

    { typ: 'frage', text: 'Darf Rampe 7 das Vorsortieren von Bewerbungen deshalb bis Dezember 2027 ohne weitere Prüfung einführen?',
      optionen: [
        { text: 'Nein – DSGVO, Beschäftigtendatenschutz und Mitbestimmung gelten unabhängig davon schon heute', richtig: true,
          antwort: 'Genau. Die KI-Verordnung ist nicht das einzige Regelwerk. [[Art. 22 DSGVO]], der [[Beschäftigtendatenschutz]], die [[Datenschutz-Folgenabschätzung]] und die Mitbestimmung des [[Betriebsrat|Betriebsrats]] gelten vollständig. Die Verschiebung betrifft die Pflichten <b>eines</b> Gesetzes, nicht die Zulässigkeit des Vorhabens.' },
        { text: 'Ja, bis zum Geltungsbeginn besteht keine rechtliche Bindung',
          antwort: 'Das wäre nur richtig, wenn die KI-Verordnung das einzige einschlägige Gesetz wäre. Das Datenschutz- und Arbeitsrecht hat auf den AI Act nicht gewartet.' },
        { text: 'Ja, sofern die Bewerbenden informiert werden',
          antwort: 'Information ist nötig, aber nicht ausreichend. Es fehlen Rechtsgrundlage, Folgenabschätzung, Beteiligung des Betriebsrats und die Vorkehrungen nach Art. 22 Abs. 3 DSGVO.' }
      ] },

    { typ: 'mehrfach', text: 'Was gilt im Oktober 2026 bereits? (mehrere)',
      optionen: [
        { text: 'Die Verbote nach Art. 5', richtig: true },
        { text: 'Die Pflicht zu Maßnahmen der KI-Kompetenz', richtig: true },
        { text: 'Die Transparenzpflichten nach Art. 50, etwa die Offenlegung beim Chatbot', richtig: true },
        { text: 'Die Pflichten für Anbieter von Basismodellen', richtig: true },
        { text: 'Die Betreiberpflichten für Hochrisiko-Systeme nach Anhang III' },
        { text: 'Die Pflichten für KI als Sicherheitsbauteil in Maschinen' }
      ],
      antwortRichtig: 'Vollständig. Die beiden letzten kommen erst: Anhang III am 2. Dezember 2027, Anhang I am 2. August 2028. Alles andere ist in Kraft – die Verbote seit Februar 2025, die Basismodell-Pflichten seit August 2025, Art. 50 seit August 2026.',
      antwortFalsch: 'Merken Sie sich die Richtung: <b>Verbote und Transparenz gelten, Hochrisiko kommt.</b> Zwei der Aussagen betreffen den Hochrisikobereich.' },

    { typ: 'merk', text: '<b>Zeitschiene:</b> 2.2.2025 Verbote und [[KI-Kompetenz]] · 2.8.2025 Basismodelle und Sanktionen · 2.8.2026 allgemeine Anwendbarkeit mit [[Begrenztes Risiko|Art. 50]] · 2.12.2027 Hochrisiko nach [[Anhang III]] · 2.8.2028 Anhang I. <b>Verschoben ist nicht erlaubt:</b> [[DSGVO]] und Arbeitsrecht gelten für Hochrisiko-Vorhaben schon heute.' },

    { typ: 'nachricht', text: 'Zum Abschluss unserer Reihe die Frage, die Frau Hagedorn als erste gestellt hat: was es kostet, wenn man es falsch macht.' }
  ]
});

/* ---------------------------------------------------------------
   kir-06 – Was es kostet
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kir-06',
  kontakt: 'kirecht',
  titel: 'Was es kostet',
  thema: 'Sanktionen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Frau Hagedorn möchte eine Zahl für die Geschäftsführungssitzung. Ich gebe ihr drei, weil die KI-Verordnung drei Bußgeldrahmen kennt – gestaffelt nach der Schwere.' },

    { typ: 'frage', text: 'Welcher Verstoß löst den höchsten Rahmen aus?',
      optionen: [
        { text: 'Eine verbotene Praktik nach Art. 5 – bis 35 Mio. € oder 7 % des weltweiten Jahresumsatzes', richtig: true, norm: 'Art. 99 Abs. 3 KI-VO',
          antwort: 'Richtig, und dieser Rahmen liegt <b>über</b> dem der DSGVO mit ihren 4 Prozent. Der Gesetzgeber sagt damit deutlich: Die verbotenen Praktiken sind keine Ordnungswidrigkeit am Rande, sondern der Kern der Verordnung.' },
        { text: 'Der Betrieb eines Hochrisiko-Systems ohne menschliche Aufsicht',
          antwort: 'Ein ernster Verstoß, aber die zweite Stufe: bis 15 Mio. € oder 3 Prozent. Die höchste Stufe ist allein für Art. 5 reserviert.' },
        { text: 'Falsche Angaben gegenüber der Marktüberwachungsbehörde',
          antwort: 'Das ist die <b>niedrigste</b> der drei Stufen: bis 7,5 Mio. € oder 1 Prozent.' }
      ] },

    { typ: 'karte', titel: 'Die drei Bußgeldrahmen', quelle: 'kisanktionen' },

    { typ: 'nachricht', text: 'Rampe 7 ist ein mittelständisches Unternehmen. Das wirkt sich auf die Berechnung aus.' },

    { typ: 'frage', text: 'Bei kleinen und mittleren Unternehmen gilt bei den beiden Beträgen – Festbetrag und Umsatzanteil – welcher?',
      optionen: [
        { text: 'Der niedrigere der beiden', richtig: true, norm: 'Art. 99 Abs. 6 KI-VO',
          antwort: 'Richtig. Bei KMU gilt der niedrigere, sonst der höhere Betrag. Das ist eine bewusste Entlastung – sie ändert aber nichts daran, dass auch der niedrigere Betrag für einen Mittelständler existenzbedrohend sein kann.' },
        { text: 'Immer der Festbetrag, weil der Umsatzanteil nur für Konzerne gilt',
          antwort: 'Der Umsatzanteil gilt grundsätzlich für alle. Bei KMU wird lediglich der niedrigere der beiden Werte herangezogen.' },
        { text: 'Der höhere, damit die Sanktion abschreckend bleibt',
          antwort: 'Das ist die Regel für große Unternehmen. Für KMU hat der Gesetzgeber sie ausdrücklich umgekehrt.' }
      ] },

    { typ: 'frage', text: 'Die Datenschutzaufsicht prüft wegen der Bewerbersoftware eine Beschwerde, die Marktüberwachung interessiert sich für dasselbe System. Wie ordnen Sie das ein?',
      optionen: [
        { text: 'Zwei Behörden mit eigenen Zuständigkeiten und eigenen Bußgeldrahmen – beide können denselben Vorgang prüfen', richtig: true,
          antwort: 'So ist es. Die [[Aufsichtsbehörde]] prüft Rechtsgrundlage, Information und Betroffenenrechte; die [[Marktüberwachungsbehörde]] prüft die Pflichten der KI-Verordnung. Ein Vorgang, zwei Verfahren, zwei Rahmen – und zusätzlich der Schadensersatz nach [[Art. 82 DSGVO]].' },
        { text: 'Es gilt der strengere Rahmen, die andere Behörde stellt ihr Verfahren ein',
          antwort: 'Eine solche Vorrangregel gibt es zwischen den beiden Regelwerken nicht. Sie verfolgen unterschiedliche Schutzrichtungen.' },
        { text: 'Nur die Datenschutzaufsicht ist zuständig, weil personenbezogene Daten betroffen sind',
          antwort: 'Der Personenbezug begründet die Zuständigkeit der Datenschutzaufsicht, schließt die Marktüberwachung aber nicht aus. Deren Prüfung betrifft das System als <b>Produkt</b>.' }
      ] },

    { typ: 'mehrfach', text: 'Was sollte in der Vorlage für die Geschäftsführung stehen? (mehrere)',
      optionen: [
        { text: 'Welche KI-Einsätze es gibt und in welche Risikoklasse jeder fällt', richtig: true },
        { text: 'Dass Maßnahmen zur KI-Kompetenz bereits heute geschuldet sind', richtig: true },
        { text: 'Dass Datenschutzaufsicht und Marktüberwachung denselben Fall prüfen können', richtig: true },
        { text: 'Dass die Verschiebung der Hochrisiko-Fristen die DSGVO-Pflichten nicht berührt', richtig: true },
        { text: 'Dass mit einer Haftpflichtversicherung für KI-Bußgelder vorgesorgt werden kann' }
      ],
      antwortRichtig: 'Vollständig. Die letzte Aussage ist der klassische Irrtum der Leitungsebene: Bußgelder sind Sanktionen für eigenes Fehlverhalten und in Deutschland grundsätzlich nicht versicherbar. Versichern lassen sich Abwehrkosten und Haftungsansprüche Dritter – nicht die Geldbuße selbst.',
      antwortFalsch: 'Vier der Punkte sind Tatsachen, die die Leitung für eine Entscheidung braucht. Einer verspricht eine Absicherung, die es so nicht gibt.' },

    { typ: 'merk', text: '<b>Drei Rahmen nach Art. 99:</b> verbotene Praktiken bis <b>35 Mio. € / 7 %</b>, Verstoß gegen Anbieter- oder Betreiberpflichten bis <b>15 Mio. € / 3 %</b>, falsche Angaben an Behörden bis <b>7,5 Mio. € / 1 %</b>. Bei KMU gilt der <b>niedrigere</b> Betrag. [[Aufsichtsbehörde|Datenschutzaufsicht]] und [[Marktüberwachungsbehörde]] können denselben Fall getrennt verfolgen.' },

    { typ: 'nachricht', text: 'Damit haben Sie den Rahmen. Die Umsetzung im Einzelnen besprechen Sie am besten mit Herrn Vollmer und Frau Grünwald – bei beiden liegt gerade ein konkreter Fall auf dem Tisch.' }
  ]
});
