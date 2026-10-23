/* ============================================================
   Plantolex — application script
   File: app.js   (Batch 0)
   Runs on index.html and 404.html. Every renderer guards against
   missing elements, so shared use of this file is safe.
   Sections: helpers · language · theme · navigation · directory ·
             search · motion · keyboard · init
   ============================================================ */
"use strict";

/* ---------- helpers ---------- */
const $ = (id) => document.getElementById(id);
const t = (k) => (UI[lang] && UI[lang][k]) !== undefined ? UI[lang][k] : k;
const D = document.documentElement;
let lang = "ar";
try { lang = localStorage.getItem("plx-lang") === "en" ? "en" : "ar"; } catch (e) { /* storage may be blocked */ }
let filterType = "all";

function el(tag, cls, txt) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt !== undefined) e.textContent = txt;
  return e;
}
function svg(path) {
  const ns = "http://www.w3.org/2000/svg";
  const s = document.createElementNS(ns, "svg");
  s.setAttribute("viewBox", "0 0 24 24");
  s.setAttribute("aria-hidden", "true");
  const p = document.createElementNS(ns, "path");
  p.setAttribute("d", path);
  s.appendChild(p);
  return s;
}

/* Arabic + Latin normalization for search */
function norm(s) {
  return String(s).toLowerCase().normalize("NFKD")
    .replace(/[\u064B-\u0652\u0670\u0640]/g, "")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u0623\u0625\u0622]/g, "\u0627")
    .replace(/\u0649/g, "\u064A")
    .replace(/\u0629/g, "\u0647")
    .trim();
}

/* ---------- language ---------- */
function applyLang() {
  D.lang = lang;
  D.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((n) => {
    n.innerHTML = t(n.dataset.i18n);
  });

  const q = $("q");
  if (q) { q.placeholder = t("searchPh"); q.setAttribute("aria-label", t("searchAria")); }
  const langBtn = $("langBtn");
  if (langBtn) { langBtn.textContent = t("langBtn"); langBtn.setAttribute("aria-label", t("langLabel")); }
  const menuBtn = $("menuBtn");
  if (menuBtn) {
    const open = $("nav") && $("nav").classList.contains("open");
    menuBtn.setAttribute("aria-label", open ? t("closeMenu") : t("menu"));
  }
  document.title = t("pageTitle");
  const yr = $("yr");
  if (yr) yr.textContent = String(new Date().getFullYear());

  renderDropdown();
  renderCategories();
  renderHeroCard();
  updateThemeLabel();

  if ($("results") && !$("results").hidden && $("q")) runSearch($("q").value);

  try { localStorage.setItem("plx-lang", lang); } catch (e) { /* private mode */ }
}

/* ---------- theme ---------- */
function updateThemeLabel() {
  const b = $("themeBtn");
  if (!b) return;
  const dark = D.getAttribute("data-theme") === "dark";
  const label = dark ? t("themeLight") : t("themeDark");
  b.setAttribute("aria-label", label);
  b.title = label;
}
function setTheme(th, save) {
  D.setAttribute("data-theme", th);
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.content = th === "dark" ? "#08110c" : "#14301f";
  updateThemeLabel();
  if (save) { try { localStorage.setItem("plx-theme", th); } catch (e) {} }
}

/* ---------- navigation ---------- */
function initNav() {
  const menuBtn = $("menuBtn"), nav = $("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? t("closeMenu") : t("menu"));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", t("menu"));
    }));
  }

  const dd = $("dd"), ddBtn = $("ddBtn");
  if (dd && ddBtn) {
    ddBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("open");
      ddBtn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", (e) => {
      if (dd.classList.contains("open") && !dd.contains(e.target)) {
        dd.classList.remove("open");
        ddBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
}

function renderDropdown() {
  const box = $("ddMenu");
  if (!box || typeof CATEGORIES === "undefined") return;
  box.replaceChildren();
  CATEGORIES.forEach((c) => {
    const a = document.createElement("a");
    a.href = "#cat-" + c.id;
    const name = el("span", "", c[lang].name);
    const small = el("small", "", c[lang].summary);
    a.append(name, small);
    a.addEventListener("click", () => {
      const dd = $("dd");
      if (dd) { dd.classList.remove("open"); const b = $("ddBtn"); if (b) b.setAttribute("aria-expanded", "false"); }
      openCategory(c.id);
    });
    box.appendChild(a);
  });
}

/* ---------- hero directory card ---------- */
function renderHeroCard() {
  if (typeof CATEGORIES === "undefined") return;
  const subs = CATEGORIES.reduce((n, c) => n + c.subs.length, 0);
  const sc = $("statCats"), ss = $("statSubs"), sl = $("statLangs");
  if (sc) sc.textContent = String(CATEGORIES.length);
  if (ss) ss.textContent = String(subs);
  if (sl) sl.textContent = "2";

  const box = $("heroLinks");
  if (!box) return;
  box.replaceChildren();
  const sample = ["crop-science", "plant-health", "ipm", "soil", "irrigation", "hydroponics"];
  sample.forEach((id) => {
    const c = CATEGORIES.find((x) => x.id === id);
    if (!c) return;
    const a = document.createElement("a");
    a.href = "#cat-" + c.id;
    a.append(el("span", "", c[lang].name), el("i", "", c.subs.length + " " + t("subCountWord")));
    a.addEventListener("click", () => openCategory(c.id));
    box.appendChild(a);
  });
}

/* ---------- category directory ---------- */
function renderCategories() {
  const grid = $("catGrid");
  if (!grid || typeof CATEGORIES === "undefined") return;
  grid.replaceChildren();

  CATEGORIES.forEach((c, idx) => {
    const art = el("article", "cat");
    art.id = "cat-" + c.id;

    const head = el("button", "cat-head");
    head.type = "button";
    const panelId = "subs-" + c.id;
    head.setAttribute("aria-expanded", "false");
    head.setAttribute("aria-controls", panelId);

    const tile = el("span", "tile");
    tile.style.setProperty("--h", String(105 + (idx * 17) % 220));
    tile.appendChild(svg(ICONS[c.icon] || ICONS.leaf));
    tile.setAttribute("aria-hidden", "true");

    const st = el("span", "st", t("stStructure"));
    const h3 = el("h3", "", c[lang].name);
    const p = el("p", "desc", c[lang].summary);
    const meta = el("span", "cat-meta");
    const count = el("span", "", c.subs.length + " " + t("subCountWord"));
    const chev = el("span", "chev");
    chev.setAttribute("aria-hidden", "true");
    meta.append(count, chev);

    head.append(tile, st, h3, p, meta);

    const panel = el("div", "subs");
    panel.id = panelId;
    panel.hidden = true;
    panel.appendChild(el("span", "subs-label", t("subsLabel")));
    const ul = el("ul", "sublist");
    c.subs.forEach((s) => ul.appendChild(el("li", "", s[lang === "ar" ? 1 : 2])));
    panel.appendChild(ul);

    head.addEventListener("click", () => togglePanel(c.id));
    art.append(head, panel);
    grid.appendChild(art);
  });
}

function togglePanel(id, forceOpen) {
  const art = $("cat-" + id);
  if (!art) return false;
  const head = art.querySelector(".cat-head");
  const panel = art.querySelector(".subs");
  const wasHidden = panel.hidden;
  panel.hidden = forceOpen ? false : !wasHidden;
  const expanded = !panel.hidden;
  head.setAttribute("aria-expanded", String(expanded));
  art.classList.toggle("open", expanded);
  return expanded;
}
function openCategory(id) {
  togglePanel(id, true);
  const art = $("cat-" + id);
  if (art) art.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- search ---------- */
function buildIndex() {
  const idx = [];
  if (typeof CATEGORIES === "undefined") return idx;
  CATEGORIES.forEach((c, order) => {
    idx.push({
      kind: "cat", order: order, catId: c.id,
      name: c[lang].name, other: c[lang === "ar" ? "en" : "ar"].name,
      desc: c[lang].summary, kw: c.kw, id: c.id
    });
    c.subs.forEach((s, i) => {
      idx.push({
        kind: "sub", order: order, catId: c.id, subIndex: i,
        name: s[lang === "ar" ? 1 : 2], other: s[lang === "ar" ? 2 : 1],
        desc: c[lang].name, kw: c.kw + " " + c[lang].name + " " + (lang === "ar" ? c.en.summary : c.ar.summary),
        id: c.id + "/" + s[0]
      });
    });
  });
  return idx;
}

function scoreItem(q, it) {
  const name = norm(it.name), other = norm(it.other), kw = norm(it.kw),
        desc = norm(it.desc), idn = norm(it.id);
  if (name === q || other === q) return 100;
  if (name.startsWith(q) || other.startsWith(q)) return 75;
  if (name.includes(q) || other.includes(q)) return 60;
  const toks = q.split(/\s+/).filter(Boolean);
  if (!toks.length) return -1;
  const inName = toks.every((k) => name.includes(k) || other.includes(k));
  if (inName) return 45;
  const inKw = toks.every((k) => kw.includes(k) || name.includes(k) || other.includes(k));
  if (inKw) return 30;
  const wide = name + " " + other + " " + kw + " " + desc + " " + idn;
  if (toks.every((k) => wide.includes(k))) return 15;
  return -1;
}

function runSearch(raw) {
  const box = $("results"), list = $("rlist"), sum = $("rsum");
  if (!box || !list || !sum) return;
  list.replaceChildren();
  box.hidden = false;

  const q = norm(raw);
  if (!q) { sum.textContent = t("rEmpty"); return; }

  const hits = buildIndex()
    .map((it) => ({ it: it, s: scoreItem(q, it) }))
    .filter((h) => h.s >= 0)
    .filter((h) => filterType === "all" ||
      (filterType === "cat" && h.it.kind === "cat") ||
      (filterType === "sub" && h.it.kind === "sub"))
    .sort((a, b) => b.s - a.s ||
      (a.it.kind === "cat" ? 0 : 1) - (b.it.kind === "cat" ? 0 : 1) ||
      a.it.order - b.it.order);

  sum.textContent = hits.length ? t("rCount") + hits.length : t("rEmpty");

  hits.forEach((h) => {
    const it = h.it;
    const item = el("div", "ritem");
    item.appendChild(el("span", "pill", it.kind === "cat" ? t("typeCat") : t("typeSub")));
    item.appendChild(el("h3", "", it.name));
    item.appendChild(el("p", "", it.kind === "cat" ? it.desc : it.desc));
    const btn = el("button", "rlink", t("rShow"));
    btn.type = "button";
    btn.addEventListener("click", () => {
      box.hidden = true;
      openCategory(it.catId);
      if (it.kind === "sub") highlightSub(it.catId, it.subIndex);
    });
    item.appendChild(btn);
    list.appendChild(item);
  });

  if (!hits.length) list.appendChild(el("div", "empty", t("rEmpty")));
}

function highlightSub(catId, subIndex) {
  const art = $("cat-" + catId);
  if (!art) return;
  const li = art.querySelectorAll(".sublist li")[subIndex];
  if (!li) return;
  li.style.outline = "3px solid var(--gold)";
  li.style.outlineOffset = "2px";
  setTimeout(() => { li.style.outline = ""; li.style.outlineOffset = ""; }, 2400);
}

function initSearch() {
  const form = $("sform"), q = $("q");
  if (form && q) {
    form.addEventListener("submit", (e) => { e.preventDefault(); runSearch(q.value); jumpToResults(); });
  }
  const clear = $("clear");
  if (clear) clear.addEventListener("click", () => {
    if (q) { q.value = ""; q.focus(); }
    if ($("results")) $("results").hidden = true;
  });

  document.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => {
    if (!q) return;
    q.value = c.dataset.q;
    runSearch(c.dataset.q);
    jumpToResults();
  }));

  document.querySelectorAll("#rfilters .rf").forEach((b) => b.addEventListener("click", () => {
    filterType = b.dataset.f;
    document.querySelectorAll("#rfilters .rf").forEach((x) =>
      x.setAttribute("aria-pressed", String(x.dataset.f === filterType)));
    if (q && q.value) runSearch(q.value);
  }));
}
function jumpToResults() {
  const box = $("results");
  if (box) box.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- motion: reveal + progress + active nav ---------- */
const io = ("IntersectionObserver" in window) ? new IntersectionObserver((es) => {
  es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }) : null;

function reveal() {
  const items = document.querySelectorAll(".rv:not(.in)");
  if (!io) { items.forEach((i) => i.classList.add("in")); return; }
  items.forEach((i) => io.observe(i));
}

function initProgress() {
  const bar = $("bar");
  const links = Array.prototype.slice.call(document.querySelectorAll("nav.main a[href^='#']"));
  const secs = links.map((a) => $(a.getAttribute("href").slice(1)));
  let tick = false;
  function upd() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, h.scrollTop / max) : 0) + ")";
    let cur = -1;
    secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 140) cur = i; });
    links.forEach((a, i) => a.classList.toggle("on", i === cur));
    tick = false;
  }
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
}

/* ---------- keyboard ---------- */
function initKeyboard() {
  document.addEventListener("keydown", (e) => {
    const tag = (document.activeElement || {}).tagName;
    if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
      const q = $("q");
      if (q) { e.preventDefault(); q.focus(); window.scrollTo({ top: 0, behavior: "smooth" }); }
    }
    if (e.key === "Escape") {
      const dd = $("dd");
      if (dd && dd.classList.contains("open")) {
        dd.classList.remove("open");
        const b = $("ddBtn"); if (b) b.setAttribute("aria-expanded", "false");
        return;
      }
      const nav = $("nav");
      if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");
        const mb = $("menuBtn"); if (mb) { mb.setAttribute("aria-expanded", "false"); mb.setAttribute("aria-label", t("menu")); }
        return;
      }
      const res = $("results");
      if (res && !res.hidden) res.hidden = true;
    }
  });
}

/* ---------- init ---------- */
function init() {
  const themeBtn = $("themeBtn");
  if (themeBtn) themeBtn.addEventListener("click", () =>
    setTheme(D.getAttribute("data-theme") === "dark" ? "light" : "dark", true));
  const langBtn = $("langBtn");
  if (langBtn) langBtn.addEventListener("click", () => { lang = lang === "ar" ? "en" : "ar"; applyLang(); });

  initNav();
  initSearch();
  initKeyboard();
  applyLang();
  initProgress();
  D.classList.add("js");
  reveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
