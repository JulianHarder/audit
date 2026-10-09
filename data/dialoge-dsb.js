/* ===========================================================
   AUDIT – data/dialoge-dsb.js
   Herr Olschewski, Datenschutzbeauftragter:
   DSGVO, Betroffenenrechte, Pseudonymisierung, Privacy by Design.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'dsb-01',
  kontakt: 'dsb',
  titel: '„Löschen Sie alles über mich"',
  thema: 'Betroffenenrechte',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Guten Morgen. Ich habe eine Anfrage weitergeleitet bekommen, die wir zusammen anschauen sollten.' },
    { typ: 'nachricht', text: 'Eine Kundin schreibt: „Löschen Sie bitte mein Kundenkonto und alle Daten, die Sie über mich haben."' },
    { typ: 'nachricht', text: 'Sie hat vor zwei Jahren dreimal bestellt. Im System liegen ihr Konto, der Newsletter-Eintrag – und drei Rechnungen.' },

    { typ: 'frage', text: 'Wie gehen wir damit um?',
      optionen: [
        { text: 'Alles löschen, sie hat ein Recht darauf',
          antwort: 'Das Recht gibt es ([[Art. 17 DSGVO|Art. 17]]), aber es gilt nicht grenzenlos. Rechnungen müssen wir nach Handels- und Steuerrecht <b>zehn Jahre</b> aufbewahren. Die dürfen wir gar nicht löschen.' },
        { text: 'Konto und Newsletter löschen, Rechnungen sperren', richtig: true, norm: 'Art. 17 Abs. 3 lit. b DSGVO',
          antwort: 'Richtig. Alles, was wir nicht mehr brauchen, kommt weg. Die Rechnungen bleiben – aber <b>gesperrt</b>, also nur noch für die Aufbewahrungspflicht nutzbar, nicht mehr für Werbung oder Auswertungen. Und wir erklären ihr das verständlich.' },
        { text: 'Ablehnen, wir haben eine Aufbewahrungspflicht',
          antwort: 'Zu pauschal. Die Pflicht betrifft nur die Rechnungen. Kundenkonto, Newsletter-Verteiler und Bestellhistorie fallen nicht darunter – die müssen raus.' }
      ] },

    { typ: 'nachricht', text: 'Gut. Die nächste Frage stellt mir die Geschäftsführung jedes Mal:' },

    { typ: 'frage', text: 'Wie schnell müssen wir antworten?',
      optionen: [
        { text: 'Noch am selben Tag',
          antwort: 'So streng ist es nicht. „Unverzüglich" heißt „ohne schuldhaftes Zögern", nicht „sofort".' },
        { text: 'Innerhalb eines Monats', richtig: true, norm: 'Art. 12 Abs. 3 DSGVO',
          antwort: 'Genau. Unverzüglich, spätestens aber <b>innerhalb eines Monats</b>. Bei komplizierten Fällen dürfen wir um <b>zwei weitere Monate</b> verlängern – müssen die Person dann aber innerhalb des ersten Monats informieren und die Verzögerung begründen. Und: Das Ganze ist grundsätzlich <b>kostenlos</b>.' },
        { text: 'Innerhalb von drei Monaten',
          antwort: 'Das ist das Maximum <b>mit</b> Verlängerung. Die muss aber angekündigt und begründet werden – der Regelfall ist ein Monat.' }
      ] },

    { typ: 'nachricht', text: 'Noch ein Punkt, der in Prüfungen gern drankommt: Wir haben ihre Adresse damals auch an unseren Versanddienstleister gegeben.' },

    { typ: 'frage', text: 'Müssen wir dort etwas veranlassen?',
      optionen: [
        { text: 'Nein, das ist deren Sache',
          antwort: 'Doch, es ist unsere. Wir sind der [[Verantwortlicher|Verantwortliche]], der Dienstleister ist [[Auftragsverarbeiter]] und handelt nur auf unsere Weisung.' },
        { text: 'Ja, wir müssen die Empfänger informieren', richtig: true, norm: 'Art. 19 DSGVO',
          antwort: 'Richtig. Jeder Empfänger der Daten muss über die Löschung informiert werden – es sei denn, das ist unmöglich oder mit unverhältnismäßigem Aufwand verbunden. Die Kundin darf außerdem verlangen, dass wir ihr sagen, wer die Empfänger waren.' }
      ] },

    { typ: 'karte', titel: 'Die wichtigsten Betroffenenrechte', quelle: 'betroffenenrechte',
      keys: ['a15', 'a16', 'a17', 'a18', 'a20', 'a21'] },

    { typ: 'merk', text: '<b>Löschen ja – aber Aufbewahrungsfristen gehen vor.</b> Dann wird gesperrt statt gelöscht. Frist für die Antwort: ein Monat.' },

    { typ: 'nachricht', text: 'Sehr gut. Ich formuliere das Antwortschreiben, Sie kümmern sich um die technische Umsetzung.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-02',
  kontakt: 'dsb',
  titel: 'Was sind personenbezogene Daten?',
  thema: 'DSGVO-Grundlagen',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Bevor wir ins Detail gehen, sollten wir die Grundlage klären. Sonst reden wir aneinander vorbei.' },

    { typ: 'frage', text: 'Wen oder was schützt der Datenschutz eigentlich?',
      optionen: [
        { text: 'Die Daten des Unternehmens',
          antwort: 'Das ist [[Datensicherheit]] – die schützt alle Daten vor Verlust und Manipulation. Der [[Datenschutz]] hat ein anderes Ziel.' },
        { text: 'Natürliche Personen und ihre Rechte', richtig: true,
          antwort: 'Richtig. Der Datenschutz schützt <b>Menschen</b> davor, dass durch den Umgang mit ihren Daten ihre Rechte und Freiheiten verletzt werden. Im Kern steht das <b>Recht auf informationelle Selbstbestimmung</b>: Jeder entscheidet selbst, wer was über ihn weiß und was damit geschieht.' },
        { text: 'Firmengeheimnisse vor der Konkurrenz',
          antwort: 'Das ist Geheimnisschutz und Teil der [[Informationssicherheit]]. Der Datenschutz kümmert sich ausschließlich um <b>personenbezogene</b> Daten.' }
      ] },

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
      antwortRichtig: 'Sehr gut – alles außer der letzten Angabe. Der <b>Name</b> identifiziert unmittelbar. Die <b>Personalnummer</b> ist einem Beschäftigten eindeutig zugeordnet und über die Personalverwaltung auf ihn rückführbar. Die <b>Telefonnummer</b> lässt über den Anschlussinhaber Rückschlüsse zu. <b>Abteilung</b> und <b>Urlaubstage</b> sind Sachinformationen, die bei einer bestimmten Person stehen – also ebenfalls personenbezogen. Die <b>Gesamtzahl der Beschäftigten</b> ist ein aggregierter statistischer Wert ohne Bezug zu einer einzelnen Person.',
      antwortFalsch: 'Fast. Die Frage ist immer: Lässt sich die Angabe einer <b>bestimmten oder bestimmbaren</b> Person zuordnen – direkt oder über Zusatzwissen? Eine reine Gesamtzahl kann das nicht.' },

    { typ: 'nachricht', text: 'Merken Sie sich die Begründungslogik: direkt identifizierend, oder über Zusatzwissen bestimmbar. Das zweite wird in Prüfungen gern übersehen.' },

    { typ: 'frage', text: 'Ist eine IP-Adresse ein personenbezogenes Datum?',
      optionen: [
        { text: 'Ja, in der Regel schon', richtig: true,
          antwort: 'Richtig. Für sich genommen ist sie nur eine Zahlenfolge – aber der Provider kann sie einer Person zuordnen. Damit ist die Person <b>bestimmbar</b>, und nach der Rechtsprechung gilt die IP-Adresse deshalb grundsätzlich als personenbezogenes Datum. Dasselbe gilt für Kfz-Kennzeichen oder Kundennummern.' },
        { text: 'Nein, das ist eine technische Angabe',
          antwort: 'Das war lange umstritten, ist aber geklärt: Entscheidend ist nicht, ob <b>wir</b> die Person erkennen, sondern ob sie mit zumutbarem Aufwand <b>bestimmbar</b> ist. Über den Provider ist sie das.' }
      ] },

    { typ: 'merk', text: '<b>Personenbezogen</b> = Angaben zu einer bestimmten oder <b>bestimmbaren</b> Person. Auch Personalnummer, Kennzeichen und IP-Adresse gehören dazu. <b>Nicht</b> personenbezogen: aggregierte Werte wie eine Gesamtzahl.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-03',
  kontakt: 'dsb',
  titel: 'Der Shop fragt zu viel ab',
  thema: 'DSGVO-Grundlagen',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Unsere Marketingabteilung hat mir den Entwurf für das neue Bestellformular geschickt. Ich bin … nicht begeistert.' },
    { typ: 'nachricht', text: 'Abgefragt werden sollen: Name, Lieferadresse, Geburtsdatum, Familienstand, monatliches Einkommen und private Telefonnummer.' },
    { typ: 'nachricht', text: 'Alles als <b>Pflichtfeld</b>. Ohne die Angaben kommt keine Bestellung zustande.' },

    { typ: 'mehrfach', text: 'Gegen welche Grundsätze verstößt das? (mehrere)',
      optionen: [
        { text: 'Datenminimierung', richtig: true },
        { text: 'Zweckbindung', richtig: true },
        { text: 'Richtigkeit' },
        { text: 'Freiwilligkeit der Einwilligung (Kopplungsverbot)', richtig: true },
        { text: 'Verfügbarkeit' }
      ],
      antwortRichtig: 'Genau diese drei. <b>[[Datenminimierung]]:</b> Für die Vertragsabwicklung genügen Name und Lieferadresse, dazu die E-Mail für die Bestätigung. Geburtsdatum, Familienstand, Einkommen und Telefon sind nicht erforderlich. <b>[[Zweckbindung]]:</b> Für Familienstand und Einkommen ist überhaupt kein legitimer Zweck erkennbar. <b>[[Kopplungsverbot]]:</b> Wer den Vertrag davon abhängig macht, erhält keine freiwillige Einwilligung – also keine wirksame.',
      antwortFalsch: 'Fast. „Richtigkeit" betrifft die inhaltliche Korrektheit der Daten, „Verfügbarkeit" ist ein Schutzziel der Informationssicherheit. Hier geht es um <b>Menge</b>, <b>Zweck</b> und <b>Freiwilligkeit</b>.' },

    { typ: 'karte', titel: 'Die Grundsätze aus Artikel 5', quelle: 'grundsaetze' },

    { typ: 'nachricht', text: 'Und es kommt noch etwas hinzu, das man gern vergisst:' },

    { typ: 'frage', text: 'Warum sind Einkommen und Familienstand besonders heikel?',
      optionen: [
        { text: 'Weil sie nach Art. 9 besondere Kategorien sind',
          antwort: 'Nicht ganz. Zu den [[besondere Kategorien|besonderen Kategorien]] zählen Gesundheit, Religion, politische Meinung, Gewerkschaft, Herkunft, Biometrie und Sexualleben. Einkommen und Familienstand gehören formal nicht dazu – trotzdem sind sie heikel. Warum?' },
        { text: 'Weil der Schaden bei Missbrauch besonders groß wäre', richtig: true,
          antwort: 'Richtig. Sie sind zwar keine besondere Kategorie im Sinne des Gesetzes, aber besonders schutzwürdig: Bei einem Datenleck oder Missbrauch wächst das Schadensrisiko für die Betroffenen erheblich. Je sensibler die Daten, desto weniger sollte man überhaupt erheben.' }
      ] },

    { typ: 'frage', text: 'Was schlagen Sie dem Marketing vor?',
      optionen: [
        { text: 'Die Felder drin lassen, aber freiwillig machen', richtig: true,
          antwort: 'Das ist der gangbare Weg: Nur die wirklich erforderlichen Angaben bleiben Pflichtfeld, alles andere ist höchstens <b>freiwillig</b> – und auch das nur mit erkennbarem Zweck. Am saubersten wäre: ganz weglassen, was wir nicht brauchen.' },
        { text: 'Alles so lassen, die Kunden geben es ja freiwillig ein',
          antwort: 'Freiwillig ist es gerade <b>nicht</b> – ohne die Angaben kommt keine Bestellung zustande. Genau das ist das Kopplungsverbot.' }
      ] },

    { typ: 'merk', text: 'Pflichtfeld nur für das, was für den <b>Zweck erforderlich</b> ist. Alles andere freiwillig oder weglassen. Vertrag an eine Einwilligung zu koppeln macht diese unwirksam.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-04',
  kontakt: 'dsb',
  titel: 'Dürfen wir die E-Mails für Werbung nutzen?',
  thema: 'DSGVO-Grundlagen',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Das Marketing möchte alle Kunden-E-Mail-Adressen für einen Newsletter über neue Produkte verwenden.' },
    { typ: 'nachricht', text: 'Die Adressen haben wir bei der Registrierung im Shop erhoben – für Bestellbestätigungen und Rechnungen.' },

    { typ: 'frage', text: 'Dürfen wir die Adressen ohne Weiteres für Werbung nutzen?',
      optionen: [
        { text: 'Ja, wir haben sie ja rechtmäßig erhalten',
          antwort: 'Rechtmäßig erhoben heißt nicht beliebig verwendbar. Die [[Zweckbindung]] erlaubt nur den Zweck, für den wir sie erhoben haben – das war die Vertragsabwicklung, nicht die Werbung.' },
        { text: 'Nein, Werbung ist ein anderer Zweck', richtig: true,
          antwort: 'Genau. Die Adressen wurden zur <b>Vertragsabwicklung</b> erhoben. Werbung ist ein anderer Zweck und braucht eine eigene Rechtsgrundlage. Ohne sie wäre der Versand rechtswidrig.' }
      ] },

    { typ: 'nachricht', text: 'Welche Rechtsgrundlage kommt denn infrage?' },

    { typ: 'frage', text: 'Worauf stützen wir die Werbung?',
      optionen: [
        { text: 'Einwilligung der Kunden', richtig: true,
          antwort: 'Der sichere Weg. Unter engen Voraussetzungen kommt auch das <b>berechtigte Interesse</b> in Betracht – etwa bei Bestandskundenwerbung für <b>ähnliche</b> Produkte. Mit einer Einwilligung sind wir aber auf der sicheren Seite.' },
        { text: 'Rechtliche Verpflichtung',
          antwort: 'Kein Gesetz verpflichtet uns, Werbung zu verschicken. 😄 Diese Grundlage greift bei Pflichten wie der Aufbewahrung von Rechnungen.' },
        { text: 'Vertragserfüllung',
          antwort: 'Der Kaufvertrag verlangt keine Werbemails. Für die Vertragserfüllung brauchen wir die Adresse nur für Bestätigung und Rechnung.' }
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
      antwortRichtig: 'Richtig – und wir müssen sie außerdem <b>nachweisen</b> können. Deshalb arbeitet man mit <b>Double-Opt-in</b>: Nach der Anmeldung geht eine Bestätigungsmail raus. Eine Schriftform ist nicht nötig, ein Klick genügt – er muss nur aktiv und dokumentiert sein.',
      antwortFalsch: 'Fast. Schriftform mit Unterschrift verlangt die DSGVO nicht. Alle anderen Punkte gehören dazu – und denken Sie an die Nachweispflicht.' },

    { typ: 'frage', text: 'Ein Kunde widerruft später seine Einwilligung. Was gilt für die Mails, die wir vorher verschickt haben?',
      optionen: [
        { text: 'Sie waren rückwirkend rechtswidrig',
          antwort: 'Nein, so hart ist es nicht. Der Widerruf wirkt nur <b>für die Zukunft</b>.' },
        { text: 'Sie bleiben rechtmäßig', richtig: true, norm: 'Art. 7 Abs. 3 DSGVO',
          antwort: 'Richtig. Die Verarbeitung bis zum Widerruf bleibt rechtmäßig. Ab dem Widerruf müssen wir den Versand aber sofort einstellen – und der Widerruf muss <b>so einfach</b> sein wie die Einwilligung, also ein Klick im Newsletter.' }
      ] },

    { typ: 'merk', text: 'Daten dürfen nur für den <b>Zweck</b> genutzt werden, für den sie erhoben wurden. Werbung braucht eine eigene Grundlage – meist die <b>Einwilligung</b>: freiwillig, bestimmt, informiert, aktiv, widerrufbar, nachweisbar.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-05',
  kontakt: 'dsb',
  titel: 'Anonym oder pseudonym?',
  thema: 'Pseudonymisierung & Anonymisierung',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Die Hochschule möchte unsere Lieferdaten für eine Studie auswerten. Vorher müssen wir den Personenbezug herausnehmen.' },
    { typ: 'nachricht', text: 'Die Kollegin aus der IT schlägt vor, die Namen durch Kundennummern zu ersetzen und die Zuordnungsliste bei uns im Tresor zu lassen.' },

    { typ: 'frage', text: 'Wie heißt dieses Verfahren?',
      optionen: [
        { text: 'Anonymisierung',
          antwort: 'Noch nicht. Bei der [[Anonymisierung]] ist der Personenbezug <b>dauerhaft</b> weg. Hier liegt die Zuordnungsliste aber noch im Tresor – damit lässt sich jede Zeile wieder einer Person zuordnen.' },
        { text: 'Pseudonymisierung', richtig: true,
          antwort: 'Richtig. Identifizierende Merkmale werden durch ein Pseudonym ersetzt. Ohne die getrennt aufbewahrten Zusatzinformationen ist keine Zuordnung möglich – <b>mit</b> ihnen schon.' },
        { text: 'Verschlüsselung',
          antwort: 'Verwandt, aber etwas anderes: Verschlüsselung macht den gesamten Inhalt unlesbar. Hier bleiben die Daten lesbar, nur der Name ist ersetzt.' }
      ] },

    { typ: 'frage', text: 'Gilt die DSGVO für diese pseudonymisierten Daten weiter?',
      optionen: [
        { text: 'Ja', richtig: true,
          antwort: 'Ja – und das ist der Kernpunkt. Weil die Re-Identifizierung mit den Zusatzinformationen <b>möglich</b> bleibt, sind es weiterhin personenbezogene Daten. Die Pseudonymisierung ist eine empfohlene <b>Schutzmaßnahme</b>, kein Freifahrtschein.' },
        { text: 'Nein, der Name ist doch weg',
          antwort: 'Das ist die häufigste Falle. Entscheidend ist nicht, ob der Name dasteht, sondern ob die Person <b>wieder bestimmbar</b> ist. Mit der Zuordnungsliste ist sie das.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt der andere Fall: Wir löschen Namen und E-Mail, fassen alles zu Summen zusammen und geben nur noch „34 % unserer Kunden kommen aus dem Kreis Lippe" heraus.' },

    { typ: 'frage', text: 'Und jetzt?',
      optionen: [
        { text: 'Anonymisierung – die DSGVO gilt nicht mehr', richtig: true,
          antwort: 'Richtig. Der Personenbezug ist dauerhaft nicht mehr herstellbar, jedenfalls nicht mit verhältnismäßigem Aufwand an Zeit, Kosten und Arbeitskraft. Anonyme Daten sind <b>keine</b> personenbezogenen Daten – die DSGVO ist nicht mehr anwendbar.' },
        { text: 'Immer noch Pseudonymisierung',
          antwort: 'Nein – es gibt keinen Schlüssel mehr, mit dem man zurückkäme. Aus Einzeldaten ist eine Statistik geworden.' }
      ] },

    { typ: 'frage', text: 'Vorsicht-Frage: Wir löschen nur Name und E-Mail. Geburtsdatum, Postleitzahl und Geschlecht bleiben stehen. Anonym?',
      optionen: [
        { text: 'Ja, der Name ist weg',
          antwort: 'Leider nein. <b>Geburtsdatum + Postleitzahl + Geschlecht</b> identifiziert einen großen Teil der Bevölkerung eindeutig. Solche [[Quasi-Identifikator|Quasi-Identifikatoren]] muss man vergröbern: Altersgruppe statt Datum, 327xx statt 32756.' },
        { text: 'Nein, die Kombination verrät die Person', richtig: true,
          antwort: 'Genau. Das ist der Punkt, an dem viele Anonymisierungen scheitern. Erst wenn man die [[Quasi-Identifikator|Quasi-Identifikatoren]] vergröbert oder zusammenfasst, ist der Personenbezug wirklich weg.' }
      ] },

    { typ: 'merk', text: '<b>Pseudonym = Maske</b> (umkehrbar, DSGVO gilt weiter) · <b>Anonym = Gesicht weg</b> (dauerhaft, DSGVO gilt nicht). Achtung: Name löschen genügt nicht – Geburtsdatum + PLZ + Geschlecht verrät die Person.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-06',
  kontakt: 'dsb',
  titel: 'Privacy by Design und by Default',
  thema: 'Privacy by Design & Default',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Wir planen die neue Kundenportal-Anwendung. Ich möchte früh dabei sein – aus einem bestimmten Grund.' },

    { typ: 'frage', text: 'Was bedeutet Privacy by Design?',
      optionen: [
        { text: 'Datenschutz wird von Anfang an eingebaut', richtig: true,
          antwort: 'Richtig – <b>Datenschutz durch Technikgestaltung</b>. Schon bei Planung und Entwicklung werden technische und organisatorische Maßnahmen in die Architektur eingebaut, nicht erst nachträglich aufgesetzt.' },
        { text: 'Die Oberfläche wird besonders übersichtlich gestaltet',
          antwort: 'Mit Design im Sinne von Gestaltung hat es nichts zu tun – gemeint ist die <b>Technikgestaltung</b>, also wie das System gebaut ist.' },
        { text: 'Der Datenschutzbeauftragte prüft die fertige Anwendung',
          antwort: 'Das wäre genau das Gegenteil. Nachträglich geprüft wird immer – der Sinn ist, den Datenschutz <b>vorher</b> einzuplanen, weil Nachbesserungen teuer werden.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört in unserem Portal zu Privacy by Design? (mehrere)',
      optionen: [
        { text: 'Passwörter werden nur gehasht gespeichert', richtig: true },
        { text: 'Die Übertragung läuft verschlüsselt über HTTPS', richtig: true },
        { text: 'Es werden nur die erforderlichen Felder erhoben', richtig: true },
        { text: 'Die Startseite bekommt ein moderneres Logo' },
        { text: 'Löschfristen und ein Rollenkonzept sind von Anfang an eingeplant', richtig: true }
      ],
      antwortRichtig: 'Alle vier – das sind die Standardbeispiele. Gehashte Passwörter, verschlüsselte Übertragung, Datenminimierung schon im Formular sowie Lösch- und Rechtekonzept von Beginn an.',
      antwortFalsch: 'Fast – ein Logo ist Gestaltung, keine Technikgestaltung im Sinne des Datenschutzes.' },

    { typ: 'nachricht', text: 'Und der zweite Begriff, der gern damit verwechselt wird:' },

    { typ: 'frage', text: 'Was bedeutet Privacy by Default?',
      optionen: [
        { text: 'Die Voreinstellungen sind die datenschutzfreundlichsten', richtig: true,
          antwort: 'Genau – <b>datenschutzfreundliche Voreinstellungen</b>. Ohne dass jemand etwas einstellt, werden nur die Daten verarbeitet, die für den Zweck nötig sind. Das betrifft Menge, Umfang, Speicherdauer und Zugänglichkeit.' },
        { text: 'Datenschutz ist Standard in jedem Unternehmen',
          antwort: 'Schön wäre es. Gemeint ist etwas Konkretes: die <b>Voreinstellungen</b> der Anwendung.' }
      ] },

    { typ: 'frage', text: 'Welches Beispiel passt zu Privacy by Default?',
      optionen: [
        { text: 'Nur technisch notwendige Cookies sind aktiv, Tracking ist aus', richtig: true,
          antwort: 'Das Musterbeispiel. Analyse- und Marketing-Cookies sind voreingestellt <b>aus</b> und müssen aktiv zugeschaltet werden. Genauso: ein neues Profil in einem sozialen Netzwerk ist standardmäßig nicht öffentlich.' },
        { text: 'Der Nutzer kann die Datenschutzerklärung herunterladen',
          antwort: 'Das gehört zur Transparenz und zu den Informationspflichten – es sagt nichts über die <b>Voreinstellungen</b>.' },
        { text: 'Passwörter werden gehasht gespeichert',
          antwort: 'Das ist Privacy by <b>Design</b> – eine Entscheidung beim Bauen. Bei Default geht es um die Einstellungen beim Ausliefern.' }
      ] },

    { typ: 'merk', text: '<b>by Design = eingebaut</b> (beim Entwickeln mitgedacht) · <b>by Default = voreingestellt</b> (datenschutzfreundliche Standardeinstellung, z. B. Tracking aus).' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'dsb-07',
  kontakt: 'dsb',
  titel: 'Die Kameras im Pausenraum',
  thema: 'Praxisfälle',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Ein Bekannter führt einen kleinen Supermarkt und hat mich um Rat gefragt. Schauen wir uns den Fall gemeinsam an.' },
    { typ: 'nachricht', text: 'Er hat neue Überwachungskameras installiert. Sie filmen den Kassenbereich – und auch den <b>Pausenraum</b> der Beschäftigten.' },
    { typ: 'nachricht', text: 'Die Beschäftigten wurden nicht informiert. Die Aufnahmen werden <b>90 Tage</b> gespeichert, und mehrere Mitarbeiter können sie ansehen.' },

    { typ: 'mehrfach', text: 'Welche Probleme stecken darin? (mehrere)',
      optionen: [
        { text: 'Fehlende Information und Transparenz', richtig: true },
        { text: 'Überwachung des Pausenraums ist unverhältnismäßig', richtig: true },
        { text: '90 Tage Speicherung sind zu lang', richtig: true },
        { text: 'Zu viele Personen können die Aufnahmen ansehen', richtig: true },
        { text: 'Kameras sind grundsätzlich verboten' }
      ],
      antwortRichtig: 'Alle vier Probleme, genau. <b>Transparenz:</b> Die Beschäftigten hätten informiert werden müssen, dazu gehören Hinweisschilder. <b>Verhältnismäßigkeit:</b> Im Pausenraum gibt es kein überwiegendes berechtigtes Interesse – dort ist Videoüberwachung unzulässig, weil sie das Persönlichkeitsrecht verletzt. Erforderlich ist sie allenfalls im Kassenbereich. <b>Speicherbegrenzung:</b> Ohne Vorfall sind Aufnahmen in der Regel nach 48 bis 72 Stunden zu löschen. <b>Zugriff:</b> Nur eine eng begrenzte Gruppe darf die Aufnahmen sehen – alles andere verstößt gegen das Need-to-know-Prinzip.',
      antwortFalsch: 'Fast. Videoüberwachung ist nicht pauschal verboten – sie braucht aber eine Rechtsgrundlage, muss verhältnismäßig sein und transparent erfolgen. Schauen Sie noch einmal auf Information, Ort, Dauer und Zugriff.' },

    { typ: 'frage', text: 'Worauf könnte er die Überwachung des Kassenbereichs überhaupt stützen?',
      optionen: [
        { text: 'Auf das berechtigte Interesse', richtig: true,
          antwort: 'Richtig – Schutz vor Diebstahl ist ein [[berechtigtes Interesse]]. Aber: Die Abwägung mit den Interessen der Betroffenen muss dokumentiert werden, es braucht Hinweisschilder, kurze Löschfristen und eng begrenzten Zugriff.' },
        { text: 'Auf die Einwilligung der Kunden',
          antwort: 'Praktisch unmöglich – man kann nicht jeden Kunden vor dem Betreten um Zustimmung bitten. Und bei Beschäftigten wäre eine Einwilligung wegen des Abhängigkeitsverhältnisses kaum freiwillig.' }
      ] },

    { typ: 'nachricht', text: 'Ein Punkt kommt bei Beschäftigten noch hinzu, den man als Betrieb leicht übersieht:' },

    { typ: 'frage', text: 'Wer muss bei Überwachungstechnik im Betrieb beteiligt werden?',
      optionen: [
        { text: 'Der Betriebsrat', richtig: true,
          antwort: 'Richtig. Technische Einrichtungen, die zur Verhaltens- oder Leistungskontrolle geeignet sind, unterliegen der <b>Mitbestimmung</b> des Betriebsrats. Ohne seine Zustimmung geht es nicht – unabhängig vom Datenschutzrecht.' },
        { text: 'Niemand, der Chef entscheidet allein',
          antwort: 'Im Betrieb nicht. Sobald eine Technik zur Verhaltens- oder Leistungskontrolle geeignet ist, hat der <b>Betriebsrat</b> mitzubestimmen.' }
      ] },

    { typ: 'merk', text: 'Videoüberwachung: <b>informieren</b> (Schilder), <b>verhältnismäßig</b> bleiben (kein Pausenraum, keine Toiletten), <b>kurz speichern</b> (meist 48–72 Stunden), <b>Zugriff begrenzen</b> – und den Betriebsrat beteiligen.' }
  ]
});
