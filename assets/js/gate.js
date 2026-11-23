/*
  VORSCHAU-SPERRE (nur für die Testphase)
  Blendet die Seite aus, bis das Passwort eingegeben wurde. Das ist kein echter
  Zugriffsschutz – der Inhalt steht weiterhin im Quelltext –, sondern hält die
  Seite bis zur Freigabe verborgen.

  Zum Freischalten der Seite: in index.html, impressum.html und datenschutz.html
  die Zeile <script src="/assets/js/gate.js"></script> entfernen, die Zeile
  <meta name="robots" content="noindex, nofollow"> in index.html entfernen
  und robots.txt löschen.
*/
(function () {
  var PASSWORT = 'GAS2027';
  var KEY = 'gas-vorschau-freigegeben';

  try { if (localStorage.getItem(KEY) === '1') return; } catch (e) {}

  var root = document.documentElement;
  root.classList.add('gate-locked');

  function unlock() {
    try { localStorage.setItem(KEY, '1'); } catch (e) {}
    root.classList.remove('gate-locked');
    var g = document.getElementById('gate');
    if (g) g.remove();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var gate = document.createElement('div');
    gate.id = 'gate';
    gate.innerHTML =
      '<form class="gate__box" novalidate>' +
        '<img src="/assets/img/logo-256.png" alt="" width="96" height="96">' +
        '<span class="gate__kicker">Vorschau</span>' +
        '<h1 class="gate__title">Gefahrenabwehr&shy;symposium Rhein-Main 2027</h1>' +
        '<p class="gate__text">Diese Seite befindet sich in Vorbereitung. Bitte gib das Passwort ein.</p>' +
        '<label for="gate-pw" class="gate__label">Passwort</label>' +
        '<input id="gate-pw" type="password" autocomplete="current-password" required>' +
        '<p class="gate__error" id="gate-error" role="alert" hidden>Das Passwort ist nicht korrekt.</p>' +
        '<button type="submit" class="btn btn--red btn--lg">Seite anzeigen</button>' +
      '</form>';
    document.body.appendChild(gate);

    var form = gate.querySelector('form');
    var input = gate.querySelector('#gate-pw');
    var error = gate.querySelector('#gate-error');
    input.focus();

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (input.value.trim() === PASSWORT) {
        unlock();
      } else {
        error.hidden = false;
        input.select();
      }
    });
  });
})();
