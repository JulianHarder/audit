/* ===========================================================
   AUDIT – data/dialoge-merle.js
   Merle, Azubi im 1. Lehrjahr. Soll die Banner- und
   Shoptexte Korrektur lesen und versteht die Fachbegriffe
   nicht.

   Ton: Duzt dich, freundlich und neugierig, schreibt in
   normalen Saetzen ohne Fachsprache. Sie fragt nach, wenn
   eine Erklaerung zu abstrakt bleibt.

   Hier erklaerst DU. Die Fragen pruefen nicht Wissen allein,
   sondern die Auswahl der richtigen Erklaerung – wer erklaeren
   kann, hat es verstanden.

   Kernthemen: was ein Cookie ist, First und Third Party,
   Banner gegen Datenschutzerklaerung, "anonym" als Werbewort.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   mer-01 – Was ist ein Cookie
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mer-01',
  kontakt: 'merle',
  titel: 'Was ist ein Cookie eigentlich?',
  thema: 'Cookies und Tracking',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Hallo! Ich soll den Text für das Cookie-Banner Korrektur lesen. Peinliche Frage: Ich weiß gar nicht genau, was ein Cookie ist. Irgendwas Schlimmes?' },

    { typ: 'frage', text: 'Wie erklärst du es ihr am besten?',
      optionen: [
        { text: 'Eine kleine Textdatei, die eine Website im Browser ablegt und beim nächsten Besuch wieder mitbekommt', richtig: true,
          antwort: 'Genau so. Ein [[Cookie]] ist erstmal nur ein <b>Speicherplatz</b> – nichts Gutes und nichts Schlechtes. Deshalb ist der nächste Satz der wichtige: Entscheidend ist nicht die Technik, sondern <b>wofür</b> man sie benutzt.' },
        { text: 'Ein kleines Programm, das die Website auf dem Rechner ausführt',
          antwort: 'Das wäre tatsächlich bedrohlich – und es ist falsch. Ein Cookie führt nichts aus, es ist nur Text. Ausgeführt wird JavaScript, und das ist etwas anderes.' },
        { text: 'Ein Virus, den man akzeptieren muss',
          antwort: 'Das ist die Angst, die viele haben, aber sachlich falsch. Ein [[Virus]] verbreitet sich und richtet Schaden an. Ein Cookie liegt da und wird gelesen.' }
      ] },

    { typ: 'nachricht', text: 'Ah, okay. Aber wenn das harmlos ist – warum muss man dann überhaupt fragen? Bei anderen Dateien fragt auch niemand.' },

    { typ: 'frage', text: 'Was ist die beste Antwort?',
      optionen: [
        { text: 'Weil es auf ihrem Gerät gespeichert wird, und das Gerät gehört ihr – dafür braucht man eine Erlaubnis', richtig: true, norm: '§ 25 TDDDG',
          antwort: 'Sehr gute Erklärung, weil sie das Prinzip trifft. [[TDDDG|§ 25 TDDDG]] behandelt das [[Endgerät]] wie einen eigenen Raum: Hineinschreiben und Herauslesen braucht eine Erlaubnis – egal, ob darin etwas Persönliches steht.' },
        { text: 'Weil in einem Cookie immer personenbezogene Daten stehen',
          antwort: 'Das stimmt nicht immer – manchmal steht nur eine Nummer drin. Und gerade deshalb ist die Begründung über das <b>Gerät</b> die bessere: § 25 TDDDG gilt unabhängig vom Personenbezug.' },
        { text: 'Weil die DSGVO Cookies verbietet',
          antwort: 'Verboten sind sie nicht, und die DSGVO ist auch nicht die richtige Norm für diese Stufe. Es geht um eine <b>Erlaubnis</b> für den Zugriff auf das Gerät.' }
      ] },

    { typ: 'frage', text: 'Merle fragt: „Aber der Warenkorb ist doch auch ein Cookie. Fragt der auch?"',
      optionen: [
        { text: 'Nein – ohne ihn gäbe es den Shop nicht, den sie benutzen wollte', richtig: true,
          antwort: 'Richtig erklärt. Das sind [[technisch notwendige Cookies]]: Sie tragen genau den Dienst, den die Person <b>verlangt hat</b>. Darum gilt für sie die Ausnahme in § 25 Abs. 2 TDDDG.' },
        { text: 'Ja, alle Cookies brauchen eine Einwilligung',
          antwort: 'Dann müsste man vor dem Einkaufen zustimmen, damit der Warenkorb funktioniert – das wäre absurd. Für notwendige Cookies gibt es die Ausnahme.' },
        { text: 'Nein, weil er nur kurz gespeichert wird',
          antwort: 'Die Dauer ist nicht der Grund. Ein [[Session-Cookie]] für Analyse wäre genauso einwilligungspflichtig. Es geht um die <b>Erforderlichkeit</b>.' }
      ] },

    { typ: 'mehrfach', text: 'Merle will es nachsprechen. Welche Sätze sind richtig? (mehrere)',
      optionen: [
        { text: 'Ein Cookie ist eine Textdatei im Browser', richtig: true },
        { text: 'Ob es erlaubt ist, entscheidet der Zweck', richtig: true },
        { text: 'Notwendige Cookies brauchen keine Einwilligung', richtig: true },
        { text: 'Cookies können den Rechner beschädigen' },
        { text: 'Je kürzer die Laufzeit, desto eher erlaubt' }
      ],
      antwortRichtig: 'Alle drei richtigen hat sie sich gemerkt. Die beiden falschen sind die verbreitetsten Irrtümer: Ein Cookie ist kein Programm und kann nichts beschädigen, und die <b>Laufzeit</b> entscheidet nicht über die Erlaubnis – der Zweck tut es.',
      antwortFalsch: 'Zwei Aussagen sind die typischen Missverständnisse. Frag dich: Kann Text etwas kaputt machen? Und: Entscheidet die Dauer oder der Zweck?' },

    { typ: 'merk', text: 'Ein [[Cookie]] ist nur ein <b>Speicherplatz im Browser</b> – kein Programm, kein Virus. Erlaubt oder nicht entscheidet der <b>Zweck</b>, nicht die Technik und nicht die Laufzeit. Und gefragt wird, weil das [[Endgerät]] der Person gehört.' },

    { typ: 'nachricht', text: 'Jetzt verstehe ich auch den Banner-Text. Da steht nämlich „um Ihr Erlebnis zu verbessern" – und das sagt ja gar nichts.' }
  ]
});

/* ---------------------------------------------------------------
   mer-02 – Wer ist hier fremd
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mer-02',
  kontakt: 'merle',
  titel: 'First Party, Third Party – wer ist hier fremd?',
  thema: 'Cookies und Tracking',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'In der Cookie-Liste stehen „First Party" und „Third Party". Ich habe nachgesehen, das heißt erste und dritte Partei. Aber wer ist die zweite?' },

    { typ: 'frage', text: 'Gute Frage. Wie klärst du das auf?',
      optionen: [
        { text: 'Erste Partei ist die Website, zweite die Besucherin, dritte jeder eingebundene Fremde', richtig: true,
          antwort: 'Genau, und mit dieser Zählung wird der Begriff auf einmal logisch. Ein [[First-Party-Cookie]] kommt von der besuchten Seite, ein [[Third-Party-Cookie]] von einem Dritten, der dort eingebunden ist – Werbenetzwerk, Analysedienst, soziales Netzwerk.' },
        { text: 'Die zweite Partei ist der Browser',
          antwort: 'Der Browser ist nur das Werkzeug der Besucherin. Die <b>zweite Partei ist sie selbst</b> – deshalb fehlt sie in der Aufzählung der Cookie-Arten.' },
        { text: 'Die zweite Partei ist der Server',
          antwort: 'Der Server gehört zur ersten Partei, zur Website. Die zweite ist die Person am anderen Ende.' }
      ] },

    { typ: 'nachricht', text: 'Okay. Und warum ist Third Party dann schlimmer? Es ist doch dasselbe Cookie.' },

    { typ: 'frage', text: 'Was erklärst du ihr?',
      optionen: [
        { text: 'Weil derselbe Dritte auf vielen Websites sitzt und die Besuche zusammensetzen kann', richtig: true,
          antwort: 'Das ist der Kern. Ein Werbenetzwerk ist auf tausenden Seiten eingebunden. Es sieht dich im Shop, in der Zeitung und im Forum – und setzt daraus ein Interessenprofil zusammen. Das ist [[Tracking]], und darum sind [[Third-Party-Cookie|Third-Party-Cookies]] immer einwilligungspflichtig.' },
        { text: 'Weil Third-Party-Cookies technisch länger gespeichert werden',
          antwort: 'Das muss nicht so sein. Das Problem ist nicht die Dauer, sondern die <b>Reichweite über viele Websites</b>.' },
        { text: 'Weil sie verboten sind',
          antwort: 'Verboten nicht – einwilligungspflichtig. Moderne Browser blockieren sie zwar zunehmend, aber das ist eine technische, keine rechtliche Entwicklung.' }
      ] },

    { typ: 'frage', text: 'Merle überlegt weiter: „Dann ist ein First-Party-Cookie also immer in Ordnung?"',
      optionen: [
        { text: 'Nein – ein Analyse-Cookie von unserer eigenen Domain bleibt einwilligungspflichtig', richtig: true,
          antwort: 'Sehr gut, dass du das trennst. Herkunft und Zweck sind <b>zwei verschiedene Fragen</b>. Von uns gesetzt heißt nicht notwendig: [[Analyse-Cookies]] brauchen eine Einwilligung, egal von welcher Domain sie kommen.' },
        { text: 'Ja, bei eigenen Cookies entscheiden wir selbst',
          antwort: 'Wir entscheiden nicht über das Gerät der Kundin. Auch unsere eigenen Cookies unterliegen § 25 TDDDG, wenn sie nicht erforderlich sind.' },
        { text: 'Ja, solange die Daten unser Haus nicht verlassen',
          antwort: 'Das ist für die Abwägung günstig, ändert aber nichts an der Einwilligungspflicht für den Zugriff auf das Gerät.' }
      ] },

    { typ: 'frage', text: 'Letzte von ihr: „Und wenn eine Seite ein kleines Bild von woanders lädt – ist das auch so ein Dritter?"',
      optionen: [
        { text: 'Ja, und dabei erfährt der Dritte schon die IP-Adresse – auch ohne jedes Cookie', richtig: true,
          antwort: 'Hervorragend mitgedacht von ihr, und du hast es richtig eingeordnet. Jede [[Drittanbieter-Einbindung]] überträgt beim Abruf IP-Adresse, Zeitpunkt und Seite. Ein unsichtbares Bild zu genau diesem Zweck heißt [[Zählpixel]].' },
        { text: 'Nein, Bilder sind unproblematisch',
          antwort: 'Gerade Bilder sind ein klassischer Weg: Der Fall [[Google Fonts]] betraf eine nachgeladene Schriftart, und [[Zählpixel]] sind unsichtbare Bilder.' },
        { text: 'Nur wenn das Bild ein Cookie mitschickt',
          antwort: 'Es braucht kein Cookie. Ohne IP-Adresse könnte der fremde Server das Bild gar nicht zurücksenden – sie fließt zwangsläufig mit.' }
      ] },

    { typ: 'merk', text: '<b>Erste</b> Partei = die Website · <b>zweite</b> = die Besucherin · <b>dritte</b> = jeder eingebundene Fremde. [[Third-Party-Cookie|Third Party]] ist heikler, weil derselbe Dritte auf vielen Seiten sitzt. Aber: Herkunft und Zweck sind zwei Fragen – auch ein eigenes [[Analyse-Cookies|Analyse-Cookie]] braucht eine Einwilligung.' },

    { typ: 'nachricht', text: 'Die Zählung mit der zweiten Partei merke ich mir. Ohne die ergab der Name überhaupt keinen Sinn.' }
  ]
});

/* ---------------------------------------------------------------
   mer-03 – Banner oder Datenschutzerklärung
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mer-03',
  kontakt: 'merle',
  titel: 'Banner oder Datenschutzerklärung?',
  thema: 'Banner und Consent',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe jetzt beide Texte vor mir, das Banner und die Datenschutzerklärung. In beiden steht ziemlich das Gleiche. Brauchen wir wirklich zwei?' },

    { typ: 'frage', text: 'Was ist der Unterschied?',
      optionen: [
        { text: 'Das Banner holt eine Einwilligung ein, die Datenschutzerklärung informiert – zwei verschiedene Pflichten', richtig: true, norm: '§ 25 TDDDG bzw. Art. 13 DSGVO',
          antwort: 'Genau. Das [[Cookie-Banner]] fragt und erzeugt eine [[Einwilligung]] nach § 25 TDDDG. Die [[Datenschutzerklärung]] erfüllt die [[Informationspflicht]] aus Art. 13 DSGVO – sie fragt nichts, sie informiert vollständig und dauerhaft. Keines ersetzt das andere.' },
        { text: 'Das Banner ist die Kurzfassung der Datenschutzerklärung',
          antwort: 'So sieht es aus, aber die Funktion ist eine andere. Eine Kurzfassung würde nur informieren – das Banner muss eine <b>Entscheidung</b> einholen.' },
        { text: 'Das Banner ist Pflicht, die Datenschutzerklärung freiwillig',
          antwort: 'Beide sind Pflicht, und die Datenschutzerklärung sogar unabhängig von Cookies: Sie ist auch dann nötig, wenn gar keine einwilligungspflichtigen Dienste im Einsatz sind.' }
      ] },

    { typ: 'nachricht', text: 'Und wenn wir gar keine Analyse-Cookies hätten – bräuchten wir dann noch eine Datenschutzerklärung?' },

    { typ: 'frage', text: 'Was antwortest du?',
      optionen: [
        { text: 'Ja – schon weil Bestelldaten verarbeitet werden, braucht es die Information nach Art. 13', richtig: true, norm: 'Art. 13 DSGVO',
          antwort: 'Richtig. Jede Verarbeitung personenbezogener Daten löst die [[Informationspflicht]] aus – Name, Adresse, Bestellung, Server-Logs. Das Banner könnte man weglassen, die Datenschutzerklärung nie.' },
        { text: 'Nein, ohne Cookies entfällt sie',
          antwort: 'Die Erklärung hängt nicht an Cookies, sondern an der <b>Verarbeitung personenbezogener Daten</b>. Die gibt es in einem Shop immer.' },
        { text: 'Nur wenn ein Kontaktformular existiert',
          antwort: 'Das Formular ist ein weiterer Anlass, aber nicht der einzige. Schon die Bestellung und die Server-Logs genügen.' }
      ] },

    { typ: 'mehrfach', text: 'Was muss in der Datenschutzerklärung stehen? (mehrere)',
      optionen: [
        { text: 'Wer verantwortlich ist, mit Kontaktdaten', richtig: true },
        { text: 'Zwecke und Rechtsgrundlagen der Verarbeitung', richtig: true },
        { text: 'Speicherdauer oder die Kriterien dafür', richtig: true },
        { text: 'Die Rechte der betroffenen Personen und das Beschwerderecht', richtig: true },
        { text: 'Die Umsatzzahlen des Unternehmens' },
        { text: 'Die Namen aller Beschäftigten mit Datenzugriff' }
      ],
      antwortRichtig: 'Alle vier richtigen stehen in Art. 13 DSGVO – dazu die Empfänger und, falls es eine [[Drittland|Drittlandübermittlung]] gibt, deren Grundlage. Umsatzzahlen gehören nicht hinein, und die <b>Namen</b> der Beschäftigten wären sogar ein eigener Datenschutzverstoß: Man nennt Funktionen und Abteilungen, nicht Personen.',
      antwortFalsch: 'Vier der sechs gehören hinein. Überlege beim letzten Punkt, ob das Nennen von Mitarbeiternamen nicht selbst ein Problem wäre.' },

    { typ: 'frage', text: 'Merle fällt noch etwas auf: „Im Banner steht ‚weitere Informationen in der Datenschutzerklärung‘. Reicht das als Information?"',
      optionen: [
        { text: 'Nein – die Kernangaben müssen im Banner selbst stehen, der Link ergänzt nur', richtig: true, norm: 'EuGH „Planet49"',
          antwort: 'Richtig gesehen. Wer entscheiden soll, muss <b>vor</b> der Entscheidung wissen, worüber er entscheidet: Zwecke, Dritte und Laufzeit gehören ins Banner. [[Planet49]] nennt Laufzeit und Dritte ausdrücklich. Die Einzelheiten dürfen dann verlinkt sein.' },
        { text: 'Ja, ein Link genügt, niemand liest das sowieso',
          antwort: 'Dass wenige lesen, ändert die Pflicht nicht. Und eine Einwilligung ohne vorherige Information ist nicht <b>informiert</b> und damit unwirksam.' },
        { text: 'Ja, wenn der Link gut sichtbar ist',
          antwort: 'Sichtbarkeit hilft, ersetzt aber die Kernangaben im Banner nicht. Die Entscheidung fällt im Banner, also muss die Information dort stehen.' }
      ] },

    { typ: 'merk', text: '<b>Zwei Pflichten:</b> [[Cookie-Banner]] = [[Einwilligung]] einholen (§ 25 TDDDG) · [[Datenschutzerklärung]] = [[Informationspflicht|informieren]] (Art. 13 DSGVO). Die Erklärung braucht man <b>immer</b>, auch ohne Cookies. Die Kernangaben – Zwecke, Dritte, Laufzeit – gehören ins Banner, nicht nur hinter einen Link.' },

    { typ: 'nachricht', text: 'Dann schreibe ich die Zwecke ins Banner und streiche „um Ihr Erlebnis zu verbessern". Das hat mich von Anfang an gestört.' }
  ]
});

/* ---------------------------------------------------------------
   mer-04 – Das Wort "anonym"
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'mer-04',
  kontakt: 'merle',
  titel: 'Der Anbieter sagt, es ist anonym',
  thema: 'Pseudonymisierung',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'In der Anbieter-Broschüre für das Analyse-Tool steht groß „100 % anonyme Statistik, DSGVO-konform". Frau Rebholz sagt, dann bräuchten wir kein Banner. Stimmt das?' },

    { typ: 'frage', text: 'Was ist dein erster Einwand?',
      optionen: [
        { text: 'Selbst wenn es stimmte, würde es am Banner nichts ändern – § 25 TDDDG gilt unabhängig vom Personenbezug', richtig: true, norm: '§ 25 TDDDG',
          antwort: 'Das ist der stärkste Einwand, weil er vor allen anderen greift. [[TDDDG|§ 25 TDDDG]] schützt das [[Endgerät]], nicht die Person. Ob die späteren Daten anonym sind, ist für die Frage „darf ich auf das Gerät zugreifen" <b>egal</b>.' },
        { text: 'Anonyme Daten sind trotzdem personenbezogen',
          antwort: 'Echt anonyme Daten sind gerade nicht personenbezogen – dann gilt die DSGVO nicht mehr. Der Einwand muss also woanders ansetzen.' },
        { text: 'Anbieterangaben sind immer falsch',
          antwort: 'So pauschal kann man das nicht sagen und es überzeugt niemanden. Besser ist das rechtliche Argument.' }
      ] },

    { typ: 'nachricht', text: 'Okay, das Banner bleibt also. Aber ist die Statistik wenigstens anonym? Das wäre doch gut.' },

    { typ: 'frage', text: 'Was ist bei dem Wort „anonym" in Werbetexten zu beachten?',
      optionen: [
        { text: 'Meist ist pseudonym gemeint – eine Kennung, über die Wiedererkennung möglich bleibt', richtig: true, norm: 'Art. 4 Nr. 5 DSGVO',
          antwort: 'Genau. Wenn das Tool Wiederkehrer erkennt, muss es eine Kennung speichern – dann ist es [[Pseudonymisierung|pseudonym]], nicht anonym, und die DSGVO gilt weiter. Echte [[Anonymisierung]] würde bedeuten: niemand kann zurückrechnen, auch wir nicht.' },
        { text: '„Anonym" und „pseudonym" sind dasselbe',
          antwort: 'Es ist der Unterschied zwischen „DSGVO gilt" und „DSGVO gilt nicht". In der Prüfung ist das eine eigene Aufgabe.' },
        { text: '„Anonym" heißt, dass keine Namen gespeichert werden',
          antwort: 'Namen weglassen genügt nicht. Über [[Quasi-Identifikator|Quasi-Identifikatoren]] – Postleitzahl, Gerätetyp, Zeitpunkt – lässt sich oft trotzdem eine Person ermitteln.' }
      ] },

    { typ: 'frage', text: 'Merle fragt: „Wie erkenne ich den Unterschied praktisch?"',
      optionen: [
        { text: 'Daran, ob das Werkzeug wiederkehrende Besucher erkennt – dann kann es nicht anonym sein', richtig: true,
          antwort: 'Ein hervorragender Praxistest, und er funktioniert immer. Wiedererkennung setzt eine gespeicherte Kennung voraus. Wer „Wiederkehrerquote" im Bericht anbietet, kann nicht gleichzeitig anonym arbeiten.' },
        { text: 'Daran, ob der Anbieter aus der EU kommt',
          antwort: 'Der Sitz des Anbieters betrifft die [[Drittland|Drittlandfrage]], nicht die Anonymität der Daten.' },
        { text: 'Daran, ob im Bericht Namen auftauchen',
          antwort: 'Namen tauchen in Statistikwerkzeugen nie auf, auch in pseudonymen. Das Erkennungszeichen ist die <b>Wiedererkennung</b>.' }
      ] },

    { typ: 'frage', text: 'Und was ist von „DSGVO-konform" auf der Broschüre zu halten?',
      optionen: [
        { text: 'Es ist eine Werbeaussage – konform ist nicht das Produkt, sondern allenfalls sein Einsatz bei uns', richtig: true,
          antwort: 'Richtig, und das ist ein Satz für die Prüfung. Es gibt kein amtliches Siegel „DSGVO-konform". [[Verantwortlicher|Verantwortlich]] bleiben wir: Wir müssen Rechtsgrundlage, [[AV-Vertrag]], [[Drittland|Drittlandprüfung]] und Information selbst sicherstellen. Ein Produkt kann das nicht für uns tun.' },
        { text: 'Dann haftet der Anbieter für Verstöße',
          antwort: 'Nach außen haftet der [[Verantwortlicher|Verantwortliche]], also Rampe 7. Intern lassen sich Regressansprüche vereinbaren – das hilft der betroffenen Person aber nicht.' },
        { text: 'Es ist ein Zertifikat der Aufsichtsbehörde',
          antwort: 'Zertifizierungen nach Art. 42 DSGVO gibt es, sie sind aber selten und sehen anders aus. Ein Werbeaufdruck ist keines.' }
      ] },

    { typ: 'merk', text: '„Anonym" in Werbetexten heißt meist <b>[[Pseudonymisierung|pseudonym]]</b> – Praxistest: Erkennt das Werkzeug Wiederkehrer, ist es nicht anonym. Und selbst echte [[Anonymisierung]] erspart das Banner nicht, weil § 25 TDDDG <b>unabhängig vom Personenbezug</b> gilt. „DSGVO-konform" ist Werbung, kein Siegel.' },

    { typ: 'nachricht', text: 'Der Trick mit der Wiederkehrerquote ist gut. Den probiere ich gleich an der Broschüre aus – und da steht sie tatsächlich drin.' }
  ]
});
