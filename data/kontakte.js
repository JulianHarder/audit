/* ===========================================================
   AUDIT – data/kontakte.js
   Die Gesprächspartner bei der Lippe Logistik GmbH.
   Jeder Kontakt deckt einen Themenbereich der Prüfung ab.
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
  }
];

AUDIT.data.kontakteMap = {};
AUDIT.data.kontakte.forEach(function (k) { AUDIT.data.kontakteMap[k.key] = k; });

/* Alle Gespräche – die dialoge-*.js hängen sich hier an */
AUDIT.data.dialoge = AUDIT.data.dialoge || [];
