/* ===========================================================
   AUDIT – data/ereignisse.js
   Ereignis-Karten für Station 4: Wer ist zuständig?
   richtig: alle Rollen, die sinnvoll beteiligt sind
   fuehrend: die Rolle, die den Fall federführend bearbeitet
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.ereignisse = [
  {
    key: 'e1', icon: '✉️', text: 'Ein Kunde verlangt Auskunft über seine gespeicherten Daten.',
    fuehrend: 'dsb', richtig: ['dsb', 'it'],
    erklaerung: 'Der <b>DSB</b> begleitet die Beantwortung und achtet auf Vollständigkeit und Frist (1 Monat, Art. 12). ' +
      'Die <b>IT</b> stellt die Daten technisch zusammen. Erteilt wird die Auskunft vom Verantwortlichen, also der Firma.',
    norm: 'Art. 15 DSGVO'
  },
  {
    key: 'e2', icon: '☁️', text: 'Für die Personalabteilung soll eine neue Cloud-Software eingeführt werden.',
    fuehrend: 'dsb', richtig: ['dsb', 'isb', 'gf'],
    erklaerung: 'Der <b>DSB</b> prüft Rechtsgrundlage, AV-Vertrag (Art. 28), Drittlandtransfer und ob eine ' +
      '<b>Datenschutz-Folgenabschätzung</b> nötig ist (Art. 35 – bei Beschäftigtendaten gut möglich). ' +
      'Der <b>ISB</b> bewertet die Sicherheit des Anbieters, die <b>Geschäftsführung</b> entscheidet und trägt die Verantwortung.',
    norm: 'Art. 28, 32, 35 DSGVO'
  },
  {
    key: 'e3', icon: '🔒', text: 'Auf einem Server wurde Ransomware entdeckt.',
    fuehrend: 'isb', richtig: ['isb', 'it', 'gf', 'dsb'],
    erklaerung: 'Der <b>ISB</b> leitet die Vorfallsbehandlung, die <b>IT</b> trennt die Systeme und stellt wieder her, ' +
      'die <b>Geschäftsführung</b> wird informiert. Sind personenbezogene Daten betroffen, ist der <b>DSB</b> sofort ' +
      'einzubinden: Meldung an die Aufsichtsbehörde binnen <b>72 Stunden</b> (Art. 33) und ggf. Benachrichtigung ' +
      'der Betroffenen (Art. 34).',
    norm: 'Art. 33, 34 DSGVO'
  },
  {
    key: 'e4', icon: '📤', text: 'Ein Mitarbeiter will Kundendaten in seine private Dropbox hochladen.',
    fuehrend: 'dsb', richtig: ['dsb', 'isb'],
    erklaerung: 'Unzulässige Übermittlung an einen nicht beauftragten Dienst. Der <b>DSB</b> klärt die ' +
      'datenschutzrechtliche Seite auf, der <b>ISB</b> sorgt für technische Unterbindung und Sensibilisierung. ' +
      'Grundlage ist eine klare Richtlinie zur Nutzung privater Dienste (Schatten-IT).',
    norm: 'Art. 5, 32 DSGVO'
  },
  {
    key: 'e5', icon: '🏛️', text: 'Die Aufsichtsbehörde fragt nach dem Verzeichnis von Verarbeitungstätigkeiten.',
    fuehrend: 'dsb', richtig: ['dsb', 'gf'],
    erklaerung: 'Der <b>DSB</b> ist Anlaufstelle für die Aufsichtsbehörde (Art. 39 Abs. 1 lit. e) und führt das ' +
      'Verzeichnis mit. Vorlagepflichtig ist der <b>Verantwortliche</b>, also die Geschäftsführung.',
    norm: 'Art. 30, 31, 39 DSGVO'
  },
  {
    key: 'e6', icon: '🏗️', text: 'Für das neue Lager muss ein Sicherheitskonzept erstellt werden.',
    fuehrend: 'isb', richtig: ['isb', 'gf'],
    erklaerung: 'Das Sicherheitskonzept gehört zu den Kernaufgaben des <b>ISB</b> (BSI IT-Grundschutz). ' +
      'Die <b>Geschäftsführung</b> beschließt es und stellt die Mittel bereit.',
    norm: 'BSI-Standard 200-2'
  },
  {
    key: 'e7', icon: '🤫', text: 'Ein Mitarbeiter meldet anonym, dass ein Kollege Schmiergeld annimmt.',
    fuehrend: 'compliance', richtig: ['compliance', 'gf'],
    erklaerung: 'Klassischer <b>Compliance</b>-Fall (Korruption). Die Meldung läuft über das Hinweisgebersystem; ' +
      'der Hinweisgeber ist nach dem Hinweisgeberschutzgesetz vor Benachteiligung geschützt. ' +
      'Mit Datenschutz oder IT-Sicherheit hat der Fall nichts zu tun.',
    norm: 'Hinweisgeberschutzgesetz (HinSchG)'
  },
  {
    key: 'e8', icon: '🎓', text: 'Die jährliche Sicherheits- und Datenschutzschulung muss geplant werden.',
    fuehrend: 'isb', richtig: ['isb', 'dsb'],
    erklaerung: 'Sensibilisierung ist Aufgabe <b>beider</b>: Der ISB schult zu Informationssicherheit, ' +
      'der DSB zum Datenschutz (Art. 39 Abs. 1 lit. b). In der Praxis machen sie das gemeinsam.',
    norm: 'Art. 39 DSGVO, BSI IT-Grundschutz'
  },
  {
    key: 'e9', icon: '📹', text: 'Am Lagertor soll eine Videoüberwachung installiert werden.',
    fuehrend: 'dsb', richtig: ['dsb', 'isb', 'gf'],
    erklaerung: 'Der <b>DSB</b> prüft Rechtsgrundlage (meist berechtigtes Interesse, Art. 6 Abs. 1 lit. f), ' +
      'Interessenabwägung, Hinweisschilder, Löschfristen und ob eine DSFA nötig ist. ' +
      'Der <b>ISB</b> bewertet den Sicherheitsnutzen. Werden Beschäftigte erfasst, ist der Betriebsrat zu beteiligen.',
    norm: 'Art. 6, 13, 35 DSGVO, § 26 BDSG, § 87 BetrVG'
  },
  {
    key: 'e10', icon: '💽', text: 'Auf mehreren Rechnern läuft Software ohne gültige Lizenz.',
    fuehrend: 'compliance', richtig: ['compliance', 'it', 'gf'],
    erklaerung: 'Lizenz- und Urheberrecht ist <b>IT-Compliance</b>. Die <b>IT</b> schafft Transparenz über die ' +
      'eingesetzte Software, die <b>Geschäftsführung</b> haftet für Verstöße.',
    norm: 'UrhG, Lizenzverträge'
  },
  {
    key: 'e11', icon: '🗑️', text: 'Es ist unklar, wie lange alte Bewerbungsunterlagen aufbewahrt werden dürfen.',
    fuehrend: 'dsb', richtig: ['dsb'],
    erklaerung: 'Speicherbegrenzung (Art. 5 Abs. 1 lit. e): Der <b>DSB</b> erarbeitet ein Löschkonzept. ' +
      'Bewerbungsunterlagen werden in der Regel etwa sechs Monate nach Abschluss des Verfahrens gelöscht ' +
      '(Fristen des AGG), außer die Person stimmt einer längeren Aufbewahrung zu.',
    norm: 'Art. 5, 17 DSGVO, § 15 AGG'
  },
  {
    key: 'e12', icon: '🔑', text: 'Es soll festgelegt werden, wie lang und wie komplex Passwörter sein müssen.',
    fuehrend: 'isb', richtig: ['isb', 'it'],
    erklaerung: 'Eine technische Sicherheitsvorgabe – Sache des <b>ISB</b>, umgesetzt von der <b>IT</b>. ' +
      'Der DSB ist nur mittelbar betroffen (Zugangskontrolle als TOM nach Art. 32).',
    norm: 'BSI IT-Grundschutz ORP.4'
  },
  {
    key: 'e13', icon: '⚠️', text: 'Ein Laptop mit unverschlüsselter Kundendatenbank wurde im Zug vergessen.',
    fuehrend: 'dsb', richtig: ['dsb', 'isb', 'gf'],
    erklaerung: 'Verlust personenbezogener Daten = <b>Datenpanne</b>. Der <b>DSB</b> bewertet die Meldepflicht ' +
      '(Art. 33, 72 Stunden) und das Risiko für die Betroffenen (Art. 34). Der <b>ISB</b> klärt den Hergang. ' +
      'Wäre die Festplatte verschlüsselt gewesen, wäre das Risiko deutlich geringer – oft entfällt dann die ' +
      'Benachrichtigung der Betroffenen.',
    norm: 'Art. 33, 34 DSGVO'
  },
  {
    key: 'e14', icon: '📝', text: 'Neue Beschäftigte sollen auf Vertraulichkeit verpflichtet werden.',
    fuehrend: 'dsb', richtig: ['dsb', 'compliance'],
    erklaerung: 'Die Verpflichtung auf Vertraulichkeit ist eine organisatorische Maßnahme (Art. 32 Abs. 4). ' +
      'Der <b>DSB</b> stellt die Vorlage bereit und schult, <b>Compliance</b> verankert sie im Onboarding.',
    norm: 'Art. 29, 32 DSGVO'
  },
  {
    key: 'e15', icon: '🧾', text: 'Wer haftet eigentlich, wenn die Aufsichtsbehörde ein Bußgeld verhängt?',
    fuehrend: 'gf', richtig: ['gf'],
    erklaerung: 'Verantwortlicher ist das <b>Unternehmen</b>, vertreten durch die <b>Geschäftsführung</b> – ' +
      'nicht der DSB. Der DSB haftet nicht für Verstöße des Unternehmens; er berät und überwacht. ' +
      'Bußgelder bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes (Art. 83).',
    norm: 'Art. 4 Nr. 7, 83 DSGVO'
  }
];
