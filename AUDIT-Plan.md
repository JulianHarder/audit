# AUDIT – Firma bauen, angreifen, absichern

Projektplan für eine interaktive 2D-Lernseite zu **IT-Sicherheit, Datenschutz und Compliance**.
Zielgruppe: Umschulung Fachinformatiker Anwendungsentwicklung (IHK), Prüfungsvorbereitung.
Die Seite wird Teil meines Projekt-Hubs (gehostet über **Cloudflare Pages**).

---

## Auftrag an Claude Code

1. Lies diesen Plan vollständig.
2. Arbeite die **Etappen 1–5 der Reihe nach** ab, ohne zwischendurch auf Rückfragen zu warten. Bei Unklarheiten triffst du eine sinnvolle Entscheidung und notierst sie.
3. Teste jede Etappe im Browser, bevor du mit der nächsten weitermachst. Mach nach jeder Etappe einen Git-Commit.
4. Am Ende:
   - eine `README.md` (Was ist das, Start per Doppelklick auf `index.html`, Deployment auf Cloudflare Pages, Ordnerstruktur)
   - eine `NOTIZEN.md` mit getroffenen Entscheidungen, bekannten Schwächen und Verbesserungsideen
5. Dann aufhören. Danach schauen wir uns das Ergebnis an und verbessern gezielt.

---

## Grundidee

Es gibt **eine fiktive Firma** (Vorschlag: *Lippe Logistik GmbH*), die man auf einer 2D-Arbeitsfläche aufbaut. An dieser Firma lernt man alle Themen im Zusammenhang:

- Man **baut** sie (Systeme ziehen und verbinden),
- **bewertet** sie (Schutzziele, Schutzbedarf),
- **greift sie an** (Schadsoftware),
- **sichert sie ab** (Schutzmaßnahmen, DSGVO, Privacy by Design/Default),
- und **organisiert** sie (DSB, ISB, Compliance).

**Wichtig:** Das ist **kein Quiz** und keine Karteikarten-App. Gelernt wird durch Ziehen, Verbinden, Ausprobieren und sichtbare Reaktionen. Jede Reaktion erklärt kurz und prüfungsnah, *warum* etwas passiert.

---

## Prüfungsthemen (müssen alle abgedeckt sein)

1. Schutzziele: Vertraulichkeit, Integrität, Verfügbarkeit
2. Schutzbedarfskategorien: normal, hoch, sehr hoch
3. Arten von Schadsoftware (Virus, Wurm, Trojaner, Ransomware, Rootkit, Hoax usw.)
4. Privacy by Design und Privacy by Default
5. IT-Sicherheitsbeauftragter (ISB) und seine Aufgaben
6. DSGVO
7. Compliance allgemein
8. Datenschutzbeauftragter (DSB) und seine Aufgaben
9. Pseudonymisierung und Anonymisierung
10. Zutritts-, Zugangs- und Zugriffskontrolle (und die weiteren Kontrollarten der TOMs)
11. Betroffenenrechte der DSGVO mit Artikelnummern (Art. 12–22)

---

## Technik

- **Kein Framework.** HTML, CSS und Vanilla JavaScript
- **Muss ohne Server laufen:** `index.html` per Doppelklick öffnen (`file://`) muss funktionieren, genauso wie später auf Cloudflare Pages. Daraus folgt:
  - **Keine ES-Module** (`type="module"`, `import`/`export` funktionieren unter `file://` nicht). Stattdessen normale `<script src="...">`-Tags in fester Reihenfolge
  - Gemeinsamer Namensraum, z. B. `window.AUDIT = window.AUDIT || {}`, jede Datei hängt ihre Teile daran (`AUDIT.canvas`, `AUDIT.data.lexikon` usw.)
  - **Kein `fetch()`** von lokalen Dateien und keine `.json`-Dateien. Alle Daten liegen als `.js`-Dateien vor, die Objekte zuweisen (`AUDIT.data.lexikon = [...]`)
  - Keine Abhängigkeit von CDNs nötig. Falls doch eine Bibliothek gebraucht wird, lokal im Projekt ablegen
  - Weitere HTML-Seiten (falls sinnvoll) werden über **normale relative Links** verbunden
- **Statische Seite** ohne Backend und ohne Build-Schritt, damit sie direkt auf Cloudflare Pages veröffentlicht werden kann
- Arbeitsfläche mit **SVG** (Knoten, Verbindungen, Animationen der Datenpakete)
- **Inhalte von Logik trennen:** Alle Lerntexte, Bausteine, Schadsoftware-Arten, Ereignisse und Lexikon-Einträge liegen in eigenen Datendateien unter `data/`, damit man sie leicht ergänzen und korrigieren kann
- **Fortschritt und eigene Firmen** im `localStorage` speichern, mit `try/catch` abgesichert. Die Seite muss auch funktionieren, wenn `localStorage` nicht verfügbar ist
- Testen: `index.html` direkt im Browser öffnen, kein Server
- Sprache der Oberfläche: **Deutsch**

Vorschlag Ordnerstruktur (darf angepasst werden):

```
audit/
├── index.html
├── css/
│   ├── base.css        (Farben als Variablen, Layout)
│   └── canvas.css
├── js/
│   ├── main.js         (Start, Navigation zwischen Stationen)
│   ├── canvas.js       (Arbeitsfläche: ziehen, verbinden, zoomen, verschieben)
│   ├── schutzbedarf.js (Station 1)
│   ├── angriff.js      (Station 2)
│   ├── daten.js        (Station 3)
│   ├── rollen.js       (Station 4)
│   ├── ernstfall.js    (Finale)
│   ├── lexikon.js
│   └── storage.js
├── data/
│   ├── bausteine.js
│   ├── schadsoftware.js
│   ├── massnahmen.js       (inkl. Kontrollarten der TOMs)
│   ├── dsgvo.js
│   ├── betroffenenrechte.js
│   ├── ereignisse.js
│   └── lexikon.js
└── README.md
```

Alle Dateien werden in `index.html` mit normalen `<script>`-Tags eingebunden: zuerst `data/*.js`, dann `storage.js`, `canvas.js`, die Stationen und zuletzt `main.js`.

---

## Design

- **Dunkles Tech-Design mit etwas Leben**, passend zu meinem Projekt-Hub (ähnlich wie meine anderen Projekte SOL, ELEKTRON, TRACE)
- Farben als CSS-Variablen auf `:root`
- Feste Farbcodes für die Schutzziele, überall gleich verwendet:
  - Vertraulichkeit, Integrität und Verfügbarkeit bekommen je eine eigene, klar unterscheidbare Farbe
  - Schutzbedarf: normal = grün, hoch = gelb/orange, sehr hoch = rot
- Ruhige, flüssige Animationen (Datenpakete auf Leitungen, Ausbreitung von Malware, Schilde)
- Erklärungen erscheinen in einem **Seitenpanel** oder als **Info-Karte** neben dem betroffenen Element, nicht als störende Pop-ups
- Primär für Desktop. Auf dem Handy soll die Seite zumindest bedienbar sein; das Lexikon muss dort gut lesbar sein
- Oben eine Navigation mit den Stationen: **Werkstatt · Angriff · Daten · Rollen · Ernstfall** und rechts ein Button **Lexikon**

---

## Die Arbeitsfläche (Grundlage für alles)

- Unendliche 2D-Fläche, verschiebbar (Pan) und zoombar
- Links eine **Baustein-Leiste**. Bausteine per Drag & Drop auf die Fläche ziehen
- Bausteine durch Ziehen von Anschluss zu Anschluss **verbinden** (Leitung = Netzwerkverbindung oder Datenfluss)
- Bausteine und Verbindungen anklickbar, um Eigenschaften im Seitenpanel zu bearbeiten
- Löschen, Rückgängig (mindestens einfaches Undo), Firma speichern/laden
- **Vorlage „Lippe Logistik GmbH“** mit fertig aufgebauter Beispielfirma, damit man nicht vor einer leeren Fläche steht. Zusätzlich ein freier Modus mit leerer Fläche

**Bausteine (mindestens):**

- **Systeme:** Server, Arbeitsplatz-PC, Laptop/Homeoffice, Firewall, Router, Cloud-Speicher, Backup-System, NAS
- **Anwendungen:** Webshop, Warenwirtschaft, Lohnbuchhaltung, Personalakte (HR), E-Mail, Newsletter-Tool, CRM
- **Personen:** Mitarbeiter, Kunde, Bewerber, externer Dienstleister
- **Standorte/Zonen:** Firmennetz, DMZ, Internet, EU, Drittland (z. B. USA)

---

## Station 1 – Werkstatt: Schutzziele und Schutzbedarf

**Ziel:** Verstehen, was die drei Schutzziele bedeuten und wie man den Schutzbedarf feststellt.

- Jede **Anwendung** hat drei Regler (Vertraulichkeit, Integrität, Verfügbarkeit) mit den Stufen **normal / hoch / sehr hoch**
- Beim Einstellen erscheint eine kurze Begründungshilfe mit Schadensszenarien, z. B. „Was passiert, wenn die Lohnbuchhaltung 3 Tage ausfällt?“
- **Vererbung sichtbar machen:** Läuft eine Anwendung auf einem Server (Verbindung), erbt der Server den Schutzbedarf. Die Farben des Servers aktualisieren sich live
  - **Maximumprinzip:** Das System bekommt den höchsten Schutzbedarf der Anwendungen, die darauf laufen
  - **Kumulationseffekt:** Viele Anwendungen mit „normal“ auf einem Server können zusammen zu „hoch“ führen. Als Hinweis anzeigen, wenn viele Anwendungen auf einem System liegen
  - **Verteilungseffekt:** Ist eine Anwendung auf mehrere redundante Systeme verteilt, kann der Schutzbedarf für die Verfügbarkeit des einzelnen Systems niedriger sein
- Klick auf ein Schutzziel zeigt Definition und Beispiele für Verletzungen

**Inhalte (fachlich korrekt umsetzen):**

| Schutzziel | Bedeutung | Beispiel für Verletzung |
|---|---|---|
| Vertraulichkeit | Nur Berechtigte haben Zugriff auf Informationen | Kundendaten werden gestohlen, Mail an falschen Empfänger |
| Integrität | Daten sind korrekt, vollständig und nicht unbemerkt verändert | Manipulierte Überweisung, veränderte Preise im Shop |
| Verfügbarkeit | Systeme und Daten sind nutzbar, wenn sie gebraucht werden | Serverausfall, Ransomware sperrt Daten |

Schutzbedarfskategorien (nach BSI-Standard 200-2):

| Kategorie | Schadensauswirkung |
|---|---|
| normal | begrenzt und überschaubar |
| hoch | beträchtlich |
| sehr hoch | existenziell bedrohlich, katastrophal |

Typische Schadensszenarien für die Bewertung: Verstoß gegen Gesetze/Verträge, Beeinträchtigung des informationellen Selbstbestimmungsrechts, Beeinträchtigung der persönlichen Unversehrtheit, Beeinträchtigung der Aufgabenerfüllung, negative Innen- oder Außenwirkung (Image), finanzielle Auswirkungen.

---

## Station 2 – Angriff: Schadsoftware und Schutzmaßnahmen

**Ziel:** Die Arten von Schadsoftware am **Verhalten** unterscheiden können und wissen, welche Maßnahme wogegen hilft.

- Rechts eine Leiste mit **Schadsoftware-Karten**. Eine Karte auf ein System ziehen und die Simulation startet
- Jede Art hat ein **eigenes, sichtbares Verhalten** auf der Arbeitsfläche:

| Art | Verhalten in der Simulation | Hauptsächlich betroffenes Schutzziel |
|---|---|---|
| **Virus** | Hängt sich an eine Wirtsdatei. Breitet sich nur aus, wenn ein Benutzer die Datei öffnet bzw. weitergibt (Button „Datei öffnen“ beim Mitarbeiter) | Integrität (je nach Schadfunktion auch andere) |
| **Wurm** | Verbreitet sich **selbstständig** über die Netzwerkleitungen auf alle erreichbaren Systeme, nutzt Sicherheitslücken | Verfügbarkeit, Integrität |
| **Trojaner** | Sieht aus wie ein nützliches Programm (harmloses Icon), führt versteckt eine Schadfunktion aus, oft Hintertür (Backdoor) | Vertraulichkeit |
| **Ransomware** | Verschlüsselt Daten, System wird gesperrt, Lösegeldforderung erscheint | Verfügbarkeit |
| **Rootkit** | Nistet sich tief im System ein und **versteckt sich** und andere Schadsoftware. System sieht grün aus, ist aber befallen. Erst ein spezieller Scan (z. B. von einem sauberen Boot-Medium) deckt es auf | Vertraulichkeit, Integrität |
| **Spyware** | Spioniert Nutzerverhalten und Daten aus und leitet sie ins Internet weiter (sichtbare Datenpakete nach außen) | Vertraulichkeit |
| **Keylogger** | Zeichnet Tastatureingaben (z. B. Passwörter) auf | Vertraulichkeit |
| **Adware** | Blendet unerwünschte Werbung ein | eher Belästigung, teils Vertraulichkeit |
| **Bot / Botnetz** | Befallenes System wird ferngesteuert, Teil eines Netzes für z. B. Spam oder DDoS | Verfügbarkeit (anderer) |
| **Hoax** | **Keine Schadsoftware**, sondern eine Falschmeldung (z. B. Kettenmail „Lösche Datei X, das ist ein Virus!“). Schaden entsteht, wenn Mitarbeiter darauf reagieren | je nach Handlung |

- Ergänzend als Lexikon-Einträge: **Phishing / Social Engineering**, **Backdoor**, **Scareware**
- **Schutzmaßnahmen** als Schilde, die man auf Systeme, Leitungen oder Personen zieht:
  - Firewall, Virenscanner, regelmäßige Updates/Patches, Backup (offline/getrennt), Netzwerksegmentierung, Benutzerrechte (kein Admin im Alltag), Verschlüsselung, **Mitarbeiterschulung/Sensibilisierung**, E-Mail-Filter
- Die Simulation zeigt, **welche Maßnahme was stoppt** und erklärt es. Beispiele:
  - Segmentierung bremst den Wurm an der Segmentgrenze
  - Backup stoppt Ransomware nicht, aber die Daten sind wiederherstellbar
  - Schulung ist die einzige wirksame Maßnahme gegen Hoax und Phishing
- Die Schutzziel-Balken der Systeme fallen sichtbar, wenn ein Angriff wirkt

### Zutritt, Zugang, Zugriff (eigener Teil in Station 2)

Neben Schadsoftware gibt es **Angreifer-Figuren**, die man auf die Arbeitsfläche zieht. Sie zeigen den Unterschied der drei wichtigsten Kontrollarten:

| Angreifer | Was er versucht | Was ihn stoppt |
|---|---|---|
| Fremder im Gebäude | Geht in den Serverraum | **Zutrittskontrolle** |
| Fremder am unbeaufsichtigten PC | Meldet sich am System an | **Zugangskontrolle** |
| Praktikant mit eigenem Login | Öffnet die Gehaltsdaten der Personalabteilung | **Zugriffskontrolle** |

- Die Firma bekommt dafür **Räume/Zonen** auf der Arbeitsfläche (Empfang, Büro, Serverraum, Personalabteilung), in die man Systeme legt
- Maßnahmen als Schilde: Schlüssel/Chipkarte, Alarmanlage, Besucherbuch (Zutritt) · Passwort, Zwei-Faktor-Anmeldung, automatische Bildschirmsperre (Zugang) · Rollen- und Berechtigungskonzept, Need-to-know-Prinzip (Zugriff)
- Merkhilfe sichtbar einblenden: **Zutritt = Raum · Zugang = System · Zugriff = Daten**

**Inhalte (fachlich korrekt umsetzen) – Kontrollarten der technischen und organisatorischen Maßnahmen (TOMs):**

| Kontrollart | Ziel | Beispiele |
|---|---|---|
| Zutrittskontrolle | Unbefugte kommen nicht **physisch** in Räume mit Datenverarbeitungsanlagen | Schlüssel, Chipkarte, Pförtner, Videoüberwachung |
| Zugangskontrolle | Unbefugte können **Systeme** nicht benutzen | Benutzername + Passwort, 2FA, Bildschirmsperre |
| Zugriffskontrolle | Berechtigte sehen nur die **Daten**, die sie für ihre Arbeit brauchen | Berechtigungskonzept, Rollen, Protokollierung von Zugriffen |
| Weitergabekontrolle | Daten werden bei Übertragung/Transport nicht unbefugt gelesen oder verändert | Verschlüsselung, VPN, HTTPS |
| Eingabekontrolle | Nachvollziehbar, wer wann welche Daten eingegeben, geändert oder gelöscht hat | Protokollierung (Logs) |
| Auftragskontrolle | Auftragsverarbeiter arbeiten nur nach Weisung | AV-Vertrag, Kontrollen beim Dienstleister |
| Verfügbarkeitskontrolle | Daten sind gegen Zerstörung und Verlust geschützt | Backup, USV, Brandschutz |
| Trennungskontrolle | Daten für unterschiedliche Zwecke werden getrennt verarbeitet | getrennte Datenbanken, Mandantentrennung |

Hinweis für den Lexikon-Eintrag: Diese Einteilung stammt aus dem alten BDSG (Anlage zu § 9) und wird im Unterricht weiter verwendet. Die DSGVO nennt in Art. 32 die Ziele allgemeiner (Pseudonymisierung, Verschlüsselung, Vertraulichkeit, Integrität, Verfügbarkeit, Belastbarkeit, Wiederherstellbarkeit, regelmäßige Überprüfung).

---

## Station 3 – Daten: DSGVO und Privacy by Design/Default

**Ziel:** Die Kernregeln der DSGVO anwenden können und Privacy by Design/Default verstehen.

### Teil A: Datenflüsse prüfen

- Verbindungen zwischen Personen und Anwendungen werden zu **Datenflüssen**. Beim Anklicken festlegen:
  - **Welche Daten?** (Name, E-Mail, Adresse, Bankdaten, Gesundheitsdaten, Bewerbungsunterlagen …). Besondere Kategorien (Art. 9) visuell hervorheben
  - **Zweck** der Verarbeitung
  - **Rechtsgrundlage** (Art. 6 Abs. 1 lit. a–f)
- Bei Systemen festlegen: Verarbeitet die Firma selbst (**Verantwortlicher**) oder ein externer Dienstleister in ihrem Auftrag (**Auftragsverarbeiter**)? Steht das System in der **EU oder einem Drittland**?
- Button **„Audit starten“**: Datenpakete laufen animiert über die Leitungen. An Problemstellen werden sie rot, und es erscheint eine Erklärung. Prüfregeln mindestens:
  - Keine Rechtsgrundlage angegeben → Verarbeitung unzulässig (Art. 6)
  - Besondere Kategorien ohne Ausnahme nach Art. 9 → Fehler
  - Externer Dienstleister ohne AV-Vertrag → Art. 28 fehlt
  - Drittland ohne Angemessenheitsbeschluss oder geeignete Garantien (z. B. Standardvertragsklauseln) → Art. 44 ff.
  - Personenbezogene Daten ohne Verschlüsselung/Zugriffsschutz → Art. 32 (TOMs), Schutzziel Vertraulichkeit
  - Mehr Daten als für den Zweck nötig → Grundsatz Datenminimierung (Art. 5)
- Nach dem Audit eine Zusammenfassung: was gut ist, was fehlt, mit Artikelangaben

### Teil B: Formular-Werkstatt (Privacy by Design / by Default)

- Man baut ein **Anmeldeformular** (z. B. Kundenkonto im Webshop) aus Feld-Bausteinen zusammen: Name, E-Mail, Passwort, Geburtsdatum, Telefonnummer, Geschlecht, Newsletter-Checkbox, Weitergabe an Partner usw.
- Für jedes Feld: Pflicht oder optional, Voreinstellung (angehakt/nicht angehakt)
- Eine **Live-Bewertung** zeigt rot/grün:
  - Felder, die für den Zweck nicht nötig sind, aber Pflicht sind → Datenminimierung verletzt
  - Vorangekreuzter Newsletter oder vorangekreuzte Datenweitergabe → **Privacy by Default verletzt**, eine Einwilligung muss aktiv erfolgen
  - Passwortspeicherung im Klartext vs. gehasht, Übertragung ohne HTTPS → **Privacy by Design**
- Vorher/Nachher-Ansicht: schlechtes Formular vs. datenschutzfreundliches Formular

### Teil C: Daten-Labor (Pseudonymisierung und Anonymisierung)

- Eine kleine **Kundentabelle** (Name, E-Mail, Geburtsdatum, PLZ, Bestellungen) wird angezeigt
- Man zieht **Werkzeuge** auf Spalten oder auf die ganze Tabelle:
  - Name durch Kundennummer ersetzen, Zuordnungstabelle separat speichern → **Pseudonymisierung**
  - Name und E-Mail löschen, Geburtsdatum nur als Altersgruppe, PLZ gekürzt, Daten zusammengefasst (z. B. „34 % der Kunden aus Lippe“) → **Anonymisierung**
- Eine Anzeige zeigt live: **„Noch personenbezogen? Ja / Nein“** und **„Gilt die DSGVO? Ja / Nein“**
- Der Clou: Wird die Zuordnungstabelle neben die pseudonymisierte Tabelle gelegt, kann man die Personen sofort wieder erkennen. Das erklärt, warum pseudonyme Daten weiter unter die DSGVO fallen
- Zusätzlich ein Hinweis, dass auch ohne Namen eine Kombination aus Merkmalen (z. B. Geburtsdatum + PLZ + Geschlecht) eine Person identifizierbar machen kann

### Teil D: Betroffenen-Postfach (Betroffenenrechte)

- Ein **Postfach** auf der Arbeitsfläche, in dem nach und nach Anfragen von Kunden, Bewerbern oder Mitarbeitern eingehen, z. B.:
  - „Welche Daten haben Sie über mich gespeichert?“ → Art. 15
  - „Meine Adresse ist falsch.“ → Art. 16
  - „Löschen Sie bitte mein Konto und alle Daten.“ → Art. 17 (mit Hinweis: gesetzliche Aufbewahrungsfristen, z. B. für Rechnungen, können entgegenstehen)
  - „Ich bestreite die Richtigkeit, bitte bis zur Klärung nicht weiterverwenden.“ → Art. 18
  - „Ich wechsle den Anbieter, bitte meine Daten in einem gängigen Format.“ → Art. 20
  - „Ich will keine Werbung mehr per Post.“ → Art. 21
  - „Mein Kreditantrag wurde automatisch abgelehnt, ich will, dass ein Mensch draufschaut.“ → Art. 22
  - „Ich widerrufe meine Einwilligung zum Newsletter.“ → Art. 7 Abs. 3
- Man zieht jede Anfrage auf die passende **Artikel-Kachel**. Danach zeigt die Seite, was die Firma tun muss, in welcher **Frist** (Art. 12: in der Regel innerhalb eines Monats, verlängerbar um zwei weitere Monate, grundsätzlich kostenlos) und wer intern beteiligt ist (z. B. DSB berät)
- Die Artikel-Kacheln bleiben als Übersicht stehen, damit man die Nummern sieht und sich merkt

### Inhalte (fachlich korrekt umsetzen)

**Pseudonymisierung und Anonymisierung**
- **Pseudonymisierung** (Art. 4 Nr. 5 DSGVO): Personenbezogene Daten werden so verarbeitet, dass sie ohne zusätzliche Informationen (z. B. eine Zuordnungstabelle) keiner Person mehr zugeordnet werden können. Diese Zusatzinformationen werden getrennt aufbewahrt und geschützt. **Der Personenbezug ist umkehrbar**, deshalb bleiben es personenbezogene Daten und die **DSGVO gilt weiter**. Pseudonymisierung ist eine empfohlene Schutzmaßnahme (Art. 25, Art. 32)
- **Anonymisierung**: Der Personenbezug wird **dauerhaft und unumkehrbar** entfernt. Anonyme Daten sind keine personenbezogenen Daten mehr, die **DSGVO gilt nicht** (Erwägungsgrund 26)
- Merkhilfe: **Pseudonym = Maske (kann abgenommen werden) · Anonym = Gesicht weg**

**Betroffenenrechte (Kapitel III DSGVO, Art. 12–22)**

| Artikel | Inhalt |
|---|---|
| Art. 12 | Transparente Information und Modalitäten: verständlich, Frist in der Regel 1 Monat (verlängerbar um 2 Monate), grundsätzlich unentgeltlich |
| Art. 13 | Informationspflicht, wenn Daten **bei der Person selbst** erhoben werden |
| Art. 14 | Informationspflicht, wenn Daten **nicht bei der Person** erhoben werden |
| Art. 15 | **Auskunftsrecht**: Bestätigung, ob Daten verarbeitet werden, welche, wozu, an wen, wie lange, plus Kopie der Daten |
| Art. 16 | Recht auf **Berichtigung** falscher Daten |
| Art. 17 | Recht auf **Löschung** („Recht auf Vergessenwerden“) |
| Art. 18 | Recht auf **Einschränkung** der Verarbeitung (Daten werden gesperrt statt gelöscht) |
| Art. 19 | Mitteilungspflicht: Empfänger der Daten über Berichtigung, Löschung oder Einschränkung informieren |
| Art. 20 | Recht auf **Datenübertragbarkeit** (Daten in strukturiertem, gängigem, maschinenlesbarem Format) |
| Art. 21 | **Widerspruchsrecht** (bei Direktwerbung immer) |
| Art. 22 | Schutz vor **automatisierten Einzelentscheidungen** einschließlich Profiling |

Ergänzend: Widerruf der Einwilligung jederzeit (Art. 7 Abs. 3), Beschwerde bei der Aufsichtsbehörde (Art. 77), Schadensersatz (Art. 82).

**Weitere DSGVO-Inhalte**

- **Personenbezogene Daten** (Art. 4 Nr. 1): alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen
- **Grundsätze (Art. 5):** Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz · Zweckbindung · Datenminimierung · Richtigkeit · Speicherbegrenzung · Integrität und Vertraulichkeit · Rechenschaftspflicht
- **Rechtsgrundlagen (Art. 6 Abs. 1):** a) Einwilligung · b) Vertrag/vorvertragliche Maßnahmen · c) rechtliche Verpflichtung · d) lebenswichtige Interessen · e) öffentliches Interesse/öffentliche Gewalt · f) berechtigtes Interesse
- **Besondere Kategorien (Art. 9):** u. a. Gesundheitsdaten, genetische und biometrische Daten, religiöse Überzeugung, politische Meinung, Gewerkschaftszugehörigkeit, ethnische Herkunft, Sexualleben/sexuelle Orientierung. Verarbeitung grundsätzlich verboten, außer bei Ausnahmen (z. B. ausdrückliche Einwilligung)
- **Betroffenenrechte:** Information (Art. 13/14), Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21)
- **Privacy by Design** (Art. 25 Abs. 1): Datenschutz durch Technikgestaltung. Schon bei der Planung und Entwicklung werden geeignete technische und organisatorische Maßnahmen eingebaut (z. B. Pseudonymisierung, Datenminimierung)
- **Privacy by Default** (Art. 25 Abs. 2): Datenschutz durch datenschutzfreundliche Voreinstellungen. Standardmäßig werden nur die Daten verarbeitet, die für den Zweck nötig sind (Menge, Umfang, Speicherdauer, Zugänglichkeit)
- **Auftragsverarbeitung** (Art. 28), **Verzeichnis von Verarbeitungstätigkeiten** (Art. 30), **TOMs** (Art. 32), **Datenschutz-Folgenabschätzung** (Art. 35)
- **Datenpanne:** Meldung an die Aufsichtsbehörde möglichst **innerhalb von 72 Stunden** nach Bekanntwerden (Art. 33), außer es besteht voraussichtlich kein Risiko für die Betroffenen. Bei **hohem Risiko** zusätzlich Benachrichtigung der Betroffenen (Art. 34)
- **Bußgelder** (Art. 83): bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes, je nachdem, was höher ist
- **BDSG** ergänzt die DSGVO in Deutschland (z. B. Beschäftigtendatenschutz, Regeln zum DSB)

---

## Station 4 – Rollen: DSB, ISB und Compliance

**Ziel:** Wissen, wer im Unternehmen wofür zuständig ist, und DSB und ISB klar unterscheiden können.

- In der Firma stehen **Figuren**: Geschäftsführung, Datenschutzbeauftragter (DSB), IT-Sicherheitsbeauftragter (ISB), Compliance-Beauftragter, IT-Abteilung, Mitarbeiter
- Nacheinander tauchen **Ereignis-Karten** auf. Man zieht jede Karte zur zuständigen Person (manchmal sind mehrere richtig). Die Person reagiert und erklärt ihre Rolle. Beispiele:
  - „Ein Kunde verlangt Auskunft über seine gespeicherten Daten“
  - „Es soll eine neue Cloud-Software für die Personalabteilung eingeführt werden“
  - „Auf einem Server wurde Ransomware entdeckt“
  - „Ein Mitarbeiter will Kundendaten in seine private Dropbox laden“
  - „Die Aufsichtsbehörde fragt nach dem Verzeichnis von Verarbeitungstätigkeiten“
  - „Ein Sicherheitskonzept für das neue Lager muss erstellt werden“
  - „Ein Mitarbeiter meldet anonym, dass ein Kollege Schmiergeld annimmt“
  - „Die jährliche Sicherheitsschulung muss geplant werden“
- Eine **Überschneidungs-Grafik** (zwei überlappende Kreise DSB/ISB): Aufgaben-Kärtchen landen nach dem Zuordnen in „nur DSB“, „nur ISB“ oder „beide“
- **Compliance-Ampel:** Ein Dashboard für die ganze Firma (Daten aus den Stationen 1–3), das zeigt, welche Bereiche erfüllt sind und wo es Lücken gibt

### Inhalte (fachlich korrekt umsetzen)

**Datenschutzbeauftragter (DSB)**
- Rechtsgrundlage: Art. 37–39 DSGVO, § 38 BDSG
- **Benennungspflicht** u. a.:
  - wenn in der Regel **mindestens 20 Personen ständig** mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind (§ 38 BDSG)
  - unabhängig von der Zahl, wenn eine Datenschutz-Folgenabschätzung nötig ist oder Daten geschäftsmäßig zur Übermittlung verarbeitet werden
  - nach DSGVO bei Behörden, bei umfangreicher systematischer Überwachung als Kerntätigkeit oder bei umfangreicher Verarbeitung besonderer Kategorien
- Kann **intern** (Mitarbeiter) oder **extern** (Dienstleister) sein
- Stellung: **weisungsfrei** bei seinen Aufgaben, darf deswegen nicht benachteiligt werden, berichtet direkt an die höchste Managementebene, Verschwiegenheitspflicht, als interner DSB besonderer Kündigungsschutz
- **Keine Interessenkonflikte:** Geschäftsführer oder IT-Leiter sollten nicht selbst DSB sein (sie würden sich selbst kontrollieren)
- **Aufgaben (Art. 39):** Unterrichtung und Beratung von Leitung und Beschäftigten · Überwachung der Einhaltung des Datenschutzes (inkl. Sensibilisierung, Schulung, Überprüfungen) · Beratung bei der Datenschutz-Folgenabschätzung · Zusammenarbeit mit der Aufsichtsbehörde und Anlaufstelle für sie
- **Wichtig:** Der DSB berät und überwacht, **verantwortlich** für den Datenschutz bleibt die Unternehmensleitung

**IT-Sicherheitsbeauftragter (ISB / Informationssicherheitsbeauftragter)**
- Kümmert sich um die **Informationssicherheit insgesamt**, also um den Schutz **aller** Informationen und IT-Systeme (Vertraulichkeit, Integrität, Verfügbarkeit), nicht nur um personenbezogene Daten
- **Aufgaben:** Steuerung und Koordination des Informationssicherheitsprozesses · Mitarbeit an der Sicherheitsleitlinie und Erstellung/Fortschreibung des Sicherheitskonzepts · Beratung der Leitung · Prüfung, ob Sicherheitsmaßnahmen umgesetzt werden · Untersuchung von Sicherheitsvorfällen · Sensibilisierung und Schulung der Mitarbeiter · regelmäßiger Bericht an die Leitung
- Orientierung an **BSI IT-Grundschutz** bzw. **ISO/IEC 27001** (Informationssicherheits-Managementsystem, ISMS)
- Für normale Unternehmen in der Regel **nicht allgemein gesetzlich vorgeschrieben** (anders als oft der DSB), wird aber von Normen, Kunden und in bestimmten Branchen gefordert
- **Unterschied in einem Satz:** Der DSB schützt **Menschen** und ihre Rechte an ihren Daten, der ISB schützt die **Informationen und Systeme** des Unternehmens
- **Gemeinsam:** TOMs, Umgang mit Sicherheitsvorfällen/Datenpannen, Schulungen. Beide sollten eng zusammenarbeiten

**Compliance**
- Bedeutet **Regeltreue**: Einhaltung von Gesetzen, internen Richtlinien und freiwilligen Selbstverpflichtungen
- Bausteine eines Compliance-Management-Systems: Verhaltenskodex (Code of Conduct), interne Richtlinien, Schulungen, Kontrollen, klare Zuständigkeiten, **Hinweisgebersystem** (Hinweisgeberschutzgesetz)
- Folgen von Verstößen: Bußgelder, Schadensersatz, persönliche Haftung der Leitung, Imageschaden
- **IT-Compliance**-Beispiele: DSGVO/BDSG, Aufbewahrungsfristen (HGB, AO, GoBD), Lizenzen/Urheberrecht bei Software, TDDDG (Cookies, Endgeräte), IT-Sicherheitsvorgaben

---

## Finale – Ernstfall

**Ziel:** Alle Themen in einem Szenario verbinden.

- Auf die Beispielfirma (oder die eigene Firma) trifft **Ransomware** über einen Mitarbeiter, der einen Mailanhang öffnet
- Eine **72-Stunden-Uhr** läuft sichtbar (beschleunigt)
- Man trifft Entscheidungen durch Ziehen und Klicken auf der Arbeitsfläche, z. B.:
  - Betroffene Systeme vom Netz trennen
  - Wer muss informiert werden? (ISB, DSB, Geschäftsführung) Karten zu den Figuren ziehen
  - Welche Schutzziele sind verletzt?
  - Sind personenbezogene Daten betroffen? Wenn ja: Meldung an die Aufsichtsbehörde (Art. 33)? Betroffene benachrichtigen (Art. 34)?
  - Wiederherstellung aus dem Backup (nur möglich, wenn in Station 2 ein getrenntes Backup gesetzt wurde)
  - War die Kundendatenbank pseudonymisiert oder verschlüsselt? Das verringert das Risiko für die Betroffenen und beeinflusst, ob Art. 34 greift
  - Hat die Zugriffskontrolle die Ausbreitung begrenzt (z. B. hatte der betroffene Mitarbeiter nur Zugriff auf seine Abteilungsdaten)?
  - Nach dem Vorfall gehen im Betroffenen-Postfach Anfragen ein („Waren meine Daten betroffen?“ → Art. 15, „Löschen Sie alles!“ → Art. 17). Man ordnet sie den Artikeln zu
- Am Ende eine **Auswertung**: was gut lief, was fehlte, mit Erklärungen und Artikelangaben
- Das Ergebnis hängt davon ab, wie man die Firma in den Stationen 1–3 abgesichert hat

---

## Lexikon (durchgehend)

- Seitenpanel, jederzeit über den Button oben rechts erreichbar
- Jeder Fachbegriff, der in Erklärungstexten vorkommt, ist **anklickbar** und öffnet den Lexikon-Eintrag
- Einträge kurz und prüfungsnah: Definition in 1–2 Sätzen, Beispiel, ggf. Artikel/Norm
- Suchfeld und Gruppierung nach den 8 Prüfungsthemen
- Alle Begriffe aus diesem Plan müssen enthalten sein

---

## Etappen

### Etappe 1 – Grundgerüst und Werkstatt
- Projektstruktur, Design-Grundlagen (Farbvariablen, Layout, Navigation)
- Arbeitsfläche: Pan, Zoom, Bausteine ziehen, verbinden, auswählen, löschen, speichern/laden
- Vorlage „Lippe Logistik GmbH“
- Station 1 komplett (Schutzziele, Schutzbedarf, Maximumprinzip, Kumulations- und Verteilungseffekt)

### Etappe 2 – Angriff
- Schadsoftware-Karten mit eigenem Verhalten und Animation
- Schutzmaßnahmen als Schilde, Wirkung sichtbar, Erklärungen
- Schutzziel-Balken reagieren auf Angriffe
- Räume/Zonen, Angreifer-Figuren und Kontrollarten (Zutritt, Zugang, Zugriff usw.)

### Etappe 3 – Daten
- Datenflüsse mit Datenart, Zweck, Rechtsgrundlage, Rolle und Standort
- Audit-Durchlauf mit Prüfregeln und Zusammenfassung
- Formular-Werkstatt mit Live-Bewertung (Privacy by Design/Default)
- Daten-Labor (Pseudonymisierung und Anonymisierung)
- Betroffenen-Postfach mit Artikel-Kacheln (Art. 12–22, Art. 7 Abs. 3)

### Etappe 4 – Rollen
- Figuren, Ereignis-Karten, Zuordnung mit Erklärungen
- DSB/ISB-Überschneidungs-Grafik
- Compliance-Ampel

### Etappe 5 – Ernstfall und Lexikon
- Ernstfall-Szenario mit 72-Stunden-Uhr und Auswertung
- Vollständiges Lexikon mit Suche und anklickbaren Begriffen
- Feinschliff: einheitliches Design, Startseite mit kurzer Einführung („So funktioniert AUDIT“), Fortschrittsanzeige pro Station
- README.md und NOTIZEN.md

---

## Qualitätsanforderungen

- **Fachliche Richtigkeit hat Vorrang.** Lerninhalte stehen in den Datendateien. Wo du dir bei einem Fakt nicht sicher bist, markiere ihn in `NOTIZEN.md` zur Prüfung, statt etwas zu erfinden
- Erklärtexte kurz, verständlich, prüfungsnah (Zielgruppe: IHK-Prüfung Fachinformatiker)
- **Funktioniert per Doppelklick auf `index.html`** ohne Server (vor dem Abschluss jeder Etappe so testen)
- Keine Fehlermeldungen in der Browser-Konsole
- Läuft in aktuellen Versionen von Chrome, Edge und Firefox
- Code sauber gegliedert und kommentiert, damit ich ihn verstehen und erweitern kann
