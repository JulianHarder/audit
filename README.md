# AUDIT – Firma bauen, angreifen, absichern

Interaktive Lernwerkstatt zu **IT-Sicherheit, Datenschutz und Compliance**
für die Umschulung zum Fachinformatiker Anwendungsentwicklung (IHK-Prüfung).

Man baut die fiktive **Lippe Logistik GmbH** auf einer 2D-Arbeitsfläche auf,
stellt ihren Schutzbedarf fest, greift sie mit Schadsoftware an, sichert sie ab,
prüft ihre Datenflüsse nach DSGVO und führt sie durch einen Ernstfall.
Kein Quiz und keine Karteikarten: Gelernt wird durch Ziehen, Verbinden,
Ausprobieren und sichtbare Reaktionen.

---

## Starten

**Variante 1 – ohne alles:** `index.html` per Doppelklick öffnen.
Die Seite läuft vollständig lokal über `file://`, ohne Server und ohne Internet.

**Variante 2 – mit lokalem Server** (nur falls gewünscht):

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` im Browser öffnen.

Getestet in aktuellen Versionen von Chrome, Edge und Firefox.

---

## Die fünf Stationen

| Station | Inhalt |
|---|---|
| **1 · Werkstatt** | Firma aufbauen, Schutzziele (Vertraulichkeit, Integrität, Verfügbarkeit), Schutzbedarf feststellen, Vererbung auf Systeme (Maximumprinzip, Kumulations- und Verteilungseffekt) |
| **2 · Angriff** | 11 Arten von Schadsoftware mit eigenem Verhalten, 20 Schutzmaßnahmen als Schilde, Angreifer-Figuren für Zutritt / Zugang / Zugriff, alle acht Kontrollarten der TOMs |
| **3 · Daten** | A: Datenflüsse mit Datenart, Zweck, Rechtsgrundlage, Rolle und Standort plus Audit-Durchlauf · B: Formular-Werkstatt (Privacy by Design/Default) · C: Daten-Labor (Pseudonymisierung/Anonymisierung) · D: Betroffenen-Postfach (Art. 12–22) |
| **4 · Rollen** | 15 Ereignis-Karten den Zuständigen zuordnen, DSB und ISB abgrenzen, DSB-Benennungspflicht prüfen, Compliance-Ampel |
| **5 · Ernstfall** | Ransomware-Vorfall mit laufender 72-Stunden-Uhr, Entscheidungen treffen, Auswertung mit Artikelangaben |

Das **Lexikon** (Button oben rechts) enthält über 120 prüfungsnahe Kurzdefinitionen,
gruppiert nach Prüfungsthemen und mit Suchfeld. Jeder Fachbegriff in den
Erklärtexten ist anklickbar und öffnet den passenden Eintrag.

---

## Bedienung

* **Bausteine** aus der linken Leiste auf die Fläche ziehen
* **Verbinden**: einen der kleinen Anschlusspunkte am Rand eines Bausteins auf einen anderen Baustein ziehen
* **Verschieben** der Fläche: mit der Maus ziehen · **Zoom**: Mausrad
* **Auswählen**: Baustein oder Verbindung anklicken, Details erscheinen rechts
* **Löschen**: Entf-Taste oder der Knopf in der Werkzeugleiste
* **Rückgängig**: Strg + Z
* Die Firma wird automatisch im Browser gespeichert; zusätzlich kann man sie
  unter einem Namen sichern und wieder laden

Verbindungsarten (werden automatisch erkannt, lassen sich aber umstellen):

| Art | Bedeutung | Wirkung |
|---|---|---|
| Netzwerkverbindung | zwei Systeme hängen am selben Netz | Ausbreitungsweg für Würmer und Ransomware |
| läuft auf | Anwendung läuft auf einem System | überträgt den Schutzbedarf (Vererbung) |
| Datenfluss | personenbezogene Daten fließen | wird im DSGVO-Audit geprüft |

---

## Deployment auf Cloudflare Pages

Die Seite ist **statisch** – kein Build-Schritt, keine Abhängigkeiten, kein Backend.

1. Repository zu GitHub pushen
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**
3. Repository auswählen
4. Build-Einstellungen:
   * **Framework preset:** `None`
   * **Build command:** *(leer lassen)*
   * **Build output directory:** `/`
5. **Save and Deploy**

Alternativ ohne Git: Im Cloudflare-Dashboard **Upload assets** wählen und den
Projektordner hochladen.

---

## Ordnerstruktur

```
audit/
├── index.html              Einstieg, bindet alle Skripte in fester Reihenfolge ein
├── css/
│   ├── base.css            Farbvariablen, Layout, Navigation, Panels, Mobil
│   └── canvas.css          SVG-Arbeitsfläche: Knoten, Leitungen, Zonen, Effekte
├── data/                   nur Inhalte – hier korrigiert und ergänzt man Lerntexte
│   ├── bausteine.js        Systeme, Anwendungen, Personen, Zonen
│   ├── schutzziele.js      Schutzziele, Stufen, Schadensszenarien, Vererbung
│   ├── vorlage.js          Beispielfirma „Lippe Logistik GmbH“
│   ├── schadsoftware.js    11 Arten mit Verhalten und Gegenmaßnahmen
│   ├── massnahmen.js       Schutzmaßnahmen, Angreifer, Kontrollarten der TOMs
│   ├── dsgvo.js            Datenarten, Rechtsgrundlagen, Zwecke, Prüfregeln
│   ├── betroffenenrechte.js Art. 12–22 und die Anfragen fürs Postfach
│   ├── datenwerkstatt.js   Formularfelder und Daten-Labor
│   ├── rollen.js           Figuren, DSB/ISB-Abgrenzung, Benennungspflicht
│   ├── ereignisse.js       15 Ereignis-Karten für Station 4
│   └── lexikon.js          über 120 Lexikon-Einträge
└── js/
    ├── util.js             DOM-Helfer, Toasts, Modal, Lexikon-Verlinkung
    ├── storage.js          localStorage mit try/catch und RAM-Ersatz
    ├── dnd.js              eigenes Drag & Drop über Pointer Events
    ├── firma.js            Datenmodell und Schutzbedarfs-Vererbung
    ├── canvas.js           SVG-Arbeitsfläche (Pan, Zoom, Verbinden, Effekte)
    ├── palette.js          linke Baustein-Leiste
    ├── ui.js               wiederverwendete Oberflächenteile
    ├── pruefung.js         DSGVO-Prüfregeln und Compliance-Ampel
    ├── lexikon.js          Lexikon-Panel mit Suche
    ├── schutzbedarf.js     Station 1
    ├── angriff.js          Station 2
    ├── daten.js            Station 3
    ├── rollen.js           Station 4
    ├── ernstfall.js        Station 5
    └── main.js             Startseite, Navigation, Fortschritt
```

---

## Technik

* HTML, CSS und Vanilla JavaScript – **kein Framework, kein Build, keine CDNs**
* **Keine ES-Module**, kein `fetch()` und keine `.json`-Dateien, damit alles
  unter `file://` funktioniert. Alle Dateien hängen ihre Teile an `window.AUDIT`
* Arbeitsfläche als **SVG** mit eigener Pan-/Zoom- und Drag-Logik über Pointer Events
* **Inhalte und Logik sind getrennt**: Lerntexte stehen ausschließlich in `data/`
* Fortschritt und Firmen liegen im `localStorage`, abgesichert mit `try/catch`;
  ohne verfügbaren Speicher läuft die Seite weiter (nur ohne Speichern)

Eigene Lerntexte ergänzen: Datei in `data/` öffnen, Eintrag nach dem gleichen
Muster hinzufügen, Seite neu laden. Begriffe in doppelten eckigen Klammern,
zum Beispiel `[[Ransomware]]`, werden automatisch zu Lexikon-Links.

---

## Hinweis

AUDIT ist eine Lernhilfe für die IHK-Prüfung, keine Rechtsberatung.
Artikelangaben beziehen sich auf die DSGVO, Paragrafen auf deutsches Recht.
