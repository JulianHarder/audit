/* ===========================================================
   AUDIT – data/ki.js
   Die Uebersichtstabellen fuer das Themengebiet
   "KI im Betrieb und der EU AI Act".

   Sieben Listen, weil die Spalten sich unterscheiden:
     kirisikoklassen  die vier Risikoklassen der KI-Verordnung
     kiverbote        verbotene Praktiken nach Art. 5
     kirollen         Anbieter, Betreiber, Einfuehrer, Haendler
     kipflichten      Betreiberpflichten bei Hochrisiko (Art. 26)
     kitransparenz    Transparenzpflichten nach Art. 50
     kizeitschiene    Geltungsbeginn Stufe fuer Stufe
     kisanktionen     die drei Bussgeldrahmen (Art. 99)

   js/chat.js baut daraus die Tabellen (quelle: 'kirisikoklassen'
   usw.). Mit "keys" laesst sich im Gespraech eine Auswahl in
   genau dieser Reihenfolge zeigen.

   Rechtsstand: Verordnung (EU) 2024/1689 (KI-VO / AI Act) in der
   Fassung der Digital-Omnibus-Verordnung (EU) 2026/1744. Der
   Omnibus hat die Hochrisiko-Fristen nach hinten geschoben und
   Art. 4 neu gefasst – die Risikosystematik selbst ist unberuehrt.
   Siehe NOTIZEN.md, Abschnitt "Fachlich gegenpruefen".

   Wie in allen Tabellen stehen hier keine [[Begriffe]]: Karten-HTML
   laeuft nicht durch U.rich(), die Marken wuerden als Text erscheinen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

/* Die vier Risikoklassen. Die Reihenfolge ist die Rangfolge von
   oben nach unten – Karten dieser Quelle nie mischen.
   "stufe" faerbt die Marke in der Tabelle: bad, hoch, normal, ok. */
AUDIT.data.kirisikoklassen = [
  { key: 'verboten', name: 'Unannehmbares Risiko', stufe: 'bad',
    bedeutung: 'Unvereinbar mit den Grundrechten der EU. <b>Nicht genehmigungsfähig</b> – es gibt keine Auflage, unter der es doch erlaubt wäre',
    bsp: 'Social Scoring, Emotionserkennung am Arbeitsplatz, Ausnutzen von Alter oder Notlage, ungezieltes Sammeln von Gesichtsbildern aus dem Netz',
    pflichten: 'Verbot. Weder Anbieter noch Betreiber dürfen es in Verkehr bringen oder einsetzen',
    gilt: 'seit 2. Februar 2025' },
  { key: 'hoch', name: 'Hohes Risiko', stufe: 'hoch',
    bedeutung: 'Erlaubt, aber nur mit dem vollen Pflichtenprogramm. Erfasst wird, <b>wofür</b> das System eingesetzt wird, nicht wie es technisch gebaut ist',
    bsp: 'Bewerberauswahl und Beförderung, Leistungsüberwachung, Kreditwürdigkeit, Zugang zu Bildung, kritische Infrastruktur, Strafverfolgung',
    pflichten: 'Anbieter: Risikomanagement, Daten-Governance, Dokumentation, Konformitätsbewertung, CE. Betreiber: Gebrauchsanweisung befolgen, menschliche Aufsicht, Protokolle, Information der Beschäftigten',
    gilt: 'Anhang III ab 2. Dezember 2027' },
  { key: 'transparenz', name: 'Begrenztes Risiko', stufe: 'normal',
    bedeutung: 'Keine besondere Gefahr für Leib, Leben oder Rechte – aber die Gefahr, <b>getäuscht</b> zu werden. Deshalb nur Transparenzpflichten',
    bsp: 'Chatbot im Kundenkontakt, KI-generierte Texte und Bilder, Deepfakes, Emotionserkennung außerhalb von Arbeit und Schule',
    pflichten: 'Offenlegen, dass KI im Spiel ist, und erzeugte Inhalte kennzeichnen – sonst nichts',
    gilt: 'seit 2. August 2026' },
  { key: 'minimal', name: 'Minimales Risiko', stufe: 'ok',
    bedeutung: 'Der <b>Normalfall</b>. Die große Mehrheit aller KI im Betrieb landet hier und löst keine Pflicht aus der KI-Verordnung aus',
    bsp: 'Spamfilter, Rechtschreibhilfe, Tourenoptimierung, Nachfrageprognose im Lager, Übersetzung interner Texte',
    pflichten: 'Keine. Freiwillige Verhaltenskodizes sind möglich, Datenschutz- und Arbeitsrecht gelten unabhängig davon weiter',
    gilt: '–' }
];

/* Verbotene Praktiken nach Art. 5. Die Liste ist nicht
   vollstaendig – sie enthaelt die Faelle, die einen Betrieb wie
   Rampe 7 treffen koennen. Die rein staatlichen Verbote
   (Predictive Policing, biometrische Fernidentifizierung zur
   Strafverfolgung) stehen als letzter Eintrag zusammengefasst. */
AUDIT.data.kiverbote = [
  { key: 'emotion', name: 'Emotionserkennung am Arbeitsplatz', norm: 'Art. 5 Abs. 1 lit. f',
    warum: 'Das Machtverhältnis macht eine freie Entscheidung unmöglich, und die Verfahren sind wissenschaftlich unzuverlässig',
    bsp: 'Software, die in Bewerbungsgesprächen aus Mimik und Stimme auf Motivation schließt, oder Kameras, die am Band „Stress" erkennen' },
  { key: 'scoring', name: 'Social Scoring', norm: 'Art. 5 Abs. 1 lit. c',
    warum: 'Verhalten aus einem Lebensbereich wird in einem ganz anderen gegen die Person verwendet',
    bsp: 'Eine Punktebewertung von Mitarbeitenden, die Krankmeldungen, private Posts und Pünktlichkeit zusammenrechnet und darüber Schichten verteilt' },
  { key: 'manipulation', name: 'Unterschwellige Beeinflussung', norm: 'Art. 5 Abs. 1 lit. a',
    warum: 'Die Entscheidung wird unter Umgehung des Bewusstseins herbeigeführt – es gibt keine Einwilligung in etwas, das man nicht merkt',
    bsp: 'Ein Shop-Assistent, der durch kaum wahrnehmbare Reize zum Kauf drängt und so zu Entscheidungen mit erheblichem Schaden führt' },
  { key: 'schwaeche', name: 'Ausnutzen von Schwächen', norm: 'Art. 5 Abs. 1 lit. b',
    warum: 'Alter, Behinderung oder eine wirtschaftliche Notlage dürfen nicht zum Angriffspunkt gemacht werden',
    bsp: 'Eine Kampagne, die gezielt hoch verschuldete Kundschaft zu Ratenkäufen bewegt' },
  { key: 'gesichter', name: 'Ungezieltes Sammeln von Gesichtsbildern', norm: 'Art. 5 Abs. 1 lit. e',
    warum: 'Gesichtserkennungsdatenbanken aus dem Netz heben die Anonymität im öffentlichen Raum auf',
    bsp: 'Fotos aus sozialen Netzen oder Überwachungsmaterial abgreifen, um eine Erkennungsdatenbank zu füllen' },
  { key: 'biometrie', name: 'Biometrische Kategorisierung nach sensiblen Merkmalen', norm: 'Art. 5 Abs. 1 lit. g',
    warum: 'Aus dem Körper auf Herkunft, Religion, politische Meinung oder sexuelle Orientierung zu schließen, ist der Einstieg in die Diskriminierung',
    bsp: 'Software, die aus Gesichtsbildern der Bewerbenden auf die Herkunft schließt' },
  { key: 'staat', name: 'Staatliche Verbote', norm: 'Art. 5 Abs. 1 lit. d und h',
    warum: 'Straftatenvorhersage anhand von Persönlichkeitsmerkmalen und biometrische Echtzeit-Fernidentifizierung in öffentlichen Räumen greifen zu tief in die Freiheitsrechte ein',
    bsp: 'Nur für Behörden relevant, mit engen Ausnahmen für die Strafverfolgung – ein Betrieb wie Rampe 7 ist davon nicht betroffen' }
];

/* Die Rollen der KI-Verordnung. Entscheidend fuer die Pruefung:
   Rampe 7 ist in der Regel Betreiber – kann aber nach Art. 25
   zum Anbieter werden. */
AUDIT.data.kirollen = [
  { key: 'anbieter', name: '🏭 Anbieter', en: 'provider', norm: 'Art. 3 Nr. 3',
    wer: 'Entwickelt ein KI-System oder lässt es entwickeln und bringt es <b>unter eigenem Namen oder eigener Marke</b> in Verkehr',
    pflichten: 'Das volle Programm bei Hochrisiko: Risikomanagement, Daten-Governance, technische Dokumentation, Protokollierung, Konformitätsbewertung, CE-Kennzeichnung, Registrierung, Meldung schwerwiegender Vorfälle' },
  { key: 'betreiber', name: '🏢 Betreiber', en: 'deployer', norm: 'Art. 3 Nr. 4',
    wer: 'Setzt ein KI-System <b>unter eigener Verantwortung</b> ein. Die rein private Nutzung ist ausgenommen – der Einsatz im Betrieb nie',
    pflichten: 'Gebrauchsanweisung befolgen, menschliche Aufsicht zuweisen, Eingabedaten verantworten, Betrieb überwachen, Protokolle aufbewahren, Beschäftigte und Betroffene informieren' },
  { key: 'einfuehrer', name: '📦 Einführer', en: 'importer', norm: 'Art. 3 Nr. 6',
    wer: 'Bringt ein KI-System eines Anbieters aus einem Drittland erstmals in der EU in Verkehr',
    pflichten: 'Prüfen, ob der Anbieter seine Pflichten erfüllt hat – Konformitätsbewertung, Dokumentation, CE – und nicht in Verkehr bringen, wenn etwas fehlt' },
  { key: 'haendler', name: '🛒 Händler', en: 'distributor', norm: 'Art. 3 Nr. 7',
    wer: 'Gibt ein KI-System in der Lieferkette weiter, ohne Anbieter oder Einführer zu sein',
    pflichten: 'Vorhandensein von CE-Kennzeichnung und Gebrauchsanweisung prüfen, nichts weitergeben, was erkennbar nicht konform ist' },
  { key: 'wechsel', name: '🔄 Vom Betreiber zum Anbieter', en: 'Rollenwechsel', norm: 'Art. 25',
    wer: 'Ein Betreiber gilt als <b>Anbieter</b>, wenn er seinen Namen oder seine Marke auf das System setzt, es wesentlich verändert oder die Zweckbestimmung so ändert, dass es zum Hochrisiko-System wird',
    pflichten: 'Dann treffen ihn alle Anbieterpflichten. Der häufigste Fall in der Praxis: Ein zugekauftes Modell wird umgewidmet und unter eigenem Produktnamen angeboten' }
];

/* Betreiberpflichten bei Hochrisiko-Systemen nach Art. 26,
   plus die Folgenabschaetzung nach Art. 27. Die Spalte "rampe7"
   macht aus der Norm einen Satz ueber den eigenen Betrieb. */
AUDIT.data.kipflichten = [
  { key: 'anweisung', name: 'Gebrauchsanweisung befolgen', norm: 'Art. 26 Abs. 1',
    inhalt: 'Das System nur für den vom Anbieter vorgesehenen Zweck und in der vorgesehenen Weise einsetzen',
    rampe7: 'Ein Vorsortier-Tool für Lagerkräfte darf nicht einfach für die Auswahl der Disponenten benutzt werden' },
  { key: 'aufsicht', name: 'Menschliche Aufsicht zuweisen', norm: 'Art. 26 Abs. 2',
    inhalt: 'Namentlich benannte <b>natürliche Personen</b>, die fachlich geeignet, geschult und mit der nötigen Befugnis ausgestattet sind',
    rampe7: 'Nicht „die Personalabteilung", sondern eine Person mit Namen, die das Ergebnis auch verwerfen darf' },
  { key: 'eingabe', name: 'Eingabedaten verantworten', norm: 'Art. 26 Abs. 4',
    inhalt: 'Soweit der Betreiber die Eingabedaten bestimmt: relevant und hinreichend repräsentativ für den Zweck',
    rampe7: 'Werden nur Lebensläufe der letzten Einstellungen eingespeist, lernt das System die bisherige Auswahlpraxis – samt ihrer Schieflagen' },
  { key: 'ueberwachen', name: 'Betrieb überwachen und melden', norm: 'Art. 26 Abs. 5',
    inhalt: 'Den Betrieb beobachten, bei Risiko für Gesundheit, Sicherheit oder Grundrechte den Anbieter und die Behörde unterrichten und den Einsatz aussetzen',
    rampe7: 'Fällt auf, dass Bewerbungen aus einer Postleitzahl systematisch schlechter bewertet werden, wird abgeschaltet – nicht nachjustiert' },
  { key: 'protokolle', name: 'Protokolle aufbewahren', norm: 'Art. 26 Abs. 6',
    inhalt: 'Automatisch erzeugte Protokolle <b>mindestens sechs Monate</b> aufbewahren, soweit sie der Kontrolle unterliegen',
    rampe7: 'Ohne Protokoll ist später nicht mehr nachweisbar, welche Eingabe zu welcher Reihenfolge geführt hat' },
  { key: 'beschaeftigte', name: 'Beschäftigte vorher informieren', norm: 'Art. 26 Abs. 7',
    inhalt: 'Vor der Inbetriebnahme am Arbeitsplatz die betroffenen Beschäftigten <b>und ihre Vertretung</b> informieren',
    rampe7: 'Die Information kommt vor dem ersten Einsatz – und zusätzlich zur Mitbestimmung des Betriebsrats, nicht statt ihr' },
  { key: 'betroffene', name: 'Betroffene informieren', norm: 'Art. 26 Abs. 11',
    inhalt: 'Wer von einer Entscheidung betroffen ist, die mit einem Hochrisiko-System getroffen oder unterstützt wurde, muss das erfahren',
    rampe7: 'In der Absage steht, dass ein KI-System an der Vorauswahl mitgewirkt hat' },
  { key: 'fria', name: 'Grundrechte-Folgenabschätzung', norm: 'Art. 27',
    inhalt: 'Nur für bestimmte Betreiber: öffentliche Stellen, Private mit öffentlichen Diensten sowie Kreditwürdigkeits- und Lebens-/Krankenversicherungsfälle',
    rampe7: 'Für Rampe 7 nicht verpflichtend – die <b>Datenschutz-Folgenabschätzung</b> nach Art. 35 DSGVO dagegen sehr wohl' }
];

/* Transparenzpflichten nach Art. 50. "wer" nennt den
   Pflichtigen – das ist der haeufigste Irrtum: Die
   Kennzeichnungspflicht fuer erzeugte Inhalte trifft den
   Anbieter, die Offenlegung beim Deepfake den Betreiber. */
AUDIT.data.kitransparenz = [
  { key: 'chatbot', name: 'Umgang mit einem KI-System', norm: 'Art. 50 Abs. 1', wer: 'Anbieter',
    pflicht: 'Menschen müssen erfahren, dass sie mit einem KI-System sprechen – es sei denn, das ist aus den Umständen offensichtlich',
    bsp: 'Der Shop-Chatbot von Rampe 7 begrüßt mit „Ich bin ein KI-Assistent" statt mit einem erfundenen Vornamen' },
  { key: 'synthetisch', name: 'Erzeugte Inhalte kennzeichnen', norm: 'Art. 50 Abs. 2', wer: 'Anbieter',
    pflicht: 'Synthetische Texte, Bilder, Ton und Video <b>maschinenlesbar</b> markieren, etwa als Wasserzeichen oder in den Metadaten',
    bsp: 'Für Systeme, die vor dem 2. August 2026 auf dem Markt waren, gilt die Pflicht ab dem 2. Dezember 2026' },
  { key: 'emotion', name: 'Emotionserkennung und biometrische Kategorisierung', norm: 'Art. 50 Abs. 3', wer: 'Betreiber',
    pflicht: 'Die betroffenen Personen über den Einsatz informieren – zusätzlich zu den Pflichten aus der DSGVO',
    bsp: 'Am Arbeitsplatz hilft die Information nicht weiter: dort ist Emotionserkennung nach Art. 5 ganz verboten' },
  { key: 'deepfake', name: 'Deepfakes offenlegen', norm: 'Art. 50 Abs. 4', wer: 'Betreiber',
    pflicht: 'Wer Bild, Ton oder Video veröffentlicht, das echt wirkt, aber erzeugt oder manipuliert ist, muss das offenlegen',
    bsp: 'Ein Werbespot mit einer erzeugten Stimme der Geschäftsführerin wird als KI-Inhalt gekennzeichnet' },
  { key: 'text', name: 'Veröffentlichte KI-Texte', norm: 'Art. 50 Abs. 4', wer: 'Betreiber',
    pflicht: 'KI-erzeugte Texte zu Angelegenheiten von öffentlichem Interesse sind offenzulegen – außer ein Mensch hat sie geprüft und verantwortet sie redaktionell',
    bsp: 'Ein KI-Entwurf für die Pressemitteilung ist unproblematisch, sobald jemand ihn redaktionell verantwortet' }
];

/* Geltungsbeginn Stufe fuer Stufe – Reihenfolge ist Pruefungs-
   stoff, Karten dieser Quelle nie mischen. "stand" faerbt die
   Marke: ok fuer "gilt schon", hoch fuer "kommt noch".
   Rechtsstand Oktober 2026, nach der Digital-Omnibus-Verordnung. */
AUDIT.data.kizeitschiene = [
  { key: 'inkraft', datum: '1. August 2024', stand: 'ok', was: 'Die KI-Verordnung tritt in Kraft',
    hinweis: 'Verordnung (EU) 2024/1689. In Kraft heißt noch nicht anwendbar – die Pflichten greifen gestaffelt' },
  { key: 'verbote', datum: '2. Februar 2025', stand: 'ok', was: 'Verbotene Praktiken (Art. 5) und KI-Kompetenz (Art. 4)',
    hinweis: 'Die erste Stufe trifft jeden Betrieb: Verbote gelten sofort, und das Personal muss im Umgang mit KI geschult werden' },
  { key: 'gpai', datum: '2. August 2025', stand: 'ok', was: 'Pflichten für Basismodelle (GPAI), Governance und Sanktionsrahmen',
    hinweis: 'Betrifft die Modellanbieter, nicht die Betreiber – dazu die nationalen Behörden und die Bußgeldvorschriften' },
  { key: 'omnibus', datum: '27. Juli 2026', stand: 'ok', was: 'Die Digital-Omnibus-Verordnung tritt in Kraft',
    hinweis: 'Verordnung (EU) 2026/1744: schiebt die Hochrisiko-Fristen nach hinten und fasst Art. 4 neu. Die Risikosystematik bleibt unverändert' },
  { key: 'allgemein', datum: '2. August 2026', stand: 'ok', was: 'Allgemeine Anwendbarkeit, darunter die Transparenzpflichten (Art. 50)',
    hinweis: 'Seitdem muss offengelegt werden, dass man mit einer KI spricht, und erzeugte Inhalte sind zu kennzeichnen' },
  { key: 'dez2026', datum: '2. Dezember 2026', stand: 'hoch', was: 'Ergänzte Verbote und Ende der Übergangsfrist für Altsysteme bei Art. 50 Abs. 2',
    hinweis: 'Systeme, die vor dem 2. August 2026 auf dem Markt waren, müssen ihre Kennzeichnung nachliefern' },
  { key: 'hochrisiko', datum: '2. Dezember 2027', stand: 'hoch', was: 'Hochrisiko-Systeme nach Anhang III',
    hinweis: 'Vom Omnibus von 2026 auf 2027 verschoben – betrifft Bewerberauswahl, Leistungsüberwachung, Kreditwürdigkeit. DSGVO und Arbeitsrecht gelten in diesen Fällen trotzdem schon heute' },
  { key: 'produkte', datum: '2. August 2028', stand: 'hoch', was: 'Hochrisiko-KI als Sicherheitsbauteil in Produkten (Anhang I)',
    hinweis: 'Die letzte Stufe, ebenfalls um ein Jahr verschoben – Maschinen, Fahrzeuge, Medizinprodukte' }
];

/* Die drei Bussgeldrahmen nach Art. 99. Bei KMU gilt jeweils
   der niedrigere der beiden Betraege, sonst der hoehere.
   Reihenfolge von schwer nach leicht – nicht mischen. */
AUDIT.data.kisanktionen = [
  { key: 'verbote', verstoss: 'Verbotene Praktiken nach Art. 5', stufe: 'bad',
    rahmen: 'bis 35 Mio. € oder 7 % des weltweiten Jahresumsatzes',
    bsp: 'Emotionserkennung in Bewerbungsgesprächen – der höchste Rahmen der gesamten Verordnung, über dem der DSGVO' },
  { key: 'pflichten', verstoss: 'Verstoß gegen Anbieter- oder Betreiberpflichten', stufe: 'hoch',
    rahmen: 'bis 15 Mio. € oder 3 % des weltweiten Jahresumsatzes',
    bsp: 'Hochrisiko-System ohne menschliche Aufsicht betrieben, Transparenzpflicht beim Chatbot verletzt, Protokolle nicht aufbewahrt' },
  { key: 'falschangaben', verstoss: 'Falsche Angaben gegenüber Behörden', stufe: 'normal',
    rahmen: 'bis 7,5 Mio. € oder 1 % des weltweiten Jahresumsatzes',
    bsp: 'Unvollständige oder irreführende Auskunft an die Marktüberwachungsbehörde' }
];
