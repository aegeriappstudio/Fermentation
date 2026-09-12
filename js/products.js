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
  },
  {
    id: "lakto-pflaumen-1",
    name: "Lakto-Pflaumen Beutel 1",
    type: "Beutel 1 · 1 kg · 2 % Meersalz",
    color: "#9e3d5c",
    start: "2026-09-10",
    description:
      "Milchsauer fermentierte Pflaumen nach Noma-Art, angesetzt am 10.09.2026 um 21:00 Uhr. Reife, noch feste Pflaumen halbiert, entsteint, mit 2 % Meersalz vermischt und flach im Vakuumbeutel versiegelt (Schnittfläche nach unten, oben Platz gelassen). Bei Raumtemperatur (21 °C) dauert es 6–7 Tage, bei 28 °C etwa 5 Tage. Ergebnis: weiche, angenehm säuerliche Pflaumen plus ca. 125 ml Saft – der Saft ist als Vinaigrette oder Ersatz für Sauce Mignonette (zu Austern) grossartig, das Fruchtfleisch lässt sich trocknen, die Schalen werden zu Chips oder Pulver.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Pflaumen, reif und noch fest, halbiert und entsteint", amount: "1 kg" },
      { name: "Meersalz (unjodiert), 2 % des Fruchtgewichts", amount: "20 g" },
      { name: "Vakuumbeutel, eine Schicht, Schnittfläche nach unten", amount: "1 Stück" }
    ],
    hint:
      "Täglich kontrollieren und probieren. Bläht sich der Beutel wie ein Ballon: Ecke abschneiden («Rülpser»), Gas entweichen lassen, kosten, wieder vakuumieren – dabei keinen Saft absaugen. Leichtes Moussieren ist normal. Dünne weissliche Kahmhefe ist harmlos: vorsichtig mit dem Löffel abheben.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "1 kg Pflaumen halbieren, Steine entfernen, 20 g Meersalz untermischen, in Reihen mit Schnittfläche nach unten in den Beutel, auf höchster Stufe vakuumieren." },
      { from: 1, to: 4, title: "Täglich prüfen & probieren", text: "Beutel anschauen: prall wie ein Ballon → Rülpser machen, probieren, neu versiegeln. Die Süsse wandelt sich langsam in sanfte Säure." },
      { from: 5, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 5–7 Tagen (Tag 5 bei 28 °C, Tag 6–7 bei 21 °C) sollten die Pflaumen fertig sein: weich, angenehm säuerlich, noch mit Fruchtcharakter. Zu lange = nur noch penetrante Säure." },
      { from: 5, to: 7, label: "sobald fertig", title: "Saft abgiessen & aufbewahren", text: "Saft durch ein Sieb giessen (ca. 125 ml) – im Kühlschrank bis 1 Woche haltbar, sonst luftdicht einfrieren. Pflaumen in ein Gefäss und in den Kühlschrank (bis 1 Woche) oder mit Schnittfläche nach unten einzeln anfrieren, dann vakuumieren und tiefkühlen." },
      { from: 8, to: null, title: "Weiterverarbeiten (optional)", text: "Fruchtfleisch bei genau 40 °C trocknen (Konsistenz wie getrocknete Aprikosen). Schalen bei 40 °C im Dörrautomaten oder 60 °C im Ofen zu Chips trocknen, oder in der Gewürzmühle zu Pflaumenschalenpulver mahlen." }
    ]
  },
  {
    id: "lakto-pflaumen-2",
    name: "Lakto-Pflaumen Beutel 2",
    type: "Beutel 2 · 1085 g · 2 % Meersalz",
    color: "#b8566f",
    start: "2026-09-10",
    description:
      "Zweiter Beutel, milchsauer fermentierte Pflaumen nach Noma-Art, angesetzt am 10.09.2026. Reife, noch feste Pflaumen halbiert, entsteint, mit 2 % Meersalz vermischt und flach im Vakuumbeutel versiegelt (Schnittfläche nach unten, oben Platz gelassen). Bei Raumtemperatur (21 °C) dauert es 6–7 Tage, bei 28 °C etwa 5 Tage. Ergebnis: weiche, angenehm säuerliche Pflaumen plus ca. 125 ml Saft – der Saft ist als Vinaigrette oder Ersatz für Sauce Mignonette (zu Austern) grossartig, das Fruchtfleisch lässt sich trocknen, die Schalen werden zu Chips oder Pulver.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Pflaumen, reif und noch fest, halbiert und entsteint", amount: "1085 g" },
      { name: "Meersalz (unjodiert), 2 % des Fruchtgewichts", amount: "21.7 g" },
      { name: "Vakuumbeutel, eine Schicht, Schnittfläche nach unten", amount: "1 Stück" }
    ],
    hint:
      "Täglich kontrollieren und probieren. Bläht sich der Beutel wie ein Ballon: Ecke abschneiden («Rülpser»), Gas entweichen lassen, kosten, wieder vakuumieren – dabei keinen Saft absaugen. Leichtes Moussieren ist normal. Dünne weissliche Kahmhefe ist harmlos: vorsichtig mit dem Löffel abheben.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "1085 g Pflaumen halbieren, Steine entfernen, 21,7 g Meersalz untermischen, in Reihen mit Schnittfläche nach unten in den Beutel, auf höchster Stufe vakuumieren." },
      { from: 1, to: 4, title: "Täglich prüfen & probieren", text: "Beutel anschauen: prall wie ein Ballon → Rülpser machen, probieren, neu versiegeln. Die Süsse wandelt sich langsam in sanfte Säure." },
      { from: 5, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 5–7 Tagen (Tag 5 bei 28 °C, Tag 6–7 bei 21 °C) sollten die Pflaumen fertig sein: weich, angenehm säuerlich, noch mit Fruchtcharakter. Zu lange = nur noch penetrante Säure." },
      { from: 5, to: 7, label: "sobald fertig", title: "Saft abgiessen & aufbewahren", text: "Saft durch ein Sieb giessen (ca. 125 ml) – im Kühlschrank bis 1 Woche haltbar, sonst luftdicht einfrieren. Pflaumen in ein Gefäss und in den Kühlschrank (bis 1 Woche) oder mit Schnittfläche nach unten einzeln anfrieren, dann vakuumieren und tiefkühlen." },
      { from: 8, to: null, title: "Weiterverarbeiten (optional)", text: "Fruchtfleisch bei genau 40 °C trocknen (Konsistenz wie getrocknete Aprikosen). Schalen bei 40 °C im Dörrautomaten oder 60 °C im Ofen zu Chips trocknen, oder in der Gewürzmühle zu Pflaumenschalenpulver mahlen." }
    ]
  },
  {
    id: "lakto-blaubeeren",
    name: "Lakto-Blaubeeren",
    type: "4 Bügelgläser · 2 % Salz",
    color: "#4a3f8f",
    start: "2026-09-10",
    description:
      "Milchsauer fermentierte Blaubeeren nach Noma-Art, angesetzt am 10.09.2026 um 22:00 Uhr in vier Bügelgläsern. Beeren nur kurz abgespült, mit 2 % Salz vermischt und ins Glas gefüllt. Bei 28 °C dauert es 4–5 Tage, bei Zimmertemperatur ein paar Tage länger – fertig sind sie, wenn sie leicht gesäuert sind, aber noch ihr süsses, fruchtiges Aroma haben. Verwendung: ein Löffel auf Naturjoghurt mit Honig zum Frühstück, im Müsli oder Smoothie, mit dem Saft püriert als salzig-süsse Fruchtsauce für Eis oder jungen Käse, oder püriert und passiert als Würzpaste für Maiskolben, Rote Bete, Spareribs und Grillsauce (statt Tomatenmark/Ketchup).",
    ingredientsTitle: "Was ist drin (alle 4 Gläser)",
    ingredients: [
      { name: "Blaubeeren, kurz abgespült", amount: "1250 g" },
      { name: "Salz (unjodiert), 2 % des Fruchtgewichts", amount: "25 g" },
      { name: "Bügelgläser", amount: "4 Stück" }
    ],
    hint:
      "Deckel nur locker aufsetzen bzw. Gummiring abnehmen, damit die Gase entweichen können. Beeren mit einem Gewicht (z. B. wassergefüllter Zip-Beutel) unter dem austretenden Saft halten. Weissliche Kahmhefe an der Oberfläche ist harmlos: vorsichtig mit dem Löffel abheben. Leichtes Moussieren ist normal.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "1250 g Blaubeeren mit 25 g Salz in einer Schüssel mischen, auf 4 Gläser verteilen, Salz sorgfältig aus der Schüssel kratzen, beschweren, Deckel locker aufsetzen." },
      { from: 1, to: 3, title: "Täglich probieren & Gas prüfen", text: "Schon nach den ersten Tagen regelmässig kosten. Gase müssen entweichen können; Beeren unter dem Saft halten." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 4–5 Tagen (28 °C) bzw. ein paar Tagen länger bei Zimmertemperatur: leicht gesäuert, aber noch süss und fruchtig." },
      { from: 4, to: 7, label: "sobald fertig", title: "Saft abseihen & kühlen", text: "Beeren vorsichtig herausnehmen, Saft durch ein feines Sieb abseihen. Beeren und Saft getrennt im Kühlschrank einige Tage haltbar; für länger getrennt in Vakuum- oder Zip-Beuteln einfrieren." },
      { from: 8, to: null, title: "Verwenden", text: "Joghurt + Honig, Müsli, Smoothie, Fruchtsauce für Eis oder Käse, Würzpaste (püriert und passiert) für Grillgut und Gemüse." }
    ]
  }
];
