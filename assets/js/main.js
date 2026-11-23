// Countdown bis zum Symposium und aktuelles Jahr im Footer.
(function () {
  var el = document.getElementById('countdown');
  if (el) {
    var event = new Date(2027, 2, 13);
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var days = Math.round((event - today) / 86400000);
    if (days > 1) el.textContent = 'Noch ' + days + ' Tage';
    else if (days === 1) el.textContent = 'Morgen geht es los';
    else if (days === 0) el.textContent = 'Heute!';
    if (days >= 0) el.hidden = false;
  }
  var y = document.getElementById('year');
  if (y) y.textContent = Math.max(2027, new Date().getFullYear());
})();
