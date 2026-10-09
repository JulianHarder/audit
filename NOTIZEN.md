# NOTIZEN zu AUDIT

Entscheidungen, bekannte Schwächen und Ideen – damit du weißt, warum etwas so
ist, wie es ist, und wo du gezielt nachbessern kannst.

---

## 1. Getroffene Entscheidungen

### Aufbau

* **Drei Verbindungsarten** statt einer: `netz` (Ausbreitungsweg für Würmer und
  Ransomware), `hosting` (überträgt den Schutzbedarf von der Anwendung auf das
  System) und `datenfluss` (wird im DSGVO-Audit geprüft). Die Art wird beim
  Verbinden automatisch aus den Kategorien abgeleitet und lässt sich im
  Seitenpanel ändern. Ohne diese Trennung ließe sich weder die Vererbung noch
  die Wurm-Ausbreitung sauber abbilden.
* **Zonenzuordnung geometrisch:** Ein Baustein gehört zu dem Raum, in dessen
  Rechteck sein Mittelpunkt liegt. Dadurch braucht es keine zusätzliche
  Verknüpfung, und das Verschieben in einen Raum funktioniert intuitiv. Bei
  überlappenden Zonen gewinnt die kleinere.
* **Eine gemeinsame Firma für alle Stationen.** Jede Station legt eine eigene
  Ansicht (Canvas-Instanz) auf dasselbe Modell `AUDIT.firma`. Was in Station 1–3
  eingestellt wird, wirkt dadurch direkt im Ernstfall.
* **Balken am Baustein haben je nach Station eine andere Bedeutung:**
  in Werkstatt und Daten zeigen sie den *Schutzbedarf* (wie stark muss geschützt
  werden), in Angriff und Ernstfall den *Zustand* der Schutzziele (wie stark ist
  verletzt). Die Legende auf der Fläche sagt es jeweils dazu.
* **Eigenes Drag & Drop über Pointer Events** statt HTML5-DnD: funktioniert
  zuverlässig über der SVG-Fläche und auch mit Touch.
* **Beim Laden wird die Firma „geheilt“**: Infektionen und Schäden einer
  früheren Sitzung werden entfernt, gesetzte Schutzmaßnahmen bleiben erhalten.
  Sonst startet man nach dem Neuladen in einer verseuchten Firma.
* **Die Vorlage enthält absichtlich Schwachstellen** (Cloud-Archiv im Drittland
  ohne AV-Vertrag, Backup am Netz, Newsletter ohne Rechtsgrundlage, fünf
  Anwendungen auf einem Server). Sonst gäbe es in den Stationen nichts zu finden.

### Fachliche Modellierung

* **Maximumprinzip** ist exakt umgesetzt: Das System bekommt den höchsten Wert
  der Anwendungen, die darauf laufen.
* **Kumulationseffekt** ist *vereinfacht*: Laufen mindestens **drei** Anwendungen
  auf einem System und ergibt das Maximum nur „normal“, hebt AUDIT automatisch auf
  „hoch“ an und erklärt das im Panel. In der Praxis ist das eine Einzelfall­ent­scheidung
  mit Begründung – die feste Schwelle ist didaktisch, nicht normativ.
* **Verteilungseffekt** wirkt nur auf die **Verfügbarkeit** und nur, wenn eine
  Anwendung tatsächlich auf mehreren Systemen läuft; dann zählt sie für das
  einzelne System eine Stufe niedriger. Für Vertraulichkeit greift er bewusst
  nicht, weil die Daten auf jedem der Systeme liegen.
* **Ein Firewall-Baustein blockiert die Ausbreitung** von Würmern und Ransomware
  zwischen Netzbereichen. In Wirklichkeit kann eine Firewall selbst angegriffen
  oder falsch konfiguriert sein; für die Prüfungslogik „Firewall trennt Netze“
  ist die Vereinfachung sinnvoll.
* **Datenminimierung** wird geprüft, indem jeder Zweck eine Liste der dafür
  üblicherweise erforderlichen Datenarten mitbringt (`data/dsgvo.js`,
  `AUDIT.data.zwecke`). Alles darüber hinaus wird beanstandet. Das ist eine
  Lernhilfe, keine Rechtsprüfung – in der Praxis hängt die Erforderlichkeit vom
  Einzelfall ab. Die Listen lassen sich leicht anpassen.
* **Art. 34 im Ernstfall** wird vereinfacht bewertet: Ist irgendwo Verschlüsselung
  gesetzt, gilt das Risiko als nicht hoch und die Benachrichtigung der Betroffenen
  kann entfallen (Art. 34 Abs. 3 lit. a). In Wirklichkeit ist das eine
  Risikoabwägung im Einzelfall.
* **Die 72-Stunden-Uhr läuft beschleunigt** (eine Stunde ≈ 0,9 Sekunden) und
  lässt sich pausieren. Aktionen kosten keine zusätzliche Zeit – gemessen wird
  nur, in welcher Stunde sie erfolgen.
* Der Fortschritt pro Station ist eine **Heuristik** (zum Beispiel: Anteil der
  bewerteten Anwendungen, Anteil der ausprobierten Schadsoftware-Arten). Er soll
  motivieren, ist aber keine Bewertung des Lernstands.

### Technik

* `AUDIT.util.rich()` lässt einfaches HTML (`<b>`, `<br>`) durch und wandelt
  `[[Begriff]]` in Lexikon-Links um. Das ist nur für **eigene** Inhalte aus
  `data/` gedacht. Alles, was der Nutzer eingegeben hat (zum Beispiel
  Bausteinnamen), wird vorher mit `esc()` behandelt.
* Das volle Neuzeichnen der Fläche bei jeder Modelländerung ist bei den hier
  üblichen 20–40 Bausteinen schnell genug. Während des Ziehens werden nur die
  betroffenen Elemente aktualisiert.

---

## 2. Fachlich bitte gegenprüfen

Diese Punkte stimmen nach aktuellem Stand, ändern sich aber erfahrungsgemäß oder
werden im Unterricht teils anders dargestellt:

* **EU-US Data Privacy Framework** als Angemessenheitsbeschluss für zertifizierte
  US-Unternehmen (`data/lexikon.js`, Eintrag „Angemessenheitsbeschluss“). Die
  bisherigen Vorgänger wurden vom EuGH gekippt – aktuellen Stand prüfen.
* **Löschfrist für Bewerbungsunterlagen** „in der Regel ca. 6 Monate“ – das
  ergibt sich aus den Klagefristen des AGG, ist aber keine feste gesetzliche
  Frist.
* **§ 38 BDSG, 20 Personen**: Die Grenze wurde in der Vergangenheit schon
  geändert (früher 10). Vor der Prüfung noch einmal abgleichen.
* **TDDDG** heißt seit der Umbenennung so (vorher TTDSG). Falls im Unterricht
  noch „TTDSG“ verwendet wird, ist beides als Alias im Lexikon hinterlegt.
* **Religionszugehörigkeit in der Lohnbuchhaltung** ist als Beispiel für eine
  zulässige Verarbeitung besonderer Kategorien genannt (Kirchensteuer). Je nach
  Lehrmeinung wird das über Art. 9 Abs. 2 lit. b oder über § 26 BDSG begründet.
* Die Zuordnung „federführend“ bei den Ereignis-Karten in Station 4 ist in
  einigen Fällen diskutabel (etwa bei der Einführung neuer Software, wo DSB,
  ISB und Leitung zusammenwirken). AUDIT akzeptiert deshalb auch die übrigen
  beteiligten Rollen als „fast richtig“ und erklärt die Aufteilung.

---

## 3. Bekannte Schwächen

* **Kein Mehrfachauswählen** auf der Fläche: Es lässt sich immer nur ein Element
  gleichzeitig auswählen, verschieben oder löschen.
* **Undo ist einstufig gedacht**, aber als Stapel mit bis zu 40 Schritten
  umgesetzt. Nicht jede Aktion legt einen Wiederherstellungspunkt an – zum
  Beispiel das reine Umschalten einer Checkbox im Panel schon, das Ändern der
  Ansicht (Zoom) nicht.
* **Kanten lassen sich nicht umbiegen**; sie werden immer als gerade Linie
  zwischen den Rändern gezeichnet. Bei sehr vielen Verbindungen wird es unruhig.
* **Mobil ist die Seite bedienbar, aber eng.** Die Arbeitsfläche ist für Maus
  gedacht; auf dem Handy funktioniert Ziehen und Tippen, Zoomen aber nur über
  die Knöpfe. Das Lexikon ist dort voll nutzbar.
* **Die Simulationen laufen nacheinander**: Während eine Schadsoftware-Simulation
  läuft, wird eine zweite abgelehnt. Das ist Absicht, kann aber ungewohnt wirken.
* **Keine Barrierefreiheit-Prüfung**: Die SVG-Fläche ist nicht per Tastatur
  bedienbar, es gibt keine ARIA-Rollen.
* **Der Fortschritt lässt sich nicht gezielt zurücksetzen** – nur über das
  Löschen der Browserdaten.
* Beim Wechsel der Station wird die Ansicht jeweils neu eingepasst; die eigene
  Zoomstufe geht dabei verloren.

---

## 4. Ideen für später

* **Übungsmodus mit Aufgaben**: „Stelle den Schutzbedarf der Lohnbuchhaltung
  richtig ein“ oder „Finde alle Verstöße in der Vorlage“ mit Auflösung.
* **Verzeichnis von Verarbeitungstätigkeiten** automatisch aus den Datenflüssen
  erzeugen und als Tabelle ausgeben – das ist prüfungsrelevant und würde die
  Rechenschaftspflicht greifbar machen.
* **Export der eigenen Firma** als Datei (Download/Upload), damit man sie
  zwischen Rechnern mitnehmen kann.
* **Zweiter Ernstfall** mit anderem Szenario, etwa Datenpanne durch falschen
  Mailverteiler oder Diebstahl eines Laptops.
* **Zeitachse im Ernstfall**: anzeigen, wie sich frühere Entscheidungen auf die
  Zahl der betroffenen Systeme ausgewirkt haben.
* **Druckansicht** für Lexikon und Auswertungen als Lernzettel.
* **Mehr Bausteine**: Drucker/MFP, Telefonanlage, IoT-Sensoren im Lager,
  mobile Scanner – alles typische Schwachstellen in einer Logistikfirma.
* **Kurzer Selbsttest pro Station** am Ende (bewusst kein Quiz als Hauptweg,
  aber als freiwillige Kontrolle).
