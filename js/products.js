/* Standard-Produkte des Fermentations-Logbuchs.
 *
 * Alle Schritte im "Fahrplan" werden relativ zum Startdatum angegeben:
 *   from / to = Tages-Offset ab Start (0 = Starttag, 1 = Tag danach, ...)
 *   to = null  → offener Schritt ("ab dd.mm.")
 *   label      → optionale feste Anzeige statt berechnetem Datum (z. B. "+2–3 Tage")
 * color = Farbe der Flüssigkeit im Glas (Hex), optional.
 * log   = Protokoll-Einträge [{ date: "YYYY-MM-DD", text: "…" }], optional.
 *
 * Neue Produkte, die auf der Seite angelegt werden, landen im Browser-Speicher.
 * Damit sie für alle Besucher sichtbar sind, hier eintragen (siehe README).
 */
window.DEFAULT_PRODUCTS = [
  {
    id: "kombucha-f2-flasche-1",
    name: "Kombucha Flasche 1",
    type: "F2 · 1 Liter · Flaschengärung",
    color: "#b0642f",
    start: "2026-09-13",
    description:
      "Zweite Fermentation (F2) des Kombuchas aus dem 3-Liter-Glas, am 13.09.2026 in eine 1-Liter-Flasche abgefüllt. Luftdicht verschlossen bei Raumtemperatur bildet sich Kohlensäure; danach kühl stellen. Optional mit Frucht oder Ingwer aromatisiert.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Fertiger Kombucha aus F1 (3-Liter-Glas)", amount: "1 l" },
      { name: "Frucht / Ingwer zum Aromatisieren", amount: "optional" },
      { name: "Druckfeste Flasche, luftdicht", amount: "1 Stück" }
    ],
    hint:
      "Flasche täglich vorsichtig kurz öffnen, um den Druck zu prüfen und ein Überschäumen oder Platzen zu vermeiden. Nicht länger als nötig bei Raumtemperatur lassen. Nach dem Kühlen bleibt die Kohlensäure erhalten.",
    steps: [
      { from: 0, to: 0, title: "Abfüllen (F2)", text: "1 l Kombucha luftdicht in die Flasche, bei Raumtemperatur stehen lassen." },
      { from: 1, to: 2, title: "Druck prüfen", text: "Täglich kurz öffnen: Zischt es deutlich, ist die Kohlensäure da. Bei Bedarf probieren." },
      { from: 2, to: 3, title: "Fertig → Kühlschrank", text: "Nach 2–3 Tagen kühl stellen, damit die Gärung stoppt und die Kohlensäure bleibt." },
      { from: 4, to: null, title: "Geniessen", text: "Gekühlt trinken; vor dem Öffnen nicht schütteln." }
    ]
  },
  {
    id: "kombucha-f2-flasche-2",
    name: "Kombucha Flasche 2",
    type: "F2 · 1 Liter · Flaschengärung",
    color: "#c07a45",
    start: "2026-09-13",
    description:
      "Zweite Fermentation (F2) des Kombuchas aus dem 3-Liter-Glas, am 13.09.2026 in eine 1-Liter-Flasche abgefüllt. Luftdicht verschlossen bei Raumtemperatur bildet sich Kohlensäure; danach kühl stellen. Optional mit Frucht oder Ingwer aromatisiert.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Fertiger Kombucha aus F1 (3-Liter-Glas)", amount: "1 l" },
      { name: "Frucht / Ingwer zum Aromatisieren", amount: "optional" },
      { name: "Druckfeste Flasche, luftdicht", amount: "1 Stück" }
    ],
    hint:
      "Flasche täglich vorsichtig kurz öffnen, um den Druck zu prüfen und ein Überschäumen oder Platzen zu vermeiden. Nicht länger als nötig bei Raumtemperatur lassen. Nach dem Kühlen bleibt die Kohlensäure erhalten.",
    steps: [
      { from: 0, to: 0, title: "Abfüllen (F2)", text: "1 l Kombucha luftdicht in die Flasche, bei Raumtemperatur stehen lassen." },
      { from: 1, to: 2, title: "Druck prüfen", text: "Täglich kurz öffnen: Zischt es deutlich, ist die Kohlensäure da. Bei Bedarf probieren." },
      { from: 2, to: 3, title: "Fertig → Kühlschrank", text: "Nach 2–3 Tagen kühl stellen, damit die Gärung stoppt und die Kohlensäure bleibt." },
      { from: 4, to: null, title: "Geniessen", text: "Gekühlt trinken; vor dem Öffnen nicht schütteln." }
    ]
  },
  {
    id: "kombucha-5l",
    name: "Kombucha 5-Liter-Glas",
    type: "5 Liter · Haupt-SCOBY · F1",
    color: "#9a5227",
    start: "2026-09-13",
    description:
      "Neuer F1-Ansatz im 5-Liter-Glas, gestartet am 13.09.2026: Der Rest des Kombuchas aus dem 3-Liter-Glas (mit SCOBY und Ansatzflüssigkeit) wurde umgefüllt und mit 4,5 l frischem, gesüsstem Tee (45 g Tee, 310 g Zucker) aufgefüllt. Läuft abgedeckt bei Raumtemperatur, bis Süsse und Säure ausgewogen sind; danach abfüllen und optional F2.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Rest-Kombucha aus dem 3-Liter-Glas (mit SCOBY)", amount: "" },
      { name: "Frischer Tee, gezogen (45 g Teeblätter)", amount: "4.5 l" },
      { name: "Zucker (ca. 69 g pro Liter)", amount: "310 g" },
      { name: "Glas", amount: "5 l" }
    ],
    hint:
      "Abdeckung mit Tuch + Gummiband, dunkel und warm (23–27 °C). Tee vor dem Zugeben vollständig abkühlen lassen. Immer mit sauberem Löffel oder Röhrchen probieren.",
    log: [
      { date: "2026-09-13", text: "Neuer Tee zugegeben: 4,5 l mit 45 g Tee und 310 g Zucker." }
    ],
    steps: [
      { from: 0, to: 0, title: "Umfüllen & neuen Tee zugeben", text: "Rest-Kombucha mit SCOBY ins 5-Liter-Glas, 4,5 l abgekühlten Tee (45 g Tee, 310 g Zucker) zugeben, abdecken." },
      { from: 1, to: 4, title: "Ruhen lassen", text: "Nichts zu tun – warm und dunkel stehen lassen. Sichtkontrolle: neue Haut an der Oberfläche ist ein gutes Zeichen." },
      { from: 5, to: null, title: "Alle 1–2 Tage probieren", text: "Ab Tag 6 mit Löffel oder Röhrchen kosten, bis Süsse/Säure ausgewogen ist." },
      { from: 7, to: 14, label: "sobald ausgewogen", title: "F1 abschliessen", text: "SCOBY + Ansatzflüssigkeit für den nächsten Batch zurückbehalten, Rest in Flaschen abfüllen (F2 optional)." }
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
    log: [
      { date: "2026-09-13", text: "Beutel geöffnet (Rülpser), Gas abgelassen und neu vakuumiert." }
    ],
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
    log: [
      { date: "2026-09-13", text: "Beutel geöffnet (Rülpser), Gas abgelassen und neu vakuumiert." }
    ],
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "1085 g Pflaumen halbieren, Steine entfernen, 21,7 g Meersalz untermischen, in Reihen mit Schnittfläche nach unten in den Beutel, auf höchster Stufe vakuumieren." },
      { from: 1, to: 4, title: "Täglich prüfen & probieren", text: "Beutel anschauen: prall wie ein Ballon → Rülpser machen, probieren, neu versiegeln. Die Süsse wandelt sich langsam in sanfte Säure." },
      { from: 5, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 5–7 Tagen (Tag 5 bei 28 °C, Tag 6–7 bei 21 °C) sollten die Pflaumen fertig sein: weich, angenehm säuerlich, noch mit Fruchtcharakter. Zu lange = nur noch penetrante Säure." },
      { from: 5, to: 7, label: "sobald fertig", title: "Saft abgiessen & aufbewahren", text: "Saft durch ein Sieb giessen (ca. 125 ml) – im Kühlschrank bis 1 Woche haltbar, sonst luftdicht einfrieren. Pflaumen in ein Gefäss und in den Kühlschrank (bis 1 Woche) oder mit Schnittfläche nach unten einzeln anfrieren, dann vakuumieren und tiefkühlen." },
      { from: 8, to: null, title: "Weiterverarbeiten (optional)", text: "Fruchtfleisch bei genau 40 °C trocknen (Konsistenz wie getrocknete Aprikosen). Schalen bei 40 °C im Dörrautomaten oder 60 °C im Ofen zu Chips trocknen, oder in der Gewürzmühle zu Pflaumenschalenpulver mahlen." }
    ]
  },
  {
    id: "lakto-blaubeeren-1",
    name: "Lakto-Blaubeeren Glas 1",
    type: "Glas 1 von 4 · 2 % Salz",
    color: "#4a3f8f",
    start: "2026-09-10",
    description:
      "Milchsauer fermentierte Blaubeeren nach Noma-Art, Glas 1 von vier, alle gleichzeitig angesetzt am 10.09.2026 um 22:00 Uhr. Beeren nur kurz abgespült, mit 2 % Salz vermischt und ins Glas gefüllt. Bei 28 °C dauert es 4–5 Tage, bei Zimmertemperatur ein paar Tage länger – fertig sind sie, wenn sie leicht gesäuert sind, aber noch ihr süsses, fruchtiges Aroma haben. Verwendung: ein Löffel auf Naturjoghurt mit Honig zum Frühstück, im Müsli oder Smoothie, mit dem Saft püriert als salzig-süsse Fruchtsauce für Eis oder jungen Käse, oder püriert und passiert als Würzpaste für Maiskolben, Rote Bete, Spareribs und Grillsauce (statt Tomatenmark/Ketchup).",
    ingredientsTitle: "Was ist drin (Anteil dieses Glases)",
    ingredients: [
      { name: "Blaubeeren, kurz abgespült (Anteil von insgesamt 1250 g)", amount: "" },
      { name: "Salz (unjodiert), 2 % des Fruchtgewichts (Anteil von insgesamt 25 g)", amount: "" },
      { name: "Bügelglas", amount: "1 Stück" }
    ],
    hint:
      "Deckel nur locker aufsetzen bzw. Gummiring abnehmen, damit die Gase entweichen können. Beeren mit einem Gewicht (z. B. wassergefüllter Zip-Beutel) unter dem austretenden Saft halten. Weissliche Kahmhefe an der Oberfläche ist harmlos: vorsichtig mit dem Löffel abheben. Leichtes Moussieren ist normal.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Insgesamt 1250 g Blaubeeren mit 25 g Salz in einer Schüssel mischen, auf 4 Gläser verteilen, Salz sorgfältig aus der Schüssel kratzen, beschweren, Deckel locker aufsetzen." },
      { from: 1, to: 3, title: "Täglich probieren & Gas prüfen", text: "Schon nach den ersten Tagen regelmässig kosten. Gase müssen entweichen können; Beeren unter dem Saft halten." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 4–5 Tagen (28 °C) bzw. ein paar Tagen länger bei Zimmertemperatur: leicht gesäuert, aber noch süss und fruchtig." },
      { from: 4, to: 7, label: "sobald fertig", title: "Saft abseihen & kühlen", text: "Beeren vorsichtig herausnehmen, Saft durch ein feines Sieb abseihen. Beeren und Saft getrennt im Kühlschrank einige Tage haltbar; für länger getrennt in Vakuum- oder Zip-Beuteln einfrieren." },
      { from: 8, to: null, title: "Verwenden", text: "Joghurt + Honig, Müsli, Smoothie, Fruchtsauce für Eis oder Käse, Würzpaste (püriert und passiert) für Grillgut und Gemüse." }
    ]
  },
  {
    id: "lakto-blaubeeren-2",
    name: "Lakto-Blaubeeren Glas 2",
    type: "Glas 2 von 4 · 2 % Salz",
    color: "#5b4fa3",
    start: "2026-09-10",
    description:
      "Milchsauer fermentierte Blaubeeren nach Noma-Art, Glas 2 von vier, alle gleichzeitig angesetzt am 10.09.2026 um 22:00 Uhr. Beeren nur kurz abgespült, mit 2 % Salz vermischt und ins Glas gefüllt. Bei 28 °C dauert es 4–5 Tage, bei Zimmertemperatur ein paar Tage länger – fertig sind sie, wenn sie leicht gesäuert sind, aber noch ihr süsses, fruchtiges Aroma haben. Verwendung: ein Löffel auf Naturjoghurt mit Honig zum Frühstück, im Müsli oder Smoothie, mit dem Saft püriert als salzig-süsse Fruchtsauce für Eis oder jungen Käse, oder püriert und passiert als Würzpaste für Maiskolben, Rote Bete, Spareribs und Grillsauce (statt Tomatenmark/Ketchup).",
    ingredientsTitle: "Was ist drin (Anteil dieses Glases)",
    ingredients: [
      { name: "Blaubeeren, kurz abgespült (Anteil von insgesamt 1250 g)", amount: "" },
      { name: "Salz (unjodiert), 2 % des Fruchtgewichts (Anteil von insgesamt 25 g)", amount: "" },
      { name: "Bügelglas", amount: "1 Stück" }
    ],
    hint:
      "Deckel nur locker aufsetzen bzw. Gummiring abnehmen, damit die Gase entweichen können. Beeren mit einem Gewicht (z. B. wassergefüllter Zip-Beutel) unter dem austretenden Saft halten. Weissliche Kahmhefe an der Oberfläche ist harmlos: vorsichtig mit dem Löffel abheben. Leichtes Moussieren ist normal.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Insgesamt 1250 g Blaubeeren mit 25 g Salz in einer Schüssel mischen, auf 4 Gläser verteilen, Salz sorgfältig aus der Schüssel kratzen, beschweren, Deckel locker aufsetzen." },
      { from: 1, to: 3, title: "Täglich probieren & Gas prüfen", text: "Schon nach den ersten Tagen regelmässig kosten. Gase müssen entweichen können; Beeren unter dem Saft halten." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 4–5 Tagen (28 °C) bzw. ein paar Tagen länger bei Zimmertemperatur: leicht gesäuert, aber noch süss und fruchtig." },
      { from: 4, to: 7, label: "sobald fertig", title: "Saft abseihen & kühlen", text: "Beeren vorsichtig herausnehmen, Saft durch ein feines Sieb abseihen. Beeren und Saft getrennt im Kühlschrank einige Tage haltbar; für länger getrennt in Vakuum- oder Zip-Beuteln einfrieren." },
      { from: 8, to: null, title: "Verwenden", text: "Joghurt + Honig, Müsli, Smoothie, Fruchtsauce für Eis oder Käse, Würzpaste (püriert und passiert) für Grillgut und Gemüse." }
    ]
  },
  {
    id: "lakto-blaubeeren-3",
    name: "Lakto-Blaubeeren Glas 3",
    type: "Glas 3 von 4 · 2 % Salz",
    color: "#3d3478",
    start: "2026-09-10",
    description:
      "Milchsauer fermentierte Blaubeeren nach Noma-Art, Glas 3 von vier, alle gleichzeitig angesetzt am 10.09.2026 um 22:00 Uhr. Beeren nur kurz abgespült, mit 2 % Salz vermischt und ins Glas gefüllt. Bei 28 °C dauert es 4–5 Tage, bei Zimmertemperatur ein paar Tage länger – fertig sind sie, wenn sie leicht gesäuert sind, aber noch ihr süsses, fruchtiges Aroma haben. Verwendung: ein Löffel auf Naturjoghurt mit Honig zum Frühstück, im Müsli oder Smoothie, mit dem Saft püriert als salzig-süsse Fruchtsauce für Eis oder jungen Käse, oder püriert und passiert als Würzpaste für Maiskolben, Rote Bete, Spareribs und Grillsauce (statt Tomatenmark/Ketchup).",
    ingredientsTitle: "Was ist drin (Anteil dieses Glases)",
    ingredients: [
      { name: "Blaubeeren, kurz abgespült (Anteil von insgesamt 1250 g)", amount: "" },
      { name: "Salz (unjodiert), 2 % des Fruchtgewichts (Anteil von insgesamt 25 g)", amount: "" },
      { name: "Bügelglas", amount: "1 Stück" }
    ],
    hint:
      "Deckel nur locker aufsetzen bzw. Gummiring abnehmen, damit die Gase entweichen können. Beeren mit einem Gewicht (z. B. wassergefüllter Zip-Beutel) unter dem austretenden Saft halten. Weissliche Kahmhefe an der Oberfläche ist harmlos: vorsichtig mit dem Löffel abheben. Leichtes Moussieren ist normal.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Insgesamt 1250 g Blaubeeren mit 25 g Salz in einer Schüssel mischen, auf 4 Gläser verteilen, Salz sorgfältig aus der Schüssel kratzen, beschweren, Deckel locker aufsetzen." },
      { from: 1, to: 3, title: "Täglich probieren & Gas prüfen", text: "Schon nach den ersten Tagen regelmässig kosten. Gase müssen entweichen können; Beeren unter dem Saft halten." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 4–5 Tagen (28 °C) bzw. ein paar Tagen länger bei Zimmertemperatur: leicht gesäuert, aber noch süss und fruchtig." },
      { from: 4, to: 7, label: "sobald fertig", title: "Saft abseihen & kühlen", text: "Beeren vorsichtig herausnehmen, Saft durch ein feines Sieb abseihen. Beeren und Saft getrennt im Kühlschrank einige Tage haltbar; für länger getrennt in Vakuum- oder Zip-Beuteln einfrieren." },
      { from: 8, to: null, title: "Verwenden", text: "Joghurt + Honig, Müsli, Smoothie, Fruchtsauce für Eis oder Käse, Würzpaste (püriert und passiert) für Grillgut und Gemüse." }
    ]
  },
  {
    id: "lakto-blaubeeren-4",
    name: "Lakto-Blaubeeren Glas 4",
    type: "Glas 4 von 4 · 2 % Salz",
    color: "#6a5fb5",
    start: "2026-09-10",
    description:
      "Milchsauer fermentierte Blaubeeren nach Noma-Art, Glas 4 von vier, alle gleichzeitig angesetzt am 10.09.2026 um 22:00 Uhr. Beeren nur kurz abgespült, mit 2 % Salz vermischt und ins Glas gefüllt. Bei 28 °C dauert es 4–5 Tage, bei Zimmertemperatur ein paar Tage länger – fertig sind sie, wenn sie leicht gesäuert sind, aber noch ihr süsses, fruchtiges Aroma haben. Verwendung: ein Löffel auf Naturjoghurt mit Honig zum Frühstück, im Müsli oder Smoothie, mit dem Saft püriert als salzig-süsse Fruchtsauce für Eis oder jungen Käse, oder püriert und passiert als Würzpaste für Maiskolben, Rote Bete, Spareribs und Grillsauce (statt Tomatenmark/Ketchup).",
    ingredientsTitle: "Was ist drin (Anteil dieses Glases)",
    ingredients: [
      { name: "Blaubeeren, kurz abgespült (Anteil von insgesamt 1250 g)", amount: "" },
      { name: "Salz (unjodiert), 2 % des Fruchtgewichts (Anteil von insgesamt 25 g)", amount: "" },
      { name: "Bügelglas", amount: "1 Stück" }
    ],
    hint:
      "Deckel nur locker aufsetzen bzw. Gummiring abnehmen, damit die Gase entweichen können. Beeren mit einem Gewicht (z. B. wassergefüllter Zip-Beutel) unter dem austretenden Saft halten. Weissliche Kahmhefe an der Oberfläche ist harmlos: vorsichtig mit dem Löffel abheben. Leichtes Moussieren ist normal.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Insgesamt 1250 g Blaubeeren mit 25 g Salz in einer Schüssel mischen, auf 4 Gläser verteilen, Salz sorgfältig aus der Schüssel kratzen, beschweren, Deckel locker aufsetzen." },
      { from: 1, to: 3, title: "Täglich probieren & Gas prüfen", text: "Schon nach den ersten Tagen regelmässig kosten. Gase müssen entweichen können; Beeren unter dem Saft halten." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 4–5 Tagen (28 °C) bzw. ein paar Tagen länger bei Zimmertemperatur: leicht gesäuert, aber noch süss und fruchtig." },
      { from: 4, to: 7, label: "sobald fertig", title: "Saft abseihen & kühlen", text: "Beeren vorsichtig herausnehmen, Saft durch ein feines Sieb abseihen. Beeren und Saft getrennt im Kühlschrank einige Tage haltbar; für länger getrennt in Vakuum- oder Zip-Beuteln einfrieren." },
      { from: 8, to: null, title: "Verwenden", text: "Joghurt + Honig, Müsli, Smoothie, Fruchtsauce für Eis oder Käse, Würzpaste (püriert und passiert) für Grillgut und Gemüse." }
    ]
  },
  {
    id: "knoblauch-honig",
    name: "Knoblauch-Honig",
    type: "Honig-Ferment · Bügelglas",
    color: "#e0b13c",
    start: "2026-09-13",
    description:
      "Geschälte Knoblauchzehen in rohem Honig, angesetzt am 13.09.2026. Die Zehen geben Feuchtigkeit ab, der Honig wird flüssiger und dunkler, und die wilden Hefen starten eine langsame Fermentation. Nach 1–2 Wochen zeigen sich Bläschen, nach 3–4 Wochen ist der Honig meist gut durchgezogen – manche lassen ihn monatelang reifen. Ergibt milden, süss-würzigen Knoblauch und aromatischen Honig für Marinaden, Dressings und Glasuren.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Knoblauchzehen, geschält, ganz", amount: "" },
      { name: "Roher Honig, bis alle Zehen bedeckt sind", amount: "" },
      { name: "Bügelglas", amount: "1 Stück" }
    ],
    hint:
      "Bügelverschluss täglich kurz öffnen (Entlüften), besonders in den ersten 1–2 Wochen – sonst baut sich CO₂-Druck auf. Glas dabei kurz kippen, damit alle Zehen mit Honig benetzt bleiben. Kühl und dunkel lagern, nicht im Kühlschrank (Honig kristallisiert, Fermentation wird zu stark gebremst). Zeichen, dass es läuft: Bläschen, leichtes Blubbern beim Öffnen, dünnflüssigerer und dunklerer Honig.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Geschälte Zehen ins Glas, mit rohem Honig vollständig bedecken, Bügelverschluss schliessen." },
      { from: 1, to: 6, title: "Erste Tage: täglich entlüften", text: "Bügelverschluss kurz öffnen, Glas kippen. Honig wird flüssiger – das ist normal." },
      { from: 7, to: 14, title: "Bläschen erwartet – weiter täglich entlüften", text: "Nach 1–2 Wochen sichtbare Bläschen und leichtes Blubbern beim Öffnen. Druck täglich ablassen." },
      { from: 15, to: 20, title: "Ruhen lassen", text: "Gasbildung lässt nach; alle paar Tage kurz öffnen und Glas kippen." },
      { from: 21, to: 28, title: "Gut durchgezogen – probieren", text: "Nach 3–4 Wochen Honig und eine Zehe kosten: mild, süss-würzig, Honig dunkler und dünnflüssig." },
      { from: 29, to: null, title: "Reifen lassen & verwenden", text: "Kühl und dunkel lagern, nicht im Kühlschrank. Wird mit Monaten immer runder." }
    ]
  },
  {
    id: "lakto-tomatenwasser",
    name: "Lakto-Tomatenwasser",
    type: "Einmachglas · Gärgewicht · 2 % Salz",
    color: "#c8452b",
    start: "2026-09-13",
    description:
      "Milchsauer fermentierte Tomaten nach Noma-Art, angesetzt am 13.09.2026 im Einmachglas mit Gärgewicht, mit Tuch abgedeckt. Tomaten sind schon säuerlich und voller Umami – Ziel ist keine starke Säure, sondern eine ausgewogene Süss-Sauer-Balance, fast wie gekochte Tomatensauce. Bei 28 °C dauert es 4–5 Tage, bei Zimmertemperatur ein paar Tage länger. Ergebnis: Tomatenwasser (Dressing mit Dill für Fisch und Meeresfrüchte, Sud zum Dämpfen von Muscheln statt Weisswein, zum Einlegen von Gemüse) und Tomatenpulpe (ein Viertel der Passata im Ragù ersetzen, Bruschetta, mit Ricotta als Lasagnefüllung, unter Lammtatar, oder als Tomatenleder bei 50 °C getrocknet).",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Reife Tomaten, ohne Strunk, geviertelt bzw. geachtelt", amount: "1130 g" },
      { name: "Salz (unjodiert), 2 % des Fruchtgewichts", amount: "23 g" },
      { name: "Einmachglas mit Gärgewicht, mit Tuch + Gummiband abgedeckt", amount: "1 Stück" }
    ],
    hint:
      "Tomatenstücke mit dem Gewicht unter der austretenden Flüssigkeit halten; Deckel bzw. Tuch locker, damit Gase entweichen. Warm stellen. Schon nach den ersten Tagen regelmässig probieren. Weissliche Kahmhefe an der Oberfläche ist harmlos: vorsichtig mit dem Löffel abheben.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "1130 g Tomaten mit 23 g Salz in einer Schüssel mischen, ins Glas füllen, Salz sorgfältig aus der Schüssel kratzen, mit Gewicht beschweren, abdecken." },
      { from: 1, to: 3, title: "Täglich probieren", text: "Geschmackstest mit sauberem Löffel; Stücke unter der Flüssigkeit halten. Die Tomaten geben nach und nach reichlich Saft ab." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 4–5 Tagen (28 °C) bzw. ein paar Tagen länger bei Zimmertemperatur: reichlich Flüssigkeit, Stücke ziemlich weich, Süsse und Säure ausgewogen." },
      { from: 4, to: 7, label: "sobald fertig", title: "Abtropfen lassen", text: "Feines Sieb mit Passiertuch auslegen, auf eine Schüssel setzen, Tomaten samt Flüssigkeit hineingiessen, mit Frischhaltefolie abdecken und über Nacht im Kühlschrank abtropfen lassen. Am nächsten Tag ein paarmal mit der flachen Hand ans Sieb klopfen – Pulpe nicht durchdrücken." },
      { from: 5, to: 8, label: "am Tag danach", title: "Tomatenwasser & Pulpe trennen", text: "Getrennt im Kühlschrank einige Tage haltbar; für länger getrennt in Vakuum- oder Zip-Beuteln (Luft herausgedrückt) einfrieren." },
      { from: 9, to: null, title: "Verwenden", text: "Tomatenwasser: Kräuterdressing (Dill, Schnittlauch, Basilikum, Shiso) mit Olivenöl für Fisch und Meeresfrüchte, Muscheln darin dämpfen, knackiges Gemüse darin über Nacht einlegen. Pulpe: Ragù, Bruschetta, Lasagnefüllung oder Tomatenleder." }
    ]
  }
];
