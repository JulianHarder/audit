/* ===========================================================
   AUDIT – data/schadsoftware.js
   Arten von Schadsoftware mit Verhalten in der Simulation.

   simulation.typ steuert, was auf der Fläche passiert:
     'lokal'        nur das getroffene System
     'benutzer'     Ausbreitung erst, wenn ein Mensch die Datei öffnet
     'netz'         breitet sich selbstständig über Netzleitungen aus
     'verschluessel' sperrt Daten auf dem System und erreichbaren Speichern
     'exfil'        schickt Daten nach außen (Internet)
     'versteckt'    infiziert, bleibt aber unsichtbar
     'fernsteuer'   System wird ferngesteuert, greift andere an
     'social'       keine Schadsoftware – wirkt über Menschen
   schaden: wie stark die Schutzziele einbrechen (0 = egal, 1 = total)
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.schadsoftware = [
  {
    key: 'virus', name: 'Virus', icon: '🦠',
    ziel: ['system'],
    schutzziele: ['i'],
    kurz: 'Hängt sich an eine Wirtsdatei und wird nur durch den Menschen weitergetragen.',
    text: 'Ein Virus kann sich nicht allein verbreiten. Er hängt sich an eine vorhandene Datei oder ein Programm (Wirt). ' +
          'Erst wenn ein Benutzer diese Datei öffnet oder weitergibt, wird der Code ausgeführt und kopiert sich weiter.',
    erkennung: 'Virenscanner erkennt die Signatur; auffällig geänderte Dateigrößen und Datumsangaben.',
    gegen: ['virenscanner', 'schulung', 'mailfilter', 'rechte'],
    simulation: { typ: 'benutzer', schaden: { v: 0.2, i: 0.8, a: 0.3 } },
    merk: 'Virus = braucht einen Wirt und einen Menschen, der ihn startet.'
  },
  {
    key: 'wurm', name: 'Wurm', icon: '🪱',
    ziel: ['system'],
    schutzziele: ['a', 'i'],
    kurz: 'Verbreitet sich selbstständig über das Netzwerk, ohne Zutun des Benutzers.',
    text: 'Ein Wurm nutzt Sicherheitslücken in Diensten und kopiert sich eigenständig auf jedes erreichbare System. ' +
          'Durch die schnelle Vervielfältigung wird oft auch die Netzlast so hoch, dass die Verfügbarkeit leidet.',
    erkennung: 'Plötzlich hohe Netzlast, viele gleichartige Verbindungen, Systeme werden langsam.',
    gegen: ['updates', 'segmentierung', 'firewall', 'virenscanner'],
    simulation: { typ: 'netz', schaden: { v: 0.2, i: 0.5, a: 0.8 } },
    merk: 'Wurm = braucht keinen Wirt und keinen Menschen, nur eine offene Lücke.'
  },
  {
    key: 'trojaner', name: 'Trojaner', icon: '🐴',
    ziel: ['system'],
    schutzziele: ['v'],
    kurz: 'Tarnt sich als nützliches Programm und bringt heimlich eine Schadfunktion mit.',
    text: 'Ein Trojanisches Pferd sieht aus wie ein nützliches Programm (z. B. ein Gratis-Tool oder ein PDF-Anhang). ' +
          'Im Hintergrund öffnet es meist eine Hintertür (Backdoor), über die Angreifer dauerhaft Zugriff bekommen ' +
          'und weitere Schadsoftware nachladen können.',
    erkennung: 'Unerwartete ausgehende Verbindungen, unbekannte Dienste, Virenscanner.',
    gegen: ['virenscanner', 'firewall', 'rechte', 'schulung', 'mailfilter'],
    simulation: { typ: 'exfil', schaden: { v: 0.8, i: 0.4, a: 0.1 }, backdoor: true },
    merk: 'Trojaner = Tarnung. Er verbreitet sich nicht selbst, er wird installiert.'
  },
  {
    key: 'ransomware', name: 'Ransomware', icon: '🔒',
    ziel: ['system'],
    schutzziele: ['a'],
    kurz: 'Verschlüsselt Daten und fordert Lösegeld.',
    text: 'Ransomware (Erpressungstrojaner) verschlüsselt alle erreichbaren Daten – auch auf Netzlaufwerken und ' +
          'verbundenen Backups – und zeigt eine Lösegeldforderung. Häufig werden die Daten vorher kopiert, ' +
          'um zusätzlich mit Veröffentlichung zu drohen (doppelte Erpressung).',
    erkennung: 'Dateien mit neuer Endung, Erpresserbrief auf dem Desktop, Systeme reagieren nicht mehr.',
    gegen: ['backup', 'virenscanner', 'segmentierung', 'schulung', 'mailfilter', 'rechte'],
    simulation: { typ: 'verschluessel', schaden: { v: 0.4, i: 0.6, a: 1.0 } },
    merk: 'Ransomware trifft vor allem die Verfügbarkeit. Nur ein getrenntes Backup rettet die Daten.'
  },
  {
    key: 'rootkit', name: 'Rootkit', icon: '🫥',
    ziel: ['system'],
    schutzziele: ['v', 'i'],
    kurz: 'Nistet sich tief im System ein und versteckt sich selbst und andere Schadsoftware.',
    text: 'Ein Rootkit verankert sich mit höchsten Rechten im Betriebssystem und manipuliert dessen Auskünfte: ' +
          'Prozesse, Dateien und Netzverbindungen der Angreifer werden einfach nicht mehr angezeigt. ' +
          'Das System sieht sauber aus, ist es aber nicht.',
    erkennung: 'Normale Scans im laufenden System versagen. Hilft: Prüfung von einem sauberen Boot-Medium, ' +
                'Integritätsprüfung, Vergleich mit Netzmitschnitt von außen.',
    gegen: ['rechte', 'updates', 'neuaufsetzen'],
    simulation: { typ: 'versteckt', schaden: { v: 0.8, i: 0.8, a: 0.2 } },
    merk: 'Rootkit = Tarnkappe. Grün heißt hier nicht sauber.'
  },
  {
    key: 'spyware', name: 'Spyware', icon: '🔭',
    ziel: ['system'],
    schutzziele: ['v'],
    kurz: 'Späht Nutzerverhalten und Daten aus und schickt sie nach außen.',
    text: 'Spyware sammelt unbemerkt Informationen – besuchte Seiten, Dokumente, Zugangsdaten – und überträgt sie ' +
          'an den Angreifer. Für Unternehmen bedeutet das in der Regel eine meldepflichtige Datenpanne.',
    erkennung: 'Ungewöhnlicher ausgehender Datenverkehr, Virenscanner, auffällige Browser-Erweiterungen.',
    gegen: ['virenscanner', 'firewall', 'verschluesselung', 'rechte'],
    simulation: { typ: 'exfil', schaden: { v: 0.9, i: 0.1, a: 0.1 } },
    merk: 'Spyware = Vertraulichkeit. Die Daten bleiben da, sie sind nur nicht mehr geheim.'
  },
  {
    key: 'keylogger', name: 'Keylogger', icon: '⌨️',
    ziel: ['system'],
    schutzziele: ['v'],
    kurz: 'Zeichnet Tastatureingaben auf – zum Beispiel Passwörter.',
    text: 'Ein Keylogger protokolliert jeden Tastendruck. Es gibt ihn als Software, aber auch als kleinen ' +
          'Hardware-Adapter zwischen Tastatur und Rechner. Damit erbeuten Angreifer Zugangsdaten im Klartext.',
    erkennung: 'Softwarevariante über Virenscanner; Hardwarevariante nur durch Hinsehen am Arbeitsplatz.',
    gegen: ['virenscanner', 'zweifaktor', 'zutritt', 'rechte'],
    simulation: { typ: 'exfil', schaden: { v: 0.9, i: 0.2, a: 0 } },
    merk: 'Gegen erbeutete Passwörter hilft die Zwei-Faktor-Anmeldung.'
  },
  {
    key: 'adware', name: 'Adware', icon: '📺',
    ziel: ['system'],
    schutzziele: ['v'],
    kurz: 'Blendet unerwünschte Werbung ein, oft gebündelt mit Gratis-Software.',
    text: 'Adware finanziert sich über eingeblendete Werbung. Meist ist sie vor allem lästig, viele Varianten ' +
          'sammeln aber auch Nutzungsdaten und verhalten sich damit wie Spyware.',
    erkennung: 'Pop-ups, veränderte Startseite, unbekannte Browser-Erweiterungen.',
    gegen: ['virenscanner', 'rechte', 'schulung'],
    simulation: { typ: 'lokal', schaden: { v: 0.3, i: 0.1, a: 0.2 } },
    merk: 'Adware = Belästigung, oft mit Datensammlung im Gepäck.'
  },
  {
    key: 'bot', name: 'Bot / Botnetz', icon: '🤖',
    ziel: ['system'],
    schutzziele: ['a'],
    kurz: 'Das befallene System wird ferngesteuert und greift gemeinsam mit anderen fremde Ziele an.',
    text: 'Ein Bot meldet sich bei einem Steuerserver (Command & Control) und wartet auf Befehle. ' +
          'Tausende solcher Systeme bilden ein Botnetz und werden für Spamversand oder DDoS-Angriffe genutzt. ' +
          'Der Schaden entsteht oft bei Dritten – die Firma haftet trotzdem für ihre Systeme.',
    erkennung: 'Verbindungen zu unbekannten Steuerservern, Versand großer Mailmengen, Blacklisting der eigenen IP.',
    gegen: ['firewall', 'virenscanner', 'updates'],
    simulation: { typ: 'fernsteuer', schaden: { v: 0.3, i: 0.3, a: 0.6 } },
    merk: 'Botnetz = fremde Rechenleistung. Dein System wird zum Täterwerkzeug.'
  },
  {
    key: 'hoax', name: 'Hoax (Falschmeldung)', icon: '📨',
    ziel: ['person'],
    schutzziele: [],
    kurz: 'Keine Schadsoftware, sondern eine Falschmeldung – der Schaden entsteht durch die Reaktion der Menschen.',
    text: 'Ein Hoax ist eine Falschmeldung, meist als Kettenmail: „Lösche sofort die Datei X, das ist ein Virus!“ ' +
          'Es wird kein Schadcode verschickt. Schaden entsteht, wenn Beschäftigte die Warnung weiterleiten, ' +
          'Systemdateien löschen oder Arbeitszeit verlieren.',
    erkennung: 'Dringlichkeit, Aufforderung zum Weiterleiten, keine überprüfbare Quelle. Im Zweifel: ISB fragen.',
    gegen: ['schulung', 'meldeweg'],
    simulation: { typ: 'social', schaden: { v: 0.1, i: 0.4, a: 0.3 } },
    merk: 'Hoax = leere Drohung. Nur Aufklärung hilft, keine Technik.'
  },
  {
    key: 'phishing', name: 'Phishing', icon: '🎣',
    ziel: ['person'],
    schutzziele: ['v'],
    kurz: 'Gefälschte Nachrichten locken Zugangsdaten heraus (Social Engineering).',
    text: 'Phishing-Mails oder -Seiten imitieren Bank, Paketdienst oder die eigene IT und fordern zur Eingabe von ' +
          'Zugangsdaten auf. Beim Spear-Phishing ist die Nachricht gezielt auf eine Person zugeschnitten. ' +
          'Phishing ist der häufigste Einstieg für Ransomware.',
    erkennung: 'Absenderadresse prüfen, Links vor dem Klick ansehen, Druck und Dringlichkeit als Warnsignal.',
    gegen: ['schulung', 'mailfilter', 'zweifaktor', 'meldeweg'],
    simulation: { typ: 'social', schaden: { v: 0.8, i: 0.2, a: 0.1 } },
    merk: 'Phishing zielt auf den Menschen, nicht auf die Technik.'
  }
];

AUDIT.data.schadsoftwareMap = {};
AUDIT.data.schadsoftware.forEach(function (s) { AUDIT.data.schadsoftwareMap[s.key] = s; });
