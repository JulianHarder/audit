/* ===========================================================
   AUDIT – data/dialoge-jonas.js
   Jonas, Azubi im 1. Lehrjahr. Duzt dich, schreibt klein und
   mit Emojis. Bei ihm erklaerst DU – wer erklaeren kann, hat
   es verstanden. Deshalb sind seine Fragen die Grundlagen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'jon-01',
  kontakt: 'jonas',
  titel: 'Aus „Hallo" wird „Ibmmp"',
  thema: 'Grundbegriffe',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'hey 👋 du bist doch der der sich mit dem verschlüsselungskram auskennt oder' },
    { typ: 'nachricht', text: 'nadja hat mir heute nen zettel hingelegt. da steht "aus Hallo wird Ibmmp" und ich soll rausfinden warum 🙃' },
    { typ: 'nachricht', text: 'ich starre das jetzt seit 20 minuten an' },

    { typ: 'frage', text: 'Was ist hier passiert?',
      optionen: [
        { text: 'Jeder Buchstabe wurde um eine Stelle im Alphabet verschoben', richtig: true, norm: 'Caesar-Verschlüsselung',
          antwort: 'WARTE. h→i, a→b, l→m, l→m, o→p 🤯 das is ja wirklich einfach nur eins weiter. und das hat nen namen?' },
        { text: 'Die Buchstaben wurden rückwärts geschrieben',
          antwort: 'hm, rückwärts wär ja "ollah". passt nicht. da muss was anderes sein' },
        { text: 'Der Text wurde mit einem Passwort gesichert',
          antwort: 'das dachte ich auch zuerst. aber dann wär es doch kryptischer? das sieht aus als wär da ein ganz simples muster drin, guck mal h und i 🤔' }
      ] },

    { typ: 'nachricht', text: 'okay [[Caesar-Verschlüsselung|caesar]] also. nach dem römer?' },
    { typ: 'nachricht', text: 'aber eine frage hab ich noch: was ist denn da jetzt der [[Schlüssel]]? das wort "Hallo"?' },

    { typ: 'frage', text: 'Was ist bei Caesar der Schlüssel?',
      optionen: [
        { text: 'Die Zahl, um die verschoben wird', richtig: true,
          antwort: 'ahh, also hier die 1. und wenn ich 5 nehm wird aus h ein m. check ✌️' },
        { text: 'Der Klartext „Hallo"',
          antwort: 'nee der [[Klartext]] ist das was du <b>schützen</b> willst, nicht das womit du schützt. der schlüssel ist was anderes' },
        { text: 'Das Alphabet',
          antwort: 'das alphabet kennt ja jeder 😄 das kann nicht das geheimnis sein. es muss was sein das <b>nur ihr beide</b> wisst' }
      ] },

    { typ: 'merk', text: '<b>[[Klartext]]</b> = lesbar · <b>[[Geheimtext]]</b> = unlesbar · <b>[[Schlüssel]]</b> = das Geheimnis, das beides ineinander überführt. Bei [[Caesar-Verschlüsselung|Caesar]] ist der Schlüssel die Verschiebezahl.' },

    { typ: 'nachricht', text: 'dann is das ja mega unsicher oder? ich mein... wie viele zahlen gibts denn da' },

    { typ: 'frage', text: 'Wie viele Schlüssel muss man bei Caesar höchstens durchprobieren?',
      optionen: [
        { text: '25', richtig: true, norm: 'Brute-Force-Angriff',
          antwort: 'fünfundzwanzig?! das schafft mein taschenrechner 😂 also eigentlich sogar ich von hand, in ner viertelstunde' },
        { text: 'Mehrere Millionen',
          antwort: 'so viele möglichkeiten gibts gar nicht. du kannst nur um 1 bis 25 stellen verschieben – bei 26 bist du wieder am anfang' },
        { text: 'Unendlich viele',
          antwort: 'das wär schön 😅 aber nein: das alphabet hat 26 buchstaben, also gibts auch nur 25 sinnvolle verschiebungen' }
      ] },

    { typ: 'nachricht', text: 'okay aber dann versteh ich was nicht' },
    { typ: 'nachricht', text: 'nadja sagt [[AES]] is sicher. aber das verfahren is doch auch öffentlich bekannt, das kann man googeln. wieso is das dann sicher?? 😵' },

    { typ: 'frage', text: 'Warum darf das Verfahren öffentlich bekannt sein?',
      optionen: [
        { text: 'Weil die Sicherheit im Schlüssel steckt, nicht im Verfahren', richtig: true, norm: 'Kerckhoffs-Prinzip',
          antwort: 'ach so. also wie ein türschloss – jeder weiß wie ein schloss funktioniert, aber den schlüssel hast nur du 🔑 das macht sinn!' },
        { text: 'Weil AES so kompliziert ist, dass es trotzdem keiner nachbaut',
          antwort: 'das wär ein schlechtes argument. es heißt sogar umgekehrt: ein verfahren, das nur sicher ist <b>solange es keiner kennt</b>, gilt als unsicher. das nennt sich [[Kerckhoffs-Prinzip]]' },
        { text: 'Das ist bei AES eine Ausnahme',
          antwort: 'nee, das ist die regel. gute verfahren werden absichtlich veröffentlicht, damit forscher weltweit draufhauen können. was das übersteht, ist was wert' }
      ] },

    { typ: 'merk', text: '<b>[[Kerckhoffs-Prinzip]]:</b> Das Verfahren darf jeder kennen – geheim ist nur der [[Schlüssel]]. Sicherheit durch Geheimhalten des Algorithmus („security by obscurity") gilt als unsicher.' },

    { typ: 'nachricht', text: 'du, das war echt hilfreich 🙏 ich schreib das gleich auf den zettel zurück' },
    { typ: 'nachricht', text: 'morgen frag ich dich das nächste, ja? 😁' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'jon-02',
  kontakt: 'jonas',
  titel: 'Ein Schlüssel für alle?',
  thema: 'Symmetrische Verschlüsselung',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'moin! heute: symmetrisch vs asymmetrisch. klingt nach mathe und ich mag kein mathe 😩' },
    { typ: 'nachricht', text: 'fangen wir mit symmetrisch an. nadja sagt da gibts "einen schlüssel". einen für was?' },

    { typ: 'frage', text: 'Wofür wird bei symmetrischer Verschlüsselung der eine Schlüssel benutzt?',
      optionen: [
        { text: 'Zum Verschlüsseln und zum Entschlüsseln', richtig: true, norm: 'Symmetrische Verschlüsselung',
          antwort: 'also derselbe schlüssel in beide richtungen. wie bei nem schließfach wo du und ich den gleichen schlüssel haben 👍' },
        { text: 'Nur zum Verschlüsseln, zum Entschlüsseln braucht man einen zweiten',
          antwort: 'das wär [[Asymmetrische Verschlüsselung|asymmetrisch]] – da kommen wir morgen hin. bei symmetrisch ist es wirklich <b>ein</b> schlüssel für beides' },
        { text: 'Zum Prüfen, ob die Nachricht unterwegs verändert wurde',
          antwort: 'das macht ein [[Hashwert]], das ist nochmal was anderes. hier gehts ums lesbar und unlesbar machen' }
      ] },

    { typ: 'nachricht', text: 'okay das is einfach. und wo is der haken? irgendwas is doch immer 🙄' },

    { typ: 'frage', text: 'Wo liegt das Hauptproblem bei symmetrischer Verschlüsselung?',
      optionen: [
        { text: 'Der Schlüssel muss sicher zum anderen gelangen', richtig: true, norm: 'Schlüsselaustauschproblem',
          antwort: 'ohh. also ich kann die datei verschlüsseln, aber dann muss ich dir ja noch den schlüssel schicken. und wenn den jemand abfängt wars das 💀' },
        { text: 'Das Verfahren ist zu langsam',
          antwort: 'andersrum! symmetrisch ist gerade das <b>schnelle</b>. das langsame sind die asymmetrischen verfahren' },
        { text: 'Man kann damit nur Text verschlüsseln, keine Dateien',
          antwort: 'nee, das geht mit allem – ganze festplatten sogar. das problem liegt woanders, nämlich beim schlüssel selbst' }
      ] },

    { typ: 'nachricht', text: 'und das gilt egal wie gut das verfahren is?' },
    { typ: 'nachricht', text: 'also auch bei [[AES]] mit 256 bit?' },

    { typ: 'frage', text: 'Hilft eine längere Schlüssellänge gegen das Austauschproblem?',
      optionen: [
        { text: 'Nein, ein abgefangener Schlüssel macht jede Länge wertlos', richtig: true,
          antwort: 'logisch eigentlich. wenn ich den schlüssel hab brauch ich nix knacken, ich schließ einfach auf 🔓' },
        { text: 'Ja, ab 256 Bit kann man den Schlüssel gefahrlos verschicken',
          antwort: 'nein 😬 die [[Schlüssellänge]] hilft gegen [[Brute-Force-Angriff|durchprobieren]]. gegen <b>abfangen</b> hilft sie überhaupt nicht – ein abgefangener 256-bit-schlüssel sperrt genauso auf wie ein kurzer' }
      ] },

    { typ: 'nachricht', text: 'okay und jetzt was fieses was ich mich nicht trau nadja zu fragen' },
    { typ: 'nachricht', text: 'wir sind hier im lager zu zehnt. wenn jeder mit jedem verschlüsselt reden will – wie viele schlüssel brauchen wir dann? ich hätt gesagt zehn 🤷' },

    { typ: 'frage', text: 'Wie viele Schlüssel braucht man bei 10 Teilnehmern, wenn jeder mit jedem geheim reden soll?',
      optionen: [
        { text: '45', richtig: true, norm: 'n · (n−1) / 2',
          antwort: 'FÜNFUNDVIERZIG?! bei zehn leuten! 😳 wie kommt man da drauf' },
        { text: '10',
          antwort: 'das wäre einer pro person – aber ein schlüssel gehört ja immer zu einem <b>paar</b>. du und ich brauchen einen, du und nadja einen anderen …' },
        { text: '100',
          antwort: 'fast die richtige idee, aber doppelt gezählt: der schlüssel zwischen dir und mir ist derselbe wie der zwischen mir und dir. und mit sich selbst redet keiner 😄' }
      ] },

    { typ: 'nachricht', text: 'ah, n mal n-1 durch zwei. also 10 mal 9 = 90, halbe = 45. verstanden' },
    { typ: 'nachricht', text: 'bei 100 leuten wären das dann ja fast 5000 schlüssel 🫠 das kann keiner verwalten' },

    { typ: 'merk', text: '<b>[[Symmetrische Verschlüsselung]]:</b> schnell, aber zwei Probleme – die sichere <b>Übergabe</b> des Schlüssels und die <b>Menge</b>: bei n Teilnehmern n·(n−1)/2 Schlüssel.' },

    { typ: 'nachricht', text: 'und morgen erklärst du mir wie man das löst ja? ich hab das gefühl da kommt noch was 👀' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'jon-03',
  kontakt: 'jonas',
  titel: 'Wessen Schlüssel denn jetzt?',
  thema: 'Asymmetrische Verschlüsselung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'ich hab gestern abend noch gelesen 🤓 [[Asymmetrische Verschlüsselung|asymmetrisch]]: es gibt zwei schlüssel, einen öffentlichen und einen privaten' },
    { typ: 'nachricht', text: 'so weit so gut. ABER' },
    { typ: 'nachricht', text: 'ich will dir jetzt was verschlüsseltes schicken. welchen schlüssel nehm ich?? ich komm da jedes mal durcheinander 😵‍💫' },

    { typ: 'frage', text: 'Jonas will dir eine verschlüsselte Nachricht schicken. Womit verschlüsselt er?',
      optionen: [
        { text: 'Mit deinem Public Key', richtig: true, norm: 'Asymmetrische Verschlüsselung',
          antwort: 'mit DEINEM öffentlichen? nicht mit meinem? ... moment. doch, macht sinn: aufmachen sollst ja du können, nicht ich 📬' },
        { text: 'Mit seinem eigenen Private Key',
          antwort: 'dann könnte sie jeder lesen! denn zum aufmachen bräuchte man seinen <b>öffentlichen</b> schlüssel – und den hat jeder. das wäre eine [[Digitale Signatur|signatur]], keine verschlüsselung' },
        { text: 'Mit seinem eigenen Public Key',
          antwort: 'dann könnte nur er selbst sie wieder aufmachen – mit seinem privaten schlüssel. der empfänger käme nicht ran 🙃' }
      ] },

    { typ: 'nachricht', text: 'und du machst die dann mit deinem privaten auf. der bleibt bei dir und geht nie weg' },

    { typ: 'merk', text: 'Verschlüsseln immer mit dem <b>[[Public Key]] des Empfängers</b>, entschlüsseln mit dessen <b>[[Private Key]]</b>. Merksatz: <b>Der Briefkasten ist öffentlich, der Briefkastenschlüssel nicht.</b>' },

    { typ: 'nachricht', text: 'der briefkasten 📮 den merk ich mir' },
    { typ: 'nachricht', text: 'das löst ja dann das problem von gestern oder? ich muss dir nix mehr heimlich übergeben' },

    { typ: 'frage', text: 'Was löst die asymmetrische Verschlüsselung?',
      optionen: [
        { text: 'Das Schlüsselaustauschproblem', richtig: true,
          antwort: 'genau. dein öffentlicher schlüssel darf überall rumliegen, der is ja öffentlich. da muss nix heimlich übergeben werden 🎉' },
        { text: 'Dass Verschlüsselung Rechenzeit kostet',
          antwort: 'eher im gegenteil, gleich mehr dazu 😅 das gelöste problem ist ein anderes' }
      ] },

    { typ: 'nachricht', text: 'dann nehmen wir doch einfach immer asymmetrisch?? wieso gibts das andere überhaupt noch' },

    { typ: 'frage', text: 'Warum verschlüsselt man nicht einfach alles asymmetrisch?',
      optionen: [
        { text: 'Weil es erheblich langsamer ist', richtig: true,
          antwort: 'ahh. also für ne kurze nachricht okay, aber für ne 4-gb-datei wär das zäh 🐌' },
        { text: 'Weil es unsicherer ist',
          antwort: 'nein, an der sicherheit liegts nicht – [[RSA]] mit 2048 bit ist solide. es ist die <b>geschwindigkeit</b>' },
        { text: 'Weil man dafür ein Zertifikat kaufen muss',
          antwort: '[[Zertifikat]]e sind ein eigenes thema (woher weiß ich, dass der schlüssel wirklich dir gehört). der grund hier ist aber ein ganz praktischer: tempo' }
      ] },

    { typ: 'nachricht', text: 'okay also symmetrisch is schnell aber hat das übergabeproblem' },
    { typ: 'nachricht', text: 'und asymmetrisch löst die übergabe aber is langsam' },
    { typ: 'nachricht', text: 'das schreit doch danach dass man beides kombiniert 🤔 geht das?' },

    { typ: 'frage', text: 'Wie kombiniert die hybride Verschlüsselung beides?',
      optionen: [
        { text: 'Die Daten symmetrisch, und der symmetrische Schlüssel wird asymmetrisch übertragen', richtig: true, norm: 'Hybride Verschlüsselung',
          antwort: 'das is ja clever 😮 die große datei schnell symmetrisch, und das kleine schlüsselchen packt man in den asymmetrischen umschlag' },
        { text: 'Die Daten asymmetrisch, und der private Schlüssel wird symmetrisch übertragen',
          antwort: 'au weia – der [[Private Key]] wird <b>nie</b> übertragen, der bleibt immer beim besitzer. und die großen daten asymmetrisch wäre genau das langsame, das wir vermeiden wollen' },
        { text: 'Man verschlüsselt zweimal hintereinander, erst symmetrisch, dann asymmetrisch',
          antwort: 'nah dran, aber nicht die daten zweimal. asymmetrisch verschlüsselt wird nur der <b>[[Sitzungsschlüssel]]</b> – die daten selbst nur einmal, symmetrisch' }
      ] },

    { typ: 'merk', text: '<b>[[Hybride Verschlüsselung]]:</b> Daten symmetrisch mit einem [[Sitzungsschlüssel]], der Sitzungsschlüssel asymmetrisch mit dem [[Public Key]] des Empfängers. Schnell <b>und</b> ohne Übergabeproblem – so arbeiten [[TLS]], [[SSH]] und [[PGP]].' },

    { typ: 'nachricht', text: 'drei tage und ich versteh wie https funktioniert. ich bin stolz auf mich 😤' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'jon-04',
  kontakt: 'jonas',
  titel: 'Kann man einen Hash entschlüsseln?',
  thema: 'Hashverfahren',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'frage die mich nicht loslässt 🤔' },
    { typ: 'nachricht', text: 'baumgart hat gesagt unsere passwörter liegen "gehasht" in der datenbank. und dass das sicherer is' },
    { typ: 'nachricht', text: 'aber wenn ich mich einlogge muss das system mein passwort doch wieder entschlüsseln um zu vergleichen? wie geht das' },

    { typ: 'frage', text: 'Kann man einen Hashwert wieder entschlüsseln?',
      optionen: [
        { text: 'Nein, Hashen ist eine Einwegfunktion', richtig: true, norm: 'Einwegfunktion',
          antwort: 'aber wie vergleicht das system dann?? 🤯' },
        { text: 'Ja, mit dem passenden Schlüssel',
          antwort: 'da ist der denkfehler: beim hashen gibts gar <b>keinen schlüssel</b>. [[Hashwert|Hashing]] ist keine verschlüsselung' },
        { text: 'Nur wenn man den Hash-Algorithmus kennt',
          antwort: 'den algorithmus kennt sowieso jeder, der ist öffentlich. trotzdem geht es nicht zurück – das ist ja gerade der sinn' }
      ] },

    { typ: 'nachricht', text: 'moment ich glaub ich habs' },

    { typ: 'frage', text: 'Wie prüft das System dann dein Passwort?',
      optionen: [
        { text: 'Es hasht die Eingabe und vergleicht die beiden Hashwerte', richtig: true,
          antwort: 'JA 🙌 es muss mein passwort gar nicht kennen. es rechnet einfach nochmal und guckt ob dasselbe rauskommt' },
        { text: 'Es entschlüsselt den gespeicherten Hash und vergleicht die Passwörter',
          antwort: 'das geht nicht – zurückrechnen ist ja unmöglich. der trick läuft andersrum' }
      ] },

    { typ: 'nachricht', text: 'okay das is eigentlich elegant. wenn uns jemand die datenbank klaut hat er nur die hashes und nicht die passwörter' },

    { typ: 'merk', text: '<b>[[Hashwert|Hashing]] ist keine Verschlüsselung:</b> kein [[Schlüssel]], keine Entschlüsselung. Geprüft wird, indem man die Eingabe erneut hasht und die Werte vergleicht.' },

    { typ: 'nachricht', text: 'baumgart hat auch noch was von "lawineneffekt" gesagt. klingt dramatisch 🌊' },

    { typ: 'frage', text: 'Was ist der Lawineneffekt?',
      optionen: [
        { text: 'Ein einziges geändertes Zeichen erzeugt einen völlig anderen Hashwert', richtig: true, norm: 'Lawineneffekt',
          antwort: 'also wenn ich in nem vertrag ein komma verschiebe sieht man das sofort am hash. praktisch für so prüfsachen ✅' },
        { text: 'Der Hashwert wird länger, je länger die Eingabe ist',
          antwort: 'genau das passiert <b>nicht</b> – der hash hat immer die gleiche länge, egal ob du ein wort oder ein ganzes buch reinwirfst. das ist eine andere eigenschaft' },
        { text: 'Viele Eingaben ergeben denselben Hashwert',
          antwort: 'das wäre eine [[Kollision]] – und das ist ein <b>problem</b>, kein feature. gute verfahren sind [[Kollisionsresistenz|kollisionsresistent]]' }
      ] },

    { typ: 'nachricht', text: 'und wie lang is so ein hash dann? kommt drauf an was ich reinwerf oder' },

    { typ: 'frage', text: 'Wie lang ist der Hashwert einer 2 GB großen Datei bei SHA-256?',
      optionen: [
        { text: '256 Bit – genauso lang wie bei einem einzelnen Buchstaben', richtig: true,
          antwort: 'immer gleich lang, egal was reinkommt 😲 okay, das heißt "feste länge". jetzt ergibt der begriff sinn' },
        { text: 'So lang wie die Datei selbst',
          antwort: 'dann wär der hash ja so groß wie die datei – völlig nutzlos zum mitschicken 😄 die ausgabe ist immer gleich lang' }
      ] },

    { typ: 'karte', titel: 'Die gebräuchlichen Hashverfahren', quelle: 'kryptohash' },

    { typ: 'nachricht', text: 'md5 und sha-1 rot 😬 die stehen aber bei uns noch in nem altem skript drin, hab ich gesehen' },
    { typ: 'nachricht', text: 'sag ich mal besser nadja bescheid' },

    { typ: 'merk', text: 'Eigenschaften einer guten [[Hashfunktion]]: <b>[[Einwegfunktion|einweg]] · feste Länge · deterministisch · [[Lawineneffekt]] · [[Kollisionsresistenz|kollisionsresistent]]</b>.' }
  ]
});
