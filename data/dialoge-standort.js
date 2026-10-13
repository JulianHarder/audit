/* ===========================================================
   AUDIT – data/dialoge-standort.js
   Frau Dankwart, Standortleitung Bremen. Siezt dich, will
   eine Empfehlung mit Begruendung statt einer Produktliste.
   Bei ihr geht es um Entscheidungen: Funk oder Kabel,
   Standortanbindung, Ausfallsicherheit, Gaestezugang.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'sta-01',
  kontakt: 'standort',
  titel: 'WLAN oder Kabel in der neuen Halle',
  thema: 'Funk und Kabel',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Guten Tag. Ich habe ein Angebot auf dem Tisch, das mir die neue Halle komplett per WLAN anbinden will – „ohne Kabelkanäle, schneller fertig, günstiger".' },
    { typ: 'nachricht', text: 'Das klingt für mich zu gut. In der Halle stehen acht feste Packplätze mit Waage und Etikettendrucker, dazu zwölf Handscanner und vier Stapler.' },

    { typ: 'frage', text: 'Was empfehlen Sie für die acht festen Packplätze?',
      optionen: [
        { text: 'Kabel – feste Arbeitsplätze gehören ans Kabel, Funk nur für das, was sich bewegt', richtig: true, norm: 'WLAN',
          antwort: 'Das ist die richtige Trennlinie. [[WLAN]] ist ein <b>geteiltes</b> Medium: Alle Geräte einer Funkzelle teilen sich die [[Bandbreite]], wie früher am [[Hub]]. Ein fester Platz hat am Kabel seine eigene Leitung – verlässlich und ohne Nachbarn.' },
        { text: 'WLAN – das spart die Kabelkanäle und ist heute schnell genug',
          antwort: 'Die Spitzenwerte im Datenblatt gelten für ein Gerät bei freier Sicht. In einer Halle mit zwanzig Geräten, Stahlregalen und Hubtoren bleibt davon wenig. Und fest ist fest: Ein Platz, der sich nicht bewegt, braucht keinen Funk.' },
        { text: 'Beides parallel, damit immer eines geht',
          antwort: 'Klingt nach [[Redundanz]], ist aber doppelte Technik an jedem Platz samt doppelter Pflege. Sinnvoller ist Kabel für die festen Plätze und ein gutes Funknetz für die mobilen Geräte.' }
      ] },

    { typ: 'nachricht', text: 'Verstanden. Dann bleibt das Funknetz für Scanner und Stapler. Was brauchen wir dafür?' },

    { typ: 'frage', text: 'Worauf kommt es bei der Funkplanung in der Halle an?',
      optionen: [
        { text: 'Mehrere Access Points mit derselben SSID, aber unterschiedlichen Kanälen', richtig: true, norm: 'Funkkanal',
          antwort: 'Richtig. Dieselbe [[SSID]] ermöglicht [[Roaming]] – der Scanner wandert mit dem Fahrer von Zelle zu Zelle, ohne die Verbindung zu verlieren. Benachbarte [[Access Point]]s brauchen aber <b>verschiedene [[Funkkanal|Kanäle]]</b>, sonst stören sie sich gegenseitig.' },
        { text: 'Ein starker Access Point in der Hallenmitte',
          antwort: 'Mehr Sendeleistung hilft nur in einer Richtung: Der Access Point wird weiter gehört, der kleine Scanner aber nicht. Eine Funkverbindung braucht beide Richtungen – deshalb mehrere kleine Zellen statt einer großen.' },
        { text: 'Für jeden Access Point eine eigene SSID, damit man sie unterscheiden kann',
          antwort: 'Dann müsste sich jedes Gerät beim Durchfahren neu anmelden. Für Übersicht ist die SSID nicht da; verschiedene SSIDs nutzt man zur <b>Trennung</b> von Netzen, etwa für Gäste.' }
      ] },

    { typ: 'nachricht', text: 'Noch eine Frage zum Geld, weil ich das Angebot begründen muss: 2,4 oder 5 Gigahertz?' },

    { typ: 'frage', text: 'Was ist der Unterschied zwischen 2,4 und 5 GHz?',
      optionen: [
        { text: '2,4 GHz reicht weiter und durch Wände, hat aber nur drei störungsfreie Kanäle; 5 GHz ist schneller mit mehr Kanälen bei kürzerer Reichweite', richtig: true, norm: 'IEEE 802.11',
          antwort: 'Genau. In der Halle heißt das: 5 GHz für die Fläche mit vielen Zellen, 2,4 GHz als Rückfallebene für Geräte, die nichts anderes können. Die alten Handscanner gehören oft dazu.' },
        { text: '5 GHz reicht weiter, weil die Frequenz höher ist',
          antwort: 'Umgekehrt: Je höher die Frequenz, desto geringer die Reichweite und desto stärker die Dämpfung durch Wände und Regale.' },
        { text: 'Der Unterschied betrifft nur die Verschlüsselung',
          antwort: 'Die Verschlüsselung ist von der Frequenz unabhängig. Es geht um Reichweite, Tempo und die Zahl nutzbarer [[Funkkanal|Kanäle]].' }
      ] },

    { typ: 'merk', text: '[[WLAN]] ist ein <b>geteiltes</b> Medium: feste Arbeitsplätze ans Kabel, Funk für alles Mobile. Mehrere [[Access Point]]s mit gleicher [[SSID]] für [[Roaming]], aber unterschiedlichen [[Funkkanal|Kanälen]]. 2,4 GHz = Reichweite, 5 GHz = Tempo und Kanäle.' },

    { typ: 'nachricht', text: 'Damit kann ich das Angebot ablehnen und ein sinnvolles anfordern. Danke.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sta-02',
  kontakt: 'standort',
  titel: 'Bremen ans Netz holen',
  thema: 'Standortvernetzung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Nächstes Thema. Mein Standort hier in Bremen arbeitet noch mit einer eigenen Warenwirtschaft und schickt abends eine Datei nach Osnabrück. Das soll aufhören.' },
    { typ: 'nachricht', text: 'Mir wurden zwei Wege angeboten: eine Standleitung des Providers für 480 Euro im Monat, oder ein Tunnel über die vorhandenen Internetanschlüsse für 40 Euro.' },

    { typ: 'frage', text: 'Was ist ein Site-to-Site-VPN?',
      optionen: [
        { text: 'Ein verschlüsselter Tunnel zwischen den Routern beider Standorte – für die Anwender unsichtbar', richtig: true, norm: 'Site-to-Site-VPN',
          antwort: 'Richtig. Bei der [[Standortvernetzung]] bauen die beiden [[Router]] den Tunnel auf, nicht die einzelnen Rechner. Für Ihre Leute in Bremen sieht die Warenwirtschaft danach aus wie ein Server im eigenen Haus.' },
        { text: 'Jeder Mitarbeiter baut von seinem Rechner aus eine VPN-Verbindung auf',
          antwort: 'Das ist die andere Bauform – der Zugang für einzelne Geräte, wie im Homeoffice. Site-to-Site verbindet <b>Netze</b> und läuft dauerhaft.' },
        { text: 'Eine eigene physische Leitung zwischen beiden Standorten',
          antwort: 'Das wäre die Standleitung aus dem anderen Angebot. Das [[VPN]] nutzt die vorhandenen Internetanschlüsse und sichert die Strecke durch Verschlüsselung.' }
      ] },

    { typ: 'nachricht', text: 'Und warum kostet die Standleitung dann das Zwölffache? Dieselben Daten, dieselbe Entfernung.' },

    { typ: 'frage', text: 'Wofür zahlt man bei einer Standleitung?',
      optionen: [
        { text: 'Für die zugesagte Dienstgüte: garantierte Bandbreite, Verfügbarkeit und Entstörzeit im SLA', richtig: true, norm: 'SLA',
          antwort: 'Genau. Bezahlt wird nicht das Tempo, sondern die Zusage. Ein Privatanschluss hat keine garantierte [[Bandbreite]] und keine Entstörfrist – im Störungsfall stehen Sie in derselben Warteschlange wie der Nachbar. Das [[SLA]] ist der ganze Unterschied.' },
        { text: 'Für mehr Bandbreite',
          antwort: 'Oft ist die Standleitung sogar langsamer als der Internetanschluss. Garantiert ist dafür, dass sie die zugesagte Rate <b>immer</b> liefert.' },
        { text: 'Für die Verschlüsselung der Strecke',
          antwort: 'Eine Standleitung ist nicht automatisch verschlüsselt – sie ist nur nicht öffentlich. Verschlüsseln sollte man trotzdem; das [[VPN]] macht es von Haus aus.' }
      ] },

    { typ: 'nachricht', text: 'Dann die Entscheidung. Über die Strecke laufen die Warenwirtschaft, die Telefonie und das abendliche Backup nach Osnabrück.' },

    { typ: 'frage', text: 'Was empfehlen Sie?',
      optionen: [
        { text: 'VPN über Geschäftskundenanschlüsse mit SLA – und die Telefonie bei Engpässen bevorzugt behandeln', richtig: true,
          antwort: 'Eine gute Abwägung: Der Tunnel ist völlig ausreichend, aber nicht über einen Privatanschluss. Entscheidend ist das [[SLA]] des Anschlusses, nicht die Bauform der Verbindung. Und weil Telefonie empfindlich auf [[Latenz]] reagiert, bekommt sie Vorrang vor dem Backup.' },
        { text: 'Die Standleitung, bei Telefonie geht man kein Risiko ein',
          antwort: 'Verteidigbar, aber 5.280 Euro im Jahr für eine Zusage, die ein Geschäftskundenanschluss zu einem Bruchteil auch gibt. Das Risiko liegt nicht in der Bauform, sondern im [[SLA]].' },
        { text: 'Das billige VPN über die vorhandenen Anschlüsse',
          antwort: 'Zu kurz gesprungen: Über diese Strecke läuft künftig der gesamte Betrieb des Standorts. Ohne zugesagte Entstörzeit steht Bremen im Störungsfall unbestimmt lange still.' }
      ] },

    { typ: 'nachricht', text: 'Eine letzte Sache will der Anbieter noch verkaufen: eine zweite Leitung als Reserve, 60 Euro im Monat.' },

    { typ: 'frage', text: 'Worauf achten Sie bei der Reserveleitung?',
      optionen: [
        { text: 'Dass sie über einen anderen Anbieter und einen anderen Weg ins Haus kommt', richtig: true, norm: 'Redundanz',
          antwort: 'Das ist der entscheidende Punkt. Zwei Leitungen desselben Anbieters im selben Kabelgraben sind keine [[Redundanz]] – ein Baggerbiss trifft beide. Eine echte [[Redundante Anbindung]] nutzt eine andere Technik und einen anderen Weg, zum Beispiel Mobilfunk als Rückfall.' },
        { text: 'Dass sie genauso schnell ist wie die erste',
          antwort: 'Angenehm, aber nicht nötig. Im Notbetrieb reichen Warenwirtschaft und Telefonie; das Backup kann warten.' },
        { text: 'Dass beide Leitungen gleichzeitig genutzt werden',
          antwort: 'Lastverteilung ist möglich, aber nicht der Zweck. Zuerst muss sichergestellt sein, dass der Ausfall der einen die andere nicht mitnimmt.' }
      ] },

    { typ: 'merk', text: 'Standorte verbindet ein [[Standortvernetzung|Site-to-Site-VPN]] zwischen den [[Router]]n – Netz zu Netz, nicht Gerät zu Netz. Bezahlt wird bei Leitungen die Zusage im [[SLA]], nicht das Tempo. Eine [[Redundante Anbindung]] zählt nur, wenn sie über einen <b>anderen Weg und Anbieter</b> läuft.' },

    { typ: 'nachricht', text: 'Sehr gut. Ich beauftrage den Geschäftskundenanschluss mit Mobilfunk-Rückfall.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sta-03',
  kontakt: 'standort',
  titel: 'Was kostet eine Stunde Stillstand?',
  thema: 'Ausfallsicherheit',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Gestern war das Netz im Lager 40 Minuten weg. Ein Switch im Verteilerschrank hatte ein defektes Netzteil. Niemand konnte kommissionieren.' },
    { typ: 'nachricht', text: 'Ich will aus dem Vorfall etwas lernen, bevor die Geschäftsführung fragt. Zuerst: Wo waren wir angreifbar?' },

    { typ: 'frage', text: 'Was war die Schwachstelle in diesem Aufbau?',
      optionen: [
        { text: 'Der zentrale Switch war ein Einzelpunkt des Ausfalls – im Stern hängt alles an ihm', richtig: true, norm: 'Sterntopologie',
          antwort: 'Richtig. Die [[Sterntopologie]] ist gut für die Fehlersuche, verlagert aber das Risiko in die Mitte. Fällt dort etwas aus, steht das ganze Segment – genau das ist passiert.' },
        { text: 'Die Verkabelung war zu alt',
          antwort: 'Die Kabel haben gehalten, das Netzteil ist ausgefallen. Der Fehler saß im Gerät, nicht in der Leitung.' },
        { text: 'Es fehlte eine Firewall',
          antwort: 'Eine [[Firewall]] schützt vor unerwünschten Verbindungen, nicht vor einem defekten Netzteil. Hier geht es um die [[Verfügbarkeit]].' }
      ] },

    { typ: 'nachricht', text: 'Angenommen, ich will das Risiko verkleinern. Mir wurden drei Dinge angeboten: ein Ersatzgerät in den Schrank, ein zweites Netzteil im Switch, eine USV.' },

    { typ: 'mehrfach', text: 'Was hätte den Ausfall von gestern tatsächlich verhindert oder verkürzt?',
      optionen: [
        { text: 'Ein zweites Netzteil im Switch – das Gerät läuft weiter', richtig: true },
        { text: 'Ein vorkonfiguriertes Ersatzgerät im Schrank – Tausch in Minuten statt Stunden', richtig: true },
        { text: 'Eine aktuelle Sicherung der Switch-Konfiguration', richtig: true },
        { text: 'Eine USV am Verteilerschrank' },
        { text: 'Eine zweite Internetleitung' }
      ],
      antwortRichtig: 'Richtig. Das zweite Netzteil greift bei genau diesem Fehler, das vorkonfigurierte Ersatzgerät verkürzt jeden anderen Gerätedefekt – und ohne Konfigurationssicherung wird aus dem Tausch eine Nachtschicht. Die [[USV]] hätte hier nichts geholfen, weil der Strom nicht weg war, und die zweite Internetleitung betrifft den Weg nach draußen, nicht das Lager.',
      antwortFalsch: 'Denken Sie an den konkreten Fehler: ein defektes Netzteil im Switch. Die [[USV]] hilft bei Stromausfall, nicht bei Gerätedefekt, und eine zweite Internetleitung hätte am Lagernetz nichts geändert. Wirksam sind Maßnahmen am Gerät selbst – und die Vorbereitung für den Tausch.' },

    { typ: 'nachricht', text: 'Jetzt der Teil, mit dem ich zur Geschäftsführung gehe. Die fragt nach Geld, nicht nach Netzteilen.' },

    { typ: 'frage', text: 'Wie begründen Sie die Investition?',
      optionen: [
        { text: 'Über die Kosten des Stillstands: 40 Minuten mal die Zahl der stehenden Arbeitsplätze, gegen die Einmalkosten gerechnet', richtig: true,
          antwort: 'Genau so. 22 Leute im Lager mal 40 Minuten sind rund 15 Stunden Arbeitszeit, dazu die verspäteten Touren. Ein zweites Netzteil und ein Ersatzgerät kosten einmalig weniger als zwei solche Vorfälle – das ist eine Rechnung, die die Geschäftsführung nachvollziehen kann.' },
        { text: 'Mit dem Hinweis, dass Redundanz zum Stand der Technik gehört',
          antwort: 'Stimmt, überzeugt aber keine Geschäftsführung. Vergleichen Sie die Kosten des Ausfalls mit den Kosten der Maßnahme – daran lässt sich entscheiden.' },
        { text: 'Mit dem Risiko eines Bußgelds',
          antwort: 'Hier sind keine personenbezogenen Daten betroffen, es ging um [[Verfügbarkeit]]. Das Argument wäre an dieser Stelle vorgeschoben.' }
      ] },

    { typ: 'karte', titel: 'Die Geräte im Verteilerschrank', quelle: 'netzgeraete',
      keys: ['kabel', 'switch', 'router', 'firewall'] },

    { typ: 'merk', text: 'Im [[Sterntopologie|Stern]] sitzt das Risiko in der Mitte. [[Redundanz]] muss zum <b>konkreten</b> Fehlerfall passen: zweites Netzteil gegen Gerätedefekt, [[USV]] gegen Stromausfall, Ersatzgerät samt Konfigurationssicherung gegen die lange Wiederherstellzeit. Begründet wird das über die Kosten des Stillstands.' },

    { typ: 'nachricht', text: 'Mit dieser Rechnung gehe ich rein. Das überzeugt.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sta-04',
  kontakt: 'standort',
  titel: 'WLAN für die Fahrer',
  thema: 'Gästezugang',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Eine Bitte aus dem Fahrerraum: Die Lkw-Fahrer warten bei uns oft zwei Stunden auf die Verladung und hätten gern WLAN. Die Sozialraum-Betreuung findet die Idee gut, mir ist unwohl.' },

    { typ: 'frage', text: 'Dürfen die Fahrer ins Firmen-WLAN?',
      optionen: [
        { text: 'Nein – Gäste bekommen ein eigenes, vom Firmennetz getrenntes Netz', richtig: true, norm: 'VLAN',
          antwort: 'Richtig. Fremde Geräte haben im Firmennetz nichts zu suchen: Niemand weiß, was darauf läuft. Der Gästezugang kommt in ein eigenes [[VLAN]] mit eigener [[SSID]], das ausschließlich ins Internet führt – nicht zu einem einzigen internen System.' },
        { text: 'Ja, mit einem eigenen Passwort für Gäste',
          antwort: 'Ein zweites Passwort auf demselben Netz trennt nichts. Die Geräte wären in derselben [[Broadcast-Domäne]] wie Ihre Arbeitsplätze.' },
        { text: 'Ja, solange die Fahrer eine Nutzungsvereinbarung unterschreiben',
          antwort: 'Eine Vereinbarung regelt die Verantwortung, nicht die Technik. Ein infiziertes Handy hält sich nicht an Unterschriften – die Trennung muss im Netz stattfinden.' }
      ] },

    { typ: 'nachricht', text: 'Gut, ein eigenes Netz also. Was muss darin eingestellt sein?' },

    { typ: 'mehrfach', text: 'Was gehört zu einem sauberen Gästezugang?',
      optionen: [
        { text: 'Eigenes VLAN mit eigener SSID, kein Weg ins interne Netz', richtig: true },
        { text: 'Verschlüsselter Funk mit eigenem, regelmäßig gewechseltem Zugangsschlüssel', richtig: true },
        { text: 'Die Gästegeräte werden voneinander getrennt und sehen sich nicht gegenseitig', richtig: true },
        { text: 'Begrenzte Bandbreite, damit der Betrieb Vorrang behält', richtig: true },
        { text: 'Volle Protokollierung aller besuchten Seiten der Fahrer' }
      ],
      antwortRichtig: 'Richtig. Die vier Punkte zusammen ergeben einen Gästezugang, der niemandem schadet: getrennt, verschlüsselt, Geräte untereinander isoliert und in der [[Bandbreite]] begrenzt. Das Mitschreiben der besuchten Seiten wäre dagegen eine Verarbeitung personenbezogener Daten ohne Rechtsgrundlage – und bringt für die Sicherheit nichts.',
      antwortFalsch: 'Fast. Die technischen Punkte sind alle richtig und gehören zusammen. Was nicht dazugehört, ist das Mitschreiben des Surfverhaltens: Das wäre eine Verarbeitung personenbezogener Daten ohne Rechtsgrundlage und für den Schutz des Firmennetzes ohne Nutzen.' },

    { typ: 'nachricht', text: 'Die Betreuung fragt noch, ob die Fahrer dafür ihre Daten angeben müssen – Name, Kennzeichen, Handynummer.' },

    { typ: 'frage', text: 'Brauchen wir die Daten der Fahrer?',
      optionen: [
        { text: 'Nein – ein gemeinsamer Zugangsschlüssel reicht, mehr Daten brauchen wir für den Zweck nicht', richtig: true, norm: 'Datenminimierung',
          antwort: 'Richtig, und das ist <b>Datenminimierung</b> in Reinform: Der Zweck ist „Internet im Warteraum". Dafür braucht niemand Name und Kennzeichen. Was man nicht erhebt, kann auch nicht verloren gehen.' },
        { text: 'Ja, zur Nachvollziehbarkeit bei Missbrauch',
          antwort: 'Verständlicher Gedanke, aber unverhältnismäßig: Die Trennung des Gästenetzes verhindert den Schaden bereits. Daten „für den Fall der Fälle" zu sammeln, ist genau das, was die Datenminimierung untersagt.' },
        { text: 'Ja, das verlangt das Telekommunikationsrecht',
          antwort: 'Eine allgemeine Pflicht, Nutzer eines offenen WLANs zu registrieren, gibt es nicht – die früher diskutierte Störerhaftung für WLAN-Betreiber ist entfallen.' }
      ] },

    { typ: 'merk', text: 'Fremde Geräte kommen in ein eigenes [[VLAN]] mit eigener [[SSID]] und ausschließlich ins Internet. Dazu Verschlüsselung, Trennung der Gäste untereinander und begrenzte [[Bandbreite]]. Erhoben wird dabei nichts, was der Zweck nicht erfordert (<b>Datenminimierung</b>).' },

    { typ: 'nachricht', text: 'Damit kann ich dem Fahrerraum zusagen. Ich leite es an Mirko weiter.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sta-05',
  kontakt: 'standort',
  titel: 'Die Warenwirtschaft in die Cloud?',
  thema: 'Cloud und Anbindung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Der Anbieter unserer Warenwirtschaft stellt um: Künftig gibt es die Software nur noch als Mietlösung in seinem Rechenzentrum. Unser Server hier wäre dann überflüssig.' },
    { typ: 'nachricht', text: 'Die Geschäftsführung findet das gut – kein Server, keine Updates, keine Backups. Ich soll die Netzseite bewerten.' },

    { typ: 'frage', text: 'Was ändert sich für das Netz grundlegend?',
      optionen: [
        { text: 'Die Internetleitung wird vom Komfort zum Betriebsmittel – fällt sie aus, steht der Betrieb', richtig: true,
          antwort: 'Das ist der entscheidende Satz für Ihre Vorlage. Bisher läuft das Lager weiter, wenn das Internet weg ist. Danach hängt jeder Scanvorgang an der Leitung. Die [[Verfügbarkeit]] der Anbindung wird damit genauso wichtig wie die des Servers vorher.' },
        { text: 'Nichts – die Anwendung sieht für die Nutzer gleich aus',
          antwort: 'Für die Nutzer ja, für das Risiko nicht. Der Weg zur Anwendung führt künftig über eine Leitung, die Ihnen nicht gehört.' },
        { text: 'Das interne Netz wird überflüssig',
          antwort: 'Im Gegenteil: Scanner, Drucker und Arbeitsplätze hängen weiter im [[LAN]] – sie reden nur mit einem anderen Ziel.' }
      ] },

    { typ: 'nachricht', text: 'Verstanden. Was muss ich dann bei der Leitung fordern?' },

    { typ: 'mehrfach', text: 'Was gehört in die Anforderung an die Anbindung?',
      optionen: [
        { text: 'Zugesagte Verfügbarkeit und Entstörzeit im SLA', richtig: true },
        { text: 'Eine zweite Leitung über einen anderen Anbieter und Weg', richtig: true },
        { text: 'Ausreichender Upload, nicht nur Download', richtig: true },
        { text: 'Priorisierung des Warenwirtschaftsverkehrs vor Downloads', richtig: true },
        { text: 'Eine höhere Download-Rate als bisher' }
      ],
      antwortRichtig: 'Richtig. Zusage ([[SLA]]), zweiter Weg ([[Redundante Anbindung]]), Upload und [[QoS]] gehören zusammen. Der Upload wird regelmäßig übersehen: Scans und Buchungen gehen <b>hinaus</b>, und bei Privatanschlüssen ist genau diese Richtung schmal. Eine höhere Download-Rate allein löst keines dieser Probleme.',
      antwortFalsch: 'Nah dran. Entscheidend sind Zusage, zweiter Weg, genügend <b>Upload</b> und Vorrang für den Betriebsverkehr. Mehr Download-Rate klingt nach Lösung, trifft aber keinen der vier Punkte – Buchungen und Scans gehen hinaus, nicht herein.' },

    { typ: 'nachricht', text: 'Der Anbieter sagt, die Anwendung brauche nur „wenig Bandbreite, dafür geringe Latenz". Das verstehe ich nicht ganz.' },

    { typ: 'frage', text: 'Was heißt das in der Praxis?',
      optionen: [
        { text: 'Die Datenmenge je Buchung ist klein, aber jede Eingabe wartet auf die Antwort – die Wartezeit entscheidet über das Arbeitsgefühl', richtig: true, norm: 'Latenz',
          antwort: 'Genau. Bei vielen kleinen Anfragen zählt nicht die [[Bandbreite]], sondern die [[Latenz]]: 40 Millisekunden je Feldwechsel merkt niemand, 400 machen die Oberfläche unbenutzbar. Deshalb ist die Entfernung zum Rechenzentrum eine ernsthafte Frage.' },
        { text: 'Die Leitung darf langsam sein, Hauptsache sie ist stabil',
          antwort: 'Stabilität ist wichtig, aber „geringe Latenz" meint etwas Genaueres: kurze <b>Antwortzeiten</b>, nicht hohe Verfügbarkeit.' },
        { text: 'Es reicht eine normale Privatleitung',
          antwort: 'Die liefert typischerweise weder zugesagte Latenz noch Entstörzeiten. Gerade weil die Anwendung empfindlich reagiert, braucht es den Geschäftskundenanschluss.' }
      ] },

    { typ: 'nachricht', text: 'Letzte Frage, und sie ist mir die wichtigste: Was passiert, wenn die Leitung trotzdem ausfällt?' },

    { typ: 'frage', text: 'Was gehört in den Notfallplan?',
      optionen: [
        { text: 'Ein beschriebener Notbetrieb: Mobilfunk-Rückfall und für den Totalausfall ein Papierverfahren mit Nacherfassung', richtig: true,
          antwort: 'Richtig, und beides gehört geübt. Technik allein reicht nicht: Wenn beide Wege liegen, muss das Lager wissen, wie Ware ohne System rausgeht und wie nacherfasst wird. Das ist der Punkt, den der Anbieter nicht liefert – den müssen Sie schreiben.' },
        { text: 'Der Anbieter hat ein Rechenzentrum mit 99,9 Prozent Verfügbarkeit, das genügt',
          antwort: 'Die Zusage gilt für sein Rechenzentrum, nicht für Ihre Leitung dorthin. Und 99,9 Prozent erlauben rechnerisch rund neun Stunden Ausfall im Jahr.' },
        { text: 'Die Daten werden lokal zwischengespeichert, dann läuft alles weiter',
          antwort: 'Ob die Anwendung das kann, muss man den Anbieter ausdrücklich fragen – die meisten Mietlösungen können es nicht. Verlassen sollte man sich darauf erst nach einem Test.' }
      ] },

    { typ: 'merk', text: 'Wandert eine Anwendung ins Rechenzentrum des Anbieters, wird die Internetleitung zum <b>Betriebsmittel</b>: [[SLA]], [[Redundante Anbindung|zweiter Weg]], genügend <b>Upload</b> und [[QoS]]. Bei vielen kleinen Anfragen entscheidet die [[Latenz]], nicht die [[Bandbreite]]. Dazu ein beschriebener und geübter Notbetrieb.' },

    { typ: 'nachricht', text: 'Das wird meine Vorlage. Vor allem der Satz mit dem Betriebsmittel.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sta-06',
  kontakt: 'standort',
  titel: 'Die Disposition ins Homeoffice',
  thema: 'Fernzugriff',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Zwei Kolleginnen aus der Disposition möchten zwei Tage die Woche von zu Hause arbeiten. Sie brauchen die Warenwirtschaft, das Laufwerk und die Telefonanlage.' },

    { typ: 'frage', text: 'Wie binden wir sie an?',
      optionen: [
        { text: 'Über ein VPN vom Arbeitsgerät ins Firmennetz – ein Gerät, ein Tunnel', richtig: true, norm: 'VPN',
          antwort: 'Richtig. Das ist die zweite Bauform des [[VPN]]: Hier verbindet sich ein <b>einzelnes Gerät</b> mit dem Netz, anders als bei der [[Standortvernetzung]], die Netz mit Netz verbindet. Danach arbeitet der Laptop, als stünde er im Büro.' },
        { text: 'Mit Portweiterleitungen auf die jeweiligen Büro-PCs',
          antwort: 'Das stellt die Rechner ins Internet – genau das, wovon Herr Semmler abgeraten hat. Eine [[Portweiterleitung]] für Fernzugriff ist der falsche Weg.' },
        { text: 'Die Daten werden abends per Mail hin- und hergeschickt',
          antwort: 'Dann arbeiten zwei Leute auf verschiedenen Ständen derselben Daten. Und vertrauliche Inhalte landen in Postfächern.' }
      ] },

    { typ: 'nachricht', text: 'Gut. Was brauchen die beiden dafür an Technik und Regeln?' },

    { typ: 'mehrfach', text: 'Was gehört zum Homeoffice-Zugang?',
      optionen: [
        { text: 'Ein Dienstgerät, kein privater Rechner', richtig: true },
        { text: 'Anmeldung am VPN mit zweitem Faktor', richtig: true },
        { text: 'Festplattenverschlüsselung auf dem Laptop', richtig: true },
        { text: 'Eine schriftliche Regelung, was zu Hause gilt – Bildschirm, Unterlagen, Familie', richtig: true },
        { text: 'Der Laptop bekommt eine feste öffentliche IP-Adresse' }
      ],
      antwortRichtig: 'Richtig, alle vier zusammen. Das Gerät gehört der Firma, der Tunnel ist mit zweitem Faktor geschützt, die Platte verschlüsselt für den Fall des Verlusts, und die Regelung klärt, was ein Arbeitsplatz zu Hause erfüllen muss. Eine öffentliche [[IP-Adresse]] für den Laptop wäre das Gegenteil: ein direkt erreichbares Gerät im Internet.',
      antwortFalsch: 'Fast. Die vier wirksamen Punkte decken Gerät, Zugang, Verlust und Verhalten ab. Eine öffentliche [[IP-Adresse]] für den Laptop gehört nicht dazu – sie macht ihn von außen direkt erreichbar, ohne irgendeinen Nutzen.' },

    { typ: 'nachricht', text: 'Eine praktische Frage noch: Eine der beiden hat zu Hause nur ein schwaches Mobilfunknetz. Reicht das für die Telefonanlage?' },

    { typ: 'frage', text: 'Was ist bei Telefonie über die Leitung kritisch?',
      optionen: [
        { text: 'Laufzeitschwankungen – gleichmäßig hohe Latenz ist erträglicher als schwankende', richtig: true, norm: 'Jitter',
          antwort: 'Richtig, das nennt sich [[Jitter]]. Sprache wird in kleinen, gleichmäßigen Paketen übertragen; kommen sie unregelmäßig an, klingt es abgehackt – auch bei guter [[Bandbreite]]. Mobilfunk schwankt genau darin stark. Ein Test über eine Woche sagt hier mehr als jedes Datenblatt.' },
        { text: 'Die Bandbreite – Telefonie braucht viel davon',
          antwort: 'Umgekehrt: Ein Gespräch braucht erstaunlich wenig, meist unter 100 kbit/s. Kritisch sind [[Latenz]] und [[Jitter]].' },
        { text: 'Die Verschlüsselung',
          antwort: 'Die kostet kaum Leistung und ist selbstverständlich. Das Qualitätsproblem liegt bei den Laufzeiten.' }
      ] },

    { typ: 'merk', text: 'Homeoffice heißt <b>[[VPN]] vom Gerät ins Netz</b> (nicht Netz zu Netz wie bei der [[Standortvernetzung]]), auf einem Dienstgerät, mit zweitem Faktor und verschlüsselter Platte, dazu eine schriftliche Regelung. Für Telefonie zählen [[Latenz]] und [[Jitter]], nicht die [[Bandbreite]].' },

    { typ: 'nachricht', text: 'Dann starten wir mit einem Testmonat und messen die Telefonie mit. Danke.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'sta-07',
  kontakt: 'standort',
  titel: 'Die Verwaltung zieht um',
  thema: 'Projektplanung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Größere Sache: Die Verwaltung zieht im Mai ins Nachbargebäude, 18 Arbeitsplätze. Ich bin für die Planung verantwortlich und will das Netz nicht am Umzugstag zum Thema machen.' },

    { typ: 'frage', text: 'Was ist der erste Schritt in der Planung?',
      optionen: [
        { text: 'Den Bedarf je Raum erheben: Arbeitsplätze, Drucker, Telefone, Besprechungsräume – daraus ergibt sich die Zahl der Dosen', richtig: true,
          antwort: 'Richtig, und zwar bevor jemand ein Angebot schreibt. Dosen werden nachträglich teuer: Was in der Rohbauphase ein paar Euro kostet, bedeutet später Kabelkanal, Staub und ein Handwerkertermin. Übliche Faustregel sind zwei Dosen je Arbeitsplatz plus Reserve.' },
        { text: 'Switches und Access Points bestellen',
          antwort: 'Zu früh – wie viele und mit wie vielen Ports ergibt sich erst aus dem Bedarf. Erst zählen, dann bestellen.' },
        { text: 'Den Umzugstermin festlegen',
          antwort: 'Der steht ja schon. Die Planung beginnt bei der Frage, was in jedem Raum gebraucht wird.' }
      ] },

    { typ: 'nachricht', text: 'Gut. Das Nachbargebäude muss ans Hauptnetz. Zwischen den Häusern liegen 60 Meter Hof.' },

    { typ: 'frage', text: 'Wie verbinden wir die beiden Gebäude?',
      optionen: [
        { text: 'Mit Lichtwellenleiter im Primärbereich – auch wenn Kupfer die 60 Meter schaffen würde', richtig: true, norm: 'Primärbereich',
          antwort: 'Richtig, und die Begründung ist wichtig: Zwischen zwei Gebäuden liegt der [[Primärbereich]], und dort ist [[Lichtwellenleiter]] gesetzt. Kupfer über zwei Gebäude hinweg bringt Potentialunterschiede mit – bei einem Gewitter wird daraus ein Schadensfall an beiden Enden.' },
        { text: 'Mit einem Cat-7-Kabel durch den Hof, 60 Meter liegen unter 100',
          antwort: 'Die Länge wäre kein Problem, der Potentialausgleich zwischen zwei Gebäuden schon. Genau deshalb schreibt die Norm für den Primärbereich Glasfaser vor.' },
        { text: 'Über eine WLAN-Brücke',
          antwort: 'Ein Behelf, wenn nicht gegraben werden darf. Hier geht ein Graben – dann ist die Faser verlässlicher, schneller und wartungsärmer.' }
      ] },

    { typ: 'karte', titel: 'Welcher Bereich ist das?', quelle: 'verkabelung' },

    { typ: 'nachricht', text: 'Jetzt der Umzugstag selbst. Woran denke ich erfahrungsgemäß zu spät?' },

    { typ: 'mehrfach', text: 'Was muss vor dem Umzugstag fertig sein?',
      optionen: [
        { text: 'Die Abnahmemessung aller Strecken mit Protokoll', richtig: true },
        { text: 'Die Dokumentation von Dosen, Ports und VLANs', richtig: true },
        { text: 'Ein Testarbeitsplatz, der im neuen Gebäude vollständig läuft', richtig: true },
        { text: 'Die Adressplanung für das neue Netz', richtig: true },
        { text: 'Die alten Dosen im bisherigen Gebäude abgeklemmt' }
      ],
      antwortRichtig: 'Richtig. Gemessen, dokumentiert, einmal vollständig durchgetestet und adressmäßig geplant – dann ist der Umzugstag ein Transporttag und kein Projekttag. Das alte Gebäude klemmt man erst ab, wenn das neue nachweislich trägt; vorher ist es die Rückfallebene.',
      antwortFalsch: 'Fast. Alles, was den Umzugstag entlastet, gehört vorher erledigt: Messung, Dokumentation, ein vollständig getesteter Arbeitsplatz und die Adressplanung. Das alte Gebäude bleibt dagegen bis zum Nachweis in Betrieb – es ist die Rückfallebene.' },

    { typ: 'nachricht', text: 'Der Testarbeitsplatz leuchtet mir ein. Was genau soll der beweisen?' },

    { typ: 'frage', text: 'Was testet man an diesem einen Arbeitsplatz?',
      optionen: [
        { text: 'Die ganze Kette: Adresse per DHCP, Namensauflösung, Zugriff auf Laufwerk und Warenwirtschaft, Drucken, Telefonie', richtig: true, norm: 'Fehlersuche',
          antwort: 'Richtig – einmal durch alle Schichten. Genau dabei fallen die Dinge auf, die im Plan nicht stehen: eine [[Firewall]]-Regel, die den neuen Adressbereich nicht kennt, ein Drucker im falschen [[VLAN]], ein [[DNS]]-Eintrag, der noch auf das alte Gebäude zeigt.' },
        { text: 'Ob die Dose Strom auf der Lampe hat',
          antwort: 'Das ist Schicht 1 und beweist am wenigsten. Der Test soll bis zur Anwendung reichen.' },
        { text: 'Ob der Switch alle Ports erkennt',
          antwort: 'Gehört zur Inbetriebnahme des Geräts, sagt aber nichts über Adressen, Rechte und Dienste.' }
      ] },

    { typ: 'merk', text: 'Netzplanung bei einem Umzug: <b>erst Bedarf je Raum</b>, dann Dosen (eine nachträgliche Dose ist um ein Vielfaches teurer). Zwischen Gebäuden gilt der [[Primärbereich]] mit [[Lichtwellenleiter]]. Vor dem Umzugstag fertig: [[Abnahmemessung]], [[Netzdokumentation]], Adressplanung und <b>ein vollständig getesteter Arbeitsplatz</b> – das alte Gebäude bleibt bis dahin Rückfallebene.' },

    { typ: 'nachricht', text: 'Damit habe ich einen Plan, der vor dem Umzugstag anfängt. Genau das wollte ich.' }
  ]
});
