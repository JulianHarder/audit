/* ===========================================================
   AUDIT – data/lexikon-tests.js
   Kurzdefinitionen zum Themengebiet "tests"
   (Penetrationstest, Softwaretest und Audit).

   Haengt seine Gruppen und Eintraege an die Listen aus
   data/lexikon.js an und baut den Index danach neu auf.
   Alle Eintraege dieser Datei tragen gebiet: 'tests'.

   Eine Reihe von Begriffen dieses Gebiets steht bewusst NICHT
   hier, sondern schon in data/lexikon.js – etwa ISMS,
   ISO/IEC 27001, BSI IT-Grundschutz, PDCA, Schwachstelle und
   Risiko. Ein zweiter Eintrag mit demselben Schluessel wuerde
   den ersten im Index verdraengen. Stattdessen wird am
   Dateiende ihr Gebiet um 'tests' erweitert, damit das Lexikon
   sie auch hier zeigt.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.lexikonGruppen = AUDIT.data.lexikonGruppen.concat([
  'Testen – Grundlagen',
  'Box-Verfahren',
  'Penetrationstest',
  'Softwaretest',
  'Audit und ISMS',
  'Schwachstellen und Bewertung'
]);

/* Ab hier beginnen die eigenen Eintraege – die Marke braucht die
   Gebietszuweisung am Dateiende. */
AUDIT.data._testsAb = AUDIT.data.lexikon.length;

AUDIT.data.lexikon = AUDIT.data.lexikon.concat([

  /* ================= Testen – Grundlagen ================= */

  { key: 'Softwaretest', gruppe: 'Testen – Grundlagen', alias: ['Testen', 'Test'],
    text: 'Die planmäßige Ausführung eines Programms, um Abweichungen zwischen <b>Soll</b> und <b>Ist</b> zu finden. Ein Test kann Fehler nachweisen, aber nie beweisen, dass keine mehr da sind.',
    bsp: 'Die Lagersoftware wird mit zehn vorbereiteten Buchungen durchgespielt, deren richtiges Ergebnis vorher feststeht.',
    merk: 'Testen zeigt die <b>Anwesenheit</b> von Fehlern, nie deren Abwesenheit.' },

  { key: 'Testfall', gruppe: 'Testen – Grundlagen', alias: ['Testcase', 'Testfälle'],
    text: 'Die kleinste Einheit eines Tests: Vorbedingung, Eingabe, <b>erwartetes Ergebnis</b> und tatsächliches Ergebnis. Ohne vorher festgelegtes Soll ist es kein Testfall, sondern Herumklicken.',
    bsp: 'Eingabe Menge = 0 → erwartet: Fehlermeldung „Menge muss größer als 0 sein".',
    merk: 'Das erwartete Ergebnis gehört <b>vor</b> der Ausführung aufgeschrieben.' },

  { key: 'Testdaten', gruppe: 'Testen – Grundlagen',
    text: 'Die Eingabewerte eines Tests. Echte Kundendaten dürfen dafür nur in Ausnahmefällen benutzt werden – sonst sind sie zu [[Anonymisierung|anonymisieren]] oder durch erfundene Daten zu ersetzen.',
    norm: 'Art. 5 Abs. 1 lit. b DSGVO ([[Zweckbindung]])',
    merk: 'Produktivdaten im Testsystem sind ein klassischer Prüfungsfall: Zweckänderung ohne Rechtsgrundlage.' },

  { key: 'Testumgebung', gruppe: 'Testen – Grundlagen', alias: ['Testsystem', 'Produktivsystem', 'Staging'],
    text: 'Ein vom Produktivsystem getrenntes System, auf dem getestet wird. Es soll der Produktion möglichst ähnlich sein, darf aber nichts Echtes auslösen.',
    bsp: 'Im Testsystem gehen keine Rechnungen an Kunden heraus und kein Lagerbestand wird wirklich gebucht.',
    merk: 'Getestet wird nie im laufenden Betrieb – außer der Test ist ausdrücklich dafür beauftragt.' },

  { key: 'Fehlerzustand', gruppe: 'Testen – Grundlagen', alias: ['Fehler', 'Bug', 'Defekt', 'Fehlhandlung', 'Fehlerwirkung'],
    text: 'Drei Dinge, die umgangssprachlich alle „Fehler" heißen: Die <b>Fehlhandlung</b> ist der Irrtum des Menschen, der <b>Fehlerzustand</b> die falsche Stelle im Code, die <b>Fehlerwirkung</b> das falsche Verhalten, das der Anwender merkt.',
    bsp: 'Der Entwickler vertippt sich beim Vergleichsoperator (Fehlhandlung), im Code steht nun <= statt < (Fehlerzustand), die Software akzeptiert eine Menge von 0 (Fehlerwirkung).',
    merk: 'Ein Fehlerzustand kann lange unentdeckt liegen – eine Fehlerwirkung tritt nur auf, wenn die Stelle auch ausgeführt wird.' },

  { key: 'Verifikation und Validierung', gruppe: 'Testen – Grundlagen', alias: ['Verifikation', 'Validierung'],
    text: '<b>Verifikation</b> fragt: Haben wir das Produkt richtig gebaut – entspricht es der Spezifikation? <b>Validierung</b> fragt: Haben wir das richtige Produkt gebaut – löst es das Problem des Kunden?',
    bsp: 'Ein Formular, das genau wie im Lastenheft beschrieben aussieht, aber niemandem im Lager hilft, ist verifiziert und nicht validiert.',
    merk: 'Verifikation gegen das <b>Pflichtenheft</b>, Validierung gegen den <b>Bedarf</b>.' },

  { key: 'statischer Test', gruppe: 'Testen – Grundlagen', alias: ['Review', 'Code-Review', 'Inspektion', 'Walkthrough', 'statische Analyse'],
    text: 'Prüfung <b>ohne</b> das Programm auszuführen: Review des Quelltextes, Inspektion von Dokumenten, automatische Code-Analyse durch ein Werkzeug.',
    bsp: 'Ein Kollege liest den neuen Code gegen, bevor er eingecheckt wird – [[Vier-Augen-Prinzip]].',
    merk: 'Findet Fehler am billigsten, weil noch nichts gebaut und nichts ausgeliefert ist.' },

  { key: 'dynamischer Test', gruppe: 'Testen – Grundlagen',
    text: 'Prüfung durch <b>Ausführen</b> des Programms mit Testdaten. Alles, was man üblicherweise „Test" nennt – vom [[Unit-Test]] bis zum [[Abnahmetest]].',
    merk: 'Statisch = angucken. Dynamisch = laufen lassen.' },

  { key: 'Testabdeckung', gruppe: 'Testen – Grundlagen', alias: ['Überdeckung', 'Abdeckung', 'Coverage', 'Überdeckungsgrad'],
    text: 'Der Anteil des Programms, der von den Tests tatsächlich durchlaufen wurde – in Prozent der Anweisungen, Zweige oder Pfade.',
    bsp: '80 % Anweisungsabdeckung heißt: Jede fünfte Codezeile wurde nie ausgeführt.',
    merk: 'Hohe Abdeckung sagt, dass Code <b>durchlaufen</b> wurde – nicht, dass er richtig ist. Sie braucht trotzdem gute [[Testfall|Testfälle]].' },

  { key: 'Fehlerkosten', gruppe: 'Testen – Grundlagen', alias: ['Zehnerregel', 'Rule of Ten', 'Fehlerkostenkurve'],
    text: 'Je später ein Fehler gefunden wird, desto teurer wird er – nach der Zehnerregel etwa um den Faktor zehn je Projektphase.',
    bsp: 'Ein Denkfehler im Lastenheft kostet dort eine Stunde Gespräch, nach der Auslieferung einen Rückruf samt Nacharbeit.',
    merk: 'Das wirtschaftliche Argument für frühes Testen – und die beliebteste Begründungsfrage dazu.' },

  { key: 'Testprotokoll', gruppe: 'Testen – Grundlagen', alias: ['Testbericht', 'Testdokumentation'],
    text: 'Die Aufzeichnung, welcher [[Testfall]] wann mit welchem Ergebnis gelaufen ist. Erst sie macht einen Test nachvollziehbar und im [[Audit]] verwertbar.',
    merk: 'Ein Test ohne Protokoll ist für den [[Auditbericht|Auditor]] nicht passiert.' },

  /* ================= Box-Verfahren ================= */

  { key: 'Blackbox-Verfahren', gruppe: 'Box-Verfahren', alias: ['Blackbox', 'Black Box', 'Black-Box-Test', 'Blackboxtest'],
    text: 'Prüfen <b>ohne Kenntnis des Innenlebens</b>. Der Begriff hat zwei Lesarten, die auseinanderzuhalten sind:<br>' +
          '<b>1. Im [[Softwaretest]]:</b> Testfälle werden allein aus der <b>Spezifikation</b> abgeleitet – was soll bei welcher Eingabe herauskommen? Typische Techniken: [[Äquivalenzklassenbildung]] und [[Grenzwertanalyse]].<br>' +
          '<b>2. Im [[Penetrationstest]]:</b> Der Tester bekommt <b>keine Informationen</b> über Netz, Systeme oder Quelltext – er sieht die Firma so, wie ein echter Angreifer sie von außen sieht.',
    bsp: 'Softwaretest: Der Tester kennt nur „Menge muss zwischen 1 und 999 liegen" und wählt 0, 1, 999, 1000. – Pentest: Yasmin bekommt nur den Firmennamen und muss selbst herausfinden, was erreichbar ist.',
    merk: 'Gleiches Wort, zwei Fragen: Im Softwaretest heißt Blackbox <b>„Testfälle aus der Spezifikation"</b>, im Pentest <b>„Tester weiß nichts"</b>.' },

  { key: 'Whitebox-Verfahren', gruppe: 'Box-Verfahren', alias: ['Whitebox', 'White Box', 'White-Box-Test', 'Glassbox', 'Glass Box'],
    text: 'Prüfen <b>mit vollem Einblick</b>. Auch hier die zwei Lesarten:<br>' +
          '<b>1. Im [[Softwaretest]]:</b> Testfälle werden aus der <b>inneren Struktur</b> abgeleitet – aus Verzweigungen, Schleifen und Pfaden des Quelltextes. Maßstab ist die [[Testabdeckung]] ([[Anweisungsabdeckung]], [[Zweigabdeckung]], [[Pfadabdeckung]]).<br>' +
          '<b>2. Im [[Penetrationstest]]:</b> Der Tester erhält <b>alle Unterlagen</b> – Netzplan, Konfigurationen, Quelltext, oft auch Zugänge. Er sucht nicht den Weg hinein, sondern alle vorhandenen Lücken.',
    bsp: 'Softwaretest: Der Tester sieht ein if-else und baut je einen Testfall für jeden Zweig. – Pentest: Yasmin bekommt Netzplan und Quelltext und prüft den Code gezielt auf [[SQL-Injection]].',
    merk: 'Blackbox prüft, <b>was</b> herauskommt. Whitebox prüft, <b>wie</b> es zustande kommt – und findet deshalb auch toten und unerreichbaren Code.' },

  { key: 'Greybox-Verfahren', gruppe: 'Box-Verfahren', alias: ['Greybox', 'Grey Box', 'Graybox', 'Grey-Box-Test'],
    text: 'Die Mischform: <b>teilweise</b> Kenntnis. Im [[Penetrationstest]] der Normalfall – der Tester bekommt zum Beispiel Netzbereiche und einen normalen Benutzerzugang, aber keinen Quelltext. Im [[Softwaretest]] heißt es, dass Testfälle aus der Spezifikation stammen, der Tester die Struktur aber kennt und gezielt Lücken ergänzt.',
    bsp: 'Yasmin erhält die zu testenden IP-Bereiche und ein Konto wie ein Lagermitarbeiter – damit prüft sie, was ein Innentäter erreichen könnte.',
    merk: 'Greybox ist der <b>wirtschaftliche Kompromiss</b>: weniger Aufwand als Blackbox für denselben Einblick, mehr Realitätsnähe als Whitebox.' },

  { key: 'Informationsstand', gruppe: 'Box-Verfahren', alias: ['Kenntnisstand', 'Vorwissen des Testers'],
    text: 'Im [[Penetrationstest]] das Kriterium, nach dem Blackbox, Greybox und Whitebox unterschieden werden: <b>Was weiß der Tester vorher?</b> Es sagt nichts darüber, ob der Test aggressiv oder von innen oder außen läuft – das sind eigene Kriterien.',
    norm: 'BSI-Durchführungskonzept für Penetrationstests',
    merk: 'Nicht verwechseln: <b>Informationsstand</b> (was weiß der Tester) ≠ <b>Angriffspunkt</b> (von außen oder von innen) ≠ <b>Aggressivität</b> (nur scannen oder wirklich ausnutzen).' },

  /* ================= Penetrationstest ================= */

  { key: 'Penetrationstest', gruppe: 'Penetrationstest', alias: ['Pentest', 'Pen-Test', 'Penetrationstests'],
    text: 'Ein <b>beauftragter, kontrollierter Angriff</b> auf eigene Systeme, um Schwachstellen zu finden, bevor ein echter Angreifer sie findet. Er wird von Menschen durchgeführt, die Lücken auch tatsächlich <b>ausnutzen</b> und verketten.',
    bsp: 'Yasmin findet eine veraltete Bibliothek im Shop, nutzt sie aus und gelangt von dort auf den Lagerserver.',
    norm: 'BSI-Durchführungskonzept für Penetrationstests; Erlaubnis nur durch Auftrag, vgl. [[§ 202a StGB]]',
    merk: 'Ohne <b>schriftliche Beauftragung</b> ist derselbe Vorgang eine Straftat.' },

  { key: 'Schwachstellenscan', gruppe: 'Penetrationstest', alias: ['Vulnerability Scan', 'Schwachstellenscanner', 'Vulnerability Scanner'],
    text: 'Ein <b>automatisierter</b> Durchlauf: Ein Werkzeug vergleicht erreichbare Dienste und Versionen mit einer Schwachstellendatenbank und listet Treffer auf. Schnell, billig, wiederholbar – aber ohne Urteil.',
    bsp: 'Der Scanner meldet 180 Funde, von denen 40 [[Falsch-Positiv|falsch-positiv]] sind und 3 wirklich gefährlich.',
    merk: 'Der Scan sagt, <b>was auffällt</b>. Der [[Penetrationstest]] sagt, <b>was ein Angreifer damit erreicht</b> – und verkettet mehrere kleine Lücken zu einem großen Schaden.' },

  { key: 'Pentest-Phasen', gruppe: 'Penetrationstest', alias: ['Phasen eines Penetrationstests', 'Phasenmodell'],
    text: 'Die feste Reihenfolge eines Pentests: <b>1.</b> Vorbereitung und Beauftragung – <b>2.</b> [[Reconnaissance|Informationsbeschaffung]] – <b>3.</b> Bewertung der Informationen und Angriffsplanung – <b>4.</b> aktiver Eindringversuch ([[Exploit]], [[Privilege Escalation]]) – <b>5.</b> Abschlussanalyse, [[Pentest-Bericht|Bericht]] und [[Nachtest]].',
    norm: 'BSI-Durchführungskonzept für Penetrationstests (fünf Phasen)',
    merk: 'Die Reihenfolge ist Prüfungsstoff: <b>Beauftragen – Aufklären – Bewerten – Eindringen – Berichten.</b> Phase 1 ist nicht Technik, sondern Papier.' },

  { key: 'Scope', gruppe: 'Penetrationstest', alias: ['Prüfumfang', 'Testumfang', 'Rules of Engagement'],
    text: 'Die verbindliche Festlegung, <b>was</b> geprüft werden darf und was nicht: IP-Bereiche, Systeme, Zeitfenster, erlaubte Techniken, Ansprechpartner und [[Abbruchkriterium|Abbruchkriterien]]. Alles außerhalb ist verboten – auch wenn es verlockend offen steht.',
    bsp: 'Im Scope stehen Shop und Firmennetz; der Cloud-Dienstleister steht ausdrücklich nicht drin, weil Rampe 7 für dessen Systeme keine Erlaubnis geben kann.',
    merk: 'Fremde Systeme kann nur deren Betreiber freigeben – ein Auftrag von Rampe 7 deckt sie nicht.' },

  { key: 'Pentest-Beauftragung', gruppe: 'Penetrationstest', alias: ['schriftliche Beauftragung', 'Permission to Attack', 'Letter of Authorization', 'Freigabe des Pentests'],
    text: 'Der schriftliche Auftrag mit [[Scope]], Zeitraum, Ansprechpartnern, Haftungsregelung und Verschwiegenheit, unterschrieben von jemandem, der dafür <b>zeichnungsberechtigt</b> ist. Er ist die Rechtfertigung für Handlungen, die sonst strafbar wären.',
    norm: '[[§ 202a StGB]] ff.; [[AV-Vertrag]] nach Art. 28 DSGVO, soweit personenbezogene Daten berührt werden',
    merk: 'Ein mündliches „macht mal" der IT-Leitung reicht nicht. Der Zettel schützt beide Seiten.' },

  { key: 'Reconnaissance', gruppe: 'Penetrationstest', alias: ['Informationsbeschaffung', 'Footprinting', 'OSINT', 'Aufklärung'],
    text: 'Die systematische Sammlung von Informationen über das Ziel, bevor etwas angefasst wird: öffentliche Register, Stellenanzeigen, Mailadressen, DNS-Einträge, Portscans. Bei einem [[Blackbox-Verfahren|Blackbox-Pentest]] die aufwendigste Phase.',
    bsp: 'Eine Stellenanzeige nennt die eingesetzte Lagersoftware samt Version – das ist der Einstieg.',
    merk: 'Je weniger der Tester vorher weiß, desto länger dauert diese Phase – und desto teurer wird der Test.' },

  { key: 'Privilege Escalation', gruppe: 'Penetrationstest', alias: ['Rechteausweitung', 'Privilegieneskalation', 'Rechteeskalation'],
    text: 'Der Schritt von einem gewöhnlichen Zugang zu weitergehenden Rechten – vom Lagerkonto zum Administrator. Der eigentlich gefährliche Teil eines Angriffs.',
    bsp: 'Ein Dienst läuft mit Systemrechten und lässt sich von jedem Benutzer neu starten – darüber bekommt der Tester Administratorrechte.',
    merk: 'Gegenmittel: [[Need-to-know-Prinzip|Need-to-know]] und getrennte Dienstkonten mit möglichst wenig Rechten.' },

  { key: 'Lateral Movement', gruppe: 'Penetrationstest', alias: ['Querbewegung', 'Seitwärtsbewegung'],
    text: 'Die Ausbreitung von einem übernommenen System auf weitere im gleichen Netz. Zeigt im Bericht, was eine einzelne kleine Lücke am Ende wirklich wert war.',
    bsp: 'Vom Shop-Server mit demselben lokalen Administratorkennwort weiter auf drei Lagerrechner.',
    merk: 'Das Gegenmittel heißt [[Netzwerksegmentierung]] – und unterschiedliche Kennwörter je System.' },

  { key: 'Pentest-Bericht', gruppe: 'Penetrationstest', alias: ['Abschlussbericht', 'Pentest-Report', 'Managementbericht'],
    text: 'Das eigentliche Produkt des Tests: pro Fund die Schwachstelle, der nachvollziehbare Weg dorthin, die Auswirkung, eine Bewertung nach [[CVSS]] und eine <b>konkrete Empfehlung</b>. Dazu eine Zusammenfassung für die Leitung ohne Fachsprache.',
    merk: 'Der Bericht wird nach [[Vertraulichkeit|vertraulich]] eingestuft wie kaum ein anderes Dokument im Haus – er ist eine Anleitung zum Einbruch.' },

  { key: 'Nachtest', gruppe: 'Penetrationstest', alias: ['Retest', 'Nachprüfung', 'Re-Test'],
    text: 'Die erneute Prüfung derselben Funde nach Umsetzung der Maßnahmen. Erst sie belegt, dass die Lücke geschlossen <b>und</b> dabei keine neue aufgerissen wurde.',
    merk: 'Ohne Nachtest ist der Maßnahmenplan nur eine Absichtserklärung – im [[Audit]] genau die Frage, die gestellt wird.' },

  { key: 'Red Team', gruppe: 'Penetrationstest', alias: ['Red Teaming', 'rotes Team'],
    text: 'Die angreifende Seite in einer Übung. Ein Red-Team-Einsatz geht über einen [[Penetrationstest]] hinaus: Er läuft <b>verdeckt</b> über Wochen und prüft nicht nur Technik, sondern auch, ob die Verteidigung den Angriff überhaupt bemerkt.',
    merk: 'Pentest fragt: Welche Lücken gibt es? Red Team fragt: Fällt es jemandem auf?' },

  { key: 'Blue Team', gruppe: 'Penetrationstest', alias: ['blaues Team', 'Verteidigung'],
    text: 'Die verteidigende Seite: die eigene IT und der Betrieb der Überwachung ([[SIEM]], Protokolle, Alarmierung). Bei einem verdeckten Test weiß das Blue Team nichts – deshalb behandelt es die Spuren wie einen echten Angriff.',
    merk: 'Genau das ist der Sinn: Man testet nicht nur die Systeme, sondern den <b>Prozess</b> dahinter.' },

  { key: 'Purple Team', gruppe: 'Penetrationstest', alias: ['lila Team', 'Purple Teaming'],
    text: 'Nicht eine dritte Mannschaft, sondern die <b>geregelte Zusammenarbeit</b> von [[Red Team]] und [[Blue Team]]: Der Angreifer zeigt, wie er vorgegangen ist, die Verteidigung baut daraus Erkennungsregeln. Danach wird derselbe Angriff wiederholt.',
    merk: 'Purple ist das Lernen aus der Übung – der [[PDCA|Act-Schritt]] nach dem Test.' },

  { key: 'Abbruchkriterium', gruppe: 'Penetrationstest', alias: ['Abbruchkriterien', 'Stopp-Kriterium', 'Notbremse'],
    text: 'Vorher festgelegte Fälle, in denen der Test sofort endet: ein Produktivsystem wird instabil, der Geschäftsbetrieb ist gestört, es werden fremde oder besonders schützenswerte Daten berührt, oder es findet sich ein <b>echter</b> Angreifer im Netz.',
    bsp: 'Der Testzugriff bringt den Lagerserver ins Schwanken – Yasmin stoppt und ruft die hinterlegte Nummer an.',
    merk: 'Gehört in den [[Scope]] und muss jemanden benennen, der rund um die Uhr erreichbar ist.' },

  { key: '§ 202a StGB', gruppe: 'Penetrationstest', alias: ['Hackerparagraf', '§ 202b StGB', '§ 202c StGB', '§§ 202a–c StGB', 'Ausspähen von Daten'],
    text: 'Strafvorschriften zum unbefugten Zugang zu Daten: <b>§ 202a</b> Ausspähen von Daten (Überwinden einer Zugangssicherung), <b>§ 202b</b> Abfangen von Daten, <b>§ 202c</b> Vorbereiten – also Beschaffen und Verbreiten von Passwörtern und Angriffswerkzeugen.',
    norm: '§§ 202a, 202b, 202c StGB',
    merk: 'Entscheidend ist das Wort <b>unbefugt</b>. Die [[Pentest-Beauftragung|schriftliche Beauftragung]] macht aus der Straftat eine Dienstleistung – nur innerhalb des [[Scope]].' },

  /* ================= Softwaretest ================= */

  { key: 'Äquivalenzklassenbildung', gruppe: 'Softwaretest', alias: ['Äquivalenzklassen', 'Äquivalenzklasse', 'Äquivalenzklassenanalyse'],
    text: 'Ein [[Blackbox-Verfahren]]: Der Wertebereich einer Eingabe wird in Gruppen zerlegt, von denen man annimmt, dass sich alle Werte darin <b>gleich</b> verhalten. Aus jeder Klasse wird <b>ein</b> Vertreter getestet – gültige und ungültige Klassen gleichermaßen.',
    bsp: 'Erlaubte Menge 1–999 ergibt drei Klassen: ≤ 0 (ungültig), 1–999 (gültig), ≥ 1000 (ungültig). Getestet werden etwa −5, 50 und 1500.',
    merk: 'Sie senkt die Zahl der Testfälle drastisch, ohne die Abdeckung der <b>Fälle</b> zu verlieren. Kombiniert wird sie fast immer mit der [[Grenzwertanalyse]].' },

  { key: 'Grenzwertanalyse', gruppe: 'Softwaretest', alias: ['Grenzwerte', 'Boundary Value Analysis', 'Grenzwerttest'],
    text: 'Die Ergänzung zur [[Äquivalenzklassenbildung]]: Getestet wird genau <b>an den Rändern</b> der Klassen – der letzte ungültige, der erste gültige, der letzte gültige, der erste ungültige Wert.',
    bsp: 'Bei 1–999: die Werte 0, 1, 999 und 1000. Dort stecken Verwechslungen von < und <= und Zählfehler um eins.',
    merk: 'Fehler sitzen fast immer an der Grenze, nicht in der Mitte – „off by one" ist der häufigste Programmierfehler.' },

  { key: 'Anweisungsabdeckung', gruppe: 'Softwaretest', alias: ['C0', 'C0-Überdeckung', 'Statement Coverage', 'Anweisungsüberdeckung'],
    text: 'Das schwächste [[Whitebox-Verfahren|Whitebox-Maß]]: Jede <b>Anweisung</b> des Programms muss mindestens einmal ausgeführt werden.',
    bsp: 'Ein <code>if</code> ohne <code>else</code> ist bei erfülltem Zweig voll C0-abgedeckt – der Fall „Bedingung nicht erfüllt" wurde dabei nie geprüft.',
    merk: '100 % C0 kann erreicht sein, obwohl ein ganzer Entscheidungsweg nie durchlaufen wurde. Deshalb genügt C0 nicht.' },

  { key: 'Zweigabdeckung', gruppe: 'Softwaretest', alias: ['C1', 'C1-Überdeckung', 'Branch Coverage', 'Entscheidungsabdeckung', 'Zweigüberdeckung'],
    text: 'Das übliche Maß in der Praxis: Jeder <b>Zweig</b> jeder Verzweigung muss einmal durchlaufen werden – wahr und falsch. Schließt die [[Anweisungsabdeckung]] mit ein.',
    bsp: 'Beim <code>if</code> ohne <code>else</code> braucht es zwei Testfälle: einen, der hineingeht, und einen, der daran vorbeiläuft.',
    merk: 'Rangfolge der Stärke: <b>C0 ⊂ C1 ⊂ [[Pfadabdeckung]]</b>. C1 ist der vernünftige Zielwert.' },

  { key: 'Pfadabdeckung', gruppe: 'Softwaretest', alias: ['Pfadüberdeckung', 'Path Coverage', 'C2'],
    text: 'Das stärkste Maß: Jede mögliche <b>Kombination</b> von Zweigen – also jeder Weg durch das Programm – wird durchlaufen. Bei Schleifen und mehreren Verzweigungen wächst die Zahl der Pfade so schnell, dass sie praktisch nicht vollständig erreichbar ist.',
    bsp: 'Drei hintereinanderliegende if-Abfragen ergeben acht Pfade; eine Schleife mit unbestimmter Länge unendlich viele.',
    merk: 'Theoretisch das Beste, praktisch unbezahlbar. Deshalb ist [[Zweigabdeckung|C1]] in der Praxis das Ziel.' },

  { key: 'Teststufen', gruppe: 'Softwaretest', alias: ['Teststufe', 'V-Modell'],
    text: 'Die vier Stufen von klein nach groß: [[Unit-Test|Unit]] – [[Integrationstest|Integration]] – [[Systemtest|System]] – [[Abnahmetest|Abnahme]]. Im V-Modell steht jeder Stufe ein Dokument der Entwurfsseite gegenüber, gegen das sie prüft.',
    merk: 'Von unten nach oben wächst der Umfang und sinkt der Einblick: unten [[Whitebox-Verfahren|Whitebox]] durch den Entwickler, oben [[Blackbox-Verfahren|Blackbox]] durch den Kunden.' },

  { key: 'Unit-Test', gruppe: 'Softwaretest', alias: ['Modultest', 'Komponententest', 'Unittest', 'Unit Test'],
    text: 'Prüfung eines einzelnen Bausteins – einer Funktion, Klasse oder Methode – isoliert von allem anderen. Geschrieben vom Entwickler, meist als [[Whitebox-Verfahren|Whitebox-Test]] und automatisiert.',
    bsp: 'Die Funktion <code>bestandPruefen()</code> wird mit 0, 1 und 1000 aufgerufen, ohne dass eine Datenbank läuft.',
    merk: 'Fehler sind hier am schnellsten zu finden und am billigsten zu beheben – vgl. [[Fehlerkosten]].' },

  { key: 'Integrationstest', gruppe: 'Softwaretest',
    text: 'Prüfung des <b>Zusammenspiels</b> mehrerer Bausteine und Schnittstellen. Sucht genau die Fehler, die der [[Unit-Test]] nicht finden kann: falsche Datenformate, falsche Reihenfolge, falsche Annahmen über den Partner.',
    bsp: 'Die Lagersoftware übergibt das Datum als TT.MM.JJJJ, die Warenwirtschaft erwartet JJJJ-MM-TT. Beide Module sind einzeln fehlerfrei.',
    merk: 'Jedes Modul funktioniert, das Ganze nicht – das ist der Integrationsfehler.' },

  { key: 'Systemtest', gruppe: 'Softwaretest',
    text: 'Prüfung des <b>vollständigen</b> Systems in einer produktionsnahen [[Testumgebung]], gegen die Spezifikation und aus der Sicht des Anwenders. Hier kommen auch die nichtfunktionalen Anforderungen dran: Leistung, Last, Bedienbarkeit, Sicherheit.',
    merk: 'Letzte Stufe <b>in der Hand des Herstellers</b> – danach übernimmt der Kunde.' },

  { key: 'Abnahmetest', gruppe: 'Softwaretest', alias: ['Akzeptanztest', 'Abnahme', 'Abnahmeprüfung', 'User Acceptance Test'],
    text: 'Prüfung durch den <b>Auftraggeber</b> in dessen Umgebung mit dessen Daten und Abläufen. Prüfmaßstab ist nicht die Spezifikation, sondern der eigene Bedarf – also [[Verifikation und Validierung|Validierung]]. Mit der Abnahme gehen Vergütungsanspruch und Gefahr über.',
    norm: '§ 640 BGB (Abnahme beim Werkvertrag)',
    merk: 'Rechtlich die wichtigste Stufe: Nach der Abnahme kehrt sich die Beweislast für Mängel um.' },

  { key: 'Regressionstest', gruppe: 'Softwaretest', alias: ['Regression', 'Regressionstests'],
    text: 'Die Wiederholung bereits erfolgreicher Tests nach einer Änderung, um zu prüfen, ob dabei etwas <b>bisher Funktionierendes</b> kaputtgegangen ist.',
    bsp: 'Nach dem Einbau der neuen Preisliste laufen alle 240 vorhandenen Testfälle noch einmal durch – zwei schlagen plötzlich an.',
    merk: 'Der Testtyp, der sich am meisten lohnt zu automatisieren: Er läuft bei <b>jeder</b> Änderung, nicht nur einmal. Auch ein [[Nachtest]] nach einem Pentest enthält immer eine Regressionsprüfung.' },

  { key: 'Testautomatisierung', gruppe: 'Softwaretest', alias: ['automatisierte Tests'],
    text: 'Testfälle als Programm, das auf Knopfdruck oder bei jedem Einchecken läuft. Teuer in der Erstellung, fast kostenlos in der Wiederholung – deshalb lohnt sie sich beim [[Regressionstest]] und beim [[Unit-Test]].',
    merk: 'Automatisieren, was <b>oft</b> läuft. Einmalige Prüfungen und Bedienbarkeit bleiben Handarbeit.' },

  { key: 'Lasttest', gruppe: 'Softwaretest', alias: ['Stresstest', 'Performancetest', 'Belastungstest'],
    text: 'Nichtfunktionaler Test: Hält das System die erwartete Menge an Benutzern und Vorgängen aus ([[Lasttest]]) und wie verhält es sich jenseits davon (Stresstest)? Prüft das Schutzziel [[Verfügbarkeit]].',
    bsp: '300 gleichzeitige Scanner im Lager zur Schichtübergabe – statt 30 im Tagesdurchschnitt.',
    merk: 'Gehört in den [[Systemtest]] und ist der Grund, warum eine Software „im Test lief, aber am ersten Tag stand".' },

  /* ================= Audit und ISMS ================= */

  { key: 'Audit', gruppe: 'Audit und ISMS', alias: ['Auditierung', 'auditieren'],
    text: 'Eine systematische, <b>unabhängige</b> und dokumentierte Prüfung, ob festgelegte Anforderungen erfüllt sind – belegt durch [[Auditnachweis|Nachweise]]. Geprüft wird nicht die Technik an sich, sondern ob sie geregelt, umgesetzt und <b>nachweisbar</b> ist.',
    norm: 'ISO/IEC 27001, ISO 19011 (Leitfaden zur Auditierung)',
    merk: 'Der Pentest fragt: Hält es? Das Audit fragt: Ist es geregelt, gelebt und belegt?' },

  { key: 'internes Audit', gruppe: 'Audit und ISMS', alias: ['Erstparteien-Audit', 'Selbstaudit'],
    text: 'Vom Unternehmen <b>selbst</b> veranlasst und durchgeführt – von eigenen Leuten, die aber nicht ihren eigenen Bereich prüfen dürfen. Dient der eigenen Verbesserung und der Vorbereitung auf das [[externes Audit|externe Audit]]. Die ISO 27001 verlangt es in geplanten Abständen.',
    norm: 'ISO/IEC 27001 Abschnitt 9.2',
    merk: 'Pflicht, aber kein Zertifikat. Kernanforderung ist die <b>Unabhängigkeit vom geprüften Bereich</b>.' },

  { key: 'externes Audit', gruppe: 'Audit und ISMS', alias: ['Drittparteien-Audit', 'Zweitparteien-Audit', 'Lieferantenaudit', 'Kundenaudit'],
    text: 'Prüfung durch eine Stelle von außen. Als <b>Zweitparteien-Audit</b> prüft ein Kunde seinen Lieferanten, als <b>Drittparteien-Audit</b> prüft eine akkreditierte Zertifizierungsstelle – nur Letzteres führt zu einem Zertifikat.',
    bsp: 'Ein Großkunde lässt sich die Sicherheit bei Rampe 7 vor Ort zeigen (zweite Partei); die Zertifizierungsstelle prüft gegen ISO 27001 (dritte Partei).',
    merk: 'Nur die <b>akkreditierte dritte Partei</b> darf zertifizieren – der eigene Auditor und der Kunde nicht.' },

  { key: 'Zertifizierungsaudit', gruppe: 'Audit und ISMS', alias: ['Stufe-1-Audit', 'Stufe-2-Audit', 'Hauptaudit', 'Erstzertifizierung'],
    text: 'Das Audit zur Erlangung des Zertifikats, in zwei Stufen: <b>Stufe 1</b> prüft die Dokumentation und die Audit-Reife, <b>Stufe 2</b> vor Ort die tatsächliche Umsetzung. Das Zertifikat gilt drei Jahre.',
    merk: 'Danach jährlich ein [[Überwachungsaudit]], im dritten Jahr die Re-Zertifizierung.' },

  { key: 'Überwachungsaudit', gruppe: 'Audit und ISMS', alias: ['Surveillance Audit', 'Re-Zertifizierung', 'Rezertifizierung', 'Wiederholungsaudit'],
    text: 'Die jährliche Nachprüfung im Zertifikatszeitraum, kleiner als das [[Zertifizierungsaudit]] und mit Stichproben. Im dritten Jahr folgt die Re-Zertifizierung über den vollen Umfang.',
    merk: 'Deshalb ist das [[ISMS]] ein Dauerlauf: Das Zertifikat ist nie „fertig", es läuft ab.' },

  { key: 'Auditplan', gruppe: 'Audit und ISMS', alias: ['Auditprogramm', 'Auditkriterien'],
    text: 'Die Vorbereitung: Was wird geprüft ([[Auditkriterien]] – Norm, eigene Richtlinien, Verträge, Gesetze), in welchem Umfang, wann und mit wem. Der Plan geht vorab an das Unternehmen, damit die richtigen Leute und Unterlagen bereitstehen.',
    merk: 'Ein Audit kommt nicht überraschend – die Nachweise soll man vorzeigen können, nicht beschaffen müssen.' },

  { key: 'Auditnachweis', gruppe: 'Audit und ISMS', alias: ['Nachweis', 'Nachweise', 'Evidenz', 'Auditbeweis'],
    text: 'Das, was der Auditor sehen und nachvollziehen kann: Protokolle, Freigaben mit Datum und Unterschrift, Schulungslisten, Konfigurationsauszüge, Tickets, Prüfberichte. Eine Aussage im Gespräch ist kein Nachweis.',
    merk: 'Dreiklang des Auditors: <b>geregelt</b> (es gibt eine Vorgabe) – <b>umgesetzt</b> (sie wird gelebt) – <b>nachgewiesen</b> (es ist belegt).' },

  { key: 'Auditbericht', gruppe: 'Audit und ISMS', alias: ['Auditfeststellung', 'Feststellung'],
    text: 'Das Ergebnis mit allen Feststellungen: Konformität, <b>Verbesserungspotenzial</b> (Hinweis ohne Pflicht) und [[Nichtkonformität]] in zwei Schweregraden. Dazu die Fristen für die [[Korrekturmaßnahme]]n.',
    merk: 'Der Bericht endet nicht mit einer Note, sondern mit einem <b>Maßnahmenplan samt Terminen</b>.' },

  { key: 'Nichtkonformität', gruppe: 'Audit und ISMS', alias: ['Abweichung', 'Hauptabweichung', 'Nebenabweichung', 'Major', 'Minor'],
    text: 'Eine Anforderung ist nicht erfüllt. Eine <b>Hauptabweichung</b> (Major) stellt die Wirksamkeit des [[ISMS]] in Frage und verhindert das Zertifikat, bis sie behoben ist; eine <b>Nebenabweichung</b> (Minor) ist ein Einzelfall mit Frist.',
    bsp: 'Major: Es gibt überhaupt kein [[internes Audit]]. Minor: Zwei von vierzig Zugriffsberechtigungen wurden nicht fristgerecht überprüft.',
    merk: 'Systematisch = Major, Einzelfall = Minor. Danach richten sich Frist und Folgen.' },

  { key: 'Korrekturmaßnahme', gruppe: 'Audit und ISMS', alias: ['Maßnahmenplan', 'Korrektur', 'Ursachenanalyse'],
    text: 'Nicht nur das Abstellen des Symptoms, sondern die Beseitigung der <b>Ursache</b>, damit die Abweichung nicht wiederkehrt. Verlangt wird dazu eine Ursachenanalyse und ein Wirksamkeitsnachweis.',
    bsp: 'Korrektur: Die fehlende Freigabe wird nachgeholt. Korrekturmaßnahme: Der Freigabeschritt wird im Ticketsystem erzwungen, damit er nicht übersprungen werden kann.',
    merk: 'Korrektur heilt den Fall, Korrekturmaßnahme heilt den <b>Prozess</b> – der [[PDCA|Act-Schritt]].' },

  { key: 'ISMS-Geltungsbereich', gruppe: 'Audit und ISMS', alias: ['Geltungsbereich', 'Anwendungsbereich des ISMS'],
    text: 'Die Festlegung, welche Standorte, Prozesse, Systeme und Informationen das [[ISMS]] umfasst. Steht im Zertifikat – ein Zertifikat „für die IT-Abteilung" sagt über den Rest des Hauses nichts aus.',
    norm: 'ISO/IEC 27001 Abschnitt 4.3',
    merk: 'Beim Zertifikat eines Lieferanten immer zuerst den Geltungsbereich lesen, nicht die Urkunde.' },

  { key: 'Anhang A der ISO 27001', gruppe: 'Audit und ISMS', alias: ['Anhang A', 'Annex A', 'Controls', 'Maßnahmenziele'],
    text: 'Der Katalog der Sicherheitsmaßnahmen („Controls") in vier Themenblöcken: organisatorisch, personenbezogen, physisch, technologisch. In der Fassung von 2022 sind es 93 Maßnahmen.',
    norm: 'ISO/IEC 27001:2022 Anhang A, erläutert in ISO/IEC 27002',
    merk: 'Der Anhang ist kein Wunschzettel: Zu jeder Maßnahme muss begründet sein, ob und warum sie angewendet wird – das leistet die [[Erklärung zur Anwendbarkeit]].' },

  { key: 'Erklärung zur Anwendbarkeit', gruppe: 'Audit und ISMS', alias: ['Statement of Applicability', 'SoA'],
    text: 'Die Liste aller Maßnahmen aus [[Anhang A der ISO 27001|Anhang A]] mit der Entscheidung je Maßnahme: angewendet oder nicht – und <b>mit Begründung</b>. Das zentrale Dokument im [[Zertifizierungsaudit]].',
    norm: 'ISO/IEC 27001 Abschnitt 6.1.3 d)',
    merk: 'Ausschließen darf man Maßnahmen – nur nicht stillschweigend.' },

  { key: 'Informationssicherheitsleitlinie', gruppe: 'Audit und ISMS', alias: ['Sicherheitsleitlinie', 'Leitlinie', 'ISMS-Leitlinie', 'Security Policy'],
    text: 'Das oberste Dokument des [[ISMS]]: Ziele, Geltung und Verbindlichkeit der Informationssicherheit, erlassen und unterschrieben von der <b>Leitung</b>. Darunter hängen die einzelnen Richtlinien und Anweisungen.',
    norm: 'ISO/IEC 27001 Abschnitt 5.2, BSI-Standard 200-1',
    merk: 'Ohne Unterschrift der Leitung fehlt dem ganzen ISMS die Grundlage – das ist im Audit die erste Frage.' },

  { key: 'IT-Grundschutz-Check', gruppe: 'Audit und ISMS', alias: ['Basis-Absicherung', 'Standard-Absicherung', 'Kern-Absicherung', 'Strukturanalyse', 'Modellierung'],
    text: 'Das Vorgehen des [[BSI IT-Grundschutz]]: Strukturanalyse, [[Schutzbedarf|Schutzbedarfsfeststellung]], Modellierung mit Bausteinen, dann der Soll-Ist-Vergleich je Anforderung (umgesetzt – teilweise – nicht – entbehrlich). Drei Vorgehensweisen: Basis, Kern und Standard.',
    norm: 'BSI-Standard 200-2',
    merk: 'IT-Grundschutz ist der <b>konkrete Weg</b> zum Ziel der [[ISO/IEC 27001]] – mit fertigen Bausteinen statt freier Risikoanalyse.' },

  { key: 'ISO/IEC 27002', gruppe: 'Audit und ISMS',
    text: 'Der Leitfaden zu den Maßnahmen des [[Anhang A der ISO 27001|Anhangs A]]: erklärt jede Maßnahme ausführlich. Nach ihr wird <b>nicht</b> zertifiziert – zertifiziert wird nach ISO/IEC 27001.',
    merk: 'Beliebte Verwechslung: 27001 = Anforderungen und Zertifizierung, 27002 = Erläuterungen.' },

  { key: 'Zertifizierung', gruppe: 'Audit und ISMS', alias: ['Akkreditierung', 'akkreditierte Stelle'],
    text: 'Die Bestätigung durch eine unabhängige, akkreditierte Stelle, dass das [[ISMS]] im festgelegten [[ISMS-Geltungsbereich|Geltungsbereich]] die Norm erfüllt. Gilt drei Jahre und wird durch [[Überwachungsaudit]]s gehalten.',
    bsp: 'Große Kunden und öffentliche Auftraggeber verlangen das Zertifikat als Zulassungsvoraussetzung.',
    merk: 'Ein Zertifikat ist eine Aussage über das <b>Managementsystem</b> zu einem Zeitpunkt – keine Garantie, dass nichts passiert.' },

  /* ================= Schwachstellen und Bewertung ================= */

  { key: 'Exploit', gruppe: 'Schwachstellen und Bewertung', alias: ['Exploit-Code', 'Ausnutzung'],
    text: 'Das Mittel, das eine [[Schwachstelle]] <b>tatsächlich ausnutzt</b> – meist ein Stück Code oder eine bestimmte Eingabe. Die Schwachstelle ist die offene Tür, der Exploit ist das Durchgehen.',
    bsp: 'Die Lücke ist eine fehlende Prüfung im Eingabefeld; der Exploit ist die Zeichenkette, mit der man sie auslöst.',
    merk: 'Schwachstelle = <b>Zustand</b>. Exploit = <b>Werkzeug/Vorgang</b>. Das Beschaffen und Verbreiten von Exploits kann unter [[§ 202a StGB|§ 202c StGB]] fallen.' },

  { key: 'Zero-Day', gruppe: 'Schwachstellen und Bewertung', alias: ['Zero-Day-Lücke', 'Zero Day', '0-Day'],
    text: 'Eine Schwachstelle, für die es noch <b>keinen Patch</b> gibt – entweder weil der Hersteller sie nicht kennt oder noch nicht reagiert hat. [[Patch-Management]] hilft hier nicht, nur Erkennung und Begrenzung.',
    merk: 'Gegen Zero-Days wirken Maßnahmen, die nicht von der konkreten Lücke abhängen: [[Netzwerksegmentierung]], wenig Rechte, [[Härtung]], Überwachung.' },

  { key: 'CVE', gruppe: 'Schwachstellen und Bewertung', alias: ['Common Vulnerabilities and Exposures', 'CVE-Nummer', 'CVE-ID'],
    text: 'Die eindeutige <b>Kennnummer</b> einer öffentlich bekannten Schwachstelle, nach dem Muster CVE-2024-12345. Sie bewertet nichts – sie benennt nur, damit alle Beteiligten über dieselbe Lücke reden.',
    bsp: 'Der [[Schwachstellenscan]] meldet CVE-2021-44228; Hersteller, Scanner und Bericht meinen damit nachweisbar dasselbe.',
    merk: 'CVE = <b>Name</b>. [[CVSS]] = <b>Note</b>. Eine CVE-Nummer sagt noch nicht, wie gefährlich es für uns ist.' },

  { key: 'CVSS', gruppe: 'Schwachstellen und Bewertung', alias: ['Common Vulnerability Scoring System', 'CVSS-Score', 'Base Score'],
    text: 'Standardisierte Bewertung einer Schwachstelle auf einer Skala von <b>0,0 bis 10,0</b>, abgeleitet aus Angriffsweg, nötigen Rechten, Benutzerinteraktion und Auswirkung auf [[Vertraulichkeit]], [[Integrität]] und [[Verfügbarkeit]]. Stufen: niedrig (0,1–3,9), mittel (4,0–6,9), hoch (7,0–8,9), kritisch (9,0–10,0).',
    bsp: 'CVSS 9,8 – über das Netz ohne Anmeldung auslösbar, mit vollem Zugriff als Folge.',
    merk: 'Der Basiswert gilt <b>allgemein</b>. Was die Lücke für Rampe 7 bedeutet, ergibt erst die Verrechnung mit dem [[Schutzbedarf]] des Systems – ein 9,8er auf einem abgeschalteten Testrechner ist kein Notfall.' },

  { key: 'OWASP Top 10', gruppe: 'Schwachstellen und Bewertung', alias: ['OWASP'],
    text: 'Die regelmäßig aktualisierte Liste der zehn häufigsten Sicherheitsrisiken in Webanwendungen – unter anderem fehlerhafte Zugriffskontrolle, [[SQL-Injection|Injection]] und unsichere Konfiguration. Übliche Prüfgrundlage für einen Web-Pentest.',
    merk: 'Wer gegen die OWASP Top 10 entwickelt, hat die große Mehrheit der real ausgenutzten Lücken abgedeckt.' },

  { key: 'SQL-Injection', gruppe: 'Schwachstellen und Bewertung', alias: ['SQLi', 'Injection'],
    text: 'Eine Eingabe wird ungeprüft in eine Datenbankabfrage eingesetzt, sodass der Angreifer die Abfrage selbst mitschreibt – und Daten auslesen, ändern oder löschen kann.',
    bsp: 'Statt einer Kundennummer gibt der Angreifer <code>1 OR 1=1</code> ein und erhält alle Datensätze.',
    merk: 'Gegenmittel ist nicht das Filtern verbotener Wörter, sondern <b>vorbereitete Anweisungen</b> mit Parametern. Findet man im [[Whitebox-Verfahren|Whitebox-Test]] zuverlässiger als von außen.' },

  { key: 'Cross-Site-Scripting', gruppe: 'Schwachstellen und Bewertung', alias: ['XSS'],
    text: 'Fremder Skriptcode landet in einer Seite und wird im Browser anderer Besucher ausgeführt – damit lassen sich Sitzungen übernehmen und Eingaben mitlesen.',
    bsp: 'Ein Kommentarfeld gibt eingetippten HTML-Code unverändert wieder aus.',
    merk: 'Ursache ist immer dieselbe: Eingaben werden nicht <b>maskiert</b>, bevor sie ausgegeben werden.' },

  { key: 'Härtung', gruppe: 'Schwachstellen und Bewertung', alias: ['Hardening', 'Systemhärtung', 'Grundhärtung'],
    text: 'Die Angriffsfläche verkleinern: nicht benötigte Dienste und Konten abschalten, Standardkennwörter ersetzen, Rechte beschneiden, sichere Voreinstellungen setzen, [[Patch-Management|Updates]] einspielen.',
    bsp: 'Auf dem Lagerserver läuft noch ein Webserver aus der Installation – abschalten kostet nichts und entfernt eine ganze Klasse von Lücken.',
    merk: 'Die wirksamste Maßnahme nach einem Pentest ist meistens Wegnehmen, nicht Hinzufügen.' },

  { key: 'Falsch-Positiv', gruppe: 'Schwachstellen und Bewertung', alias: ['False Positive', 'Falsch-Negativ', 'False Negative', 'Fehlalarm'],
    text: 'Ein <b>Falsch-Positiv</b> ist ein Fund, der sich bei der Prüfung als harmlos erweist – ein Fehlalarm. Ein <b>Falsch-Negativ</b> ist eine Lücke, die vorhanden ist und <b>nicht</b> gemeldet wurde.',
    bsp: 'Der Scanner meldet eine veraltete Version, weil die Versionskennung nicht aktualisiert wurde, der Patch aber eingespielt ist – Falsch-Positiv.',
    merk: 'Falsch-Positive kosten Zeit, Falsch-Negative kosten die Sicherheit. Deshalb bewertet ein Mensch die Scan-Ergebnisse nach.' },

  { key: 'Risikomatrix', gruppe: 'Schwachstellen und Bewertung', alias: ['Risikobewertung', 'Eintrittswahrscheinlichkeit', 'Schadenshöhe'],
    text: 'Die Darstellung des [[Risiko]]s aus <b>Eintrittswahrscheinlichkeit</b> und <b>Schadenshöhe</b> in einem Raster. Daraus folgt die Rangfolge, in der Maßnahmen abgearbeitet werden.',
    bsp: 'Hohe Wahrscheinlichkeit und hoher Schaden – sofort handeln. Geringe Wahrscheinlichkeit und geringer Schaden – akzeptieren und dokumentieren.',
    merk: 'Eine Schwachstelle mit [[CVSS]] 9,8 auf einem System ohne [[Schutzbedarf]] landet trotzdem unten in der Matrix.' },

  { key: 'Risikobehandlung', gruppe: 'Schwachstellen und Bewertung', alias: ['Risikostrategie', 'Risikoakzeptanz', 'Risikovermeidung', 'Risikoübertragung', 'Risikoreduzierung'],
    text: 'Die vier Wege, mit einem [[Risiko]] umzugehen: <b>vermeiden</b> (die Tätigkeit lassen), <b>reduzieren</b> (Maßnahmen ergreifen), <b>übertragen</b> (Versicherung, Dienstleistervertrag) oder <b>akzeptieren</b> (bewusst tragen – schriftlich, von der Leitung).',
    bsp: 'Reduzieren: Patch einspielen. Übertragen: Cyberversicherung. Akzeptieren: Restrisiko einer Altanlage, dokumentiert und von der Geschäftsführung unterschrieben.',
    merk: 'Akzeptieren ist eine zulässige Entscheidung – aber nur als <b>bewusste und dokumentierte</b>. Nichtstun ohne Entscheidung ist keine der vier.' },

  { key: 'Responsible Disclosure', gruppe: 'Schwachstellen und Bewertung', alias: ['Coordinated Disclosure', 'verantwortungsvolle Offenlegung'],
    text: 'Der geregelte Umgang mit einer gefundenen Lücke: erst den Betreiber informieren, ihm eine Frist zum Beheben lassen und erst danach veröffentlichen. Das Gegenstück ist die sofortige Veröffentlichung.',
    merk: 'Auch wer eine Lücke gut gemeint sucht, handelt ohne Erlaubnis <b>unbefugt</b> – vgl. [[§ 202a StGB]].' },

  { key: 'SIEM', gruppe: 'Schwachstellen und Bewertung', alias: ['Security Information and Event Management', 'Log-Management'],
    text: 'Ein System, das Protokolldaten aus Servern, Firewalls und Anwendungen zusammenführt, auswertet und bei auffälligen Mustern Alarm schlägt. Das Werkzeug des [[Blue Team]]s.',
    bsp: 'Zwanzig fehlgeschlagene Anmeldungen in einer Minute von einer unbekannten Adresse lösen eine Meldung aus.',
    merk: 'Ein SIEM beweist bei einem verdeckten Test, dass die Erkennung funktioniert – oder dass sie fehlt. Die Protokollierung von Beschäftigtendaten ist mitbestimmungspflichtig.' }

]);

/* Alle Eintraege ab der oben gesetzten Marke gehoeren zum Gebiet
   "tests". Die Eintraege der anderen Dateien bleiben unberuehrt. */
AUDIT.data.lexikon.slice(AUDIT.data._testsAb).forEach(function (e) {
  if (!e.gebiet) e.gebiet = 'tests';
});
delete AUDIT.data._testsAb;

/* Begriffe, die bereits in data/lexikon.js stehen und in diesem Gebiet
   genauso gebraucht werden. Sie werden hier NICHT neu angelegt – ein
   zweiter Eintrag mit demselben Schluessel wuerde den ersten im Index
   verdraengen –, sondern bekommen 'tests' in ihre Gebietsliste. */
[
  'Informationssicherheit', 'IT-Sicherheit', 'Datensicherheit',
  'BSI IT-Grundschutz', 'ISO/IEC 27001', 'ISMS', 'PDCA',
  'Risiko', 'Schwachstelle', 'Server', 'DMZ',
  'Schutzziele', 'Vertraulichkeit', 'Integrität', 'Verfügbarkeit',
  'Schutzbedarf', 'Maximumprinzip',
  'Patch-Management', 'Netzwerksegmentierung', 'Firewall', 'Backup',
  'Notfallkonzept', 'Vier-Augen-Prinzip', 'Need-to-know-Prinzip',
  'Social Engineering', 'Phishing',
  'TOMs', 'Verantwortlicher', 'Auftragsverarbeiter', 'AV-Vertrag',
  'Rechenschaftspflicht', 'Compliance', 'IT-Compliance',
  'IT-Sicherheitsbeauftragter', 'Datenschutzbeauftragter',
  'Anonymisierung', 'Pseudonymisierung', 'Zweckbindung'
].forEach(function (k) {
  var e = AUDIT.data.lexikonIndex[String(k).toLowerCase()];
  if (!e) { console.warn('lexikon-tests.js: kein Eintrag für', k); return; }
  var liste = Array.isArray(e.gebiet) ? e.gebiet : (e.gebiet ? [e.gebiet] : []);
  if (liste.indexOf('tests') < 0) liste.push('tests');
  e.gebiet = liste;
});

/* Index neu aufbauen, damit die neuen Begriffe und Alias greifen. */
AUDIT.data.lexikonIndizieren();
