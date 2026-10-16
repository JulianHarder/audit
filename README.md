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
IHK-Prüfung). Dazugekommen sind **Verschlüsselung und Kryptographie**,
**Netzwerktechnik** sowie **Cookies, Tracking und ePrivacy**. Zwei weitere
Gebiete sind angelegt, aber noch ohne Gespräche – sie erscheinen in der
Übersicht als „bald".

| Themengebiet | Gesprächspartner | Gespräche |
|---|---|---|
| IT-Sicherheit und Datenschutz | 5 | 33 |
| Verschlüsselung und Kryptographie | 5 | 21 |
| Netzwerktechnik | 5 | 37 |
| Cookies, Tracking und ePrivacy | 5 | 23 |
| KI im Betrieb und der EU AI Act | 5 | – (bald) |
| Penetrationstest, Softwaretest und Audit | 6 | – (bald) |

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

### Themengebiet „IT-Sicherheit und Datenschutz"

| Kontakt | Anrede | Ton | Themen | Gespräche |
|---|---|---|---|---|
| **Sabrina Köster** | duzt dich | entspannt, aber sachlich | Schadsoftware, Schutzmaßnahmen, Netzwerkschutz, Homeoffice | 8 |
| **Herr Olschewski** | duzt dich | förmlich und präzise | DSGVO, Betroffenenrechte, Pseudonymisierung, Auftragsverarbeitung, Nachweispflichten | 9 |
| **Frau Hagedorn** | siezt dich | durchgehend förmlich | Schutzziele, Schutzbedarf, DSB und ISB, Haftung, Compliance | 6 |
| **Tim** | duzt dich | kumpelhaft, Emojis, Kleinschreibung | Zutritt/Zugang/Zugriff, TOMs, Begriffe, Betroffenenrechte, Phishing | 5 |
| **#notfall** | Gruppenchat | mehrere Sprecher, farblich getrennt | Datenpanne, Ransomware, Serverausfall, Tailgating, CEO-Fraud | 5 |

Zusammen **33 Gespräche** mit **210 Entscheidungen**. Jedes dauert vier bis
sieben Minuten.

### Themengebiet „Verschlüsselung und Kryptographie"

| Kontakt | Anrede | Ton | Themen | Gespräche |
|---|---|---|---|---|
| **Nadja Reinhardt** | duzt dich | knapp und sachlich | Symmetrisch, asymmetrisch, hybrid, Schlüsselaustausch, Transport- und Ende-zu-Ende | 5 |
| **Herr Baumgart** | duzt dich | genau, legt Wert auf Begriffe | Hashverfahren, Passwortspeicherung, HMAC, digitale Signatur, Zertifikate und PKI | 5 |
| **Frau Teichmann** | siezt dich | will Entscheidungen, keine Theorie | Verfahrensauswahl, Altlasten, DSGVO-Bezug, Grenzen der Verschlüsselung | 4 |
| **Jonas** | duzt dich | 1. Lehrjahr, ratlos, Emojis | Klartext und Geheimtext, Caesar, Kerckhoffs, Grundbegriffe | 4 |
| **#krypto-alarm** | Gruppenchat | mehrere Sprecher, farblich getrennt | Falsche Prüfsumme, abgelaufenes Zertifikat, geleakte Passwortdatenbank | 3 |

### Themengebiet „Netzwerktechnik"

| Kontakt | Anrede | Ton | Themen | Gespräche |
|---|---|---|---|---|
| **Mirko Pahlke** | duzt dich | praktisch, erklärt am Gerät | OSI-Modell, Switch und Router, Medien und Verkabelung, VLAN, Topologien | 9 |
| **Herr Semmler** | duzt dich | rechnet mit, will genaue Zahlen | IP-Adressen, Subnetzmaske, Subnetting, Binär, VLSM, NAT, IPv6, Routing | 8 |
| **Frau Dankwart** | siezt dich | will eine Empfehlung mit Begründung | WLAN oder Kabel, Standortvernetzung, Ausfallsicherheit, Cloud, Homeoffice, Umzug | 7 |
| **Leonie** | duzt dich | 1. Lehrjahr, fragt nach, Emojis | LAN und WAN, DHCP, DNS und Ports, TCP und UDP, MAC und IP, Netzplan | 7 |
| **#netz-stoerung** | Gruppenchat | mehrere Sprecher, farblich getrennt | Kein Netz im Lager, doppelte IP, Schleife, DNS-Ausfall, Engpass, VLAN-Fehler | 6 |

Zusammen **37 Gespräche** mit **144 Entscheidungen**. Der Rechenteil – Maske,
nutzbare Hosts, binäre UND-Verknüpfung, Subnetting und VLSM, Übertragungsdauer –
steckt bei Herrn Semmler und zum Teil bei Leonie.

Zwei Gespräche verfolgen den Stoff bewusst von einem Ende zum anderen: Mirkos
„Ein Klick, sieben Schichten" geht einen Seitenaufruf von DNS über ARP und den
TCP-Handschlag bis zur Kapselung durch, und Herrn Semmlers „Vier Netze, vier
Größen" schneidet ein /24 nach Bedarf in vier verschieden große Teilnetze.

### Themengebiet „Cookies, Tracking und ePrivacy"

| Kontakt | Anrede | Ton | Themen | Gespräche |
|---|---|---|---|---|
| **Frau Dr. Keilhauer** | siezt dich | nennt zuerst die Norm, dann die Folge | ePrivacy-Richtlinie und TDDDG, Verbot mit Erlaubnisvorbehalt, Einwilligung, Planet49, Drittland | 5 |
| **Kevin Ostrowski** | duzt dich | denkt in Technik, fragt nach dem Erlaubten | Notwendig oder nicht, Session und persistent, Local Storage, Fingerprinting, Consent-Tool, Drittanbieter | 5 |
| **Marion Rebholz** | duzt dich | direkt, argumentiert vom Nutzen her | Analyse ohne Einwilligung, Reichweitenmessung, Newsletter, Retargeting, Zustimmungsquote | 5 |
| **Merle** | duzt dich | 1. Lehrjahr, fragt ohne Fachsprache | Was ist ein Cookie, First und Third Party, Banner gegen Datenschutzerklärung, „anonym" | 4 |
| **#banner-alarm** | Gruppenchat | mehrere Sprecher, farblich getrennt | Beschwerde, Anfrage der Aufsichtsbehörde, Abmahnung wegen Schriftart, Analytics ohne Einwilligung | 4 |

Zusammen **23 Gespräche** mit **107 Entscheidungen**. Der rechtliche Kern liegt
bei Frau Dr. Keilhauer: die beiden Prüfstufen – § 25 TDDDG für den Zugriff auf
das Endgerät, Art. 6 DSGVO für die Daten danach – ziehen sich durch das ganze
Gebiet.

### Themengebiete „KI und AI Act" sowie „Tests und Audit"

Beide Gebiete sind in `data/themen.js` und `data/kontakte.js` angelegt, die
Gespräche fehlen noch. Sie erscheinen in der Übersicht als „bald" und lassen
sich noch nicht öffnen.

Jede Person hat eine eigene Sprechweise – das ist Absicht: Bei Tim und Jonas
**erklärst du**, bei Frau Hagedorn und Frau Teichmann **entscheidest und
begründest du**, bei Herrn Olschewski und Herrn Baumgart **arbeitest du einen Fall
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
* Lexikon und Spickzettel sind Panels, die sich über die Seite schieben –
  man verlässt das Gespräch nicht und redet danach weiter, wo man war.
  Beide schließen mit Esc, und es ist immer nur eines offen
* Lexikon und Spickzettel zeigen immer nur das **geöffnete Themengebiet**. Auf
  der Übersicht darüber sind beide Knöpfe ausgeblendet, weil dort kein Gebiet
  gewählt ist
* Das Lexikon schließt sich bei jedem Wechsel der Ansicht
* Der Fortschritt wird im Browser gespeichert
* Der Fortschritt lässt sich je Themengebiet zurücksetzen (Knopf unten auf der
  Gebietsseite) – mit Rückfrage, die vorher aufzählt, was gelöscht wird.
  Gelöscht werden die geführten Gespräche und die Merksätze **dieses** Gebiets,
  andere Gebiete bleiben unberührt
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
│   ├── kontakte.js             alle Gesprächspartner und die Sprecherfarben
│   ├── dialoge-sabrina.js      IT: Schadsoftware und Schutzmaßnahmen
│   ├── dialoge-dsb.js          Datenschutzrecht
│   ├── dialoge-chefin.js       Schutzziele, Schutzbedarf, Rollen
│   ├── dialoge-tim.js          Begriffe, Kontrollarten, Betroffenenrechte
│   ├── dialoge-notfall.js      Gruppenchat: Ernstfälle (mehrere Sprecher)
│   ├── dialoge-nadja.js        Krypto: Verfahren im laufenden Betrieb
│   ├── dialoge-berater.js      Krypto: Hash, Signatur, Zertifikate
│   ├── dialoge-projekt.js      Krypto: Auswahl, Altlasten, Grenzen
│   ├── dialoge-jonas.js        Krypto: Grundbegriffe (du erklärst)
│   ├── dialoge-kryptoalarm.js  Krypto: Gruppenchat mit drei Fällen
│   ├── dialoge-mirko.js        Netz: Geräte, Medien, OSI, VLAN, Topologie
│   ├── dialoge-planer.js       Netz: Adressen, Masken, Subnetting, NAT, IPv6
│   ├── dialoge-standort.js     Netz: Entscheidungen zu Funk, Standorten, Ausfall
│   ├── dialoge-leonie.js       Netz: Grundbegriffe (du erklärst)
│   ├── dialoge-netzstoerung.js Netz: Gruppenchat mit drei Störungen
│   ├── dialoge-anwaeltin.js    Web: ePrivacy, TDDDG, Verbotsprinzip, Drittland
│   ├── dialoge-webdev.js       Web: Cookie-Arten, Consent-Tool, Drittanbieter
│   ├── dialoge-marketing.js    Web: Analyse, Newsletter, Retargeting, Quote
│   ├── dialoge-merle.js        Web: Grundbegriffe (du erklärst)
│   ├── dialoge-banneralarm.js  Web: Gruppenchat mit vier Beanstandungen
│   ├── lexikon.js              Kurzdefinitionen, je mit gebiet
│   ├── lexikon-krypto.js       Kurzdefinitionen zum Themengebiet krypto
│   ├── lexikon-netz.js         Kurzdefinitionen zum Themengebiet netz
│   ├── lexikon-web.js          Kurzdefinitionen zum Themengebiet web;
│   │                           erweitert am Ende das gebiet geteilter
│   │                           Begriffe aus lexikon.js um 'web'
│   ├── kryptoverfahren.js      Tabellen: symmetrisch, asymmetrisch,
│   │                           hybrid, Hashverfahren
│   ├── netzwerk.js             Tabellen: OSI-Schichten, Geräte, Protokolle
│   │                           und Ports, Adressklassen, Subnetzmasken,
│   │                           Topologien, Werkzeuge der Fehlersuche,
│   │                           strukturierte Verkabelung, Routing-Arten
│   ├── web.js                  Tabellen: Cookie-Arten, Rechtsrahmen
│   │                           (ePrivacy/TDDDG/DSGVO), Prüfpunkte für
│   │                           ein Consent-Banner
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

Für das Themengebiet Netzwerktechnik liefert `data/netzwerk.js` neun
Übersichtstabellen: `osi`, `netzgeraete`, `netzprotokolle`, `ipklassen`,
`subnetze`, `topologien`, `netzwerkzeuge`, `verkabelung` und `routing`.

### Die Reihenfolge der Antworten

Beim Schreiben steht die richtige Antwort meist zuerst – das ist bequem und darf
so bleiben. **Angezeigt** werden die Möglichkeiten aber in zufälliger
Reihenfolge, die bei jedem Aufruf neu gewürfelt wird. Sonst lernt man die
Position statt des Stoffs, und beim zweiten Durchlauf erinnert man sich an „war
die zweite" statt an die Begründung.

Das erledigt die Engine (`reihenfolge()` in `js/chat.js`), für `frage` und
`mehrfach` gleichermaßen und ohne Zutun der Datendateien – auch bei künftigen
Themengebieten. Innerhalb eines Versuchs bleibt die Reihenfolge stehen, damit
die Knöpfe nach einem Fehlgriff nicht springen.

Soll eine Frage ihre Reihenfolge behalten, weil sie etwas bedeutet – eine
Zeitfolge, eine Rangfolge, eine Steigerung –, bekommt der Schritt `mischen: false`:

```js
{ typ: 'frage', text: 'In welcher Reihenfolge?', mischen: false, optionen: [ … ] }
```

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
