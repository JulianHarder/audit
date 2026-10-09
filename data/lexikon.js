/* ===========================================================
   AUDIT – data/lexikon.js
   Prüfungsnahe Kurzdefinitionen.
   Jeder Eintrag: key (eindeutig), titel, gruppe, text,
                  bsp (Beispiel), norm (Artikel/Standard),
                  alias (weitere Schreibweisen für [[...]])
   Die Gruppen entsprechen den Prüfungsthemen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.lexikonGruppen = [
  'Grundbegriffe',
  'Schutzziele',
  'Schutzbedarf',
  'Schadsoftware',
  'Schutzmaßnahmen',
  'Kontrollarten (TOMs)',
  'DSGVO',
  'Betroffenenrechte',
  'Privacy by Design & Default',
  'Pseudonymisierung & Anonymisierung',
  'Rollen (DSB & ISB)',
  'Compliance'
];

AUDIT.data.lexikon = [

  /* ================= Grundbegriffe ================= */
  {
    key: 'Informationssicherheit', gruppe: 'Grundbegriffe',
    text: 'Schutz von Informationen – egal ob digital, auf Papier oder im Kopf – mit dem Ziel, Vertraulichkeit, Integrität und Verfügbarkeit zu erhalten.',
    bsp: 'Ein verschlossener Aktenschrank gehört genauso dazu wie die Firewall.',
    norm: 'BSI IT-Grundschutz, ISO/IEC 27001'
  },
  {
    key: 'IT-Sicherheit', gruppe: 'Grundbegriffe', alias: ['IT-Schutz'],
    text: 'Teilbereich der Informationssicherheit, der sich auf IT-Systeme und elektronische Daten beschränkt.',
    bsp: 'Virenschutz auf dem Server ist IT-Sicherheit, die Schulung der Mitarbeiter gehört zur Informationssicherheit.'
  },
  {
    key: 'Datenschutz', gruppe: 'Grundbegriffe',
    text: 'Schutz natürlicher Personen bei der Verarbeitung ihrer personenbezogenen Daten. Es geht um die Rechte der Menschen, nicht um den Schutz der Daten an sich.',
    bsp: 'Ein Unternehmen darf Kundendaten nur mit Rechtsgrundlage und nur für den angegebenen Zweck nutzen.',
    norm: 'DSGVO, BDSG'
  },
  {
    key: 'BSI IT-Grundschutz', gruppe: 'Grundbegriffe', alias: ['IT-Grundschutz', 'BSI'],
    text: 'Methodensammlung des Bundesamts für Sicherheit in der Informationstechnik mit Standard-Sicherheitsmaßnahmen und einem Vorgehensmodell für ein Sicherheitskonzept.',
    norm: 'BSI-Standards 200-1 bis 200-4'
  },
  {
    key: 'ISO/IEC 27001', gruppe: 'Grundbegriffe', alias: ['ISMS', 'ISO 27001'],
    text: 'Internationale Norm für ein Informationssicherheits-Managementsystem (ISMS). Beschreibt, wie Informationssicherheit systematisch geplant, umgesetzt, geprüft und verbessert wird (PDCA-Zyklus).',
    bsp: 'Unternehmen lassen sich nach ISO 27001 zertifizieren, um Kunden ihr Sicherheitsniveau nachzuweisen.'
  },
  {
    key: 'Risiko', gruppe: 'Grundbegriffe',
    text: 'Kombination aus Eintrittswahrscheinlichkeit einer Gefährdung und Höhe des möglichen Schadens.',
    bsp: 'Ein Serverausfall ist unwahrscheinlich, der Schaden aber hoch – das Risiko bleibt beachtlich.'
  },
  {
    key: 'Server', gruppe: 'Grundbegriffe',
    text: 'System, auf dem Anwendungen und Daten für viele Nutzer bereitgestellt werden. Hat selbst keinen eigenen Schutzbedarf, sondern erbt ihn von den Anwendungen.',
    bsp: 'Auf SRV-01 laufen Warenwirtschaft, CRM und Lohnbuchhaltung.'
  },

  /* ================= Schutzziele ================= */
  {
    key: 'Schutzziele', gruppe: 'Schutzziele', alias: ['Schutzziel', 'CIA-Triade'],
    text: 'Die drei Grundziele der Informationssicherheit: Vertraulichkeit, Integrität und Verfügbarkeit. Jede Sicherheitsmaßnahme dient mindestens einem davon.',
    bsp: 'Verschlüsselung schützt die Vertraulichkeit, ein Backup die Verfügbarkeit.'
  },
  {
    key: 'Vertraulichkeit', gruppe: 'Schutzziele',
    text: 'Nur Berechtigte haben Zugriff auf Informationen.',
    bsp: 'Verletzt, wenn eine Gehaltsliste an den falschen Empfänger geht.'
  },
  {
    key: 'Integrität', gruppe: 'Schutzziele',
    text: 'Daten sind korrekt, vollständig und nicht unbemerkt verändert.',
    bsp: 'Verletzt, wenn eine Überweisung auf dem Weg manipuliert wird.'
  },
  {
    key: 'Verfügbarkeit', gruppe: 'Schutzziele',
    text: 'Systeme und Daten sind nutzbar, wenn sie gebraucht werden.',
    bsp: 'Verletzt, wenn Ransomware alle Dateien sperrt.'
  },
  {
    key: 'Authentizität', gruppe: 'Schutzziele',
    text: 'Ergänzendes Schutzziel: Eine Information oder ein Kommunikationspartner ist echt und die Herkunft nachweisbar.',
    bsp: 'Eine digitale Signatur belegt, dass eine Rechnung wirklich vom Lieferanten kommt.'
  },
  {
    key: 'Verbindlichkeit', gruppe: 'Schutzziele', alias: ['Nichtabstreitbarkeit'],
    text: 'Ergänzendes Schutzziel: Eine Handlung kann später nicht abgestritten werden.',
    bsp: 'Protokollierte und signierte Freigaben einer Überweisung.'
  },

  /* ================= Schutzbedarf ================= */
  {
    key: 'Schutzbedarf', gruppe: 'Schutzbedarf',
    text: 'Für jedes Schutzziel wird festgestellt, wie schwer der Schaden wäre, wenn das Ziel verletzt wird. Eingeteilt in normal, hoch und sehr hoch.',
    norm: 'BSI-Standard 200-2'
  },
  {
    key: 'Schutzbedarfsfeststellung', gruppe: 'Schutzbedarf',
    text: 'Schritt im Sicherheitsprozess: Für jede Anwendung bzw. Information wird der Schutzbedarf je Schutzziel begründet festgelegt. Danach erben die Systeme den Schutzbedarf.',
    bsp: 'Begründet wird mit Schadensszenarien, z. B. Gesetzesverstoß, Imageschaden, finanzieller Schaden.',
    norm: 'BSI-Standard 200-2'
  },
  {
    key: 'Maximumprinzip', gruppe: 'Schutzbedarf',
    text: 'Ein System erhält den höchsten Schutzbedarf aller Anwendungen, die darauf laufen. Die empfindlichste Anwendung bestimmt das Schutzniveau.',
    bsp: 'Auf SRV-01 laufen Warenwirtschaft (normal) und Lohnbuchhaltung (sehr hoch) – der Server ist "sehr hoch".'
  },
  {
    key: 'Kumulationseffekt', gruppe: 'Schutzbedarf', alias: ['Kumulation'],
    text: 'Viele Anwendungen mit Schutzbedarf "normal" auf einem System können zusammen einen beträchtlichen Schaden verursachen. Dann wird der Schutzbedarf des Systems höher eingestuft als das Maximum der Einzelanwendungen.',
    bsp: 'Fällt der Server mit allen fünf Fachanwendungen aus, steht der ganze Betrieb – trotz lauter "normal"-Einstufungen.'
  },
  {
    key: 'Verteilungseffekt', gruppe: 'Schutzbedarf', alias: ['Verteilung'],
    text: 'Ist eine Anwendung auf mehrere redundante Systeme verteilt, kann der Schutzbedarf des einzelnen Systems für die Verfügbarkeit niedriger sein. Für Vertraulichkeit gilt das nicht, weil die Daten auf jedem System liegen.',
    bsp: 'Zwei Webserver im Cluster: Fällt einer aus, läuft der Shop weiter.'
  },

  /* ================= Platzhalter-Gruppen werden in späteren
     Etappen gefüllt (Schadsoftware, DSGVO, Rollen ...) ======= */

  {
    key: 'Wurm', gruppe: 'Schadsoftware',
    text: 'Schadprogramm, das sich selbstständig über Netzwerke verbreitet und dafür Sicherheitslücken ausnutzt. Braucht keine Benutzeraktion.',
    bsp: 'WannaCry verbreitete sich 2017 über eine Windows-Lücke in Minuten weltweit.'
  },
  {
    key: 'Ransomware', gruppe: 'Schadsoftware', alias: ['Erpressungstrojaner', 'Verschlüsselungstrojaner'],
    text: 'Schadprogramm, das Daten verschlüsselt oder Systeme sperrt und Lösegeld fordert. Trifft vor allem die Verfügbarkeit.',
    bsp: 'Ein Mitarbeiter öffnet einen Rechnungsanhang, am nächsten Morgen sind alle Dateien verschlüsselt.'
  },
  {
    key: 'Netzwerksegmentierung', gruppe: 'Schutzmaßnahmen', alias: ['Segmentierung'],
    text: 'Aufteilung des Netzes in getrennte Bereiche (z. B. VLANs) mit kontrollierten Übergängen. Begrenzt die Ausbreitung von Schadsoftware und Angreifern.',
    bsp: 'Die Produktion liegt in einem eigenen Segment; ein Wurm im Büronetz kommt nicht hinein.'
  },
  {
    key: 'Zutrittskontrolle', gruppe: 'Kontrollarten (TOMs)',
    text: 'Maßnahmen, die Unbefugten den physischen Zutritt zu Räumen mit Datenverarbeitungsanlagen verwehren.',
    bsp: 'Chipkarte für den Serverraum, Pförtner, Besucherbuch, Videoüberwachung.',
    norm: 'Kontrollart der TOMs (früher BDSG Anlage zu § 9), heute Art. 32 DSGVO'
  },
  {
    key: 'DSGVO', gruppe: 'DSGVO', alias: ['Datenschutz-Grundverordnung'],
    text: 'EU-Verordnung, die seit 25.05.2018 unmittelbar in allen Mitgliedstaaten gilt. Regelt die Verarbeitung personenbezogener Daten und die Rechte der betroffenen Personen.',
    norm: 'Verordnung (EU) 2016/679'
  },
  {
    key: 'Rechtsgrundlage', gruppe: 'DSGVO', alias: ['Art. 6 DSGVO'],
    text: 'Jede Verarbeitung personenbezogener Daten braucht eine Rechtsgrundlage: Einwilligung, Vertrag, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliches Interesse oder berechtigtes Interesse.',
    norm: 'Art. 6 Abs. 1 lit. a–f DSGVO'
  },
  {
    key: 'Art. 9 DSGVO', gruppe: 'DSGVO', alias: ['besondere Kategorien'],
    text: 'Besondere Kategorien personenbezogener Daten (u. a. Gesundheit, Religion, politische Meinung, Gewerkschaft, ethnische Herkunft, Biometrie, Sexualleben). Ihre Verarbeitung ist grundsätzlich verboten, außer es greift eine Ausnahme wie die ausdrückliche Einwilligung.',
    bsp: 'Krankmeldungen in der Personalakte.',
    norm: 'Art. 9 DSGVO'
  }
];

/* Nachschlagewerk: key und alias -> Eintrag */
AUDIT.data.lexikonIndex = {};
(function () {
  function reg(k, e) { AUDIT.data.lexikonIndex[String(k).toLowerCase()] = e; }
  AUDIT.data.lexikon.forEach(function (e) {
    e.titel = e.titel || e.key;
    reg(e.key, e);
    (e.alias || []).forEach(function (a) { reg(a, e); });
  });
})();
