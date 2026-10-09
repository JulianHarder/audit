/* ===========================================================
   AUDIT – data/rollen.js
   Figuren im Unternehmen, ihre Aufgaben und die Abgrenzung
   zwischen Datenschutzbeauftragtem (DSB) und IT-Sicherheits-
   beauftragtem (ISB).
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.figuren = [
  {
    key: 'gf', name: 'Geschäftsführung', icon: '👔', kurz: 'Trägt die Gesamtverantwortung.',
    text: 'Die Leitung ist der <b>Verantwortliche</b> im Sinne der DSGVO (Art. 4 Nr. 7) und haftet für Verstöße. ' +
          'Sie stellt Mittel und Personal bereit, beschließt Leitlinien und kann die Verantwortung nicht delegieren – ' +
          'nur die Aufgaben.',
    aufgaben: [
      'Verantwortlicher nach Art. 4 Nr. 7 DSGVO, haftet nach Art. 83',
      'Benennt DSB, ISB und Compliance-Verantwortliche',
      'Beschließt Sicherheitsleitlinie und Budget',
      'Entscheidet über Meldung einer Datenpanne (Art. 33)'
    ]
  },
  {
    key: 'dsb', name: 'Datenschutzbeauftragter (DSB)', icon: '🛡️', kurz: 'Schützt die Rechte der Menschen an ihren Daten.',
    text: 'Der DSB <b>berät und überwacht</b> – verantwortlich bleibt die Leitung. Er ist bei seinen Aufgaben ' +
          '<b>weisungsfrei</b>, berichtet direkt an die höchste Managementebene, unterliegt der Verschwiegenheit ' +
          'und darf wegen seiner Tätigkeit nicht benachteiligt werden.',
    rechtsgrundlage: 'Art. 37–39 DSGVO, § 38 BDSG',
    aufgaben: [
      'Unterrichtung und Beratung von Leitung und Beschäftigten',
      'Überwachung der Einhaltung von DSGVO und BDSG',
      'Sensibilisierung und Schulung der Mitarbeiter (Datenschutz)',
      'Beratung bei der Datenschutz-Folgenabschätzung (Art. 35)',
      'Zusammenarbeit mit der Aufsichtsbehörde und Anlaufstelle für sie',
      'Mitwirkung beim Verzeichnis von Verarbeitungstätigkeiten (Art. 30)',
      'Bearbeitung von Betroffenenanfragen begleiten'
    ]
  },
  {
    key: 'isb', name: 'IT-Sicherheitsbeauftragter (ISB)', icon: '🔐', kurz: 'Schützt Informationen und Systeme des Unternehmens.',
    text: 'Der ISB (auch Informationssicherheitsbeauftragter) kümmert sich um die <b>Informationssicherheit insgesamt</b> – ' +
          'alle Informationen und Systeme, nicht nur personenbezogene Daten. Für normale Unternehmen ist die Rolle ' +
          'meist nicht gesetzlich vorgeschrieben, wird aber von Normen, Kunden und Branchenvorgaben verlangt.',
    rechtsgrundlage: 'BSI IT-Grundschutz, ISO/IEC 27001 (kein allgemeines Gesetz)',
    aufgaben: [
      'Steuerung und Koordination des Informationssicherheitsprozesses',
      'Mitarbeit an der Sicherheitsleitlinie, Erstellung und Fortschreibung des Sicherheitskonzepts',
      'Beratung der Leitung in Sicherheitsfragen',
      'Prüfen, ob Sicherheitsmaßnahmen umgesetzt sind',
      'Untersuchung von Sicherheitsvorfällen',
      'Sensibilisierung und Schulung der Mitarbeiter (Sicherheit)',
      'Regelmäßiger Bericht an die Leitung'
    ]
  },
  {
    key: 'compliance', name: 'Compliance-Beauftragter', icon: '⚖️', kurz: 'Sorgt für Regeltreue im ganzen Unternehmen.',
    text: 'Compliance bedeutet Einhaltung von Gesetzen, internen Richtlinien und freiwilligen Selbstverpflichtungen – ' +
          'von Korruptionsprävention über Lizenzen bis zu Aufbewahrungsfristen. Datenschutz und IT-Sicherheit sind ' +
          'Teilbereiche davon.',
    aufgaben: [
      'Aufbau und Pflege des Compliance-Management-Systems',
      'Verhaltenskodex (Code of Conduct) und interne Richtlinien',
      'Hinweisgebersystem betreiben (Hinweisgeberschutzgesetz)',
      'Schulungen zu Korruption, Kartellrecht, Lizenzen',
      'Kontrollen und Berichte an die Leitung'
    ]
  },
  {
    key: 'it', name: 'IT-Abteilung', icon: '🧑‍💻', kurz: 'Setzt technische Maßnahmen um.',
    text: 'Die IT betreibt die Systeme und setzt die Maßnahmen technisch um. Wichtig: Der IT-Leiter sollte <b>nicht</b> ' +
          'gleichzeitig DSB sein – er würde sich selbst kontrollieren (Interessenkonflikt nach Art. 38 Abs. 6).',
    aufgaben: [
      'Technische Maßnahmen umsetzen (Updates, Backup, Rechte, Verschlüsselung)',
      'Systeme betreiben und überwachen',
      'Vorfälle technisch analysieren und eindämmen',
      'Daten für Auskünfte und Löschungen bereitstellen'
    ]
  },
  {
    key: 'mitarbeiter', name: 'Beschäftigte', icon: '🧑‍💼', kurz: 'Halten Regeln ein und melden Vorfälle.',
    text: 'Beschäftigte werden auf Vertraulichkeit verpflichtet, nehmen an Schulungen teil und melden verdächtige ' +
          'Vorgänge. Sie sind der wirksamste Schutz – und zugleich das häufigste Einfallstor.',
    aufgaben: [
      'Richtlinien einhalten, sorgsam mit Daten umgehen',
      'Verdächtige Mails und Vorfälle unverzüglich melden',
      'An Schulungen teilnehmen',
      'Verschwiegenheit wahren (auch nach dem Ausscheiden)'
    ]
  }
];
AUDIT.data.figurenMap = {};
AUDIT.data.figuren.forEach(function (f) { AUDIT.data.figurenMap[f.key] = f; });

/* ---------------- Abgrenzung DSB / ISB ---------------- */

AUDIT.data.dsbIsbAufgaben = [
  { key: 't1', text: 'Betroffenenanfragen (Auskunft, Löschung) begleiten', wo: 'dsb' },
  { key: 't2', text: 'Verzeichnis von Verarbeitungstätigkeiten (Art. 30) pflegen', wo: 'dsb' },
  { key: 't3', text: 'Datenschutz-Folgenabschätzung beraten (Art. 35)', wo: 'dsb' },
  { key: 't4', text: 'Anlaufstelle für die Datenschutz-Aufsichtsbehörde', wo: 'dsb' },
  { key: 't5', text: 'Rechtmäßigkeit einer Verarbeitung prüfen (Rechtsgrundlage)', wo: 'dsb' },
  { key: 't6', text: 'Sicherheitskonzept erstellen und fortschreiben', wo: 'isb' },
  { key: 't7', text: 'Patch- und Virenschutzkonzept festlegen', wo: 'isb' },
  { key: 't8', text: 'Notfall- und Wiederanlaufplanung (Business Continuity)', wo: 'isb' },
  { key: 't9', text: 'Schutz von Betriebsgeheimnissen und Konstruktionsdaten', wo: 'isb' },
  { key: 't10', text: 'Informationssicherheits-Managementsystem nach ISO 27001 betreuen', wo: 'isb' },
  { key: 't11', text: 'Technische und organisatorische Maßnahmen festlegen und prüfen', wo: 'beide' },
  { key: 't12', text: 'Sicherheitsvorfall untersuchen und bewerten', wo: 'beide' },
  { key: 't13', text: 'Mitarbeiter schulen und sensibilisieren', wo: 'beide' },
  { key: 't14', text: 'Leitung beraten und regelmäßig berichten', wo: 'beide' },
  { key: 't15', text: 'Bei einer Datenpanne zusammenarbeiten (Art. 33/34)', wo: 'beide' }
];

/* ---------------- Benennungspflicht DSB ---------------- */

AUDIT.data.dsbPflichtFragen = [
  { key: 'zwanzig', frage: 'Sind in der Regel mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt?',
    norm: '§ 38 Abs. 1 BDSG', pflicht: true },
  { key: 'dsfa', frage: 'Werden Verarbeitungen durchgeführt, die eine Datenschutz-Folgenabschätzung erfordern?',
    norm: '§ 38 Abs. 1 Satz 2 BDSG i. V. m. Art. 35', pflicht: true },
  { key: 'uebermittlung', frage: 'Werden personenbezogene Daten geschäftsmäßig zum Zweck der Übermittlung oder für Markt- und Meinungsforschung verarbeitet?',
    norm: '§ 38 Abs. 1 Satz 2 BDSG', pflicht: true },
  { key: 'kerntaetigkeit', frage: 'Besteht die Kerntätigkeit in umfangreicher regelmäßiger und systematischer Überwachung von Personen?',
    norm: 'Art. 37 Abs. 1 lit. b DSGVO', pflicht: true },
  { key: 'art9kern', frage: 'Besteht die Kerntätigkeit in der umfangreichen Verarbeitung besonderer Kategorien (Art. 9) oder von Daten über Straftaten?',
    norm: 'Art. 37 Abs. 1 lit. c DSGVO', pflicht: true },
  { key: 'behoerde', frage: 'Handelt es sich um eine Behörde oder öffentliche Stelle?',
    norm: 'Art. 37 Abs. 1 lit. a DSGVO', pflicht: true }
];
