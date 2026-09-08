/* Fermentations-Logbuch – App-Logik (ohne Abhängigkeiten) */
(function () {
  "use strict";

  const STORAGE_KEY = "fermentations-logbuch.v1";
  const WEEKDAYS = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const DAY_MS = 24 * 60 * 60 * 1000;
  const PALETTE = [
    { color: "#d99a2b", name: "Ingwer" },
    { color: "#5d8a3c", name: "Basilikum" },
    { color: "#b0642f", name: "Tee" },
    { color: "#c8452b", name: "Kimchi" },
    { color: "#8a3f6b", name: "Rotkraut" },
    { color: "#c9b36a", name: "Sauerkraut" },
    { color: "#e0c04a", name: "Honig" },
    { color: "#7fa7b5", name: "Wasserkefir" }
  ];

  /* ---------- Speicher ---------- */

  const defaultState = () => ({
    customProducts: [],   // selbst angelegte Produkte
    overrides: {},        // bearbeitete Standard-Produkte (id → Produkt)
    hidden: [],           // gelöschte Standard-Produkte (ids)
    stepDone: {},         // "pid|stepIdx" → true
    dayDone: {},          // "pid|stepIdx|YYYY-MM-DD" → true
    notes: {}             // pid → Text
  });

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {
      console.warn("Speicher konnte nicht gelesen werden", e);
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Speicher konnte nicht geschrieben werden", e);
    }
  }

  /* ---------- Datum ---------- */

  function today() {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  function parseISO(iso) {
    const [y, m, d] = String(iso).split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function toISO(date) {
    const p = (n) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
  }

  function addDays(date, n) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n);
  }

  function diffDays(a, b) {
    return Math.round((a - b) / DAY_MS);
  }

  const p2 = (n) => String(n).padStart(2, "0");
  const fmtShort = (d) => `${p2(d.getDate())}.${p2(d.getMonth() + 1)}.`;
  const fmtLong = (d) => `${p2(d.getDate())}.${p2(d.getMonth() + 1)}.${d.getFullYear()}`;
  const fmtToday = (d) => `${WEEKDAYS[d.getDay()]}, ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;

  /* ---------- Produkte ---------- */

  function allProducts() {
    const defaults = (window.DEFAULT_PRODUCTS || [])
      .filter((p) => !state.hidden.includes(p.id))
      .map((p) => state.overrides[p.id] || p);
    return defaults.concat(state.customProducts);
  }

  function isDefaultId(id) {
    return (window.DEFAULT_PRODUCTS || []).some((p) => p.id === id);
  }

  function findProduct(id) {
    return allProducts().find((p) => p.id === id);
  }

  function slugify(text) {
    return String(text)
      .toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "produkt";
  }

  function uniqueId(base) {
    const ids = new Set(allProducts().map((p) => p.id).concat((window.DEFAULT_PRODUCTS || []).map((p) => p.id)));
    let id = base, i = 2;
    while (ids.has(id)) id = `${base}-${i++}`;
    return id;
  }

  /* ---------- Fahrplan-Berechnung ---------- */

  // Effektiver Bereich eines Schritts. Offene Schritte ("ab …") laufen bis zum
  // Beginn des nächsten Schritts, der letzte Schritt läuft unbegrenzt.
  function stepRange(product, idx) {
    const steps = product.steps || [];
    const s = steps[idx];
    let to = s.to;
    if (to === null || to === undefined || to === "") {
      const next = steps.slice(idx + 1).find((n) => Number(n.from) > Number(s.from));
      to = next ? Number(next.from) - 1 : Infinity;
    }
    return { from: Number(s.from), to: Math.max(Number(to), Number(s.from)) };
  }

  function stepLabel(product, step) {
    if (step.label) return step.label;
    const start = parseISO(product.start);
    const a = addDays(start, Number(step.from));
    if (step.to === null || step.to === undefined || step.to === "") return `ab ${fmtShort(a)}`;
    const b = addDays(start, Number(step.to));
    if (diffDays(b, a) === 0) return fmtShort(a);
    if (a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()) {
      return `${p2(a.getDate())}.–${p2(b.getDate())}.${p2(a.getMonth() + 1)}.`;
    }
    return `${fmtShort(a)}–${fmtShort(b)}`;
  }

  function productStatus(product) {
    const start = parseISO(product.start);
    const offset = diffDays(today(), start);      // 0 = Starttag
    const steps = product.steps || [];
    const active = [];
    let next = null;
    steps.forEach((s, i) => {
      const r = stepRange(product, i);
      if (offset >= r.from && offset <= r.to) active.push(i);
      if (next === null && r.from > offset) next = i;
    });
    return { start, offset, day: offset + 1, active, next };
  }

  function productColor(p) {
    if (p.color) return p.color;
    let h = 0;
    for (const ch of String(p.id)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return PALETTE[h % PALETTE.length].color;
  }

  // Fortschritt 0..1 über den gesamten Fahrplan (letzter fester Schritt = voll).
  function productProgress(p, st) {
    const steps = p.steps || [];
    let end = 0;
    steps.forEach((s, i) => {
      const r = stepRange(p, i);
      end = Math.max(end, Number.isFinite(r.to) ? r.to : r.from + 2);
    });
    if (st.offset < 0) return 0;
    return Math.max(0.12, Math.min(1, (st.offset + 1) / (end + 1)));
  }

  function jarSVG(p, progress) {
    const color = productColor(p);
    const uid = `jar-${p.id}`;
    const top = 42, bottom = 146, h = bottom - top;
    const level = bottom - h * progress;
    const bubbles = [34, 46, 58, 70, 82].map((x, i) =>
      `<circle class="bubble" cx="${x}" cy="${bottom}" r="${2 + (i % 3)}" style="animation-delay:${(i * 0.9).toFixed(1)}s;animation-duration:${(3.2 + (i % 4) * 0.7).toFixed(1)}s"/>`
    ).join("");
    return `<svg class="jar" viewBox="0 0 120 156" role="img" aria-label="Füllstand ${Math.round(progress * 100)} %">
      <defs><clipPath id="${uid}"><path d="M24 40 h72 v96 a10 10 0 0 1 -10 10 h-52 a10 10 0 0 1 -10 -10 z"/></clipPath></defs>
      <rect x="30" y="6" width="60" height="16" rx="5" class="jar-lid"/>
      <rect x="24" y="20" width="72" height="12" rx="4" class="jar-ring"/>
      <path d="M22 32 h76 v104 a12 12 0 0 1 -12 12 h-52 a12 12 0 0 1 -12 -12 z" class="jar-glass"/>
      <g clip-path="url(#${uid})">
        <rect x="20" y="${level.toFixed(1)}" width="80" height="${(bottom - level + 4).toFixed(1)}" fill="${color}" class="jar-liquid"/>
        <path d="M20 ${level.toFixed(1)} q10 -4 20 0 t20 0 t20 0 t20 0 v6 h-80 z" fill="${color}" opacity=".7"/>
        <g fill="rgba(255,255,255,.55)" style="--level:${(level - bottom).toFixed(1)}px">${bubbles}</g>
      </g>
      <path d="M30 44 v80" class="jar-gloss"/>
      <path d="M22 32 h76 v104 a12 12 0 0 1 -12 12 h-52 a12 12 0 0 1 -12 -12 z" class="jar-outline"/>
    </svg>`;
  }

  /* ---------- Rendering ---------- */

  const $ = (sel, root) => (root || document).querySelector(sel);
  const el = (tag, attrs, children) => {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else if (k === "html") node.innerHTML = v;
        else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
        else if (v !== null && v !== undefined && v !== false) node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => { if (c) node.append(c); });
    return node;
  };

  function joinNames(names) {
    if (names.length <= 1) return names.join("");
    return names.slice(0, -1).join(", ") + " und " + names[names.length - 1];
  }

  function render() {
    const products = allProducts();
    const t = today();

    $("#today-label").textContent = fmtToday(t);
    $("#intro").textContent = products.length
      ? `Übersicht über die laufenden Ansätze: ${joinNames(products.map((p) => p.name))} – mit Zutaten, Fahrplan ab Start und was als Nächstes ansteht. Häkchen und Notizen bleiben in diesem Browser gespeichert.`
      : "Noch keine Ansätze angelegt. Mit «Neues Produkt» startet der erste Fahrplan.";

    renderTodo(products, t);
    renderOverview(products);
    renderProducts(products);
  }

  function renderTodo(products, t) {
    const list = $("#todo-list");
    list.replaceChildren();
    const iso = toISO(t);
    let count = 0;

    products.forEach((p) => {
      const st = productStatus(p);
      if (st.offset < 0) {
        list.append(el("div", { class: "todo-idle" }, [
          el("strong", { text: p.name }), ` startet in ${-st.offset} ${st.offset === -1 ? "Tag" : "Tagen"} (${fmtLong(st.start)}).`
        ]));
        return;
      }
      if (!st.active.length) {
        const n = st.next !== null ? p.steps[st.next] : null;
        list.append(el("div", { class: "todo-idle" }, [
          el("strong", { text: p.name }), n
            ? ` – heute nichts zu tun. Nächster Schritt: ${stepLabel(p, n)} – ${n.title}`
            : " – Fahrplan abgeschlossen."
        ]));
        return;
      }
      st.active.forEach((i) => {
        const s = p.steps[i];
        const key = `${p.id}|${i}|${iso}`;
        const done = !!state.dayDone[key];
        const cb = el("input", { type: "checkbox", id: `todo-${key}`, "aria-label": `${p.name}: ${s.title} heute erledigt` });
        cb.checked = done;
        const item = el("label", { class: "todo-item" + (done ? " is-done" : ""), for: `todo-${key}`, style: `--jar:${productColor(p)}` }, [
          cb,
          el("div", null, [
            el("div", { class: "todo-product", text: `${p.name} · Tag ${st.day}` }),
            el("div", { class: "todo-title", text: `${s.title}` }),
            s.text ? el("div", { class: "todo-text", text: s.text }) : null
          ])
        ]);
        cb.addEventListener("change", () => {
          if (cb.checked) state.dayDone[key] = true; else delete state.dayDone[key];
          saveState();
          item.classList.toggle("is-done", cb.checked);
        });
        list.append(item);
        count++;
      });
    });

    if (!products.length) {
      list.append(el("p", { class: "todo-empty", text: "Keine Ansätze vorhanden." }));
    } else if (!count) {
      list.prepend(el("p", { class: "todo-empty", text: "Heute steht keine konkrete Aufgabe an." }));
    }
  }

  function renderOverview(products) {
    const grid = $("#overview");
    grid.replaceChildren();
    products.forEach((p) => {
      const st = productStatus(p);
      const current = st.active.length ? p.steps[st.active[0]] : null;
      const next = st.next !== null ? p.steps[st.next] : null;
      const card = el("a", { class: "ov-card", href: `#p-${p.id}`, style: `--jar:${productColor(p)}` }, [
        el("div", { class: "ov-jar", html: jarSVG(p, productProgress(p, st)) }),
        el("div", { class: "ov-body" }, [
          el("h3", { text: p.name }),
          el("div", { class: "ov-dayline" }, [
            st.offset < 0
              ? el("span", { class: "ov-day", text: `Start in ${-st.offset} Tg.` })
              : el("span", { class: "ov-day", text: `Tag ${st.day}` }),
            el("span", { class: "ov-since", text: `seit ${fmtShort(st.start)}` })
          ]),
          el("div", { class: "ov-current", text: current ? current.title : (next ? "Warten" : "Abgeschlossen") }),
          el("div", { class: "ov-next", text: next ? `nächster Schritt: ${stepLabel(p, next)} – ${next.title}` : "kein weiterer Schritt" })
        ])
      ]);
      grid.append(card);
    });
  }

  function renderProducts(products) {
    const root = $("#products");
    root.replaceChildren();
    products.forEach((p) => root.append(renderProduct(p)));
  }

  function renderProduct(p) {
    const st = productStatus(p);
    const isCustom = !isDefaultId(p.id);

    const head = el("div", { class: "product-head" }, [
      el("div", null, [
        el("h3", { text: p.name }),
        el("div", { class: "product-meta" }, [
          p.type ? el("span", { class: "badge", text: p.type }) : null,
          el("span", { text: `Start ${fmtLong(st.start)}` }),
          st.offset >= 0 ? el("span", { text: `· Tag ${st.day}` }) : null,
          isCustom ? el("span", { class: "badge badge-custom", text: "in diesem Browser angelegt" }) : null
        ])
      ]),
      el("div", { class: "product-actions" }, [
        el("button", { type: "button", class: "btn btn-ghost btn-sm", text: "Bearbeiten", onclick: () => openDialog(p) }),
        el("button", { type: "button", class: "btn btn-ghost btn-sm btn-danger", text: "Löschen", onclick: () => deleteProduct(p) })
      ])
    ]);

    const ingredients = el("div", null, [
      el("h4", { text: p.ingredientsTitle || "Was ist drin" }),
      el("ul", { class: "ingredients" }, (p.ingredients || []).map((ing) =>
        el("li", null, [el("span", { text: ing.name }), ing.amount ? el("span", { class: "amount", text: ing.amount }) : null])
      )),
      p.hint ? el("div", { class: "hint", text: p.hint }) : null
    ]);

    const timeline = el("ol", { class: "timeline" }, (p.steps || []).map((s, i) => {
      const r = stepRange(p, i);
      const key = `${p.id}|${i}`;
      const done = !!state.stepDone[key];
      const isActive = st.active.includes(i);
      const isPast = st.offset > r.to;
      const cb = el("input", { type: "checkbox", id: `step-${key}`, "aria-label": `${s.title} abgeschlossen` });
      cb.checked = done;
      const li = el("li", { class: "step" + (isActive ? " is-active" : "") + (isPast ? " is-past" : "") + (done ? " is-done" : "") }, [
        cb,
        el("div", null, [
          el("label", { for: `step-${key}` }, [
            el("span", { class: "step-when", text: stepLabel(p, s) }),
            el("span", { class: "step-title", text: s.title }),
            isActive ? el("span", { class: "badge badge-today", text: "heute" }) : null
          ]),
          s.text ? el("div", { class: "step-text", text: s.text }) : null
        ])
      ]);
      cb.addEventListener("change", () => {
        if (cb.checked) state.stepDone[key] = true; else delete state.stepDone[key];
        saveState();
        li.classList.toggle("is-done", cb.checked);
      });
      return li;
    }));

    const notesArea = el("textarea", { placeholder: "Beobachtungen, Geruch, Geschmack, Temperatur …", "aria-label": `Notizen zu ${p.name}` });
    notesArea.value = state.notes[p.id] || "";
    const notesStatus = el("div", { class: "notes-status" });
    let timer = null;
    notesArea.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (notesArea.value.trim()) state.notes[p.id] = notesArea.value; else delete state.notes[p.id];
        saveState();
        notesStatus.textContent = "Gespeichert.";
        setTimeout(() => { notesStatus.textContent = ""; }, 1500);
      }, 400);
    });

    const plan = el("div", null, [
      el("h4", { text: "Fahrplan" }),
      timeline,
      el("div", { class: "notes" }, [el("h4", { text: "Notizen" }), notesArea, notesStatus])
    ]);

    return el("article", { class: "product", id: `p-${p.id}`, style: `--jar:${productColor(p)}` }, [
      head,
      p.description ? el("p", { class: "product-desc", text: p.description }) : null,
      el("div", { class: "product-cols" }, [ingredients, plan])
    ]);
  }

  /* ---------- Löschen / Zurücksetzen ---------- */

  function deleteProduct(p) {
    if (!confirm(`«${p.name}» wirklich löschen?`)) return;
    if (isDefaultId(p.id)) {
      if (!state.hidden.includes(p.id)) state.hidden.push(p.id);
      delete state.overrides[p.id];
    } else {
      state.customProducts = state.customProducts.filter((x) => x.id !== p.id);
    }
    saveState();
    render();
  }

  function resetDefaults() {
    if (!confirm("Alle Standard-Produkte auf den Originalzustand zurücksetzen? Selbst angelegte Produkte, Häkchen und Notizen bleiben erhalten.")) return;
    state.hidden = [];
    state.overrides = {};
    saveState();
    render();
  }

  /* ---------- Backup ---------- */

  function exportBackup() {
    const data = Object.assign({ exportedAt: new Date().toISOString(), products: allProducts() }, state);
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `fermentations-logbuch-${toISO(today())}.json`;
    document.body.append(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  }

  function importBackup(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data || typeof data !== "object") throw new Error("Ungültiges Format");
        const next = defaultState();
        for (const k of Object.keys(next)) if (k in data) next[k] = data[k];
        state = next;
        saveState();
        render();
        alert("Backup importiert.");
      } catch (e) {
        alert("Die Datei konnte nicht gelesen werden: " + e.message);
      }
    };
    reader.readAsText(file);
  }

  /* ---------- Dialog: anlegen / bearbeiten ---------- */

  const dialog = $("#product-dialog");
  const form = $("#product-form");
  let editingId = null;

  function addIngredientRow(ing) {
    const row = $("#tpl-ingredient-row").content.firstElementChild.cloneNode(true);
    if (ing) { $(".ing-name", row).value = ing.name || ""; $(".ing-amount", row).value = ing.amount || ""; }
    $(".row-remove", row).addEventListener("click", () => row.remove());
    $("#ingredient-rows").append(row);
    return row;
  }

  function addStepRow(step) {
    const row = $("#tpl-step-row").content.firstElementChild.cloneNode(true);
    if (step) {
      $(".step-from", row).value = Number(step.from) + 1;
      $(".step-to", row).value = (step.to === null || step.to === undefined || step.to === "") ? "" : Number(step.to) + 1;
      $(".step-label", row).value = step.label || "";
      $(".step-title", row).value = step.title || "";
      $(".step-text", row).value = step.text || "";
    }
    $(".row-remove", row).addEventListener("click", () => row.remove());
    $("#step-rows").append(row);
    return row;
  }

  function renderSwatches(selected) {
    const box = $("#swatches");
    box.replaceChildren();
    PALETTE.forEach((c, i) => {
      const input = el("input", { type: "radio", name: "color", value: c.color, id: `sw-${i}` });
      input.checked = c.color === selected;
      box.append(el("label", { class: "swatch", style: `--sw:${c.color}`, title: c.name }, [input, el("span")]));
    });
  }

  function openDialog(product) {
    editingId = product ? product.id : null;
    form.reset();
    renderSwatches(product ? productColor(product) : PALETTE[0].color);
    $("#form-error").hidden = true;
    $("#ingredient-rows").replaceChildren();
    $("#step-rows").replaceChildren();
    $("#dialog-title").textContent = product ? `«${product.name}» bearbeiten` : "Neues Produkt anlegen";

    if (product) {
      form.name.value = product.name || "";
      form.type.value = product.type || "";
      form.start.value = product.start || "";
      form.ingredientsTitle.value = product.ingredientsTitle || "";
      form.description.value = product.description || "";
      form.hint.value = product.hint || "";
      (product.ingredients || []).forEach(addIngredientRow);
      (product.steps || []).forEach(addStepRow);
      if (!(product.ingredients || []).length) addIngredientRow();
      if (!(product.steps || []).length) addStepRow();
    } else {
      form.start.value = toISO(today());
      for (let i = 0; i < 3; i++) addIngredientRow();
      addStepRow({ from: 0, to: 0, title: "Ansetzen", text: "" });
      addStepRow();
      addStepRow();
    }
    dialog.showModal();
    form.name.focus();
  }

  function readForm() {
    const name = form.name.value.trim();
    if (!name) throw new Error("Bitte einen Namen angeben.");
    if (!form.start.value || isNaN(parseISO(form.start.value))) throw new Error("Bitte ein gültiges Startdatum angeben.");

    const ingredients = [...$("#ingredient-rows").children].map((row) => ({
      name: $(".ing-name", row).value.trim(),
      amount: $(".ing-amount", row).value.trim()
    })).filter((i) => i.name);

    const steps = [];
    for (const row of $("#step-rows").children) {
      const title = $(".step-title", row).value.trim();
      const fromRaw = $(".step-from", row).value.trim();
      const toRaw = $(".step-to", row).value.trim();
      if (!title && !fromRaw && !toRaw) continue; // leere Zeile
      if (!title) throw new Error("Jeder Schritt braucht einen Titel.");
      const from = Number(fromRaw);
      if (!fromRaw || !Number.isInteger(from) || from < 1) throw new Error(`Schritt «${title}»: «Tag von» muss eine Zahl ab 1 sein.`);
      let to = null;
      if (toRaw) {
        to = Number(toRaw);
        if (!Number.isInteger(to) || to < from) throw new Error(`Schritt «${title}»: «bis» muss grösser oder gleich «Tag von» sein.`);
        to -= 1;
      }
      const step = { from: from - 1, to, title, text: $(".step-text", row).value.trim() };
      const label = $(".step-label", row).value.trim();
      if (label) step.label = label;
      steps.push(step);
    }
    if (!steps.length) throw new Error("Bitte mindestens einen Schritt im Fahrplan angeben.");
    steps.sort((a, b) => a.from - b.from);

    return {
      id: editingId || uniqueId(slugify(name)),
      name,
      type: form.type.value.trim(),
      start: form.start.value,
      description: form.description.value.trim(),
      ingredientsTitle: form.ingredientsTitle.value.trim() || "Was ist drin",
      color: (form.querySelector('input[name="color"]:checked') || {}).value || PALETTE[0].color,
      ingredients,
      hint: form.hint.value.trim(),
      steps
    };
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let product;
    try {
      product = readForm();
    } catch (err) {
      const box = $("#form-error");
      box.textContent = err.message;
      box.hidden = false;
      return;
    }
    if (editingId && isDefaultId(editingId)) {
      state.overrides[editingId] = product;
    } else if (editingId) {
      state.customProducts = state.customProducts.map((p) => (p.id === editingId ? product : p));
    } else {
      state.customProducts.push(product);
    }
    saveState();
    dialog.close();
    render();
    const target = document.getElementById(`p-${product.id}`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#btn-new").addEventListener("click", () => openDialog(null));
  $("#btn-close").addEventListener("click", () => dialog.close());
  $("#btn-cancel").addEventListener("click", () => dialog.close());
  $("#btn-add-ingredient").addEventListener("click", () => addIngredientRow().querySelector("input").focus());
  $("#btn-add-step").addEventListener("click", () => addStepRow().querySelector("input").focus());
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

  $("#btn-export").addEventListener("click", exportBackup);
  $("#btn-import").addEventListener("click", () => $("#import-file").click());
  $("#import-file").addEventListener("change", (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) importBackup(f);
    e.target.value = "";
  });
  $("#btn-reset").addEventListener("click", resetDefaults);

  // Neu rendern, wenn der Tab nach Mitternacht wieder sichtbar wird.
  let renderedFor = toISO(today());
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && toISO(today()) !== renderedFor) { renderedFor = toISO(today()); render(); }
  });

  render();
})();
