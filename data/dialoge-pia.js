/* ===========================================================
   AUDIT – data/dialoge-pia.js
   Pia, Azubi im 2. Lehrjahr.
   Hat "Blackbox" in zwei Unterrichtsstunden unterschiedlich
   gehoert und ist durcheinander.

   Ton: Duzt dich, aufgeweckt und hartnaeckig. Sie hat
   mitgeschrieben und haelt dir ihre Notizen hin, wenn etwas
   nicht zusammenpasst. Keine Angst vor Fachbegriffen, aber
   sie will wissen, was sie bedeuten.

   Hier erklaerst DU. Die Fragen pruefen nicht Wissen allein,
   sondern die Auswahl der richtigen Erklaerung.

   Kernstueck ist pia-01: die ausdrueckliche Abgrenzung der
   beiden Blackbox-Bedeutungen. Dazu Schwachstelle und
   Exploit, CVE und CVSS, und ob das alles legal ist.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   pia-01 – Blackbox hiess zweimal was anderes
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'pia-01',
  kontakt: 'pia',
  titel: 'Blackbox hieß zweimal was anderes',
  thema: 'Box-Verfahren',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', text: 'Du, ich glaube, in meinem Heft steht ein Fehler. Oder in der Schule. Pass auf.' },
    { typ: 'nachricht', text: 'Dienstag, Softwaretechnik: „Blackbox-Test heißt, die Testfälle werden aus der Spezifikation abgeleitet."<br>Donnerstag, IT-Sicherheit: „Blackbox-Pentest heißt, der Tester bekommt keine Informationen."<br>Das ist doch nicht dasselbe?! 😩' },

    { typ: 'frage', text: 'Was antwortest du ihr?',
      optionen: [
        { text: 'Beides ist richtig – es sind zwei verschiedene Fachgebiete, die dasselbe Wort für zwei verschiedene Dinge benutzen', richtig: true,
          antwort: 'Genau das ist die Erklärung, und sie ist beruhigend: Kein Fehler im Heft. Im [[Softwaretest]] beschreibt [[Blackbox-Verfahren|Blackbox]], <b>woraus die Testfälle abgeleitet</b> werden. Im [[Penetrationstest]] beschreibt es, <b>was der Tester vorher weiß</b>. Gemeinsam ist nur das Bild: Man schaut nicht hinein.' },
        { text: 'Der Donnerstag war falsch – im Pentest heißt es genauso wie im Softwaretest',
          antwort: 'Dann hättest du Pia unnötig verunsichert, und sie hätte eine Prüfungsfrage falsch beantwortet. Beide Lehrkräfte haben recht; die Wörter sind in beiden Gebieten etabliert.' },
        { text: 'Das sind nur verschiedene Wörter für dasselbe – nicht hineinschauen ist nicht hineinschauen',
          antwort: 'Das Bild ist gleich, die Aussage nicht. Ein Entwickler, der einen Blackbox-Test schreibt, kennt seinen eigenen Code natürlich – er leitet die Testfälle nur bewusst nicht daraus ab. Ein Blackbox-Pentester <b>weiß wirklich nichts</b>.' }
      ] },

    { typ: 'nachricht', text: 'Okay. Aber wie merke ich mir, welche Bedeutung gerade gemeint ist? In der Prüfung steht doch nicht dabei: „Achtung, jetzt Softwaretest".' },

    { typ: 'frage', text: 'Welchen Tipp gibst du ihr?',
      optionen: [
        { text: 'Zuerst fragen: Geht es um Testfälle für ein Programm oder um einen Angriff auf Systeme? Daran hängt die Bedeutung', richtig: true,
          antwort: 'Sehr guter Tipp, weil er aus dem Aufgabentext selbst kommt. Steht dort „Äquivalenzklassen", „Testfall", „Abdeckung"? Dann Softwaretest. Steht dort „Scope", „Angreifer", „Schwachstelle"? Dann Pentest. Das Umfeld verrät die Lesart immer.' },
        { text: 'Immer die Pentest-Bedeutung nehmen, die ist häufiger',
          antwort: 'Eine Münze werfen hilft nicht. In einer Aufgabe zu [[Äquivalenzklassenbildung|Äquivalenzklassen]] und [[Grenzwertanalyse]] wäre die Pentest-Bedeutung glatt daneben.' },
        { text: 'Beide Bedeutungen in die Antwort schreiben, dann ist eine richtig',
          antwort: 'Das wirkt wie Unsicherheit und kostet eher Punkte. Wer beide Lesarten <b>benennen und zuordnen</b> kann, zeigt mehr – aber zugeordnet, nicht nebeneinandergestellt.' }
      ] },

    { typ: 'karte', titel: 'Die Verfahren im Pentest', quelle: 'boxverfahren' },
    { typ: 'karte', titel: 'Dieselben Wörter im Softwaretest', quelle: 'testentwurf' },

    { typ: 'nachricht', text: 'Ah, jetzt sehe ich es. In der zweiten Tabelle steht bei „Äquivalenzklassen" Blackbox und bei „Zweigabdeckung" Whitebox. Da geht es gar nicht um Wissen, sondern um... den Ausgangspunkt?' },

    { typ: 'frage', text: 'Wie bestätigst du das?',
      optionen: [
        { text: 'Genau – Blackbox geht von der Spezifikation aus, Whitebox vom Quelltext. Beides schreibt derselbe Entwickler', richtig: true,
          antwort: 'Richtig erklärt. Deniz schreibt beide Arten von Testfällen: Für die [[Äquivalenzklassenbildung]] liest er das Pflichtenheft, für die [[Zweigabdeckung]] schaut er in seinen Code. Zwei Ausgangspunkte, ein Mensch – deshalb kann „Blackbox" hier nichts über Vorwissen sagen.' },
        { text: 'Fast – es geht darum, ob der Tester der Entwickler ist oder ein anderer',
          antwort: 'Wer testet, ist eine eigene Frage und hängt an der [[Teststufen|Teststufe]]: unten der Entwickler, oben der Kunde. Das Entwurfsverfahren sagt nur, <b>woraus</b> die Testfälle kommen.' },
        { text: 'Nein, es geht um automatisiert gegen manuell',
          antwort: 'Das ist noch eine andere Achse. Beide Arten von Testfällen lassen sich automatisieren – [[Testautomatisierung]] hat mit dem Entwurfsverfahren nichts zu tun.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Begriffe gehören zur Softwaretest-Lesart von Blackbox und Whitebox? (mehrere)',
      optionen: [
        { text: 'Äquivalenzklassen', richtig: true },
        { text: 'Grenzwertanalyse', richtig: true },
        { text: 'Zweigabdeckung', richtig: true },
        { text: 'Scope und Abbruchkriterien' },
        { text: 'Informationsstand des Testers' },
        { text: 'Reconnaissance' }
      ],
      antwortRichtig: 'Vollständig. Die ersten drei sind Entwurfsverfahren für [[Testfall|Testfälle]], die letzten drei gehören zum [[Penetrationstest]]. Wenn in einer Aufgabe eines dieser Wörter vorkommt, weißt du sofort, welche Lesart gemeint ist.',
      antwortFalsch: 'Frag dich bei jedem Wort: Könnte das in einem Testprotokoll für ein Programm stehen – oder in einem Pentest-Auftrag? Drei gehören ins eine, drei ins andere.' },

    { typ: 'frage', text: 'Pia fragt noch: „Und Greybox – gibt es das auch zweimal?"',
      optionen: [
        { text: 'Ja, aber im Pentest ist es der Normalfall, im Softwaretest eher ein Randbegriff', richtig: true,
          antwort: 'Gut unterschieden. Im [[Penetrationstest]] ist [[Greybox-Verfahren|Greybox]] die übliche Variante: Netzbereiche plus ein normales Benutzerkonto. Im [[Softwaretest]] benutzt man das Wort seltener – gemeint ist dann, dass Testfälle aus der Spezifikation kommen, der Tester die Struktur aber kennt und gezielt Lücken ergänzt.' },
        { text: 'Nein, Greybox gibt es nur im Pentest',
          antwort: 'Fast richtig in der Betonung, aber zu absolut. Der Begriff kommt im Softwaretest vor, nur ist er dort nicht der Standard – prüfungsrelevant ist vor allem die Pentest-Bedeutung.' },
        { text: 'Ja, und beide Male bedeutet es „halbautomatisch"',
          antwort: '„Halbautomatisch" ist keine der Bedeutungen. Grau steht in beiden Gebieten für <b>teilweise Kenntnis</b>, nicht für den Grad der Automatisierung.' }
      ] },

    { typ: 'merk', text: '<b>Ein Wort, zwei Fragen.</b> [[Softwaretest]]: Woraus kommen die Testfälle? [[Blackbox-Verfahren|Blackbox]] = aus der <b>Spezifikation</b> ([[Äquivalenzklassenbildung|Äquivalenzklassen]], [[Grenzwertanalyse]]), [[Whitebox-Verfahren|Whitebox]] = aus der <b>Struktur</b> ([[Zweigabdeckung|Abdeckung]]). [[Penetrationstest]]: Was weiß der Tester? Blackbox = <b>nichts</b>, [[Greybox-Verfahren|Greybox]] = <b>teilweise</b>, Whitebox = <b>alles</b>.' },

    { typ: 'nachricht', text: 'Ich schreibe das groß oben auf die Seite. Danke! Dann habe ich noch zwei Wörter, die ich durcheinanderwerfe...' }
  ]
});

/* ---------------------------------------------------------------
   pia-02 – Schwachstelle oder Exploit
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'pia-02',
  kontakt: 'pia',
  titel: 'Schwachstelle oder Exploit?',
  thema: 'Schwachstellen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Yasmin hat im Bericht geschrieben: „Schwachstelle im Suchfeld, Exploit beigefügt." Ich dachte, das ist dasselbe. Was ist der Unterschied?' },

    { typ: 'frage', text: 'Wie erklärst du es ihr am besten?',
      optionen: [
        { text: 'Die Schwachstelle ist die offene Tür, der Exploit ist das Durchgehen – ein Zustand gegen ein Mittel', richtig: true,
          antwort: 'Sehr gutes Bild, weil es beides in einem Satz trennt. Die [[Schwachstelle]] ist der <b>Zustand</b>: die fehlende Prüfung im Suchfeld. Der [[Exploit]] ist das <b>Mittel</b>, mit dem man ihn ausnutzt – bei Yasmin die Zeichenkette, die die Lücke auslöst.' },
        { text: 'Die Schwachstelle ist klein, der Exploit ist groß',
          antwort: 'Das ist keine Unterscheidung, sondern eine Größenangabe – und sie passt auch nicht: Eine einzige fehlende Prüfung kann die ganze Datenbank öffnen.' },
        { text: 'Schwachstelle ist der deutsche, Exploit der englische Begriff',
          antwort: 'Verständlich, aber falsch – das deutsche Wort für Schwachstelle ist „Sicherheitslücke" oder „Vulnerability" auf Englisch. „Exploit" bezeichnet etwas anderes, nämlich das Ausnutzen.' }
      ] },

    { typ: 'nachricht', text: 'Verstanden. Und wenn eine Lücke da ist, aber niemand hat einen Exploit – ist das dann harmlos?' },

    { typ: 'frage', text: 'Was antwortest du?',
      optionen: [
        { text: 'Nein – die Lücke bleibt und muss bewertet werden. Dass heute kein Exploit bekannt ist, ist eine Momentaufnahme', richtig: true,
          antwort: 'Richtig, und das ist eine wichtige Unterscheidung für die [[Risikomatrix|Bewertung]]: Ob ein Exploit existiert, beeinflusst die <b>Eintrittswahrscheinlichkeit</b>, nicht die Schadenshöhe. Morgen kann einer veröffentlicht werden – dann steigt dieselbe Lücke in der Bewertung, ohne dass sich im System etwas geändert hat.' },
        { text: 'Ja, ohne Exploit kann niemand etwas machen',
          antwort: 'Nur solange niemand einen schreibt. Für viele veröffentlichte Lücken erscheint der Exploit innerhalb von Tagen – darauf zu warten ist keine Strategie.' },
        { text: 'Ja, man muss erst patchen, wenn ein Exploit da ist',
          antwort: 'Dann patcht man im Wettlauf mit dem Angreifer. [[Patch-Management]] arbeitet nach Risiko, nicht nach Exploit-Verfügbarkeit.' }
      ] },

    { typ: 'nachricht', text: 'Noch eins: Yasmin hat sich den Exploit nicht selbst ausgedacht, sie hat ihn irgendwo heruntergeladen. Darf sie das überhaupt?' },

    { typ: 'frage', text: 'Wie erklärst du die Rechtslage?',
      optionen: [
        { text: 'Mit Auftrag ja – das Beschaffen von Angriffswerkzeugen ist nach § 202c StGB strafbar, wenn es zur Vorbereitung einer Straftat dient', richtig: true, norm: '§ 202c StGB',
          antwort: 'Genau richtig eingeordnet. [[§ 202a StGB|§ 202c StGB]], der „Hackerparagraf", erfasst das Vorbereiten – Beschaffen und Verbreiten von Passwörtern und Angriffsprogrammen. Entscheidend ist der <b>Zweck</b>: Yasmin handelt mit [[Pentest-Beauftragung|schriftlichem Auftrag]] zur Prüfung eigener Systeme, nicht zur Vorbereitung einer Straftat.' },
        { text: 'Immer ja, Werkzeuge sind nur Werkzeuge',
          antwort: 'So einfach ist es nicht – genau deshalb wurde § 202c StGB damals heftig diskutiert. Entlastend ist nicht das Werkzeug an sich, sondern der legitime Zweck und die Beauftragung.' },
        { text: 'Immer nein, solche Programme sind in Deutschland verboten',
          antwort: 'Ein pauschales Verbot gibt es nicht – sonst könnte niemand Sicherheitsprüfungen durchführen und auch nicht ausbilden. Strafbar ist das Vorbereiten einer Tat, nicht das Vorhandensein eines Werkzeugs.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört zur Beschreibung einer Schwachstelle in einem Bericht? (mehrere)',
      optionen: [
        { text: 'Welches System und welche Stelle betroffen ist', richtig: true },
        { text: 'Wie der Angriffsweg nachvollziehbar aussieht', richtig: true },
        { text: 'Welche Auswirkung ein erfolgreicher Angriff hätte', richtig: true },
        { text: 'Eine Bewertung – zum Beispiel nach CVSS', richtig: true },
        { text: 'Eine konkrete Empfehlung zur Behebung', richtig: true },
        { text: 'Der Name des Mitarbeiters, der den Fehler gemacht hat' }
      ],
      antwortRichtig: 'Vollständig. Der letzte Punkt gehört ausdrücklich <b>nicht</b> hinein: Ein [[Pentest-Bericht]] ist keine Schuldzuweisung. Wer Namen nennt, bekommt beim nächsten Mal keine Hinweise mehr – und die Ursache liegt fast immer im Prozess, nicht bei einer Person. Genau das ist auch der Unterschied zwischen Korrektur und [[Korrekturmaßnahme]].',
      antwortFalsch: 'Fünf Angaben helfen beim Beheben. Eine hilft nur beim Schuldigsuchen – und schadet dem nächsten Test.' },

    { typ: 'merk', text: '<b>[[Schwachstelle]] = Zustand</b> (die offene Tür). <b>[[Exploit]] = Mittel oder Vorgang</b> (das Durchgehen). Ob ein Exploit existiert, beeinflusst die <b>Eintrittswahrscheinlichkeit</b>, nicht die Schadenshöhe. Das Beschaffen von Angriffswerkzeugen regelt [[§ 202a StGB|§ 202c StGB]] – entscheidend ist der Zweck.' },

    { typ: 'nachricht', text: 'Klar. Dann die letzten zwei Abkürzungen aus dem Bericht: CVE und CVSS. Die sehen fast gleich aus.' }
  ]
});

/* ---------------------------------------------------------------
   pia-03 – CVE und CVSS
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'pia-03',
  kontakt: 'pia',
  titel: 'CVE und CVSS – Name und Note',
  thema: 'Bewertung',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Im Bericht steht: „CVE-2024-31982, CVSS 9,8 (kritisch)". Zwei Abkürzungen mit C-V, die sich um einen Buchstaben unterscheiden. Was ist was?' },

    { typ: 'frage', text: 'Wie erklärst du den Unterschied in einem Satz?',
      optionen: [
        { text: 'CVE ist der Name, CVSS ist die Note', richtig: true,
          antwort: 'Das ist die Erklärung, die hängenbleibt. [[CVE]] ist eine eindeutige <b>Kennnummer</b> für eine öffentlich bekannte Lücke – damit Hersteller, Scanner und Bericht nachweisbar dasselbe meinen. [[CVSS]] ist die <b>Bewertung</b> auf einer Skala von 0,0 bis 10,0.' },
        { text: 'CVE ist für Software, CVSS für Hardware',
          antwort: 'Beide gelten für beides. Der Unterschied ist <b>benennen gegen bewerten</b>, nicht die Art des Produkts.' },
        { text: 'CVE ist älter, CVSS hat es ersetzt',
          antwort: 'Sie ersetzen sich nicht, sie ergänzen sich: Fast jede CVE-Nummer wird mit einem CVSS-Wert veröffentlicht. Name und Note gehören zusammen.' }
      ] },

    { typ: 'frage', text: 'Pia fragt: „Was heißt die 9,8 genau?"',
      optionen: [
        { text: 'Die Skala geht von 0,0 bis 10,0 – ab 9,0 gilt sie als kritisch, 7,0 bis 8,9 als hoch', richtig: true,
          antwort: 'Richtig, die vier Stufen lohnen sich zu merken: niedrig 0,1–3,9 · mittel 4,0–6,9 · hoch 7,0–8,9 · kritisch 9,0–10,0. Ein Wert um 9,8 bedeutet meist: über das Netz auslösbar, <b>ohne Anmeldung</b>, ohne Mitwirkung des Nutzers, mit vollem Zugriff als Folge.' },
        { text: 'Es sind Prozent – 98 Prozent Wahrscheinlichkeit eines Angriffs',
          antwort: 'Mit Wahrscheinlichkeit hat der Wert nichts zu tun. Er beschreibt, wie <b>leicht auslösbar</b> und wie <b>folgenschwer</b> die Lücke technisch ist.' },
        { text: 'Es ist eine Rangnummer – die 9,8-schlimmste bekannte Lücke',
          antwort: 'Es ist eine Punktzahl, kein Rang. Viele Lücken können denselben Wert haben.' }
      ] },

    { typ: 'nachricht', text: 'Dann ist eine 9,8 immer ein Notfall, oder? Frau Brehm hat gesagt, bei einem der Funde mit 9,8 müssen wir nichts tun. Das verstehe ich nicht.' },

    { typ: 'frage', text: 'Wie löst du ihren Widerspruch auf?',
      optionen: [
        { text: 'Der CVSS-Basiswert gilt allgemein – was die Lücke für uns bedeutet, ergibt erst die Verrechnung mit dem Schutzbedarf des Systems', richtig: true,
          antwort: 'Genau. Der Basiswert kennt unser Haus nicht. Bei Frau Brehm saß die 9,8 auf einem <b>abgeschalteten Testrechner</b> ohne Daten – in der [[Risikomatrix]] landet sie unten. Eine 6,5 auf dem Lagerserver ist das dringendere Problem. [[Risiko]] = Wahrscheinlichkeit × Schaden, nicht CVSS allein.' },
        { text: 'Frau Brehm hat sich geirrt, 9,8 muss immer sofort behoben werden',
          antwort: 'Dann würdest du neun Tage Arbeitszeit für einen Rechner einsetzen, der aus ist. Die Priorisierung nach der nackten Zahl ist bequem und führt an der Sache vorbei.' },
        { text: 'CVSS-Werte sind ungenau, man sollte sie ignorieren',
          antwort: 'Zu weit. Sie sind eine gute, standardisierte <b>Ausgangsgröße</b> – man muss sie nur mit dem [[Schutzbedarf]] gewichten, statt sie für das Endergebnis zu nehmen.' }
      ] },

    { typ: 'mehrfach', text: 'Was fließt in den CVSS-Basiswert ein? (mehrere)',
      optionen: [
        { text: 'Ob die Lücke über das Netz oder nur lokal auslösbar ist', richtig: true },
        { text: 'Welche Rechte ein Angreifer dafür braucht', richtig: true },
        { text: 'Ob ein Nutzer mitwirken muss, etwa durch einen Klick', richtig: true },
        { text: 'Die Auswirkung auf Vertraulichkeit, Integrität und Verfügbarkeit', richtig: true },
        { text: 'Wie wichtig das betroffene System für unsere Firma ist' },
        { text: 'Wie viele Unternehmen die Software einsetzen' }
      ],
      antwortRichtig: 'Vollständig – und die beiden Ausreißer sind genau der Punkt: Der Basiswert ist <b>allgemein</b> und weiß nichts über unser Haus. Die Bedeutung des Systems bringst du selbst ein, über den [[Schutzbedarf]]. Und die Verbreitung der Software betrifft den Hersteller, nicht die Gefährlichkeit der Lücke.',
      antwortFalsch: 'Vier Kriterien beschreiben die Lücke selbst. Zwei beschreiben die Umgebung – und die kennt ein allgemeiner Wert nicht.' },

    { typ: 'merk', text: '<b>[[CVE]] = Name</b> (Kennnummer, z. B. CVE-2024-31982). <b>[[CVSS]] = Note</b> (0,0–10,0: niedrig / mittel / hoch ab 7,0 / kritisch ab 9,0). Der Basiswert beschreibt die <b>Lücke</b>, nicht unser Haus – das [[Risiko]] ergibt sich erst aus CVSS <b>mal</b> [[Schutzbedarf]] des betroffenen Systems.' },

    { typ: 'nachricht', text: 'Gut. Letzte Frage, und die ist eher eine Gewissensfrage.' }
  ]
});

/* ---------------------------------------------------------------
   pia-04 – Hacken die jetzt wirklich bei uns
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'pia-04',
  kontakt: 'pia',
  titel: 'Hacken die jetzt wirklich bei uns?',
  thema: 'Pentest in der Praxis',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Also: Wir bezahlen jemanden, der bei uns einbricht. Niemand im Lager weiß davon. Und das ist alles in Ordnung? Irgendwie fühlt sich das falsch an. 😬' },

    { typ: 'frage', text: 'Was antwortest du ihr?',
      optionen: [
        { text: 'Ja – weil es beauftragt, abgegrenzt und schriftlich freigegeben ist. Genau das unterscheidet den Test vom Angriff', richtig: true,
          antwort: 'Richtig, und genau an diesen drei Punkten hängt alles. Die [[Pentest-Beauftragung]] macht das Handeln <b>befugt</b>, der [[Scope]] grenzt es ab, die [[Abbruchkriterium|Abbruchkriterien]] begrenzen den Schaden. Ohne diese drei wäre es derselbe Vorgang – und dann [[§ 202a StGB|§ 202a StGB]].' },
        { text: 'Ja, weil Yasmin nichts kaputt macht',
          antwort: 'Doch, sie darf durchaus etwas auslösen – deshalb wird nachts getestet und deshalb gibt es Abbruchkriterien. Was den Test erlaubt macht, ist nicht seine Harmlosigkeit, sondern die <b>Erlaubnis</b>.' },
        { text: 'Ja, weil sie eine Zertifizierung als Pentesterin hat',
          antwort: 'Eine Qualifikation ist ein gutes Auswahlkriterium, aber keine Rechtsgrundlage. Ohne Auftrag wäre auch die zertifizierte Testerin unbefugt unterwegs.' }
      ] },

    { typ: 'nachricht', text: 'Und warum weiß das Lager nichts davon? Das wäre doch fairer.' },

    { typ: 'frage', text: 'Wie erklärst du das?',
      optionen: [
        { text: 'Weil sonst nicht mehr geprüft wird, ob ein Angriff auffällt – eingeweihte Leute sehen genauer hin als sonst', richtig: true,
          antwort: 'Genau das ist der Zweck. Geprüft wird nicht nur die Technik, sondern der <b>Prozess</b>: Fällt es jemandem auf, wird gemeldet, reagiert jemand? Wer Bescheid weiß, schaut anders hin – dann misst man die Aufmerksamkeit der Übung, nicht die des Alltags. Wichtig ist, dass ein kleiner Kreis eingeweiht ist: Geschäftsführung, IT-Leitung und ein erreichbarer Ansprechpartner.' },
        { text: 'Damit niemand die Lücken vorher heimlich schließt',
          antwort: 'Das wäre ein Nebeneffekt, aber kein guter Grund – geschlossene Lücken sind ja das Ziel. Der eigentliche Grund ist die Prüfung der <b>Erkennung</b>.' },
        { text: 'Aus Datenschutzgründen darf man es nicht ankündigen',
          antwort: 'Umgekehrt: Wenn Beschäftigtendaten berührt werden – etwa durch Protokolle oder einen Phishing-Teil – sind Information und Beteiligung des Betriebsrats eher <b>geboten</b>. Die Verdeckung betrifft den Zeitpunkt, nicht die Grundsatzinformation.' }
      ] },

    { typ: 'nachricht', text: 'Yasmin hat von „Red Team" und „Blue Team" geredet. Sind das Mannschaften?' },

    { typ: 'frage', text: 'Wie ordnest du die Begriffe?',
      optionen: [
        { text: 'Red Team greift an, Blue Team verteidigt – und Purple Team ist nicht eine dritte Mannschaft, sondern ihre Zusammenarbeit', richtig: true,
          antwort: 'Genau richtig. [[Red Team]] ist die angreifende Seite, [[Blue Team]] die verteidigende – unsere IT mit [[SIEM]] und Alarmierung. [[Purple Team]] ist keine eigene Truppe: Es ist die geregelte Nachbesprechung, in der das Red Team seinen Weg zeigt und das Blue Team daraus Erkennungsregeln baut. Danach wird derselbe Angriff wiederholt.' },
        { text: 'Red Team ist extern, Blue Team ist intern',
          antwort: 'Meistens ist es so verteilt, aber das ist nicht die Definition. Ein Unternehmen kann ein eigenes Red Team haben – entscheidend ist die <b>Rolle</b>, nicht die Herkunft.' },
        { text: 'Purple Team ist die Mischung aus internen und externen Testern',
          antwort: 'Die Farbe entsteht aus Rot und Blau, meint aber nicht gemischte Herkunft, sondern <b>gemeinsames Lernen</b> – angreifen und verteidigen im Austausch.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Unterschiede zwischen Pentest und Audit kannst du Pia nennen? (mehrere)',
      optionen: [
        { text: 'Der Pentest prüft Technik, das Audit prüft Regelungen und Nachweise', richtig: true },
        { text: 'Der Pentest fragt „hält es?", das Audit fragt „ist es geregelt, gelebt und belegt?"', richtig: true },
        { text: 'Nur das Audit kann zu einem Zertifikat führen', richtig: true },
        { text: 'Der Pentest-Bericht kann im Audit als Nachweis dienen', richtig: true },
        { text: 'Beide werden von derselben Person durchgeführt' },
        { text: 'Ein bestandener Pentest ersetzt das Audit' }
      ],
      antwortRichtig: 'Vollständig. Die beiden ergänzen sich: Herr Lindemann fragt, ob eine technische Überprüfung <b>vorgeschrieben und belegt</b> ist – Yasmins [[Pentest-Bericht]] samt [[Nachtest]] ist dafür ein guter [[Auditnachweis]]. Ersetzen kann keiner den anderen, und die Rollen sind getrennt, damit niemand die eigene Arbeit prüft.',
      antwortFalsch: 'Zwei Optionen vermischen die beiden Prüfungen. Denk an die beiden Leitfragen: <b>hält es</b> gegen <b>ist es geregelt und belegt</b>.' },

    { typ: 'merk', text: '<b>Was den Test vom Angriff unterscheidet:</b> [[Pentest-Beauftragung|Auftrag]], [[Scope]] und [[Abbruchkriterium|Abbruchkriterien]] – nicht die Technik. Verdeckt getestet wird, um die <b>Erkennung</b> zu prüfen; ein kleiner Kreis ist immer eingeweiht. [[Red Team]] greift an, [[Blue Team]] verteidigt, [[Purple Team]] ist deren Zusammenarbeit. [[Penetrationstest]] = hält es? [[Audit]] = ist es geregelt, gelebt, belegt?' },

    { typ: 'nachricht', text: 'Okay, jetzt passt es zusammen. Ich bin nächste Woche im Gruppenchat dabei, wenn der Test läuft – mal sehen, ob ich was merke. 🔍' }
  ]
});
