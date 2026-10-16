/* ===========================================================
   AUDIT – data/dialoge-anwaeltin.js
   Frau Dr. Keilhauer, Fachanwaeltin fuer IT-Recht (extern).
   Begleitet den Shop-Start juristisch.

   Ton: Spricht dich mit "Sie" an, durchgehend foermlich. Nennt
   zuerst die Norm, dann die Folge. Lobt knapp und sachlich,
   korrigiert ohne Schaerfe. Sie erwartet, dass du eine Aussage
   begruenden kannst, und fragt sonst nach.

   Kernthemen: ePrivacy-Richtlinie und ihr Verhaeltnis zur
   DSGVO, § 25 TDDDG, Verbot mit Erlaubnisvorbehalt nach Art. 6,
   wirksame Einwilligung nach Art. 7, Planet49, Drittland.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   anw-01 – Woher die Cookie-Pflicht kommt
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'anw-01',
  kontakt: 'anwaeltin',
  titel: 'Woher kommt die Cookie-Pflicht überhaupt?',
  thema: 'ePrivacy und TDDDG',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Guten Morgen. Ich bin für den Shop-Start als externe Beraterin dazugeholt worden und habe eine Frage vorab, damit wir dieselbe Sprache sprechen.' },
    { typ: 'nachricht', text: 'In der Projektrunde hieß es gestern mehrfach, das Cookie-Banner sei „eine DSGVO-Pflicht". Das ist ungenau, und die Ungenauigkeit führt im Ernstfall zur falschen Rechtsgrundlage. Sortieren wir das.' },

    { typ: 'frage', text: 'Welches Regelwerk verlangt die Einwilligung für das <b>Setzen</b> eines Cookies?',
      optionen: [
        { text: 'Die ePrivacy-Richtlinie, in Deutschland umgesetzt in § 25 TDDDG', richtig: true, norm: 'Art. 5 Abs. 3 RL 2002/58/EG, § 25 TDDDG',
          antwort: 'Genau so. Die Wurzel ist Artikel 5 Absatz 3 der [[ePrivacy-Richtlinie]], und die deutsche Umsetzung steht in [[TDDDG|§ 25 TDDDG]]. Die [[DSGVO]] regelt, was <b>danach</b> mit den Daten geschieht – nicht den Zugriff auf das Gerät selbst.' },
        { text: 'Die DSGVO, Artikel 6',
          antwort: 'Das ist die verbreitete Verkürzung. Art. 6 DSGVO braucht man für die anschließende Verarbeitung der Daten. Für den Zugriff auf das [[Endgerät]] gilt die speziellere Norm, und das ist § 25 TDDDG.' },
        { text: 'Das BDSG',
          antwort: 'Das [[BDSG]] füllt nationale Spielräume der DSGVO aus – zum Beispiel bei der Benennungspflicht für den [[Datenschutzbeauftragter|DSB]]. Für Cookies ist es nicht die Fundstelle.' }
      ] },

    { typ: 'nachricht', text: 'Dann die Frage, über die in der Prüfung gern gestolpert wird – der Unterschied zwischen den beiden Rechtsakttypen.' },

    { typ: 'frage', text: 'Warum muss man bei einer <b>Richtlinie</b> zusätzlich ein deutsches Gesetz zitieren, bei einer <b>Verordnung</b> aber nicht?',
      optionen: [
        { text: 'Eine Richtlinie verpflichtet nur die Mitgliedstaaten zur Umsetzung, eine Verordnung gilt unmittelbar', richtig: true, norm: 'Art. 288 AEUV',
          antwort: 'Richtig, und das ist die ganze Begründung. Eine Richtlinie gibt den Staaten ein Ziel vor; erst ihr Umsetzungsgesetz bindet die Unternehmen. Eine Verordnung wie die [[DSGVO]] gilt in jedem Mitgliedstaat direkt. Deshalb zitieren wir im deutschen Fall § 25 TDDDG und nicht die Richtlinie.' },
        { text: 'Weil die Richtlinie älter ist',
          antwort: 'Das Alter spielt keine Rolle. Es ist der <b>Rechtsakttyp</b>: Richtlinie heißt Umsetzungsauftrag, Verordnung heißt unmittelbare Geltung.' },
        { text: 'Weil eine Richtlinie nur für Behörden gilt',
          antwort: 'Nein. Sie richtet sich an die Mitgliedstaaten als Gesetzgeber – nicht an Behörden als Anwender. Die Unternehmen bindet erst das nationale Umsetzungsgesetz.' }
      ] },

    { typ: 'frage', text: 'Und die ePrivacy-<b>Verordnung</b>, von der man seit Jahren liest – welchen Stand hat sie?',
      optionen: [
        { text: 'Geplant, aber nicht in Kraft – es gilt weiterhin Richtlinie plus TDDDG', richtig: true,
          antwort: 'Korrekt. Die [[ePrivacy-Verordnung]] steckt seit 2017 im Gesetzgebungsverfahren. Wer sie in einer Klausur als geltendes Recht anführt, verliert Punkte.' },
        { text: 'Seit 2018 in Kraft, zusammen mit der DSGVO',
          antwort: 'Das war der Plan – beide sollten gemeinsam starten. Die DSGVO kam 2018, die ePrivacy-Verordnung nicht. Sie ist bis heute nicht in Kraft.' },
        { text: 'Sie wurde zurückgezogen',
          antwort: 'Zurückgezogen ist sie nicht, das Verfahren läuft formal weiter. Nur eben ohne Ergebnis – deshalb gilt unverändert die Richtlinie in ihrer nationalen Umsetzung.' }
      ] },

    { typ: 'karte', titel: 'Wer regelt was', quelle: 'rechtsrahmen' },

    { typ: 'nachricht', text: 'Nun der Satz, auf den es ankommt. Herr Ostrowski möchte ein Analyse-Werkzeug einbauen und argumentiert, Rampe 7 habe ein berechtigtes Interesse an Besucherzahlen.' },

    { typ: 'frage', text: 'Trägt das berechtigte Interesse als Grundlage für das Analyse-Cookie?',
      optionen: [
        { text: 'Nein – § 25 TDDDG ist die speziellere Norm und kennt diese Ausnahme nicht', richtig: true, norm: '§ 25 Abs. 1 und 2 TDDDG',
          antwort: 'Genau. Das ist der Grundsatz [[lex specialis]]: Für den Zugriff auf das [[Endgerät]] verdrängt § 25 TDDDG die [[Rechtsgrundlage|Rechtsgrundlagen des Art. 6 DSGVO]]. Dort gibt es nur zwei Wege – <b>Einwilligung</b> oder <b>unbedingte Erforderlichkeit</b>. Ein [[berechtigtes Interesse]] ist kein dritter Weg.' },
        { text: 'Ja, wenn die Interessenabwägung dokumentiert wird',
          antwort: 'Eine sorgfältige Abwägung hilft bei Art. 6 Abs. 1 lit. f DSGVO. Nur kommt man auf dieser Stufe gar nicht an: § 25 TDDDG ist die speziellere Norm und lässt das [[berechtigtes Interesse|berechtigte Interesse]] nicht zu.' },
        { text: 'Ja, solange die Daten pseudonymisiert werden',
          antwort: '[[Pseudonymisierung]] ist eine gute Schutzmaßnahme, aber sie beseitigt nicht die Einwilligungspflicht. Der einwilligungspflichtige Vorgang ist der <b>Zugriff auf das Gerät</b> – was danach mit den Daten passiert, ist eine zweite Frage.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Aussagen zum Verhältnis von § 25 TDDDG und DSGVO stimmen? (mehrere)',
      optionen: [
        { text: '§ 25 TDDDG regelt den Zugriff auf das Endgerät', richtig: true },
        { text: 'Die DSGVO regelt den anschließenden Umgang mit den Daten', richtig: true },
        { text: 'Beide Prüfschritte müssen erfüllt sein', richtig: true },
        { text: 'Wenn § 25 TDDDG erfüllt ist, erübrigt sich die DSGVO-Prüfung' },
        { text: '§ 25 TDDDG gilt nur für personenbezogene Daten' }
      ],
      antwortRichtig: 'Vollständig. Es sind <b>zwei Stufen</b>, und beide müssen halten: erst § 25 TDDDG für den Zugriff auf das Gerät, dann die [[DSGVO]] für die Verarbeitung. Und § 25 TDDDG hängt gerade <b>nicht</b> am Personenbezug – er schützt das [[Endgerät]] als solches, auch wenn die gespeicherte Information niemanden identifiziert.',
      antwortFalsch: 'Denken Sie in zwei Stufen: Was passiert <b>auf dem Gerät</b>, und was passiert <b>danach mit den Daten</b>? Und fragen Sie sich, ob § 25 TDDDG überhaupt von personenbezogenen Daten spricht.' },

    { typ: 'merk', text: '<b>Zwei Stufen:</b> Zugriff auf das [[Endgerät]] → [[TDDDG|§ 25 TDDDG]] (Einwilligung oder unbedingt erforderlich, sonst nichts). Umgang mit den Daten → [[DSGVO]] (Art. 6). Die [[ePrivacy-Richtlinie]] ist die Wurzel, die [[ePrivacy-Verordnung]] ist <b>nicht in Kraft</b>.' },

    { typ: 'nachricht', text: 'Damit haben wir das Fundament. Beim nächsten Mal nehmen wir die DSGVO-Seite – dort gilt ein Grundsatz, der die Reihenfolge jeder Prüfung bestimmt.' }
  ]
});

/* ---------------------------------------------------------------
   anw-02 – Verbot mit Erlaubnisvorbehalt
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'anw-02',
  kontakt: 'anwaeltin',
  titel: 'Alles verboten, was nicht erlaubt ist',
  thema: 'Verbotsprinzip',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe die Liste der Verarbeitungen gesehen, die der Shop vorsieht. Bevor wir einzelne Punkte bewerten, brauchen wir den Grundsatz, der die Reihenfolge vorgibt.' },
    { typ: 'nachricht', text: 'Herr Ostrowski formulierte es so: „Was nicht ausdrücklich verboten ist, dürfen wir." Das ist im Datenschutzrecht genau verkehrt herum.' },

    { typ: 'frage', text: 'Wie lautet der Grundsatz richtig?',
      optionen: [
        { text: 'Verbot mit Erlaubnisvorbehalt – verboten, sofern nicht erlaubt', richtig: true, norm: 'Art. 6 Abs. 1 DSGVO',
          antwort: 'Richtig. Jede [[Verarbeitung]] personenbezogener Daten ist zunächst <b>untersagt</b> und wird nur rechtmäßig, wenn eine der sechs [[Rechtsgrundlage|Rechtsgrundlagen des Art. 6 Abs. 1]] greift. Nicht das Verbot muss begründet werden, sondern die Erlaubnis.' },
        { text: 'Erlaubnis mit Verbotsvorbehalt – erlaubt, bis es untersagt wird',
          antwort: 'Das ist die Umkehrung und der häufigste Fehler. Im allgemeinen Wirtschaftsrecht gilt oft die Freiheit als Regel; im Datenschutzrecht ist die Reihenfolge umgekehrt.' },
        { text: 'Zweckbindung',
          antwort: '[[Zweckbindung]] ist einer der [[Grundsätze der Verarbeitung|Grundsätze aus Art. 5]] und gilt zusätzlich. Gesucht war aber der Satz über die <b>Rechtmäßigkeit</b> als solche.' }
      ] },

    { typ: 'nachricht', text: 'Was folgt daraus praktisch für die Beweislast? Das ist die Frage, die in der mündlichen Prüfung gern nachgeschoben wird.' },

    { typ: 'frage', text: 'Wer muss im Streitfall was darlegen?',
      optionen: [
        { text: 'Der Verantwortliche muss die Rechtsgrundlage nachweisen', richtig: true, norm: 'Art. 5 Abs. 2 DSGVO',
          antwort: 'Genau. Das ist die [[Rechenschaftspflicht]]: Der [[Verantwortlicher|Verantwortliche]] muss die Einhaltung <b>nachweisen können</b>. Die betroffene Person muss nicht beweisen, dass etwas unzulässig war.' },
        { text: 'Die betroffene Person muss die Rechtswidrigkeit beweisen',
          antwort: 'Dann wäre der Schutz wertlos – die Person sieht ja nicht, was intern passiert. Deshalb kehrt Art. 5 Abs. 2 DSGVO die Darlegungslast um.' },
        { text: 'Die Aufsichtsbehörde muss den Verstoß beweisen',
          antwort: 'Die [[Aufsichtsbehörde]] prüft und kann Auskunft verlangen – nachweisen muss die Rechtmäßigkeit aber der Verantwortliche selbst.' }
      ] },

    { typ: 'karte', titel: 'Die sechs Rechtsgrundlagen des Art. 6', quelle: 'rechtsgrundlagen' },

    { typ: 'nachricht', text: 'Jetzt die Anwendung. Drei Verarbeitungen aus dem Shop – ordnen Sie jeweils die Rechtsgrundlage zu.' },

    { typ: 'frage', text: 'Name und Lieferadresse für die Zustellung der Bestellung.',
      optionen: [
        { text: 'Vertragserfüllung', richtig: true, norm: 'Art. 6 Abs. 1 lit. b DSGVO',
          antwort: 'Richtig. Ohne Adresse kein Versand – die Verarbeitung ist für die Erfüllung des Kaufvertrags <b>erforderlich</b>. Eine [[Einwilligung]] wäre hier sogar der falsche Weg: Sie wäre widerruflich, und der Vertrag ließe sich dann nicht mehr erfüllen.' },
        { text: 'Einwilligung',
          antwort: 'Rechtlich nicht falsch gedacht, praktisch ein Fehler. Eine Einwilligung ist [[Art. 7 Abs. 3 DSGVO|jederzeit widerruflich]] – nach dem Widerruf dürften Sie nicht mehr liefern. Für Pflichtangaben nimmt man lit. b.' },
        { text: 'Berechtigtes Interesse',
          antwort: 'Zu schwach, wo eine klarere Grundlage bereitsteht. Wenn die Verarbeitung für den Vertrag erforderlich ist, nimmt man lit. b und nicht die Abwägungsklausel.' }
      ] },

    { typ: 'frage', text: 'Aufbewahrung der Rechnungen für zehn Jahre.',
      optionen: [
        { text: 'Rechtliche Verpflichtung', richtig: true, norm: 'Art. 6 Abs. 1 lit. c DSGVO, § 147 AO, § 257 HGB',
          antwort: 'Korrekt. Handels- und Steuerrecht schreiben die Aufbewahrung vor; die Grundlage ist lit. c. Beachten Sie die Folge: Ein [[Art. 17 DSGVO|Löschverlangen]] greift hier <b>nicht</b> durch, solange die Frist läuft – stattdessen wird die Verarbeitung nach [[Art. 18 DSGVO]] eingeschränkt.' },
        { text: 'Berechtigtes Interesse am Nachweis',
          antwort: 'Ein Interesse besteht sicher, aber es gibt eine ausdrückliche gesetzliche Pflicht. Dann ist lit. c die präzisere Grundlage – und sie ist stabiler, weil sie keine Abwägung erfordert.' },
        { text: 'Vertragserfüllung',
          antwort: 'Der Vertrag ist mit Lieferung und Zahlung erfüllt. Was danach zehn Jahre liegen bleibt, liegt dort wegen des <b>Gesetzes</b>, nicht wegen des Vertrags.' }
      ] },

    { typ: 'frage', text: 'Ein Newsletter an Kundinnen, die ihn bestellt haben.',
      optionen: [
        { text: 'Einwilligung', richtig: true, norm: 'Art. 6 Abs. 1 lit. a DSGVO, § 7 UWG',
          antwort: 'Richtig, und sie wird über [[Double Opt-in]] nachgewiesen. Werbung ist für die Vertragserfüllung nicht erforderlich – hier ist die [[Einwilligung]] die saubere Grundlage, und das Wettbewerbsrecht verlangt sie ohnehin.' },
        { text: 'Vertragserfüllung, der Newsletter gehört zum Kundenverhältnis',
          antwort: 'Der Kaufvertrag verpflichtet zur Lieferung, nicht zur Zusendung von Werbung. Für den Newsletter braucht es eine eigene Grundlage.' },
        { text: 'Berechtigtes Interesse an Kundenbindung',
          antwort: 'Dafür gibt es eine schmale Ausnahme in § 7 Abs. 3 UWG für Bestandskunden und eigene, ähnliche Produkte – mit engen Bedingungen und Widerspruchshinweis. Der Regelweg bleibt die Einwilligung.' }
      ] },

    { typ: 'nachricht', text: 'Und nun die Verzahnung mit dem, was wir letztes Mal besprochen haben.' },

    { typ: 'frage', text: 'Für das Analyse-Cookie im Shop: Welche Prüfung kommt zuerst?',
      optionen: [
        { text: 'Erst § 25 TDDDG für den Zugriff, dann Art. 6 DSGVO für die Daten', richtig: true, mischen: false,
          antwort: 'Genau diese Reihenfolge. Scheitert schon Stufe eins, ist die zweite gleichgültig. Und auf Stufe eins hilft kein [[berechtigtes Interesse]] – es bleibt bei [[Einwilligung]] oder unbedingter Erforderlichkeit.' },
        { text: 'Erst Art. 6 DSGVO, dann § 25 TDDDG',
          antwort: 'Die Reihenfolge ist umgekehrt. Der Zugriff auf das [[Endgerät]] ist der erste Vorgang – die Datenverarbeitung folgt ihm nach. [[lex specialis]] zuerst.' },
        { text: 'Nur Art. 6 DSGVO, § 25 TDDDG betrifft nur Telekommunikationsanbieter',
          antwort: 'Das war unter dem alten TMG eine verbreitete Ansicht. § 25 TDDDG gilt für <b>jeden</b>, der auf Endgeräte zugreift – auch für einen Logistiker mit Onlineshop.' }
      ] },

    { typ: 'merk', text: '<b>Verbot mit Erlaubnisvorbehalt:</b> Jede [[Verarbeitung]] ist verboten, bis eine der sechs [[Rechtsgrundlage|Rechtsgrundlagen]] aus Art. 6 Abs. 1 greift – und nachweisen muss das der [[Verantwortlicher|Verantwortliche]] ([[Rechenschaftspflicht]], Art. 5 Abs. 2). Bei besonderen Kategorien nach Art. 9 gilt dasselbe Prinzip noch strenger.' },

    { typ: 'nachricht', text: 'Notieren Sie sich den Satz wörtlich. Er ist in der Prüfung eine ganze Aufgabe wert und wird fast immer verlangt.' }
  ]
});

/* ---------------------------------------------------------------
   anw-03 – Was eine Einwilligung wirksam macht
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'anw-03',
  kontakt: 'anwaeltin',
  titel: 'Was eine Einwilligung wirksam macht',
  thema: 'Einwilligung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Wir wissen jetzt, dass wir für die nicht notwendigen Cookies eine Einwilligung brauchen. Damit ist die schwierigere Frage noch offen: Wann ist sie <b>wirksam</b>?' },
    { typ: 'nachricht', text: 'Die Definition steht in Art. 4 Nr. 11 DSGVO, die Bedingungen in Art. 7. Vier Merkmale – und jedes einzelne kann die Einwilligung zu Fall bringen.' },

    { typ: 'mehrfach', text: 'Welche Merkmale muss eine wirksame Einwilligung erfüllen? (mehrere)',
      optionen: [
        { text: 'Freiwillig', richtig: true },
        { text: 'Für den konkreten Fall, informiert', richtig: true },
        { text: 'Durch eine unmissverständlich bestätigende Handlung', richtig: true },
        { text: 'Schriftlich auf Papier' },
        { text: 'Notariell beurkundet' }
      ],
      antwortRichtig: 'Vollständig. Freiwillig, informiert, für den konkreten Fall und durch eine <b>aktive Handlung</b> – dazu jederzeit widerrufbar und nachweisbar. Eine Form schreibt die DSGVO ausdrücklich <b>nicht</b> vor: Ein Klick genügt, wenn er protokolliert wird.',
      antwortFalsch: 'Die ersten drei gehören zur Definition in Art. 4 Nr. 11. Bei den anderen beiden fragen Sie sich: Verlangt die DSGVO irgendwo eine <b>Form</b>?' },

    { typ: 'nachricht', text: 'Der häufigste Fehler in der Praxis betrifft das dritte Merkmal. Dazu gibt es ein Urteil, das Sie kennen sollten.' },

    { typ: 'frage', text: 'Ein Kästchen ist beim Laden der Seite <b>bereits angekreuzt</b>, man kann den Haken entfernen. Wirksame Einwilligung?',
      optionen: [
        { text: 'Nein – es fehlt die aktive Handlung', richtig: true, norm: 'EuGH, C-673/17 „Planet49"',
          antwort: 'Richtig, und das ist genau der Fall [[Planet49]] von 2019. Ein vorangekreuztes Kästchen ist eine Verarbeitung, der niemand zugestimmt hat – es fehlt die bestätigende Handlung. Das Urteil verlangt zusätzlich eine Information über Laufzeit und eingebundene Dritte.' },
        { text: 'Ja, denn die Person hätte den Haken entfernen können',
          antwort: 'Das ist [[Opt-out]], und Opt-out genügt für eine Einwilligung nicht. Wer nichts tut, hat nicht zugestimmt – er hat nur nichts getan.' },
        { text: 'Ja, wenn daneben ein Hinweis steht',
          antwort: 'Information ist notwendig, aber nicht ausreichend. Es fehlt weiterhin die <b>Handlung</b>. Informiert und aktiv sind zwei getrennte Merkmale.' }
      ] },

    { typ: 'frage', text: 'Welcher Begriff beschreibt das richtige Vorgehen?',
      optionen: [
        { text: 'Opt-in – nichts passiert, bis aktiv zugestimmt wird', richtig: true,
          antwort: 'Genau. [[Opt-in]] ist der Standard der DSGVO. [[Opt-out]] ist nur dort denkbar, wo überhaupt keine Einwilligung nötig ist – beim [[Art. 21 DSGVO|Widerspruch]] gegen eine Verarbeitung auf Grundlage eines [[berechtigtes Interesse|berechtigten Interesses]] etwa.' },
        { text: 'Opt-out – man kann jederzeit widersprechen',
          antwort: 'Das ist die Gegenrichtung: Die Verarbeitung läuft und wird erst auf Verlangen gestoppt. Für einwilligungspflichtige Vorgänge unzulässig.' },
        { text: 'Double Opt-out',
          antwort: 'Diesen Begriff gibt es nicht. Gemeint ist vermutlich [[Double Opt-in]] – die zweistufige Bestätigung, vor allem beim Newsletter.' }
      ] },

    { typ: 'nachricht', text: 'Zum Newsletter noch eine Nachfrage, weil Frau Rebholz aus dem Marketing darauf drängt.' },

    { typ: 'frage', text: 'Warum genügt es nicht, dass jemand seine Adresse in das Newsletter-Feld eingetragen hat?',
      optionen: [
        { text: 'Weil damit nicht belegt ist, dass die Adresse der Person gehört', richtig: true, norm: 'Art. 7 Abs. 1 DSGVO, § 7 UWG',
          antwort: 'Genau das ist der Punkt. Jeder kann jede Adresse eintippen. Erst das [[Double Opt-in]] – Bestätigungslink in einer Mail an genau diese Adresse – beweist, dass die Inhaberin selbst zugestimmt hat. Und der [[Einwilligungsnachweis]] liegt beim Verantwortlichen.' },
        { text: 'Weil eine E-Mail-Adresse ein besonders geschütztes Datum ist',
          antwort: 'Sie ist ein [[personenbezogene Daten|personenbezogenes Datum]], aber keine [[besondere Kategorien|besondere Kategorie]] – das sind Gesundheit, Religion, Herkunft und die weiteren aus Art. 9. Das Problem liegt beim <b>Nachweis</b>.' },
        { text: 'Weil Werbung grundsätzlich verboten ist',
          antwort: 'Verboten ist sie nicht, nur einwilligungsbedürftig. Für Bestandskunden gibt es sogar eine schmale Ausnahme in § 7 Abs. 3 UWG.' }
      ] },

    { typ: 'frage', text: 'Eine Kundin hat eingewilligt und möchte das nach drei Monaten rückgängig machen. Was gilt?',
      optionen: [
        { text: 'Widerruf jederzeit möglich, so einfach wie die Erteilung – wirkt aber nur für die Zukunft', richtig: true, norm: 'Art. 7 Abs. 3 DSGVO',
          antwort: 'Vollständig richtig. [[Art. 7 Abs. 3 DSGVO|Der Widerruf]] ist jederzeit möglich und muss so einfach sein wie die Erteilung – ein Klick rein, ein Klick raus. Er wirkt <b>ex nunc</b>: Die Verarbeitung bis zum Widerruf bleibt rechtmäßig, ab sofort muss sie enden. Auf den Widerruf ist vorher hinzuweisen.' },
        { text: 'Widerruf möglich, macht aber die bisherige Verarbeitung rückwirkend rechtswidrig',
          antwort: 'Das wäre für Verantwortliche nicht handhabbar und steht so nicht im Gesetz. Art. 7 Abs. 3 Satz 2 stellt ausdrücklich klar: Die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt unberührt.' },
        { text: 'Nur innerhalb von 14 Tagen, wie beim Widerrufsrecht im Kaufrecht',
          antwort: 'Sie verwechseln zwei Dinge. Die 14 Tage sind das verbraucherrechtliche Widerrufsrecht beim Fernabsatzvertrag. Die datenschutzrechtliche Einwilligung ist <b>unbefristet</b> widerruflich.' }
      ] },

    { typ: 'karte', titel: 'Woran ein Banner gemessen wird', quelle: 'consentregeln',
      keys: ['aktiv', 'informiert', 'freiwillig', 'widerruf', 'nachweis'] },

    { typ: 'merk', text: '<b>[[Einwilligung]]</b> = freiwillig · informiert · für den konkreten Fall · <b>aktive Handlung</b> · jederzeit widerrufbar ([[Art. 7 Abs. 3 DSGVO|Art. 7 Abs. 3]], wirkt nur für die Zukunft) · nachweisbar (Art. 7 Abs. 1). Keine Form vorgeschrieben. Vorangekreuzt = unwirksam ([[Planet49]]).' },

    { typ: 'nachricht', text: 'Damit haben Sie das Prüfraster. Beim nächsten Mal legen wir es auf das Banner, das die Agentur gebaut hat – und finden mehrere Punkte.' }
  ]
});

/* ---------------------------------------------------------------
   anw-04 – Das Banner im Rechtscheck
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'anw-04',
  kontakt: 'anwaeltin',
  titel: 'Dieses Banner lassen wir so nicht online',
  thema: 'Banner und Consent',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe den Entwurf der Agentur vor mir. Oben steht „Wir verwenden Cookies, um Ihr Erlebnis zu verbessern." Darunter ein großer grüner Knopf „Alle akzeptieren" und rechts unten ein grauer Textlink „Einstellungen".' },
    { typ: 'nachricht', text: 'Gehen wir es Punkt für Punkt durch. Ich nenne Ihnen den Befund, Sie nennen mir das verletzte Merkmal.' },

    { typ: 'frage', text: 'Ablehnen ist nur über „Einstellungen" und dort über zwei weitere Klicks möglich. Was ist das Problem?',
      optionen: [
        { text: 'Ablehnen muss auf derselben Ebene und genauso leicht möglich sein wie Zustimmen', richtig: true,
          antwort: 'Richtig. Wer den bequemen Weg nur in eine Richtung baut, lenkt die Entscheidung – damit ist sie nicht mehr <b>freiwillig</b>. Das ist ein klassisches [[Dark Pattern]], und die Aufsichtsbehörden beanstanden es regelmäßig.' },
        { text: 'Kein Problem, solange Ablehnen überhaupt möglich ist',
          antwort: 'Die bloße Möglichkeit genügt nicht. Maßstab ist die <b>Gleichwertigkeit</b>: gleiche Ebene, gleiche Sichtbarkeit, gleiche Klickzahl.' },
        { text: 'Es fehlt die Information',
          antwort: 'Die fehlt auch – dazu kommen wir gleich. Dieser Befund betrifft aber die Gestaltung der Wahl, nicht ihren Inhalt.' }
      ] },

    { typ: 'frage', text: '„Um Ihr Erlebnis zu verbessern" – und sonst nichts. Welche Pflicht ist verletzt?',
      optionen: [
        { text: 'Die Informationspflicht: Zwecke, Dritte und Speicherdauer fehlen', richtig: true, norm: 'Art. 13 DSGVO, EuGH „Planet49"',
          antwort: 'Genau. Ohne Angabe der <b>Zwecke</b>, der eingebundenen <b>Dritten</b> und der <b>Laufzeit</b> ist die Einwilligung nicht informiert und damit unwirksam. [[Planet49]] nennt Laufzeit und Dritte ausdrücklich. Die Einzelheiten gehören in die [[Datenschutzerklärung]], die Kernangaben in das Banner.' },
        { text: 'Keine, das ist eine zulässige Zusammenfassung',
          antwort: 'Der Satz sagt nichts Nachprüfbares. Er benennt keinen Zweck, keinen Empfänger und keine Dauer – also kann niemand informiert entscheiden.' },
        { text: 'Die Zweckbindung',
          antwort: '[[Zweckbindung]] heißt: nicht für andere Zwecke weiterverwenden. Hier geht es um die Stufe davor – die Zwecke überhaupt zu <b>nennen</b>.' }
      ] },

    { typ: 'frage', text: 'Ein einziger Schalter deckt Analyse, Marketing und Social Media ab. Zulässig?',
      optionen: [
        { text: 'Nein – für jeden Zweck ist eine eigene Entscheidung nötig', richtig: true, norm: 'Art. 6 Abs. 1 lit. a, Art. 7 DSGVO',
          antwort: 'Richtig, das ist die [[zweckgetrennte Einwilligung]]. „Für den konkreten Fall" heißt: pro Zweck. Wer Statistik erlauben, Werbung aber ablehnen möchte, muss das können.' },
        { text: 'Ja, wenn alle drei Zwecke im Text genannt sind',
          antwort: 'Nennen genügt nicht. Die Person muss <b>einzeln</b> entscheiden können, sonst ist die Einwilligung nicht für den konkreten Fall erteilt.' },
        { text: 'Ja, denn alle drei beruhen auf Cookies',
          antwort: 'Die Technik ist nicht der Maßstab, der <b>Zweck</b> ist es. Reichweitenmessung und Werbeprofil sind zwei verschiedene Dinge.' }
      ] },

    { typ: 'nachricht', text: 'Nun ein Befund aus dem Netzwerk-Mitschnitt, den Herr Ostrowski angefertigt hat. Das Analyse-Skript lädt bereits beim Seitenaufruf – das Banner erscheint erst danach.' },

    { typ: 'frage', text: 'Wie bewerten Sie das?',
      optionen: [
        { text: 'Verstoß gegen § 25 Abs. 1 TDDDG – nicht notwendige Cookies erst nach der Einwilligung', richtig: true, norm: '§ 25 Abs. 1 TDDDG',
          antwort: 'Genau. Der Zugriff ist bereits erfolgt, bevor gefragt wurde; eine nachträgliche Einwilligung heilt das nicht. Genau das soll eine [[Consent-Management-Plattform]] verhindern – hier ist sie offenbar falsch konfiguriert.' },
        { text: 'Unschön, aber zulässig, solange das Banner kommt',
          antwort: 'Die Reihenfolge ist das Entscheidende. Eine Einwilligung wirkt nur <b>vorher</b>; was schon geschehen ist, war rechtswidrig.' },
        { text: 'Zulässig, weil das Skript nur geladen, aber nicht ausgeführt wird',
          antwort: 'Schon der Abruf überträgt Daten an den Dritten – das ist eine [[Drittanbieter-Einbindung]] mit IP-Adresse. Und das Setzen des Cookies folgt in der Regel unmittelbar.' }
      ] },

    { typ: 'frage', text: 'Die Agentur schlägt vor, den Shop ohne Zustimmung gar nicht nutzbar zu machen. Was sagen Sie?',
      optionen: [
        { text: 'Unzulässig – das verstößt gegen die Freiwilligkeit und das Kopplungsverbot', richtig: true, norm: 'Art. 7 Abs. 4 DSGVO',
          antwort: 'Richtig. Eine [[Cookie-Wall]] ohne jede Alternative nimmt der Entscheidung die Freiwilligkeit; der Zugang darf nicht von einer für den Dienst nicht erforderlichen Verarbeitung abhängen. Das ist das [[Kopplungsverbot]]. Bezahlmodelle neben der Zustimmung werden diskutiert, aber nur unter engen Bedingungen hingenommen.' },
        { text: 'Zulässig, niemand muss hier einkaufen',
          antwort: 'Dieses Argument trägt nicht. Die Freiwilligkeit bemisst sich daran, ob die Person ohne Nachteil ablehnen kann – und ein verschlossener Shop ist ein Nachteil.' },
        { text: 'Zulässig, wenn es im Banner angekündigt wird',
          antwort: 'Ankündigung ändert nichts an der Bewertung. Eine erzwungene Zustimmung bleibt unfreiwillig, auch wenn der Zwang transparent ist.' }
      ] },

    { typ: 'frage', text: 'Letzter Punkt: Wer einmal zugestimmt hat, findet keinen Weg zurück. Was folgt daraus?',
      optionen: [
        { text: 'Der Widerruf muss dauerhaft und so einfach wie die Erteilung erreichbar sein', richtig: true, norm: 'Art. 7 Abs. 3 DSGVO',
          antwort: 'Genau. In der Praxis ein kleiner, immer sichtbarer Knopf, der das Banner erneut öffnet – plus ein Hinweis in der [[Datenschutzerklärung]]. Ohne Widerrufsmöglichkeit ist die Einwilligung von Anfang an angreifbar.' },
        { text: 'Nichts, der Widerruf kann per E-Mail an den Datenschutzbeauftragten erfolgen',
          antwort: 'Zustimmen per Klick, widerrufen per Brief an eine Person – das ist gerade nicht „so einfach wie die Erteilung". Art. 7 Abs. 3 Satz 4 verlangt die Gleichwertigkeit.' },
        { text: 'Nichts, bei Cookies gibt es keinen Widerruf',
          antwort: 'Doch, und zwar vollständig. Was auf einer Einwilligung beruht, ist jederzeit widerruflich – auch der Cookie-Consent.' }
      ] },

    { typ: 'karte', titel: 'Die Prüfpunkte im Überblick', quelle: 'consentregeln' },

    { typ: 'merk', text: '<b>Bannerprüfung:</b> vorher fragen (§ 25 TDDDG) · aktive Handlung · gleichwertiges Ablehnen auf derselben Ebene · Zwecke, Dritte und Dauer nennen · pro Zweck getrennt · freiwillig, keine [[Cookie-Wall]] · Widerruf dauerhaft erreichbar · alles protokolliert. Ein [[Dark Pattern]] macht die Einwilligung <b>unwirksam</b>.' },

    { typ: 'nachricht', text: 'Geben Sie das so an die Agentur weiter. Beim nächsten Termin sehen wir uns an, wohin die Daten eigentlich fließen – da wird es noch einmal unangenehm.' }
  ]
});

/* ---------------------------------------------------------------
   anw-05 – Drittland und Drittanbieter
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'anw-05',
  kontakt: 'anwaeltin',
  titel: 'Wohin die Daten wirklich fließen',
  thema: 'Drittland',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', text: 'Letzter Punkt vor dem Start. Das Analyse-Werkzeug, das Frau Rebholz möchte, läuft bei einem US-Anbieter. Zusätzlich lädt der Shop Schriftarten von einem fremden Server nach.' },

    { typ: 'frage', text: 'Was ist an der nachgeladenen Schriftart datenschutzrechtlich relevant?',
      optionen: [
        { text: 'Schon der Abruf überträgt die IP-Adresse der Besucherin an den fremden Server', richtig: true, norm: 'LG München I, 3 O 17493/20',
          antwort: 'Genau. Das ist der Fall [[Google Fonts]]: Das LG München sprach 2022 Schadenersatz zu, weil die IP-Adresse ohne Einwilligung in die USA ging. Eine IP-Adresse ist ein [[personenbezogene Daten|personenbezogenes Datum]]. Die Lösung ist einfach – die Schrift <b>lokal</b> ausliefern.' },
        { text: 'Nichts, Schriftarten enthalten keine personenbezogenen Daten',
          antwort: 'Die Datei selbst nicht. Entscheidend ist der <b>Abruf</b>: Dabei erfährt der fremde Server IP-Adresse, Zeitpunkt und aufgerufene Seite. Das ist eine [[Drittanbieter-Einbindung]].' },
        { text: 'Nur dann etwas, wenn dabei ein Cookie gesetzt wird',
          antwort: 'Ein verbreiteter Irrtum. Es braucht kein Cookie – die Übertragung der IP-Adresse genügt. Dasselbe gilt für ein [[Zählpixel]].' }
      ] },

    { typ: 'nachricht', text: 'Nun zum US-Anbieter. Hier brauchen wir die Prüfung der Drittlandübermittlung, Kapitel V der DSGVO.' },

    { typ: 'frage', text: 'In welcher Reihenfolge prüfen Sie?',
      optionen: [
        { text: 'Erst Angemessenheitsbeschluss, dann geeignete Garantien, dann Ausnahmen', richtig: true, mischen: false, norm: 'Art. 45, 46, 49 DSGVO',
          antwort: 'Genau diese Stufenfolge. Gibt es einen [[Angemessenheitsbeschluss]] der Kommission, ist die Übermittlung wie innerhalb der EU möglich. Sonst braucht es geeignete Garantien – typischerweise [[Standardvertragsklauseln]]. Die Ausnahmen des Art. 49 sind Einzelfälle und kein Dauerbetrieb.' },
        { text: 'Erst Standardvertragsklauseln, dann Angemessenheitsbeschluss',
          antwort: 'Umgekehrt. Der [[Angemessenheitsbeschluss]] ist der einfachere Weg und wird zuerst geprüft – liegt er vor, braucht es die Klauseln gar nicht.' },
        { text: 'Eine Einwilligung der Besucherin genügt immer',
          antwort: 'Art. 49 Abs. 1 lit. a kennt die ausdrückliche Einwilligung als Ausnahme, aber nur für <b>gelegentliche</b> Übermittlungen nach Hinweis auf die Risiken. Für den laufenden Betrieb eines Analyse-Tools ist das kein tragfähiger Weg.' }
      ] },

    { typ: 'frage', text: 'Der Anbieter ist in den USA. Wie steht es dort um das Schutzniveau?',
      optionen: [
        { text: 'Seit Juli 2023 gibt es einen Angemessenheitsbeschluss – aber nur für selbst zertifizierte Unternehmen', richtig: true, norm: 'EU-US Data Privacy Framework, Beschluss vom 10.7.2023',
          antwort: 'Richtig, und der zweite Halbsatz ist der wichtige. Das [[EU-US Data Privacy Framework]] wirkt nicht für die USA als Land, sondern nur für Unternehmen, die sich in die Liste eingetragen haben. Also immer <b>zwei</b> Fragen: Gibt es einen Beschluss – und ist dieser Anbieter darin erfasst?' },
        { text: 'Die USA gelten pauschal als unsicheres Drittland, Übermittlung ausgeschlossen',
          antwort: 'Das war nach [[Schrems II]] die Lage, gilt aber seit 2023 nicht mehr pauschal. Für zertifizierte Unternehmen besteht ein Angemessenheitsbeschluss.' },
        { text: 'Die USA sind kein Drittland, weil sie zu den westlichen Partnerstaaten gehören',
          antwort: '[[Drittland]] ist ein rein rechtlicher Begriff: alles außerhalb von EU und EWR. Politische Nähe spielt keine Rolle.' }
      ] },

    { typ: 'frage', text: 'Was war „Schrems II" und warum ist es für die Prüfung noch wichtig?',
      optionen: [
        { text: 'Das EuGH-Urteil von 2020, das den Vorgänger-Beschluss kippte – seither prüft man die Garantien auf tatsächliche Durchsetzbarkeit', richtig: true, norm: 'EuGH, C-311/18',
          antwort: 'Richtig. [[Schrems II]] erklärte das „Privacy Shield" für unwirksam und verlangte, bei [[Standardvertragsklauseln]] zusätzlich zu prüfen, ob die Rechte im Zielland <b>praktisch</b> durchsetzbar sind. Das erklärt, warum man bei US-Diensten so genau hinsieht – und warum der Nachfolgebeschluss 2023 kam.' },
        { text: 'Ein Bußgeldverfahren gegen ein soziales Netzwerk',
          antwort: 'Daran schlossen sich Verfahren an, aber der Kern war die Prüfung des <b>Angemessenheitsbeschlusses</b> – mit dem Ergebnis, dass er unwirksam war.' },
        { text: 'Das Urteil, das die Standardvertragsklauseln abgeschafft hat',
          antwort: 'Im Gegenteil: Die [[Standardvertragsklauseln]] hat der EuGH ausdrücklich bestätigt. Er verlangte nur eine zusätzliche Prüfung im Einzelfall.' }
      ] },

    { typ: 'nachricht', text: 'Eine letzte Frage, die mit dem Drittland nichts zu tun hat, aber beim gleichen Vertrag auffällt.' },

    { typ: 'frage', text: 'Der Analyse-Anbieter verarbeitet die Daten nach unseren Weisungen. Was brauchen wir mit ihm?',
      optionen: [
        { text: 'Einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO', richtig: true, norm: 'Art. 28 Abs. 3 DSGVO',
          antwort: 'Genau. Er ist [[Auftragsverarbeiter]], wir bleiben [[Verantwortlicher|Verantwortliche]] – also braucht es einen [[AV-Vertrag]] mit Weisungsbindung, Vertraulichkeit, [[Art. 32 DSGVO|Sicherheitsmaßnahmen]], Unterauftragnehmern, Löschung und Prüfrechten. Dasselbe gilt für den Hoster und die Agentur.' },
        { text: 'Nichts Besonderes, ein normaler Dienstleistungsvertrag genügt',
          antwort: 'Ohne [[AV-Vertrag]] ist die Übermittlung an ihn bereits ein eigener Verstoß – und das ist ein Punkt, der in Prüfungen gern abgefragt wird.' },
        { text: 'Eine Vereinbarung über gemeinsame Verantwortlichkeit',
          antwort: 'Die wäre richtig, wenn beide über Zwecke und Mittel <b>gemeinsam</b> entscheiden (Art. 26). Hier handelt er nach unseren Weisungen – das ist Auftragsverarbeitung.' }
      ] },

    { typ: 'merk', text: '<b>Drittland in drei Stufen:</b> [[Angemessenheitsbeschluss]] (Art. 45) → geeignete Garantien wie [[Standardvertragsklauseln]] (Art. 46) → Ausnahmen (Art. 49). Beim [[EU-US Data Privacy Framework]] zusätzlich prüfen, ob der Anbieter <b>zertifiziert</b> ist. Und mit jedem Dienstleister: [[AV-Vertrag]] nach Art. 28.' },

    { typ: 'nachricht', text: 'Damit sind wir durch. Schriften lokal, Analyse erst nach Einwilligung, AV-Verträge nachreichen – dann können Sie online gehen. Sie haben gut mitgedacht.' }
  ]
});
