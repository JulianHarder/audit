/* ===========================================================
   AUDIT – data/dialoge-tim.js
   Tim, Azubi im 2. Lehrjahr. Sitzt neben dir, duzt dich,
   schreibt wie einem Kumpel: kurze Nachrichten, Emojis,
   Tippfehler. Bei ihm erklärst DU – wer erklären kann,
   hat es verstanden.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'tim-01',
  kontakt: 'tim',
  titel: 'Zutritt, Zugang, Zugriff',
  thema: 'Kontrollarten (TOMs)',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'alter, ich schreib morgen die klausur und hab noch nix kapiert 😩' },
    { typ: 'nachricht', text: 'hast du kurz? 10 min?' },
    { typ: 'nachricht', text: 'also: zutritt, zugang, zugriff. für mich klingt das dreimal genau gleich.' },
    { typ: 'nachricht', text: 'fang mal mit zutritt an. was wird da geschützt?' },

    { typ: 'frage', text: 'Was schützt die Zutrittskontrolle?',
      optionen: [
        { text: 'Den Raum', richtig: true, norm: 'Kontrollart der TOMs',
          antwort: 'ahh okay. also alles was mit türen und gebäude zu tun hat?' },
        { text: 'Das System',
          antwort: 'hm. aber das wär doch zugang? ich dachte bei zutritt gehts drum ob ich überhaupt in den raum reinkomme 🤔' },
        { text: 'Die Daten',
          antwort: 'nee das is zugriff, da bin ich mir fast sicher. zutritt is irgendwas körperliches oder?' }
      ] },

    { typ: 'nachricht', text: 'okay dann teste mich mal. ich hab hier die liste von frau ricken aus dem unterricht' },

    { typ: 'mehrfach', text: 'Welche gehören zur Zutrittskontrolle? (mehrere)',
      optionen: [
        { text: 'Chipkarte für den Serverraum', richtig: true },
        { text: 'Passwort am Rechner' },
        { text: 'Pförtner und Besucherbuch', richtig: true },
        { text: 'Berechtigungskonzept für die Personalakte' },
        { text: 'Videoüberwachung am Eingang', richtig: true }
      ],
      antwortRichtig: 'ja geil, hab ich auch so. chipkarte, pförtner, kamera = <b>raum</b>. passwort is [[Zugangskontrolle|zugang]] (system) und das berechtigungsding is [[Zugriffskontrolle|zugriff]] (daten) 👌',
      antwortFalsch: 'ne warte. denk nochmal: zutritt = kann ich <b>körperlich</b> rein. türen, räume, gebäude. passwort und berechtigungen sind was anderes.' },

    { typ: 'nachricht', text: 'und wie merk ich mir das in der klausur? ich blackout da immer' },
    { typ: 'merk', text: '<b>Zutritt = Raum · Zugang = System · Zugriff = Daten</b>' },
    { typ: 'nachricht', text: 'okay das is einfach 😅 drei wörter, drei sachen. krieg ich hin' },

    { typ: 'nachricht', text: 'aber jetzt wirds eklig. frau ricken hat gesagt es gibt ACHT davon' },

    { typ: 'karte', titel: 'Alle acht Kontrollarten der TOMs', quelle: 'kontrollarten' },

    { typ: 'nachricht', text: 'acht. ACHT. 💀' },
    { typ: 'nachricht', text: 'okay die ersten drei hab ich. aber was is der unterschied zwischen weitergabe und trennung?' },

    { typ: 'frage', text: 'Was ist die Weitergabekontrolle?',
      optionen: [
        { text: 'Daten sind beim Transport und bei der Übertragung geschützt', richtig: true,
          antwort: 'also wenn was unterwegs is. wie wenn ich ne mail schicke oder mit vpn von zuhause arbeite?' },
        { text: 'Daten von verschiedenen Kunden werden getrennt gespeichert',
          antwort: 'ne das is doch trennung oder? weitergabe hat was mit <b>unterwegs</b> zu tun, oder verwechsel ich das?' }
      ] },

    { typ: 'nachricht', text: 'ja genau, unterwegs. verschlüsselung, vpn, https. und wenn der kurier die akten abholt' },

    { typ: 'frage', text: 'Und die Trennungskontrolle?',
      optionen: [
        { text: 'Daten für verschiedene Zwecke werden getrennt verarbeitet', richtig: true,
          antwort: 'also bewerberdaten nicht im gleichen topf wie kundendaten. check 👍 bei uns liegen die auch in verschiedenen systemen, jetzt weiß ich auch warum' },
        { text: 'Die Netzwerke werden räumlich getrennt',
          antwort: 'hmm, das is eher [[Netzwerksegmentierung]] – technisch. bei trennung gehts um den <b>zweck</b> der daten, hat sie glaub ich gesagt' }
      ] },

    { typ: 'nachricht', text: 'eine noch: eingabekontrolle. das klingt als gings um tippen 😂' },

    { typ: 'frage', text: 'Worum geht es bei der Eingabekontrolle?',
      optionen: [
        { text: 'Nachvollziehen, wer wann welche Daten geändert hat', richtig: true, norm: 'Protokollierung',
          antwort: 'aaah, also logs. damit man hinterher sieht wer was gemacht hat' },
        { text: 'Dass man sich beim Eintippen nicht vertippt',
          antwort: 'haha nee 😄 es geht um <b>protokolle</b>: wer hat wann was eingegeben, geändert oder gelöscht' }
      ] },

    { typ: 'nachricht', text: 'wobei – unsere lageristen arbeiten alle mit dem gleichen login. sabrina regt sich da immer auf' },

    { typ: 'frage', text: 'Was ist daran das Problem für die Eingabekontrolle?',
      optionen: [
        { text: 'Das Protokoll ist wertlos, weil man niemanden zuordnen kann', richtig: true,
          antwort: 'stimmt eigentlich. steht dann halt 15 mal "lager01" im protokoll und keiner weiß wer das war. deswegen regt sie sich auf 😅' },
        { text: 'Gar nichts, Hauptsache es wird protokolliert',
          antwort: 'hmm nee. wenn alle das gleiche konto nutzen steht im protokoll nur "lager01" – du weißt also <b>nicht</b> wer was gemacht hat. dann is das protokoll fast nix wert' }
      ] },

    { typ: 'nachricht', text: 'letzte frage, dann lass ich dich in ruhe 🙏' },
    { typ: 'nachricht', text: 'woher kommen diese acht überhaupt? stehen die in der dsgvo?' },

    { typ: 'frage', text: 'Woher kommt die Einteilung in acht Kontrollarten?',
      optionen: [
        { text: 'Direkt aus der DSGVO',
          antwort: 'dachte ich auch! aber frau ricken hat gesagt in der dsgvo steht das so gar nicht drin. die nennt in [[Art. 32 DSGVO|art. 32]] nur so allgemeine ziele' },
        { text: 'Aus dem alten BDSG', richtig: true, norm: 'Anlage zu § 9 BDSG a. F.',
          antwort: 'ja genau, das hat sie gesagt! anlage zu paragraf 9 vom alten bdsg. die dsgvo sagts heute offener – pseudonymisierung, verschlüsselung, vertraulichkeit, integrität, verfügbarkeit, belastbarkeit. für die klausur lernen wir aber die acht' }
      ] },

    { typ: 'merk', text: 'Die <b>acht Kontrollarten</b> stammen aus der Anlage zu § 9 BDSG (alt), nicht aus der DSGVO. Art. 32 DSGVO nennt die Ziele allgemeiner. Für die Prüfung: trotzdem die acht lernen.' },

    { typ: 'nachricht', text: 'du bist mein held 🫡 ich geh die jetzt nochmal durch. kaffee geht auf mich' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tim-02',
  kontakt: 'tim',
  titel: 'Virus, Trojaner, Wurm',
  thema: 'Schadsoftware',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'moin! schon wieder ich 😁' },
    { typ: 'nachricht', text: 'nächste baustelle: virus, trojaner, wurm' },
    { typ: 'nachricht', text: 'in der aufgabe steht immer "erläutern sie wodurch sie sich in der <b>verbreitung</b> unterscheiden"' },
    { typ: 'nachricht', text: 'und da häng ich komplett. für mich is das alles "böse software die sich ausbreitet" 🤷' },

    { typ: 'frage', text: 'Wie verbreitet sich ein Virus?',
      optionen: [
        { text: 'Nur wenn der infizierte Wirt ausgeführt oder weitergegeben wird', richtig: true,
          antwort: 'okay das schreib ich genau so hin. also [[Virus]] = hängt an einer <b>wirtsdatei</b> und passiert erst was wenn einer die datei startet oder weitergibt' },
        { text: 'Selbstständig über das Netzwerk',
          antwort: 'ne das is der [[Wurm]], oder? der virus braucht doch sowas wie ne datei an der er dran hängt' }
      ] },

    { typ: 'nachricht', text: 'wirt. wie bei ner zecke 🦟 okay das bild merk ich mir' },

    { typ: 'frage', text: 'Und ein Trojaner?',
      optionen: [
        { text: 'Er verbreitet sich gar nicht selbst', richtig: true,
          antwort: 'also wie das pferd in troja 🐴 sieht nützlich aus, man schleppt es selber rein. und drin is dann die hintertür' },
        { text: 'Er kopiert sich auf alle Rechner im Netz',
          antwort: 'ne, das is wieder der wurm. beim [[Trojaner]] is der trick doch dass man ihn <b>selber</b> installiert weil man denkt er is nützlich' }
      ] },

    { typ: 'nachricht', text: 'wobei – ich hab mal son "pc cleaner" installiert, privat. war glaub ich auch sowas 🙈' },

    { typ: 'frage', text: 'Was macht ein Trojaner typischerweise im Hintergrund?',
      optionen: [
        { text: 'Er öffnet eine Hintertür für den Angreifer', richtig: true, norm: 'Backdoor',
          antwort: 'ja das wars glaub ich. [[Backdoor]]. hab dann alles neu gemacht sicherheitshalber' },
        { text: 'Er löscht sich nach der Installation wieder',
          antwort: 'das wär ja praktisch 😄 ne, meistens öffnet er eine <b>hintertür</b>, damit der angreifer dauerhaft reinkommt und nachladen kann' }
      ] },

    { typ: 'frage', text: 'Und der Wurm?',
      optionen: [
        { text: 'Vollkommen selbstständig über Netzwerke, ohne Nutzeraktion und ohne Wirtsdatei', richtig: true,
          antwort: 'okay das is der unterschied. der braucht <b>niemanden</b>. kein klick, keine datei. nur ne offene lücke' },
        { text: 'Er versteckt sich tief im Betriebssystem',
          antwort: 'das is das [[Rootkit]] glaub ich – das versteckt sich und andere sachen mit. beim wurm gehts drum dass er sich <b>selber</b> verbreitet' }
      ] },

    { typ: 'karte', titel: 'Die Verbreitung im Vergleich', quelle: 'html',
      html: '<table class="t"><tr><th>Art</th><th>Wirtsdatei?</th><th>Mensch nötig?</th><th>Verbreitet sich selbst?</th></tr>' +
            '<tr><td><b>🦠 Virus</b></td><td>ja</td><td>ja (öffnen/weitergeben)</td><td>nur über den Wirt</td></tr>' +
            '<tr><td><b>🐴 Trojaner</b></td><td>nein</td><td>ja (installieren)</td><td>nein</td></tr>' +
            '<tr><td><b>🪱 Wurm</b></td><td>nein</td><td>nein</td><td>ja, selbstständig</td></tr></table>' },

    { typ: 'nachricht', text: 'boah als tabelle is das endlich klar 🙌 das mal ich mir morgen aufs schmierblatt' },
    { typ: 'merk', text: '<b>Virus</b> = Wirtsdatei + Mensch · <b>Trojaner</b> = getarnt, wird selbst installiert, vermehrt sich nicht · <b>Wurm</b> = ganz allein über das Netz.' },

    { typ: 'nachricht', text: 'gibts noch mehr arten die drankommen könnten?' },

    { typ: 'karte', titel: 'Weitere Arten', quelle: 'schadsoftware',
      keys: ['ransomware', 'rootkit', 'spyware', 'keylogger', 'adware', 'bot', 'hoax'] },

    { typ: 'nachricht', text: 'okay sieben weitere. 🫠 aber die klingen wenigstens unterschiedlich' },

    { typ: 'frage', text: 'Eine davon ist gar keine Schadsoftware. Welche?',
      optionen: [
        { text: 'Der Hoax', richtig: true,
          antwort: 'echt? also ne falschmeldung? wie die kettenbriefe früher bei whatsapp 😂' },
        { text: 'Die Adware',
          antwort: 'ne, [[Adware]] is schon software – nervige werbung, und oft sammelt die auch daten. es gibt aber eine in der liste wo überhaupt kein code dabei is' }
      ] },

    { typ: 'nachricht', text: 'und wo is da dann der schaden wenn nix drin is?' },

    { typ: 'frage', text: 'Wodurch entsteht beim Hoax der Schaden?',
      optionen: [
        { text: 'Durch die Reaktion der Leute', richtig: true,
          antwort: 'ah weil alle das weiterleiten und panisch dateien löschen. und arbeitszeit geht drauf. krass, ohne ein einziges schadprogramm' },
        { text: 'Durch einen Virus im Anhang',
          antwort: 'genau das is der punkt: da is <b>nichts</b> im anhang. der [[Hoax]] schadet nur dadurch dass leute drauf reagieren – weiterleiten, dateien löschen, zeit verschwenden' }
      ] },

    { typ: 'frage', text: 'Und was hilft gegen einen Hoax?',
      optionen: [
        { text: 'Schulung und nachfragen statt weiterleiten', richtig: true,
          antwort: 'also wieder der mensch. kein virenscanner der welt hilft gegen ne dumme mail 😅' },
        { text: 'Ein guter Spamfilter',
          antwort: 'der fängt vielleicht ein paar ab. aber wenn der kollege dir das weiterleitet is der filter raus. da hilft nur [[Mitarbeiterschulung|schulung]] und nachfragen' }
      ] },

    { typ: 'merk', text: '<b>Hoax</b> = Falschmeldung ohne Schadcode. Der Schaden entsteht durch die Reaktion der Menschen. Dagegen hilft nur Aufklärung, keine Technik.' },

    { typ: 'nachricht', text: 'okay. virus, trojaner, wurm sitzt. hoax sitzt. jetzt noch ransomware und rootkit und dann hab ich bock auf feierabend 😮‍💨' },

    { typ: 'frage', text: 'Was macht Ransomware?',
      optionen: [
        { text: 'Sie verschlüsselt Daten und fordert Lösegeld', richtig: true,
          antwort: 'das hatten wir im unterricht mit dem krankenhaus. und welches schutzziel is da kaputt? warte, ich glaub <b>verfügbarkeit</b>, weil keiner mehr rankommt' },
        { text: 'Sie liest Passwörter mit',
          antwort: 'das wär [[Keylogger]] oder [[Spyware]]. [[Ransomware]] <b>sperrt</b> dir die daten weg und will geld' }
      ] },

    { typ: 'frage', text: 'Und warum ist das Rootkit so unangenehm?',
      optionen: [
        { text: 'Weil es sich selbst und andere Schadsoftware versteckt', richtig: true, norm: 'Tarnung',
          antwort: 'also das system sagt "alles gut" und is aber voll verseucht?? 😱 wie findet man das dann überhaupt' },
        { text: 'Weil es besonders viele Daten löscht',
          antwort: 'ne, das besondere am [[Rootkit]] is die <b>tarnung</b>: es manipuliert das betriebssystem so dass man es nicht mehr sieht' }
      ] },

    { typ: 'frage', text: 'Wie findet man ein Rootkit?',
      optionen: [
        { text: 'Mit einem Scan von einem sauberen Boot-Medium', richtig: true,
          antwort: 'logisch eigentlich – wenn das system lügt muss man von außen schauen. und danach? reicht löschen?' },
        { text: 'Mit dem normalen Virenscanner im laufenden System',
          antwort: 'genau das funktioniert nicht 😬 das rootkit belügt ja das system. man muss von einem <b>sauberen boot-medium</b> prüfen, also von außen' }
      ] },

    { typ: 'frage', text: 'Reicht es, das Rootkit zu entfernen?',
      optionen: [
        { text: 'Nein, das System wird neu aufgesetzt', richtig: true,
          antwort: 'hart aber okay. "nach rootkit = platt machen und neu". das merk ich mir' },
        { text: 'Ja, wenn der Scanner es findet',
          antwort: 'würd ich nicht drauf wetten. bei sowas tiefem weiß man nie was noch drin hängt – deswegen <b>neu aufsetzen</b> aus vertrauenswürdiger quelle' }
      ] },

    { typ: 'merk', text: '<b>Ransomware</b> trifft die Verfügbarkeit (Daten gesperrt). <b>Rootkit</b> tarnt sich – Prüfung nur vom sauberen Boot-Medium, danach neu aufsetzen.' },

    { typ: 'nachricht', text: 'alter, ich glaub ich kann das jetzt wirklich 😤 danke dir!! viel besser als das pdf von frau ricken' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tim-03',
  kontakt: 'tim',
  titel: 'Zugang oder Zugriff? Mit Beispielsatz',
  thema: 'Kontrollarten (TOMs)',
  dauer: 4,
  schritte: [
    { typ: 'nachricht', text: 'ey ich hab ne alte klausur gefunden, von letztem jahr 👀' },
    { typ: 'nachricht', text: 'da steht: "erläutern sie den unterschied zwischen zugangs- und zugriffskontrolle <b>anhand eines beispiels aus dem büroalltag</b>"' },
    { typ: 'nachricht', text: 'die drei wörter hab ich ja jetzt. aber wie mach ich daraus ein beispiel? 3 punkte, da muss ich was hinschreiben' },

    { typ: 'frage', text: 'Womit fängst du an?',
      optionen: [
        { text: 'Mit der Anmeldung am PC', richtig: true,
          antwort: 'okay also: "die [[Zugangskontrolle]] regelt ob jemand <b>überhaupt ins system</b> kommt – anmeldung am pc mit benutzername und passwort". so?' },
        { text: 'Mit der Tür zum Serverraum',
          antwort: 'ne warte, das wär [[Zutrittskontrolle|zutritt]] – is hier gar nicht gefragt. die aufgabe will nur zugang und zugriff' }
      ] },

    { typ: 'nachricht', text: 'und dann? was kommt zum zugriff?' },

    { typ: 'frage', text: 'Was regelt die Zugriffskontrolle?',
      optionen: [
        { text: 'Was er darf, nachdem er drin ist', richtig: true,
          antwort: 'ahh, also der zweite teil vom satz: "die [[Zugriffskontrolle]] regelt was er danach darf – lesen, ändern, löschen". mit rollen und rechten und protokoll' },
        { text: 'Wie lange er angemeldet bleiben darf',
          antwort: 'das is eher so ein detail vom zugang (bildschirmsperre). beim zugriff gehts um die <b>daten</b> – was darf er sehen und ändern' }
      ] },

    { typ: 'nachricht', text: 'kannst du mir das als fertigen satz geben? sowas brauch ich zum abschreiben, sonst verhaspel ich mich' },

    { typ: 'karte', titel: 'So kannst du es hinschreiben', quelle: 'html',
      html: '<p style="color:var(--text-dim)">„Die <b>Zugangskontrolle</b> regelt, ob jemand ins System kommt: Ein Mitarbeiter meldet sich am PC mit Benutzername und Passwort an. ' +
            'Die <b>Zugriffskontrolle</b> regelt, was er danach darf: Ein Mitarbeiter aus dem Vertrieb kann auf dem Netzlaufwerk nur den Vertriebsordner öffnen, ' +
            'nicht den Ordner der Personalabteilung."</p>' },

    { typ: 'nachricht', text: 'perfekt 🙏 das is genau so wie ich es brauche' },
    { typ: 'nachricht', text: 'jetzt sortier mich nochmal durch, dann sitzt es' },

    { typ: 'mehrfach', text: 'Welche gehören zur <b>Zugangs</b>kontrolle? (mehrere)',
      optionen: [
        { text: 'Benutzername und Passwort', richtig: true },
        { text: 'Zwei-Faktor-Authentifizierung', richtig: true },
        { text: 'Berechtigungskonzept mit Rollen' },
        { text: 'Automatische Bildschirmsperre', richtig: true },
        { text: 'Protokollierung der geöffneten Dateien' }
      ],
      antwortRichtig: 'ja! passwort, 2fa und bildschirmsperre = komm ich <b>ins system</b>. berechtigungen und protokoll = was mach ich <b>mit den daten</b>, also zugriff 💪',
      antwortFalsch: 'denk bei jedem punkt: gehts darum ob jemand <b>reinkommt</b> (zugang) oder was er <b>mit den daten</b> darf (zugriff)?' },

    { typ: 'nachricht', text: 'und was is eigentlich mit der bildschirmsperre? bei uns sperrt keiner seinen pc wenn er zum drucker geht' },

    { typ: 'frage', text: 'Warum ist das ein Problem?',
      optionen: [
        { text: 'Jeder kann unter seiner Kennung weiterarbeiten', richtig: true,
          antwort: 'oh. also wenn ich an seinen pc gehe und was lösche, steht <b>sein</b> name im protokoll 😳 das is ja fies' },
        { text: 'Der Monitor verbraucht mehr Strom',
          antwort: '😄 strom is nicht das problem. überleg mal: wenn der pc offen is und jemand setzt sich dran – unter <b>wessen</b> namen arbeitet der dann?' }
      ] },

    { typ: 'nachricht', text: 'okay ich sperr ab jetzt immer. windows+L oder?' },
    { typ: 'nachricht', text: 'wobei bei uns is noch was: die lageristen haben alle das gleiche login 🙃' },

    { typ: 'frage', text: 'Gegen welche Kontrollart verstößt das vor allem?',
      optionen: [
        { text: 'Eingabekontrolle – man kann nichts zuordnen', richtig: true,
          antwort: 'stimmt, hatten wir schon. und zugang is auch halb kaputt, weil das passwort ja alle kennen. doppelt schlecht 🥴' },
        { text: 'Weitergabekontrolle',
          antwort: 'ne, die is für daten <b>unterwegs</b>. hier gehts drum dass man nicht mehr nachvollziehen kann wer was gemacht hat – [[Eingabekontrolle]]' }
      ] },

    { typ: 'merk', text: '<b>Zugang</b> = Tür zum System (Passwort, 2FA, Bildschirmsperre) · <b>Zugriff</b> = was du mit den Daten darfst (Rollen, Rechte, Protokoll). Sammelkonten zerstören die Eingabekontrolle.' },

    { typ: 'nachricht', text: 'top. ich hab jetzt sogar bock auf die klausur 😂 fast' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tim-04',
  kontakt: 'tim',
  titel: 'Vier Kunden, vier Rechte',
  thema: 'Betroffenenrechte',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'sooo letzter block für heute: die rechte von den kunden' },
    { typ: 'nachricht', text: 'in der klausur kommen die immer als so kleine fälle. "nennen sie das recht das der kunde geltend macht"' },
    { typ: 'nachricht', text: 'ich les dir vier vor, du sagst welches recht. ich schreib mit 📝' },
    { typ: 'nachricht', text: '<b>fall 1:</b> kunde schreibt "ich möchte wissen ob sie daten über mich verarbeiten und was damit passiert"' },

    { typ: 'frage', text: 'Welches Recht ist das?',
      optionen: [
        { text: 'Auskunftsrecht', richtig: true, norm: 'Art. 15 DSGVO',
          antwort: 'okay auskunft. und was muss man ihm dann alles geben? das war ne unterfrage mit 2 punkten' },
        { text: 'Recht auf Datenübertragbarkeit',
          antwort: 'das wär wenn er die daten <b>mitnehmen</b> will zu ner anderen firma, maschinenlesbar. hier will er erstmal nur <b>wissen</b> was da is' }
      ] },

    { typ: 'mehrfach', text: 'Was kann er verlangen? (mehrere)',
      optionen: [
        { text: 'Eine Kopie der gespeicherten Daten', richtig: true },
        { text: 'Die Verarbeitungszwecke', richtig: true },
        { text: 'Die Empfänger der Daten', richtig: true },
        { text: 'Die Speicherdauer', richtig: true },
        { text: 'Die Namen aller Mitarbeiter, die seine Daten gesehen haben' },
        { text: 'Die Herkunft der Daten', richtig: true }
      ],
      antwortRichtig: 'alles notiert 🙏 also: kopie, zwecke, empfänger, speicherdauer, herkunft – und dass er weitere rechte hat (berichtigung, löschung, einschränkung, widerspruch, beschwerde bei der behörde). nur einzelne <b>mitarbeiternamen</b> muss man nicht rausgeben, nur <b>kategorien</b> von empfängern',
      antwortFalsch: 'fast. eine davon geht zu weit – er bekommt <b>kategorien</b> von empfängern, nicht die namen einzelner kollegen, die mal draufgeschaut haben' },

    { typ: 'nachricht', text: '<b>fall 2:</b> mitarbeiterin merkt dass ihre privatadresse in der personalverwaltung falsch is und will dass das korrigiert wird' },

    { typ: 'frage', text: 'Welches Recht?',
      optionen: [
        { text: 'Recht auf Berichtigung', richtig: true, norm: 'Art. 16 DSGVO',
          antwort: 'einfach. aber die unterfrage war fies: "erläutern sie welche nachteile falsch gespeicherte daten verursachen können"' },
        { text: 'Recht auf Einschränkung',
          antwort: 'das wär wenn sie sagt "ich bestreite das, nutzt die daten erstmal <b>nicht weiter</b>". hier will sie dass es <b>korrigiert</b> wird' }
      ] },

    { typ: 'frage', text: 'Was kann bei einer falschen Adresse in der Personalakte passieren?',
      optionen: [
        { text: 'Gehaltsabrechnung und Unterlagen gehen an Fremde', richtig: true,
          antwort: 'oh krass. also is das dann gleichzeitig ne <b>vertraulichkeits</b>-verletzung. und sie bekommt ihre unterlagen zu spät oder gar nicht. und die firma hat den ärger 😬' },
        { text: 'Nicht viel, man korrigiert es einfach',
          antwort: 'doch, überleg mal was alles an die adresse geht: gehaltsabrechnung, steuerbescheinigung, verträge. wenn das bei <b>fremden</b> landet …' }
      ] },

    { typ: 'nachricht', text: '<b>fall 3:</b> ehemaliger kunde will dass der shop ALLE daten über ihn löscht. gespeichert sind kundenkonto, bestellhistorie und rechnungen' },

    { typ: 'frage', text: 'Muss der Shop alles löschen?',
      optionen: [
        { text: 'Nein, Rechnungen müssen aufbewahrt werden', richtig: true, norm: 'Art. 17 DSGVO',
          antwort: 'ah die zehn jahre! handels- und steuerrecht. und was macht man dann mit den rechnungen, wenn man sie nicht löschen darf?' },
        { text: 'Ja, es ist sein Recht',
          antwort: 'fast – das recht gibts schon, aber nicht unbegrenzt. denk an die <b>rechnungen</b>, da gibts gesetzliche fristen' }
      ] },

    { typ: 'frage', text: 'Was passiert mit den Rechnungen?',
      optionen: [
        { text: 'Sie werden gesperrt statt gelöscht', richtig: true,
          antwort: 'okay: "verarbeitung eingeschränkt" – also nur noch für die aufbewahrungspflicht, nicht mehr für werbung oder auswertungen. und nach fristablauf weg. und das konto? das muss raus oder?' },
        { text: 'Sie werden trotzdem gelöscht',
          antwort: 'darf man nicht – das wär ein verstoß gegen handels- und steuerrecht. sie werden <b>gesperrt</b>: nur noch für die aufbewahrung da' }
      ] },

    { typ: 'nachricht', text: 'alles klar: konto und was man nicht mehr braucht = weg. rechnungen = sperren. und man muss ihm das erklären' },
    { typ: 'nachricht', text: '<b>fall 4:</b> shop schickt werbung per post, stützt sich auf berechtigtes interesse. kunde schreibt dass seine daten nicht mehr für werbung genutzt werden sollen' },

    { typ: 'frage', text: 'Welches Recht übt er aus?',
      optionen: [
        { text: 'Widerspruchsrecht', richtig: true, norm: 'Art. 21 DSGVO',
          antwort: 'und jetzt die wichtige frage: muss die firma da abwägen oder einfach aufhören?' },
        { text: 'Recht auf Löschung',
          antwort: 'ne, er sagt nicht "löscht alles" sondern "nutzt es nicht mehr <b>für werbung</b>". das is [[Art. 21 DSGVO|widerspruch]]' }
      ] },

    { typ: 'frage', text: 'Muss die Firma abwägen?',
      optionen: [
        { text: 'Nein, bei Direktwerbung gilt der Widerspruch sofort', richtig: true,
          antwort: 'stark. also kein "ja aber unser interesse" – bei werbung is sofort schluss, ohne begründung vom kunden 👍' },
        { text: 'Ja, es muss eine Interessenabwägung geben',
          antwort: 'normalerweise ja – aber bei <b>direktwerbung</b> nicht. da gilt der widerspruch jederzeit, ohne begründung und ohne abwägung' }
      ] },

    { typ: 'frage', text: 'Was muss die Firma dann konkret tun?',
      optionen: [
        { text: 'Ihn in eine Werbesperre aufnehmen', richtig: true,
          antwort: 'witzig eigentlich: man muss ihn <b>speichern</b> damit man ihn nicht mehr anschreibt 😄 sonst is er beim nächsten mal wieder im verteiler' },
        { text: 'Seine Adresse komplett löschen',
          antwort: 'klingt logisch, is aber falsch: wenn du alles löschst, landet er beim nächsten adressimport wieder im verteiler. deswegen <b>werbesperre</b>' }
      ] },

    { typ: 'karte', titel: 'Die Rechte im Überblick', quelle: 'betroffenenrechte',
      keys: ['a15', 'a16', 'a17', 'a18', 'a20', 'a21'] },

    { typ: 'nachricht', text: 'letzte frage ehrlich jetzt: wie schnell muss die firma antworten? ich hab 72 stunden im kopf aber ich glaub das war was anderes' },

    { typ: 'frage', text: 'Welche Frist gilt bei Betroffenenanfragen?',
      optionen: [
        { text: 'Ein Monat', richtig: true, norm: 'Art. 12 Abs. 3 DSGVO',
          antwort: 'und die 72 stunden? … ah, das is die <b>datenpanne</b> an die aufsichtsbehörde. gut dass ich gefragt hab, das hätt ich 100% vertauscht 😅' },
        { text: '72 Stunden',
          antwort: 'das is die falle! 72 stunden sind für die meldung einer <b>[[Datenpanne]]</b> an die aufsichtsbehörde. bei anfragen von kunden: <b>ein monat</b>, verlängerbar um zwei, grundsätzlich kostenlos' }
      ] },

    { typ: 'merk', text: '<b>Auskunft</b> · <b>Berichtigung</b> · <b>Löschung</b> (außer Aufbewahrungspflicht → sperren) · <b>Einschränkung</b> · <b>Übertragbarkeit</b> · <b>Widerspruch</b> (bei Werbung sofort, ohne Abwägung). Frist: <b>1 Monat</b> – die 72 Stunden sind die Datenpanne!' },

    { typ: 'nachricht', text: 'du, ich glaub ich bin durch 😮‍💨 das war jetzt echt viel aber es hängt' },
    { typ: 'nachricht', text: 'wenn ich bestehe bring ich kuchen mit 🍰' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'tim-05',
  kontakt: 'tim',
  titel: 'Die Mail mit dem komischen Link',
  thema: 'Angriffe über Menschen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'du ich hab hier ne mail und ich weiß nicht ob die echt is 😬' },
    { typ: 'nachricht', text: 'absender is angeblich unsere it. betreff "ihr postfach läuft über – jetzt verifizieren"' },
    { typ: 'nachricht', text: 'drin is ein link und ich soll mich mit benutzername und passwort anmelden. <b>innerhalb von 24 stunden</b> sonst wird das konto gesperrt 😳' },
    { typ: 'nachricht', text: 'anrede is "sehr geehrter nutzer"' },

    { typ: 'mehrfach', text: 'Was ist hier verdächtig? (mehrere)',
      optionen: [
        { text: 'Zeitdruck und Drohung mit Sperrung', richtig: true },
        { text: 'Aufforderung, Zugangsdaten einzugeben', richtig: true },
        { text: 'Die Mail ist fehlerfrei auf Deutsch' },
        { text: 'Unpersönliche Anrede', richtig: true },
        { text: 'Link, dessen Ziel nicht zur Firma passt', richtig: true }
      ],
      antwortRichtig: 'okay also: druck, "gib dein passwort ein", komische anrede, link der nicht passt. und dass die mail gut geschrieben is sagt gar nix mehr – dachte ich immer dass man die an den fehlern erkennt 🤔',
      antwortFalsch: 'eine davon is heute kein warnzeichen mehr. früher hat man [[Phishing]] an holprigem deutsch erkannt, aber das is vorbei – gute fälschungen sind fehlerfrei' },

    { typ: 'nachricht', text: 'wie prüf ich den link denn? anklicken will ich ja nicht' },

    { typ: 'frage', text: 'Wie schaust du nach, wohin ein Link führt?',
      optionen: [
        { text: 'Mit der Maus drüberfahren, ohne zu klicken', richtig: true,
          antwort: 'ah einfach hovern, dann steht das ziel unten. gemacht … und da steht irgendwas mit "secure-login-portal24.net" 🚩 das is definitiv nicht wir' },
        { text: 'Einmal anklicken und schnell wieder zurück',
          antwort: 'lieber nicht 😅 schon der aufruf kann reichen. fahr mit der <b>maus drüber</b> ohne zu klicken, dann siehst du das ziel' }
      ] },

    { typ: 'frage', text: 'Was machst du jetzt?',
      optionen: [
        { text: 'Nicht klicken und die Mail der IT melden', richtig: true,
          antwort: 'mach ich. nur – ist das nicht peinlich? ich hab ja nix falsch gemacht, aber ich komm mir blöd vor sowas zu melden' },
        { text: 'Einfach löschen',
          antwort: 'besser als klicken, aber nicht optimal. wenn du <b>meldest</b>, kann sabrina prüfen ob kollegen die mail auch haben und den absender sperren' },
        { text: 'An die Kollegen weiterleiten zur Warnung',
          antwort: 'gut gemeint, aber dann klickt garantiert einer drauf 🙈 lieber nur an die <b>it</b> melden, die warnt dann zentral' }
      ] },

    { typ: 'frage', text: 'Ist Melden peinlich?',
      optionen: [
        { text: 'Nein – und genau das muss die Firma sicherstellen', richtig: true,
          antwort: 'macht sinn. wenn sich alle schämen meldet keiner mehr was und dann merkt die firma gar nix' },
        { text: 'Ein bisschen, man sollte nur melden wenn man sicher ist',
          antwort: 'genau umgekehrt 🙂 ein <b>meldeweg ohne schuldzuweisung</b> ist eine Maßnahme für sich. wo leute angst vor ärger haben, meldet niemand mehr – und genau dann wird es gefährlich' }
      ] },

    { typ: 'nachricht', text: 'okay gemeldet ✅ sabrina hat direkt geantwortet, war echt phishing. drei kollegen hatten die auch' },
    { typ: 'nachricht', text: 'mal angenommen ich hätte mein passwort eingegeben. was dann?' },

    { typ: 'frage', text: 'Was hilft, wenn die Zugangsdaten schon weg sind?',
      optionen: [
        { text: 'Zwei-Faktor-Authentifizierung', richtig: true,
          antwort: 'also passwort allein reicht dem angreifer nicht. aber ich sollte es trotzdem sofort ändern oder?' },
        { text: 'Ein Virenscanner',
          antwort: 'der hilft gegen schadsoftware – hier hast du dein passwort aber <b>freiwillig</b> eingetippt. da hilft nur ein zweiter faktor' }
      ] },

    { typ: 'frage', text: 'Was noch – außer Passwort ändern?',
      optionen: [
        { text: 'Überall ändern, wo dasselbe Passwort genutzt wurde', richtig: true,
          antwort: 'ohh. ich hab das gleiche passwort noch für zwei andere sachen 🫠 okay, heute abend mach ich mir einen passwortmanager' },
        { text: 'Nur das eine Passwort reicht',
          antwort: 'wenn du das passwort noch woanders benutzt hast: <b>überall</b> ändern. angreifer probieren erbeutete zugangsdaten systematisch bei anderen diensten durch' }
      ] },

    { typ: 'nachricht', text: 'eine letzte: warum fallen da überhaupt leute drauf rein? ich dachte immer das sind nur die die sich nicht auskennen' },

    { typ: 'frage', text: 'Was sagst du ihm?',
      optionen: [
        { text: 'Es nutzt normale menschliche Reaktionen aus', richtig: true,
          antwort: 'hilfsbereitschaft und respekt vor autorität. und zeitdruck. das is ja nix dummes, das is normal 😕 deswegen heißt das [[Social Engineering]] oder?' },
        { text: 'Weil die Leute unaufmerksam sind',
          antwort: 'das wär unfair und auch falsch. gute angriffe funktionieren bei aufmerksamen leuten genauso – sie nutzen <b>normale</b> reaktionen: hilfsbereitschaft, respekt vor autorität, zeitdruck' }
      ] },

    { typ: 'frage', text: 'Und wie nennt man es, wenn die Mail gezielt auf eine Person zugeschnitten ist?',
      optionen: [
        { text: 'Spear-Phishing', richtig: true,
          antwort: 'speer-fischen 🎣 also nicht mit dem netz auf alle, sondern gezielt auf einen. mit echten namen und projekten aus linkedin oder so' },
        { text: 'Hoax',
          antwort: 'ne, [[Hoax]] is die falschmeldung ohne schadcode. gezieltes phishing auf eine bestimmte person heißt [[Spear-Phishing]]' }
      ] },

    { typ: 'frage', text: 'Und wenn sich jemand als Chef ausgibt und zu einer eiligen Überweisung drängt?',
      optionen: [
        { text: 'CEO-Fraud', richtig: true, norm: 'Chef-Masche',
          antwort: 'die chef-masche! davon hat frau hagedorn mal erzählt. und was hilft dagegen? man kann ja nicht einfach den chef ignorieren 😅' },
        { text: 'Keylogger',
          antwort: 'ne, der liest tastatureingaben mit. wenn sich einer als chef ausgibt und zur eiligen überweisung drängt, heißt das [[CEO-Fraud]]' }
      ] },

    { typ: 'frage', text: 'Was hilft gegen CEO-Fraud?',
      optionen: [
        { text: 'Feste Freigabeprozesse, unabhängig vom Absender', richtig: true,
          antwort: 'also vier-augen-prinzip und rückruf über die bekannte nummer. und zwar <b>immer</b>, auch wenn der chef drängelt. das nimmt mir auch den druck ehrlich gesagt' },
        { text: 'Mails vom Chef besonders schnell bearbeiten',
          antwort: '😄 genau das wollen die angreifer. was hilft: ein <b>fester prozess</b> – [[Vier-Augen-Prinzip]] und rückruf über die bekannte nummer, egal wer drängelt' }
      ] },

    { typ: 'merk', text: '<b>Phishing</b>: Zeitdruck, Frage nach Zugangsdaten, unpersönliche Anrede, falscher Link. Fehlerfreies Deutsch ist <b>kein</b> Echtheitsbeweis. Richtig: nicht klicken, melden. Gegen [[CEO-Fraud]] hilft ein fester Freigabeprozess.' },

    { typ: 'nachricht', text: 'danke dir 🙏 ich glaub ich bin jetzt offiziell paranoid, aber im guten sinne 😁' }
  ]
});
