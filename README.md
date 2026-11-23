# gas-rhein-main.de

Webseite des **1. Gefahrenabwehrsymposiums Rhein-Main** am Samstag, 13. März 2027, in der Mehrzweckhalle Butzbach-Nieder-Weisel.
Veranstalter: Gefahrenabwehrsymposium Rhein-Main e.V. · Schirmherr: Bürgermeister Sascha Huber

Rein statische Seite (HTML, CSS, etwas JavaScript), ohne Build-Schritt und ohne externe Dienste. Die Schriften (Barlow, SIL Open Font License) liegen lokal.

## Aufbau

```
index.html              Startseite (alle Abschnitte)
impressum.html          Impressum (Entwurf, Platzhalter ergänzen)
datenschutz.html        Datenschutzerklärung (Entwurf, prüfen lassen)
favicon.ico
.htaccess               Apache-Einstellungen für Strato (Caching, HTTPS-Umleitung vorbereitet)
assets/css/style.css    Gestaltung
assets/js/main.js       Countdown und Jahreszahl
assets/js/gate.js       Vorschau-Sperre (Passwort, nur Testphase)
robots.txt              Suchmaschinen-Sperre (nur Testphase)
assets/fonts/           Barlow / Barlow Condensed (woff2)
assets/img/             Logo, Porträts
downloads/              Programm als PDF
```

## Veröffentlichen (Strato)

Den gesamten Inhalt dieses Repositorys (ohne `.git`) per SFTP in das Webverzeichnis der Domain `www.gas-rhein-main.de` hochladen.
Danach in der `.htaccess` die HTTPS-Umleitung aktivieren, sobald das SSL-Zertifikat aktiv ist.

## Vorschau-Sperre (Testphase)

Bis zur Freigabe blendet `assets/js/gate.js` die Seite hinter einer Passwortabfrage aus (Passwort: `GAS2027`, wird im Browser gemerkt).
Das ist kein echter Zugriffsschutz, sondern hält die Seite nur verborgen; Suchmaschinen werden zusätzlich per `robots.txt` und `noindex` ausgesperrt.

**Zur Freigabe:**
1. In `index.html`, `impressum.html`, `datenschutz.html` die Zeile `<script src="/assets/js/gate.js"></script>` entfernen
2. In `index.html` die Zeile `<meta name="robots" content="noindex, nofollow">` entfernen
3. `robots.txt` und `assets/js/gate.js` löschen, den Block „Vorschau-Sperre“ am Ende von `style.css` entfernen

## Offene Punkte

- [ ] Vorschau-Sperre entfernen (siehe oben)

- [x] Anmeldeformular eingebunden (iframe von p263.de)
- [ ] Anbieter des Anmeldeformulars (p263.de) mit Name/Anschrift und AV-Vertrag in `datenschutz.html` ergänzen
- [ ] Impressum: Vereinsanschrift, Registergericht, VR-Nummer, Telefon, Verantwortlicher nach § 18 MStV
- [ ] Stellvertretender Vorsitzender: Name und Foto
- [ ] Kuratorium: Fotos (Pascal Weinmann, Andreas Litwin, Benjamin Grießl, Sascha Eiteneuer)
- [ ] Partner- und Sponsorenlogos
- [ ] Anmeldeschluss, Hinweise zu Parken und Bus/Shuttle
- [ ] Foto Schirmherr durch offizielles Pressefoto ersetzen (aktuell Ausschnitt, Foto: Tobias Koch)

## Bilder ergänzen

- Kuratorium: in `index.html` im jeweiligen `curator__photo` die Initialen durch `<img src="/assets/img/NAME.jpg" alt="Porträt von NAME">` ersetzen (Bild quadratisch oder 4:3, ca. 600 px breit).
- Partner/Sponsoren: Logos als SVG oder PNG nach `assets/img/partner/` bzw. `assets/img/sponsoren/` legen und den Platzhalter `logo-slot` ersetzen (Vorlage als Kommentar in `index.html`).
