/* ===========================================================
   AUDIT – data/web.js
   Die Uebersichtstabellen fuer das Themengebiet
   "Cookies, Tracking und ePrivacy".

   Drei Listen, weil die Spalten sich unterscheiden:
     cookiearten    welche Sorte braucht eine Einwilligung
     rechtsrahmen   wer regelt was: ePrivacy, TDDDG, DSGVO
     consentregeln  woran ein Banner gemessen wird

   js/chat.js baut daraus die Tabellen (quelle: 'cookiearten',
   'rechtsrahmen', 'consentregeln'). Mit "keys" laesst sich im
   Gespraech eine Auswahl in genau dieser Reihenfolge zeigen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

/* "einwilligung" wird in der Tabelle farbig gesetzt:
   "Nein" gruen (unproblematisch), alles andere gelb. */
AUDIT.data.cookiearten = [
  { key: 'notwendig', name: 'Technisch notwendig', einwilligung: 'Nein',
    zweck: 'Ohne sie funktioniert der Dienst nicht, den die Person ausdrücklich verlangt hat',
    bsp: 'Warenkorb, Login-Session, Sprachwahl, Lastverteilung, Speicherung der Banner-Entscheidung selbst' },
  { key: 'funktional', name: 'Funktional / Komfort', einwilligung: 'Ja',
    zweck: 'Angenehm, aber für den Dienst nicht erforderlich',
    bsp: 'Zuletzt angesehene Artikel, eingebettete Videos, Kartendienst, Chat-Widget' },
  { key: 'analyse', name: 'Analyse / Statistik', einwilligung: 'Ja',
    zweck: 'Auswertung des Nutzungsverhaltens – auch wenn sie „nur" anonym heißt',
    bsp: 'Reichweitenmessung, Absprungrate, Heatmaps, A/B-Tests' },
  { key: 'marketing', name: 'Marketing / Tracking', einwilligung: 'Ja',
    zweck: 'Profilbildung und Werbung, meist über mehrere Websites hinweg',
    bsp: 'Conversion-Tracking, Retargeting, Pixel sozialer Netzwerke, Werbe-IDs' }
];

AUDIT.data.rechtsrahmen = [
  { key: 'eprivacy', name: 'ePrivacy-Richtlinie 2002/58/EG',
    regelt: 'Vertraulichkeit der elektronischen Kommunikation und das <b>Speichern von Informationen auf dem Endgerät</b>',
    rolle: 'Richtlinie – gilt nicht direkt, muss von jedem Staat in nationales Recht umgesetzt werden',
    norm: 'Art. 5 Abs. 3 der Richtlinie' },
  { key: 'tdddg', name: '§ 25 TDDDG (früher TTDSG)',
    regelt: 'Die deutsche Umsetzung: Zugriff auf das Endgerät nur mit <b>Einwilligung</b> oder bei <b>Unbedingt-Erforderlichkeit</b>',
    rolle: 'Gilt in Deutschland unmittelbar und ist die Norm, die man beim Banner zitiert',
    norm: '§ 25 Abs. 1 und 2 TDDDG' },
  { key: 'dsgvo', name: 'DSGVO',
    regelt: 'Was danach mit den <b>personenbezogenen Daten</b> passiert: Rechtsgrundlage, Zweck, Speicherdauer, Betroffenenrechte',
    rolle: 'Verordnung – gilt unmittelbar in der ganzen EU',
    norm: 'Art. 6, Art. 7, Art. 12 ff. DSGVO' },
  { key: 'eprivacyvo', name: 'Geplante ePrivacy-Verordnung',
    regelt: 'Sollte die Richtlinie ersetzen und EU-weit einheitlich gelten',
    rolle: 'Seit 2017 im Gesetzgebungsverfahren, <b>nicht in Kraft</b>. Bis dahin gilt Richtlinie + TDDDG',
    norm: '–' }
];

AUDIT.data.consentregeln = [
  { key: 'aktiv', name: 'Aktive Handlung',
    muss: 'Die Einwilligung muss durch eine eindeutige bestätigende Handlung erteilt werden',
    fehler: 'Vorangekreuzte Kästchen, Weiterscrollen oder Weiterklicken als „Zustimmung"',
    norm: 'Art. 4 Nr. 11 DSGVO, EuGH „Planet49"' },
  { key: 'gleichwertig', name: 'Gleichwertiges Ablehnen',
    muss: 'Ablehnen muss auf derselben Ebene und genauso leicht möglich sein wie Zustimmen',
    fehler: '„Alle akzeptieren" als großer Knopf, Ablehnen nur versteckt über „Einstellungen"',
    norm: 'Art. 7 Abs. 1 DSGVO (Nachweis), Leitlinien der Aufsichtsbehörden' },
  { key: 'informiert', name: 'Informiert',
    muss: 'Vor der Entscheidung: wer, welche Zwecke, welche Dritten, welche Speicherdauer',
    fehler: '„Wir verwenden Cookies, um Ihr Erlebnis zu verbessern" – und sonst nichts',
    norm: 'Art. 13 DSGVO' },
  { key: 'freiwillig', name: 'Freiwillig',
    muss: 'Kein Nachteil, wenn man ablehnt; keine Kopplung an nicht erforderliche Verarbeitung',
    fehler: 'Inhalt erst nach Zustimmung sichtbar, ohne jede Alternative',
    norm: 'Art. 7 Abs. 4 DSGVO (Kopplungsverbot)' },
  { key: 'granular', name: 'Nach Zwecken getrennt',
    muss: 'Für jeden Zweck eine eigene Entscheidung, nicht alles in einem Haken',
    fehler: 'Ein einziger Schalter für Analyse, Marketing und Social Media zusammen',
    norm: 'Art. 6 Abs. 1 lit. a DSGVO' },
  { key: 'widerruf', name: 'Jederzeit widerrufbar',
    muss: 'Der Widerruf muss so einfach sein wie die Erteilung und muss dauerhaft erreichbar bleiben',
    fehler: 'Kein Weg zurück zu den Einstellungen; Widerruf nur per E-Mail an den Datenschutzbeauftragten',
    norm: 'Art. 7 Abs. 3 DSGVO' },
  { key: 'nachweis', name: 'Nachweisbar',
    muss: 'Der Verantwortliche muss belegen können, wer wann in was eingewilligt hat',
    fehler: 'Keine Protokollierung der Consent-Entscheidungen',
    norm: 'Art. 7 Abs. 1, Art. 5 Abs. 2 DSGVO' },
  { key: 'vorher', name: 'Vor dem Setzen',
    muss: 'Nicht notwendige Cookies erst nach der Einwilligung setzen',
    fehler: 'Analytics lädt beim Seitenaufruf, das Banner fragt danach',
    norm: '§ 25 Abs. 1 TDDDG' }
];
