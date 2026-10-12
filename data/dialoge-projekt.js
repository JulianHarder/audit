/* ===========================================================
   AUDIT – data/dialoge-projekt.js
   Frau Teichmann, Projektleitung. Siezt dich durchgehend,
   fragt nach Entscheidungen statt nach Theorie. Bei ihr geht
   es um die Auswahl der Verfahren und die Einordnung.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'tei-01',
  kontakt: 'projekt',
  titel: 'Vier Aufgaben, vier Verfahren',
  thema: 'Verfahren auswählen',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Guten Tag. Ich stelle morgen das Umstellungskonzept vor und möchte vorher vier Punkte mit Ihnen abklopfen.' },
    { typ: 'nachricht', text: 'Mir geht es nicht um Theorie, sondern um je eine Entscheidung mit Begründung. Einverstanden?' },
    { typ: 'nachricht', text: 'Erstens: Die Sicherungsbänder im Archiv sollen verschlüsselt werden.' },

    { typ: 'frage', text: 'Welches Verfahren für die Datensicherung?',
      optionen: [
        { text: 'Symmetrisch, etwa AES-256', richtig: true, norm: 'Symmetrische Verschlüsselung',
          antwort: 'So sehe ich das auch. Große Datenmengen, kein Empfänger – also kein Austauschproblem, dafür zählt Geschwindigkeit. Wichtig ist nur, dass der Schlüssel nicht neben dem Band liegt.' },
        { text: 'Asymmetrisch mit RSA',
          antwort: 'Für Terabytes viel zu langsam, und der Vorteil asymmetrischer Verfahren bringt hier nichts: Es gibt keine Gegenstelle, mit der etwas ausgetauscht werden müsste.' },
        { text: 'Gar nicht, die Bänder liegen ja im verschlossenen Archiv',
          antwort: 'Der Schrank schützt gegen Zutritt, nicht gegen den Verlust eines Bandes auf dem Transport zum Ausweichstandort. Genau dafür ist Verschlüsselung gedacht.' }
      ] },

    { typ: 'nachricht', text: 'Zweitens: Unsere Lieferantenportal-Seite. Kunden sollen Formulare ausfüllen können.' },

    { typ: 'frage', text: 'Was setzen wir dort ein?',
      optionen: [
        { text: 'TLS, also HTTPS', richtig: true, norm: 'Hybride Verschlüsselung',
          antwort: 'Richtig. [[TLS]] ist ein hybrides Verfahren und für genau diesen Fall gebaut: wechselnde, vorher unbekannte Gegenstellen. Bitte halten Sie im Konzept fest, dass das die Leitung schützt und nicht den Server.' },
        { text: 'PGP',
          antwort: '[[PGP]] eignet sich für Mail und Dateien zwischen Partnern, die einmal Schlüssel ausgetauscht haben. Für zufällige Besucher einer Webseite ist es untauglich.' },
        { text: 'Ein gemeinsames Passwort für alle Kunden',
          antwort: 'Ein Geheimnis, das hunderte Menschen kennen, ist keines mehr. Und beim ersten Ausscheiden eines Kunden müssten alle wechseln.' }
      ] },

    { typ: 'nachricht', text: 'Drittens: Verträge per Mail an einen festen Partner, die unterwegs niemand lesen darf. Auch unser Provider nicht.' },

    { typ: 'frage', text: 'Was brauchen wir dafür?',
      optionen: [
        { text: 'Ende-zu-Ende-Verschlüsselung mit S/MIME oder PGP', richtig: true, norm: 'Ende-zu-Ende-Verschlüsselung',
          antwort: 'Genau. Nur dort wird beim Absender verschlüsselt und erst beim Empfänger geöffnet. Der Zusatz „auch unser Provider nicht" ist das Erkennungszeichen für diese Anforderung.' },
        { text: 'TLS zwischen den Mailservern',
          antwort: 'Das ist [[Transportverschlüsselung]]. Auf den Servern dazwischen – auch bei unserem Provider – liegt die Mail wieder offen. Ihre Anforderung schließt genau das aus.' },
        { text: 'Ein verschlüsseltes Archiv, Passwort in der Mail darunter',
          antwort: 'Dann reisen Schloss und Schlüssel gemeinsam. Über einen zweiten Kanal wäre es ein Notbehelf, sauber ist es nicht.' }
      ] },

    { typ: 'nachricht', text: 'Viertens, und das ist mir am wichtigsten: Unsere Software-Updates sollen nachweislich von uns stammen.' },

    { typ: 'frage', text: 'Was setzen wir dafür ein?',
      optionen: [
        { text: 'Eine digitale Signatur', richtig: true, norm: 'Digitale Signatur',
          antwort: 'Richtig. Es geht nicht um Geheimhaltung – die Updates darf jeder sehen –, sondern um Herkunft und Unversehrtheit. Das ist der Fall für die [[Digitale Signatur]], nicht für Verschlüsselung.' },
        { text: 'Eine Verschlüsselung mit AES',
          antwort: 'Damit wäre das Update geheim, aber nicht nachweislich von uns. Sie haben nach <b>Echtheit</b> gefragt – das leistet Verschlüsselung nicht.' },
        { text: 'Eine Prüfsumme auf der Webseite',
          antwort: 'Besser als nichts, aber wer die Datei austauschen kann, tauscht meist auch die veröffentlichte [[Prüfsumme]] aus. Ohne Geheimnis fehlt der Beweis.' }
      ] },

    { typ: 'merk', text: 'Die Leitfrage bei der Auswahl: <b>Was soll geschützt werden?</b><br>Vertraulichkeit gespeicherter Daten → symmetrisch · Vertraulichkeit unterwegs an wechselnde Partner → hybrid ([[TLS]]) · Vertraulichkeit bis zum Empfänger → [[Ende-zu-Ende-Verschlüsselung]] · Echtheit und Unversehrtheit → [[Digitale Signatur]].' },

    { typ: 'nachricht', text: 'Sehr gut. Damit habe ich vier begründete Entscheidungen statt vier Verfahrensnamen. Genau das wollte ich.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tei-02',
  kontakt: 'projekt',
  titel: 'Was wir noch im Haus haben',
  thema: 'Altlasten',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Die Bestandsaufnahme ist durch. Vier Funde, zu denen ich eine Einschätzung brauche – jeweils: bleibt, oder muss weg?' },
    { typ: 'nachricht', text: 'Erstens: Das Archivsystem signiert seine Belege mit [[SHA-1]].' },

    { typ: 'frage', text: 'Ihre Einschätzung zu SHA-1?',
      optionen: [
        { text: 'Muss weg – für SHA-1 lassen sich Kollisionen erzeugen', richtig: true, norm: 'Kollisionsresistenz',
          antwort: 'Richtig, und bei Signaturen wiegt das besonders schwer: Wer zwei Dokumente mit gleichem [[Hashwert]] bauen kann, kann eine Unterschrift auf ein anderes Dokument übertragen. Umstellen auf [[SHA-256]].' },
        { text: 'Kann bleiben, 160 Bit sind ausreichend lang',
          antwort: 'Die Länge ist nicht das Problem. Entscheidend ist, dass die [[Kollisionsresistenz]] praktisch gebrochen ist – damit ist die Aussage der Signatur nicht mehr belastbar.' },
        { text: 'Kann bleiben, solange niemand das Archiv angreift',
          antwort: 'Das wäre Hoffnung als Sicherheitskonzept. Außerdem müssen Signaturen über Jahre tragen – gerade im Archiv.' }
      ] },

    { typ: 'nachricht', text: 'Zweitens: Ein Wartungszugang zu einer Maschine nutzt [[3DES]].' },

    { typ: 'frage', text: 'Und hier?',
      optionen: [
        { text: 'Veraltet – auf AES umstellen, sobald die Maschine es unterstützt', richtig: true,
          antwort: 'So würde ich es formulieren. [[3DES]] ist nicht so akut gebrochen wie [[DES]], gilt aber als veraltet und ist langsam. Bis zur Umstellung sollte der Zugang zusätzlich im Netz abgeschottet sein.' },
        { text: 'Sofort abschalten, 3DES ist gebrochen',
          antwort: 'Das wäre überzogen. Gebrochen ist der Vorgänger [[DES]] mit 56 Bit. 3DES ist veraltet – man ersetzt es geplant, nicht panisch.' },
        { text: 'Unbedenklich, 3DES ist dreifaches DES und damit dreifach sicher',
          antwort: 'Diese Rechnung geht nicht auf. Die wirksame Schlüssellänge liegt bei 112 bis 168 Bit, nicht beim Dreifachen von 56 – und schnell ist es auch nicht.' }
      ] },

    { typ: 'nachricht', text: 'Drittens: Ein Skript prüft heruntergeladene Dateien per [[MD5]].' },

    { typ: 'frage', text: 'Wie bewerten Sie das?',
      optionen: [
        { text: 'Gegen Übertragungsfehler reicht es, gegen Manipulation nicht – ersetzen', richtig: true,
          antwort: 'Eine faire Einordnung. Als reine [[Prüfsumme]] gegen Bitfehler tut [[MD5]] noch seinen Dienst, als Sicherheitsmerkmal nicht mehr. Der Aufwand für den Wechsel auf [[SHA-256]] ist minimal, also machen wir ihn.' },
        { text: 'Völlig unbedenklich, es ist ja nur eine Prüfsumme',
          antwort: 'Solange niemand gezielt angreift, ja. Sobald jemand Dateien unterschiebt, ist MD5 wertlos – [[Kollision]]en sind dort in Sekunden erzeugbar.' },
        { text: 'Sofortiger Notfall',
          antwort: 'Ein Notfall ist es nicht, aber ein Punkt mit klarem Handlungsbedarf. Die Verhältnismäßigkeit sollten wir im Bericht wahren.' }
      ] },

    { typ: 'nachricht', text: 'Viertens: Das Gäste-WLAN läuft mit WPA2.' },

    { typ: 'frage', text: 'Handlungsbedarf?',
      optionen: [
        { text: 'Vertretbar – WPA2 baut auf AES auf; WPA3 ist besser, aber WEP wäre der echte Fund gewesen', richtig: true,
          antwort: 'Genau die Einordnung, die ich brauche. [[WPA3|WPA2]] ist verbreitet und nicht gebrochen, WPA3 der Nachfolger. Als Notfall hätte ich nur WEP eingestuft.' },
        { text: 'Dringend – WPA2 ist unsicher',
          antwort: 'Das wäre zu scharf. Schwächen gibt es, gebrochen ist es nicht. Beim nächsten Gerätetausch auf WPA3 zu gehen, reicht aus.' }
      ] },

    { typ: 'merk', text: 'Faustregel für Altlasten: <b>[[DES]], [[MD5]], [[SHA-1]] und WEP → raus.</b> <b>[[3DES]] → geplant ersetzen.</b> <b>[[AES]], [[SHA-256]], [[WPA3|WPA2/WPA3]] → in Ordnung.</b>' },

    { typ: 'nachricht', text: 'Danke. Vier Funde, vier abgestufte Bewertungen – damit kann ich morgen auftreten.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tei-03',
  kontakt: 'projekt',
  titel: 'Was der Gesetzgeber dazu sagt',
  thema: 'Verschlüsselung und DSGVO',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Die Geschäftsführung fragt, ob wir zu all dem überhaupt verpflichtet sind oder ob wir hier aus freien Stücken Geld ausgeben.' },

    { typ: 'frage', text: 'Welche Vorschrift nennt Verschlüsselung ausdrücklich?',
      optionen: [
        { text: 'Art. 32 DSGVO – Sicherheit der Verarbeitung', richtig: true, norm: 'Art. 32 Abs. 1 lit. a DSGVO',
          antwort: 'Richtig. [[Art. 32 DSGVO]] nennt [[Pseudonymisierung]] und <b>Verschlüsselung</b> ausdrücklich als Beispiele für geeignete Maßnahmen. Eine starre Pflicht ist es nicht – gefordert ist ein dem Risiko <b>angemessenes</b> Schutzniveau.' },
        { text: 'Art. 17 DSGVO – Recht auf Löschung',
          antwort: 'Das betrifft die Löschung personenbezogener Daten, nicht ihren Schutz während der Verarbeitung.' },
        { text: 'Keine – Verschlüsselung ist rein freiwillig',
          antwort: 'Sie wird sogar namentlich genannt. Je höher das Risiko für die Betroffenen, desto schwerer lässt sich begründen, warum man darauf verzichtet.' }
      ] },

    { typ: 'nachricht', text: 'Und jetzt das Argument, mit dem ich das Budget bekomme. Angenommen, ein verschlüsselter Laptop geht verloren.' },

    { typ: 'frage', text: 'Welchen Unterschied macht die Verschlüsselung dann?',
      optionen: [
        { text: 'Die betroffenen Personen müssen in der Regel nicht benachrichtigt werden', richtig: true, norm: 'Art. 34 Abs. 3 lit. a DSGVO',
          antwort: 'Genau das ist das Argument. [[Art. 34 DSGVO]] lässt die Benachrichtigung entfallen, wenn die Daten durch geeignete Maßnahmen – ausdrücklich genannt: Verschlüsselung – für Unbefugte unzugänglich sind.' },
        { text: 'Es liegt dann gar keine Datenpanne vor',
          antwort: 'Doch, der Verlust bleibt ein meldepflichtiger Vorfall. Verschlüsselung ändert nichts daran, <b>dass</b> etwas passiert ist – nur an den Folgen für die Betroffenen.' },
        { text: 'Die Meldung an die Aufsichtsbehörde entfällt ebenfalls automatisch',
          antwort: 'Das ist die häufigste Verwechslung. Art. 34 betrifft die <b>Benachrichtigung der Betroffenen</b>. Die Meldung an die Aufsichtsbehörde nach Art. 33 richtet sich nach dem Risiko und ist davon zu trennen.' }
      ] },

    { typ: 'frage', text: 'Worauf kommt es dabei entscheidend an?',
      optionen: [
        { text: 'Dass der Schlüssel nicht mit abhandengekommen ist', richtig: true,
          antwort: 'Selbstverständlich, und das wird gern vergessen. Ein verschlüsselter Laptop mit dem Passwort auf einem Zettel in der Tasche ist unverschlüsselt. Genau das müssen wir dokumentieren können.' },
        { text: 'Dass das Gerät weniger als zwei Jahre alt ist',
          antwort: 'Das Alter spielt keine Rolle. Entscheidend ist, ob die Daten für Unbefugte tatsächlich unzugänglich sind.' }
      ] },

    { typ: 'merk', text: '<b>[[Art. 32 DSGVO]]</b> nennt Verschlüsselung und [[Pseudonymisierung]] als Beispiele für ein angemessenes Schutzniveau.<br><b>[[Art. 34 DSGVO]]</b>: Sind die Daten wirksam verschlüsselt, entfällt in der Regel die <b>Benachrichtigung der Betroffenen</b> – die Meldepflicht gegenüber der Aufsichtsbehörde bleibt davon unberührt.' },

    { typ: 'nachricht', text: 'Damit ist es kein Nice-to-have mehr, sondern Risikovorsorge mit messbarer Wirkung. Das überzeugt oben.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tei-04',
  kontakt: 'projekt',
  titel: 'Was Verschlüsselung nicht kann',
  thema: 'Grenzen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Letzter Punkt vor der Vorstellung, und mir der liebste: Ich möchte vermeiden, dass die Geschäftsführung mit falschen Erwartungen aus dem Termin geht.' },
    { typ: 'nachricht', text: 'Nach der Umstellung ist alles verschlüsselt. Welche Risiken bleiben?' },

    { typ: 'mehrfach', text: 'Wogegen hilft Verschlüsselung NICHT? (mehrere)',
      optionen: [
        { text: 'Gegen einen Mitarbeiter, der berechtigt zugreift und Daten mitnimmt', richtig: true },
        { text: 'Gegen Ransomware, die die Daten zusätzlich sperrt', richtig: true },
        { text: 'Gegen Phishing, bei dem jemand sein Passwort herausgibt', richtig: true },
        { text: 'Gegen das Mitlesen auf der Leitung' },
        { text: 'Gegen das Auslesen einer gestohlenen Festplatte' }
      ],
      antwortRichtig: 'Vollständig richtig. Verschlüsselung schützt die <b>[[Vertraulichkeit]]</b> gegenüber Unbefugten. Sie hilft nicht, wenn jemand <b>befugt</b> ist, wenn der Schlüssel durch Täuschung in falsche Hände gerät, oder wenn das Problem gar nicht die Vertraulichkeit ist – [[Ransomware]] greift die <b>Verfügbarkeit</b> an.',
      antwortFalsch: 'Fragen Sie sich bei jedem Punkt: Geht es hier um einen <b>Unbefugten</b>, der ohne Schlüssel an die Daten will? Dann hilft Verschlüsselung. Bei berechtigten Zugriffen, bei herausgegebenen Passwörtern und bei Angriffen auf die Verfügbarkeit nicht.' },

    { typ: 'nachricht', text: 'Der Punkt mit der Ransomware interessiert mich. Unsere Dateien sind doch dann schon verschlüsselt.' },

    { typ: 'frage', text: 'Warum hilft das gegen Ransomware nicht?',
      optionen: [
        { text: 'Weil die Angreifer das Ergebnis erneut verschlüsseln – wir kommen trotzdem nicht mehr heran', richtig: true,
          antwort: 'Genau. Für uns ändert sich nichts: Die Daten sind weg, egal wie oft sie verschlüsselt wurden. Dagegen helfen Sicherungen, nicht Kryptographie. Allerdings nimmt unsere Verschlüsselung den Tätern das Druckmittel der Veröffentlichung.' },
        { text: 'Weil Ransomware die Verschlüsselung umgeht',
          antwort: 'Das muss sie gar nicht. Auf einem laufenden System sind die Dateien für den angemeldeten Benutzer ohnehin lesbar – und genau in dieser Lage schlägt sie zu.' }
      ] },

    { typ: 'frage', text: 'Was ist nach allem das größte verbleibende Risiko?',
      optionen: [
        { text: 'Der Umgang mit den Schlüsseln', richtig: true,
          antwort: 'Dieselbe Antwort wie bei Nadja, und sie stimmt auf jeder Ebene. Verlorene Schlüssel bedeuten verlorene Daten, schlecht aufbewahrte Schlüssel bedeuten keine Verschlüsselung. Deshalb gehört in das Konzept ein Abschnitt über Aufbewahrung, Vertretung und Wechsel der Schlüssel.' },
        { text: 'Dass die Verfahren in zehn Jahren veraltet sind',
          antwort: 'Ein realer Punkt – wir haben ihn ja gerade bei den Altlasten gesehen. Im Alltag richtet der Umgang mit den Schlüsseln aber deutlich mehr Schaden an.' },
        { text: 'Die Rechenleistung der Server',
          antwort: 'Messbar, aber kein Sicherheitsrisiko. Das wäre ein Beschaffungsthema.' }
      ] },

    { typ: 'merk', text: 'Verschlüsselung schützt die <b>[[Vertraulichkeit]]</b> gegenüber Unbefugten – nicht gegen berechtigte Innentäter, nicht gegen [[Phishing]] und nicht gegen Angriffe auf die Verfügbarkeit. Und sie ist nur so gut wie der <b>Umgang mit den Schlüsseln</b>.' },

    { typ: 'nachricht', text: 'Mit dieser Folie schließe ich den Vortrag. Vielen Dank für Ihre Zeit.' }
  ]
});
