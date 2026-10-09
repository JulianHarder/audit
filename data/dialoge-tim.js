/* ===========================================================
   AUDIT – data/dialoge-tim.js
   Tim, Azubi im 2. Lehrjahr:
   Zutritt, Zugang, Zugriff, TOMs, Alltagsfehler.
   Hier erklärst du – wer erklären kann, hat es verstanden.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'tim-01',
  kontakt: 'tim',
  titel: 'Zutritt, Zugang, Zugriff',
  thema: 'Kontrollarten (TOMs)',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Du, ich schreib morgen die Klausur über den Datenschutz-Kram 😩' },
    { typ: 'nachricht', text: 'Zutritt, Zugang, Zugriff – das klingt für mich dreimal dasselbe. Kannst du mir das erklären?' },
    { typ: 'nachricht', text: 'Fang mal mit Zutritt an: Was wird da geschützt?' },

    { typ: 'frage', text: 'Was schützt die Zutrittskontrolle?',
      optionen: [
        { text: 'Den Raum', richtig: true, norm: 'Kontrollart der TOMs',
          antwort: 'Ah, okay! Also alles Physische – wer überhaupt ins Gebäude oder in den Serverraum kommt.' },
        { text: 'Das System',
          antwort: 'Hm, das wäre doch der <b>Zugang</b>, oder? Beim Zutritt geht es doch darum, ob ich überhaupt in den Raum reinkomme.' },
        { text: 'Die Daten',
          antwort: 'Das ist der <b>Zugriff</b>. Zutritt ist was Physisches – Tür, Raum, Gebäude.' }
      ] },

    { typ: 'nachricht', text: 'Okay, dann teste mich mal. Ich hab hier eine Liste aus dem Unterricht.' },

    { typ: 'mehrfach', text: 'Welche Maßnahmen gehören zur Zutrittskontrolle? (mehrere)',
      optionen: [
        { text: 'Chipkarte für den Serverraum', richtig: true },
        { text: 'Passwort am Rechner' },
        { text: 'Pförtner und Besucherbuch', richtig: true },
        { text: 'Berechtigungskonzept für die Personalakte' },
        { text: 'Videoüberwachung am Eingang', richtig: true }
      ],
      antwortRichtig: 'Alles klar: Chipkarte, Pförtner und Kamera sind Zutritt – da geht es um den <b>Raum</b>. Das Passwort ist [[Zugangskontrolle|Zugang]] (System), das Berechtigungskonzept ist [[Zugriffskontrolle|Zugriff]] (Daten).',
      antwortFalsch: 'Fast. Denk dran: Zutritt ist alles Physische – Türen, Räume, Gebäude. Passwort und Berechtigungen gehören nicht dazu.' },

    { typ: 'nachricht', text: 'Und wie merk ich mir das in der Klausur?' },

    { typ: 'merk', text: '<b>Zutritt = Raum · Zugang = System · Zugriff = Daten</b>' },

    { typ: 'nachricht', text: 'Das ist gut. Gibt es noch mehr davon? Unser Lehrer hat was von acht Stück gesagt.' },

    { typ: 'karte', titel: 'Alle acht Kontrollarten der TOMs', quelle: 'kontrollarten' },

    { typ: 'frage', text: 'Tim fragt: „Woher kommt diese Einteilung eigentlich?"',
      optionen: [
        { text: 'Direkt aus der DSGVO',
          antwort: 'Hab ich auch gedacht. Aber in der DSGVO steht das so gar nicht – die nennt in [[Art. 32 DSGVO|Art. 32]] nur allgemeine Ziele.' },
        { text: 'Aus dem alten BDSG', richtig: true, norm: 'Anlage zu § 9 BDSG a. F.',
          antwort: 'Stimmt, das hatte unser Lehrer auch gesagt. Die acht Kontrollarten standen in der Anlage zu § 9 des alten BDSG. Die DSGVO formuliert es heute offener – Pseudonymisierung, Verschlüsselung, Vertraulichkeit, Integrität, Verfügbarkeit, Belastbarkeit. Für die Prüfung lernen wir trotzdem die acht.' }
      ] },

    { typ: 'nachricht', text: 'Mega, danke! Ich geh die nochmal durch. 🙏' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tim-02',
  kontakt: 'tim',
  titel: 'Virus, Trojaner, Wurm – nochmal langsam',
  thema: 'Schadsoftware',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Nächste Baustelle für die Klausur: Virus, Trojaner, Wurm. 😵‍💫' },
    { typ: 'nachricht', text: 'In der Aufgabe steht immer „erläutern Sie, wodurch sie sich in der <b>Verbreitung</b> unterscheiden". Da hänge ich.' },

    { typ: 'frage', text: 'Wie verbreitet sich ein Virus?',
      optionen: [
        { text: 'Nur wenn der infizierte Wirt ausgeführt oder weitergegeben wird', richtig: true,
          antwort: 'Genau so musst du es hinschreiben. Ein [[Virus]] hängt sich an eine <b>Wirtsdatei</b> und wird erst aktiv, wenn jemand diese Datei ausführt oder weitergibt. Ohne Wirt und ohne Mensch passiert nichts.' },
        { text: 'Selbstständig über das Netzwerk',
          antwort: 'Das ist der [[Wurm]]. Der Virus braucht eine Wirtsdatei und jemanden, der sie startet.' }
      ] },

    { typ: 'frage', text: 'Und ein Trojaner?',
      optionen: [
        { text: 'Er verbreitet sich gar nicht selbst', richtig: true,
          antwort: 'Richtig. Der [[Trojaner]] ist ein <b>scheinbar nützliches</b> Programm, das im Hintergrund versteckt Schadfunktionen ausführt – zum Beispiel eine [[Backdoor|Hintertür]] öffnet oder Daten ausspäht. Er vermehrt sich nicht: Der Nutzer installiert ihn selbst, weil er ihn für nützlich hält.' },
        { text: 'Er kopiert sich auf alle erreichbaren Rechner',
          antwort: 'Nein, das ist wieder der Wurm. Der Trojaner lebt davon, dass du ihn <b>freiwillig</b> installierst.' }
      ] },

    { typ: 'frage', text: 'Und der Wurm?',
      optionen: [
        { text: 'Vollkommen selbstständig über Netzwerke, ohne Nutzeraktion und ohne Wirtsdatei', richtig: true,
          antwort: 'Perfekt formuliert. Er nutzt Sicherheitslücken oder verschickt sich per E-Mail – ganz ohne dass jemand etwas anklickt. Deshalb geht es bei ihm so schnell.' },
        { text: 'Er versteckt sich im Betriebssystem',
          antwort: 'Das ist das [[Rootkit]] – das tarnt sich und andere Schadsoftware. Beim Wurm geht es um die <b>selbstständige Verbreitung</b>.' }
      ] },

    { typ: 'karte', titel: 'Die Verbreitung im Vergleich', quelle: 'html',
      html: '<table class="t"><tr><th>Art</th><th>Braucht Wirtsdatei?</th><th>Braucht den Menschen?</th><th>Verbreitet sich selbst?</th></tr>' +
            '<tr><td><b>🦠 Virus</b></td><td>ja</td><td>ja (öffnen/weitergeben)</td><td>nur über den Wirt</td></tr>' +
            '<tr><td><b>🐴 Trojaner</b></td><td>nein</td><td>ja (installieren)</td><td>nein</td></tr>' +
            '<tr><td><b>🪱 Wurm</b></td><td>nein</td><td>nein</td><td>ja, selbstständig</td></tr></table>' },

    { typ: 'nachricht', text: 'Boah, so als Tabelle ist das endlich klar. Gibt es noch andere Arten, die drankommen könnten?' },

    { typ: 'karte', titel: 'Weitere Arten, die man kennen sollte', quelle: 'schadsoftware',
      keys: ['ransomware', 'rootkit', 'spyware', 'keylogger', 'bot', 'hoax'] },

    { typ: 'frage', text: 'Eine davon ist gar keine Schadsoftware. Welche?',
      optionen: [
        { text: 'Der Hoax', richtig: true,
          antwort: 'Stimmt! Ein [[Hoax]] ist eine <b>Falschmeldung</b>, meist als Kettenmail – da ist überhaupt kein Schadcode drin. Der Schaden entsteht erst durch die Reaktion der Leute: Sie leiten die Mail weiter oder löschen tatsächlich eine Systemdatei. Dagegen hilft keine Technik, nur Aufklärung.' },
        { text: 'Das Rootkit',
          antwort: 'Nein, ein [[Rootkit]] ist sehr wohl Schadsoftware – und zwar besonders unangenehme, weil es sich selbst versteckt.' }
      ] },

    { typ: 'merk', text: '<b>Virus</b> = Wirtsdatei + Mensch · <b>Trojaner</b> = getarnt, wird selbst installiert, vermehrt sich nicht · <b>Wurm</b> = ganz allein über das Netz. <b>Hoax</b> = gar keine Schadsoftware, nur eine Falschmeldung.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tim-03',
  kontakt: 'tim',
  titel: 'Zugang oder Zugriff – das Büro-Beispiel',
  thema: 'Kontrollarten (TOMs)',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Ich hab eine alte Klausuraufgabe gefunden: „Erläutern Sie den Unterschied zwischen Zugangs- und Zugriffskontrolle anhand eines Beispiels aus dem Büroalltag."' },
    { typ: 'nachricht', text: 'Ich weiß jetzt: Zugang = System, Zugriff = Daten. Aber wie schreibe ich daraus ein Beispiel?' },

    { typ: 'frage', text: 'Womit fängst du an?',
      optionen: [
        { text: 'Mit der Anmeldung am PC', richtig: true,
          antwort: 'Genau richtig. Die <b>[[Zugangskontrolle]]</b> regelt, ob jemand <b>überhaupt ins System</b> kommt: Anmeldung am PC mit Benutzername und Passwort, Chipkarte, Fingerabdruck oder [[Zwei-Faktor-Authentifizierung|2FA]].' },
        { text: 'Mit der Tür zum Serverraum',
          antwort: 'Das wäre die [[Zutrittskontrolle]] – die ist hier nicht gefragt. Die Aufgabe will nur Zugang und Zugriff.' }
      ] },

    { typ: 'frage', text: 'Und wie geht es weiter – was regelt die Zugriffskontrolle?',
      optionen: [
        { text: 'Was er darf, nachdem er drin ist', richtig: true,
          antwort: 'Perfekt. Das ist der ganze Trick: Die <b>[[Zugriffskontrolle]]</b> regelt, auf welche Daten er zugreifen darf und was er damit tun darf – lesen, ändern, löschen. Umgesetzt über ein Berechtigungs- und Rollenkonzept, Zugriffsrechte auf Ordner und Dateien sowie Protokollierung.' },
        { text: 'Wie lange er angemeldet bleiben darf',
          antwort: 'Die Sitzungsdauer ist ein Detail der Zugangskontrolle. Beim Zugriff geht es um die <b>Daten</b>.' }
      ] },

    { typ: 'nachricht', text: 'Kannst du mir das als fertigen Beispielsatz geben? Sowas brauche ich in der Klausur.' },

    { typ: 'karte', titel: 'So kannst du es hinschreiben', quelle: 'html',
      html: '<p style="color:var(--text-dim)">„Die <b>Zugangskontrolle</b> regelt, ob jemand ins System kommt: Ein Mitarbeiter meldet sich am PC mit Benutzername und Passwort an. ' +
            'Die <b>Zugriffskontrolle</b> regelt, was er danach darf: Ein Mitarbeiter aus dem Vertrieb kann auf dem Netzlaufwerk nur den Vertriebsordner öffnen, ' +
            'nicht den Ordner der Personalabteilung."</p>' },

    { typ: 'mehrfach', text: 'Ordne zu – welche Maßnahmen gehören zur <b>Zugangs</b>kontrolle? (mehrere)',
      optionen: [
        { text: 'Benutzername und Passwort', richtig: true },
        { text: 'Zwei-Faktor-Authentifizierung', richtig: true },
        { text: 'Berechtigungskonzept mit Rollen' },
        { text: 'Automatische Bildschirmsperre', richtig: true },
        { text: 'Protokollierung der geöffneten Dateien' }
      ],
      antwortRichtig: 'Richtig. Passwort, 2FA und Bildschirmsperre entscheiden darüber, ob jemand <b>ins System</b> kommt. Berechtigungskonzept und Protokollierung gehören zur <b>Zugriffs</b>kontrolle – da geht es um die Daten.',
      antwortFalsch: 'Fast. Frag dich bei jedem Punkt: Geht es darum, ob jemand <b>hineinkommt</b> (Zugang) oder darum, was er <b>mit den Daten</b> darf (Zugriff)?' },

    { typ: 'merk', text: '<b>Zugang</b> = Tür zum System (Passwort, 2FA, Bildschirmsperre) · <b>Zugriff</b> = was du mit den Daten darfst (Rollen, Rechte, Protokoll). Beispielsatz: anmelden am PC vs. nur den eigenen Abteilungsordner öffnen.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tim-04',
  kontakt: 'tim',
  titel: 'Vier Kunden, vier Rechte',
  thema: 'Betroffenenrechte',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Letzter Block für heute: die Rechte der Kunden. In der Klausur kommen die immer als kleine Fälle.' },
    { typ: 'nachricht', text: 'Ich lese dir vier vor, du sagst mir, welches Recht gemeint ist. Okay?' },
    { typ: 'nachricht', text: '<b>Fall 1:</b> Ein Kunde schreibt: „Ich möchte wissen, ob Sie Daten über mich verarbeiten und was damit geschieht."' },

    { typ: 'frage', text: 'Welches Recht macht er geltend?',
      optionen: [
        { text: 'Auskunftsrecht', richtig: true, norm: 'Art. 15 DSGVO',
          antwort: 'Richtig. Er kann unter anderem verlangen: eine <b>Kopie</b> der zu ihm gespeicherten Daten, die <b>Verarbeitungszwecke</b>, die <b>Empfänger</b>, die <b>Speicherdauer</b>, die <b>Herkunft</b> der Daten und den Hinweis auf seine weiteren Rechte samt Beschwerderecht bei der Aufsichtsbehörde.' },
        { text: 'Recht auf Datenübertragbarkeit',
          antwort: 'Das wäre es, wenn er die Daten in einem maschinenlesbaren Format zum <b>Mitnehmen</b> zu einem anderen Anbieter verlangt. Hier will er erst einmal nur <b>wissen</b>, was gespeichert ist.' }
      ] },

    { typ: 'nachricht', text: '<b>Fall 2:</b> Eine Mitarbeiterin merkt, dass ihre Privatadresse in der Personalverwaltung falsch ist, und verlangt, dass das in Ordnung gebracht wird.' },

    { typ: 'frage', text: 'Welches Recht ist das?',
      optionen: [
        { text: 'Recht auf Berichtigung', richtig: true, norm: 'Art. 16 DSGVO',
          antwort: 'Genau – unrichtige Daten sind <b>unverzüglich</b> zu korrigieren. Und überleg mal, was falsche Daten anrichten können: Gehaltsabrechnung, Steuerbescheinigung oder Vertragsunterlagen gehen an die falsche Adresse und landen bei Fremden – das ist dann gleich auch eine Verletzung der <b>Vertraulichkeit</b>. Dazu kommen verspätete Unterlagen, Haftungsrisiko und Nacharbeit.' },
        { text: 'Recht auf Einschränkung',
          antwort: 'Das wäre es, wenn sie sagt: „Ich bestreite die Richtigkeit, verwenden Sie die Daten erst mal <b>nicht weiter</b>." Hier will sie aber, dass korrigiert wird.' }
      ] },

    { typ: 'nachricht', text: '<b>Fall 3:</b> Ein ehemaliger Kunde verlangt vom Shop, alle Daten über ihn unverzüglich zu entfernen. Gespeichert sind Kundenkonto, Bestellhistorie und Rechnungen.' },

    { typ: 'frage', text: 'Muss der Shop der Forderung vollständig nachkommen?',
      optionen: [
        { text: 'Ja, es ist sein Recht',
          antwort: 'Fast – das Recht auf Löschung gibt es, aber es gilt nicht unbegrenzt. Denk an die <b>Rechnungen</b>.' },
        { text: 'Nein, Rechnungen unterliegen Aufbewahrungspflichten', richtig: true, norm: 'Art. 17 DSGVO',
          antwort: 'Richtig. Rechnungen und Buchungsbelege müssen aus handels- und steuerrechtlichen Gründen mehrere Jahre – bis zu <b>zehn</b> – aufbewahrt werden. Diese Daten werden nur <b>gesperrt</b>, also in der Verarbeitung eingeschränkt, und nach Fristablauf gelöscht. Kundenkonto und nicht mehr erforderliche Daten müssen dagegen unverzüglich weg.' }
      ] },

    { typ: 'nachricht', text: '<b>Fall 4:</b> Ein Shop schickt Werbung per Post und stützt sich auf sein berechtigtes Interesse. Der Kunde schreibt, seine Daten sollen nicht mehr für Werbung verwendet werden.' },

    { typ: 'frage', text: 'Welches Recht übt er aus – und was folgt daraus?',
      optionen: [
        { text: 'Widerspruchsrecht, die Werbung muss sofort aufhören', richtig: true, norm: 'Art. 21 DSGVO',
          antwort: 'Genau. Bei <b>Direktwerbung</b> gilt das Widerspruchsrecht uneingeschränkt: jederzeit, ohne Begründung, <b>ohne Interessenabwägung</b>. Das Unternehmen muss die Verarbeitung zu Werbezwecken sofort und endgültig einstellen und den Kunden in eine <b>Werbesperre</b> aufnehmen – sonst steht er beim nächsten Mal wieder im Verteiler.' },
        { text: 'Recht auf Löschung, alle Daten müssen weg',
          antwort: 'Nicht ganz. Er widerspricht der <b>Nutzung für Werbung</b> – das heißt nicht, dass alle Daten gelöscht werden müssen. Im Gegenteil: Für die Werbesperre muss man ihn sogar weiter speichern.' }
      ] },

    { typ: 'karte', titel: 'Die Rechte im Überblick', quelle: 'betroffenenrechte',
      keys: ['a15', 'a16', 'a17', 'a18', 'a20', 'a21'] },

    { typ: 'frage', text: 'Letzte Frage: Wie schnell muss die Firma antworten?',
      optionen: [
        { text: 'Innerhalb eines Monats', richtig: true, norm: 'Art. 12 Abs. 3 DSGVO',
          antwort: 'Richtig – unverzüglich, spätestens innerhalb eines Monats, verlängerbar um zwei weitere Monate bei komplizierten Fällen, und das grundsätzlich <b>kostenlos</b>. Das gilt für alle Betroffenenrechte.' },
        { text: 'Innerhalb von 72 Stunden',
          antwort: 'Das ist die Frist für die Meldung einer <b>[[Datenpanne]]</b> an die Aufsichtsbehörde. Die wird gern verwechselt – aber bei Betroffenenanfragen gilt ein Monat.' }
      ] },

    { typ: 'merk', text: '<b>Auskunft</b> (was habt ihr?) · <b>Berichtigung</b> (das stimmt nicht) · <b>Löschung</b> (weg damit – außer Aufbewahrungspflicht) · <b>Einschränkung</b> (erst mal sperren) · <b>Übertragbarkeit</b> (gebt es mir mit) · <b>Widerspruch</b> (keine Werbung mehr). Frist: <b>1 Monat</b> – nicht 72 Stunden!' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tim-05',
  kontakt: 'tim',
  titel: 'Phishing im Posteingang',
  thema: 'Angriffe über Menschen',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Du, ich hab hier eine Mail und bin unsicher. 😬' },
    { typ: 'nachricht', text: 'Absender ist angeblich unsere IT. Betreff: „Ihr Postfach läuft über – jetzt verifizieren". Darin ein Link und die Aufforderung, mich mit Benutzername und Passwort anzumelden. Und zwar <b>innerhalb von 24 Stunden</b>, sonst wird das Konto gesperrt.' },

    { typ: 'mehrfach', text: 'Woran erkennst du, dass da etwas nicht stimmt? (mehrere)',
      optionen: [
        { text: 'Zeitdruck und Drohung mit Sperrung', richtig: true },
        { text: 'Aufforderung, Zugangsdaten einzugeben', richtig: true },
        { text: 'Die Mail ist auf Deutsch geschrieben' },
        { text: 'Link, dessen Ziel nicht zur Firma passt', richtig: true },
        { text: 'Unpersönliche oder seltsame Anrede', richtig: true }
      ],
      antwortRichtig: 'Alle vier Warnzeichen. Typisch für [[Phishing]]: künstlicher <b>Zeitdruck</b>, Drohung, Aufforderung zur <b>Eingabe von Zugangsdaten</b>, verdächtiger Link und oft eine seltsame Anrede. Dass eine Mail fehlerfrei auf Deutsch ist, sagt übrigens gar nichts mehr – die Zeiten der holprigen Übersetzungen sind vorbei.',
      antwortFalsch: 'Fast. Eine saubere deutsche Mail ist heute kein Echtheitsbeweis mehr. Achte auf <b>Zeitdruck</b>, die Frage nach <b>Zugangsdaten</b>, den <b>Link</b> und die Anrede.' },

    { typ: 'frage', text: 'Was machst du jetzt?',
      optionen: [
        { text: 'Den Link anklicken, aber nichts eingeben',
          antwort: 'Lieber nicht. Schon der Aufruf kann dich auf eine präparierte Seite führen. Und wenn du erst mal auf der täuschend echten Anmeldeseite stehst, tippt es sich schneller, als man denkt.' },
        { text: 'Nicht anklicken und die Mail der IT melden', richtig: true,
          antwort: 'Genau richtig. <b>Nicht klicken, nicht antworten, nicht weiterleiten an Kollegen</b> – sondern über den festen Meldeweg an die IT. Wichtig: Melden darf nie peinlich sein. Wo Leute Angst vor Ärger haben, meldet niemand mehr etwas, und genau dann wird es gefährlich.' },
        { text: 'Die Mail einfach löschen',
          antwort: 'Besser als klicken, aber nicht gut genug. Wenn du sie meldest, kann die IT prüfen, ob auch Kollegen die Mail bekommen haben und den Absender sperren.' }
      ] },

    { typ: 'nachricht', text: 'Und mal angenommen, ich hätte mein Passwort schon eingegeben. Was dann?' },

    { typ: 'frage', text: 'Was hilft, wenn die Zugangsdaten schon weg sind?',
      optionen: [
        { text: 'Zwei-Faktor-Authentifizierung', richtig: true,
          antwort: 'Richtig. Mit [[Zwei-Faktor-Authentifizierung|2FA]] reicht das Passwort allein nicht – der Angreifer braucht zusätzlich den zweiten Faktor. Trotzdem: sofort Passwort ändern und melden, überall dort, wo du dasselbe Passwort verwendet hast.' },
        { text: 'Ein Virenscanner',
          antwort: 'Der hilft gegen Schadsoftware, nicht gegen ein freiwillig eingetipptes Passwort. Beim Phishing wird keine Technik überlistet, sondern der Mensch.' }
      ] },

    { typ: 'nachricht', text: 'Und warum fallen da überhaupt Leute drauf rein? Ich fühl mich jetzt schon dumm.' },

    { typ: 'frage', text: 'Was sagst du ihm?',
      optionen: [
        { text: 'Das ist Social Engineering – es zielt auf normale menschliche Reaktionen', richtig: true,
          antwort: 'Richtig, und sag ihm das genau so. [[Social Engineering]] nutzt Hilfsbereitschaft, Respekt vor Autorität und Zeitdruck aus – das sind keine Dummheiten, sondern normale Reaktionen. Deshalb ist [[Mitarbeiterschulung|Schulung]] die einzige wirksame Maßnahme: keine Firewall der Welt hält eine Mail auf, die der Mensch für echt hält.' },
        { text: 'Weil sie nicht aufpassen',
          antwort: 'Das wäre unfair und auch falsch. Gute Angriffe funktionieren bei aufmerksamen Leuten genauso – sie nutzen ganz normale menschliche Reaktionen aus.' }
      ] },

    { typ: 'merk', text: '<b>Phishing</b> erkennt man an Zeitdruck, Drohung, Frage nach Zugangsdaten und komischem Link. Richtig: nicht klicken, <b>melden</b>. Dagegen hilft keine Technik, sondern <b>Schulung</b> – plus 2FA als Netz, wenn das Passwort doch weg ist.' }
  ]
});
