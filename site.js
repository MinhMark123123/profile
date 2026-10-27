// ============================================================
//  Public site: profile (parallax) + printable CV
// ============================================================
const P = PROFILE;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const isPlaceholder = (s) => /\[.*\]/.test(String(s ?? ""));
const ph = (v) => { const s = L(v); return isPlaceholder(s) ? `<span class="placeholder">${esc(s)}</span>` : esc(s); };
const chips = (list, cls = "chip") => list.map((x) => `<span class="${cls}">${esc(L(x))}</span>`).join("");

const telHref = () => "tel:+84" + P.phone.replace(/\D/g, "").replace(/^0/, "");
const short = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// ---------- Routing (#cv shows the printable CV) ----------
function route() {
  const name = location.hash === "#cv" ? "cv" : "profile";
  $$(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
  $$(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.view === name));
  if (name === "cv") scrollTo(0, 0);
  onScroll();
}
addEventListener("hashchange", route);

// ---------- Profile ----------
function renderProfile() {
  const totalMonths = (() => {
    const first = P.experience.map((e) => parseYM(e.start)).filter(Boolean).sort((a, b) => a - b)[0];
    return first ? monthsBetween(first, today()) : 0;
  })();
  const projectCount = P.experience.reduce((n, e) => n + (e.projects?.length || 0), 0);
  const packageCount = (P.openSource || []).reduce((n, o) => n + (o.packages?.length || 0), 0);

  $("#heroName").textContent = P.name;
  $("#heroAvatarWrap").hidden = !P.avatar;
  if (P.avatar) $("#heroAvatar").src = P.avatar;
  $("#heroHeadline").textContent = L(P.headline);
  $("#heroStack").innerHTML = chips(P.stack, "chip chip-glass");
  $("#heroLocation").textContent = L(P.location);
  $("#heroEmail").href = "mailto:" + P.email;
  $("#heroLinkedin").href = P.linkedin;
  $("#heroGithub").href = P.github;
  $("#heroGithub").hidden = !P.github;

  $("#stats").innerHTML = [
    [Math.floor(totalMonths / 12) + "+", t("stat.years")],
    [P.experience.length, t("stat.companies")],
    [projectCount, t("stat.projects")],
    [packageCount, t("stat.packages")],
  ].map(([n, l]) => `<div class="stat reveal"><div class="stat-num">${n}</div><div class="stat-lbl">${l}</div></div>`).join("");

  $("#about").textContent = L(P.summary);

  $("#timeline").innerHTML = P.experience.map((e) => `
    <article class="xp reveal">
      <div class="xp-dot"></div>
      <div class="xp-card">
        <header class="xp-head">
          <div>
            <h3>${esc(e.company)}</h3>
            <div class="xp-title">${ph(e.title)}</div>
          </div>
          <div class="xp-when">${fmtYM(e.start)} – ${fmtYM(e.end)}<span>${durationText(jobMonths(e))}</span></div>
        </header>
        <ul class="xp-projects">
          ${(e.projects || []).map((p) => `<li><strong>${esc(L(p.name))}</strong><p>${ph(p.desc)}</p></li>`).join("")}
        </ul>
        <div class="chips">${chips(e.tech || [])}</div>
      </div>
    </article>`).join("");

  $("#openSource").innerHTML = (P.openSource || []).map((o) => `
    <article class="os-card reveal">
      <div class="os-head">
        <h3>${esc(L(o.name))}</h3>
        <div class="os-links">
          ${o.link ? `<a class="btn btn-ghost btn-sm" href="${esc(o.link)}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
          ${o.pub ? `<a class="btn btn-ghost btn-sm" href="${esc(o.pub)}" target="_blank" rel="noopener">pub.dev ↗</a>` : ""}
        </div>
      </div>
      <p>${esc(L(o.desc))}</p>
      <div class="pkg-grid">
        ${(o.packages || []).map((p) => `
          <a class="pkg" href="https://pub.dev/packages/${esc(p.name)}" target="_blank" rel="noopener">
            <code>${esc(p.name)}</code><span>${esc(L(p.desc))}</span>
          </a>`).join("")}
      </div>
    </article>`).join("");

  $("#skills").innerHTML = P.skills.map((g) => `
    <div class="skill-group reveal"><h3>${esc(L(g.group))}</h3><div class="chips">${chips(g.items)}</div></div>`).join("");

  $("#education").innerHTML = P.education.map((e) => `
    <div class="edu reveal"><div><h3>${esc(L(e.school))}</h3><p>${ph(e.degree)}</p></div><span class="xp-when">${esc(e.start)} – ${esc(e.end)}</span></div>`).join("");

  $("#contactLinks").innerHTML = `
    <a class="btn btn-primary" href="mailto:${esc(P.email)}">${esc(P.email)}</a>
    <a class="btn btn-ghost" href="${telHref()}">${esc(P.phone)}</a>
    <a class="btn btn-ghost" href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>
    ${P.github ? `<a class="btn btn-ghost" href="${esc(P.github)}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}`;

  observeReveals();
}

// ---------- Printable CV ----------
function renderCV() {
  const contact = [
    esc(L(P.location)),
    `<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>`,
    `<a href="${telHref()}">${esc(P.phone)}</a>`,
    P.website && `<a href="${esc(P.website)}">${esc(short(P.website))}</a>`,
    `<a href="${esc(P.linkedin)}">${esc(short(P.linkedin))}</a>`,
    P.github && `<a href="${esc(P.github)}">${esc(short(P.github))}</a>`,
  ].filter(Boolean).map((c) => `<span>${c}</span>`).join("");

  const jobs = P.experience.map((e) => `
    <div class="cv-job">
      <div class="cv-job-head"><strong>${ph(e.title)} · ${esc(e.company)}</strong><span>${fmtYM(e.start)} – ${fmtYM(e.end)}</span></div>
      <ul>${(e.cvProjects || e.projects || []).map((p) => `<li><strong>${esc(L(p.name))}</strong> — ${ph(p.desc)}</li>`).join("")}</ul>
      ${e.tech?.length ? `<div class="cv-tech">${e.tech.map(esc).join(" · ")}</div>` : ""}
    </div>`).join("");

  const os = (P.openSource || []).map((o) => `
    <div class="cv-job">
      <div class="cv-job-head"><strong>${esc(L(o.name))}</strong><span><a href="${esc(o.link)}">${esc(short(o.link))}</a></span></div>
      <p>${esc(L(o.desc))}</p>
      <div class="cv-tech">${(o.packages || []).map((p) => esc(p.name)).join(" · ")}</div>
    </div>`).join("");

  const showPhoto = P.avatar && store.get("cvPhoto", P.avatarOnCv);
  $("#cvPhoto").checked = !!showPhoto;
  $("#cvPhoto").closest(".toggle").hidden = !P.avatar;

  $("#cvDoc").innerHTML = `
    <header class="cv-header">
      ${showPhoto ? `<img class="cv-photo" src="${esc(P.avatar)}" alt="">` : ""}
      <div>
        <h1>${esc(P.name)}</h1>
        <div class="cv-headline">${esc(L(P.headline))} · ${P.stack.map(esc).join(" · ")}</div>
        <div class="cv-contact">${contact}</div>
      </div>
    </header>
    <h2>${t("cv.summary")}</h2><p>${esc(L(P.summary))}</p>
    <h2>${t("cv.experience")}</h2>${jobs}
    ${os ? `<h2>${t("cv.openSource")}</h2>${os}` : ""}
    <h2>${t("cv.skills")}</h2>
    <div class="cv-skills">${P.skills.map((g) => `<div class="cv-skill"><strong>${esc(L(g.group))}:</strong> ${g.items.map((x) => esc(L(x))).join(", ")}</div>`).join("")}</div>
    <h2>${t("cv.education")}</h2>
    ${P.education.map((e) => `<div class="cv-job-head"><strong>${ph(e.degree)} · ${esc(L(e.school))}</strong><span>${esc(e.start)} – ${esc(e.end)}</span></div>`).join("")}`;
}

// ---------- Motion: parallax, marquee, reveal ----------
const parallaxLayers = $$("[data-speed]");
const marquees = $$("[data-marquee]");
let pointer = { x: 0, y: 0 };
let ticking = false;

function onScroll() {
  if (reduceMotion || ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = scrollY;
    const heroVisible = y < innerHeight * 1.2 && $("#view-profile").classList.contains("active");
    if (heroVisible) {
      parallaxLayers.forEach((el) => {
        const speed = +el.dataset.speed, depth = +(el.dataset.depth || 0);
        el.style.transform = `translate3d(${pointer.x * depth}px, ${y * speed + pointer.y * depth}px, 0)`;
      });
      $(".hero-content").style.opacity = String(Math.max(0, 1 - y / (innerHeight * 0.7)));
    }
    marquees.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      // 0 → 1 while the band crosses the viewport; rows slide in opposite directions
      const progress = (innerHeight - r.top) / (innerHeight + r.height);
      const range = Math.max(0, el.scrollWidth - innerWidth);
      const x = +el.dataset.marquee > 0 ? -progress * range : -(1 - progress) * range;
      el.style.transform = `translate3d(${x}px, 0, 0)`;
    });
    $(".topbar").classList.toggle("scrolled", y > 24);
    ticking = false;
  });
}

let revealObserver;
function observeReveals() {
  const items = $$(".reveal:not(.in)");
  if (reduceMotion || !("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("in")); return; }
  revealObserver ??= new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  items.forEach((el) => revealObserver.observe(el));
}

addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", onScroll);
if (!reduceMotion && matchMedia("(pointer: fine)").matches) {
  $(".hero").addEventListener("pointermove", (e) => {
    pointer = { x: (e.clientX / innerWidth - 0.5) * 2, y: (e.clientY / innerHeight - 0.5) * 2 };
    onScroll();
  });
}

// ---------- Boot ----------
function renderAll() {
  document.title = `${P.name} — ${L(P.headline)}`;
  renderProfile();
  renderCV();
}
$("#printBtn").addEventListener("click", () => print());
$("#cvPhoto").addEventListener("change", (e) => { store.set("cvPhoto", e.target.checked); renderCV(); });
onLangChange(renderAll);
applyStatic();
renderAll();
route();
