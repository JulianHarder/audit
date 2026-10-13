/* ===========================================================
   AUDIT – data/lexikon-netz.js
   Kurzdefinitionen zum Themengebiet "netz".

   Haengt seine Gruppen und Eintraege an die Listen aus
   data/lexikon.js an und baut den Index danach neu auf.
   Alle Eintraege dieser Datei tragen gebiet: 'netz'.

   Sechs Begriffe stehen bewusst NICHT hier, sondern in
   data/lexikon.js mit 'netz' in der Gebietsliste: Server, DMZ,
   Firewall, Netzwerksegmentierung, VPN und Redundanz. Ein
   zweiter Eintrag mit demselben Schluessel wuerde den ersten
   im Index verdraengen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.lexikonGruppen = AUDIT.data.lexikonGruppen.concat([
  'Netze – Grundlagen',
  'Topologien',
  'Schichtenmodelle',
  'Übertragung und Geräte',
  'Adressierung und Subnetting',
  'Protokolle und Dienste',
  'WLAN und Standortvernetzung',
  'Fehlersuche im Netz',
  'Verkabelung und Planung',
  'Routing'
]);

/* Ab hier beginnen die eigenen Eintraege – die Marke braucht die
   Gebietszuweisung am Dateiende. */
AUDIT.data._netzAb = AUDIT.data.lexikon.length;

AUDIT.data.lexikon = AUDIT.data.lexikon.concat([

  /* ================= Netze – Grundlagen ================= */

  { key: 'Netzwerk', gruppe: 'Netze – Grundlagen', alias: ['Rechnernetz'],
    text: 'Mehrere Geräte, die über ein Übertragungsmedium verbunden sind, um Daten und Betriebsmittel gemeinsam zu nutzen.',
    bsp: 'Drucker, Dateiablage und Warenwirtschaft nutzen alle im Haus über dasselbe Netz.' },

  { key: 'LAN', gruppe: 'Netze – Grundlagen', alias: ['Local Area Network'],
    text: 'Lokales Netz auf einem begrenzten Gelände – ein Gebäude oder ein Betriebsgrundstück. Hohe Übertragungsrate, in eigener Verantwortung betrieben.',
    bsp: 'Das Netz in Halle und Büro von Rampe 7.' },

  { key: 'WAN', gruppe: 'Netze – Grundlagen', alias: ['Wide Area Network'],
    text: 'Weitverkehrsnetz über große Entfernungen, meist über Leitungen eines Providers.',
    bsp: 'Die Verbindung zwischen den Standorten Osnabrück und Bremen.',
    merk: 'Reihenfolge nach Größe: <b>PAN – LAN – MAN – WAN – GAN</b>.' },

  { key: 'MAN', gruppe: 'Netze – Grundlagen', alias: ['Metropolitan Area Network'],
    text: 'Netz in der Größe einer Stadt oder Region, zwischen LAN und WAN.' },

  { key: 'PAN', gruppe: 'Netze – Grundlagen', alias: ['Personal Area Network'],
    text: 'Netz im unmittelbaren Umfeld einer Person, meist drahtlos.',
    bsp: 'Headset und Handscanner per Bluetooth am Gerät.' },

  { key: 'GAN', gruppe: 'Netze – Grundlagen', alias: ['Global Area Network'],
    text: 'Weltumspannendes Netz aus vielen WANs. Das Internet ist das bekannteste.' },

  { key: 'Intranet', gruppe: 'Netze – Grundlagen',
    text: 'Internes Netz eines Unternehmens, das dieselbe Technik wie das Internet nutzt, aber nur von innen erreichbar ist.',
    bsp: 'Die interne Seite mit Schichtplänen und Formularen.' },

  { key: 'Extranet', gruppe: 'Netze – Grundlagen',
    text: 'Teil des [[Intranet]]s, der ausgewählten Partnern von außen geöffnet wird – kontrolliert und authentifiziert.',
    bsp: 'Ein Speditionspartner sieht den Status seiner Sendungen.' },

  { key: 'Client-Server', gruppe: 'Netze – Grundlagen', alias: ['Client-Server-Modell', 'Client'],
    text: 'Ein zentraler [[Server]] stellt Dienste bereit, die Clients anfragen. Rechte, Daten und Sicherung liegen zentral.',
    bsp: 'Alle Arbeitsplätze melden sich am Verzeichnisdienst an und greifen auf dieselbe Dateiablage zu.',
    merk: 'Zentral administrierbar und sicherbar – dafür ist der Server ein Einzelpunkt des Ausfalls.' },

  { key: 'Peer-to-Peer', gruppe: 'Netze – Grundlagen', alias: ['P2P', 'Arbeitsgruppe'],
    text: 'Alle Geräte sind gleichberechtigt und geben Freigaben selbst frei. Kein zentraler [[Server]].',
    bsp: 'Zwei Rechner im Büro teilen einen Ordner direkt miteinander.',
    merk: 'Billig und schnell aufgebaut, aber ab etwa zehn Geräten nicht mehr sinnvoll zu verwalten: Rechte und Sicherungen liegen überall verstreut.' },

  { key: 'Bandbreite', gruppe: 'Netze – Grundlagen', alias: ['Übertragungsrate', 'Datenrate'],
    text: 'Wie viele Daten je Zeiteinheit durch die Leitung gehen, angegeben in Bit pro Sekunde (Mbit/s, Gbit/s).',
    merk: 'Achtung bei der Einheit: <b>Mbit/s</b> sind Megabit, nicht Megabyte. 100 Mbit/s entsprechen rund 12,5 MByte/s.' },

  { key: 'Latenz', gruppe: 'Netze – Grundlagen', alias: ['Verzögerung', 'Round Trip Time', 'RTT'],
    text: 'Die Zeit, die ein Paket bis zum Ziel und zurück braucht. [[ping]] gibt sie in Millisekunden aus.',
    merk: 'Viel [[Bandbreite]] und hohe Latenz sind kein Widerspruch: Die Leitung ist breit, aber der Weg bleibt lang. Für Telefonie zählt die Latenz mehr als die Bandbreite.' },

  { key: 'Unicast', gruppe: 'Netze – Grundlagen',
    text: 'Eine Sendung an genau einen Empfänger. Der Normalfall.' },

  { key: 'Broadcast', gruppe: 'Netze – Grundlagen',
    text: 'Eine Sendung an alle Geräte im Netz. Jedes Gerät muss sie auswerten.',
    bsp: 'Eine [[DHCP]]-Anfrage geht als Broadcast los, weil der Client den Server noch nicht kennt.',
    merk: 'Ein [[Router]] leitet Broadcasts <b>nicht</b> weiter – er begrenzt damit die [[Broadcast-Domäne]].' },

  { key: 'Multicast', gruppe: 'Netze – Grundlagen',
    text: 'Eine Sendung an eine Gruppe von Empfängern, die sich dafür angemeldet haben. Adressbereich 224.0.0.0 bis 239.255.255.255 ([[IP-Klassen|Klasse D]]).' },

  { key: 'Broadcast-Domäne', gruppe: 'Netze – Grundlagen',
    text: 'Der Bereich, in dem ein [[Broadcast]] ankommt. Begrenzt wird er durch einen [[Router]] oder die Grenze eines [[VLAN]]s.',
    merk: 'Ein [[Switch]] trennt [[Kollisionsdomäne]]n, aber <b>keine</b> Broadcast-Domänen.' },

  { key: 'Kollisionsdomäne', gruppe: 'Netze – Grundlagen',
    text: 'Der Bereich, in dem zwei gleichzeitig gesendete Signale zusammenstoßen können. In einem [[Switch]] hat jeder Port seine eigene.',
    bsp: 'An einem [[Hub]] teilen sich alle Geräte eine Kollisionsdomäne – deshalb wird er bei Last langsam.' },

  /* ================= Topologien ================= */

  { key: 'Topologie', gruppe: 'Topologien', alias: ['Netztopologie'],
    text: 'Die Form, in der die Geräte verkabelt sind. Sie entscheidet darüber, was beim Ausfall einer Leitung passiert.' },

  { key: 'Sterntopologie', gruppe: 'Topologien', alias: ['Stern'],
    text: 'Jedes Gerät hat eine eigene Leitung zu einem zentralen [[Switch]]. Die übliche Form im heutigen [[LAN]].',
    merk: 'Ein defektes Kabel betrifft nur ein Gerät – dafür ist der zentrale Switch der Einzelpunkt des Ausfalls.' },

  { key: 'Bustopologie', gruppe: 'Topologien', alias: ['Bus'],
    text: 'Alle Geräte hängen an einer gemeinsamen Leitung und teilen sich das Medium.',
    merk: 'Eine Unterbrechung der Leitung legt das ganze Segment still. Historisch, heute nur noch als Lehrbeispiel.' },

  { key: 'Ringtopologie', gruppe: 'Topologien', alias: ['Ring'],
    text: 'Jedes Gerät ist mit zwei Nachbarn verbunden, der Kreis ist geschlossen. Als Doppelring ausfallsicher.' },

  { key: 'Vermaschtes Netz', gruppe: 'Topologien', alias: ['Masche', 'Maschentopologie', 'vermascht'],
    text: 'Viele oder alle Geräte sind direkt untereinander verbunden, es gibt mehrere Wege zum Ziel.',
    merk: 'Die ausfallsicherste und die teuerste Form – im [[WAN]] üblich, im [[LAN]] die Ausnahme.' },

  { key: 'Baumtopologie', gruppe: 'Topologien', alias: ['Baum', 'hierarchische Topologie'],
    text: 'Mehrere Sterne werden über übergeordnete Switches zusammengefasst. Die übliche Form in größeren Gebäuden.',
    bsp: 'Etagenswitch je Stockwerk, darüber ein zentraler Verteiler.' },

  /* ================= Schichtenmodelle ================= */

  { key: 'OSI-Modell', gruppe: 'Schichtenmodelle', alias: ['OSI', 'Schichtenmodell', 'ISO/OSI'],
    text: 'Referenzmodell mit sieben Schichten. Jede Schicht erledigt eine Aufgabe und nutzt dafür die Dienste der Schicht unter sich.',
    norm: 'ISO/IEC 7498',
    merk: 'Von unten nach oben: <b>Bitübertragung – Sicherung – Vermittlung – Transport – Sitzung – Darstellung – Anwendung</b>.' },

  { key: 'TCP/IP-Modell', gruppe: 'Schichtenmodelle', alias: ['DoD-Modell', 'TCP/IP-Referenzmodell'],
    text: 'Das praktisch genutzte Modell mit vier Schichten: Netzzugang, Internet, Transport und Anwendung.',
    merk: 'Netzzugang entspricht [[OSI-Modell|OSI]] 1–2, Internet der 3, Transport der 4, Anwendung den Schichten 5–7.' },

  { key: 'Kapselung', gruppe: 'Schichtenmodelle', alias: ['Encapsulation', 'Header'],
    text: 'Jede Schicht packt die Daten der Schicht über sich in einen eigenen Umschlag mit eigenem Kopf. Beim Empfänger wird in umgekehrter Reihenfolge ausgepackt.',
    bsp: 'Die HTTP-Anfrage steckt im TCP-Segment, das im IP-Paket, das im Ethernet-Rahmen.' },

  { key: 'Frame', gruppe: 'Schichtenmodelle', alias: ['Rahmen'],
    text: 'Die Dateneinheit der [[OSI-Modell|Schicht 2]]. Trägt [[MAC-Adresse|MAC-Adressen]] und eine Prüfsumme.' },

  { key: 'Paket', gruppe: 'Schichtenmodelle', alias: ['IP-Paket', 'Datagramm'],
    text: 'Die Dateneinheit der [[OSI-Modell|Schicht 3]]. Trägt Quell- und Ziel-[[IP-Adresse]].' },

  { key: 'Segment', gruppe: 'Schichtenmodelle',
    text: 'Die Dateneinheit der [[OSI-Modell|Schicht 4]]. Trägt Quell- und Ziel-[[Port]].',
    merk: 'Von oben nach unten: <b>Segment – Paket – Rahmen – Bit</b>.' },

  /* ================= Übertragung und Geräte ================= */

  { key: 'Ethernet', gruppe: 'Übertragung und Geräte', alias: ['802.3', 'IEEE 802.3'],
    text: 'Das Standardverfahren im kabelgebundenen [[LAN]]. Regelt Rahmenaufbau und Medienzugriff auf [[OSI-Modell|Schicht 1 und 2]].',
    norm: 'IEEE 802.3',
    bsp: 'Gigabit-Ethernet über Twisted-Pair ist der Normalfall am Arbeitsplatz.' },

  { key: 'Twisted-Pair', gruppe: 'Übertragung und Geräte', alias: ['TP-Kabel', 'Patchkabel', 'Cat'],
    text: 'Kupferkabel aus verdrillten Adernpaaren. Die Verdrillung dämpft Störungen. Kategorien Cat 5e, Cat 6, Cat 6a, Cat 7.',
    merk: 'Die maximale Länge einer Ethernet-Strecke über Twisted-Pair beträgt <b>100 Meter</b> – darüber hinaus braucht es Glasfaser oder einen weiteren Verteiler.' },

  { key: 'Lichtwellenleiter', gruppe: 'Übertragung und Geräte', alias: ['LWL', 'Glasfaser'],
    text: 'Überträgt Licht statt Strom. Große Längen, hohe Raten, völlig unempfindlich gegen elektromagnetische Störungen und ohne Potentialausgleichsprobleme.',
    bsp: 'Zwischen Bürogebäude und Halle, weil dort Stapler und Antriebe stören.' },

  { key: 'MAC-Adresse', gruppe: 'Übertragung und Geräte', alias: ['MAC', 'physikalische Adresse'],
    text: 'Weltweit eindeutige Hardwareadresse der Netzkarte, 48 Bit, hexadezimal notiert. Gilt nur im lokalen Netz.',
    bsp: '00-1B-44-11-3A-B7 – die ersten drei Byte kennzeichnen den Hersteller.',
    merk: 'Die MAC-Adresse klebt am Gerät ([[OSI-Modell|Schicht 2]]), die [[IP-Adresse]] am Netzanschluss ([[OSI-Modell|Schicht 3]]). Beim Umzug in ein anderes Netz ändert sich die IP, nicht die MAC.' },

  { key: 'Switch', gruppe: 'Übertragung und Geräte',
    text: 'Verteiler auf [[OSI-Modell|Schicht 2]]. Er lernt, welche [[MAC-Adresse]] an welchem Port hängt, und leitet jeden [[Frame|Rahmen]] nur dorthin weiter.',
    merk: 'Jeder Port ist eine eigene [[Kollisionsdomäne]]. [[Broadcast]]s gehen trotzdem an alle Ports – dafür braucht es [[VLAN]]s oder einen [[Router]].' },

  { key: 'Hub', gruppe: 'Übertragung und Geräte',
    text: 'Einfacher Verteiler auf [[OSI-Modell|Schicht 1]], der jedes Signal an alle Ports weitergibt.',
    merk: 'Alle Geräte teilen sich eine [[Kollisionsdomäne]] und die [[Bandbreite]]. Durch den [[Switch]] vollständig ersetzt.' },

  { key: 'Router', gruppe: 'Übertragung und Geräte',
    text: 'Gerät der [[OSI-Modell|Schicht 3]]. Verbindet verschiedene IP-Netze und wählt anhand der Ziel-[[IP-Adresse]] und seiner Routingtabelle den Weg.',
    merk: 'Der Router ist die Grenze der [[Broadcast-Domäne]]: Er leitet Broadcasts nicht weiter.' },

  { key: 'Repeater', gruppe: 'Übertragung und Geräte',
    text: 'Verstärkt ein Signal, um größere Entfernungen zu überbrücken. Arbeitet auf [[OSI-Modell|Schicht 1]] und wertet nichts aus.' },

  { key: 'Access Point', gruppe: 'Übertragung und Geräte', alias: ['AP', 'WLAN-Access-Point'],
    text: 'Bindet [[WLAN]]-Geräte in das kabelgebundene Netz ein. Arbeitet auf [[OSI-Modell|Schicht 2]].' },

  { key: 'Gateway', gruppe: 'Übertragung und Geräte',
    text: 'Allgemein jeder Übergang zwischen zwei Netzen oder Protokollwelten. Im Alltag gemeint ist meist das [[Standardgateway]].' },

  { key: 'Layer-3-Switch', gruppe: 'Übertragung und Geräte',
    text: '[[Switch]], der zusätzlich zwischen [[VLAN]]s routen kann. Verbindet die Geschwindigkeit eines Switches mit der Aufgabe eines [[Router]]s.' },

  { key: 'PoE', gruppe: 'Übertragung und Geräte', alias: ['Power over Ethernet'],
    text: 'Versorgt ein Gerät über das Netzwerkkabel mit Strom. Spart die Steckdose an der Decke.',
    norm: 'IEEE 802.3af / at / bt',
    bsp: '[[Access Point]]s und IP-Kameras in der Halle.' },

  { key: 'Patchfeld', gruppe: 'Übertragung und Geräte', alias: ['Patchpanel'],
    text: 'Im Verteilerschrank enden die festen Leitungen aus dem Gebäude. Von dort gehen kurze Patchkabel zum [[Switch]].' },

  { key: 'Duplex', gruppe: 'Übertragung und Geräte', alias: ['Vollduplex', 'Halbduplex'],
    text: 'Halbduplex: Senden und Empfangen nur abwechselnd. Vollduplex: gleichzeitig in beide Richtungen – an einem [[Switch]] der Normalfall.' },

  /* ================= Adressierung und Subnetting ================= */

  { key: 'IP-Adresse', gruppe: 'Adressierung und Subnetting', alias: ['IP'],
    text: 'Logische Adresse eines Netzanschlusses auf [[OSI-Modell|Schicht 3]]. Sie besteht immer aus einem <b>Netzanteil</b> und einem <b>Hostanteil</b>; welcher Teil welcher ist, sagt die [[Subnetzmaske]].',
    bsp: '192.168.10.37 mit der Maske 255.255.255.0: Netz 192.168.10.0, Host 37.' },

  { key: 'IPv4', gruppe: 'Adressierung und Subnetting',
    text: '32 Bit lange Adresse, notiert als vier Dezimalzahlen von 0 bis 255. Das ergibt rund 4,3 Milliarden Adressen – zu wenig für die heutige Welt.',
    merk: 'Der Adressmangel wird mit [[NAT]] und privaten Adressen überbrückt, gelöst wird er durch [[IPv6]].' },

  { key: 'IPv6', gruppe: 'Adressierung und Subnetting',
    text: '128 Bit lange Adresse, notiert als acht hexadezimale Gruppen. Führende Nullen dürfen weg, eine Folge von Nullgruppen wird zu "::" verkürzt.',
    bsp: '2001:0db8:0000:0000:0000:0000:0000:0001 kurz 2001:db8::1',
    merk: 'IPv6 braucht kein [[NAT]] und kein [[ARP]] mehr; die Adressmenge gilt als praktisch unerschöpflich.' },

  { key: 'Dual-Stack', gruppe: 'Adressierung und Subnetting',
    text: 'Ein Gerät spricht gleichzeitig [[IPv4]] und [[IPv6]]. Der übliche Weg beim Umstieg, weil nichts auf einmal umgestellt werden muss.' },

  { key: 'Subnetzmaske', gruppe: 'Adressierung und Subnetting', alias: ['Netzmaske', 'Maske'],
    text: 'Trennt in der [[IP-Adresse]] den Netzanteil vom Hostanteil. Alle Eins-Bits von links kennzeichnen den Netzanteil.',
    bsp: '255.255.255.0 bedeutet: die ersten drei Byte sind Netz, das letzte ist Host.',
    merk: 'Zwei Geräte sind nur dann direkt im selben Netz, wenn ihr <b>Netzanteil übereinstimmt</b>. Sonst muss der [[Router]] ran – auch wenn sie am selben Switch stecken.' },

  { key: 'CIDR', gruppe: 'Adressierung und Subnetting', alias: ['Präfix', 'Präfixschreibweise', 'Suffix'],
    text: 'Kurzschreibweise für die [[Subnetzmaske]]: Die Zahl hinter dem Schrägstrich gibt an, wie viele Bits zum Netzanteil gehören.',
    bsp: '/24 entspricht 255.255.255.0, /26 entspricht 255.255.255.192.' },

  { key: 'Netzadresse', gruppe: 'Adressierung und Subnetting',
    text: 'Die erste Adresse eines Subnetzes, bei der alle Host-Bits auf 0 stehen. Bezeichnet das Netz selbst und wird keinem Gerät gegeben.' },

  { key: 'Broadcast-Adresse', gruppe: 'Adressierung und Subnetting',
    text: 'Die letzte Adresse eines Subnetzes, bei der alle Host-Bits auf 1 stehen. Spricht alle Geräte des Netzes an und wird keinem Gerät gegeben.',
    merk: 'Deshalb gilt: <b>nutzbare Hosts = 2^Hostbits − 2</b>. Ein /24 hat 256 Adressen, aber nur 254 Geräte.' },

  { key: 'Standardgateway', gruppe: 'Adressierung und Subnetting', alias: ['Default Gateway'],
    text: 'Die Adresse des [[Router]]s, an den ein Gerät alles schickt, was nicht im eigenen Subnetz liegt.',
    merk: 'Fehlt oder ist es falsch, funktioniert das lokale Netz noch, aber nichts von außen. Ein klassischer Befund in der [[Fehlersuche]].' },

  { key: 'Private IP-Adresse', gruppe: 'Adressierung und Subnetting', alias: ['privater Adressbereich', 'RFC 1918'],
    text: 'Adressbereiche, die im Internet nicht geroutet werden und deshalb in jedem Haus frei verwendbar sind: 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16.',
    norm: 'RFC 1918',
    merk: 'Nach außen braucht es dafür [[NAT]]. Private Adressen sind <b>keine</b> Sicherheitsmaßnahme, sie sparen nur öffentliche Adressen.' },

  { key: 'IP-Klassen', gruppe: 'Adressierung und Subnetting', alias: ['Adressklassen', 'Klasse A', 'Klasse C'],
    text: 'Die historische Einteilung in Klasse A (/8), B (/16) und C (/24) plus Klasse D für [[Multicast]] und E für Versuche. Heute durch [[CIDR]] ersetzt, in Prüfungen aber weiter gefragt.' },

  { key: 'Subnetting', gruppe: 'Adressierung und Subnetting',
    text: 'Ein Netz wird durch Verlängerung der [[Subnetzmaske]] in kleinere Teilnetze zerlegt. Jedes zusätzliche Netzbit halbiert die Hostzahl und verdoppelt die Zahl der Subnetze.',
    bsp: 'Aus einem /24 werden mit /26 vier Subnetze mit je 62 nutzbaren Adressen.',
    merk: 'Rechenweg: Hostbits = 32 − Präfix, nutzbare Hosts = 2^Hostbits − 2.' },

  { key: 'VLSM', gruppe: 'Adressierung und Subnetting', alias: ['variable Subnetzmaske', 'variable length subnet mask'],
    text: 'Aufteilung eines Bereichs in <b>unterschiedlich große</b> Subnetze, passend zum jeweiligen Bedarf. Jedes Teilnetz bekommt die kleinste Maske, die ausreicht.',
    bsp: 'Aus einem /24: Büro /25 (126), Lager /26 (62), Technik /27 (30), Punkt-zu-Punkt-Strecke /30 (2).',
    merk: 'Regel: <b>immer mit dem größten Bedarf anfangen</b>. Fängt man klein an, liegen die großen Blöcke später quer und man muss von vorn beginnen.' },

  { key: 'NAT', gruppe: 'Adressierung und Subnetting', alias: ['Network Address Translation', 'PAT'],
    text: 'Der [[Router]] tauscht die [[Private IP-Adresse|private]] Quelladresse gegen seine öffentliche aus und merkt sich die Zuordnung. Viele Geräte teilen so eine öffentliche Adresse.',
    bsp: 'Alle 60 Rechner bei Rampe 7 erscheinen im Internet unter derselben Adresse.',
    merk: 'Dass die Unterscheidung über die Portnummer läuft, heißt genauer <b>PAT</b> – umgangssprachlich sagt jeder NAT.' },

  { key: 'Portweiterleitung', gruppe: 'Adressierung und Subnetting', alias: ['Port Forwarding'],
    text: 'Umkehrung von [[NAT]]: Anfragen aus dem Internet auf einen bestimmten [[Port]] werden an einen festen internen Rechner weitergegeben.',
    merk: 'Macht einen internen Dienst von außen erreichbar – und damit angreifbar. Gehört in die [[DMZ]], nicht ins Büronetz.' },

  { key: 'APIPA', gruppe: 'Adressierung und Subnetting', alias: ['169.254', 'Link-Local'],
    text: 'Adresse aus 169.254.0.0/16, die sich ein Gerät selbst gibt, wenn kein [[DHCP]]-Server antwortet.',
    merk: 'Eine 169.254er-Adresse in [[ipconfig]] ist der deutlichste Hinweis überhaupt: <b>Der DHCP-Server war nicht erreichbar.</b>' },

  { key: 'Loopback', gruppe: 'Adressierung und Subnetting', alias: ['127.0.0.1', 'localhost'],
    text: 'Die Adresse des eigenen Geräts. Daten an 127.0.0.1 verlassen die Netzkarte nie.',
    bsp: 'Ein erfolgreicher ping auf 127.0.0.1 beweist nur, dass der eigene IP-Stack läuft – über das Netz sagt er nichts.' },

  /* ================= Protokolle und Dienste ================= */

  { key: 'Protokoll', gruppe: 'Protokolle und Dienste', alias: ['Netzprotokoll'],
    text: 'Vereinbarte Regeln darüber, wie zwei Seiten Daten austauschen: Format, Reihenfolge, Bestätigungen, Fehlerbehandlung.' },

  { key: 'TCP', gruppe: 'Protokolle und Dienste', alias: ['Transmission Control Protocol'],
    text: 'Verbindungsorientiertes Transportprotokoll. Baut die Verbindung mit dem [[Drei-Wege-Handschlag]] auf, bestätigt jedes Segment, stellt die Reihenfolge wieder her und wiederholt Verlorenes.',
    bsp: 'Web, E-Mail, Dateiübertragung – überall, wo nichts fehlen darf.',
    merk: 'Zuverlässig, aber mit Verwaltungsaufwand. Gegenstück: [[UDP]].' },

  { key: 'UDP', gruppe: 'Protokolle und Dienste', alias: ['User Datagram Protocol'],
    text: 'Verbindungsloses Transportprotokoll. Schickt die Daten los, ohne Verbindungsaufbau und ohne Bestätigung.',
    bsp: 'Sprach- und Videoübertragung, [[DNS]]-Anfragen, Zeitabgleich.',
    merk: 'Bei Telefonie ist ein verlorenes Paket besser als ein nachgeliefertes: Ein kurzes Knacken stört weniger als eine Verzögerung.' },

  { key: 'Drei-Wege-Handschlag', gruppe: 'Protokolle und Dienste', alias: ['Three-Way-Handshake', 'Handshake'],
    text: 'Der Verbindungsaufbau bei [[TCP]]: SYN – SYN/ACK – ACK. Erst danach fließen Nutzdaten.' },

  { key: 'Port', gruppe: 'Protokolle und Dienste', alias: ['Portnummer'],
    text: 'Nummer von 0 bis 65535 auf [[OSI-Modell|Schicht 4]], die angibt, welcher Dienst auf einem Gerät gemeint ist.',
    bsp: 'IP-Adresse ist das Haus, Port die Wohnungsnummer.',
    merk: '0–1023 sind die <b>Well-known Ports</b> der Standarddienste, 1024–49151 registriert, darüber dynamisch für die eigene Seite der Verbindung.' },

  { key: 'Socket', gruppe: 'Protokolle und Dienste',
    text: 'Die Kombination aus [[IP-Adresse]] und [[Port]] – damit ist ein Kommunikationsendpunkt eindeutig benannt.',
    bsp: '192.168.10.5:443' },

  { key: 'IP-Protokoll', gruppe: 'Protokolle und Dienste', alias: ['Internet Protocol'],
    text: 'Das Protokoll der [[OSI-Modell|Schicht 3]]: adressiert Pakete und bringt sie über Netzgrenzen – ohne Garantie für Ankunft und Reihenfolge. Dafür ist [[TCP]] zuständig.' },

  { key: 'ICMP', gruppe: 'Protokolle und Dienste',
    text: 'Melde- und Diagnoseprotokoll auf [[OSI-Modell|Schicht 3]]. Transportiert keine Nutzdaten, sondern Statusmeldungen wie "Ziel nicht erreichbar".',
    bsp: '[[ping]] und [[tracert]] arbeiten mit ICMP.' },

  { key: 'ARP', gruppe: 'Protokolle und Dienste', alias: ['Address Resolution Protocol'],
    text: 'Ermittelt im lokalen Netz zu einer bekannten [[IP-Adresse]] die zugehörige [[MAC-Adresse]] – per [[Broadcast]]: "Wer hat 192.168.10.1?"',
    merk: 'Ohne ARP kommt kein Rahmen los: Die IP steht fest, aber der [[Switch]] braucht die MAC.' },

  { key: 'DHCP', gruppe: 'Protokolle und Dienste', alias: ['Dynamic Host Configuration Protocol'],
    text: 'Vergibt automatisch [[IP-Adresse]], [[Subnetzmaske]], [[Standardgateway]] und [[DNS]]-Server. Der Client fragt per [[Broadcast]], der Server antwortet mit einem Angebot auf Zeit (Lease).',
    merk: 'Ablauf: <b>Discover – Offer – Request – Acknowledge</b>. Geräte, die immer erreichbar sein müssen (Server, Drucker, Switches), bekommen trotzdem feste Adressen oder eine Reservierung.' },

  { key: 'DNS', gruppe: 'Protokolle und Dienste', alias: ['Domain Name System', 'Namensauflösung'],
    text: 'Löst Namen in [[IP-Adresse]]n auf. Der Client fragt seinen DNS-Server, der fragt bei Bedarf weiter, bis die zuständige Zone antwortet.',
    bsp: 'Aus rampe7.example wird 203.0.113.40.',
    merk: 'Typischer Befund: Die IP-Adresse ist erreichbar, der Name nicht – dann steckt der Fehler im DNS, nicht in der Leitung.' },

  { key: 'FQDN', gruppe: 'Protokolle und Dienste', alias: ['Hostname', 'vollqualifizierter Name'],
    text: 'Der vollständige Name eines Geräts samt Domäne, von links nach rechts immer allgemeiner.',
    bsp: 'lager-sw01.rampe7.example' },

  { key: 'HTTP', gruppe: 'Protokolle und Dienste',
    text: 'Protokoll für den Abruf von Webseiten, [[Port]] 80. HTTPS ist dasselbe über eine mit TLS verschlüsselte Verbindung, [[Port]] 443.' },

  { key: 'FTP', gruppe: 'Protokolle und Dienste',
    text: 'Protokoll zur Dateiübertragung, [[Port]] 20 und 21. Überträgt Anmeldedaten und Inhalte im Klartext.',
    merk: 'Heute durch <b>SFTP</b> (über [[Port]] 22) oder FTPS ersetzt. Ein offenes FTP im Internet ist ein Befund, kein Dienst.' },

  { key: 'RDP', gruppe: 'Protokolle und Dienste', alias: ['Remotedesktop'],
    text: 'Fernzugriff auf einen Windows-Desktop, [[Port]] 3389.',
    merk: 'Gehört <b>nie</b> direkt ins Internet: Offene RDP-Ports werden binnen Stunden automatisiert durchprobiert. Der Weg von außen führt über ein [[VPN]].' },

  { key: 'SNMP', gruppe: 'Protokolle und Dienste', alias: ['Netzüberwachung', 'Monitoring'],
    text: 'Protokoll zur Überwachung und Verwaltung von Netzgeräten, [[Port]] 161 und 162. Ein Überwachungssystem fragt damit Auslastung, Portzustände und Temperaturen ab und meldet bei Schwellwerten.',
    merk: 'Der Nutzen zeigt sich erst bei der Störung: Mit aufgezeichneten Werten sieht man, <b>wann</b> es anfing – ohne sie rät man.' },

  { key: 'Proxy', gruppe: 'Protokolle und Dienste',
    text: 'Stellvertreter, der Anfragen für die Clients nach außen führt. Kann zwischenspeichern, filtern und protokollieren.',
    bsp: 'Ein Webproxy sperrt bestimmte Seiten und entlastet die Leitung durch Zwischenspeicher.' },

  /* ================= WLAN und Standortvernetzung ================= */

  { key: 'WLAN', gruppe: 'WLAN und Standortvernetzung', alias: ['Wi-Fi', '802.11', 'Funknetz'],
    text: 'Drahtloses [[LAN]] nach IEEE 802.11. Alle Geräte einer Funkzelle teilen sich das Medium – wie früher am [[Hub]].',
    norm: 'IEEE 802.11',
    merk: 'Bequem, aber ein <b>geteiltes</b> Medium: Mehr Geräte heißt weniger [[Bandbreite]] pro Gerät. Für feste Arbeitsplätze bleibt Kabel überlegen.' },

  { key: 'SSID', gruppe: 'WLAN und Standortvernetzung',
    text: 'Der Name eines Funknetzes. Mehrere [[Access Point]]s können dieselbe SSID ausstrahlen, damit Geräte beim Gehen übernommen werden ([[Roaming]]).',
    merk: 'Die SSID zu verstecken ist keine Sicherheitsmaßnahme – der Name steht trotzdem im Funkverkehr.' },

  { key: 'Funkkanal', gruppe: 'WLAN und Standortvernetzung', alias: ['Kanal', '2,4 GHz', '5 GHz'],
    text: '2,4 GHz reicht weit und durch Wände, hat aber nur drei überlappungsfreie Kanäle (1, 6, 11) und ist meist überfüllt. 5 GHz bietet viele Kanäle und mehr Tempo bei geringerer Reichweite.',
    merk: 'Benachbarte [[Access Point]]s brauchen <b>unterschiedliche Kanäle</b>, sonst stören sie sich gegenseitig.' },

  { key: 'Roaming', gruppe: 'WLAN und Standortvernetzung',
    text: 'Der Wechsel eines Geräts von einem [[Access Point]] zum nächsten innerhalb derselben [[SSID]], ohne dass die Verbindung abreißt.',
    bsp: 'Der Handscanner des Staplerfahrers quer durch die Halle.' },

  { key: 'VLAN', gruppe: 'WLAN und Standortvernetzung', alias: ['virtuelles LAN', '802.1Q'],
    text: 'Logische Aufteilung eines [[Switch]]es in mehrere getrennte Netze. Geräte verschiedener VLANs erreichen sich nur über einen [[Router]].',
    norm: 'IEEE 802.1Q',
    bsp: 'VLAN 10 Büro, VLAN 20 Lagertechnik, VLAN 30 Gäste – alles auf derselben Verkabelung.',
    merk: 'Trennt [[Broadcast-Domäne]]n ohne zweites Kabelnetz und ist damit die praktische Form der [[Netzwerksegmentierung]].' },

  { key: 'Trunk', gruppe: 'WLAN und Standortvernetzung', alias: ['Tagged Port'],
    text: 'Eine Leitung zwischen zwei Switches, die mehrere [[VLAN]]s gleichzeitig trägt. Jeder Rahmen wird dazu mit seiner VLAN-Nummer markiert.' },

  { key: 'Standortvernetzung', gruppe: 'WLAN und Standortvernetzung', alias: ['Site-to-Site-VPN', 'Standortkopplung'],
    text: 'Dauerhafte Verbindung zweier Firmenstandorte. Üblich als [[VPN]]-Tunnel über das Internet zwischen den beiden Routern – für die Anwender unsichtbar.',
    merk: 'Site-to-Site verbindet <b>Netze</b>, der Homeoffice-Zugang verbindet <b>ein Gerät</b> mit einem Netz.' },

  { key: 'SLA', gruppe: 'WLAN und Standortvernetzung', alias: ['Service Level Agreement'],
    text: 'Vertraglich zugesagte Dienstgüte: Verfügbarkeit, Reaktions- und Wiederherstellzeiten. Bei Leitungen der entscheidende Preisunterschied.',
    bsp: 'Eine Geschäftskundenleitung mit vier Stunden Entstörzeit kostet ein Mehrfaches eines Privatanschlusses – bezahlt wird die Zusage, nicht das Tempo.' },

  { key: 'Redundante Anbindung', gruppe: 'WLAN und Standortvernetzung', alias: ['Backup-Leitung', 'Failover'],
    text: 'Zweite Leitung, die den Betrieb übernimmt, wenn die erste ausfällt – möglichst über einen anderen Anbieter und einen anderen Weg ins Haus.',
    merk: 'Zwei Leitungen desselben Anbieters im selben Kabelgraben sind keine [[Redundanz]]: Ein Baggerbiss trifft beide.' },

  /* ================= Fehlersuche im Netz ================= */

  { key: 'Fehlersuche', gruppe: 'Fehlersuche im Netz', alias: ['Troubleshooting', 'Störungssuche'],
    text: 'Systematisches Vorgehen von unten nach oben durch die Schichten: Steckt das Kabel, leuchtet der Port, gibt es eine Adresse, antwortet das Gateway, löst der Name auf, läuft der Dienst?',
    merk: 'Immer zuerst eingrenzen: <b>ein Gerät, ein Raum oder das ganze Haus?</b> Die Antwort halbiert die Arbeit.' },

  { key: 'ping', gruppe: 'Fehlersuche im Netz',
    text: 'Schickt über [[ICMP]] eine Anfrage und misst, ob und wie schnell geantwortet wird.',
    merk: 'Reihenfolge von innen nach außen: erst [[Loopback|127.0.0.1]], dann die eigene Adresse, dann das [[Standardgateway]], dann eine öffentliche IP, zuletzt ein Name. Wo es kippt, sitzt der Fehler.' },

  { key: 'tracert', gruppe: 'Fehlersuche im Netz', alias: ['traceroute'],
    text: 'Zeigt jede Station auf dem Weg zum Ziel samt Laufzeit. So wird sichtbar, an welchem Punkt der Weg abbricht oder langsam wird.' },

  { key: 'ipconfig', gruppe: 'Fehlersuche im Netz', alias: ['ip a', 'ifconfig'],
    text: 'Zeigt die eigene Netzkonfiguration: [[IP-Adresse]], [[Subnetzmaske]], [[Standardgateway]], [[DNS]]-Server, [[MAC-Adresse]].',
    bsp: 'ipconfig /all zeigt alles, /release und /renew holen eine neue [[DHCP]]-Adresse.' },

  { key: 'nslookup', gruppe: 'Fehlersuche im Netz', alias: ['dig'],
    text: 'Fragt den [[DNS]]-Server direkt und zeigt, welche Adresse er zu einem Namen liefert. Trennt Namensauflösung von Erreichbarkeit.' },

  { key: 'netstat', gruppe: 'Fehlersuche im Netz', alias: ['ss'],
    text: 'Listet offene [[Port]]s und bestehende Verbindungen des eigenen Rechners.' },

  { key: 'Doppelte IP-Adresse', gruppe: 'Fehlersuche im Netz', alias: ['IP-Konflikt', 'Adresskonflikt'],
    text: 'Zwei Geräte im selben Netz haben dieselbe [[IP-Adresse]]. Die Verbindungen beider werden unzuverlässig und wechseln scheinbar zufällig.',
    bsp: 'Entsteht meist dadurch, dass ein Gerät eine feste Adresse aus dem [[DHCP]]-Bereich erhält.',
    merk: 'Der Konflikt lässt sich über die Zuordnung in <b>arp -a</b> auf die beteiligten [[MAC-Adresse|MAC-Adressen]] und damit auf die Geräte zurückführen.' },

  { key: 'Schleife', gruppe: 'Fehlersuche im Netz', alias: ['Loop', 'Broadcast-Storm'],
    text: 'Zwei Switches sind doppelt verbunden. [[Broadcast]]s kreisen endlos, die Portlampen flackern gleichmäßig, das Segment steht still.',
    merk: 'Dagegen hilft <b>[[Spanning Tree]]</b>: Das Protokoll erkennt den Kreis und schaltet eine Leitung in Reserve.' },

  { key: 'Spanning Tree', gruppe: 'Fehlersuche im Netz', alias: ['STP', 'RSTP', '802.1D'],
    text: 'Protokoll, das in einem mehrfach verbundenen Switch-Netz eine [[Schleife|Schleife]] erkennt und überzählige Wege deaktiviert – bis sie als Ersatz gebraucht werden.',
    norm: 'IEEE 802.1D / 802.1w' },

  { key: 'Rogue DHCP', gruppe: 'Fehlersuche im Netz', alias: ['fremder DHCP-Server'],
    text: 'Ein nicht vorgesehenes Gerät verteilt [[DHCP]]-Adressen – meist ein privat mitgebrachter Router. Betroffene Geräte erhalten falsche Adressen und ein falsches [[Standardgateway]].',
    merk: 'Typisches Bild: Ein Teil der Rechner geht, ein Teil nicht, abhängig davon, wer zuerst geantwortet hat.' },

  { key: 'Flooding', gruppe: 'Fehlersuche im Netz', alias: ['Fluten'],
    text: 'Kennt ein [[Switch]] die Ziel-[[MAC-Adresse]] noch nicht, schickt er den [[Frame|Rahmen]] zur Sicherheit an alle Ports außer den Eingangsport. Die Antwort trägt er dann in seine Lerntabelle ein.',
    merk: 'Deshalb braucht ein frisch gestarteter Switch keine Konfiguration: Er lernt im Betrieb, wer wo hängt.' },

  { key: 'Jitter', gruppe: 'Fehlersuche im Netz', alias: ['Laufzeitschwankung'],
    text: 'Die Schwankung der [[Latenz]]: Pakete brauchen mal 20, mal 90 Millisekunden. Für Telefonie schlimmer als eine gleichmäßig hohe Verzögerung.',
    merk: 'Gegen Jitter hilft [[QoS]] – die Sprachpakete bekommen Vorrang vor Backup und Download.' },

  { key: 'QoS', gruppe: 'Fehlersuche im Netz', alias: ['Quality of Service', 'Priorisierung'],
    text: 'Regeln, nach denen bestimmter Verkehr bei Engpässen bevorzugt behandelt wird.',
    bsp: 'Telefonie vor Dateiübertragung, Warenwirtschaft vor Mediathek.',
    merk: 'QoS verteilt die vorhandene [[Bandbreite]] anders – mehr davon macht es nicht.' },

  /* ================= Verkabelung und Planung ================= */

  { key: 'Strukturierte Verkabelung', gruppe: 'Verkabelung und Planung', alias: ['universelle Gebäudeverkabelung'],
    text: 'Herstellerunabhängiger, anwendungsneutraler Aufbau der Gebäudeverkabelung in drei Bereichen: [[Primärbereich]], [[Sekundärbereich]], [[Tertiärbereich]].',
    norm: 'EN 50173 / ISO IEC 11801',
    merk: 'Der Sinn: Die Verkabelung überlebt mehrere Gerätegenerationen. Was heute Telefon ist, trägt morgen Ethernet.' },

  { key: 'Primärbereich', gruppe: 'Verkabelung und Planung', alias: ['Campusverkabelung', 'Geländeverkabelung'],
    text: 'Verbindet Gebäude untereinander. Wegen der Längen und der Störsicherheit praktisch immer [[Lichtwellenleiter]].' },

  { key: 'Sekundärbereich', gruppe: 'Verkabelung und Planung', alias: ['Steigleitung', 'Gebäudeverkabelung'],
    text: 'Verbindet innerhalb eines Gebäudes die Etagenverteiler mit dem Gebäudeverteiler. Meist [[Lichtwellenleiter]].' },

  { key: 'Tertiärbereich', gruppe: 'Verkabelung und Planung', alias: ['Etagenverkabelung'],
    text: 'Vom Etagenverteiler zur Anschlussdose am Arbeitsplatz, in [[Twisted-Pair]].',
    merk: 'Hier gilt die bekannte Begrenzung: <b>90 Meter fest verlegt</b> plus je 5 Meter Patchkabel an beiden Enden – zusammen die 100 Meter aus der Ethernet-Norm.' },

  { key: 'Netzdokumentation', gruppe: 'Verkabelung und Planung', alias: ['Dokumentation', 'Netzplan'],
    text: 'Schriftliche Darstellung des Netzes: Adressbereiche, Portbelegung, Dosennummern, VLAN-Zuordnung, Verbindungen zwischen den Verteilern.',
    merk: 'Die Dokumentation zahlt sich nicht beim Aufbau aus, sondern bei der Störung – und im Urlaub des Kollegen.' },

  { key: 'Abnahmemessung', gruppe: 'Verkabelung und Planung', alias: ['Messprotokoll', 'Zertifizierung der Strecke'],
    text: 'Messung jeder verlegten Strecke mit einem Kabeltester: Länge, Dämpfung, Übersprechen, Belegung. Das Protokoll ist Teil der Abnahme.',
    merk: 'Ohne Messprotokoll keine Abnahme: Ein Verdrahtungsfehler fällt sonst erst Monate später bei hoher Last auf – und dann ist der Elektriker aus der Gewährleistung heraus.' },

  { key: 'Autonegotiation', gruppe: 'Verkabelung und Planung', alias: ['Auto-Negotiation'],
    text: 'Zwei Netzgeräte handeln beim Verbinden selbst Geschwindigkeit und [[Duplex]]-Verfahren aus.',
    merk: 'Klassischer Fehler: Eine Seite fest eingestellt, die andere auf Automatik. Dann fällt die automatische Seite auf <b>Halbduplex</b> zurück – die Verbindung steht, ist aber unter Last absurd langsam.' },

  /* ================= Routing ================= */

  { key: 'Routing', gruppe: 'Routing', alias: ['Wegewahl'],
    text: 'Die Entscheidung eines [[Router]]s, über welchen Ausgang ein [[Paket]] seinem Ziel näher kommt. Getroffen wird sie für jedes Paket einzeln anhand der [[Routingtabelle]].' },

  { key: 'Routingtabelle', gruppe: 'Routing',
    text: 'Die Liste bekannter Zielnetze mit dem jeweils nächsten Schritt. Der [[Router]] nimmt immer den <b>genauesten</b> passenden Eintrag, also das längste Präfix.',
    bsp: 'Passen /24 und /16 auf dasselbe Ziel, gewinnt der /24-Eintrag.' },

  { key: 'Standardroute', gruppe: 'Routing', alias: ['Default-Route', '0.0.0.0/0'],
    text: 'Der Eintrag für alles, wofür es keinen genaueren gibt. In kleinen Netzen der einzige Weg nach draußen – auf dem Endgerät heißt er [[Standardgateway]].' },

  { key: 'Statisches Routing', gruppe: 'Routing',
    text: 'Wege werden von Hand eingetragen. Überschaubar und vorhersagbar, aber bei jeder Änderung nachzupflegen und ohne Ausweichweg bei Ausfall.' },

  { key: 'Dynamisches Routing', gruppe: 'Routing', alias: ['Routingprotokoll', 'OSPF', 'RIP', 'BGP'],
    text: 'Die Router tauschen ihre bekannten Wege selbst aus und rechnen bei einem Ausfall einen Ersatzweg aus. Übliche Protokolle: RIP (alt, einfach), OSPF (im Unternehmen), BGP (zwischen Providern).',
    merk: 'Lohnt sich ab mehreren Standorten mit mehreren Wegen. Für ein Haus mit einem Internetanschluss reicht eine [[Standardroute]].' },

  { key: 'Hop', gruppe: 'Routing', alias: ['Sprung'],
    text: 'Eine Station auf dem Weg zum Ziel, also jeder durchlaufene [[Router]]. [[tracert]] zählt die Hops auf.' },

  { key: 'TTL', gruppe: 'Routing', alias: ['Time to Live', 'Hop Limit'],
    text: 'Zähler im [[Paket|IP-Paket]], den jeder [[Router]] um eins verringert. Bei null wird das Paket verworfen und eine [[ICMP]]-Meldung zurückgeschickt.',
    merk: 'Die TTL verhindert, dass ein falsch geroutetes Paket ewig kreist. Ein [[Frame|Rahmen]] auf [[OSI-Modell|Schicht 2]] hat <b>keine</b> solche Bremse – deshalb ist eine [[Schleife]] dort so verheerend.' }

]);

/* Alle Eintraege ab der oben gesetzten Marke gehoeren zum Gebiet
   "netz". Die Eintraege der anderen Dateien bleiben unberuehrt. */
AUDIT.data.lexikon.slice(AUDIT.data._netzAb).forEach(function (e) {
  if (!e.gebiet) e.gebiet = 'netz';
});
delete AUDIT.data._netzAb;

/* Index neu aufbauen, damit die neuen Begriffe und Alias greifen. */
AUDIT.data.lexikonIndizieren();
