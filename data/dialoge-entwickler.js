/* ===========================================================
   AUDIT – data/dialoge-entwickler.js
   Deniz Kaymak, Anwendungsentwicklung.
   Schreibt die Lagersoftware und ihre Tests.

   Ton: Duzt dich, kollegial und konkret. Rechnet Testfaelle
   vor und arbeitet an einem durchgehenden Beispiel aus der
   eigenen Software (Mengenfeld 1 bis 999). Er legt Wert
   darauf, dass "Blackbox" bei ihm etwas anderes bedeutet als
   bei Yasmin.

   Kernthemen: Blackbox und Whitebox als Testentwurfsverfahren,
   Aequivalenzklassen und Grenzwertanalyse, Anweisungs-, Zweig-
   und Pfadabdeckung, die vier Teststufen, Regressionstest und
   Testautomatisierung.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   ent-01 – Bei mir heisst Blackbox etwas anderes
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ent-01',
  kontakt: 'entwickler',
  titel: 'Bei mir heißt Blackbox etwas anderes',
  thema: 'Box-Verfahren',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Hey. Ich habe mitbekommen, dass du mit Yasmin über Blackbox und Whitebox gesprochen hast. Pass auf, bei mir bedeuten die Wörter etwas anderes – und genau das ist eine beliebte Fangfrage.' },
    { typ: 'nachricht', text: 'Bei ihr beschreibt Blackbox, <b>was der Tester weiß</b>. Bei mir beschreibt es, <b>woraus die Testfälle abgeleitet werden</b>. Gleiches Wort, andere Frage.' },

    { typ: 'frage', text: 'Was heißt „Blackbox" als Testentwurfsverfahren im Softwaretest?',
      optionen: [
        { text: 'Die Testfälle werden allein aus der Spezifikation abgeleitet – was soll bei welcher Eingabe herauskommen', richtig: true,
          antwort: 'Genau. [[Blackbox-Verfahren|Blackbox]] heißt hier: Ich schaue nicht in den Code, sondern ins Pflichtenheft. Steht dort „Menge zwischen 1 und 999", baue ich daraus Testfälle – mit [[Äquivalenzklassenbildung]] und [[Grenzwertanalyse]].' },
        { text: 'Der Tester weiß nichts über das System',
          antwort: 'Das ist die <b>Pentest-Lesart</b> von Yasmin. Im Softwaretest kenne ich mein eigenes Programm natürlich – ich leite die Testfälle nur bewusst nicht aus seiner Struktur ab, sondern aus der Spezifikation.' },
        { text: 'Der Test läuft automatisiert ohne Eingriff',
          antwort: 'Das ist [[Testautomatisierung]] und eine ganz andere Achse. Ein Blackbox-Testfall kann von Hand ausgeführt werden, ein Whitebox-Testfall automatisiert – oder umgekehrt.' }
      ] },

    { typ: 'frage', text: 'Und „Whitebox" als Testentwurfsverfahren?',
      optionen: [
        { text: 'Die Testfälle werden aus der inneren Struktur abgeleitet – aus Verzweigungen, Schleifen und Pfaden des Codes', richtig: true,
          antwort: 'Richtig. [[Whitebox-Verfahren|Whitebox]] heißt strukturorientiert: Ich sehe ein <code>if</code> und baue je einen Testfall für jeden Zweig. Gemessen wird das über die [[Testabdeckung]] – [[Anweisungsabdeckung|C0]], [[Zweigabdeckung|C1]], [[Pfadabdeckung]].' },
        { text: 'Der Tester bekommt alle Unterlagen und Zugänge',
          antwort: 'Wieder die Pentest-Lesart. Im Softwaretest geht es nicht um Unterlagen, sondern darum, <b>wogegen</b> ich meine Testfälle entwerfe: Spezifikation oder Code.' },
        { text: 'Es wird jede mögliche Eingabe getestet',
          antwort: 'Das wäre ein vollständiger Test, und der ist praktisch unmöglich – allein ein Zahlenfeld hat Milliarden Werte. Genau deshalb braucht man Entwurfsverfahren.' }
      ] },

    { typ: 'karte', titel: 'Entwurfsverfahren für Testfälle', quelle: 'testentwurf' },

    { typ: 'nachricht', text: 'Jetzt der Punkt, an dem die zwei Lesarten sich tatsächlich berühren. Ich zeige dir einen Fehler, den nur eine der beiden Seiten findet.' },

    { typ: 'frage', text: 'In meinem Code steht eine Abfrage, die bei <b>keiner</b> Eingabe jemals wahr wird – toter Code mit einem Fehler darin. Welches Verfahren findet das?',
      optionen: [
        { text: 'Whitebox – beim Messen der Abdeckung fällt auf, dass dieser Zweig nie durchlaufen wird', richtig: true,
          antwort: 'Genau. Das ist die Stärke von [[Whitebox-Verfahren|Whitebox]]: Sie findet Code, der <b>nicht erreichbar</b> ist, und Zweige, die nie laufen. Ein Blackbox-Test kann das prinzipiell nicht – aus der Spezifikation geht nicht hervor, dass es diesen Zweig überhaupt gibt.' },
        { text: 'Blackbox – wenn ich alle Äquivalenzklassen abdecke, komme ich auch dort vorbei',
          antwort: 'Eben nicht. Die Klassen leiten sich aus der Spezifikation ab, und dort steht dieser Zweig nicht. Was kein Eingabewert erreicht, erreicht auch kein spezifikationsbasierter Testfall.' },
        { text: 'Keines von beiden, dafür braucht es einen Lasttest',
          antwort: 'Ein [[Lasttest]] prüft Mengen und Antwortzeiten, nicht die Erreichbarkeit von Code. Toter Code fällt bei der Messung der [[Testabdeckung]] auf – oder im [[statischer Test|Code-Review]].' }
      ] },

    { typ: 'frage', text: 'Und umgekehrt: Im Pflichtenheft steht eine Anforderung, die ich schlicht nie programmiert habe. Welches Verfahren findet das?',
      optionen: [
        { text: 'Blackbox – die Testfälle kommen aus der Spezifikation, also fällt die fehlende Funktion auf', richtig: true,
          antwort: 'Richtig, und das ist die Kehrseite. [[Whitebox-Verfahren|Whitebox]] prüft nur, was <b>da ist</b> – 100 % Abdeckung auf einem Programm, dem eine Funktion fehlt, bleiben 100 %. Vergessene Anforderungen findet nur die [[Blackbox-Verfahren|Blackbox-Sicht]].' },
        { text: 'Whitebox, bei 100 Prozent Abdeckung fällt die Lücke auf',
          antwort: 'Abdeckung zählt die <b>vorhandenen</b> Zeilen. Was nie geschrieben wurde, hat keine Zeile und fehlt daher auch in keiner Statistik. Ein beliebter Denkfehler.' },
        { text: 'Beide gleich gut',
          antwort: 'Nein, und das ist gerade der Grund, warum man kombiniert. Blackbox findet fehlende Funktionen, Whitebox findet toten und falsch verzweigten Code.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Aussagen zu Blackbox und Whitebox im Softwaretest stimmen? (mehrere)',
      optionen: [
        { text: 'Blackbox leitet Testfälle aus der Spezifikation ab', richtig: true },
        { text: 'Whitebox leitet Testfälle aus der inneren Struktur ab', richtig: true },
        { text: 'Nur Blackbox findet vergessene Anforderungen', richtig: true },
        { text: 'Nur Whitebox findet toten und unerreichbaren Code', richtig: true },
        { text: 'Whitebox ist immer besser, weil es mehr Informationen nutzt' },
        { text: 'Blackbox bedeutet, dass der Tester das Programm nicht kennen darf' }
      ],
      antwortRichtig: 'Vollständig – und damit hast du den Kern: Die beiden Verfahren haben <b>verschiedene blinde Flecken</b> und werden deshalb kombiniert, nicht gegeneinander abgewogen. Dass der Tester das Programm nicht kennen darf, ist die Pentest-Lesart und gilt hier nicht.',
      antwortFalsch: 'Zwei Aussagen sind Wertungen oder stammen aus der Pentest-Lesart. Frag dich bei jeder: Sagt sie etwas darüber, <b>woraus die Testfälle abgeleitet</b> werden?' },

    { typ: 'merk', text: '<b>Zwei Lesarten, ein Wort.</b> [[Softwaretest]]: Blackbox = Testfälle aus der <b>Spezifikation</b>, Whitebox = Testfälle aus der <b>Struktur</b>. [[Penetrationstest]]: Blackbox = Tester weiß <b>nichts</b>, Whitebox = Tester weiß <b>alles</b>. In der Klausur immer zuerst fragen: Reden wir über Testentwurf oder über einen Pentest?' },

    { typ: 'nachricht', text: 'Nächstes Mal rechnen wir das an meinem Mengenfeld durch. Da siehst du, wie aus einer Milliarde möglicher Eingaben sieben Testfälle werden.' }
  ]
});

/* ---------------------------------------------------------------
   ent-02 – Sieben Testfaelle statt einer Milliarde
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ent-02',
  kontakt: 'entwickler',
  titel: 'Sieben Testfälle statt einer Milliarde',
  thema: 'Testentwurf',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Konkreter Fall aus meiner Software. Das Feld „Entnahmemenge" im Lagerdialog: erlaubt sind <b>ganze Zahlen von 1 bis 999</b>. Alles andere soll eine Fehlermeldung geben.' },
    { typ: 'nachricht', text: 'Vollständig testen heißt: alle Zahlen plus Buchstaben plus leeres Feld. Das sind praktisch unendlich viele Fälle. Also brauche ich ein Verfahren, das die Zahl sinnvoll zusammenstreicht.' },

    { typ: 'frage', text: 'Wie viele Äquivalenzklassen hat dieses Feld – und welche?',
      optionen: [
        { text: 'Drei: kleiner als 1 (ungültig), 1 bis 999 (gültig), größer als 999 (ungültig)', richtig: true,
          antwort: 'Genau. Die [[Äquivalenzklassenbildung]] zerlegt den Wertebereich in Gruppen, in denen sich alle Werte <b>gleich verhalten</b> – eine gültige und zwei ungültige. Aus jeder wird ein Vertreter getestet, zum Beispiel −5, 50 und 1500. Drei Testfälle statt einer Milliarde.' },
        { text: 'Zwei: gültig und ungültig',
          antwort: 'Zu grob. „Zu klein" und „zu groß" sind verschiedene Fälle und werden im Programm an verschiedenen Stellen geprüft – ein Vertreter für beides würde die eine Prüfung ungetestet lassen.' },
        { text: 'Neunhundertneunundneunzig, für jeden erlaubten Wert eine',
          antwort: 'Das wäre der vollständige Test und genau das, was das Verfahren vermeiden soll. Die Annahme ist ja, dass sich 50 und 51 <b>gleich</b> verhalten – sonst bräuchte man das Verfahren nicht.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt kommt das Verfahren dazu, das die eigentlichen Fehler findet. Denn die sitzen nicht bei 50.' },

    { typ: 'frage', text: 'Welche Werte prüft die Grenzwertanalyse bei 1 bis 999?',
      optionen: [
        { text: '0, 1, 999 und 1000 – jeweils der letzte ungültige und der erste gültige Wert an beiden Rändern', richtig: true,
          antwort: 'Genau diese vier. Die [[Grenzwertanalyse]] setzt dort an, wo fast alle Fehler sitzen: an den Rändern. Dort verwechselt man <code>&lt;</code> mit <code>&lt;=</code> und zählt um eins falsch – der berühmte „off by one".' },
        { text: '1 und 999, also die beiden gültigen Grenzen',
          antwort: 'Halb richtig. Es fehlen die Werte <b>direkt davor und dahinter</b> – 0 und 1000. Erst das Paar zeigt, ob die Grenze an der richtigen Stelle sitzt.' },
        { text: '−1, 0, 1000 und 1001',
          antwort: 'Die ungültige Seite allein genügt nicht. Zu jeder Grenze gehört das Paar aus dem letzten ungültigen <b>und</b> dem ersten gültigen Wert, also 0/1 und 999/1000.' }
      ] },

    { typ: 'nachricht', text: 'Damit sind wir bei den sieben: drei Vertreter der Klassen plus vier Grenzwerte – minus Überschneidungen, plus die Sonderfälle. Zu denen kommen wir jetzt.' },

    { typ: 'mehrfach', text: 'Welche Testfälle fehlen noch, obwohl sie in keiner Zahlenklasse auftauchen? (mehrere)',
      optionen: [
        { text: 'Leeres Feld', richtig: true },
        { text: 'Buchstaben oder Sonderzeichen statt einer Zahl', richtig: true },
        { text: 'Kommazahl, zum Beispiel 2,5', richtig: true },
        { text: 'Die Zahl 500' },
        { text: 'Die Zahl 998' }
      ],
      antwortRichtig: 'Vollständig. 500 und 998 liegen mitten in der gültigen Klasse und bringen nichts Neues – 50 vertritt sie schon. Die drei anderen sind eigene <b>ungültige Äquivalenzklassen</b>, die man aus der Spezifikation („ganze Zahlen") ableitet und die gern vergessen werden.',
      antwortFalsch: 'Denk an den Satz „ganze Zahlen von 1 bis 999". Jede Verletzung dieses Satzes ist eine eigene Klasse – und zwei der Optionen liegen mitten in einer Klasse, die schon abgedeckt ist.' },

    { typ: 'frage', text: 'Warum kombiniert man Äquivalenzklassen und Grenzwertanalyse praktisch immer?',
      optionen: [
        { text: 'Die Klassen sichern die Breite ab, die Grenzwerte die fehleranfälligen Ränder', richtig: true,
          antwort: 'Genau so formuliert man es in der Prüfung. Die [[Äquivalenzklassenbildung]] stellt sicher, dass <b>kein Fall</b> vergessen wird; die [[Grenzwertanalyse]] stellt sicher, dass die <b>Übergänge</b> stimmen. Zusammen bekommt man mit wenigen Testfällen eine hohe Trefferquote.' },
        { text: 'Weil die Grenzwertanalyse allein zu viele Testfälle erzeugt',
          antwort: 'Umgekehrt – sie erzeugt die wenigsten, nämlich vier. Nur würden ohne die Klassen die ungültigen Sonderfälle wie Buchstaben oder leeres Feld fehlen.' },
        { text: 'Weil die Norm es vorschreibt',
          antwort: 'Es gibt keine Norm, die das vorschreibt. Die Kombination ist Erfahrung: Dort, wo Entwickler Fehler machen, sitzen sie an den Rändern und bei den vergessenen Klassen.' }
      ] },

    { typ: 'karte', titel: 'Die Entwurfsverfahren im Vergleich', quelle: 'testentwurf',
      keys: ['aequivalenz', 'grenzwert'] },

    { typ: 'merk', text: '<b>[[Äquivalenzklassenbildung]]:</b> Wertebereich in Gruppen zerlegen, je Gruppe <b>einen</b> Vertreter – gültige <b>und</b> ungültige Klassen. <b>[[Grenzwertanalyse]]:</b> an jeder Grenze vier Werte – letzter ungültiger, erster gültiger, letzter gültiger, erster ungültiger. Beides [[Blackbox-Verfahren|Blackbox]], beides aus der Spezifikation.' },

    { typ: 'nachricht', text: 'Beim nächsten Mal die andere Seite: Was 100 Prozent Testabdeckung wirklich bedeuten – und warum es drei verschiedene 100 Prozent gibt.' }
  ]
});

/* ---------------------------------------------------------------
   ent-03 – Hundert Prozent sind nicht hundert Prozent
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ent-03',
  kontakt: 'entwickler',
  titel: '100 Prozent sind nicht 100 Prozent',
  thema: 'Testabdeckung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Unser Werkzeug meldet „94 % Abdeckung". Frau Brehm findet das beruhigend. Ich zeige dir, warum die Zahl ohne den Zusatz, <b>welche</b> Abdeckung gemeint ist, nichts aussagt.' },
    { typ: 'nachricht', text: 'Nimm diesen Ausschnitt aus meiner Bestandsprüfung:<br><code>if (menge > bestand) { fehler("zu wenig Bestand"); }</code><br><code>buchen(menge);</code><br>Ein <code>if</code> ohne <code>else</code>. Ich teste mit menge = 5 und bestand = 2 – die Bedingung greift.' },

    { typ: 'frage', text: 'Wie hoch ist die Anweisungsabdeckung (C0) nach diesem einen Testfall?',
      optionen: [
        { text: '100 Prozent – jede Anweisung wurde einmal ausgeführt', richtig: true,
          antwort: 'Genau, und das ist der Punkt. Die [[Anweisungsabdeckung]] zählt <b>Anweisungen</b>, und beide sind gelaufen. Trotzdem habe ich den Fall „Bestand reicht aus" nie getestet – also den Normalfall meiner Software.' },
        { text: '50 Prozent – der else-Zweig fehlt',
          antwort: 'Es gibt keinen <code>else</code>-Zweig, der gezählt werden könnte – es gibt nur zwei Anweisungen, und beide wurden ausgeführt. Genau deshalb ist C0 so schwach: Der fehlende Weg hat keine Zeile.' },
        { text: '0 Prozent, weil der Testfall einen Fehler auslöst',
          antwort: 'Dass eine Fehlermeldung kommt, ist das erwartete Ergebnis des Testfalls – er ist erfolgreich. Abdeckung misst, was durchlaufen wurde, nicht ob es gut ausging.' }
      ] },

    { typ: 'frage', text: 'Und die Zweigabdeckung (C1) nach demselben Testfall?',
      optionen: [
        { text: '50 Prozent – der Zweig „Bedingung nicht erfüllt" wurde nie durchlaufen', richtig: true,
          antwort: 'Richtig. Die [[Zweigabdeckung]] verlangt für jede Verzweigung <b>beide</b> Ausgänge – wahr und falsch. Ich brauche also einen zweiten Testfall mit ausreichendem Bestand. Deshalb schließt C1 die [[Anweisungsabdeckung|C0]] ein, aber nicht umgekehrt.' },
        { text: 'Auch 100 Prozent, es ist derselbe Code',
          antwort: 'Derselbe Code, anderes Maß. C0 zählt Anweisungen, C1 zählt Zweige – und ein <code>if</code> hat zwei Ausgänge, auch wenn für einen keine Zeile geschrieben wurde.' },
        { text: '0 Prozent, weil keine Verzweigung vollständig durchlaufen wurde',
          antwort: 'Ein Zweig wurde durchlaufen, nämlich der wahre – also die Hälfte. Für 0 % hätte der Code gar nicht laufen dürfen.' }
      ] },

    { typ: 'frage', text: 'Wie ordnen sich C0, C1 und Pfadabdeckung in ihrer Stärke?', mischen: false,
      optionen: [
        { text: 'C0 schwächer als C1, C1 schwächer als Pfadabdeckung – jede stärkere schließt die schwächere ein', richtig: true,
          antwort: 'Genau diese Rangfolge: <b>[[Anweisungsabdeckung|C0]] ⊂ [[Zweigabdeckung|C1]] ⊂ [[Pfadabdeckung]]</b>. Wer alle Pfade durchläuft, hat zwangsläufig alle Zweige und alle Anweisungen erreicht.' },
        { text: 'Pfadabdeckung schwächer als C1, C1 schwächer als C0',
          antwort: 'Genau umgekehrt. Pfade sind Kombinationen von Zweigen, Zweige enthalten Anweisungen – die Stärke wächst von C0 nach oben.' },
        { text: 'Alle drei sind gleich stark, sie messen nur unterschiedlich',
          antwort: 'Sie messen Unterschiedliches, aber nicht gleich streng: 100 % C0 ist mit einem Testfall zu haben, 100 % Pfadabdeckung oft mit keiner endlichen Zahl.' }
      ] },

    { typ: 'karte', titel: 'Die drei Abdeckungsmaße', quelle: 'testentwurf',
      keys: ['anweisung', 'zweig', 'pfad'] },

    { typ: 'nachricht', text: 'Letzte Frage, und sie ist die wirtschaftliche: Warum zielt niemand auf 100 Prozent Pfadabdeckung?' },

    { typ: 'frage', text: 'Warum ist vollständige Pfadabdeckung in der Praxis nicht erreichbar?',
      optionen: [
        { text: 'Die Zahl der Pfade wächst mit jeder Verzweigung exponentiell, bei Schleifen wird sie praktisch unbegrenzt', richtig: true,
          antwort: 'Richtig. Drei aufeinanderfolgende <code>if</code> ergeben schon acht Pfade, zehn ergeben 1024. Eine Schleife mit unbestimmter Durchlaufzahl ergibt beliebig viele. Deshalb ist [[Zweigabdeckung|C1]] der vernünftige Zielwert – und 100 % C1 ist bereits anspruchsvoll.' },
        { text: 'Weil die Werkzeuge Pfade nicht messen können',
          antwort: 'Messen können sie es – es gibt nur zu viele Pfade, um sie alle zu durchlaufen. Das Problem ist die Zahl der Testfälle, nicht das Werkzeug.' },
        { text: 'Weil Pfadabdeckung nur bei Whitebox-Tests funktioniert',
          antwort: 'Sie ist ein [[Whitebox-Verfahren|Whitebox-Maß]], das stimmt – das macht sie aber nicht unmöglich, sondern nur strukturbezogen. Unerreichbar ist sie wegen der Zahl der Kombinationen.' }
      ] },

    { typ: 'mehrfach', text: 'Was gilt für die Testabdeckung? (mehrere)',
      optionen: [
        { text: '100 % C1 schließt 100 % C0 ein', richtig: true },
        { text: 'Hohe Abdeckung sagt nichts über die Qualität der Testfälle', richtig: true },
        { text: 'Abdeckung misst nur vorhandenen Code, keine fehlenden Funktionen', richtig: true },
        { text: '100 % Abdeckung bedeutet fehlerfreie Software' },
        { text: 'Abdeckung ist ein Blackbox-Maß' }
      ],
      antwortRichtig: 'Vollständig. Der zweite Punkt ist der wichtigste: Ein Testfall ohne geprüftes <b>erwartetes Ergebnis</b> erhöht die Abdeckung, ohne irgendetwas zu prüfen. Und fehlerfrei wird Software nie – [[Softwaretest|Testen zeigt die Anwesenheit von Fehlern, nie deren Abwesenheit]].',
      antwortFalsch: 'Zwei Aussagen überschätzen die Zahl. Frag dich: Was <b>zählt</b> ein Abdeckungsmaß eigentlich – und was zählt es nicht?' },

    { typ: 'merk', text: '<b>[[Testabdeckung]] in drei Stufen:</b> [[Anweisungsabdeckung|C0]] jede Anweisung einmal · [[Zweigabdeckung|C1]] jeder Zweig wahr <b>und</b> falsch · [[Pfadabdeckung]] jede Kombination. <b>C0 ⊂ C1 ⊂ Pfad.</b> C1 ist das Praxisziel, Pfadabdeckung ist unbezahlbar – und 100 % heißt „durchlaufen", nicht „richtig".' },

    { typ: 'nachricht', text: 'Nächstes Mal gehen wir eine Ebene höher: vier Teststufen, vier Prüfgrundlagen, vier verschiedene Leute, die prüfen.' }
  ]
});

/* ---------------------------------------------------------------
   ent-04 – Vier Stufen, vier Pruefgrundlagen
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ent-04',
  kontakt: 'entwickler',
  titel: 'Vier Stufen, vier Prüfgrundlagen',
  thema: 'Teststufen',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Die Lagersoftware geht im Herbst in Betrieb. Bis dahin durchläuft sie vier [[Teststufen]] – und auf jeder prüft jemand anders gegen ein anderes Dokument.' },
    { typ: 'nachricht', text: 'Ich gebe dir die vier durcheinander: Systemtest, Abnahmetest, Unit-Test, Integrationstest. Sortiere von klein nach groß.' },

    { typ: 'frage', text: 'In welcher Reihenfolge laufen die Teststufen?', mischen: false,
      optionen: [
        { text: 'Unit-Test → Integrationstest → Systemtest → Abnahmetest', richtig: true,
          antwort: 'Genau. Von klein nach groß: erst der einzelne Baustein, dann das Zusammenspiel, dann das Ganze, dann der Kunde. Nach oben wächst der Umfang und sinkt der Einblick – unten [[Whitebox-Verfahren|Whitebox]], oben [[Blackbox-Verfahren|Blackbox]].' },
        { text: 'Unit-Test → Systemtest → Integrationstest → Abnahmetest',
          antwort: 'Der Systemtest setzt voraus, dass die Teile <b>schon</b> zusammenarbeiten – sonst testet man ein Gesamtsystem, das noch nicht zusammengesetzt ist. Integration kommt vorher.' },
        { text: 'Integrationstest → Unit-Test → Systemtest → Abnahmetest',
          antwort: 'Dann würde ich Schnittstellen zwischen Bausteinen prüfen, die einzeln noch nie gelaufen sind. Jeder Fehler wäre doppelt mühsam zu suchen – erst das Modul, dann die Verbindung.' }
      ] },

    { typ: 'karte', titel: 'Die vier Teststufen', quelle: 'teststufen' },

    { typ: 'nachricht', text: 'Jetzt der Teil, auf den es in der Klausur ankommt: Welche <b>Prüfgrundlage</b> gehört zu welcher Stufe. Das ist der rechte Ast im V-Modell.' },

    { typ: 'frage', text: 'Gegen welches Dokument prüft der Abnahmetest?',
      optionen: [
        { text: 'Gegen das Lastenheft und den tatsächlichen Bedarf des Auftraggebers', richtig: true, norm: '§ 640 BGB',
          antwort: 'Richtig. Der [[Abnahmetest]] ist [[Verifikation und Validierung|Validierung]]: Haben wir das <b>richtige</b> Produkt gebaut? Geprüft wird vom Kunden in dessen Umgebung – und mit der Abnahme nach § 640 BGB gehen Vergütungsanspruch und Beweislast über.' },
        { text: 'Gegen das Pflichtenheft',
          antwort: 'Das ist die Grundlage des [[Systemtest]]s. Das Pflichtenheft ist <b>unsere</b> Antwort auf das Lastenheft – wenn wir dagegen prüfen, prüfen wir unsere eigene Hausaufgabe. Der Kunde prüft gegen seinen Bedarf.' },
        { text: 'Gegen den technischen Feinentwurf',
          antwort: 'Der gehört zum [[Unit-Test]], ganz unten. Für den Auftraggeber ist der Feinentwurf uninteressant – er will wissen, ob die Software seine Abläufe abbildet.' }
      ] },

    { typ: 'frage', text: 'Meine Module laufen alle einzeln fehlerfrei. Trotzdem bricht das Zusammenspiel ab: Ich übergebe das Datum als TT.MM.JJJJ, die Warenwirtschaft erwartet JJJJ-MM-TT. Welche Stufe hätte das finden müssen?',
      optionen: [
        { text: 'Der Integrationstest – er prüft genau die Schnittstellen zwischen den Bausteinen', richtig: true,
          antwort: 'Genau. Das ist die Lehrbuchdefinition des Integrationsfehlers: <b>Jedes Modul funktioniert, das Ganze nicht.</b> Ein [[Unit-Test]] kann das nicht finden, weil er den Partner gar nicht einbindet – er arbeitet mit einem Platzhalter, der sich natürlich an meine Annahme hält.' },
        { text: 'Der Unit-Test, das Datumsformat steckt in meiner Funktion',
          antwort: 'Meine Funktion liefert genau, was ich erwarte – mein Unit-Test prüft gegen <b>meine</b> Annahme und ist grün. Der Fehler liegt in der Annahme, und die zeigt sich erst beim Partner.' },
        { text: 'Der Abnahmetest, der Kunde merkt es zuerst',
          antwort: 'Merken würde er es – nur wäre das die teuerste Stelle, es zu merken. Vgl. [[Fehlerkosten]]: Je später der Fund, desto teurer. Deshalb gibt es die Stufen dazwischen.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört in den Systemtest – und nicht in eine andere Stufe? (mehrere)',
      optionen: [
        { text: 'Das vollständige System in produktionsnaher Umgebung', richtig: true },
        { text: 'Lasttest und Antwortzeiten unter Spitzenbelastung', richtig: true },
        { text: 'Bedienbarkeit und Sicherheit als nichtfunktionale Anforderungen', richtig: true },
        { text: 'Die einzelne Funktion isoliert mit Platzhaltern' },
        { text: 'Die Freigabe durch die Fachabteilung des Kunden' }
      ],
      antwortRichtig: 'Vollständig. Der [[Systemtest]] ist die letzte Stufe <b>in der Hand des Herstellers</b> und die Stufe, auf der die nichtfunktionalen Anforderungen dran sind – ein [[Lasttest]] mit 300 Scannern gehört genau hierhin. Die isolierte Funktion ist der [[Unit-Test]], die Freigabe der [[Abnahmetest]].',
      antwortFalsch: 'Zwei Optionen gehören in eine andere Stufe – eine nach ganz unten, eine nach ganz oben. Frag dich bei jeder: Wer prüft hier, und wie groß ist der Gegenstand?' },

    { typ: 'merk', text: '<b>Vier [[Teststufen]] von klein nach groß:</b> [[Unit-Test|Unit]] (Entwickler, Feinentwurf, [[Whitebox-Verfahren|Whitebox]]) → [[Integrationstest|Integration]] (Schnittstellen, Grobentwurf) → [[Systemtest|System]] (Testteam, Pflichtenheft, auch Last und Leistung) → [[Abnahmetest|Abnahme]] (Kunde, Lastenheft, § 640 BGB). Nach oben: mehr Umfang, weniger Einblick.' },

    { typ: 'nachricht', text: 'Letzter Termin: der Test, der am häufigsten läuft und am seltensten geplant wird.' }
  ]
});

/* ---------------------------------------------------------------
   ent-05 – Es lief doch gestern noch
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ent-05',
  kontakt: 'entwickler',
  titel: '„Es lief doch gestern noch"',
  thema: 'Regressionstest',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Gestern habe ich die neue Preisliste eingebaut – zwölf Zeilen Code, saubere Sache. Heute morgen funktioniert der Lagerumbuchungsdialog nicht mehr, der mit der Preisliste gar nichts zu tun hat.' },
    { typ: 'nachricht', text: 'Das ist der Alltag. Und es hat einen Namen.' },

    { typ: 'frage', text: 'Wie heißt der Test, der genau das verhindert?',
      optionen: [
        { text: 'Regressionstest – Wiederholung bereits erfolgreicher Tests nach einer Änderung', richtig: true,
          antwort: 'Richtig. Der [[Regressionstest]] prüft nicht das Neue, sondern das <b>Alte</b>: Ist beim Umbau etwas kaputtgegangen, das vorher lief? Bei mir hätten 240 vorhandene Testfälle laufen müssen – zwei davon wären rot geworden.' },
        { text: 'Integrationstest, es betrifft ja mehrere Module',
          antwort: 'Der [[Integrationstest]] ist eine <b>Teststufe</b> und prüft das Zusammenspiel beim erstmaligen Zusammensetzen. Der Regressionstest ist ein <b>Testanlass</b>, der auf jeder Stufe stattfindet – auch beim Unit-Test.' },
        { text: 'Abnahmetest, der Kunde prüft nach jeder Änderung',
          antwort: 'Dann wäre der Kunde unser Regressionstest, und zwar der teuerste denkbare. Vgl. [[Fehlerkosten]] – der Fund nach der Auslieferung kostet das Zehnfache.' }
      ] },

    { typ: 'nachricht', text: 'Die Frage ist jetzt der Umfang. 240 Testfälle von Hand sind zwei Tage Arbeit – bei zwölf geänderten Zeilen.' },

    { typ: 'frage', text: 'Welche Art von Test lohnt sich am meisten zu automatisieren?',
      optionen: [
        { text: 'Der Regressionstest – er läuft bei jeder Änderung, nicht nur einmal', richtig: true,
          antwort: 'Genau die Begründung. [[Testautomatisierung]] ist teuer in der Erstellung und fast kostenlos in der Wiederholung. Also automatisiert man, was <b>oft</b> läuft: Regressionstests und [[Unit-Test|Unit-Tests]]. Aus zwei Tagen Handarbeit werden acht Minuten auf dem Server.' },
        { text: 'Der Abnahmetest, damit der Kunde weniger Arbeit hat',
          antwort: 'Der [[Abnahmetest]] läuft einmal und soll gerade von Menschen mit echten Abläufen durchgeführt werden. Automatisierung würde genau den Zweck verfehlen – zu prüfen, ob es im Alltag <b>passt</b>.' },
        { text: 'Der Lasttest, weil er die meisten Daten braucht',
          antwort: 'Ein [[Lasttest]] wird technisch immer mit Werkzeugen gefahren, das stimmt – aber er läuft selten, meist einmal vor dem Produktivgang. Die Wirtschaftlichkeit der Automatisierung kommt aus der <b>Wiederholung</b>.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Tests sollten nach einer Änderung mindestens laufen? (mehrere)',
      optionen: [
        { text: 'Die Testfälle der geänderten Funktion selbst', richtig: true },
        { text: 'Die Testfälle der Funktionen, die davon abhängen', richtig: true },
        { text: 'Ein automatisierter Durchlauf aller vorhandenen Unit-Tests', richtig: true },
        { text: 'Nur die Testfälle, die der Kunde ausdrücklich verlangt hat' },
        { text: 'Keine – bei zwölf geänderten Zeilen ist das übertrieben' }
      ],
      antwortRichtig: 'Vollständig. Genau die Annahme „nur zwölf Zeilen, da kann nichts passieren" ist der Grund, warum heute der Umbuchungsdialog steht. Die Größe der Änderung sagt nichts über ihre <b>Reichweite</b> – deshalb läuft der [[Regressionstest]] automatisiert und vollständig.',
      antwortFalsch: 'Zwei Optionen verlassen sich auf eine Einschätzung des Entwicklers über die Reichweite seiner Änderung. Genau die war heute morgen falsch.' },

    { typ: 'frage', text: 'Noch ein Bezug zu Yasmins Seite: Was hat der Nachtest nach einem Pentest mit dem Regressionstest zu tun?',
      optionen: [
        { text: 'Der Nachtest prüft nicht nur, ob die Lücke zu ist, sondern auch, ob die Maßnahme nichts Neues aufgerissen hat', richtig: true,
          antwort: 'Genau – derselbe Gedanke in anderem Gewand. Ein [[Nachtest]] enthält immer eine Regressionsprüfung: Das eingespielte Update hat die Lücke geschlossen, vielleicht aber auch eine Schnittstelle geändert. Beide Male gilt: <b>Nach der Änderung das Alte nachprüfen.</b>' },
        { text: 'Nichts – der Nachtest prüft nur die eine Lücke',
          antwort: 'Dann hätte man nach dem Patch eine geschlossene Lücke und möglicherweise eine neue daneben. Ein [[Härtung|Härtungsschritt]], der einen Dienst abschaltet, kann auch eine gebrauchte Funktion mit abschalten.' },
        { text: 'Beides wird vom Auditor geprüft',
          antwort: 'Der [[Audit|Auditor]] prüft, ob es die Nachprüfung <b>gibt</b> und ob sie belegt ist – durchführen muss sie der Betrieb. Die inhaltliche Verwandtschaft liegt im Prinzip, nicht in der Zuständigkeit.' }
      ] },

    { typ: 'merk', text: '<b>[[Regressionstest]]:</b> nach jeder Änderung die bereits erfolgreichen Tests wiederholen – geprüft wird das <b>Alte</b>, nicht das Neue. Weil er bei jeder Änderung läuft, ist er der Test, der sich am meisten zu automatisieren lohnt. Derselbe Gedanke steckt im [[Nachtest]] nach einem Pentest.' },

    { typ: 'nachricht', text: 'So. Jetzt suche ich meine zwei roten Testfälle. Immerhin habe ich sie – vor zwei Jahren hätte ich den Fehler im Dezember vom Lager gemeldet bekommen.' }
  ]
});
