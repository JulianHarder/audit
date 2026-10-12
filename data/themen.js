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
