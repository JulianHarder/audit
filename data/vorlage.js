/* ===========================================================
   AUDIT – data/vorlage.js
   Beispielfirma "Lippe Logistik GmbH"
   Bewusst mit einigen Schwachstellen gebaut, damit es in den
   Stationen etwas zu entdecken gibt (Cloud im Drittland,
   fehlende Rechtsgrundlagen, viele Anwendungen auf einem Server).
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.vorlage = {
  name: 'Lippe Logistik GmbH',
  beschreibung: 'Speditions- und Logistikunternehmen mit 48 Beschäftigten in Detmold. Eigener Webshop für Verpackungsmaterial, Warenwirtschaft, Lohnbuchhaltung und ein Cloud-Archiv bei einem US-Anbieter.',

  zonen: [
    { id: 'z1', typ: 'z_internet',    x:   40, y:   40, w: 330, h: 215 },
    { id: 'z2', typ: 'z_dmz',         x:  410, y:   40, w: 300, h: 215 },
    { id: 'z3', typ: 'z_drittland',   x:  750, y:   40, w: 300, h: 215 },
    { id: 'z4', typ: 'z_serverraum',  x:   40, y:  330, w: 330, h: 250 },
    { id: 'z5', typ: 'z_buero',       x:  410, y:  330, w: 300, h: 250 },
    { id: 'z6', typ: 'z_personal',    x:  750, y:  330, w: 300, h: 250 },
    { id: 'z7', typ: 'z_empfang',     x:   40, y:  635, w: 280, h: 165 }
  ],

  nodes: [
    /* --- Internet --- */
    { id: 'kunde1',  typ: 'kunde',         x:   70, y:   95, name: 'Kundin Frau Weber' },
    { id: 'bew1',    typ: 'bewerberin',    x:   70, y:  175, name: 'Bewerber Herr Kaya' },
    { id: 'dl1',     typ: 'dienstleister', x:  215, y:  175, name: 'IT-Dienstleister Nord' },

    /* --- DMZ --- */
    { id: 'websrv',  typ: 'webserver',     x:  440, y:   95, name: 'Webserver' },
    { id: 'shop',    typ: 'webshop',       x:  440, y:  180, name: 'Webshop Verpackung',
      schutzbedarf: { v: 'hoch', i: 'hoch', a: 'hoch' } },

    /* --- Drittland --- */
    { id: 'cloud1',  typ: 'cloud',         x:  780, y:  110, name: 'Cloud-Archiv (US-Anbieter)',
      props: { rolle: 'auftragsverarbeiter', avvertrag: false, standort: 'drittland', garantie: 'keine', verschluesselt: false } },

    /* --- Netzgrenze --- */
    { id: 'fw',      typ: 'firewall',      x:  440, y:  280, name: 'Firewall' },

    /* --- Serverraum --- */
    { id: 'router1', typ: 'router',        x:   70, y:  375, name: 'Core-Switch' },
    { id: 'srv1',    typ: 'server',        x:   70, y:  470, name: 'Server SRV-01' },
    { id: 'nas1',    typ: 'nas',           x:  225, y:  470, name: 'Fileserver NAS-01' },
    { id: 'bak1',    typ: 'backup',        x:  225, y:  375, name: 'Backup (am Netz)',
      props: { offline: false, getestet: false } },

    /* --- Büro --- */
    { id: 'pc1',     typ: 'pc',            x:  440, y:  375, name: 'PC Versand' },
    { id: 'ma1',     typ: 'mitarbeiter',   x:  440, y:  470, name: 'Herr Brinkmann (Versand)' },

    /* --- Personalabteilung --- */
    { id: 'pc2',     typ: 'pc',            x:  780, y:  375, name: 'PC Personal' },
    { id: 'ma2',     typ: 'mitarbeiter',   x:  780, y:  470, name: 'Frau Lüttmann (Personal)' },

    /* --- Empfang --- */
    { id: 'bes1',    typ: 'besucher',      x:   70, y:  690, name: 'Besucher' },

    /* --- Anwendungen (laufen auf SRV-01) --- */
    { id: 'wawi1',   typ: 'wawi',          x:   60, y:  870, name: 'Warenwirtschaft',
      schutzbedarf: { v: 'normal', i: 'hoch', a: 'sehrhoch' } },
    { id: 'crm1',    typ: 'crm',           x:  230, y:  870, name: 'CRM Kundendaten',
      schutzbedarf: { v: 'hoch', i: 'hoch', a: 'hoch' } },
    { id: 'mail1',   typ: 'mail',          x:  400, y:  870, name: 'E-Mail-System',
      schutzbedarf: { v: 'hoch', i: 'hoch', a: 'hoch' } },
    { id: 'lohn1',   typ: 'lohn',          x:  570, y:  870, name: 'Lohnbuchhaltung',
      schutzbedarf: { v: 'sehrhoch', i: 'hoch', a: 'normal' } },
    { id: 'hr1',     typ: 'hr',            x:  740, y:  870, name: 'Personalakten',
      schutzbedarf: { v: 'sehrhoch', i: 'hoch', a: 'normal' } },
    { id: 'news1',   typ: 'newsletter',    x:  910, y:  870, name: 'Newsletter-Tool',
      schutzbedarf: { v: 'normal', i: 'normal', a: 'normal' },
      props: { rolle: 'auftragsverarbeiter', avvertrag: true, standort: 'eu' } }
  ],

  edges: [
    /* Netzwerk */
    { from: 'router1', to: 'srv1',   art: 'netz' },
    { from: 'router1', to: 'nas1',   art: 'netz' },
    { from: 'router1', to: 'bak1',   art: 'netz' },
    { from: 'router1', to: 'fw',     art: 'netz' },
    { from: 'router1', to: 'pc1',    art: 'netz' },
    { from: 'router1', to: 'pc2',    art: 'netz' },
    { from: 'fw',      to: 'websrv', art: 'netz' },
    { from: 'websrv',  to: 'cloud1', art: 'netz' },

    /* Hosting: Anwendung läuft auf System */
    { from: 'wawi1',   to: 'srv1',   art: 'hosting' },
    { from: 'crm1',    to: 'srv1',   art: 'hosting' },
    { from: 'mail1',   to: 'srv1',   art: 'hosting' },
    { from: 'lohn1',   to: 'srv1',   art: 'hosting' },
    { from: 'hr1',     to: 'srv1',   art: 'hosting' },
    { from: 'shop',    to: 'websrv', art: 'hosting' },
    { from: 'news1',   to: 'cloud1', art: 'hosting' },

    /* Datenflüsse */
    { from: 'kunde1',  to: 'shop',   art: 'datenfluss',
      daten: ['name', 'adresse', 'email', 'bank'], zweck: 'bestellung', rechtsgrundlage: 'b', verschluesselt: true },
    { from: 'shop',    to: 'crm1',   art: 'datenfluss',
      daten: ['name', 'adresse', 'email'], zweck: 'kundenbetreuung', rechtsgrundlage: 'f' },
    { from: 'crm1',    to: 'news1',  art: 'datenfluss',
      daten: ['name', 'email'], zweck: 'werbung', rechtsgrundlage: '' },
    { from: 'bew1',    to: 'mail1',  art: 'datenfluss',
      daten: ['name', 'email', 'bewerbung', 'gesundheit'], zweck: 'bewerbung', rechtsgrundlage: 'b' },
    { from: 'ma2',     to: 'hr1',    art: 'datenfluss',
      daten: ['name', 'gesundheit', 'bank'], zweck: 'personal', rechtsgrundlage: 'c' },
    { from: 'ma1',     to: 'pc1',    art: 'datenfluss',
      daten: [], zweck: 'intern', rechtsgrundlage: 'c' },
    { from: 'hr1',     to: 'cloud1', art: 'datenfluss',
      daten: ['name', 'gesundheit', 'bewerbung'], zweck: 'archiv', rechtsgrundlage: 'c' },
    { from: 'dl1',     to: 'cloud1', art: 'datenfluss',
      daten: ['name', 'email'], zweck: 'wartung', rechtsgrundlage: 'f' },
    { from: 'ma1',     to: 'mail1',  art: 'datenfluss',
      daten: ['email'], zweck: 'intern', rechtsgrundlage: 'f', verschluesselt: true }
  ]
};
