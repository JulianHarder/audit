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
