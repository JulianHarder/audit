/* ===========================================================
   AUDIT – data/kryptoverfahren.js
   Die Verfahren fuer die Uebersichtstabellen im Themengebiet
   "Verschluesselung und Kryptographie".

   Vier Listen, weil die Spalten sich unterscheiden:
     symmetrisch    ein gemeinsamer Schluessel
     asymmetrisch   Schluesselpaar
     hybrid         Anwendungen, die beides kombinieren
     hashverfahren  keine Verschluesselung, Einwegfunktion

   js/chat.js baut daraus die Tabellen (quelle: 'kryptosymmetrisch',
   'kryptoasymmetrisch', 'kryptohybrid', 'kryptohash'). Mit "keys"
   laesst sich im Gespraech eine Auswahl zeigen.

   "sicher" ist eine Einschaetzung nach heutigem Stand und nicht
   fuer alle Ewigkeit richtig – bei Aenderungen hier nachziehen.
   =========================================================== */
window.AUDIT = window.AUDIT || {};
AUDIT.data = AUDIT.data || {};

AUDIT.data.kryptosymmetrisch = [
  { key: 'caesar',   name: 'Caesar',            laenge: 'Verschiebung 1–25',
    einsatz: 'Lehrbeispiel, einfache Substitution', sicher: 'Nein' },
  { key: 'vigenere', name: 'Vigenère',          laenge: 'Schlüsselwort',
    einsatz: 'Mehrere Caesar-Verschiebungen nacheinander', sicher: 'Nein' },
  { key: 'des',      name: 'DES',               laenge: '56 Bit',
    einsatz: 'Alter Standard von 1977', sicher: 'Nein' },
  { key: '3des',     name: '3DES',              laenge: '112 / 168 Bit',
    einsatz: 'DES dreifach angewendet', sicher: 'Veraltet' },
  { key: 'aes',      name: 'AES',               laenge: '128 / 192 / 256 Bit',
    einsatz: 'Aktueller Standard: WLAN, Festplatten, VPN', sicher: 'Ja' },
  { key: 'twofish',  name: 'Blowfish / Twofish', laenge: 'bis 448 / bis 256 Bit',
    einsatz: 'Freie Alternativen zu DES und AES', sicher: 'Twofish ja' },
  { key: 'chacha20', name: 'ChaCha20',          laenge: '256 Bit',
    einsatz: 'Schnell auf Smartphones, in TLS 1.3', sicher: 'Ja' }
];

AUDIT.data.kryptoasymmetrisch = [
  { key: 'rsa',      name: 'RSA',            grundlage: 'Primfaktorzerlegung großer Zahlen',
    einsatz: 'Verschlüsselung <b>und</b> digitale Signatur, Schlüssel ab 2048 Bit' },
  { key: 'dh',       name: 'Diffie-Hellman', grundlage: 'Diskreter Logarithmus',
    einsatz: 'Nur <b>Schlüsselaustausch</b>, verschlüsselt selbst keine Daten' },
  { key: 'ecc',      name: 'ECC (elliptische Kurven)', grundlage: 'Elliptische Kurven',
    einsatz: 'Gleiche Sicherheit wie RSA bei viel kürzeren Schlüsseln' },
  { key: 'elgamal',  name: 'ElGamal',        grundlage: 'Diskreter Logarithmus',
    einsatz: 'Basis für Teile von PGP' }
];

AUDIT.data.kryptohybrid = [
  { key: 'tls',   name: 'TLS / SSL',   einsatz: 'HTTPS und sichere Webverbindungen. SSL ist veraltet, heute TLS 1.2 / 1.3' },
  { key: 'ssh',   name: 'SSH',         einsatz: 'Sichere Fernwartung von Servern' },
  { key: 'ipsec', name: 'IPsec',       einsatz: 'VPN-Verbindungen' },
  { key: 'pgp',   name: 'PGP / GPG',   einsatz: 'E-Mail- und Dateiverschlüsselung, Vertrauen über das Web of Trust' },
  { key: 'smime', name: 'S/MIME',      einsatz: 'E-Mail-Verschlüsselung mit Zertifikaten aus einer PKI' },
  { key: 'wpa',   name: 'WPA2 / WPA3', einsatz: 'WLAN-Verschlüsselung, baut auf AES auf' }
];

AUDIT.data.kryptohash = [
  { key: 'md5',    name: 'MD5',             laenge: '128 Bit',
    einsatz: 'Früher Prüfsummen – Kollisionen sind bekannt', sicher: 'Nein' },
  { key: 'sha1',   name: 'SHA-1',           laenge: '160 Bit',
    einsatz: 'Früher Zertifikate – Kollisionen sind bekannt', sicher: 'Nein' },
  { key: 'sha256', name: 'SHA-256 / SHA-3', laenge: '256 Bit und mehr',
    einsatz: 'Signaturen, Integritätsprüfung, Prüfsummen', sicher: 'Ja' },
  { key: 'bcrypt', name: 'bcrypt / Argon2', laenge: 'variabel',
    einsatz: 'Passwort-Speicherung, absichtlich langsam, mit Salt', sicher: 'Ja' }
];
