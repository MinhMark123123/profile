// ============================================================
//  Shared helpers: storage, language, dates
// ============================================================
const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem("btt:" + key);
      return v === null ? fallback : JSON.parse(v);
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem("btt:" + key, JSON.stringify(value)); } catch {}
  },
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ---------- Language ----------
// ?lang=vi in the URL wins (handy for sharing), then the saved choice, then English
const urlLang = new URLSearchParams(location.search).get("lang");
let lang = (urlLang || store.get("lang", "en")) === "vi" ? "vi" : "en";
const langListeners = [];

// Localize a value that is either a string or { en, vi }
const L = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v);

// Translate a UI key, filling {placeholders}
function t(key, vars = {}) {
  const s = I18N[lang]?.[key] ?? I18N.en[key] ?? key;
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
}

function applyStatic() {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach((el) => (el.innerHTML = t(el.dataset.i18n)));
  $$("[data-i18n-ph]").forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

function setLang(next) {
  lang = next;
  store.set("lang", lang);
  applyStatic();
  langListeners.forEach((fn) => fn());
}
const onLangChange = (fn) => langListeners.push(fn);

document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-lang]");
  if (b) setLang(b.dataset.lang);
});

// ---------- Dates ----------
const locale = () => (lang === "vi" ? "vi-VN" : "en-GB");
const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const fmtDate = (d) => d.toLocaleDateString(locale(), { day: "2-digit", month: "2-digit", year: "numeric" });

function parseYM(s) {
  const m = /^(\d{4})-(\d{2})$/.exec(s || "");
  return m ? new Date(+m[1], +m[2] - 1, 1) : null;
}
function fmtYM(s) {
  if (s === null) return t("present");
  const d = parseYM(s);
  return d ? `${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}` : esc(s);
}
function monthsBetween(a, b) {
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
}
function addMonths(d, n) { const x = new Date(d); x.setMonth(x.getMonth() + n); return x; }
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }

// Inclusive month count for a job ("2023-03" → present)
function jobMonths(e) {
  const s = parseYM(e.start), en = e.end ? parseYM(e.end) : today();
  return s && en ? monthsBetween(s, en) + 1 : 0;
}

function durationText(months) {
  const y = Math.floor(months / 12), m = months % 12;
  const parts = lang === "vi"
    ? [y && `${y} năm`, m && `${m} tháng`]
    : [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`];
  return parts.filter(Boolean).join(" ") || (lang === "vi" ? "0 tháng" : "0 mos");
}
