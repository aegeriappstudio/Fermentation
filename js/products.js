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
    id: "scoby-hotel",
    name: "SCOBY-Hotel",
    type: "3 SCOBYs · Reserve-Kulturen · kein laufender Kombucha",
    color: "#a86a3a",
    start: "2026-10-04",
    description:
      "Aufbewahrungsglas für die drei Kombucha-Kulturen, nachdem der laufende Kombucha abgeschlossen wurde. Die SCOBYs liegen in reichlich saurer Ansatzflüssigkeit, nur mit Tuch abgedeckt, bei Raumtemperatur. Im Hotel bleiben die Kulturen monatelang lebendig; sie werden alle 4–6 Wochen mit etwas frischem, gesüsstem Tee gefüttert. Sobald wieder Kombucha angesetzt werden soll: einen SCOBY samt 10 % Ansatzflüssigkeit herausnehmen – fertig ist der Starter.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "SCOBYs (Kombucha-Kulturen)", amount: "3 Stück" },
      { name: "Saurer Kombucha als Ansatzflüssigkeit, SCOBYs vollständig bedeckt", amount: "" },
      { name: "Glas, mit Tuch + Gummiband abgedeckt", amount: "1 Stück" }
    ],
    hint:
      "Nie luftdicht verschliessen – die Kulturen brauchen Luft. Dunkel und bei Raumtemperatur lagern, nicht im Kühlschrank. Die Flüssigkeit darf sehr sauer werden, das schützt vor Schimmel. Braune Fäden und Hefeschlieren sind normal; pelziger, trockener Schimmel (grün, schwarz, weiss-flauschig) nicht – dann alles entsorgen. Wird das Hotel zu voll, alte Schichten abnehmen und kompostieren oder weitergeben.",
    log: [
      { date: "2026-10-04", text: "Kein laufender Kombucha mehr. Drei SCOBYs im Hotel, mit Tuch abgedeckt." }
    ],
    steps: [
      { from: 0, to: 0, title: "Hotel anlegen", text: "Drei SCOBYs ins Glas, mit saurem Kombucha vollständig bedecken, Tuch + Gummiband drauf." },
      { from: 1, to: 27, title: "Ruhen lassen · wöchentlich Sichtkontrolle", text: "Nichts zu tun. Einmal pro Woche prüfen: Flüssigkeitsstand, Geruch (essigsauer = gut), keine Schimmelstellen." },
      { from: 28, to: 42, label: "alle 4–6 Wochen", title: "Füttern", text: "Etwas Flüssigkeit abgiessen (als Starter aufheben oder als Essig nutzen) und mit frischem, abgekühltem, gesüsstem Tee (ca. 70 g Zucker pro Liter) auffüllen." },
      { from: 43, to: null, title: "Weiter pflegen oder neuen Kombucha ansetzen", text: "Wöchentliche Sichtkontrolle, alle 4–6 Wochen füttern. Für einen neuen Ansatz: einen SCOBY plus 10 % der Teemenge als Ansatzflüssigkeit entnehmen." }
    ]
  },
  {
    id: "kuerbis-1",
    name: "Kürbis Glas 1",
    type: "Glas 1 von 2 · Salzlake 2 %",
    color: "#e07b2a",
    start: "2026-09-16",
    description:
      "Oranger Knirps-Kürbis, geschält, entkernt und in dünne Scheiben (ca. 3–4 mm) geschnitten, in 2 %-Salzlake milchsauer fermentiert. Glas 1 von zwei, angesetzt am 16.09.2026. Bei Raumtemperatur (18–22 °C) nach ca. 5–8 Tagen fertig: leicht säuerlich mit noch etwas Biss. Danach fest verschlossen im Kühlschrank mehrere Wochen bis Monate haltbar.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Oranger Knirps-Kürbis, geschält, entkernt, dünne Scheiben (3–4 mm)", amount: "193 g" },
      { name: "Wasser", amount: "ca. 180 ml" },
      { name: "Salz, 2 % der Wassermenge", amount: "ca. 3.6 g" },
      { name: "Glas mit Gärgewicht, locker abgedeckt", amount: "1 Stück" }
    ],
    hint:
      "Gärgewicht drauf, damit nichts an der Oberfläche schwimmt. Glas locker abgedeckt, nicht luftdicht, damit CO₂ entweichen kann. Weisser Belag (Kahmhefe) ist unbedenklich: abschöpfen. Schimmel (schwarz, grün, pelzig): entsorgen.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Kürbisscheiben ins Glas schichten, Lake aus 180 ml Wasser + 3,6 g Salz übergiessen bis alles bedeckt ist, Gärgewicht drauf, locker abdecken." },
      { from: 1, to: 1, title: "Kontrolle", text: "Alles unter der Lake? Deckel locker? Bei Raumtemperatur (18–22 °C) stehen lassen." },
      { from: 2, to: 7, title: "Täglich probieren", text: "Ab Tag 3 täglich eine Scheibe kosten: Säure und Biss beurteilen." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach ca. 5–8 Tagen: leicht säuerlich, noch etwas Biss." },
      { from: 4, to: 7, label: "sobald fertig", title: "Deckel fest → Kühlschrank", text: "Gärgewicht kann bleiben; Deckel fest verschliessen und kühl stellen." },
      { from: 8, to: null, title: "Lagern & geniessen", text: "Im Kühlschrank hält der Kürbis mehrere Wochen bis Monate." }
    ]
  },
  {
    id: "kuerbis-2",
    name: "Kürbis Glas 2",
    type: "Glas 2 von 2 · Salzlake 2 %",
    color: "#ea9448",
    start: "2026-09-16",
    description:
      "Oranger Knirps-Kürbis, geschält, entkernt und in dünne Scheiben (ca. 3–4 mm) geschnitten, in 2 %-Salzlake milchsauer fermentiert. Glas 2 von zwei, angesetzt am 16.09.2026. Bei Raumtemperatur (18–22 °C) nach ca. 5–8 Tagen fertig: leicht säuerlich mit noch etwas Biss. Danach fest verschlossen im Kühlschrank mehrere Wochen bis Monate haltbar.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Oranger Knirps-Kürbis, geschält, entkernt, dünne Scheiben (3–4 mm)", amount: "194 g" },
      { name: "Wasser", amount: "ca. 180 ml" },
      { name: "Salz, 2 % der Wassermenge", amount: "ca. 3.6 g" },
      { name: "Glas mit Gärgewicht, locker abgedeckt", amount: "1 Stück" }
    ],
    hint:
      "Gärgewicht drauf, damit nichts an der Oberfläche schwimmt. Glas locker abgedeckt, nicht luftdicht, damit CO₂ entweichen kann. Weisser Belag (Kahmhefe) ist unbedenklich: abschöpfen. Schimmel (schwarz, grün, pelzig): entsorgen.",
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Kürbisscheiben ins Glas schichten, Lake aus 180 ml Wasser + 3,6 g Salz übergiessen bis alles bedeckt ist, Gärgewicht drauf, locker abdecken." },
      { from: 1, to: 1, title: "Kontrolle", text: "Alles unter der Lake? Deckel locker? Bei Raumtemperatur (18–22 °C) stehen lassen." },
      { from: 2, to: 7, title: "Täglich probieren", text: "Ab Tag 3 täglich eine Scheibe kosten: Säure und Biss beurteilen." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach ca. 5–8 Tagen: leicht säuerlich, noch etwas Biss." },
      { from: 4, to: 7, label: "sobald fertig", title: "Deckel fest → Kühlschrank", text: "Gärgewicht kann bleiben; Deckel fest verschliessen und kühl stellen." },
      { from: 8, to: null, title: "Lagern & geniessen", text: "Im Kühlschrank hält der Kürbis mehrere Wochen bis Monate." }
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
    id: "lakto-chili-1",
    name: "Lakto-Chili Glas 1",
    type: "Glas 1 von 2 · 250 g Chilis",
    color: "#c0392b",
    start: "2026-10-04",
    description:
      "Milchsauer fermentierte Chilis, auf zwei Gläser mit je 250 g aufgeteilt. Glas 1 von zwei. Chilis geben beim Fermentieren Saft ab, die Schärfe wird runder und bekommt eine fruchtige Säure. Nach 1–2 Wochen bei Raumtemperatur ist die erste Gärung durch; danach entweder kühl weiterreifen lassen oder zu Hot Sauce pürieren (mit etwas Lake, optional Essig, Knoblauch).",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Chilis", amount: "250 g" },
      { name: "Salz (unjodiert)", amount: "" },
      { name: "Glas mit Gärgewicht, locker abgedeckt", amount: "1 Stück" }
    ],
    hint:
      "Alles unter der Flüssigkeit halten, Deckel locker oder Glas täglich entlüften. Weissliche Kahmhefe ist harmlos: abheben. Schimmel (pelzig, grün/schwarz): entsorgen. Beim Hantieren Handschuhe – die Lake ist scharf.",
    log: [
      { date: "2026-10-04", text: "Chilis auf zwei Gläser à 250 g aufgeteilt." }
    ],
    steps: [
      { from: 0, to: 0, title: "Aufteilen", text: "Chilis auf zwei Gläser verteilen (je 250 g), mit Lake bedecken, beschweren, locker verschliessen." },
      { from: 1, to: 6, title: "Täglich entlüften & kontrollieren", text: "Gas ablassen, Chilis unter der Lake halten. Bläschen und trübe Lake sind gute Zeichen." },
      { from: 7, to: 14, title: "Probieren", text: "Alle 2–3 Tage eine Chili kosten: sauer-scharf, fruchtig, Lake angenehm säuerlich." },
      { from: 7, to: 14, label: "sobald fertig", title: "Kühl stellen oder Hot Sauce machen", text: "Deckel fest zu → Kühlschrank. Oder pürieren: Chilis mit etwas Lake (und optional Essig, Knoblauch) mixen, passieren, in Flaschen abfüllen." },
      { from: 15, to: null, title: "Lagern & verwenden", text: "Im Kühlschrank mehrere Monate haltbar; Geschmack wird mit der Zeit runder." }
    ]
  },
  {
    id: "lakto-chili-2",
    name: "Lakto-Chili Glas 2",
    type: "Glas 2 von 2 · 250 g Chilis",
    color: "#d9481f",
    start: "2026-10-04",
    description:
      "Milchsauer fermentierte Chilis, auf zwei Gläser mit je 250 g aufgeteilt. Glas 2 von zwei. Chilis geben beim Fermentieren Saft ab, die Schärfe wird runder und bekommt eine fruchtige Säure. Nach 1–2 Wochen bei Raumtemperatur ist die erste Gärung durch; danach entweder kühl weiterreifen lassen oder zu Hot Sauce pürieren (mit etwas Lake, optional Essig, Knoblauch).",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Chilis", amount: "250 g" },
      { name: "Salz (unjodiert)", amount: "" },
      { name: "Glas mit Gärgewicht, locker abgedeckt", amount: "1 Stück" }
    ],
    hint:
      "Alles unter der Flüssigkeit halten, Deckel locker oder Glas täglich entlüften. Weissliche Kahmhefe ist harmlos: abheben. Schimmel (pelzig, grün/schwarz): entsorgen. Beim Hantieren Handschuhe – die Lake ist scharf.",
    log: [
      { date: "2026-10-04", text: "Chilis auf zwei Gläser à 250 g aufgeteilt." }
    ],
    steps: [
      { from: 0, to: 0, title: "Aufteilen", text: "Chilis auf zwei Gläser verteilen (je 250 g), mit Lake bedecken, beschweren, locker verschliessen." },
      { from: 1, to: 6, title: "Täglich entlüften & kontrollieren", text: "Gas ablassen, Chilis unter der Lake halten. Bläschen und trübe Lake sind gute Zeichen." },
      { from: 7, to: 14, title: "Probieren", text: "Alle 2–3 Tage eine Chili kosten: sauer-scharf, fruchtig, Lake angenehm säuerlich." },
      { from: 7, to: 14, label: "sobald fertig", title: "Kühl stellen oder Hot Sauce machen", text: "Deckel fest zu → Kühlschrank. Oder pürieren: Chilis mit etwas Lake (und optional Essig, Knoblauch) mixen, passieren, in Flaschen abfüllen." },
      { from: 15, to: null, title: "Lagern & verwenden", text: "Im Kühlschrank mehrere Monate haltbar; Geschmack wird mit der Zeit runder." }
    ]
  },
  {
    id: "lakto-blaubeeren-1kg",
    name: "Lakto-Blaubeeren",
    type: "1 kg · 20 g Salz (2 %)",
    color: "#4a3f8f",
    start: "2026-10-04",
    description:
      "Milchsauer fermentierte Blaubeeren nach Noma-Art, angesetzt am 04.10.2026: 1 kg Beeren, nur kurz abgespült, mit 20 g Salz (2 %) vermischt und ins Glas gefüllt. Bei 28 °C dauert es 4–5 Tage, bei Zimmertemperatur ein paar Tage länger – fertig sind sie, wenn sie leicht gesäuert sind, aber noch ihr süsses, fruchtiges Aroma haben. Verwendung: ein Löffel auf Naturjoghurt mit Honig, im Müsli oder Smoothie, mit dem Saft püriert als salzig-süsse Fruchtsauce für Eis oder jungen Käse, oder püriert und passiert als Würzpaste für Maiskolben, Rote Bete, Spareribs und Grillsauce.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Blaubeeren, kurz abgespült", amount: "1 kg" },
      { name: "Salz (unjodiert), 2 % des Fruchtgewichts", amount: "20 g" },
      { name: "Glas mit Gewicht, Deckel locker", amount: "1 Stück" }
    ],
    hint:
      "Deckel nur locker aufsetzen bzw. Gummiring abnehmen, damit die Gase entweichen können. Beeren mit einem Gewicht (z. B. wassergefüllter Zip-Beutel) unter dem austretenden Saft halten. Weissliche Kahmhefe an der Oberfläche ist harmlos: vorsichtig mit dem Löffel abheben. Leichtes Moussieren ist normal.",
    log: [
      { date: "2026-10-04", text: "Angesetzt: 1 kg Blaubeeren mit 20 g Salz." }
    ],
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "1 kg Blaubeeren mit 20 g Salz in einer Schüssel mischen, ins Glas füllen, Salz sorgfältig aus der Schüssel kratzen, beschweren, Deckel locker aufsetzen." },
      { from: 1, to: 3, title: "Täglich probieren & Gas prüfen", text: "Schon nach den ersten Tagen regelmässig kosten. Gase müssen entweichen können; Beeren unter dem Saft halten." },
      { from: 4, to: 7, title: "Fertig? Geschmack entscheidet", text: "Nach 4–5 Tagen (28 °C) bzw. ein paar Tagen länger bei Zimmertemperatur: leicht gesäuert, aber noch süss und fruchtig." },
      { from: 4, to: 7, label: "sobald fertig", title: "Saft abseihen & kühlen", text: "Beeren vorsichtig herausnehmen, Saft durch ein feines Sieb abseihen. Beeren und Saft getrennt im Kühlschrank einige Tage haltbar; für länger getrennt in Vakuum- oder Zip-Beuteln einfrieren." },
      { from: 8, to: null, title: "Verwenden", text: "Joghurt + Honig, Müsli, Smoothie, Fruchtsauce für Eis oder Käse, Würzpaste (püriert und passiert) für Grillgut und Gemüse." }
    ]
  },
  {
    id: "lakto-erdbeeren-500g",
    name: "Lakto-Erdbeeren",
    type: "500 g · 10 g Salz (2 %)",
    color: "#c93a4f",
    start: "2026-10-04",
    description:
      "Milchsauer fermentierte Erdbeeren nach Noma-Art, angesetzt am 04.10.2026: 500 g Erdbeeren, geputzt und je nach Grösse halbiert, mit 10 g Salz (2 %) vermischt und ins Glas gefüllt. Erdbeeren fermentieren schnell: bei 28 °C 3–5 Tage, bei Zimmertemperatur etwas länger. Fertig, wenn sie angenehm säuerlich sind, aber noch nach reifer Erdbeere schmecken – nicht zu lange warten, sonst werden sie weich und zu sauer. Verwendung: Saft als Vinaigrette-Basis (mit Olivenöl) für Salat oder Tomaten, Beeren und Saft zu Eis, Panna cotta oder jungem Käse, der Saft mit Sprudelwasser als Drink.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Erdbeeren, geputzt, grosse halbiert", amount: "500 g" },
      { name: "Salz (unjodiert), 2 % des Fruchtgewichts", amount: "10 g" },
      { name: "Glas mit Gewicht, Deckel locker", amount: "1 Stück" }
    ],
    hint:
      "Deckel nur locker aufsetzen, damit die Gase entweichen können. Beeren mit einem Gewicht (z. B. wassergefüllter Zip-Beutel) unter dem austretenden Saft halten. Erdbeeren werden schnell matschig – lieber täglich probieren und früh in den Kühlschrank stellen. Weissliche Kahmhefe ist harmlos: vorsichtig abheben. Leichtes Moussieren ist normal.",
    log: [
      { date: "2026-10-04", text: "Angesetzt: 500 g Erdbeeren mit 10 g Salz." }
    ],
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "500 g Erdbeeren mit 10 g Salz in einer Schüssel mischen, ins Glas füllen, Salz sorgfältig aus der Schüssel kratzen, beschweren, Deckel locker aufsetzen." },
      { from: 1, to: 2, title: "Täglich probieren & Gas prüfen", text: "Ab dem ersten Tag kosten. Gase müssen entweichen können; Beeren unter dem Saft halten." },
      { from: 3, to: 6, title: "Fertig? Geschmack entscheidet", text: "Nach 3–5 Tagen (28 °C) bzw. etwas länger bei Zimmertemperatur: angenehm säuerlich, noch deutlich Erdbeere, Beeren noch in Form." },
      { from: 3, to: 6, label: "sobald fertig", title: "Saft abseihen & kühlen", text: "Beeren vorsichtig herausnehmen, Saft durch ein feines Sieb abseihen. Getrennt im Kühlschrank einige Tage haltbar; für länger getrennt einfrieren." },
      { from: 7, to: null, title: "Verwenden", text: "Saft als Vinaigrette oder mit Sprudelwasser, Beeren zu Eis, Panna cotta, Joghurt oder jungem Käse." }
    ]
  },
  {
    id: "kimchi-1",
    name: "Kimchi Nr. 1",
    type: "Bügelglas 3 l · 1,25 kg Chinakohl · Kimchi Base",
    color: "#c8452b",
    start: "2026-10-04",
    description:
      "Erstes Kimchi, angesetzt am Sonntag, 4. Oktober 2026 um ca. 22:00 Uhr im grossen 3-Liter-Bügelglas. Chinakohl mit 6 % grobem Salz einmassiert, 2 Stunden ziehen lassen (alle 30 Min. gewendet), 3× kalt gespült, ca. 20 Min. abgetropft und leicht ausgedrückt. Surasang Kimchi Base mit Knoblauch, Ingwer und Fischsauce verrührt, Kohl, Karotten und Frühlingszwiebeln untergemischt, portionsweise ins Glas gepresst und den Saft darübergegossen – der Kohl liegt vollständig unter der Flüssigkeit. Besonderheiten: statt Gochugaru eine fertige Kimchi Base (enthält Zucker, Maissirup und Konservierungsmittel E202), die Gärung startet darum eventuell langsamer; statt Rettich nur Karotten.",
    ingredientsTitle: "Was ist drin",
    ingredients: [
      { name: "Chinakohl, geschnitten", amount: "1.25 kg" },
      { name: "Grobes Salz ohne Jod (6 % vom Kohl)", amount: "75 g" },
      { name: "Surasang Kimchi Base (Glas à 453 g)", amount: "ca. 300–375 g" },
      { name: "Karotten, geraffelt (Migros)", amount: "250 g" },
      { name: "Frühlingszwiebeln, in 3 cm Stücken", amount: "1 Bund" },
      { name: "Knoblauch, gepresst", amount: "4 Zehen" },
      { name: "Ingwer, gerieben", amount: "ca. 20 g" },
      { name: "Fischsauce (optional)", amount: "1 EL" },
      { name: "Bügelverschlussglas, auf einem Teller", amount: "3 l" }
    ],
    hint:
      "Glas bei Raumtemperatur auf einen Teller stellen – beim Gären kann Saft austreten. Täglich kurz öffnen (Druck ablassen) und das Kimchi mit einem sauberen Löffel unter die Flüssigkeit drücken. Riechprobe entscheidet: säuerlich und Bläschen sichtbar → ab in den Kühlschrank. Wegen der fertigen Kimchi Base (Zucker, Konservierungsmittel) kann die Gärung etwas langsamer starten; im Zweifel einen Tag länger warten. Rest der Kimchi Base im Kühlschrank lagern und innert 2 Wochen aufbrauchen.",
    log: [
      { date: "2026-10-04", text: "Angesetzt um ca. 22:00 Uhr: 1,25 kg Chinakohl, 75 g Salz, ca. 300–375 g Kimchi Base, 250 g Karotten, 1 Bund Frühlingszwiebeln, 4 Zehen Knoblauch, 20 g Ingwer, 1 EL Fischsauce. Kohl liegt vollständig unter der Flüssigkeit." }
    ],
    steps: [
      { from: 0, to: 0, title: "Ansetzen", text: "Kohl mit Salz einmassiert (2 h, alle 30 Min. gewendet), 3× gespült, abgetropft, mit Kimchi Base, Knoblauch, Ingwer, Fischsauce, Karotten und Frühlingszwiebeln gemischt, ins Glas gepresst, Saft darüber." },
      { from: 1, to: 3, title: "Bei Raumtemperatur gären lassen", text: "Glas auf einem Teller stehen lassen. Täglich kurz öffnen und mit sauberem Löffel runterdrücken, damit alles unter der Flüssigkeit bleibt." },
      { from: 2, to: 3, title: "Riechprobe am Abend", text: "Säuerlich und Bläschen sichtbar? Dann in den Kühlschrank. Falls nicht, einen Tag länger warten." },
      { from: 2, to: 4, label: "sobald säuerlich", title: "In den Kühlschrank", text: "Bügelverschluss schliessen und kühl stellen. Die Gärung läuft im Kühlschrank langsam weiter." },
      { from: 10, to: null, title: "Geschmack am besten – geniessen", text: "Ab ca. 14.10. ist das Kimchi am besten; hält im Kühlschrank mehrere Wochen." },
      { from: 0, to: 14, label: "bis ca. 18.10.", title: "Rest der Kimchi Base aufbrauchen", text: "Angebrochenes Glas Kimchi Base im Kühlschrank lagern und innert 2 Wochen aufbrauchen." }
    ]
  }
];
