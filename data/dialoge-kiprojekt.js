/* ===========================================================
   AUDIT – data/dialoge-kiprojekt.js
   Hendrik Vollmer, IT-Projektleitung.
   Fuehrt bei Rampe 7 den KI-Assistenten in der Disposition
   und den Chatbot im Shop ein.

   Ton: Duzt dich, redet schnell und gern in Loesungen.
   Technisch sattelfest, bei den Pflichten offen unsicher –
   er fragt und korrigiert sich, ohne sich zu winden. Stolz
   auf seine Architektur, empfaenglich fuer das Argument
   "und was passiert, wenn das schiefgeht?".

   Kernthemen: Transparenzpflichten nach Art. 50 beim Chatbot
   und bei erzeugten Inhalten, Haftung fuer Halluzinationen,
   Feinabstimmung und der Rollenwechsel nach Art. 25,
   Zweckaenderung zur Leistungsueberwachung, und was ein
   Betreiber dokumentieren muss.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

/* ---------------------------------------------------------------
   kip-01 – Der Bot soll freundlich wirken
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kip-01',
  kontakt: 'kiprojekt',
  titel: 'Der Bot soll freundlich wirken',
  thema: 'Transparenzpflicht',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Hey, gut dass du da bist. Der [[Chatbot]] für den Shop ist fertig, Donnerstag soll er live gehen. Marion aus dem Marketing hat ihn „Lena" genannt, mit Profilbild, und er begrüßt mit „Hi, ich bin Lena vom Rampe-7-Kundenservice".' },
    { typ: 'nachricht', text: 'Sieht super aus, ehrlich. Marion sagt, die Leute reden offener, wenn es menschlich wirkt. Bei mir klingelt trotzdem irgendwas. Was sagt der AI Act dazu?' },

    { typ: 'frage', text: 'Was verlangt die KI-Verordnung bei einem Chatbot im Kundenkontakt?',
      optionen: [
        { text: 'Die Nutzer müssen erfahren, dass sie mit einem KI-System sprechen', richtig: true, norm: 'Art. 50 Abs. 1 KI-VO',
          antwort: 'Genau das. Die [[Begrenztes Risiko|Transparenzpflicht]] nach Art. 50 Abs. 1 gilt seit dem 2. August 2026. Ein erfundener Vorname mit Profilbild arbeitet genau dagegen – er soll den Eindruck erzeugen, da sitze ein Mensch.' },
        { text: 'Gar nichts – Chatbots sind minimales Risiko und damit pflichtfrei',
          antwort: 'Fast. Chatbots sind kein Hochrisiko, aber auch nicht pflichtfrei: Sie fallen unter [[Begrenztes Risiko]] mit genau einer Pflicht – der Offenlegung.' },
        { text: 'Eine Risikoanalyse und eine Konformitätsbewertung vor dem Start',
          antwort: 'Das ist das Programm für [[Hochrisiko-KI-System|Hochrisiko-Systeme]]. Ein Kundenservice-Bot braucht das nicht – die Pflicht beschränkt sich auf Transparenz.' }
      ] },

    { typ: 'nachricht', text: 'Okay. Marion fragt dann sicher: Reicht es, wenn es im Impressum steht? Oder in den AGB, da steht eh schon alles drin.' },

    { typ: 'frage', text: 'Reicht ein Hinweis in den AGB?',
      optionen: [
        { text: 'Nein – die Information muss beim ersten Kontakt klar erkennbar sein', richtig: true,
          antwort: 'Richtig. Die Pflicht ist, dass die Person es <b>rechtzeitig und verständlich</b> erfährt – also im Chatfenster selbst, nicht versteckt in einem Dokument, das niemand öffnet. Dieselbe Logik kennst du von der [[Informationspflicht]] der DSGVO.' },
        { text: 'Ja, mit dem Hinweis in den AGB ist die Information erteilt',
          antwort: 'Formal erteilt, praktisch nicht wahrgenommen – und genau das genügt nicht. Die Offenlegung soll die Täuschung verhindern, nicht dokumentiert werden.' },
        { text: 'Ja, wenn der Bot auf Nachfrage zugibt, eine KI zu sein',
          antwort: 'Auf Nachfrage ist zu spät: Fragen stellt nur, wer bereits Zweifel hat. Die Information kommt <b>unaufgefordert</b> und von Anfang an.' }
      ] },

    { typ: 'karte', titel: 'Transparenzpflichten nach Art. 50', quelle: 'kitransparenz' },

    { typ: 'nachricht', text: 'Schau mal die Spalte „Pflicht trifft" an. Das verstehe ich nicht – teilweise Anbieter, teilweise Betreiber. Wir sind doch beim Bot Betreiber, oder?' },

    { typ: 'frage', text: 'Rampe 7 setzt einen eingekauften Chatbot ein. Wer muss die Offenlegung nach Art. 50 Abs. 1 technisch umsetzen?',
      optionen: [
        { text: 'Der Anbieter muss sie vorsehen – Rampe 7 darf sie als Betreiber aber nicht wieder unwirksam machen', richtig: true,
          antwort: 'Gut getroffen. Die Pflicht aus Abs. 1 richtet sich an den [[Anbieter]], der das System so konzipieren muss. Wenn Rampe 7 die Begrüßung überschreibt und daraus „Hi, ich bin Lena" macht, wird aus der Gestaltungsfreiheit eine Täuschung – und spätestens mit dem eigenen Produktnamen seid ihr nach [[Rollenwechsel|Art. 25]] ohnehin selbst Anbieter.' },
        { text: 'Ausschließlich Rampe 7, weil der Bot auf unserer Seite läuft',
          antwort: 'Der Ort des Betriebs entscheidet nicht über die Rolle. Abs. 1 verpflichtet den Anbieter – ihr dürft seine Umsetzung nur nicht aushebeln.' },
        { text: 'Niemand konkret, die Pflicht gilt dem System',
          antwort: 'Pflichten treffen immer Personen oder Unternehmen, nie Software. Die KI-Verordnung weist jede Pflicht einer Rolle zu – das ist ihr Bauprinzip.' }
      ] },

    { typ: 'mehrfach', text: 'Wie geht der Bot am Donnerstag live? (mehrere)',
      optionen: [
        { text: 'Mit einem klar erkennbaren Hinweis im Chatfenster, dass es ein KI-Assistent ist', richtig: true },
        { text: 'Mit einem Weg zu einem Menschen, wenn es wichtig wird', richtig: true },
        { text: 'Mit einer Grenze, welche Daten Kunden dort hineinschreiben sollen', richtig: true },
        { text: 'Mit Profilbild und erfundenem Vornamen, damit es freundlicher wirkt' },
        { text: 'Mit einem Hinweis, der nur bei direkter Nachfrage erscheint' }
      ],
      antwortRichtig: 'So kann er live gehen. Ein Name ist übrigens nicht verboten – „Lena, der KI-Assistent von Rampe 7" wäre völlig in Ordnung. Unzulässig ist nur, den Maschinencharakter zu <b>verschleiern</b>. Und die Datengrenze hat mit Art. 50 nichts zu tun, sondern mit der [[DSGVO]]: Was Kunden in den Chat schreiben, landet beim Anbieter.',
      antwortFalsch: 'Denke an den Zweck der Vorschrift: Niemand soll glauben, mit einem Menschen zu sprechen. Zwei der Punkte arbeiten genau dagegen.' },

    { typ: 'merk', text: '<b>[[Chatbot]]: eine Pflicht, und zwar [[Begrenztes Risiko|Transparenz]]</b> – Nutzer müssen beim <b>ersten Kontakt</b> erfahren, dass sie mit einem KI-System sprechen (Art. 50 Abs. 1, seit 2.8.2026). AGB oder Impressum genügen nicht, Nachfrage ist zu spät. Ein Name ist erlaubt, das Verschleiern nicht.' },

    { typ: 'nachricht', text: 'Alles klar, ich nehme das Profilbild raus und schreibe Marion. Nächste Baustelle: Der Bot hat im Test etwas zugesagt, was es bei uns gar nicht gibt. Darüber müssen wir reden.' }
  ]
});

/* ---------------------------------------------------------------
   kip-02 – Der Bot hat was zugesagt
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kip-02',
  kontakt: 'kiprojekt',
  titel: 'Der Bot hat was zugesagt',
  thema: 'Halluzinationen',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Also: Im Test fragt ein Kollege den Bot nach Expressversand. Der Bot antwortet, Rampe 7 liefere „innerhalb von 24 Stunden deutschlandweit, bei Bestellung bis 18 Uhr". Klingt prima. Gibt es nicht. Haben wir nie angeboten.' },
    { typ: 'nachricht', text: 'Das Verrückte ist: Er schreibt das völlig überzeugt. Keine Warnung, kein „ich bin unsicher". Technisch ist das eine [[Halluzination]]. Aber was heißt das für uns?' },

    { typ: 'frage', text: 'Warum entstehen solche Antworten überhaupt?',
      optionen: [
        { text: 'Das Modell berechnet wahrscheinliche Wortfolgen, nicht Wahrheit – fehlt die Information, wird die plausibelste Formulierung erzeugt', richtig: true,
          antwort: 'Richtig, und daraus folgt alles Weitere: Es gibt keinen inneren Mechanismus, der „weiß nicht" sagt. Die Ausgabe sieht bei Unwissen genauso sicher aus wie bei Wissen – deshalb ist die fehlende Fehlermeldung <b>kein</b> Richtigkeitsnachweis.' },
        { text: 'Die Trainingsdaten waren zu klein, mit mehr Daten verschwindet das',
          antwort: 'Mehr Daten verringern die Häufigkeit, beseitigen das Verhalten aber nicht. Es folgt aus der Arbeitsweise des Modells, nicht aus einem Mangel.' },
        { text: 'Ein Fehler in der Anbindung – der Bot hätte unsere Versandtabelle lesen müssen',
          antwort: 'Die Anbindung an eure Daten ist technisch die richtige Gegenmaßnahme und senkt das Risiko deutlich. Ein Modell kann aber auch dann noch über die Quelle hinaus formulieren.' }
      ] },

    { typ: 'nachricht', text: 'Angenommen, das passiert nicht im Test, sondern einem echten Kunden. Der bestellt und verlangt die 24 Stunden.' },

    { typ: 'frage', text: 'Wer trägt das Problem?',
      optionen: [
        { text: 'Rampe 7 – der Bot spricht für das Unternehmen, der Kunde darf auf die Auskunft im Firmenchat vertrauen', richtig: true,
          antwort: 'So ist es. Der [[Chatbot]] ist kein Dritter, sondern euer Kommunikationskanal. „Das war die KI" ist gegenüber dem Kunden kein Argument – im Zweifel ist der Vertrauensschutz auf seiner Seite, und ein verärgerter Kunde mit Screenshot kostet mehr als die Nachlieferung.' },
        { text: 'Der Hersteller des Bots, weil sein Modell die Falschauskunft erzeugt hat',
          antwort: 'Im Verhältnis zum Hersteller könnt ihr vertragliche Ansprüche prüfen. Gegenüber dem <b>Kunden</b> haftet aber der, der den Bot einsetzt – das ist Rampe 7.' },
        { text: 'Niemand, bei offensichtlichen Fehlern entsteht keine Bindung',
          antwort: 'Offensichtlich ist die Angabe gerade nicht: 24-Stunden-Lieferung ist im Versandgeschäft völlig üblich. Der Kunde konnte den Fehler nicht erkennen.' }
      ] },

    { typ: 'nachricht', text: 'Und jetzt die Variante, die mir mehr Sorgen macht. Noah aus dem zweiten Lehrjahr nutzt dasselbe Modell, um Kundenvermerke zusammenzufassen. Was, wenn es sich dabei etwas über eine Person ausdenkt?' },

    { typ: 'frage', text: 'Das Modell erfindet im Vermerk eine Mahnhistorie, die es nicht gibt. Wie ist das datenschutzrechtlich zu bewerten?',
      optionen: [
        { text: 'Als unrichtige Verarbeitung personenbezogener Daten – die Angabe ist zu berichtigen oder zu löschen', richtig: true, norm: 'Art. 5 Abs. 1 lit. d, Art. 16 DSGVO',
          antwort: 'Genau. Der [[Richtigkeitsgrundsatz]] gilt auch für erfundene Angaben: Eine Halluzination über eine Person ist ein <b>personenbezogenes Datum</b>, und die betroffene Person hat Anspruch auf Berichtigung nach [[Art. 16 DSGVO]]. Steht der Vermerk in der Kundenakte, wird aus der Spielerei eine Verarbeitung mit allen Pflichten.' },
        { text: 'Unproblematisch, solange der Vermerk intern bleibt',
          antwort: 'Die DSGVO gilt auch für interne Verarbeitungen. Ein falscher Vermerk in der Akte kann die nächste Bonitätsentscheidung beeinflussen – und wird bei einem Auskunftsersuchen nach [[Art. 15 DSGVO]] sichtbar.' },
        { text: 'Ein Fall für die Meldung als Datenpanne',
          antwort: 'Eine [[Datenpanne]] setzt eine Verletzung der Sicherheit voraus – Verlust, unbefugten Zugang, unbefugte Offenlegung. Hier geht es um <b>Richtigkeit</b>, nicht um Sicherheit. Die Pflicht ist Berichtigung, nicht Meldung.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Vorkehrungen helfen gegen Halluzinationen im Betrieb? (mehrere)',
      optionen: [
        { text: 'Den Bot an die eigenen Daten anbinden, statt ihn frei formulieren zu lassen', richtig: true },
        { text: 'Für verbindliche Auskünfte – Preise, Fristen, Zusagen – einen Menschen vorsehen', richtig: true },
        { text: 'Protokollieren, was der Bot geantwortet hat, um Beschwerden aufklären zu können', richtig: true },
        { text: 'Die Beschäftigten schulen, dass Ausgaben vor der Verwendung zu prüfen sind', richtig: true },
        { text: 'Im Chatfenster darauf hinweisen, dass Antworten falsch sein können, und damit die Haftung ausschließen' }
      ],
      antwortRichtig: 'Vollständig. Der letzte Punkt ist die verbreitete Hoffnung: Ein Hinweis ist sinnvoll und gehört ins Chatfenster – aber er ist <b>kein Haftungsausschluss</b>. Wer einen Kanal betreibt, kann sich nicht durch einen Vorbehalt von dem freizeichnen, was dieser Kanal verspricht.',
      antwortFalsch: 'Vier Punkte verändern etwas an Technik, Ablauf oder Wissen. Einer verändert nur den Text auf der Seite.' },

    { typ: 'merk', text: '<b>[[Halluzination|Halluzinationen]]</b> sind kein Defekt, sondern Arbeitsweise: Sprachmodelle berechnen wahrscheinliche Formulierungen, nicht Wahrheit – fehlende Warnung heißt nicht richtig. Nach außen bindet die Auskunft das <b>Unternehmen</b>; nach innen gilt der [[Richtigkeitsgrundsatz]]: Eine erfundene Angabe über eine Person ist zu <b>berichtigen</b>. Gegenmittel: Anbindung an eigene Daten, Mensch für Verbindliches, Protokoll, Schulung.' },

    { typ: 'nachricht', text: 'Gut. Dann der Punkt, bei dem ich dich wirklich brauche: Ich will das Modell mit unseren Daten nachtrainieren. Herr Azizi hat da irgendwas von Art. 25 gesagt und mich sehr nachdenklich angeschaut.' }
  ]
});

/* ---------------------------------------------------------------
   kip-03 – Wenn ich nachtrainiere
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kip-03',
  kontakt: 'kiprojekt',
  titel: 'Wenn ich nachtrainiere',
  thema: 'Rollen und Basismodelle',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Mein Plan: Wir nehmen ein zugekauftes [[Basismodell]] und stimmen es mit unseren Tourendaten und Lieferscheinen fein ab. Dann kennt es unsere Abläufe. Technisch ist das ein Nachmittag Arbeit.' },
    { typ: 'nachricht', text: 'Rechtlich offenbar nicht. Fangen wir vorne an, sonst rede ich mich in etwas hinein: In welcher Rolle sind wir gerade?' },

    { typ: 'frage', text: 'Rampe 7 setzt ein eingekauftes Modell unverändert für die Disposition ein. Rolle?',
      optionen: [
        { text: 'Betreiber – mit den Pflichten aus Art. 26, aber ohne Anbieterpflichten', richtig: true,
          antwort: 'Richtig, und bei minimalem Risiko bleibt von Art. 26 ohnehin wenig: Die Betreiberpflichten im Einzelnen gelten für [[Hochrisiko-KI-System|Hochrisiko-Systeme]]. Was bleibt, ist [[KI-Kompetenz]] – die gilt immer.' },
        { text: 'Anbieter, weil das Modell bei uns in Betrieb genommen wird',
          antwort: 'Das ist der häufigste Irrtum beim Wortlaut. „Inbetriebnahme" in Art. 3 Nr. 3 meint die erstmalige Bereitstellung <b>unter eigenem Namen</b>. Wer einkauft und benutzt, ist [[Betreiber]].' },
        { text: 'Beides gleichzeitig, weil wir das Modell in unsere Software einbauen',
          antwort: 'Einbauen allein löst den Wechsel nicht aus. Die drei Auslöser des [[Rollenwechsel|Art. 25]] sind eigener Name, wesentliche Änderung und neue Zweckbestimmung mit Hochrisikofolge.' }
      ] },

    { typ: 'karte', titel: 'Betreiber und der Weg zum Anbieter', quelle: 'kirollen',
      keys: ['betreiber', 'anbieter', 'wechsel'] },

    { typ: 'nachricht', text: 'Jetzt die Feinabstimmung. Ich trainiere das Modell mit unseren Daten nach, es bleibt aber in der Disposition und heißt intern weiter wie beim Hersteller.' },

    { typ: 'frage', text: 'Löst die Feinabstimmung allein den Rollenwechsel aus?',
      optionen: [
        { text: 'Nicht automatisch – entscheidend ist, ob die Änderung wesentlich ist oder der Zweck wechselt', richtig: true, norm: 'Art. 25 KI-VO',
          antwort: 'Genau so differenziert ist die Antwort. Eine Feinabstimmung innerhalb desselben Zwecks ist in der Regel keine wesentliche Änderung. Kippt es, wenn du den Zweck verschiebst oder einen eigenen Produktnamen vergibst – und das war Herrn Azizis nachdenklicher Blick.' },
        { text: 'Ja, jedes Nachtrainieren macht aus dem Betreiber einen Anbieter',
          antwort: 'Zu streng. Dann wäre jede Konfiguration ein Rollenwechsel, und niemand könnte ein Modell mehr anpassen. Art. 25 verlangt eine <b>wesentliche</b> Änderung.' },
        { text: 'Nein, solange die Daten aus dem eigenen Haus stammen',
          antwort: 'Die Herkunft der Trainingsdaten ist für die Rolle unerheblich. Sie ist dafür eine Frage der [[Trainingsdaten|Rechtsgrundlage]] – auch eigene Daten brauchen eine.' }
      ] },

    { typ: 'nachricht', text: 'Und wenn ich es doch „Rampe-7-Dispo" nenne und unsere Partnerspedition in Osnabrück fragt, ob sie es mitbenutzen darf?' },

    { typ: 'frage', text: 'Was passiert dann?',
      optionen: [
        { text: 'Rampe 7 gilt als Anbieter und schuldet die vollen Anbieterpflichten – Dokumentation, Risikomanagement, bei Hochrisiko auch Konformitätsbewertung', richtig: true, norm: 'Art. 25 Abs. 1 lit. a KI-VO',
          antwort: 'Richtig, und dann wird es teuer. Du müsstest für ein Modell, das ihr nicht gebaut habt, technische Dokumentation und Risikomanagement vorhalten. Bei einem Dispositionsassistenten mit minimalem Risiko bleibt der Aufwand überschaubar – sobald der Zweck aber in [[Anhang III]] fällt, kommt die [[Konformitätsbewertung]] dazu.' },
        { text: 'Rampe 7 wird Händler und muss nur die Unterlagen weitergeben',
          antwort: 'Händler ist, wer fremde Systeme unverändert und unter fremdem Namen weitergibt. Eigener Produktname plus Nachtraining überschreitet das deutlich.' },
        { text: 'Nichts, weil die Partnerspedition kein Verbraucher ist',
          antwort: 'Die KI-Verordnung unterscheidet nicht nach Verbraucher oder Unternehmen, sondern nach Rollen in der Lieferkette.' }
      ] },

    { typ: 'nachricht', text: 'Letzte Frage dazu, dann lasse ich es. Das Basismodell selbst – dafür sind doch auch Pflichten im Gesetz?' },

    { typ: 'frage', text: 'Wen treffen die Pflichten für Basismodelle?',
      optionen: [
        { text: 'Den Anbieter des Modells – technische Dokumentation, Urheberrechts-Strategie, Zusammenfassung der Trainingsdaten', richtig: true, norm: 'Art. 53 KI-VO',
          antwort: 'Richtig. Die Pflichten für [[Basismodell|Basismodelle]] gelten seit dem 2. August 2025 und richten sich an die <b>Modellanbieter</b>. Ab 10²⁵ FLOP Trainingsleistung kommt systemisches Risiko mit zusätzlichen Pflichten hinzu. Für euch ist das vor allem eine Einkaufsfrage: Ihr könnt diese Unterlagen verlangen.' },
        { text: 'Jeden, der ein Basismodell einsetzt',
          antwort: 'Nein. Als Betreiber trifft euch Art. 53 nicht. Ihr profitiert davon: Was der Modellanbieter dokumentieren muss, könnt ihr für die eigene Prüfung heranziehen.' },
        { text: 'Niemanden – Basismodelle sind von der Verordnung ausgenommen',
          antwort: 'Im Gegenteil, sie haben ein eigenes Kapitel bekommen (Art. 51 bis 55), weil sie in sehr viele Systeme eingebaut werden.' }
      ] },

    { typ: 'mehrfach', text: 'Was nimmst du aus dem Gespräch ins Projekt mit? (mehrere)',
      optionen: [
        { text: 'Den Zweck je Einsatz schriftlich festhalten, damit eine Zweckänderung auffällt', richtig: true },
        { text: 'Keinen eigenen Produktnamen vergeben, solange wir Betreiber bleiben wollen', richtig: true },
        { text: 'Vom Modellanbieter die Dokumentation nach Art. 53 einfordern', richtig: true },
        { text: 'Vor der Weitergabe an die Partnerspedition rechtlich prüfen lassen', richtig: true },
        { text: 'Die Feinabstimmung grundsätzlich unterlassen, weil sie zum Anbieterstatus führt' }
      ],
      antwortRichtig: 'Vollständig. Die letzte Aussage wäre übervorsichtig: Eine Feinabstimmung innerhalb desselben Zwecks ist regelmäßig <b>keine</b> wesentliche Änderung. Du darfst anpassen – du musst nur wissen, wo die drei Schwellen liegen.',
      antwortFalsch: 'Vier Punkte sind Vorkehrungen, die du im Projekt umsetzen kannst. Einer verbietet dir etwas, das Art. 25 nicht verbietet.' },

    { typ: 'merk', text: '<b>[[Rollenwechsel|Art. 25]] – drei Auslöser:</b> eigener Name oder Marke, wesentliche Änderung, neue Zweckbestimmung mit Hochrisikofolge. Feinabstimmung <b>innerhalb desselben Zwecks</b> ist in der Regel keiner davon. Pflichten für [[Basismodell|Basismodelle]] (Art. 53) treffen den <b>Modellanbieter</b> – als Betreiber kann man seine Unterlagen einfordern.' },

    { typ: 'nachricht', text: 'Sehr gut, ich halte den Zweck je Einsatz fest. Was mich nämlich beschäftigt: Der Assistent zählt im Lager längst mit, wie lange die Leute für einen Pack brauchen. Das war nie geplant.' }
  ]
});

/* ---------------------------------------------------------------
   kip-04 – Der Assistent zaehlt mit
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kip-04',
  kontakt: 'kiprojekt',
  titel: 'Der Assistent zählt mit',
  thema: 'Zweckänderung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Der Dispositionsassistent protokolliert jeden Arbeitsschritt – wann ein Auftrag gezogen, wann er abgeschlossen wurde, wie lange die Wege dauern. Brauchen wir für die Tourenoptimierung, sonst lernt das Ding nichts.' },
    { typ: 'nachricht', text: 'Jetzt kommt Herr Kleinschmidt aus dem Lager und will eine Auswertung je Beschäftigtem. „Nur um zu sehen, wo wir stehen." Mein Bauch sagt nein, meine Begründung ist dünn.' },

    { typ: 'frage', text: 'Was ändert sich rechtlich durch diese Auswertung?',
      optionen: [
        { text: 'Der Zweck wechselt von Tourenoptimierung zu Leistungsbewertung – damit wird daraus ein Hochrisiko-Einsatz nach Anhang III', richtig: true, norm: 'Anhang III Nr. 4 KI-VO',
          antwort: 'Genau. Technisch ändert sich nichts, rechtlich alles: Die Überwachung und Bewertung von Arbeitsleistung steht in [[Anhang III]] Nummer 4. Und weil <b>ihr</b> die Zweckbestimmung verschiebt, gilt Rampe 7 nach [[Rollenwechsel|Art. 25]] zusätzlich als Anbieter.' },
        { text: 'Nichts – die Daten liegen längst vor, sie werden nur anders dargestellt',
          antwort: 'Das ist genau das Argument, mit dem solche Auswertungen eingeführt werden. Datenschutzrechtlich ist jede Zweckänderung eine <b>neue Verarbeitung</b> und braucht eine eigene Rechtsgrundlage ([[Zweckbindung]]).' },
        { text: 'Es wird eine Transparenzpflicht nach Art. 50 ausgelöst',
          antwort: 'Art. 50 betrifft Täuschungsgefahren. Hier geht es um Bewertung von Menschen – eine Stufe höher, im Hochrisikobereich.' }
      ] },

    { typ: 'nachricht', text: 'Au. Und das ist noch nicht alles, oder?' },

    { typ: 'frage', text: 'Welche Beteiligung kommt neben dem Datenschutz hinzu?',
      optionen: [
        { text: 'Die Mitbestimmung des Betriebsrats – die Anlage ist zur Leistungs- und Verhaltenskontrolle geeignet', richtig: true, norm: '§ 87 Abs. 1 Nr. 6 BetrVG',
          antwort: 'Richtig, und beachte die Formulierung: Es genügt, dass die Einrichtung zur Überwachung <b>geeignet</b> ist. Auf eure Absicht kommt es nicht an. Der [[Betriebsrat]] war damit schon mitbestimmungspflichtig, als der Assistent nur Touren plante – spätestens jetzt ist es eindeutig.' },
        { text: 'Die Zustimmung jedes einzelnen Beschäftigten',
          antwort: 'Eine [[Einwilligung]] im Arbeitsverhältnis ist heikel, weil die Freiwilligkeit fehlt, und sie ersetzt die Mitbestimmung nicht. Der richtige Weg ist eine <b>Betriebsvereinbarung</b>.' },
        { text: 'Die Anzeige bei der Marktüberwachungsbehörde',
          antwort: 'Eine Anzeigepflicht gibt es dafür nicht. Gemeldet wird nur ein [[Schwerwiegender Vorfall]].' }
      ] },

    { typ: 'frage', text: 'Herr Kleinschmidt schlägt vor, die Auswertung anonym zu machen – ohne Namen, nur Personalnummern.',
      optionen: [
        { text: 'Das ist keine Anonymisierung, sondern Pseudonymisierung – der Personenbezug bleibt bestehen', richtig: true,
          antwort: 'Richtig, und das ist eine klassische Prüfungsfalle. Solange die Zuordnungstabelle existiert, liegt [[Pseudonymisierung]] vor und die DSGVO gilt vollständig. Echte [[Anonymisierung]] wäre bei fünf Leuten in einer Schicht praktisch ohnehin nicht zu erreichen.' },
        { text: 'Dann greift die DSGVO nicht mehr und die Auswertung ist unproblematisch',
          antwort: 'Das gilt nur bei echter Anonymisierung, also wenn die Zuordnung für niemanden mehr möglich ist. Eine Personalnummer, die in der Lohnbuchhaltung auflösbar ist, erfüllt das nicht.' },
        { text: 'Es ändert nichts, weil der Betriebsrat ohnehin zustimmen muss',
          antwort: 'Die Mitbestimmung bleibt, das stimmt. Die Einordnung ist aber trotzdem wichtig: Nur echte Anonymisierung würde die Verarbeitung aus der DSGVO herausführen – Pseudonymisierung nicht.' }
      ] },

    { typ: 'mehrfach', text: 'Was ist nötig, bevor eine solche Auswertung eingeführt werden könnte? (mehrere)',
      optionen: [
        { text: 'Eine eigene Rechtsgrundlage für den neuen Zweck', richtig: true },
        { text: 'Beteiligung des Betriebsrats, möglichst in einer Betriebsvereinbarung', richtig: true },
        { text: 'Eine Datenschutz-Folgenabschätzung', richtig: true },
        { text: 'Information der Beschäftigten vor der Inbetriebnahme', richtig: true },
        { text: 'Eine namentlich benannte Person, die Ergebnisse prüfen und verwerfen kann', richtig: true },
        { text: 'Die Zusicherung des Herstellers, dass das System fehlerfrei arbeitet' }
      ],
      antwortRichtig: 'Vollständig. Die letzte Aussage ist nicht nur unnötig, sondern unmöglich – fehlerfreie Software gibt es nicht, und eine Zusicherung würde keine der anderen Pflichten ersetzen. Die [[Datenschutz-Folgenabschätzung]] ist hier übrigens nicht optional: systematische Überwachung von Beschäftigten ist ihr Standardfall.',
      antwortFalsch: 'Fünf der Punkte sind Dinge, die <b>Rampe 7</b> tun muss. Einer ist etwas, das man vom Hersteller erhofft.' },

    { typ: 'merk', text: '<b>Zweckänderung ist der gefährlichste Schritt</b>, weil technisch nichts passiert: Aus Tourenoptimierung wird Leistungsbewertung – also [[Hochrisiko-KI-System|Hochrisiko]] nach [[Anhang III]] Nr. 4, nach [[Rollenwechsel|Art. 25]] sogar Anbieterstatus. Dazu [[Betriebsrat|Mitbestimmung]] (§ 87 Abs. 1 Nr. 6 BetrVG: Eignung genügt), eigene Rechtsgrundlage und [[Datenschutz-Folgenabschätzung]]. Personalnummern sind [[Pseudonymisierung]], keine Anonymisierung.' },

    { typ: 'nachricht', text: 'Ich sage Kleinschmidt, dass daraus ein Projekt wird und keine Auswertung. Bleibt noch das, was ich für unsere Werbebilder wissen muss – Marion erzeugt die inzwischen selbst.' }
  ]
});

/* ---------------------------------------------------------------
   kip-05 – Kennzeichnen, was die Maschine gemacht hat
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kip-05',
  kontakt: 'kiprojekt',
  titel: 'Kennzeichnen, was die Maschine gemacht hat',
  thema: 'Erzeugte Inhalte',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Marion erzeugt die Produktbilder für den Shop jetzt selbst – Paletten im Abendlicht, Lkw vor Lagerhalle, sieht richtig gut aus. Dazu schreibt die KI Produkttexte. Und für die Weihnachtsaktion hat sie einen Spot gebaut, in dem Frau Hagedorn spricht. Frau Hagedorn hat aber nie etwas eingesprochen.' },
    { typ: 'nachricht', text: 'Da sind wir jetzt bei drei verschiedenen Sachen, oder? Ich habe das Gefühl, die werden unterschiedlich behandelt.' },

    { typ: 'frage', text: 'Der Spot mit der erzeugten Stimme von Frau Hagedorn – was gilt?',
      optionen: [
        { text: 'Deepfake: Die Veröffentlichung muss offengelegt werden, und Frau Hagedorn muss zustimmen', richtig: true, norm: 'Art. 50 Abs. 4 KI-VO',
          antwort: 'Beides zusammen ist die vollständige Antwort. Die KI-Verordnung verlangt bei [[Deepfake|Deepfakes]] die Offenlegung. Unabhängig davon steht Frau Hagedorn ihr Recht an Stimme und Bild zu – das ist keine Frage des AI Acts, sondern ihres Persönlichkeitsrechts.' },
        { text: 'Zulässig ohne weiteres, weil Frau Hagedorn zum Unternehmen gehört',
          antwort: 'Die Zugehörigkeit zum Unternehmen gibt keine Nutzungsrechte an Stimme und Bild. Das wäre selbst bei einer echten Aufnahme nicht so.' },
        { text: 'Verboten nach Art. 5, weil es eine Täuschung ist',
          antwort: 'Art. 5 erfasst diesen Fall nicht. Ein gekennzeichneter Deepfake mit Zustimmung der dargestellten Person ist zulässig – deshalb steht er in Art. 50 und nicht im Verbotskatalog.' }
      ] },

    { typ: 'frage', text: 'Und die erzeugten Produktbilder im Shop: Wen trifft die maschinenlesbare Kennzeichnung nach Art. 50 Abs. 2?',
      optionen: [
        { text: 'Den Anbieter des Bildgenerators – er muss die Markierung technisch vorsehen', richtig: true, norm: 'Art. 50 Abs. 2 KI-VO',
          antwort: 'Richtig, und das ist die Unterscheidung, die in Prüfungen gern gedreht wird: Die <b>maschinenlesbare</b> Markierung – Wasserzeichen, Metadaten – schuldet der Anbieter des erzeugenden Systems. Für Systeme, die vor dem 2. August 2026 auf dem Markt waren, gilt sie ab dem 2. Dezember 2026.' },
        { text: 'Rampe 7 als Betreiber muss jedes Bild sichtbar als KI-Bild beschriften',
          antwort: 'Eine sichtbare Beschriftung jedes Produktbildes verlangt Art. 50 nicht. Die Offenlegungspflicht des <b>Betreibers</b> betrifft Deepfakes und Texte zu Fragen von öffentlichem Interesse – nicht jedes Werbebild.' },
        { text: 'Niemanden, Bilder sind von Art. 50 nicht erfasst',
          antwort: 'Bilder sind ausdrücklich erfasst: Abs. 2 nennt Bild, Ton, Video und Text.' }
      ] },

    { typ: 'karte', titel: 'Wen die Transparenzpflicht trifft', quelle: 'kitransparenz',
      keys: ['synthetisch', 'deepfake', 'text'] },

    { typ: 'nachricht', text: 'Letzter Punkt von Marion: Sie fragt, ob wir die erzeugten Bilder als Marke schützen lassen können. Das Lkw-Motiv findet sie so gut, dass sie es nicht bei der Konkurrenz sehen will.' },

    { typ: 'frage', text: 'Wie ist die Rechtslage bei KI-erzeugten Bildern?',
      optionen: [
        { text: 'In der Regel kein Urheberrechtsschutz, weil die persönliche geistige Schöpfung fehlt – und zugleich das Risiko, fremde Rechte zu verletzen', richtig: true, norm: '§ 2 Abs. 2 UrhG',
          antwort: 'Beide Richtungen zusammen – genau so muss man es prüfen. Ohne menschliche Schöpfung kein [[Urheberrecht und KI|Urheberrechtsschutz]]: Niemandem ist zu verbieten, dasselbe Motiv zu verwenden. Umgekehrt kann eine Ausgabe fremden geschützten Werken so nahe kommen, dass ihre Nutzung Rechte verletzt. Markenschutz ist eine eigene Frage – der ist für ein Logo möglich, hängt aber nicht am Urheberrecht.' },
        { text: 'Voller Urheberrechtsschutz, weil Rampe 7 die Eingabe formuliert hat',
          antwort: 'Der [[Prompt]] selbst kann in Ausnahmefällen schutzfähig sein – das erzeugte Bild wird dadurch nicht zur persönlichen geistigen Schöpfung.' },
        { text: 'Der Schutz liegt beim Anbieter des Bildgenerators',
          antwort: 'Der Anbieter beansprucht in seinen Bedingungen meist gerade keine Rechte am Ergebnis. Entscheidend ist aber die gesetzliche Lage: Ohne menschliche Schöpfung entsteht kein Urheberrecht – auch nicht für ihn.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört in die Hausregel für erzeugte Inhalte? (mehrere)',
      optionen: [
        { text: 'Deepfakes von echten Personen nur mit Zustimmung und mit Offenlegung', richtig: true },
        { text: 'Erzeugte Bilder nicht als eigene geschützte Werke behandeln', richtig: true },
        { text: 'Bei Veröffentlichungen zu Themen von öffentlichem Interesse redaktionell prüfen und verantworten', richtig: true },
        { text: 'Beim Einkauf prüfen, ob das Werkzeug die maschinenlesbare Markierung setzt', richtig: true },
        { text: 'Jedes erzeugte Produktbild sichtbar mit „KI" beschriften' }
      ],
      antwortRichtig: 'Vollständig. Die letzte Aussage verlangt mehr, als das Gesetz fordert – und schadet ohne Not der Darstellung. Pflicht ist die <b>maschinenlesbare</b> Markierung durch den Anbieter; eine sichtbare Offenlegung schuldet der Betreiber bei Deepfakes und bei Texten zu Fragen von öffentlichem Interesse.',
      antwortFalsch: 'Vier Punkte entsprechen dem Gesetz. Einer ist gut gemeint, aber eine Pflicht, die Art. 50 für normale Werbebilder nicht kennt.' },

    { typ: 'merk', text: '<b>Art. 50 teilt die Arbeit auf:</b> Der <b>Anbieter</b> markiert erzeugte Inhalte <b>maschinenlesbar</b> (Abs. 2), der <b>Betreiber</b> legt [[Deepfake|Deepfakes]] und Texte zu Fragen von öffentlichem Interesse offen (Abs. 4). [[Urheberrecht und KI|Urheberrecht]]: KI-Ausgaben sind in der Regel <b>nicht</b> geschützt – können aber fremde Rechte verletzen. Stimme und Bild echter Personen brauchen immer deren Zustimmung.' },

    { typ: 'nachricht', text: 'Gut. Dann das Letzte, was Azizi von mir will: eine Liste. Ich dachte, ich komme mit meiner Architekturdokumentation durch. Komme ich nicht, oder?' }
  ]
});

/* ---------------------------------------------------------------
   kip-06 – Die Liste, die niemand hat
   --------------------------------------------------------------- */
AUDIT.data.dialoge.push({
  id: 'kip-06',
  kontakt: 'kiprojekt',
  titel: 'Die Liste, die niemand hat',
  thema: 'Dokumentation',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Herr Azizi hat nach einer Übersicht der KI-Einsätze gefragt. Ich habe ihm unsere Systemdokumentation geschickt: Schnittstellen, Server, Modellversionen. Er hat zurückgeschrieben: „Das ist eine Liste der Programme. Ich brauche eine Liste der Verwendungen."' },

    { typ: 'frage', text: 'Warum besteht er auf Verwendungen statt Programmen?',
      optionen: [
        { text: 'Weil die Risikoklasse am Einsatzzweck hängt – dasselbe Programm kann in mehreren Klassen stecken', richtig: true,
          antwort: 'Richtig, und daraus folgt der Aufbau der Liste: eine Zeile je <b>Einsatz</b>, nicht je Software. Beim Sprachmodell wären das drei Zeilen – Übersetzung intern, Kundenvermerke, Chatbot – mit unterschiedlichen Klassen und Pflichten.' },
        { text: 'Weil die Marktüberwachungsbehörde eine solche Liste verlangt',
          antwort: 'Eine allgemeine Registerpflicht für Betreiber gibt es nicht. Die Liste ist das Arbeitsmittel, mit dem sich die Pflichten überhaupt bestimmen lassen.' },
        { text: 'Weil die Liste in das Verzeichnis der Verarbeitungstätigkeiten gehört',
          antwort: 'Das ist ein naheliegender Berührungspunkt – das Verzeichnis nach Art. 30 DSGVO ist aber nach Verarbeitungstätigkeiten gegliedert und erfasst nur Verarbeitungen mit Personenbezug. Die KI-Übersicht ist umfassender.' }
      ] },

    { typ: 'nachricht', text: 'Verstanden. Und was gehört je Zeile hinein? Ich will das einmal richtig anlegen und nicht dreimal.' },

    { typ: 'mehrfach', text: 'Was gehört in eine Übersicht der KI-Einsätze? (mehrere)',
      optionen: [
        { text: 'Zweck des Einsatzes und daraus abgeleitete Risikoklasse', richtig: true },
        { text: 'Rolle von Rampe 7 – Betreiber oder Anbieter', richtig: true },
        { text: 'Welche Daten hineingehen und ob Personenbezug besteht', richtig: true },
        { text: 'Wer die Ausgaben prüft und verantwortet', richtig: true },
        { text: 'Rechtsgrundlage und ob eine Folgenabschätzung nötig ist', richtig: true },
        { text: 'Die Rechenleistung, mit der das Modell trainiert wurde' }
      ],
      antwortRichtig: 'Vollständig. Die Rechenleistung ist nur für die Einordnung von [[Basismodell|Basismodellen]] mit systemischem Risiko bedeutsam – und das ist eine Frage für den Modellanbieter, nicht für euer Verzeichnis.',
      antwortFalsch: 'Die Liste muss eine Frage beantworten können: „Was machen wir damit, und was folgt daraus?" Fünf Spalten tun das, eine ist eine technische Kennzahl ohne Folge für euch.' },

    { typ: 'nachricht', text: 'Noch eine Sache, die mich wirklich beschäftigt. Wir schicken Kundenvermerke an einen externen KI-Dienst. Muss ich mit dem einen Vertrag haben?' },

    { typ: 'frage', text: 'Wie ist der KI-Dienst datenschutzrechtlich einzuordnen?',
      optionen: [
        { text: 'Als Auftragsverarbeiter, wenn er weisungsgebunden für Rampe 7 arbeitet – dann braucht es einen AV-Vertrag', richtig: true, norm: 'Art. 28 DSGVO',
          antwort: 'Richtig, mit einer wichtigen Einschränkung: Das gilt nur, solange er die Eingaben <b>nicht für eigene Zwecke</b> nutzt. Verwendet er sie zum Training seiner Modelle, ist er eigener [[Verantwortlicher]], und die Übermittlung braucht eine eigene Rechtsgrundlage. Bei kostenlosen Diensten ist das Training in der Standardeinstellung häufig vorgesehen.' },
        { text: 'Als eigener Verantwortlicher – deshalb ist kein Vertrag nötig',
          antwort: 'Wäre er eigener Verantwortlicher, würde es <b>schwieriger</b>, nicht einfacher: Dann liegt eine Übermittlung an einen Dritten vor, die eine eigene Rechtsgrundlage braucht.' },
        { text: 'Als Empfänger im Sinne der Informationspflicht, weiter nichts',
          antwort: 'Er ist auch Empfänger und muss in der Datenschutzerklärung genannt werden. Das ersetzt aber nicht die Einordnung der Rolle und den [[AV-Vertrag]].' }
      ] },

    { typ: 'frage', text: 'Der Dienst betreibt seine Server in den USA. Was ist zusätzlich zu prüfen?',
      optionen: [
        { text: 'Die Zulässigkeit der Drittlandübermittlung – Angemessenheitsbeschluss oder Standardvertragsklauseln', richtig: true, norm: 'Art. 44 ff. DSGVO',
          antwort: 'Richtig. Für die USA besteht ein [[Angemessenheitsbeschluss]], der an die Zertifizierung des Empfängers gebunden ist – ist er nicht zertifiziert, braucht es [[Standardvertragsklauseln]] samt Prüfung der tatsächlichen Lage. Und die beiden Vorgängerbeschlüsse hat der EuGH gekippt, die Lage kann sich also ändern.' },
        { text: 'Nichts weiter, die USA gelten als sicheres Drittland',
          antwort: '„Sicher" ist keine Eigenschaft des Landes, sondern Folge eines Beschlusses – und der gilt nur für zertifizierte Empfänger.' },
        { text: 'Nur die Verschlüsselung der Übertragung',
          antwort: 'Transportverschlüsselung ist eine [[TOMs|technische Maßnahme]] und nötig, löst das Problem des [[Drittland|Drittlandtransfers]] aber nicht – entscheidend ist, wer dort Zugriff nehmen kann.' }
      ] },

    { typ: 'merk', text: '<b>Die Übersicht führt Verwendungen, nicht Programme</b> – je Einsatz: Zweck, Risikoklasse, Rolle, Daten, Prüfer, Rechtsgrundlage. Externer KI-Dienst: weisungsgebunden heißt [[Auftragsverarbeiter]] mit [[AV-Vertrag]]; nutzt er Eingaben zum <b>eigenen Training</b>, ist er eigener [[Verantwortlicher]]. Server im [[Drittland]] verlangen zusätzlich eine Transfergrundlage.' },

    { typ: 'nachricht', text: 'Damit kann ich arbeiten. Ich lege die Liste an und schicke sie Azizi – und Noah sage ich, er soll vorher mit dir reden, bevor er noch mehr in diese Werkzeuge kopiert.' }
  ]
});
