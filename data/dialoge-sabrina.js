/* ===========================================================
   AUDIT – data/dialoge-sabrina.js
   Sabrina Köster, IT-Abteilung:
   Schadsoftware, Schutzmaßnahmen, Angriffswege.

   Schritt-Typen:
     nachricht  – Blase von der Person
     frage      – eine richtige Antwort
     mehrfach   – mehrere richtige Antworten ankreuzen
     karte      – Übersicht aus den data/-Dateien oder freies HTML
     merk       – Merksatz, wandert in den Spickzettel
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'sab-01',
  kontakt: 'sabrina',
  titel: 'Neun Rechner über Nacht',
  thema: 'Schadsoftware',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Moin! Hast du kurz? Ich hab hier was Komisches.' },
    { typ: 'nachricht', text: 'Heute Nacht sind neun Rechner im Lager ausgefallen. Alle ungefähr gleichzeitig, zwischen 2 und 3 Uhr.' },
    { typ: 'nachricht', text: 'Das Seltsame: Da war niemand. Keiner hat eine Datei geöffnet, keiner hat auf einen Link geklickt.' },

    { typ: 'frage', text: 'Was war das deiner Meinung nach?',
      optionen: [
        { text: 'Ein Virus',
          antwort: 'Wäre mein erster Gedanke gewesen. Aber ein [[Virus]] hängt sich an eine Wirtsdatei und wird erst aktiv, wenn ein <b>Mensch</b> sie öffnet. Nachts um drei hat hier niemand geklickt.' },
        { text: 'Ein Wurm', richtig: true,
          antwort: 'Genau. Ein [[Wurm]] braucht keinen Menschen. Er sucht sich selbstständig erreichbare Systeme im Netz und nutzt dafür Sicherheitslücken aus. Deshalb ging das so schnell.' },
        { text: 'Ein Trojaner',
          antwort: 'Ein [[Trojaner]] tarnt sich als nützliches Programm – aber auch den muss erst jemand starten. Und er verbreitet sich nicht von allein weiter.' }
      ] },

    { typ: 'nachricht', text: 'Ich hab mir die Rechner angeschaut. Auf allen fehlte dasselbe Sicherheitsupdate von Februar.' },

    { typ: 'frage', text: 'Was hätte das zuverlässig verhindert?',
      optionen: [
        { text: 'Ein Virenscanner',
          antwort: 'Hilft, aber nicht sicher. Ein [[Virenscanner]] erkennt <b>bekannte</b> Schädlinge. Bei etwas Neuem oder bei einem [[Rootkit]] schaut er in die Röhre.' },
        { text: 'Regelmäßige Updates', richtig: true, norm: 'BSI IT-Grundschutz',
          antwort: 'Ja. Würmer nutzen fast immer Lücken, für die es längst Patches gibt. Ein geregeltes [[Patch-Management]] ist die wirksamste Einzelmaßnahme überhaupt.' },
        { text: 'Eine Firewall',
          antwort: 'Hätte geholfen, wenn er von außen gekommen wäre. Er war aber schon im Netz. Da bremst nur noch [[Netzwerksegmentierung]] – oder eben das fehlende Update.' }
      ] },

    { typ: 'nachricht', text: 'Ich merk mir das so:' },

    { typ: 'karte', titel: 'Die drei zum Verwechseln', quelle: 'schadsoftware',
      keys: ['virus', 'wurm', 'trojaner'] },

    { typ: 'merk', text: '<b>Virus</b> = braucht Wirtsdatei und einen Menschen · <b>Wurm</b> = läuft allein durchs Netz · <b>Trojaner</b> = tarnt sich, verbreitet sich nicht selbst' },

    { typ: 'nachricht', text: 'Danke dir. Ich spiel jetzt erst mal überall die Updates ein. 🙄' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-02',
  kontakt: 'sabrina',
  titel: 'Die Gehaltsliste auf dem Netzlaufwerk',
  thema: 'Schutzziele',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Du, mir ist gerade was aufgefallen, das mir gar nicht gefällt.' },
    { typ: 'nachricht', text: 'In der Personalabteilung hat jemand eine Excel-Datei mit den Gehältern <b>aller</b> Beschäftigten auf dem gemeinsamen Netzlaufwerk abgelegt.' },
    { typ: 'nachricht', text: 'Jeder im Haus hat da Lesezugriff. Ich konnte die Datei einfach öffnen.' },

    { typ: 'frage', text: 'Welches Schutzziel ist hier in erster Linie betroffen?',
      optionen: [
        { text: 'Vertraulichkeit', richtig: true,
          antwort: 'Genau. [[Vertraulichkeit]] heißt: Informationen sind nur für Berechtigte zugänglich. Gehälter sind sensible Daten, und weil alle Lesezugriff haben, können Unbefugte sie einsehen.' },
        { text: 'Integrität',
          antwort: 'Die wäre betroffen, wenn jemand die Zahlen <b>verändert</b> hätte. Hier geht es darum, dass Unbefugte sie überhaupt <b>sehen</b> können.' },
        { text: 'Verfügbarkeit',
          antwort: 'Nein – die Datei ist ja verfügbar, sogar für zu viele. Verfügbarkeit wäre verletzt, wenn niemand mehr drankäme.' }
      ] },

    { typ: 'nachricht', text: 'Dachte ich mir. Und was schlagen wir der Personalabteilung vor?' },

    { typ: 'frage', text: 'Welche Maßnahme passt am besten?',
      optionen: [
        { text: 'Die Datei mit einem Passwort versehen',
          antwort: 'Hilft, reicht aber allein nicht. Passwörter in Excel werden weitergegeben und vergessen. Die saubere Lösung setzt eine Ebene höher an.' },
        { text: 'Zugriffsrechte nach dem Need-to-know-Prinzip', richtig: true, norm: 'Zugriffskontrolle (TOM)',
          antwort: 'Richtig. Ein [[Berechtigungskonzept]] regelt, dass nur die Personalabteilung und ggf. die Geschäftsführung lesen dürfen – also [[Need-to-know-Prinzip|so wenig Zugriff wie möglich]]. Zusätzlich kann man die Datei verschlüsseln.' },
        { text: 'Alle Beschäftigten zur Verschwiegenheit verpflichten',
          antwort: 'Die Verpflichtung gibt es ohnehin, sie ersetzt aber keine technische Beschränkung. Was niemand sehen kann, muss auch niemand verschweigen.' }
      ] },

    { typ: 'nachricht', text: 'Eine Sache noch, die bei uns schlimmer ist, als die meisten denken:' },

    { typ: 'frage', text: 'Ein Kollege wechselt die Abteilung. Was passiert mit seinen Rechten?',
      optionen: [
        { text: 'Die bleiben, man weiß ja nie',
          antwort: 'Das ist genau der Fehler, den wir hier haben. Dann sammelt jemand über Jahre Rechte an und kann irgendwann überall mitlesen – so wie bei den Gehaltsdaten.' },
        { text: 'Sie werden sofort angepasst', richtig: true,
          antwort: 'Ja. Rechte gehören bei jedem Wechsel und beim Austritt <b>sofort</b> angepasst und regelmäßig überprüft. Sonst wächst still und leise ein Berechtigungs-Wildwuchs heran.' }
      ] },

    { typ: 'merk', text: '<b>Vertraulichkeit</b> = nur Berechtigte sehen die Daten. Wirksamstes Mittel: Berechtigungskonzept nach dem <b>Need-to-know-Prinzip</b> – und Rechte bei jedem Abteilungswechsel anpassen.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-03',
  kontakt: 'sabrina',
  titel: 'Jemand hat Kontonummern geändert',
  thema: 'Schutzziele',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Schlechte Nachrichten. In der Kundendatenbank stimmen bei elf Kunden die Bankverbindungen nicht mehr.' },
    { typ: 'nachricht', text: 'Die IBANs wurden geändert – von jemandem, der dafür keine Berechtigung hatte.' },

    { typ: 'frage', text: 'Welches Schutzziel ist hier in erster Linie betroffen?',
      optionen: [
        { text: 'Integrität', richtig: true,
          antwort: 'Richtig. [[Integrität]] heißt: Daten sind korrekt, vollständig und unverändert. Hier hat ein Unbefugter sie verändert – sie sind nicht mehr vertrauenswürdig.' },
        { text: 'Vertraulichkeit',
          antwort: 'Die wäre betroffen, wenn jemand die Daten nur <b>gelesen</b> hätte. Hier wurden sie aber <b>verändert</b>.' },
        { text: 'Verfügbarkeit',
          antwort: 'Die Daten sind ja noch da und abrufbar – nur eben falsch.' }
      ] },

    { typ: 'nachricht', text: 'Die Geschäftsführung will wissen, was das für Folgen hat. Hilfst du mir?' },

    { typ: 'mehrfach', text: 'Welche Folgen drohen? (mehrere)',
      optionen: [
        { text: 'Lastschriften gehen an falsche Konten', richtig: true },
        { text: 'Finanzieller Schaden und Aufwand für die Korrektur', richtig: true },
        { text: 'Der Server fällt aus' },
        { text: 'Vertrauens- und Imageverlust bei den Kunden', richtig: true },
        { text: 'Die Daten sind unwiederbringlich gelöscht' }
      ],
      antwortRichtig: 'Genau diese drei. Für das <b>Unternehmen</b>: falsch laufende Zahlungen, Korrekturaufwand, Imageschaden, möglicherweise Haftung und Meldepflicht. Für die <b>Kunden</b>: Abbuchungen oder Erstattungen landen beim Angreifer, Ärger bei der Rückabwicklung.',
      antwortFalsch: 'Nicht ganz. Denk daran, dass die Daten weiterhin <b>da</b> sind – sie sind nur falsch. Ein Serverausfall oder eine Löschung sind etwas anderes.' },

    { typ: 'nachricht', text: 'Und wie merken wir so etwas künftig früher?' },

    { typ: 'frage', text: 'Was hilft am ehesten?',
      optionen: [
        { text: 'Protokollierung der Änderungen', richtig: true, norm: 'Eingabekontrolle (TOM)',
          antwort: 'Ja. Die [[Eingabekontrolle]] macht nachvollziehbar, <b>wer wann welche Daten</b> eingegeben, geändert oder gelöscht hat. Zusammen mit individuellen Benutzerkonten – bei einem gemeinsamen Login bringt das Protokoll nämlich nichts.' },
        { text: 'Ein stärkeres WLAN-Passwort',
          antwort: 'Das schützt das Funknetz, sagt aber nichts darüber, wer in der Datenbank was geändert hat.' },
        { text: 'Tägliche Backups',
          antwort: 'Wichtig für die Wiederherstellung, aber sie <b>melden</b> dir die Manipulation nicht. Zum Erkennen brauchst du Protokolle.' }
      ] },

    { typ: 'merk', text: '<b>Integrität</b> = Daten sind richtig und unverändert. Unbefugte Änderungen erkennt man über <b>Protokollierung</b> – aber nur mit persönlichen Benutzerkonten.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-04',
  kontakt: 'sabrina',
  titel: 'Das Krankenhaus in den Nachrichten',
  thema: 'Schutzziele',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Hast du die Meldung gesehen? Ein Krankenhaus wurde angegriffen, alle Server verschlüsselt.' },
    { typ: 'nachricht', text: 'Die Ärzte kamen tagelang nicht an die Patientendaten. Hinweise, dass Daten kopiert oder veröffentlicht wurden, gibt es aber nicht.' },

    { typ: 'frage', text: 'Welches Schutzziel ist hier in erster Linie betroffen?',
      optionen: [
        { text: 'Verfügbarkeit', richtig: true,
          antwort: 'Richtig. Die Daten sind noch da, aber niemand kommt heran – das ist [[Verfügbarkeit]]. Weil nichts auf Kopieren oder Veröffentlichen hindeutet, ist die Vertraulichkeit <b>nicht in erster Linie</b> betroffen.' },
        { text: 'Vertraulichkeit',
          antwort: 'Verständlicher Gedanke, aber: Es gibt keine Hinweise, dass jemand die Daten gelesen oder veröffentlicht hat. Das Problem ist, dass die Ärzte nicht drankommen.' },
        { text: 'Integrität',
          antwort: 'Verschlüsselte Daten sind nicht <b>verfälscht</b> – sie sind nur unlesbar. Integrität wäre betroffen, wenn jemand sie heimlich verändert hätte.' }
      ] },

    { typ: 'nachricht', text: 'Die Geschäftsführung fragt natürlich sofort: Könnte uns das auch passieren?' },

    { typ: 'mehrfach', text: 'Welche zwei Maßnahmen schützen am besten gegen so einen Ausfall? (zwei)',
      optionen: [
        { text: 'Regelmäßige, getestete Backups nach der 3-2-1-Regel, offline aufbewahrt', richtig: true },
        { text: 'Längere Passwörter' },
        { text: 'Aktuelle Updates, Virenschutz und Netzwerksegmentierung', richtig: true },
        { text: 'Mehr Speicherplatz auf dem Server' }
      ],
      antwortRichtig: 'Genau. Ein getrenntes, <b>getestetes</b> [[Backup]] bringt uns zurück in den Betrieb – ein Backup, das am Netz hängt, verschlüsselt die Ransomware gleich mit. Und Updates, Virenschutz, [[Netzwerksegmentierung]], Redundanz und Schulungen sorgen dafür, dass es gar nicht erst so weit kommt.',
      antwortFalsch: 'Fast. Überleg: Was bringt uns nach einem Totalausfall die Daten zurück – und was verhindert, dass sich so etwas überhaupt ausbreitet?' },

    { typ: 'karte', titel: 'Die 3-2-1-Regel für Backups', quelle: 'html',
      html: '<table class="t"><tr><th>Regel</th><th>Bedeutung</th></tr>' +
            '<tr><td><b>3</b> Kopien</td><td>die Originaldaten und zwei Sicherungen</td></tr>' +
            '<tr><td><b>2</b> verschiedene Medien</td><td>z. B. Festplatte und Bandlaufwerk oder Cloud</td></tr>' +
            '<tr><td><b>1</b> Kopie außer Haus</td><td>räumlich getrennt, offline oder unveränderbar</td></tr>' +
            '<tr><td>Und immer</td><td><b>Rückspielen testen</b> – ein nie getestetes Backup ist kein Backup</td></tr></table>' },

    { typ: 'frage', text: 'Noch eine Fangfrage: Ist ein RAID-Verbund ein Backup?',
      optionen: [
        { text: 'Ja, die Daten liegen doppelt',
          antwort: 'Nein, das ist die häufigste Verwechslung. Ein RAID schützt gegen den Ausfall einer <b>Festplatte</b>. Wenn Ransomware die Daten verschlüsselt oder jemand sie löscht, passiert das sauber auf allen Platten gleichzeitig.' },
        { text: 'Nein, RAID ist nur Redundanz', richtig: true,
          antwort: 'Genau. [[Redundanz]] hält den Betrieb beim Hardwaredefekt am Laufen, ein [[Backup]] holt dir einen früheren Stand zurück. Zwei verschiedene Dinge – man braucht beides.' }
      ] },

    { typ: 'merk', text: '<b>Verfügbarkeit</b> = Berechtigte kommen an die Daten, wenn sie sie brauchen. Schutz: Backup nach der <b>3-2-1-Regel</b>, offline und getestet. <b>RAID ist kein Backup.</b>' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-05',
  kontakt: 'sabrina',
  titel: 'Ein Passwort für alle',
  thema: 'Schutzmaßnahmen',
  dauer: 3,
  schritte: [
    { typ: 'nachricht', text: 'Ich räume gerade die Benutzerkonten auf und bin fassungslos. 😤' },
    { typ: 'nachricht', text: 'Im Lager benutzen alle <b>dasselbe</b> Konto mit demselben Passwort. Und das gilt gleich für mehrere Systeme.' },

    { typ: 'mehrfach', text: 'Welche Risiken entstehen dadurch? (mehrere)',
      optionen: [
        { text: 'Es ist nicht nachvollziehbar, wer was getan hat', richtig: true },
        { text: 'Wird das Passwort bekannt, stehen gleich mehrere Systeme offen', richtig: true },
        { text: 'Die Systeme werden langsamer' },
        { text: 'Unberechtigte Zugriffe bleiben unbemerkt', richtig: true },
        { text: 'Ausgeschiedene Mitarbeiter kommen weiterhin hinein', richtig: true }
      ],
      antwortRichtig: 'Alle vier, genau. Ohne persönliche Konten ist jede Protokollierung wertlos, und ein bekannt gewordenes Passwort öffnet durch die Mehrfachnutzung gleich mehrere Türen. Betroffen sind damit <b>Vertraulichkeit</b> und <b>Integrität</b>.',
      antwortFalsch: 'Fast. Die Geschwindigkeit hat damit nichts zu tun – es geht um Nachvollziehbarkeit und darum, wie weit ein einziges bekannt gewordenes Passwort reicht.' },

    { typ: 'nachricht', text: 'Ich schreibe der Geschäftsführung einen Vorschlag. Was gehört hinein?' },

    { typ: 'mehrfach', text: 'Was schlagen wir vor? (mehrere)',
      optionen: [
        { text: 'Individuelle Benutzerkonten für jede Person', richtig: true },
        { text: 'Eine Passwortrichtlinie mit langen, einmaligen Passwörtern', richtig: true },
        { text: 'Das gemeinsame Passwort alle zwei Wochen wechseln' },
        { text: 'Zwei-Faktor-Authentifizierung für kritische Systeme', richtig: true }
      ],
      antwortRichtig: 'Richtig. Persönliche Konten, eine [[Passwortrichtlinie|Richtlinie]] mit langen und <b>nicht mehrfach verwendeten</b> Passwörtern, gern mit Passwortmanager, und [[Zwei-Faktor-Authentifizierung|2FA]] dort, wo es wehtut. Ein Gemeinschaftspasswort häufiger zu wechseln macht es nicht besser – das Grundproblem bleibt.',
      antwortFalsch: 'Fast. Ein gemeinsames Passwort bleibt auch dann ein Problem, wenn man es öfter wechselt – erzwungener Wechsel gilt inzwischen ohnehin als überholt. Entscheidend sind Länge und Einmaligkeit.' },

    { typ: 'merk', text: '<b>Jede Person ihr eigenes Konto.</b> Gemeinschaftspasswörter machen Protokolle wertlos und öffnen bei einem Leck gleich mehrere Systeme. Wichtiger als häufiger Wechsel: Länge und Einmaligkeit, dazu 2FA.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-06',
  kontakt: 'sabrina',
  titel: 'Der USB-Stick im Zug',
  thema: 'Praxisfälle',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'Ein Kollege aus dem Vertrieb hat gerade angerufen. Ihm ist auf dem Heimweg ein USB-Stick abhandengekommen.' },
    { typ: 'nachricht', text: 'Unverschlüsselt. Darauf: eine Liste mit Kundennamen, Adressen, Telefonnummern und offenen Rechnungsbeträgen.' },
    { typ: 'nachricht', text: 'Und das Schlimmste: Es war die <b>einzige</b> Kopie der Liste. Ob jemand den Stick gefunden hat, wissen wir nicht.' },

    { typ: 'frage', text: 'Ist das ein Fall für den Datenschutz oder für die Informationssicherheit?',
      optionen: [
        { text: 'Nur Datenschutz, es sind ja Kundendaten',
          antwort: 'Der Datenschutz ist betroffen, ja – aber nicht nur. Dass die Daten unverschlüsselt und ohne Sicherung unterwegs waren, ist ein Versagen der technischen und organisatorischen Maßnahmen.' },
        { text: 'Beides', richtig: true,
          antwort: 'Genau. <b>Datenschutz:</b> Personenbezogene Daten sind abhandengekommen und können Unbefugten zugänglich werden – eine [[Datenpanne]] mit Risiko für die Betroffenen. <b>Informationssicherheit:</b> Die Daten waren weder verschlüsselt noch gesichert, die Maßnahmen waren also nicht angemessen.' },
        { text: 'Nur Informationssicherheit',
          antwort: 'Zu kurz gegriffen. Auf dem Stick waren <b>personenbezogene</b> Daten von Kunden – damit ist der Datenschutz unmittelbar betroffen.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Schutzziele sind gefährdet? (mehrere)',
      optionen: [
        { text: 'Vertraulichkeit', richtig: true },
        { text: 'Integrität' },
        { text: 'Verfügbarkeit', richtig: true }
      ],
      antwortRichtig: '<b>Vertraulichkeit</b>, weil die Daten unverschlüsselt sind und ein Finder sie einfach lesen kann. <b>Verfügbarkeit</b>, weil es die einzige Kopie war – uns fehlt die Liste jetzt. Die <b>Integrität</b> ist nicht unmittelbar betroffen; sie wäre es erst, wenn jemand die Daten verändert und den Stick wieder in Umlauf bringt.',
      antwortFalsch: 'Nicht ganz. Überleg: Kann ein Finder die Daten <b>lesen</b>? Und haben <b>wir</b> die Liste noch? Und ist irgendetwas <b>verfälscht</b> worden?' },

    { typ: 'frage', text: 'Was hätte den Schaden verhindert oder kleiner gemacht?',
      optionen: [
        { text: 'Den Stick beschriften, damit der Finder ihn zurückgibt',
          antwort: '😄 Nett gedacht, aber der Finder kann die Daten trotzdem lesen. Die Lösung muss dafür sorgen, dass der Inhalt nichts wert ist.' },
        { text: 'Verschlüsselung und eine zentrale Kopie', richtig: true, norm: 'Art. 32 DSGVO',
          antwort: 'Genau. <b>Verschlüsselung</b> macht die Daten für den Finder wertlos – das senkt das Risiko so stark, dass eine Benachrichtigung der Betroffenen oft entfällt. Und die Daten gehören auf einen zentralen Server, auf den man per [[VPN]] zugreift, statt als einzige Kopie auf einen Stick. Dazu eine Richtlinie für mobile Datenträger.' }
      ] },

    { typ: 'merk', text: 'Verlorener Datenträger = <b>Vertraulichkeit</b> (fremde können lesen) + <b>Verfügbarkeit</b> (wir haben die Daten nicht mehr). Verschlüsselung entschärft beides erheblich.' },

    { typ: 'nachricht', text: 'Ich melde das sofort an Herrn Olschewski weiter. Danke dir!' }
  ]
});
