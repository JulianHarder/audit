/* ===========================================================
   AUDIT – data/dialoge-sabrina.js
   Sabrina Köster, IT-Abteilung. Duzt dich, schreibt entspannt
   und direkt, aber nicht kumpelhaft – sie ist Kollegin, nicht
   beste Freundin. Vollständige Sätze, trockener Humor.
   Themen: Schadsoftware, Schutzmaßnahmen, Schutzziele im Alltag.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'sab-01',
  kontakt: 'sabrina',
  titel: 'Neun Rechner über Nacht',
  thema: 'Schadsoftware',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Moin. Hast du kurz? Ich hab hier was, das mir Kopfzerbrechen macht.' },
    { typ: 'nachricht', text: 'Heute Nacht sind neun Rechner im Lager ausgefallen. Alle ungefähr gleichzeitig, zwischen 2 und 3 Uhr.' },
    { typ: 'nachricht', text: 'Das Seltsame daran: Da war niemand. Keiner hat eine Datei geöffnet, keiner hat auf einen Link geklickt. Die Halle war leer.' },

    { typ: 'frage', text: 'Was war das deiner Meinung nach?',
      optionen: [
        { text: 'Ein Virus',
          antwort: 'Wäre mein erster Gedanke gewesen. Aber ein [[Virus]] hängt sich an eine Wirtsdatei und wird erst aktiv, wenn ein <b>Mensch</b> sie öffnet. Nachts um drei hat hier niemand geklickt.' },
        { text: 'Ein Wurm', richtig: true,
          antwort: 'Genau. Ein [[Wurm]] braucht keinen Menschen. Er sucht sich selbstständig erreichbare Systeme im Netz und nutzt Sicherheitslücken. Deshalb ging das so schnell und gleichzeitig.' },
        { text: 'Ein Trojaner',
          antwort: 'Ein [[Trojaner]] tarnt sich als nützliches Programm – aber auch den muss erst jemand starten. Und er verbreitet sich nicht von allein weiter.' }
      ] },

    { typ: 'nachricht', text: 'Ich hab mir die Rechner angeschaut. Auf allen fehlte dasselbe Sicherheitsupdate von Februar.' },
    { typ: 'nachricht', text: 'Februar. Wir haben Oktober. 🙃' },

    { typ: 'frage', text: 'Was hätte das zuverlässig verhindert?',
      optionen: [
        { text: 'Ein Virenscanner',
          antwort: 'Hilft, aber nicht zuverlässig. Ein [[Virenscanner]] erkennt vor allem <b>bekannte</b> Schädlinge. Bei etwas Neuem schaut er in die Röhre.' },
        { text: 'Regelmäßige Updates', richtig: true, norm: 'BSI IT-Grundschutz',
          antwort: 'Ja. Würmer nutzen fast immer Lücken, für die es längst Patches gibt. Ein geregeltes [[Patch-Management]] ist die wirksamste Einzelmaßnahme, die wir haben.' },
        { text: 'Eine Firewall',
          antwort: 'Hätte geholfen, wenn er von außen gekommen wäre. Er war aber schon im Netz. Dann bremst nur noch [[Netzwerksegmentierung]] – oder eben das fehlende Update.' }
      ] },

    { typ: 'nachricht', text: 'Die Geschäftsführung fragt jetzt natürlich, warum neun Rechner betroffen waren und nicht einer.' },

    { typ: 'frage', text: 'Was wäre die richtige Antwort?',
      optionen: [
        { text: 'Weil das Lagernetz nicht vom Rest getrennt ist', richtig: true,
          antwort: 'Richtig. Alles hängt bei uns in einem flachen Netz. Mit [[Netzwerksegmentierung]] wäre er im Lagersegment geblieben, statt sich auf alles Erreichbare zu verteilen. Das steht ab heute auf meiner Liste.' },
        { text: 'Weil die Rechner alt sind',
          antwort: 'Das Alter ist nicht das Problem – das fehlende Update und das flache Netz sind es. Ein Wurm erreicht alles, was er erreichen <b>kann</b>.' }
      ] },

    { typ: 'karte', titel: 'Die drei zum Verwechseln', quelle: 'schadsoftware',
      keys: ['virus', 'wurm', 'trojaner'] },

    { typ: 'merk', text: '<b>Virus</b> = braucht Wirtsdatei und einen Menschen · <b>Wurm</b> = läuft allein durchs Netz · <b>Trojaner</b> = tarnt sich, verbreitet sich nicht selbst' },

    { typ: 'nachricht', text: 'Noch eine Sache, die mir dabei aufgefallen ist. Guck mal auf das hier:' },
    { typ: 'nachricht', text: 'Auf zwei der Rechner lief ein Dienst, der nach außen Verbindungen aufgebaut hat. Zu einer Adresse, die ich nicht kenne.' },

    { typ: 'frage', text: 'Was könnte das sein?',
      optionen: [
        { text: 'Die Rechner sind Teil eines Botnetzes', richtig: true, norm: 'Command & Control',
          antwort: 'Davon gehe ich aus. Ein [[Bot]] meldet sich bei einem Steuerserver und wartet auf Befehle – Spam versenden, [[DDoS]] mitlaufen. Der Schaden entsteht dann bei Dritten, verantwortlich sind trotzdem wir.' },
        { text: 'Ein normales Windows-Update',
          antwort: 'Updates gehen an bekannte Adressen von Microsoft. Hier läuft etwas zu einem Server, den ich nirgends zuordnen kann – das sieht nach einem Steuerserver aus.' }
      ] },

    { typ: 'frage', text: 'Was begrenzt so etwas?',
      optionen: [
        { text: 'Eine Firewall, die ausgehende Verbindungen kontrolliert', richtig: true,
          antwort: 'Genau. Die meisten denken bei [[Firewall]] nur an „von außen rein". Dabei ist die Kontrolle in die <b>andere</b> Richtung oft das, was den Schaden begrenzt: Kein Steuerserver, keine Befehle.' },
        { text: 'Ein stärkeres WLAN-Passwort',
          antwort: 'Das schützt das Funknetz. Die Verbindung geht hier aber von einem befallenen Rechner nach draußen – da hilft nur Kontrolle am Netzübergang.' }
      ] },

    { typ: 'merk', text: 'Eine <b>Firewall</b> kontrolliert nicht nur den Verkehr von außen nach innen, sondern auch von innen nach außen – das begrenzt Botnetze und Datenabfluss.' },

    { typ: 'nachricht', text: 'Danke dir. Ich spiele jetzt überall die Updates ein und schreibe der Geschäftsführung einen Vorschlag zur Segmentierung. Wünsch mir Glück. 🙄' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-02',
  kontakt: 'sabrina',
  titel: 'Die Gehaltsliste auf dem Netzlaufwerk',
  thema: 'Schutzziele',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Du, mir ist gerade etwas aufgefallen, das mir gar nicht gefällt.' },
    { typ: 'nachricht', text: 'In der Personalabteilung hat jemand eine Excel-Datei mit den Gehältern <b>aller</b> Beschäftigten auf dem gemeinsamen Netzlaufwerk abgelegt.' },
    { typ: 'nachricht', text: 'Jeder im Haus hat da Lesezugriff. Ich konnte die Datei einfach öffnen. Hab sie natürlich sofort wieder zugemacht.' },

    { typ: 'frage', text: 'Welches Schutzziel ist hier in erster Linie betroffen?',
      optionen: [
        { text: 'Vertraulichkeit', richtig: true,
          antwort: 'Genau. [[Vertraulichkeit]] heißt: Informationen sind nur für Berechtigte zugänglich. Gehälter sind sensibel, und weil alle Lesezugriff haben, können Unbefugte sie einsehen.' },
        { text: 'Integrität',
          antwort: 'Die wäre betroffen, wenn jemand die Zahlen <b>verändert</b> hätte. Hier geht es darum, dass Unbefugte sie überhaupt <b>sehen</b> können.' },
        { text: 'Verfügbarkeit',
          antwort: 'Die Datei ist ja verfügbar – sogar für deutlich zu viele. Verfügbarkeit wäre verletzt, wenn niemand mehr drankäme.' }
      ] },

    { typ: 'nachricht', text: 'Dachte ich mir. Und was schlagen wir der Personalabteilung vor?' },

    { typ: 'frage', text: 'Welche Maßnahme passt am besten?',
      optionen: [
        { text: 'Die Datei mit einem Passwort versehen',
          antwort: 'Hilft ein bisschen, reicht aber nicht. Excel-Passwörter werden weitergegeben, vergessen und sind technisch nicht besonders stark. Die saubere Lösung setzt eine Ebene höher an.' },
        { text: 'Zugriffsrechte nach dem Need-to-know-Prinzip', richtig: true, norm: 'Zugriffskontrolle (TOM)',
          antwort: 'Richtig. Ein [[Berechtigungskonzept]] regelt, dass nur die Personalabteilung und gegebenenfalls die Geschäftsführung lesen dürfen – [[Need-to-know-Prinzip|so wenig Zugriff wie möglich]]. Zusätzlich kann man die Datei verschlüsseln.' },
        { text: 'Alle Beschäftigten zur Verschwiegenheit verpflichten',
          antwort: 'Die Verpflichtung gibt es ohnehin, und sie ist auch sinnvoll. Aber sie ersetzt keine technische Beschränkung: Was niemand sehen kann, muss auch niemand verschweigen.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt kommt der Teil, der mich wirklich ärgert.' },
    { typ: 'nachricht', text: 'Ich hab mir die Berechtigungen auf dem Laufwerk mal insgesamt angesehen. Ein Kollege, der vor zwei Jahren von der Buchhaltung in den Versand gewechselt ist, hat immer noch Zugriff auf die Buchhaltungsordner.' },

    { typ: 'frage', text: 'Was läuft da schief?',
      optionen: [
        { text: 'Rechte werden bei einem Wechsel nicht angepasst', richtig: true,
          antwort: 'Genau. Jeder Wechsel bringt neue Rechte, aber niemand nimmt die alten weg. Nach ein paar Jahren haben langjährige Kollegen Zugriff auf halb Hameln. Man nennt das Berechtigungs-Wildwuchs.' },
        { text: 'Er hat sich die Rechte selbst verschafft',
          antwort: 'So dramatisch ist es nicht. Er hat sie damals legitim bekommen – nur hat sie ihm beim Wechsel niemand wieder <b>entzogen</b>.' }
      ] },

    { typ: 'frage', text: 'Was gehört in den Prozess?',
      optionen: [
        { text: 'Rechte bei Wechsel und Austritt sofort anpassen, regelmäßig prüfen', richtig: true,
          antwort: 'So machen wir es künftig. Dazu gehört auch eine regelmäßige <b>Rezertifizierung</b>: Einmal im Jahr bestätigen die Abteilungsleiter, wer wirklich noch welchen Zugriff braucht.' },
        { text: 'Einmal im Jahr alle Rechte löschen und neu vergeben',
          antwort: 'Nachvollziehbarer Gedanke, aber in der Praxis legt das den Betrieb lahm. Üblich ist: bei <b>jedem Wechsel sofort</b> anpassen, dazu regelmäßig überprüfen.' }
      ] },

    { typ: 'frage', text: 'Noch eine: Wer entscheidet eigentlich, wer auf die Personaldaten zugreifen darf?',
      optionen: [
        { text: 'Die Fachabteilung als Dateneigentümer, nicht die IT', richtig: true,
          antwort: 'Richtig, und das wird oft verwechselt. Wir in der IT <b>setzen um</b>, aber ob jemand die Gehaltsdaten sehen darf, entscheidet die Personalleitung. Sonst vergibt die IT nach Gefühl Rechte für Daten, die sie gar nicht kennt.' },
        { text: 'Die IT-Abteilung, sie verwaltet ja die Systeme',
          antwort: 'Das machen viele so – und es ist falsch. Die IT setzt um, die <b>Fachabteilung</b> entscheidet über ihre eigenen Daten. Sonst trägt die IT eine Verantwortung, die sie inhaltlich nicht beurteilen kann.' }
      ] },

    { typ: 'merk', text: '<b>Vertraulichkeit</b> = nur Berechtigte sehen die Daten. Mittel: [[Berechtigungskonzept]] nach Need-to-know, Rechte bei jedem Wechsel anpassen, regelmäßig prüfen. Die <b>Fachabteilung</b> entscheidet über ihre Daten, die IT setzt um.' },

    { typ: 'nachricht', text: 'Ich nehme die Datei jetzt erst mal aus dem allgemeinen Laufwerk raus und rede mit der Personalleitung. Danke fürs Mitdenken.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-03',
  kontakt: 'sabrina',
  titel: 'Jemand hat Kontonummern geändert',
  thema: 'Schutzziele',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Schlechte Nachrichten. In der Kundendatenbank stimmen bei elf Kunden die Bankverbindungen nicht mehr.' },
    { typ: 'nachricht', text: 'Die IBANs wurden geändert – von jemandem ohne Berechtigung dafür.' },

    { typ: 'frage', text: 'Welches Schutzziel ist hier in erster Linie betroffen?',
      optionen: [
        { text: 'Integrität', richtig: true,
          antwort: 'Richtig. [[Integrität]] heißt: Daten sind korrekt, vollständig und unverändert. Hier hat ein Unbefugter sie verändert – sie sind nicht mehr vertrauenswürdig.' },
        { text: 'Vertraulichkeit',
          antwort: 'Die wäre betroffen, wenn jemand die Daten nur <b>gelesen</b> hätte. Hier wurden sie <b>verändert</b>.' },
        { text: 'Verfügbarkeit',
          antwort: 'Die Daten sind noch da und abrufbar – nur eben falsch. Das ist ein anderes Ziel.' }
      ] },

    { typ: 'nachricht', text: 'Die Geschäftsführung will wissen, was das für Folgen hat. Hilfst du mir, das zu sortieren?' },

    { typ: 'mehrfach', text: 'Welche Folgen drohen? (mehrere)',
      optionen: [
        { text: 'Lastschriften gehen an falsche Konten', richtig: true },
        { text: 'Finanzieller Schaden und Aufwand für die Korrektur', richtig: true },
        { text: 'Der Server fällt aus' },
        { text: 'Vertrauens- und Imageverlust bei den Kunden', richtig: true },
        { text: 'Die Daten sind unwiederbringlich gelöscht' }
      ],
      antwortRichtig: 'Genau diese drei. Für <b>uns</b>: falsch laufende Zahlungen, Korrekturaufwand, Imageschaden, möglicherweise Haftung und Meldepflicht. Für die <b>Kunden</b>: Abbuchungen oder Erstattungen landen beim Angreifer, dazu Ärger bei der Rückabwicklung.',
      antwortFalsch: 'Denk daran, dass die Daten weiterhin <b>da</b> sind – sie sind nur falsch. Ein Serverausfall oder eine Löschung wäre etwas anderes.' },

    { typ: 'nachricht', text: 'Und jetzt die Frage, die mich nachts wach hält: Wie merken wir so etwas künftig früher?' },

    { typ: 'frage', text: 'Was hilft am ehesten?',
      optionen: [
        { text: 'Protokollierung der Änderungen', richtig: true, norm: 'Eingabekontrolle (TOM)',
          antwort: 'Ja. Die [[Eingabekontrolle]] macht nachvollziehbar, <b>wer wann welche Daten</b> geändert hat. Zusammen mit individuellen Benutzerkonten – bei einem gemeinsamen Login bringt das Protokoll nämlich gar nichts.' },
        { text: 'Tägliche Backups',
          antwort: 'Wichtig für die Wiederherstellung, aber sie <b>melden</b> dir die Manipulation nicht. Zum Erkennen brauchst du Protokolle.' },
        { text: 'Ein stärkeres WLAN-Passwort',
          antwort: 'Schützt das Funknetz, sagt aber nichts darüber, wer in der Datenbank was geändert hat.' }
      ] },

    { typ: 'frage', text: 'Und was hätte die Änderung von vornherein verhindert?',
      optionen: [
        { text: 'Ein Berechtigungskonzept – er hätte es gar nicht gedurft', richtig: true,
          antwort: 'Richtig, und das ist der wichtigere Punkt. Protokolle zeigen dir hinterher, was passiert ist. Ein sauberes [[Berechtigungskonzept]] sorgt dafür, dass es gar nicht erst passiert. Bei Bankdaten zusätzlich: Änderungen nur mit zweiter Freigabe.' },
        { text: 'Ein tägliches Backup',
          antwort: 'Das hilft beim Zurückholen, verhindert aber nichts. Gefragt war, was die Änderung <b>von vornherein</b> unmöglich gemacht hätte.' }
      ] },

    { typ: 'frage', text: 'Bei Änderungen an Bankdaten – was ist dort üblich?',
      optionen: [
        { text: 'Vier-Augen-Prinzip', richtig: true,
          antwort: 'Genau. Eine zweite Person gibt frei. Das kostet dreißig Sekunden und verhindert sowohl Betrug als auch Tippfehler. Bei uns läuft das ab nächster Woche so.' },
        { text: 'Die Änderung automatisch per Mail bestätigen lassen',
          antwort: 'Ergänzend sinnvoll – aber die Mail geht an die <b>neue</b> Adresse, wenn der Angreifer die auch geändert hat. Der verlässlichere Weg ist das [[Vier-Augen-Prinzip]].' }
      ] },

    { typ: 'frage', text: 'Ist das eigentlich auch ein Datenschutzthema?',
      optionen: [
        { text: 'Ja, es ist eine Datenpanne', richtig: true, norm: 'Art. 33 DSGVO',
          antwort: 'Richtig, und das wird gern übersehen. Eine [[Datenpanne]] ist nicht nur „jemand hat etwas gesehen" – auch die unbefugte <b>Veränderung</b> personenbezogener Daten gehört dazu. Herr Olschewski prüft gerade die Meldepflicht.' },
        { text: 'Nein, es wurden keine Daten gestohlen',
          antwort: 'Doch. Eine Verletzung des Schutzes personenbezogener Daten umfasst auch <b>Veränderung</b>, nicht nur Offenlegung. Das ist meldepflichtig, wenn ein Risiko besteht.' }
      ] },

    { typ: 'merk', text: '<b>Integrität</b> = Daten sind richtig und unverändert. Erkennen über <b>Protokollierung</b> (nur mit persönlichen Konten sinnvoll), verhindern über <b>Berechtigungen</b> und <b>Vier-Augen-Prinzip</b>. Unbefugte Änderung ist auch eine Datenpanne.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-04',
  kontakt: 'sabrina',
  titel: 'Das Krankenhaus in den Nachrichten',
  thema: 'Schutzziele',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Hast du die Meldung heute Morgen gesehen? Ein Krankenhaus wurde angegriffen, alle Server verschlüsselt.' },
    { typ: 'nachricht', text: 'Die Ärzte kamen tagelang nicht an die Patientendaten. Notaufnahme abgemeldet, OPs verschoben.' },
    { typ: 'nachricht', text: 'Hinweise, dass Daten kopiert oder veröffentlicht wurden, gibt es bisher nicht.' },

    { typ: 'frage', text: 'Welches Schutzziel ist hier in erster Linie betroffen?',
      optionen: [
        { text: 'Verfügbarkeit', richtig: true,
          antwort: 'Richtig. Die Daten sind noch da, aber niemand kommt heran – das ist [[Verfügbarkeit]]. Weil nichts auf Kopieren oder Veröffentlichen hindeutet, ist die Vertraulichkeit <b>nicht in erster Linie</b> betroffen.' },
        { text: 'Vertraulichkeit',
          antwort: 'Verständlicher Gedanke bei Patientendaten. Aber: Es gibt keine Hinweise, dass jemand sie gelesen oder veröffentlicht hat. Das Problem ist, dass die Ärzte nicht drankommen.' },
        { text: 'Integrität',
          antwort: 'Verschlüsselte Daten sind nicht <b>verfälscht</b> – sie sind unlesbar. Integrität wäre betroffen, wenn jemand sie heimlich verändert hätte.' }
      ] },

    { typ: 'nachricht', text: 'Frau Hagedorn hat mich vor zehn Minuten gefragt, ob uns das auch passieren könnte. Ich hab gesagt: ja, jederzeit.' },
    { typ: 'nachricht', text: 'Sie will jetzt wissen, was wir brauchen. Ich schreib die Liste – hilf mir beim Priorisieren.' },

    { typ: 'mehrfach', text: 'Welche zwei Maßnahmen schützen am besten gegen so einen Ausfall? (zwei)',
      optionen: [
        { text: 'Regelmäßige, getestete Backups nach der 3-2-1-Regel, offline aufbewahrt', richtig: true },
        { text: 'Längere Passwörter' },
        { text: 'Aktuelle Updates, Virenschutz und Netzwerksegmentierung', richtig: true },
        { text: 'Mehr Speicherplatz auf dem Server' }
      ],
      antwortRichtig: 'Genau. Ein getrenntes, <b>getestetes</b> [[Backup]] bringt uns zurück in den Betrieb – ein Backup am Netz verschlüsselt die Ransomware gleich mit. Und Updates, Virenschutz, [[Netzwerksegmentierung]], Redundanz und Schulungen sorgen dafür, dass es gar nicht erst so weit kommt.',
      antwortFalsch: 'Überleg: Was bringt uns nach einem Totalausfall die Daten <b>zurück</b> – und was verhindert, dass sich so etwas überhaupt <b>ausbreitet</b>?' },

    { typ: 'karte', titel: 'Die 3-2-1-Regel für Backups', quelle: 'html',
      html: '<table class="t"><tr><th>Regel</th><th>Bedeutung</th></tr>' +
            '<tr><td><b>3</b> Kopien</td><td>die Originaldaten und zwei Sicherungen</td></tr>' +
            '<tr><td><b>2</b> verschiedene Medien</td><td>z. B. Festplatte und Band oder Cloud</td></tr>' +
            '<tr><td><b>1</b> Kopie außer Haus</td><td>räumlich getrennt, offline oder unveränderbar</td></tr>' +
            '<tr><td>Und immer</td><td><b>Rückspielen testen</b> – ein nie getestetes Backup ist kein Backup</td></tr></table>' },

    { typ: 'frage', text: 'Fangfrage: Ist ein RAID-Verbund ein Backup?',
      optionen: [
        { text: 'Nein, RAID ist nur Redundanz', richtig: true,
          antwort: 'Genau. [[Redundanz]] hält den Betrieb beim Hardwaredefekt am Laufen, ein [[Backup]] holt dir einen früheren Stand zurück. Zwei verschiedene Dinge – man braucht beides.' },
        { text: 'Ja, die Daten liegen doppelt',
          antwort: 'Die häufigste Verwechslung überhaupt. Ein RAID schützt gegen den Ausfall einer <b>Festplatte</b>. Wenn Ransomware die Daten verschlüsselt oder jemand sie löscht, passiert das sauber auf allen Platten gleichzeitig.' }
      ] },

    { typ: 'frage', text: 'Unser Backup läuft nachts auf ein NAS im selben Serverraum. Wo ist das Problem?',
      optionen: [
        { text: 'Es hängt am Netz und steht am selben Ort', richtig: true,
          antwort: 'Beides. Am Netz heißt: Ransomware verschlüsselt es mit. Am selben Ort heißt: Bei Feuer oder Wasserschaden ist beides weg. Deshalb <b>eine Kopie außer Haus</b> und mindestens eine offline oder unveränderbar.' },
        { text: 'Gar keins, Hauptsache es läuft',
          antwort: 'Leider doch zwei: Ein Backup am <b>Netz</b> wird von Ransomware mitverschlüsselt, und am <b>selben Ort</b> hilft es bei Feuer oder Wasser nicht.' }
      ] },

    { typ: 'frage', text: 'Wie oft sollte man das Zurückspielen testen?',
      optionen: [
        { text: 'Regelmäßig und dokumentiert', richtig: true,
          antwort: 'Genau. Ein Sicherungsjob, der seit Monaten still scheitert, sieht bis zum Ernstfall aus wie ein funktionierendes Backup. Deshalb: Rückspieltest mit Protokoll und Überwachung der Sicherungsläufe.' },
        { text: 'Einmal beim Einrichten reicht',
          antwort: 'Das ist genau die Falle. Bänder altern, Jobs scheitern still, Datenmengen wachsen. Ohne <b>regelmäßigen</b> Test weißt du erst im Ernstfall, ob es funktioniert.' }
      ] },

    { typ: 'nachricht', text: 'Eine Sache noch, die bei Ransomware heute dazugehört und früher nicht so war:' },

    { typ: 'frage', text: 'Was machen Angreifer oft zusätzlich zur Verschlüsselung?',
      optionen: [
        { text: 'Sie kopieren die Daten vorher und drohen mit Veröffentlichung', richtig: true, norm: 'doppelte Erpressung',
          antwort: 'Richtig, man nennt das <b>doppelte Erpressung</b>. Damit ist dann auch die [[Vertraulichkeit]] betroffen – und ein Backup allein hilft nicht mehr gegen die Drohung. Deshalb ist Verschlüsselung der Daten im Ruhezustand so wichtig.' },
        { text: 'Sie löschen die Daten endgültig',
          antwort: 'Das wäre für sie wirtschaftlich unsinnig – sie wollen ja Geld. Üblich ist, die Daten vorher zu <b>kopieren</b> und mit Veröffentlichung zu drohen.' }
      ] },

    { typ: 'merk', text: '<b>Verfügbarkeit</b> = Berechtigte kommen an die Daten. Schutz: Backup nach der <b>3-2-1-Regel</b>, offline und <b>getestet</b>. <b>RAID ist kein Backup.</b> Bei doppelter Erpressung ist zusätzlich die Vertraulichkeit betroffen.' },

    { typ: 'nachricht', text: 'Gut. Ich geh das mit Frau Hagedorn durch. Wenn die Nachricht aus dem Krankenhaus etwas Gutes hat, dann dass ich jetzt Budget bekomme. 😐' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-05',
  kontakt: 'sabrina',
  titel: 'Ein Passwort für alle',
  thema: 'Schutzmaßnahmen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Ich räume gerade die Benutzerkonten auf und bin fassungslos.' },
    { typ: 'nachricht', text: 'Im Lager benutzen alle <b>dasselbe</b> Konto mit demselben Passwort. Und das gilt gleich für mehrere Systeme.' },
    { typ: 'nachricht', text: 'Das Passwort steht übrigens auf einem Zettel am Monitor. Natürlich.' },

    { typ: 'mehrfach', text: 'Welche Risiken entstehen dadurch? (mehrere)',
      optionen: [
        { text: 'Es ist nicht nachvollziehbar, wer was getan hat', richtig: true },
        { text: 'Wird das Passwort bekannt, stehen gleich mehrere Systeme offen', richtig: true },
        { text: 'Die Systeme werden langsamer' },
        { text: 'Unberechtigte Zugriffe bleiben unbemerkt', richtig: true },
        { text: 'Ausgeschiedene Mitarbeiter kommen weiterhin hinein', richtig: true }
      ],
      antwortRichtig: 'Alle vier. Ohne persönliche Konten ist jede Protokollierung wertlos, und ein bekannt gewordenes Passwort öffnet durch die Mehrfachnutzung gleich mehrere Türen. Betroffen sind damit <b>Vertraulichkeit</b> und <b>Integrität</b>.',
      antwortFalsch: 'Die Geschwindigkeit hat damit nichts zu tun. Es geht um Nachvollziehbarkeit und darum, wie weit ein einziges bekannt gewordenes Passwort reicht.' },

    { typ: 'nachricht', text: 'Ich schreibe der Geschäftsführung einen Vorschlag. Was gehört hinein?' },

    { typ: 'mehrfach', text: 'Was schlagen wir vor? (mehrere)',
      optionen: [
        { text: 'Individuelle Benutzerkonten für jede Person', richtig: true },
        { text: 'Eine Passwortrichtlinie mit langen, einmaligen Passwörtern', richtig: true },
        { text: 'Das gemeinsame Passwort alle zwei Wochen wechseln' },
        { text: 'Zwei-Faktor-Authentifizierung für kritische Systeme', richtig: true }
      ],
      antwortRichtig: 'Richtig. Persönliche Konten, eine [[Passwortrichtlinie]] mit langen und <b>nicht mehrfach verwendeten</b> Passwörtern, gern mit Passwortmanager, und [[Zwei-Faktor-Authentifizierung|2FA]] dort, wo es wehtut.',
      antwortFalsch: 'Ein Gemeinschaftspasswort bleibt auch dann ein Problem, wenn man es öfter wechselt – das Grundproblem ist, dass es <b>gemeinsam</b> ist.' },

    { typ: 'nachricht', text: 'Zur Passwortrichtlinie hab ich noch eine Frage, da bin ich selbst unsicher.' },

    { typ: 'frage', text: 'Erzwungener Passwortwechsel alle 30 Tage – gut oder schlecht?',
      optionen: [
        { text: 'Gilt heute als überholt', richtig: true, norm: 'BSI-Empfehlung',
          antwort: 'Richtig, und das überrascht viele. Wer monatlich wechseln muss, landet bei <b>Sommer2026!</b>, <b>Herbst2026!</b> und schreibt es auf. Wichtiger sind <b>Länge und Einmaligkeit</b> – gewechselt wird, wenn ein Verdacht besteht.' },
        { text: 'Unbedingt nötig, am besten alle 14 Tage',
          antwort: 'Das war lange die Lehrmeinung, gilt heute aber als überholt. Häufiger Zwangswechsel führt zu vorhersehbaren Mustern. Entscheidend sind <b>Länge</b> und dass das Passwort nirgends sonst benutzt wird.' }
      ] },

    { typ: 'frage', text: 'Was sind die drei Faktoren bei der Authentifizierung?',
      optionen: [
        { text: 'Wissen, Besitz, Biometrie', richtig: true,
          antwort: 'Genau: <b>Wissen</b> (Passwort, PIN), <b>Besitz</b> (Token, Chipkarte, Handy) und <b>Sein</b> bzw. Biometrie (Fingerabdruck, Gesicht). Bei [[Zwei-Faktor-Authentifizierung|2FA]] kombiniert man zwei <b>verschiedene</b> davon.' },
        { text: 'Passwort, PIN, Sicherheitsfrage',
          antwort: 'Das sind alles Varianten von <b>Wissen</b> – drei Passwörter sind kein Mehrfaktor. Die Faktoren sind: Wissen, Besitz und Biometrie.' }
      ] },

    { typ: 'frage', text: 'Passwort plus Sicherheitsfrage – ist das 2FA?',
      optionen: [
        { text: 'Nein, beides ist Wissen', richtig: true,
          antwort: 'Richtig. Beides steckt im Kopf und kann auf demselben Weg abgegriffen werden. Echte 2FA braucht zwei <b>unterschiedliche</b> Faktoren, also zum Beispiel Passwort plus Code aus der App.' },
        { text: 'Ja, es sind zwei Abfragen',
          antwort: 'Zwei Abfragen sind noch keine zwei Faktoren. Passwort und Sicherheitsfrage sind beide <b>Wissen</b> – wer das eine abgreift, bekommt oft auch das andere.' }
      ] },

    { typ: 'merk', text: '<b>Jede Person ihr eigenes Konto.</b> Wichtiger als häufiger Wechsel: Länge und Einmaligkeit. Faktoren: <b>Wissen · Besitz · Biometrie</b> – 2FA braucht zwei verschiedene davon.' },

    { typ: 'nachricht', text: 'Danke. Ich bestelle Hardware-Token für den Serverzugriff. Und den Zettel am Monitor nehme ich persönlich ab. 🙂' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-06',
  kontakt: 'sabrina',
  titel: 'Der USB-Stick im Zug',
  thema: 'Praxisfälle',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Ein Kollege aus dem Vertrieb hat gerade angerufen. Ihm ist auf dem Heimweg ein USB-Stick abhandengekommen.' },
    { typ: 'nachricht', text: 'Unverschlüsselt. Darauf: eine Liste mit Kundennamen, Adressen, Telefonnummern und offenen Rechnungsbeträgen.' },
    { typ: 'nachricht', text: 'Und das Beste: Es war die <b>einzige</b> Kopie der Liste. Ob jemand den Stick gefunden hat, wissen wir nicht.' },

    { typ: 'frage', text: 'Ist das ein Fall für den Datenschutz oder für die Informationssicherheit?',
      optionen: [
        { text: 'Beides', richtig: true,
          antwort: 'Genau. <b>Datenschutz:</b> Personenbezogene Daten sind abhandengekommen und können Unbefugten zugänglich werden – eine [[Datenpanne]] mit Risiko für die Betroffenen. <b>Informationssicherheit:</b> Die Daten waren weder verschlüsselt noch gesichert, die Maßnahmen waren also nicht angemessen.' },
        { text: 'Nur Datenschutz, es sind ja Kundendaten',
          antwort: 'Der Datenschutz ist betroffen, aber nicht nur. Dass die Daten unverschlüsselt und ohne Sicherung unterwegs waren, ist ein Versagen der technischen und organisatorischen Maßnahmen.' },
        { text: 'Nur Informationssicherheit',
          antwort: 'Zu kurz gegriffen. Auf dem Stick waren <b>personenbezogene</b> Daten von Kunden – damit ist der Datenschutz unmittelbar betroffen.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Schutzziele sind gefährdet? (mehrere)',
      optionen: [
        { text: 'Vertraulichkeit', richtig: true },
        { text: 'Integrität' },
        { text: 'Verfügbarkeit', richtig: true }
      ],
      antwortRichtig: '<b>Vertraulichkeit</b>, weil die Daten unverschlüsselt sind und ein Finder sie einfach lesen kann. <b>Verfügbarkeit</b>, weil es die einzige Kopie war. Die <b>Integrität</b> ist nicht unmittelbar betroffen – sie wäre es erst, wenn jemand die Daten verändert und den Stick wieder in Umlauf bringt.',
      antwortFalsch: 'Überleg: Kann ein Finder die Daten <b>lesen</b>? Haben <b>wir</b> die Liste noch? Und ist irgendetwas <b>verfälscht</b> worden?' },

    { typ: 'frage', text: 'Was hätte den Schaden verhindert oder kleiner gemacht?',
      optionen: [
        { text: 'Verschlüsselung und eine zentrale Kopie', richtig: true, norm: 'Art. 32 DSGVO',
          antwort: 'Genau. <b>Verschlüsselung</b> macht die Daten für den Finder wertlos – das senkt das Risiko so stark, dass eine Benachrichtigung der Betroffenen oft entfällt. Und die Daten gehören auf einen zentralen Server, auf den man per [[VPN]] zugreift.' },
        { text: 'Den Stick beschriften, damit der Finder ihn zurückgibt',
          antwort: 'Nett gedacht, aber der Finder kann die Daten trotzdem lesen – und weiß dank Beschriftung sogar, wo sie herkommen. Die Lösung muss den Inhalt wertlos machen.' }
      ] },

    { typ: 'nachricht', text: 'Ich schreib daraus eine Richtlinie für mobile Datenträger. Was sollte da drinstehen?' },

    { typ: 'mehrfach', text: 'Was gehört in die Richtlinie? (mehrere)',
      optionen: [
        { text: 'Nur verschlüsselte, dienstliche Datenträger verwenden', richtig: true },
        { text: 'Keine einzigen Kopien auf mobilen Medien', richtig: true },
        { text: 'Verlust sofort melden – ohne Angst vor Ärger', richtig: true },
        { text: 'USB-Sticks komplett verbieten' },
        { text: 'Gefundene fremde Sticks niemals anstecken', richtig: true }
      ],
      antwortRichtig: 'Gute Liste. Der letzte Punkt wird oft vergessen: Ein „gefundener" Stick auf dem Parkplatz ist ein klassischer Angriffsweg – manche enthalten Schadsoftware, manche melden sich als Tastatur an und tippen Befehle. Ein pauschales Verbot dagegen funktioniert in der Praxis selten, dann wird heimlich improvisiert.',
      antwortFalsch: 'Fast. Ein komplettes Verbot klingt sicher, führt aber dazu, dass Leute heimlich improvisieren. Besser: klare Regeln, die man auch einhalten kann – und ein Punkt zum Umgang mit <b>gefundenen</b> Sticks.' },

    { typ: 'frage', text: 'Warum ist ein gefundener USB-Stick so gefährlich?',
      optionen: [
        { text: 'Er kann sich als Tastatur ausgeben und Befehle eintippen', richtig: true,
          antwort: 'Genau, man nennt das BadUSB. Der Rechner sieht eine Tastatur und führt brav aus, was sie tippt – da hilft kein Virenscanner. Deshalb: fremde Sticks gar nicht erst anstecken, sondern bei uns abgeben.' },
        { text: 'Er kann die USB-Buchse beschädigen',
          antwort: 'Das gibt es tatsächlich auch, ist aber selten. Das eigentliche Risiko: Ein präparierter Stick meldet sich als <b>Tastatur</b> an und tippt Befehle – dagegen hilft kein Virenscanner.' }
      ] },

    { typ: 'merk', text: 'Verlorener Datenträger = <b>Vertraulichkeit</b> (fremde können lesen) + <b>Verfügbarkeit</b> (wir haben die Daten nicht mehr). Verschlüsselung entschärft beides. Gefundene Sticks niemals anstecken.' },

    { typ: 'nachricht', text: 'Ich melde das sofort an Herrn Olschewski weiter, der prüft die Meldepflicht. Danke dir.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-07',
  kontakt: 'sabrina',
  titel: 'Homeoffice und private Geräte',
  thema: 'Schutzmaßnahmen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Wir bekommen ab Januar eine Homeoffice-Regelung. Frau Hagedorn will, dass ich die technische Seite aufschreibe.' },
    { typ: 'nachricht', text: 'Ich hab schon eine Liste, aber ich will sie mit dir durchgehen – du siehst Dinge, die ich übersehe.' },

    { typ: 'frage', text: 'Wie kommt jemand von zu Hause sicher ins Firmennetz?',
      optionen: [
        { text: 'Über ein VPN', richtig: true, norm: 'Weitergabekontrolle',
          antwort: 'Genau. Ein [[VPN]] baut einen verschlüsselten Tunnel durch das unsichere Internet. Das erfüllt die [[Weitergabekontrolle]] – Daten sind unterwegs geschützt.' },
        { text: 'Über eine Freigabe des Servers im Internet',
          antwort: 'Das wäre der sichere Weg ins Desaster. Dienste direkt ins Internet zu stellen ist genau das, was Angreifer scannen. Dafür gibt es verschlüsselte Tunnel.' }
      ] },

    { typ: 'nachricht', text: 'Nächster Punkt, und da wird es unangenehm: Einige wollen mit ihrem privaten Laptop arbeiten.' },

    { typ: 'frage', text: 'Was spricht dagegen?',
      optionen: [
        { text: 'Wir können Updates, Virenschutz und Verschlüsselung nicht sicherstellen', richtig: true,
          antwort: 'Richtig. Auf einem privaten Gerät wissen wir nicht, ob es gepatcht ist, wer es sonst noch benutzt und was darauf installiert ist. Trotzdem haften <b>wir</b> für die Daten. Wenn private Geräte, dann nur mit klaren technischen Vorgaben.' },
        { text: 'Private Geräte sind generell schlechter',
          antwort: 'Die Hardware ist oft sogar besser. 🙂 Das Problem ist die <b>Kontrolle</b>: Updates, Virenschutz, Verschlüsselung, wer sonst noch Zugriff hat – all das können wir nicht sicherstellen.' }
      ] },

    { typ: 'frage', text: 'Und wenn ein Kollege im Zug arbeitet?',
      optionen: [
        { text: 'Blickschutzfolie und keine vertraulichen Gespräche', richtig: true,
          antwort: 'Genau, das wird oft belächelt und ist trotzdem real. Wer im Zug Gehaltsdaten offen hat, verletzt die Vertraulichkeit – völlig ohne Hackerangriff. Dazu: keine lauten Telefonate über Kundennamen.' },
        { text: 'Kein Problem, solange das VPN läuft',
          antwort: 'Das VPN schützt die <b>Übertragung</b>. Gegen den Sitznachbarn, der auf den Bildschirm schaut, hilft es nicht. Das nennt man Shoulder Surfing.' }
      ] },

    { typ: 'frage', text: 'Was gehört zu „Clean Desk"?',
      optionen: [
        { text: 'Unterlagen wegschließen, Bildschirm sperren beim Verlassen', richtig: true,
          antwort: 'Richtig, und das gilt im Büro wie zu Hause. Ausgedruckte Lieferscheine auf dem Küchentisch sind genauso ein Problem wie im Großraumbüro – nur merkt es dort niemand.' },
        { text: 'Den Schreibtisch einmal pro Woche aufräumen',
          antwort: 'Es geht nicht um Ordnung, sondern um Sicherheit: Unterlagen <b>wegschließen</b>, Bildschirm <b>sperren</b>, nichts Vertrauliches offen liegen lassen.' }
      ] },

    { typ: 'mehrfach', text: 'Was gehört noch in die Homeoffice-Regelung? (mehrere)',
      optionen: [
        { text: 'Festplattenverschlüsselung auf dem Notebook', richtig: true },
        { text: 'Automatische Bildschirmsperre', richtig: true },
        { text: 'Dienstliche Daten nicht in private Clouds', richtig: true },
        { text: 'Familienmitglieder dürfen das Gerät mitbenutzen' },
        { text: 'Meldeweg für Verlust oder Diebstahl', richtig: true }
      ],
      antwortRichtig: 'Gute Auswahl. Die Festplattenverschlüsselung ist der wichtigste Punkt: Geht das Notebook verloren, sind die Daten für den Finder wertlos – das entscheidet später darüber, ob wir Betroffene benachrichtigen müssen. Und das Gerät ist dienstlich, da hat die Familie nichts drauf verloren.',
      antwortFalsch: 'Einer der Punkte gehört genau <b>nicht</b> hinein. Überleg: Wer außer dem Mitarbeiter darf auf ein dienstliches Gerät mit Kundendaten zugreifen?' },

    { typ: 'frage', text: 'Ein Kollege lädt Kundendaten in seine private Dropbox, „nur zum schnellen Weiterarbeiten". Was ist das?',
      optionen: [
        { text: 'Eine unzulässige Übermittlung an einen nicht beauftragten Dienst', richtig: true, norm: 'Art. 28 DSGVO',
          antwort: 'Richtig. Mit diesem Anbieter haben wir keinen [[AV-Vertrag]], wir wissen nicht, wo die Daten liegen, und wir können sie nicht löschen lassen. Man nennt das Schatten-IT – und sie entsteht fast immer, weil die offizielle Lösung zu umständlich ist.' },
        { text: 'Unproblematisch, er will ja nur arbeiten',
          antwort: 'Die Absicht ist gut, der Weg nicht. Mit dem Anbieter besteht kein Vertrag zur [[AV-Vertrag|Auftragsverarbeitung]], und wir haben keine Kontrolle mehr über die Daten.' }
      ] },

    { typ: 'frage', text: 'Was ist die beste Reaktion auf Schatten-IT?',
      optionen: [
        { text: 'Eine brauchbare offizielle Lösung anbieten', richtig: true,
          antwort: 'Genau. Verbote allein verlagern das Problem nur in den Untergrund. Wenn der offizielle Weg umständlicher ist als Dropbox, verliert er immer. Also: gute Lösung bereitstellen, Regel erklären, dann durchsetzen.' },
        { text: 'Strenge Strafen androhen',
          antwort: 'Das schafft vor allem Heimlichkeit. Schatten-IT entsteht, weil die offizielle Lösung zu umständlich ist – also muss man dort ansetzen.' }
      ] },

    { typ: 'merk', text: 'Homeoffice: <b>VPN</b> für die Übertragung, <b>Festplattenverschlüsselung</b> gegen Verlust, <b>Bildschirmsperre</b> und <b>Clean Desk</b> gegen Mitlesen, keine privaten Clouds. Gegen Schatten-IT hilft eine gute offizielle Lösung.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sab-08',
  kontakt: 'sabrina',
  titel: 'Was eine Firewall kann – und was nicht',
  thema: 'Schutzmaßnahmen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Kurze Frage aus der Leitungsrunde heute: „Wir haben doch eine Firewall, warum kann uns dann überhaupt etwas passieren?"' },
    { typ: 'nachricht', text: 'Ich hab geantwortet, aber ich glaube, ich war zu technisch. Hilf mir, das besser zu erklären.' },

    { typ: 'frage', text: 'Was macht eine Firewall?',
      optionen: [
        { text: 'Sie kontrolliert den Verkehr zwischen Netzen', richtig: true,
          antwort: 'Genau – sie lässt erlaubte Verbindungen durch und blockt den Rest, in beide Richtungen. Sie schützt die <b>Netzgrenze</b>.' },
        { text: 'Sie prüft Dateien auf Viren',
          antwort: 'Das macht der [[Virenscanner]]. Die [[Firewall]] entscheidet über <b>Verbindungen</b>, nicht über Dateiinhalte.' }
      ] },

    { typ: 'frage', text: 'Warum hilft sie gegen einen Mailanhang nicht?',
      optionen: [
        { text: 'Die Mail kommt über eine erlaubte Verbindung herein', richtig: true,
          antwort: 'Richtig, und das ist der Kern. E-Mail ist erlaubt, sonst könnten wir nicht arbeiten. Die Firewall sieht eine zulässige Verbindung – was im Anhang steckt, ist ihr Problem nicht. Dafür braucht es [[E-Mail-Filter]], [[Virenscanner]] und geschulte Menschen.' },
        { text: 'Weil sie nur nachts läuft',
          antwort: '🙂 Nein. Das Problem ist: E-Mail ist eine <b>erlaubte</b> Verbindung. Die Firewall lässt sie durch, weil sie durchgelassen werden muss.' }
      ] },

    { typ: 'nachricht', text: 'Das ist ein gutes Bild: Die Firewall ist der Pförtner, nicht der Gepäckscanner.' },
    { typ: 'nachricht', text: 'Nächster Begriff aus der Runde: Jemand hat nach der DMZ gefragt.' },

    { typ: 'frage', text: 'Wofür ist eine DMZ gut?',
      optionen: [
        { text: 'Als Pufferzone für Server, die von außen erreichbar sein müssen', richtig: true,
          antwort: 'Genau. Webserver und Mailgateway stehen in der [[DMZ]]. Wird dort eingebrochen, steht der Angreifer <b>nicht</b> sofort im Firmennetz, sondern wieder vor einer Firewall.' },
        { text: 'Als Bereich ohne jede Sicherheitsmaßnahme',
          antwort: 'Umgekehrt: Die [[DMZ]] ist besonders streng abgeriegelt. Sie ist eine <b>Pufferzone</b> zwischen Internet und Firmennetz für Dienste, die von außen erreichbar sein müssen.' }
      ] },

    { typ: 'frage', text: 'Und was ist der Unterschied zur Netzwerksegmentierung?',
      optionen: [
        { text: 'Segmentierung trennt auch das Innere in Bereiche', richtig: true,
          antwort: 'Richtig. Die DMZ trennt außen von innen. Die [[Netzwerksegmentierung]] trennt zusätzlich <b>innen</b>: Lager, Büro, Server, Produktion. Dann kommt ein Wurm aus dem Lager nicht automatisch an die Buchhaltung.' },
        { text: 'Das ist dasselbe mit anderem Namen',
          antwort: 'Nicht ganz: Die DMZ ist eine Zone für Dienste nach außen. Segmentierung heißt, auch das <b>interne</b> Netz in getrennte Bereiche aufzuteilen.' }
      ] },

    { typ: 'mehrfach', text: 'Welche Maßnahmen gehören zu einem mehrschichtigen Schutz? (mehrere)',
      optionen: [
        { text: 'Firewall an der Netzgrenze', richtig: true },
        { text: 'Virenschutz auf den Endgeräten', richtig: true },
        { text: 'Zeitnahe Updates', richtig: true },
        { text: 'Geschulte Mitarbeiter', richtig: true },
        { text: 'Eine einzige, besonders teure Lösung' }
      ],
      antwortRichtig: 'Genau das ist der Punkt: <b>keine</b> einzelne Maßnahme reicht. Man nennt das Defense in Depth – mehrere Schichten, von denen jede etwas abfängt, was die andere durchlässt. Deshalb ist die Frage „wir haben doch eine Firewall" falsch gestellt.',
      antwortFalsch: 'Fast. Eine einzelne Lösung, egal wie teuer, deckt nie alles ab. Sicherheit entsteht aus <b>mehreren Schichten</b>.' },

    { typ: 'frage', text: 'Noch eine aus der Runde: „Brauchen wir Virenschutz, wenn wir vorsichtig sind?"',
      optionen: [
        { text: 'Ja – Vorsicht ersetzt keine technische Schicht', richtig: true,
          antwort: 'Richtig. Vorsicht ist eine Schicht, Technik ist eine andere. Niemand ist jeden Tag gleich aufmerksam, besonders nicht um 16:50 Uhr vor dem Wochenende. Umgekehrt gilt genauso: Technik ersetzt keine Schulung.' },
        { text: 'Nein, wer aufpasst braucht keinen Scanner',
          antwort: 'Das ist die gefährlichste Antwort. Niemand ist durchgehend aufmerksam – und moderne Angriffe sind darauf ausgelegt, genau in diesen Momenten zu greifen.' }
      ] },

    { typ: 'merk', text: 'Die <b>Firewall</b> ist der Pförtner (Verbindungen), nicht der Gepäckscanner (Dateiinhalte). <b>DMZ</b> = Pufferzone nach außen, <b>Segmentierung</b> = Trennung auch im Inneren. Sicherheit entsteht durch <b>mehrere Schichten</b>.' },

    { typ: 'nachricht', text: 'Perfekt, mit dem Pförtner-Bild gehe ich in die nächste Runde. Danke dir.' }
  ]
});
