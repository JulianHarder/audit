/* ===========================================================
   AUDIT – data/dialoge-itleitung.js
   Frau Brehm, IT-Leitung.
   Unterschreibt den Auftrag und haftet dafuer.

   Ton: Siezt dich, sachlich und entscheidungsorientiert. Sie
   will eine Empfehlung mit Begruendung und fragt nach Kosten,
   Nutzen und Verantwortung – keine Werkzeuglisten. Wenn eine
   Antwort nicht begruendet ist, fragt sie nach dem Warum.

   Kernthemen: welches Verfahren wofuer und was es kostet,
   schriftliche Beauftragung und Freigabe, §§ 202a-c StGB und
   Haftung, Bericht, Priorisierung und Nachtest.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   itl-01 – Was soll das kosten
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'itl-01',
  kontakt: 'itleitung',
  titel: 'Welches Verfahren – und was soll das kosten?',
  thema: 'Verfahrensauswahl',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Guten Morgen. Ich habe drei Angebote für eine Sicherheitsprüfung auf dem Tisch und muss bis Freitag entscheiden. Sie sollen mir dabei helfen – ich brauche keine Werkzeugliste, sondern eine Empfehlung mit Begründung.' },
    { typ: 'nachricht', text: 'Angebot A: [[Schwachstellenscan]], monatlich, 200 Euro im Monat. Angebot B: [[Penetrationstest]] [[Greybox-Verfahren|Greybox]], fünf Tage, 9.000 Euro. Angebot C: Pentest [[Blackbox-Verfahren|Blackbox]], fünf Tage, 9.000 Euro.' },

    { typ: 'frage', text: 'B und C kosten dasselbe und dauern gleich lang. Warum bekomme ich bei B mehr Prüfung für mein Geld?',
      optionen: [
        { text: 'Bei Blackbox geht ein großer Teil der fünf Tage für die Informationsbeschaffung weg – Zeit, in der nicht geprüft wird', richtig: true,
          antwort: 'Genau das ist der wirtschaftliche Kern. Bei [[Blackbox-Verfahren|Blackbox]] bezahlen Sie zwei Tage [[Reconnaissance]], in denen der Tester herausfindet, was Sie ihm bei [[Greybox-Verfahren|Greybox]] am ersten Morgen auf einem Blatt geben. Dieselben fünf Tage ergeben damit deutlich mehr geprüfte Systeme.' },
        { text: 'Blackbox-Tester sind teurer in der Stundenrate',
          antwort: 'Die Rate ist dieselbe – die Angebote nennen denselben Preis. Der Unterschied liegt darin, <b>wofür</b> die bezahlte Zeit verwendet wird.' },
        { text: 'Bei Greybox darf der Tester mehr Techniken einsetzen',
          antwort: 'Welche Techniken erlaubt sind, regelt der [[Scope]] – das ist eine eigene Achse und von meinem Informationsstand unabhängig.' }
      ] },

    { typ: 'frage', text: 'Dann nehmen wir B. Streichen wir Angebot A als überflüssig?',
      optionen: [
        { text: 'Nein – der Scan läuft monatlich und hält das Patch-Management im Blick, der Pentest ist eine Momentaufnahme im Jahr', richtig: true,
          antwort: 'Richtig begründet. Die beiden ersetzen sich nicht: Der [[Schwachstellenscan]] ist die <b>laufende Messung</b> zwischen den Tests, der [[Penetrationstest]] die vertiefte Prüfung. 200 Euro im Monat sind gegen 9.000 im Jahr ohnehin die kleinere Position – und der Scan findet ein fehlendes Update im Februar, nicht erst im Oktober.' },
        { text: 'Ja, der Pentest umfasst den Scan ohnehin',
          antwort: 'Inhaltlich beginnt ein Pentest tatsächlich mit einem Scan – aber einmal im Jahr. Zwischen zwei Tests werden laufend neue [[Schwachstelle|Schwachstellen]] bekannt, und die sieht nur der wiederkehrende Scan.' },
        { text: 'Ja, monatliche Scans erzeugen nur Papier',
          antwort: 'Die Gefahr besteht, wenn niemand die Funde bewertet – 180 Meldungen ohne Priorisierung bleiben liegen. Das ist aber ein Grund, die Nachbearbeitung zu regeln, nicht den Scan zu streichen.' }
      ] },

    { typ: 'karte', titel: 'Die Verfahren im Vergleich', quelle: 'boxverfahren' },

    { typ: 'nachricht', text: 'Nächste Frage, und die muss ich der Geschäftsführung beantworten: Wir entwickeln unsere Lagersoftware selbst. Brauchen wir dafür auch einen Pentest, oder genügen Herrn Kaymaks Tests?' },

    { typ: 'frage', text: 'Was antworten Sie?',
      optionen: [
        { text: 'Beides, mit unterschiedlichem Ziel: Die Entwicklertests prüfen, ob die Software das Richtige tut – der Pentest, ob sie sich missbrauchen lässt', richtig: true,
          antwort: 'Genau die Unterscheidung, auf die es ankommt. Ein [[Softwaretest]] prüft gegen die <b>Spezifikation</b>: Kommt bei Menge 1000 die Fehlermeldung? Ein [[Penetrationstest]] fragt, was ein Angreifer tut, der in der Spezifikation nie vorgesehen war – etwa [[SQL-Injection]] über dasselbe Feld. Beide Tests können zu 100 % bestehen und einander nicht ersetzen.' },
        { text: 'Die Entwicklertests genügen, wenn die Testabdeckung über 90 Prozent liegt',
          antwort: '[[Testabdeckung]] misst, welcher Code <b>durchlaufen</b> wurde – nicht, ob er missbrauchbar ist. Ein Eingabefeld ohne Prüfung ist voll abgedeckt und trotzdem angreifbar.' },
        { text: 'Der Pentest genügt, dann können wir die Entwicklertests reduzieren',
          antwort: 'Dann fiele die Prüfung weg, ob die Software fachlich richtig rechnet. Ein Pentester prüft keine Bestandsbuchung auf Richtigkeit – und ein Fehler dort kostet Sie Geld ohne jeden Angreifer.' }
      ] },

    { typ: 'mehrfach', text: 'Womit begründen Sie der Geschäftsführung die 9.000 Euro? (mehrere)',
      optionen: [
        { text: 'Mit dem möglichen Schaden: Ausfall des Lagerbetriebs, Datenabfluss, Bußgeld, Reputationsverlust', richtig: true },
        { text: 'Mit Anforderungen von Kunden und dem Audit – der Nachweis einer technischen Überprüfung wird verlangt', richtig: true },
        { text: 'Mit der Zehnerregel: Eine früh gefundene Lücke ist deutlich billiger als der Vorfall', richtig: true },
        { text: 'Mit der Pflicht aus der DSGVO, jährlich einen Penetrationstest durchzuführen' },
        { text: 'Damit, dass wir danach sicher sind' }
      ],
      antwortRichtig: 'Vollständig. Die beiden anderen wären angreifbar: Art. 32 DSGVO verlangt angemessene Maßnahmen und ihre <b>regelmäßige Überprüfung</b> – einen jährlichen Pentest schreibt er nicht vor. Und „danach sind wir sicher" wäre falsch: Ein Test ist eine [[Risiko|Momentaufnahme]], kein Zustand.',
      antwortFalsch: 'Zwei Begründungen würden in einer Nachfrage auseinanderfallen – eine erfindet eine Rechtspflicht, die andere verspricht zu viel. Argumentieren Sie mit <b>Risiko</b>, <b>Nachweispflicht</b> und <b>[[Fehlerkosten]]</b>.' },

    { typ: 'merk', text: '<b>Verfahren nach Zweck wählen:</b> [[Schwachstellenscan]] laufend und billig · [[Greybox-Verfahren|Greybox-Pentest]] als Regeltest, bestes Verhältnis von Aufwand und Erkenntnis · [[Whitebox-Verfahren|Whitebox]] punktuell bei hohem [[Schutzbedarf]] · [[Blackbox-Verfahren|Blackbox]]/verdeckt nur, wenn die Frage „fällt es auf?" lautet. <b>[[Softwaretest]] und [[Penetrationstest]] ersetzen sich nie.</b>' },

    { typ: 'nachricht', text: 'Gut, ich nehme A und B. Dann zum unangenehmen Teil: Wer unterschreibt das, und was unterschreibt er genau?' }
  ]
});

/* ---------------------------------------------------------------
   itl-02 – Wer unterschreibt das
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'itl-02',
  kontakt: 'itleitung',
  titel: 'Wer unterschreibt das?',
  thema: 'Beauftragung und Freigabe',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Frau Sarközi hat gesagt, sie fängt nicht an, bevor der Auftrag unterschrieben ist. Ich halte das für richtig, möchte aber verstehen, was genau drinstehen muss.' },

    { typ: 'mehrfach', text: 'Was gehört in die schriftliche Beauftragung eines Penetrationstests? (mehrere)',
      optionen: [
        { text: 'Der Scope: Systeme, IP-Bereiche, erlaubte Techniken', richtig: true },
        { text: 'Zeitraum und Zeitfenster der Prüfung', richtig: true },
        { text: 'Abbruchkriterien und ein rund um die Uhr erreichbarer Ansprechpartner', richtig: true },
        { text: 'Haftungsregelung und Verschwiegenheitsvereinbarung', richtig: true },
        { text: 'Die Liste der Werkzeuge, die der Tester einsetzen wird' },
        { text: 'Eine Zusage, dass keine Schwachstellen gefunden werden' }
      ],
      antwortRichtig: 'Vollständig. Die [[Pentest-Beauftragung]] ist kein Formular, sondern die <b>Rechtfertigung</b> für Handlungen, die ohne sie strafbar wären. Eine Werkzeugliste wäre sinnlos – die wechselt je Fund; begrenzt werden die <b>Techniken</b> im [[Scope]]. Und eine Zusage über das Ergebnis kann niemand geben.',
      antwortFalsch: 'Fragen Sie bei jeder Zeile: Schützt sie den Betrieb, grenzt sie die Erlaubnis ab, oder regelt sie die Verantwortung? Zwei Optionen leisten nichts davon.' },

    { typ: 'nachricht', text: 'Nun die Frage, über die ich gestolpert bin: Ich bin IT-Leiterin. Genügt meine Unterschrift?' },

    { typ: 'frage', text: 'Wer muss die Beauftragung unterschreiben?',
      optionen: [
        { text: 'Jemand, der dafür zeichnungsberechtigt ist – bei einem Eingriff in den Betrieb in der Regel die Geschäftsführung', richtig: true,
          antwort: 'Richtig. Es geht um die Einwilligung in Handlungen, die den Geschäftsbetrieb und fremde Rechtsgüter berühren können – diese Einwilligung kann nur erteilen, wer das Unternehmen vertreten darf. In der Praxis unterschreiben Geschäftsführung und IT-Leitung gemeinsam. Eine Unterschrift von jemandem ohne Vertretungsmacht trägt den Auftrag nicht.' },
        { text: 'Ja, als IT-Leiterin verantworten Sie die Systeme',
          antwort: 'Sie verantworten den Betrieb, vertreten aber nicht das Unternehmen. Die Einwilligung in einen Eingriff, der den Geschäftsbetrieb stören kann, braucht Vertretungsmacht.' },
        { text: 'Der Datenschutzbeauftragte',
          antwort: 'Der [[Datenschutzbeauftragter|DSB]] <b>berät und überwacht</b> – entscheiden darf er gerade nicht, sonst entstünde ein [[Interessenkonflikt]]. Einzubeziehen ist er, wenn personenbezogene Daten berührt werden.' }
      ] },

    { typ: 'frage', text: 'Beim Test wird Frau Sarközi Kundendaten in unseren Systemen zu Gesicht bekommen. Was folgt daraus?',
      optionen: [
        { text: 'Es liegt eine Auftragsverarbeitung nahe – dann braucht es einen AV-Vertrag nach Art. 28 DSGVO', richtig: true, norm: 'Art. 28 DSGVO',
          antwort: 'Zutreffend. Sobald eine externe Stelle in unserem Auftrag mit personenbezogenen Daten umgeht, ist ein [[AV-Vertrag]] zu schließen. [[Verantwortlicher|Verantwortlich]] bleibt Rampe 7. Dazu gehören Weisungsbindung, Vertraulichkeit, die Rückgabe oder Löschung aller Daten nach dem Test und – für den [[Pentest-Bericht]] – eine Einstufung als streng vertraulich.' },
        { text: 'Nichts – der Tester darf die Daten ja nicht verwenden',
          antwort: 'Er darf sie nicht zweckfremd nutzen, das stimmt. Allein das <b>Zugänglichmachen</b> ist aber schon eine Verarbeitung und braucht eine Grundlage samt Vertrag.' },
        { text: 'Der Test muss abgesagt werden, weil Kundendaten betroffen sind',
          antwort: 'Zu weit. Art. 32 DSGVO verlangt sogar die regelmäßige <b>Überprüfung</b> der Maßnahmen. Zulässig ist der Test mit vertraglicher Grundlage und Datenminimierung, etwa indem mit Testdatensätzen gearbeitet wird, wo das möglich ist.' }
      ] },

    { typ: 'nachricht', text: 'Letzter Punkt: Herr Kaymak will für seine Tests eine Kopie der Produktivdatenbank ins Testsystem ziehen. Das ist bequem – ist es erlaubt?' },

    { typ: 'frage', text: 'Produktivdaten als Testdaten – wie beurteilen Sie das?',
      optionen: [
        { text: 'Grundsätzlich problematisch: Es ist eine Zweckänderung. Vorrang haben anonymisierte oder erfundene Testdaten', richtig: true, norm: 'Art. 5 Abs. 1 lit. b DSGVO',
          antwort: 'Richtig, und das ist ein typischer Prüfungsfall. Kundendaten wurden zur Vertragserfüllung erhoben, nicht zum Testen – die [[Zweckbindung]] steht entgegen. Richtiger Weg: [[Anonymisierung|anonymisierte]] oder synthetische [[Testdaten]]. Ist eine Kopie unvermeidlich, braucht das Testsystem denselben Schutz wie die Produktion.' },
        { text: 'Erlaubt, weil die Daten das Haus nicht verlassen',
          antwort: 'Der Ort ist nicht entscheidend, sondern der <b>Zweck</b>. Und Testsysteme sind typischerweise schwächer geschützt, mit mehr Zugriffsberechtigten – deshalb verschärft das Kopieren das Risiko sogar.' },
        { text: 'Erlaubt, wenn Herr Kaymak zur Vertraulichkeit verpflichtet ist',
          antwort: 'Die Verpflichtung ist notwendig, ersetzt aber keine Rechtsgrundlage. Die Frage ist nicht, ob er zuverlässig ist, sondern ob die Daten zu diesem Zweck verarbeitet werden dürfen.' }
      ] },

    { typ: 'merk', text: '<b>Ohne Papier kein Test.</b> Die [[Pentest-Beauftragung]] enthält [[Scope]], Zeitraum, [[Abbruchkriterium|Abbruchkriterien]], Ansprechpartner, Haftung und Verschwiegenheit – unterschrieben von jemandem mit <b>Vertretungsmacht</b>. Berührt der Test personenbezogene Daten, kommt ein [[AV-Vertrag]] nach Art. 28 DSGVO dazu. [[Testdaten]] aus der Produktion sind eine Zweckänderung.' },

    { typ: 'nachricht', text: 'Dann lassen Sie uns klären, was passiert, wenn dabei etwas schiefgeht. Das ist der Teil, bei dem ich persönlich im Spiel bin.' }
  ]
});

/* ---------------------------------------------------------------
   itl-03 – Macht sich da jemand strafbar
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'itl-03',
  kontakt: 'itleitung',
  titel: 'Macht sich da jemand strafbar?',
  thema: 'Recht und Haftung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Unangenehme Frage, aber ich muss sie stellen: Was Frau Sarközi tut, ist technisch dasselbe wie ein Angriff. Wo genau liegt die Grenze zur Straftat?' },

    { typ: 'frage', text: 'Welche Vorschriften sind hier einschlägig?',
      optionen: [
        { text: '§§ 202a–c StGB: Ausspähen von Daten, Abfangen von Daten, Vorbereiten solcher Taten', richtig: true, norm: '§§ 202a, 202b, 202c StGB',
          antwort: 'Richtig. [[§ 202a StGB|§ 202a]] erfasst das Ausspähen – sich <b>unbefugt</b> Zugang zu Daten verschaffen, die besonders gesichert sind. [[§ 202a StGB|§ 202b]] das Abfangen, [[§ 202a StGB|§ 202c]] das Vorbereiten, also das Beschaffen und Verbreiten von Passwörtern und Angriffswerkzeugen – der sogenannte Hackerparagraf.' },
        { text: '§ 263 StGB, Betrug',
          antwort: 'Betrug setzt eine Täuschung mit Vermögensschaden voraus. Beim Pentest geht es um den unbefugten Zugang zu Daten – das sind die §§ 202a ff.' },
        { text: 'Art. 32 DSGVO',
          antwort: 'Art. 32 DSGVO verpflichtet zu angemessenen Maßnahmen und ihrer Überprüfung – er ist der Grund <b>für</b> den Test, keine Strafvorschrift.' }
      ] },

    { typ: 'frage', text: 'Welches Wort im Tatbestand entscheidet, ob der Test zulässig ist?',
      optionen: [
        { text: '„Unbefugt" – mit wirksamer Einwilligung des Berechtigten entfällt die Strafbarkeit', richtig: true,
          antwort: 'Genau dieses Wort. Die [[Pentest-Beauftragung|schriftliche Beauftragung]] macht aus der Straftat eine Dienstleistung – aber nur so weit, wie die Einwilligung reicht. Außerhalb des [[Scope]] ist das Handeln wieder unbefugt, auch mitten im Testzeitraum.' },
        { text: '„Besonders gesichert" – ist ein System ungesichert, ist der Zugriff immer erlaubt',
          antwort: 'Das Merkmal bezieht sich auf die <b>Zugangssicherung</b> bei § 202a. Aus einem schlecht gesicherten System folgt aber keine Erlaubnis – es können andere Vorschriften greifen, und die zivilrechtliche Haftung bleibt ohnehin.' },
        { text: '„Daten" – öffentlich zugängliche Daten sind nie geschützt',
          antwort: 'Öffentlich abrufbare Informationen zu lesen ist in der Tat kein Ausspähen – deshalb ist [[Reconnaissance]] aus offenen Quellen unproblematisch. Die Grenze ist das <b>Überwinden einer Zugangssicherung</b>.' }
      ] },

    { typ: 'nachricht', text: 'Angenommen, es geht etwas schief: Beim Test fällt der Lagerserver aus, und wir können vier Stunden nicht buchen. Wer haftet?' },

    { typ: 'frage', text: 'Wie ist die Haftung in diesem Fall zu beurteilen?',
      optionen: [
        { text: 'Das regelt der Vertrag – deshalb gehören Haftungsregelung und Abbruchkriterien in die Beauftragung', richtig: true,
          antwort: 'Richtig. Hat der Tester innerhalb des [[Scope]] und nach den Regeln gehandelt, ist der Ausfall ein <b>eingepreistes Risiko</b> des Auftraggebers – deshalb wird außerhalb der Geschäftszeiten getestet und deshalb gibt es [[Abbruchkriterium|Abbruchkriterien]]. Hat er den Scope überschritten oder die Notbremse missachtet, haftet er. Ohne vertragliche Regelung streitet man hinterher darüber.' },
        { text: 'Immer der Tester, er hat den Ausfall verursacht',
          antwort: 'Nicht immer. Wer eine Prüfung beauftragt, nimmt das Risiko in Kauf, dass ein instabiles System dabei umfällt – ein Ausfall kann sogar ein <b>Befund</b> sein. Entscheidend ist, ob er sich an die Vereinbarung gehalten hat.' },
        { text: 'Immer der Auftraggeber, er hat den Test gewollt',
          antwort: 'Auch das greift zu kurz. Überschreitet der Tester den Scope oder testet er trotz Abbruchkriterium weiter, haftet er für die Folgen.' }
      ] },

    { typ: 'nachricht', text: 'Und jetzt der Fall, der mir ehrlich Sorge macht. Einer unserer Azubis hat „aus Interesse" einen Portscan auf unsere eigenen Server laufen lassen.' },

    { typ: 'frage', text: 'Wie beurteilen Sie das?',
      optionen: [
        { text: 'Ohne Auftrag unzulässig – auch intern. Es fehlt die Befugnis, unabhängig von der guten Absicht', richtig: true,
          antwort: 'Richtig, und das ist die Botschaft für jede Schulung: Die Absicht heilt die fehlende Befugnis nicht. Arbeitsrechtlich ist es ein Verstoß gegen die Nutzungsregeln, strafrechtlich kommt es auf die Umstände an – spätestens beim Überwinden einer Zugangssicherung wird es [[§ 202a StGB|§ 202a StGB]]. Der richtige Weg heißt: vorher fragen und sich die Freigabe geben lassen.' },
        { text: 'Unproblematisch, es sind unsere eigenen Server',
          antwort: 'Die Server gehören dem Unternehmen, nicht dem Azubi. Befugt ist, wer eine Erlaubnis hat – ein Beschäftigungsverhältnis allein ist keine.' },
        { text: 'Unproblematisch, ein Portscan ist nur Lesen',
          antwort: 'Ein Portscan allein wird strafrechtlich meist nicht erfasst, arbeitsrechtlich aber schon – und die Grenze zum nächsten Schritt ist einen Mausklick entfernt. Die Regel muss eindeutig sein, nicht abgestuft.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört in eine Regelung für Sicherheitsprüfungen im eigenen Haus? (mehrere)',
      optionen: [
        { text: 'Niemand prüft ohne vorherige schriftliche Freigabe – auch nicht intern', richtig: true },
        { text: 'Wer Freigaben erteilen darf, ist namentlich festgelegt', richtig: true },
        { text: 'Gefundene Schwachstellen werden gemeldet und nicht veröffentlicht', richtig: true },
        { text: 'Der Melder wird nicht für den Fund belangt, wenn er sich an die Regeln gehalten hat', richtig: true },
        { text: 'Angriffswerkzeuge dürfen auf Firmenrechnern frei installiert werden' },
        { text: 'Jeder darf seine eigenen Systeme ohne Freigabe prüfen' }
      ],
      antwortRichtig: 'Vollständig. Der vierte Punkt ist der wichtigste und wird gern vergessen: Wer fürchten muss, für einen Fund Ärger zu bekommen, meldet nichts mehr – dann erfahren Sie von der Lücke durch den Angreifer. Das ist derselbe Gedanke wie bei [[Responsible Disclosure]].',
      antwortFalsch: 'Zwei Optionen heben genau die Freigabepflicht auf, um die es geht. Und denken Sie daran, wer Angriffswerkzeuge vorhält – vgl. [[§ 202a StGB|§ 202c StGB]].' },

    { typ: 'merk', text: '<b>[[§ 202a StGB|§§ 202a–c StGB]]:</b> Ausspähen, Abfangen, Vorbereiten. Entscheidend ist das Wort <b>unbefugt</b> – die [[Pentest-Beauftragung]] beseitigt die Strafbarkeit, aber nur innerhalb des [[Scope]]. Gute Absicht ist keine Befugnis, auch nicht im eigenen Haus. Haftung für Ausfälle regelt der Vertrag samt [[Abbruchkriterium|Abbruchkriterien]].' },

    { typ: 'nachricht', text: 'Danke. Dann brauche ich nur noch eines von Ihnen: Was machen wir mit dem Bericht, wenn er da ist?' }
  ]
});

/* ---------------------------------------------------------------
   itl-04 – Der Bericht liegt vor
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'itl-04',
  kontakt: 'itleitung',
  titel: 'Der Bericht liegt vor – und jetzt?',
  thema: 'Bericht und Nachtest',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Der Bericht ist da: elf Funde, davon zwei kritisch, drei hoch, vier mittel, zwei niedrig. Ich habe neun Tage Arbeitszeit bei der IT und 3.000 Euro Budget für externe Hilfe. Priorisieren Sie mit mir.' },

    { typ: 'frage', text: 'Fund 1 hat [[CVSS]] 9,8 und sitzt auf einem abgeschalteten Testrechner. Fund 2 hat CVSS 6,5 und sitzt auf dem Lagerserver. Welcher zuerst?',
      optionen: [
        { text: 'Fund 2 – das Risiko ergibt sich aus CVSS und Schutzbedarf des Systems, nicht aus dem CVSS-Wert allein', richtig: true,
          antwort: 'Richtig begründet. Der [[CVSS]]-Basiswert ist eine allgemeine Note und kennt Ihr Haus nicht. Erst die Verrechnung mit dem [[Schutzbedarf]] ergibt Ihr [[Risiko]] – in der [[Risikomatrix]] wandert der 9,8er auf dem abgeschalteten Rechner nach unten. Den schalten Sie dauerhaft ab, das kostet nichts, und weiter zu Fund 2.' },
        { text: 'Fund 1 – 9,8 ist kritisch, das hat immer Vorrang',
          antwort: 'Das wäre die bequeme Sortierung nach einer Zahl. Ein kritischer Fund auf einem System ohne Bedeutung ist nicht Ihr dringendstes Problem – ein mittlerer Fund auf dem Lagerserver schon.' },
        { text: 'Beide gleichzeitig, kritische Funde dulden keine Reihenfolge',
          antwort: 'Mit neun Tagen und 3.000 Euro müssen Sie eine Reihenfolge bilden. Genau dafür gibt es die Risikobewertung – sonst entscheidet der Zufall.' }
      ] },

    { typ: 'frage', text: 'Für einen Fund gibt es keinen Patch: ein Steuerungsrechner im Lager mit einem Betriebssystem ohne Support, dessen Software auf nichts anderem läuft. Austausch kostet 40.000 Euro.',
      optionen: [
        { text: 'Risiko reduzieren und den Rest dokumentiert akzeptieren – Netz abtrennen, Zugriffe einschränken, Entscheidung von der Leitung unterschreiben lassen', richtig: true,
          antwort: 'Das ist der richtige Weg. Von den vier Wegen der [[Risikobehandlung]] bleiben hier zwei: <b>reduzieren</b> durch [[Netzwerksegmentierung]] und minimale Rechte, und für den Rest <b>akzeptieren</b> – aber bewusst, schriftlich und von der Geschäftsführung getragen. Dazu ein Termin für den Austausch. Genau das will auch Herr Lindemann im [[Audit]] sehen.' },
        { text: 'Den Fund streichen, weil er technisch nicht behebbar ist',
          antwort: 'Dann wäre das Risiko nicht weg, nur unsichtbar. Ein nicht behandelbarer Fund wird dokumentiert und bewusst getragen – streichen wäre im Audit eine Abweichung.' },
        { text: 'Den Rechner sofort abschalten',
          antwort: 'Dann steht die Lagersteuerung. [[Verfügbarkeit]] ist auch ein [[Schutzziele|Schutzziel]] – die Maßnahme darf nicht mehr Schaden anrichten als das Risiko.' }
      ] },

    { typ: 'nachricht', text: 'Ich habe die elf Funde nun verteilt und Fristen gesetzt. Was fehlt noch, bevor ich das Projekt abschließe?' },

    { typ: 'frage', text: 'Was gehört zum Abschluss dazu?',
      optionen: [
        { text: 'Der Nachtest – er belegt, dass die Lücken zu sind und die Maßnahmen nichts Neues aufgerissen haben', richtig: true,
          antwort: 'Richtig. Ohne [[Nachtest]] ist der Maßnahmenplan eine Absichtserklärung. Und er prüft zwei Dinge: ob die Lücke geschlossen ist <b>und</b> ob dabei nichts kaputtgegangen ist – insofern enthält er immer eine Regressionsprüfung, wie Herr Kaymak sie bei Softwareänderungen fährt.' },
        { text: 'Die Veröffentlichung der Ergebnisse zur Transparenz',
          antwort: 'Im Gegenteil: Der [[Pentest-Bericht]] ist eine Anleitung zum Einbruch und wird streng [[Vertraulichkeit|vertraulich]] behandelt, mit einem festgelegten engen Empfängerkreis.' },
        { text: 'Die Meldung der Funde an die Aufsichtsbehörde',
          antwort: 'Schwachstellen sind nicht meldepflichtig. Eine Meldung wäre nur fällig, wenn tatsächlich personenbezogene Daten abgeflossen wären – dann als [[Datenpanne]] nach Art. 33 DSGVO.' }
      ] },

    { typ: 'mehrfach', text: 'Wie ist mit dem Pentest-Bericht umzugehen? (mehrere)',
      optionen: [
        { text: 'Als streng vertrauliches Dokument mit festgelegtem Empfängerkreis', richtig: true },
        { text: 'Zugriff protokolliert und auf die Beteiligten beschränkt', richtig: true },
        { text: 'Für das Audit aufbewahrt – zusammen mit dem Beleg der umgesetzten Maßnahmen', richtig: true },
        { text: 'Im Intranet veröffentlicht, damit alle für das Thema sensibilisiert werden' },
        { text: 'An den Kunden weitergegeben, der das Zertifikat sehen will' }
      ],
      antwortRichtig: 'Vollständig. Für Sensibilisierung nimmt man eine <b>Zusammenfassung ohne technische Details</b>, nicht den Bericht. Und einem Kunden gibt man das Zertifikat oder eine Bestätigung, dass ein Test stattgefunden hat – nicht die Liste der eigenen Lücken.',
      antwortFalsch: 'Fragen Sie bei jeder Zeile: Was passiert, wenn dieses Dokument das Haus verlässt? Zwei Optionen geben eine fertige Einbruchsanleitung weiter.' },

    { typ: 'frage', text: 'Letzte Frage: Wie oft sollten wir das künftig machen?',
      optionen: [
        { text: 'Jährlich als Regeltest, zusätzlich nach größeren Änderungen – und laufend die monatlichen Scans', richtig: true,
          antwort: 'Das ist die begründbare Antwort. Ein Pentest ist eine <b>Momentaufnahme</b>: Nach einem neuen Standort, einer neuen Anwendung oder einem Umbau des Netzes ist die alte Aussage überholt. Zwischen den Tests hält der [[Schwachstellenscan]] das [[Patch-Management]] im Blick – das ist der [[PDCA|Check-Schritt]] in Ihrem [[ISMS]].' },
        { text: 'Einmal, danach genügen die Scans',
          antwort: 'Dann hätten Sie eine Aussage über den Stand von heute und nie wieder. Verketten und bewerten kann kein Scanner – dafür braucht es in Abständen einen Menschen.' },
        { text: 'Monatlich, dann ist man immer aktuell',
          antwort: 'Zwölf Pentests im Jahr wären nicht finanzierbar und auch nicht sinnvoll: Zwischen zwei Tests muss Zeit sein, die Maßnahmen umzusetzen. Das Monatliche leistet der Scan.' }
      ] },

    { typ: 'merk', text: '<b>Nach dem Bericht:</b> priorisieren nach [[Risiko]] = [[CVSS]] <b>mal</b> [[Schutzbedarf]] · [[Risikobehandlung]] in vier Wegen (vermeiden, reduzieren, übertragen, akzeptieren – akzeptieren nur <b>dokumentiert und von der Leitung</b>) · [[Nachtest]] als Beleg · der [[Pentest-Bericht]] bleibt streng vertraulich. Jährlich wiederholen und nach großen Änderungen.' },

    { typ: 'nachricht', text: 'Damit kann ich in die Geschäftsführung gehen. Sie haben mir die Begründungen geliefert, das war genau das, was ich gebraucht habe.' }
  ]
});
