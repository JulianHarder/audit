/* ===========================================================
   AUDIT – data/dialoge-kryptoalarm.js
   Gruppenchat #krypto-alarm. Mehrere Sprecher, farblich
   getrennt (siehe AUDIT.data.sprecher in data/kontakte.js).
   Faelle, in denen die Kryptographie nicht haelt, was man
   sich von ihr verspricht.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'kry-01',
  kontakt: 'kryptoalarm',
  titel: 'Die Prüfsumme stimmt nicht',
  thema: 'Integrität',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'jonas', text: 'ähm. ich glaub ich hab was kaputt gemacht 😰' },
    { typ: 'nachricht', von: 'jonas', text: 'ich sollte das update für die lagersoftware runterladen. auf der herstellerseite steht ne prüfsumme dabei. meine stimmt nicht damit überein' },
    { typ: 'nachricht', von: 'jonas', text: 'kann ich das trotzdem installieren? wir brauchen das heute noch' },
    { typ: 'nachricht', von: 'nadja', text: 'Stopp. Nichts installieren. Gut, dass du fragst.' },

    { typ: 'frage', von: 'nadja', text: 'Was kann eine abweichende Prüfsumme bedeuten?',
      optionen: [
        { text: 'Die Datei ist unterwegs beschädigt worden – oder jemand hat sie ausgetauscht', richtig: true, norm: 'Prüfsumme',
          antwort: 'Richtig, und beide Fälle verbieten die Installation. Dank [[Lawineneffekt]] reicht ein einziges verändertes Bit, damit der [[Hashwert]] völlig anders aussieht – wir wissen also nur, <b>dass</b> etwas nicht stimmt, nicht was.' },
        { text: 'Nur, dass der Download abgebrochen ist',
          antwort: 'Das ist die harmlose Möglichkeit. Es gibt aber eine zweite, und die ist der Grund, warum wir hier nicht raten dürfen.' },
        { text: 'Dass die Datei verschlüsselt ist',
          antwort: 'Eine [[Prüfsumme]] hat mit Verschlüsselung nichts zu tun. Sie sagt nur etwas über die <b>Unversehrtheit</b>.' }
      ] },

    { typ: 'nachricht', von: 'jonas', text: 'okay. ich lad nochmal neu 🙏' },
    { typ: 'nachricht', von: 'jonas', text: 'zweiter versuch: gleiche abweichung. exakt dieselbe' },
    { typ: 'nachricht', von: 'baumgart', text: 'Dann ist der Übertragungsfehler so gut wie ausgeschlossen. Zwei unabhängige Downloads mit identischem Abweichungsmuster deuten darauf hin, dass wir zweimal dieselbe – falsche – Datei bekommen haben.' },

    { typ: 'frage', von: 'baumgart', text: 'Was ist jetzt der nächste Schritt?',
      optionen: [
        { text: 'Den Hersteller über einen anderen Kanal kontaktieren und die Prüfsumme bestätigen lassen', richtig: true,
          antwort: 'Richtig. Wer die Datei manipuliert, hat möglicherweise auch die auf der Webseite veröffentlichte Prüfsumme angepasst. Wir brauchen die Bestätigung über einen Weg, den der Angreifer nicht kontrolliert – Telefon zum Beispiel.' },
        { text: 'Die Prüfsumme von der Herstellerseite erneut abschreiben, vielleicht war es ein Tippfehler',
          antwort: 'Kann man machen, löst aber den Kern nicht: Wenn die Seite selbst manipuliert ist, passt die dortige Prüfsumme natürlich zur untergeschobenen Datei. Wir müssen den Kanal wechseln.' },
        { text: 'Die Datei im Virenscanner prüfen und dann installieren',
          antwort: 'Der Virenscanner erkennt bekannte Schadsoftware, nicht jede gezielte Manipulation. Ein negativer Befund ersetzt die Integritätsprüfung nicht.' }
      ] },

    { typ: 'nachricht', von: 'nadja', text: 'Hersteller hat zurückgerufen. Ihre Prüfsumme lautet anders als die auf der Seite. Die Seite wurde manipuliert.' },
    { typ: 'nachricht', von: 'jonas', text: 'oh. 😳 also hätte ich mir fast was eingefangen' },
    { typ: 'nachricht', von: 'baumgart', text: 'Du hast genau richtig gehandelt. Und der Fall zeigt die Grenze einer einfachen Prüfsumme sehr deutlich.' },

    { typ: 'frage', von: 'baumgart', text: 'Warum reichte die veröffentlichte Prüfsumme hier nicht aus?',
      optionen: [
        { text: 'Weil jeder sie berechnen kann – wer die Datei austauscht, tauscht auch die Prüfsumme aus', richtig: true,
          antwort: 'Genau. Es fehlt ein Geheimnis. Deshalb versehen seriöse Hersteller ihre Pakete mit einer <b>[[Digitale Signatur|digitalen Signatur]]</b>: Prüfen kann jeder mit dem [[Public Key]], erzeugen nur der Hersteller mit seinem [[Private Key]].' },
        { text: 'Weil MD5 verwendet wurde',
          antwort: 'Das Verfahren war hier nicht das Problem – es hätte auch mit [[SHA-256]] nicht geholfen. Die Lücke liegt darin, dass eine reine Prüfsumme <b>nicht</b> sagt, von wem sie stammt.' },
        { text: 'Weil Jonas sie falsch verglichen hat',
          antwort: 'Hat er nicht, er hat sogar zweimal geprüft und dann gefragt. Die Schwäche steckt im Verfahren, nicht in seiner Arbeit.' }
      ] },

    { typ: 'merk', text: 'Eine veröffentlichte <b>[[Prüfsumme]]</b> schützt vor Übertragungsfehlern, nicht vor gezielter Manipulation – wer die Datei austauscht, tauscht auch den Wert aus. Belastbar wird es erst mit einer <b>[[Digitale Signatur|Signatur]]</b> oder einem <b>[[HMAC]]</b>.' },

    { typ: 'nachricht', von: 'nadja', text: 'Ich nehme in die Richtlinie auf: Bei abweichender Prüfsumme wird nicht installiert, sondern gemeldet. Danke Jonas.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'kry-02',
  kontakt: 'kryptoalarm',
  titel: 'Das Zertifikat ist abgelaufen',
  thema: 'Zertifikate',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'teichmann', text: 'Unser Kundenportal zeigt seit heute früh eine Warnseite. „Die Verbindung ist nicht sicher." Das Telefon steht nicht still.' },
    { typ: 'nachricht', von: 'nadja', text: 'Gesehen. Das Zertifikat ist heute Nacht abgelaufen, die automatische Erneuerung ist durchgefallen. Neues ist beantragt.' },
    { typ: 'nachricht', von: 'teichmann', text: 'Bevor ich den Kunden antworte, möchte ich es richtig verstehen.' },

    { typ: 'frage', von: 'teichmann', text: 'Sind die Daten unserer Kunden jetzt unverschlüsselt unterwegs?',
      optionen: [
        { text: 'Nein – die Verschlüsselung läuft weiter, nur die Bestätigung der Zuordnung fehlt', richtig: true, norm: 'Zertifikat',
          antwort: 'Richtig, und diese Unterscheidung gehört in die Kundenantwort. Technisch wird weiter sauber verschlüsselt. Abgelaufen ist die Bürgschaft der [[Zertifizierungsstelle]] dafür, dass der Schlüssel zu unserer Domain gehört.' },
        { text: 'Ja, ohne gültiges Zertifikat gibt es keine Verschlüsselung',
          antwort: 'Das wird oft angenommen, stimmt aber nicht. Das [[Zertifikat]] belegt die <b>Identität</b>; die Verschlüsselung selbst hängt nicht an seiner Gültigkeitsdauer.' }
      ] },

    { typ: 'nachricht', von: 'baumgart', text: 'Dennoch ist die Lage unangenehm, und zwar aus einem Grund, der nichts mit Technik zu tun hat.' },

    { typ: 'frage', von: 'baumgart', text: 'Worin besteht die eigentliche Gefahr?',
      optionen: [
        { text: 'Kunden gewöhnen sich daran, die Warnung wegzuklicken', richtig: true,
          antwort: 'Genau. Wer gelernt hat, dass die Warnung bei uns „normal" ist, klickt sie auch bei einer echten Fälschung weg. Deshalb dulden wir so einen Zustand nicht tagelang.' },
        { text: 'Der private Schlüssel ist jetzt öffentlich',
          antwort: 'Nein, der [[Private Key]] ist davon völlig unberührt. Es geht allein um die abgelaufene Bestätigung.' },
        { text: 'Angreifer können jetzt mitlesen',
          antwort: 'Nicht allein deswegen. Gefährlich würde es, wenn jemand sich mit einem eigenen Zertifikat als wir ausgibt – und genau das fällt schwerer auf, wenn alle die Warnung ohnehin wegklicken.' }
      ] },

    { typ: 'nachricht', von: 'teichmann', text: 'Verstanden. Und was antworte ich den Kunden, die fragen, ob sie bedenkenlos weitermachen können?' },

    { typ: 'frage', von: 'teichmann', text: 'Welche Antwort ist fachlich sauber?',
      optionen: [
        { text: 'Die Verbindung ist verschlüsselt, aber wir können die Echtheit gerade nicht nachweisen – bitte bis zur Behebung warten', richtig: true,
          antwort: 'Ehrlich und richtig. Sie behaupten weder, alles sei in Ordnung, noch verbreiten Sie unnötige Panik. Und die Empfehlung zu warten ist angemessen, weil wir die Warnung derzeit nicht von einer echten unterscheiden können.' },
        { text: 'Alles in Ordnung, die Warnung einfach wegklicken',
          antwort: 'Genau das wollen wir Kunden nicht beibringen. Damit erziehen wir sie zum Ignorieren künftiger, echter Warnungen.' },
        { text: 'Das Portal ist unsicher, bitte nicht benutzen',
          antwort: 'Fachlich zu scharf – die Verschlüsselung arbeitet ja. Richtig ist die abgestufte Aussage.' }
      ] },

    { typ: 'merk', text: 'Ein <b>[[Zertifikat]]</b> bestätigt die Zuordnung von [[Public Key]] und Inhaber. Läuft es ab, bleibt die Verschlüsselung bestehen – nachweisbar ist nur die <b>Identität</b> nicht mehr. Die eigentliche Gefahr ist die Gewöhnung an weggeklickte Warnungen.' },

    { typ: 'nachricht', von: 'nadja', text: 'Neues Zertifikat ist eingespielt, Warnung ist weg. Ich hänge eine Überwachung an die Restlaufzeit, damit uns das nicht wieder passiert.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'kry-03',
  kontakt: 'kryptoalarm',
  titel: 'Die Passwortdatenbank ist weg',
  thema: 'Hashverfahren',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', von: 'nadja', text: 'Ernster Fall. Beim Dienstleister, der unser altes Schulungsportal betreibt, wurde die Benutzerdatenbank abgegriffen. 180 unserer Leute haben dort ein Konto.' },
    { typ: 'nachricht', von: 'baumgart', text: 'Dann ist die erste Frage, in welcher Form die Passwörter dort lagen. Davon hängt alles Weitere ab.' },
    { typ: 'nachricht', von: 'nadja', text: 'Auskunft des Dienstleisters: „Die Passwörter waren selbstverständlich verschlüsselt."' },

    { typ: 'frage', von: 'baumgart', text: 'Warum ist diese Auskunft schon sprachlich alarmierend?',
      optionen: [
        { text: 'Passwörter sollten gehasht sein, nicht verschlüsselt – verschlüsselt heißt, es gibt einen Schlüssel zum Zurückholen', richtig: true, norm: 'Hashwert',
          antwort: 'Genau mein Gedanke. Wer „verschlüsselt" sagt, meint oft genug etwas Umkehrbares – und der Schlüssel liegt erfahrungsgemäß auf demselben Server. Richtig wäre: gehasht mit [[bcrypt]] oder Argon2 und [[Salt]].' },
        { text: 'Gar nicht, verschlüsselt ist besser als gehasht',
          antwort: 'Umgekehrt. Beim Hashen gibt es keinen Schlüssel, der gestohlen werden kann – nicht einmal der Betreiber kann die Passwörter zurückholen. Das ist der Sinn der Sache.' },
        { text: 'Weil Passwörter gar nicht gespeichert werden dürfen',
          antwort: 'Gespeichert werden muss etwas, sonst könnte niemand sich anmelden. Entscheidend ist die <b>Form</b>.' }
      ] },

    { typ: 'nachricht', von: 'nadja', text: 'Nachgehakt. Es waren [[MD5]]-Hashes. Ohne [[Salt]].' },
    { typ: 'nachricht', von: 'jonas', text: 'immerhin gehasht? 🤷' },
    { typ: 'nachricht', von: 'baumgart', text: 'Leider ist das die ungünstigste Kombination, die man wählen kann. Gehen wir die Gründe einzeln durch.' },

    { typ: 'mehrfach', von: 'baumgart', text: 'Was macht MD5 ohne Salt so gefährlich? (mehrere)',
      optionen: [
        { text: 'MD5 ist extrem schnell – es lassen sich Milliarden Kandidaten pro Sekunde durchprobieren', richtig: true },
        { text: 'Ohne Salt ergeben gleiche Passwörter gleiche Hashwerte', richtig: true },
        { text: 'Ohne Salt funktionieren vorberechnete Tabellen', richtig: true },
        { text: 'MD5-Hashes lassen sich mit dem passenden Schlüssel entschlüsseln' },
        { text: 'MD5 speichert die Passwortlänge mit ab' }
      ],
      antwortRichtig: 'Vollständig richtig. Die ersten drei zusammen bedeuten: Alle schwachen Passwörter sind binnen Stunden bekannt. Die beiden letzten sind falsch – [[Hashwert|Hashing]] ist nicht umkehrbar, und die Ausgabe hat immer dieselbe Länge, unabhängig von der Eingabe.',
      antwortFalsch: 'Denken Sie an die drei Schwächen: <b>Tempo</b>, <b>gleiche Eingabe gleicher Wert</b> und <b>vorberechnete Tabellen</b>. Die Aussagen über Entschlüsselung und Passwortlänge widersprechen dagegen den Grundeigenschaften einer [[Hashfunktion]].' },

    { typ: 'nachricht', von: 'jonas', text: 'moment. wenn gleiche passwörter gleiche hashes haben dann sieht der angreifer ja direkt welche am häufigsten vorkommen' },
    { typ: 'nachricht', von: 'baumgart', text: 'Richtig erkannt. Der häufigste Wert ist mit großer Wahrscheinlichkeit ein sehr schwaches Passwort – und mit ihm fallen gleich dutzende Konten auf einmal.' },

    { typ: 'frage', von: 'nadja', text: 'Was ist für uns jetzt die dringendste Maßnahme?',
      optionen: [
        { text: 'Alle Betroffenen auffordern, dieses Passwort überall dort zu ändern, wo sie es ebenfalls verwenden', richtig: true,
          antwort: 'Genau. Das Schulungsportal selbst ist fast nebensächlich – gefährlich wird die Mehrfachverwendung. Wer dasselbe Passwort für sein Mailkonto nutzt, ist jetzt dort angreifbar. Formulieren wir es ohne Vorwürfe, wir brauchen ehrliche Rückmeldungen.' },
        { text: 'Das Schulungsportal abschalten',
          antwort: 'Sinnvoll als Begleitmaßnahme, aber es hilft den Betroffenen nicht: Die Hashes sind bereits abgeflossen. Die Gefahr liegt außerhalb dieses Portals.' },
        { text: 'Abwarten, ob die Passwörter tatsächlich geknackt werden',
          antwort: 'Dafür ist keine Zeit. Mit [[MD5]] ohne [[Salt]] ist das eine Frage von Stunden, nicht von Wochen.' }
      ] },

    { typ: 'frage', von: 'teichmann', text: 'Und datenschutzrechtlich – ist das ein meldepflichtiger Vorfall?',
      optionen: [
        { text: 'Ja, es ist eine Datenpanne beim Auftragsverarbeiter – er muss uns informieren, gemeldet wird von uns', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Richtig. Der Dienstleister verarbeitet in unserem Auftrag, verantwortlich bleiben wir. Er muss uns unverzüglich informieren, die Meldung an die Aufsichtsbehörde liegt bei uns. Und weil die Hashes nicht wirksam geschützt waren, lässt sich hier auch nicht mit Verschlüsselung argumentieren.' },
        { text: 'Nein, die Passwörter waren ja gehasht',
          antwort: 'Gehasht schon, aber mit einem gebrochenen Verfahren ohne [[Salt]]. Von „für Unbefugte unzugänglich" im Sinne von [[Art. 34 DSGVO]] kann keine Rede sein.' },
        { text: 'Nein, zuständig ist allein der Dienstleister',
          antwort: 'Die Verantwortung lässt sich nicht auslagern. Wir bleiben gegenüber den Betroffenen und der Aufsichtsbehörde in der Pflicht.' }
      ] },

    { typ: 'merk', text: 'Passwörter gehören <b>gehasht</b> gespeichert – mit <b>[[bcrypt]] oder Argon2</b> und <b>[[Salt]]</b> je Benutzer. [[MD5]] ohne Salt ist die ungünstigste Kombination: schnell, kollisionsanfällig und anfällig für vorberechnete Tabellen. Die größte Folge ist die <b>Mehrfachverwendung</b> derselben Passwörter.' },

    { typ: 'nachricht', von: 'teichmann', text: 'Ich setze den Dienstleistervertrag auf die Tagesordnung. So etwas gehört in die Auftragsverarbeitung geschrieben, nicht ins Vertrauen gestellt.' }
  ]
});
