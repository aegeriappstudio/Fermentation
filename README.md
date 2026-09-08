# Fermentations-Logbuch

Öffentliche Webseite (GitHub Pages) für laufende Fermentations-Ansätze – mit Zutaten,
Fahrplan ab Start und einer Tagesansicht «Heute zu tun».

Reine statische Seite (HTML/CSS/JS), kein Build-Schritt nötig.

## Funktionen

- **Heute zu tun**: alle Schritte, die am heutigen Tag anstehen, pro Ansatz mit Häkchen.
- **Übersicht**: Tag N seit Start, aktueller und nächster Schritt je Ansatz.
- **Detailkarten**: Beschreibung, «Was ist drin», Pflegehinweis, Fahrplan mit
  berechneten Daten (z. B. «09.–13.09.», «ab 12.09.») und «heute»-Markierung, Notizen.
- **Neues Produkt anlegen / bearbeiten / löschen** direkt auf der Seite.
- **Backup exportieren / importieren** (JSON), um Daten in einen anderen Browser mitzunehmen.

Häkchen, Notizen und selbst angelegte Produkte werden im `localStorage` des Browsers
gespeichert. Sie sind also nur in diesem Browser sichtbar.

## Veröffentlichen auf GitHub Pages

Variante A (Workflow, empfohlen):

1. Im Repository unter **Settings → Pages** als Source **GitHub Actions** wählen.
2. Änderungen auf den Branch `main` (oder `master`) pushen – der Workflow
   `.github/workflows/pages.yml` veröffentlicht die Seite automatisch.

Variante B (ohne Workflow):

1. **Settings → Pages → Source: Deploy from a branch**, Branch auswählen, Ordner `/ (root)`.

Die Seite ist danach unter `https://<benutzer>.github.io/<repo>/` erreichbar.

## Produkte für alle Besucher hinterlegen

Auf der Seite angelegte Produkte bleiben im Browser. Damit ein Produkt für alle sichtbar
wird, in `js/products.js` eintragen. Format:

```js
{
  id: "sauerkraut",                 // eindeutig, nur Kleinbuchstaben/Bindestriche
  name: "Sauerkraut",
  type: "Milchsäure-Ferment",       // Untertitel (optional)
  start: "2026-09-07",              // Startdatum (YYYY-MM-DD)
  description: "…",
  ingredientsTitle: "Was ist drin", // optional
  ingredients: [{ name: "Weisskohl", amount: "1 kg" }],
  hint: "…",                        // Pflegehinweis (optional)
  steps: [
    // from/to = Tage ab Start (0 = Starttag); to: null = offener Schritt («ab …»)
    { from: 0, to: 0, title: "Ansetzen", text: "…" },
    { from: 1, to: 4, title: "Täglich drücken", text: "…" },
    { from: 7, to: null, title: "Probieren", text: "…" },
    { from: 10, to: 14, label: "+2–3 Tage", title: "…", text: "…" } // label = feste Anzeige
  ]
}
```

Tipp: «Backup exportieren» liefert alle aktuellen Produkte im selben Format
(Feld `products`), von dort lässt sich ein Eintrag direkt kopieren.

## Lokal ansehen

Einfach `index.html` im Browser öffnen oder z. B. `npx http-server .` starten.
