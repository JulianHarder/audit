/* ===========================================================
   AUDIT – data/bausteine.js
   Alle Bausteine der Arbeitsfläche.
   kategorie: 'system' | 'anwendung' | 'person' | 'zone'
   pii:       verarbeitet typischerweise personenbezogene Daten
   vorschlag: Schutzbedarfs-Vorschlag {v,i,a} (nur Lernhilfe!)
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.bausteine = [

  /* ---------------- SYSTEME ---------------- */
  {
    key: 'server', label: 'Server', icon: '🖥️', kategorie: 'system', w: 150, h: 78,
    info: 'Zentrales System, auf dem Anwendungen laufen. Erbt den Schutzbedarf der Anwendungen, die darauf betrieben werden (Maximumprinzip).',
    hostfaehig: true
  },
  {
    key: 'pc', label: 'Arbeitsplatz-PC', icon: '💻', kategorie: 'system', w: 150, h: 78,
    info: 'Rechner eines Mitarbeiters im Büro. Häufiger Einstiegspunkt für Schadsoftware (E-Mail-Anhang, USB-Stick).',
    hostfaehig: true
  },
  {
    key: 'laptop', label: 'Laptop / Homeoffice', icon: '🧳', kategorie: 'system', w: 150, h: 78,
    info: 'Mobiles Gerät außerhalb des Firmennetzes. Risiken: Verlust/Diebstahl, unsichere Netze. Maßnahmen: Festplattenverschlüsselung, VPN.',
    hostfaehig: true
  },
  {
    key: 'firewall', label: 'Firewall', icon: '🧱', kategorie: 'system', w: 140, h: 70,
    info: 'Kontrolliert den Datenverkehr zwischen Netzen und blockiert unerwünschte Verbindungen. Schützt die Netzgrenze, nicht den Inhalt einer Datei.'
  },
  {
    key: 'router', label: 'Router / Switch', icon: '📡', kategorie: 'system', w: 140, h: 70,
    info: 'Verbindet Netze bzw. Geräte. Zentraler Punkt: fällt er aus, ist die Verfügbarkeit vieler Systeme betroffen.'
  },
  {
    key: 'nas', label: 'NAS / Fileserver', icon: '🗄️', kategorie: 'system', w: 150, h: 78,
    info: 'Netzwerkspeicher für Dateien. Ständig erreichbar – deshalb auch für Ransomware gut erreichbar.',
    hostfaehig: true
  },
  {
    key: 'cloud', label: 'Cloud-Speicher', icon: '☁️', kategorie: 'system', w: 150, h: 78,
    info: 'Externer Anbieter verarbeitet Daten im Auftrag. Datenschutz: Auftragsverarbeitung (Art. 28 DSGVO) und Standort (EU oder Drittland, Art. 44 ff.).',
    hostfaehig: true, extern: true
  },
  {
    key: 'backup', label: 'Backup-System', icon: '💾', kategorie: 'system', w: 150, h: 78,
    info: 'Sicherungskopie der Daten. Nur wirksam gegen Ransomware, wenn sie vom Netz getrennt (offline) oder unveränderbar ist und regelmäßig getestet wird.',
    hostfaehig: true
  },
  {
    key: 'webserver', label: 'Webserver (DMZ)', icon: '🌐', kategorie: 'system', w: 150, h: 78,
    info: 'Aus dem Internet erreichbares System. Gehört in die DMZ, damit ein Einbruch nicht sofort das ganze Firmennetz betrifft.',
    hostfaehig: true
  },

  /* ---------------- ANWENDUNGEN ---------------- */
  {
    key: 'webshop', label: 'Webshop', icon: '🛒', kategorie: 'anwendung', w: 150, h: 78, pii: true,
    info: 'Online-Verkauf an Kunden. Verarbeitet Bestelldaten, Adressen und Zahlungsdaten.',
    vorschlag: { v: 'hoch', i: 'hoch', a: 'hoch' },
    szenario: {
      v: 'Kundendaten und Zahlungsdaten werden abgegriffen: Verstoß gegen die DSGVO, Imageschaden, Bußgeld möglich.',
      i: 'Manipulierte Preise oder Bestellmengen führen zu falschen Lieferungen und finanziellem Schaden.',
      a: 'Steht der Shop einen Tag still, fehlt der komplette Tagesumsatz.'
    }
  },
  {
    key: 'wawi', label: 'Warenwirtschaft', icon: '📦', kategorie: 'anwendung', w: 150, h: 78, pii: false,
    info: 'Steuert Lager, Bestellungen und Versand. Kernsystem für den laufenden Betrieb einer Logistikfirma.',
    vorschlag: { v: 'normal', i: 'hoch', a: 'sehrhoch' },
    szenario: {
      v: 'Mitbewerber erfahren Lagerbestände und Konditionen – unangenehm, aber begrenzt.',
      i: 'Falsche Bestände führen zu Fehllieferungen und Vertragsstrafen.',
      a: 'Ohne Warenwirtschaft steht der Versand still – das Unternehmen kann seine Hauptaufgabe nicht erfüllen.'
    }
  },
  {
    key: 'lohn', label: 'Lohnbuchhaltung', icon: '💶', kategorie: 'anwendung', w: 150, h: 78, pii: true,
    info: 'Verarbeitet Gehälter, Sozialversicherungs- und Steuerdaten der Beschäftigten – besonders sensible Beschäftigtendaten (§ 26 BDSG).',
    vorschlag: { v: 'sehrhoch', i: 'hoch', a: 'normal' },
    szenario: {
      v: 'Gehaltslisten im Umlauf: schwerer Vertrauensverlust, Verstoß gegen den Beschäftigtendatenschutz.',
      i: 'Falsche Gehaltszahlungen und falsche Meldungen an Finanzamt und Sozialversicherung.',
      a: 'Drei Tage Ausfall sind verkraftbar, solange der Lohnlauf zum Monatsende klappt – deshalb oft nur "normal".'
    }
  },
  {
    key: 'hr', label: 'Personalakte (HR)', icon: '🗂️', kategorie: 'anwendung', w: 150, h: 78, pii: true, art9: true,
    info: 'Digitale Personalakten, auch mit Krankmeldungen (Gesundheitsdaten = besondere Kategorie, Art. 9 DSGVO).',
    vorschlag: { v: 'sehrhoch', i: 'hoch', a: 'normal' },
    szenario: {
      v: 'Gesundheits- und Bewerbungsdaten werden öffentlich: existenzbedrohender Imageschaden, hohes Bußgeldrisiko.',
      i: 'Falsche Einträge in der Personalakte können Kündigungen oder Abmahnungen falsch begründen.',
      a: 'Kurzer Ausfall stört die Personalabteilung, gefährdet aber nicht den Betrieb.'
    }
  },
  {
    key: 'crm', label: 'CRM / Kundendaten', icon: '📇', kategorie: 'anwendung', w: 150, h: 78, pii: true,
    info: 'Kundenstammdaten, Ansprechpartner, Kontakthistorie. Grundlage für Vertrieb und Betreuung.',
    vorschlag: { v: 'hoch', i: 'hoch', a: 'hoch' },
    szenario: {
      v: 'Die komplette Kundenliste beim Mitbewerber: beträchtlicher wirtschaftlicher Schaden und DSGVO-Verstoß.',
      i: 'Falsche Ansprechpartner und Konditionen führen zu Fehlern in der Abwicklung.',
      a: 'Vertrieb kann nicht arbeiten, Aufträge verzögern sich.'
    }
  },
  {
    key: 'mail', label: 'E-Mail-System', icon: '✉️', kategorie: 'anwendung', w: 150, h: 78, pii: true,
    info: 'Zentrale Kommunikation. Haupteinfallstor für Phishing und Schadsoftware, enthält zugleich viele personenbezogene Daten.',
    vorschlag: { v: 'hoch', i: 'hoch', a: 'hoch' },
    szenario: {
      v: 'Mitgelesene Postfächer offenbaren Verträge, Angebote und private Angaben.',
      i: 'Gefälschte Absender ("Chef-Masche") lösen echte Überweisungen aus.',
      a: 'Ohne E-Mail bricht die Abstimmung mit Kunden und Spediteuren zusammen.'
    }
  },
  {
    key: 'newsletter', label: 'Newsletter-Tool', icon: '📣', kategorie: 'anwendung', w: 150, h: 78, pii: true, extern: true,
    info: 'Werbemails an Kunden. Rechtsgrundlage ist in der Regel die Einwilligung (Art. 6 Abs. 1 lit. a) – jederzeit widerrufbar (Art. 7 Abs. 3).',
    vorschlag: { v: 'normal', i: 'normal', a: 'normal' },
    szenario: {
      v: 'Eine geleakte Empfängerliste ist unangenehm, der Schaden bleibt meist überschaubar.',
      i: 'Falsche Inhalte im Newsletter schaden dem Image.',
      a: 'Ein verschobener Newsletter tut nicht weh.'
    }
  },
  {
    key: 'bewerber', label: 'Bewerbungsportal', icon: '📝', kategorie: 'anwendung', w: 150, h: 78, pii: true,
    info: 'Bewerbungsunterlagen, teils mit Angaben zu Schwerbehinderung (Art. 9). Nach Abschluss des Verfahrens Löschfristen beachten.',
    vorschlag: { v: 'hoch', i: 'normal', a: 'normal' },
    szenario: {
      v: 'Bewerbungen beim aktuellen Arbeitgeber der Bewerber: massiver Vertrauensschaden.',
      i: 'Vertauschte Unterlagen führen zu falschen Entscheidungen.',
      a: 'Kurze Ausfälle verzögern nur das Verfahren.'
    }
  },
  {
    key: 'telematik', label: 'Telematik / GPS-Tracking', icon: '🛰️', kategorie: 'anwendung', w: 160, h: 78, pii: true,
    info: 'Standortdaten der LKW – und damit auch der Fahrer. Verhaltens- und Leistungskontrolle: Mitbestimmung des Betriebsrats, Datenschutz-Folgenabschätzung prüfen (Art. 35).',
    vorschlag: { v: 'hoch', i: 'normal', a: 'hoch' },
    szenario: {
      v: 'Bewegungsprofile der Fahrer sind ein schwerer Eingriff in deren Persönlichkeitsrecht.',
      i: 'Falsche Positionen führen zu falschen Lieferzusagen.',
      a: 'Ohne Tracking fehlt die Übersicht über die Flotte.'
    }
  },

  /* ---------------- PERSONEN ---------------- */
  {
    key: 'mitarbeiter', label: 'Mitarbeiter', icon: '🧑‍💼', kategorie: 'person', w: 136, h: 64,
    info: 'Beschäftigter der Firma. Öffnet Dateien und E-Mails – damit das wichtigste Ziel von Phishing und Social Engineering. Wirksamste Maßnahme: Schulung.'
  },
  {
    key: 'kunde', label: 'Kunde', icon: '🧑', kategorie: 'person', w: 136, h: 64,
    info: 'Betroffene Person im Sinne der DSGVO. Hat die Rechte aus Art. 15–22 und kann sie jederzeit geltend machen.'
  },
  {
    key: 'bewerberin', label: 'Bewerber/in', icon: '🙋', kategorie: 'person', w: 136, h: 64,
    info: 'Betroffene Person. Daten dürfen nur für das Bewerbungsverfahren genutzt und müssen danach gelöscht werden (Aufbewahrung wegen AGG-Fristen meist ca. 6 Monate).'
  },
  {
    key: 'dienstleister', label: 'Externer Dienstleister', icon: '🧑‍🔧', kategorie: 'person', w: 150, h: 64, extern: true,
    info: 'Verarbeitet Daten im Auftrag der Firma (Auftragsverarbeiter). Nötig: Vertrag nach Art. 28 DSGVO und Kontrolle der Maßnahmen.'
  },
  {
    key: 'besucher', label: 'Besucher', icon: '🚶', kategorie: 'person', w: 136, h: 64,
    info: 'Fremde Person im Gebäude. Gehört angemeldet und begleitet – Thema Zutrittskontrolle.'
  },

  /* ---------------- ZONEN ---------------- */
  {
    key: 'z_firmennetz', label: 'Firmennetz (LAN)', icon: '🏢', kategorie: 'zone', w: 520, h: 300, zonetyp: 'raum',
    info: 'Internes Netz der Firma. Hier sollten keine aus dem Internet erreichbaren Dienste stehen.'
  },
  {
    key: 'z_dmz', label: 'DMZ', icon: '🛡️', kategorie: 'zone', w: 340, h: 220, zonetyp: 'dmz',
    info: 'Demilitarisierte Zone: Pufferzone zwischen Internet und Firmennetz für öffentlich erreichbare Server.'
  },
  {
    key: 'z_internet', label: 'Internet', icon: '🌍', kategorie: 'zone', w: 340, h: 200, zonetyp: 'internet',
    info: 'Unsicheres, öffentliches Netz. Alles, was von hier kommt, ist nicht vertrauenswürdig.'
  },
  {
    key: 'z_eu', label: 'EU / EWR', icon: '🇪🇺', kategorie: 'zone', w: 340, h: 200, zonetyp: 'eu',
    info: 'Innerhalb der EU/des EWR gilt die DSGVO unmittelbar – eine Übermittlung ist hier kein "Drittlandtransfer".'
  },
  {
    key: 'z_drittland', label: 'Drittland (z. B. USA)', icon: '✈️', kategorie: 'zone', w: 340, h: 200, zonetyp: 'drittland',
    info: 'Land außerhalb der EU/des EWR. Übermittlung nur mit Angemessenheitsbeschluss oder geeigneten Garantien (Art. 44 ff. DSGVO).'
  },
  {
    key: 'z_serverraum', label: 'Serverraum', icon: '🔐', kategorie: 'zone', w: 300, h: 190, zonetyp: 'raum',
    info: 'Physisch besonders zu schützender Raum: Zutrittskontrolle, Brandschutz, Klima, USV.'
  },
  {
    key: 'z_buero', label: 'Büro', icon: '🪑', kategorie: 'zone', w: 300, h: 190, zonetyp: 'raum',
    info: 'Allgemeiner Arbeitsbereich. Risiko: unbeaufsichtigte, nicht gesperrte Rechner.'
  },
  {
    key: 'z_personal', label: 'Personalabteilung', icon: '🧑‍⚖️', kategorie: 'zone', w: 300, h: 190, zonetyp: 'raum',
    info: 'Bereich mit besonders sensiblen Beschäftigtendaten – eigener Zutritts- und Zugriffsschutz.'
  },
  {
    key: 'z_empfang', label: 'Empfang', icon: '🛎️', kategorie: 'zone', w: 280, h: 170, zonetyp: 'raum',
    info: 'Erste Kontrollstelle: Besucher anmelden, Besucherbuch, Begleitung.'
  }
];

/* Nachschlagen per key */
AUDIT.data.bausteinMap = {};
AUDIT.data.bausteine.forEach(function (b) { AUDIT.data.bausteinMap[b.key] = b; });
