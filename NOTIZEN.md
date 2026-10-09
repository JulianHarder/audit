# NOTIZEN zu AUDIT

Entscheidungen, bekannte Schwächen und Ideen – damit klar ist, warum etwas so
ist, wie es ist, und wo man gezielt nachbessern kann.

---

## 1. Warum Chat statt Arbeitsfläche

Die erste Fassung war eine 2D-Arbeitsfläche: Bausteine ziehen, verbinden, zoomen,
fünf Stationen mit Unter-Tabs. Fachlich vollständig, aber als Lernmittel
gescheitert – man musste erst einen **Editor bedienen lernen**, bevor man zum
Prüfungsstoff kam. 32 Bausteine in der Leiste, 43 Karten in einer Station,
29 Elemente in der Beispielfirma: zu viel auf einmal.

Der Chat kehrt das um: Ein Nachrichtenverlauf muss niemand lernen. Eine Sache
pro Bildschirm, zwei bis vier Antwortknöpfe, sofortige Begründung. Die alte
Fassung liegt vollständig in der Git-Historie (Commits bis `e5063ef`), falls
jemand Teile davon noch einmal braucht.

**Was gerettet wurde:** alle Inhalte aus `data/` – Schadsoftware, Maßnahmen,
DSGVO-Regeln, Betroffenenrechte, Rollen, Lexikon. Sie liefern heute die
Übersichtstabellen mitten im Gespräch (Schritt-Typ `karte`) und das Lexikon.

---

## 2. Getroffene Entscheidungen

### Aufbau

* **Die Person ist der rote Faden, nicht das Kapitel.** Statt „Kapitel 3:
  Schadsoftware" gibt es Sabrina aus der IT. Das macht die Auswahl konkreter und
  erlaubt unterschiedliche Tonlagen: Der DSB siezt und formuliert juristisch,
  Tim duzt und fragt naiv – bei ihm **erklärst du**, was den Stoff anders
  verankert als reines Ankreuzen.
* **Falsche Antworten kosten nichts.** Keine Punkte, kein Verlieren, keine
  Sperre. Die falsche Option wird ausgegraut, die Begründung erscheint, man
  wählt direkt neu. Wer sich fürs Raten bestraft fühlt, hört auf zu denken.
* **Die Begründung steht im Verlauf, nicht in einem Dialogfenster.** Sie bleibt
  dadurch lesbar, wenn man später zurückscrollt.
* **Jedes Gespräch endet mit genau einem Merksatz.** Daraus wächst der
  Spickzettel – der eigentliche Mehrwert für die Prüfungsvorbereitung.
* **Übersichtstabellen kommen aus den Datendateien**, nicht abgeschrieben in den
  Dialogtext. Wer die Kontrollarten korrigiert, korrigiert sie überall.

### Fachliche Entscheidungen

* **Zwei Skalen beim Schutzbedarf.** Die Probeklausur arbeitet mit
  *niedrig – mittel – hoch*, der BSI-Standard 200-2 mit *normal – hoch – sehr
  hoch*. Beides wird erklärt und im Lexikon als Synonym geführt, damit in der
  Prüfung keine Verwirrung entsteht.
* **Artikelnummern als Zusatz, nicht als Pflicht.** Die Klausur verlangt
  ausdrücklich keine Artikelangaben, sondern nachvollziehbare Begründungen in
  eigenen Worten. Die Normen stehen deshalb als kleine Marke unter der Antwort –
  sichtbar, aber nicht im Weg.
* **Antworten in Klausursprache.** Die Begründungen sind bewusst nah an den
  Formulierungen der Musterlösung gehalten, damit man beim Schreiben die
  passenden Wendungen parat hat.
* **Mehrfachauswahl verlangt die exakte Menge.** Wer eine richtige Option
  vergisst oder eine falsche mitnimmt, bekommt einen Hinweis und darf erneut –
  die Auswahl bleibt dabei stehen.

### Tonalität – vier verschiedene Stimmen

Jede Person spricht anders, und das ist didaktisch gewollt:

| Person | Anrede | Sprache | Lernrolle |
|---|---|---|---|
| **Tim** | duzt | kumpelhaft, Kleinschreibung, Emojis, Tippfehler | **Du erklärst ihm** – wer erklären kann, hat verstanden |
| **Sabrina** | duzt | entspannt, vollständige Sätze, trockener Humor | **Du denkst mit** – Kollegin auf Augenhöhe |
| **Herr Olschewski** | duzt | förmlich und präzise, juristisch genau | **Du arbeitest einen Fall durch** |
| **Frau Hagedorn** | siezt | durchgehend förmlich, fragt nach Kosten und Haftung | **Du berichtest nach oben** |

Derselbe Stoff aus verschiedenen Richtungen bleibt besser hängen als dreimal
dieselbe Abfrage. Wer die Tonalität ändert, sollte sie **pro Datei** konsistent
halten – gemischte Anreden innerhalb einer Person wirken wie ein Fehler.

### Rückmeldungen und Lösungshilfe

* **Jede falsche Option hat ihren eigenen Erklärtext.** Es gibt keine generische
  Rückmeldung wie „leider falsch" – die Person reagiert auf genau den Denkfehler,
  der hinter der gewählten Antwort steckt.
* Bei **Mehrfachauswahl** berechnet die Engine die Differenz und sagt, in welche
  Richtung es danebenliegt: „eine gehört nicht dazu", „zwei fehlen noch", oder
  beides. Der inhaltliche Hinweis (`antwortFalsch`) kommt erst ab dem zweiten
  Versuch dazu, damit man zuerst selbst nachdenkt.
* Nach **drei Fehlversuchen** – oder wenn nur noch eine Option übrig ist –
  erscheint der Knopf **💡 Lösung zeigen**. Die Nachfrage davor ist absichtlich
  variabel formuliert (`zufall()` in `js/chat.js`), damit sie bei mehrmaligem
  Auftreten nicht mechanisch wirkt.

### Gruppenchat mit mehreren Sprechern

Im Kanal `#notfall` schreiben mehrere Personen. Jeder Schritt kann ein Feld
`von` mit einem Sprecher-Schlüssel tragen; die Sprecher samt **Farbe** stehen in
`data/kontakte.js` unter `AUDIT.data.sprecher`. Die Engine färbt Namen und
linken Rand der Blase und gruppiert aufeinanderfolgende Nachrichten desselben
Absenders. Ein unbekannter Schlüssel wird als Klartextname angezeigt – fällt
also nicht hart aus, sondern nur farblos.

### Technik

* Gleiche Grundlage wie vorher: kein Framework, keine Module, kein `fetch`,
  lauffähig per Doppelklick. Alles hängt an `window.AUDIT`.
* `AUDIT.util.rich()` lässt einfaches HTML durch und wandelt `[[Begriff]]` in
  Lexikon-Links. Nur für **eigene** Inhalte aus `data/` gedacht.
* Die Tippdauer richtet sich nach der Textlänge (380–1200 ms). Ein Klick in den
  Verlauf überspringt jede Wartezeit – wichtig für alle, die schneller lesen.

---

## 3. Behobene Fehler, die man kennen sollte

* **Alte Gespräche liefen im Hintergrund weiter.** Wechselte man das Gespräch,
  während noch Nachrichten einliefen, schrieben die alten Zeitgeber ihre
  Antwortknöpfe in den neuen Verlauf. Gelöst über eine laufende Nummer
  (`laufNr` in `js/chat.js`): Jeder Zeitgeber prüft vor dem Ausführen, ob sein
  Gespräch noch das aktuelle ist. Wer an der Engine arbeitet, muss diese Prüfung
  bei neuen Schritt-Typen mitziehen.
* **Der Absendername stand über jeder Blase**, auch bei fünf Nachrichten
  hintereinander. Jetzt nur noch beim Sprecherwechsel – im Gruppenchat über das
  Feld `von`.
* **In der Adresszeile stand noch `#angriff`.** Die alte Fassung mit den fünf
  Stationen hat bei jedem Wechsel `window.location.hash` gesetzt; die
  Chat-Fassung las den Hash weder noch löschte sie ihn, also blieb der alte
  Wert stehen. Dabei fiel auf, dass die **Zurück-Taste des Browsers die Seite
  verließ**, statt eine Ebene höher zu gehen – auf dem Handy die natürliche
  Geste. Beides ist jetzt gelöst: Die Ansicht steht als Route in der
  Adresszeile (`#/`, `#/k/<kontakt>`, `#/c/<gespräch>`, `#/zettel`), ein
  `hashchange`-Listener zeichnet die Ansicht neu, und ein unbekannter oder
  veralteter Hash wird beim Start per `history.replaceState` still entfernt.
  Damit sich Setzen und Reagieren nicht gegenseitig auslösen, merkt sich
  `app.js` in `selbstGesetzt`, ob die Änderung von der App selbst kam.
* **Der Primärknopf wurde beim Überfahren unlesbar.** Ursache war eine
  Spezifitätsfalle im CSS: `.btn:hover` (0-2-0) ist spezifischer als
  `.btn--primary` (0-1-0) und hat dessen Hintergrund überschrieben – grauer
  Knopf mit dunkelblauer Schrift. `.btn--primary:hover` setzte nur `filter` und
  konnte das nicht ausgleichen.

  **Regel für die Zukunft:** Jede Knopfvariante trägt ihren <b>eigenen</b>
  Hover-Zustand mit Hintergrund *und* Schriftfarbe, und alle Hover-Regeln
  enden auf `:not([disabled])`. Dadurch haben sie dieselbe Spezifität, und
  allein die Reihenfolge in der Datei entscheidet – was auch für Varianten in
  `chat.css` gilt, die nach `base.css` geladen wird. Wer eine neue Variante
  ergänzt, muss das Muster übernehmen, sonst gewinnt wieder die Basisregel.

---

## 4. Fachlich gegenprüfen

Diese Punkte stimmen nach aktuellem Stand, ändern sich aber erfahrungsgemäß:

* **Speicherdauer von Videoaufnahmen** (`dsb-07`): „in der Regel 48–72 Stunden"
  entspricht der Aufsichtspraxis, ist aber keine gesetzliche Frist.
* **Aufbewahrung von Rechnungen**: bis zu zehn Jahre (Handels- und Steuerrecht).
  Die genauen Fristen unterscheiden sich je nach Belegart.
* **Bewerbungsunterlagen ca. sechs Monate** – ergibt sich aus den Klagefristen
  des AGG, ist keine feste gesetzliche Frist.
* **EU-US Data Privacy Framework** als Angemessenheitsbeschluss: Die beiden
  Vorgänger wurden vom EuGH gekippt. Vor der Prüfung aktuellen Stand prüfen.
* **§ 38 BDSG, 20 Personen** für die DSB-Benennungspflicht – die Grenze lag
  früher bei zehn und wurde bereits geändert.
* **TDDDG** heißt seit der Umbenennung so (vorher TTDSG); beides liegt als
  Synonym im Lexikon.
* **Zuordnung „federführend"** bei Rollenfragen ist in Einzelfällen diskutabel,
  etwa bei der Einführung neuer Software, wo DSB, ISB und Leitung zusammenwirken.
  Die Erklärungen nennen deshalb immer alle Beteiligten.

---

## 5. Bekannte Schwächen

* **Keine Suche über die Gespräche.** Wer gezielt „Pseudonymisierung" sucht, muss
  die Kontakte durchgehen – nur das Lexikon hat ein Suchfeld.
* **Kein Wiederholungsmodus.** Falsch beantwortete Fragen tauchen nicht später
  erneut auf; man kann ein Gespräch nur komplett wiederholen.
* **Die Gespräche sind lang geworden** – vier bis sieben Minuten, einzelne mit
  über zehn Entscheidungen. Das war ausdrücklich gewünscht, bedeutet aber: Man
  kann ein Gespräch nicht sinnvoll in zwei Minuten zwischendurch machen. Ein
  Zwischenspeichern mitten im Gespräch gibt es nicht.
* **Die Reihenfolge innerhalb eines Kontakts ist nur eine Empfehlung.** Es gibt
  keine Sperre, man kann mit dem letzten Gespräch anfangen. Bei Tim bauen die
  Gespräche aufeinander auf.
* **Breite Übersichtstabellen** muss man auf dem Handy seitlich schieben. Ein
  Hinweis steht darunter, schön ist es trotzdem nicht.
* **Barrierefreiheit nur teilweise.** Die Antwortknöpfe sind über die Tastatur
  erreichbar (Zahlen 1–9 oder Tab), und der Tastaturfokus ist seit der
  Knopf-Überarbeitung sichtbar (`:focus-visible` mit Akzentring). ARIA-Rollen,
  Vorlese-Unterstützung und eine Prüfung mit Screenreader fehlen weiterhin.
* **Der Fortschritt lässt sich nicht einzeln zurücksetzen** – nur der
  Spickzettel hat einen Knopf dafür, die erledigten Gespräche nicht.
* **Kein Export.** Der Spickzettel lässt sich drucken, aber nicht als Datei
  mitnehmen oder zwischen Geräten übertragen.

---

## 6. Ideen für später

* **Prüfungsmodus**: zehn zufällige Fragen aus allen Gesprächen am Stück, ohne
  Erklärung dazwischen, Auswertung am Ende – als Selbsttest kurz vor der Klausur.
* **Falsch beantwortete Fragen sammeln** und in einer eigenen Wiederholungsrunde
  erneut stellen.
* **Zweiter Klausursatz**: Die zweite Datei auf dem Stick (`Klausur_ModIV_.docx`)
  ist noch nicht ausgewertet – daraus ließen sich weitere Fälle gewinnen.
* **Mehr WISO-Bezug**: Wirtschaftlichkeit von Sicherheitsmaßnahmen, Kosten eines
  Ausfalls, Nutzen-Argumentation gegenüber der Geschäftsführung.
* **Spickzettel als PDF oder Markdown exportieren.**
* **Suchfeld über alle Gespräche**, das zum passenden Schritt springt.
* **Themenübersicht**: eine Seite, die zeigt, welches Prüfungsthema in welchem
  Gespräch vorkommt – hilfreich beim gezielten Wiederholen.
* **Fortsetzen mitten im Gespräch**: Bei Gesprächen mit zehn Entscheidungen wäre
  ein Zwischenstand sinnvoll.
* **Mehr Sprecher im Gruppenchat**: Die Sprecherliste enthält bereits Herrn
  Brinkmann und den externen Dienstleister – daraus ließen sich Fälle zu
  Auftragsverarbeitung und Dienstleisterkontrolle bauen.
