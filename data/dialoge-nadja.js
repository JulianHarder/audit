/* ===========================================================
   AUDIT – data/dialoge-nadja.js
   Nadja Reinhardt, Systemadministration. Duzt dich, schreibt
   knapp und sachlich, denkt in Systemen. Bei ihr geht es um
   die Verfahren im laufenden Betrieb.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'nad-01',
  kontakt: 'nadja',
  titel: 'Die Laptops werden verschlüsselt',
  thema: 'Symmetrische Verschlüsselung',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Moin. Wir ziehen die Festplattenverschlüsselung auf allen Dienstlaptops durch – nächste Woche sind die ersten dran.' },
    { typ: 'nachricht', text: 'Anlass war der Laptop, der im ICE liegen geblieben ist. Unverschlüsselt. Wir hatten Glück, dass nichts passiert ist.' },
    { typ: 'nachricht', text: 'Du darfst mitentscheiden. Erste Frage: symmetrisch oder asymmetrisch?' },

    { typ: 'frage', text: 'Welches Verfahren passt für eine Festplattenverschlüsselung?',
      optionen: [
        { text: 'Symmetrisch', richtig: true, norm: 'Symmetrische Verschlüsselung',
          antwort: 'Richtig. Zwei Gründe: Es geht um sehr große Datenmengen, da zählt Tempo – und es gibt gar keinen zweiten Beteiligten. Der Laptop verschlüsselt für sich selbst, also entfällt das [[Schlüsselaustauschproblem]] komplett.' },
        { text: 'Asymmetrisch',
          antwort: 'Wäre deutlich zu langsam für eine ganze Platte. Und der Vorteil asymmetrischer Verfahren – kein Schlüsselaustausch nötig – bringt hier nichts: Es gibt niemanden, mit dem wir etwas austauschen müssten.' },
        { text: 'Hybrid',
          antwort: 'Hybrid ergibt Sinn, wenn Daten <b>zu jemandem</b> unterwegs sind. Hier bleibt alles auf dem Gerät. Der asymmetrische Teil wäre nur Ballast.' }
      ] },

    { typ: 'nachricht', text: 'Zweite Frage: Welches Verfahren konkret. Im Angebot stehen drei.' },

    { typ: 'frage', text: 'Welches nehmen wir?',
      optionen: [
        { text: 'AES mit 256 Bit', richtig: true, norm: 'AES',
          antwort: 'Genau. [[AES]] ist der aktuelle Standard, die Hardware beschleunigt es, und 256 Bit sind auf absehbare Zeit uneinholbar.' },
        { text: '3DES',
          antwort: '[[3DES]] war die Notlösung, als [[DES]] zu schwach wurde. Es gilt heute als <b>veraltet</b> und ist obendrein langsam. Für etwas Neues nimmt man das nicht mehr.' },
        { text: 'DES mit 56 Bit',
          antwort: 'Auf keinen Fall. 56 Bit sind heute in überschaubarer Zeit durchzuprobieren – [[DES]] ist seit Jahren gebrochen.' }
      ] },

    { typ: 'karte', titel: 'Symmetrische Verfahren im Vergleich', quelle: 'kryptosymmetrisch' },

    { typ: 'nachricht', text: 'Die Geschäftsführung fragt garantiert, ob 128 Bit nicht reichen würden. Das ist billiger lizenziert.' },

    { typ: 'frage', text: 'Was bringt der Sprung von 128 auf 256 Bit?',
      optionen: [
        { text: 'Jedes zusätzliche Bit verdoppelt die Zahl der möglichen Schlüssel', richtig: true, norm: 'Schlüssellänge',
          antwort: 'Genau. Es ist nicht doppelt so sicher, sondern 2 hoch 128 mal so aufwendig durchzuprobieren. Ehrlicherweise: [[AES]] mit 128 Bit gilt heute auch als sicher. Wir nehmen 256, weil die Geräte fünf Jahre laufen sollen.' },
        { text: 'Die Verschlüsselung wird doppelt so schnell',
          antwort: 'Umgekehrt – längere Schlüssel kosten eher etwas Rechenzeit. Bei AES fällt das kaum ins Gewicht, aber schneller wird es sicher nicht.' },
        { text: 'Der Schlüssel lässt sich dann sicherer übertragen',
          antwort: 'Daran ändert die Länge nichts. Ein abgefangener Schlüssel sperrt auf, egal wie lang er ist. Die [[Schlüssellänge]] hilft nur gegen [[Brute-Force-Angriff|Durchprobieren]].' }
      ] },

    { typ: 'nachricht', text: 'Letzte Frage, und die ist die wichtigste.' },
    { typ: 'nachricht', text: 'Wo liegt bei einer Festplattenverschlüsselung in der Praxis das Risiko? Nicht theoretisch – bei uns im Haus.' },

    { typ: 'frage', text: 'Was ist das größte praktische Risiko?',
      optionen: [
        { text: 'Ein schwaches Passwort, aus dem der Schlüssel abgeleitet wird', richtig: true,
          antwort: 'Leider ja. Das stärkste Verfahren hilft nichts, wenn der Schlüssel an „Sommer2026" hängt. Deshalb kommt zur Umstellung eine Schulung und eine Regel für die Passwortlänge.' },
        { text: 'Dass AES in den nächsten Jahren gebrochen wird',
          antwort: 'Dafür gibt es keine Anzeichen, und wenn, kämen Jahre Vorwarnung. Das praktische Risiko sitzt woanders – näher am Menschen.' },
        { text: 'Dass die Platte langsamer wird',
          antwort: 'Messbar, aber im Alltag nicht spürbar. Das ist ein Komfortthema, kein Sicherheitsrisiko.' }
      ] },

    { typ: 'merk', text: 'Festplatten- und Dateiverschlüsselung ist <b>[[Symmetrische Verschlüsselung|symmetrisch]]</b>: große Datenmengen, kein Partner, also kein Austauschproblem. Standard ist [[AES]]; [[DES]] und [[3DES]] sind veraltet.' },

    { typ: 'nachricht', text: 'Gut. Ich setz dich auf die Verteilerliste fürs Rollout.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'nad-02',
  kontakt: 'nadja',
  titel: 'Wie kommt der Schlüssel zum Partner?',
  thema: 'Schlüsselaustausch',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Neuer Fall. Die Spedition Brakel will uns täglich eine Datei mit Sendungsdaten schicken – verschlüsselt.' },
    { typ: 'nachricht', text: 'Vorschlag von deren IT: Wir nehmen [[AES]], und sie schicken uns den Schlüssel vorab per Mail.' },

    { typ: 'frage', text: 'Was hältst du vom Schlüssel per Mail?',
      optionen: [
        { text: 'Untauglich – wer die Mail mitliest, hat den Schlüssel', richtig: true, norm: 'Schlüsselaustauschproblem',
          antwort: 'Eben. Wir würden die Datei mit einem starken Verfahren schützen und den Schlüssel daneben offen durchs Netz schicken. Das ist, als klebte man den Wohnungsschlüssel an die Tür.' },
        { text: 'In Ordnung, solange der Schlüssel lang genug ist',
          antwort: 'Die Länge spielt keine Rolle, wenn der Schlüssel unterwegs abgegriffen wird. Dann braucht niemand mehr etwas zu knacken.' },
        { text: 'In Ordnung, wenn die Mail über TLS läuft',
          antwort: 'Besser als gar nichts, aber [[TLS]] ist [[Transportverschlüsselung]]: Auf jedem Mailserver dazwischen liegt die Mail wieder im Klartext. Für einen Dauerschlüssel ist das zu wenig.' }
      ] },

    { typ: 'nachricht', text: 'Genau meine Antwort an die. Dann kam zurück: „Dann nutzen wir eben Diffie-Hellman."' },
    { typ: 'nachricht', text: 'Kennst du das? Und vor allem: Was macht das genau?' },

    { typ: 'frage', text: 'Was leistet Diffie-Hellman?',
      optionen: [
        { text: 'Zwei Seiten vereinbaren über eine unsichere Leitung einen gemeinsamen Schlüssel, ohne ihn zu übertragen', richtig: true, norm: 'Diffie-Hellman',
          antwort: 'Richtig, und das ist der elegante Teil: Beide Seiten rechnen sich denselben Wert aus, aber der Wert selbst geht nie über die Leitung. Ein Mitleser sieht die Zwischenergebnisse und kann daraus nichts machen.' },
        { text: 'Es verschlüsselt die Nutzdaten asymmetrisch',
          antwort: 'Das ist die häufigste Verwechslung und ein beliebter Prüfungsfallstrick: Diffie-Hellman <b>verschlüsselt gar nichts</b>. Es handelt nur einen Schlüssel aus – verschlüsselt wird danach mit einem anderen Verfahren.' },
        { text: 'Es prüft, ob die Gegenstelle echt ist',
          antwort: 'Nein, und das ist sogar seine Schwachstelle: Für sich allein weiß Diffie-Hellman nicht, <b>mit wem</b> es da einen Schlüssel aushandelt. Dafür braucht es zusätzlich [[Zertifikat]]e oder [[Digitale Signatur|Signaturen]].' }
      ] },

    { typ: 'nachricht', text: 'Den letzten Punkt hatte ich auch im Kopf. Deshalb läuft das in der Praxis nie allein.' },

    { typ: 'karte', titel: 'Asymmetrische Verfahren', quelle: 'kryptoasymmetrisch' },

    { typ: 'nachricht', text: 'Jetzt der Gegenvorschlag, den ich machen will: Wir nehmen einfach die Lösung, die ohnehin überall steckt.' },

    { typ: 'frage', text: 'Wie löst die hybride Verschlüsselung den Schlüsselaustausch?',
      optionen: [
        { text: 'Der symmetrische Sitzungsschlüssel wird mit dem Public Key des Empfängers verschlüsselt mitgeschickt', richtig: true, norm: 'Hybride Verschlüsselung',
          antwort: 'Ja. Der [[Sitzungsschlüssel]] reist im asymmetrischen Umschlag mit, und nur der Empfänger kann ihn mit seinem [[Private Key]] herausholen. Danach läuft alles schnell symmetrisch weiter.' },
        { text: 'Der Sitzungsschlüssel wird mit dem Private Key des Absenders verschlüsselt',
          antwort: 'Dann könnte jeder ihn auspacken – der passende [[Public Key]] ist ja öffentlich. Verschlüsselt wird immer <b>an</b> den Empfänger, also mit <b>dessen</b> öffentlichem Schlüssel.' },
        { text: 'Beide Seiten tauschen vorher persönlich einen Schlüssel aus',
          antwort: 'Das wäre der Weg ohne Kryptographie – bei einem Partner machbar, bei fünfzig nicht. Genau das soll uns das Verfahren ersparen.' }
      ] },

    { typ: 'merk', text: 'Drei Wege aus dem [[Schlüsselaustauschproblem]]: persönliche Übergabe (unpraktisch), <b>[[Diffie-Hellman]]</b> (vereinbart einen Schlüssel, verschlüsselt selbst nichts) und <b>[[Hybride Verschlüsselung|hybride Verfahren]]</b> (Sitzungsschlüssel im asymmetrischen Umschlag).' },

    { typ: 'nachricht', text: 'Ich schreib Brakel, dass wir [[S/MIME]] nehmen. Dann haben wir Verschlüsselung und Absenderprüfung in einem Aufwasch.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'nad-03',
  kontakt: 'nadja',
  titel: 'Vier Schlüssel auf dem Tisch',
  thema: 'Asymmetrische Verschlüsselung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Kurze Übung, die erfahrungsgemäß in jeder Prüfung drankommt – und die in der Praxis ständig schiefgeht.' },
    { typ: 'nachricht', text: 'Du und ich haben je ein [[Schlüsselpaar]]. Auf dem Tisch liegen also vier Schlüssel: dein öffentlicher, dein privater, mein öffentlicher, mein privater.' },
    { typ: 'nachricht', text: 'Ich schicke dir gleich eine vertrauliche Datei. Fangen wir an.' },

    { typ: 'frage', text: 'Nadja verschlüsselt die Datei für dich. Welchen Schlüssel nimmt sie?',
      optionen: [
        { text: 'Deinen Public Key', richtig: true,
          antwort: 'Richtig. Verschlüsselt wird immer mit dem öffentlichen Schlüssel des <b>Empfängers</b>. Alles andere wäre entweder sinnlos oder unsicher.' },
        { text: 'Ihren eigenen Private Key',
          antwort: 'Dann könnte jeder mitlesen, denn zum Öffnen bräuchte man ihren öffentlichen Schlüssel – und den hat jeder. Das wäre eine [[Digitale Signatur]], keine Verschlüsselung.' },
        { text: 'Ihren eigenen Public Key',
          antwort: 'Dann käme nur sie selbst wieder heran. Für dich wäre die Datei wertlos.' }
      ] },

    { typ: 'frage', text: 'Und womit öffnest du sie?',
      optionen: [
        { text: 'Mit deinem Private Key', richtig: true,
          antwort: 'Genau. Dein privater Schlüssel verlässt dabei niemals deinen Rechner – das ist der Kern der Sache.' },
        { text: 'Mit Nadjas Public Key',
          antwort: 'Ihr öffentlicher Schlüssel passt nur zu ihrem privaten. Zum Entschlüsseln brauchst du den Gegenpart zu dem Schlüssel, mit dem verschlüsselt wurde – also deinen eigenen privaten.' }
      ] },

    { typ: 'nachricht', text: 'Soweit sauber. Jetzt drehen wir es um.' },
    { typ: 'nachricht', text: 'Ich will dir nichts verheimlichen, sondern <b>beweisen</b>, dass eine Anweisung wirklich von mir kommt. Lesen darf sie jeder.' },

    { typ: 'frage', text: 'Womit signiert Nadja?',
      optionen: [
        { text: 'Mit ihrem eigenen Private Key', richtig: true, norm: 'Digitale Signatur',
          antwort: 'Richtig. Nur sie besitzt ihn, also kann nur sie diese Signatur erzeugen. Deshalb trägt die Signatur auch die [[Verbindlichkeit|Nichtabstreitbarkeit]] in sich.' },
        { text: 'Mit deinem Public Key',
          antwort: 'Damit würde sie <b>an dich verschlüsseln</b>, nicht signieren. Die Signatur gehört zum Absender, nicht zum Empfänger.' },
        { text: 'Mit ihrem eigenen Public Key',
          antwort: 'Den hat jeder – eine Signatur, die jeder erzeugen kann, beweist nichts.' }
      ] },

    { typ: 'frage', text: 'Und womit prüfst du die Signatur?',
      optionen: [
        { text: 'Mit Nadjas Public Key', richtig: true,
          antwort: 'Ja. Passt die Signatur zu ihrem öffentlichen Schlüssel, kann sie nur mit ihrem privaten erzeugt worden sein.' },
        { text: 'Mit deinem eigenen Private Key',
          antwort: 'Dein Schlüsselpaar hat mit ihrer Signatur nichts zu tun. Geprüft wird immer mit dem öffentlichen Schlüssel des <b>Absenders</b>.' }
      ] },

    { typ: 'merk', text: '<b>Verschlüsseln:</b> Public Key des <b>Empfängers</b> → dessen Private Key öffnet.<br><b>Signieren:</b> Private Key des <b>Absenders</b> → dessen Public Key prüft.<br>Merksatz: <b>Verschlüsseln geht zum Empfänger, Signieren kommt vom Absender.</b>' },

    { typ: 'nachricht', text: 'Und jetzt der Fall, der beides braucht: vertraulich <b>und</b> nachweislich von mir.' },

    { typ: 'frage', text: 'Wie viele Schlüssel sind dann im Spiel?',
      optionen: [
        { text: 'Vier – sie signiert mit ihrem privaten und verschlüsselt mit deinem öffentlichen, du entschlüsselst mit deinem privaten und prüfst mit ihrem öffentlichen', richtig: true,
          antwort: 'Genau so läuft es bei [[PGP]] und [[S/MIME]]. Beide Vorgänge laufen nebeneinander, jeder mit seinem eigenen Schlüsselpaar.' },
        { text: 'Zwei – ein Schlüsselpaar reicht für beides',
          antwort: 'Ein Paar reicht nur für <b>eine</b> Richtung. Verschlüsselung braucht dein Paar, die Signatur ihres. Zusammen also vier Schlüssel.' }
      ] },

    { typ: 'nachricht', text: 'Wenn du dir nur einen Satz merkst, dann den von eben mit Empfänger und Absender. Damit kommst du durch jede Aufgabe.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'nad-04',
  kontakt: 'nadja',
  titel: 'Was beim Schlosssymbol passiert',
  thema: 'Hybride Verschlüsselung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Unser Kundenportal bekommt ein neues Zertifikat. Gute Gelegenheit, einmal durchzugehen, was beim Aufruf von https eigentlich passiert.' },
    { typ: 'nachricht', text: 'Der Browser verbindet sich, und innerhalb von Millisekunden sind sich beide Seiten einig. Fangen wir vorn an.' },

    { typ: 'frage', text: 'Was schickt unser Server dem Browser als Erstes?',
      optionen: [
        { text: 'Sein Zertifikat mit dem öffentlichen Schlüssel', richtig: true, norm: 'Zertifikat',
          antwort: 'Genau. Das [[Zertifikat]] enthält unseren [[Public Key]] und die Bestätigung einer [[Zertifizierungsstelle]], dass dieser Schlüssel wirklich zu unserer Domain gehört.' },
        { text: 'Seinen privaten Schlüssel',
          antwort: 'Niemals. Der [[Private Key]] verlässt den Server unter keinen Umständen – wird er bekannt, ist die ganze Verbindung wertlos.' },
        { text: 'Den Sitzungsschlüssel',
          antwort: 'Der kommt erst danach, und auch nicht offen. Zuerst muss der Browser überhaupt wissen, mit wem er spricht.' }
      ] },

    { typ: 'nachricht', text: 'Der Browser prüft das Zertifikat. Passt es, geht es weiter.' },

    { typ: 'frage', text: 'Womit werden anschließend die eigentlichen Daten verschlüsselt?',
      optionen: [
        { text: 'Mit einem symmetrischen Sitzungsschlüssel', richtig: true, norm: 'Sitzungsschlüssel',
          antwort: 'Richtig. Für die Nutzdaten zählt Tempo, also symmetrisch. Der [[Sitzungsschlüssel]] gilt nur für diese eine Verbindung.' },
        { text: 'Mit dem öffentlichen Schlüssel des Servers',
          antwort: 'Das wäre viel zu langsam für eine ganze Sitzung. Der öffentliche Schlüssel wird nur ganz am Anfang gebraucht – für den Sitzungsschlüssel.' }
      ] },

    { typ: 'frage', text: 'Und wie kommt dieser Sitzungsschlüssel sicher zum Server?',
      optionen: [
        { text: 'Asymmetrisch geschützt – nur der Server kann ihn mit seinem Private Key herausholen', richtig: true,
          antwort: 'Das ist der ganze Trick an [[Hybride Verschlüsselung|hybriden Verfahren]]. Moderne Verbindungen handeln ihn zusätzlich per [[Diffie-Hellman]] aus, damit alte Mitschnitte auch dann sicher bleiben, wenn der private Schlüssel später einmal auffliegt.' },
        { text: 'Er wird im Klartext übertragen, das reicht für eine einzelne Sitzung',
          antwort: 'Dann könnte jeder Mitleser ab da alles entschlüsseln. Der Sitzungsschlüssel ist das Wertvollste an der ganzen Verbindung.' },
        { text: 'Beide Seiten kennen ihn vorher',
          antwort: 'Woher? Der Browser hat unsere Seite vielleicht noch nie besucht. Genau dieses Problem lösen die asymmetrischen Verfahren.' }
      ] },

    { typ: 'karte', titel: 'Hybride Verfahren im Einsatz', quelle: 'kryptohybrid' },

    { typ: 'nachricht', text: 'Jetzt die Frage, die mir die Geschäftsführung garantiert stellt.' },
    { typ: 'nachricht', text: 'Auf der Seite ist ein Schloss zu sehen. Heißt das, die Kundendaten sind bei uns sicher?' },

    { typ: 'frage', text: 'Was sagt das Schlosssymbol aus?',
      optionen: [
        { text: 'Nur, dass die Verbindung verschlüsselt ist und das Zertifikat zur Domain passt', richtig: true, norm: 'Transportverschlüsselung',
          antwort: 'Genau das und keinen Deut mehr. [[TLS]] schützt die <b>Leitung</b>. Was auf unserem Server mit den Daten passiert, ob sie dort verschlüsselt liegen und wer darauf zugreifen darf, sagt das Schloss überhaupt nicht.' },
        { text: 'Dass die Daten auch auf dem Server verschlüsselt gespeichert werden',
          antwort: 'Dazu sagt [[TLS]] nichts. Transport und Speicherung sind zwei getrennte Baustellen – auch eine Phishing-Seite kann ein gültiges Zertifikat haben.' },
        { text: 'Dass der Betreiber vertrauenswürdig ist',
          antwort: 'Leider nein. Ein Zertifikat bestätigt die <b>Identität der Domain</b>, nicht die Redlichkeit dessen, der dahintersteckt.' }
      ] },

    { typ: 'merk', text: '<b>[[TLS]]</b> ist hybrid: Zertifikat und [[Public Key]] am Anfang, dann ein symmetrischer [[Sitzungsschlüssel]] für die Daten. Es ist <b>[[Transportverschlüsselung]]</b> – es schützt die Leitung, nicht die Daten auf dem Server.' },

    { typ: 'nachricht', text: 'Den letzten Satz bitte wörtlich so in die Vorlage für die Geschäftsführung. Den missverstehen sonst alle.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'nad-05',
  kontakt: 'nadja',
  titel: 'Wer kann unsere Mails lesen?',
  thema: 'Transport und Ende-zu-Ende',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Die Personalabteilung will Arbeitsverträge per Mail verschicken. Frau Lüttmann sagt, das sei sicher, unser Mailserver nutze ja TLS.' },
    { typ: 'nachricht', text: 'Ich hätte gern deine Einschätzung, bevor ich da reingrätsche.' },

    { typ: 'frage', text: 'Wogegen schützt TLS beim Mailversand?',
      optionen: [
        { text: 'Gegen Mitlesen auf der Leitung zwischen den Servern', richtig: true, norm: 'Transportverschlüsselung',
          antwort: 'Richtig – und nur dagegen. Auf jedem Mailserver, den die Nachricht passiert, liegt sie zwischendurch wieder entschlüsselt vor.' },
        { text: 'Gegen jeden Zugriff bis hin zum Empfänger',
          antwort: 'Das wäre [[Ende-zu-Ende-Verschlüsselung]]. [[TLS]] schützt nur die einzelnen Teilstrecken zwischen den Servern.' },
        { text: 'Gegen Schadsoftware im Anhang',
          antwort: 'Damit hat Verschlüsselung nichts zu tun. Dafür ist der Mailfilter zuständig.' }
      ] },

    { typ: 'nachricht', text: 'Dann die entscheidende Frage für den Fall mit den Verträgen.' },

    { typ: 'frage', text: 'Wer kann einen solchen Vertrag unterwegs im Klartext sehen?',
      optionen: [
        { text: 'Jeder Mailserver auf dem Weg, also auch die Anbieter beider Seiten', richtig: true,
          antwort: 'Genau. Bei Gehalts- und Vertragsdaten ist das heikel – das sind nach [[Art. 32 DSGVO]] Daten, bei denen wir ein angemessenes Schutzniveau nachweisen müssen.' },
        { text: 'Niemand, die Mail ist durchgehend verschlüsselt',
          antwort: 'Nur bei [[Ende-zu-Ende-Verschlüsselung]]. Mit reinem [[TLS]] ist sie es abschnittsweise – und zwischen den Abschnitten eben nicht.' }
      ] },

    { typ: 'frage', text: 'Was schlagen wir der Personalabteilung vor?',
      optionen: [
        { text: 'Ende-zu-Ende-Verschlüsselung mit S/MIME oder PGP', richtig: true, norm: 'Ende-zu-Ende-Verschlüsselung',
          antwort: 'Richtig. Dann wird beim Absender verschlüsselt und erst beim Empfänger wieder geöffnet – kein Server dazwischen kommt an den Inhalt. [[S/MIME]] passt für uns besser, weil es mit [[Zertifikat]]en arbeitet, die wir ohnehin verwalten.' },
        { text: 'Den Vertrag in ein passwortgeschütztes Archiv packen und das Passwort in derselben Mail mitschicken',
          antwort: 'Das Passwort in derselben Mail hebt den Schutz vollständig auf. Über einen <b>anderen</b> Kanal – etwa telefonisch – wäre es immerhin ein Notbehelf, aber keine saubere Lösung.' },
        { text: 'Gar nichts, TLS reicht für den Alltag',
          antwort: 'Für eine Terminabsprache ja. Für Vertrags- und Gehaltsdaten ist es zu wenig, sobald sie das Haus verlassen.' }
      ] },

    { typ: 'merk', text: '<b>[[Transportverschlüsselung]]</b> (z. B. [[TLS]]) schützt die Leitung – auf den Servern dazwischen liegen die Daten offen.<br><b>[[Ende-zu-Ende-Verschlüsselung]]</b> (z. B. [[PGP]], [[S/MIME]]) schützt bis zum Empfänger – auch der Anbieter kann nicht mitlesen.' },

    { typ: 'nachricht', text: 'Danke. Dann formuliere ich das jetzt freundlich. Sie hat es ja gut gemeint.' }
  ]
});
