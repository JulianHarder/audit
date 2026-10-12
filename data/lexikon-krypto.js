/* ===========================================================
   AUDIT – data/lexikon-krypto.js
   Kurzdefinitionen zum Themengebiet "krypto".

   Haengt seine Gruppen und Eintraege an die Listen aus
   data/lexikon.js an und baut den Index danach neu auf.
   Alle Eintraege tragen gebiet: 'krypto', damit das Lexikon
   im Sicherheitsgebiet nicht davon ueberschwemmt wird.

   Vier Begriffe stehen bewusst NICHT hier, sondern in
   data/lexikon.js mit gebiet ['sicherheit', 'krypto']:
   Verschluesselung, VPN, Authentizitaet und Verbindlichkeit
   (alias Nichtabstreitbarkeit). Ein zweiter Eintrag mit
   demselben Schluessel wuerde den ersten im Index verdraengen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.lexikonGruppen = AUDIT.data.lexikonGruppen.concat([
  'Kryptographie – Grundlagen',
  'Symmetrische Verfahren',
  'Asymmetrische Verfahren',
  'Hybride Verfahren',
  'Hashverfahren',
  'Signatur und Zertifikate'
]);

AUDIT.data.lexikon = AUDIT.data.lexikon.concat([

  /* ---------------- Grundlagen ---------------- */

  { key: 'Kryptographie', gruppe: 'Kryptographie – Grundlagen', alias: ['Kryptografie'],
    text: 'Die Lehre vom Verschlüsseln von Informationen. Aus lesbarem [[Klartext]] wird mithilfe eines Algorithmus und eines [[Schlüssel]]s unlesbarer [[Geheimtext]].',
    merk: 'Kryptographie schützt die <b>Vertraulichkeit</b>. [[Hashwert|Hashverfahren]] und [[Digitale Signatur|Signaturen]] gehören zum selben Gebiet, schützen aber <b>Integrität</b> und <b>Authentizität</b>.' },

  { key: 'Klartext', gruppe: 'Kryptographie – Grundlagen', alias: ['Plaintext'],
    text: 'Die lesbare Ausgangsnachricht, bevor sie verschlüsselt wird.',
    bsp: 'Die Gehaltsliste als Tabelle, bevor sie in den verschlüsselten Container wandert.' },

  { key: 'Geheimtext', gruppe: 'Kryptographie – Grundlagen', alias: ['Chiffrat', 'Ciphertext'],
    text: 'Das Ergebnis der Verschlüsselung. Ohne den passenden [[Schlüssel]] nicht lesbar.' },

  { key: 'Schlüssel', gruppe: 'Kryptographie – Grundlagen',
    text: 'Die geheime Information, die zusammen mit dem Algorithmus aus [[Klartext]] [[Geheimtext]] macht – und zurück. Nicht der Algorithmus ist geheim, sondern der Schlüssel ([[Kerckhoffs-Prinzip]]).',
    merk: 'Die Sicherheit steckt im <b>Schlüssel</b>, nicht in der Geheimhaltung des Verfahrens.' },

  { key: 'Kerckhoffs-Prinzip', gruppe: 'Kryptographie – Grundlagen',
    text: 'Ein Verfahren muss sicher bleiben, auch wenn jeder weiß, wie es funktioniert. Geheim ist allein der [[Schlüssel]].',
    bsp: '[[AES]] ist vollständig veröffentlicht und wird weltweit untersucht – genau das macht es vertrauenswürdig.',
    merk: 'Ein Verfahren, dessen Sicherheit auf Geheimhaltung des Algorithmus beruht („security by obscurity"), gilt als unsicher.' },

  { key: 'Caesar-Verschlüsselung', gruppe: 'Kryptographie – Grundlagen', alias: ['Caesar'],
    text: 'Jeder Buchstabe wird um eine feste Anzahl Stellen im Alphabet verschoben. Der [[Schlüssel]] ist diese Zahl.',
    bsp: 'Mit dem Schlüssel 1 wird aus „Hallo" der Geheimtext „Ibmmp": H→I, a→b, l→m, l→m, o→p.',
    merk: 'Lehrbeispiel, nicht sicher: Es gibt nur 25 mögliche Schlüssel – die probiert man in Sekunden durch.' },

  { key: 'Vigenère-Verschlüsselung', gruppe: 'Kryptographie – Grundlagen', alias: ['Vigenère'],
    text: 'Mehrere [[Caesar-Verschlüsselung|Caesar-Verschiebungen]] nacheinander, gesteuert durch ein Schlüsselwort. Derselbe Buchstabe wird dadurch je nach Position unterschiedlich verschoben.',
    merk: 'Besser als Caesar, aber ebenfalls nicht mehr sicher.' },

  { key: 'Substitution', gruppe: 'Kryptographie – Grundlagen',
    text: 'Zeichen werden durch andere Zeichen ersetzt. Grundprinzip von [[Caesar-Verschlüsselung|Caesar]] und [[Vigenère-Verschlüsselung|Vigenère]].' },

  { key: 'Schlüssellänge', gruppe: 'Kryptographie – Grundlagen',
    text: 'Die Länge des Schlüssels in Bit. Jedes zusätzliche Bit verdoppelt die Zahl der Möglichkeiten und damit den Aufwand eines [[Brute-Force-Angriff]]s.',
    bsp: '[[DES]] mit 56 Bit ist heute in Stunden zu knacken, [[AES]] mit 256 Bit nicht.',
    merk: 'Eine große Schlüssellänge nützt nichts, wenn das Verfahren selbst Schwächen hat – beide Fragen gehören zusammen.' },

  { key: 'Brute-Force-Angriff', gruppe: 'Kryptographie – Grundlagen', alias: ['Brute Force', 'Ausprobieren aller Schlüssel'],
    text: 'Alle möglichen Schlüssel werden der Reihe nach durchprobiert. Gegenmittel ist eine ausreichende [[Schlüssellänge]].' },

  { key: 'Transportverschlüsselung', gruppe: 'Kryptographie – Grundlagen',
    text: 'Die Daten sind nur auf dem Transportweg geschützt. Auf den Servern dazwischen liegen sie entschlüsselt vor.',
    bsp: '[[TLS]] zwischen Browser und Webserver; eine Mail zwischen den Mailservern.',
    merk: 'Transportverschlüsselung schützt vor dem Mitlesen <b>unterwegs</b>, nicht vor dem Anbieter selbst.' },

  { key: 'Ende-zu-Ende-Verschlüsselung', gruppe: 'Kryptographie – Grundlagen', alias: ['E2EE', 'Ende zu Ende'],
    text: 'Die Daten werden beim Absender verschlüsselt und erst beim Empfänger wieder entschlüsselt. Keine Station dazwischen kann mitlesen – auch der Anbieter nicht.',
    bsp: '[[PGP]] oder [[S/MIME]] bei E-Mail, Messenger wie Signal.',
    merk: 'Unterschied zur [[Transportverschlüsselung]]: Dort kann der Server dazwischen mitlesen, hier nicht.' },

  /* ---------------- Symmetrisch ---------------- */

  { key: 'Symmetrische Verschlüsselung', gruppe: 'Symmetrische Verfahren', alias: ['symmetrisch'],
    text: 'Ein <b>einziger</b> Schlüssel wird zum Ver- und zum Entschlüsseln benutzt. Sender und Empfänger müssen denselben Schlüssel kennen.',
    bsp: '[[AES]] bei der Festplattenverschlüsselung des Dienstlaptops.',
    merk: 'Schnell und effizient – das Problem ist die <b>sichere Übergabe</b> des Schlüssels ([[Schlüsselaustauschproblem]]).' },

  { key: 'Schlüsselaustauschproblem', gruppe: 'Symmetrische Verfahren', alias: ['Schlüsselübergabe', 'Schlüsselverteilung'],
    text: 'Der gemeinsame Schlüssel muss irgendwie vom Sender zum Empfänger gelangen. Wird er dabei abgefangen, ist jede Nachricht lesbar – egal wie stark das Verfahren ist.',
    merk: 'Dazu kommt die Menge: Bei <b>n</b> Teilnehmern braucht man <b>n·(n−1)/2</b> Schlüssel. Bei 10 Personen sind das 45.' },

  { key: 'AES', gruppe: 'Symmetrische Verfahren', alias: ['Advanced Encryption Standard'],
    text: 'Der heutige Standard für [[Symmetrische Verschlüsselung|symmetrische Verschlüsselung]], mit 128, 192 oder 256 Bit [[Schlüssellänge]]. Gilt als sicher.',
    bsp: 'WLAN ([[WPA3|WPA2/WPA3]]), Festplattenverschlüsselung, VPN-Tunnel.' },

  { key: 'DES', gruppe: 'Symmetrische Verfahren', alias: ['Data Encryption Standard'],
    text: 'Symmetrisches Verfahren von 1977 mit nur 56 Bit [[Schlüssellänge]]. Durch [[Brute-Force-Angriff|Durchprobieren]] längst zu knacken und damit <b>unsicher</b>.' },

  { key: '3DES', gruppe: 'Symmetrische Verfahren', alias: ['Triple DES', 'Triple Data Encryption Standard'],
    text: '[[DES]] dreifach hintereinander angewendet, wirksame Schlüssellänge 112 bis 168 Bit. Galt lange als Notlösung und ist heute <b>veraltet</b> – neue Systeme nehmen [[AES]].' },

  { key: 'Twofish', gruppe: 'Symmetrische Verfahren', alias: ['Blowfish'],
    text: 'Freie symmetrische Verfahren als Alternative zu DES und AES. Blowfish bis 448 Bit, Twofish bis 256 Bit.' },

  { key: 'ChaCha20', gruppe: 'Symmetrische Verfahren',
    text: 'Symmetrisches Verfahren mit 256 Bit, besonders schnell auf Geräten ohne AES-Beschleunigung. In [[TLS]] 1.3 gebräuchlich.' },

  { key: 'Sitzungsschlüssel', gruppe: 'Symmetrische Verfahren', alias: ['Session Key'],
    text: 'Ein symmetrischer Schlüssel, der nur für eine einzelne Verbindung oder Nachricht gilt. Kern der [[Hybride Verschlüsselung|hybriden Verschlüsselung]].',
    merk: 'Der Sitzungsschlüssel wird mit dem <b>[[Public Key]] des Empfängers</b> verschlüsselt übertragen.' },

  /* ---------------- Asymmetrisch ---------------- */

  { key: 'Asymmetrische Verschlüsselung', gruppe: 'Asymmetrische Verfahren', alias: ['asymmetrisch', 'Public-Key-Verfahren'],
    text: 'Arbeitet mit einem [[Schlüsselpaar]]: Was mit dem einen Schlüssel verschlüsselt wurde, lässt sich nur mit dem anderen entschlüsseln. Verschlüsselt wird mit dem <b>[[Public Key]] des Empfängers</b>, entschlüsselt mit dessen <b>[[Private Key]]</b>.',
    merk: 'Löst das [[Schlüsselaustauschproblem]], ist dafür aber <b>erheblich langsamer</b> als symmetrische Verfahren.' },

  { key: 'Schlüsselpaar', gruppe: 'Asymmetrische Verfahren',
    text: 'Zwei zusammengehörende Schlüssel: der öffentliche ([[Public Key]]) darf jeder kennen, der private ([[Private Key]]) bleibt geheim beim Besitzer.' },

  { key: 'Public Key', gruppe: 'Asymmetrische Verfahren', alias: ['öffentlicher Schlüssel'],
    text: 'Der öffentliche Teil eines [[Schlüsselpaar]]s. Darf frei verteilt werden. Damit wird <b>an</b> den Besitzer verschlüsselt und <b>dessen</b> [[Digitale Signatur|Signatur]] geprüft.' },

  { key: 'Private Key', gruppe: 'Asymmetrische Verfahren', alias: ['privater Schlüssel', 'geheimer Schlüssel'],
    text: 'Der geheime Teil eines [[Schlüsselpaar]]s. Verlässt niemals seinen Besitzer. Damit wird <b>empfangene</b> Post entschlüsselt und <b>selbst</b> signiert.',
    merk: 'Wird er bekannt, ist alles verloren: Mitlesen <b>und</b> Fälschen von Signaturen werden möglich.' },

  { key: 'RSA', gruppe: 'Asymmetrische Verfahren', alias: ['Rivest-Shamir-Adleman'],
    text: 'Das bekannteste asymmetrische Verfahren. Beruht darauf, dass sich große Zahlen nur sehr schwer in ihre Primfaktoren zerlegen lassen. Taugt für Verschlüsselung <b>und</b> [[Digitale Signatur|Signatur]].',
    bsp: 'Schlüssel ab 2048 Bit gelten als zeitgemäß.' },

  { key: 'Diffie-Hellman', gruppe: 'Asymmetrische Verfahren', alias: ['DH', 'Diffie-Hellman-Schlüsselaustausch'],
    text: 'Verfahren, mit dem zwei Seiten über eine unsichere Leitung einen gemeinsamen geheimen Schlüssel vereinbaren, ohne ihn jemals zu übertragen. Beruht auf dem diskreten Logarithmus.',
    merk: 'Achtung in der Prüfung: Diffie-Hellman <b>verschlüsselt keine Daten</b>, es dient nur dem [[Schlüsselaustauschproblem|Schlüsselaustausch]].' },

  { key: 'ECC', gruppe: 'Asymmetrische Verfahren', alias: ['elliptische Kurven', 'Elliptic Curve Cryptography'],
    text: 'Asymmetrische Verfahren auf Basis elliptischer Kurven. Erreichen die Sicherheit von [[RSA]] mit deutlich kürzeren Schlüsseln und sind dadurch sparsamer.' },

  { key: 'ElGamal', gruppe: 'Asymmetrische Verfahren',
    text: 'Asymmetrisches Verfahren auf Basis des diskreten Logarithmus. Bildet die Grundlage für Teile von [[PGP]].' },

  /* ---------------- Hybrid ---------------- */

  { key: 'Hybride Verschlüsselung', gruppe: 'Hybride Verfahren', alias: ['hybrid', 'hybrides Verfahren'],
    text: 'Kombiniert beide Welten: Die eigentlichen Daten werden <b>symmetrisch</b> mit einem [[Sitzungsschlüssel]] verschlüsselt, und dieser Sitzungsschlüssel wird <b>asymmetrisch</b> mit dem [[Public Key]] des Empfängers verschlüsselt mitgeschickt.',
    merk: 'Schnell wie symmetrisch, ohne das [[Schlüsselaustauschproblem]]. So arbeiten [[TLS]], [[SSH]] und [[PGP]].' },

  { key: 'TLS', gruppe: 'Hybride Verfahren', alias: ['SSL', 'HTTPS', 'TLS/SSL'],
    text: 'Hybrides Protokoll für sichere Verbindungen im Netz – die Technik hinter HTTPS. Der Vorgänger SSL ist veraltet, gebräuchlich sind TLS 1.2 und 1.3.',
    merk: 'TLS ist [[Transportverschlüsselung]]: Es schützt die Leitung, nicht die Daten auf dem Server.' },

  { key: 'SSH', gruppe: 'Hybride Verfahren', alias: ['Secure Shell'],
    text: 'Hybrides Protokoll für die sichere Fernwartung von Servern. Anmeldung wahlweise per Passwort oder [[Schlüsselpaar]].' },

  { key: 'IPsec', gruppe: 'Hybride Verfahren',
    text: 'Protokollfamilie zur Absicherung von IP-Verbindungen, typische Grundlage von [[VPN]]-Verbindungen.' },

  { key: 'PGP', gruppe: 'Hybride Verfahren', alias: ['GPG', 'GnuPG', 'Pretty Good Privacy'],
    text: 'Hybrides Verfahren für [[Ende-zu-Ende-Verschlüsselung]] von E-Mails und Dateien. Das Vertrauen in fremde Schlüssel entsteht über das „Web of Trust" statt über eine zentrale Stelle.' },

  { key: 'S/MIME', gruppe: 'Hybride Verfahren',
    text: 'Verfahren zur E-Mail-Verschlüsselung und -Signatur. Anders als [[PGP]] stützt es sich auf [[Zertifikat]]e aus einer [[PKI]].' },

  { key: 'WPA3', gruppe: 'Hybride Verfahren', alias: ['WPA2', 'WLAN-Verschlüsselung'],
    text: 'Verschlüsselung im WLAN. Baut auf [[AES]] auf. WPA2 ist weit verbreitet, WPA3 der Nachfolger; WEP und WPA gelten als unsicher.' },

  /* ---------------- Hash ---------------- */

  { key: 'Hashwert', gruppe: 'Hashverfahren', alias: ['Hash', 'Fingerabdruck', 'Streuwert'],
    text: 'Ein „Fingerabdruck" fester Länge, der aus einer beliebig langen Eingabe berechnet wird. Vom Grundgedanken her nichts anderes als eine [[Prüfsumme]].',
    merk: '<b>Hashing ist keine Verschlüsselung:</b> Es gibt keinen Schlüssel und keine Entschlüsselung. Ein Hash schützt die <b>Integrität</b>, nicht die Vertraulichkeit.' },

  { key: 'Hashfunktion', gruppe: 'Hashverfahren',
    text: 'Das Verfahren, das den [[Hashwert]] berechnet. Eine gute Hashfunktion ist [[Einwegfunktion|einweg]], liefert eine feste Länge, ist deterministisch, zeigt den [[Lawineneffekt]] und ist [[Kollisionsresistenz|kollisionsresistent]].',
    merk: 'Fünf Eigenschaften: <b>Einweg · feste Länge · deterministisch · Lawineneffekt · kollisionsresistent</b>.' },

  { key: 'Einwegfunktion', gruppe: 'Hashverfahren',
    text: 'Aus dem [[Hashwert]] lässt sich die ursprüngliche Nachricht nicht zurückrechnen. Deshalb kann man einen Hash nicht „entschlüsseln".' },

  { key: 'Lawineneffekt', gruppe: 'Hashverfahren', alias: ['Avalanche-Effekt'],
    text: 'Schon ein einziges geändertes Zeichen in der Eingabe erzeugt einen völlig anderen [[Hashwert]].',
    merk: 'Genau darauf beruht die Integritätsprüfung: Winzige Änderungen fallen sofort auf.' },

  { key: 'Kollisionsresistenz', gruppe: 'Hashverfahren',
    text: 'Es soll praktisch unmöglich sein, zwei verschiedene Eingaben mit demselben [[Hashwert]] zu finden.',
    bsp: 'Bei [[MD5]] und [[SHA-1]] ist genau das gelungen – deshalb gelten sie als unsicher.' },

  { key: 'Kollision', gruppe: 'Hashverfahren',
    text: 'Zwei verschiedene Eingaben ergeben denselben [[Hashwert]]. Wer Kollisionen gezielt erzeugen kann, kann untergeschobene Dateien als echt ausgeben.' },

  { key: 'Prüfsumme', gruppe: 'Hashverfahren', alias: ['Checksumme'],
    text: 'Ein mitgelieferter [[Hashwert]], mit dem sich prüfen lässt, ob eine Datei unverändert angekommen ist.',
    merk: 'Schützt vor <b>versehentlichen</b> Übertragungsfehlern. Gegen gezielte Manipulation hilft sie allein nicht – siehe [[HMAC]] und [[Digitale Signatur]].' },

  { key: 'MD5', gruppe: 'Hashverfahren',
    text: 'Hashverfahren mit 128 Bit. <b>Unsicher</b>, weil sich [[Kollision]]en gezielt erzeugen lassen. Nicht mehr für Sicherheitszwecke verwenden.' },

  { key: 'SHA-1', gruppe: 'Hashverfahren', alias: ['SHA1'],
    text: 'Hashverfahren mit 160 Bit. Ebenfalls <b>unsicher</b>, [[Kollision]]en sind praktisch erzeugbar. Früher für Zertifikate verwendet.' },

  { key: 'SHA-256', gruppe: 'Hashverfahren', alias: ['SHA-2', 'SHA-3', 'SHA256'],
    text: 'Aktuelle Hashverfahren mit 256 Bit und mehr. Gelten als sicher und werden für Signaturen und Integritätsprüfungen eingesetzt.' },

  { key: 'bcrypt', gruppe: 'Hashverfahren', alias: ['Argon2', 'scrypt'],
    text: 'Spezielle Hashverfahren für Passwörter. Sie sind <b>absichtlich langsam</b> und lassen sich im Aufwand nachregeln, damit massenhaftes Durchprobieren unwirtschaftlich wird.',
    merk: 'Für Passwörter nicht [[SHA-256]] nehmen – das ist zu schnell. bcrypt oder Argon2 mit [[Salt]].' },

  { key: 'Salt', gruppe: 'Hashverfahren',
    text: 'Ein zufälliger Zusatz, der vor dem Hashen an jedes Passwort angehängt wird und mitgespeichert wird. Dadurch ergeben gleiche Passwörter unterschiedliche [[Hashwert]]e.',
    merk: 'Salt verhindert, dass vorberechnete Tabellen (Rainbow Tables) funktionieren und dass man gleiche Passwörter aneinander erkennt.' },

  { key: 'HMAC', gruppe: 'Hashverfahren',
    text: 'Ein [[Hashwert]], der zusammen mit einem <b>geheimen Schlüssel</b> gebildet wird. Nur wer den Schlüssel kennt, kann ihn erzeugen oder prüfen.',
    merk: 'Schließt die Lücke der einfachen [[Prüfsumme]]: Ein Angreifer kann Nachricht und HMAC nicht gemeinsam austauschen.' },

  /* ---------------- Signatur und Zertifikate ---------------- */

  { key: 'Digitale Signatur', gruppe: 'Signatur und Zertifikate', alias: ['Signatur', 'elektronische Signatur'],
    text: 'Der Absender bildet den [[Hashwert]] seiner Nachricht und signiert ihn mit seinem <b>eigenen [[Private Key]]</b>. Der Empfänger prüft die Signatur mit dem <b>[[Public Key]] des Absenders</b>.',
    merk: 'Sichert [[Authentizität]], Integrität und [[Verbindlichkeit|Nichtabstreitbarkeit]] – aber <b>keine Vertraulichkeit</b>. Eine signierte Nachricht ist nicht verschlüsselt.' },

  { key: 'Signaturprüfung', gruppe: 'Signatur und Zertifikate',
    text: 'Der Empfänger berechnet den [[Hashwert]] der empfangenen Nachricht selbst und vergleicht ihn mit dem, der in der [[Digitale Signatur|Signatur]] steckt. Stimmen beide überein, ist die Nachricht unverändert und stammt vom angegebenen Absender.',
    merk: 'Signiert wird nur der <b>Hash</b>, nicht die ganze Nachricht: Asymmetrische Verfahren sind langsam, der Hash ist klein und immer gleich lang.' },

  { key: 'Zertifikat', gruppe: 'Signatur und Zertifikate', alias: ['digitales Zertifikat', 'X.509'],
    text: 'Bestätigt, dass ein [[Public Key]] wirklich zu einer bestimmten Person, Firma oder Webseite gehört. Ausgestellt und signiert von einer [[Zertifizierungsstelle]].',
    merk: 'Ein Zertifikat beantwortet die Frage, die [[Asymmetrische Verschlüsselung]] offen lässt: <b>Gehört dieser öffentliche Schlüssel wirklich dem, der behauptet, er sei es?</b>' },

  { key: 'Zertifizierungsstelle', gruppe: 'Signatur und Zertifikate', alias: ['CA', 'Certificate Authority'],
    text: 'Vertrauenswürdige Stelle, die [[Zertifikat]]e ausstellt, signiert und bei Bedarf widerruft.' },

  { key: 'PKI', gruppe: 'Signatur und Zertifikate', alias: ['Public Key Infrastructure'],
    text: 'Das Gesamtsystem aus [[Zertifizierungsstelle]]n, [[Zertifikat]]en, Regeln und Sperrlisten, das die Zuordnung von Schlüsseln zu Identitäten organisiert.' }

]);

/* Alle Eintraege dieser Datei gehoeren zum Themengebiet "krypto". */
AUDIT.data.lexikon.forEach(function (e) { if (!e.gebiet) e.gebiet = 'krypto'; });

/* Index neu aufbauen, damit die neuen Begriffe und Alias greifen. */
AUDIT.data.lexikonIndizieren();
