/* ===========================================================
   AUDIT – data/dialoge-dsb.js
   Herr Olschewski, externer Datenschutzbeauftragter.
   Er duzt dich – das hat er beim ersten Termin angeboten –,
   bleibt sprachlich aber förmlich und präzise. Älterer
   Kollege, der gern erklärt und Wert auf Begründungen legt.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'dsb-01',
  kontakt: 'dsb',
  titel: '„Löschen Sie alles über mich"',
  thema: 'Betroffenenrechte',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Guten Morgen. Hast du einen Moment? Ich habe eine Anfrage weitergeleitet bekommen, die wir gemeinsam anschauen sollten.' },
    { typ: 'nachricht', text: 'Eine Kundin schreibt: „Löschen Sie bitte mein Kundenkonto und alle Daten, die Sie über mich haben."' },
    { typ: 'nachricht', text: 'Sie hat vor zwei Jahren dreimal bestellt. Im System liegen ihr Konto, der Newsletter-Eintrag – und drei Rechnungen.' },

    { typ: 'frage', text: 'Wie gehen wir damit um?',
      optionen: [
        { text: 'Alles löschen, sie hat ein Recht darauf',
          antwort: 'Das Recht gibt es ([[Art. 17 DSGVO|Art. 17]]), aber es gilt nicht grenzenlos. Rechnungen müssen wir nach Handels- und Steuerrecht <b>zehn Jahre</b> aufbewahren. Die dürften wir gar nicht löschen.' },
        { text: 'Konto und Newsletter löschen, Rechnungen sperren', richtig: true, norm: 'Art. 17 Abs. 3 lit. b DSGVO',
          antwort: 'Richtig. Alles, was wir nicht mehr brauchen, kommt weg. Die Rechnungen bleiben – aber <b>gesperrt</b>, also nur noch für die Aufbewahrungspflicht nutzbar, nicht mehr für Werbung oder Auswertungen. Und wir erklären ihr das verständlich.' },
        { text: 'Ablehnen, wir haben eine Aufbewahrungspflicht',
          antwort: 'Zu pauschal. Die Pflicht betrifft nur die Rechnungen. Kundenkonto, Newsletter-Verteiler und Bestellhistorie fallen nicht darunter – die müssen raus.' }
      ] },

    { typ: 'nachricht', text: 'Gut. Die nächste Frage stellt mir die Geschäftsführung jedes Mal:' },

    { typ: 'frage', text: 'Wie schnell müssen wir antworten?',
      optionen: [
        { text: 'Noch am selben Tag',
          antwort: 'So streng ist es nicht. „Unverzüglich" heißt juristisch „ohne schuldhaftes Zögern", nicht „sofort".' },
        { text: 'Innerhalb eines Monats', richtig: true, norm: 'Art. 12 Abs. 3 DSGVO',
          antwort: 'Genau. Unverzüglich, spätestens aber <b>innerhalb eines Monats</b>. Bei komplizierten Fällen dürfen wir um <b>zwei weitere Monate</b> verlängern – müssen die Person dann aber innerhalb des ersten Monats informieren und die Verzögerung begründen. Und: Das Ganze ist grundsätzlich <b>unentgeltlich</b>.' },
        { text: 'Innerhalb von drei Monaten',
          antwort: 'Das ist das Maximum <b>mit</b> Verlängerung. Die muss aber angekündigt und begründet werden – der Regelfall ist ein Monat.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt kommt ein Punkt, den fast alle übersehen. Wir haben ihre Adresse damals auch an unseren Versanddienstleister gegeben.' },

    { typ: 'frage', text: 'Müssen wir dort etwas veranlassen?',
      optionen: [
        { text: 'Ja, wir müssen die Empfänger informieren', richtig: true, norm: 'Art. 19 DSGVO',
          antwort: 'Richtig. Jeder Empfänger der Daten muss über die Löschung informiert werden – es sei denn, das ist unmöglich oder mit unverhältnismäßigem Aufwand verbunden. Die Kundin darf außerdem verlangen, dass wir ihr die Empfänger nennen.' },
        { text: 'Nein, das ist deren Sache',
          antwort: 'Doch, es ist unsere. Wir sind der [[Verantwortlicher|Verantwortliche]], der Dienstleister ist [[Auftragsverarbeiter]] und handelt nur auf unsere Weisung. Die Verantwortung bleibt bei uns.' }
      ] },

    { typ: 'nachricht', text: 'Noch etwas Praktisches: Woher wissen wir eigentlich, dass die Anfrage wirklich von ihr stammt?' },

    { typ: 'frage', text: 'Dürfen wir vor der Auskunft die Identität prüfen?',
      optionen: [
        { text: 'Ja, bei begründeten Zweifeln', richtig: true,
          antwort: 'Richtig – und das ist wichtig: Wer blind Auskunft erteilt, baut selbst eine Datenpanne. Bei <b>begründeten Zweifeln</b> dürfen wir zusätzliche Informationen zur Identifizierung verlangen. Aber Vorsicht: Eine Ausweiskopie ist in der Regel unverhältnismäßig. Oft genügt die Antwort über die hinterlegte E-Mail-Adresse.' },
        { text: 'Nein, das wäre eine unzulässige Hürde',
          antwort: 'So weit geht es nicht. Bei <b>begründeten Zweifeln</b> dürfen und sollten wir die Identität prüfen – sonst geben wir die Daten womöglich an einen Fremden heraus.' }
      ] },

    { typ: 'frage', text: 'Was wäre hier eine überzogene Forderung?',
      optionen: [
        { text: 'Eine Ausweiskopie verlangen', richtig: true,
          antwort: 'Genau. Das ist in den meisten Fällen unverhältnismäßig und erzeugt zusätzliche sensible Daten, die wir dann auch wieder schützen müssen. Weniger ist hier mehr.' },
        { text: 'Die Anfrage über die hinterlegte Adresse bestätigen lassen',
          antwort: 'Das ist im Gegenteil der elegante Weg: Wir antworten an die bei uns hinterlegte Adresse. Überzogen wäre etwas anderes.' }
      ] },

    { typ: 'karte', titel: 'Die wichtigsten Betroffenenrechte', quelle: 'betroffenenrechte',
      keys: ['a15', 'a16', 'a17', 'a18', 'a20', 'a21'] },

    { typ: 'merk', text: '<b>Löschen ja – aber Aufbewahrungsfristen gehen vor.</b> Dann wird gesperrt statt gelöscht. Frist: ein Monat. Empfänger informieren (Art. 19). Identität nur bei begründeten Zweifeln prüfen, keine Ausweiskopie.' },

    { typ: 'nachricht', text: 'Sehr gut. Ich formuliere das Antwortschreiben, du kümmerst dich um die technische Umsetzung. Melde dich, wenn das System die Sperre nicht sauber abbilden kann – das ist erfahrungsgemäß der schwierige Teil.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-02',
  kontakt: 'dsb',
  titel: 'Was sind personenbezogene Daten?',
  thema: 'DSGVO-Grundlagen',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Bevor wir ins Detail gehen, sollten wir die Grundlage klären. Sonst reden wir die nächsten Monate aneinander vorbei.' },

    { typ: 'frage', text: 'Wen oder was schützt der Datenschutz eigentlich?',
      optionen: [
        { text: 'Natürliche Personen und ihre Rechte', richtig: true,
          antwort: 'Richtig. Der Datenschutz schützt <b>Menschen</b> davor, dass durch den Umgang mit ihren Daten ihre Rechte und Freiheiten verletzt werden. Im Kern steht das Recht auf [[informationelle Selbstbestimmung]]: Jeder entscheidet selbst über Preisgabe und Verwendung seiner Daten.' },
        { text: 'Die Daten des Unternehmens',
          antwort: 'Das ist [[Datensicherheit]] – die schützt alle Daten vor Verlust und Manipulation. Der [[Datenschutz]] verfolgt ein anderes Ziel.' },
        { text: 'Firmengeheimnisse vor der Konkurrenz',
          antwort: 'Das ist Geheimnisschutz und gehört zur [[Informationssicherheit]]. Der Datenschutz kümmert sich ausschließlich um <b>personenbezogene</b> Daten.' }
      ] },

    { typ: 'nachricht', text: 'Merk dir diesen Satz für die Prüfung – er wird fast immer in der ersten Aufgabe verlangt.' },
    { typ: 'merk', text: '<b>Datenschutz schützt Menschen, nicht Daten.</b> Kern: das Recht auf informationelle Selbstbestimmung – selbst entscheiden, wer was über einen weiß.' },

    { typ: 'nachricht', text: 'Gut. Dann schauen wir in unsere Personalverwaltung. Dort steht pro Beschäftigtem einiges drin.' },

    { typ: 'mehrfach', text: 'Welche dieser Angaben sind personenbezogene Daten? (mehrere)',
      optionen: [
        { text: 'Vor- und Nachname', richtig: true },
        { text: 'Personalnummer', richtig: true },
        { text: 'Abteilung', richtig: true },
        { text: 'Private Telefonnummer', richtig: true },
        { text: 'Anzahl der Urlaubstage', richtig: true },
        { text: 'Gesamtzahl der Beschäftigten im Unternehmen' }
      ],
      antwortRichtig: 'Sehr gut – alles außer der letzten Angabe. Der <b>Name</b> identifiziert unmittelbar. Die <b>Personalnummer</b> ist eindeutig zugeordnet und über die Personalverwaltung rückführbar. Die <b>Telefonnummer</b> lässt über den Anschlussinhaber Rückschlüsse zu. <b>Abteilung</b> und <b>Urlaubstage</b> sind Sachinformationen, die bei einer bestimmten Person stehen – also ebenfalls personenbezogen. Die <b>Gesamtzahl</b> ist ein aggregierter statistischer Wert ohne Bezug zu einer einzelnen Person.',
      antwortFalsch: 'Die Frage lautet immer: Lässt sich die Angabe einer <b>bestimmten oder bestimmbaren</b> Person zuordnen – direkt oder über Zusatzwissen? Eine reine Gesamtzahl kann das nicht.' },

    { typ: 'nachricht', text: 'Die Begründungslogik ist wichtiger als die Zuordnung selbst: <b>direkt identifizierend</b> oder <b>über Zusatzwissen bestimmbar</b>. Das Zweite wird in Prüfungen gern übersehen.' },

    { typ: 'frage', text: 'Ist eine IP-Adresse ein personenbezogenes Datum?',
      optionen: [
        { text: 'Ja, in der Regel schon', richtig: true,
          antwort: 'Richtig. Für sich genommen ist sie nur eine Zahlenfolge – aber der Provider kann sie einer Person zuordnen. Damit ist die Person <b>bestimmbar</b>. Dasselbe gilt für Kfz-Kennzeichen oder Kundennummern.' },
        { text: 'Nein, das ist eine technische Angabe',
          antwort: 'Das war lange umstritten, ist aber geklärt. Entscheidend ist nicht, ob <b>wir</b> die Person erkennen, sondern ob sie mit zumutbarem Aufwand <b>bestimmbar</b> ist. Über den Provider ist sie das.' }
      ] },

    { typ: 'frage', text: 'Und eine Pseudonymisierung – macht die Daten anonym?',
      optionen: [
        { text: 'Nein, solange die Zuordnung möglich bleibt', richtig: true,
          antwort: 'Genau. Das schauen wir uns noch ausführlich an. Merke vorab: [[Pseudonymisierung]] ist eine Schutzmaßnahme, keine Befreiung von der DSGVO.' },
        { text: 'Ja, der Name ist ja ersetzt',
          antwort: 'Das ist die häufigste Falle. Solange die Zuordnung mit Zusatzinformationen <b>möglich</b> bleibt, sind es weiterhin personenbezogene Daten.' }
      ] },

    { typ: 'nachricht', text: 'Letzter Punkt für heute, und der ist prüfungsrelevant: Nicht alle personenbezogenen Daten sind gleich.' },

    { typ: 'mehrfach', text: 'Welche gehören zu den besonderen Kategorien? (mehrere)',
      optionen: [
        { text: 'Gesundheitsdaten', richtig: true },
        { text: 'Religionszugehörigkeit', richtig: true },
        { text: 'Bankverbindung' },
        { text: 'Gewerkschaftszugehörigkeit', richtig: true },
        { text: 'Biometrische Daten zur Identifizierung', richtig: true },
        { text: 'Gehalt' }
      ],
      antwortRichtig: 'Richtig. Zu den [[besondere Kategorien|besonderen Kategorien]] zählen Gesundheit, Religion, politische Meinung, Gewerkschaft, ethnische Herkunft, Biometrie und Sexualleben. <b>Bankverbindung und Gehalt gehören formal nicht dazu</b> – auch wenn sie sensibel sind. Das ist eine beliebte Prüfungsfalle: sensibel im Alltagssinn ist nicht dasselbe wie „besondere Kategorie".',
      antwortFalsch: 'Fast. Zwei der Angaben sind zwar heikel, zählen aber formal <b>nicht</b> zu den besonderen Kategorien. Überleg, welche ausdrücklich im Gesetz aufgezählt sind.' },

    { typ: 'frage', text: 'Was gilt für die Verarbeitung besonderer Kategorien?',
      optionen: [
        { text: 'Grundsätzlich verboten, außer es greift eine Ausnahme', richtig: true, norm: 'Art. 9 DSGVO',
          antwort: 'Richtig. Es gilt ein <b>Verbot mit Erlaubnisvorbehalt</b> – strenger als sonst. Ausnahmen sind etwa die ausdrückliche Einwilligung oder arbeitsrechtliche Pflichten. Deshalb dürfen wir Krankmeldungen verarbeiten: Das ergibt sich aus dem Arbeitsrecht.' },
        { text: 'Sie brauchen nur eine normale Rechtsgrundlage',
          antwort: 'Nein, das genügt nicht. Bei besonderen Kategorien brauchst du <b>zusätzlich</b> eine Ausnahme nach Art. 9 Abs. 2 – die normale Rechtsgrundlage allein reicht nicht.' }
      ] },

    { typ: 'merk', text: '<b>Personenbezogen</b> = bestimmte oder <b>bestimmbare</b> Person (auch Personalnummer, Kennzeichen, IP). <b>Besondere Kategorien</b> (Gesundheit, Religion, Gewerkschaft, Biometrie …): grundsätzlich verboten, nur mit Ausnahme. Gehalt und Bankdaten zählen <b>nicht</b> dazu.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-03',
  kontakt: 'dsb',
  titel: 'Der Shop fragt zu viel ab',
  thema: 'DSGVO-Grundlagen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Die Marketingabteilung hat mir den Entwurf für das neue Bestellformular geschickt. Ich bin … nicht begeistert.' },
    { typ: 'nachricht', text: 'Abgefragt werden sollen: Name, Lieferadresse, Geburtsdatum, Familienstand, monatliches Einkommen und private Telefonnummer.' },
    { typ: 'nachricht', text: 'Alles als <b>Pflichtfeld</b>. Ohne diese Angaben kommt keine Bestellung zustande.' },

    { typ: 'mehrfach', text: 'Gegen welche Grundsätze verstößt das? (mehrere)',
      optionen: [
        { text: 'Datenminimierung', richtig: true },
        { text: 'Zweckbindung', richtig: true },
        { text: 'Richtigkeit' },
        { text: 'Freiwilligkeit der Einwilligung (Kopplungsverbot)', richtig: true },
        { text: 'Verfügbarkeit' }
      ],
      antwortRichtig: 'Genau diese drei. <b>[[Datenminimierung]]:</b> Für die Vertragsabwicklung genügen Name und Lieferadresse, dazu die E-Mail für die Bestätigung. <b>[[Zweckbindung]]:</b> Für Familienstand und Einkommen ist kein legitimer Zweck erkennbar. <b>[[Kopplungsverbot]]:</b> Wer den Vertrag davon abhängig macht, erhält keine freiwillige – und damit keine wirksame – Einwilligung.',
      antwortFalsch: '„Richtigkeit" betrifft die inhaltliche Korrektheit der Daten, „Verfügbarkeit" ist ein Schutzziel der Informationssicherheit. Hier geht es um <b>Menge</b>, <b>Zweck</b> und <b>Freiwilligkeit</b>.' },

    { typ: 'karte', titel: 'Die Grundsätze aus Artikel 5', quelle: 'grundsaetze' },

    { typ: 'nachricht', text: 'Es kommt noch etwas hinzu, das man gern vergisst:' },

    { typ: 'frage', text: 'Warum sind Einkommen und Familienstand trotzdem heikel?',
      optionen: [
        { text: 'Weil der Schaden bei Missbrauch besonders groß wäre', richtig: true,
          antwort: 'Richtig. Sie sind keine besondere Kategorie im Sinne des Gesetzes, aber besonders schutzwürdig: Bei einem Datenleck wächst das Schadensrisiko erheblich. Je sensibler die Daten, desto weniger sollte man überhaupt erheben.' },
        { text: 'Weil sie nach Art. 9 besondere Kategorien sind',
          antwort: 'Nicht ganz – zu den [[besondere Kategorien|besonderen Kategorien]] zählen Gesundheit, Religion, politische Meinung, Gewerkschaft, Herkunft, Biometrie und Sexualleben. Einkommen und Familienstand gehören formal nicht dazu. Trotzdem sind sie heikel – warum?' }
      ] },

    { typ: 'frage', text: 'Was schlagen wir dem Marketing vor?',
      optionen: [
        { text: 'Nur Erforderliches als Pflichtfeld, der Rest freiwillig oder weg', richtig: true,
          antwort: 'Das ist der gangbare Weg. Am saubersten wäre: ganz weglassen, was wir nicht brauchen. Was wir nicht haben, kann uns auch nicht gestohlen werden – das ist das beste Argument gegenüber dem Marketing.' },
        { text: 'Alles so lassen, die Kunden geben es ja freiwillig ein',
          antwort: 'Freiwillig ist es gerade <b>nicht</b> – ohne die Angaben kommt keine Bestellung zustande. Genau das ist das Kopplungsverbot.' }
      ] },

    { typ: 'nachricht', text: 'Das Marketing argumentiert, man brauche die Daten „für später, man weiß ja nie". Kennst du das Gegenargument?' },

    { typ: 'frage', text: 'Was antwortest du darauf?',
      optionen: [
        { text: 'Daten auf Vorrat sind unzulässig und ein Risiko', richtig: true,
          antwort: 'Genau. Rechtlich verstößt es gegen Zweckbindung und Datenminimierung. Praktisch: Jeder Datensatz, den wir haben, muss geschützt, beauskunftet und irgendwann gelöscht werden. Daten sind kein Vermögen, sie sind auch eine <b>Verbindlichkeit</b>.' },
        { text: 'Solange wir sie nicht nutzen, ist es unproblematisch',
          antwort: 'Leider nicht. Schon das <b>Speichern</b> ist eine Verarbeitung und braucht einen Zweck und eine Rechtsgrundlage. Und was gespeichert ist, kann abfließen.' }
      ] },

    { typ: 'frage', text: 'Wie lange dürfen wir die Bestelldaten überhaupt behalten?',
      optionen: [
        { text: 'So lange der Zweck oder eine gesetzliche Frist es verlangt', richtig: true, norm: 'Art. 5 Abs. 1 lit. e DSGVO',
          antwort: 'Richtig – das ist die [[Speicherbegrenzung]]. Deshalb brauchen wir ein <b>Löschkonzept</b>: Für jede Datenart ist festgelegt, wann sie gelöscht oder gesperrt wird. Ohne das sammelt sich alles bis in alle Ewigkeit.' },
        { text: 'Unbegrenzt, solange der Kunde nicht widerspricht',
          antwort: 'Nein. Die [[Speicherbegrenzung]] verlangt, dass wir von uns aus löschen, sobald der Zweck entfallen ist – unabhängig davon, ob jemand nachfragt.' }
      ] },

    { typ: 'merk', text: 'Pflichtfeld nur für das, was für den <b>Zweck erforderlich</b> ist. Daten auf Vorrat sind unzulässig <b>und</b> ein Risiko. Dazu gehört ein <b>Löschkonzept</b>: Was wird wann gelöscht?' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-04',
  kontakt: 'dsb',
  titel: 'Dürfen wir die E-Mails für Werbung nutzen?',
  thema: 'DSGVO-Grundlagen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Das Marketing möchte alle Kunden-E-Mail-Adressen für einen Newsletter über neue Produkte verwenden.' },
    { typ: 'nachricht', text: 'Die Adressen haben wir bei der Registrierung im Shop erhoben – für Bestellbestätigungen und Rechnungen.' },

    { typ: 'frage', text: 'Dürfen wir die Adressen ohne Weiteres für Werbung nutzen?',
      optionen: [
        { text: 'Nein, Werbung ist ein anderer Zweck', richtig: true,
          antwort: 'Genau. Die Adressen wurden zur <b>Vertragsabwicklung</b> erhoben. Werbung ist ein anderer Zweck und braucht eine eigene Rechtsgrundlage. Ohne sie wäre der Versand rechtswidrig.' },
        { text: 'Ja, wir haben sie ja rechtmäßig erhalten',
          antwort: 'Rechtmäßig erhoben heißt nicht beliebig verwendbar. Die [[Zweckbindung]] erlaubt nur den Zweck, für den wir sie erhoben haben.' }
      ] },

    { typ: 'nachricht', text: 'Sie sagen „braucht eine eigene Rechtsgrundlage". Dahinter steht ein Grundsatz, der die Reihenfolge jeder datenschutzrechtlichen Prüfung bestimmt. Können Sie ihn benennen?' },

    { typ: 'frage', text: 'Wie lautet der Grundsatz, aus dem sich das ergibt?',
      optionen: [
        { text: 'Verbot mit Erlaubnisvorbehalt – verboten, sofern nicht erlaubt', richtig: true, norm: 'Art. 6 Abs. 1 DSGVO',
          antwort: 'Richtig. Jede [[Verarbeitung]] personenbezogener Daten ist zunächst <b>untersagt</b> und wird erst rechtmäßig, wenn eine der sechs [[Rechtsgrundlage|Rechtsgrundlagen des Art. 6 Abs. 1]] greift. Nicht das Verbot muss begründet werden, sondern die Erlaubnis – und zwar vor jeder Verarbeitung, für jeden Zweck einzeln.' },
        { text: 'Erlaubnis mit Verbotsvorbehalt – erlaubt, bis es untersagt wird',
          antwort: 'Das ist die Umkehrung und der häufigste Fehler in der Prüfung. Im allgemeinen Wirtschaftsrecht gilt oft die Freiheit als Regel; im Datenschutzrecht ist die Reihenfolge genau umgekehrt.' },
        { text: 'Datenminimierung',
          antwort: '[[Datenminimierung]] ist einer der [[Grundsätze der Verarbeitung|Grundsätze aus Art. 5]] und gilt zusätzlich – sie betrifft den <b>Umfang</b>. Gesucht war der Satz über die Rechtmäßigkeit als solche.' }
      ] },

    { typ: 'frage', text: 'Und wer muss im Streitfall belegen, dass eine Erlaubnis bestand?',
      optionen: [
        { text: 'Der Verantwortliche – das ist die Rechenschaftspflicht', richtig: true, norm: 'Art. 5 Abs. 2 DSGVO',
          antwort: 'Genau. Art. 5 Abs. 2 DSGVO kehrt die Darlegungslast um: Der [[Verantwortlicher|Verantwortliche]] muss die Einhaltung <b>nachweisen können</b>. Die betroffene Person sieht ja nicht, was intern geschieht – sie muss nichts beweisen. Deshalb heißt der Grundsatz [[Rechenschaftspflicht]].' },
        { text: 'Die betroffene Person muss die Rechtswidrigkeit beweisen',
          antwort: 'Dann wäre der Schutz wertlos, weil ihr die Einblicke fehlen. Art. 5 Abs. 2 DSGVO legt die Last ausdrücklich auf den Verantwortlichen.' },
        { text: 'Die Aufsichtsbehörde muss den Verstoß beweisen',
          antwort: 'Die [[Aufsichtsbehörde]] prüft und kann Auskunft verlangen. Nachweisen muss die Rechtmäßigkeit aber der Verantwortliche selbst.' }
      ] },

    { typ: 'frage', text: 'Worauf stützen wir die Werbung?',
      optionen: [
        { text: 'Einwilligung der Kunden', richtig: true,
          antwort: 'Der sichere Weg. Unter engen Voraussetzungen kommt auch das [[berechtigtes Interesse|berechtigte Interesse]] in Betracht – etwa Bestandskundenwerbung für <b>ähnliche</b> Produkte. Mit einer Einwilligung sind wir aber auf der sicheren Seite.' },
        { text: 'Rechtliche Verpflichtung',
          antwort: 'Kein Gesetz verpflichtet uns, Werbung zu verschicken. Diese Grundlage greift bei echten Pflichten wie der Aufbewahrung von Rechnungen.' },
        { text: 'Vertragserfüllung',
          antwort: 'Der Kaufvertrag verlangt keine Werbemails. Für die Erfüllung brauchen wir die Adresse nur für Bestätigung und Rechnung.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Voraussetzungen muss eine wirksame Einwilligung erfüllen? (mehrere)',
      optionen: [
        { text: 'Freiwillig', richtig: true },
        { text: 'Für den bestimmten Fall, also den Zweck Werbung', richtig: true },
        { text: 'Informiert', richtig: true },
        { text: 'Durch eine aktive Handlung – kein vorangekreuztes Kästchen', richtig: true },
        { text: 'Schriftlich mit Unterschrift' },
        { text: 'Jederzeit widerrufbar', richtig: true }
      ],
      antwortRichtig: 'Richtig – und wir müssen sie außerdem <b>nachweisen</b> können. Deshalb arbeitet man mit <b>Double-Opt-in</b>: Nach der Anmeldung geht eine Bestätigungsmail raus. Eine Schriftform verlangt die DSGVO nicht, ein Klick genügt – er muss nur aktiv und dokumentiert sein.',
      antwortFalsch: 'Eine Voraussetzung ist zu streng formuliert. Die DSGVO verlangt keine bestimmte Form – entscheidend sind Freiwilligkeit, Bestimmtheit, Information, aktive Handlung und Widerrufbarkeit.' },

    { typ: 'frage', text: 'Warum ist Double-Opt-in so verbreitet?',
      optionen: [
        { text: 'Weil wir die Einwilligung nachweisen müssen', richtig: true, norm: 'Art. 7 Abs. 1 DSGVO',
          antwort: 'Genau. Die <b>Nachweispflicht</b> liegt bei uns. Ohne Bestätigungsmail könnte jeder eine fremde Adresse eintragen, und wir stünden ohne Beleg da. Das Protokoll der Bestätigung ist unser Nachweis.' },
        { text: 'Weil es technisch einfacher ist',
          antwort: 'Es ist sogar aufwendiger. Der Grund ist rechtlich: Wir müssen die Einwilligung <b>nachweisen</b> können.' }
      ] },

    { typ: 'frage', text: 'Ein Kunde widerruft später. Was gilt für die vorher verschickten Mails?',
      optionen: [
        { text: 'Sie bleiben rechtmäßig', richtig: true, norm: 'Art. 7 Abs. 3 DSGVO',
          antwort: 'Richtig. Die Verarbeitung bis zum Widerruf bleibt rechtmäßig – der Widerruf wirkt nur <b>für die Zukunft</b>. Ab dann müssen wir den Versand sofort einstellen, und der Widerruf muss <b>so einfach</b> sein wie die Einwilligung.' },
        { text: 'Sie waren rückwirkend rechtswidrig',
          antwort: 'So hart ist es nicht. Der Widerruf wirkt nur für die <b>Zukunft</b>, nicht rückwirkend.' }
      ] },

    { typ: 'frage', text: 'Was heißt „so einfach wie die Einwilligung" konkret?',
      optionen: [
        { text: 'Ein Abmeldelink in jeder Mail', richtig: true,
          antwort: 'Genau. Wer sich mit einem Klick anmelden konnte, muss sich mit einem Klick abmelden können. Ein Widerruf, der nur per Brief oder nach Anruf in der Hotline möglich ist, ist unzulässig.' },
        { text: 'Eine formlose E-Mail an die Geschäftsführung genügt',
          antwort: 'Das wäre deutlich umständlicher als die Anmeldung per Klick – und damit unzulässig. Es braucht einen <b>Abmeldelink</b> in jeder Mail.' }
      ] },

    { typ: 'merk', text: 'Daten nur für den <b>Zweck</b>, für den sie erhoben wurden. Werbung braucht eine eigene Grundlage – meist die <b>Einwilligung</b>: freiwillig, bestimmt, informiert, aktiv, widerrufbar, <b>nachweisbar</b> (Double-Opt-in). Abmelden muss so leicht sein wie anmelden.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-05',
  kontakt: 'dsb',
  titel: 'Anonym oder pseudonym?',
  thema: 'Pseudonymisierung & Anonymisierung',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Die Hochschule möchte unsere Lieferdaten für eine Studie auswerten. Vorher müssen wir den Personenbezug herausnehmen.' },
    { typ: 'nachricht', text: 'Die Kollegin aus der IT schlägt vor, die Namen durch Kundennummern zu ersetzen und die Zuordnungsliste bei uns im Tresor zu lassen.' },

    { typ: 'frage', text: 'Wie heißt dieses Verfahren?',
      optionen: [
        { text: 'Pseudonymisierung', richtig: true,
          antwort: 'Richtig. Identifizierende Merkmale werden durch ein Pseudonym ersetzt. Ohne die getrennt aufbewahrten Zusatzinformationen ist keine Zuordnung möglich – <b>mit</b> ihnen schon.' },
        { text: 'Anonymisierung',
          antwort: 'Noch nicht. Bei der [[Anonymisierung]] ist der Personenbezug <b>dauerhaft</b> weg. Hier liegt die Zuordnungsliste aber noch im Tresor.' },
        { text: 'Verschlüsselung',
          antwort: 'Verwandt, aber anders: Verschlüsselung macht den gesamten Inhalt unlesbar. Hier bleiben die Daten lesbar, nur der Name ist ersetzt.' }
      ] },

    { typ: 'frage', text: 'Gilt die DSGVO für diese Daten weiter?',
      optionen: [
        { text: 'Ja', richtig: true,
          antwort: 'Ja – und das ist der Kernpunkt. Weil die Re-Identifizierung mit den Zusatzinformationen <b>möglich</b> bleibt, sind es weiterhin personenbezogene Daten. Die Pseudonymisierung ist eine empfohlene <b>Schutzmaßnahme</b>, kein Freifahrtschein.' },
        { text: 'Nein, der Name ist doch weg',
          antwort: 'Das ist die häufigste Falle. Entscheidend ist nicht, ob der Name dasteht, sondern ob die Person <b>wieder bestimmbar</b> ist. Mit der Zuordnungsliste ist sie das.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt der andere Fall: Wir löschen Namen und E-Mail, fassen alles zu Summen zusammen und geben nur noch heraus: „34 % unserer Kunden kommen aus dem Kreis Lippe."' },

    { typ: 'frage', text: 'Und jetzt?',
      optionen: [
        { text: 'Anonymisierung – die DSGVO gilt nicht mehr', richtig: true,
          antwort: 'Richtig. Der Personenbezug ist dauerhaft nicht mehr herstellbar – jedenfalls nicht mit verhältnismäßigem Aufwand an Zeit, Kosten und Arbeitskraft. Anonyme Daten sind <b>keine</b> personenbezogenen Daten mehr.' },
        { text: 'Immer noch Pseudonymisierung',
          antwort: 'Nein – es gibt keinen Schlüssel mehr, mit dem man zurückkäme. Aus Einzeldaten ist eine Statistik geworden.' }
      ] },

    { typ: 'frage', text: 'Vorsicht-Frage: Wir löschen nur Name und E-Mail. Geburtsdatum, Postleitzahl und Geschlecht bleiben stehen. Anonym?',
      optionen: [
        { text: 'Nein, die Kombination verrät die Person', richtig: true,
          antwort: 'Genau. <b>Geburtsdatum + Postleitzahl + Geschlecht</b> identifiziert einen großen Teil der Bevölkerung eindeutig. An diesen [[Quasi-Identifikator|Quasi-Identifikatoren]] scheitern die meisten Anonymisierungsversuche.' },
        { text: 'Ja, der Name ist weg',
          antwort: 'Leider nein. Die Kombination aus Geburtsdatum, PLZ und Geschlecht macht sehr viele Menschen eindeutig identifizierbar – auch ohne Namen.' }
      ] },

    { typ: 'frage', text: 'Was tut man gegen Quasi-Identifikatoren?',
      optionen: [
        { text: 'Vergröbern: Altersgruppe statt Datum, 327xx statt 32756', richtig: true,
          antwort: 'Richtig, man nennt das Generalisierung. Dazu kommt oft Aggregation – also nur noch Summen und Anteile. Erst dann ist der Personenbezug praktisch nicht mehr herstellbar.' },
        { text: 'Die Spalten umbenennen',
          antwort: 'Das ändert am Informationsgehalt nichts. Nötig ist <b>Vergröbern</b>: Altersgruppe statt Geburtsdatum, gekürzte PLZ, oder gleich zusammengefasste Werte.' }
      ] },

    { typ: 'frage', text: 'Wofür nutzt man Pseudonymisierung dann überhaupt?',
      optionen: [
        { text: 'Als Schutzmaßnahme, die das Risiko senkt', richtig: true, norm: 'Art. 25, Art. 32 DSGVO',
          antwort: 'Genau. Sie wird in der DSGVO ausdrücklich als Maßnahme empfohlen: Wer pseudonymisiert arbeitet, begrenzt den Schaden bei einem Leck erheblich. Nur eben nicht als Weg, die DSGVO zu umgehen.' },
        { text: 'Um die DSGVO nicht anwenden zu müssen',
          antwort: 'Das funktioniert gerade nicht. Pseudonyme Daten bleiben personenbezogen. Der Sinn ist die <b>Risikosenkung</b>, nicht die Befreiung.' }
      ] },

    { typ: 'merk', text: '<b>Pseudonym = Maske</b> (umkehrbar, DSGVO gilt weiter, Schutzmaßnahme) · <b>Anonym = Gesicht weg</b> (dauerhaft, DSGVO gilt nicht). Name löschen genügt nicht: Geburtsdatum + PLZ + Geschlecht verrät die Person.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-06',
  kontakt: 'dsb',
  titel: 'Privacy by Design und by Default',
  thema: 'Privacy by Design & Default',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Wir planen die neue Kundenportal-Anwendung. Ich möchte früh dabei sein – aus einem bestimmten Grund.' },

    { typ: 'frage', text: 'Was bedeutet Privacy by Design?',
      optionen: [
        { text: 'Datenschutz wird von Anfang an eingebaut', richtig: true, norm: 'Art. 25 Abs. 1 DSGVO',
          antwort: 'Richtig – <b>Datenschutz durch Technikgestaltung</b>. Schon bei Planung und Entwicklung werden technische und organisatorische Maßnahmen in die Architektur eingebaut, nicht nachträglich aufgesetzt.' },
        { text: 'Die Oberfläche wird besonders übersichtlich gestaltet',
          antwort: 'Mit Design im Sinne von Gestaltung hat es nichts zu tun – gemeint ist die <b>Technikgestaltung</b>, also wie das System gebaut ist.' },
        { text: 'Der Datenschutzbeauftragte prüft die fertige Anwendung',
          antwort: 'Das wäre das Gegenteil. Geprüft wird ohnehin – der Sinn ist, den Datenschutz <b>vorher</b> einzuplanen, weil Nachbesserungen teuer werden.' }
      ] },

    { typ: 'nachricht', text: 'Genau deshalb will ich früh dabei sein. Nachträglich ein Rechtekonzept in eine fertige Anwendung einzuziehen kostet ein Vielfaches.' },

    { typ: 'mehrfach', text: 'Was gehört in unserem Portal zu Privacy by Design? (mehrere)',
      optionen: [
        { text: 'Passwörter werden nur gehasht gespeichert', richtig: true },
        { text: 'Die Übertragung läuft verschlüsselt über HTTPS', richtig: true },
        { text: 'Es werden nur die erforderlichen Felder erhoben', richtig: true },
        { text: 'Die Startseite bekommt ein moderneres Logo' },
        { text: 'Löschfristen und ein Rollenkonzept sind von Anfang an eingeplant', richtig: true }
      ],
      antwortRichtig: 'Alle vier – das sind die Standardbeispiele für die Prüfung: gehashte Passwörter, verschlüsselte Übertragung, Datenminimierung schon im Formular, Lösch- und Rechtekonzept von Beginn an.',
      antwortFalsch: 'Ein Logo ist Gestaltung, keine Technikgestaltung im Sinne des Datenschutzes.' },

    { typ: 'frage', text: 'Warum reicht es nicht, Passwörter verschlüsselt zu speichern?',
      optionen: [
        { text: 'Weil Verschlüsselung umkehrbar ist – ein Hash nicht', richtig: true,
          antwort: 'Sehr gut. Wer den Schlüssel hat, bekommt bei Verschlüsselung alle Passwörter im Klartext. Ein <b>Hash</b> ist eine Einbahnstraße: Man kann nur prüfen, ob das eingegebene Passwort passt, es aber nicht zurückrechnen. Dazu kommt ein Salt, damit gleiche Passwörter nicht gleich aussehen.' },
        { text: 'Weil Verschlüsselung zu langsam ist',
          antwort: 'Geschwindigkeit ist nicht der Punkt. Entscheidend: Verschlüsselung ist <b>umkehrbar</b> – wer den Schlüssel hat, liest alles. Ein Hash lässt sich nicht zurückrechnen.' }
      ] },

    { typ: 'nachricht', text: 'Und der zweite Begriff, der gern damit verwechselt wird:' },

    { typ: 'frage', text: 'Was bedeutet Privacy by Default?',
      optionen: [
        { text: 'Die Voreinstellungen sind die datenschutzfreundlichsten', richtig: true, norm: 'Art. 25 Abs. 2 DSGVO',
          antwort: 'Genau – <b>datenschutzfreundliche Voreinstellungen</b>. Ohne dass jemand etwas einstellt, werden nur die Daten verarbeitet, die für den Zweck nötig sind. Das betrifft Menge, Umfang, Speicherdauer und Zugänglichkeit.' },
        { text: 'Datenschutz ist Standard in jedem Unternehmen',
          antwort: 'Gemeint ist etwas Konkretes: die <b>Voreinstellungen</b> der Anwendung beim Ausliefern.' }
      ] },

    { typ: 'frage', text: 'Welches Beispiel passt zu Privacy by Default?',
      optionen: [
        { text: 'Nur technisch notwendige Cookies sind aktiv, Tracking ist aus', richtig: true,
          antwort: 'Das Musterbeispiel. Analyse- und Marketing-Cookies sind voreingestellt <b>aus</b> und müssen aktiv zugeschaltet werden. Genauso: ein neues Profil ist standardmäßig nicht öffentlich.' },
        { text: 'Passwörter werden gehasht gespeichert',
          antwort: 'Das ist Privacy by <b>Design</b> – eine Entscheidung beim Bauen. Bei Default geht es um die Einstellungen beim Ausliefern.' },
        { text: 'Der Nutzer kann die Datenschutzerklärung herunterladen',
          antwort: 'Das gehört zur Transparenz und zu den Informationspflichten – es sagt nichts über die <b>Voreinstellungen</b>.' }
      ] },

    { typ: 'frage', text: 'Noch eine Prüfungsfalle: Wer ist für Privacy by Design verantwortlich?',
      optionen: [
        { text: 'Der Verantwortliche, also das Unternehmen', richtig: true,
          antwort: 'Richtig. Die Pflicht trifft den [[Verantwortlicher|Verantwortlichen]], nicht den Hersteller der Software und nicht den DSB. Deshalb müssen wir bei <b>Einkaufsentscheidungen</b> darauf achten – eine Software, die das nicht kann, macht uns das Problem.' },
        { text: 'Der Softwarehersteller',
          antwort: 'Der sollte es ermöglichen, verpflichtet ist aber der <b>Verantwortliche</b> – also wir. Deshalb gehört die Frage schon in die Auswahl der Software.' }
      ] },

    { typ: 'merk', text: '<b>by Design = eingebaut</b> (beim Entwickeln mitgedacht: Hashing, HTTPS, Datenminimierung, Löschkonzept) · <b>by Default = voreingestellt</b> (Tracking aus, Profil nicht öffentlich). Verantwortlich ist das <b>Unternehmen</b>.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-07',
  kontakt: 'dsb',
  titel: 'Die Kameras im Pausenraum',
  thema: 'Praxisfälle',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Ein Bekannter führt einen kleinen Supermarkt und hat mich um Rat gefragt. Schauen wir uns den Fall gemeinsam an – er eignet sich hervorragend als Prüfungsaufgabe.' },
    { typ: 'nachricht', text: 'Er hat neue Überwachungskameras installiert. Sie filmen den Kassenbereich – und auch den <b>Pausenraum</b> der Beschäftigten.' },
    { typ: 'nachricht', text: 'Die Beschäftigten wurden nicht informiert. Die Aufnahmen werden <b>90 Tage</b> gespeichert, und mehrere Mitarbeiter können sie ansehen.' },

    { typ: 'mehrfach', text: 'Welche Probleme stecken darin? (mehrere)',
      optionen: [
        { text: 'Fehlende Information und Transparenz', richtig: true },
        { text: 'Überwachung des Pausenraums ist unverhältnismäßig', richtig: true },
        { text: 'Die Speicherdauer ist zu lang', richtig: true },
        { text: 'Zu viele Personen können die Aufnahmen ansehen', richtig: true },
        { text: 'Kameras sind grundsätzlich verboten' }
      ],
      antwortRichtig: 'Alle vier, genau. <b>Transparenz:</b> Die Beschäftigten hätten informiert werden müssen, dazu gehören Hinweisschilder. <b>Verhältnismäßigkeit:</b> Im Pausenraum gibt es kein überwiegendes berechtigtes Interesse – dort ist Videoüberwachung unzulässig. <b>Speicherbegrenzung:</b> Ohne Vorfall sind Aufnahmen in der Regel nach 48 bis 72 Stunden zu löschen. <b>Zugriff:</b> Nur eine eng begrenzte Gruppe darf sie sehen.',
      antwortFalsch: 'Videoüberwachung ist nicht pauschal verboten – sie braucht aber eine Rechtsgrundlage, muss verhältnismäßig sein und transparent erfolgen. Schau noch einmal auf Information, Ort, Dauer und Zugriff.' },

    { typ: 'frage', text: 'Worauf könnte er die Überwachung des Kassenbereichs stützen?',
      optionen: [
        { text: 'Auf das berechtigte Interesse', richtig: true,
          antwort: 'Richtig – Schutz vor Diebstahl ist ein [[berechtigtes Interesse]]. Aber: Die Abwägung mit den Interessen der Betroffenen muss <b>dokumentiert</b> werden, es braucht Hinweisschilder, kurze Löschfristen und eng begrenzten Zugriff.' },
        { text: 'Auf die Einwilligung der Kunden',
          antwort: 'Praktisch unmöglich – man kann nicht jeden Kunden vor dem Betreten um Zustimmung bitten. Und bei Beschäftigten wäre eine Einwilligung wegen des Abhängigkeitsverhältnisses kaum freiwillig.' }
      ] },

    { typ: 'frage', text: 'Warum ist eine Einwilligung von Beschäftigten problematisch?',
      optionen: [
        { text: 'Wegen des Abhängigkeitsverhältnisses ist sie selten freiwillig', richtig: true, norm: '§ 26 BDSG',
          antwort: 'Genau. Wer seinen Arbeitsplatz behalten möchte, sagt selten Nein. Deshalb ist die Einwilligung im Beschäftigtenverhältnis nur ausnahmsweise tragfähig – und muss schriftlich dokumentiert und jederzeit widerrufbar sein.' },
        { text: 'Weil Beschäftigte keine betroffenen Personen sind',
          antwort: 'Doch, das sind sie in vollem Umfang. Das Problem ist die <b>Freiwilligkeit</b>: Im Abhängigkeitsverhältnis ist sie schwer zu belegen.' }
      ] },

    { typ: 'frage', text: 'Wer muss bei Überwachungstechnik im Betrieb beteiligt werden?',
      optionen: [
        { text: 'Der Betriebsrat', richtig: true, norm: '§ 87 BetrVG',
          antwort: 'Richtig. Technische Einrichtungen, die zur Verhaltens- oder Leistungskontrolle geeignet sind, unterliegen der <b>Mitbestimmung</b>. Dabei kommt es nicht darauf an, ob man kontrollieren <b>will</b> – es genügt, dass die Technik dazu <b>geeignet</b> ist.' },
        { text: 'Niemand, der Geschäftsführer entscheidet allein',
          antwort: 'Im Betrieb mit Betriebsrat nicht. Sobald eine Technik zur Verhaltens- oder Leistungskontrolle <b>geeignet</b> ist, besteht Mitbestimmung.' }
      ] },

    { typ: 'nachricht', text: 'Das gilt übrigens auch für uns – denk an das GPS-Tracking in den Fahrzeugen. Auch dort ist die Technik zur Leistungskontrolle geeignet, selbst wenn wir sie dafür nicht nutzen wollen.' },

    { typ: 'frage', text: 'Bräuchte unser Fahrzeug-Tracking eine Datenschutz-Folgenabschätzung?',
      optionen: [
        { text: 'Sehr wahrscheinlich ja', richtig: true, norm: 'Art. 35 DSGVO',
          antwort: 'Richtig. Eine [[Datenschutz-Folgenabschätzung|DSFA]] ist bei voraussichtlich hohem Risiko nötig – systematische Überwachung von Beschäftigten gehört klassisch dazu. Sie wird <b>vorher</b> gemacht, nicht hinterher, und ich berate dabei.' },
        { text: 'Nein, wir tracken ja nur Fahrzeuge',
          antwort: 'Das Fahrzeug fährt aber nicht allein. 🙂 Standortdaten lassen Rückschlüsse auf das Verhalten der Fahrer zu – damit ist es eine systematische Überwachung von Beschäftigten.' }
      ] },

    { typ: 'merk', text: 'Videoüberwachung: <b>informieren</b> (Schilder), <b>verhältnismäßig</b> bleiben (kein Pausenraum), <b>kurz speichern</b> (meist 48–72 Stunden), <b>Zugriff begrenzen</b>, <b>Betriebsrat</b> beteiligen. Bei systematischer Überwachung: DSFA vorher.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-08',
  kontakt: 'dsb',
  titel: 'Die Cloud für die Personalakten',
  thema: 'DSGVO-Pflichten',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Die Geschäftsführung möchte die Personalakten künftig bei einem Cloud-Anbieter ablegen. Günstig, praktisch – und die Server stehen in den USA.' },
    { typ: 'nachricht', text: 'Ich bin nicht grundsätzlich dagegen. Aber da sind einige Dinge zu klären, bevor wir unterschreiben.' },

    { typ: 'frage', text: 'Welche Rolle hat der Cloud-Anbieter?',
      optionen: [
        { text: 'Auftragsverarbeiter', richtig: true, norm: 'Art. 4 Nr. 8 DSGVO',
          antwort: 'Richtig. Er verarbeitet die Daten <b>nur nach unserer Weisung</b> und entscheidet nicht über Zwecke und Mittel. Wir bleiben der [[Verantwortlicher|Verantwortliche]] – und haften auch weiterhin.' },
        { text: 'Verantwortlicher, es sind ja seine Server',
          antwort: 'Nein. [[Verantwortlicher|Verantwortlich]] ist, wer über <b>Zwecke und Mittel</b> entscheidet – das sind wir. Der Anbieter ist [[Auftragsverarbeiter]] und handelt auf Weisung.' }
      ] },

    { typ: 'frage', text: 'Was brauchen wir dafür zwingend?',
      optionen: [
        { text: 'Einen Vertrag zur Auftragsverarbeitung', richtig: true, norm: 'Art. 28 DSGVO',
          antwort: 'Genau. Der [[AV-Vertrag]] hat gesetzliche Mindestinhalte: Gegenstand und Dauer, Weisungsbindung, Vertraulichkeit, [[TOMs]], Umgang mit Unterauftragnehmern, Unterstützung bei Betroffenenrechten, Löschung oder Rückgabe am Ende und unsere Kontrollrechte.' },
        { text: 'Eine Einwilligung aller Beschäftigten',
          antwort: 'Die wäre im Beschäftigtenverhältnis kaum freiwillig und ist hier auch nicht der richtige Weg. Nötig ist ein <b>Vertrag zur Auftragsverarbeitung</b>.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört in den AV-Vertrag? (mehrere)',
      optionen: [
        { text: 'Weisungsbindung des Dienstleisters', richtig: true },
        { text: 'Technische und organisatorische Maßnahmen', richtig: true },
        { text: 'Regelung zu Unterauftragnehmern', richtig: true },
        { text: 'Der Preis pro Monat' },
        { text: 'Löschung oder Rückgabe der Daten am Vertragsende', richtig: true }
      ],
      antwortRichtig: 'Richtig. Der Preis steht im Hauptvertrag, er ist kein Pflichtinhalt des AV-Vertrags. Besonders wichtig ist der Punkt <b>Unterauftragnehmer</b>: Viele Anbieter lagern selbst aus, und wir müssen wissen und genehmigen, wer die Daten am Ende tatsächlich verarbeitet.',
      antwortFalsch: 'Einer der Punkte gehört in den <b>Hauptvertrag</b>, nicht in den AV-Vertrag. Überleg, was mit dem <b>Datenschutz</b> zu tun hat.' },

    { typ: 'nachricht', text: 'Jetzt zum schwierigeren Teil: die Server in den USA.' },

    { typ: 'frage', text: 'Was ist dabei das Problem?',
      optionen: [
        { text: 'Es ist eine Übermittlung in ein Drittland', richtig: true, norm: 'Art. 44 ff. DSGVO',
          antwort: 'Richtig. Außerhalb der EU und des EWR gilt die DSGVO nicht unmittelbar. Eine Übermittlung ist nur zulässig mit einem [[Angemessenheitsbeschluss]] oder geeigneten Garantien wie [[Standardvertragsklauseln]].' },
        { text: 'Gar keins, Daten sind im Internet überall',
          antwort: 'So einfach ist es nicht. Jede Übermittlung in ein [[Drittland]] braucht eine zusätzliche Grundlage nach Art. 44 ff.' }
      ] },

    { typ: 'frage', text: 'Was wäre eine geeignete Grundlage?',
      optionen: [
        { text: 'Angemessenheitsbeschluss oder Standardvertragsklauseln', richtig: true,
          antwort: 'Genau. Für zertifizierte US-Unternehmen gibt es derzeit einen [[Angemessenheitsbeschluss]] (EU-US Data Privacy Framework). Alternativ [[Standardvertragsklauseln]] – dann muss man zusätzlich prüfen, ob die Rechtslage im Zielland das Schutzniveau nicht aushebelt.' },
        { text: 'Eine Erklärung des Anbieters, dass er sich an die DSGVO hält',
          antwort: 'Eine bloße Zusicherung genügt nicht. Es braucht einen <b>Angemessenheitsbeschluss</b> der EU-Kommission oder <b>geeignete Garantien</b> wie Standardvertragsklauseln.' }
      ] },

    { typ: 'frage', text: 'Und inhaltlich – Personalakten enthalten auch Krankmeldungen. Was heißt das?',
      optionen: [
        { text: 'Es sind besondere Kategorien, also strengere Anforderungen', richtig: true, norm: 'Art. 9 DSGVO',
          antwort: 'Richtig. Gesundheitsdaten sind eine [[besondere Kategorien|besondere Kategorie]]. Das hebt das Risiko und damit die Anforderungen an die Maßnahmen: Verschlüsselung, strenge Zugriffsbeschränkung – und es spricht stark für eine [[Datenschutz-Folgenabschätzung|DSFA]].' },
        { text: 'Nichts Besonderes, es sind normale Personaldaten',
          antwort: 'Doch: Krankmeldungen sind <b>Gesundheitsdaten</b> und damit eine besondere Kategorie. Dafür gelten strengere Anforderungen.' }
      ] },

    { typ: 'frage', text: 'Dürfen wir die Daten verschlüsselt in der Cloud ablegen und uns damit entspannen?',
      optionen: [
        { text: 'Verschlüsselung hilft sehr, ersetzt aber AV-Vertrag und Drittlandprüfung nicht', richtig: true,
          antwort: 'Genau richtig abgewogen. Eine Verschlüsselung, bei der <b>nur wir</b> den Schlüssel haben, senkt das Risiko erheblich. Die vertraglichen Pflichten bleiben aber bestehen – das eine ist Technik, das andere ist Recht.' },
        { text: 'Ja, verschlüsselte Daten sind keine personenbezogenen Daten mehr',
          antwort: 'Das ist ein verbreiteter Irrtum. Verschlüsselte Daten bleiben personenbezogen – wir haben ja den Schlüssel. Es ist eine <b>Schutzmaßnahme</b>, keine Anonymisierung.' }
      ] },

    { typ: 'merk', text: 'Externer Dienstleister = <b>Auftragsverarbeiter</b> → [[AV-Vertrag]] nach Art. 28 mit festen Mindestinhalten. Server außerhalb der EU = <b>Drittland</b> → Angemessenheitsbeschluss oder Standardvertragsklauseln. Verschlüsselung senkt das Risiko, ersetzt aber keinen Vertrag.' },

    { typ: 'nachricht', text: 'Ich fasse das für die Geschäftsführung zusammen. Mein Fazit: machbar, aber nicht nebenbei zu unterschreiben.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-09',
  kontakt: 'dsb',
  titel: 'Nachweisen können, was wir tun',
  thema: 'DSGVO-Pflichten',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Die Aufsichtsbehörde hat bei einem Unternehmen in der Nachbarschaft angefragt. Nichts Schlimmes, eine Routineprüfung – aber sie konnten nichts vorlegen.' },
    { typ: 'nachricht', text: 'Das ist ein guter Anlass, unsere Unterlagen durchzugehen.' },

    { typ: 'frage', text: 'Was verlangt die Rechenschaftspflicht?',
      optionen: [
        { text: 'Wir müssen die Einhaltung nachweisen können', richtig: true, norm: 'Art. 5 Abs. 2 DSGVO',
          antwort: 'Genau. Es genügt nicht, alles richtig zu machen – wir müssen es auch <b>belegen</b> können. Im Zweifel gilt: Was nicht dokumentiert ist, hat nicht stattgefunden.' },
        { text: 'Wir müssen jährlich einen Bericht veröffentlichen',
          antwort: 'Eine Veröffentlichungspflicht gibt es nicht. Die [[Rechenschaftspflicht]] heißt: auf Verlangen <b>nachweisen</b> können, dass wir die Grundsätze einhalten.' }
      ] },

    { typ: 'mehrfach', text: 'Womit weisen wir das nach? (mehrere)',
      optionen: [
        { text: 'Verzeichnis von Verarbeitungstätigkeiten', richtig: true },
        { text: 'Dokumentierte technische und organisatorische Maßnahmen', richtig: true },
        { text: 'Schulungsnachweise', richtig: true },
        { text: 'Löschkonzept', richtig: true },
        { text: 'Der Umsatz des letzten Jahres' }
      ],
      antwortRichtig: 'Richtig. Dazu kommen AV-Verträge, Einwilligungsnachweise, Verpflichtungen auf Vertraulichkeit und die Dokumentation von Datenpannen – auch von solchen, die wir <b>nicht</b> gemeldet haben. Auch die Entscheidung gegen eine Meldung muss begründet dokumentiert sein.',
      antwortFalsch: 'Einer der Punkte hat mit Datenschutz nichts zu tun. Gefragt sind Unterlagen, die zeigen, <b>wie</b> wir mit personenbezogenen Daten umgehen.' },

    { typ: 'frage', text: 'Was steht im Verzeichnis von Verarbeitungstätigkeiten?',
      optionen: [
        { text: 'Zwecke, Datenkategorien, Empfänger, Löschfristen, Maßnahmen', richtig: true, norm: 'Art. 30 DSGVO',
          antwort: 'Richtig. Das [[Verzeichnis von Verarbeitungstätigkeiten|Verzeichnis]] ist die Landkarte unserer Verarbeitungen: Für jede Tätigkeit – Lohnabrechnung, Bewerbungen, Webshop – steht dort, wozu, welche Daten, wer sie bekommt, wie lange, wie geschützt.' },
        { text: 'Jeder einzelne Zugriff auf Kundendaten',
          antwort: 'Das wäre ein Protokoll und hätte gigantischen Umfang. Das Verzeichnis beschreibt die <b>Tätigkeiten</b> auf einer Ebene darüber.' }
      ] },

    { typ: 'frage', text: 'Wer muss so ein Verzeichnis führen?',
      optionen: [
        { text: 'Praktisch jedes Unternehmen', richtig: true,
          antwort: 'Richtig. Es gibt zwar eine Ausnahme für Unternehmen unter 250 Beschäftigten – die greift aber nicht, wenn die Verarbeitung ein Risiko birgt, nicht nur gelegentlich erfolgt oder besondere Kategorien betrifft. Wer Beschäftigte hat, verarbeitet regelmäßig Personaldaten. Damit ist die Ausnahme praktisch immer weg.' },
        { text: 'Nur Unternehmen ab 250 Beschäftigten',
          antwort: 'Das ist die klassische Fehlannahme. Die Ausnahme ist so eng, dass sie in der Praxis fast nie greift – schon regelmäßige Personaldatenverarbeitung lässt sie entfallen.' }
      ] },

    { typ: 'frage', text: 'Wann brauchen wir zusätzlich eine Datenschutz-Folgenabschätzung?',
      optionen: [
        { text: 'Bei voraussichtlich hohem Risiko für die Betroffenen', richtig: true, norm: 'Art. 35 DSGVO',
          antwort: 'Genau. Typische Fälle: umfangreiche Videoüberwachung, systematische Überwachung von Beschäftigten, umfangreiche Verarbeitung besonderer Kategorien, Scoring. Die [[Datenschutz-Folgenabschätzung|DSFA]] wird <b>vor</b> dem Start durchgeführt, und ich berate dabei.' },
        { text: 'Immer, wenn wir neue Software einführen',
          antwort: 'Das wäre übertrieben. Eine [[Datenschutz-Folgenabschätzung|DSFA]] ist bei <b>voraussichtlich hohem Risiko</b> nötig, nicht bei jeder Software.' }
      ] },

    { typ: 'nachricht', text: 'Zum Schluss die Frage, die die Geschäftsführung immer zuerst stellt:' },

    { typ: 'frage', text: 'Wie hoch können Bußgelder ausfallen?',
      optionen: [
        { text: 'Bis 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes', richtig: true, norm: 'Art. 83 DSGVO',
          antwort: 'Richtig – je nachdem, welcher Betrag <b>höher</b> ist. Für leichtere Verstöße gilt der halbe Rahmen: 10 Millionen oder 2 %. Dazu kommen Schadenersatzansprüche der Betroffenen, auch für immaterielle Schäden.' },
        { text: 'Bis 50.000 Euro',
          antwort: 'Deutlich zu niedrig. Der Rahmen geht bis <b>20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes</b> – je nachdem, was höher ist.' }
      ] },

    { typ: 'frage', text: 'Und wen trifft das Bußgeld?',
      optionen: [
        { text: 'Das Unternehmen als Verantwortlichen', richtig: true,
          antwort: 'Richtig. Nicht mich als Datenschutzbeauftragten – ich berate und überwache, hafte aber nicht für die Verstöße des Unternehmens. Deshalb bin ich auch weisungsfrei. Verantwortlich bleibt die Geschäftsführung.' },
        { text: 'Den Datenschutzbeauftragten',
          antwort: 'Nein, und das ist ein wichtiger Punkt für die Prüfung: Der DSB <b>berät und überwacht</b>. Verantwortlich – und haftbar – ist das Unternehmen.' }
      ] },

    { typ: 'merk', text: '<b>Rechenschaftspflicht:</b> Einhaltung nachweisen können. Werkzeuge: [[Verzeichnis von Verarbeitungstätigkeiten|Verarbeitungsverzeichnis]] (praktisch jede Firma), dokumentierte TOMs, Schulungsnachweise, Löschkonzept, DSFA bei hohem Risiko. Bußgeld bis <b>20 Mio. € oder 4 %</b> – trifft das Unternehmen, nicht den DSB.' }
  ]
});
