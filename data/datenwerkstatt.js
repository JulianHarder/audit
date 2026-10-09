/* ===========================================================
   AUDIT – data/datenwerkstatt.js
   Inhalte für die Formular-Werkstatt (Privacy by Design/Default)
   und das Daten-Labor (Pseudonymisierung/Anonymisierung).
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

/* ---------------- Formular-Werkstatt ----------------
   Zweck des Formulars: Kundenkonto im Webshop anlegen.
   noetig:     für diesen Zweck erforderlich -> darf Pflichtfeld sein
   einwilligung: Feld beruht auf Einwilligung -> darf nie vorangekreuzt
                 und nie Pflicht sein                                  */

AUDIT.data.formularfelder = [
  { key: 'name',     name: 'Name',                 icon: '🪪', noetig: true,
    warum: 'Für Vertrag und Rechnung erforderlich.' },
  { key: 'email',    name: 'E-Mail-Adresse',       icon: '✉️', noetig: true,
    warum: 'Login und Bestellbestätigung – ohne geht es nicht.' },
  { key: 'passwort', name: 'Passwort',             icon: '🔑', noetig: true,
    warum: 'Zugangsschutz für das Kundenkonto.' },
  { key: 'adresse',  name: 'Lieferadresse',        icon: '🏠', noetig: true,
    warum: 'Ohne Adresse keine Lieferung.' },
  { key: 'geburt',   name: 'Geburtsdatum',         icon: '🎂', noetig: false,
    warum: 'Für ein Verpackungs-Webshopkonto nicht erforderlich. Nur bei Altersfreigaben nötig – dann reicht meist eine Ja/Nein-Prüfung.' },
  { key: 'telefon',  name: 'Telefonnummer',        icon: '📞', noetig: false,
    warum: 'Praktisch für Rückfragen, aber nicht erforderlich – also höchstens freiwillig.' },
  { key: 'geschlecht', name: 'Geschlecht / Anrede', icon: '🚻', noetig: false,
    warum: 'Für die Vertragserfüllung nicht nötig. Wenn überhaupt, dann freiwillig und mit Option "keine Angabe".' },
  { key: 'beruf',    name: 'Beruf',                icon: '💼', noetig: false,
    warum: 'Reine Marktforschung – für den Vertrag nicht erforderlich.' },
  { key: 'newsletter', name: 'Newsletter abonnieren', icon: '📣', noetig: false, einwilligung: true,
    warum: 'Werbung beruht auf einer Einwilligung (Art. 6 Abs. 1 lit. a). Die muss aktiv erteilt werden – nicht vorangekreuzt.' },
  { key: 'partner',  name: 'Datenweitergabe an Partnerfirmen', icon: '🤝', noetig: false, einwilligung: true,
    warum: 'Weitergabe zu Werbezwecken braucht eine ausdrückliche, aktive Einwilligung. Vorangekreuzt ist sie unwirksam.' },
  { key: 'tracking', name: 'Nutzungsanalyse / Tracking', icon: '📊', noetig: false, einwilligung: true,
    warum: 'Analyse-Cookies brauchen eine Einwilligung (§ 25 TDDDG). Voreingestellt "an" ist unzulässig.' },
  { key: 'agb',      name: 'AGB akzeptieren',      icon: '📜', noetig: true, pflichtOk: true,
    warum: 'Vertragsgrundlage – darf und muss aktiv bestätigt werden (aber nicht vorangekreuzt).' }
];

AUDIT.data.formularOptionen = [
  { key: 'https',    name: 'Übertragung per HTTPS', gut: true,
    text: 'Verschlüsselte Übertragung ist Stand der Technik und nach Art. 32 DSGVO geschuldet. Privacy by Design.' },
  { key: 'hash',     name: 'Passwort gehasht speichern (z. B. bcrypt/Argon2)', gut: true,
    text: 'Passwörter dürfen nie im Klartext gespeichert werden. Ein starker Hash mit Salt ist Technikgestaltung nach Art. 25 Abs. 1.' },
  { key: 'hinweis',  name: 'Datenschutzhinweis direkt am Formular', gut: true,
    text: 'Informationspflicht nach Art. 13: schon bei der Erhebung, verständlich und leicht zugänglich.' },
  { key: 'doubleopt', name: 'Double-Opt-in beim Newsletter', gut: true,
    text: 'Bestätigungsmail belegt, dass die Einwilligung wirklich von der Person stammt – wichtig für die Nachweispflicht (Art. 7 Abs. 1).' },
  { key: 'loeschfrist', name: 'Automatische Löschfrist für inaktive Konten', gut: true,
    text: 'Speicherbegrenzung (Art. 5 Abs. 1 lit. e) und Privacy by Default: Daten verschwinden von selbst, wenn der Zweck entfällt.' }
];

/* Zwei fertige Beispiele für den Vorher/Nachher-Vergleich */
AUDIT.data.formularBeispiele = {
  schlecht: {
    name: 'So besser nicht',
    felder: {
      name: { aktiv: true, pflicht: true,  vor: false },
      email: { aktiv: true, pflicht: true,  vor: false },
      passwort: { aktiv: true, pflicht: true,  vor: false },
      adresse: { aktiv: true, pflicht: true,  vor: false },
      geburt: { aktiv: true, pflicht: true,  vor: false },
      telefon: { aktiv: true, pflicht: true,  vor: false },
      geschlecht: { aktiv: true, pflicht: true,  vor: false },
      beruf: { aktiv: true, pflicht: true,  vor: false },
      newsletter: { aktiv: true, pflicht: false, vor: true },
      partner: { aktiv: true, pflicht: false, vor: true },
      tracking: { aktiv: true, pflicht: false, vor: true },
      agb: { aktiv: true, pflicht: true, vor: true }
    },
    optionen: {}
  },
  gut: {
    name: 'Datenschutzfreundlich',
    felder: {
      name: { aktiv: true, pflicht: true, vor: false },
      email: { aktiv: true, pflicht: true, vor: false },
      passwort: { aktiv: true, pflicht: true, vor: false },
      adresse: { aktiv: true, pflicht: true, vor: false },
      telefon: { aktiv: true, pflicht: false, vor: false },
      newsletter: { aktiv: true, pflicht: false, vor: false },
      agb: { aktiv: true, pflicht: true, vor: false }
    },
    optionen: { https: true, hash: true, hinweis: true, doubleopt: true, loeschfrist: true }
  }
};

/* ---------------- Daten-Labor ---------------- */

AUDIT.data.laborTabelle = {
  spalten: [
    { key: 'name',  name: 'Name' },
    { key: 'email', name: 'E-Mail' },
    { key: 'geburt', name: 'Geburtsdatum' },
    { key: 'plz',   name: 'PLZ' },
    { key: 'bestellungen', name: 'Bestellungen' }
  ],
  zeilen: [
    { name: 'Anja Weber',     email: 'a.weber@example.de',  geburt: '14.03.1988', plz: '32756', bestellungen: 12 },
    { name: 'Murat Kaya',     email: 'm.kaya@example.de',   geburt: '02.11.1995', plz: '32758', bestellungen: 3 },
    { name: 'Tobias Albers',  email: 't.albers@example.de', geburt: '27.07.1973', plz: '32791', bestellungen: 27 },
    { name: 'Sina Nowak',     email: 's.nowak@example.de',  geburt: '09.01.1992', plz: '32756', bestellungen: 5 },
    { name: 'Lars Brinkmann', email: 'l.brink@example.de',  geburt: '30.05.1980', plz: '33602', bestellungen: 18 }
  ]
};

AUDIT.data.laborWerkzeuge = [
  { key: 'pseudonym', name: 'Name → Kundennummer', icon: '🎭',
    kurz: 'Namen durch Kundennummern ersetzen, Zuordnungstabelle getrennt aufbewahren.',
    text: 'Das ist eine Pseudonymisierung (Art. 4 Nr. 5). Mit der Zuordnungstabelle lässt sich der Personenbezug ' +
          'wiederherstellen – die Daten bleiben personenbezogen und die DSGVO gilt weiter.' },
  { key: 'nameweg', name: 'Name löschen', icon: '🗑',
    kurz: 'Die Spalte Name vollständig entfernen.',
    text: 'Ein direkter Identifikator weniger. Allein reicht das noch nicht für Anonymität.' },
  { key: 'mailweg', name: 'E-Mail löschen', icon: '✂️',
    kurz: 'Die Spalte E-Mail vollständig entfernen.',
    text: 'Auch die E-Mail-Adresse identifiziert eine Person direkt.' },
  { key: 'altersgruppe', name: 'Geburtsdatum → Altersgruppe', icon: '📊',
    kurz: 'Statt des genauen Datums nur noch eine Spanne (z. B. 30–39).',
    text: 'Vergröbern (Generalisierung) nimmt dem Quasi-Identifikator seine Schärfe.' },
  { key: 'plzkurz', name: 'PLZ kürzen', icon: '📍',
    kurz: 'Nur noch die ersten drei Stellen der Postleitzahl.',
    text: 'Aus 32756 wird 327xx – der Bereich umfasst dann viele tausend Menschen.' },
  { key: 'aggregieren', name: 'Zusammenfassen (aggregieren)', icon: '📈',
    kurz: 'Nur noch Summen und Anteile statt einzelner Zeilen.',
    text: 'Aus Einzeldaten wird eine Statistik: "34 % der Kunden kommen aus dem Kreis Lippe". ' +
          'Richtig gemacht ist das echte Anonymisierung – die DSGVO gilt dann nicht mehr.' },
  { key: 'zuordnung', name: 'Zuordnungstabelle danebenlegen', icon: '🔗',
    kurz: 'Die getrennt aufbewahrte Tabelle wieder hinzunehmen.',
    text: 'Genau das zeigt, warum pseudonyme Daten weiter personenbezogen sind: Mit dem Zusatzwissen ' +
          'ist jede Zeile wieder einer Person zuzuordnen.', nurBei: 'pseudonym' }
];
