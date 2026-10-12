/* ===========================================================
   AUDIT – data/dialoge-berater.js
   Herr Baumgart, externer IT-Sicherheitsberater. Duzt dich,
   formuliert aber genau und legt Wert auf die Begriffe. Bei
   ihm geht es um Hashverfahren, Signatur und Zertifikate.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'bau-01',
  kontakt: 'berater',
  titel: 'Der Fingerabdruck einer Datei',
  thema: 'Hashverfahren',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Guten Morgen. Ich bereite den Abschnitt über Integrität vor und würde ihn gern vorab mit dir durchgehen.' },
    { typ: 'nachricht', text: 'Zuerst die Einordnung, denn hier entsteht der häufigste Denkfehler überhaupt.' },

    { typ: 'frage', text: 'Ist ein Hashverfahren eine Verschlüsselung?',
      optionen: [
        { text: 'Nein – es gibt weder einen Schlüssel noch eine Entschlüsselung', richtig: true, norm: 'Hashwert',
          antwort: 'Sehr gut. Das ist der Satz, den ich am häufigsten korrigieren muss. Ein [[Hashwert]] ist ein Fingerabdruck fester Länge, vom Grundgedanken her nichts anderes als eine [[Prüfsumme]]. Verschlüsselung schützt die <b>Vertraulichkeit</b>, ein Hash die <b>Integrität</b>.' },
        { text: 'Ja, nur eben eine besonders starke',
          antwort: 'Verständlicher Irrtum, aber nein. Zur Verschlüsselung gehört zwingend, dass man sie mit einem [[Schlüssel]] wieder rückgängig machen kann. Genau das ist beim Hashen unmöglich.' },
        { text: 'Ja, wenn man den Hash mit einem Schlüssel bildet',
          antwort: 'Das beschreibt [[HMAC]] – da kommt tatsächlich ein geheimer Schlüssel hinzu. Eine Verschlüsselung wird daraus trotzdem nicht: Zurückrechnen kann man auch das nicht.' }
      ] },

    { typ: 'nachricht', text: 'Ich habe fünf Eigenschaften mitgebracht, die eine gute [[Hashfunktion]] erfüllen muss. Prüfen wir sie einzeln.' },

    { typ: 'frage', text: 'Was bedeutet „Einwegfunktion"?',
      optionen: [
        { text: 'Aus dem Hashwert lässt sich die Nachricht nicht zurückrechnen', richtig: true, norm: 'Einwegfunktion',
          antwort: 'Richtig. Deshalb ist „einen Hash entschlüsseln" sprachlich wie sachlich falsch.' },
        { text: 'Die Nachricht kann nur einmal gehasht werden',
          antwort: 'Nein, hashen kann man beliebig oft – und es kommt dank Determinismus immer dasselbe heraus. „Einweg" meint die <b>Richtung</b>: hin ja, zurück nein.' }
      ] },

    { typ: 'frage', text: 'Und „deterministisch"?',
      optionen: [
        { text: 'Dieselbe Eingabe ergibt immer denselben Hashwert', richtig: true,
          antwort: 'Genau. Ohne diese Eigenschaft könnte man gar nichts vergleichen – weder Passwörter noch Prüfsummen.' },
        { text: 'Jede Eingabe ergibt einen anderen Hashwert',
          antwort: 'Das wäre die [[Kollisionsresistenz]], und auch die gilt nur „praktisch". Deterministisch meint das Gegenteil: gleiche Eingabe, gleiches Ergebnis.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Aussagen über Hashwerte stimmen? (mehrere)',
      optionen: [
        { text: 'Die Ausgabe ist immer gleich lang, unabhängig von der Eingabe', richtig: true },
        { text: 'Ein geändertes Zeichen verändert den Hashwert vollständig', richtig: true },
        { text: 'Zwei verschiedene Eingaben mit gleichem Hashwert sind praktisch nicht zu finden', richtig: true },
        { text: 'Längere Eingaben ergeben längere Hashwerte' },
        { text: 'Mit dem richtigen Schlüssel lässt sich der Hashwert umkehren' }
      ],
      antwortRichtig: 'Vollständig richtig. Die ersten drei sind <b>feste Länge</b>, <b>[[Lawineneffekt]]</b> und <b>[[Kollisionsresistenz]]</b>. Die beiden anderen sind genau die Irrtümer, die in Prüfungen als falsche Antwort angeboten werden.',
      antwortFalsch: 'Geh die fünf Eigenschaften noch einmal durch: einweg, feste Länge, deterministisch, Lawineneffekt, kollisionsresistent. „Längere Ausgabe" und „umkehrbar" widersprechen zweien davon direkt.' },

    { typ: 'nachricht', text: 'Zur [[Kollisionsresistenz]] noch ein Wort, weil sie der Grund ist, warum Verfahren überhaupt altern.' },

    { typ: 'frage', text: 'Warum gelten MD5 und SHA-1 heute als unsicher?',
      optionen: [
        { text: 'Weil sich gezielt Kollisionen erzeugen lassen', richtig: true, norm: 'Kollision',
          antwort: 'Richtig. Wer zu einem harmlosen Dokument ein zweites mit demselben Hashwert bauen kann, kann es unterschieben, ohne dass die Prüfung anschlägt. Damit ist die Integritätsaussage wertlos.' },
        { text: 'Weil ihre Hashwerte zu kurz zum Abspeichern sind',
          antwort: 'Die Länge ist nur ein Hinweis, nicht das eigentliche Problem. Entscheidend ist, dass für beide Verfahren praktikable [[Kollision]]sangriffe veröffentlicht wurden.' },
        { text: 'Weil sie zu langsam sind',
          antwort: 'Im Gegenteil, sie sind sehr schnell – bei Passwörtern ist genau das ein zusätzlicher Nachteil. Ausschlaggebend sind aber die Kollisionen.' }
      ] },

    { typ: 'karte', titel: 'Hashverfahren im Überblick', quelle: 'kryptohash' },

    { typ: 'merk', text: 'Fünf Eigenschaften einer guten [[Hashfunktion]]: <b>[[Einwegfunktion|einweg]] · feste Länge · deterministisch · [[Lawineneffekt]] · [[Kollisionsresistenz|kollisionsresistent]]</b>. [[MD5]] und [[SHA-1]] erfüllen die letzte nicht mehr.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'bau-02',
  kontakt: 'berater',
  titel: 'Wie Passwörter gespeichert gehören',
  thema: 'Hashverfahren',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Ich habe mir die Benutzerverwaltung eures Lagerportals angesehen. Wir müssen über die Passwörter sprechen.' },
    { typ: 'nachricht', text: 'Sie liegen dort im Klartext in der Datenbank. Fangen wir mit dem Offensichtlichen an.' },

    { typ: 'frage', text: 'Warum ist das ein Problem?',
      optionen: [
        { text: 'Wer die Datenbank erbeutet, hat sofort alle Passwörter', richtig: true,
          antwort: 'Richtig – und die Wirkung reicht weiter als bis zu eurem Portal. Viele Menschen verwenden dasselbe Passwort mehrfach; ein Diebstahl hier gefährdet auch deren Mailkonten.' },
        { text: 'Die Datenbank wird dadurch zu groß',
          antwort: 'Ein Passwort braucht ein paar Byte. Das Problem ist kein technisches, sondern eines der Vertraulichkeit.' }
      ] },

    { typ: 'nachricht', text: 'Nadjas erster Vorschlag war, die Passwörter zu verschlüsseln. Besser als Klartext, aber nicht die saubere Lösung.' },

    { typ: 'frage', text: 'Warum ist Hashen besser als Verschlüsseln?',
      optionen: [
        { text: 'Weil es keinen Schlüssel gibt, der gestohlen werden könnte', richtig: true,
          antwort: 'Genau. Verschlüsselte Passwörter lassen sich entschlüsseln – man braucht nur den Schlüssel, und der liegt meist auf demselben Server. Ein [[Hashwert]] lässt sich gar nicht umkehren, auch nicht von euch selbst.' },
        { text: 'Weil Hashen schneller ist',
          antwort: 'Bei Passwörtern wollen wir ausdrücklich <b>langsame</b> Verfahren, dazu gleich mehr. Der Vorteil liegt woanders.' },
        { text: 'Weil der Hashwert kürzer ist',
          antwort: 'Das ist ein Nebeneffekt ohne Bedeutung für die Sicherheit.' }
      ] },

    { typ: 'nachricht', text: 'Nächster Vorschlag aus dem Team: [[SHA-256]]. Das ist ein gutes, sicheres Verfahren – für Passwörter trotzdem die falsche Wahl.' },

    { typ: 'frage', text: 'Warum ist SHA-256 für Passwörter ungeeignet?',
      optionen: [
        { text: 'Weil es so schnell ist, dass sich Milliarden Passwörter pro Sekunde durchprobieren lassen', richtig: true, norm: 'bcrypt / Argon2',
          antwort: 'Richtig. Für Prüfsummen ist Tempo ein Vorteil, bei Passwörtern wird es zum Angriffswerkzeug. Deshalb nimmt man [[bcrypt]] oder Argon2 – die sind <b>absichtlich langsam</b> und im Aufwand nachregelbar.' },
        { text: 'Weil SHA-256 Kollisionen hat',
          antwort: 'Hat es nach heutigem Stand nicht, es gilt als sicher. Das Problem ist ein ganz anderes: die Geschwindigkeit.' },
        { text: 'Weil es nicht deterministisch ist',
          antwort: 'Doch, das ist es – sonst könnte man damit gar nichts prüfen.' }
      ] },

    { typ: 'nachricht', text: 'Und jetzt der Punkt, den fast alle übersehen. Zwei Mitarbeiter haben zufällig dasselbe Passwort gewählt.' },

    { typ: 'frage', text: 'Was fällt einem Angreifer in der Datenbank sofort auf?',
      optionen: [
        { text: 'Beide haben denselben Hashwert, also dasselbe Passwort', richtig: true, norm: 'Salt',
          antwort: 'Genau. Ein Hash ist deterministisch – gleiches Passwort, gleicher Wert. Dagegen hilft ein [[Salt]]: ein zufälliger Zusatz je Benutzer, der mitgespeichert wird. Dann ergeben identische Passwörter völlig verschiedene Hashwerte.' },
        { text: 'Nichts, Hashwerte sehen immer zufällig aus',
          antwort: 'Sie sehen zufällig aus, sind es aber nicht: Dieselbe Eingabe ergibt immer denselben Wert. Genau deshalb braucht es den [[Salt]].' }
      ] },

    { typ: 'frage', text: 'Wogegen hilft das Salt außerdem?',
      optionen: [
        { text: 'Gegen vorberechnete Tabellen fertiger Hashwerte', richtig: true,
          antwort: 'Richtig, sogenannte Rainbow Tables. Mit einem zufälligen Salt je Benutzer müsste ein Angreifer für jeden Eintrag von vorn anfangen – das macht die ganze Vorarbeit wertlos.' },
        { text: 'Gegen das Abfangen des Passworts auf der Leitung',
          antwort: 'Dafür ist [[TLS]] zuständig. Der Salt wirkt erst in der Datenbank.' }
      ] },

    { typ: 'merk', text: 'Passwörter gehören <b>gehasht</b> gespeichert, nie im Klartext und nicht verschlüsselt. Verfahren: <b>[[bcrypt]] oder Argon2</b> (absichtlich langsam), immer mit <b>[[Salt]]</b> je Benutzer.' },

    { typ: 'nachricht', text: 'Ich nehme das als Empfehlung mit Priorität hoch in den Bericht. Danke dir.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'bau-03',
  kontakt: 'berater',
  titel: 'Wenn die Prüfsumme nicht reicht',
  thema: 'Hashverfahren',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Eine Lücke im Denken möchte ich heute schließen, weil sie in Prüfungen gern abgefragt wird.' },
    { typ: 'nachricht', text: 'Wir verschicken eine Datei und hängen ihren [[Hashwert]] an. Der Empfänger rechnet nach und vergleicht. Wogegen schützt das?' },

    { typ: 'frage', text: 'Wogegen schützt eine mitgeschickte Prüfsumme?',
      optionen: [
        { text: 'Gegen versehentliche Veränderungen bei Übertragung oder Speicherung', richtig: true, norm: 'Prüfsumme',
          antwort: 'Richtig. Übertragungsfehler und defekte Datenträger fallen zuverlässig auf – dank [[Lawineneffekt]] schon bei einem einzigen Bit.' },
        { text: 'Gegen jede Art von Manipulation',
          antwort: 'Das ist genau die Lücke, über die wir gleich sprechen. Gegen <b>gezielte</b> Manipulation schützt eine einfache Prüfsumme nicht.' },
        { text: 'Gegen das Mitlesen der Datei',
          antwort: 'Überhaupt nicht – die Datei ist ja unverschlüsselt. Ein Hash sagt nur etwas über Unversehrtheit, nichts über Vertraulichkeit.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt der Angreifer. Er sitzt auf der Leitung und fängt beides ab: die Datei und den Hashwert.' },

    { typ: 'frage', text: 'Was kann er tun?',
      optionen: [
        { text: 'Die Datei austauschen und einfach den passenden Hashwert neu berechnen', richtig: true,
          antwort: 'Genau das ist die Lücke. Die [[Hashfunktion]] ist öffentlich, jeder kann sie rechnen. Ein Hash ohne Geheimnis beweist nicht, von wem er stammt.' },
        { text: 'Nichts, er kann den Hashwert nicht fälschen',
          antwort: 'Doch – er braucht dafür kein Geheimnis. Die Funktion ist allgemein bekannt, also berechnet er zur neuen Datei schlicht den neuen Wert.' },
        { text: 'Nur die Datei verändern, dann stimmt der Hash nicht mehr',
          antwort: 'So wäre es, wenn er den Hash nicht auch austauschen könnte. Er kann aber beides – deshalb reicht die Prüfsumme hier nicht.' }
      ] },

    { typ: 'nachricht', text: 'Also brauchen wir etwas, das ein Angreifer <b>nicht</b> nachbilden kann. Dafür gibt es zwei Wege.' },

    { typ: 'frage', text: 'Beide Seiten teilen bereits ein gemeinsames Geheimnis. Was bietet sich an?',
      optionen: [
        { text: 'HMAC – der Hash wird zusammen mit einem geheimen Schlüssel gebildet', richtig: true, norm: 'HMAC',
          antwort: 'Richtig. Ohne den Schlüssel kann niemand einen gültigen [[HMAC]] erzeugen. Der Angreifer kann die Datei zwar austauschen, aber keinen passenden Prüfwert mehr dazu liefern.' },
        { text: 'Den Hashwert einfach zweimal berechnen',
          antwort: 'Das ändert nichts: Was ihr zweimal rechnen könnt, rechnet der Angreifer auch zweimal. Es fehlt ein <b>Geheimnis</b>.' },
        { text: 'Einen längeren Hash nehmen, etwa SHA-512',
          antwort: 'Mehr Länge hilft gegen [[Kollision]]en, nicht gegen diesen Angriff. Hier wird ja gar nichts geknackt – der Wert wird einfach neu berechnet.' }
      ] },

    { typ: 'frage', text: 'Und wenn es kein gemeinsames Geheimnis gibt, etwa bei einer öffentlichen Software?',
      optionen: [
        { text: 'Digitale Signatur – der Hash wird mit dem Private Key des Herausgebers signiert', richtig: true, norm: 'Digitale Signatur',
          antwort: 'Richtig. Jeder kann mit dem [[Public Key]] prüfen, aber nur der Herausgeber kann signieren. So sind Betriebssystem-Updates abgesichert.' },
        { text: 'Den Hashwert auf der Webseite veröffentlichen',
          antwort: 'Hilft ein Stück weit, verlagert das Problem aber nur: Wer die Verbindung manipuliert, manipuliert auch die Webseite. Ohne Geheimnis bleibt die Lücke.' }
      ] },

    { typ: 'merk', text: 'Ein einfacher [[Hashwert]] schützt nur vor <b>versehentlichen</b> Änderungen. Gegen gezielte Manipulation braucht es ein Geheimnis: <b>[[HMAC]]</b> (gemeinsamer Schlüssel) oder eine <b>[[Digitale Signatur]]</b> (Schlüsselpaar).' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'bau-04',
  kontakt: 'berater',
  titel: 'Warum nur der Hash signiert wird',
  thema: 'Digitale Signatur',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Heute die [[Digitale Signatur]]. Technisch ist sie der umgekehrte Weg im Public-Key-Verfahren – das ist die Merkhilfe, mit der die Prüfung arbeitet.' },
    { typ: 'nachricht', text: 'Beginnen wir bei der Frage, an der es am häufigsten scheitert.' },

    { typ: 'frage', text: 'Womit erzeugt der Absender die Signatur?',
      optionen: [
        { text: 'Mit seinem eigenen Private Key', richtig: true, norm: 'Digitale Signatur',
          antwort: 'Richtig. Nur er besitzt diesen Schlüssel, also kann nur er die Signatur erzeugen. Darauf beruht die gesamte Beweiskraft.' },
        { text: 'Mit dem Public Key des Empfängers',
          antwort: 'Das wäre der Weg der <b>Verschlüsselung</b>. Vertausche das nicht: Verschlüsseln geht zum Empfänger, Signieren kommt vom Absender.' },
        { text: 'Mit seinem eigenen Public Key',
          antwort: 'Den besitzt jeder. Eine Signatur, die jeder erzeugen kann, beweist nichts.' }
      ] },

    { typ: 'frage', text: 'Und wie prüft der Empfänger sie?',
      optionen: [
        { text: 'Mit dem Public Key des Absenders', richtig: true,
          antwort: 'Genau. Zusätzlich berechnet er den [[Hashwert]] der empfangenen Nachricht selbst und vergleicht ihn mit dem aus der Signatur. Stimmen beide überein, ist die Nachricht unverändert und stammt vom angegebenen Absender.' },
        { text: 'Mit seinem eigenen Private Key',
          antwort: 'Sein eigenes Schlüsselpaar hat mit der Signatur des Absenders nichts zu tun. Geprüft wird immer mit dem öffentlichen Schlüssel dessen, der signiert hat.' }
      ] },

    { typ: 'nachricht', text: 'Nun eine Frage, die über das reine Auswendiglernen hinausgeht.' },
    { typ: 'nachricht', text: 'Signiert wird nicht die Nachricht selbst, sondern nur ihr [[Hashwert]]. Warum macht man diesen Umweg?' },

    { typ: 'frage', text: 'Warum wird nur der Hash signiert?',
      optionen: [
        { text: 'Weil asymmetrische Verfahren langsam sind und der Hash klein und immer gleich lang ist', richtig: true, norm: 'Signaturprüfung',
          antwort: 'Richtig. Eine 200 Megabyte große Datei asymmetrisch zu signieren wäre untragbar langsam. Der Hash ist ein paar Dutzend Byte groß – und dank [[Lawineneffekt]] genauso aussagekräftig wie die ganze Datei.' },
        { text: 'Weil der Hash verschlüsselt ist und die Nachricht dadurch vertraulich wird',
          antwort: 'Eine Signatur macht nichts vertraulich. Die Nachricht bleibt für jeden lesbar – es geht allein um Echtheit und Unversehrtheit.' },
        { text: 'Weil die Nachricht sonst verändert werden könnte',
          antwort: 'Gegen Veränderung schützt gerade der Hash, der mitsigniert wird. Der Grund für den Umweg ist ein praktischer: Tempo und feste Größe.' }
      ] },

    { typ: 'mehrfach', text: 'Was leistet eine digitale Signatur? (mehrere)',
      optionen: [
        { text: 'Authentizität – die Herkunft ist nachweisbar', richtig: true },
        { text: 'Integrität – nachträgliche Änderungen fallen auf', richtig: true },
        { text: 'Nichtabstreitbarkeit – der Absender kann es später nicht leugnen', richtig: true },
        { text: 'Vertraulichkeit – niemand sonst kann die Nachricht lesen' },
        { text: 'Verfügbarkeit – die Nachricht kommt sicher an' }
      ],
      antwortRichtig: 'Genau die drei. Die [[Verbindlichkeit|Nichtabstreitbarkeit]] folgt daraus, dass nur der Absender seinen [[Private Key]] besitzt. <b>Vertraulichkeit leistet sie ausdrücklich nicht</b> – eine signierte Nachricht ist nicht verschlüsselt. Und mit Verfügbarkeit hat sie nichts zu tun.',
      antwortFalsch: 'Denk daran, was beim Signieren passiert: Der Hash wird mit dem privaten Schlüssel signiert, die Nachricht selbst bleibt unverändert und lesbar. Welches Schutzziel kann dadurch also <b>nicht</b> erfüllt sein?' },

    { typ: 'nachricht', text: 'Ein praktischer Fall zum Abschluss. Eine Rechnung kommt signiert, aber unverschlüsselt bei uns an.' },

    { typ: 'frage', text: 'Was wissen wir dann – und was nicht?',
      optionen: [
        { text: 'Sie stammt sicher vom Lieferanten und ist unverändert, aber jeder auf dem Weg konnte sie lesen', richtig: true,
          antwort: 'Genau diese Trennung musst du sauber halten. Wer beides braucht, signiert <b>und</b> verschlüsselt – das ist der Normalfall bei [[S/MIME]] und [[PGP]].' },
        { text: 'Sie ist vertraulich übertragen worden',
          antwort: 'Nein. Die Signatur sichert Herkunft und Unversehrtheit, nicht die Vertraulichkeit. Unverschlüsselt heißt unverschlüsselt.' }
      ] },

    { typ: 'merk', text: '<b>[[Digitale Signatur]]:</b> Hash bilden → mit dem <b>[[Private Key]] des Absenders</b> signieren → Prüfung mit dessen <b>[[Public Key]]</b>. Sichert [[Authentizität]], Integrität und [[Verbindlichkeit|Nichtabstreitbarkeit]] – <b>keine Vertraulichkeit</b>.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'bau-05',
  kontakt: 'berater',
  titel: 'Gehört der Schlüssel wirklich dir?',
  thema: 'Zertifikate',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Zum Abschluss die Frage, die alles bisher Besprochene aushebeln kann, wenn man sie nicht beantwortet.' },
    { typ: 'nachricht', text: 'Du lädst dir meinen [[Public Key]] herunter, um mir etwas Vertrauliches zu schicken. Woher weißt du, dass es wirklich meiner ist?' },

    { typ: 'frage', text: 'Welches Problem bleibt bei asymmetrischer Verschlüsselung offen?',
      optionen: [
        { text: 'Die Zuordnung: Gehört dieser öffentliche Schlüssel wirklich der angegebenen Person?', richtig: true, norm: 'Zertifikat',
          antwort: 'Genau. Schiebt mir jemand seinen eigenen Schlüssel unter meinem Namen unter, verschlüsselst du brav – nur eben an ihn. Technisch alles korrekt, inhaltlich eine Katastrophe.' },
        { text: 'Dass der private Schlüssel übertragen werden muss',
          antwort: 'Der [[Private Key]] wird niemals übertragen. Das offene Problem liegt beim <b>öffentlichen</b> Schlüssel – nämlich bei seiner Echtheit.' },
        { text: 'Dass asymmetrische Verfahren langsam sind',
          antwort: 'Das ist ein Leistungsthema und durch [[Hybride Verschlüsselung|hybride Verfahren]] gelöst. Hier geht es um Vertrauen.' }
      ] },

    { typ: 'frage', text: 'Wie löst man das?',
      optionen: [
        { text: 'Mit einem Zertifikat: Eine vertrauenswürdige Stelle bestätigt die Zuordnung mit ihrer Signatur', richtig: true, norm: 'PKI',
          antwort: 'Richtig. Die [[Zertifizierungsstelle]] prüft die Identität und signiert die Zuordnung von Schlüssel und Inhaber. Das Gesamtsystem aus Stellen, [[Zertifikat]]en und Sperrlisten heißt [[PKI]].' },
        { text: 'Indem man einen besonders langen Schlüssel verwendet',
          antwort: 'Ein langer Schlüssel des Falschen bleibt der Schlüssel des Falschen. Die Länge hat mit der Zuordnung nichts zu tun.' },
        { text: 'Indem man den Schlüssel per Mail bestätigen lässt',
          antwort: 'Wer den Schlüssel unterschieben konnte, kann meist auch die Bestätigungsmail abfangen. Es braucht eine Instanz außerhalb des Kanals.' }
      ] },

    { typ: 'nachricht', text: '[[PGP]] geht hier einen anderen Weg als [[S/MIME]], und das ist einen Vergleich wert.' },

    { typ: 'frage', text: 'Worin unterscheiden sich PGP und S/MIME beim Vertrauen?',
      optionen: [
        { text: 'PGP baut auf gegenseitige Bestätigung im Web of Trust, S/MIME auf Zertifikate einer PKI', richtig: true,
          antwort: 'Genau. Bei [[PGP]] bestätigen sich die Teilnehmer gegenseitig, bei [[S/MIME]] bürgt eine zentrale Stelle. Technisch sind beide hybrid – sie unterscheiden sich darin, <b>woher das Vertrauen kommt</b>.' },
        { text: 'PGP ist symmetrisch, S/MIME asymmetrisch',
          antwort: 'Beide sind [[Hybride Verschlüsselung|hybrid]]. Der Unterschied liegt nicht im Verfahren, sondern im Vertrauensmodell.' }
      ] },

    { typ: 'karte', titel: 'Verschlüsselung und Signatur im Vergleich',
      html: '<table class="t">' +
            '<tr><th></th><th>Verschlüsselung</th><th>Digitale Signatur</th></tr>' +
            '<tr><td>Schlüsselpaar gehört</td><td>dem <b>Empfänger</b></td><td>dem <b>Absender</b></td></tr>' +
            '<tr><td>Sender nutzt</td><td>Public Key des Empfängers</td><td>eigenen Private Key</td></tr>' +
            '<tr><td>Empfänger nutzt</td><td>eigenen Private Key</td><td>Public Key des Absenders</td></tr>' +
            '<tr><td>Schützt</td><td><span class="tag tag--v">Vertraulichkeit</span></td>' +
            '<td><span class="tag tag--i">Integrität</span> <span class="tag tag--ok">Authentizität</span> ' +
            '<span class="tag tag--ok">Nichtabstreitbarkeit</span></td></tr>' +
            '</table>' },

    { typ: 'nachricht', text: 'Diese Tabelle solltest du im Schlaf können. Sie beantwortet die halbe Prüfungsaufgabe.' },

    { typ: 'frage', text: 'Letzte Frage: Das Zertifikat unseres Portals läuft morgen ab. Was passiert?',
      optionen: [
        { text: 'Die Verschlüsselung funktioniert technisch weiter, aber der Browser warnt – die Zuordnung ist nicht mehr bestätigt', richtig: true,
          antwort: 'Richtig, und die Unterscheidung ist wichtig: Gerechnet wird weiterhin korrekt, aber niemand bürgt noch dafür, dass der Schlüssel zu uns gehört. Besucher sehen eine Warnung – und gewöhnen sich im schlimmsten Fall daran, sie wegzuklicken.' },
        { text: 'Die Verbindung ist ab sofort unverschlüsselt',
          antwort: 'Nein, die Verschlüsselung selbst läuft weiter. Abgelaufen ist die <b>Bestätigung der Zuordnung</b>, nicht die Technik.' },
        { text: 'Nichts, Zertifikate laufen nicht ab',
          antwort: 'Sie haben immer eine Gültigkeitsdauer – gerade damit kompromittierte Schlüssel nicht ewig im Umlauf bleiben.' }
      ] },

    { typ: 'merk', text: 'Ein <b>[[Zertifikat]]</b> beantwortet die Frage, die asymmetrische Verfahren offen lassen: <b>Gehört dieser öffentliche Schlüssel wirklich dem angegebenen Inhaber?</b> Bestätigt von einer [[Zertifizierungsstelle]], organisiert in einer [[PKI]].' }
  ]
});
