# AUDIT – Prüfungsstoff im Firmen-Chat

Lernseite, die Prüfungsstoff als Gespräch unter Kollegen abfragt.

Du bist neu bei der fiktiven **Rampe 7 Logistik GmbH**. Deine Kolleginnen und
Kollegen schreiben dir: eine verdächtige Mail, eine Kundenanfrage, ein Vorfall.
Du entscheidest per Auswahl und bekommst sofort die Begründung – in der Sprache,
die in der Klausur erwartet wird.

Die Navigation hat vier Ebenen:

```
Themenübersicht  →  Gesprächspartner  →  Gespräche  →  Gespräch
   #/                 #/t/sicherheit      #/k/tim      #/c/tim-03
```

Das Format ist unabhängig vom Thema: Gespräche, Lexikon und Merksätze liegen in
eigenen Dateien unter `data/`, getrennt vom Programm. Weitere Themengebiete
kommen als zusätzliche Dateien dazu. Den Anfang macht **Datenschutz,
Informationssicherheit und Compliance** (Fachinformatiker, Modul IV,
IHK-Prüfung) – darauf beziehen sich die folgenden Abschnitte.

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

| Kontakt | Anrede | Ton | Themen | Gespräche |
|---|---|---|---|---|
| **Sabrina Köster** | duzt dich | entspannt, aber sachlich | Schadsoftware, Schutzmaßnahmen, Netzwerkschutz, Homeoffice | 8 |
| **Herr Olschewski** | duzt dich | förmlich und präzise | DSGVO, Betroffenenrechte, Pseudonymisierung, Auftragsverarbeitung, Nachweispflichten | 9 |
| **Frau Hagedorn** | siezt dich | durchgehend förmlich | Schutzziele, Schutzbedarf, DSB und ISB, Haftung, Compliance | 6 |
| **Tim** | duzt dich | kumpelhaft, Emojis, Kleinschreibung | Zutritt/Zugang/Zugriff, TOMs, Begriffe, Betroffenenrechte, Phishing | 5 |
| **#notfall** | Gruppenchat | mehrere Sprecher, farblich getrennt | Datenpanne, Ransomware, Serverausfall, Tailgating, CEO-Fraud | 5 |

Zusammen **33 Gespräche** mit **210 Entscheidungen**. Jedes dauert vier bis
sieben Minuten.

Jede Person hat eine eigene Sprechweise – das ist Absicht: Bei Tim **erklärst du**,
bei Frau Hagedorn **berichtest du**, bei Herrn Olschewski **arbeitest du einen Fall
durch**. Derselbe Stoff aus drei Richtungen bleibt besser hängen als dreimal
dieselbe Abfrage.

---

## Bedienung

* Themengebiet antippen → Kontakt antippen → Gespräch wählen → los
* Nachrichten erscheinen nacheinander; **in den Verlauf klicken** überspringt das Warten
* Antwort per Klick oder mit den **Tasten 1–9**
* Falsch gewählt? Die Begründung erscheint, die Option wird ausgegraut, du
  wählst direkt neu. Kein Punktestand, kein Scheitern
* Bei Mehrfachauswahl sagt die Rückmeldung, **in welche Richtung** es
  danebenliegt („eine gehört nicht dazu", „zwei fehlen noch") – nicht nur
  „falsch"
* Nach **drei Fehlversuchen** erscheint ein Knopf **💡 Lösung zeigen**: Die
  richtige Antwort wird genannt und erklärt, dann geht es weiter
* Fachbegriffe sind <u>markiert</u> und öffnen das **Lexikon** (📖 oben rechts, mit Suche)
* Jedes Gespräch endet mit einem Merksatz → landet automatisch im **Spickzettel**
  (📌 oben rechts, nach Themen sortiert, druckbar)
* Lexikon und Spickzettel zeigen immer nur das **geöffnete Themengebiet**. Auf
  der Übersicht darüber sind beide Knöpfe ausgeblendet, weil dort kein Gebiet
  gewählt ist
* Das Lexikon schließt sich bei jedem Wechsel der Ansicht
* Der Fortschritt wird im Browser gespeichert
* Der Fortschritt lässt sich auf der Übersicht zurücksetzen – mit Rückfrage,
  die vorher aufzählt, was gelöscht wird
* Die **Zurück-Taste des Browsers** (und die Zurück-Geste auf dem Handy) führt
  eine Ebene höher: vom Gespräch zur Gesprächsliste, von dort zu den Kontakten
  des Gebiets und weiter zur Übersicht
* Die Ansicht steht in der Adresszeile, zum Beispiel `#/c/sab-01` – so lässt
  sich ein einzelnes Gespräch direkt aufrufen oder als Lesezeichen ablegen

---

## Inhaltliche Grundlage (Themengebiet Datenschutz und Informationssicherheit)

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
fehlten: Phishing, Spear-Phishing, CEO-Fraud und Social Engineering, Rootkit,
Spyware, Keylogger, Botnetz, Hoax, Auftragsverarbeitung und Drittlandtransfer,
alle acht Kontrollarten der TOMs, Verzeichnis von Verarbeitungstätigkeiten,
Datenschutz-Folgenabschätzung, Rechenschaftspflicht, Bußgelder, Compliance und
IT-Compliance (GoBD, Lizenzrecht, TDDDG, Hinweisgeberschutz), Homeoffice und
mobile Arbeit, Schatten-IT, Firewall und DMZ, Tailgating, Authentifizierungs-
faktoren, Datenschutz gegenüber Informationssicherheit.

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
│   ├── themen.js               die Themengebiete, oberste Ebene
│   ├── kontakte.js             die fünf Gesprächspartner
│   ├── dialoge-sabrina.js      IT: Schadsoftware und Schutzmaßnahmen
│   ├── dialoge-dsb.js          Datenschutzrecht
│   ├── dialoge-chefin.js       Schutzziele, Schutzbedarf, Rollen
│   ├── dialoge-tim.js          Begriffe, Kontrollarten, Betroffenenrechte
│   ├── dialoge-notfall.js      Gruppenchat: Ernstfälle (mehrere Sprecher)
│   ├── lexikon.js              Kurzdefinitionen, je mit gebiet
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

### Ein neues Themengebiet anlegen

1. Eintrag in `data/themen.js` anhängen – `key`, `name`, `kopf` (Kurzfassung für
   die Kopfzeile), `bild`, `kurz`, `vorstellung` und die Liste der `kontakte`
2. Die Gesprächspartner in `data/kontakte.js` ergänzen
3. Eine `data/dialoge-<name>.js` mit den Gesprächen anlegen und in `index.html`
   einbinden
4. Für die Fachbegriffe eine eigene Lexikondatei nach dem Muster von
   `data/lexikon.js` anlegen: Gruppennamen an `AUDIT.data.lexikonGruppen`
   anhängen, die Einträge an `AUDIT.data.lexikon`, dort `gebiet` auf den
   eigenen Schlüssel setzen und zum Schluss `AUDIT.data.lexikonIndizieren()`
   aufrufen

Damit filtern Lexikon und Spickzettel von allein: Beide zeigen nur, was zum
gerade geöffneten Gebiet gehört. Die Merksätze bekommen ihr Gebiet beim
Sammeln automatisch über den Gesprächspartner.

Am Programm selbst ist dafür nichts zu ändern – außer man möchte eine **neue Art
von Übersichtstabelle**, dann kommt ein weiterer Fall in `karteInhalt()` in
`js/chat.js` dazu.

Ein Gebiet, zu dem es noch keine Gespräche gibt, erscheint in der Übersicht als
„bald" und lässt sich nicht öffnen – man kann es also schon eintragen, während
die Inhalte noch entstehen.

**Schritt-Typen:** `nachricht` · `frage` (genau eine richtige) · `mehrfach`
(alle richtigen ankreuzen) · `karte` (Tabelle aus einer `data/`-Datei über
`quelle` und `keys`, oder freies `html`) · `merk`.

Im Gruppenchat bekommt jeder Schritt zusätzlich einen Sprecher-Schlüssel,
zum Beispiel `von: 'sabrina'`. Die Sprecher samt Farbe stehen in
`data/kontakte.js` unter `AUDIT.data.sprecher` – so ist im Verlauf auf einen
Blick erkennbar, wer schreibt.

In allen Texten wird `[[Begriff]]` zu einem Lexikon-Link, einfaches HTML wie
`<b>` ist erlaubt.

---

## Technik

HTML, CSS und Vanilla JavaScript. **Kein Framework, kein Build, keine CDNs,
keine ES-Module, kein `fetch`** – deshalb läuft die Seite auch per Doppelklick
über `file://`. Alle Dateien hängen ihre Teile an `window.AUDIT`.

---

## Hinweise

AUDIT ist eine Lernhilfe für die Prüfung, keine Rechtsberatung. Im Themengebiet
Datenschutz beziehen sich Artikelangaben auf die DSGVO, Paragrafen auf deutsches
Recht.

Inhalte und Code sind mit Unterstützung von KI (Claude) entstanden und von mir
geprüft und überarbeitet.
