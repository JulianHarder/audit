/* ===========================================================
   AUDIT – data/dialoge-banneralarm.js
   Gruppenchat #banner-alarm. Wird aufgemacht, wenn der Shop
   von aussen beanstandet wird.

   Mehrere Sprecher, jeder Schritt traegt ein "von" aus
   AUDIT.data.sprecher in data/kontakte.js:
     rebholz    Marion (Marketing)
     ostrowski  Kevin (Agentur)
     keilhauer  Frau Dr. Keilhauer (IT-Recht)
     olschewski Herr Olschewski (DSB)
     hagedorn   Frau Hagedorn (GF)

   Ton: hektisch, kurze Beitraege, die Leute reden teils
   durcheinander. Die Fachaussagen bleiben korrekt.

   Kernthemen: Beschwerde einer Kundin, Anfrage der
   Aufsichtsbehoerde, Abmahnung wegen Google Fonts,
   Analytics lief ohne Einwilligung – und ob das eine
   meldepflichtige Datenpanne ist.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   ban-01 – Ich kann hier nicht ablehnen
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ban-01',
  kontakt: 'banneralarm',
  titel: '„Ich kann hier nicht ablehnen!"',
  thema: 'Banner und Consent',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'rebholz', text: 'Wir haben eine Mail im Shop-Postfach. Ich lese vor: „Ihr Cookie-Banner lässt mich nicht ablehnen. Ich habe fünf Minuten gesucht. Das ist rechtswidrig, ich erwarte eine Stellungnahme binnen einer Woche."' },
    { typ: 'nachricht', von: 'ostrowski', text: 'Ablehnen geht doch. Über „Einstellungen", dann die drei Schalter aus, dann „Auswahl speichern".' },
    { typ: 'nachricht', von: 'rebholz', text: 'Also drei Klicks und zwei Bildschirme. Zustimmen ist ein Klick.' },

    { typ: 'frage', text: 'Hat die Kundin recht?',
      optionen: [
        { text: 'Ja – Ablehnen muss genauso leicht und auf derselben Ebene möglich sein wie Zustimmen', richtig: true,
          antwort: 'Sie hat recht, und sie ist offensichtlich informiert. Drei Klicks gegen einen ist keine gleichwertige Wahl – das ist ein [[Dark Pattern]] und nimmt der [[Einwilligung]] die Freiwilligkeit.' },
        { text: 'Nein, Ablehnen ist möglich, also ist die Pflicht erfüllt',
          antwort: 'Die bloße Möglichkeit genügt nicht. Maßstab ist die <b>Gleichwertigkeit</b> von Zustimmen und Ablehnen.' },
        { text: 'Nein, sie hätte die Cookies im Browser blockieren können',
          antwort: 'Das kann sie immer – die Pflicht trifft aber <b>uns</b>. Auf die Selbsthilfe der Nutzerin darf man nicht verweisen.' }
      ] },

    { typ: 'nachricht', von: 'keilhauer', text: 'Ich schalte mich ein. Die Beanstandung trifft zu. Bevor wir antworten, braucht ich eine Entscheidung über das weitere Vorgehen.' },

    { typ: 'frage', text: 'Was ist jetzt der erste Schritt?',
      optionen: [
        { text: 'Das Banner korrigieren – „Alle ablehnen" gleichwertig neben „Alle akzeptieren"', richtig: true,
          antwort: 'Richtig, erst abstellen, dann antworten. Eine Stellungnahme zu einem Zustand, den man nicht geändert hat, macht die Lage schlechter. Die Korrektur ist eine halbe Stunde Arbeit.' },
        { text: 'Erst die Stellungnahme formulieren, dann in Ruhe umbauen',
          antwort: 'Das ist die falsche Reihenfolge. Jeder Tag läuft weiter mit unwirksamen Einwilligungen – und das lässt sich im Quelltext jederzeit nachprüfen.' },
        { text: 'Die Mail an die Agentur weiterleiten, sie hat das Banner gebaut',
          antwort: 'Die Agentur baut um, das stimmt. [[Verantwortlicher|Verantwortlich]] bleibt aber Rampe 7 – die Beschwerde beantworten wir selbst.' }
      ] },

    { typ: 'nachricht', von: 'hagedorn', text: 'Eine Frage zu den bisherigen Zustimmungen. Wir haben seit dem Start etwa viertausend Einwilligungen gesammelt. Was ist mit denen?' },

    { typ: 'frage', text: 'Was gilt für die bereits eingeholten Einwilligungen?',
      optionen: [
        { text: 'Sie sind unwirksam – es muss erneut eingeholt werden, auch bei denen, die zugestimmt hatten', richtig: true,
          antwort: 'Das ist die unangenehme, aber richtige Antwort. Ein mangelhaftes Banner erzeugt keine wirksame [[Einwilligung]] – auch nicht bei denen, die gern zugestimmt hätten. Nach dem Umbau muss das Banner allen erneut gezeigt werden.' },
        { text: 'Sie bleiben gültig, der Mangel betraf nur den Weg zum Ablehnen',
          antwort: 'Gerade dieser Weg macht die Entscheidung freiwillig. Fehlt die Freiwilligkeit, fehlt die wirksame Einwilligung – bei allen.' },
        { text: 'Sie bleiben gültig, wenn jemand später nicht widerspricht',
          antwort: 'Schweigen heilt eine unwirksame Einwilligung nicht. Das wäre ein [[Opt-out]], und das genügt gerade nicht.' }
      ] },

    { typ: 'nachricht', von: 'rebholz', text: 'Dann ist meine Statistik der letzten zwei Wochen also auch nicht verwertbar. Wunderbar.' },
    { typ: 'nachricht', von: 'olschewski', text: 'Die daraus entstandenen Daten sind ohne Rechtsgrundlage erhoben worden. Sie sind zu löschen, nicht weiterzuverwenden.' },

    { typ: 'frage', text: 'Wie sollte die Antwort an die Kundin aussehen?',
      optionen: [
        { text: 'Beanstandung bestätigen, Korrektur benennen, Löschung der betroffenen Daten zusagen', richtig: true,
          antwort: 'Genau so: kurz, sachlich, ohne Rechtfertigung. Eine Kundin, die eine berechtigte Beanstandung bestätigt bekommt, beschwert sich meist nicht bei der [[Aufsichtsbehörde]] – eine abwehrende Antwort erhöht das Risiko erheblich.' },
        { text: 'Mitteilen, dass das Banner einer gängigen Vorlage entspricht',
          antwort: 'Das ist kein Argument – eine verbreitete Vorlage kann genauso rechtswidrig sein. Und es klingt nach Abwehr.' },
        { text: 'Nicht antworten, es besteht keine Pflicht',
          antwort: 'Sie hat eine Frist gesetzt und wird sich sonst an die [[Art. 77 DSGVO|Aufsichtsbehörde]] wenden. Eine Antwort ist hier auch im eigenen Interesse.' }
      ] },

    { typ: 'merk', text: 'Ein mangelhaftes Banner macht <b>alle</b> darüber eingeholten Einwilligungen unwirksam – auch die echten. Folge: umbauen, erneut einholen, die ohne Grundlage erhobenen Daten löschen. Und bei einer berechtigten Beanstandung: bestätigen statt abwehren.' },

    { typ: 'nachricht', von: 'hagedorn', text: 'Kevin baut heute um, Frau Dr. Keilhauer entwirft die Antwort, Marion löscht die Auswertung. Danke – und gut, dass die Kundin geschrieben hat statt gleich zur Behörde zu gehen.' }
  ]
});

/* ---------------------------------------------------------------
   ban-02 – Post von der Aufsichtsbehörde
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ban-02',
  kontakt: 'banneralarm',
  titel: 'Post von der Aufsichtsbehörde',
  thema: 'Aufsicht und Bußgeld',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'hagedorn', text: 'Wir haben ein Schreiben der Landesdatenschutzbehörde. Betreff: „Prüfung von Websites im Bereich Onlinehandel". Es werden Auskünfte zu unserem Banner verlangt, Frist vier Wochen.' },
    { typ: 'nachricht', von: 'rebholz', text: 'Hat die Kundin uns gemeldet?' },
    { typ: 'nachricht', von: 'keilhauer', text: 'Das steht nicht drin. „Prüfung im Bereich Onlinehandel" klingt nach einer eigenen Prüfaktion – davon gibt es regelmäßig welche.' },

    { typ: 'frage', text: 'Woraus folgt die Befugnis der Behörde, so etwas zu verlangen?',
      optionen: [
        { text: 'Aus den Untersuchungsbefugnissen des Art. 58 Abs. 1 DSGVO', richtig: true, norm: 'Art. 58 Abs. 1 DSGVO',
          antwort: 'Richtig. Die [[Aufsichtsbehörde]] darf Auskünfte verlangen, Untersuchungen durchführen und Zugang zu Räumen und Anlagen erhalten. Sie wird nicht nur auf Beschwerde tätig, sondern auch von Amts wegen – gerade Websites prüft sie gern, weil es von außen ohne Besuch geht.' },
        { text: 'Aus dem Strafprozessrecht',
          antwort: 'Das wäre ein strafrechtliches Ermittlungsverfahren mit anderen Regeln. Hier handelt die Behörde als <b>Aufsicht</b> nach der DSGVO.' },
        { text: 'Aus dem Handelsrecht',
          antwort: 'Das Handelsrecht regelt Buchführung und Aufbewahrung. Die Befugnisse der Datenschutzaufsicht stehen in Art. 57 und 58 DSGVO.' }
      ] },

    { typ: 'nachricht', von: 'rebholz', text: 'Können wir die Frist einfach verstreichen lassen? Wir haben das Banner ja inzwischen korrigiert.' },

    { typ: 'frage', text: 'Was ist davon zu halten?',
      optionen: [
        { text: 'Nein – fehlende Mitwirkung ist ein eigener Bußgeldtatbestand', richtig: true, norm: 'Art. 83 Abs. 4 lit. a, Art. 31 DSGVO',
          antwort: 'Richtig, und das überrascht viele. Art. 31 DSGVO verpflichtet zur Zusammenarbeit mit der Aufsicht; die Verletzung ist nach Art. 83 selbständig bußgeldbewehrt. Man kann also <b>zweimal</b> belangt werden: für den Verstoß und für das Schweigen.' },
        { text: 'Zulässig, solange der Mangel behoben ist',
          antwort: 'Die Behebung ist gut und wirkt bei der Bemessung mildernd. Die Auskunftspflicht besteht aber unabhängig davon.' },
        { text: 'Zulässig, niemand muss sich selbst belasten',
          antwort: 'Das Prinzip gilt im Strafverfahren für natürliche Personen. Im aufsichtsrechtlichen Verfahren besteht die Mitwirkungspflicht nach Art. 31 DSGVO.' }
      ] },

    { typ: 'frage', text: 'Wer bearbeitet das Schreiben federführend?',
      optionen: [
        { text: 'Die Geschäftsführung als Verantwortliche, unterstützt vom DSB – er ist Anlaufstelle für die Behörde', richtig: true, norm: 'Art. 39 Abs. 1 lit. d und e DSGVO',
          antwort: 'Genau. Der [[Datenschutzbeauftragter|DSB]] ist nach Art. 39 ausdrücklich Anlaufstelle für die Aufsichtsbehörde und arbeitet mit ihr zusammen. Entscheiden und unterschreiben muss aber der [[Verantwortlicher|Verantwortliche]] – die [[Interessenkonflikt|Rollentrennung]] bleibt gewahrt.' },
        { text: 'Der DSB allein, er ist für Datenschutz zuständig',
          antwort: 'Er berät und überwacht, er entscheidet nicht. Eine Stellungnahme des Unternehmens gibt die Leitung ab.' },
        { text: 'Die Agentur, sie hat das Banner gebaut',
          antwort: 'Die Agentur liefert technische Angaben zu. Nach außen antwortet der [[Verantwortlicher|Verantwortliche]].' }
      ] },

    { typ: 'mehrfach', text: 'Was wirkt bei der Bemessung eines Bußgeldes mildernd? (mehrere)',
      optionen: [
        { text: 'Der Mangel wurde vor dem Schreiben selbst erkannt und behoben', richtig: true },
        { text: 'Offene und vollständige Mitwirkung', richtig: true },
        { text: 'Keine früheren Verstöße', richtig: true },
        { text: 'Maßnahmen zur Verhinderung einer Wiederholung', richtig: true },
        { text: 'Dass das Unternehmen klein ist' },
        { text: 'Dass die Agentur den Fehler gemacht hat' }
      ],
      antwortRichtig: 'Die vier richtigen stehen so in Art. 83 Abs. 2 DSGVO. Die Unternehmensgröße spielt zwar für die <b>Höhe</b> eine Rolle – die Obergrenze bemisst sich am Jahresumsatz –, ist aber kein mildernder Umstand. Und ein Fehler des [[Auftragsverarbeiter|Auftragsverarbeiters]] entlastet den Verantwortlichen nach außen nicht.',
      antwortFalsch: 'Vier der sechs sind echte Bemessungskriterien aus Art. 83 Abs. 2. Überlege bei den anderen beiden, ob sie den Verantwortlichen wirklich entlasten.' },

    { typ: 'merk', text: 'Die [[Aufsichtsbehörde]] prüft auch <b>ohne Beschwerde</b> (Art. 58 Abs. 1) – Websites besonders gern, weil es von außen geht. Mitwirkung ist Pflicht (Art. 31), ihre Verletzung ein <b>eigener</b> [[Bußgelder|Bußgeldtatbestand]]. Der [[Datenschutzbeauftragter|DSB]] ist Anlaufstelle, antworten muss die Leitung.' },

    { typ: 'nachricht', von: 'hagedorn', text: 'Dann antworten wir vollständig und fügen die Korrektur samt Datum bei. Herr Olschewski, bitte entwerfen Sie das mit Frau Dr. Keilhauer.' }
  ]
});

/* ---------------------------------------------------------------
   ban-03 – Abmahnung wegen der Schriftart
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ban-03',
  kontakt: 'banneralarm',
  titel: 'Abmahnung wegen einer Schriftart',
  thema: 'Drittanbieter',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'hagedorn', text: 'Ein Anwaltsschreiben. Jemand verlangt 170 Euro Schadenersatz, weil beim Besuch unseres Shops seine IP-Adresse an Google übermittelt worden sei – durch eine nachgeladene Schriftart.' },
    { typ: 'nachricht', von: 'ostrowski', text: 'Das kann hinkommen. Im alten Theme war die Schrift dynamisch eingebunden. Ich habe das beim Umbau nicht angefasst.' },
    { typ: 'nachricht', von: 'rebholz', text: 'Wegen einer Schriftart? Das ist doch keine Datenverarbeitung.' },

    { typ: 'frage', text: 'Ist es eine?',
      optionen: [
        { text: 'Ja – beim Abruf wird die IP-Adresse an den fremden Server übermittelt', richtig: true, norm: 'LG München I, 3 O 17493/20',
          antwort: 'Ja, und genau das war der Fall [[Google Fonts]]: Das LG München sprach 2022 100 Euro Schadenersatz zu. Eine IP-Adresse ist ein [[personenbezogene Daten|personenbezogenes Datum]], die Übermittlung an einen Dritten eine [[Verarbeitung]] – ganz ohne Cookie.' },
        { text: 'Nein, eine Schriftart enthält keine personenbezogenen Daten',
          antwort: 'Die Datei nicht. Der <b>Abruf</b> ist der Vorgang: Dabei erfährt der fremde Server IP-Adresse, Zeitpunkt und aufgerufene Seite.' },
        { text: 'Nein, ohne Cookie gibt es keine Verarbeitung',
          antwort: 'Ein verbreiteter Irrtum. Eine [[Drittanbieter-Einbindung]] überträgt Daten schon beim Laden – ein Cookie ist nicht nötig.' }
      ] },

    { typ: 'frage', text: 'Was ist technisch zu tun?',
      optionen: [
        { text: 'Die Schriftart lokal ausliefern – dann entfällt die Übermittlung vollständig', richtig: true,
          antwort: 'Richtig, und es ist eine halbe Stunde Arbeit: Dateien herunterladen, mit ausliefern, den Verweis im Stylesheet ändern. Danach gibt es den Vorgang nicht mehr – das ist [[Privacy by Design]] in seiner einfachsten Form. Die Seite wird dabei sogar schneller.' },
        { text: 'Die Schrift in das Consent-Tool aufnehmen und nach Einwilligung laden',
          antwort: 'Zulässig, aber unnötig umständlich. Wenn man den Vorgang ganz vermeiden kann, holt man keine Einwilligung ein.' },
        { text: 'Eine andere Schriftart von einem europäischen Anbieter laden',
          antwort: 'Das löst nur die [[Drittland|Drittlandfrage]], nicht die Übermittlung selbst. Die IP-Adresse geht weiter an einen Dritten.' }
      ] },

    { typ: 'nachricht', von: 'keilhauer', text: 'Zur Forderung selbst: Solche Serienschreiben gehen oft an hunderte Betreiber gleichzeitig. Ob der Anspruch im Einzelfall durchgeht, ist umstritten – mehrere Gerichte haben bei massenhaften Schreiben einen Rechtsmissbrauch angenommen, etwa wenn die Seite gezielt mit automatisierten Mitteln aufgerufen wurde.' },
    { typ: 'nachricht', von: 'keilhauer', text: 'Bezahlen oder nicht, entscheiden wir mit Blick auf diesen Einzelfall. Unabhängig davon gilt für die Technik:' },

    { typ: 'frage', text: 'Was folgt unabhängig von der Forderung?',
      optionen: [
        { text: 'Alle Drittanbieter-Einbindungen im Shop prüfen und die vermeidbaren abschalten', richtig: true,
          antwort: 'Genau. Ein Schreiben betrifft einen Fall, aber es gibt im Shop sieben solche Einbindungen. Schriften, Icons und Bibliotheken liefert man <b>lokal</b> aus; echte Dienste wie Karte und Video lädt man erst nach [[Einwilligung]]. Danach ist das Thema dauerhaft erledigt.' },
        { text: 'Abwarten, ob weitere Schreiben kommen',
          antwort: 'Abwarten lässt den Zustand laufen – und jeder weitere Besucher ist ein weiterer möglicher Anspruch.' },
        { text: 'Einen Haftungsausschluss in die Datenschutzerklärung aufnehmen',
          antwort: 'Ein Haftungsausschluss gegenüber betroffenen Personen ist datenschutzrechtlich wirkungslos. Die Ansprüche aus [[Art. 82 DSGVO]] lassen sich nicht wegbedingen.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Einbindungen im Shop lassen sich durch lokales Ausliefern erledigen? (mehrere)',
      optionen: [
        { text: 'Schriftarten', richtig: true },
        { text: 'Icon-Set', richtig: true },
        { text: 'JavaScript-Bibliothek aus einem CDN', richtig: true },
        { text: 'Kartendienst mit Routenberechnung' },
        { text: 'Videoplattform' },
        { text: 'Like-Button' }
      ],
      antwortRichtig: 'Die ersten drei sind <b>statische Dateien</b> – einfach mitliefern. Karte, Video und [[Social Plugin|Like-Button]] brauchen den Dienst des Dritten im Betrieb; dort hilft nur Einwilligung oder eine Vorschau, die erst auf Klick lädt.',
      antwortFalsch: 'Die Trennlinie ist: Datei, die ich mitliefern kann – oder Dienst, den ich im Betrieb brauche?' },

    { typ: 'merk', text: 'Jede [[Drittanbieter-Einbindung]] überträgt beim Abruf die <b>IP-Adresse</b>, auch ohne Cookie – [[Google Fonts]] war 2022 der Auslöser einer Abmahnwelle. Statische Dateien deshalb <b>lokal</b> ausliefern. Ein Haftungsausschluss gegenüber Betroffenen wirkt <b>nicht</b>.' },

    { typ: 'nachricht', von: 'ostrowski', text: 'Ich lade heute alles lokal und schicke euch die Liste der verbleibenden Verbindungen. Dann sind es drei statt sieben, und die laufen erst nach dem Klick.' }
  ]
});

/* ---------------------------------------------------------------
   ban-04 – Analytics lief ohne Einwilligung
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'ban-04',
  kontakt: 'banneralarm',
  titel: 'Zwei Wochen Analytics ohne Einwilligung',
  thema: 'Datenpanne',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'ostrowski', text: 'Schlechte Nachricht. Beim Aufräumen habe ich gesehen: Das Analyse-Skript war im Theme hart eingebunden, nicht über das Consent-Tool. Es ist seit dem Start bei <b>jedem</b> Seitenaufruf gelaufen – unabhängig davon, was im Banner geklickt wurde.' },
    { typ: 'nachricht', von: 'rebholz', text: 'Dann sind meine Zahlen immerhin vollständig. Sorry, falscher Moment.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Zwei Wochen, etwa 9.000 Besuche. Müssen wir das jetzt der Behörde melden? Herr Olschewski?' },

    { typ: 'frage', text: 'Ist das eine meldepflichtige Datenpanne nach Art. 33 DSGVO?',
      optionen: [
        { text: 'Nein – es ist eine unrechtmäßige Verarbeitung, aber keine Verletzung der Datensicherheit', richtig: true, norm: 'Art. 4 Nr. 12, Art. 33 DSGVO',
          antwort: 'Richtig, und das ist eine feine, prüfungsrelevante Unterscheidung. Eine [[Datenpanne]] im Sinne von Art. 4 Nr. 12 ist eine <b>Verletzung der Sicherheit</b>: Vernichtung, Verlust, Veränderung oder unbefugte Offenlegung. Hier ist nichts verlorengegangen – wir haben etwas verarbeitet, das wir nicht verarbeiten durften. Das ist ein Verstoß gegen die Rechtmäßigkeit (Art. 5, 6, § 25 TDDDG), nicht gegen die Sicherheit.' },
        { text: 'Ja, es sind Daten ohne Grundlage an einen Dritten gegangen – binnen 72 Stunden melden',
          antwort: 'Verständlicher Reflex, aber die Norm passt nicht. [[Art. 33 DSGVO|Art. 33]] knüpft an eine <b>Verletzung der Sicherheit</b> an. Eine von Anfang an unrechtmäßige, aber planmäßig funktionierende Verarbeitung ist etwas anderes – sie ist abzustellen und aufzuarbeiten, aber nicht nach Art. 33 zu melden.' },
        { text: 'Ja, aber nur wenn sich jemand beschwert',
          antwort: 'Die Meldepflicht hängt nicht von einer Beschwerde ab, sondern vom Vorliegen einer Sicherheitsverletzung mit Risiko. Hier fehlt schon die Sicherheitsverletzung.' }
      ] },

    { typ: 'nachricht', von: 'olschewski', text: 'Genau so würde ich es auch einordnen. Keine Meldung nach Art. 33 – aber damit ist es nicht erledigt. Es bleibt ein Verstoß, und er ist zu dokumentieren.' },

    { typ: 'mehrfach', text: 'Was ist jetzt zu tun? (mehrere)',
      optionen: [
        { text: 'Das Skript sofort hinter das Consent-Tool legen', richtig: true },
        { text: 'Die ohne Grundlage erhobenen Daten löschen', richtig: true },
        { text: 'Den Vorfall intern dokumentieren, mit Ursache und Abhilfe', richtig: true },
        { text: 'Den DSB einbeziehen und die Ursache abstellen', richtig: true },
        { text: 'Innerhalb von 72 Stunden der Aufsichtsbehörde melden' },
        { text: 'Alle 9.000 Besucher einzeln benachrichtigen' }
      ],
      antwortRichtig: 'Die vier richtigen sind der ganze Pflichtenkreis: abstellen, löschen, dokumentieren, Ursache beheben. Die 72 Stunden aus [[Art. 33 DSGVO]] und die Benachrichtigung nach [[Art. 34 DSGVO]] setzen eine <b>Verletzung der Sicherheit</b> voraus – und die liegt hier nicht vor. Die Dokumentation gehört zur [[Rechenschaftspflicht]]: Wer einen Verstoß erkennt, abstellt und belegt, steht bei einer späteren Prüfung deutlich besser da.',
      antwortFalsch: 'Vier Punkte sind Pflicht. Prüfe bei den beiden Fristen-Punkten noch einmal, ob hier wirklich eine Verletzung der <b>Datensicherheit</b> vorliegt.' },

    { typ: 'nachricht', von: 'rebholz', text: 'Und wenn jemand fragt, wie viele Besucher wir hatten? Ich habe die Zahl ja gesehen.' },

    { typ: 'frage', text: 'Darf Marion die Zahlen aus diesen zwei Wochen verwenden?',
      optionen: [
        { text: 'Nein – ohne Rechtsgrundlage erhoben, also nicht weiterzuverwenden und zu löschen', richtig: true,
          antwort: 'Richtig, und das ist der unbequeme Teil. Daten, die ohne [[Rechtsgrundlage]] erhoben wurden, darf man nicht einfach behalten, weil sie nützlich sind – das wäre eine Fortsetzung des Verstoßes. Aggregierte Werte, die keinen Personenbezug mehr haben, sind davon nicht betroffen; die reine Besucherzahl darf also bleiben.' },
        { text: 'Ja, die Daten sind nun einmal da',
          antwort: 'Das wäre eine Fortsetzung des Verstoßes. Die fehlende Grundlage wirkt auf den Bestand durch.' },
        { text: 'Ja, wenn sie anschließend gelöscht werden',
          antwort: 'Die Nutzung ist der Verstoß, nicht die Speicherdauer. Erst nutzen und dann löschen heilt nichts.' }
      ] },

    { typ: 'nachricht', von: 'keilhauer', text: 'Eine Anmerkung noch, weil es in Prüfungen gern durcheinandergeht: Hätte das Skript die Daten etwa durch eine Fehlkonfiguration öffentlich zugänglich gemacht, wäre es sehr wohl eine Datenpanne. Es kommt auf die <b>Sicherheit</b> an, nicht auf die Schwere.' },

    { typ: 'frage', text: 'Welcher dieser Fälle wäre eine meldepflichtige Datenpanne?',
      optionen: [
        { text: 'Die Kundendatenbank ist wegen einer Fehlkonfiguration öffentlich im Netz erreichbar', richtig: true, norm: 'Art. 4 Nr. 12, Art. 33 DSGVO',
          antwort: 'Genau das ist eine [[Datenpanne]]: unbefugter Zugang zu personenbezogenen Daten, also eine Verletzung der <b>Vertraulichkeit</b>. Bei Risiko für die Betroffenen innerhalb von 72 Stunden an die [[Aufsichtsbehörde]] melden – und bei hohem Risiko zusätzlich die Betroffenen nach [[Art. 34 DSGVO]] informieren.' },
        { text: 'Ein Newsletter wird ohne gültige Einwilligung versandt',
          antwort: 'Ein klarer Verstoß gegen die Rechtmäßigkeit – aber nichts ist verlorengegangen oder offengelegt worden. Keine Sicherheitsverletzung, also keine Meldung nach Art. 33.' },
        { text: 'Das Cookie-Banner lässt sich nicht gleichwertig ablehnen',
          antwort: 'Ein Mangel an der [[Einwilligung]], keine Verletzung der Sicherheit. Abzustellen, aber nicht nach Art. 33 zu melden.' }
      ] },

    { typ: 'merk', text: '<b>Nicht jeder Verstoß ist eine [[Datenpanne]].</b> Art. 33 greift bei einer Verletzung der <b>Sicherheit</b> – Vernichtung, Verlust, Veränderung, unbefugte Offenlegung oder Zugang. Eine unrechtmäßige, aber sicher funktionierende Verarbeitung ist ein Verstoß gegen die <b>Rechtmäßigkeit</b>: abstellen, löschen, dokumentieren – nicht melden.' },

    { typ: 'nachricht', von: 'hagedorn', text: 'Gut. Kevin stellt ab, Marion löscht, Herr Olschewski dokumentiert. Und wir führen ein, dass jede neue Einbindung über das Consent-Tool geht – nicht über das Theme.' }
  ]
});
