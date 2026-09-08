/* Standard-Produkte des Fermentations-Logbuchs.
 *
 * Alle Schritte im "Fahrplan" werden relativ zum Startdatum angegeben:
 *   from / to = Tages-Offset ab Start (0 = Starttag, 1 = Tag danach, ...)
 *   to = null  → offener Schritt ("ab dd.mm.")
 *   label      → optionale feste Anzeige statt berechnetem Datum (z. B. "+2–3 Tage")
 * color = Farbe der Flüssigkeit im Glas (Hex), optional.
 *
 * Neue Produkte, die auf der Seite angelegt werden, landen im Browser-Speicher.
 * Damit sie für alle Besucher sichtbar sind, hier eintragen (siehe README).
 */
window.DEFAULT_PRODUCTS = [
  {
    id: "ginger-bug",
    name: "Ginger Bug",
    type: "Wildhefe-Starter",
    color: "#d99a2b",
    start: "2026-09-08",
    description:
      "Ein wilder Hefe-/Bakterien-Starter aus Ingwer, Zucker und Wasser – die Basis für selbst fermentierte Limonaden (z. B. Ginger Beer). Angesetzt mit 48 g Ingwer, Zucker 1:1 zum Ingwer und ca. 480–500 ml Wasser. Läuft bei Raumtemperatur an und wird danach im Kühlschrank als Dauerkultur weitergeführt.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Bio-Ingwer, gehackt (mit Schale)", amount: "48 g" },
      { name: "Zucker (weiss, ungebleicht), 1:1 zum Ingwer", amount: "48 g" },
      { name: "Stilles Wasser, chlorfrei", amount: "ca. 480–500 ml" },
      { name: "Glas, luftig mit Tuch abgedeckt", amount: "1 l" }
    ],
    hint:
      "Täglich je 1 TL Ingwer + 1 TL Zucker nachfüttern und umrühren, bis er zuverlässig sprudelt. Kein Metalldeckel, kein Metalllöffel.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "48 g Ingwer + 48 g Zucker + ca. 480–500 ml Wasser ansetzen, umrühren." },
      { from: 1, to: 5, title: "Täglich füttern", text: "Je 1 TL Ingwer + 1 TL Zucker zugeben, umrühren." },
      { from: 4, to: null, title: "Aktivitäts-Check", text: "Bläschenbildung prüfen; ohne Aktivität weiter füttern." },
      { from: 6, to: 9, title: "Einsatzbereit", text: "Sprudelt zuverlässig – als Starter für Limonade nutzbar." },
      { from: 10, to: null, title: "Erhaltung", text: "In den Kühlschrank; 1×/Woche mit je 1 TL Ingwer + Zucker füttern." }
    ]
  },
  {
    id: "basilikum",
    name: "Basilikum",
    type: "Milchsäure-Ferment · 3 l",
    color: "#5d8a3c",
    start: "2026-09-06",
    description:
      "Basilikumblätter in Salzlake, milchsauer fermentiert – ergibt ein würziges, haltbares Kraut zum Verfeinern von Saucen, Öl oder Pesto. Angesetzt im 3-Liter-Glas mit rund 2,5 l Lake (25 g Salz pro Liter, 2,5 %). Läuft bei Raumtemperatur an, reift danach im Kühlschrank nach.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Frische Basilikumblätter, gewaschen", amount: "281 g" },
      { name: "Wasser, ungechlort", amount: "ca. 2.5 l" },
      { name: "Salz (unjodiert), 25 g pro Liter (2,5 %)", amount: "ca. 63 g" },
      { name: "Glas mit Gärgewicht, blattfrei unter der Lake", amount: "3 l" }
    ],
    hint:
      "Alle 1–2 Tage kurz lüften (\"Burping\"). Blätter müssen komplett unter der Lake bleiben, sonst Schimmelgefahr.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "281 g Blätter mit 2,5 %-Salzlake (25 g/l, ca. 2,5 l) ansetzen, Gärgewicht drauf." },
      { from: 2, to: 3, title: "Erste Kontrolle", text: "Bläschen und leicht säuerlicher Geruch sind normal." },
      { from: 6, to: null, title: "Geschmackstest", text: "Ab Tag 7 probieren, je nach gewünschter Säure weiterlaufen lassen." },
      { from: 10, to: 14, title: "Fertig → Kühlschrank", text: "In den Kühlschrank umziehen; hält dort mehrere Monate." }
    ]
  },
  {
    id: "kombucha-glas-1",
    name: "Kombucha Glas 1",
    type: "3 Liter · Haupt-SCOBY · F1",
    color: "#b0642f",
    start: "2026-09-03",
    description:
      "Gesüsster Tee mit SCOBY, zu einem spritzigen Getränk fermentiert. Grosses 3-Liter-Glas mit dem Haupt-SCOBY. Weil der SCOBY geschwächt war und das Volumen grösser ist, dauert die Primärfermentation (F1) länger: 10–14 Tage, evtl. auch bis zu 3 Wochen, bis sich eine spürbare Säure und eine neue Haut zeigen. Danach Abfüllen und optionale Flaschengärung (F2) für Kohlensäure und Aroma.",
    ingredientsTitle: "Was ist drin (Grundrezept pro Liter)",
    ingredients: [
      { name: "Schwarz- oder Grüntee, gezogen", amount: "1 l" },
      { name: "Zucker", amount: "70 g" },
      { name: "SCOBY (Hauptkultur, geschwächt)", amount: "1 Stück" },
      { name: "Ansatzflüssigkeit (fertiger Kombucha)", amount: "100 ml" },
      { name: "Glas", amount: "3 l" }
    ],
    hint:
      "Abdeckung mit Tuch + Gummiband, dunkel und warm (23–27 °C). Immer mit sauberem Löffel oder Röhrchen probieren, nie direkt aus dem Glas trinken.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen (F1)", text: "Gesüssten Tee + SCOBY + Ansatzflüssigkeit ins 3-Liter-Glas." },
      { from: 6, to: null, title: "Gelegentlich probieren", text: "Ab Tag 7 mit sauberem Löffel oder Röhrchen kosten, um den Fortschritt zu checken." },
      { from: 9, to: 13, title: "Säure & neue Haut erwartet", text: "Nach 10–14 Tagen sollten spürbare Säure und eine neue Haut da sein. Weiter probieren, bis Süsse/Säure ausgewogen ist." },
      { from: 14, to: 20, title: "Geduld bis 3 Wochen", text: "Falls noch zu süss oder ohne neue Haut: weiterlaufen lassen und alle 1–2 Tage probieren." },
      { from: 13, to: 20, label: "sobald ausgewogen", title: "F1 abschliessen", text: "SCOBY + 100 ml Ansatzflüssigkeit für den nächsten Batch zurückbehalten, Rest abfüllen." },
      { from: 15, to: 23, label: "+2–3 Tage", title: "F2 – Flaschengärung", text: "Abgefüllt mit Frucht/Ingwer, luftdicht, Raumtemperatur zur Karbonisierung, danach kühlen." }
    ]
  },
  {
    id: "kombucha-glas-2",
    name: "Kombucha Glas 2",
    type: "1 Liter · Reserve ohne festen SCOBY",
    color: "#c98a4b",
    start: "2026-09-03",
    description:
      "Reserveglas (1 Liter) ohne festen SCOBY: Der neue SCOBY bildet sich «from scratch» aus der Starterflüssigkeit. Das dauert typischerweise 2–4 Wochen, bis eine sichtbare, geschlossene Haut an der Oberfläche entstanden ist. Anfangs sind evtl. nur einzelne dünne, durchsichtige Flecken zu sehen – das ist der Anfang der neuen Kultur.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Schwarz- oder Grüntee, gezogen", amount: "1 l" },
      { name: "Zucker", amount: "70 g" },
      { name: "Ansatzflüssigkeit (fertiger Kombucha)", amount: "100 ml" },
      { name: "Glas, kein fester SCOBY", amount: "1 l" }
    ],
    hint:
      "Abdeckung mit Tuch + Gummiband, dunkel und warm (23–27 °C). Ruhig stehen lassen und möglichst nicht bewegen, damit sich die Haut ungestört bilden kann.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen (nur Starterflüssigkeit)", text: "Gesüssten Tee + Ansatzflüssigkeit ins 1-Liter-Glas, ohne festen SCOBY." },
      { from: 4, to: null, title: "Erste Flecken beobachten", text: "Einzelne dünne, durchsichtige Flecken an der Oberfläche sind der Anfang der neuen Kultur. Nicht umrühren." },
      { from: 14, to: 27, title: "Geschlossene Haut erwartet", text: "Nach 2–4 Wochen sollte eine sichtbare, geschlossene Haut entstanden sein. Sichtkontrolle alle paar Tage." },
      { from: 28, to: null, title: "Neuer SCOBY einsatzbereit", text: "Geschlossene Haut = fertige Kultur; als Reserve behalten oder für den nächsten Batch verwenden." }
    ]
  }
];
