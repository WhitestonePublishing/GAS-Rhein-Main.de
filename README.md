# gas-rhein-main.de

Webseite des **1. Gefahrenabwehrsymposiums Rhein-Main** am Samstag, 13. März 2027, in der Mehrzweckhalle Butzbach-Nieder-Weisel.
Veranstalter: Gefahrenabwehrsymposium Rhein-Main e.V. i.G. · Schirmherr: Bürgermeister Sascha Huber

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

## Veröffentlichen (WSP-Server01)

Jeder Push auf `main` lädt die Seite automatisch per SFTP auf WSP-Server01 (Plesk) (`.github/workflows/deploy.yml`). Manuell auslösbar unter **Actions → Veröffentlichen (WSP-Server01) → Run workflow**.

**Einmalige Einrichtung** unter *Settings → Secrets and variables → Actions*:

| Art | Name | Inhalt |
|---|---|---|
| Variable | `SFTP_HOST` | `plesk.wsp-server01.de` |
| Variable | `SFTP_USER` | Systembenutzer des Plesk-Abonnements |
| Variable | `SFTP_TARGET_DIR` | z. B. `/httpdocs` |
| Variable (optional) | `SFTP_PROTOCOL` | `sftp` (Standard) oder `ftps` |
| Variable (optional) | `SFTP_PORT` | Standard 22 bzw. 21 |
| Secret | `SFTP_PASSWORD` | Passwort des SFTP-Benutzers |

Für SFTP muss in Plesk beim Abonnement unter *Hosting-Einstellungen → Zugriff auf den Server über SSH* „/bin/bash (chrooted)“ o. Ä. gesetzt sein; sonst `SFTP_PROTOCOL=ftps` verwenden.
Solange etwas fehlt, wird der Upload übersprungen. Hochgeladen werden nur neue oder geänderte Dateien; auf dem Server wird nichts gelöscht.
Nicht übertragen werden `.git/`, `.github/`, `README.md` und `.gitignore`.

Nach Aktivierung des SSL-Zertifikats in der `.htaccess` die HTTPS-Umleitung einschalten.

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
- [ ] Datenschutz: AV-Vertrag mit Whitestone Publishing UG und Speicherdauer bestätigen
- [x] Impressum: Anschrift, Kontakt, Verantwortlicher, technische Umsetzung
- [ ] Nach Eintragung des Vereins: „i. G.“ im Impressum/Datenschutz entfernen, Registergericht und VR-Nummer ergänzen
- [ ] Stellvertretenden Vorsitzenden ergänzen, sobald benannt (Startseite und Impressum)
- [ ] Kuratorium: Fotos (Pascal Weinmann, Andreas Litwin, Benjamin Grießl, Sascha Eiteneuer)
- [ ] Partner- und Sponsorenlogos
- [ ] Anmeldeschluss, Hinweise zu Parken und Bus/Shuttle
- [ ] Foto Schirmherr durch offizielles Pressefoto ersetzen (aktuell Ausschnitt, Foto: Tobias Koch)

## Bilder ergänzen

- Kuratorium: in `index.html` im jeweiligen `curator__photo` die Initialen durch `<img src="/assets/img/NAME.jpg" alt="Porträt von NAME">` ersetzen (Bild quadratisch oder 4:3, ca. 600 px breit).
- Partner/Sponsoren: Logos als SVG oder PNG nach `assets/img/partner/` bzw. `assets/img/sponsoren/` legen und den Platzhalter `logo-slot` ersetzen (Vorlage als Kommentar in `index.html`).
