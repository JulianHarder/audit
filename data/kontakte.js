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
  },

  /* ---------- Themengebiet "Cookies, Tracking und ePrivacy" ---------- */

  {
    key: 'anwaeltin',
    name: 'Frau Dr. Keilhauer',
    rolle: 'Fachanwältin IT-Recht (extern)',
    bild: '⚖️',
    themen: 'ePrivacy, § 25 TDDDG, Verbotsprinzip, Einwilligung, Planet49',
    vorstellung: 'Begleitet den Shop-Start juristisch. Zitiert die Norm, bevor sie eine Meinung äußert – und erwartet das auch von dir.'
  },
  {
    key: 'webdev',
    name: 'Kevin Ostrowski',
    rolle: 'Webentwicklung (Agentur)',
    bild: '🖥️',
    themen: 'Cookie-Arten, Consent-Tool, Local Storage, Fingerprinting, Widerruf',
    vorstellung: 'Baut den Shop und das Banner. Er weiß, was technisch geht – ob es erlaubt ist, fragt er dich.'
  },
  {
    key: 'marketing',
    name: 'Marion Rebholz',
    rolle: 'Online-Marketing',
    bild: '📣',
    themen: 'Analyse und Tracking, Reichweitenmessung, Newsletter, Interessenabwägung',
    vorstellung: 'Will Zahlen über den Shop und hat schon drei Tools im Blick. Lässt sich überzeugen, aber nur mit einer Begründung.'
  },
  {
    key: 'merle',
    name: 'Merle',
    rolle: 'Azubi, 1. Lehrjahr',
    bild: '🧋',
    themen: 'Was ist ein Cookie, First und Third Party, Datenschutzerklärung',
    vorstellung: 'Soll den Banner-Text Korrektur lesen und versteht die halben Wörter nicht. Bei ihr erklärst du – wer erklären kann, hat es verstanden.'
  },
  {
    key: 'banneralarm',
    name: '#banner-alarm',
    rolle: 'Gruppenchat',
    bild: '🍪',
    themen: 'Beschwerde, Anfrage der Aufsichtsbehörde, Abmahnung, Analytics ohne Einwilligung',
    vorstellung: 'Der Kanal für den Tag, an dem sich eine Kundin beschwert und kurz darauf die Aufsichtsbehörde schreibt.'
  },

  /* ---------- Themengebiet "KI im Betrieb und der EU AI Act" ---------- */

  {
    key: 'kirecht',
    name: 'Herr Azizi',
    rolle: 'Compliance-Berater (extern)',
    bild: '📜',
    themen: 'Risikoklassen, verbotene Praktiken, Hochrisiko, Zeitschiene, Sanktionen',
    vorstellung: 'Hat den AI Act gelesen, bevor ihn alle zitierten. Sortiert jeden Fall erst in eine Risikoklasse, dann redet er über Pflichten.'
  },
  {
    key: 'kiprojekt',
    name: 'Hendrik Vollmer',
    rolle: 'IT-Projektleitung',
    bild: '🤖',
    themen: 'Anbieter oder Betreiber, Transparenzpflicht, Chatbot, Basismodelle',
    vorstellung: 'Führt den KI-Assistenten in der Disposition ein. Technisch sicher, bei den Pflichten unsicher – da fragt er dich.'
  },
  {
    key: 'personal',
    name: 'Frau Grünwald',
    rolle: 'Personalleitung',
    bild: '🧑‍💼',
    themen: 'KI in der Bewerberauswahl, Art. 22 DSGVO, menschliche Aufsicht, Betriebsrat',
    vorstellung: 'Hat 300 Bewerbungen auf dem Tisch und ein Tool, das vorsortieren soll. Sie will wissen, ob sie darf – nicht, ob es praktisch ist.'
  },
  {
    key: 'noah',
    name: 'Noah',
    rolle: 'Azubi, 2. Lehrjahr',
    bild: '🎮',
    themen: 'Darf ich ChatGPT nutzen, Kundendaten in KI-Tools, Halluzinationen, KI-Kompetenz',
    vorstellung: 'Benutzt KI längst für alles und hat sich noch nie gefragt, ob das in Ordnung ist. Bei ihm erklärst du.'
  },
  {
    key: 'kivorfall',
    name: '#ki-vorfall',
    rolle: 'Gruppenchat',
    bild: '⚠️',
    themen: 'Kundendaten im Chatbot, Deepfake-Anruf, KI-Tool ohne Freigabe',
    vorstellung: 'Wird aufgemacht, wenn ein KI-Werkzeug etwas getan hat, das niemand so wollte.'
  },

  /* ---------- Themengebiet "Penetrationstest, Softwaretest und Audit" ---------- */

  {
    key: 'pentest',
    name: 'Yasmin Sarközi',
    rolle: 'Penetrationstesterin (extern)',
    bild: '🕵️',
    themen: 'Blackbox, Greybox, Whitebox, Pentest-Phasen, Scope, Schwachstellenscan',
    vorstellung: 'Wird dafür bezahlt, in Rampe 7 einzubrechen. Erklärt genau, was sie weiß und was sie nicht wissen darf.'
  },
  {
    key: 'entwickler',
    name: 'Deniz Kaymak',
    rolle: 'Anwendungsentwicklung',
    bild: '🧪',
    themen: 'Äquivalenzklassen, Grenzwertanalyse, Abdeckung, Teststufen, Regressionstest',
    vorstellung: 'Schreibt die Lagersoftware und ihre Tests. Bei ihm heißen Blackbox und Whitebox etwas anderes als bei Yasmin – darüber redet ihr.'
  },
  {
    key: 'auditor',
    name: 'Herr Lindemann',
    rolle: 'ISO-27001-Auditor (extern)',
    bild: '📝',
    themen: 'Internes und externes Audit, ISMS, PDCA, Nachweise, IT-Grundschutz',
    vorstellung: 'Prüft nicht die Technik, sondern ob sie nachweisbar geregelt ist. Fragt dreimal nach dem Dokument.'
  },
  {
    key: 'itleitung',
    name: 'Frau Brehm',
    rolle: 'IT-Leitung',
    bild: '🗂️',
    themen: 'Welches Verfahren wofür, Beauftragung und Freigabe, §§ 202a–c StGB, Nachtest',
    vorstellung: 'Unterschreibt den Auftrag und haftet dafür. Sie will eine Empfehlung mit Begründung, keine Werkzeugliste.'
  },
  {
    key: 'pia',
    name: 'Pia',
    rolle: 'Azubi, 2. Lehrjahr',
    bild: '🔭',
    themen: 'Zwei Bedeutungen von Blackbox, Schwachstelle und Exploit, CVE und CVSS',
    vorstellung: 'Hat „Blackbox" in zwei Unterrichtsstunden unterschiedlich gehört und ist durcheinander. Bei ihr sortierst du das.'
  },
  {
    key: 'pentestwoche',
    name: '#pentest-woche',
    rolle: 'Gruppenchat',
    bild: '🔴',
    themen: 'Der Test läuft, Alarm im SIEM, Red und Blue Team, Abbruchkriterien',
    vorstellung: 'Der Kanal während der Testwoche. Die halbe Belegschaft weiß nicht, dass es eine Übung ist.'
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
  { key: 'kleinschmidt', name: 'Herr Kleinschmidt (Lager)', farbe: '#fb923c' },

  /* Themengebiet Cookies und ePrivacy */
  { key: 'ostrowski',  name: 'Kevin (Agentur)',          farbe: '#38bdf8' },
  { key: 'keilhauer',  name: 'Frau Dr. Keilhauer (IT-Recht)', farbe: '#c084fc' },
  { key: 'rebholz',    name: 'Marion (Marketing)',       farbe: '#f472b6' },
  { key: 'merle',      name: 'Merle (Azubi)',            farbe: '#4ade80' },

  /* Themengebiet KI und AI Act */
  { key: 'vollmer',    name: 'Hendrik (IT-Projekt)',     farbe: '#38bdf8' },
  { key: 'azizi',      name: 'Herr Azizi (Compliance)',  farbe: '#c084fc' },
  { key: 'gruenwald',  name: 'Frau Grünwald (Personal)', farbe: '#fbbf24' },
  { key: 'noah',       name: 'Noah (Azubi)',             farbe: '#4ade80' },

  /* Themengebiet Tests und Audit */
  { key: 'sarkoezi',   name: 'Yasmin (Pentest, extern)', farbe: '#f87171' },
  { key: 'kaymak',     name: 'Deniz (Entwicklung)',      farbe: '#22d3ee' },
  { key: 'lindemann',  name: 'Herr Lindemann (Auditor)', farbe: '#c084fc' },
  { key: 'brehm',      name: 'Frau Brehm (IT-Leitung)',  farbe: '#fbbf24' },
  { key: 'pia',        name: 'Pia (Azubi)',              farbe: '#4ade80' }
];
AUDIT.data.sprecherMap = {};
AUDIT.data.sprecher.forEach(function (s) { AUDIT.data.sprecherMap[s.key] = s; });

/* Alle Gespräche – die dialoge-*.js hängen sich hier an */
AUDIT.data.dialoge = AUDIT.data.dialoge || [];
