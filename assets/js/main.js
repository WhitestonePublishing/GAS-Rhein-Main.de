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

// Anmeldeformular: Höhe übernehmen, falls p263.de sie per postMessage meldet
// (z. B. {type:"p263:height", height:950}, {height:950} oder iFrame-Resizer-Format).
(function () {
  var frame = document.getElementById('anmelde-iframe');
  if (!frame) return;
  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://p263.de') return;
    var h = null, d = e.data;
    if (typeof d === 'number') h = d;
    else if (d && typeof d === 'object' && d.height) h = Number(d.height);
    else if (typeof d === 'string') {
      if (d.indexOf('[iFrameSizer]') === 0) h = Number(d.split(':')[1]);
      else { try { var o = JSON.parse(d); if (o && o.height) h = Number(o.height); } catch (err) {} }
    }
    if (h && h > 200 && h < 5000) frame.style.height = Math.ceil(h) + 'px';
  });
})();
