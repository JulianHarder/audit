/* ===========================================================
   AUDIT – data/themen.js
   Die Themengebiete. Jedes buendelt eine Reihe von Kontakten
   aus data/kontakte.js und bildet die oberste Ebene: Uebersicht
   -> Themengebiet -> Gespraechspartner -> Gespraech.

   Ein weiteres Gebiet kommt hier als weiterer Eintrag dazu, die
   zugehoerigen Kontakte in data/kontakte.js und die Gespraeche
   in einer eigenen data/dialoge-*.js. Am Programm ist dafuer
   nichts zu aendern.

   Felder:
     key          kommt in der Adresszeile vor (#/t/<key>)
     name         voller Name auf der Uebersichtskarte
     kopf         kurze Fassung fuer die Kopfzeile (optional; ohne
                  Angabe wird name genommen). Auf dem Handy bleiben
                  neben Zurueck-Taste und Knoepfen nur rund 230 Pixel –
                  alles darueber wird abgeschnitten.
     bild         Emoji auf der Karte
     kurz         eine Zeile unter dem Namen, auch in der Kopfzeile
     vorstellung  Einleitung ueber der Kontaktliste des Gebiets
     kontakte     Schluessel aus data/kontakte.js, in dieser Reihenfolge

   Ein Gebiet ohne Gespraeche wird in der Uebersicht als "bald"
   angezeigt und laesst sich nicht oeffnen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.themen = [
  {
    key: 'sicherheit',
    name: 'IT-Sicherheit und Datenschutz',
    kopf: 'Sicherheit & Datenschutz',
    bild: '🔐',
    kurz: 'DSGVO, Schutzziele, Schadsoftware, TOMs und der Ernstfall',
    vorstellung: 'Du bist neu bei der Rampe 7 Logistik GmbH. Wähle jemanden aus – ihr unterhaltet euch, ' +
                 'du entscheidest, und du bekommst sofort die Begründung dazu.',
    kontakte: ['sabrina', 'dsb', 'chefin', 'tim', 'notfall']
  },
  {
    key: 'krypto',
    name: 'Verschlüsselung und Kryptographie',
    kopf: 'Verschlüsselung',
    bild: '🔑',
    kurz: 'Symmetrisch, asymmetrisch, hybrid, Hashverfahren und digitale Signatur',
    vorstellung: 'Rampe 7 stellt die Verschlüsselung um. Vier Leute ziehen dich hinein – ' +
                 'du entscheidest mit, und du bekommst sofort die Begründung dazu.',
    kontakte: ['nadja', 'berater', 'projekt', 'jonas', 'kryptoalarm']
  },
  {
    key: 'netz',
    name: 'Netzwerktechnik',
    kopf: 'Netzwerktechnik',
    bild: '🌐',
    kurz: 'OSI-Modell, IP-Adressen und Subnetting, Protokolle, WLAN und Fehlersuche',
    vorstellung: 'Rampe 7 baut das Netz im Lager neu auf und hängt den zweiten Standort an. ' +
                 'Vier Leute brauchen dabei deine Entscheidung – die Begründung bekommst du sofort dazu.',
    kontakte: ['mirko', 'planer', 'standort', 'leonie', 'netzstoerung']
  },
  {
    key: 'web',
    name: 'Cookies, Tracking und ePrivacy',
    kopf: 'Cookies & Tracking',
    bild: '🍪',
    kurz: 'ePrivacy und TDDDG, Cookie-Arten, Banner und Einwilligung, Tracking und Drittland',
    vorstellung: 'Rampe 7 bekommt einen neuen Onlineshop, und beim Cookie-Banner gehen die Meinungen ' +
                 'auseinander. Fünf Leute ziehen dich hinein – du entscheidest mit, und die Begründung ' +
                 'bekommst du sofort dazu.',
    kontakte: ['anwaeltin', 'webdev', 'marketing', 'merle', 'banneralarm']
  },
  {
    key: 'ki',
    name: 'KI im Betrieb und der EU AI Act',
    kopf: 'KI & AI Act',
    bild: '🤖',
    kurz: 'Risikoklassen, Pflichten für Anbieter und Betreiber, Transparenz, KI und DSGVO',
    vorstellung: 'Rampe 7 probiert KI aus: ein Assistent in der Disposition, ein Chatbot im ' +
                 'Kundenkontakt, eine Software für die Bewerberauswahl. Jedes Mal ist die Frage, was ' +
                 'erlaubt ist – die Begründung bekommst du sofort dazu.',
    kontakte: ['kirecht', 'kiprojekt', 'personal', 'noah', 'kivorfall']
  },
  {
    key: 'tests',
    name: 'Penetrationstest, Softwaretest und Audit',
    kopf: 'Tests & Audit',
    bild: '🔍',
    kurz: 'Blackbox, Greybox, Whitebox – im Pentest und im Softwaretest, dazu Audit und ISMS',
    vorstellung: 'Rampe 7 lässt prüfen: ein Penetrationstest von außen, ein Audit nach ISO 27001, und ' +
                 'die eigene Lagersoftware muss getestet werden. Sechs Leute brauchen deine ' +
                 'Entscheidung – die Begründung bekommst du sofort dazu.',
    kontakte: ['pentest', 'entwickler', 'auditor', 'itleitung', 'pia', 'pentestwoche']
  }
];

AUDIT.data.themenMap = {};
AUDIT.data.themen.forEach(function (t) { AUDIT.data.themenMap[t.key] = t; });

/* Rueckweg: zu welchem Gebiet gehoert ein Kontakt? Braucht die
   Zurueck-Taste, wenn jemand ein Gespraech direkt verlinkt bekommt. */
AUDIT.data.themaVonKontakt = {};
AUDIT.data.themen.forEach(function (t) {
  (t.kontakte || []).forEach(function (k) { AUDIT.data.themaVonKontakt[k] = t.key; });
});
