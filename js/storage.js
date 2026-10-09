/* ===========================================================
   AUDIT – js/storage.js
   localStorage mit try/catch. Die Seite muss auch laufen,
   wenn localStorage nicht verfügbar ist (private Fenster,
   file:// mit strengen Einstellungen) – dann wird nur im
   Arbeitsspeicher gehalten.
   =========================================================== */
window.AUDIT = window.AUDIT || {};

AUDIT.storage = (function () {
  'use strict';

  var PREFIX = 'audit.';
  var verfuegbar = false;
  var fallback = {};   // Ersatzspeicher im RAM

  try {
    window.localStorage.setItem(PREFIX + '__test', '1');
    window.localStorage.removeItem(PREFIX + '__test');
    verfuegbar = true;
  } catch (e) {
    verfuegbar = false;
  }

  function get(key, dflt) {
    try {
      var raw = verfuegbar ? window.localStorage.getItem(PREFIX + key) : fallback[key];
      if (raw === null || raw === undefined) return dflt;
      return JSON.parse(raw);
    } catch (e) {
      return dflt;
    }
  }

  function set(key, value) {
    var raw;
    try { raw = JSON.stringify(value); } catch (e) { return false; }
    fallback[key] = raw;
    if (!verfuegbar) return false;
    try { window.localStorage.setItem(PREFIX + key, raw); return true; }
    catch (e) { return false; }
  }

  function remove(key) {
    delete fallback[key];
    if (!verfuegbar) return;
    try { window.localStorage.removeItem(PREFIX + key); } catch (e) {}
  }

  /* ---------- Fortschritt pro Station ---------- */

  function fortschritt() { return get('fortschritt', {}); }

  /* wert: 0..1 */
  function setFortschritt(station, wert) {
    var f = fortschritt();
    var neu = Math.max(f[station] || 0, Math.min(1, wert));
    if (neu === f[station]) return;
    f[station] = neu;
    set('fortschritt', f);
    if (AUDIT.main && AUDIT.main.fortschrittAnzeigen) AUDIT.main.fortschrittAnzeigen();
  }

  /* ---------- Gespeicherte Firmen ---------- */

  function firmenListe() { return get('firmen', []); }

  function firmaSpeichern(name, daten) {
    var liste = firmenListe();
    var eintrag = { name: name, zeit: new Date().toISOString(), daten: daten };
    var i = liste.findIndex ? liste.findIndex(function (x) { return x.name === name; }) : -1;
    if (i >= 0) liste[i] = eintrag; else liste.push(eintrag);
    return set('firmen', liste);
  }

  function firmaLaden(name) {
    var liste = firmenListe();
    for (var i = 0; i < liste.length; i++) if (liste[i].name === name) return liste[i].daten;
    return null;
  }

  function firmaLoeschen(name) {
    var liste = firmenListe().filter(function (x) { return x.name !== name; });
    return set('firmen', liste);
  }

  return {
    verfuegbar: verfuegbar,
    get: get, set: set, remove: remove,
    fortschritt: fortschritt, setFortschritt: setFortschritt,
    firmenListe: firmenListe, firmaSpeichern: firmaSpeichern,
    firmaLaden: firmaLaden, firmaLoeschen: firmaLoeschen
  };
})();
