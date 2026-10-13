/* ===========================================================
   AUDIT – data/netzwerk.js
   Die Nachschlagewerke fuer die Uebersichtstabellen im
   Themengebiet "Netzwerktechnik".

   Sieben Listen, weil sich die Spalten unterscheiden:
     osischichten    die sieben Schichten, von unten nach oben
     netzgeraete     welches Geraet arbeitet auf welcher Schicht
     netzprotokolle  Protokolle und Dienste samt Portnummer
     ipklassen       die Adressklassen und die Sonderbereiche
     subnetze        Praefix, Maske und nutzbare Hosts
     topologien      Aufbau, Vorteil, Nachteil
     netzwerkzeuge   die Befehle fuer die Fehlersuche

   js/chat.js baut daraus die Tabellen (quelle: 'osi',
   'netzgeraete', 'netzprotokolle', 'ipklassen', 'subnetze',
   'topologien', 'netzwerkzeuge'). Mit "keys" laesst sich im
   Gespraech eine Auswahl in genau dieser Reihenfolge zeigen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

/* ---------------- OSI-Schichten ----------------
   nr/name wie in der Pruefung gefragt, tcpip ordnet die
   Schicht dem schlankeren TCP/IP-Modell zu. */

AUDIT.data.osischichten = [
  { key: 'l1', nr: 1, name: 'Bitübertragung', en: 'Physical',
    aufgabe: 'Überträgt einzelne Bits als elektrisches, optisches oder Funksignal. Legt Kabel, Stecker und Pegel fest.',
    bsp: 'Twisted-Pair, Lichtwellenleiter, Hub, Repeater',
    tcpip: 'Netzzugang' },
  { key: 'l2', nr: 2, name: 'Sicherung', en: 'Data Link',
    aufgabe: 'Fasst Bits zu Rahmen zusammen, adressiert im lokalen Netz über die MAC-Adresse, erkennt Übertragungsfehler.',
    bsp: 'Ethernet, WLAN (802.11), Switch, Access Point',
    tcpip: 'Netzzugang' },
  { key: 'l3', nr: 3, name: 'Vermittlung', en: 'Network',
    aufgabe: 'Logische Adressierung über Netzgrenzen hinweg und Wegewahl zwischen Netzen (Routing).',
    bsp: 'IP, ICMP, Router',
    tcpip: 'Internet' },
  { key: 'l4', nr: 4, name: 'Transport', en: 'Transport',
    aufgabe: 'Verbindung von Anwendung zu Anwendung über Portnummern, Aufteilung in Segmente, bei TCP auch Sicherung der Reihenfolge.',
    bsp: 'TCP, UDP',
    tcpip: 'Transport' },
  { key: 'l5', nr: 5, name: 'Sitzung', en: 'Session',
    aufgabe: 'Baut Sitzungen auf, hält sie und beendet sie wieder.',
    bsp: 'Anmeldung an einer Datenbanksitzung',
    tcpip: 'Anwendung' },
  { key: 'l6', nr: 6, name: 'Darstellung', en: 'Presentation',
    aufgabe: 'Übersetzt Datenformate, Zeichensätze und Kompression, damit beide Seiten dasselbe verstehen.',
    bsp: 'Zeichensatz UTF-8, Kompression, Verschlüsselung',
    tcpip: 'Anwendung' },
  { key: 'l7', nr: 7, name: 'Anwendung', en: 'Application',
    aufgabe: 'Stellt die Dienste bereit, die das Programm des Anwenders nutzt.',
    bsp: 'HTTP/HTTPS, SMTP, FTP, DNS, DHCP',
    tcpip: 'Anwendung' }
];

/* ---------------- Geraete ---------------- */

AUDIT.data.netzgeraete = [
  { key: 'kabel',     icon: '🧵', name: 'Kabel / Patchfeld', schicht: 1,
    aufgabe: 'Reine Verbindung ohne Eigenintelligenz. Das Patchfeld sortiert die Leitungen im Schrank.' },
  { key: 'repeater',  icon: '📶', name: 'Repeater',          schicht: 1,
    aufgabe: 'Verstärkt das Signal, um längere Strecken zu überbrücken. Verlängert aber auch die Kollisionsdomäne.' },
  { key: 'hub',       icon: '🔀', name: 'Hub',               schicht: 1,
    aufgabe: 'Schickt jedes Signal an alle Ports. Ein gemeinsames Medium für alle – heute durch Switches ersetzt.' },
  { key: 'switch',    icon: '🗄️', name: 'Switch',            schicht: 2,
    aufgabe: 'Lernt die MAC-Adressen seiner Ports und leitet jeden Rahmen nur an den richtigen Port weiter. Trennt Kollisionsdomänen.' },
  { key: 'ap',        icon: '📡', name: 'Access Point',      schicht: 2,
    aufgabe: 'Bindet WLAN-Geräte ins kabelgebundene Netz ein. Funktioniert im Funk wie ein gemeinsames Medium.' },
  { key: 'bridge',    icon: '🌉', name: 'Bridge',            schicht: 2,
    aufgabe: 'Verbindet zwei Netzsegmente und filtert anhand der MAC-Adresse. Der Switch ist die Mehrport-Bridge.' },
  { key: 'router',    icon: '🧭', name: 'Router',            schicht: 3,
    aufgabe: 'Verbindet verschiedene IP-Netze und entscheidet anhand der Zieladresse, wohin das Paket geht. Leitet Broadcasts nicht weiter.' },
  { key: 'l3switch',  icon: '🧮', name: 'Layer-3-Switch',    schicht: '2 + 3',
    aufgabe: 'Switch, der zusätzlich zwischen VLANs routen kann – typisch im Verteilerschrank größerer Netze.' },
  { key: 'firewall',  icon: '🧱', name: 'Firewall',          schicht: '3–7',
    aufgabe: 'Lässt nur erlaubte Verbindungen durch. Filtert nach IP und Port, moderne Geräte auch nach Anwendung.' },
  { key: 'modem',     icon: '🔌', name: 'Modem',             schicht: 1,
    aufgabe: 'Setzt das Signal auf die Leitung des Providers um (DSL, Kabel, Glasfaser).' }
];

/* ---------------- Protokolle und Dienste ----------------
   port: '–' bei allem, was selbst keine Ports kennt. */

AUDIT.data.netzprotokolle = [
  { key: 'ip',    name: 'IP',          port: '–',        schicht: 3,
    aufgabe: 'Adressiert und transportiert Pakete über Netzgrenzen. Ohne Garantie für Ankunft und Reihenfolge.' },
  { key: 'icmp',  name: 'ICMP',        port: '–',        schicht: 3,
    aufgabe: 'Melde- und Diagnoseprotokoll. Trägt ping und tracert.' },
  { key: 'arp',   name: 'ARP',         port: '–',        schicht: '2 / 3',
    aufgabe: 'Ermittelt zu einer bekannten IP-Adresse die MAC-Adresse im lokalen Netz.' },
  { key: 'tcp',   name: 'TCP',         port: '–',        schicht: 4,
    aufgabe: 'Verbindungsorientiert: Drei-Wege-Handschlag, Bestätigungen, Reihenfolge, Wiederholung bei Verlust.' },
  { key: 'udp',   name: 'UDP',         port: '–',        schicht: 4,
    aufgabe: 'Verbindungslos: schickt los, ohne zu bestätigen. Schnell und schlank, ohne Garantie.' },
  { key: 'ftp',   name: 'FTP',         port: '20 / 21',  schicht: 7,
    aufgabe: 'Dateiübertragung. Unverschlüsselt – heute durch SFTP oder FTPS ersetzt.' },
  { key: 'ssh',   name: 'SSH',         port: '22',       schicht: 7,
    aufgabe: 'Verschlüsselte Fernwartung von Servern und Netzgeräten.' },
  { key: 'smtp',  name: 'SMTP',        port: '25 / 587', schicht: 7,
    aufgabe: 'Versand von E-Mail zwischen Mailservern.' },
  { key: 'dns',   name: 'DNS',         port: '53',       schicht: 7,
    aufgabe: 'Löst Namen in IP-Adressen auf. Nutzt meist UDP, bei großen Antworten TCP.' },
  { key: 'dhcp',  name: 'DHCP',        port: '67 / 68',  schicht: 7,
    aufgabe: 'Verteilt IP-Adresse, Subnetzmaske, Standardgateway und DNS-Server automatisch.' },
  { key: 'http',  name: 'HTTP',        port: '80',       schicht: 7,
    aufgabe: 'Abruf von Webseiten, unverschlüsselt.' },
  { key: 'pop3',  name: 'POP3',        port: '110 / 995', schicht: 7,
    aufgabe: 'Holt E-Mail vom Server ab und löscht sie dort üblicherweise.' },
  { key: 'imap',  name: 'IMAP',        port: '143 / 993', schicht: 7,
    aufgabe: 'Verwaltet E-Mail auf dem Server – mehrere Geräte sehen denselben Stand.' },
  { key: 'snmp',  name: 'SNMP',        port: '161 / 162', schicht: 7,
    aufgabe: 'Überwachung und Verwaltung von Netzgeräten.' },
  { key: 'https', name: 'HTTPS',       port: '443',      schicht: 7,
    aufgabe: 'Webseiten über eine mit TLS verschlüsselte Verbindung.' },
  { key: 'rdp',   name: 'RDP',         port: '3389',     schicht: 7,
    aufgabe: 'Fernzugriff auf einen Windows-Desktop. Nie direkt aus dem Internet erreichbar machen.' }
];

/* ---------------- Adressklassen und Sonderbereiche ---------------- */

AUDIT.data.ipklassen = [
  { key: 'a', name: 'Klasse A', bereich: '1.0.0.0 – 126.255.255.255', maske: '255.0.0.0 (/8)',
    hinweis: 'Sehr große Netze. Privat: <b>10.0.0.0/8</b>' },
  { key: 'b', name: 'Klasse B', bereich: '128.0.0.0 – 191.255.255.255', maske: '255.255.0.0 (/16)',
    hinweis: 'Mittlere Netze. Privat: <b>172.16.0.0 – 172.31.255.255</b>' },
  { key: 'c', name: 'Klasse C', bereich: '192.0.0.0 – 223.255.255.255', maske: '255.255.255.0 (/24)',
    hinweis: 'Kleine Netze. Privat: <b>192.168.0.0/16</b>' },
  { key: 'd', name: 'Klasse D', bereich: '224.0.0.0 – 239.255.255.255', maske: '–',
    hinweis: 'Multicast: eine Sendung an eine Gruppe von Empfängern' },
  { key: 'e', name: 'Klasse E', bereich: '240.0.0.0 – 255.255.255.255', maske: '–',
    hinweis: 'Für Forschung und Versuche reserviert' },
  { key: 'loopback', name: 'Loopback', bereich: '127.0.0.0 – 127.255.255.255', maske: '255.0.0.0 (/8)',
    hinweis: 'Das eigene Gerät. <b>127.0.0.1</b> verlässt die Netzkarte nie' },
  { key: 'apipa', name: 'APIPA', bereich: '169.254.0.0 – 169.254.255.255', maske: '255.255.0.0 (/16)',
    hinweis: 'Notadresse, die sich ein Gerät selbst gibt, wenn <b>kein DHCP antwortet</b>' }
];

/* ---------------- Subnetzmasken ----------------
   hosts: nutzbare Adressen, also Gesamtzahl minus Netz- und
   Broadcast-Adresse. teile: so viele Subnetze ergibt ein /24. */

AUDIT.data.subnetze = [
  { key: '8',  praefix: '/8',  maske: '255.0.0.0',       hosts: '16.777.214', teile: '–' },
  { key: '16', praefix: '/16', maske: '255.255.0.0',     hosts: '65.534',     teile: '–' },
  { key: '24', praefix: '/24', maske: '255.255.255.0',   hosts: '254',        teile: '1 (das ganze Netz)' },
  { key: '25', praefix: '/25', maske: '255.255.255.128', hosts: '126',        teile: '2' },
  { key: '26', praefix: '/26', maske: '255.255.255.192', hosts: '62',         teile: '4' },
  { key: '27', praefix: '/27', maske: '255.255.255.224', hosts: '30',         teile: '8' },
  { key: '28', praefix: '/28', maske: '255.255.255.240', hosts: '14',         teile: '16' },
  { key: '29', praefix: '/29', maske: '255.255.255.248', hosts: '6',          teile: '32' },
  { key: '30', praefix: '/30', maske: '255.255.255.252', hosts: '2',          teile: '64 (für Punkt-zu-Punkt)' }
];

/* ---------------- Topologien ---------------- */

AUDIT.data.topologien = [
  { key: 'bus',   icon: '➖', name: 'Bus',
    aufbau: 'Alle Geräte hängen an einer gemeinsamen Leitung.',
    vorteil: 'Wenig Kabel, einfacher Aufbau',
    nachteil: 'Ein Defekt an der Leitung legt alles still; alle teilen die Bandbreite' },
  { key: 'stern', icon: '✳️', name: 'Stern',
    aufbau: 'Jedes Gerät hat eine eigene Leitung zu einem zentralen Switch.',
    vorteil: 'Ausfall eines Kabels betrifft nur ein Gerät; heute der Standard',
    nachteil: 'Fällt der zentrale Switch aus, steht das Segment' },
  { key: 'ring',  icon: '⭕', name: 'Ring',
    aufbau: 'Jedes Gerät ist mit zwei Nachbarn verbunden, der Kreis ist geschlossen.',
    vorteil: 'Klare Reihenfolge, als Doppelring ausfallsicher',
    nachteil: 'Eine Unterbrechung trennt den Ring, Erweiterung stört den Betrieb' },
  { key: 'masche', icon: '🕸️', name: 'Vermascht',
    aufbau: 'Mehrere oder alle Geräte sind untereinander direkt verbunden.',
    vorteil: 'Höchste Ausfallsicherheit, mehrere Wege zum Ziel',
    nachteil: 'Sehr viel Kabel und Aufwand – im WAN üblich, im LAN selten' },
  { key: 'baum',  icon: '🌳', name: 'Baum / hierarchisch',
    aufbau: 'Mehrere Sterne werden über übergeordnete Switches zusammengeführt.',
    vorteil: 'Wächst gut mit; Etagen und Gebäude lassen sich trennen',
    nachteil: 'Der Weg nach oben wird zum Engpass und zum Einzelpunkt des Ausfalls' }
];

/* ---------------- Werkzeuge der Fehlersuche ---------------- */

AUDIT.data.netzwerkzeuge = [
  { key: 'ipconfig', befehl: 'ipconfig /all <span class="tag">ip a</span>',
    zeigt: 'Eigene IP-Adresse, Subnetzmaske, Standardgateway, DNS-Server, MAC-Adresse',
    einsatz: 'Erster Griff: Hat das Gerät überhaupt eine sinnvolle Adresse?' },
  { key: 'ping', befehl: 'ping &lt;Ziel&gt;',
    zeigt: 'Ob das Ziel antwortet und wie lange es braucht',
    einsatz: 'Von innen nach außen: erst Gateway, dann eine öffentliche IP, dann ein Name' },
  { key: 'tracert', befehl: 'tracert <span class="tag">traceroute</span>',
    zeigt: 'Jeden Router auf dem Weg zum Ziel',
    einsatz: 'Zeigt, an welcher Station der Weg abbricht' },
  { key: 'nslookup', befehl: 'nslookup &lt;Name&gt;',
    zeigt: 'Welche IP-Adresse der DNS-Server zu einem Namen liefert',
    einsatz: 'Trennt Namensauflösung von Erreichbarkeit' },
  { key: 'arp', befehl: 'arp -a',
    zeigt: 'Zuordnung von IP- zu MAC-Adressen im lokalen Netz',
    einsatz: 'Deckt doppelte IP-Adressen und vertauschte Geräte auf' },
  { key: 'netstat', befehl: 'netstat -ano <span class="tag">ss -tulpen</span>',
    zeigt: 'Offene Ports und bestehende Verbindungen des eigenen Rechners',
    einsatz: 'Lauscht der Dienst wirklich, und auf welchem Port?' }
];

/* ---------------- Strukturierte Verkabelung ----------------
   Die drei Bereiche nach EN 50173 / ISO 11801. Laengen sind
   die ueblichen Richtwerte, nicht die Normgrenze im Detail. */

AUDIT.data.verkabelung = [
  { key: 'primaer', name: 'Primärbereich', ebene: 'Gelände',
    was: 'Verbindet Gebäude untereinander (Campus-Verkabelung).',
    medium: 'Lichtwellenleiter', laenge: 'bis 1500 m' },
  { key: 'sekundaer', name: 'Sekundärbereich', ebene: 'Gebäude',
    was: 'Verbindet die Etagenverteiler mit dem Gebäudeverteiler (Steigleitung).',
    medium: 'Meist Lichtwellenleiter', laenge: 'bis 500 m' },
  { key: 'tertiaer', name: 'Tertiärbereich', ebene: 'Etage',
    was: 'Vom Etagenverteiler zur Anschlussdose am Arbeitsplatz. Die Längenangabe gilt für den fest verlegten Teil, dazu kommen je 5 m Patchkabel.',
    medium: 'Twisted-Pair', laenge: 'bis 90 m' }
];

/* ---------------- Routing ---------------- */

AUDIT.data.routing = [
  { key: 'direkt', name: 'Direkt verbunden', herkunft: 'Automatisch',
    erklaerung: 'Netze, an denen der Router selbst hängt. Stehen ohne Zutun in der Tabelle.' },
  { key: 'statisch', name: 'Statische Route', herkunft: 'Von Hand eingetragen',
    erklaerung: 'Fest hinterlegter Weg. Überschaubar und berechenbar, aber bei jeder Änderung nachzupflegen – und ohne Ausweichweg bei Ausfall.' },
  { key: 'default', name: 'Standardroute', herkunft: 'Von Hand eingetragen',
    erklaerung: 'Der Weg für alles, wofür es keinen genaueren Eintrag gibt (0.0.0.0/0). In kleinen Netzen die einzige Route nach draußen.' },
  { key: 'dynamisch', name: 'Dynamische Route', herkunft: 'Routingprotokoll',
    erklaerung: 'Router tauschen ihre Wege selbst aus (OSPF, RIP, BGP) und finden bei Ausfall einen Ersatzweg. Lohnt ab mehreren Standorten.' }
];
