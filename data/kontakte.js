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
  { key: 'extern',     name: 'IT-Dienstleister Nord',   farbe: '#94a3b8' }
];
AUDIT.data.sprecherMap = {};
AUDIT.data.sprecher.forEach(function (s) { AUDIT.data.sprecherMap[s.key] = s; });

/* Alle Gespräche – die dialoge-*.js hängen sich hier an */
AUDIT.data.dialoge = AUDIT.data.dialoge || [];
