/* ===========================================================
   AUDIT – data/kontakte.js
   Die Gesprächspartner bei der Rampe 7 Logistik GmbH.
   Jeder Kontakt deckt einen Themenbereich der Prüfung ab.
   Welcher Kontakt zu welchem Themengebiet gehoert, steht in
   data/themen.js – hier stehen nur die Personen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.kontakte = [
  {
    key: 'sabrina',
    name: 'Sabrina Köster',
    rolle: 'IT-Abteilung',
    bild: '👩‍💻',
    themen: 'Schadsoftware, Schutzmaßnahmen, Angriffswege',
    vorstellung: 'Sabrina hält die Technik am Laufen und merkt als Erste, wenn etwas faul ist.'
  },
  {
    key: 'dsb',
    name: 'Herr Olschewski',
    rolle: 'Datenschutzbeauftragter',
    bild: '🛡️',
    themen: 'DSGVO, Betroffenenrechte, Pseudonymisierung, Privacy by Design',
    vorstellung: 'Externer Datenschutzbeauftragter, kommt einmal im Monat vorbei. Berät und überwacht – entscheiden muss die Geschäftsführung.'
  },
  {
    key: 'chefin',
    name: 'Frau Hagedorn',
    rolle: 'Geschäftsführung',
    bild: '👔',
    themen: 'Schutzziele, Schutzbedarf, DSB und ISB, Compliance, Haftung',
    vorstellung: 'Geschäftsführerin und damit die Verantwortliche im Sinne der DSGVO. Fragt gern nach, ob sich etwas rechnet.'
  },
  {
    key: 'tim',
    name: 'Tim',
    rolle: 'Azubi, 2. Lehrjahr',
    bild: '🧑‍🎓',
    themen: 'Zutritt, Zugang, Zugriff, TOMs, Phishing, Alltagsfehler',
    vorstellung: 'Sitzt neben dir und fragt dich Sachen. Wer erklären kann, hat es verstanden.'
  },
  {
    key: 'notfall',
    name: '#notfall',
    rolle: 'Gruppenchat',
    bild: '🚨',
    themen: 'Ransomware-Ernstfall, Datenpanne, 72-Stunden-Frist',
    vorstellung: 'Wird nur im Ernstfall benutzt. Hoffentlich bleibt er leer.'
  },

  /* ---------- Themengebiet "Verschlüsselung und Kryptographie" ---------- */

  {
    key: 'nadja',
    name: 'Nadja Reinhardt',
    rolle: 'Systemadministration',
    bild: '🔧',
    themen: 'Symmetrisch, asymmetrisch, hybrid, Schlüsselaustausch',
    vorstellung: 'Nadja baut die Verschlüsselung bei uns um. Sie denkt in Systemen und erklärt gern am konkreten Fall.'
  },
  {
    key: 'berater',
    name: 'Herr Baumgart',
    rolle: 'IT-Sicherheitsberater',
    bild: '🧮',
    themen: 'Hashverfahren, digitale Signatur, Zertifikate',
    vorstellung: 'Externer Berater, begleitet die Umstellung. Formuliert genau und legt Wert darauf, dass die Begriffe sitzen.'
  },
  {
    key: 'projekt',
    name: 'Frau Teichmann',
    rolle: 'Projektleitung',
    bild: '📋',
    themen: 'Welches Verfahren wofür, Transport- und Ende-zu-Ende, Aufwand',
    vorstellung: 'Leitet das Umstellungsprojekt. Sie will keine Theorie, sondern eine Entscheidung mit Begründung.'
  },
  {
    key: 'jonas',
    name: 'Jonas',
    rolle: 'Azubi, 1. Lehrjahr',
    bild: '🧢',
    themen: 'Klartext und Geheimtext, Caesar, Grundbegriffe',
    vorstellung: 'Neu im Betrieb und ehrlich ratlos. Bei ihm erklärst du – wer erklären kann, hat es verstanden.'
  },
  {
    key: 'kryptoalarm',
    name: '#krypto-alarm',
    rolle: 'Gruppenchat',
    bild: '🔓',
    themen: 'Falsche Prüfsumme, ungültiges Zertifikat, geleakte Passwörter',
    vorstellung: 'Der Kanal für die Fälle, bei denen die Kryptographie nicht hält, was sie verspricht.'
  },

  /* ---------- Themengebiet "Netzwerktechnik" ---------- */

  {
    key: 'mirko',
    name: 'Mirko Pahlke',
    rolle: 'Netzwerkadministration',
    bild: '🧰',
    themen: 'OSI-Modell, Switch und Router, Ethernet, VLAN',
    vorstellung: 'Mirko zieht die Kabel und konfiguriert die Switches. Er erklärt alles am Gerät, das gerade vor ihm liegt.'
  },
  {
    key: 'planer',
    name: 'Herr Semmler',
    rolle: 'Netzplanung (extern)',
    bild: '📐',
    themen: 'IP-Adressen, Subnetzmaske, Subnetting, NAT, IPv6',
    vorstellung: 'Plant das neue Adresskonzept. Rechnet gern mit dir mit und legt Wert darauf, dass die Zahlen stimmen.'
  },
  {
    key: 'standort',
    name: 'Frau Dankwart',
    rolle: 'Standortleitung',
    bild: '📊',
    themen: 'WLAN oder Kabel, Standortvernetzung, Ausfallsicherheit, Kosten',
    vorstellung: 'Verantwortet den Standort Bremen. Sie will eine Empfehlung mit Begründung, keine Produktliste.'
  },
  {
    key: 'leonie',
    name: 'Leonie',
    rolle: 'Azubi, 1. Lehrjahr',
    bild: '🎧',
    themen: 'LAN und WAN, Topologien, Ports, DHCP und DNS',
    vorstellung: 'Frisch im Betrieb und fragt gnadenlos nach. Bei ihr erklärst du – wer erklären kann, hat es verstanden.'
  },
  {
    key: 'netzstoerung',
    name: '#netz-stoerung',
    rolle: 'Gruppenchat',
    bild: '📡',
    themen: 'Kein Netz im Lager, doppelte IP-Adresse, Schleife im Switch',
    vorstellung: 'Der Kanal für den Moment, in dem im Lager nichts mehr geht und alle gleichzeitig schreiben.'
  }
];

AUDIT.data.kontakteMap = {};
AUDIT.data.kontakte.forEach(function (k) { AUDIT.data.kontakteMap[k.key] = k; });

/* ---------------- Sprecher im Gruppenchat ----------------
   Jeder Teilnehmer bekommt eine eigene Farbe, damit man im
   Verlauf sofort sieht, wer schreibt. Der Schlüssel wird in den
   Dialogen als "von" angegeben.                              */

AUDIT.data.sprecher = [
  { key: 'sabrina',    name: 'Sabrina (IT)',            farbe: '#38bdf8' },
  { key: 'olschewski', name: 'Herr Olschewski (DSB)',   farbe: '#2dd4bf' },
  { key: 'hagedorn',   name: 'Frau Hagedorn (GF)',      farbe: '#fbbf24' },
  { key: 'tim',        name: 'Tim (Azubi)',             farbe: '#a78bfa' },
  { key: 'luettmann',  name: 'Frau Lüttmann (Personal)', farbe: '#f472b6' },
  { key: 'brinkmann',  name: 'Herr Brinkmann (Versand)', farbe: '#fb923c' },
  { key: 'extern',     name: 'IT-Dienstleister Nord',   farbe: '#94a3b8' },

  /* Themengebiet Verschlüsselung */
  { key: 'nadja',      name: 'Nadja (Systeme)',         farbe: '#22d3ee' },
  { key: 'baumgart',   name: 'Herr Baumgart (Berater)', farbe: '#c084fc' },
  { key: 'teichmann',  name: 'Frau Teichmann (Projekt)', farbe: '#fbbf24' },
  { key: 'jonas',      name: 'Jonas (Azubi)',           farbe: '#4ade80' },

  /* Themengebiet Netzwerktechnik */
  { key: 'mirko',      name: 'Mirko (Netzwerk)',        farbe: '#38bdf8' },
  { key: 'semmler',    name: 'Herr Semmler (Planung)',  farbe: '#c084fc' },
  { key: 'dankwart',   name: 'Frau Dankwart (Standort)', farbe: '#fbbf24' },
  { key: 'leonie',     name: 'Leonie (Azubi)',          farbe: '#4ade80' },
  { key: 'kleinschmidt', name: 'Herr Kleinschmidt (Lager)', farbe: '#fb923c' }
];
AUDIT.data.sprecherMap = {};
AUDIT.data.sprecher.forEach(function (s) { AUDIT.data.sprecherMap[s.key] = s; });

/* Alle Gespräche – die dialoge-*.js hängen sich hier an */
AUDIT.data.dialoge = AUDIT.data.dialoge || [];
