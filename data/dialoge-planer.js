/* ===========================================================
   AUDIT – data/dialoge-planer.js
   Herr Semmler, externe Netzplanung. Duzt dich, rechnet gern
   mit und legt Wert darauf, dass die Zahlen stimmen. Bei ihm
   geht es um Adressen, Masken, Subnetting, NAT und IPv6.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'pla-01',
  kontakt: 'planer',
  titel: 'Ein Adresskonzept für Rampe 7',
  thema: 'IP-Adressen',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Hallo, Semmler hier. Ich soll das Adresskonzept für euer neues Netz aufsetzen und hätte dich gern dabei – du kennst das Haus, ich kenne die Zahlen.' },
    { typ: 'nachricht', text: 'Ich habe im Altbestand ein buntes Durcheinander gefunden: ein paar 192.168.2.x, ein 10.10.0.x und zwei Drucker mit 85.214.-Adressen. Fangen wir grundsätzlich an.' },

    { typ: 'frage', text: 'Welche Adressen gehören in ein Firmennetz?',
      optionen: [
        { text: 'Private Adressen aus 10.0.0.0/8, 172.16.0.0/12 oder 192.168.0.0/16', richtig: true, norm: 'RFC 1918',
          antwort: 'Richtig. [[Private IP-Adresse|Private Adressen]] werden im Internet nicht geroutet, sind deshalb in jedem Haus frei verwendbar und kosten nichts. Nach außen übernimmt [[NAT]].' },
        { text: 'Öffentliche Adressen, die der Provider zuteilt',
          antwort: 'Die bräuchte man für jedes einzelne Gerät, und so viele bekommt man weder geschenkt noch gekauft. Öffentliche Adressen braucht nur, was von außen erreichbar sein muss – und das steht dann in der [[DMZ]].' },
        { text: 'Beliebige Adressen, solange sie im Haus nur einmal vorkommen',
          antwort: 'Das geht eine Weile gut und fällt dann auf: Wer intern 85.214.x nutzt, kann den echten Server unter dieser Adresse im Internet nicht mehr erreichen. Die beiden Drucker sind genau dieser Fall.' }
      ] },

    { typ: 'nachricht', text: 'Sehr gut, die Drucker fliegen also um. Jetzt die Einteilung. Ich schlage 192.168.<b>x</b>.0/24 je Bereich vor – also 192.168.10.0 Büro, .20 Lager, .30 Gäste, .40 Technik.' },

    { typ: 'frage', text: 'Woran erkennt ein Gerät, ob ein Ziel im eigenen Netz liegt?',
      optionen: [
        { text: 'An der Subnetzmaske: stimmt der Netzanteil überein, geht es direkt – sonst über das Standardgateway', richtig: true, norm: 'Subnetzmaske',
          antwort: 'Genau das ist die ganze Logik. Die [[Subnetzmaske]] trennt in der [[IP-Adresse]] Netzanteil und Hostanteil. Ist der Netzanteil gleich, fragt das Gerät per [[ARP]] direkt nach der [[MAC-Adresse]]. Sonst schickt es das Paket ans [[Standardgateway]].' },
        { text: 'Daran, ob beide Geräte am selben Switch stecken',
          antwort: 'Der [[Switch]] spielt dabei keine Rolle. Zwei Geräte am selben Switch mit unterschiedlichem Netzanteil erreichen sich nur über den [[Router]] – das verwirrt im Alltag regelmäßig.' },
        { text: 'An der ersten Zahl der IP-Adresse',
          antwort: 'Das wäre die alte Klassenlogik. Seit [[CIDR]] entscheidet allein die [[Subnetzmaske]], wo das Netz endet.' }
      ] },

    { typ: 'nachricht', text: 'Noch eine Grundsatzfrage, weil im Altbestand jedes Gerät eine feste Adresse von Hand bekommen hat.' },

    { typ: 'frage', text: 'Was bekommt eine feste Adresse, was holt sie per DHCP?',
      optionen: [
        { text: 'Server, Drucker und Netzgeräte fest oder als DHCP-Reservierung, Arbeitsplätze und Mobilgeräte per DHCP', richtig: true, norm: 'DHCP',
          antwort: 'Richtig. Was andere finden müssen, braucht eine verlässliche Adresse; was nur selbst hinausfindet, bekommt sie per [[DHCP]]. Eine Reservierung im DHCP ist dabei oft besser als eine feste Adresse am Gerät: Die Zuordnung steht dann an einer Stelle, nicht auf sechzig Geräten.' },
        { text: 'Alles fest, dann weiß man immer, wo was ist',
          antwort: 'Bei sechzig Arbeitsplätzen wird daraus eine Liste, die niemand pflegt – und die Doppelvergaben kommen von allein. [[Doppelte IP-Adresse|Genau so entstehen Adresskonflikte]].' },
        { text: 'Alles per DHCP, auch Server und Switches',
          antwort: 'Riskant: Wenn der DHCP-Server selbst ausfällt oder langsam startet, soll nicht gleich die halbe Infrastruktur die Adresse verlieren. Server und Netzgeräte bleiben fest.' }
      ] },

    { typ: 'karte', titel: 'Adressbereiche und Sonderfälle', quelle: 'ipklassen' },

    { typ: 'merk', text: 'Intern [[Private IP-Adresse|private Adressen]] nach [[Private IP-Adresse|RFC 1918]], nach außen [[NAT]]. Ob ein Ziel direkt erreichbar ist, entscheidet allein die [[Subnetzmaske]] – nicht das Kabel. Feste Adressen für Server, Drucker und Netzgeräte, [[DHCP]] für den Rest.' },

    { typ: 'nachricht', text: 'Damit habe ich eine Grundlage. Morgen rechnen wir die Teilnetze.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'pla-02',
  kontakt: 'planer',
  titel: 'Netzanteil und Hostanteil',
  thema: 'Subnetzmaske',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Vor dem Rechnen die Begriffe, sonst rechnen wir aneinander vorbei. Ich gebe dir eine Adresse: <b>192.168.10.37 / 255.255.255.0</b>.' },

    { typ: 'frage', text: 'Wie heißen Netzadresse und Broadcast-Adresse dieses Netzes?',
      optionen: [
        { text: 'Netz 192.168.10.0, Broadcast 192.168.10.255', richtig: true, norm: 'Netz- und Broadcast-Adresse',
          antwort: 'Richtig. Die Maske sagt: die ersten drei Byte sind Netz, das letzte ist Host. Alle Host-Bits auf 0 ergibt die [[Netzadresse]], alle auf 1 die [[Broadcast-Adresse]]. Beide werden keinem Gerät gegeben.' },
        { text: 'Netz 192.168.10.1, Broadcast 192.168.10.254',
          antwort: 'Das sind die erste und die letzte <b>nutzbare</b> Adresse – oft ist .1 das [[Standardgateway]]. [[Netzadresse]] und [[Broadcast-Adresse]] liegen jeweils eins daneben.' },
        { text: 'Netz 192.168.0.0, Broadcast 192.168.255.255',
          antwort: 'Das wäre bei der Maske 255.255.0.0 richtig, also /16. Hier sind drei Byte Netzanteil, nicht zwei.' }
      ] },

    { typ: 'nachricht', text: 'Gut. Dann die Zahl, die in jeder Prüfung auftaucht.' },

    { typ: 'frage', text: 'Wie viele Geräte passen in ein /24?',
      optionen: [
        { text: '254', richtig: true, norm: 'Hosts = 2^Hostbits − 2',
          antwort: 'Richtig. 32 − 24 = 8 Hostbits, also 2^8 = 256 Adressen, minus [[Netzadresse]] und [[Broadcast-Adresse]] bleiben <b>254</b>. Die Formel lautet immer: 2 hoch Hostbits, minus 2.' },
        { text: '256',
          antwort: 'Das ist die Gesamtzahl der Adressen. Zwei davon sind vergeben: die [[Netzadresse]] und die [[Broadcast-Adresse]].' },
        { text: '255',
          antwort: 'Der häufigste Zahlendreher. Es gehen <b>zwei</b> Adressen ab, nicht eine.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt eine aus dem echten Leben. Ein Rechner hat <b>192.168.10.200 / 255.255.255.128</b>, der Server <b>192.168.10.50</b> mit derselben Maske. Beide stecken am selben Switch.' },

    { typ: 'frage', text: 'Erreichen sich die beiden direkt?',
      optionen: [
        { text: 'Nein – /25 teilt das Netz bei 128, die beiden liegen in verschiedenen Subnetzen', richtig: true, norm: 'Subnetzmaske',
          antwort: 'Genau. 255.255.255.128 ist /25: Das Netz geht von .0 bis .127, das zweite von .128 bis .255. Der Server liegt im ersten, der Rechner im zweiten. Ohne [[Router]] geht nichts – <b>am selben Switch zu stecken, hilft nicht</b>.' },
        { text: 'Ja, beide Adressen beginnen mit 192.168.10',
          antwort: 'Die drei gleichen Zahlen täuschen. Entscheidend ist der Netzanteil nach der [[Subnetzmaske]], und der reicht bei /25 ins vierte Byte hinein.' },
        { text: 'Ja, weil sie am selben Switch hängen',
          antwort: 'Das ist der Denkfehler, den dieser Fall aufdecken soll. Der [[Switch]] arbeitet auf [[OSI-Modell|Schicht 2]] und interessiert sich nicht für Subnetze. Die Trennung passiert eine Schicht höher.' }
      ] },

    { typ: 'karte', titel: 'Präfix, Maske und Hostzahl', quelle: 'subnetze',
      keys: ['24', '25', '26', '27', '28'] },

    { typ: 'merk', text: 'Hostbits = 32 − Präfix, <b>nutzbare Hosts = 2^Hostbits − 2</b> ([[Netzadresse]] und [[Broadcast-Adresse]] gehen ab). Ob zwei Geräte sich direkt erreichen, entscheidet der Netzanteil – nicht, an welchem [[Switch]] sie stecken.' },

    { typ: 'nachricht', text: 'Du hast die Mechanik. Dann teilen wir morgen wirklich ein Netz auf.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'pla-03',
  kontakt: 'planer',
  titel: 'Vier Netze aus einem',
  thema: 'Subnetting',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', text: 'Heute die Rechenaufgabe. Vom Provider habt ihr für die Standortkopplung ein <b>192.168.50.0/24</b> zugewiesen bekommen, und ich soll daraus vier gleich große Teilnetze machen: Wareneingang, Kommissionierung, Versand, Technik.' },

    { typ: 'frage', text: 'Welches Präfix brauchen wir für vier gleich große Subnetze?',
      optionen: [
        { text: '/26', richtig: true, norm: 'Subnetting',
          antwort: 'Richtig. Jedes zusätzliche Netzbit verdoppelt die Zahl der Subnetze: /25 ergibt zwei, /26 ergibt vier. Wir leihen uns also <b>zwei Bits</b> vom Hostanteil.' },
        { text: '/28',
          antwort: 'Das wären 16 Subnetze – viermal so viele wie gebraucht, mit nur noch 14 Hosts je Netz. Richtig gerechnet, aber zu klein geschnitten.' },
        { text: '/22',
          antwort: 'Falsche Richtung: Ein kleineres Präfix macht das Netz <b>größer</b>, nicht kleiner. Zum Teilen wird das Präfix verlängert.' }
      ] },

    { typ: 'frage', text: 'Wie lautet die Subnetzmaske zu /26?',
      optionen: [
        { text: '255.255.255.192', richtig: true, norm: 'CIDR',
          antwort: 'Richtig. Zwei zusätzliche Eins-Bits von links im letzten Byte: 128 + 64 = 192. Die Wertetabelle lohnt sich zu merken – 128, 192, 224, 240, 248, 252.' },
        { text: '255.255.255.64',
          antwort: 'Eine Maske besteht von links aus lauter Eins-Bits. 64 wäre 01000000 – mit einer Null vorne, das ist keine gültige Maske.' },
        { text: '255.255.192.0',
          antwort: 'Das ist /18. Die 192 steht hier ein Byte zu weit links.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt die Grenzen. Mit zwei geliehenen Bits ist die Blockgröße 64.' },

    { typ: 'frage', text: 'Wie heißen die vier Netzadressen?',
      optionen: [
        { text: '192.168.50.0, .64, .128 und .192', richtig: true,
          antwort: 'Genau. Die Blockgröße ergibt sich als 256 − 192 = 64, also gehen die [[Netzadresse|Netzadressen]] in Schritten von 64. Das erste Netz reicht von .0 bis .63, das zweite von .64 bis .127 und so weiter.' },
        { text: '192.168.50.1, .65, .129 und .193',
          antwort: 'Das sind jeweils die ersten <b>nutzbaren</b> Adressen. Die [[Netzadresse]] liegt eins darunter.' },
        { text: '192.168.50.0, .26, .52 und .78',
          antwort: 'Die 26 aus dem Präfix ist keine Schrittweite. Die Blockgröße rechnet sich aus der Maske: 256 − 192 = 64.' }
      ] },

    { typ: 'frage', text: 'Wie viele Geräte passen in jedes der vier Netze?',
      optionen: [
        { text: '62', richtig: true, norm: 'Hosts = 2^Hostbits − 2',
          antwort: 'Richtig: 32 − 26 = 6 Hostbits, 2^6 = 64 Adressen, minus [[Netzadresse]] und [[Broadcast-Adresse]] bleiben <b>62</b>. Für je 30 bis 40 Geräte je Bereich reicht das mit Luft.' },
        { text: '64',
          antwort: 'Das ist die Blockgröße, also alle Adressen des Teilnetzes. Zwei davon sind nicht vergebbar.' },
        { text: '63',
          antwort: 'Wieder der Zahlendreher mit der einen statt der zwei abgehenden Adressen. Es sind 64 − 2 = 62.' }
      ] },

    { typ: 'nachricht', text: 'Letzte Frage, und die ist eine Fangfrage: Welche Broadcast-Adresse hat das zweite Teilnetz, also 192.168.50.64/26?' },

    { typ: 'frage', text: 'Broadcast-Adresse von 192.168.50.64/26?',
      optionen: [
        { text: '192.168.50.127', richtig: true, norm: 'Broadcast-Adresse',
          antwort: 'Richtig. Das Netz reicht von .64 bis .127, also ist .127 die [[Broadcast-Adresse]] und .126 die letzte nutzbare Adresse. Die nächste [[Netzadresse]] ist .128.' },
        { text: '192.168.50.255',
          antwort: 'Das wäre der Broadcast des <b>gesamten</b> /24. Nach der Aufteilung hat jedes Teilnetz seinen eigenen – hier .127.' },
        { text: '192.168.50.128',
          antwort: 'Eins zu weit: .128 ist schon die [[Netzadresse]] des dritten Teilnetzes.' }
      ] },

    { typ: 'karte', titel: 'Die Masken zum Nachrechnen', quelle: 'subnetze' },

    { typ: 'merk', text: '[[Subnetting]] in vier Schritten: <b>1.</b> Bits leihen – je Bit doppelt so viele Netze. <b>2.</b> Maske bilden (128, 192, 224, 240, 248, 252). <b>3.</b> Blockgröße = 256 − letztes Maskenbyte. <b>4.</b> Hosts = 2^Hostbits − 2. Das letzte Netz endet bei .255, jedes Teilnetz hat seine eigene [[Broadcast-Adresse]].' },

    { typ: 'nachricht', text: 'Sauber durchgerechnet. Genau dieses Schema kommt in der Prüfung – nur mit anderen Zahlen.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'pla-04',
  kontakt: 'planer',
  titel: 'Sechzig Rechner, eine Adresse',
  thema: 'NAT und Portweiterleitung',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Eine Frage aus der Besprechung gestern, die ich dir weitergebe. Frau Hagedorn wollte wissen, wie sechzig Rechner mit <b>einer</b> öffentlichen Adresse ins Internet kommen.' },

    { typ: 'frage', text: 'Wie funktioniert NAT?',
      optionen: [
        { text: 'Der Router tauscht die private Quelladresse gegen seine öffentliche und merkt sich die Zuordnung', richtig: true, norm: 'NAT',
          antwort: 'Richtig. Der [[Router]] führt eine Tabelle: welche interne Verbindung gehört zu welchem Eintrag. Die Antwort aus dem Internet wird darüber wieder dem richtigen Rechner zugeordnet.' },
        { text: 'Alle Rechner teilen sich eine Verbindung nach dem Reihum-Prinzip',
          antwort: 'Dann könnte immer nur einer surfen. [[NAT]] übersetzt stattdessen parallel – alle gleichzeitig.' },
        { text: 'Der Provider weist jedem Rechner im Hintergrund eine eigene Adresse zu',
          antwort: 'Es gibt genau eine Adresse, mehr wird nicht geliefert. Die Übersetzung passiert bei euch im Haus, nicht beim Provider.' }
      ] },

    { typ: 'nachricht', text: 'Und jetzt die Nachfrage, die sie direkt hinterhergeschoben hat: Woran erkennt der Router, zu welchem der sechzig Rechner eine Antwort gehört?' },

    { typ: 'frage', text: 'Woran unterscheidet der Router die Verbindungen?',
      optionen: [
        { text: 'An der Portnummer – jede Verbindung bekommt einen eigenen Quellport', richtig: true, norm: 'PAT',
          antwort: 'Genau. Deshalb heißt das genauer <b>PAT</b>, Port Address Translation: Der [[Router]] merkt sich zu jedem Quell-[[Port]], welcher interne [[Socket]] dahintersteckt. Umgangssprachlich sagt trotzdem jeder NAT dazu.' },
        { text: 'An der MAC-Adresse des Rechners',
          antwort: 'Die [[MAC-Adresse]] bleibt im lokalen Netz und steht nicht im IP-Paket. Der Router braucht ein Merkmal, das er auch nach außen tragen kann.' },
        { text: 'Am Benutzernamen der Anmeldung',
          antwort: 'Davon weiß ein [[Router]] nichts – er arbeitet auf [[OSI-Modell|Schicht 3 und 4]], nicht mit Benutzerkonten.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt der Teil, bei dem ich Bauchschmerzen habe. Der Versandleiter will von unterwegs auf seinen Büro-PC – er hat gelesen, wie man „Port 3389 aufmacht".' },

    { typ: 'frage', text: 'Was hältst du von der Portweiterleitung für RDP?',
      optionen: [
        { text: 'Untauglich – ein offener RDP-Port aus dem Internet wird binnen Stunden automatisiert angegriffen. Dafür gibt es VPN', richtig: true, norm: 'Portweiterleitung',
          antwort: 'Genau. Eine [[Portweiterleitung]] hebt den Schutz von [[NAT]] für diesen einen Dienst auf: Der Rechner steht damit im Internet. [[RDP]] gehört zu den am häufigsten durchprobierten Zugängen überhaupt. Der richtige Weg ist ein [[VPN]] – erst in das Netz hinein, dann intern weiter.' },
        { text: 'In Ordnung, solange das Passwort lang ist',
          antwort: 'Ein langes Passwort schützt gegen Durchprobieren, nicht gegen Lücken im Dienst selbst. Und protokolliert wird jeder Versuch – der Dienst bleibt von außen sichtbar.' },
        { text: 'In Ordnung, wenn man einen anderen Port nach außen nimmt',
          antwort: 'Das ist nur Verschleierung: Ein Portscan findet den Dienst trotzdem in Minuten. Sicherheit durch Verstecken gilt zu Recht als untauglich.' }
      ] },

    { typ: 'nachricht', text: 'Danke, dann schreibe ich das genau so ins Konzept – inklusive der Begründung, warum nicht.' },

    { typ: 'mehrfach', text: 'Was gehört in die Planung, wenn ein Dienst doch von außen erreichbar sein muss?',
      optionen: [
        { text: 'Der Dienst steht in der DMZ, nicht im Büronetz', richtig: true },
        { text: 'Nur der benötigte Port wird geöffnet, alles andere bleibt zu', richtig: true },
        { text: 'Zugriff nur verschlüsselt und mit zweitem Faktor', richtig: true },
        { text: 'Updates für diesen Dienst haben Vorrang', richtig: true },
        { text: 'Der Dienst wird auf einen unauffälligen Port gelegt' }
      ],
      antwortRichtig: 'Richtig, und zwar alle vier zusammen. Erreichbar von außen heißt: eigenes Segment ([[DMZ]]), minimale Öffnung, verschlüsselt mit zweitem Faktor und zuerst gepatcht. Ein ungewöhnlicher Port ist dabei kein Schutz, sondern nur ein Umweg für den Angreifer.',
      antwortFalsch: 'Noch nicht ganz. Die vier wirksamen Punkte beschreiben alle dasselbe Prinzip: so wenig Angriffsfläche wie möglich, und was offen ist, gut bewacht. Ein anderer Port ist nur Verschleierung und zählt nicht dazu.' },

    { typ: 'karte', titel: 'Die Ports, um die es geht', quelle: 'netzprotokolle',
      keys: ['ssh', 'https', 'rdp'] },

    { typ: 'merk', text: '[[NAT]] übersetzt viele private Adressen auf eine öffentliche; unterschieden wird nach [[Port]] (genauer <b>PAT</b>). Eine [[Portweiterleitung]] stellt den Dienst ins Internet – für Fernzugriff gehört stattdessen ein [[VPN]] davor.' },

    { typ: 'nachricht', text: 'Konzept ist fertig bis auf einen Punkt. Den machen wir beim nächsten Mal: IPv6.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'pla-05',
  kontakt: 'planer',
  titel: 'IPv6 kommt sowieso',
  thema: 'IPv6',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Letzter Punkt im Konzept. Euer neuer Anschluss bringt IPv6 mit, ob ihr wollt oder nicht. Also tun wir so, als wollten wir.' },

    { typ: 'frage', text: 'Warum gibt es IPv6 überhaupt?',
      optionen: [
        { text: 'Weil die 32 Bit von IPv4 nur rund 4,3 Milliarden Adressen ergeben – zu wenig für die heutige Welt', richtig: true, norm: 'IPv6',
          antwort: 'Richtig. [[IPv6]] nutzt <b>128 Bit</b> statt 32. Das sind nicht viermal so viele Adressen, sondern 2^96-mal so viele – eine Zahl, die man nicht mehr sinnvoll ausspricht.' },
        { text: 'Weil IPv4 unverschlüsselt ist',
          antwort: 'Verschlüsselung ist bei beiden Sache höherer Schichten. Der Anlass war schlicht der Adressmangel.' },
        { text: 'Weil IPv4 zu langsam ist',
          antwort: 'Am Tempo liegt es nicht. Der IPv6-Kopf ist etwas einfacher aufgebaut, aber der Grund für die neue Version war die Adressmenge.' }
      ] },

    { typ: 'nachricht', text: 'Dann die Schreibweise, die in Prüfungen gern als Verkürzungsaufgabe kommt: <b>2001:0db8:0000:0000:0000:0000:0000:0001</b>.' },

    { typ: 'frage', text: 'Wie lautet die Kurzform?',
      optionen: [
        { text: '2001:db8::1', richtig: true, norm: 'IPv6-Notation',
          antwort: 'Richtig. Zwei Regeln: führende Nullen in einer Gruppe dürfen weg, und <b>eine</b> Folge von Nullgruppen wird zu "::" zusammengezogen. Nur eine – sonst wäre nicht mehr rekonstruierbar, wie viele Gruppen fehlen.' },
        { text: '2001:db8:0:1',
          antwort: 'Hier fehlt die Information, wie viele Nullgruppen übersprungen wurden. Dafür steht das doppelte Doppelpunktzeichen.' },
        { text: '2001::db8::1',
          antwort: 'Zweimal "::" ist nicht erlaubt, genau aus diesem Grund: Die Zahl der weggelassenen Gruppen wäre nicht mehr eindeutig.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt die praktische Frage, die mir eure Geschäftsführung stellen wird: Müssen wir alles an einem Wochenende umstellen?' },

    { typ: 'frage', text: 'Wie steigt man auf IPv6 um?',
      optionen: [
        { text: 'Mit Dual-Stack – die Geräte sprechen beides parallel, und man stellt Dienst für Dienst um', richtig: true, norm: 'Dual-Stack',
          antwort: 'Genau. [[Dual-Stack]] ist der übliche Weg: [[IPv4]] und [[IPv6]] laufen nebeneinander, nichts muss auf einen Schlag umgestellt werden, und ein Rückfall ist jederzeit möglich.' },
        { text: 'An einem Stichtag alles gleichzeitig',
          antwort: 'Niemand macht das, und mit gutem Grund: Fällt etwas aus, weiß man nicht, welche der hundert Änderungen es war.' },
        { text: 'Gar nicht – IPv4 reicht intern aus',
          antwort: 'Intern stimmt das noch für Jahre. Nach außen führt es aber dazu, dass reine IPv6-Gegenstellen nicht erreichbar sind – und der Anschluss bringt IPv6 schon mit.' }
      ] },

    { typ: 'nachricht', text: 'Eine Sache noch, die oft falsch erzählt wird: „Mit IPv6 brauchen wir keine Firewall mehr, weil jedes Gerät eine öffentliche Adresse hat."' },

    { typ: 'frage', text: 'Was stimmt daran nicht?',
      optionen: [
        { text: 'Genau umgekehrt: Ohne NAT ist jedes Gerät direkt adressierbar – die Firewall wird wichtiger, nicht unnötig', richtig: true,
          antwort: 'Richtig, und das ist der zentrale Punkt beim Umstieg. [[NAT]] war nie als Schutz gedacht, hat aber nebenbei verdeckt. Bei [[IPv6]] übernimmt diese Aufgabe allein die [[Firewall]] – deren Regelwerk muss also wirklich stimmen.' },
        { text: 'Nichts – IPv6 bringt die Sicherheit eingebaut mit',
          antwort: 'Verschlüsselung lässt sich bei IPv6 einfacher nutzen, aber von allein ist nichts geschützt. Ein offener Dienst bleibt ein offener Dienst.' },
        { text: 'IPv6-Adressen sind zu lang, um sie zu scannen',
          antwort: 'Ein ganzes Netz durchzuprobieren ist bei IPv6 tatsächlich unpraktisch – aber Adressen stehen in [[DNS]]-Einträgen, Protokollen und Mailköpfen. Sich darauf zu verlassen, wäre Verstecken statt Schützen.' }
      ] },

    { typ: 'merk', text: '[[IPv6]]: 128 Bit, hexadezimal in acht Gruppen, führende Nullen weg und <b>einmal</b> "::" für eine Folge von Nullgruppen. Umstieg über [[Dual-Stack]]. Ohne [[NAT]] ist jedes Gerät direkt erreichbar – das Regelwerk der [[Firewall]] wird dadurch wichtiger.' },

    { typ: 'nachricht', text: 'Damit ist das Konzept rund. Ich schicke es an die Geschäftsführung und setze dich in Kopie.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'pla-06',
  kontakt: 'planer',
  titel: 'Alles in Binär',
  thema: 'Binäres Rechnen',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', text: 'Heute das Fundament. Alles, was wir bisher gerechnet haben, funktioniert in Wahrheit binär – und in der Prüfung wird genau das verlangt. Also einmal sauber durch.' },
    { typ: 'nachricht', text: 'Die Stellenwerte in einem Byte, von links nach rechts: <b>128 – 64 – 32 – 16 – 8 – 4 – 2 – 1</b>. Fangen wir leicht an.' },

    { typ: 'frage', text: 'Wie lautet 192 binär?',
      optionen: [
        { text: '11000000', richtig: true, norm: 'Binärdarstellung',
          antwort: 'Richtig: 128 + 64 = 192, also die beiden linken Bits auf 1. Genau deshalb ist 255.255.255.192 eine gültige [[Subnetzmaske]] – von links lauter Einsen ohne Lücke.' },
        { text: '10010000',
          antwort: 'Das wäre 128 + 16 = 144. Für 192 braucht es 128 + 64.' },
        { text: '00000192',
          antwort: 'Im Binärsystem gibt es nur Nullen und Einsen – die Ziffer 9 kann dort nicht vorkommen.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt die Gegenprobe, die in Prüfungen gern als Fangfrage kommt.' },

    { typ: 'frage', text: 'Warum ist 255.255.255.100 keine gültige Subnetzmaske?',
      optionen: [
        { text: 'Weil 100 binär 01100100 ist – die Einsen stehen nicht lückenlos von links', richtig: true,
          antwort: 'Genau. Eine [[Subnetzmaske]] trennt Netz- und Hostanteil an <b>einer</b> Stelle. Dafür müssen alle Eins-Bits ohne Lücke von links stehen. Gültige letzte Byte sind deshalb nur 0, 128, 192, 224, 240, 248, 252, 254 und 255.' },
        { text: 'Weil 100 kleiner als 128 ist',
          antwort: 'Die Größe allein entscheidet nicht – 0 ist auch kleiner und trotzdem gültig. Es geht um das lückenlose Muster.' },
        { text: 'Weil Masken immer mit 255 enden müssen',
          antwort: '255.255.255.192 endet nicht mit 255 und ist gültig. Entscheidend ist das Bitmuster.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt die Kernaufgabe. Gegeben: <b>172.16.37.200 / 255.255.255.224</b>. Gesucht ist die Netzadresse.' },

    { typ: 'frage', text: 'Wie kommt man an die Netzadresse?',
      optionen: [
        { text: 'IP und Maske binär UND-verknüpfen – 1 und 1 ergibt 1, sonst 0', richtig: true, norm: 'UND-Verknüpfung',
          antwort: 'Richtig. Im letzten Byte: 200 = 11001000, Maske 224 = 11100000. Bitweise UND ergibt 11000000 = <b>192</b>. Die [[Netzadresse]] lautet also 172.16.37.192.' },
        { text: 'Die Maske von der IP-Adresse abziehen',
          antwort: 'Subtrahieren ergibt hier zufällig nie das Richtige – 200 − 224 wäre sogar negativ. Verknüpft wird bitweise mit UND.' },
        { text: 'Das letzte Byte auf 0 setzen',
          antwort: 'Das stimmt nur bei /24. Bei /27 liegt die Netzgrenze mitten im letzten Byte, deshalb ist es hier 192 und nicht 0.' }
      ] },

    { typ: 'frage', text: 'Welchen Bereich umfasst dieses Subnetz?',
      optionen: [
        { text: '172.16.37.192 bis .223, nutzbar .193 bis .222', richtig: true,
          antwort: 'Richtig. Blockgröße 256 − 224 = 32, also reicht das Netz von .192 bis .223. Davon sind [[Netzadresse]] .192 und [[Broadcast-Adresse]] .223 vergeben – es bleiben 30 nutzbare Adressen.' },
        { text: '172.16.37.192 bis .255',
          antwort: 'Zu groß gegriffen: Die Blockgröße ist 32, nicht 64. Das nächste Netz beginnt schon bei .224.' },
        { text: '172.16.37.200 bis .224',
          antwort: 'Die Grenzen richten sich nicht nach der gegebenen Adresse, sondern nach der Blockgröße. Die .200 liegt irgendwo <b>im</b> Netz, sie begrenzt es nicht.' }
      ] },

    { typ: 'karte', titel: 'Masken und Blockgrößen', quelle: 'subnetze' },

    { typ: 'nachricht', text: 'Letzte Frage, die es in jede zweite Klausur schafft.' },

    { typ: 'frage', text: 'Liegen 172.16.37.200 und 172.16.37.230 bei /27 im selben Netz?',
      optionen: [
        { text: 'Nein – .200 liegt im Block .192–.223, die .230 schon im nächsten ab .224', richtig: true,
          antwort: 'Richtig gerechnet. Die beiden Adressen sehen benachbart aus und brauchen trotzdem einen [[Router]]. Genau mit diesem Muster wird in Prüfungen geprüft, ob jemand wirklich rechnet oder nur hinschaut.' },
        { text: 'Ja, beide beginnen mit 172.16.37',
          antwort: 'Bei /27 reicht der Netzanteil bis ins letzte Byte hinein. Die ersten drei Byte sagen hier nichts aus.' },
        { text: 'Ja, der Abstand ist kleiner als 32',
          antwort: 'Nicht der Abstand zählt, sondern die feste Blockgrenze: Sie liegt bei .224, und die beiden Adressen liegen auf verschiedenen Seiten davon.' }
      ] },

    { typ: 'merk', text: 'Stellenwerte im Byte: <b>128 64 32 16 8 4 2 1</b>. Eine gültige [[Subnetzmaske]] hat lückenlose Einsen von links (0, 128, 192, 224, 240, 248, 252, 254, 255). [[Netzadresse]] = IP <b>UND</b> Maske, bitweise. Blockgröße = 256 − letztes Maskenbyte, und sie legt die festen Netzgrenzen fest.' },

    { typ: 'nachricht', text: 'Wer das binär kann, braucht keine Tabelle mehr. Die Tabelle ist nur die abgekürzte Form davon.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'pla-07',
  kontakt: 'planer',
  titel: 'Vier Netze, vier Größen',
  thema: 'VLSM',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', text: 'Neue Aufgabe, und sie ist näher an der Wirklichkeit als die letzte. Wir hatten ein /24 in vier gleich große Teile zerlegt. In der Praxis sind die Bereiche aber nie gleich groß.' },
    { typ: 'nachricht', text: 'Für 192.168.60.0/24 brauche ich: Büro 100 Geräte, Lager 50, Technik 20, dazu eine Punkt-zu-Punkt-Strecke zwischen zwei Routern mit genau 2 Adressen.' },

    { typ: 'frage', text: 'Geht das mit gleich großen Subnetzen?',
      optionen: [
        { text: 'Nein – vier gleiche Teile ergäben je 62 Adressen, zu wenig fürs Büro', richtig: true, norm: 'VLSM',
          antwort: 'Richtig. Mit /26 bekäme jeder 62 nutzbare Adressen – das Büro braucht 100. Deshalb schneidet man unterschiedlich groß: <b>[[VLSM]]</b>, variabel lange Subnetzmasken.' },
        { text: 'Ja, man nimmt einfach /25 für alle vier',
          antwort: 'Ein /25 hat 126 Adressen, und davon passen nur zwei in ein /24. Für vier Bereiche reicht das nicht.' },
        { text: 'Ja, wenn man das Technik-Netz weglässt',
          antwort: 'Die Anforderung steht fest. Gelöst wird sie durch unterschiedlich große Zuschnitte, nicht durch Streichen.' }
      ] },

    { typ: 'nachricht', text: 'Dann die Regel für das Vorgehen. In welcher Reihenfolge teilt man zu?' },

    { typ: 'frage', text: 'Womit fängt man bei VLSM an?',
      optionen: [
        { text: 'Mit dem größten Bedarf – absteigend, sonst zerfällt der Bereich in unbrauchbare Reste', richtig: true, norm: 'VLSM',
          antwort: 'Genau. Große Blöcke brauchen eine passende Anfangsgrenze. Beginnt man klein, liegen die großen Blöcke später quer und man muss neu anfangen. Also immer vom größten zum kleinsten.' },
        { text: 'Mit der Punkt-zu-Punkt-Strecke, weil sie am einfachsten ist',
          antwort: 'Verlockend, führt aber genau in die Falle: Die kleine Strecke landet mitten im Bereich und zerschneidet den Platz für das Büro.' },
        { text: 'Die Reihenfolge ist egal, Hauptsache die Summe passt',
          antwort: 'Die Summe passt hier zwar, die Grenzen aber nicht: Jedes Subnetz muss auf einer Grenze beginnen, die zu seiner Größe passt.' }
      ] },

    { typ: 'frage', text: 'Welches Präfix bekommt das Büro mit 100 Geräten?',
      optionen: [
        { text: '/25 – 126 nutzbare Adressen', richtig: true,
          antwort: 'Richtig. /26 gäbe nur 62, also eine Stufe größer: /25 mit 126 nutzbaren Adressen. Das Büro bekommt 192.168.60.0 bis .127.' },
        { text: '/26 – 62 nutzbare Adressen',
          antwort: 'Zu klein, es werden 100 gebraucht. Immer auf die nächste ausreichende Zweierpotenz aufrunden.' },
        { text: '/24 – 254 nutzbare Adressen',
          antwort: 'Das wäre das ganze Netz, dann bliebe für die anderen drei nichts übrig.' }
      ] },

    { typ: 'nachricht', text: 'Gut. Büro liegt auf .0/25, also bis .127 belegt. Weiter mit dem Lager, 50 Geräte.' },

    { typ: 'frage', text: 'Wo liegt das Lager-Netz?',
      optionen: [
        { text: '192.168.60.128/26 – 62 nutzbare Adressen, Bereich .128 bis .191', richtig: true,
          antwort: 'Richtig. Der nächste freie Platz beginnt bei .128, und für 50 Geräte reicht /26 mit 62 nutzbaren Adressen. Danach ist alles ab .192 noch frei.' },
        { text: '192.168.60.126/26',
          antwort: 'Ein /26 muss auf einem Vielfachen von 64 beginnen: .0, .64, .128, .192. Die .126 ist keine gültige Netzgrenze.' },
        { text: '192.168.60.128/25',
          antwort: 'Das wäre der gesamte Rest für 50 Geräte – 126 Adressen verbraucht, nichts mehr übrig für Technik und Strecke.' }
      ] },

    { typ: 'frage', text: 'Technik braucht 20 Geräte. Welches Netz?',
      optionen: [
        { text: '192.168.60.192/27 – 30 nutzbare Adressen, Bereich .192 bis .223', richtig: true,
          antwort: 'Richtig. /28 gäbe nur 14, also /27 mit 30 nutzbaren Adressen ab .192. Es bleibt alles ab .224 frei – mehr als genug für die letzte Strecke.' },
        { text: '192.168.60.192/28 – 14 nutzbare Adressen',
          antwort: 'Zu klein für 20 Geräte. Eine Stufe größer: /27.' },
        { text: '192.168.60.224/27',
          antwort: 'Rechnerisch gültig, verschenkt aber den freien Block ab .192. Zugeteilt wird lückenlos von unten.' }
      ] },

    { typ: 'frage', text: 'Und die Punkt-zu-Punkt-Strecke mit genau zwei Adressen?',
      optionen: [
        { text: '192.168.60.224/30 – genau 2 nutzbare Adressen', richtig: true, norm: 'Punkt-zu-Punkt',
          antwort: 'Richtig, und /30 ist dafür der Standard: 4 Adressen, davon [[Netzadresse]] und [[Broadcast-Adresse]] ab – bleiben exakt 2 für die beiden [[Router]]. Alles ab .228 bleibt als Reserve frei.' },
        { text: '192.168.60.224/31',
          antwort: 'Ein /31 lässt rechnerisch keine nutzbare Adresse übrig (2 − 2 = 0). Es gibt dafür eine Sonderregel, in der Prüfung gilt aber /30.' },
        { text: '192.168.60.224/29 – 6 nutzbare Adressen',
          antwort: 'Funktioniert, verschenkt aber vier Adressen. Gefragt war die passgenaue Zuteilung.' }
      ] },

    { typ: 'karte', titel: 'Die verwendeten Präfixe', quelle: 'subnetze',
      keys: ['25', '26', '27', '30'] },

    { typ: 'merk', text: '[[VLSM]]: unterschiedlich große Subnetze aus einem Bereich. Regel – <b>immer mit dem größten Bedarf beginnen</b> und auf die nächste ausreichende Zweierpotenz aufrunden. Jedes Subnetz beginnt auf einem Vielfachen seiner Blockgröße. Punkt-zu-Punkt-Strecken bekommen <b>/30</b>.' },

    { typ: 'nachricht', text: 'Das ist die anspruchsvollste Rechenaufgabe im Thema. Wenn die sitzt, sitzt der Rest auch.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'pla-08',
  kontakt: 'planer',
  titel: 'Woher weiß der Router den Weg?',
  thema: 'Routing',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Letztes Kapitel im Konzept. Wir haben jetzt vier Netze und zwei Standorte – also muss jemand entscheiden, welches Paket wohin geht.' },

    { typ: 'frage', text: 'Wonach entscheidet ein Router?',
      optionen: [
        { text: 'Nach der Routingtabelle – er nimmt den genauesten passenden Eintrag, also das längste Präfix', richtig: true, norm: 'Routingtabelle',
          antwort: 'Richtig, und die zweite Hälfte ist die wichtige: Passen mehrere Einträge, gewinnt der <b>genauere</b>. Ein Eintrag für 192.168.60.0/26 schlägt einen für 192.168.0.0/16, auch wenn beide zutreffen.' },
        { text: 'Nach der MAC-Adresse im Rahmen',
          antwort: 'Die [[MAC-Adresse]] gilt nur im lokalen Segment und wird bei jedem [[Hop]] ersetzt. Der [[Router]] entscheidet anhand der Ziel-[[IP-Adresse]].' },
        { text: 'Er schickt das Paket an alle Nachbarn und wartet, wer antwortet',
          antwort: 'Das wäre [[Flooding]] und ist Sache des [[Switch]]es auf [[OSI-Modell|Schicht 2]]. Ein Router kennt seine Wege und wählt gezielt.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt die Frage, die sich im Konzept wirklich stellt: Tragen wir die Wege von Hand ein oder lassen wir die Router sich absprechen?' },

    { typ: 'frage', text: 'Was passt zu Rampe 7 mit zwei Standorten?',
      optionen: [
        { text: 'Statische Routen plus eine Standardroute – überschaubar und nachvollziehbar', richtig: true, norm: 'Statisches Routing',
          antwort: 'Richtig. Bei zwei Standorten und einer Handvoll Netzen ist [[Statisches Routing]] genau richtig: wenige Einträge, keine Überraschungen, kein Protokoll, das man im Störungsfall erst verstehen muss. Alles ohne eigenen Eintrag geht über die [[Standardroute]] ins Internet.' },
        { text: 'Dynamisches Routing mit OSPF, das ist moderner',
          antwort: '[[Dynamisches Routing]] spielt seine Stärke erst aus, wenn es mehrere Wege zum selben Ziel gibt. Hier gibt es einen – das Protokoll brächte nur Komplexität, die im Störungsfall gegen einen arbeitet.' },
        { text: 'Gar kein Routing, die Switches regeln das',
          antwort: 'Ein [[Switch]] arbeitet auf [[OSI-Modell|Schicht 2]] und kommt über Netzgrenzen nicht hinaus. Sobald es mehrere IP-Netze gibt, braucht es einen [[Router]].' }
      ] },

    { typ: 'karte', titel: 'Woher ein Router seine Wege kennt', quelle: 'routing' },

    { typ: 'nachricht', text: 'Noch zwei Begriffe, die in der Prüfung gern zusammen abgefragt werden – und die sich an einem einzigen Befehl zeigen.' },
    { typ: 'nachricht', text: 'Ein tracert nach draußen listet acht Zeilen auf. Was sind diese Zeilen?' },

    { typ: 'frage', text: 'Was zeigt tracert da?',
      optionen: [
        { text: 'Die Hops – jeden Router auf dem Weg. Sichtbar werden sie über die TTL im Paket', richtig: true, norm: 'TTL',
          antwort: 'Genau, und der Trick dahinter ist hübsch: [[tracert]] schickt Pakete mit [[TTL]] 1, dann 2, dann 3. Jeder [[Router]] verringert die TTL um eins; bei null verwirft er das Paket und meldet sich per [[ICMP]] – so verrät sich jeder [[Hop]] der Reihe nach.' },
        { text: 'Die durchlaufenen Switches',
          antwort: 'Switches arbeiten auf [[OSI-Modell|Schicht 2]] und tauchen im Weg nicht auf – sie verringern die [[TTL]] nicht. Gezählt werden nur [[Router]].' },
        { text: 'Die Anzahl der Wiederholungsversuche',
          antwort: 'Jede Zeile ist eine <b>Station</b> auf dem Weg, kein Versuch. Die drei Zeitangaben je Zeile sind drei Messungen derselben Station.' }
      ] },

    { typ: 'nachricht', text: 'Und warum gibt es die TTL überhaupt? Das ist die Frage, die den Bogen zu Mirkos Schleifen-Thema schlägt.' },

    { typ: 'frage', text: 'Wozu dient die TTL?',
      optionen: [
        { text: 'Sie verhindert, dass ein falsch geroutetes Paket endlos kreist', richtig: true,
          antwort: 'Richtig – und genau diese Bremse fehlt auf [[OSI-Modell|Schicht 2]]. Ein [[Frame|Rahmen]] hat keine [[TTL]], deshalb ist eine [[Schleife]] zwischen zwei Switches so verheerend, während ein Routingfehler auf Schicht 3 sich selbst begrenzt.' },
        { text: 'Sie begrenzt, wie lange eine Verbindung bestehen darf',
          antwort: 'Mit der Dauer einer Verbindung hat sie nichts zu tun. Trotz des Namens ist die [[TTL]] ein <b>Zähler für Stationen</b>, keine Uhr.' },
        { text: 'Sie legt die Übertragungsgeschwindigkeit fest',
          antwort: 'Mit Tempo hat sie nichts zu tun. Sie zählt, über wie viele [[Hop|Hops]] ein Paket noch weitergereicht werden darf.' }
      ] },

    { typ: 'merk', text: 'Der [[Router]] wählt aus der [[Routingtabelle]] den <b>genauesten</b> Eintrag (längstes Präfix); was nirgends passt, geht über die [[Standardroute]]. [[Statisches Routing]] für kleine, überschaubare Netze, [[Dynamisches Routing]] erst bei mehreren Wegen. Die [[TTL]] zählt [[Hop|Hops]] und verhindert endloses Kreisen – auf Schicht 2 gibt es sie nicht.' },

    { typ: 'nachricht', text: 'Damit ist das Adress- und Routingkonzept vollständig. Gute Zusammenarbeit.' }
  ]
});
