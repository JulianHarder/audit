/* ===========================================================
   AUDIT – data/massnahmen.js
   Schutzmaßnahmen (Schilde), Angreifer-Figuren und die
   Kontrollarten der technischen und organisatorischen
   Maßnahmen (TOMs).

   ziele:    auf welche Bausteine die Maßnahme gezogen werden darf
   stoppt:   Schadsoftware-Keys, die komplett verhindert werden
   bremst:   Keys, bei denen der Schaden nur begrenzt wird
   kontrolle: zugehörige Kontrollart (für Station 2/3)
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.massnahmen = [

  /* ---------- technische Maßnahmen gegen Schadsoftware ---------- */
  {
    key: 'virenscanner', name: 'Virenscanner', icon: '🛡', ziele: ['system'],
    kurz: 'Erkennt bekannte Schadsoftware anhand von Signaturen und Verhalten.',
    text: 'Ein aktueller Virenscanner erkennt die meisten bekannten Schädlinge, bevor sie ausgeführt werden. ' +
          'Gegen ein gut gemachtes Rootkit oder brandneue Schadsoftware hilft er allein nicht.',
    stoppt: ['virus', 'spyware', 'keylogger', 'adware'],
    bremst: ['trojaner', 'ransomware', 'wurm', 'bot'],
    schutzziel: ['i', 'v', 'a'], kontrolle: 'verfuegbarkeit'
  },
  {
    key: 'updates', name: 'Updates / Patches', icon: '🩹', ziele: ['system'],
    kurz: 'Sicherheitslücken werden regelmäßig und zeitnah geschlossen.',
    text: 'Würmer und automatisierte Angriffe nutzen fast immer bekannte Lücken, für die es längst Updates gibt. ' +
          'Ein geregeltes Patch-Management ist deshalb eine der wirksamsten Maßnahmen überhaupt.',
    stoppt: ['wurm'], bremst: ['rootkit', 'bot', 'ransomware'],
    schutzziel: ['a', 'i'], kontrolle: 'verfuegbarkeit'
  },
  {
    key: 'firewall', name: 'Firewall', icon: '🧱', ziele: ['system', 'zone'],
    kurz: 'Kontrolliert den Verkehr zwischen Netzen und blockiert unerwünschte Verbindungen.',
    text: 'Die Firewall schützt die Netzgrenze: Sie lässt nur erlaubte Verbindungen durch und blockiert ' +
          'Verbindungen nach außen, die eine Hintertür aufbauen wollen. Gegen eine Datei im Mailanhang hilft sie nicht.',
    stoppt: [], bremst: ['wurm', 'trojaner', 'bot', 'spyware'],
    schutzziel: ['v', 'a'], kontrolle: 'weitergabe'
  },
  {
    key: 'segmentierung', name: 'Netzwerksegmentierung', icon: '🧩', ziele: ['zone', 'system'],
    kurz: 'Das Netz wird in getrennte Bereiche aufgeteilt.',
    text: 'Getrennte Netzbereiche (z. B. VLANs für Büro, Server, Produktion) begrenzen den Schaden: ' +
          'Ein Wurm oder Ransomware kommt an der Segmentgrenze nicht weiter.',
    stoppt: [], bremst: ['wurm', 'ransomware', 'bot'],
    schutzziel: ['a', 'v'], kontrolle: 'trennung'
  },
  {
    key: 'backup', name: 'Backup (getrennt)', icon: '💾', ziele: ['system'],
    kurz: 'Regelmäßige Sicherung, offline oder unveränderbar aufbewahrt und getestet.',
    text: 'Ein Backup verhindert einen Angriff nicht – es macht ihn überlebbar. Wichtig: Die Sicherung muss vom ' +
          'Netz getrennt (offline) oder unveränderbar sein, sonst verschlüsselt Ransomware sie mit. ' +
          'Und sie muss regelmäßig zurückgespielt werden (Restore-Test).',
    stoppt: [], bremst: ['ransomware'], rettet: true,
    schutzziel: ['a'], kontrolle: 'verfuegbarkeit'
  },
  {
    key: 'rechte', name: 'Benutzerrechte (kein Admin)', icon: '👤', ziele: ['system', 'person'],
    kurz: 'Im Alltag wird ohne Administratorrechte gearbeitet.',
    text: 'Ohne Administratorrechte kann sich Schadsoftware nicht tief im System verankern und keine Dienste ' +
          'installieren. Umgesetzt wird das über ein Berechtigungskonzept nach dem Need-to-know-Prinzip.',
    stoppt: [], bremst: ['rootkit', 'trojaner', 'ransomware', 'virus', 'adware'],
    schutzziel: ['v', 'i'], kontrolle: 'zugriff'
  },
  {
    key: 'verschluesselung', name: 'Verschlüsselung', icon: '🔐', ziele: ['system', 'zone'],
    kurz: 'Daten sind bei Speicherung und Übertragung verschlüsselt.',
    text: 'Verschlüsselung verhindert den Angriff nicht, macht die abgeflossenen Daten aber unbrauchbar. ' +
          'Das senkt das Risiko für die Betroffenen – und kann dazu führen, dass eine Benachrichtigung ' +
          'nach Art. 34 DSGVO entfällt.',
    stoppt: [], bremst: ['spyware', 'trojaner', 'keylogger'],
    schutzziel: ['v'], kontrolle: 'weitergabe'
  },
  {
    key: 'schulung', name: 'Mitarbeiterschulung', icon: '🎓', ziele: ['person', 'system', 'zone'],
    kurz: 'Beschäftigte erkennen Phishing, Hoax und verdächtige Anhänge.',
    text: 'Die einzige wirksame Maßnahme gegen Social Engineering, Phishing und Hoax. Regelmäßige Sensibilisierung ' +
          'gehört zu den Aufgaben von ISB und DSB und ist Teil der organisatorischen Maßnahmen.',
    stoppt: ['hoax', 'phishing'], bremst: ['virus', 'trojaner', 'ransomware'],
    schutzziel: ['v', 'i', 'a'], kontrolle: 'organisation'
  },
  {
    key: 'mailfilter', name: 'E-Mail-Filter', icon: '📧', ziele: ['system'],
    kurz: 'Spam- und Schadanhänge werden schon am Mailserver aussortiert.',
    text: 'Filter prüfen Absender, Anhänge und Links. Sie fangen einen großen Teil der Angriffe ab, sind aber ' +
          'nie vollständig – deshalb bleibt die Schulung nötig.',
    stoppt: [], bremst: ['virus', 'trojaner', 'ransomware', 'phishing'],
    schutzziel: ['i', 'v'], kontrolle: 'organisation'
  },
  {
    key: 'meldeweg', name: 'Meldeweg für Vorfälle', icon: '📣', ziele: ['person', 'zone', 'system'],
    kurz: 'Jeder weiß, wo verdächtige Mails und Vorfälle gemeldet werden.',
    text: 'Ein klarer, niedrigschwelliger Meldeweg sorgt dafür, dass Vorfälle früh bemerkt werden. ' +
          'Wichtig: keine Schuldzuweisung, sonst meldet niemand mehr. Grundlage für die 72-Stunden-Frist nach Art. 33.',
    stoppt: ['hoax'], bremst: ['phishing', 'ransomware'],
    schutzziel: ['a'], kontrolle: 'organisation'
  },
  {
    key: 'neuaufsetzen', name: 'Neuinstallation nach Befall', icon: '♻️', ziele: ['system'],
    kurz: 'Befallene Systeme werden neu aufgesetzt statt nur „gesäubert“.',
    text: 'Nach einem Rootkit oder einem tiefgreifenden Befall ist Neuinstallation aus vertrauenswürdiger Quelle ' +
          'der einzige verlässliche Weg. Vorher Beweise sichern (Forensik).',
    stoppt: [], bremst: ['rootkit'],
    schutzziel: ['i'], kontrolle: 'verfuegbarkeit'
  },

  /* ---------- Zutrittskontrolle (Raum) ---------- */
  {
    key: 'schluessel', name: 'Schlüssel / Chipkarte', icon: '🔑', ziele: ['zone'],
    kurz: 'Nur Berechtigte kommen physisch in den Raum.',
    text: 'Chipkarten oder Schließanlagen regeln, wer welchen Raum betreten darf, und protokollieren es.',
    stoppt: [], gegenAngreifer: ['eindringling'],
    schutzziel: ['v'], kontrolle: 'zutritt'
  },
  {
    key: 'alarm', name: 'Alarmanlage / Videoüberwachung', icon: '🚨', ziele: ['zone'],
    kurz: 'Unbefugtes Betreten wird bemerkt und aufgezeichnet.',
    text: 'Wirkt abschreckend und ermöglicht die Aufklärung. Videoüberwachung ist selbst eine Verarbeitung ' +
          'personenbezogener Daten und braucht eine Rechtsgrundlage (meist Art. 6 Abs. 1 lit. f).',
    stoppt: [], gegenAngreifer: ['eindringling'],
    schutzziel: ['v'], kontrolle: 'zutritt'
  },
  {
    key: 'besucherbuch', name: 'Besucheranmeldung', icon: '📋', ziele: ['zone'],
    kurz: 'Besucher werden angemeldet, ausgewiesen und begleitet.',
    text: 'Organisatorische Maßnahme am Empfang: Besucher tragen sich ein, bekommen einen Ausweis und ' +
          'werden nicht allein durchs Gebäude gelassen.',
    stoppt: [], gegenAngreifer: ['eindringling'],
    schutzziel: ['v'], kontrolle: 'zutritt'
  },

  /* ---------- Zugangskontrolle (System) ---------- */
  {
    key: 'passwort', name: 'Passwortrichtlinie', icon: '🔣', ziele: ['system', 'person'],
    kurz: 'Starke, nicht mehrfach verwendete Passwörter.',
    text: 'Lange Passphrasen, keine Mehrfachnutzung, Passwortmanager. Erzwungener monatlicher Wechsel gilt ' +
          'inzwischen als überholt – wichtiger sind Länge und Einmaligkeit.',
    stoppt: [], gegenAngreifer: ['fremderpc'],
    schutzziel: ['v'], kontrolle: 'zugang'
  },
  {
    key: 'zweifaktor', name: 'Zwei-Faktor-Anmeldung', icon: '📱', ziele: ['system', 'person'],
    kurz: 'Zusätzlich zum Passwort wird ein zweiter Faktor verlangt.',
    text: 'Wissen (Passwort) plus Besitz (Token, App) oder Biometrie. Selbst ein abgefangenes Passwort ' +
          'reicht dann für die Anmeldung nicht aus.',
    stoppt: [], bremst: ['keylogger', 'phishing'], gegenAngreifer: ['fremderpc'],
    schutzziel: ['v'], kontrolle: 'zugang'
  },
  {
    key: 'bildschirmsperre', name: 'Automatische Bildschirmsperre', icon: '🖥', ziele: ['system'],
    kurz: 'Der Rechner sperrt sich nach kurzer Zeit ohne Eingabe.',
    text: 'Verhindert, dass Unbefugte einen unbeaufsichtigten, angemeldeten Arbeitsplatz einfach weiterbenutzen. ' +
          'Dazu gehört auch die Regel „Rechner sperren beim Verlassen“ (Clean Desk).',
    stoppt: [], gegenAngreifer: ['fremderpc'],
    schutzziel: ['v'], kontrolle: 'zugang'
  },

  /* ---------- Zugriffskontrolle (Daten) ---------- */
  {
    key: 'berechtigung', name: 'Rollen- und Berechtigungskonzept', icon: '🗝', ziele: ['system', 'anwendung'],
    kurz: 'Jede Rolle sieht nur die Daten, die sie für ihre Arbeit braucht.',
    text: 'Rechte werden an Rollen vergeben, nicht an Personen, und regelmäßig überprüft ' +
          '(z. B. beim Abteilungswechsel). Grundlage der Zugriffskontrolle.',
    stoppt: [], gegenAngreifer: ['praktikant'], bremst: ['ransomware', 'trojaner'],
    schutzziel: ['v'], kontrolle: 'zugriff'
  },
  {
    key: 'needtoknow', name: 'Need-to-know-Prinzip', icon: '🤐', ziele: ['system', 'anwendung', 'person'],
    kurz: 'So wenig Zugriff wie möglich, so viel wie nötig.',
    text: 'Auch innerhalb einer Abteilung bekommt niemand mehr Daten zu sehen, als die Aufgabe erfordert. ' +
          'Entspricht dem Grundsatz der Datenminimierung aus Art. 5 DSGVO.',
    stoppt: [], gegenAngreifer: ['praktikant'],
    schutzziel: ['v'], kontrolle: 'zugriff'
  },
  {
    key: 'protokollierung', name: 'Protokollierung der Zugriffe', icon: '📜', ziele: ['system', 'anwendung'],
    kurz: 'Es ist nachvollziehbar, wer wann auf welche Daten zugegriffen hat.',
    text: 'Logs machen unberechtigte Zugriffe im Nachhinein sichtbar und erfüllen zugleich die Eingabekontrolle. ' +
          'Die Protokolle selbst sind personenbezogene Daten und dürfen nicht zur Leistungskontrolle missbraucht werden.',
    stoppt: [], gegenAngreifer: ['praktikant'],
    schutzziel: ['i', 'v'], kontrolle: 'eingabe'
  }
];

AUDIT.data.massnahmenMap = {};
AUDIT.data.massnahmen.forEach(function (m) { AUDIT.data.massnahmenMap[m.key] = m; });

/* ---------------- Angreifer-Figuren (Zutritt/Zugang/Zugriff) ---------------- */

AUDIT.data.angreifer = [
  {
    key: 'eindringling', name: 'Fremder im Gebäude', icon: '🥷',
    zielart: 'zone',
    versucht: 'Geht unbemerkt in den Serverraum und steckt einen USB-Stick an.',
    stopptDurch: 'zutritt',
    kontrolle: 'zutritt',
    erfolg: 'Niemand hat ihn angesprochen: Er erreicht den Server physisch. Wer physischen Zugang hat, ' +
            'hat am Ende fast immer auch Zugriff auf die Daten.',
    verhindert: 'Die Zutrittskontrolle greift: Ohne Chipkarte kommt er nicht in den Raum, ' +
                'die Besucheranmeldung fällt auf.',
    schaden: { v: 0.8, i: 0.6, a: 0.5 }
  },
  {
    key: 'fremderpc', name: 'Fremder am unbeaufsichtigten PC', icon: '🕵️',
    zielart: 'system',
    versucht: 'Setzt sich an einen angemeldeten Rechner und arbeitet unter fremdem Namen weiter.',
    stopptDurch: 'zugang',
    kontrolle: 'zugang',
    erfolg: 'Der Rechner war nicht gesperrt: Er handelt unter der Kennung des Mitarbeiters – ' +
            'die Protokolle zeigen später den Falschen.',
    verhindert: 'Die Zugangskontrolle greift: Der Bildschirm ist gesperrt, ohne Passwort und zweiten Faktor ' +
                'kommt er nicht ins System.',
    schaden: { v: 0.7, i: 0.5, a: 0.2 }
  },
  {
    key: 'praktikant', name: 'Praktikant mit eigenem Login', icon: '🧑‍🎓',
    zielart: 'anwendung',
    versucht: 'Öffnet aus Neugier die Gehaltsdaten der Personalabteilung.',
    stopptDurch: 'zugriff',
    kontrolle: 'zugriff',
    erfolg: 'Er ist zwar berechtigt, sich anzumelden, darf diese Daten aber nicht sehen – ohne ' +
            'Berechtigungskonzept kann er sie trotzdem öffnen. Das ist eine Datenschutzverletzung.',
    verhindert: 'Die Zugriffskontrolle greift: Seine Rolle hat auf diese Daten keine Berechtigung, ' +
                'und der Versuch steht im Protokoll.',
    schaden: { v: 0.8, i: 0.2, a: 0 }
  }
];
AUDIT.data.angreiferMap = {};
AUDIT.data.angreifer.forEach(function (a) { AUDIT.data.angreiferMap[a.key] = a; });

/* ---------------- Kontrollarten der TOMs ---------------- */

AUDIT.data.kontrollarten = [
  {
    key: 'zutritt', name: 'Zutrittskontrolle', merk: 'Raum',
    ziel: 'Unbefugte kommen nicht physisch in Räume, in denen Daten verarbeitet werden.',
    bsp: 'Schlüssel, Chipkarte, Pförtner, Videoüberwachung, Alarmanlage'
  },
  {
    key: 'zugang', name: 'Zugangskontrolle', merk: 'System',
    ziel: 'Unbefugte können die IT-Systeme nicht benutzen.',
    bsp: 'Benutzername + Passwort, Zwei-Faktor-Anmeldung, Bildschirmsperre'
  },
  {
    key: 'zugriff', name: 'Zugriffskontrolle', merk: 'Daten',
    ziel: 'Berechtigte sehen nur die Daten, die sie für ihre Arbeit brauchen.',
    bsp: 'Berechtigungskonzept, Rollen, Need-to-know, Protokollierung von Zugriffen'
  },
  {
    key: 'weitergabe', name: 'Weitergabekontrolle', merk: 'Transport',
    ziel: 'Daten werden bei Übertragung oder Transport nicht unbefugt gelesen oder verändert.',
    bsp: 'Verschlüsselung, VPN, HTTPS, sicherer Aktenversand'
  },
  {
    key: 'eingabe', name: 'Eingabekontrolle', merk: 'Protokoll',
    ziel: 'Nachvollziehbar, wer wann welche Daten eingegeben, geändert oder gelöscht hat.',
    bsp: 'Protokollierung, Logs, Versionierung'
  },
  {
    key: 'auftrag', name: 'Auftragskontrolle', merk: 'Dienstleister',
    ziel: 'Auftragsverarbeiter arbeiten nur nach Weisung des Verantwortlichen.',
    bsp: 'Vertrag nach Art. 28 DSGVO, Kontrollen und Nachweise beim Dienstleister'
  },
  {
    key: 'verfuegbarkeit', name: 'Verfügbarkeitskontrolle', merk: 'Schutz vor Verlust',
    ziel: 'Daten sind gegen Zerstörung und Verlust geschützt.',
    bsp: 'Backup, USV, Brandschutz, Redundanz, Notfallplan'
  },
  {
    key: 'trennung', name: 'Trennungskontrolle', merk: 'getrennt verarbeiten',
    ziel: 'Daten, die zu unterschiedlichen Zwecken erhoben wurden, werden getrennt verarbeitet.',
    bsp: 'Getrennte Datenbanken, Mandantentrennung, getrennte Netze'
  },
  {
    key: 'organisation', name: 'Organisatorische Maßnahmen', merk: 'Regeln & Menschen',
    ziel: 'Regeln, Zuständigkeiten und Sensibilisierung, die die Technik ergänzen.',
    bsp: 'Richtlinien, Schulungen, Verschwiegenheitsverpflichtung, Meldewege'
  }
];
AUDIT.data.kontrollartenMap = {};
AUDIT.data.kontrollarten.forEach(function (k) { AUDIT.data.kontrollartenMap[k.key] = k; });
