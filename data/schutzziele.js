/* ===========================================================
   AUDIT – data/schutzziele.js
   Schutzziele, Schutzbedarfskategorien, Schadensszenarien
   Quelle der Einteilung: BSI-Standard 200-2 (IT-Grundschutz)
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.schutzziele = [
  {
    key: 'v', kurz: 'V', name: 'Vertraulichkeit', farbe: 'var(--ziel-v)',
    bedeutung: 'Nur Berechtigte haben Zugriff auf Informationen.',
    verletzung: [
      'Kundendaten werden gestohlen und im Netz veröffentlicht',
      'Eine E-Mail mit Gehaltsliste geht an den falschen Empfänger',
      'Ein Unbefugter liest am unbeaufsichtigten PC mit'
    ],
    massnahmen: 'Verschlüsselung, Berechtigungskonzept, Zugangs- und Zugriffskontrolle, Verschwiegenheitsverpflichtung'
  },
  {
    key: 'i', kurz: 'I', name: 'Integrität', farbe: 'var(--ziel-i)',
    bedeutung: 'Daten sind korrekt, vollständig und nicht unbemerkt verändert.',
    verletzung: [
      'Eine Überweisung wird auf dem Weg manipuliert',
      'Preise im Webshop werden von außen verändert',
      'Ein Virus verändert oder beschädigt Dateien'
    ],
    massnahmen: 'Hashwerte und Signaturen, Protokollierung (Eingabekontrolle), Vier-Augen-Prinzip, Virenschutz'
  },
  {
    key: 'a', kurz: 'A', name: 'Verfügbarkeit', farbe: 'var(--ziel-a)',
    bedeutung: 'Systeme und Daten sind nutzbar, wenn sie gebraucht werden.',
    verletzung: [
      'Der Server fällt aus und der Versand steht still',
      'Ransomware sperrt alle Dateien',
      'Ein DDoS-Angriff macht den Webshop unerreichbar'
    ],
    massnahmen: 'Backup, Redundanz (RAID, Cluster), USV, Notfallkonzept, DDoS-Schutz'
  }
];

AUDIT.data.stufen = [
  {
    key: 'normal', name: 'normal', farbe: 'var(--sb-normal)', wert: 1,
    auswirkung: 'Die Schadensauswirkungen sind begrenzt und überschaubar.'
  },
  {
    key: 'hoch', name: 'hoch', farbe: 'var(--sb-hoch)', wert: 2,
    auswirkung: 'Die Schadensauswirkungen können beträchtlich sein.'
  },
  {
    key: 'sehrhoch', name: 'sehr hoch', farbe: 'var(--sb-sehrhoch)', wert: 3,
    auswirkung: 'Die Schadensauswirkungen können ein existenziell bedrohliches, katastrophales Ausmaß erreichen.'
  }
];

/* Die sechs Schadensszenarien, mit denen der Schutzbedarf begründet wird */
AUDIT.data.schadensszenarien = [
  { key: 'gesetz',  name: 'Verstoß gegen Gesetze, Vorschriften oder Verträge',
    bsp: 'DSGVO-Bußgeld, Vertragsstrafe wegen verspäteter Lieferung' },
  { key: 'selbst',  name: 'Beeinträchtigung des informationellen Selbstbestimmungsrechts',
    bsp: 'Gesundheitsdaten von Beschäftigten werden offengelegt' },
  { key: 'leib',    name: 'Beeinträchtigung der persönlichen Unversehrtheit',
    bsp: 'Falsche Gefahrgut-Daten gefährden Fahrer und Lagerpersonal' },
  { key: 'aufgabe', name: 'Beeinträchtigung der Aufgabenerfüllung',
    bsp: 'Ohne Warenwirtschaft kann nicht ausgeliefert werden' },
  { key: 'image',   name: 'Negative Innen- oder Außenwirkung (Image)',
    bsp: 'Presseberichte über ein Datenleck, Kunden kündigen' },
  { key: 'geld',    name: 'Finanzielle Auswirkungen',
    bsp: 'Umsatzausfall, Wiederherstellungskosten, Lösegeld' }
];

/* Lernhinweise zu den drei Prinzipien der Schutzbedarfsvererbung */
AUDIT.data.vererbung = {
  maximum: {
    name: 'Maximumprinzip',
    text: 'Ein System erhält den höchsten Schutzbedarf aller Anwendungen, die darauf laufen. Begründung: Die empfindlichste Anwendung bestimmt, wie gut das System geschützt sein muss.'
  },
  kumulation: {
    name: 'Kumulationseffekt',
    text: 'Laufen viele Anwendungen mit Schutzbedarf "normal" auf einem System, kann der Gesamtschaden bei Ausfall trotzdem beträchtlich sein. Dann wird der Schutzbedarf des Systems höher eingestuft als das Maximum der Einzelanwendungen.'
  },
  verteilung: {
    name: 'Verteilungseffekt',
    text: 'Ist eine Anwendung auf mehrere redundante Systeme verteilt, kann der Schutzbedarf des einzelnen Systems für die Verfügbarkeit niedriger sein – fällt eines aus, übernimmt das andere. Für Vertraulichkeit gilt das nicht: Die Daten liegen ja auf jedem der Systeme.'
  }
};
