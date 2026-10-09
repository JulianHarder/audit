/* ===========================================================
   AUDIT – data/dialoge-notfall.js
   Gruppenchat #notfall. Mehrere Teilnehmer schreiben, jeder
   mit eigener Farbe (siehe AUDIT.data.sprecher in kontakte.js).
   Über "von" wird der Sprecher-Schlüssel angegeben.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'not-01',
  kontakt: 'notfall',
  titel: 'Die Mail ging an den Falschen',
  thema: 'Datenpanne',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'luettmann', text: 'Ich glaube, mir ist gerade etwas Schlimmes passiert. 😨' },
    { typ: 'nachricht', von: 'luettmann', text: 'Ich wollte einer Kollegin ein Dokument schicken: Namen, Anschriften, Gehälter und Angaben zu längeren Krankheitszeiten von zwölf Beschäftigten.' },
    { typ: 'nachricht', von: 'luettmann', text: 'Durch einen Tippfehler ging die Mail an eine <b>firmenfremde</b> Adresse, die der richtigen sehr ähnlich sieht. Gemerkt habe ich es erst zwei Stunden später.' },
    { typ: 'nachricht', von: 'olschewski', text: 'Danke, dass du sich sofort gemeldet hast – das ist genau richtig. Wir gehen das jetzt der Reihe nach durch, und niemand bekommt hier Ärger.' },

    { typ: 'frage', von: 'olschewski',
      text: 'Warum ist dieser Vorfall datenschutzrechtlich relevant?',
      optionen: [
        { text: 'Weil personenbezogene Daten Unbefugten offengelegt wurden', richtig: true, norm: 'Datenpanne',
          antwort: 'Richtig. Es liegt eine <b>Verletzung des Schutzes personenbezogener Daten</b> vor – kurz: eine [[Datenpanne]]. Namen, Anschriften, Gehälter und vor allem <b>Gesundheitsdaten</b> wurden einer unbefugten Person offengelegt. Dafür gibt es keine Rechtsgrundlage, das Risiko für die Betroffenen ist hoch, und es bestehen Meldepflichten.' },
        { text: 'Weil die Kollegin die Mail nicht bekommen hat',
          antwort: 'Das ist nur lästig. Das Problem ist, <b>wer sie stattdessen bekommen hat</b> – und was darin stand.' }
      ] },

    { typ: 'frage', von: 'olschewski',
      text: 'Welches Schutzziel ist in erster Linie betroffen?',
      optionen: [
        { text: 'Vertraulichkeit', richtig: true,
          antwort: 'Genau. Unbefugte haben Zugang zu Informationen bekommen, die nur für Berechtigte bestimmt waren.' },
        { text: 'Verfügbarkeit',
          antwort: 'Nein – uns fehlt nichts, wir haben das Dokument weiterhin. Das Problem ist, dass es jemand <b>zusätzlich</b> hat.' }
      ] },
    { typ: 'nachricht', von: 'olschewski', text: 'Eine Verschärfung kommt hinzu: Krankheitszeiten sind <b>Gesundheitsdaten</b> und damit eine [[besondere Kategorien|besondere Kategorie]]. Das hebt das Risiko für die Betroffenen deutlich an.' },

    { typ: 'nachricht', von: 'sabrina', text: 'Ich bin dran. Rückruf habe ich versucht – zu spät, die Mail ist raus und gelesen worden, soweit ich das sehe.' },

    { typ: 'mehrfach', von: 'sabrina',
      text: 'Was machen wir jetzt als Erstes? (mehrere)',
      optionen: [
        { text: 'Den Empfänger kontaktieren und zur Löschung auffordern, Bestätigung verlangen', richtig: true },
        { text: 'Versuchen, die Nachricht zurückzurufen', richtig: true },
        { text: 'Erst mal abwarten, ob sich jemand meldet' },
        { text: 'Den Vorfall intern melden und dokumentieren', richtig: true },
        { text: 'Die Mail aus dem gesendeten Ordner löschen, damit es niemand merkt' }
      ],
      antwortRichtig: 'Richtig. <b>Empfänger kontaktieren</b> und zur ungelesenen Löschung auffordern, Bestätigung verlangen, Rückruf versuchen. Und den Vorfall <b>unverzüglich intern melden</b>, dokumentieren und bewerten. Abwarten verliert nur Zeit, und etwas zu vertuschen macht aus einem Fehler ein Fehlverhalten.',
      antwortFalsch: 'Abwarten und Vertuschen sind genau die falschen Reflexe – die Uhr läuft bereits, und jede Verzögerung verschlechtert die Lage.' },

    { typ: 'nachricht', von: 'hagedorn', text: 'Ich bin dazugekommen. Müssen wir das der Aufsichtsbehörde melden? Und wenn ja, bis wann?' },

    { typ: 'frage', von: 'olschewski',
      text: 'Welche Frist gilt für die Meldung an die Aufsichtsbehörde?',
      optionen: [
        { text: 'Unverzüglich, möglichst binnen 72 Stunden', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Richtig. Die Frist läuft ab dem Zeitpunkt, an dem uns der Vorfall <b>bekannt</b> wird – nicht ab dem Versenden der Mail. Gemeldet wird, außer ein Risiko für die Betroffenen ist unwahrscheinlich. Hier geht es um Gehalts- und Gesundheitsdaten, also melden wir.' },
        { text: 'Innerhalb eines Monats',
          antwort: 'Das ist die Frist für <b>Betroffenenanfragen</b> wie Auskunft oder Löschung. Bei einer Datenpanne ist sie deutlich kürzer.' },
        { text: 'Nur wenn jemand Schaden geltend macht',
          antwort: 'Nein, die Meldepflicht hängt nicht davon ab, ob sich jemand beschwert. Sie entsteht mit dem Vorfall und dem Risiko.' }
      ] },

    { typ: 'frage', von: 'hagedorn',
      text: 'Und müssen wir die betroffenen Beschäftigten selbst informieren?',
      optionen: [
        { text: 'Ja, bei hohem Risiko', richtig: true, norm: 'Art. 34 DSGVO',
          antwort: 'Ja. Bei <b>voraussichtlich hohem Risiko</b> müssen die Betroffenen unverzüglich benachrichtigt werden – und Gehalts- plus Gesundheitsdaten an eine fremde Person sind genau das. Die Benachrichtigung könnte entfallen, wenn die Daten durch <b>Verschlüsselung</b> unbrauchbar wären. Genau deshalb sollten solche Anhänge verschlüsselt sein.' },
        { text: 'Nein, die Meldung an die Behörde reicht',
          antwort: 'Das sind zwei verschiedene Pflichten: Meldung an die <b>Aufsichtsbehörde</b> (Art. 33) und Benachrichtigung der <b>Betroffenen</b> bei hohem Risiko (Art. 34). Hier greifen beide.' }
      ] },

    { typ: 'nachricht', von: 'hagedorn', text: 'Was genau muss in der Meldung an die Behörde stehen? Ich möchte das nicht dreimal nachreichen.' },

    { typ: 'mehrfach', von: 'olschewski',
      text: 'Was gehört in die Meldung? (mehrere)',
      optionen: [
        { text: 'Art der Verletzung und betroffene Datenkategorien', richtig: true },
        { text: 'Zahl der betroffenen Personen', richtig: true },
        { text: 'Wahrscheinliche Folgen', richtig: true },
        { text: 'Ergriffene oder vorgeschlagene Gegenmaßnahmen', richtig: true },
        { text: 'Der Name der Mitarbeiterin, die den Fehler gemacht hat' },
        { text: 'Kontaktdaten des Datenschutzbeauftragten', richtig: true }
      ],
      antwortRichtig: 'Richtig. Der Name der Kollegin gehört ausdrücklich <b>nicht</b> hinein – die Behörde will wissen, was passiert ist und was wir tun, nicht wer schuld ist. Wenn noch nicht alles bekannt ist, meldet man zuerst und reicht nach; das ist ausdrücklich erlaubt und besser als Fristversäumnis.',
      antwortFalsch: 'Ein Punkt gehört nicht hinein. Überlegt: Will die Behörde wissen, <b>wer schuld</b> ist – oder <b>was passiert</b> ist und <b>was wir tun</b>?' },

    { typ: 'nachricht', von: 'luettmann', text: 'Das beruhigt mich etwas. Ich hatte schon Angst, dass mein Name in einer Behördenakte landet.' },
    { typ: 'nachricht', von: 'olschewski', text: 'Nein. Und die Dokumentation intern dient der Verbesserung, nicht der Schuldzuweisung – das ist ein wichtiger Unterschied.' },

    { typ: 'nachricht', von: 'sabrina', text: 'Was bauen wir ein, damit das nicht wieder passiert?' },

    { typ: 'mehrfach', von: 'sabrina',
      text: 'Sinnvolle Maßnahmen: (mehrere)',
      optionen: [
        { text: 'Anhänge mit personenbezogenen Daten verschlüsseln', richtig: true },
        { text: 'Verzögerter Versand, damit man Mails zurückholen kann', richtig: true },
        { text: 'Warnung beim Versand an externe Empfänger', richtig: true },
        { text: 'E-Mail komplett abschaffen' },
        { text: 'Sensible Daten gar nicht per Mail versenden, sondern über ein Portal', richtig: true }
      ],
      antwortRichtig: 'Gute Auswahl. Verschlüsselung senkt das Risiko so stark, dass eine Benachrichtigung oft entfällt. Ein verzögerter Versand von einer Minute rettet erfahrungsgemäß erstaunlich viele Mails. Und für Personaldaten ist ein Portal mit Zugriffsrechten ohnehin der bessere Weg als E-Mail.',
      antwortFalsch: 'Ohne E-Mail arbeitet niemand. Gesucht sind Maßnahmen, die den Fehler <b>abfangen</b> oder seine Folgen begrenzen.' },

    { typ: 'merk', text: '<b>Datenpanne:</b> Meldung an die Aufsichtsbehörde <b>unverzüglich, möglichst binnen 72 Stunden ab Kenntnis</b> (Art. 33). Bei hohem Risiko zusätzlich die <b>Betroffenen</b> (Art. 34) – entfällt oft bei Verschlüsselung. In der Meldung: was, wie viele, welche Folgen, welche Maßnahmen – <b>keine</b> Schuldigen.' },

    { typ: 'nachricht', von: 'olschewski', text: 'Frau Lüttmann: Danke für die sofortige Meldung. Genau so muss es laufen.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Dem schließe ich mich an. Und Frau Köster: Bitte setzen Sie die Warnung bei externen Empfängern noch diese Woche um.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'not-02',
  kontakt: 'notfall',
  titel: 'Ransomware: die ersten Stunden',
  thema: 'Datenpanne',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', von: 'sabrina', text: '🚨 Dienstag, 6:40 Uhr. Auf drei Rechnern im Versand liegt eine Lösegeldforderung. Dateien sind verschlüsselt.' },
    { typ: 'nachricht', von: 'sabrina', text: 'Gestern Nachmittag hat jemand einen Mailanhang geöffnet: „Rechnung_2026_offen.pdf.exe".' },
    { typ: 'nachricht', von: 'brinkmann', text: 'Das war ich. Die Rechnung sah echt aus, wir bekommen jeden Tag solche Mails. Tut mir wirklich leid.' },
    { typ: 'nachricht', von: 'sabrina', text: 'Herr Brinkmann, das klären wir später – jetzt zählt nur Eindämmung. Dass Sie sich melden, hilft uns mehr als alles andere.' },

    { typ: 'frage', von: 'sabrina',
      text: 'Was machen wir als Allererstes?',
      optionen: [
        { text: 'Betroffene Systeme vom Netz trennen', richtig: true,
          antwort: 'Genau. <b>Isolieren</b> ist der erste Schritt – damit stoppen wir die Ausbreitung. Wichtig: vom <b>Netz</b> trennen, nicht ausschalten. Der Arbeitsspeicher kann für die Aufklärung wichtig sein.' },
        { text: 'Die Rechner sofort ausschalten',
          antwort: 'Verständlicher Reflex, aber damit gehen flüchtige Spuren verloren, die für die Aufklärung wichtig sind. Besser: Netzwerkkabel ziehen, Gerät laufen lassen.' },
        { text: 'Das Lösegeld zahlen, damit wir schnell weiterarbeiten können',
          antwort: 'Davon raten Behörden ab: Es gibt keine Garantie für den Schlüssel, es finanziert die nächste Welle, und man wird als zahlungswillig gelistet. Zuerst wird isoliert.' }
      ] },

    { typ: 'nachricht', von: 'sabrina', text: '7:05 Uhr: Drei Rechner isoliert. Ich prüfe gerade, ob der Fileserver betroffen ist.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Wen müssen wir jetzt informieren?' },

    { typ: 'mehrfach', von: 'hagedorn',
      text: 'Wer gehört an den Tisch? (mehrere)',
      optionen: [
        { text: 'Der ISB – er leitet die Vorfallsbehandlung', richtig: true },
        { text: 'Der DSB – wegen der Meldepflichten', richtig: true },
        { text: 'Die Geschäftsführung', richtig: true },
        { text: 'Die Presse' },
        { text: 'Alle Kunden sofort per Rundmail' }
      ],
      antwortRichtig: 'Richtig. Der <b>ISB</b> leitet die technische Vorfallsbehandlung, der <b>DSB</b> prüft Melde- und Informationspflichten, die <b>Geschäftsführung</b> entscheidet und trägt die Verantwortung. Presse und Kundenmails kommen – wenn überhaupt – später und abgestimmt. Unkoordinierte Kommunikation richtet im Ernstfall zusätzlichen Schaden an.',
      antwortFalsch: 'Im ersten Schritt geht es um die <b>internen</b> Zuständigen. Externe Kommunikation wird später abgestimmt.' },

    { typ: 'frage', von: 'olschewski',
      text: 'Ist ein Ransomware-Angriff überhaupt eine meldepflichtige Datenpanne? Es wurden ja „nur" Daten verschlüsselt.',
      optionen: [
        { text: 'Ja, auch der Verlust der Verfügbarkeit zählt', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Richtig, und das wird oft falsch beantwortet. Eine Verletzung des Schutzes personenbezogener Daten umfasst <b>Vernichtung, Verlust, Veränderung</b> sowie unbefugte Offenlegung oder Zugang. Wenn wir nicht mehr an Kundendaten herankommen, ist das ein Verlust der <b>Verfügbarkeit</b> – und meldepflichtig, wenn ein Risiko besteht.' },
        { text: 'Nein, solange niemand die Daten gesehen hat',
          antwort: 'Das ist der häufigste Denkfehler. Eine Datenpanne ist nicht nur „jemand hat etwas gesehen" – auch <b>Verlust</b> und <b>Vernichtung</b> gehören dazu.' }
      ] },

    { typ: 'nachricht', von: 'olschewski', text: 'Hinzu kommt: Bei moderner Ransomware werden die Daten meist <b>vorher kopiert</b>. Dann ist zusätzlich die Vertraulichkeit betroffen – doppelte Erpressung.' },
    { typ: 'nachricht', von: 'sabrina', text: '9:30 Uhr: Im Protokoll der Firewall sehe ich tatsächlich größere ausgehende Übertragungen von Montagnacht. Das sieht nach Abfluss aus.' },

    { typ: 'frage', von: 'olschewski',
      text: 'Was ändert sich damit für die Benachrichtigung der Betroffenen?',
      optionen: [
        { text: 'Sie wird deutlich wahrscheinlicher nötig', richtig: true, norm: 'Art. 34 DSGVO',
          antwort: 'Richtig. Solange nur verschlüsselt war, ging es um die Verfügbarkeit. Wenn Kundendaten <b>abgeflossen</b> sind, ist von einem hohen Risiko auszugehen – Identitätsmissbrauch, Betrugsversuche. Dann müssen wir die Betroffenen informieren, und zwar in klarer Sprache mit Hinweisen, was sie selbst tun können.' },
        { text: 'Nichts, der Vorfall bleibt derselbe',
          antwort: 'Doch, es ändert sich viel: Jetzt ist zusätzlich die <b>Vertraulichkeit</b> betroffen. Das erhöht das Risiko für die Betroffenen erheblich.' }
      ] },

    { typ: 'nachricht', von: 'sabrina', text: '11:20 Uhr: Gute Nachricht. Das Backup vom Sonntag liegt auf einem Gerät, das nicht am Netz hing. Es ist sauber. 🙏' },

    { typ: 'frage', von: 'sabrina',
      text: 'Können wir jetzt einfach zurückspielen?',
      optionen: [
        { text: 'Erst neu aufsetzen und die Ursache schließen, dann zurückspielen', richtig: true,
          antwort: 'Genau. Spielen wir die Daten auf ein noch befallenes System zurück, sind sie nach kurzer Zeit wieder verschlüsselt. Also: Systeme <b>neu aufsetzen</b>, die Einbruchsursache schließen, Passwörter ändern, <b>dann</b> die Daten zurückspielen.' },
        { text: 'Ja, sofort auf alle Rechner',
          antwort: 'Zu früh. Solange die Schadsoftware und ihre Hintertür noch auf dem System sind, verschlüsselt sie die zurückgespielten Daten gleich wieder.' }
      ] },

    { typ: 'frage', von: 'hagedorn',
      text: 'Sollten wir Anzeige erstatten?',
      optionen: [
        { text: 'Ja, und die Zentrale Ansprechstelle Cybercrime einschalten', richtig: true,
          antwort: 'Richtig. Es handelt sich um eine Straftat. Jedes Bundesland hat eine <b>Zentrale Ansprechstelle Cybercrime</b> bei der Polizei. Die Anzeige ist außerdem oft Voraussetzung für die Cyber-Versicherung. Parallel sichern wir Beweise, statt vorschnell alles zu löschen.' },
        { text: 'Nein, das macht nur Ärger und schadet dem Ruf',
          antwort: 'Verständlicher Gedanke, aber falsch: Es ist eine Straftat, die Polizei hat Spezialdienststellen, und die Versicherung verlangt in der Regel eine Anzeige. Verschweigen hilft nur den Täter.' }
      ] },

    { typ: 'nachricht', von: 'hagedorn', text: 'Gut. Und was lernen wir daraus für das nächste Mal?' },

    { typ: 'mehrfach', von: 'hagedorn',
      text: 'Was nehmen wir mit? (mehrere)',
      optionen: [
        { text: 'Backups offline halten und das Zurückspielen regelmäßig testen', richtig: true },
        { text: 'Netzwerksegmentierung, damit sich so etwas nicht überall ausbreitet', richtig: true },
        { text: 'Schulungen und einen Meldeweg ohne Schuldzuweisung', richtig: true },
        { text: 'Updates konsequent einspielen', richtig: true },
        { text: 'Keine Mails mehr von außen annehmen' }
      ],
      antwortRichtig: 'Alle vier. Und der wichtigste Satz zum Schluss: Nach jedem Vorfall gehört eine <b>Nachbereitung</b> dazu – Ursache beheben, Maßnahmen nachschärfen, Notfallplan und Schulungen anpassen. Sicherheit ist ein Kreislauf, kein Zustand ([[PDCA]]).',
      antwortFalsch: 'Ohne externe Mails kann niemand arbeiten. Gesucht sind Maßnahmen, die den Schaden <b>verhindern oder begrenzen</b>.' },

    { typ: 'nachricht', von: 'brinkmann', text: 'Kann ich irgendwas tun? Ich komme mir furchtbar vor.' },
    { typ: 'nachricht', von: 'sabrina', text: 'Ja: Erzählen Sie in der Schulung nächste Woche, wie die Mail ausgesehen hat. Ein echtes Beispiel von einem Kollegen wirkt besser als jede Folie von mir.' },

    { typ: 'merk', text: '<b>Ransomware:</b> isolieren (Netz trennen, nicht ausschalten) → ISB, DSB und Leitung informieren → Meldung binnen 72 Stunden prüfen → bei Datenabfluss auch Betroffene (Art. 34) → Anzeige erstatten → neu aufsetzen, Ursache schließen → <b>dann</b> aus dem Offline-Backup zurückspielen → nachbereiten.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'not-03',
  kontakt: 'notfall',
  titel: 'Der Server ist weg – und kein Backup',
  thema: 'Praxisfälle',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'sabrina', text: 'Der zentrale Server ist ausgefallen. Hardwaredefekt, der RAID-Controller ist durch.' },
    { typ: 'nachricht', von: 'sabrina', text: 'Die letzte brauchbare Sicherung ist … elf Monate alt. Niemand hat je geprüft, ob der Sicherungsjob überhaupt noch läuft.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Das darf nicht wahr sein. Was bedeutet das konkret für uns?' },

    { typ: 'frage', von: 'olschewski',
      text: 'Welches Schutzziel ist hier betroffen?',
      optionen: [
        { text: 'Verfügbarkeit', richtig: true,
          antwort: 'Richtig. Berechtigte kommen nicht an Daten und Systeme, die sie für ihre Arbeit brauchen. Vertraulichkeit und Integrität sind nicht betroffen – es hat niemand etwas gesehen oder verändert.' },
        { text: 'Vertraulichkeit',
          antwort: 'Niemand hat Daten unbefugt gesehen. Das Problem ist, dass <b>wir</b> nicht mehr herankommen.' }
      ] },

    { typ: 'frage', von: 'olschewski',
      text: 'Ist ein reiner Hardwaredefekt eine meldepflichtige Datenpanne?',
      optionen: [
        { text: 'Ja, wenn personenbezogene Daten dauerhaft verloren sind', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Richtig. Auch <b>Vernichtung oder Verlust</b> personenbezogener Daten ist eine Verletzung ihres Schutzes – ganz ohne Angreifer. Wenn Kundendaten aus elf Monaten unwiederbringlich weg sind, entsteht für die Betroffenen sehr wohl ein Risiko: fehlende Vertragsdaten, verlorene Nachweise, nicht erfüllbare Auskunftsansprüche.' },
        { text: 'Nein, es war ja kein Angriff',
          antwort: 'Ein verbreiteter Irrtum. Für eine Datenpanne braucht es keinen Angreifer – <b>Verlust und Vernichtung</b> zählen genauso.' }
      ] },

    { typ: 'nachricht', von: 'sabrina', text: 'Ein RAID hatten wir übrigens. Das hat uns hier genau nichts geholfen.' },

    { typ: 'frage', von: 'sabrina',
      text: 'Warum nicht?',
      optionen: [
        { text: 'RAID schützt gegen Plattenausfall, nicht gegen Controllerdefekt oder Löschung', richtig: true,
          antwort: 'Genau. [[Redundanz]] hält den Betrieb beim Ausfall <b>einer Platte</b> am Laufen. Hier ist der Controller gestorben – und der schreibt im schlimmsten Fall auf alle Platten gleichzeitig Unsinn. Ebenso bei Ransomware oder versehentlicher Löschung: Das RAID macht es brav mit.' },
        { text: 'Weil das RAID falsch konfiguriert war',
          antwort: 'Auch ein korrekt konfiguriertes RAID hätte hier nicht geholfen. Es schützt nur gegen den Ausfall <b>einzelner Platten</b>, nicht gegen Controllerdefekte, Löschungen oder Verschlüsselung.' }
      ] },

    { typ: 'nachricht', von: 'hagedorn', text: 'Was muss sich ändern? Und bitte so, dass es nicht wieder einschläft.' },

    { typ: 'frage', von: 'sabrina',
      text: 'Was ist der entscheidende Punkt bei Backups?',
      optionen: [
        { text: 'Dass das Zurückspielen regelmäßig getestet wird', richtig: true,
          antwort: 'Genau das. Ein Sicherungsjob, der seit Monaten still scheitert, sieht bis zum Ernstfall aus wie ein funktionierendes Backup. Deshalb: <b>Rückspieltest</b> mit Protokoll, Überwachung der Sicherungsläufe, [[Backup|3-2-1-Regel]] und ein <b>Notfall- und Wiederanlaufplan</b>, der auch sagt, wer im Ernstfall was tut.' },
        { text: 'Dass möglichst viel Speicherplatz vorhanden ist',
          antwort: 'Platz hilft wenig, wenn niemand merkt, dass nichts mehr gesichert wird. Entscheidend ist, dass das <b>Zurückspielen</b> nachweislich funktioniert.' }
      ] },

    { typ: 'frage', von: 'hagedorn',
      text: 'Was gehört in einen Notfallplan?',
      optionen: [
        { text: 'Zuständigkeiten, Meldewege, Prioritäten und Wiederanlaufzeiten', richtig: true, norm: 'BSI-Standard 200-4',
          antwort: 'Richtig. Dazu Telefonlisten auf <b>Papier</b> – wenn das System weg ist, sind digitale Kontaktlisten es auch. Und eine Festlegung, welche Prozesse zuerst wieder laufen müssen: Bei uns ist das der Versand, nicht die Lohnbuchhaltung.' },
        { text: 'Eine Liste aller Hardwarekomponenten',
          antwort: 'Die Inventarliste ist eine nützliche Grundlage, aber kein Notfallplan. Der muss sagen: <b>wer</b> tut <b>was</b>, in welcher <b>Reihenfolge</b>, und wie lange darf es dauern.' }
      ] },

    { typ: 'nachricht', von: 'olschewski', text: 'Ein Punkt noch, bevor wir das abschließen: Die Dokumentation dieses Vorfalls bitte vollständig – auch unsere Bewertung, ob wir melden. Auch die Entscheidung <b>gegen</b> eine Meldung muss begründet festgehalten werden.' },

    { typ: 'frage', von: 'olschewski',
      text: 'Warum ist das wichtig?',
      optionen: [
        { text: 'Wegen der Rechenschaftspflicht – wir müssen Entscheidungen belegen können', richtig: true, norm: 'Art. 5 Abs. 2 DSGVO',
          antwort: 'Richtig. Die [[Rechenschaftspflicht]] verlangt, dass wir die Einhaltung <b>nachweisen</b> können. Eine nicht dokumentierte Abwägung ist im Streitfall keine Abwägung. Deshalb führen wir ein Verzeichnis aller Vorfälle – auch der nicht gemeldeten.' },
        { text: 'Damit wir wissen, wem wir die Schuld geben',
          antwort: 'Genau nicht. Die Dokumentation dient dem <b>Nachweis</b> gegenüber der Aufsichtsbehörde und der Verbesserung – nicht der Schuldzuweisung.' }
      ] },

    { typ: 'merk', text: 'Eine Datenpanne braucht <b>keinen Angreifer</b> – Verlust und Vernichtung zählen genauso. <b>RAID ist kein Backup.</b> Ein Backup, dessen Rückspielen nie getestet wurde, ist kein Backup. Vorfälle dokumentieren – auch die Entscheidung gegen eine Meldung.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'not-04',
  kontakt: 'notfall',
  titel: 'Der Fremde im Serverraum',
  thema: 'Kontrollarten (TOMs)',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'brinkmann', text: 'Kurze Frage: Steht bei Ihnen gerade ein Techniker im Serverraum? Großer Mann, Warnweste, hat einen Laptop dabei.' },
    { typ: 'nachricht', von: 'sabrina', text: 'Nein. Bei mir ist kein Termin eingetragen. Wo genau ist er?' },
    { typ: 'nachricht', von: 'brinkmann', text: 'Er ist vorhin mit mir durch die Tür gekommen, als ich meine Karte benutzt habe. Sagte, er müsse „kurz an den Verteiler".' },
    { typ: 'nachricht', von: 'sabrina', text: 'Ich bin unterwegs. Bitte nicht alleine hingehen und nichts anfassen.' },

    { typ: 'frage', von: 'sabrina',
      text: 'Welche Kontrollart hat hier versagt?',
      optionen: [
        { text: 'Zutrittskontrolle', richtig: true, norm: 'Zutritt = Raum',
          antwort: 'Richtig. Die [[Zutrittskontrolle]] soll verhindern, dass Unbefugte <b>physisch</b> in Räume mit Datenverarbeitungsanlagen kommen. Technisch hat die Chipkarte funktioniert – organisatorisch hat sie versagt, weil jemand mitgegangen ist.' },
        { text: 'Zugangskontrolle',
          antwort: 'Die betrifft die <b>Systeme</b>. Hier ist jemand körperlich in einen Raum gekommen – das ist eine andere Kontrollart.' },
        { text: 'Zugriffskontrolle',
          antwort: 'Die betrifft die <b>Daten</b>. Hier geht es darum, dass jemand überhaupt im Raum steht.' }
      ] },

    { typ: 'frage', von: 'sabrina',
      text: 'Wie heißt dieses Vorgehen?',
      optionen: [
        { text: 'Tailgating – Mitgehen durch eine geöffnete Tür', richtig: true,
          antwort: 'Genau, auch „Piggybacking" genannt. Es ist eine Form von [[Social Engineering]]: Warnweste anziehen, freundlich sein, hinterhergehen. Die wenigsten sprechen jemanden an, der kompetent wirkt – genau darauf setzt es.' },
        { text: 'Phishing',
          antwort: 'Das läuft über Nachrichten. Hier geht jemand körperlich durch eine Tür mit, die ein Berechtigter geöffnet hat – das hat einen eigenen Namen.' }
      ] },

    { typ: 'nachricht', von: 'sabrina', text: '14:12 Uhr: Er ist weg. Vorne am Empfang hat ihn niemand gesehen, einen Termin gab es nicht. Ich prüfe jetzt alle Anschlüsse im Serverraum.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Wonach suchen Sie konkret?' },

    { typ: 'mehrfach', von: 'sabrina',
      text: 'Worauf schaue ich jetzt? (mehrere)',
      optionen: [
        { text: 'Unbekannte USB-Geräte an Servern', richtig: true },
        { text: 'Fremde Geräte in freien Netzwerkdosen', richtig: true },
        { text: 'Hardware-Keylogger zwischen Tastatur und Rechner', richtig: true },
        { text: 'Ob der Raum sauber gefegt ist' },
        { text: 'Protokolle über Anmeldungen in diesem Zeitraum', richtig: true }
      ],
      antwortRichtig: 'Richtig. Wer physischen Zugang hat, kann in Minuten einen [[Keylogger]] anstecken, ein Gerät ins Netz hängen oder von einem USB-Medium booten. Deshalb der Grundsatz: <b>Wer physischen Zugang hat, hat am Ende fast immer auch Zugriff auf die Daten.</b>',
      antwortFalsch: 'Ein Punkt ist zwar nett, aber keine Sicherheitsmaßnahme. Überlegt, was jemand in wenigen Minuten im Serverraum <b>anbringen</b> könnte.' },

    { typ: 'nachricht', von: 'olschewski', text: 'Ich schalte mich ein. Auch wenn nichts gefunden wird, ist das ein dokumentationspflichtiger Sicherheitsvorfall – und möglicherweise eine Datenpanne, falls ein Zugriff nicht ausgeschlossen werden kann.' },

    { typ: 'mehrfach', von: 'hagedorn',
      text: 'Welche Maßnahmen ziehen wir daraus? (mehrere)',
      optionen: [
        { text: 'Besucher anmelden, ausweisen und begleiten', richtig: true },
        { text: 'Beschäftigte ermutigen, Unbekannte anzusprechen', richtig: true },
        { text: 'Serverraum separat verschließen, nicht nur das Gebäude', richtig: true },
        { text: 'Kamera am Serverraum', richtig: true },
        { text: 'Die Chipkarten abschaffen, sie haben ja nicht geholfen' }
      ],
      antwortRichtig: 'Gute Liste. Der zweite Punkt ist der schwierigste und wichtigste: Ansprechen muss <b>ausdrücklich erwünscht</b> sein. Solange Beschäftigte Angst haben, unhöflich zu wirken, funktioniert keine Zutrittskontrolle. Und: gestufter Schutz – das Gebäude ist eine Hürde, der Serverraum eine zweite.',
      antwortFalsch: 'Die Karten abzuschaffen würde es schlimmer machen. Gesucht sind Maßnahmen, die die <b>organisatorische</b> Lücke schließen.' },

    { typ: 'frage', von: 'brinkmann',
      text: 'Hätte ich ihn ansprechen sollen? Ich wollte nicht unhöflich sein.',
      optionen: [
        { text: 'Ja – und genau dafür braucht es eine klare Regel von oben', richtig: true,
          antwort: 'Richtig, und das ist keine Kritik an Ihnen. Höflichkeit ist genau das, was Angreifer einkalkulieren. Deshalb muss die Geschäftsführung ausdrücklich sagen: <b>Jeder darf und soll fragen</b> – „Zu wem gehören Sie? Ich begleite Sie zum Empfang." Dann ist es kein Affront mehr, sondern Dienstanweisung.' },
        { text: 'Nein, dafür ist die IT zuständig',
          antwort: 'Die IT kann nicht an jeder Tür stehen. Zutrittskontrolle funktioniert nur, wenn <b>alle</b> mitmachen – und dafür braucht es eine klare Regel, die das Ansprechen ausdrücklich erlaubt.' }
      ] },

    { typ: 'nachricht', von: 'hagedorn', text: 'Herr Brinkmann, Sie haben richtig gehandelt, indem Sie gefragt haben. Ich nehme das in die nächste Mitarbeiterinformation auf – inklusive des Satzes, dass Nachfragen ausdrücklich erwünscht ist.' },

    { typ: 'merk', text: '<b>Zutritt = Raum.</b> Wer physischen Zugang hat, hat am Ende fast immer Zugriff auf die Daten. Gegen <b>Tailgating</b> hilft keine Technik allein: Besucher anmelden und begleiten, gestufter Zutritt, und ein ausdrückliches „Nachfragen ist erwünscht".' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'not-05',
  kontakt: 'notfall',
  titel: 'Die eilige Überweisung',
  thema: 'Angriffe über Menschen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'luettmann', text: 'Ich habe gerade eine Mail von Frau Hagedorn bekommen. Sie sitzt angeblich in einem Notartermin und braucht dringend eine Überweisung – 24.800 Euro an einen neuen Lieferanten.' },
    { typ: 'nachricht', von: 'luettmann', text: 'In der Mail steht, es sei vertraulich und ich solle mit niemandem darüber sprechen, bis der Vertrag unterschrieben ist.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Ich sitze in keinem Notartermin und habe Ihnen nichts geschrieben.' },
    { typ: 'nachricht', von: 'sabrina', text: 'Bitte nichts überweisen. Leiten Sie die Mail an mich weiter – aber als Anhang, nicht als normale Weiterleitung, damit die technischen Kopfdaten erhalten bleiben.' },

    { typ: 'frage', von: 'sabrina',
      text: 'Was ist das für ein Angriff?',
      optionen: [
        { text: 'CEO-Fraud, die Chef-Masche', richtig: true, norm: 'Social Engineering',
          antwort: 'Genau. Beim [[CEO-Fraud]] geben sich Täter als Geschäftsführung aus und drängen auf eine eilige, vertrauliche Überweisung. Die Kombination ist typisch: <b>Autorität</b> plus <b>Zeitdruck</b> plus <b>Geheimhaltung</b> – damit niemand nachfragt.' },
        { text: 'Ein Trojaner',
          antwort: 'Hier ist keine Schadsoftware im Spiel. Der Angriff läuft rein über den Menschen – mit gefälschter Absenderadresse und Druck.' },
        { text: 'Ein Hoax',
          antwort: 'Ein [[Hoax]] ist eine harmlose Falschmeldung ohne Ziel. Hier geht es gezielt um Geld – das hat einen eigenen Namen.' }
      ] },

    { typ: 'frage', von: 'sabrina',
      text: 'Welches Element der Mail ist das gefährlichste?',
      optionen: [
        { text: 'Die Aufforderung zur Geheimhaltung', richtig: true,
          antwort: 'Sehr gut erkannt. Zeitdruck merkt man, Autorität auch – aber die Bitte um <b>Vertraulichkeit</b> schaltet genau die Kontrolle aus, die den Betrug verhindern würde: die Rückfrage bei Kollegen. Jede Nachricht, die Rückfragen verbietet, ist verdächtig.' },
        { text: 'Der hohe Betrag',
          antwort: 'Der fällt auf, ja. Aber gefährlicher ist das Element, das verhindert, dass jemand <b>nachfragt</b>.' }
      ] },

    { typ: 'frage', von: 'luettmann',
      text: 'Woran hätte ich es noch erkennen können?',
      optionen: [
        { text: 'An der genauen Absenderadresse', richtig: true,
          antwort: 'Richtig. Der angezeigte Name ist frei wählbar – entscheidend ist die <b>echte Adresse</b> dahinter. Oft ist ein Buchstabe getauscht oder die Domain minimal anders. Deshalb immer die vollständige Adresse ansehen, nicht nur den Anzeigenamen.' },
        { text: 'An der Uhrzeit',
          antwort: 'Ungewöhnliche Zeiten können ein Hinweis sein, sind aber kein Beweis. Verlässlicher ist die <b>echte Absenderadresse</b> hinter dem Anzeigenamen.' }
      ] },

    { typ: 'nachricht', von: 'sabrina', text: 'Bestätigt: Die Adresse lautet nicht auf unsere Domain, sondern auf eine mit vertauschten Buchstaben. Ich sperre den Absender und informiere alle, die Zahlungen freigeben.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Wir brauchen eine Regel, die so etwas unmöglich macht – unabhängig davon, wer schreibt. Auch wenn ich es wirklich bin.' },

    { typ: 'mehrfach', von: 'hagedorn',
      text: 'Welche Regeln helfen? (mehrere)',
      optionen: [
        { text: 'Vier-Augen-Prinzip ab einem festen Betrag', richtig: true },
        { text: 'Rückruf über die bekannte Nummer, nie über Kontaktdaten aus der Mail', richtig: true },
        { text: 'Neue Bankverbindungen nur nach Prüfung über einen zweiten Kanal', richtig: true },
        { text: 'Keine Ausnahmen wegen Eile – auch nicht für die Geschäftsführung', richtig: true },
        { text: 'Zahlungen nur noch von der Geschäftsführung selbst auslösen' }
      ],
      antwortRichtig: 'Richtig. Der letzte Punkt klingt sicher, verlagert das Risiko aber nur auf eine Person und macht sie zum einzigen Ziel. Entscheidend ist der vierte Punkt: <b>keine Ausnahmen wegen Eile</b>. Genau diese Ausnahme ist das Einfallstor – und sie schützt am Ende auch die Mitarbeiter.',
      antwortFalsch: 'Ein Punkt verlagert das Risiko, statt es zu verringern. Gesucht sind Regeln, die unabhängig von der Person greifen.' },

    { typ: 'frage', von: 'olschewski',
      text: 'Ist das auch ein Datenschutzthema?',
      optionen: [
        { text: 'Hier primär nicht – es geht um Betrug und Geld', richtig: true,
          antwort: 'Gut unterschieden. Solange keine personenbezogenen Daten abgeflossen sind, ist es ein <b>Sicherheits- und Compliance-Vorfall</b>, aber keine Datenpanne. Anders wäre es, wenn die Täter vorher Zugriff auf unser Postfach gehabt hätten – dann käme der Datenschutz sofort dazu. Deshalb prüft Frau Köster das jetzt.' },
        { text: 'Ja, immer wenn eine Mail gefälscht wird',
          antwort: 'Nicht automatisch. Entscheidend ist, ob <b>personenbezogene Daten</b> betroffen sind. Hier ging es um eine Überweisung – das ist Betrug, aber zunächst keine Datenpanne.' }
      ] },

    { typ: 'nachricht', von: 'luettmann', text: 'Ich bin froh, dass ich gefragt habe. Der Druck in der Mail war wirklich hoch.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Sie haben alles richtig gemacht. Und ich formuliere die Regel so, dass niemand in diese Lage kommt – Nachfragen ist nie falsch, auch bei mir nicht.' },

    { typ: 'merk', text: '<b>CEO-Fraud:</b> Autorität + Zeitdruck + Geheimhaltung. Das gefährlichste Element ist die Bitte um <b>Vertraulichkeit</b> – sie verhindert die Rückfrage. Gegenmittel: Vier-Augen-Prinzip, Rückruf über die <b>bekannte</b> Nummer, keine Ausnahmen wegen Eile.' }
  ]
});
