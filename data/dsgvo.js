/* ===========================================================
   AUDIT – data/dsgvo.js
   Datenarten, Rechtsgrundlagen, Zwecke, Grundsätze und die
   Prüfregeln für den Audit-Durchlauf in Station 3.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

/* ---------------- Datenarten ---------------- */

AUDIT.data.datenarten = [
  { key: 'name',     name: 'Name',               icon: '🪪', art9: false, info: 'Vor- und Nachname – der klassische direkte Identifikator.' },
  { key: 'adresse',  name: 'Anschrift',          icon: '🏠', art9: false, info: 'Straße, PLZ, Ort. Zusammen mit dem Geburtsdatum oft eindeutig.' },
  { key: 'email',    name: 'E-Mail-Adresse',     icon: '✉️', art9: false, info: 'Direkter Identifikator und Kontaktweg.' },
  { key: 'telefon',  name: 'Telefonnummer',      icon: '📞', art9: false, info: 'Kontaktdatum, oft eindeutig einer Person zuzuordnen.' },
  { key: 'geburt',   name: 'Geburtsdatum',       icon: '🎂', art9: false, info: 'Starker Quasi-Identifikator: Geburtsdatum + PLZ + Geschlecht identifiziert viele Menschen eindeutig.' },
  { key: 'bank',     name: 'Bankverbindung',     icon: '🏦', art9: false, info: 'IBAN und Kontodaten. Keine besondere Kategorie, aber hoher Schutzbedarf.' },
  { key: 'bestell',  name: 'Bestellhistorie',    icon: '📦', art9: false, info: 'Was jemand wann gekauft hat. Kann sehr viel über eine Person verraten.' },
  { key: 'ip',       name: 'IP-Adresse',         icon: '🌐', art9: false, info: 'Gilt nach EuGH-Rechtsprechung in der Regel als personenbezogenes Datum.' },
  { key: 'standort', name: 'Standortdaten',      icon: '🛰️', art9: false, info: 'Bewegungsprofile – bei Beschäftigten ein schwerer Eingriff, Mitbestimmung beachten.' },
  { key: 'bewerbung',name: 'Bewerbungsunterlagen', icon: '📝', art9: false, info: 'Lebenslauf, Zeugnisse. Nur für das Bewerbungsverfahren, danach löschen.' },
  { key: 'gesundheit', name: 'Gesundheitsdaten', icon: '🩺', art9: true,  info: 'Besondere Kategorie nach Art. 9: Krankmeldungen, Diagnosen, Schwerbehinderung.' },
  { key: 'religion', name: 'Religionszugehörigkeit', icon: '⛪', art9: true, info: 'Besondere Kategorie nach Art. 9 – in der Lohnbuchhaltung wegen der Kirchensteuer zulässig.' },
  { key: 'gewerk',   name: 'Gewerkschaftszugehörigkeit', icon: '✊', art9: true, info: 'Besondere Kategorie nach Art. 9.' },
  { key: 'biometrie',name: 'Biometrische Daten', icon: '👁️', art9: true,  info: 'Fingerabdruck, Gesichtsscan – besondere Kategorie, wenn zur eindeutigen Identifizierung genutzt.' }
];
AUDIT.data.datenartenMap = {};
AUDIT.data.datenarten.forEach(function (d) { AUDIT.data.datenartenMap[d.key] = d; });

/* ---------------- Rechtsgrundlagen (Art. 6 Abs. 1) ---------------- */

AUDIT.data.rechtsgrundlagen = [
  { key: 'a', name: 'a) Einwilligung', kurz: 'Einwilligung',
    text: 'Die betroffene Person hat freiwillig, informiert und für den konkreten Zweck eingewilligt. Jederzeit widerrufbar (Art. 7 Abs. 3).',
    bsp: 'Newsletter, Foto auf der Firmenwebsite, nicht notwendige Cookies' },
  { key: 'b', name: 'b) Vertrag', kurz: 'Vertrag',
    text: 'Die Verarbeitung ist für die Erfüllung eines Vertrags oder für vorvertragliche Maßnahmen erforderlich.',
    bsp: 'Lieferadresse für eine Bestellung, Bewerbungsverfahren, Arbeitsvertrag' },
  { key: 'c', name: 'c) Rechtliche Verpflichtung', kurz: 'Gesetz',
    text: 'Eine gesetzliche Pflicht verlangt die Verarbeitung.',
    bsp: 'Rechnungen 10 Jahre aufbewahren (§ 147 AO), Meldungen an Sozialversicherung und Finanzamt' },
  { key: 'd', name: 'd) Lebenswichtige Interessen', kurz: 'Leben',
    text: 'Die Verarbeitung schützt Leben oder Gesundheit einer Person.',
    bsp: 'Notfalldaten nach einem Betriebsunfall' },
  { key: 'e', name: 'e) Öffentliches Interesse', kurz: 'öffentlich',
    text: 'Wahrnehmung einer Aufgabe im öffentlichen Interesse oder in Ausübung öffentlicher Gewalt.',
    bsp: 'Behörden, öffentliche Stellen – für ein Logistikunternehmen selten einschlägig' },
  { key: 'f', name: 'f) Berechtigtes Interesse', kurz: 'Interesse',
    text: 'Berechtigtes Interesse des Verantwortlichen, sofern die Interessen der betroffenen Person nicht überwiegen. Erfordert eine dokumentierte Abwägung.',
    bsp: 'Videoüberwachung des Lagers, IT-Sicherheitsprotokolle, Bestandskundenwerbung' }
];
AUDIT.data.rechtsgrundlagenMap = {};
AUDIT.data.rechtsgrundlagen.forEach(function (r) { AUDIT.data.rechtsgrundlagenMap[r.key] = r; });

/* ---------------- Zwecke mit den dafür erforderlichen Daten ----------------
   Grundlage für die Prüfung der Datenminimierung (Art. 5 Abs. 1 lit. c). */

AUDIT.data.zwecke = [
  { key: 'bestellung', name: 'Bestellabwicklung im Webshop',
    noetig: ['name', 'adresse', 'email', 'bank', 'bestell'], empfohlen: 'b' },
  { key: 'kundenbetreuung', name: 'Kundenbetreuung und Vertrieb',
    noetig: ['name', 'adresse', 'email', 'telefon', 'bestell'], empfohlen: 'f' },
  { key: 'werbung', name: 'Werbung per Newsletter',
    noetig: ['name', 'email'], empfohlen: 'a' },
  { key: 'bewerbung', name: 'Bewerbungsverfahren',
    noetig: ['name', 'email', 'telefon', 'adresse', 'bewerbung'], empfohlen: 'b' },
  { key: 'personal', name: 'Personalverwaltung und Lohnabrechnung',
    noetig: ['name', 'adresse', 'geburt', 'bank', 'gesundheit', 'religion'], empfohlen: 'c' },
  { key: 'archiv', name: 'Archivierung / gesetzliche Aufbewahrung',
    noetig: ['name', 'adresse', 'bank', 'bestell', 'bewerbung', 'gesundheit'], empfohlen: 'c' },
  { key: 'wartung', name: 'Wartung und Support durch Dienstleister',
    noetig: [], empfohlen: 'f',
    hinweis: 'Für Wartung braucht der Dienstleister in der Regel keine Klardaten. Wenn doch, ist er Auftragsverarbeiter nach Art. 28.' },
  { key: 'tracking', name: 'Fahrzeug- und Tourenverfolgung',
    noetig: ['standort', 'name'], empfohlen: 'f',
    hinweis: 'Bei Beschäftigten: Mitbestimmung des Betriebsrats und ggf. Datenschutz-Folgenabschätzung nach Art. 35.' },
  { key: 'intern', name: 'Interne Arbeitsabläufe',
    noetig: ['name', 'email'], empfohlen: 'c' }
];
AUDIT.data.zweckeMap = {};
AUDIT.data.zwecke.forEach(function (z) { AUDIT.data.zweckeMap[z.key] = z; });

/* ---------------- Grundsätze (Art. 5) ---------------- */

AUDIT.data.grundsaetze = [
  { key: 'recht',   name: 'Rechtmäßigkeit, Treu und Glauben, Transparenz',
    text: 'Jede Verarbeitung braucht eine Rechtsgrundlage und muss für die Betroffenen nachvollziehbar sein.' },
  { key: 'zweck',   name: 'Zweckbindung',
    text: 'Daten werden für festgelegte, eindeutige und legitime Zwecke erhoben und nicht einfach anders weiterverwendet.' },
  { key: 'minim',   name: 'Datenminimierung',
    text: 'Nur so viele Daten wie für den Zweck wirklich nötig – nicht auf Vorrat.' },
  { key: 'richtig', name: 'Richtigkeit',
    text: 'Daten müssen sachlich richtig und aktuell sein; falsche Daten sind zu berichtigen oder zu löschen.' },
  { key: 'speicher',name: 'Speicherbegrenzung',
    text: 'Daten werden nur so lange aufbewahrt, wie es der Zweck oder eine gesetzliche Frist verlangt. Danach: löschen.' },
  { key: 'sicher',  name: 'Integrität und Vertraulichkeit',
    text: 'Angemessene technische und organisatorische Maßnahmen schützen die Daten (Art. 32).' },
  { key: 'rechen',  name: 'Rechenschaftspflicht',
    text: 'Der Verantwortliche muss die Einhaltung aller Grundsätze nachweisen können – z. B. mit dem Verzeichnis von Verarbeitungstätigkeiten.' }
];

/* ---------------- Prüfregeln für den Audit ---------------- */

AUDIT.data.pruefregeln = [
  { key: 'rechtsgrundlage', norm: 'Art. 6 DSGVO', schwere: 'bad',
    titel: 'Keine Rechtsgrundlage angegeben',
    text: 'Ohne Rechtsgrundlage ist die Verarbeitung personenbezogener Daten unzulässig. Zulässig sind nur die sechs Fälle aus Art. 6 Abs. 1.' },
  { key: 'art9', norm: 'Art. 9 DSGVO', schwere: 'bad',
    titel: 'Besondere Kategorien ohne Ausnahme',
    text: 'Gesundheits-, Religions-, Gewerkschafts- und biometrische Daten dürfen grundsätzlich nicht verarbeitet werden. Nötig ist eine Ausnahme nach Art. 9 Abs. 2, etwa die ausdrückliche Einwilligung oder arbeitsrechtliche Pflichten (§ 26 Abs. 3 BDSG).' },
  { key: 'avv', norm: 'Art. 28 DSGVO', schwere: 'bad',
    titel: 'Auftragsverarbeiter ohne Vertrag',
    text: 'Verarbeitet ein externer Dienstleister Daten in deinem Auftrag, braucht es einen Vertrag zur Auftragsverarbeitung (AV-Vertrag) mit festen Mindestinhalten – und du musst seine Maßnahmen kontrollieren.' },
  { key: 'drittland', norm: 'Art. 44 ff. DSGVO', schwere: 'bad',
    titel: 'Übermittlung in ein Drittland ohne Garantien',
    text: 'Eine Übermittlung außerhalb der EU/des EWR ist nur zulässig mit Angemessenheitsbeschluss der EU-Kommission (z. B. EU-US Data Privacy Framework) oder geeigneten Garantien wie Standardvertragsklauseln – plus Prüfung der Lage im Zielland.' },
  { key: 'toms', norm: 'Art. 32 DSGVO', schwere: 'warn',
    titel: 'Keine Verschlüsselung / kein Schutz',
    text: 'Der Verantwortliche muss angemessene technische und organisatorische Maßnahmen treffen. Art. 32 nennt ausdrücklich Pseudonymisierung und Verschlüsselung sowie Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit.' },
  { key: 'minim', norm: 'Art. 5 Abs. 1 lit. c DSGVO', schwere: 'warn',
    titel: 'Mehr Daten als für den Zweck nötig',
    text: 'Grundsatz der Datenminimierung: Es dürfen nur Daten verarbeitet werden, die für den angegebenen Zweck erforderlich sind.' },
  { key: 'zweck', norm: 'Art. 5 Abs. 1 lit. b DSGVO', schwere: 'warn',
    titel: 'Kein Zweck angegeben',
    text: 'Zweckbindung: Der Zweck muss vorher festgelegt und eindeutig sein. Ohne Zweck lässt sich nicht beurteilen, ob die Verarbeitung erforderlich ist.' }
];
AUDIT.data.pruefregelnMap = {};
AUDIT.data.pruefregeln.forEach(function (r) { AUDIT.data.pruefregelnMap[r.key] = r; });

/* ---------------- Rollen und Standorte ---------------- */

AUDIT.data.rollen = [
  { key: 'verantwortlicher', name: 'Verantwortlicher (Art. 4 Nr. 7)',
    text: 'Entscheidet über Zwecke und Mittel der Verarbeitung – hier: die Firma selbst. Sie haftet gegenüber den Betroffenen.' },
  { key: 'auftragsverarbeiter', name: 'Auftragsverarbeiter (Art. 4 Nr. 8)',
    text: 'Verarbeitet Daten nur nach Weisung des Verantwortlichen, z. B. Cloud-Anbieter, Lohnbüro, Newsletter-Dienst. Braucht einen Vertrag nach Art. 28.' }
];

AUDIT.data.standorte = [
  { key: 'eu', name: 'EU / EWR', text: 'Innerhalb der EU und des EWR gilt die DSGVO unmittelbar – kein Drittlandtransfer.' },
  { key: 'drittland', name: 'Drittland (z. B. USA)', text: 'Außerhalb der EU/des EWR. Übermittlung nur nach Art. 44 ff. mit Angemessenheitsbeschluss oder geeigneten Garantien.' }
];

AUDIT.data.garantien = [
  { key: 'keine', name: 'keine Garantien' },
  { key: 'angemessenheit', name: 'Angemessenheitsbeschluss der EU-Kommission' },
  { key: 'sck', name: 'Standardvertragsklauseln (SCC)' },
  { key: 'bcr', name: 'Verbindliche interne Datenschutzvorschriften (BCR)' }
];
