/* Standard-Produkte des Fermentations-Logbuchs.
 *
 * Alle Schritte im "Fahrplan" werden relativ zum Startdatum angegeben:
 *   from / to = Tages-Offset ab Start (0 = Starttag, 1 = Tag danach, ...)
 *   to = null  → offener Schritt ("ab dd.mm.")
 *   label      → optionale feste Anzeige statt berechnetem Datum (z. B. "+2–3 Tage")
 *
 * Neue Produkte, die auf der Seite angelegt werden, landen im Browser-Speicher.
 * Damit sie für alle Besucher sichtbar sind, hier eintragen (siehe README).
 */
window.DEFAULT_PRODUCTS = [
  {
    id: "ginger-bug",
    name: "Ginger Bug",
    type: "Wildhefe-Starter",
    start: "2026-09-08",
    description:
      "Ein wilder Hefe-/Bakterien-Starter aus Ingwer, Zucker und Wasser – die Basis für selbst fermentierte Limonaden (z. B. Ginger Beer). Läuft bei Raumtemperatur an und wird danach im Kühlschrank als Dauerkultur weitergeführt.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Bio-Ingwer, grob gerieben (mit Schale)", amount: "1 EL" },
      { name: "Zucker (weiss, ungebleicht)", amount: "1 EL" },
      { name: "Stilles Wasser, chlorfrei", amount: "250 ml" },
      { name: "Glas, luftig mit Tuch abgedeckt", amount: "0.5 l" }
    ],
    hint:
      "Täglich je 1 TL Ingwer + 1 TL Zucker nachfüttern und umrühren, bis er zuverlässig sprudelt. Kein Metalldeckel, kein Metalllöffel.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "1 EL Ingwer + 1 EL Zucker + 250 ml Wasser ansetzen." },
      { from: 1, to: 5, title: "Täglich füttern", text: "Je 1 TL Ingwer + 1 TL Zucker zugeben, umrühren." },
      { from: 4, to: null, title: "Aktivitäts-Check", text: "Bläschenbildung prüfen; ohne Aktivität weiter füttern." },
      { from: 6, to: 9, title: "Einsatzbereit", text: "Sprudelt zuverlässig – als Starter für Limonade nutzbar." },
      { from: 10, to: null, title: "Erhaltung", text: "In den Kühlschrank; 1×/Woche mit je 1 TL Ingwer + Zucker füttern." }
    ]
  },
  {
    id: "basilikum",
    name: "Basilikum",
    type: "Milchsäure-Ferment",
    start: "2026-09-06",
    description:
      "Basilikumblätter in Salzlake, milchsauer fermentiert – ergibt ein würziges, haltbares Kraut zum Verfeinern von Saucen, Öl oder Pesto. Läuft bei Raumtemperatur an, reift danach im Kühlschrank nach.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Frische Basilikumblätter, gewaschen", amount: "ca. 1 Bund" },
      { name: "Wasser, ungechlort", amount: "500 ml" },
      { name: "Salz (unjodiert), 2 % der Wassermenge", amount: "10 g" },
      { name: "Glas mit Gärgewicht, blattfrei unter der Lake", amount: "0.5–0.7 l" }
    ],
    hint:
      "Alle 1–2 Tage kurz lüften (\"Burping\"). Blätter müssen komplett unter der Lake bleiben, sonst Schimmelgefahr.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Blätter mit 2 %-Salzlake ansetzen, Gärgewicht drauf." },
      { from: 2, to: 3, title: "Erste Kontrolle", text: "Bläschen und leicht säuerlicher Geruch sind normal." },
      { from: 6, to: null, title: "Geschmackstest", text: "Ab Tag 7 probieren, je nach gewünschter Säure weiterlaufen lassen." },
      { from: 10, to: 14, title: "Fertig → Kühlschrank", text: "In den Kühlschrank umziehen; hält dort mehrere Monate." }
    ]
  },
  {
    id: "kombucha",
    name: "Kombucha",
    type: "2 Gläser · F1",
    start: "2026-09-03",
    description:
      "Gesüsster Tee mit SCOBY, zu einem spritzigen Getränk fermentiert. Zwei Gläser laufen parallel für Primärfermentation (F1); danach Abfüllen und optionale Flaschengärung (F2) für Kohlensäure und Aroma.",
    ingredientsTitle: "Was ist drin (pro Glas)",
    ingredients: [
      { name: "Schwarz- oder Grüntee, gezogen", amount: "1 l" },
      { name: "Zucker", amount: "70 g" },
      { name: "SCOBY", amount: "1 Stück" },
      { name: "Ansatzflüssigkeit (fertiger Kombucha)", amount: "100 ml" }
    ],
    hint:
      "Abdeckung mit Tuch + Gummiband, dunkel und warm (23–27 °C). Immer mit Strohhalm probieren, nie direkt aus dem Glas trinken.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen (F1)", text: "Gesüssten Tee + SCOBY + Ansatzflüssigkeit in beide Gläser." },
      { from: 5, to: 7, title: "Erste Geschmacksprobe", text: "Ab Tag 5 mit Strohhalm probieren." },
      { from: 7, to: 12, title: "Alle 1–2 Tage testen", text: "Bis Süsse/Säure ausgewogen ist." },
      { from: 10, to: 14, title: "F1 abschliessen", text: "SCOBY + 100 ml Ansatzflüssigkeit für den nächsten Batch zurückbehalten, Rest abfüllen." },
      { from: 12, to: 17, label: "+2–3 Tage", title: "F2 – Flaschengärung", text: "Abgefüllt mit Frucht/Ingwer, luftdicht, Raumtemperatur zur Karbonisierung, danach kühlen." }
    ]
  }
];
