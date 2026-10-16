/* ===========================================================
   AUDIT – data/lexikon-web.js
   Kurzdefinitionen zum Themengebiet "web"
   (Cookies, Tracking und ePrivacy).

   Haengt seine Gruppen und Eintraege an die Listen aus
   data/lexikon.js an und baut den Index danach neu auf.
   Alle Eintraege dieser Datei tragen gebiet: 'web'.

   Viele Begriffe dieses Gebiets stehen bewusst NICHT hier,
   sondern schon in data/lexikon.js – etwa Einwilligung,
   Kopplungsverbot, Rechtsgrundlage und TDDDG. Ein zweiter
   Eintrag mit demselben Schluessel wuerde den ersten im Index
   verdraengen. Stattdessen wird am Dateiende ihr Gebiet um
   'web' erweitert, damit das Lexikon sie auch hier zeigt.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.lexikonGruppen = AUDIT.data.lexikonGruppen.concat([
  'Cookies und Tracking – Grundlagen',
  'Cookie-Arten',
  'ePrivacy und TDDDG',
  'Einwilligung im Web',
  'Banner und Consent',
  'Drittanbieter und Drittland'
]);

/* Ab hier beginnen die eigenen Eintraege – die Marke braucht die
   Gebietszuweisung am Dateiende. */
AUDIT.data._webAb = AUDIT.data.lexikon.length;

AUDIT.data.lexikon = AUDIT.data.lexikon.concat([

  /* ================= Cookies und Tracking – Grundlagen ================= */

  { key: 'Cookie', gruppe: 'Cookies und Tracking – Grundlagen',
    text: 'Eine kleine Textdatei, die eine Website im Browser der Besucherin ablegt und bei jedem weiteren Aufruf wieder mitgeschickt bekommt. Technisch ist ein Cookie nur ein Speicherplatz – ob er erlaubt ist, entscheidet sein <b>Zweck</b>, nicht seine Technik.',
    bsp: 'Der Warenkorb im Shop überlebt einen Seitenwechsel nur, weil eine Kennung im Cookie steht.',
    norm: '§ 25 TDDDG',
    merk: 'Nicht die Datei ist das Problem, sondern wofür sie benutzt wird.' },
  { key: 'Session-Cookie', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Sitzungscookie'],
    text: 'Gilt nur für die laufende Sitzung und verschwindet, wenn der Browser geschlossen wird. Typisch für Warenkorb und Anmeldung.',
    merk: 'Session = bis zum Schließen des Browsers. Persistent = bis zum Ablaufdatum.' },
  { key: 'persistentes Cookie', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Dauercookie'],
    text: 'Hat ein Ablaufdatum und überlebt das Schließen des Browsers – manchmal Monate oder Jahre. Je länger die Laufzeit, desto begründungspflichtiger.',
    bsp: 'Die gespeicherte Banner-Entscheidung ist ein persistentes Cookie, das selbst keine Einwilligung braucht.' },
  { key: 'First-Party-Cookie', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Erstanbieter-Cookie'],
    text: 'Wird von der Website gesetzt, die man gerade besucht. Bleibt grundsätzlich bei dieser einen Seite.',
    merk: 'First Party = vom Haus selbst. Third Party = von einem Fremden im Haus.' },
  { key: 'Third-Party-Cookie', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Drittanbieter-Cookie'],
    text: 'Wird von einer <b>anderen</b> Stelle gesetzt, die auf der Seite eingebettet ist – Werbenetzwerk, Analysedienst, soziales Netzwerk. Weil derselbe Dritte auf vielen Websites sitzt, kann er über Seiten hinweg wiedererkennen.',
    bsp: 'Ein Werbepixel auf Shop, Nachrichtenseite und Forum ergibt ein Interessenprofil.',
    merk: 'Third-Party-Cookies sind der klassische Weg zum seitenübergreifenden [[Tracking]] – deshalb immer einwilligungspflichtig.' },
  { key: 'Tracking', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Nachverfolgung'],
    text: 'Das Verfolgen von Verhalten über einzelne Seitenaufrufe oder ganze Websites hinweg, um daraus ein Profil zu bilden. Braucht immer eine [[Einwilligung]].',
    norm: '§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO' },
  { key: 'Zählpixel', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Tracking-Pixel', 'Web-Beacon', 'Pixel'],
    text: 'Ein unsichtbares Bild von einem fremden Server. Schon der Abruf verrät IP-Adresse, Zeitpunkt und besuchte Seite – <b>ohne</b> dass ein Cookie gesetzt wird.',
    bsp: 'Ein Pixel in einer Newsletter-Mail meldet, wer sie geöffnet hat.',
    merk: 'Ein Pixel braucht kein Cookie – wer nur Cookies blockiert, ist nicht geschützt.' },
  { key: 'Local Storage', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Web Storage', 'Session Storage', 'IndexedDB'],
    text: 'Ein weiterer Speicher im Browser, größer als ein Cookie und wird nicht automatisch mitgeschickt. Rechtlich macht das <b>keinen Unterschied</b>: § 25 TDDDG spricht von Informationen auf dem Endgerät, nicht von Cookies.',
    norm: '§ 25 TDDDG',
    merk: 'Local Storage statt Cookie ist kein Trick, der die Einwilligung erspart.' },
  { key: 'Fingerprinting', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Browser-Fingerprint', 'Device Fingerprinting'],
    text: 'Wiedererkennung ohne jeden Speicherzugriff: Aus Bildschirmgröße, Schriftarten, Zeitzone, Grafikkarte und Browserversion entsteht eine fast eindeutige Signatur.',
    bsp: 'Ein Nutzer, der alle Cookies löscht, wird am Fingerprint wiedererkannt.',
    merk: 'Fingerprinting umgeht Cookies technisch, aber nicht rechtlich – es bleibt [[Tracking]] und braucht eine [[Einwilligung]].' },
  { key: 'Endgerät', gruppe: 'Cookies und Tracking – Grundlagen', alias: ['Endeinrichtung'],
    text: 'Das Gerät der Nutzerin – Rechner, Handy, Fernseher. § 25 TDDDG schützt es als <b>eigenen Raum</b>: Hineinschreiben und Herauslesen braucht grundsätzlich eine Erlaubnis.',
    merk: 'Der Schutz hängt am Gerät, nicht am Personenbezug: § 25 TDDDG gilt auch für Daten, die niemanden identifizieren.' },

  /* ================= Cookie-Arten ================= */

  { key: 'technisch notwendige Cookies', gruppe: 'Cookie-Arten', alias: ['unbedingt erforderlich', 'notwendige Cookies'],
    text: 'Ohne sie funktioniert der Dienst nicht, den die Person <b>ausdrücklich verlangt</b> hat. Nur diese Sorte darf ohne [[Einwilligung]] gesetzt werden.',
    bsp: 'Warenkorb, Login-Sitzung, Sprachumschaltung, Lastverteilung – und das Cookie, das die Banner-Entscheidung selbst speichert.',
    norm: '§ 25 Abs. 2 Nr. 2 TDDDG',
    merk: 'Maßstab ist der <b>von der Person gewünschte Dienst</b>, nicht das Geschäftsmodell des Anbieters.' },
  { key: 'funktionale Cookies', gruppe: 'Cookie-Arten', alias: ['Komfort-Cookies'],
    text: 'Angenehm, aber nicht erforderlich – eingebettete Videos, Kartendienste, Chat-Fenster, „zuletzt angesehen". Einwilligungspflichtig, weil die Seite ohne sie funktioniert.',
    merk: '„Nützlich" ist nicht „notwendig".' },
  { key: 'Analyse-Cookies', gruppe: 'Cookie-Arten', alias: ['Statistik-Cookies', 'Webanalyse'],
    text: 'Messen, wie die Seite benutzt wird: Besucherzahlen, Absprungrate, Klickwege. Immer einwilligungspflichtig – auch dann, wenn die Auswertung später [[Pseudonymisierung|pseudonymisiert]] oder nach Anbieterangabe „anonym" erfolgt.',
    bsp: 'Reichweitenmessung, Heatmaps, A/B-Tests.',
    norm: '§ 25 Abs. 1 TDDDG',
    merk: 'Der Zugriff auf das [[Endgerät]] ist der einwilligungspflichtige Schritt – was danach mit den Daten passiert, ändert daran nichts.' },
  { key: 'Marketing-Cookies', gruppe: 'Cookie-Arten', alias: ['Werbe-Cookies', 'Retargeting'],
    text: 'Dienen Profilbildung und Werbung, meist über viele Websites hinweg und über [[Third-Party-Cookie|Dritte]]. Immer einwilligungspflichtig, und die Dritten müssen in der Information benannt werden.',
    bsp: 'Conversion-Tracking, Retargeting-Anzeigen, Werbe-IDs der großen Netzwerke.' },

  /* ================= ePrivacy und TDDDG ================= */

  { key: 'ePrivacy-Richtlinie', gruppe: 'ePrivacy und TDDDG', alias: ['ePrivacy', 'Cookie-Richtlinie', 'Richtlinie 2002/58/EG'],
    text: 'EU-Richtlinie zum Datenschutz in der elektronischen Kommunikation. Ihr Artikel 5 Absatz 3 ist die Wurzel der Einwilligungspflicht für Cookies. Als <b>Richtlinie</b> gilt sie nicht unmittelbar, sondern musste von jedem Mitgliedstaat in eigenes Recht umgesetzt werden – in Deutschland durch [[TDDDG|§ 25 TDDDG]].',
    norm: 'Richtlinie 2002/58/EG, geändert durch 2009/136/EG',
    merk: 'Richtlinie = Auftrag an die Staaten. Verordnung = gilt direkt. Deshalb zitiert man im deutschen Fall das TDDDG und nicht die Richtlinie.' },
  { key: 'ePrivacy-Verordnung', gruppe: 'ePrivacy und TDDDG', alias: ['ePrivacy-VO'],
    text: 'Sollte die [[ePrivacy-Richtlinie]] ersetzen und EU-weit einheitlich und unmittelbar gelten. Seit 2017 im Gesetzgebungsverfahren und <b>nicht in Kraft</b>.',
    merk: 'In der Klausur: Die Verordnung ist geplant, nicht geltendes Recht. Es gilt Richtlinie plus nationales Gesetz.' },
  { key: 'lex specialis', gruppe: 'ePrivacy und TDDDG', alias: ['Spezialitätsgrundsatz', 'Vorrang des Spezialgesetzes'],
    text: 'Die spezielle Regel geht der allgemeinen vor. Für den <b>Zugriff auf das Endgerät</b> ist § 25 TDDDG die speziellere Norm und verdrängt die [[Rechtsgrundlage|Rechtsgrundlagen des Art. 6 DSGVO]] – für die anschließende Verarbeitung der Daten gilt wieder die [[DSGVO]].',
    merk: 'Zwei Stufen: <b>Zugriff aufs Gerät</b> → § 25 TDDDG. <b>Umgang mit den Daten</b> → DSGVO. Auf Stufe eins hilft kein [[berechtigtes Interesse]].' },

  /* ================= Einwilligung im Web ================= */

  { key: 'Opt-in', gruppe: 'Einwilligung im Web',
    text: 'Nichts passiert, bis die Person aktiv zustimmt. Das ist der von der DSGVO verlangte Weg.',
    merk: 'Opt-in = Standard ist „aus". Opt-out = Standard ist „an" und reicht für eine Einwilligung nicht.' },
  { key: 'Opt-out', gruppe: 'Einwilligung im Web',
    text: 'Die Verarbeitung läuft, bis die Person widerspricht. Für einwilligungspflichtige Cookies <b>unzulässig</b>; nur dort denkbar, wo kein Einwilligungserfordernis besteht.',
    bsp: 'Ein voreingestellter Haken bei „Analyse erlauben" ist ein Opt-out und damit keine wirksame [[Einwilligung]].' },
  { key: 'Double Opt-in', gruppe: 'Einwilligung im Web', alias: ['Bestätigungsmail'],
    text: 'Zweistufige Anmeldung: erst die Eintragung, dann die Bestätigung über einen Link in einer Mail an genau diese Adresse. Erst damit ist nachgewiesen, dass die Adresse der Person gehört.',
    bsp: 'Standard bei Newslettern – ohne Bestätigungsklick keine Zusendung.',
    norm: 'Art. 7 Abs. 1 DSGVO, § 7 UWG',
    merk: 'Single Opt-in beweist nur, dass <b>jemand</b> die Adresse eingetippt hat.' },
  { key: 'Planet49', gruppe: 'Einwilligung im Web', alias: ['EuGH Planet49', 'C-673/17'],
    text: 'Urteil des EuGH von 2019 zu einem Gewinnspiel: Ein <b>vorangekreuztes Kästchen</b> ist keine wirksame Einwilligung in Cookies. Verlangt sind eine aktive Handlung und eine Information über Laufzeit und Dritte.',
    norm: 'EuGH, Urteil vom 1.10.2019, C-673/17',
    merk: 'Das Standardurteil, wenn in der Klausur ein voreingestellter Haken auftaucht.' },
  { key: 'Einwilligungsnachweis', gruppe: 'Einwilligung im Web', alias: ['Consent-Log', 'Consent-Protokoll'],
    text: 'Der [[Verantwortliche]] muss belegen können, <b>wer wann in welche Zwecke</b> eingewilligt hat – samt der damals angezeigten Banner-Fassung. Ohne Protokoll ist die Einwilligung im Streitfall nicht vorhanden.',
    norm: 'Art. 7 Abs. 1, Art. 5 Abs. 2 DSGVO' },

  /* ================= Banner und Consent ================= */

  { key: 'Cookie-Banner', gruppe: 'Banner und Consent', alias: ['Consent-Banner', 'Cookie-Hinweis'],
    text: 'Die Abfrage beim Seitenaufruf. Sie ist nur dann mehr als Dekoration, wenn sie <b>vor</b> dem Setzen nicht notwendiger Cookies erscheint, nach Zwecken trennt, gleichwertig ablehnen lässt und den Widerruf offen hält.',
    merk: 'Ein Banner, das nur informiert, aber keine echte Wahl lässt, erfüllt die Pflicht <b>nicht</b> – es dokumentiert den Verstoß.' },
  { key: 'Consent-Management-Plattform', gruppe: 'Banner und Consent', alias: ['CMP', 'Consent-Tool'],
    text: 'Software, die das Banner anzeigt, die Entscheidungen speichert und die eingebundenen Dienste erst nach Zustimmung lädt. Sie nimmt die Technik ab, nicht die Verantwortung.',
    bsp: 'Das CMP selbst darf ein notwendiges Cookie setzen – sonst müsste es bei jedem Klick neu fragen.',
    merk: 'Ein CMP ist kein Freibrief: Falsch konfiguriert lädt es die Dienste trotzdem vorher.' },
  { key: 'Dark Pattern', gruppe: 'Banner und Consent', alias: ['Dark Patterns', 'manipulatives Design'],
    text: 'Gestaltung, die zur gewünschten Antwort drängt: großer bunter Zustimmungsknopf gegen blasse Textlinie, „Ablehnen" erst zwei Klicks tiefer, Verwirrung durch doppelte Verneinung, künstliche Eile.',
    merk: 'Wo das Design die Wahl verzerrt, ist die Einwilligung nicht <b>freiwillig</b> – und damit unwirksam.' },
  { key: 'Cookie-Wall', gruppe: 'Banner und Consent', alias: ['Pur-Abo', 'Pay or Okay', 'Tracking-Wall'],
    text: 'Zugang nur gegen Zustimmung zum Tracking – oder gegen Bezahlung. Umstritten und von den Aufsichtsbehörden nur unter engen Bedingungen hingenommen; eine Wall <b>ohne</b> jede Alternative verstößt gegen das [[Kopplungsverbot]].',
    norm: 'Art. 7 Abs. 4 DSGVO' },
  { key: 'zweckgetrennte Einwilligung', gruppe: 'Banner und Consent', alias: ['Granularität', 'granulare Einwilligung'],
    text: 'Für jeden Zweck eine eigene Entscheidung. Ein einziger Schalter für Analyse, Marketing und Social Media zusammen ist keine informierte Einwilligung.',
    norm: 'Art. 6 Abs. 1 lit. a, Art. 7 DSGVO' },
  { key: 'Datenschutzerklärung', gruppe: 'Banner und Consent', alias: ['Datenschutzhinweise'],
    text: 'Die dauerhaft erreichbare Information nach [[Informationspflicht|Art. 13 DSGVO]]: wer verarbeitet, zu welchen Zwecken, auf welcher Grundlage, wie lange, wer bekommt die Daten, welche Rechte bestehen. Sie <b>ersetzt kein Banner</b> und ein Banner ersetzt sie nicht.',
    norm: 'Art. 13 DSGVO',
    merk: 'Banner = Einwilligung einholen. Datenschutzerklärung = informieren. Zwei verschiedene Pflichten.' },

  /* ================= Drittanbieter und Drittland ================= */

  { key: 'Drittanbieter-Einbindung', gruppe: 'Drittanbieter und Drittland', alias: ['Third-Party-Request', 'externe Einbindung'],
    text: 'Jedes Element, das die Seite von einem fremden Server nachlädt – Schriftart, Karte, Video, Werbeskript. Schon der Abruf überträgt die <b>IP-Adresse</b> der Besucherin an den Dritten, und die ist ein [[personenbezogene Daten|personenbezogenes Datum]].',
    merk: 'Nicht erst das Cookie ist der Vorgang, sondern bereits der Abruf.' },
  { key: 'Google Fonts', gruppe: 'Drittanbieter und Drittland', alias: ['Schriftart-Einbindung'],
    text: 'Der Lehrbuchfall: Eine dynamisch von Googles Servern geladene Schriftart überträgt die IP-Adresse in die USA. Das LG München sprach 2022 Schadenersatz zu – seither werden Schriften <b>lokal</b> ausgeliefert.',
    bsp: 'Welle von Abmahnschreiben an Website-Betreiber ab 2022.',
    norm: 'LG München I, Urteil vom 20.1.2022, 3 O 17493/20',
    merk: 'Lokal einbinden löst das Problem vollständig und kostet nichts.' },
  { key: 'Social Plugin', gruppe: 'Drittanbieter und Drittland', alias: ['Like-Button', 'Share-Button'],
    text: 'Eingebettete Knöpfe sozialer Netzwerke senden schon beim Laden Daten an das Netzwerk. Zulässig nur nach [[Einwilligung]] – technisch über eine Zwei-Klick-Lösung, bei der der Knopf erst auf Wunsch aktiv wird.',
    merk: 'Beim Einbinden kann eine <b>gemeinsame Verantwortlichkeit</b> mit dem Netzwerk entstehen (Art. 26 DSGVO).' },
  { key: 'EU-US Data Privacy Framework', gruppe: 'Drittanbieter und Drittland', alias: ['DPF', 'Data Privacy Framework', 'Angemessenheitsbeschluss USA'],
    text: 'Seit Juli 2023 bescheinigt die EU-Kommission den USA ein angemessenes Datenschutzniveau – aber nur für Unternehmen, die sich <b>selbst zertifiziert</b> haben. Für sie ist die Übermittlung ohne weitere Garantien möglich, für alle anderen braucht es [[Standardvertragsklauseln]].',
    norm: 'Angemessenheitsbeschluss vom 10.7.2023',
    merk: 'Immer zwei Schritte prüfen: Gibt es einen [[Angemessenheitsbeschluss]] – und ist <b>dieser</b> Anbieter darin erfasst?' },
  { key: 'Schrems II', gruppe: 'Drittanbieter und Drittland', alias: ['C-311/18'],
    text: 'EuGH-Urteil von 2020, das den Vorgänger-Beschluss „Privacy Shield" kippte. Seitdem gilt: Bei einer Übermittlung in ein [[Drittland]] ist zusätzlich zu prüfen, ob die Garantien dort auch <b>tatsächlich</b> durchsetzbar sind.',
    norm: 'EuGH, Urteil vom 16.7.2020, C-311/18',
    merk: 'Die Vorgeschichte des [[EU-US Data Privacy Framework]] – und der Grund, warum man bei US-Tools genau hinsieht.' }

]);

/* Alle Eintraege ab der oben gesetzten Marke gehoeren zum Gebiet
   "web". Die Eintraege der anderen Dateien bleiben unberuehrt. */
AUDIT.data.lexikon.slice(AUDIT.data._webAb).forEach(function (e) {
  if (!e.gebiet) e.gebiet = 'web';
});
delete AUDIT.data._webAb;

/* Begriffe, die bereits in data/lexikon.js stehen und in diesem Gebiet
   genauso gebraucht werden. Sie werden hier NICHT neu angelegt – ein
   zweiter Eintrag mit demselben Schluessel wuerde den ersten im Index
   verdraengen –, sondern bekommen 'web' in ihre Gebietsliste. */
[
  'DSGVO', 'personenbezogene Daten', 'besondere Kategorien', 'Verantwortlicher',
  'Auftragsverarbeiter', 'AV-Vertrag', 'Aufsichtsbehörde',
  'Grundsätze der Verarbeitung', 'Rechtsgrundlage', 'Einwilligung',
  'Kopplungsverbot', 'berechtigtes Interesse', 'Zweckbindung', 'Datenminimierung',
  'Speicherbegrenzung', 'Rechenschaftspflicht', 'Verhältnismäßigkeit',
  'Drittland', 'Angemessenheitsbeschluss', 'Standardvertragsklauseln',
  'Informationspflicht', 'Bußgelder', 'Privacy by Design', 'Privacy by Default',
  'Pseudonymisierung', 'Anonymisierung', 'TDDDG',
  'Art. 7 Abs. 3 DSGVO', 'Art. 21 DSGVO', 'Art. 77 DSGVO', 'Art. 82 DSGVO'
].forEach(function (k) {
  var e = AUDIT.data.lexikonIndex[String(k).toLowerCase()];
  if (!e) { console.warn('lexikon-web.js: kein Eintrag für', k); return; }
  var liste = Array.isArray(e.gebiet) ? e.gebiet : (e.gebiet ? [e.gebiet] : []);
  if (liste.indexOf('web') < 0) liste.push('web');
  e.gebiet = liste;
});

/* Index neu aufbauen, damit die neuen Begriffe und Alias greifen. */
AUDIT.data.lexikonIndizieren();
