/* ===========================================================
   AUDIT – data/pruefverfahren.js
   Die Uebersichtstabellen fuer das Themengebiet
   "Penetrationstest, Softwaretest und Audit".

   Vier Listen, weil die Spalten sich unterscheiden:
     boxverfahren   Blackbox, Greybox, Whitebox im Vergleich
     pentestphasen  die fuenf Phasen in ihrer Reihenfolge
     testentwurf    Entwurfsverfahren fuer Testfaelle
     teststufen     Unit, Integration, System, Abnahme

   js/chat.js baut daraus die Tabellen (quelle: 'boxverfahren',
   'pentestphasen', 'testentwurf', 'teststufen'). Mit "keys"
   laesst sich im Gespraech eine Auswahl in genau dieser
   Reihenfolge zeigen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

/* Die drei Box-Verfahren. "stand" ist das Unterscheidungs-
   kriterium (Informationsstand des Testers), "findet" und
   "findetNicht" sind die beiden Spalten, auf die es in der
   Pruefung ankommt. */
AUDIT.data.boxverfahren = [
  { key: 'blackbox', name: '⬛ Blackbox', stand: 'Keine Informationen – nur der Firmenname oder eine Adresse',
    aufwand: 'Hoch: Die Aufklärung frisst den größten Teil der Zeit, geprüft wird am Ende weniger',
    findet: 'Was von außen wirklich erreichbar ist; wie weit ein Angreifer ohne Vorwissen kommt; ob der Angriff auffällt',
    nicht: 'Alles, was der Tester in der Zeit nicht gefunden hat – interne Fehlkonfigurationen und Codefehler bleiben unentdeckt',
    wofuer: 'Realitätsnähe und die Frage „fällt es uns auf?" – Red-Team-Übungen' },
  { key: 'greybox', name: '◼️ Greybox', stand: 'Teilweise – z. B. IP-Bereiche, Architekturübersicht, ein normales Benutzerkonto',
    aufwand: 'Mittel: Der Tester steigt dort ein, wo die Aufklärung aufhören würde',
    findet: 'Was ein Innentäter oder ein Angreifer nach dem ersten Schritt erreicht; Rechteausweitung; Fehler in der Rollentrennung',
    nicht: 'Lücken, die nur im Quelltext sichtbar sind, und Systeme außerhalb des freigegebenen Bereichs',
    wofuer: 'Der Normalfall im Betrieb – das beste Verhältnis von Aufwand zu Erkenntnis' },
  { key: 'whitebox', name: '⬜ Whitebox', stand: 'Vollständig – Netzplan, Konfigurationen, Quelltext, oft auch Administratorzugänge',
    aufwand: 'Niedrig je Fund, hoch in der Vorbereitung: Unterlagen müssen vollständig und aktuell sein',
    findet: 'Die größte Zahl echter Lücken, auch tief liegende Codefehler und unsichere Konfigurationen',
    nicht: 'Ob der Angriff bemerkt würde, und wie schwer der Einstieg von außen tatsächlich ist',
    wofuer: 'Höchste Vollständigkeit – vor einem Produktivgang oder bei hohem Schutzbedarf' }
];

/* Die fuenf Phasen nach dem BSI-Durchfuehrungskonzept. Die
   Reihenfolge ist Pruefungsstoff – Karten dieser Quelle werden
   deshalb nie gemischt.
   Wie in allen Tabellen stehen hier keine [[Begriffe]]: Karten-HTML
   laeuft nicht durch U.rich(), die Marken wuerden als Text erscheinen. */
AUDIT.data.pentestphasen = [
  { key: 'vorbereitung', nr: 1, name: 'Vorbereitung',
    inhalt: 'Ziel, <b>Scope</b>, Zeitfenster, erlaubte Techniken, Abbruchkriterien, Ansprechpartner, Haftung und Verschwiegenheit – alles schriftlich',
    ergebnis: 'Unterschriebener Auftrag. Ohne ihn ist der Rest strafbar.' },
  { key: 'aufklaerung', nr: 2, name: 'Informationsbeschaffung',
    inhalt: '<b>Reconnaissance:</b> öffentliche Quellen, DNS, Mailadressen, Portscans, Versionen der erreichbaren Dienste',
    ergebnis: 'Liste der erreichbaren Systeme und Dienste mit Versionsstand' },
  { key: 'bewertung', nr: 3, name: 'Bewertung und Angriffsplanung',
    inhalt: 'Funde mit Schwachstellendatenbanken abgleichen, <b>Falsch-Positive</b> aussortieren, Angriffswege auswählen und mit dem Auftraggeber abstimmen',
    ergebnis: 'Priorisierte Angriffsziele – und die Entscheidung, was wirklich ausgenutzt werden darf' },
  { key: 'eindringen', nr: 4, name: 'Aktiver Eindringversuch',
    inhalt: 'Ausnutzen der Lücken (<b>Exploit</b>), Rechteausweitung, Ausbreitung im Netz – unter Protokollierung jedes Schritts',
    ergebnis: 'Nachvollziehbar belegte Angriffsketten statt einzelner Verdachtsmomente' },
  { key: 'abschluss', nr: 5, name: 'Abschlussanalyse und Bericht',
    inhalt: 'Bewertung nach <b>CVSS</b>, Empfehlungen, Zusammenfassung für die Leitung, Aufräumen der Testspuren und angelegten Zugänge',
    ergebnis: 'Bericht mit Maßnahmenplan – danach die Umsetzung und der Nachtest' }
];

/* Entwurfsverfahren fuer Testfaelle. "art" wird in der Tabelle
   farbig gesetzt: Blackbox dunkel, Whitebox hell. */
AUDIT.data.testentwurf = [
  { key: 'aequivalenz', name: 'Äquivalenzklassenbildung', art: 'Blackbox',
    idee: 'Den Wertebereich in Gruppen zerlegen, in denen sich alle Werte gleich verhalten, und je Gruppe <b>einen</b> Vertreter testen – gültige und ungültige Klassen',
    bsp: 'Menge 1–999: Klassen ≤ 0 / 1–999 / ≥ 1000 → getestet werden −5, 50, 1500',
    findet: 'Vergessene oder falsch behandelte Eingabebereiche' },
  { key: 'grenzwert', name: 'Grenzwertanalyse', art: 'Blackbox',
    idee: 'Genau an den Rändern der Klassen testen: letzter ungültiger, erster gültiger, letzter gültiger, erster ungültiger Wert',
    bsp: 'Menge 1–999: getestet werden 0, 1, 999, 1000',
    findet: 'Verwechslung von &lt; und &lt;=, Zählfehler um eins („off by one")' },
  { key: 'anweisung', name: 'Anweisungsabdeckung (C0)', art: 'Whitebox',
    idee: 'Jede Anweisung mindestens einmal ausführen',
    bsp: 'Ein <code>if</code> ohne <code>else</code> gilt schon mit einem Testfall als abgedeckt',
    findet: 'Nie ausgeführten Code – aber nicht den unbetretenen Entscheidungsweg' },
  { key: 'zweig', name: 'Zweigabdeckung (C1)', art: 'Whitebox',
    idee: 'Jeden Zweig jeder Verzweigung einmal durchlaufen – wahr <b>und</b> falsch. Schließt C0 ein',
    bsp: 'Dasselbe <code>if</code> braucht zwei Testfälle: hinein und vorbei',
    findet: 'Fehlende Behandlung des Sonst-Falls. In der Praxis der sinnvolle Zielwert' },
  { key: 'pfad', name: 'Pfadabdeckung', art: 'Whitebox',
    idee: 'Jede Kombination von Zweigen, also jeden Weg durch das Programm, durchlaufen. Stärkstes Maß',
    bsp: 'Drei aufeinanderfolgende <code>if</code> ergeben 8 Pfade; eine Schleife beliebig viele',
    findet: 'Theoretisch alles – praktisch an der Zahl der Pfade nicht durchführbar' }
];

/* Die vier Teststufen von klein nach gross. Die Reihenfolge
   bedeutet etwas, Karten dieser Quelle nicht mischen. */
AUDIT.data.teststufen = [
  { key: 'unit', name: 'Unit-Test', auch: 'Modul-/Komponententest',
    was: 'Ein einzelner Baustein – Funktion, Klasse, Methode – isoliert von allem anderen',
    wer: 'Entwickler selbst', grundlage: 'Technischer Feinentwurf',
    sicht: 'Whitebox', hinweis: 'Automatisiert und bei jeder Änderung – hier ist der Fehler am billigsten' },
  { key: 'integration', name: 'Integrationstest', auch: 'Schnittstellentest',
    was: 'Das Zusammenspiel mehrerer Bausteine und ihrer Schnittstellen',
    wer: 'Entwicklung / Testteam', grundlage: 'Technischer Grobentwurf, Schnittstellenbeschreibung',
    sicht: 'Greybox', hinweis: 'Findet die Fehler, die kein Unit-Test finden kann: Formate, Reihenfolge, Annahmen' },
  { key: 'system', name: 'Systemtest', auch: 'Gesamttest',
    was: 'Das vollständige System in produktionsnaher Umgebung, einschließlich Last, Leistung und Bedienbarkeit',
    wer: 'Unabhängiges Testteam beim Hersteller', grundlage: 'Pflichtenheft / Spezifikation',
    sicht: 'Blackbox', hinweis: 'Letzte Stufe in der Hand des Herstellers' },
  { key: 'abnahme', name: 'Abnahmetest', auch: 'Akzeptanztest',
    was: 'Das System beim Auftraggeber, mit dessen Daten und Abläufen',
    wer: 'Auftraggeber / Fachabteilung', grundlage: 'Lastenheft und tatsächlicher Bedarf',
    sicht: 'Blackbox', hinweis: 'Rechtlich entscheidend: Mit der Abnahme (§ 640 BGB) kehrt sich die Beweislast um' }
];
