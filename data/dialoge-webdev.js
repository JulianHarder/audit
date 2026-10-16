/* ===========================================================
   AUDIT – data/dialoge-webdev.js
   Kevin Ostrowski, Webentwicklung in der Agentur, die den
   Shop von Rampe 7 baut.

   Ton: Duzt dich, locker und knapp, denkt in Technik. Er sagt
   genau, was moeglich ist, und fragt dich, was erlaubt ist.
   Keine Emojis, aber kurze Saetze.

   Kernthemen: welche Cookies vor dem Banner laufen duerfen,
   Session und persistent, First und Third Party, Local Storage
   und Fingerprinting, Consent-Tool richtig verdrahten,
   Drittanbieter lokal ausliefern.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   web-01 – Welche darf vor dem Banner laufen
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'web-01',
  kontakt: 'webdev',
  titel: 'Welche Cookies dürfen vor dem Banner laufen?',
  thema: 'Cookie-Arten',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Hey. Ich muss im Shop gleich festlegen, welche Cookies sofort gesetzt werden und welche erst nach dem Banner. Frau Dr. Keilhauer sagt, das entscheide der Zweck – also brauche ich dich.' },
    { typ: 'nachricht', text: 'Ich gehe meine Liste durch, du sagst mir jeweils: sofort oder erst nach Einwilligung.' },

    { typ: 'frage', text: 'Der Warenkorb – eine Kennung, damit die Artikel beim Seitenwechsel nicht verschwinden.',
      optionen: [
        { text: 'Sofort, technisch notwendig', richtig: true, norm: '§ 25 Abs. 2 Nr. 2 TDDDG',
          antwort: 'Richtig. Der Shop ist der Dienst, den die Kundin ausdrücklich verlangt hat – ohne Warenkorb funktioniert er nicht. Das sind [[technisch notwendige Cookies]], und nur die dürfen ohne [[Einwilligung]] gesetzt werden.' },
        { text: 'Erst nach Einwilligung, es ist ja ein Cookie',
          antwort: 'Die Technik ist nicht der Maßstab. § 25 Abs. 2 Nr. 2 TDDDG erlaubt alles, was für den <b>gewünschten Dienst unbedingt erforderlich</b> ist – und das ist der Warenkorb.' }
      ] },

    { typ: 'frage', text: 'Die Entscheidung aus dem Cookie-Banner selbst – wir müssen uns ja merken, was jemand angeklickt hat.',
      optionen: [
        { text: 'Sofort, notwendig', richtig: true,
          antwort: 'Genau, und das überrascht viele. Ohne dieses Cookie müsste das Banner bei jedem Klick erneut fragen. Es dient der Umsetzung der Entscheidung und ist deshalb notwendig – es ist zugleich der [[Einwilligungsnachweis]].' },
        { text: 'Erst nach Einwilligung – sonst ist es ein Zirkelschluss',
          antwort: 'Das wäre tatsächlich ein Zirkelschluss, und genau deshalb ist dieses Cookie notwendig. Sonst käme man nie aus dem Banner heraus.' }
      ] },

    { typ: 'frage', text: 'Das Analyse-Werkzeug, das Besucherzahlen und Absprungrate zählt.',
      optionen: [
        { text: 'Erst nach Einwilligung', richtig: true, norm: '§ 25 Abs. 1 TDDDG',
          antwort: 'Richtig. Der Shop funktioniert ohne Statistik – sie nutzt uns, nicht der Kundin. [[Analyse-Cookies]] sind immer einwilligungspflichtig, auch wenn der Anbieter „anonym" verspricht.' },
        { text: 'Sofort, wir brauchen die Zahlen für den Betrieb',
          antwort: 'Wir brauchen sie, aber der <b>Dienst</b> braucht sie nicht. Maßstab ist der von der Person gewünschte Dienst, nicht unser Geschäftsinteresse.' },
        { text: 'Sofort, wenn die IP-Adresse gekürzt wird',
          antwort: 'IP-Kürzung ist eine sinnvolle Maßnahme nach [[Datenminimierung]], ändert aber nichts: Der einwilligungspflichtige Vorgang ist der Zugriff auf das [[Endgerät]], nicht die späteren Daten.' }
      ] },

    { typ: 'frage', text: 'Das eingebettete Produktvideo von einer Videoplattform.',
      optionen: [
        { text: 'Erst nach Einwilligung – funktional, nicht notwendig', richtig: true,
          antwort: 'Richtig. Schön, aber nicht erforderlich – das sind [[funktionale Cookies]]. Dazu kommt die [[Drittanbieter-Einbindung]]: Schon das Laden schickt die IP-Adresse an die Plattform. Löse es mit einem Vorschaubild, das erst auf Klick das Video nachlädt.' },
        { text: 'Sofort, das Video gehört zur Produktseite',
          antwort: 'Die Produktseite funktioniert auch mit einem Standbild. Was man weglassen kann, ohne dass der Dienst ausfällt, ist nicht notwendig.' },
        { text: 'Erst nach Einwilligung, aber nur wegen des Cookies',
          antwort: 'Nicht nur. Hier kommen zwei Dinge zusammen – das Cookie der Plattform <b>und</b> die Übertragung der IP-Adresse beim Abruf.' }
      ] },

    { typ: 'frage', text: 'Die Spracheinstellung: deutsch oder englisch, vom Benutzer gewählt.',
      optionen: [
        { text: 'Sofort, notwendig – die Person hat die Einstellung selbst verlangt', richtig: true,
          antwort: 'Richtig. Sie hat den Wunsch aktiv geäußert, und der Dienst in der gewählten Sprache ist genau das, was sie verlangt hat. Dasselbe gilt für die Lastverteilung zwischen Servern.' },
        { text: 'Erst nach Einwilligung, es ist nur Komfort',
          antwort: 'Verständliche Überlegung, aber hier gibt es die ausdrückliche Handlung der Person: Sie hat umgeschaltet. Das unterscheidet die Sprachwahl von „zuletzt angesehene Artikel", das sie nie verlangt hat.' }
      ] },

    { typ: 'karte', titel: 'Die vier Sorten', quelle: 'cookiearten' },

    { typ: 'mehrfach', text: 'Was gehört in die Gruppe „ohne Einwilligung erlaubt"? (mehrere)',
      optionen: [
        { text: 'Login-Sitzung', richtig: true },
        { text: 'Warenkorb', richtig: true },
        { text: 'Lastverteilung zwischen Servern', richtig: true },
        { text: 'Reichweitenmessung' },
        { text: 'Conversion-Tracking' },
        { text: 'Zuletzt angesehene Artikel' }
      ],
      antwortRichtig: 'Vollständig. Die ersten drei trägt der <b>gewünschte Dienst</b> selbst. Reichweitenmessung und [[Marketing-Cookies|Conversion-Tracking]] dienen uns, und „zuletzt angesehen" ist Komfort – alle drei brauchen eine [[Einwilligung]].',
      antwortFalsch: 'Frag bei jedem Punkt: Fällt der Dienst aus, den die Kundin wollte, wenn ich das weglasse? Wenn nein, ist es nicht notwendig.' },

    { typ: 'merk', text: 'Nur <b>unbedingt erforderlich</b> darf ohne [[Einwilligung]] laufen – Maßstab ist der <b>von der Person gewünschte Dienst</b>, nicht unser Nutzen. Warenkorb, Login, Sprache, Lastverteilung und das Consent-Cookie selbst: ja. Analyse, Marketing, Komfort: nein.' },

    { typ: 'nachricht', text: 'Gut, damit kann ich die Liste abarbeiten. Nächste Frage kommt, sobald ich beim Ablaufdatum bin.' }
  ]
});

/* ---------------------------------------------------------------
   web-02 – Session, persistent, First, Third
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'web-02',
  kontakt: 'webdev',
  titel: 'Session, persistent, First, Third',
  thema: 'Cookies und Tracking',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Im Consent-Tool muss ich zu jedem Cookie Laufzeit und Herkunft eintragen. Vier Begriffe, die ständig durcheinandergehen – sortieren wir die einmal richtig.' },

    { typ: 'frage', text: 'Was unterscheidet ein Session-Cookie von einem persistenten?',
      optionen: [
        { text: 'Das Session-Cookie verschwindet beim Schließen des Browsers, das persistente hat ein Ablaufdatum', richtig: true,
          antwort: 'Genau. Das [[Session-Cookie]] lebt nur für die laufende Sitzung – typisch für Warenkorb und Anmeldung. Das [[persistentes Cookie|persistente Cookie]] bleibt bis zum Ablaufdatum, manchmal Monate. Je länger die Laufzeit, desto begründungsbedürftiger.' },
        { text: 'Das Session-Cookie liegt im Speicher, das persistente auf der Festplatte',
          antwort: 'Technisch läuft es oft darauf hinaus, aber die Unterscheidung ist eine andere: Es geht um die <b>Lebensdauer</b> – Sitzungsende gegen Ablaufdatum.' },
        { text: 'Das Session-Cookie braucht keine Einwilligung, das persistente immer',
          antwort: 'Das ist die häufigste Verwechslung. Über die Einwilligung entscheidet der <b>Zweck</b>, nicht die Laufzeit. Ein persistentes Cookie für die Banner-Entscheidung ist notwendig, ein Session-Cookie für Analyse ist es nicht.' }
      ] },

    { typ: 'frage', text: 'Und First Party gegen Third Party?',
      optionen: [
        { text: 'First Party setzt die besuchte Seite selbst, Third Party ein eingebetteter Dritter', richtig: true,
          antwort: 'Richtig. Das [[First-Party-Cookie]] bleibt beim Haus. Das [[Third-Party-Cookie]] kommt von einem Fremden, der auf vielen Seiten sitzt – und genau daraus entsteht seitenübergreifendes [[Tracking]].' },
        { text: 'First Party kommt vom Server, Third Party aus JavaScript',
          antwort: 'Beide Wege gibt es in beiden Fällen. Entscheidend ist, <b>wessen</b> Domain das Cookie gehört – der besuchten oder einer fremden.' },
        { text: 'First Party ist immer notwendig',
          antwort: 'Nein. Ein Analyse-Cookie kann durchaus First Party sein und bleibt trotzdem einwilligungspflichtig. Herkunft und Zweck sind zwei verschiedene Fragen.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt die Frage, auf die ich eigentlich hinauswollte. Ich kann das Analyse-Cookie als First Party setzen, über unsere eigene Domain, und die Daten dann serverseitig weiterschicken.' },

    { typ: 'frage', text: 'Hilft das rechtlich?',
      optionen: [
        { text: 'Nein – über die Einwilligung entscheidet der Zweck, nicht die Herkunft', richtig: true,
          antwort: 'Richtig. Es bleibt ein [[Analyse-Cookies|Analyse-Cookie]] und damit einwilligungspflichtig. Für den <b>Datenschutz</b> ist der Weg trotzdem besser: weniger Daten gehen direkt an den Dritten. Nur die Einwilligung erspart er nicht.' },
        { text: 'Ja, First-Party-Cookies sind von § 25 TDDDG ausgenommen',
          antwort: 'Eine solche Ausnahme gibt es nicht. § 25 TDDDG fragt nach der Erforderlichkeit für den Dienst, nicht nach der Domain.' },
        { text: 'Ja, weil die Daten dann uns gehören',
          antwort: 'Daten „gehören" datenschutzrechtlich niemandem. Wir werden dadurch nur zum [[Verantwortlicher|Verantwortlichen]] für einen weiteren Verarbeitungsschritt.' }
      ] },

    { typ: 'frage', text: 'Noch eine aus der Praxis: Welche Angaben muss ich pro Cookie in der Information bereitstellen?',
      optionen: [
        { text: 'Zweck, Anbieter beziehungsweise Empfänger und Speicherdauer', richtig: true, norm: 'Art. 13 DSGVO, EuGH „Planet49"',
          antwort: 'Genau diese drei. [[Planet49]] nennt Laufzeit und Dritte ausdrücklich, Art. 13 DSGVO die Zwecke und Empfänger. Name des Cookies und Domain gibt man üblicherweise dazu – schaden kann es nicht.' },
        { text: 'Nur den Namen des Cookies',
          antwort: 'Der Name sagt niemandem etwas. Entscheidend sind <b>Zweck</b>, <b>Empfänger</b> und <b>Dauer</b>.' },
        { text: 'Nur, ob es notwendig ist',
          antwort: 'Das gehört dazu, reicht aber nicht. Ohne Zweck, Empfänger und Dauer kann niemand informiert entscheiden.' }
      ] },

    { typ: 'merk', text: '<b>Laufzeit:</b> [[Session-Cookie|Session]] = bis zum Schließen des Browsers · [[persistentes Cookie|persistent]] = bis zum Ablaufdatum. <b>Herkunft:</b> [[First-Party-Cookie|First Party]] = von der besuchten Seite · [[Third-Party-Cookie|Third Party]] = von einem Dritten. Über die Einwilligung entscheidet aber keins von beiden, sondern der <b>Zweck</b>.' },

    { typ: 'nachricht', text: 'Alles klar. Dann trage ich das so ein – und bringe das nächste Mal eine Idee mit, die mir zu schön vorkommt, um zu stimmen.' }
  ]
});

/* ---------------------------------------------------------------
   web-03 – Local Storage und Fingerprinting
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'web-03',
  kontakt: 'webdev',
  titel: 'Dann nehmen wir eben kein Cookie',
  thema: 'Cookies und Tracking',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe im Netz einen Vorschlag gefunden: Statt Cookies nimmt man Local Storage, dann braucht man kein Banner. Klingt nach einem Trick, der zu einfach ist.' },

    { typ: 'frage', text: 'Stimmt das?',
      optionen: [
        { text: 'Nein – § 25 TDDDG spricht von Informationen auf dem Endgerät, nicht von Cookies', richtig: true, norm: '§ 25 Abs. 1 TDDDG',
          antwort: 'Genau, und das ist der entscheidende Wortlaut. [[Local Storage]], Session Storage, IndexedDB – rechtlich alles dasselbe wie ein Cookie. Die Norm schützt das [[Endgerät]] als Raum, nicht eine bestimmte Technik.' },
        { text: 'Ja, Local Storage wird nicht automatisch mitgeschickt',
          antwort: 'Technisch richtig – es landet nicht in jedem Request. Rechtlich irrelevant: Das Hineinschreiben auf das Gerät ist der Vorgang, den § 25 TDDDG erfasst.' },
        { text: 'Ja, aber nur für anonyme Daten',
          antwort: 'Umgekehrt sogar: § 25 TDDDG gilt <b>unabhängig</b> vom Personenbezug. Er greift auch dann, wenn die gespeicherte Information niemanden identifiziert.' }
      ] },

    { typ: 'nachricht', text: 'Dachte ich mir. Dann die nächste Idee aus demselben Artikel: Man erkennt Besucher am Browser-Fingerprint, dann speichert man gar nichts.' },

    { typ: 'frage', text: 'Was ist Fingerprinting und wie ist es zu bewerten?',
      optionen: [
        { text: 'Wiedererkennung aus Geräteeigenschaften – es bleibt Tracking und braucht eine Einwilligung', richtig: true,
          antwort: 'Richtig. [[Fingerprinting]] setzt Bildschirmgröße, Schriftarten, Zeitzone, Grafikkarte und Browserversion zu einer fast eindeutigen Signatur zusammen. Es umgeht Cookies technisch, aber es ist [[Tracking]] und damit erst recht einwilligungspflichtig – es ist für die Person sogar <b>schwerer kontrollierbar</b>, weil sie nichts löschen kann.' },
        { text: 'Erlaubt, weil nichts auf dem Gerät gespeichert wird',
          antwort: 'Das Auslesen von Geräteeigenschaften ist ein Zugriff auf das [[Endgerät]] im Sinne von § 25 TDDDG. Und die Profilbildung danach fällt unter die [[DSGVO]].' },
        { text: 'Dasselbe wie ein Zählpixel',
          antwort: 'Verwandt, aber nicht dasselbe. Ein [[Zählpixel]] überträgt beim Abruf Daten an einen Dritten; Fingerprinting <b>erkennt wieder</b>, ohne überhaupt etwas zu übertragen oder zu speichern.' }
      ] },

    { typ: 'frage', text: 'Fällt dir auf, was diese beiden „Tricks" gemeinsam haben?',
      optionen: [
        { text: 'Beide ändern die Technik, nicht den Zweck – und bewertet wird der Zweck', richtig: true,
          antwort: 'Das ist der Satz, den du mitnehmen solltest. Wer die Technik wechselt, um eine Pflicht zu umgehen, hat weiterhin denselben Zweck – und wird daran gemessen. Umgehungsversuche machen die Lage im Prüfungsfall sogar schlechter, weil sie Absicht zeigen.' },
        { text: 'Beide sind technisch veraltet',
          antwort: 'Im Gegenteil, beide sind verbreitet und aktuell. Das Problem ist nicht ihr Alter, sondern dass sie am Zweck nichts ändern.' },
        { text: 'Beide funktionieren nur in alten Browsern',
          antwort: 'Local Storage und Fingerprinting funktionieren überall. Moderne Browser erschweren nur Third-Party-Cookies – was Fingerprinting gerade attraktiver macht.' }
      ] },

    { typ: 'frage', text: 'Was darf ich denn ohne Einwilligung über die Nutzung auswerten?',
      optionen: [
        { text: 'Server-Logfiles im erforderlichen Umfang, auf berechtigtes Interesse gestützt und kurz aufbewahrt', richtig: true, norm: 'Art. 6 Abs. 1 lit. f DSGVO',
          antwort: 'Richtig, und beachte den Unterschied: Beim Server-Log greife ich <b>nicht auf das Endgerät zu</b> – die Daten fallen bei mir an. Damit ist § 25 TDDDG nicht berührt und ich bin auf der DSGVO-Stufe, wo ein [[berechtigtes Interesse]] (Betrieb und Sicherheit) tragen kann. Mit kurzer Aufbewahrung und ohne Profilbildung.' },
        { text: 'Nichts, ohne Einwilligung ist jede Auswertung verboten',
          antwort: 'Zu streng. Server-Logs für Betrieb und Sicherheit sind ein anerkanntes [[berechtigtes Interesse]] – weil dafür kein Zugriff auf das Gerät nötig ist.' },
        { text: 'Alles, solange ich die Daten anonymisiere',
          antwort: 'Echte [[Anonymisierung]] nimmt die Daten aus der DSGVO heraus – nur ist der <b>Weg dorthin</b> schon eine Verarbeitung, und auf dem Gerät gilt weiter § 25 TDDDG.' }
      ] },

    { typ: 'merk', text: '§ 25 TDDDG erfasst <b>Informationen auf dem Endgerät</b> – [[Local Storage]], IndexedDB und [[Fingerprinting]] genauso wie Cookies, und zwar <b>unabhängig vom Personenbezug</b>. Server-Logfiles sind etwas anderes: kein Zugriff auf das Gerät, deshalb DSGVO-Stufe und [[berechtigtes Interesse]] möglich.' },

    { typ: 'nachricht', text: 'Dann baue ich es ehrlich. Ist am Ende auch weniger Arbeit als jedes Jahr ein neuer Trick.' }
  ]
});

/* ---------------------------------------------------------------
   web-04 – Das Consent-Tool verdrahten
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'web-04',
  kontakt: 'webdev',
  titel: 'Das Consent-Tool richtig verdrahten',
  thema: 'Banner und Consent',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Das Consent-Tool ist eingebaut. Bevor ich es scharf stelle, möchte ich mit dir durchgehen, was es leisten muss – ich habe schon Projekte gesehen, wo es nur Dekoration war.' },

    { typ: 'frage', text: 'Was ist die wichtigste Aufgabe eines Consent-Tools?',
      optionen: [
        { text: 'Die einwilligungspflichtigen Dienste blockieren, bis zugestimmt wurde', richtig: true, norm: '§ 25 Abs. 1 TDDDG',
          antwort: 'Genau. Eine [[Consent-Management-Plattform]] ist keine Anzeige, sondern eine <b>Sperre</b>. Wenn die Skripte trotzdem beim Seitenaufruf laden, dokumentiert das Banner nur den Verstoß. Das ist der häufigste Konfigurationsfehler.' },
        { text: 'Das Banner hübsch und markengerecht anzeigen',
          antwort: 'Das macht es auch, ist aber nicht der Zweck. Entscheidend ist, dass vor der Zustimmung nichts lädt.' },
        { text: 'Die Datenschutzerklärung erzeugen',
          antwort: 'Viele Tools erzeugen eine Cookie-Liste als Bausteine. Die [[Datenschutzerklärung]] bleibt aber unsere Pflicht und ist eine <b>eigene</b> Aufgabe.' }
      ] },

    { typ: 'frage', text: 'Ich habe eine Vorlage mit „Alle akzeptieren" groß und grün, „Einstellungen" klein und grau. Übernehmen?',
      optionen: [
        { text: 'Nein – Ablehnen muss gleichwertig auf derselben Ebene stehen', richtig: true,
          antwort: 'Richtig, bau einen echten Knopf „Alle ablehnen" neben „Alle akzeptieren", gleiche Größe, gleiche Farbwirkung, gleiche Ebene. Alles andere ist ein [[Dark Pattern]] und nimmt der Einwilligung die Freiwilligkeit.' },
        { text: 'Ja, solange „Einstellungen" erreichbar ist',
          antwort: 'Erreichbarkeit genügt nicht. Maßstab ist die <b>Gleichwertigkeit</b> – gleiche Ebene, gleiche Sichtbarkeit, gleiche Klickzahl.' },
        { text: 'Ja, aber mit einem Hinweis, dass man ablehnen kann',
          antwort: 'Ein Hinweis auf einen schlechter erreichbaren Weg bleibt eine Lenkung. Der zweite Knopf muss daneben stehen.' }
      ] },

    { typ: 'frage', text: 'Wie viele Schalter braucht die Einstellungsansicht?',
      optionen: [
        { text: 'Einen pro Zweck, notwendige Cookies ohne Schalter', richtig: true,
          antwort: 'Genau. Analyse, Marketing, externe Medien – jeweils einzeln, das ist die [[zweckgetrennte Einwilligung]]. Die [[technisch notwendige Cookies|notwendigen Cookies]] bekommen keinen Schalter, sondern eine Erklärung: Sie laufen ohnehin und brauchen keine Einwilligung.' },
        { text: 'Einen für alles, das ist übersichtlicher',
          antwort: 'Übersichtlich, aber unwirksam. „Für den konkreten Fall" heißt pro Zweck – wer Statistik erlauben, Werbung ablehnen will, muss das können.' },
        { text: 'Einen pro Cookie',
          antwort: 'Das wäre ehrlich, aber unbenutzbar – bei 40 Cookies entscheidet niemand mehr. Gruppiert wird nach <b>Zweck</b>, und die Einzelliste steht darunter zum Nachlesen.' }
      ] },

    { typ: 'frage', text: 'Darf das Tool selbst ein Cookie setzen, bevor jemand geklickt hat?',
      optionen: [
        { text: 'Ja, für die Speicherung der Entscheidung – das ist notwendig', richtig: true,
          antwort: 'Richtig. Ohne dieses Cookie müsste das Banner bei jedem Seitenaufruf neu fragen, und es gäbe keinen [[Einwilligungsnachweis]]. Es ist ein [[technisch notwendige Cookies|notwendiges Cookie]], meist [[persistentes Cookie|persistent]] für sechs bis zwölf Monate.' },
        { text: 'Nein, auch das Tool muss warten',
          antwort: 'Dann käme man nie aus dem Banner heraus – ein Zirkelschluss. Genau deshalb ist dieses eine Cookie notwendig.' },
        { text: 'Nur ein Session-Cookie',
          antwort: 'Das wäre zulässig, aber unpraktisch: Nach jedem Browserstart würde erneut gefragt. Und der Nachweis über die Zeit fehlte.' }
      ] },

    { typ: 'frage', text: 'Und der Widerruf? Mir fällt kein guter Ort für den Knopf ein.',
      optionen: [
        { text: 'Dauerhaft erreichbar, zum Beispiel ein kleiner Knopf unten links, der das Banner erneut öffnet', richtig: true, norm: 'Art. 7 Abs. 3 DSGVO',
          antwort: 'Genau so macht man es. Der [[Art. 7 Abs. 3 DSGVO|Widerruf]] muss so einfach sein wie die Erteilung – ein kleiner, immer sichtbarer Schalter plus ein Link in der [[Datenschutzerklärung]]. Und beim Widerruf müssen die betroffenen Cookies auch tatsächlich <b>gelöscht</b> werden.' },
        { text: 'Ein Hinweis in der Datenschutzerklärung genügt',
          antwort: 'Erteilen per Klick, widerrufen per Textsuche in einem langen Dokument – das ist nicht gleichwertig. Es braucht einen Schalter.' },
        { text: 'Der Widerruf läuft über das Löschen der Cookies im Browser',
          antwort: 'Das kann die Person immer tun, ist aber kein von uns angebotener Widerruf. Die Pflicht trifft <b>uns</b>, nicht die Nutzerin.' }
      ] },

    { typ: 'mehrfach', text: 'Was muss das Tool protokollieren, damit der Nachweis trägt? (mehrere)',
      optionen: [
        { text: 'Welche Zwecke zugestimmt wurden', richtig: true },
        { text: 'Zeitpunkt der Entscheidung', richtig: true },
        { text: 'Die damals angezeigte Fassung des Banners', richtig: true },
        { text: 'Name und Adresse der Besucherin' },
        { text: 'Die vollständige IP-Adresse auf Dauer' }
      ],
      antwortRichtig: 'Richtig. Für den [[Einwilligungsnachweis]] braucht es Zwecke, Zeitpunkt und die damals gezeigte Fassung – sonst kann man später nicht belegen, <b>worüber</b> informiert wurde. Name, Adresse und eine dauerhaft gespeicherte IP wären das Gegenteil von [[Datenminimierung]]: Man würde für den Nachweis mehr Daten sammeln als für den Zweck selbst.',
      antwortFalsch: 'Überlege, was du im Streitfall belegen musst – und dann, ob du dafür wirklich die Identität der Person brauchst.' },

    { typ: 'karte', titel: 'Konfigurationsprüfung', quelle: 'consentregeln',
      keys: ['vorher', 'gleichwertig', 'granular', 'widerruf', 'nachweis'] },

    { typ: 'merk', text: 'Ein [[Consent-Management-Plattform|Consent-Tool]] ist eine <b>Sperre</b>, keine Anzeige: vorher blockieren, gleichwertig ablehnen lassen, pro Zweck trennen, Widerruf dauerhaft anbieten und beim Widerruf wirklich löschen – und Zwecke, Zeitpunkt und Bannerfassung protokollieren.' },

    { typ: 'nachricht', text: 'Damit kann ich arbeiten. Eine Sache bleibt noch – die ganzen fremden Server, von denen der Shop Zeug nachlädt.' }
  ]
});

/* ---------------------------------------------------------------
   web-05 – Drittanbieter im Shop
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'web-05',
  kontakt: 'webdev',
  titel: 'Schriften, Karten, Videos, Like-Buttons',
  thema: 'Drittanbieter',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe den Shop im Netzwerk-Mitschnitt angesehen. Beim Aufruf der Startseite gehen Anfragen an sieben fremde Server – Schriftart, Kartendienst, Videoplattform, Like-Button, zwei Werbenetzwerke und ein Icon-Dienst.' },

    { typ: 'frage', text: 'Was passiert bei so einer Anfrage an einen fremden Server, auch ohne jedes Cookie?',
      optionen: [
        { text: 'Der Dritte erfährt IP-Adresse, Zeitpunkt und die aufgerufene Seite', richtig: true,
          antwort: 'Genau, und das ist der Punkt, den viele übersehen. Jede [[Drittanbieter-Einbindung]] ist bereits eine Übermittlung – die IP-Adresse ist ein [[personenbezogene Daten|personenbezogenes Datum]]. Dafür braucht es eine Grundlage, lange vor jedem Cookie.' },
        { text: 'Nichts, solange kein Cookie gesetzt wird',
          antwort: 'Der Abruf selbst ist der Vorgang. Ohne IP-Adresse könnte der Server die Datei gar nicht zurücksenden – sie fließt zwangsläufig mit.' },
        { text: 'Nur der Dateiname wird übertragen',
          antwort: 'Der auch. Dazu aber IP-Adresse, Zeitpunkt, Browserkennung und über den Referrer meist die aufgerufene Seite.' }
      ] },

    { typ: 'frage', text: 'Die Schriftart kommt dynamisch von Googles Servern. Dein Vorschlag?',
      optionen: [
        { text: 'Lokal ausliefern – dann entfällt die Übermittlung vollständig', richtig: true, norm: 'LG München I, 3 O 17493/20',
          antwort: 'Richtig, und das ist die beste Lösung überhaupt: Sie löst das Problem restlos, kostet nichts und macht die Seite schneller. Der Fall [[Google Fonts]] war 2022 der Auslöser einer ganzen Abmahnwelle – weil es so leicht vermeidbar ist.' },
        { text: 'Ins Consent-Tool aufnehmen und nach Einwilligung laden',
          antwort: 'Das wäre zulässig, aber unnötig. Wenn man die Übermittlung ganz vermeiden kann, braucht man keine Einwilligung einzuholen – das ist [[Privacy by Design]].' },
        { text: 'In der Datenschutzerklärung erwähnen',
          antwort: 'Erwähnen ersetzt keine Rechtsgrundlage. Informieren muss man zusätzlich, aber zuerst muss der Vorgang zulässig sein.' }
      ] },

    { typ: 'frage', text: 'Der Like-Button des sozialen Netzwerks – was ist dort das Besondere?',
      optionen: [
        { text: 'Er sendet schon beim Laden Daten an das Netzwerk – Lösung ist eine Zwei-Klick-Variante', richtig: true,
          antwort: 'Genau. Ein [[Social Plugin]] funkt, sobald die Seite lädt, ganz ohne Klick. Bei der Zwei-Klick-Lösung ist zunächst nur ein Platzhalter aktiv, und erst auf ausdrücklichen Wunsch wird der echte Knopf geladen. Beim Einbinden kann sogar eine <b>gemeinsame Verantwortlichkeit</b> mit dem Netzwerk entstehen (Art. 26 DSGVO).' },
        { text: 'Nichts Besonderes, es ist nur ein Bild',
          antwort: 'Es ist aktives Skript. Das Netzwerk erfährt den Seitenaufruf – bei angemeldeten Nutzern sogar zuordenbar zum Konto.' },
        { text: 'Er ist verboten',
          antwort: 'Verboten ist er nicht, nur nicht ohne [[Einwilligung]] oder Zwei-Klick-Lösung einzubinden.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Einbindungen lassen sich durch lokales Ausliefern vollständig entschärfen? (mehrere)',
      optionen: [
        { text: 'Schriftarten', richtig: true },
        { text: 'Icon-Sets', richtig: true },
        { text: 'JavaScript-Bibliotheken aus einem CDN', richtig: true },
        { text: 'Kartendienst mit Live-Routing' },
        { text: 'Videoplattform' }
      ],
      antwortRichtig: 'Genau die drei. Schriften, Icons und Bibliotheken sind <b>statische Dateien</b> – die kann man einfach mitliefern. Karte und Video brauchen den Dienst des Dritten selbst; dort hilft nur Einwilligung oder eine Vorschau, die erst auf Klick nachlädt.',
      antwortFalsch: 'Frag dich bei jedem Punkt: Ist das eine Datei, die ich einfach mitliefern kann – oder brauche ich den fremden Dienst im Betrieb?' },

    { typ: 'frage', text: 'Für die beiden Werbenetzwerke: Reihenfolge der Prüfung?',
      optionen: [
        { text: 'Vermeiden, sonst Einwilligung einholen, dann AV-Vertrag und Drittlandprüfung', richtig: true, mischen: false,
          antwort: 'Richtig, in dieser Reihenfolge. Erst fragen, ob man es überhaupt braucht ([[Datenminimierung]]), dann die [[Einwilligung]] als Grundlage, dann die Verträge – [[AV-Vertrag]] und, falls der Anbieter außerhalb der EU sitzt, die [[Drittland|Drittlandprüfung]] mit [[EU-US Data Privacy Framework|DPF]] oder [[Standardvertragsklauseln]].' },
        { text: 'Erst Verträge, dann Einwilligung, dann vermeiden',
          antwort: 'Die Reihenfolge ist genau umgekehrt. Der günstigste Fall ist immer der, der gar nicht stattfindet.' },
        { text: 'Nur die Einwilligung, die Verträge macht der Anbieter',
          antwort: 'Der [[AV-Vertrag]] ist <b>unsere</b> Pflicht als [[Verantwortlicher|Verantwortliche]]. Dass der Anbieter eine Vorlage bereitstellt, nimmt uns die Prüfung nicht ab.' }
      ] },

    { typ: 'merk', text: 'Jede [[Drittanbieter-Einbindung]] überträgt schon beim Abruf die <b>IP-Adresse</b> – auch ohne Cookie. Statische Dateien wie Schriften und Icons deshalb <b>lokal</b> ausliefern ([[Google Fonts]]), echte Dienste erst nach [[Einwilligung]] laden, [[Social Plugin|Social Plugins]] über eine Zwei-Klick-Lösung.' },

    { typ: 'nachricht', text: 'Sieben Anfragen werden also drei, und die laufen erst nach dem Klick. Danke – das war hilfreicher als die Vorlage aus dem Baukasten.' }
  ]
});
