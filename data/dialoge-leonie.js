/* ===========================================================
   AUDIT – data/dialoge-leonie.js
   Leonie, Azubi im 1. Lehrjahr. Duzt dich, fragt nach, bis
   sie es verstanden hat. Hier erklaerst du – wer erklaeren
   kann, hat es verstanden.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'leo-01',
  kontakt: 'leonie',
  titel: 'Was ist eigentlich ein Netzwerk?',
  thema: 'Netzarten',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'hi! darf ich dich was fragen? ich hab heute in der berufsschule mitgeschrieben und zu hause verstand ich meine eigene schrift nicht mehr 😅' },
    { typ: 'nachricht', text: 'da stand LAN, WAN, MAN, PAN, GAN. das sind fünf abkürzungen und ich hab keine ahnung in welcher reihenfolge die gehören' },

    { typ: 'frage', text: 'Wie sortierst du die Netzarten für sie?',
      optionen: [
        { text: 'Nach Größe: PAN – LAN – MAN – WAN – GAN', richtig: true, norm: 'Netzarten',
          antwort: 'Richtig, das ist die ganze Logik dahinter: [[PAN]] am Körper, [[LAN]] im Haus, [[MAN]] in der Stadt, [[WAN]] über Land, [[GAN]] um die Welt. Mit dieser Reihenfolge lässt sich jede Frage dazu beantworten.' },
        { text: 'Nach Geschwindigkeit, von langsam nach schnell',
          antwort: 'Das führt in die Irre: Eine Glasfaserstrecke im [[WAN]] kann schneller sein als ein altes [[LAN]]. Unterschieden werden die Begriffe nach der <b>Ausdehnung</b>.' },
        { text: 'Nach dem Alter der Technik',
          antwort: 'Mit dem Alter hat die Einteilung nichts zu tun. Es geht um die räumliche Größe.' }
      ] },

    { typ: 'nachricht', text: 'ahh ok. und was ist unser netz hier im haus dann? LAN oder WAN?' },
    { typ: 'nachricht', text: 'weil wir haben doch auch bremen dran hängen' },

    { typ: 'frage', text: 'Wie erklärst du ihr unseren Aufbau?',
      optionen: [
        { text: 'Zwei LANs – eines hier, eines in Bremen – die über eine WAN-Verbindung gekoppelt sind', richtig: true,
          antwort: 'Gut erklärt. Das [[LAN]] endet am Grundstück und liegt in eigener Verantwortung. Die Strecke dazwischen gehört dem Provider und ist damit [[WAN]] – bei uns als [[Standortvernetzung|Site-to-Site-VPN]] gebaut.' },
        { text: 'Ein großes LAN über beide Standorte',
          antwort: 'Für die Anwender fühlt es sich so an, und genau das ist der Zweck. Technisch sind es aber zwei [[LAN]]s plus eine Strecke über fremde Leitungen.' },
        { text: 'Ein WAN, weil wir ja ans Internet angeschlossen sind',
          antwort: 'Dann wäre jedes Netz mit Internetanschluss ein WAN. Die Netzart richtet sich nach der Ausdehnung des <b>eigenen</b> Netzes.' }
      ] },

    { typ: 'nachricht', text: 'macht sinn! letzte frage, versprochen' },
    { typ: 'nachricht', text: 'mein bruder hat in seiner wg einfach zwei rechner verbunden, ohne server. ist das auch ein netzwerk oder macht man das nicht?' },

    { typ: 'frage', text: 'Peer-to-Peer oder Client-Server – was sagst du ihr?',
      optionen: [
        { text: 'Beides sind Netzwerke: Peer-to-Peer ist für wenige Geräte praktisch, ab etwa zehn wird Client-Server nötig', richtig: true, norm: 'Client-Server',
          antwort: 'Genau die richtige Antwort. [[Peer-to-Peer]] ist schnell aufgebaut und kostet nichts, aber jeder verwaltet seine Freigaben selbst – Rechte und Sicherungen liegen verstreut. Beim [[Client-Server]]-Modell liegen Anmeldung, Daten und Backup zentral. Dafür ist der [[Server]] ein Einzelpunkt des Ausfalls.' },
        { text: 'Ohne Server ist es kein richtiges Netzwerk',
          antwort: 'Das stimmt nicht – [[Peer-to-Peer]] ist eine vollwertige, nur anders organisierte Bauform. Für zwei Rechner in einer WG ist sie die vernünftige Wahl.' },
        { text: 'Peer-to-Peer ist unsicher und sollte man nie nutzen',
          antwort: 'Zu pauschal. Die Schwäche liegt in der <b>Verwaltbarkeit</b>: Mit wachsender Gerätezahl weiß niemand mehr, wer was freigegeben hat. Bei zwei Geräten ist das überschaubar.' }
      ] },

    { typ: 'merk', text: 'Nach Größe: <b>[[PAN]] – [[LAN]] – [[MAN]] – [[WAN]] – [[GAN]]</b>. [[Peer-to-Peer]] ist gleichberechtigt und nur für kleine Netze sinnvoll, [[Client-Server]] zentral verwaltet und dafür mit dem [[Server]] als Einzelpunkt des Ausfalls.' },

    { typ: 'nachricht', text: 'du erklärst besser als mein buch 🙏 danke!' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'leo-02',
  kontakt: 'leonie',
  titel: 'Woher kommt meine IP-Adresse?',
  thema: 'DHCP',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'ich hab was ausprobiert! ipconfig eingegeben wie du gesagt hast' },
    { typ: 'nachricht', text: 'da steht 192.168.10.84. aber die hab ich nie eingestellt?? woher weiß mein rechner die' },

    { typ: 'frage', text: 'Wer hat ihr die Adresse gegeben?',
      optionen: [
        { text: 'Der DHCP-Server – er verteilt Adressen automatisch und nur auf Zeit', richtig: true, norm: 'DHCP',
          antwort: 'Richtig. [[DHCP]] vergibt die [[IP-Adresse]] als Leihgabe für eine bestimmte Zeit (Lease). Dein Rechner hat beim Start danach gefragt und sie bekommen.' },
        { text: 'Der Hersteller hat sie fest eingebaut',
          antwort: 'Fest eingebaut ist nur die [[MAC-Adresse]] der Netzkarte. Die [[IP-Adresse]] hängt am Netz, nicht am Gerät – deshalb ändert sie sich beim Umzug in ein anderes Netz.' },
        { text: 'Der Switch vergibt sie an seinen Ports',
          antwort: 'Ein [[Switch]] vergibt keine Adressen, er arbeitet auf [[OSI-Modell|Schicht 2]]. Das macht der [[DHCP]]-Server.' }
      ] },

    { typ: 'nachricht', text: 'ok und wie läuft das ab? der rechner weiß ja noch nix, nicht mal wen er fragen soll 🤔' },

    { typ: 'frage', text: 'Wie findet ein Rechner den DHCP-Server?',
      optionen: [
        { text: 'Er fragt per Broadcast ins ganze Netz, und der DHCP-Server antwortet mit einem Angebot', richtig: true, norm: 'DORA',
          antwort: 'Genau. Ein [[Broadcast]] geht an alle, weil der Client noch keine Adresse kennt. Der Ablauf hat vier Schritte: <b>Discover – Offer – Request – Acknowledge</b>. Erst danach hat der Rechner Adresse, [[Subnetzmaske]], [[Standardgateway]] und [[DNS]]-Server.' },
        { text: 'Die Adresse des DHCP-Servers ist in Windows voreingestellt',
          antwort: 'Das kann nicht sein, sonst müsste in jedem Netz der Welt derselbe Server stehen. Der Client sucht per [[Broadcast]].' },
        { text: 'Er probiert alle Adressen im Netz durch',
          antwort: 'Das wäre langsam und würde Konflikte erzeugen. Eine Broadcast-Anfrage erledigt das in Millisekunden.' }
      ] },

    { typ: 'nachricht', text: 'und was kommt da alles mit? nur die adresse?' },

    { typ: 'frage', text: 'Was verteilt DHCP außer der IP-Adresse?',
      optionen: [
        { text: 'Subnetzmaske, Standardgateway und DNS-Server', richtig: true,
          antwort: 'Richtig, und alle drei sind nötig: Die [[Subnetzmaske]] sagt, wo das eigene Netz endet, das [[Standardgateway]] ist der Weg nach draußen, der [[DNS]]-Server löst Namen auf. Fehlt eines davon, geht ein Teil nicht – und man sucht lange.' },
        { text: 'Nur die Adresse, den Rest stellt Windows selbst ein',
          antwort: 'Windows kann nicht wissen, wie euer Netz geschnitten ist und welcher [[Router]] der richtige ist. Das kommt alles vom [[DHCP]]-Server mit.' },
        { text: 'Adresse und Benutzerrechte',
          antwort: 'Rechte haben mit [[DHCP]] nichts zu tun, die kommen vom Verzeichnisdienst bei der Anmeldung.' }
      ] },

    { typ: 'nachricht', text: 'eine sache noch: mirko hat gesagt der drucker hat eine „feste" adresse. warum nicht auch per dhcp?' },

    { typ: 'frage', text: 'Warum bekommen Drucker und Server feste Adressen?',
      optionen: [
        { text: 'Weil andere Geräte sie finden müssen – ihre Adresse darf sich nicht ändern', richtig: true,
          antwort: 'Genau. Was gefunden werden muss, braucht eine verlässliche Adresse. Dein Rechner findet nur selbst hinaus, deshalb reicht ihm [[DHCP]]. Elegant ist übrigens eine <b>Reservierung</b> im DHCP: Das Gerät fragt ganz normal und bekommt immer dieselbe Adresse – die Zuordnung steht dann an einer Stelle.' },
        { text: 'Weil Drucker kein DHCP können',
          antwort: 'Können sie fast alle. Es geht nicht um Können, sondern um Verlässlichkeit der Adresse.' },
        { text: 'Weil feste Adressen schneller sind',
          antwort: 'Im Betrieb macht das keinen Unterschied. Es geht allein um die Auffindbarkeit.' }
      ] },

    { typ: 'karte', titel: 'Die Dienste dahinter', quelle: 'netzprotokolle',
      keys: ['dhcp', 'dns', 'arp'] },

    { typ: 'merk', text: '[[DHCP]] verteilt [[IP-Adresse]], [[Subnetzmaske]], [[Standardgateway]] und [[DNS]]-Server auf Zeit. Ablauf: <b>Discover – Offer – Request – Acknowledge</b>. Was gefunden werden muss (Server, Drucker, Netzgeräte), bekommt eine feste Adresse oder eine Reservierung.' },

    { typ: 'nachricht', text: 'jetzt ergibt das bild einen sinn! ich schreib mir das ab 📝' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'leo-03',
  kontakt: 'leonie',
  titel: 'Namen, Adressen und Türnummern',
  thema: 'DNS und Ports',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'frage von gestern abend: wenn jeder rechner eine ip hat, warum tippe ich dann namen in den browser und keine zahlen' },

    { typ: 'frage', text: 'Was macht DNS?',
      optionen: [
        { text: 'Es löst Namen in IP-Adressen auf – der Rechner braucht die Zahl, der Mensch den Namen', richtig: true, norm: 'DNS',
          antwort: 'Genau. [[DNS]] ist das Telefonbuch des Netzes. Dein Browser fragt den [[DNS]]-Server, bekommt die [[IP-Adresse]] und baut damit die Verbindung auf. Dass du Namen tippst, ist reine Bequemlichkeit – technisch läuft alles über Adressen.' },
        { text: 'Es verteilt die Namen an die Rechner im Netz',
          antwort: 'Namen vergibt die Administration, bei Geräten im Netz oft zusammen mit [[DHCP]]. DNS <b>übersetzt</b> nur.' },
        { text: 'Es sorgt dafür, dass eine Webseite schneller lädt',
          antwort: 'Nebenbei spart der Zwischenspeicher etwas Zeit, aber der Zweck ist die Übersetzung von Namen in Adressen.' }
      ] },

    { typ: 'nachricht', text: 'ok. aber jetzt die sache die ich nicht verstehe:' },
    { typ: 'nachricht', text: 'auf unserem server laufen doch webseite UND mail UND die warenwirtschaft. wenn alles die gleiche ip hat — wie weiß der server was ich will??' },

    { typ: 'frage', text: 'Wie erklärst du ihr die Portnummer?',
      optionen: [
        { text: 'Die IP-Adresse ist das Haus, der Port die Wohnungsnummer – sie sagt, welcher Dienst gemeint ist', richtig: true, norm: 'Port',
          antwort: 'Das Bild trifft es genau. Die [[IP-Adresse]] bringt die Daten zum Gerät ([[OSI-Modell|Schicht 3]]), der [[Port]] zum richtigen Dienst darauf ([[OSI-Modell|Schicht 4]]). Beides zusammen heißt [[Socket]].' },
        { text: 'Jeder Dienst bekommt eine eigene IP-Adresse',
          antwort: 'Das geht auch, ist aber nicht nötig und bei einem Server unüblich. Die Unterscheidung über die Portnummer reicht.' },
        { text: 'Der Server erkennt das am Programm, das anfragt',
          antwort: 'Woran denn? Über die Leitung kommen nur Pakete. Das Merkmal muss <b>im</b> Paket stehen – und das ist der [[Port]].' }
      ] },

    { typ: 'nachricht', text: 'aaah. und woher weiß mein browser welche nummer er nehmen muss, ich tippe da ja nix ein' },

    { typ: 'frage', text: 'Woher kennt der Browser den Port?',
      optionen: [
        { text: 'Standarddienste haben festgelegte Ports – HTTPS ist immer 443, das weiß jeder Browser', richtig: true, norm: 'Well-known Ports',
          antwort: 'Richtig. Die Ports 0 bis 1023 sind die <b>Well-known Ports</b> der Standarddienste und weltweit gleich vereinbart. Nur wenn ein Dienst auf einem anderen Port läuft, muss man ihn hinter einem Doppelpunkt mit angeben.' },
        { text: 'Der DNS-Server liefert den Port mit',
          antwort: '[[DNS]] liefert die [[IP-Adresse]], nicht den Port. Den kennt der Browser aus der Vereinbarung.' },
        { text: 'Der Browser probiert die Ports der Reihe nach durch',
          antwort: 'Bei 65536 möglichen Ports würde das dauern. Standarddienste sind fest vergeben – deshalb klappt es sofort.' }
      ] },

    { typ: 'nachricht', text: 'kannst du mir die wichtigsten aufschreiben? ich glaub die kommen in der prüfung' },

    { typ: 'mehrfach', text: 'Welche Zuordnungen stimmen?',
      optionen: [
        { text: 'HTTPS = 443', richtig: true },
        { text: 'SSH = 22', richtig: true },
        { text: 'DNS = 53', richtig: true },
        { text: 'SMTP = 25', richtig: true },
        { text: 'HTTP = 8080' },
        { text: 'FTP = 42' }
      ],
      antwortRichtig: 'Alles richtig. [[HTTP]] steht auf <b>80</b> – 8080 ist nur ein häufiger Ausweichport für Testsysteme und Proxys. [[FTP]] nutzt <b>20 und 21</b>, nicht 42. Die vier richtigen gehören zum Pflichtwissen.',
      antwortFalsch: 'Zwei der Zuordnungen stimmen nicht: [[HTTP]] steht auf <b>80</b> (8080 ist nur ein beliebter Ausweichport), und [[FTP]] nutzt <b>20 und 21</b>. Die anderen vier sind korrekt.' },

    { typ: 'karte', titel: 'Die wichtigsten Ports', quelle: 'netzprotokolle',
      keys: ['ftp', 'ssh', 'smtp', 'dns', 'dhcp', 'http', 'pop3', 'imap', 'https', 'rdp'] },

    { typ: 'merk', text: '[[DNS]] übersetzt Namen in [[IP-Adresse|IP-Adressen]]. Die IP-Adresse führt zum <b>Gerät</b>, der [[Port]] zum <b>Dienst</b> darauf; beides zusammen ist ein [[Socket]]. Pflichtports: 20/21 FTP · 22 SSH · 25 SMTP · 53 DNS · 67/68 DHCP · 80 HTTP · 110/143 POP3/IMAP · 443 HTTPS · 3389 [[RDP]].' },

    { typ: 'nachricht', text: 'perfekt, das kommt auf einen zettel über meinen schreibtisch 📌' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'leo-04',
  kontakt: 'leonie',
  titel: 'TCP oder UDP?',
  thema: 'Transportprotokolle',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'in der schule kam heute TCP und UDP. der lehrer sagt „udp ist unzuverlässig". aber wenn es schlechter ist, warum nimmt man es dann überhaupt?? 😵' },

    { typ: 'frage', text: 'Was macht TCP zuverlässig?',
      optionen: [
        { text: 'Verbindungsaufbau mit Handschlag, Bestätigung jedes Segments, Reihenfolge und Wiederholung bei Verlust', richtig: true, norm: 'TCP',
          antwort: 'Richtig, das sind die vier Dinge zusammen. [[TCP]] baut mit dem [[Drei-Wege-Handschlag]] auf (SYN – SYN/ACK – ACK), lässt sich jedes [[Segment]] bestätigen, sortiert in die richtige Reihenfolge und schickt Verlorenes erneut.' },
        { text: 'Es verschlüsselt die Daten',
          antwort: 'Verschlüsselung ist nicht die Aufgabe von TCP – die übernimmt TLS eine Schicht höher. TCP sichert die <b>Vollständigkeit</b>, nicht die Vertraulichkeit.' },
        { text: 'Es ist schneller als UDP',
          antwort: 'Genau umgekehrt: Die ganze Absicherung kostet Zeit und Verwaltungsaufwand. [[UDP]] ist schlanker.' }
      ] },

    { typ: 'nachricht', text: 'okay das klingt alles gut. also ist udp einfach schlechter?' },

    { typ: 'frage', text: 'Wofür ist UDP die bessere Wahl?',
      optionen: [
        { text: 'Für Telefonie und Video – dort stört eine Verzögerung mehr als ein verlorenes Paket', richtig: true, norm: 'UDP',
          antwort: 'Genau das ist der Punkt. Was nützt ein nachgeliefertes Sprachpaket, wenn das Gespräch schon weitergegangen ist? Ein kurzes Knacken stört weniger als eine Verzögerung. Deshalb nutzen Telefonie, Video und auch [[DNS]]-Anfragen [[UDP]].' },
        { text: 'Für Dateiübertragungen, weil die schneller gehen',
          antwort: 'Bei einer Datei darf kein Byte fehlen – sonst ist sie kaputt. Dafür ist [[TCP]] zuständig.' },
        { text: 'Für alles im lokalen Netz, weil da nichts verloren geht',
          antwort: 'Auch im [[LAN]] gehen Pakete verloren, etwa bei Überlast. Die Wahl richtet sich nach der Anwendung, nicht nach der Entfernung.' }
      ] },

    { typ: 'nachricht', text: 'macht sinn!! kannst du mir ein paar beispiele sagen was was nimmt' },

    { typ: 'mehrfach', text: 'Was nutzt üblicherweise TCP?',
      optionen: [
        { text: 'Abruf einer Webseite', richtig: true },
        { text: 'E-Mail-Versand', richtig: true },
        { text: 'Dateiübertragung', richtig: true },
        { text: 'Telefonie über IP' },
        { text: 'Videokonferenz' }
      ],
      antwortRichtig: 'Richtig. Überall, wo nichts fehlen darf, steht [[TCP]]: Web, Mail, Dateien. Telefonie und Video laufen über [[UDP]], weil dort die [[Latenz]] wichtiger ist als Vollständigkeit.',
      antwortFalsch: 'Die Leitfrage ist: Darf etwas fehlen? Bei Web, Mail und Dateien nicht – das ist [[TCP]]. Bei Telefonie und Video ist eine Verzögerung schlimmer als ein verlorenes Paket, deshalb [[UDP]].' },

    { typ: 'karte', titel: 'TCP und UDP', quelle: 'netzprotokolle',
      keys: ['tcp', 'udp', 'ip', 'icmp'] },

    { typ: 'nachricht', text: 'eine letzte sache, dann lass ich dich arbeiten 😄' },
    { typ: 'nachricht', text: 'warum heißt der verbindungsaufbau „drei-wege"? sind doch nur zwei rechner' },

    { typ: 'frage', text: 'Warum drei Schritte?',
      optionen: [
        { text: 'Weil beide Seiten den Empfang bestätigen müssen: SYN, SYN/ACK, ACK', richtig: true, norm: 'Drei-Wege-Handschlag',
          antwort: 'Richtig – die drei zählt die <b>Nachrichten</b>, nicht die Rechner. Der Client fragt an (SYN), der Server bestätigt und fragt zurück (SYN/ACK), der Client bestätigt (ACK). Erst danach weiß jede Seite sicher, dass die andere hört.' },
        { text: 'Weil der Router als dritter Beteiligter mitbestätigt',
          antwort: 'Der [[Router]] leitet nur weiter, er ist an der [[TCP]]-Verbindung nicht beteiligt. Die drei sind die Nachrichten zwischen den beiden Endpunkten.' },
        { text: 'Weil drei Versuche erlaubt sind, bevor abgebrochen wird',
          antwort: 'Wiederholungen gibt es auch, aber darum geht es hier nicht. Gemeint sind die drei Nachrichten des Verbindungsaufbaus.' }
      ] },

    { typ: 'merk', text: '[[TCP]] = verbindungsorientiert, bestätigt, sortiert, wiederholt – für Web, Mail, Dateien. [[UDP]] = verbindungslos, schlank, ohne Garantie – für Telefonie, Video, [[DNS]]. Aufbau bei TCP: <b>SYN – SYN/ACK – ACK</b>.' },

    { typ: 'nachricht', text: 'danke!! ich glaub ich hab das jetzt wirklich verstanden und nicht nur auswendig 💪' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'leo-05',
  kontakt: 'leonie',
  titel: 'Zwei Adressen für ein Gerät?',
  thema: 'MAC und IP',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'mich beschäftigt was seit gestern 🤔 mein laptop hat eine IP-adresse UND eine MAC-adresse' },
    { typ: 'nachricht', text: 'warum zwei? eine adresse sollte doch reichen um was zu finden' },

    { typ: 'frage', text: 'Wie erklärst du ihr die Doppelung?',
      optionen: [
        { text: 'Die MAC gilt nur im eigenen Segment, die IP über Netzgrenzen hinweg – zwei Reichweiten, zwei Adressen', richtig: true, norm: 'MAC und IP',
          antwort: 'Richtig. Die [[MAC-Adresse]] arbeitet auf [[OSI-Modell|Schicht 2]] und kommt nicht über den [[Router]] hinaus. Die [[IP-Adresse]] arbeitet auf Schicht 3 und ist weltweit zustellbar. Man braucht beide, weil sie verschiedene Aufgaben haben.' },
        { text: 'Die MAC ist die alte Technik, die IP hat sie abgelöst',
          antwort: 'Beide sind gleichzeitig im Einsatz, in jedem einzelnen Rahmen. Abgelöst hat da nichts etwas.' },
        { text: 'Die MAC ist für das Kabel, die IP für WLAN',
          antwort: 'Beide gelten für beides. Der Unterschied ist nicht das Medium, sondern die <b>Reichweite</b>.' }
      ] },

    { typ: 'nachricht', text: 'ok und was ist der unterschied ganz praktisch' },

    { typ: 'frage', text: 'Was ändert sich, wenn Leonie den Laptop mit nach Hause nimmt?',
      optionen: [
        { text: 'Die IP-Adresse ändert sich, die MAC-Adresse bleibt', richtig: true,
          antwort: 'Genau, und das ist das einprägsamste Beispiel: Die [[MAC-Adresse]] steckt in der Netzkarte und ist weltweit einmalig – sie klebt am <b>Gerät</b>. Die [[IP-Adresse]] bekommt sie zu Hause neu vom Router, denn sie gehört zum <b>Netz</b>.' },
        { text: 'Beide ändern sich',
          antwort: 'Die [[MAC-Adresse]] ist in der Hardware vergeben und ändert sich nicht. Neu ist nur die IP.' },
        { text: 'Beide bleiben gleich, der Laptop nimmt sein Netz mit',
          antwort: 'Dann gäbe es zu Hause und im Büro dieselbe Adresse – und zu Hause passte sie in kein Netz. Die [[IP-Adresse]] kommt vom jeweiligen [[DHCP]]-Server.' }
      ] },

    { typ: 'nachricht', text: 'aaaah das merk ich mir. und wie finden die sich dann gegenseitig' },

    { typ: 'frage', text: 'Wer übersetzt zwischen IP und MAC?',
      optionen: [
        { text: 'ARP – es fragt im Netz, welches Gerät eine bestimmte IP hat, und bekommt dessen MAC zurück', richtig: true, norm: 'ARP',
          antwort: 'Richtig. [[ARP]] ist die Brücke zwischen den beiden Schichten. Ohne sie wüsste der Rechner die IP des Ziels, könnte aber keinen [[Frame|Rahmen]] adressieren – und der [[Switch]] nichts damit anfangen.' },
        { text: 'DNS',
          antwort: '[[DNS]] übersetzt <b>Namen</b> in IP-Adressen. Eine Ebene tiefer, von IP zu MAC, arbeitet [[ARP]].' },
        { text: 'Der Switch rechnet die MAC aus der IP aus',
          antwort: 'Das geht nicht, die beiden haben nichts miteinander zu tun. Es muss jemand fragen – das macht [[ARP]].' }
      ] },

    { typ: 'nachricht', text: 'mirko hat gesagt eine MAC-adresse ist weltweit einmalig. wie geht das denn 😳' },

    { typ: 'frage', text: 'Wie wird die Einmaligkeit sichergestellt?',
      optionen: [
        { text: 'Die ersten drei Byte kennzeichnen den Hersteller, die letzten drei vergibt er fortlaufend', richtig: true,
          antwort: 'Richtig. 48 Bit, hexadezimal notiert: vordere Hälfte Herstellerkennung, hintere Hälfte laufende Nummer. Deshalb lässt sich an einer [[MAC-Adresse]] der Hersteller ablesen – praktisch, wenn man bei einer Störung wissen will, welches Gerät da hängt.' },
        { text: 'Ein weltweiter Server vergibt jede Adresse einzeln',
          antwort: 'Das wäre bei Milliarden Geräten nicht zu machen. Vergeben werden <b>Blöcke</b> an die Hersteller, der Rest läuft bei denen durch.' },
        { text: 'Sie wird zufällig erzeugt',
          antwort: 'Dann wäre sie nicht sicher einmalig. Die Hersteller bekommen feste Blöcke zugeteilt.' }
      ] },

    { typ: 'merk', text: '<b>Die [[MAC-Adresse]] klebt am Gerät, die [[IP-Adresse]] am Netz.</b> MAC = [[OSI-Modell|Schicht 2]], nur im eigenen Segment, 48 Bit hexadezimal mit Herstellerkennung vorn. IP = Schicht 3, über Netzgrenzen hinweg, wechselt beim Umzug. Übersetzt wird mit [[ARP]].' },

    { typ: 'nachricht', text: 'der satz mit klebt am gerät / klebt am netz ist super 😄 danke!' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'leo-06',
  kontakt: 'leonie',
  titel: 'Warum ist WLAN langsamer?',
  thema: 'Bandbreite',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'ich hab mich geärgert. auf dem karton vom access point steht 1200 Mbit. am kabel hab ich auch 1000. aber über wlan lädt alles gefühlt doppelt so lang' },
    { typ: 'nachricht', text: 'lügt der karton?' },

    { typ: 'frage', text: 'Warum erreicht WLAN die Angabe vom Karton nie?',
      optionen: [
        { text: 'Weil alle Geräte einer Funkzelle sich das Medium teilen – und der Wert für ein Gerät bei bester Verbindung gilt', richtig: true, norm: 'WLAN',
          antwort: 'Richtig, gleich zwei Gründe. [[WLAN]] ist ein <b>geteiltes</b> Medium wie früher der [[Hub]]: Nur einer sendet zur Zeit. Dazu ist die Angabe ein Bruttowert unter Idealbedingungen – Wände, Entfernung und fremde Funknetze ziehen ihn weiter herunter.' },
        { text: 'Weil WLAN immer verschlüsselt ist und das Rechenzeit kostet',
          antwort: 'Die Verschlüsselung erledigt die Hardware nebenbei, sie ist nicht der Engpass. Entscheidend ist das geteilte Medium.' },
        { text: 'Weil der Karton falsche Werte angibt',
          antwort: 'Der Wert stimmt – er gilt nur für Bedingungen, die im Lager nie herrschen: ein Gerät, kurze Entfernung, freie Sicht, kein fremdes Funknetz.' }
      ] },

    { typ: 'nachricht', text: 'okay das heißt am kabel hab ich die 1000 wirklich?' },

    { typ: 'frage', text: 'Was bekommt ein Gerät am Switch?',
      optionen: [
        { text: 'Die volle Rate für sich, in beide Richtungen gleichzeitig', richtig: true, norm: 'Duplex',
          antwort: 'Richtig. Jeder Port am [[Switch]] ist eine eigene [[Kollisionsdomäne]] und läuft in [[Duplex|Vollduplex]] – senden und empfangen gleichzeitig. Eng wird es erst weiter oben, wenn viele Geräte gleichzeitig zum selben Server wollen.' },
        { text: 'Die Rate geteilt durch die Zahl der angeschlossenen Geräte',
          antwort: 'Das galt beim [[Hub]]. Ein [[Switch]] gibt jedem Port seine eigene Leitung.' },
        { text: 'Die halbe Rate, weil Hin- und Rückweg sich teilen',
          antwort: 'Das wäre [[Duplex|Halbduplex]] – heute die Ausnahme und meist ein Konfigurationsfehler. Normal ist Vollduplex.' }
      ] },

    { typ: 'nachricht', text: 'gut. jetzt hab ich noch eine rechenfrage aus der schule und ich komm nicht drauf 😣' },
    { typ: 'nachricht', text: '„eine 600 MB große datei soll über eine 100 Mbit/s leitung übertragen werden. wie lange dauert das?"' },

    { typ: 'frage', text: 'Wie rechnest du?',
      optionen: [
        { text: '600 MB sind 4800 Mbit, geteilt durch 100 Mbit/s ergibt 48 Sekunden', richtig: true, norm: 'Bandbreite',
          antwort: 'Richtig. Der entscheidende Schritt ist die Umrechnung: <b>1 Byte = 8 Bit</b>, also 600 × 8 = 4800 Mbit. Geteilt durch 100 Mbit/s sind das 48 Sekunden. In der Praxis etwas mehr wegen der Protokollköpfe – in der Prüfung reicht der reine Rechenweg.' },
        { text: '600 geteilt durch 100 ergibt 6 Sekunden',
          antwort: 'Hier werden Megabyte und Megabit vermischt – Faktor acht daneben. Erst umrechnen, dann teilen.' },
        { text: '600 mal 100 ergibt 60.000 Sekunden',
          antwort: 'Die Rechenart passt nicht: Menge <b>geteilt</b> durch Rate ergibt die Zeit, nicht multipliziert.' }
      ] },

    { typ: 'nachricht', text: 'JA so steht das auch im lösungsheft 🎉 aber warum machen die das mit bit und byte so verwirrend' },

    { typ: 'frage', text: 'Was antwortest du ihr?',
      optionen: [
        { text: 'Leitungen werden traditionell in Bit pro Sekunde angegeben, Datenmengen in Byte – deshalb immer durch oder mal acht', richtig: true,
          antwort: 'Genau. Netzwerk- und Mobilfunkraten stehen in <b>Bit</b>, Dateigrößen und Speicher in <b>Byte</b>. Faustregel für den Alltag: Mbit/s durch 8 ergibt MByte/s. Aus 100 Mbit/s werden also rund 12,5 MByte/s.' },
        { text: 'Das ist ein Fehler im Lehrbuch, in der Praxis ist beides dasselbe',
          antwort: 'Es ist kein Fehler, sondern gewachsene Konvention – und sie gilt in der Praxis genauso. Wer sie ignoriert, verrechnet sich um den Faktor acht.' },
        { text: 'Groß geschriebenes B ist Bit, kleines b ist Byte',
          antwort: 'Genau umgekehrt: Kleines <b>b</b> steht für Bit, großes <b>B</b> für Byte. Mbit/s gegen MB – darauf lohnt es sich zu achten.' }
      ] },

    { typ: 'merk', text: '[[WLAN]] ist ein <b>geteiltes</b> Medium, der Kartonwert gilt brutto für ein Gerät; am [[Switch]] bekommt jeder Port die volle Rate in [[Duplex|Vollduplex]]. Rechenweg: <b>Datenmenge in MB × 8 ÷ Rate in Mbit/s = Sekunden</b>. Und: Mbit/s ÷ 8 = MByte/s.' },

    { typ: 'nachricht', text: 'okay ich schreib mir mal 8 ganz groß auf den zettel 😁' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'leo-07',
  kontakt: 'leonie',
  titel: 'Die Hausaufgabe mit dem Netzplan',
  thema: 'Netzplan lesen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'wir sollen für morgen einen netzplan für eine kleine firma zeichnen. 20 arbeitsplätze auf 2 etagen, ein server, internet, gäste-wlan' },
    { typ: 'nachricht', text: 'ich hab alles an einen switch gemalt. mein sitznachbar sagt das ist falsch 😕' },

    { typ: 'frage', text: 'Was fehlt in ihrer Zeichnung?',
      optionen: [
        { text: 'Die Hierarchie: ein Switch je Etage, darüber ein zentraler Verteiler – und ein Router zum Internet', richtig: true, norm: 'Baumtopologie',
          antwort: 'Richtig. Über zwei Etagen zeichnet man eine [[Baumtopologie]]: Etagenswitch oben, Etagenswitch unten, dazwischen die Steigleitung zum zentralen Verteiler. Dort hängen Server und [[Router]], hinter dem Router kommt das Internet.' },
        { text: 'Nichts – 20 Geräte passen an einen Switch',
          antwort: 'Rechnerisch ja, praktisch nicht: Dann liefen 20 Kabel quer durchs Treppenhaus, viele davon über 100 Meter. Pro Etage ein Verteiler ist der Grund für die ganze [[Strukturierte Verkabelung]].' },
        { text: 'Ein zweiter Server als Reserve',
          antwort: 'Das wäre [[Redundanz]] und war nicht gefragt. Es fehlt die Struktur der Verteiler.' }
      ] },

    { typ: 'nachricht', text: 'ah stimmt, die etagen!! und wo kommt das gäste-wlan hin' },

    { typ: 'frage', text: 'Wie zeichnet sie das Gästenetz ein?',
      optionen: [
        { text: 'Als eigenes VLAN auf derselben Verkabelung, mit eigener SSID und dem Weg nur ins Internet', richtig: true, norm: 'VLAN',
          antwort: 'Richtig. Ein [[VLAN]] ist genau dafür da: logisch getrennt, physisch dieselben Kabel und Switches. In der Zeichnung macht man das mit einer eigenen Farbe deutlich – und zeigt, dass der Weg am [[Router]] vorbei direkt ins Internet führt, nicht zum Server.' },
        { text: 'Mit einem eigenen Switch und eigener Verkabelung',
          antwort: 'Funktioniert, ist aber doppelte Technik für nichts. Genau diese Verdopplung erspart das [[VLAN]].' },
        { text: 'Der Access Point kommt direkt an den Internetrouter',
          antwort: 'Dann hätte man ein zweites Netz neben dem eigenen – mit zweitem [[DHCP]]-Server und allen Problemen daraus. Die Trennung macht man im [[VLAN]], nicht mit einem Nebeneingang.' }
      ] },

    { typ: 'nachricht', text: 'und was muss noch dran stehen damit es vollständig ist? der lehrer zieht immer punkte ab für sowas' },

    { typ: 'mehrfach', text: 'Was gehört in einen vollständigen Netzplan?',
      optionen: [
        { text: 'Die Adressbereiche der Netze mit Präfix', richtig: true },
        { text: 'Die Geräte mit Namen und ihrer Rolle', richtig: true },
        { text: 'Die VLANs, farblich oder beschriftet unterscheidbar', richtig: true },
        { text: 'Die Übergabepunkte nach außen: Router, Firewall, Internetanschluss', richtig: true },
        { text: 'Die Seriennummern aller Geräte' }
      ],
      antwortRichtig: 'Richtig. Adressen, Geräte, VLANs und die Übergänge nach außen – damit kann jemand, der das Haus nicht kennt, eine Störung einkreisen. Genau das ist der Zweck der [[Netzdokumentation]]. Seriennummern gehören in die Inventarliste, nicht in den Plan: Sie helfen bei der Störung nicht und machen das Bild unlesbar.',
      antwortFalsch: 'Fast. Ein Plan soll jemanden, der das Haus nicht kennt, zur Störung führen: Adressen, Geräte, VLANs, Übergänge nach außen. Seriennummern leisten das nicht – die gehören in die Inventarliste.' },

    { typ: 'karte', titel: 'Die Geräte für deine Zeichnung', quelle: 'netzgeraete',
      keys: ['switch', 'router', 'firewall', 'ap'] },

    { typ: 'nachricht', text: 'eine sache noch: muss ich das internet als wolke malen? 🌥️ das machen alle' },

    { typ: 'frage', text: 'Was bedeutet die Wolke eigentlich?',
      optionen: [
        { text: 'Alles, was man nicht selbst verantwortet – der Innenaufbau ist für den Plan egal', richtig: true,
          antwort: 'Genau das ist die Bedeutung, und sie ist nicht nur Gewohnheit: Die Wolke markiert die Grenze der eigenen Verantwortung. Hinter ihr liegen fremde [[Router]] und Leitungen, über die man nichts aussagen kann. Deshalb endet der eigene Plan am Übergabepunkt des Providers.' },
        { text: 'Sie steht für Cloud-Dienste',
          antwort: 'Das Symbol ist viel älter als der Begriff Cloud. Es meint schlicht: fremdes Netz, Innenleben unbekannt.' },
        { text: 'Sie zeigt eine drahtlose Verbindung',
          antwort: 'Funk zeichnet man mit Wellen am [[Access Point]]. Die Wolke steht für ein fremdes Netz.' }
      ] },

    { typ: 'merk', text: 'Ein Netzplan zeigt <b>Hierarchie</b> ([[Baumtopologie]]: Etagenverteiler, zentraler Verteiler, [[Router]]), die Adressbereiche mit Präfix, die [[VLAN]]s unterscheidbar und die Übergänge nach außen. Die Wolke markiert die Grenze der eigenen Verantwortung.' },

    { typ: 'nachricht', text: 'ich zeichne das nochmal neu. diesmal mit etagen und farben 🖍️ danke dir!' }
  ]
});
