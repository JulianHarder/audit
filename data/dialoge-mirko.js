/* ===========================================================
   AUDIT – data/dialoge-mirko.js
   Mirko Pahlke, Netzwerkadministration. Duzt dich, erklaert
   am Geraet, das gerade vor ihm liegt. Bei ihm geht es um
   Hardware, Medien, Schichten und VLANs.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};
AUDIT.data.dialoge = AUDIT.data.dialoge || [];

AUDIT.data.dialoge.push({
  id: 'mir-01',
  kontakt: 'mirko',
  titel: 'Der neue Switch im Lager',
  thema: 'Netzgeräte und Schichten',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Moin, komm mal mit in den Verteilerschrank. Ich hab hier zwei Kartons stehen und du darfst mitentscheiden, was wo hinkommt.' },
    { typ: 'nachricht', text: 'Im Lager hängen 14 Geräte an einem alten [[Hub]]. Die Leute meckern, dass der Handscanner bei Betrieb kriecht.' },

    { typ: 'frage', text: 'Warum wird ein Hub bei Last langsam?',
      optionen: [
        { text: 'Er schickt jedes Signal an alle Ports – alle teilen sich eine Kollisionsdomäne und die Bandbreite', richtig: true, norm: 'OSI-Schicht 1',
          antwort: 'Genau. Der [[Hub]] arbeitet auf [[OSI-Modell|Schicht 1]] und wertet nichts aus. Je mehr gleichzeitig sendet, desto mehr [[Kollisionsdomäne|Kollisionen]] – und jede Wiederholung kostet wieder Zeit.' },
        { text: 'Er hat zu wenig Arbeitsspeicher für die Adresstabelle',
          antwort: 'Ein Hub hat gar keine Adresstabelle, das ist der Punkt. Erst der [[Switch]] merkt sich, welches Gerät an welchem Port hängt.' },
        { text: 'Weil die Kabel zu lang sind',
          antwort: 'Die Länge spielt hier keine Rolle, die Strecken sind kurz. Das Problem steckt in der Arbeitsweise des Geräts.' }
      ] },

    { typ: 'nachricht', text: 'Richtig. Karton eins ist deshalb ein Switch. Aber erklär mir mal, was der konkret anders macht.' },

    { typ: 'frage', text: 'Was macht ein Switch anders als ein Hub?',
      optionen: [
        { text: 'Er lernt die MAC-Adressen und leitet jeden Rahmen nur an den richtigen Port', richtig: true, norm: 'OSI-Schicht 2',
          antwort: 'So ist es. Der [[Switch]] arbeitet auf [[OSI-Modell|Schicht 2]] und liest die [[MAC-Adresse]] aus dem [[Frame|Rahmen]]. Jeder Port wird dadurch seine eigene [[Kollisionsdomäne]], und in [[Duplex|Vollduplex]] kann gleichzeitig gesendet und empfangen werden.' },
        { text: 'Er entscheidet anhand der IP-Adresse, wohin die Daten gehen',
          antwort: 'Das ist die Aufgabe des [[Router]]s auf [[OSI-Modell|Schicht 3]]. Der Switch kommt mit der [[MAC-Adresse]] aus – ein beliebter Prüfungsfallstrick.' },
        { text: 'Er verstärkt das Signal für längere Strecken',
          antwort: 'Das macht der [[Repeater]]. Der Switch frischt das Signal nebenbei auch auf, aber das ist nicht sein Zweck.' }
      ] },

    { typ: 'nachricht', text: 'Karton zwei ist ein Router für die Anbindung nach draußen. Letzte Frage dazu, dann schraube ich.' },

    { typ: 'frage', text: 'Was kann der Router, was der Switch nicht kann?',
      optionen: [
        { text: 'Er verbindet verschiedene IP-Netze und leitet Broadcasts nicht weiter', richtig: true, norm: 'OSI-Schicht 3',
          antwort: 'Beides richtig und beides wichtig. Der [[Router]] ist die Grenze der [[Broadcast-Domäne]] – deshalb bleibt ein [[Broadcast]]-Gewitter im Lager und reißt nicht das Büro mit.' },
        { text: 'Er kann mehr Geräte anschließen',
          antwort: 'Eher umgekehrt: Switches haben meist deutlich mehr Ports. Der Unterschied ist nicht die Menge, sondern die Schicht, auf der gearbeitet wird.' },
        { text: 'Er trennt die Kollisionsdomänen',
          antwort: 'Das erledigt schon der [[Switch]], bei dem jeder Port eine eigene hat. Der Router trennt die [[Broadcast-Domäne]] – diese Unterscheidung wird gern gefragt.' }
      ] },

    { typ: 'karte', titel: 'Welches Gerät arbeitet auf welcher Schicht?', quelle: 'netzgeraete',
      keys: ['hub', 'repeater', 'switch', 'ap', 'router', 'l3switch', 'firewall'] },

    { typ: 'merk', text: '[[Hub]] = [[OSI-Modell|Schicht 1]], [[Switch]] = Schicht 2 ([[MAC-Adresse]]), [[Router]] = Schicht 3 ([[IP-Adresse]]). Der <b>Switch</b> trennt [[Kollisionsdomäne]]n, der <b>Router</b> die [[Broadcast-Domäne]].' },

    { typ: 'nachricht', text: 'Perfekt. Dann häng ich den Hub ab und wir sind den Dauerärger los.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'mir-02',
  kontakt: 'mirko',
  titel: 'Hundert Meter sind hundert Meter',
  thema: 'Übertragungsmedien',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Neues Problem. Die neue Kommissionierhalle steht 140 Meter vom Bürogebäude weg. Ich soll da einen Switch hinstellen und ans Hausnetz hängen.' },
    { typ: 'nachricht', text: 'Der Elektriker sagt: „Nehmen wir Cat 7, das hält." Ich sage: nein.' },

    { typ: 'frage', text: 'Warum geht Twisted-Pair auf 140 Meter nicht?',
      optionen: [
        { text: 'Weil eine Ethernet-Strecke über Kupfer auf 100 Meter begrenzt ist – unabhängig von der Kategorie', richtig: true, norm: 'IEEE 802.3',
          antwort: 'Genau. Die 100 Meter stehen in der Norm und gelten für die ganze Strecke inklusive Patchkabel. Cat 7 bringt mehr [[Bandbreite]] und bessere Schirmung, aber keinen einzigen Meter mehr Reichweite.' },
        { text: 'Weil Cat 7 nur für Gigabit zugelassen ist',
          antwort: 'Cat 7 kann sogar mehr als Gigabit. Die Kategorie ist hier nicht der Engpass, sondern die zulässige Streckenlänge.' },
        { text: 'Weil das Kabel bei der Länge zu teuer wird',
          antwort: 'Der Preis ist nicht das Argument. Es funktioniert technisch nicht zuverlässig – und ein Netz, das „meistens" geht, ist das Schlimmste von allem.' }
      ] },

    { typ: 'nachricht', text: 'Dazu kommt: In der Halle laufen zwei Hubtore und drei Förderbänder. Du kannst dir vorstellen, was die elektrisch veranstalten.' },

    { typ: 'frage', text: 'Was nehmen wir für die Strecke?',
      optionen: [
        { text: 'Lichtwellenleiter', richtig: true, norm: 'Lichtwellenleiter',
          antwort: 'Richtig, und aus zwei Gründen gleichzeitig: Die Länge ist kein Thema mehr, und [[Lichtwellenleiter|Glasfaser]] ist gegen elektromagnetische Störungen völlig unempfindlich. Nebenbei gibt es keine Potentialprobleme zwischen zwei Gebäuden.' },
        { text: 'Zwei Kupferstrecken mit einem Repeater in der Mitte',
          antwort: 'Technisch denkbar, aber in der Praxis Murks: Der [[Repeater]] bräuchte Strom und einen trockenen Platz auf halber Strecke im Hof. Und das Störproblem bleibt.' },
        { text: 'Eine Richtfunkstrecke',
          antwort: 'Kommt bei Mietgelände oder Straßen dazwischen in Frage. Hier können wir graben – dann ist die Faser verlässlicher und billiger im Betrieb.' }
      ] },

    { typ: 'nachricht', text: 'Sehe ich auch so. Ich bestell Multimode-Faser und zwei passende Module. Eine Sache noch.' },
    { typ: 'nachricht', text: 'In der Halle sollen vier Access Points unter die Decke, sechs Meter hoch. Steckdosen gibt es da oben nicht.' },

    { typ: 'frage', text: 'Wie versorgen wir die Access Points mit Strom?',
      optionen: [
        { text: 'Über PoE durch das Netzwerkkabel', richtig: true, norm: 'IEEE 802.3af/at',
          antwort: 'Genau dafür ist [[PoE]] gemacht: ein Kabel für Daten und Strom. Wir brauchen dann einen Switch mit PoE-Budget – und bekommen den Nebeneffekt, dass eine [[USV]] am Switch auch die Access Points stützt.' },
        { text: 'Der Elektriker setzt vier Steckdosen unter die Decke',
          antwort: 'Geht, kostet aber Gerüst, Elektriker und Zeit – und bei jedem Umhängen eines Access Points wieder. [[PoE]] löst das mit dem Kabel, das sowieso gezogen wird.' },
        { text: 'Mit Akkus in den Geräten',
          antwort: 'Access Points laufen im Dauerbetrieb. Akkus hieße regelmäßig aufs Gerüst – keine Lösung für feste Technik.' }
      ] },

    { typ: 'merk', text: 'Ethernet über Kupfer endet bei <b>100 Metern</b> je Strecke – auch mit Cat 7. Mehr Länge oder elektrische Störungen heißen [[Lichtwellenleiter]]. Strom für Geräte unter der Decke kommt per [[PoE]] durchs Datenkabel.' },

    { typ: 'nachricht', text: 'Gut. Ich schreib die Bestellung, du kriegst sie zum Gegenlesen.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'mir-03',
  kontakt: 'mirko',
  titel: 'Sieben Schichten, von unten nach oben',
  thema: 'OSI-Modell',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Du hast vorhin zweimal „Schicht 2" gesagt, ohne zu zögern. Dann machen wir das Modell einmal richtig – das kommt in der Prüfung garantiert.' },
    { typ: 'nachricht', text: 'Sieben Schichten, jede mit einer Aufgabe, jede nutzt die darunter. Fang unten an.' },

    { typ: 'frage', text: 'Welche Aufgabe hat Schicht 1, die Bitübertragungsschicht?',
      optionen: [
        { text: 'Sie überträgt einzelne Bits als Signal und legt Kabel, Stecker und Pegel fest', richtig: true, norm: 'ISO/IEC 7498',
          antwort: 'Richtig. Hier geht es nur um Physik: Spannung, Licht, Funk. Adressen kennt diese Schicht nicht – deshalb kann ein [[Hub]] auch nicht sortieren.' },
        { text: 'Sie adressiert Geräte im lokalen Netz',
          antwort: 'Das ist Schicht 2 mit der [[MAC-Adresse]]. Schicht 1 weiß nicht einmal, dass es Geräte gibt.' },
        { text: 'Sie prüft, ob die Übertragung fehlerfrei war',
          antwort: 'Fehlererkennung über die Prüfsumme im [[Frame|Rahmen]] gehört zu Schicht 2. Schicht 1 schiebt nur Signale.' }
      ] },

    { typ: 'nachricht', text: 'Weiter. Zwischen 3 und 4 werden die meisten Leute unsicher.' },

    { typ: 'frage', text: 'Was unterscheidet Schicht 3 von Schicht 4?',
      optionen: [
        { text: 'Schicht 3 bringt das Paket zum richtigen Gerät, Schicht 4 zur richtigen Anwendung auf diesem Gerät', richtig: true,
          antwort: 'Das ist der Kern. Schicht 3 arbeitet mit der [[IP-Adresse]] und entscheidet den Weg, Schicht 4 mit dem [[Port]] und entscheidet, welcher Dienst die Daten bekommt. Haus und Wohnungsnummer.' },
        { text: 'Schicht 3 ist für das lokale Netz, Schicht 4 für das Internet',
          antwort: 'Beide gelten überall. Die Grenze zwischen lokal und entfernt zieht nicht die Schicht, sondern die [[Subnetzmaske]].' },
        { text: 'Schicht 3 verschlüsselt, Schicht 4 überträgt',
          antwort: 'Verschlüsselung ordnet das Modell der Darstellungsschicht 6 zu. Schicht 3 adressiert, Schicht 4 stellt die Verbindung von Anwendung zu Anwendung her.' }
      ] },

    { typ: 'karte', titel: 'Die sieben Schichten', quelle: 'osi' },

    { typ: 'nachricht', text: 'Jetzt der Teil, der im Alltag wirklich zählt. Eine Mail geht raus. Was passiert mit den Daten auf dem Weg nach unten?' },

    { typ: 'frage', text: 'Was heißt Kapselung?',
      optionen: [
        { text: 'Jede Schicht packt die Daten der Schicht über sich in einen eigenen Umschlag mit eigenem Kopf', richtig: true, norm: 'Kapselung',
          antwort: 'Genau. Die Mail steckt im [[Segment]] mit Portnummern, das im [[Paket]] mit IP-Adressen, das im [[Frame|Rahmen]] mit MAC-Adressen. Beim Empfänger wird in umgekehrter Reihenfolge ausgepackt.' },
        { text: 'Die Daten werden auf allen sieben Schichten verschlüsselt',
          antwort: 'Verschlüsselung ist etwas anderes. Bei der [[Kapselung]] kommt nur Verwaltungsinformation dazu – jede Schicht schreibt vorne ihren Kopf dran.' },
        { text: 'Die Daten werden in gleich große Blöcke zerlegt',
          antwort: 'Das Zerlegen passiert auch, ist aber nur ein Teil davon. Entscheidend ist das Prinzip der ineinander gesteckten Umschläge.' }
      ] },

    { typ: 'nachricht', text: 'Und weil niemand im Betrieb sieben Schichten durchzählt, nehmen wir in der Praxis das kürzere Modell.' },

    { typ: 'frage', text: 'Wie fasst das TCP/IP-Modell die OSI-Schichten zusammen?',
      optionen: [
        { text: 'Netzzugang (1–2), Internet (3), Transport (4), Anwendung (5–7)', richtig: true, norm: 'TCP/IP-Modell',
          antwort: 'Richtig. Vier statt sieben Schichten: Die beiden unteren werden zum Netzzugang, die drei oberen zur Anwendung. [[OSI-Modell|OSI]] bleibt das Lehrmodell, [[TCP/IP-Modell|TCP/IP]] ist das gebaute.' },
        { text: 'Es sind dieselben sieben Schichten, nur anders benannt',
          antwort: 'Nein, es sind wirklich nur vier. Genau das Zusammenfassen ist der Unterschied.' },
        { text: 'Netzzugang (1–3), Transport (4–5), Anwendung (6–7)',
          antwort: 'Fast, aber die Vermittlungsschicht 3 bildet im TCP/IP-Modell ihre eigene Schicht – sie heißt dort Internetschicht. Und Schicht 5 gehört zur Anwendung.' }
      ] },

    { typ: 'merk', text: 'Von unten nach oben: <b>Bitübertragung – Sicherung – Vermittlung – Transport – Sitzung – Darstellung – Anwendung</b>. Dateneinheiten von oben nach unten: [[Segment]] → [[Paket]] → [[Frame|Rahmen]] → Bit.' },

    { typ: 'nachricht', text: 'Das sitzt. Bei einer Störung gehst du genau diese Leiter hoch, von unten – dazu kommen wir noch.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'mir-04',
  kontakt: 'mirko',
  titel: 'Lager und Büro auseinander',
  thema: 'VLAN',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Frau Hagedorn war beim ISB. Ergebnis: Die Lagertechnik soll vom Büronetz getrennt werden. Steuerungen, Waagen, Etikettendrucker – das Zeug kriegt nie wieder ein Update.' },
    { typ: 'nachricht', text: 'Vorschlag vom Dienstleister: zweite Verkabelung und zweiter Switch-Satz. 11.000 Euro.' },

    { typ: 'frage', text: 'Geht die Trennung auch ohne zweites Kabelnetz?',
      optionen: [
        { text: 'Ja, über VLANs auf den vorhandenen Switches', richtig: true, norm: 'IEEE 802.1Q',
          antwort: 'Genau. Ein [[VLAN]] teilt den [[Switch]] logisch in mehrere getrennte Netze. Jeder Port wird einem VLAN zugewiesen – auf derselben Verkabelung, ohne einen Meter neues Kabel.' },
        { text: 'Nein, Trennung braucht immer getrennte Hardware',
          antwort: 'Das war früher so. Seit [[VLAN]]s nach 802.1Q ist die logische Trennung der Normalfall – auch im BSI-Grundschutz.' },
        { text: 'Ja, es reicht, den Geräten andere IP-Adressen zu geben',
          antwort: 'Das ist der häufigste Denkfehler. Andere Adressen allein trennen nichts: Die Geräte hängen weiter in derselben [[Broadcast-Domäne]], und wer seine Adresse selbst umstellt, ist wieder drin.' }
      ] },

    { typ: 'nachricht', text: 'Danke. Dann erklär mir das genau, damit ich es ihr verkaufen kann. Was macht ein VLAN technisch?' },

    { typ: 'frage', text: 'Was bewirkt ein VLAN?',
      optionen: [
        { text: 'Es trennt Broadcast-Domänen – Geräte verschiedener VLANs erreichen sich nur über einen Router', richtig: true, norm: 'VLAN',
          antwort: 'Richtig. Damit ist das [[VLAN]] die praktische Form der [[Netzwerksegmentierung]]: Jedes VLAN ist ein eigenes [[Broadcast]]-Gebiet und braucht für den Übergang einen [[Router]] oder [[Layer-3-Switch]] – und genau an diesem Übergang greift die [[Firewall]].' },
        { text: 'Es verschlüsselt den Verkehr zwischen den Ports',
          antwort: 'Ein VLAN trennt, es verschlüsselt nicht. Wer mitlesen will, muss aber erst in das richtige VLAN kommen.' },
        { text: 'Es gibt den Geräten eine schnellere Verbindung',
          antwort: 'Die [[Bandbreite]] bleibt dieselbe. Weniger [[Broadcast]]-Verkehr pro Segment entlastet nebenbei etwas, aber das ist nicht der Zweck.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt die Stelle, an der ich bei der Konfiguration selbst immer kurz überlege.' },
    { typ: 'nachricht', text: 'Vom Etagenswitch im Lager geht genau <b>ein</b> Kabel zum zentralen Switch. Darüber müssen aber beide VLANs laufen, Lagertechnik und Büro.' },

    { typ: 'frage', text: 'Wie bekommt man mehrere VLANs über eine Leitung?',
      optionen: [
        { text: 'Als Trunk – jeder Rahmen wird mit seiner VLAN-Nummer markiert', richtig: true, norm: 'Trunk / Tagging',
          antwort: 'Genau. Auf einem [[Trunk]] trägt jeder [[Frame|Rahmen]] ein Etikett mit seiner VLAN-Nummer, und der Switch auf der anderen Seite sortiert ihn wieder richtig ein. Die Ports zu den Endgeräten bleiben unmarkiert.' },
        { text: 'Man braucht pro VLAN ein eigenes Kabel',
          antwort: 'Das wäre der Rückfall in die 11.000-Euro-Lösung. Genau dafür gibt es das Markieren der Rahmen.' },
        { text: 'Die VLANs wechseln sich zeitlich auf der Leitung ab',
          antwort: 'So arbeitet Ethernet nicht. Die Zuordnung steckt im Etikett des einzelnen Rahmens, nicht in einem Zeitplan.' }
      ] },

    { typ: 'nachricht', text: 'Letzte Frage, dann baue ich die Konfiguration.' },

    { typ: 'mehrfach', text: 'Welche Regeln sollen am Übergang zwischen den VLANs gelten?',
      optionen: [
        { text: 'Aus dem Lager-VLAN darf nur der Warenwirtschaftsserver auf einem definierten Port erreicht werden', richtig: true },
        { text: 'Aus dem Lager-VLAN gibt es keinen Weg ins Internet', richtig: true },
        { text: 'Das Büro-VLAN darf für die Wartung gezielt auf die Steuerungen zugreifen', richtig: true },
        { text: 'Zwischen den VLANs wird alles erlaubt, Hauptsache sie sind getrennt' },
        { text: 'Die Steuerungen bekommen zusätzlich öffentliche IP-Adressen' }
      ],
      antwortRichtig: 'Richtig. Getrennt heißt nicht abgeschnitten: Der Übergang wird <b>gezielt</b> geöffnet, in der nötigen Richtung und nur für den nötigen Dienst – Need-to-know-Prinzip auf Netzebene. Die alten Steuerungen brauchen kein Internet, also bekommen sie keines.',
      antwortFalsch: 'Noch nicht ganz. Denk daran, wozu die Trennung da ist: Alles zu erlauben hebt sie auf, und öffentliche Adressen für ungepatchte Steuerungen wären das Gegenteil von Schutz. Umgekehrt darf ein <b>gezielter</b> Weg für Wartung und Warenwirtschaft durchaus bleiben.' },

    { typ: 'karte', titel: 'Die beteiligten Geräte', quelle: 'netzgeraete', keys: ['switch', 'l3switch', 'router', 'firewall'] },

    { typ: 'merk', text: 'Ein [[VLAN]] trennt [[Broadcast-Domäne]]n auf <b>vorhandener</b> Verkabelung und ist damit die praktische [[Netzwerksegmentierung]]. Mehrere VLANs über eine Leitung laufen als [[Trunk]] mit markierten Rahmen. Der Übergang zwischen VLANs wird gezielt geöffnet, nicht pauschal.' },

    { typ: 'nachricht', text: 'Damit kann ich arbeiten. Und das Geld bleibt im Haus.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'mir-05',
  kontakt: 'mirko',
  titel: 'Die neue Halle wird verkabelt',
  thema: 'Topologien',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Der Planer will wissen, wie wir die neue Halle aufbauen. Er hat drei Varianten gezeichnet und wartet auf unsere Empfehlung.' },
    { typ: 'nachricht', text: 'Variante eins: ein Kabel längs durch die Halle, alle Geräte hängen dran.' },

    { typ: 'frage', text: 'Was spricht gegen die Bustopologie?',
      optionen: [
        { text: 'Eine Unterbrechung der Leitung legt das ganze Segment still, und alle teilen sich das Medium', richtig: true, norm: 'Bustopologie',
          antwort: 'Richtig, und in einer Halle mit Staplerverkehr ist genau das das Argument: Ein angefahrener Kabelkanal nimmt alles mit. Die [[Bustopologie]] ist heute nur noch Lehrbeispiel.' },
        { text: 'Sie braucht zu viel Kabel',
          antwort: 'Umgekehrt – der Bus ist die sparsamste Variante. Seine Schwäche ist die Verlässlichkeit, nicht der Materialbedarf.' },
        { text: 'Sie funktioniert nur mit Glasfaser',
          antwort: 'Der Bus war gerade die klassische Kupfervariante. Das Problem liegt in der gemeinsamen Leitung.' }
      ] },

    { typ: 'nachricht', text: 'Variante zwei: ein Switch im Hallenbüro, von dort je ein Kabel zu jedem Anschluss.' },

    { typ: 'frage', text: 'Was ist bei der Sterntopologie zu bedenken?',
      optionen: [
        { text: 'Ein defektes Kabel betrifft nur ein Gerät – aber der zentrale Switch ist der Einzelpunkt des Ausfalls', richtig: true, norm: 'Sterntopologie',
          antwort: 'Genau die Abwägung. Der [[Sterntopologie|Stern]] ist heute der Standard im [[LAN]], weil Fehler sauber eingrenzbar sind. Gegen den zentralen Ausfall hilft [[Redundanz]]: zweites Netzteil, [[USV]], ein Ersatzgerät im Schrank.' },
        { text: 'Jedes Gerät muss den Verkehr der anderen mit weiterleiten',
          antwort: 'Das ist beim Ring der Fall. Im Stern geht jeder Anschluss direkt zum [[Switch]].' },
        { text: 'Die Geräte teilen sich die Bandbreite der Zentrale',
          antwort: 'Zum Endgerät hat jeder Port seine volle [[Bandbreite]]. Eng werden kann es erst auf dem Weg nach oben, zum übergeordneten Switch.' }
      ] },

    { typ: 'nachricht', text: 'Variante drei: drei Sterne – Wareneingang, Kommissionierung, Versand – und die drei Switches an einen zentralen Verteiler.' },

    { typ: 'frage', text: 'Welche Topologie ist das, und passt sie hier?',
      optionen: [
        { text: 'Baum beziehungsweise hierarchisch – und sie passt, weil sie sich bereichsweise erweitern lässt', richtig: true, norm: 'Baumtopologie',
          antwort: 'Richtig. Die [[Baumtopologie]] ist der Normalfall in größeren Gebäuden: kurze Wege zum Bereichsswitch, nur eine Strecke pro Bereich nach oben, und ein vierter Bereich kommt später einfach dazu.' },
        { text: 'Vermascht – jeder mit jedem',
          antwort: 'Dafür müssten die Bereichsswitches auch untereinander verbunden sein. Beim [[Vermaschtes Netz|vermaschten Netz]] gibt es mehrere Wege zum Ziel; hier führt jeder Weg über die Zentrale.' },
        { text: 'Ring – die Switches bilden einen Kreis',
          antwort: 'Beim [[Ringtopologie|Ring]] wäre jeder Switch mit zwei Nachbarn verbunden und der Kreis geschlossen. Hier zeigen alle Leitungen auf einen zentralen Punkt.' }
      ] },

    { typ: 'karte', titel: 'Topologien im Vergleich', quelle: 'topologien' },

    { typ: 'nachricht', text: 'Eine Sache macht mir bei Variante drei noch Sorgen: Jeder Bereich hängt an genau einer Leitung nach oben.' },

    { typ: 'frage', text: 'Was ist der Preis für eine zweite Leitung je Bereich?',
      optionen: [
        { text: 'Es entsteht eine Schleife – ohne Spanning Tree kreisen die Broadcasts endlos', richtig: true, norm: 'IEEE 802.1D',
          antwort: 'Genau, und das ist der klassische Selbstschuss. Zwei Wege zwischen zwei Switches ergeben eine [[Schleife]]. [[Spanning Tree]] erkennt sie und hält die zweite Leitung in Reserve, bis die erste ausfällt. Erst dann ist die Redundanz wirklich eine.' },
        { text: 'Nichts – zwei Leitungen verdoppeln einfach die Bandbreite',
          antwort: 'Das wäre schön, passiert aber nicht von allein. Ohne Konfiguration entsteht erst mal eine [[Schleife]], und die legt das Segment lahm.' },
        { text: 'Die Switches vergeben doppelte MAC-Adressen',
          antwort: '[[MAC-Adresse|MAC-Adressen]] werden nicht vergeben, sie stecken in der Hardware. Das Problem ist der Kreis im Netz.' }
      ] },

    { typ: 'merk', text: 'Im [[LAN]] ist der [[Sterntopologie|Stern]] der Standard, in größeren Gebäuden die [[Baumtopologie]]. Jede zweite Leitung zwischen zwei Switches braucht [[Spanning Tree]] – sonst ist sie keine [[Redundanz]], sondern eine [[Schleife]].' },

    { typ: 'nachricht', text: 'Dann geht Variante drei mit Spanning Tree raus an den Planer. Mit deiner Begründung.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'mir-06',
  kontakt: 'mirko',
  titel: 'Woher weiß der Switch, wo du hängst?',
  thema: 'Schicht 2 im Detail',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Eine Frage, die mir gestern niemand beantworten konnte, und die finde ich schön: Du steckst einen fabrikneuen Switch aus dem Karton ins Netz, ohne Konfiguration. Und er funktioniert sofort.' },
    { typ: 'nachricht', text: 'Woher weiß das Ding, welches Gerät an welchem Port hängt? Es hat keine Liste bekommen.' },

    { typ: 'frage', text: 'Wie baut ein Switch seine Adresstabelle auf?',
      optionen: [
        { text: 'Er lernt mit: Aus jedem eingehenden Rahmen liest er die Absender-MAC und merkt sich den Port', richtig: true, norm: 'MAC-Lerntabelle',
          antwort: 'Genau. Der [[Switch]] liest bei jedem [[Frame|Rahmen]] die <b>Absenderadresse</b> und notiert: Diese [[MAC-Adresse]] ist über Port 7 erreichbar. Nach wenigen Sekunden Betrieb kennt er alle, die etwas gesagt haben.' },
        { text: 'Er fragt die Geräte beim Einschalten der Reihe nach ab',
          antwort: 'Es gibt kein Protokoll, mit dem ein Switch Endgeräte abfragt. Er hört nur zu – das reicht.' },
        { text: 'Der DHCP-Server teilt ihm die Zuordnung mit',
          antwort: '[[DHCP]] vergibt [[IP-Adresse|IP-Adressen]] auf [[OSI-Modell|Schicht 3]]. Der Switch arbeitet mit [[MAC-Adresse|MAC-Adressen]] auf Schicht 2 und kommt ohne diese Information aus.' }
      ] },

    { typ: 'nachricht', text: 'Und jetzt der interessante Fall: Ein Rahmen kommt rein, Ziel ist eine MAC, die der Switch noch nie gesehen hat. Was tut er?' },

    { typ: 'frage', text: 'Unbekannte Ziel-MAC – was passiert?',
      optionen: [
        { text: 'Er schickt den Rahmen an alle Ports außer den Eingangsport und lernt aus der Antwort', richtig: true, norm: 'Flooding',
          antwort: 'Richtig, das heißt [[Flooding]]. Im Zweifel lieber an alle als gar nicht. Antwortet das Gerät, steht es danach in der Tabelle und der Switch schickt gezielt. Deshalb braucht er keine Einrichtung.' },
        { text: 'Er verwirft den Rahmen',
          antwort: 'Dann käme nie eine erste Verbindung zustande – ein frisch gestarteter Switch kennt ja noch niemanden. Er flutet stattdessen.' },
        { text: 'Er fragt den Router nach der Adresse',
          antwort: 'Der [[Router]] weiß über [[MAC-Adresse|MAC-Adressen]] im Segment nicht mehr als der Switch. Die Lösung ist einfacher: ausprobieren und mitlernen.' }
      ] },

    { typ: 'nachricht', text: 'Letzter Teil. Dein Rechner will den Server unter 192.168.10.5 erreichen. Die IP kennt er. Der Rahmen braucht aber eine Ziel-MAC.' },

    { typ: 'frage', text: 'Wie kommt der Rechner an die MAC-Adresse?',
      optionen: [
        { text: 'Per ARP-Broadcast: „Wer hat 192.168.10.5?" – das Gerät meldet sich mit seiner MAC', richtig: true, norm: 'ARP',
          antwort: 'Genau. [[ARP]] schlägt die Brücke zwischen [[OSI-Modell|Schicht 3 und 2]]. Die Frage geht per [[Broadcast]] an alle, antworten tut nur der Richtige – und beide merken sich das Ergebnis für die nächsten Minuten im ARP-Zwischenspeicher.' },
        { text: 'Die MAC-Adresse steckt in der IP-Adresse',
          antwort: 'Die beiden haben nichts miteinander zu tun. Die [[MAC-Adresse]] klebt an der Hardware, die [[IP-Adresse]] am Netzanschluss – deshalb braucht es [[ARP]] als Übersetzer.' },
        { text: 'Der DNS-Server liefert sie mit',
          antwort: '[[DNS]] übersetzt Namen in [[IP-Adresse|IP-Adressen]], nicht in MACs. Für den letzten Schritt ist [[ARP]] zuständig.' }
      ] },

    { typ: 'nachricht', text: 'Und wenn das Ziel in einem anderen Netz liegt? 8.8.8.8 zum Beispiel.' },

    { typ: 'frage', text: 'Nach wessen MAC-Adresse fragt der Rechner dann?',
      optionen: [
        { text: 'Nach der des Standardgateways – die Ziel-IP bleibt 8.8.8.8, die Ziel-MAC ist der Router', richtig: true,
          antwort: 'Das ist der Punkt, an dem es bei vielen klickt: Die [[IP-Adresse]] bleibt über den ganzen Weg das endgültige Ziel, die [[MAC-Adresse]] wechselt bei <b>jedem</b> [[Hop]]. Nach 8.8.8.8 kann im eigenen Segment niemand antworten – also geht der Rahmen ans [[Standardgateway]].' },
        { text: 'Nach der von 8.8.8.8 – ein ARP-Broadcast geht ins Internet',
          antwort: '[[Broadcast]]s verlassen das Segment nicht, der [[Router]] hält sie auf. Und selbst wenn: Niemand im eigenen Netz könnte für 8.8.8.8 antworten.' },
        { text: 'Nach keiner – bei entfernten Zielen entfällt die MAC-Adresse',
          antwort: 'Jeder [[Frame|Rahmen]] braucht eine Ziel-MAC, sonst weiß der [[Switch]] nicht, wohin. Es ist eben die des nächsten Schritts, nicht die des endgültigen Ziels.' }
      ] },

    { typ: 'karte', titel: 'Die beteiligten Protokolle', quelle: 'netzprotokolle',
      keys: ['arp', 'ip', 'icmp'] },

    { typ: 'merk', text: 'Ein [[Switch]] lernt die [[MAC-Adresse|MAC-Adressen]] aus den <b>Absenderfeldern</b> und flutet, was er noch nicht kennt ([[Flooding]]). [[ARP]] übersetzt [[IP-Adresse|IP]] in MAC. Merksatz für den Weg: <b>Die IP-Adresse bleibt, die MAC-Adresse wechselt bei jedem [[Hop]].</b>' },

    { typ: 'nachricht', text: 'Wenn du das verstanden hast, verstehst du die halbe Fehlersuche gleich mit.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'mir-07',
  kontakt: 'mirko',
  titel: 'Ein Klick, sieben Schichten',
  thema: 'OSI im Zusammenspiel',
  dauer: 7,
  schritte: [
    { typ: 'nachricht', text: 'Heute das Stück, das die Prüfer lieben: Wir verfolgen einen einzigen Klick vom Browser bis ins Kabel. Leonie tippt rampe7-intern.example in die Adresszeile und drückt Enter.' },
    { typ: 'nachricht', text: 'Der Rechner hat eine Adresse, sonst nichts. Was passiert als Allererstes?' },

    { typ: 'frage', text: 'Was ist der erste Schritt?',
      optionen: [
        { text: 'Die Namensauflösung: Der Rechner fragt den DNS-Server nach der IP-Adresse zum Namen', richtig: true, norm: 'DNS',
          antwort: 'Richtig. Ohne [[IP-Adresse]] geht gar nichts – ein Name ist für das Netz bedeutungslos. Also zuerst [[DNS]]. Steht die Antwort schon im Zwischenspeicher, entfällt die Frage.' },
        { text: 'Der Verbindungsaufbau mit dem Webserver',
          antwort: 'Zu welchem? Die Adresse ist noch unbekannt. Erst [[DNS]], dann die Verbindung.' },
        { text: 'Die Anfrage geht ans Standardgateway',
          antwort: 'Dorthin geht sie später – aber erst muss feststehen, wohin überhaupt. Das klärt [[DNS]].' }
      ] },

    { typ: 'nachricht', text: 'DNS sagt: 192.168.10.80. Der Rechner hat 192.168.10.84 mit /24. Nächster Schritt.' },

    { typ: 'frage', text: 'Was prüft der Rechner jetzt?',
      optionen: [
        { text: 'Ob das Ziel im eigenen Subnetz liegt – er vergleicht die Netzanteile über die Subnetzmaske', richtig: true, norm: 'Subnetzmaske',
          antwort: 'Genau, und hier stimmen sie überein: beide 192.168.10.x bei /24. Also geht es <b>direkt</b>, ohne [[Router]]. Der Rechner fragt per [[ARP]] nach der [[MAC-Adresse]] von .80.' },
        { text: 'Ob der Server erreichbar ist, mit einem ping',
          antwort: 'Ein [[ping]] gehört zur Fehlersuche, nicht zum normalen Ablauf. Der Rechner prüft rechnerisch, ob das Ziel im eigenen Netz liegt.' },
        { text: 'Ob der Port 80 offen ist',
          antwort: 'Das zeigt sich erst beim Verbindungsaufbau. Vorher muss klar sein, über welchen Weg das Paket überhaupt hinausgeht.' }
      ] },

    { typ: 'nachricht', text: 'MAC ist da. Jetzt baut sich die Verbindung auf.' },

    { typ: 'frage', text: 'Was passiert auf Schicht 4?',
      optionen: [
        { text: 'TCP baut mit SYN, SYN/ACK, ACK die Verbindung zu Port 80 auf', richtig: true, norm: 'TCP',
          antwort: 'Richtig, der [[Drei-Wege-Handschlag]]. Der Rechner nimmt dafür einen freien hohen Quellport, das Ziel ist der [[Port]] 80. Erst wenn der Handschlag steht, geht die eigentliche Anfrage los.' },
        { text: 'UDP schickt die Anfrage direkt los',
          antwort: 'Web läuft über [[TCP]] – bei einer Seite darf nichts fehlen. [[UDP]] war vorher im Spiel, bei der [[DNS]]-Anfrage.' },
        { text: 'Der Router vergibt eine Sitzungsnummer',
          antwort: 'Der [[Router]] ist hier gar nicht beteiligt, das Ziel liegt im selben Netz. Die Verbindung verwaltet [[TCP]] auf den beiden Endgeräten.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt geht die HTTP-Anfrage raus. Beschreib mir, wie sie aufs Kabel kommt.' },

    { typ: 'frage', text: 'Wie wird die Anfrage verpackt?',
      optionen: [
        { text: 'HTTP ins TCP-Segment mit Ports, das ins IP-Paket mit Adressen, das in den Ethernet-Rahmen mit MACs', richtig: true, norm: 'Kapselung',
          antwort: 'Genau die [[Kapselung]], von oben nach unten. Jede Schicht schreibt ihren Kopf davor: [[Segment]] (Ports) → [[Paket]] (IP) → [[Frame|Rahmen]] (MAC) → Bits auf dem Kabel. Beim Server wird in umgekehrter Reihenfolge ausgepackt.' },
        { text: 'Alles wird in ein großes Paket geschrieben und einmal adressiert',
          antwort: 'Dann wüsste unterwegs niemand, wer zuständig ist. Jede Schicht braucht ihren eigenen Kopf, weil jede ein anderes Gerät anspricht.' },
        { text: 'Zuerst der Ethernet-Rahmen, darin dann HTTP',
          antwort: 'Die Richtung stimmt nicht: Beim Senden geht es von oben nach unten, der Rahmen ist der <b>äußerste</b> Umschlag und kommt zuletzt.' }
      ] },

    { typ: 'karte', titel: 'Wo lag welcher Schritt?', quelle: 'osi' },

    { typ: 'nachricht', text: 'Jetzt das Ganze noch einmal als Fehlerfall, denn genau so nutzt du es im Alltag.' },

    { typ: 'frage', text: 'Die Seite lädt nicht, aber ein ping auf 192.168.10.80 geht. Wo liegt der Fehler?',
      optionen: [
        { text: 'Oberhalb von Schicht 3 – der Weg steht, also stimmt etwas mit dem Dienst auf Port 80 oder der Anwendung nicht', richtig: true, norm: 'Fehlersuche',
          antwort: 'Richtig, und das ist der ganze Nutzen des Modells: Ein erfolgreicher [[ping]] beweist Schicht 1 bis 3. Der Fehler muss darüber liegen – Dienst gestoppt, falscher [[Port]], [[Firewall]]-Regel. [[netstat]] auf dem Server zeigt als Nächstes, ob überhaupt jemand lauscht.' },
        { text: 'Das Kabel oder der Switch',
          antwort: 'Beides ist durch den erfolgreichen [[ping]] bereits ausgeschlossen – Schicht 1 und 2 arbeiten nachweislich.' },
        { text: 'Die Namensauflösung',
          antwort: 'Möglich wäre es, aber wir haben ja direkt die IP angepingt und die Seite ebenfalls über die IP probiert. Dann ist [[DNS]] aus dem Spiel.' }
      ] },

    { typ: 'merk', text: 'Ein Seitenaufruf von unten her: <b>[[DNS]] → Subnetzvergleich → [[ARP]] → [[Drei-Wege-Handschlag|TCP-Handschlag]] → HTTP</b>, verpackt durch [[Kapselung]]. Umgekehrt gilt für die Fehlersuche: Ein erfolgreicher [[ping]] beweist die Schichten 1 bis 3 – der Fehler liegt dann darüber.' },

    { typ: 'nachricht', text: 'Das ist die Prüfungsaufgabe „Beschreiben Sie den Ablauf" – und gleichzeitig dein Werkzeug für jeden Montagmorgen.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'mir-08',
  kontakt: 'mirko',
  titel: 'Drei Bereiche im Verteilerschrank',
  thema: 'Strukturierte Verkabelung',
  dauer: 5,
  schritte: [
    { typ: 'nachricht', text: 'Der Elektriker will für die neue Halle ein Angebot schreiben und fragt, nach welcher Norm wir verkabeln. Dazu musst du die drei Bereiche kennen.' },

    { typ: 'frage', text: 'Welche drei Bereiche kennt die strukturierte Verkabelung?',
      optionen: [
        { text: 'Primär (Gelände), Sekundär (Gebäude), Tertiär (Etage)', richtig: true, norm: 'EN 50173',
          antwort: 'Richtig. Von außen nach innen: [[Primärbereich]] zwischen den Gebäuden, [[Sekundärbereich]] als Steigleitung im Gebäude, [[Tertiärbereich]] von der Etage zur Dose am Arbeitsplatz.' },
        { text: 'Backbone, Verteiler, Endgerät',
          antwort: 'Inhaltlich in die richtige Richtung, aber das sind nicht die Begriffe der Norm. Gefragt sind [[Primärbereich|Primär]], [[Sekundärbereich|Sekundär]] und [[Tertiärbereich|Tertiär]].' },
        { text: 'Kupfer, Glasfaser, Funk',
          antwort: 'Das sind Medien, keine Bereiche. Die Einteilung richtet sich danach, <b>was</b> verbunden wird: Gelände, Gebäude, Etage.' }
      ] },

    { typ: 'karte', titel: 'Die drei Bereiche', quelle: 'verkabelung' },

    { typ: 'nachricht', text: 'Jetzt die Zahl, die im Tertiärbereich immer wieder falsch erinnert wird.' },

    { typ: 'frage', text: 'Wie lang darf die feste Strecke zur Anschlussdose sein?',
      optionen: [
        { text: '90 Meter fest verlegt, plus je 5 Meter Patchkabel – zusammen die 100 Meter der Ethernet-Norm', richtig: true, norm: 'EN 50173 / IEEE 802.3',
          antwort: 'Genau so wird gerechnet. Die 100 Meter aus der Ethernet-Norm sind die <b>Gesamtstrecke</b>. Deshalb gibt die Verkabelungsnorm für den fest verlegten Teil nur 90 Meter frei und lässt an beiden Enden Luft für die Patchkabel.' },
        { text: '100 Meter fest verlegt, die Patchkabel kommen obendrauf',
          antwort: 'Das ist der häufige Irrtum – und er kostet im Betrieb Nerven: Mit zwei Patchkabeln wäre man bei 110 Metern und damit außerhalb der Norm. Die 100 Meter sind alles zusammen.' },
        { text: '90 Meter einschließlich der Patchkabel',
          antwort: 'Zu streng gerechnet. Fest verlegt 90, dazu je 5 Meter Patchkabel – in Summe 100.' }
      ] },

    { typ: 'nachricht', text: 'Letzter Punkt, und der ist mir wichtig: Was verlangen wir vom Elektriker <b>nach</b> der Verlegung?' },

    { typ: 'frage', text: 'Was gehört zur Abnahme?',
      optionen: [
        { text: 'Ein Messprotokoll je Strecke: Länge, Dämpfung, Übersprechen, Belegung', richtig: true, norm: 'Abnahmemessung',
          antwort: 'Richtig, und darauf sollte man bestehen. Eine [[Abnahmemessung]] deckt Verdrahtungsfehler und zu lange Strecken sofort auf. Ohne Protokoll fällt so etwas erst Monate später unter Last auf – und dann ist der Elektriker aus der Gewährleistung heraus.' },
        { text: 'Ein Sichttest: Steckt überall ein Kabel und leuchtet die Lampe?',
          antwort: 'Eine leuchtende Lampe sagt nur, dass eine Verbindung besteht – oft sogar bei vertauschten Adernpaaren. Die Fehler zeigen sich erst bei Gigabit unter Last.' },
        { text: 'Nichts – gemessen wird, wenn es Probleme gibt',
          antwort: 'Dann misst man nach der Abnahme und auf eigene Kosten. Das Protokoll ist Teil der Leistung und gehört in die Ausschreibung.' }
      ] },

    { typ: 'nachricht', text: 'Und das Ergebnis heften wir ab, zusammen mit dem Dosenplan.' },

    { typ: 'mehrfach', text: 'Was gehört in die Netzdokumentation?',
      optionen: [
        { text: 'Welche Dose auf welchen Port im Verteiler geht', richtig: true },
        { text: 'Die Aufteilung der Adressbereiche und die festen Adressen', richtig: true },
        { text: 'Welcher Port in welchem VLAN liegt', richtig: true },
        { text: 'Die Messprotokolle der Abnahme', richtig: true },
        { text: 'Die Passwörter der Netzgeräte im Klartext' }
      ],
      antwortRichtig: 'Richtig. Die vier Punkte zusammen sind die [[Netzdokumentation]] – sie zahlt sich nicht beim Aufbau aus, sondern bei der Störung und im Urlaub des Kollegen. Zugangsdaten gehören dagegen <b>nicht</b> in den Ordner im Schrank, sondern in einen Passwortspeicher mit Zugriffsschutz.',
      antwortFalsch: 'Fast. Alles, was man bei einer Störung braucht, gehört hinein: Dosen, Adressen, VLANs, Messprotokolle. Zugangsdaten im Klartext gehören nicht dazu – die stehen in einem Passwortspeicher mit Zugriffsschutz.' },

    { typ: 'merk', text: '[[Strukturierte Verkabelung]]: [[Primärbereich|Primär]] = Gelände (Glasfaser), [[Sekundärbereich|Sekundär]] = Gebäude (Steigleitung), [[Tertiärbereich|Tertiär]] = Etage ([[Twisted-Pair]], <b>90 m fest + 2 × 5 m Patch = 100 m</b>). Zur Abnahme gehört das Messprotokoll, in die [[Netzdokumentation]] alles außer den Passwörtern.' },

    { typ: 'nachricht', text: 'Damit kann der Elektriker rechnen und wir später arbeiten.' }
  ]
});

AUDIT.data.dialoge.push({
  id: 'mir-09',
  kontakt: 'mirko',
  titel: 'Die Leitung, die nur fast geht',
  thema: 'Leistungsprobleme',
  dauer: 6,
  schritte: [
    { typ: 'nachricht', text: 'Kurioser Fall aus der Buchhaltung. Frau Osterloh sagt, bei ihr dauere alles ewig. Verbindung steht, Dateien öffnen sich – aber eine 200-MB-Datei braucht zwölf Minuten.' },
    { typ: 'nachricht', text: 'Am Nachbarplatz geht dieselbe Datei in zwanzig Sekunden. Gleiches Kabel, gleicher Switch.' },

    { typ: 'frage', text: 'Was prüfst du zuerst?',
      optionen: [
        { text: 'Mit welcher Geschwindigkeit und welchem Duplex-Verfahren der Port ausgehandelt hat', richtig: true, norm: 'Autonegotiation',
          antwort: 'Richtig. Dass die Verbindung steht, aber kriecht, ist das typische Bild einer schiefgelaufenen [[Autonegotiation]]: ausgehandelt wurden vielleicht 100 Mbit im Halbduplex statt Gigabit im Vollduplex.' },
        { text: 'Ob der Virenscanner die Datei prüft',
          antwort: 'Eine gute zweite Idee – aber dann wäre der Nachbarplatz genauso betroffen. Der Unterschied liegt an diesem einen Anschluss.' },
        { text: 'Ob der Server überlastet ist',
          antwort: 'Dann wären alle langsam, nicht nur ein Platz. Der Fehler ist auf diesen Anschluss begrenzt.' }
      ] },

    { typ: 'nachricht', text: 'Und richtig: Port 14 steht auf 100 Mbit halbduplex. Alle anderen auf 1000 vollduplex.' },

    { typ: 'frage', text: 'Warum bremst Halbduplex so stark?',
      optionen: [
        { text: 'Weil nur abwechselnd gesendet werden kann – jede Bestätigung muss warten, und es entstehen Kollisionen', richtig: true, norm: 'Duplex',
          antwort: 'Genau. [[TCP]] bestätigt laufend; in [[Duplex|Halbduplex]] müssen diese Bestätigungen gegen den Datenstrom anwarten. Es entstehen [[Kollisionsdomäne|Kollisionen]] und Wiederholungen – der Durchsatz bricht weit stärker ein, als die halbierte Rate vermuten lässt.' },
        { text: 'Weil die Bandbreite sich halbiert',
          antwort: 'Das wäre die harmlose Erklärung. Tatsächlich ist der Einbruch viel größer, weil die Bestätigungen von [[TCP]] blockieren und Wiederholungen anfallen.' },
        { text: 'Weil Halbduplex keine Fehlerkorrektur hat',
          antwort: 'Fehlererkennung gibt es in beiden Fällen. Das Problem ist, dass nicht gleichzeitig gesendet und empfangen werden kann.' }
      ] },

    { typ: 'nachricht', text: 'Jetzt die Ursache. Jemand hat irgendwann am Port fest „100 / Halbduplex" eingestellt, vermutlich wegen eines alten Druckers.' },

    { typ: 'frage', text: 'Was passiert, wenn eine Seite fest eingestellt ist und die andere auf Automatik steht?',
      optionen: [
        { text: 'Die automatische Seite erkennt die Geschwindigkeit, aber nicht das Duplex-Verfahren, und fällt auf Halbduplex zurück', richtig: true, norm: 'Autonegotiation',
          antwort: 'Richtig, und das ist der Klassiker schlechthin. Die feste Seite handelt nicht aus, also hat die andere nichts zu erkennen und wählt sicherheitshalber Halbduplex. Ergebnis: Die Verbindung steht und ist trotzdem unbrauchbar. Regel – <b>beide</b> Seiten auf Automatik oder <b>beide</b> fest.' },
        { text: 'Die Verbindung kommt gar nicht zustande',
          antwort: 'Das wäre ehrlicher und leichter zu finden. Gerade weil sie zustande kommt, sucht man lange.' },
        { text: 'Die feste Einstellung gewinnt und beide arbeiten so',
          antwort: 'Die feste Seite kann der anderen nichts mitteilen – das ist ja der Sinn des Aushandelns. Die automatische Seite rät und liegt beim Duplex falsch.' }
      ] },

    { typ: 'nachricht', text: 'Ich stelle den Port auf Automatik. Danach noch eine Sache: Frau Osterloh fragt, ob sie dann jetzt „Gigabit, also 1000 Megabyte pro Sekunde" hat.' },

    { typ: 'frage', text: 'Was antwortest du ihr?',
      optionen: [
        { text: '1000 Mbit/s sind rund 125 MByte/s – acht Bit ergeben ein Byte', richtig: true, norm: 'Bandbreite',
          antwort: 'Richtig, und dieser Umrechnungsfehler kommt in Prüfungen gern vor. Die 200-MB-Datei braucht damit rechnerisch etwa 1,6 Sekunden; in der Praxis etwas mehr, weil Protokollköpfe und Festplatte mitreden.' },
        { text: 'Ja, 1000 MByte pro Sekunde',
          antwort: 'Faktor acht daneben: Netzwerkraten stehen in <b>Megabit</b>, Dateigrößen in <b>Megabyte</b>. 1000 Mbit/s sind rund 125 MByte/s.' },
        { text: 'Das lässt sich nicht umrechnen',
          antwort: 'Doch, und zwar einfach: durch acht. Dazu ein kleiner Abschlag für die Protokollköpfe.' }
      ] },

    { typ: 'karte', titel: 'Werkzeuge für solche Fälle', quelle: 'netzwerkzeuge',
      keys: ['ipconfig', 'ping', 'netstat'] },

    { typ: 'merk', text: 'Verbindung steht, ist aber zäh: zuerst Geschwindigkeit und [[Duplex]] am Port prüfen. Eine Seite fest, die andere automatisch führt zu <b>Halbduplex</b> ([[Autonegotiation]]) – beide Seiten gleich einstellen. Und: <b>Mbit/s ÷ 8 = MByte/s</b>.' },

    { typ: 'nachricht', text: 'Zwölf Minuten auf zwanzig Sekunden, mit einer Einstellung. Solche Fälle machen den Job schön.' }
  ]
});
