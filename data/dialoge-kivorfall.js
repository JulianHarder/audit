/* ===========================================================
   AUDIT – data/dialoge-kivorfall.js
   Gruppenchat #ki-vorfall. Wird aufgemacht, wenn ein
   KI-Werkzeug etwas getan hat, das niemand so wollte.

   Mehrere Sprecher, jeder Schritt traegt ein "von" aus
   AUDIT.data.sprecher in data/kontakte.js:
     vollmer      Hendrik (IT-Projekt)
     azizi        Herr Azizi (Compliance)
     gruenwald    Frau Gruenwald (Personal)
     noah         Noah (Azubi)
     olschewski   Herr Olschewski (DSB)
     hagedorn     Frau Hagedorn (GF)
     rebholz      Marion (Marketing)

   Ton: kurze Beitraege, teils durcheinander. Hendrik meldet,
   Azizi sortiert, Olschewski prueft die Fristen, Frau
   Hagedorn fragt nach Kosten und Haftung. Die Fachaussagen
   bleiben korrekt.

   Kernthemen: Kundendaten im Chatbot als Datenpanne,
   Deepfake-Anruf und CEO-Fraud, nicht freigegebene Werkzeuge
   (Schatten-KI), und was aus den Vorfaellen folgt.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   kvo-01 – der bot kennt den falschen kunden
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kvo-01',
  kontakt: 'kivorfall',
  titel: 'Der Bot kennt den falschen Kunden',
  thema: 'Datenpanne',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'vollmer', text: 'Ich mache den Kanal auf, weil wir ein Problem mit dem Shop-[[Chatbot]] haben. Eine Kundin hat nach dem Stand ihrer Lieferung gefragt. Der Bot hat geantwortet – mit der Lieferadresse und der Telefonnummer einer <b>anderen</b> Kundin.' },
    { typ: 'nachricht', von: 'vollmer', text: 'Sie hat einen Screenshot geschickt. Ich habe den Bot vor zehn Minuten abgeschaltet.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Wie viele Kunden sind betroffen, Herr Vollmer?' },
    { typ: 'nachricht', von: 'vollmer', text: 'Das kläre ich gerade. Der Fehler sitzt in der Zuordnung der Sitzung – im schlechtesten Fall hat es jeden getroffen, der heute gleichzeitig mit anderen im Chat war.' },

    { typ: 'frage', text: 'Du bist mit Noah am Rechner. Was ist jetzt der richtige erste Schritt?',
      optionen: [
        { text: 'Nach dem festgelegten Meldeweg vorgehen – Vorfall melden, Abschaltung dokumentieren', richtig: true,
          antwort: 'Richtig, und Hendrik hat den ersten Teil schon getan: System aus, damit nichts weiter abfließt. Jetzt zählt die Meldung über den [[Notfallkonzept|festgelegten Weg]], damit [[Datenschutzbeauftragter|DSB]] und [[Verantwortlicher]] die Frist beurteilen können. Die Bewertung, ob gemeldet werden muss, trifft nicht die IT allein.' },
        { text: 'Zuerst den Umfang vollständig aufklären, dann melden',
          antwort: 'Die Aufklärung läuft parallel, aber sie ist keine Vorbedingung. Die Frist nach [[Art. 33 DSGVO]] läuft ab <b>Kenntnis</b> – wer erst vollständig ermittelt, verbraucht sie.' },
        { text: 'Die betroffene Kundin anrufen und um Löschung des Screenshots bitten',
          antwort: 'Verständlicher Reflex, aber der falsche Schritt. Die Kundin ist Betroffene, nicht die Ursache – und sie ist nicht verpflichtet, Beweise zu löschen.' }
      ] },

    { typ: 'nachricht', von: 'olschewski', text: 'Danke. Ich bin eingebunden. Wir prüfen zwei Dinge getrennt: die Meldung an die Aufsichtsbehörde und die Information der betroffenen Personen.' },

    { typ: 'frage', text: 'Welche Frist gilt für die Meldung an die Aufsichtsbehörde?',
      optionen: [
        { text: '72 Stunden ab Kenntnis, es sei denn ein Risiko für die Betroffenen ist unwahrscheinlich', richtig: true, norm: '[[Art. 33 DSGVO]]',
          antwort: 'Richtig. Unverzüglich, spätestens binnen 72 Stunden. Die Ausnahme greift nur, wenn ein Risiko <b>unwahrscheinlich</b> ist – bei offengelegten Adressen und Telefonnummern ist das nicht der Fall. Eine Meldung darf auch unvollständig erfolgen und wird nachgereicht.' },
        { text: '24 Stunden, weil es sich um besonders sensible Daten handelt',
          antwort: 'Adressen und Telefonnummern sind nicht besonders geschützt im Sinne von Art. 9. Und eine 24-Stunden-Frist kennt die DSGVO ohnehin nicht.' },
        { text: 'Keine Frist – gemeldet wird erst, wenn die Ursache behoben ist',
          antwort: 'Dann hätte man es in der Hand, die Frist durch langsame Fehlerbehebung zu verlängern. Die Frist läuft ab Kenntnis der Verletzung, nicht ab ihrer Behebung.' }
      ] },

    { typ: 'nachricht', von: 'gruenwald', text: 'Und die Kundinnen selbst? Die eine weiß es ja schon, sie hat es gesehen.' },

    { typ: 'frage', text: 'Wann sind die betroffenen Personen zu informieren?',
      optionen: [
        { text: 'Wenn ein hohes Risiko für ihre Rechte und Freiheiten besteht – dann unverzüglich und in klarer Sprache', richtig: true, norm: '[[Art. 34 DSGVO]]',
          antwort: 'Genau, und das ist die zweite, eigenständige Prüfung. Zwei Schwellen: Meldung an die Behörde schon bei <b>Risiko</b>, Information der Betroffenen erst bei <b>hohem Risiko</b>. Dass eine Kundin es selbst gesehen hat, entlastet gegenüber den anderen nicht.' },
        { text: 'Immer, sobald eine Datenpanne gemeldet wurde',
          antwort: 'Nicht jede meldepflichtige Panne löst die Information der Betroffenen aus. Die Schwelle dort ist höher.' },
        { text: 'Nur, wenn die Aufsichtsbehörde es anordnet',
          antwort: 'Die Behörde kann es anordnen, aber die Pflicht besteht unabhängig davon aus Art. 34.' }
      ] },

    { typ: 'nachricht', von: 'azizi', text: 'Ergänzend, damit die Einordnung vollständig ist: Dies ist eine Datenschutzverletzung, kein schwerwiegender Vorfall im Sinne der KI-Verordnung. Ein Chatbot ist kein Hochrisiko-System – die Meldewege nach Art. 73 KI-VO greifen hier nicht.' },

    { typ: 'frage', text: 'Was folgt aus Herrn Azizis Hinweis?',
      optionen: [
        { text: 'Der Fall läuft über die DSGVO – ein KI-Vorfall und eine Datenpanne sind zwei verschiedene Melderegime', richtig: true,
          antwort: 'Richtig, und das ist eine beliebte Prüfungsfrage. Eine [[Datenpanne]] geht an die [[Aufsichtsbehörde]]; ein [[Schwerwiegender Vorfall]] nach Art. 73 KI-VO betrifft Hochrisiko-Systeme und geht an die [[Marktüberwachungsbehörde]]. Ein Ereignis kann beides auslösen – dieses hier nur das erste.' },
        { text: 'Der Vorfall muss nicht gemeldet werden, weil die KI-Verordnung nicht greift',
          antwort: 'Das wäre der falsche Umkehrschluss. Die DSGVO greift vollständig – die Meldung ist fällig.' },
        { text: 'Die Zuständigkeit wechselt zur Marktüberwachungsbehörde',
          antwort: 'Umgekehrt: Die Marktüberwachung ist hier gerade <b>nicht</b> zuständig, weil es kein Hochrisiko-System ist.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört in die Bearbeitung des Vorfalls? (mehrere)',
      optionen: [
        { text: 'Abschaltung und Ursachenanalyse dokumentieren', richtig: true },
        { text: 'Umfang ermitteln: wie viele Personen, welche Datenarten', richtig: true },
        { text: 'Meldung an die Aufsichtsbehörde innerhalb von 72 Stunden prüfen und begründen', richtig: true },
        { text: 'Information der Betroffenen bei hohem Risiko', richtig: true },
        { text: 'Eintrag in das interne Verzeichnis der Datenschutzverletzungen', richtig: true },
        { text: 'Meldung an die Marktüberwachungsbehörde nach Art. 73 KI-VO' }
      ],
      antwortRichtig: 'Vollständig. Die letzte Zeile wäre der Fehler: Art. 73 betrifft Hochrisiko-Systeme. Beachte auch die fünfte: Das Verzeichnis ist nach Art. 33 Abs. 5 DSGVO für <b>jede</b> Verletzung zu führen – auch für die, die nicht gemeldet wird, denn die Entscheidung gegen eine Meldung muss begründet sein.',
      antwortFalsch: 'Fünf Schritte folgen aus der [[DSGVO]]. Einer stammt aus einem Regime, das nur für Hochrisiko-Systeme gilt.' },

    { typ: 'merk', text: '<b>Zwei Melderegime trennen:</b> [[Datenpanne]] → [[Aufsichtsbehörde]], <b>72 Stunden</b> ab Kenntnis ([[Art. 33 DSGVO]]), Betroffene erst bei <b>hohem</b> Risiko ([[Art. 34 DSGVO]]). [[Schwerwiegender Vorfall]] → [[Marktüberwachungsbehörde]] (Art. 73 KI-VO), nur bei <b>Hochrisiko</b>-Systemen. Ein Ereignis kann beides sein. Jede Verletzung wird intern dokumentiert – auch die nicht gemeldete.' },

    { typ: 'nachricht', von: 'hagedorn', text: 'Danke. Ich möchte morgen eine schriftliche Zusammenfassung. Und bitte jemanden, der mir erklärt, warum ich heute Mittag angeblich selbst angerufen habe.' }
  ]
});

/* ---------------------------------------------------------------
   kvo-02 – der anruf von frau hagedorn
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kvo-02',
  kontakt: 'kivorfall',
  titel: 'Der Anruf von Frau Hagedorn',
  thema: 'Deepfake und CEO-Fraud',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'gruenwald', text: 'Dann erzähle ich es: Heute um 12:40 Uhr ruft es in der Buchhaltung. Am Telefon Frau Hagedorn – ihre Stimme, ihre Art zu sprechen, sogar die Pause, die sie immer vor „also" macht.' },
    { typ: 'nachricht', von: 'gruenwald', text: 'Sie sagt, sie sitze in einem Notartermin, es gehe um eine Beteiligung, die Sache sei vertraulich, und es müsse heute noch eine Anzahlung von 48.000 Euro raus. Der Kollege hat die Überweisung angelegt.' },
    { typ: 'nachricht', von: 'hagedorn', text: 'Ich war heute Mittag in Münster. Beim Zahnarzt.' },
    { typ: 'nachricht', von: 'gruenwald', text: 'Die Überweisung ist nicht raus. Der Kollege hat sie angelegt und dann die Vier-Augen-Freigabe gebraucht – und die Kollegin hat nachgefragt.' },

    { typ: 'frage', text: 'Was war der entscheidende Schutz in diesem Fall?',
      optionen: [
        { text: 'Das Vier-Augen-Prinzip – eine zweite Person musste freigeben und hat nachgefragt', richtig: true,
          antwort: 'Genau. Gegen einen überzeugenden [[Deepfake]] hilft keine Technik am Telefon, sondern der <b>Ablauf</b>: [[Vier-Augen-Prinzip]], feste Freigabewege, Rückruf über die bekannte Nummer. Der erste Kollege hat alles richtig gemacht außer dem Misstrauen – und genau deshalb gibt es die zweite Unterschrift.' },
        { text: 'Dass der Betrag über der Freigabegrenze lag',
          antwort: 'Die Grenze hat das Vier-Augen-Prinzip ausgelöst, das ist richtig. Wirksam war aber die <b>Nachfrage</b> der zweiten Person – eine stille Freigabe hätte die Grenze nicht aufgehalten.' },
        { text: 'Die Rufnummernanzeige, die eine fremde Nummer gezeigt hat',
          antwort: 'Auf die Rufnummernanzeige kann man sich nicht verlassen, sie lässt sich fälschen. In diesem Fall hat sie auch niemand geprüft.' }
      ] },

    { typ: 'nachricht', von: 'noah', text: 'aber wie kommen die an ihre stimme?? 😳' },
    { typ: 'nachricht', von: 'azizi', text: 'Frau Hagedorn hat im Mai ein Interview für den Logistik-Podcast gegeben. 40 Minuten frei im Netz. Für einen Stimmklon genügt heute ein Bruchteil davon.' },

    { typ: 'frage', text: 'Noah fragt dich: „Verstößt der Anrufer nicht gegen Art. 50, weil er den Deepfake nicht offengelegt hat?"',
      optionen: [
        { text: 'Formal ja – praktisch bedeutungslos, denn wer betrügt, hält sich nicht an Kennzeichnungspflichten. Hier greift das Strafrecht', richtig: true,
          antwort: 'Gut erklärt. Die Offenlegungspflicht aus Art. 50 Abs. 4 richtet sich an <b>redliche</b> Betreiber – an die Werbeagentur, die eine erzeugte Stimme einsetzt. Ein Betrüger begeht Betrug, und ihn hält keine Verordnung auf. Deshalb liegt der Schutz hier in der Organisation, nicht im AI Act.' },
        { text: 'Nein, Art. 50 gilt nur für Bilder und Videos, nicht für Stimmen',
          antwort: 'Abs. 2 und 4 nennen Bild, <b>Ton</b> und Video ausdrücklich. An der Einordnung liegt es nicht.' },
        { text: 'Ja, und deshalb kann Rampe 7 Schadensersatz nach der KI-Verordnung verlangen',
          antwort: 'Gegen einen unbekannten Täter hilft kein Anspruch. Und die KI-Verordnung ist Produktregulierung – sie richtet sich an Anbieter und Betreiber, nicht an Kriminelle.' }
      ] },

    { typ: 'nachricht', von: 'hagedorn', text: 'Mich interessiert, was wir ändern. Ich kann nicht aufhören, öffentlich zu sprechen.' },

    { typ: 'frage', text: 'Was ist die wirksamste Änderung?',
      optionen: [
        { text: 'Feste Regel: Zahlungsanweisungen nie allein auf Zuruf – Rückruf über die bekannte Nummer, unabhängig davon, wer anruft', richtig: true,
          antwort: 'Richtig, und entscheidend ist das Wort <b>unabhängig</b>. Die Regel darf nicht am Rang scheitern: Wenn der Rückruf nur bei unbekannten Anrufern gilt, wirkt sie genau dann nicht, wenn sie gebraucht wird. Das muss von der Leitung selbst kommen – sonst traut sich niemand, die Chefin zurückzurufen.' },
        { text: 'Eine Software zur Erkennung von Stimmklonen einsetzen',
          antwort: 'Die Erkennung ist unzuverlässig und veraltet mit jeder Modellgeneration. Sich darauf zu verlassen, verschiebt das Risiko nur.' },
        { text: 'Keine Interviews und keine Videos der Geschäftsführung mehr veröffentlichen',
          antwort: 'Das würde die Öffentlichkeitsarbeit beenden und wenig bringen – Stimmmaterial findet sich in jeder Telefonkonferenz. Der Hebel liegt im Freigabeweg.' }
      ] },

    { typ: 'mehrfach', text: 'Woran erkennt man diese Masche? (mehrere)',
      optionen: [
        { text: 'Autorität – es ruft jemand an, dem man nicht widerspricht', richtig: true },
        { text: 'Zeitdruck – es muss heute noch raus', richtig: true },
        { text: 'Verschwiegenheit – mit niemandem darüber sprechen', richtig: true },
        { text: 'Abweichung vom normalen Weg – kein Vorgang, keine Unterlagen, nur ein Anruf', richtig: true },
        { text: 'Eine schlechte Tonqualität, die den Klon verrät' }
      ],
      antwortRichtig: 'Vollständig. Die Tonqualität ist kein Merkmal mehr – gerade die Rauschkulisse eines angeblichen Notartermins erklärt jede Unsauberkeit und macht das Gespräch glaubwürdiger. Die vier anderen sind die klassischen Hebel des [[Social Engineering]] und funktionieren seit Jahrzehnten unverändert – nur die Stimme ist neu.',
      antwortFalsch: 'Vier Merkmale betreffen das <b>Verhalten</b> des Anrufers. Eines betrifft die Technik – und verlässt sich darauf, dass Fälschungen schlecht klingen.' },

    { typ: 'merk', text: '<b>[[CEO-Fraud]] mit [[Deepfake|Stimmklon]]:</b> Die Masche ist alt, nur die Stimme ist neu – die Hebel bleiben <b>Autorität, Eile, Verschwiegenheit</b>. Technische Erkennung ist unzuverlässig; Schutz ist organisatorisch: [[Vier-Augen-Prinzip]], Rückruf über die bekannte Nummer, keine Zahlung auf Zuruf – <b>unabhängig davon, wer anruft</b>. Art. 50 KI-VO verpflichtet redliche Betreiber, keine Betrüger.' },

    { typ: 'nachricht', von: 'hagedorn', text: 'Die Regel kommt von mir, schriftlich, bis Freitag. Und sie gilt für mich zuerst.' }
  ]
});

/* ---------------------------------------------------------------
   kvo-03 – das tool hat keiner freigegeben
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kvo-03',
  kontakt: 'kivorfall',
  titel: 'Das Tool hat keiner freigegeben',
  thema: 'Schatten-KI',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'vollmer', text: 'Nächster Punkt, und der ist unangenehmer als die beiden vorher, weil er niemandem auffällt. Ich habe für die KI-Übersicht alle Abteilungen gefragt, was sie benutzen. Ergebnis: neun Werkzeuge. Freigegeben sind zwei.' },
    { typ: 'nachricht', von: 'rebholz', text: 'Wenn du den Bildgenerator meinst: Den zahle ich selbst, 20 Euro im Monat. Ich wollte niemandem damit zur Last fallen.' },
    { typ: 'nachricht', von: 'noah', text: 'und ich hatte ja das chat tool mit meiner privaten mail 🙈' },

    { typ: 'frage', text: 'Warum ist das ein Problem, obwohl niemand etwas Verbotenes wollte?',
      optionen: [
        { text: 'Die Verantwortung bleibt beim Unternehmen – es haftet für Verarbeitungen, von denen es nichts weiß, und kann Betroffenenrechte nicht erfüllen', richtig: true,
          antwort: 'Genau das ist der Kern von [[Schatten-KI]]. Rampe 7 ist [[Verantwortlicher]] für die Verarbeitung, auch wenn sie über ein privates Konto läuft. Kommt ein Auskunftsersuchen nach [[Art. 15 DSGVO]], muss das Unternehmen sagen, wo die Daten liegen – und kann es nicht.' },
        { text: 'Es entstehen doppelte Kosten durch nicht abgestimmte Lizenzen',
          antwort: 'Wirtschaftlich richtig, aber nicht der eigentliche Punkt. Marion zahlt sogar selbst – das Problem ist die fehlende Kontrolle, nicht die Rechnung.' },
        { text: 'Die Werkzeuge sind technisch unsicherer als freigegebene',
          antwort: 'Nicht zwingend – manches private Werkzeug ist technisch besser als das eingekaufte. Entscheidend ist, dass niemand weiß, welche Daten dorthin gehen.' }
      ] },

    { typ: 'nachricht', von: 'azizi', text: 'Hinzu kommt die rechtliche Zuordnung. Marion arbeitet mit einem Konto, das auf ihren Namen läuft – damit fehlt für die betriebliche Verarbeitung jede vertragliche Grundlage.' },

    { typ: 'frage', text: 'Marion fragt, ob sie das Werkzeug nun löschen muss. Was ist die richtige Antwort?',
      optionen: [
        { text: 'Nicht löschen, sondern prüfen und freigeben lassen – mit Firmenkonto, Vertrag und Regeln für die Daten', richtig: true,
          antwort: 'Richtig. Verbote erzeugen genau die Lage, die wir hier haben: Die Arbeit geht weiter, nur unsichtbar. Der Weg ist eine <b>Positivliste</b> – geprüfte Werkzeuge, auf Firmenkonten, mit [[AV-Vertrag]] und klaren Grenzen. Eine [[KI-Richtlinie]], die benennt, was erlaubt ist, wirkt besser als eine, die alles untersagt.' },
        { text: 'Sofort löschen und bis zur Freigabe ohne KI arbeiten',
          antwort: 'Das klingt konsequent und führt dazu, dass es auf dem Privatgerät weiterläuft. Eine Regel, die den Arbeitsalltag unmöglich macht, wird umgangen.' },
        { text: 'Weiterbenutzen, solange keine personenbezogenen Daten hineingehen',
          antwort: 'Das wäre nur die halbe Prüfung: Auch ohne Personenbezug bleiben [[Geschäftsgeheimnis|Geheimnisschutz]] und [[Urheberrecht und KI|Urheberrecht]] zu klären – und die Verwendung im Betrieb braucht eine saubere vertragliche Grundlage.' }
      ] },

    { typ: 'nachricht', von: 'rebholz', text: 'Eine Sache noch, die mir jetzt Sorgen macht: Die erzeugten Bilder sind seit Juni im Shop und im Newsletter. Ist das rückwirkend ein Problem?' },

    { typ: 'frage', text: 'Wie ist das zu beurteilen?',
      optionen: [
        { text: 'Zu prüfen sind erkennbare Ähnlichkeiten mit fremden Werken und ob echte Personen dargestellt sind – eine Kennzeichnungspflicht für Werbebilder besteht nicht', richtig: true,
          antwort: 'Richtig sortiert. Die maschinenlesbare Markierung nach Art. 50 Abs. 2 schuldet der <b>Anbieter</b> des Generators. Für Rampe 7 als Betreiber bleiben zwei Fragen: fremde Rechte und echte Personen. Beides lässt sich an den 14 Bildern nachträglich prüfen.' },
        { text: 'Alle Bilder müssen nachträglich als KI-Inhalte beschriftet werden',
          antwort: 'Eine sichtbare Beschriftung normaler Werbebilder verlangt Art. 50 nicht. Die Offenlegungspflicht des Betreibers betrifft [[Deepfake|Deepfakes]] und Texte zu Fragen von öffentlichem Interesse.' },
        { text: 'Die Bilder müssen aus dem Shop entfernt werden, bis das Werkzeug freigegeben ist',
          antwort: 'Die fehlende Freigabe ist ein internes Versäumnis und macht die Bilder nicht rechtswidrig. Entfernt wird, was fremde Rechte verletzt – nicht, was ohne Freigabe entstanden ist.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört in die Positivliste je Werkzeug? (mehrere)',
      optionen: [
        { text: 'Für welche Aufgaben es freigegeben ist', richtig: true },
        { text: 'Welche Daten hineingehören – und welche nie', richtig: true },
        { text: 'Firmenkonto statt privater Anmeldung', richtig: true },
        { text: 'Ob ein Vertrag zur Auftragsverarbeitung besteht und wo die Server stehen', richtig: true },
        { text: 'Wer bei Zweifeln entscheidet', richtig: true },
        { text: 'Welches Modell technisch darunter liegt und wie groß es ist' }
      ],
      antwortRichtig: 'Vollständig. Das zugrunde liegende Modell zu kennen ist interessant, hilft bei der Entscheidung aber nicht – es wechselt mit jedem Update, während Zweck, Daten, Konto und Vertrag bleiben.',
      antwortFalsch: 'Fünf Angaben beantworten die Frage „darf ich das hier hineinschreiben?". Eine ist eine technische Eigenschaft, die sich mit dem nächsten Update ändert.' },

    { typ: 'merk', text: '<b>[[Schatten-KI]]:</b> Die Verantwortung bleibt beim Unternehmen – auch bei privatem Konto und selbst bezahltem Werkzeug. Verbote verlagern die Nutzung nur. Wirksam ist eine <b>Positivliste</b> ([[KI-Richtlinie]]): je Werkzeug Zweck, erlaubte Daten, Firmenkonto, [[AV-Vertrag]] und Serverstandort, Ansprechpartner. Nicht löschen – <b>prüfen und freigeben</b>.' },

    { typ: 'nachricht', von: 'vollmer', text: 'Ich setze die Liste auf und gehe mit jeder Abteilung durch, was sie wirklich braucht. Marion, deinen Generator nehmen wir als erstes.' }
  ]
});

/* ---------------------------------------------------------------
   kvo-04 – was wir daraus machen
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kvo-04',
  kontakt: 'kivorfall',
  titel: 'Was wir daraus machen',
  thema: 'Aus den Vorfällen lernen',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'hagedorn', text: 'Drei Vorfälle in zwei Wochen: Kundendaten im Chatbot, ein gefälschter Anruf mit meiner Stimme, neun Werkzeuge im Haus, von denen ich zwei kannte. Ich möchte keine Aufarbeitung, ich möchte eine Entscheidung.' },
    { typ: 'nachricht', von: 'azizi', text: 'Dann sortieren wir nach dem, was Pflicht ist, und dem, was wir darüber hinaus für sinnvoll halten.' },

    { typ: 'frage', text: 'Welche Pflicht trifft Rampe 7 heute – unabhängig von jeder Risikoklasse?',
      optionen: [
        { text: 'Maßnahmen zur KI-Kompetenz des Personals', richtig: true, norm: 'Art. 4 KI-VO',
          antwort: 'Richtig, und alle drei Vorfälle haben genau dort ihre Ursache: Noah wusste nicht, dass ein [[Prompt]] eine Übermittlung ist. Der Kollege in der Buchhaltung wusste nicht, dass Stimmen fälschbar sind. Marion wusste nicht, dass ein Werkzeug freigegeben werden muss. [[KI-Kompetenz]] ist keine Fortbildung, sondern Schadensverhütung.' },
        { text: 'Die Registrierung der eingesetzten Systeme in der EU-Datenbank',
          antwort: 'Das ist eine Anbieterpflicht für Hochrisiko-Systeme. Als [[Betreiber]] registriert Rampe 7 nichts.' },
        { text: 'Eine Grundrechte-Folgenabschätzung für alle KI-Einsätze',
          antwort: 'Die [[Grundrechte-Folgenabschätzung]] nach Art. 27 trifft nur bestimmte Betreiber. Eine Spedition fällt nicht darunter – die [[Datenschutz-Folgenabschätzung]] für das Bewerbungsverfahren dagegen schon.' }
      ] },

    { typ: 'nachricht', von: 'gruenwald', text: 'Mir ist wichtig, dass die Schulung nicht aus Folien besteht. Die drei Fälle sind besser als jedes Beispiel aus einem Lehrbuch.' },
    { typ: 'nachricht', von: 'olschewski', text: 'Dem stimme ich zu, mit einer Bedingung: Die Fälle werden anonymisiert aufbereitet. Niemand soll an den Pranger – sonst meldet beim nächsten Mal keiner.' },

    { typ: 'frage', text: 'Warum ist Herrn Olschewskis Bedingung sachlich wichtig?',
      optionen: [
        { text: 'Weil eine Meldekultur nur entsteht, wenn Melden nicht bestraft wird – ohne Meldungen merkt niemand etwas', richtig: true,
          antwort: 'Genau. Noahs Fall ist nur deshalb bearbeitet worden, weil er ihn selbst erzählt hat. Hätte er Konsequenzen befürchtet, läge die Kundenliste weiter unbemerkt bei einem Anbieter in den USA. Das ist derselbe Gedanke wie im [[Notfallkonzept]]: Der Meldeweg muss leichter sein als das Verschweigen.' },
        { text: 'Weil die Nennung von Namen gegen die DSGVO verstoßen würde',
          antwort: 'Eine interne Schulung darf durchaus Vorgänge benennen; es gibt eine Rechtsgrundlage für betriebliche Aufklärung. Der Grund ist nicht rechtlich, sondern ein wirksamkeitsbezogener.' },
        { text: 'Weil die Vorfälle sonst arbeitsrechtliche Folgen hätten',
          antwort: 'Mögliche Folgen sind eine andere Frage und im Einzelfall zu entscheiden. Für die Schulung geht es darum, dass künftig überhaupt gemeldet wird.' }
      ] },

    { typ: 'karte', titel: 'Was wann gilt', quelle: 'kizeitschiene',
      keys: ['verbote', 'allgemein', 'hochrisiko'] },

    { typ: 'nachricht', von: 'hagedorn', text: 'Die Spalte mit dem Dezember 2027 – das ist die Bewerbersoftware. Frau Grünwald, Sie warten also?' },
    { typ: 'nachricht', von: 'gruenwald', text: 'Nein. Die KI-Pflichten kommen später, aber Datenschutz, Betriebsrat und Folgenabschätzung gelten jetzt. Ich führe es mit allen Vorkehrungen ein oder gar nicht.' },

    { typ: 'mehrfach', text: 'Was gehört in den Beschluss der Geschäftsführung? (mehrere)',
      optionen: [
        { text: 'Eine Übersicht aller KI-Einsätze mit Zweck, Risikoklasse und Rolle', richtig: true },
        { text: 'Eine Positivliste freigegebener Werkzeuge mit Regeln für die Daten', richtig: true },
        { text: 'Eine Schulung für alle, die KI benutzen – mit den eigenen Fällen', richtig: true },
        { text: 'Ein Meldeweg für KI-Vorfälle, der mit dem bestehenden Meldeweg zusammengeführt wird', richtig: true },
        { text: 'Freigabe- und Rückrufregeln für Zahlungen, unabhängig vom Rang des Anrufers', richtig: true },
        { text: 'Eine Software, die KI-generierte Inhalte und Stimmklone automatisch erkennt' }
      ],
      antwortRichtig: 'Vollständig. Die Erkennungssoftware ist der verlockende Punkt, weil er sich kaufen lässt – und der schwächste, weil die Erkennung unzuverlässig ist und mit jeder Modellgeneration veraltet. Die anderen fünf sind <b>organisatorisch</b> und wirken genau deshalb.',
      antwortFalsch: 'Fünf Punkte verändern Abläufe und Wissen im Haus. Einer kauft ein Werkzeug gegen ein Problem, das sich technisch nicht zuverlässig lösen lässt.' },

    { typ: 'merk', text: '<b>Was aus den Vorfällen folgt:</b> [[KI-Kompetenz]] (Art. 4) ist die Pflicht, die <b>heute</b> gilt und alle drei Fälle verhindert hätte. Dazu organisatorisch: Übersicht der <b>Verwendungen</b>, Positivliste ([[KI-Richtlinie]]), Schulung mit eigenen Fällen, gemeinsamer Meldeweg, Freigaberegeln für Zahlungen. Melden darf nicht bestraft werden – sonst erfährt niemand davon. Technische Erkennung ersetzt keinen Ablauf.' },

    { typ: 'nachricht', von: 'hagedorn', text: 'Beschlossen. Herr Vollmer führt die Übersicht, Herr Olschewski prüft sie datenschutzrechtlich, Herr Azizi ordnet die Klassen ein, Frau Grünwald bringt das Bewerbungsverfahren mit allen Vorkehrungen oder legt es zurück.' },
    { typ: 'nachricht', von: 'noah', text: 'und ich schreib die schulung mit meinen fehlern 🙋 ich hab ja genug material' }
  ]
});
