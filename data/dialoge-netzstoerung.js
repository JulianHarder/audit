/* ===========================================================
   AUDIT – data/dialoge-netzstoerung.js
   Gruppenchat #netz-stoerung. Mehrere Sprecher, farblich
   getrennt (siehe AUDIT.data.sprecher in data/kontakte.js).
   Drei Faelle, in denen im Lager nichts mehr geht und alle
   gleichzeitig schreiben.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'net-01',
  kontakt: 'netzstoerung',
  titel: 'Im Lager geht nichts mehr',
  thema: 'Fehlersuche',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Bei uns im Wareneingang geht nichts. Keine Warenwirtschaft, kein Drucker, nichts. Die Scanner zeigen "keine Verbindung". Wir haben hier vier Lkw stehen.' },
    { typ: 'nachricht', von: 'mirko', text: 'Bin dran. Erst mal eingrenzen, sonst suchen wir im Dunkeln.' },

    { typ: 'frage', von: 'mirko', text: 'Was fragen wir zuerst?',
      optionen: [
        { text: 'Betrifft es ein Gerät, einen Bereich oder das ganze Haus?', richtig: true, norm: 'Fehlersuche',
          antwort: 'Genau damit fängt jede [[Fehlersuche]] an, und die Antwort halbiert die Arbeit: Ein Gerät heißt Kabel oder Einstellung, ein Bereich heißt Switch oder Strecke, das ganze Haus heißt Zentrale oder Provider.' },
        { text: 'Welche Fehlermeldung genau auf dem Scanner steht',
          antwort: 'Hilfreich, aber später. "Keine Verbindung" kommt bei jeder Ursache – zuerst muss der Umfang klar sein.' },
        { text: 'Ob jemand etwas verändert hat',
          antwort: 'Eine gute Frage, die oft zur Lösung führt – aber erst, wenn der betroffene Bereich bekannt ist.' }
      ] },

    { typ: 'nachricht', von: 'kleinschmidt', text: 'Ganzer Wareneingang. Kommissionierung geht laut Kollegen normal, Büro auch.' },
    { typ: 'nachricht', von: 'mirko', text: 'Gut, also ein Bereich. Dann die Schichten von unten nach oben. Leonie, du bist unten – geh bitte an einen betroffenen Rechner.' },
    { typ: 'nachricht', von: 'leonie', text: 'bin da. kabel steckt, grüne lampe an der netzwerkbuchse leuchtet 👍' },
    { typ: 'nachricht', von: 'mirko', text: 'Schicht 1 und 2 sind also in Ordnung. Dann weiter.' },

    { typ: 'frage', von: 'mirko', text: 'Was lässt du sie als nächstes machen?',
      optionen: [
        { text: 'ipconfig /all – hat das Gerät überhaupt eine sinnvolle Adresse?', richtig: true, norm: 'ipconfig',
          antwort: 'Richtig, das ist der nächste Schritt nach oben. [[ipconfig]] zeigt [[IP-Adresse]], [[Subnetzmaske]], [[Standardgateway]] und [[DNS]]-Server. Ohne gültige Adresse ist alles weitere sinnlos.' },
        { text: 'Den Rechner neu starten',
          antwort: 'Hilft manchmal und verdeckt dabei die Ursache. Bei einem ganzen Bereich wäre es außerdem Zufall – wir wollen wissen, <b>was</b> fehlt.' },
        { text: 'Den Warenwirtschaftsserver anpingen',
          antwort: 'Zu weit oben begonnen. Wenn die eigene Adresse nicht stimmt, kann der [[ping]] gar nicht gelingen – und wir wissen nicht, warum.' }
      ] },

    { typ: 'nachricht', von: 'leonie', text: 'ähm. da steht 169.254.112.9 und subnetzmaske 255.255.0.0' },
    { typ: 'nachricht', von: 'leonie', text: 'ist das schlimm? 😬' },

    { typ: 'frage', von: 'mirko', text: 'Was bedeutet eine 169.254er-Adresse?',
      optionen: [
        { text: 'APIPA – das Gerät hat sich selbst eine Notadresse gegeben, weil kein DHCP-Server geantwortet hat', richtig: true, norm: 'APIPA',
          antwort: 'Richtig, und das ist einer der deutlichsten Befunde überhaupt. [[APIPA]] aus 169.254.0.0/16 heißt: Die [[DHCP]]-Anfrage blieb unbeantwortet. Mit so einer Adresse erreicht das Gerät nicht einmal das [[Standardgateway]].' },
        { text: 'Eine normale private Adresse – nur aus einem anderen Netz',
          antwort: 'Sie sieht privat aus, ist aber der Sonderbereich [[APIPA]]. Die privaten Bereiche sind 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16.' },
        { text: 'Die Adresse ist vom Provider zugeteilt',
          antwort: 'Der Provider liefert öffentliche Adressen, und die sehen anders aus. 169.254 ist die Selbsthilfe des Betriebssystems.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Jetzt wird es interessant. Der DHCP-Server läuft, das Büro bekommt ordentlich Adressen. Nur der Wareneingang nicht.' },
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Kann ich etwas beitragen? Wir haben heute morgen den Packplatz 4 umgebaut. Der Kollege hat einen kleinen Router von zu Hause mitgebracht, damit sein Tablet ins WLAN kommt.' },
    { typ: 'nachricht', von: 'mirko', text: 'Da haben wir es.' },

    { typ: 'frage', von: 'mirko', text: 'Was hat der private Router angerichtet?',
      optionen: [
        { text: 'Er verteilt selbst DHCP-Adressen – wer ihn zuerst erreicht, bekommt eine falsche Adresse und ein falsches Gateway', richtig: true, norm: 'Rogue DHCP',
          antwort: 'Genau, ein [[Rogue DHCP]]. Ein Heimrouter hat seinen DHCP-Server standardmäßig an. Im Netz antwortet dann, wer schneller ist – deshalb kriegen manche Geräte eine Adresse aus dem falschen Netz und andere gar keine. Das erklärt das sprunghafte Bild.' },
        { text: 'Er hat das WLAN überlastet',
          antwort: 'Die betroffenen Geräte hängen am Kabel. Der Schaden kommt nicht aus dem Funk, sondern vom Dienst, den das Gerät ungefragt anbietet.' },
        { text: 'Er hat die MAC-Adressen im Switch durcheinandergebracht',
          antwort: 'Die Adresstabelle des [[Switch]]es lernt sich selbst neu. Das Problem ist der zweite [[DHCP]]-Server im Netz.' }
      ] },

    { typ: 'karte', titel: 'Die Werkzeuge dieser Suche', quelle: 'netzwerkzeuge',
      keys: ['ipconfig', 'ping', 'nslookup'] },

    { typ: 'nachricht', von: 'mirko', text: 'Router ist abgezogen, ich erneuere die Adressen. Zwei Minuten.' },
    { typ: 'nachricht', von: 'leonie', text: 'jetzt steht da 192.168.20.46!! und die warenwirtschaft geht wieder 🎉' },
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Verladung läuft. Danke.' },
    { typ: 'nachricht', von: 'mirko', text: 'Bleibt die Frage, wie wir das dauerhaft verhindern. Ein mitgebrachter Router ist Schatten-IT, und beim nächsten Mal steht die Halle wieder.' },

    { typ: 'mehrfach', von: 'mirko', text: 'Was nehmen wir als Maßnahme mit?',
      optionen: [
        { text: 'DHCP-Schutz auf den Switch-Ports: Angebote von Endgeräten werden verworfen', richtig: true },
        { text: 'Nicht benutzte Netzwerkdosen im Lager abschalten', richtig: true },
        { text: 'Eine klare Regel plus Hinweis: keine eigenen Netzgeräte anstecken', richtig: true },
        { text: 'Ein Gäste-WLAN, damit es für private Geräte einen erlaubten Weg gibt', richtig: true },
        { text: 'Die privaten Geräte ins Lager-VLAN aufnehmen' }
      ],
      antwortRichtig: 'Richtig, und zusammen greifen die vier gut: Technik verhindert den Fall ([[Rogue DHCP]]-Schutz, abgeschaltete Ports), die Regel erklärt ihn, und das Gästenetz nimmt dem Kollegen den Grund dafür. Private Geräte ins Lager-[[VLAN]] zu holen wäre dagegen genau der Zustand, den die [[Netzwerksegmentierung]] verhindern soll.',
      antwortFalsch: 'Fast. Die vier wirksamen Punkte bestehen aus Technik, Regel und einem erlaubten Ersatzweg. Private Geräte ins Lager-[[VLAN]] aufzunehmen gehört nicht dazu – das würde die Trennung aufheben, die wir gerade aufgebaut haben.' },

    { typ: 'merk', text: '[[Fehlersuche]]: zuerst <b>eingrenzen</b> (ein Gerät, ein Bereich, das Haus?), dann von unten nach oben – Kabel, Portlampe, [[ipconfig]], [[Standardgateway]] anpingen, [[DNS]] prüfen, Dienst prüfen. Eine <b>169.254er</b>-Adresse ([[APIPA]]) heißt: kein [[DHCP]]. Antwortet ein fremder DHCP-Server mit, ist es ein [[Rogue DHCP]].' },

    { typ: 'nachricht', von: 'mirko', text: 'Ich setze den Portschutz heute noch um. Gut mitgedacht, alle.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'net-02',
  kontakt: 'netzstoerung',
  titel: 'Zwei Rechner, eine Adresse',
  thema: 'Adresskonflikt',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Merkwürdige Sache. Der Etikettendrucker am Packplatz 2 druckt manchmal und manchmal nicht. Eben ging es zehn Minuten, jetzt wieder nichts.' },
    { typ: 'nachricht', von: 'leonie', text: 'und bei mir kommt die warenwirtschaft auch immer mal kurz nicht und dann doch 🤷' },
    { typ: 'nachricht', von: 'mirko', text: 'Beides sprunghaft, beides im selben Segment. Das riecht nach einem bestimmten Fehler.' },

    { typ: 'frage', von: 'mirko', text: 'Was verursacht typischerweise sprunghafte Erreichbarkeit?',
      optionen: [
        { text: 'Zwei Geräte mit derselben IP-Adresse', richtig: true, norm: 'Adresskonflikt',
          antwort: 'Richtig. Eine [[Doppelte IP-Adresse]] erzeugt genau dieses Bild: Je nachdem, welche Antwort zuletzt im [[ARP]]-Zwischenspeicher gelandet ist, landen die Pakete beim einen oder beim anderen Gerät. Mal geht es, mal nicht.' },
        { text: 'Ein zu langes Netzwerkkabel',
          antwort: 'Eine überlange Strecke macht eher dauerhafte Fehler oder gar keine Verbindung – nicht diesen Wechsel.' },
        { text: 'Ein ausgelasteter Switch',
          antwort: 'Überlast äußert sich als gleichmäßige Verlangsamung aller Geräte, nicht als Aussetzen bei zwei bestimmten.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Leonie, kannst du das nachweisen? Ich will es nicht nur vermuten.' },

    { typ: 'frage', von: 'mirko', text: 'Welcher Befehl weist den Konflikt nach?',
      optionen: [
        { text: 'arp -a – die Zuordnung von IP- zu MAC-Adressen zeigt, welche Geräte beteiligt sind', richtig: true, norm: 'arp',
          antwort: 'Genau. [[ARP]] ordnet [[IP-Adresse|IP]] zu [[MAC-Adresse|MAC]]. Taucht dieselbe IP mit wechselnder MAC auf, ist der Konflikt belegt – und über die MAC kommt man auf Hersteller und Gerät.' },
        { text: 'tracert zum Drucker',
          antwort: '[[tracert]] zeigt die Router auf dem Weg. Im eigenen Netz liegt gar kein Router dazwischen, also bringt es hier nichts.' },
        { text: 'netstat -ano',
          antwort: '[[netstat]] zeigt die Verbindungen des <b>eigenen</b> Rechners. Für die Zuordnung fremder Adressen im Netz ist [[ARP]] das richtige Werkzeug.' }
      ] },

    { typ: 'nachricht', von: 'leonie', text: 'ok ich hab 192.168.20.60 zweimal mit verschiedenen MACs gesehen 😯 einmal endet sie auf :4F:12 und einmal auf :A1:7E' },
    { typ: 'nachricht', von: 'mirko', text: 'Da ist er. 192.168.20.60 ist der Etikettendrucker mit fester Adresse. Die zweite MAC gehört – ich schaue gerade nach – zu einem Laptop, der heute neu eingerichtet wurde.' },
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Das war ich. Der Kollege vom Dienstleister sagte, ich soll die Adresse "fest eintragen, damit es stabil läuft". Ich habe eine genommen, die frei aussah.' },

    { typ: 'frage', von: 'mirko', text: 'Wie konnte das passieren?',
      optionen: [
        { text: 'Eine feste Adresse wurde aus dem DHCP-Bereich genommen, in dem schon ein Gerät sitzt', richtig: true, norm: 'DHCP-Bereich',
          antwort: 'Genau das ist die übliche Ursache. „Sieht frei aus" lässt sich von Hand nicht prüfen – das Gerät kann gerade aus sein. Deshalb gilt: feste Adressen nur <b>außerhalb</b> des [[DHCP]]-Bereichs, und am besten gar nicht von Hand, sondern als Reservierung im DHCP.' },
        { text: 'Der DHCP-Server hat die Adresse doppelt vergeben',
          antwort: 'Ein [[DHCP]]-Server führt Buch über seine Leihgaben und vergibt nicht doppelt. Das Problem entsteht, wenn jemand <b>daneben</b> von Hand vergibt.' },
        { text: 'Die beiden Geräte haben die gleiche MAC-Adresse',
          antwort: 'Die MACs sind ja gerade unterschiedlich – daran haben wir den Konflikt erkannt. Doppelt ist die [[IP-Adresse]].' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Ich stelle den Laptop auf DHCP zurück. Danach ist Ruhe.' },
    { typ: 'nachricht', von: 'leonie', text: 'drucker läuft wieder, warenwirtschaft auch 🙂' },

    { typ: 'frage', von: 'mirko', text: 'Was ändern wir, damit es nicht wieder passiert?',
      optionen: [
        { text: 'Den Adressbereich dokumentieren und aufteilen: feste Adressen unten, DHCP-Bereich darüber, Reservierungen im DHCP', richtig: true,
          antwort: 'Richtig. Eine schriftlich festgelegte Aufteilung – zum Beispiel .1 bis .49 Infrastruktur, .50 bis .199 [[DHCP]], .200 bis .254 Reserve – verhindert das Problem dauerhaft, weil niemand mehr raten muss.' },
        { text: 'Keine festen Adressen mehr vergeben',
          antwort: 'Server, Drucker und Netzgeräte brauchen verlässliche Adressen. Gelöst wird es über die saubere <b>Aufteilung</b> des Bereichs, nicht über den Verzicht.' },
        { text: 'Nur noch Mirko darf Adressen vergeben',
          antwort: 'Verständlich, aber kein Verfahren – im Urlaub macht es doch jemand anders. Eine dokumentierte Aufteilung hält auch dann.' }
      ] },

    { typ: 'karte', titel: 'Werkzeuge für diesen Fall', quelle: 'netzwerkzeuge',
      keys: ['ipconfig', 'arp', 'ping'] },

    { typ: 'merk', text: 'Sprunghafte Erreichbarkeit im eigenen Netz heißt meist [[Doppelte IP-Adresse]]; nachgewiesen wird sie mit <b>arp -a</b> ([[ARP]]) über wechselnde [[MAC-Adresse|MAC-Adressen]] zur selben IP. Vorbeugung: dokumentierte Aufteilung des Adressbereichs, feste Adressen nur <b>außerhalb</b> des [[DHCP]]-Bereichs oder als Reservierung.' },

    { typ: 'nachricht', von: 'mirko', text: 'Ich schreibe die Aufteilung auf und hänge sie in den Verteilerschrank. Dann steht sie da, wo sie gebraucht wird.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'net-03',
  kontakt: 'netzstoerung',
  titel: 'Alle Lampen flackern im Takt',
  thema: 'Schleife im Netz',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Jetzt ist es komplett weg. Nicht langsam – weg. Im ganzen Lager, alle Geräte gleichzeitig.' },
    { typ: 'nachricht', von: 'leonie', text: 'ich steh vor dem schrank. alle lampen am switch flackern ganz schnell und völlig gleichmäßig, wie im takt. das sah vorher nicht so aus' },
    { typ: 'nachricht', von: 'mirko', text: 'Das Bild ist eindeutig. Leonie, bitte nichts anfassen, bis wir es benannt haben.' },

    { typ: 'frage', von: 'mirko', text: 'Was passiert da?',
      optionen: [
        { text: 'Eine Schleife – Broadcasts kreisen endlos zwischen zwei doppelt verbundenen Switches', richtig: true, norm: 'Broadcast-Storm',
          antwort: 'Richtig. Bei einer [[Schleife]] wird jeder [[Broadcast]] im Kreis weitergegeben und dabei immer wieder vervielfacht. Innerhalb von Sekunden ist das Segment zu. Das gleichmäßige, hektische Flackern aller Portlampen ist das typische Bild.' },
        { text: 'Ein Angriff von außen',
          antwort: 'Dann wären nicht alle Portlampen gleichmäßig betroffen, und die [[Firewall]] hätte zu reden. Das hier kommt aus dem Segment selbst.' },
        { text: 'Der Switch ist defekt',
          antwort: 'Möglich, aber ein defekter Switch wird meist still, nicht hektisch. Das synchrone Flackern spricht für kreisenden Verkehr.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Leonie, hat sich heute an der Verkabelung etwas geändert?' },
    { typ: 'nachricht', von: 'leonie', text: 'ähm. ich hab vorhin im schrank aufgeräumt. da hing ein kabel lose rum und ich hab es eingesteckt damit es nicht im weg ist 😶' },
    { typ: 'nachricht', von: 'leonie', text: 'war das falsch' },
    { typ: 'nachricht', von: 'mirko', text: 'Das war die Ursache. Und du hast genau richtig gehandelt, es jetzt zu sagen – Ziehen wir es wieder ab, dann sehen wir es gleich.' },

    { typ: 'frage', von: 'mirko', text: 'Warum legt ein zweites Kabel zwischen zwei Switches das Netz lahm?',
      optionen: [
        { text: 'Weil ein Switch Broadcasts an alle Ports weitergibt – mit zwei Wegen entsteht ein Kreis ohne Abbruch', richtig: true, norm: 'Schleife',
          antwort: 'Genau. Ein [[Frame|Rahmen]] auf [[OSI-Modell|Schicht 2]] hat keine Lebensdauer, die ihn irgendwann verwirft – anders als ein [[Paket|IP-Paket]] mit seinem Zähler. Deshalb kreist er, bis jemand eingreift.' },
        { text: 'Weil die Bandbreite sich halbiert',
          antwort: 'Die Bandbreite würde sich sogar erhöhen, wenn es funktionierte. Das Problem ist der endlose Kreis.' },
        { text: 'Weil die beiden Switches sich gegenseitig abschalten',
          antwort: 'Abschalten tut von allein keiner – genau das wäre die Lösung. Dafür gibt es [[Spanning Tree]].' }
      ] },

    { typ: 'nachricht', von: 'leonie', text: 'kabel ab. lampen sind normal, alles geht wieder ✅' },
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Bestätigt, wir arbeiten wieder. 18 Minuten Stillstand.' },
    { typ: 'nachricht', von: 'mirko', text: 'Jetzt die eigentliche Lehre. Dass ein eingestecktes Kabel das Lager stilllegen kann, ist nicht Leonies Fehler, sondern unserer.' },

    { typ: 'frage', von: 'mirko', text: 'Was schützt vor dem nächsten Mal?',
      optionen: [
        { text: 'Spanning Tree aktivieren – es erkennt den Kreis und hält den zweiten Weg in Reserve', richtig: true, norm: 'IEEE 802.1D / 802.1w',
          antwort: 'Richtig, und das ist der Punkt: [[Spanning Tree]] macht aus der [[Schleife]] eine echte [[Redundanz]]. Der zweite Weg wird deaktiviert und automatisch aktiv, sobald der erste ausfällt. Dazu beschriften wir die Kabel und schalten unbenutzte Ports ab.' },
        { text: 'Niemand außer Mirko darf in den Schrank',
          antwort: 'Im Urlaub geht doch jemand anders hinein. Technik, die einen Fehlgriff aushält, ist verlässlicher als eine Regel, die ihn verbietet.' },
        { text: 'Lose Kabel aus dem Schrank entfernen',
          antwort: 'Ordnung hilft und sollte sein – aber ein Netz, in dem ein einzelnes Kabel alles stilllegt, bleibt zu empfindlich. Der Schutz muss im Switch sitzen.' }
      ] },

    { typ: 'karte', titel: 'Wer leitet was weiter?', quelle: 'netzgeraete',
      keys: ['switch', 'router', 'l3switch'] },

    { typ: 'merk', text: 'Gleichmäßig hektisch flackernde Portlampen und ein totes Segment heißen [[Schleife]] – ein [[Frame|Rahmen]] auf [[OSI-Modell|Schicht 2]] hat keine Lebensdauer und kreist endlos. [[Spanning Tree]] erkennt den Kreis und macht aus der Schleife echte [[Redundanz]].' },

    { typ: 'nachricht', von: 'mirko', text: 'Leonie, Spanning Tree richten wir morgen zusammen ein. Du hast heute mehr gelernt als in drei Schulstunden.' },
    { typ: 'nachricht', von: 'leonie', text: 'okay 😅 aber ich steck erst mal nichts mehr ein' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'net-04',
  kontakt: 'netzstoerung',
  titel: 'Die Seite geht nicht, der Server schon',
  thema: 'Namensauflösung',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Die Sendungsverfolgung unseres Partners lässt sich nicht aufrufen. "Server nicht gefunden". Dabei ging das heute Morgen noch.' },
    { typ: 'nachricht', von: 'leonie', text: 'bei mir auch nicht. aber die warenwirtschaft läuft ganz normal und das laufwerk auch 🤔' },
    { typ: 'nachricht', von: 'mirko', text: 'Interessant. Intern alles gut, nach draußen eine bestimmte Seite nicht. Leonie, ein Test bitte.' },

    { typ: 'frage', von: 'mirko', text: 'Womit grenzt du ein, ob es an der Leitung oder am Namen liegt?',
      optionen: [
        { text: 'Eine öffentliche IP-Adresse direkt anpingen, zum Beispiel 1.1.1.1', richtig: true, norm: 'ping',
          antwort: 'Richtig. Ein [[ping]] auf eine <b>IP-Adresse</b> umgeht die Namensauflösung vollständig. Antwortet sie, steht der Weg nach draußen – dann kann der Fehler nur noch im [[DNS]] liegen oder beim Ziel selbst.' },
        { text: 'Die Seite in einem anderen Browser öffnen',
          antwort: 'Zeigt nur, ob es am Browser liegt – und das ist unwahrscheinlich, wenn zwei Leute an zwei Rechnern dasselbe sehen.' },
        { text: 'Den Router neu starten',
          antwort: 'Der beliebteste Griff und der uninformativste: Wenn es danach geht, weiß niemand, warum. Erst messen, dann eingreifen.' }
      ] },

    { typ: 'nachricht', von: 'leonie', text: 'ping auf 1.1.1.1 geht, antwortet in 14 ms ✅' },
    { typ: 'nachricht', von: 'mirko', text: 'Gut. Dann steht der Weg. Jetzt der nächste Schritt.' },

    { typ: 'frage', von: 'mirko', text: 'Was prüfst du jetzt?',
      optionen: [
        { text: 'nslookup auf den Namen – antwortet der DNS-Server, und mit welcher Adresse?', richtig: true, norm: 'nslookup',
          antwort: 'Richtig. [[nslookup]] fragt den [[DNS]]-Server direkt und trennt damit sauber: Kommt keine Antwort, liegt es am DNS-Server. Kommt eine falsche Adresse, liegt es am Eintrag. Kommt die richtige und es geht trotzdem nicht, liegt es am Ziel.' },
        { text: 'tracert zur Seite',
          antwort: '[[tracert]] bräuchte selbst erst die Adresse zum Namen – es scheitert an derselben Stelle. Erst die Namensauflösung klären.' },
        { text: 'Den Browser-Zwischenspeicher leeren',
          antwort: 'Könnte man nebenbei, erklärt aber nicht, warum zwei Rechner gleichzeitig betroffen sind.' }
      ] },

    { typ: 'nachricht', von: 'leonie', text: 'nslookup sagt: "Zeitüberschreitung bei Anforderung an 192.168.10.9" 😐' },
    { typ: 'nachricht', von: 'mirko', text: 'Da ist es. 192.168.10.9 ist unser interner DNS-Server. Der antwortet nicht mehr.' },

    { typ: 'frage', von: 'mirko', text: 'Warum geht die Warenwirtschaft dann noch?',
      optionen: [
        { text: 'Weil sie über eine feste IP-Adresse angesprochen wird – ohne DNS geht es dort auch ohne', richtig: true,
          antwort: 'Genau, und daran erkennt man das Muster: Alles, was <b>per Adresse</b> konfiguriert ist, läuft weiter; alles, was einen <b>Namen</b> braucht, fällt aus. Deshalb der merkwürdige Zustand, dass intern alles geht und nichts im Internet.' },
        { text: 'Weil sie ihre eigenen Namen auflöst',
          antwort: 'Namensauflösung macht keine Anwendung selbst, dafür gibt es [[DNS]]. Hier wird schlicht keine gebraucht.' },
        { text: 'Weil interne Namen nicht über DNS laufen',
          antwort: 'Tun sie durchaus – ein ausgefallener interner DNS-Server bricht auch interne Namen. Was weiterläuft, ist das, was per IP eingetragen ist.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Dienst war abgestürzt, läuft wieder. Leonie, teste nochmal.' },
    { typ: 'nachricht', von: 'leonie', text: 'geht wieder!! 🎉 und die sendungsverfolgung auch' },
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Danke. Können wir verhindern, dass ein einziger Dienst die halbe Firma lahmlegt?' },

    { typ: 'frage', von: 'mirko', text: 'Was schlägst du vor?',
      optionen: [
        { text: 'Einen zweiten DNS-Server eintragen, den die Clients per DHCP mitbekommen', richtig: true, norm: 'Redundanz',
          antwort: 'Richtig, und es kostet fast nichts: [[DHCP]] verteilt zwei DNS-Server, und fällt der erste aus, fragen die Clients den zweiten. Das ist [[Redundanz]] genau an der Stelle, an der ein einzelner Dienst sonst alles mitnimmt.' },
        { text: 'Die wichtigsten Namen in die hosts-Datei jedes Rechners eintragen',
          antwort: 'Funktioniert für eine Handvoll Einträge und wird zum Albtraum, sobald sich eine Adresse ändert – dann müssen alle Rechner angefasst werden.' },
        { text: 'Überall feste IP-Adressen statt Namen verwenden',
          antwort: 'Das macht jedes System unbeweglich: Beim nächsten Serverumzug ändert sich die Adresse und nichts findet mehr hin. Genau dafür gibt es [[DNS]].' }
      ] },

    { typ: 'karte', titel: 'Die Reihenfolge der Prüfung', quelle: 'netzwerkzeuge',
      keys: ['ipconfig', 'ping', 'nslookup', 'tracert'] },

    { typ: 'merk', text: 'Muster: <b>IP geht, Name nicht</b> → der Fehler liegt im [[DNS]], nicht an der Leitung. Nachweis mit [[ping]] auf eine IP und [[nslookup]] auf den Namen. Was per Adresse eingetragen ist, läuft dabei weiter – deshalb das schiefe Bild. Vorbeugung: zweiter DNS-Server über [[DHCP]].' },

    { typ: 'nachricht', von: 'mirko', text: 'Zweiter DNS kommt heute noch in den DHCP-Bereich. Danke fürs saubere Eingrenzen, Leonie.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'net-05',
  kontakt: 'netzstoerung',
  titel: 'Alles ist langsam',
  thema: 'Engpässe finden',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Seit heute Vormittag ist alles zäh. Nichts fällt aus, aber jede Buchung dauert. Und die Telefonate hacken.' },
    { typ: 'nachricht', von: 'leonie', text: 'bei mir auch. aber es ist nicht immer, manchmal geht es ganz normal 😤' },
    { typ: 'nachricht', von: 'mirko', text: 'Schwankend und überall. Dann ist es kein Defekt, sondern ein Engpass. Die Frage ist nur, wo.' },

    { typ: 'frage', von: 'mirko', text: 'Woran erkennst du einen Engpass statt eines Defekts?',
      optionen: [
        { text: 'Es fällt nichts aus, es dauert nur – und die Schwere schwankt mit der Last', richtig: true, norm: 'Fehlersuche',
          antwort: 'Richtig. Ein Defekt ist binär: geht oder geht nicht. Ein Engpass ist graduell und folgt der Tageszeit. Allein diese Unterscheidung spart eine Stunde Suche in die falsche Richtung.' },
        { text: 'Daran, dass nur ein Gerät betroffen ist',
          antwort: 'Umgekehrt – ein Engpass trifft alle, die durch dieselbe Stelle müssen. Ein einzelnes Gerät spricht für ein Problem an dessen Anschluss.' },
        { text: 'An Fehlermeldungen im Protokoll',
          antwort: 'Bei einem Engpass gibt es oft gar keine Meldung – es funktioniert ja alles, nur langsam. Genau das macht ihn schwer zu fassen.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Ich schaue auf den Switch. Der Uplink zum Serverraum liegt seit 9 Uhr konstant bei 98 Prozent Auslastung.' },
    { typ: 'nachricht', von: 'leonie', text: 'und was ist das dann? lädt jemand was großes runter' },

    { typ: 'frage', von: 'mirko', text: 'Wie findest du heraus, wer die Leitung füllt?',
      optionen: [
        { text: 'Über die Auslastung der einzelnen Switch-Ports – der Verursacher hängt an einem davon', richtig: true, norm: 'SNMP',
          antwort: 'Richtig. Der [[Switch]] zählt je Port mit; der Port mit auffälligem Durchsatz zeigt das Gerät. Wer die Werte dauerhaft erfassen will, nutzt dafür [[SNMP]] – dann sieht man beim nächsten Mal sofort, wann es anfing.' },
        { text: 'netstat auf jedem Rechner im Lager',
          antwort: '[[netstat]] zeigt die Verbindungen <b>eines</b> Rechners. Bei 40 Geräten fängt man besser an der Stelle an, über die alle müssen.' },
        { text: 'tracert zum Server',
          antwort: '[[tracert]] zeigt den Weg, nicht die Last. Im eigenen Netz liegt ohnehin kein [[Router]] dazwischen.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Port 22: 940 Mbit dauerhaft. Dahinter hängt der Backup-Server.' },
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Das Backup sollte doch nachts laufen?' },
    { typ: 'nachricht', von: 'mirko', text: 'Sollte. Es ist heute Nacht abgebrochen und hat um 9 Uhr automatisch neu gestartet – mitten in den Betrieb hinein.' },

    { typ: 'frage', von: 'mirko', text: 'Warum leidet ausgerechnet die Telefonie am stärksten?',
      optionen: [
        { text: 'Weil Sprache gleichmäßige Laufzeiten braucht – bei voller Leitung schwanken sie, und das hört man sofort', richtig: true, norm: 'Jitter',
          antwort: 'Genau, das ist [[Jitter]]. Eine Buchung, die eine Sekunde länger dauert, ärgert; ein Gespräch mit schwankenden Laufzeiten ist unbrauchbar. Sprache braucht wenig [[Bandbreite]], aber verlässliche [[Latenz]].' },
        { text: 'Weil Telefonie die meiste Bandbreite braucht',
          antwort: 'Umgekehrt – ein Gespräch kommt mit unter 100 kbit/s aus. Empfindlich ist es bei [[Latenz]] und [[Jitter]].' },
        { text: 'Weil Telefonie über TCP läuft und auf Bestätigungen wartet',
          antwort: 'Telefonie nutzt [[UDP]], gerade um nicht zu warten. Das Problem sind die schwankenden Laufzeiten.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Backup ist gestoppt und auf heute Nacht verschoben. Wie ist es jetzt?' },
    { typ: 'nachricht', von: 'leonie', text: 'sofort wieder normal 😮 und telefon ist klar' },

    { typ: 'mehrfach', von: 'mirko', text: 'Was nehmen wir mit, damit das nicht wiederkommt?',
      optionen: [
        { text: 'QoS: Telefonie und Warenwirtschaft bekommen Vorrang vor Backup und Downloads', richtig: true },
        { text: 'Das Backup bekommt ein hartes Zeitfenster und startet nicht in den Betrieb hinein', richtig: true },
        { text: 'Eine Überwachung der Uplink-Auslastung, die bei Dauerlast meldet', richtig: true },
        { text: 'Den Uplink zum Serverraum verstärken', richtig: true },
        { text: 'Die Telefonie auf TCP umstellen' }
      ],
      antwortRichtig: 'Richtig. [[QoS]] verteilt die vorhandene [[Bandbreite]] sinnvoller, das Zeitfenster verhindert die Ursache, die Überwachung macht den nächsten Fall in Minuten statt Stunden sichtbar, und ein stärkerer Uplink schafft Luft. Die Telefonie auf [[TCP]] umzustellen wäre dagegen falsch: Die Bestätigungen und Wiederholungen machen Sprache <b>schlechter</b>, nicht besser.',
      antwortFalsch: 'Fast. Vier der Maßnahmen greifen an verschiedenen Stellen: Priorisierung, Ursache, Sichtbarkeit, Kapazität. Die Telefonie auf [[TCP]] umzustellen gehört nicht dazu – Sprache nutzt bewusst [[UDP]], weil eine Wiederholung dort nichts mehr nützt.' },

    { typ: 'merk', text: 'Alles langsam, nichts kaputt, schwankend mit der Last = <b>Engpass</b>, nicht Defekt. Gesucht wird an der Stelle, durch die alle müssen (Uplink-Auslastung je Port, dauerhaft über [[SNMP]]). Sprache leidet zuerst, weil [[Jitter]] sie trifft – dagegen hilft [[QoS]].' },

    { typ: 'nachricht', von: 'mirko', text: 'QoS-Regel und ein Schwellwert auf dem Uplink. Dann meldet sich das Netz beim nächsten Mal selbst.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'net-06',
  kontakt: 'netzstoerung',
  titel: 'Nach dem Umbau fehlt der Drucker',
  thema: 'VLAN-Fehler',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Nach dem Umbau am Wochenende: Alle Rechner im Wareneingang laufen, aber der Etikettendrucker ist weg. Er zeigt an der Anzeige eine IP, ist aber von keinem Rechner erreichbar.' },
    { typ: 'nachricht', von: 'mirko', text: 'Welche IP steht da?' },
    { typ: 'nachricht', von: 'kleinschmidt', text: '192.168.30.57.' },
    { typ: 'nachricht', von: 'mirko', text: 'Ah. Die Rechner im Wareneingang liegen in 192.168.20.0/24. Leonie, was sagt dir das?' },

    { typ: 'frage', von: 'mirko', text: 'Was ist hier passiert?',
      optionen: [
        { text: 'Der Drucker hat seine Adresse aus einem anderen VLAN bekommen – sein Port ist falsch zugeordnet', richtig: true, norm: 'VLAN',
          antwort: 'Richtig. 192.168.30.x ist das Gäste-[[VLAN]]. Der Drucker hat also vom dortigen [[DHCP]]-Bereich eine Adresse bekommen, weil sein Switch-Port beim Umbau im falschen VLAN gelandet ist. Technisch funktioniert alles – nur im falschen Netz.' },
        { text: 'Der Drucker ist defekt',
          antwort: 'Er bekommt eine Adresse und zeigt sie an – Schicht 1 bis 3 arbeiten. Ein defektes Gerät käme nicht so weit.' },
        { text: 'Es gibt einen Adresskonflikt',
          antwort: 'Dann wäre er sprunghaft erreichbar, nicht dauerhaft unerreichbar. Hier liegt er schlicht im falschen Netz.' }
      ] },

    { typ: 'nachricht', von: 'leonie', text: 'aber warum erreicht man ihn dann gar nicht? der router könnte doch dazwischen vermitteln 🤔' },

    { typ: 'frage', von: 'mirko', text: 'Gute Frage – warum klappt das nicht?',
      optionen: [
        { text: 'Weil zwischen Lager- und Gäste-VLAN bewusst kein Weg erlaubt ist', richtig: true, norm: 'Netzwerksegmentierung',
          antwort: 'Genau, und das ist hier kein Fehler, sondern die Regel, die wir selbst aufgestellt haben: Das Gästenetz führt ausschließlich ins Internet, nicht ins Firmennetz. Die [[Netzwerksegmentierung]] funktioniert – sie trifft nur gerade den Falschen.' },
        { text: 'Weil der Router die Adressbereiche nicht kennt',
          antwort: 'Er kennt beide, er darf nur nicht zwischen ihnen vermitteln. Der Unterschied ist wichtig: Es fehlt kein Eintrag, es greift eine Regel.' },
        { text: 'Weil VLANs grundsätzlich nicht miteinander reden können',
          antwort: 'Über einen [[Router]] oder [[Layer-3-Switch]] können sie es durchaus – hier ist es ausdrücklich untersagt.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Ich schaue in die Dokumentation. Dose W-14, Patchfeld Port 31, Switch Port 18 – soll VLAN 20 sein, steht aber auf VLAN 30.' },
    { typ: 'nachricht', von: 'leonie', text: 'ihr habt das wirklich alles aufgeschrieben?? 😳' },
    { typ: 'nachricht', von: 'mirko', text: 'Deshalb dauert das jetzt vier Minuten und nicht vier Stunden.' },

    { typ: 'frage', von: 'mirko', text: 'Was hätte diesen Fehler beim Umbau verhindert?',
      optionen: [
        { text: 'Ein Abgleich der Portzuordnung gegen die Dokumentation nach dem Umbau', richtig: true, norm: 'Netzdokumentation',
          antwort: 'Richtig. Die [[Netzdokumentation]] hilft nicht nur beim Suchen, sie ist auch die Prüfliste danach: Nach jedem Eingriff einmal Soll gegen Ist. Das dauert zehn Minuten und fängt genau solche Fehler ab.' },
        { text: 'Mehr Zeit für den Umbau',
          antwort: 'Zeitdruck begünstigt Fehler, verhindert sie aber nicht. Was hilft, ist die Kontrolle am Ende.' },
        { text: 'Alle Ports im selben VLAN lassen',
          antwort: 'Das hieße, die Trennung aufzugeben, die der ISB gefordert hat. Die Lösung liegt in der Kontrolle, nicht im Verzicht.' }
      ] },

    { typ: 'nachricht', von: 'mirko', text: 'Port zurück auf VLAN 20, Drucker holt neue Adresse.' },
    { typ: 'nachricht', von: 'kleinschmidt', text: 'Er druckt. Danke.' },

    { typ: 'frage', von: 'mirko', text: 'Letzte Frage an dich: Woran hättest du es auch ohne Dokumentation erkannt?',
      optionen: [
        { text: 'An der Adresse selbst – sie verrät das VLAN, weil jedes VLAN seinen eigenen Adressbereich hat', richtig: true,
          antwort: 'Richtig, und das ist der Grund, warum man VLANs und Adressbereiche <b>deckungsgleich</b> schneidet: VLAN 20 bekommt 192.168.20.0/24, VLAN 30 die .30.0/24. Dann sagt jede Adresse sofort, wo das Gerät hängt – ein Gewinn bei jeder Störung.' },
        { text: 'An der MAC-Adresse des Druckers',
          antwort: 'Die sagt nur, von welchem Hersteller das Gerät ist. Zum [[VLAN]] sagt sie nichts.' },
        { text: 'Gar nicht – ohne Dokumentation ist das nicht zu finden',
          antwort: 'Doch: Die Adresse 192.168.30.57 passt zum Gästebereich, nicht zum Lager. Das ist schon der halbe Befund.' }
      ] },

    { typ: 'karte', titel: 'Wer trennt was?', quelle: 'netzgeraete',
      keys: ['switch', 'l3switch', 'router', 'firewall'] },

    { typ: 'merk', text: 'Gerät hat eine Adresse, ist aber nicht erreichbar → prüfen, ob sie zum <b>richtigen Netz</b> gehört. Ein falsch zugeordneter Port legt das Gerät ins falsche [[VLAN]]. Deshalb [[VLAN]]s und Adressbereiche deckungsgleich schneiden – dann verrät die Adresse das VLAN – und nach jedem Eingriff die [[Netzdokumentation]] gegen den Ist-Stand abgleichen.' },

    { typ: 'nachricht', von: 'mirko', text: 'Und die Dokumentation hat sich heute zum dritten Mal in diesem Monat bezahlt gemacht.' }
  ]
});
