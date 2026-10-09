# AUDIT – IT-Sicherheit und Datenschutz im Firmen-Chat

Lernseite für **Datenschutz, Informationssicherheit und Compliance**
(Fachinformatiker, Modul IV, IHK-Prüfung).

Du bist neu bei der fiktiven **Lippe Logistik GmbH**. Deine Kolleginnen und
Kollegen schreiben dir: eine verdächtige Mail, eine Kundenanfrage, ein Vorfall.
Du entscheidest per Auswahl und bekommst sofort die Begründung – in der Sprache,
die in der Klausur erwartet wird.

Eine Sache pro Bildschirm. Kein Drag & Drop, kein Zoom, keine Einarbeitung.
Funktioniert am Rechner und auf dem Handy.

---

## Starten

**Ohne alles:** `index.html` per Doppelklick öffnen. Die Seite läuft vollständig
lokal über `file://`, ohne Server und ohne Internet.

**Mit lokalem Server** (nur falls gewünscht):

```bash
python3 -m http.server 8000
```

Dann `http://localhost:8000` aufrufen. Getestet in Chrome, Edge und Firefox.

---

## Die Gesprächspartner

| Kontakt | Rolle | Themen | Gespräche |
|---|---|---|---|
| **Sabrina Köster** | IT-Abteilung | Schadsoftware, Schutzmaßnahmen, Schutzziele im Alltag | 6 |
| **Herr Olschewski** | Datenschutzbeauftragter | DSGVO, Betroffenenrechte, Pseudonymisierung, Privacy by Design | 7 |
| **Frau Hagedorn** | Geschäftsführung | Schutzziele, Schutzbedarf, DSB und ISB, Haftung | 5 |
| **Tim** | Azubi, 2. Lehrjahr | Zutritt/Zugang/Zugriff, TOMs, Begriffe, Phishing | 5 |
| **#notfall** | Gruppenchat | Datenpanne, Ransomware, Serverausfall | 3 |

Zusammen **26 Gespräche** mit rund **90 Entscheidungen**. Jedes dauert zwei bis
vier Minuten.

---

## Bedienung

* Kontakt antippen → Gespräch wählen → los
* Nachrichten erscheinen nacheinander; **in den Verlauf klicken** überspringt das Warten
* Antwort per Klick oder mit den **Tasten 1–9**
* Falsch gewählt? Die Begründung erscheint, die Option wird ausgegraut, du
  wählst direkt neu. Kein Punktestand, kein Scheitern
* Fachbegriffe sind <u>markiert</u> und öffnen das **Lexikon** (📖 oben rechts, 131 Einträge mit Suche)
* Jedes Gespräch endet mit einem Merksatz → landet automatisch im **Spickzettel**
  (📌 oben rechts, nach Themen sortiert, druckbar)
* Der Fortschritt wird im Browser gespeichert

---

## Inhaltliche Grundlage

Die Gespräche decken die **25 Aufgaben der Probeklausur Modul IV** ab:

| Klausurteil | Umgesetzt in |
|---|---|
| A – Grundlagen Datenschutz (Aufg. 1–7) | Olschewski: personenbezogene Daten, Pflichtfelder, Werbung, anonym/pseudonym, Privacy by Design und by Default |
| B – Informationssicherheit (8–13) | Hagedorn: Schutzziele · Sabrina: Gehaltsliste, Kontonummern, Krankenhaus · Tim: Virus/Trojaner/Wurm, Zugang/Zugriff |
| C – Anfragen (14–17) | Olschewski: Löschanfrage · Tim: vier Betroffenenrechte im Vergleich |
| D – Schutzbedarf (18–19) | Hagedorn: Schutzbedarfsermittlung, Arztpraxis einstufen |
| E – Beauftragte (20–21) | Hagedorn: DSB und ISB, Aufgaben, Unterschied, Haftung |
| F – Praxisfälle (22–25) | #notfall: Mail an den Falschen, Ransomware, Serverausfall · Sabrina: USB-Stick, gemeinsames Passwort · Hagedorn: Fall ohne Backups |

Ergänzt um Themen, die prüfungsrelevant sind, aber in dieser Probeklausur
fehlten: Phishing und Social Engineering, Rootkit, Spyware, Keylogger, Botnetz,
Hoax, Auftragsverarbeitung, Drittlandtransfer, alle acht Kontrollarten der TOMs.

**Zu den Schutzbedarfs-Stufen:** Die Klausur arbeitet mit *niedrig – mittel –
hoch*, der BSI-Standard 200-2 mit *normal – hoch – sehr hoch*. Beide Skalen
werden erklärt und im Lexikon als Synonyme geführt.

---

## Ordnerstruktur

```
audit/
├── index.html                  eine Seite, bindet alles in fester Reihenfolge ein
├── css/
│   ├── base.css                Farben, Kopfzeile, Karten, Lexikon, Druckansicht
│   └── chat.css                Kontaktliste, Sprechblasen, Antwortknöpfe
├── data/                       nur Inhalte – hier ergänzt und korrigiert man
│   ├── kontakte.js             die fünf Gesprächspartner
│   ├── dialoge-sabrina.js      IT: Schadsoftware und Schutzmaßnahmen
│   ├── dialoge-dsb.js          Datenschutzrecht
│   ├── dialoge-chefin.js       Schutzziele, Schutzbedarf, Rollen
│   ├── dialoge-tim.js          Begriffe, Kontrollarten, Betroffenenrechte
│   ├── dialoge-notfall.js      Gruppenchat: Ernstfälle
│   ├── lexikon.js              131 Kurzdefinitionen
│   ├── schadsoftware.js        \
│   ├── massnahmen.js            |  Nachschlagewerke: liefern die
│   ├── dsgvo.js                 |  Übersichtstabellen, die mitten
│   ├── betroffenenrechte.js     |  im Gespräch eingeblendet werden
│   ├── schutzziele.js           |
│   ├── rollen.js                |
│   ├── ereignisse.js            |
│   └── datenwerkstatt.js       /
└── js/
    ├── util.js                 DOM-Helfer, Lexikon-Verlinkung, Toast, Modal
    ├── storage.js              localStorage mit try/catch und RAM-Ersatz
    ├── lexikon.js              Lexikon-Panel mit Suche
    ├── spickzettel.js          gesammelte Merksätze, Druckansicht
    ├── chat.js                 Gesprächs-Engine
    └── app.js                  Kontaktliste, Navigation, Fortschritt
```

---

## Eigene Gespräche ergänzen

Eine Datei in `data/dialoge-*.js` öffnen und einen Block nach diesem Muster
anhängen – Seite neu laden, fertig:

```js
AUDIT.data.dialoge.push({
  id: 'sab-07', kontakt: 'sabrina', titel: 'Titel in der Liste',
  thema: 'Schadsoftware', dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Eine Nachricht. [[Wurm]] wird zum Lexikon-Link.' },
    { typ: 'frage', text: 'Die Frage?',
      optionen: [
        { text: 'Falsche Antwort', antwort: 'Erklärung, warum nicht.' },
        { text: 'Richtige Antwort', richtig: true, norm: 'Art. 32 DSGVO',
          antwort: 'Erklärung, warum doch.' }
      ] },
    { typ: 'mehrfach', text: 'Mehrere sind richtig',
      optionen: [ { text: 'A', richtig: true }, { text: 'B' } ],
      antwortRichtig: 'Richtig, weil …', antwortFalsch: 'Noch nicht, denk an …' },
    { typ: 'karte', titel: 'Übersicht', quelle: 'schadsoftware', keys: ['virus', 'wurm'] },
    { typ: 'merk', text: 'Der Merksatz für den Spickzettel.' }
  ]
});
```

**Schritt-Typen:** `nachricht` · `frage` (genau eine richtige) · `mehrfach`
(alle richtigen ankreuzen) · `karte` (Tabelle aus einer `data/`-Datei über
`quelle` und `keys`, oder freies `html`) · `merk`.

Im Gruppenchat bekommt jeder Schritt zusätzlich `von: 'Sabrina (IT)'`.

In allen Texten wird `[[Begriff]]` zu einem Lexikon-Link, einfaches HTML wie
`<b>` ist erlaubt.

---

## Deployment auf Cloudflare Pages

Statische Seite – kein Build, keine Abhängigkeiten, kein Backend.

1. Repository zu GitHub pushen
2. Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**
3. Build-Einstellungen: Framework preset `None`, Build command leer,
   Build output directory `/`
4. **Save and Deploy**

---

## Technik

HTML, CSS und Vanilla JavaScript. **Kein Framework, kein Build, keine CDNs,
keine ES-Module, kein `fetch`** – deshalb läuft die Seite auch per Doppelklick
über `file://`. Alle Dateien hängen ihre Teile an `window.AUDIT`.

---

## Hinweis

AUDIT ist eine Lernhilfe für die Prüfung, keine Rechtsberatung. Artikelangaben
beziehen sich auf die DSGVO, Paragrafen auf deutsches Recht.
