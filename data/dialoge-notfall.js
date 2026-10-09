/* ===========================================================
   AUDIT – data/dialoge-notfall.js
   Gruppenchat #notfall: Sabrina (IT), Herr Olschewski (DSB)
   und Frau Hagedorn (GF) schreiben gemeinsam.
   Jede Nachricht trägt über "von" ihren Absender.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'not-01',
  kontakt: 'notfall',
  titel: 'Die Mail ging an den Falschen',
  thema: 'Datenpanne',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', von: 'Frau Lüttmann (Personal)',
      text: 'Ich glaube, mir ist gerade etwas Schlimmes passiert. 😨' },
    { typ: 'nachricht', von: 'Frau Lüttmann (Personal)',
      text: 'Ich wollte einer Kollegin ein Dokument schicken: Namen, Anschriften, Gehälter und Angaben zu längeren Krankheitszeiten von zwölf Beschäftigten.' },
    { typ: 'nachricht', von: 'Frau Lüttmann (Personal)',
      text: 'Durch einen Tippfehler ging die Mail an eine <b>firmenfremde</b> Adresse, die der richtigen sehr ähnlich sieht. Gemerkt habe ich es erst zwei Stunden später.' },
    { typ: 'nachricht', von: 'Herr Olschewski (DSB)',
      text: 'Danke, dass Sie sich sofort gemeldet haben. Das ist genau richtig. Lassen Sie uns das der Reihe nach durchgehen.' },

    { typ: 'frage', von: 'Herr Olschewski (DSB)',
      text: 'Warum ist dieser Vorfall datenschutzrechtlich relevant?',
      optionen: [
        { text: 'Weil personenbezogene Daten Unbefugten offengelegt wurden', richtig: true, norm: 'Datenpanne',
          antwort: 'Richtig. Es liegt eine <b>Verletzung des Schutzes personenbezogener Daten</b> vor – kurz: eine [[Datenpanne]]. Namen, Anschriften, Gehälter und vor allem <b>Gesundheitsdaten</b> wurden einer unbefugten Person offengelegt. Für diese Offenlegung gibt es keine Rechtsgrundlage, das Risiko für die Betroffenen ist hoch, und es bestehen Meldepflichten.' },
        { text: 'Weil die Kollegin die Mail nicht bekommen hat',
          antwort: 'Das ist nur lästig. Das Problem ist, <b>wer sie stattdessen bekommen hat</b> – und was darin stand.' }
      ] },

    { typ: 'frage', von: 'Herr Olschewski (DSB)',
      text: 'Welches Schutzziel ist in erster Linie betroffen?',
      optionen: [
        { text: 'Vertraulichkeit', richtig: true,
          antwort: 'Genau. Unbefugte haben Zugang zu Informationen bekommen, die nur für Berechtigte bestimmt waren.' },
        { text: 'Verfügbarkeit',
          antwort: 'Nein – uns fehlt nichts, wir haben das Dokument weiterhin. Das Problem ist, dass es jemand <b>zusätzlich</b> hat.' }
      ] },
    { typ: 'nachricht', von: 'Herr Olschewski (DSB)',
      text: 'Und noch eine Verschärfung: Krankheitszeiten sind <b>Gesundheitsdaten</b> und damit eine [[besondere Kategorien|besondere Kategorie]]. Das hebt das Risiko für die Betroffenen deutlich an.' },

    { typ: 'mehrfach', von: 'Sabrina (IT)',
      text: 'Was machen wir jetzt als Erstes? (mehrere)',
      optionen: [
        { text: 'Den Empfänger kontaktieren und zur Löschung auffordern, Bestätigung verlangen', richtig: true },
        { text: 'Versuchen, die Nachricht zurückzurufen', richtig: true },
        { text: 'Erst mal abwarten, ob sich jemand meldet' },
        { text: 'Den Vorfall intern melden und dokumentieren', richtig: true },
        { text: 'Die Mail aus dem gesendeten Ordner löschen, damit es niemand merkt' }
      ],
      antwortRichtig: 'Richtig. <b>Empfänger kontaktieren</b> und zur ungelesenen Löschung auffordern, Bestätigung verlangen, Rückruf versuchen. Und den Vorfall <b>unverzüglich intern melden</b> – DSB, ISB, Vorgesetzte –, dokumentieren und bewerten. Abwarten verliert nur Zeit, und etwas zu vertuschen macht aus einem Fehler ein Fehlverhalten.',
      antwortFalsch: 'Fast. Abwarten und Vertuschen sind genau die falschen Reflexe – die Uhr läuft bereits, und jede Verzögerung verschlechtert die Lage.' },

    { typ: 'nachricht', von: 'Frau Hagedorn (GF)',
      text: 'Ich bin dazugekommen. Müssen wir das der Aufsichtsbehörde melden? Und wenn ja, bis wann?' },

    { typ: 'frage', von: 'Herr Olschewski (DSB)',
      text: 'Welche Frist gilt für die Meldung an die Aufsichtsbehörde?',
      optionen: [
        { text: 'Unverzüglich, möglichst binnen 72 Stunden', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Richtig. Die Frist läuft ab dem Zeitpunkt, an dem uns der Vorfall <b>bekannt</b> wird – nicht ab dem Versenden der Mail. Gemeldet wird, außer ein Risiko für die Betroffenen ist unwahrscheinlich. Hier geht es um Gehalts- und Gesundheitsdaten, also melden wir.' },
        { text: 'Innerhalb eines Monats',
          antwort: 'Das ist die Frist für <b>Betroffenenanfragen</b> wie Auskunft oder Löschung. Bei einer Datenpanne ist die Frist viel kürzer.' },
        { text: 'Nur wenn jemand Schaden geltend macht',
          antwort: 'Nein, die Meldepflicht hängt nicht davon ab, ob sich jemand beschwert. Sie entsteht mit dem Vorfall und dem Risiko.' }
      ] },

    { typ: 'frage', von: 'Frau Hagedorn (GF)',
      text: 'Und müssen wir die betroffenen Beschäftigten selbst informieren?',
      optionen: [
        { text: 'Ja, bei hohem Risiko', richtig: true, norm: 'Art. 34 DSGVO',
          antwort: 'Ja. Bei <b>voraussichtlich hohem Risiko</b> müssen die Betroffenen unverzüglich benachrichtigt werden – und Gehalts- plus Gesundheitsdaten an eine fremde Person sind genau das. Die Benachrichtigung könnte entfallen, wenn die Daten durch <b>Verschlüsselung</b> für Unbefugte unbrauchbar wären. Genau deshalb sollten solche Anhänge verschlüsselt sein.' },
        { text: 'Nein, die Meldung an die Behörde reicht',
          antwort: 'Das sind zwei verschiedene Pflichten: Meldung an die <b>Aufsichtsbehörde</b> und Benachrichtigung der <b>Betroffenen</b> bei hohem Risiko. Hier greifen beide.' }
      ] },

    { typ: 'nachricht', von: 'Sabrina (IT)',
      text: 'Was bauen wir ein, damit das nicht wieder passiert?' },

    { typ: 'mehrfach', von: 'Sabrina (IT)',
      text: 'Sinnvolle Maßnahmen: (mehrere)',
      optionen: [
        { text: 'Anhänge mit personenbezogenen Daten verschlüsseln', richtig: true },
        { text: 'Verzögerter Versand, damit man Mails zurückholen kann', richtig: true },
        { text: 'Warnung beim Versand an externe Empfänger', richtig: true },
        { text: 'E-Mail komplett abschaffen' }
      ],
      antwortRichtig: 'Gute Auswahl. Verschlüsselung senkt das Risiko so stark, dass eine Benachrichtigung oft entfällt. Ein verzögerter Versand von ein bis zwei Minuten rettet erfahrungsgemäß erstaunlich viele Mails. Und eine deutliche Warnung bei externen Empfängern verhindert genau diesen Tippfehler.',
      antwortFalsch: 'Fast – ohne E-Mail arbeitet niemand. Gesucht sind Maßnahmen, die den Fehler <b>abfangen</b> oder seine Folgen begrenzen.' },

    { typ: 'merk', text: '<b>Datenpanne:</b> Meldung an die Aufsichtsbehörde <b>unverzüglich, möglichst binnen 72 Stunden ab Kenntnis</b>. Bei hohem Risiko zusätzlich die <b>Betroffenen</b> informieren – das entfällt oft, wenn die Daten verschlüsselt waren.' },

    { typ: 'nachricht', von: 'Herr Olschewski (DSB)',
      text: 'Frau Lüttmann: Danke, dass Sie sich sofort gemeldet haben. Genau so muss es laufen.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'not-02',
  kontakt: 'notfall',
  titel: 'Ransomware: die ersten Stunden',
  thema: 'Datenpanne',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', von: 'Sabrina (IT)',
      text: '🚨 Dienstag, 6:40 Uhr. Auf drei Rechnern im Versand liegt eine Lösegeldforderung. Dateien sind verschlüsselt.' },
    { typ: 'nachricht', von: 'Sabrina (IT)',
      text: 'Gestern Nachmittag hat jemand einen Mailanhang geöffnet: „Rechnung_2026_offen.pdf.exe".' },

    { typ: 'frage', von: 'Sabrina (IT)',
      text: 'Was machen wir als Allererstes?',
      optionen: [
        { text: 'Betroffene Systeme vom Netz trennen', richtig: true,
          antwort: 'Genau. <b>Isolieren</b> ist der erste Schritt – damit stoppen wir die Ausbreitung. Wichtig: vom <b>Netz</b> trennen, nicht ausschalten. Der Arbeitsspeicher kann für die Aufklärung wichtig sein.' },
        { text: 'Die Rechner sofort ausschalten',
          antwort: 'Verständlicher Reflex, aber damit gehen flüchtige Spuren verloren, die für die Aufklärung wichtig sind. Besser: Netzwerkkabel ziehen, Gerät laufen lassen.' },
        { text: 'Das Lösegeld zahlen, damit wir schnell weiterarbeiten können',
          antwort: 'Davon raten Behörden ab: Es gibt keine Garantie für den Schlüssel, es finanziert die nächste Welle, und man wird als zahlungswillig gelistet. Zuerst wird isoliert.' }
      ] },

    { typ: 'nachricht', von: 'Frau Hagedorn (GF)',
      text: 'Wen müssen wir jetzt informieren?' },

    { typ: 'mehrfach', von: 'Frau Hagedorn (GF)',
      text: 'Wer gehört an den Tisch? (mehrere)',
      optionen: [
        { text: 'Der ISB – er leitet die Vorfallsbehandlung', richtig: true },
        { text: 'Der DSB – wegen der Meldepflichten', richtig: true },
        { text: 'Die Geschäftsführung', richtig: true },
        { text: 'Die Presse' },
        { text: 'Alle Kunden sofort per Rundmail' }
      ],
      antwortRichtig: 'Richtig. Der <b>ISB</b> leitet die technische Vorfallsbehandlung, der <b>DSB</b> prüft Melde- und Informationspflichten, die <b>Geschäftsführung</b> entscheidet und trägt die Verantwortung. Presse und Kundenmails kommen – wenn überhaupt – später und abgestimmt. Unkoordinierte Kommunikation richtet im Ernstfall zusätzlichen Schaden an.',
      antwortFalsch: 'Fast. Im ersten Schritt geht es um die <b>internen</b> Zuständigen. Externe Kommunikation wird später abgestimmt.' },

    { typ: 'frage', von: 'Herr Olschewski (DSB)',
      text: 'Ist ein Ransomware-Angriff überhaupt eine meldepflichtige Datenpanne? Es wurden ja „nur" Daten verschlüsselt.',
      optionen: [
        { text: 'Ja, auch der Verlust der Verfügbarkeit zählt', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Richtig, und das wird oft falsch beantwortet. Eine Verletzung des Schutzes personenbezogener Daten umfasst <b>Vernichtung, Verlust, Veränderung</b> und unbefugte Offenlegung oder Zugang. Wenn wir nicht mehr an Kundendaten herankommen, ist das ein Verlust der <b>Verfügbarkeit</b> – und damit meldepflichtig, wenn ein Risiko besteht. Bei moderner Ransomware kommt meist hinzu, dass die Daten vorher <b>kopiert</b> wurden.' },
        { text: 'Nein, solange niemand die Daten gesehen hat',
          antwort: 'Das ist der häufigste Denkfehler. Eine Datenpanne ist nicht nur „jemand hat etwas gesehen" – auch <b>Verlust</b> und <b>Vernichtung</b> gehören dazu.' }
      ] },

    { typ: 'nachricht', von: 'Sabrina (IT)',
      text: '11:20 Uhr: Das Backup vom Sonntag liegt auf einem Gerät, das nicht am Netz hing. Es ist sauber. 🙏' },

    { typ: 'frage', von: 'Sabrina (IT)',
      text: 'Können wir jetzt einfach zurückspielen?',
      optionen: [
        { text: 'Erst neu aufsetzen und die Ursache schließen, dann zurückspielen', richtig: true,
          antwort: 'Genau. Spielen wir die Daten auf ein noch befallenes System zurück, sind sie nach kurzer Zeit wieder verschlüsselt. Also: Systeme <b>neu aufsetzen</b>, die Einbruchsursache schließen – hier die Mail und die fehlende Schulung –, Passwörter ändern, dann die Daten zurückspielen.' },
        { text: 'Ja, sofort auf alle Rechner',
          antwort: 'Zu früh. Solange die Schadsoftware und ihre Hintertür noch auf dem System sind, verschlüsselt sie die zurückgespielten Daten gleich wieder.' }
      ] },

    { typ: 'nachricht', von: 'Frau Hagedorn (GF)',
      text: 'Und was lernen wir daraus für das nächste Mal?' },

    { typ: 'mehrfach', von: 'Frau Hagedorn (GF)',
      text: 'Was nehmen wir mit? (mehrere)',
      optionen: [
        { text: 'Backups offline halten und das Zurückspielen regelmäßig testen', richtig: true },
        { text: 'Netzwerksegmentierung, damit sich so etwas nicht überall ausbreitet', richtig: true },
        { text: 'Schulungen und einen Meldeweg ohne Schuldzuweisung', richtig: true },
        { text: 'Updates konsequent einspielen', richtig: true },
        { text: 'Keine Mails mehr von außen annehmen' }
      ],
      antwortRichtig: 'Alle vier. Und der wichtigste Satz zum Schluss: Nach jedem Vorfall gehört eine <b>Nachbereitung</b> dazu – Ursache beheben, Maßnahmen nachschärfen, Notfallplan und Schulungen anpassen. Sicherheit ist ein Kreislauf, kein Zustand ([[PDCA]]).',
      antwortFalsch: 'Fast – ohne externe Mails kann niemand arbeiten. Gesucht sind Maßnahmen, die den Schaden <b>verhindern oder begrenzen</b>.' },

    { typ: 'merk', text: '<b>Ransomware-Ablauf:</b> isolieren (Netz trennen, nicht ausschalten) → ISB, DSB und Leitung informieren → Meldung binnen 72 Stunden prüfen → neu aufsetzen und Ursache schließen → <b>dann</b> aus dem offline gehaltenen Backup zurückspielen → nachbereiten.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'not-03',
  kontakt: 'notfall',
  titel: 'Der Server ist weg – und kein Backup',
  thema: 'Praxisfälle',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', von: 'Sabrina (IT)',
      text: 'Der zentrale Server ist ausgefallen. Hardwaredefekt, der Controller ist durch.' },
    { typ: 'nachricht', von: 'Sabrina (IT)',
      text: 'Die letzte brauchbare Sicherung ist … elf Monate alt. Niemand hat je geprüft, ob der Sicherungsjob überhaupt noch läuft.' },
    { typ: 'nachricht', von: 'Frau Hagedorn (GF)',
      text: 'Das darf doch nicht wahr sein. Was heißt das jetzt konkret für uns?' },

    { typ: 'frage', von: 'Herr Olschewski (DSB)',
      text: 'Welches Schutzziel ist hier betroffen?',
      optionen: [
        { text: 'Verfügbarkeit', richtig: true,
          antwort: 'Richtig. Berechtigte kommen nicht an Daten und Systeme, die sie für ihre Arbeit brauchen. Vertraulichkeit und Integrität sind nicht betroffen – es hat niemand etwas gesehen oder verändert.' },
        { text: 'Vertraulichkeit',
          antwort: 'Niemand hat Daten unbefugt gesehen. Das Problem ist, dass <b>wir</b> nicht mehr herankommen.' }
      ] },

    { typ: 'frage', von: 'Herr Olschewski (DSB)',
      text: 'Ist ein reiner Hardwaredefekt eine meldepflichtige Datenpanne?',
      optionen: [
        { text: 'Ja, wenn personenbezogene Daten dauerhaft verloren sind', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Richtig. Auch die <b>Vernichtung oder der Verlust</b> personenbezogener Daten ist eine Verletzung ihres Schutzes – ganz ohne Angreifer. Wenn Kundendaten aus elf Monaten unwiederbringlich weg sind, entsteht für die Betroffenen sehr wohl ein Risiko: falsche oder fehlende Vertragsdaten, verlorene Nachweise, nicht erfüllbare Auskunftsansprüche.' },
        { text: 'Nein, es war ja kein Angriff',
          antwort: 'Ein verbreiteter Irrtum. Für eine Datenpanne braucht es keinen Angreifer – <b>Verlust und Vernichtung</b> zählen genauso.' }
      ] },

    { typ: 'nachricht', von: 'Frau Hagedorn (GF)',
      text: 'Was muss sich ändern? Und bitte so, dass es nicht wieder einschläft.' },

    { typ: 'frage', von: 'Sabrina (IT)',
      text: 'Was ist der entscheidende Punkt bei Backups?',
      optionen: [
        { text: 'Dass das Zurückspielen regelmäßig getestet wird', richtig: true,
          antwort: 'Genau das. Ein Sicherungsjob, der seit Monaten still gescheitert ist, sieht bis zum Ernstfall aus wie ein funktionierendes Backup. Deshalb: <b>Rückspieltest</b> mit Protokoll, Überwachung der Sicherungsläufe, [[Backup|3-2-1-Regel]] und ein <b>Notfall- und Wiederanlaufplan</b>, der auch sagt, wer im Ernstfall was tut.' },
        { text: 'Dass möglichst viel Speicherplatz vorhanden ist',
          antwort: 'Platz hilft wenig, wenn niemand merkt, dass nichts mehr gesichert wird. Entscheidend ist, dass das <b>Zurückspielen</b> nachweislich funktioniert.' }
      ] },

    { typ: 'merk', text: 'Eine Datenpanne braucht <b>keinen Angreifer</b> – auch Verlust und Vernichtung zählen. Und: Ein Backup, dessen Rückspielen nie getestet wurde, ist kein Backup.' }
  ]
});
