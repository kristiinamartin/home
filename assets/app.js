/* Builds the page from assets/data.js. Plain JavaScript, no dependencies. */
(function () {
  "use strict";

  var ROLES = window.ROLES, THEMES = window.THEMES, PROFILE = window.PROFILE;

  // ---------- helpers ----------

  function el(tag, props) {
    var node = document.createElement(tag);
    props = props || {};
    Object.keys(props).forEach(function (k) {
      var v = props[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    });
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c === null || c === undefined || c === false) continue;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return node;
  }
  function $(id) { return document.getElementById(id); }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fmt(ym) {
    if (!ym) return "present";
    var p = ym.split("-");
    return MONTHS[parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function range(period) { return fmt(period[0]) + " to " + fmt(period[1]); }
  function rangeText(role) { return role.periods.map(range).join(" and "); }
  function themeLabel(id) {
    for (var i = 0; i < THEMES.length; i++) if (THEMES[i].id === id) return THEMES[i].label;
    return id;
  }

  // ---------- profile / hero ----------

  function renderProfile() {
    $("rail-name").textContent = PROFILE.name;
    $("rail-role").textContent = ROLES[0].title + ", " + ROLES[0].org;
    $("hero-headline").textContent = PROFILE.headline;
    $("hero-intro").textContent = PROFILE.intro;
    document.querySelector(".hero-name").textContent = PROFILE.name;

    var facts = $("facts");
    PROFILE.facts.forEach(function (f) {
      facts.appendChild(el("div", {}, el("dt", { text: f.label }), el("dd", { text: f.value })));
    });

    var links = $("rail-links");
    PROFILE.links.forEach(function (l) {
      links.appendChild(el("li", {}, el("a", { href: l.url, rel: "noopener", text: l.label })));
    });
  }

  // ---------- career ribbon ----------

  var START_YEAR = 2013;
  function monthIndex(ym, endInclusive) {
    var d;
    if (!ym) { var n = new Date(); d = (n.getFullYear() - START_YEAR) * 12 + n.getMonth(); }
    else { var p = ym.split("-"); d = (parseInt(p[0], 10) - START_YEAR) * 12 + (parseInt(p[1], 10) - 1); }
    return endInclusive ? d + 1 : d;
  }

  var ribbonBars = [];

  function renderRibbon() {
    var host = $("ribbon");
    var endYear = new Date().getFullYear() + 1;
    var total = (endYear - START_YEAR) * 12;

    var items = [];
    ROLES.forEach(function (r) {
      r.periods.forEach(function (p) {
        items.push({ role: r, s: monthIndex(p[0], false), e: monthIndex(p[1], true), period: p });
      });
    });
    items.sort(function (a, b) { return a.s - b.s; });

    var laneEnds = [];
    items.forEach(function (it) {
      var lane = 0;
      while (laneEnds[lane] !== undefined && laneEnds[lane] > it.s - 0.5) lane++;
      laneEnds[lane] = it.e;
      it.lane = lane;
    });

    var laneH = 2.1; // rem
    var lanes = el("div", { class: "ribbon-lanes", style: "height:" + (laneEnds.length * laneH + 0.25) + "rem" });

    var grid = el("div", { class: "ribbon-grid" });
    for (var y = START_YEAR; y <= endYear; y++) {
      var tick = el("div", { class: "ribbon-tick", style: "left:" + (((y - START_YEAR) * 12) / total) * 100 + "%" });
      if ((y - START_YEAR) % 2 === 0 && y < endYear) tick.appendChild(el("span", { text: String(y) }));
      grid.appendChild(tick);
    }
    lanes.appendChild(grid);

    items.forEach(function (it) {
      var role = it.role;
      var bar = el("button", {
        type: "button",
        class: "ribbon-bar",
        "data-kind": role.kind,
        "data-role": role.id,
        "aria-label": role.title + ", " + role.org + ", " + range(it.period),
        style:
          "left:" + (it.s / total) * 100 + "%;width:" + ((it.e - it.s) / total) * 100 + "%;top:" + (it.lane * laneH + 0.1) + "rem",
        text: role.short || role.org
      });
      var caption = role.title + ", " + role.org + " (" + range(it.period) + ")";
      function show() { $("ribbon-caption").textContent = caption; bar.classList.add("is-active"); }
      function hide() { $("ribbon-caption").textContent = "Select a bar to jump to that role."; bar.classList.remove("is-active"); }
      bar.setAttribute("data-label", role.short || role.org);
      bar.addEventListener("mouseenter", show);
      bar.addEventListener("focus", show);
      bar.addEventListener("mouseleave", hide);
      bar.addEventListener("blur", hide);
      bar.addEventListener("click", function () { jumpToRole(role.id); });
      ribbonBars.push(bar);
      lanes.appendChild(bar);
    });

    host.appendChild(lanes);
    fitLabels();
    window.addEventListener("resize", fitLabels);
  }

  // Bars too narrow for their label stay empty; the caption and aria-label still name them.
  function fitLabels() {
    ribbonBars.forEach(function (b) {
      b.textContent = b.getAttribute("data-label");
      if (b.scrollWidth > b.clientWidth + 1) b.textContent = "";
    });
  }

  // ---------- roles ----------

  var roleNodes = {}; // id -> {node, projects:[{node, themes}]}

  function bulletList(items, cls) {
    var ul = el("ul", { class: cls });
    items.forEach(function (t) { ul.appendChild(el("li", { text: t })); });
    return ul;
  }

  function renderRoles() {
    var host = $("roles");
    ROLES.forEach(function (role, idx) {
      var summary = el(
        "summary",
        {},
        el("div", {},
          el("h3", { class: "role-title", text: role.title }),
          el("p", { class: "role-org", text: role.org + (role.location ? ", " + role.location : "") })
        ),
        el("p", { class: "role-dates", text: rangeText(role) }),
        el("p", { class: "role-summary", text: role.summary })
      );

      var body = el("div", { class: "role-body" });
      if (role.bullets.length) body.appendChild(bulletList(role.bullets, "role-bullets"));

      var projNodes = [];
      if (role.projects.length) {
        body.appendChild(el("h4", { class: "projects-title", text: "Selected projects" }));
        var list = el("div", {});
        role.projects.forEach(function (p) {
          var inner = el("div", { class: "project-body" }, el("p", { text: p.text }));
          if (p.points) inner.appendChild(bulletList(p.points));
          var d = el(
            "details",
            { class: "project" },
            el("summary", {},
              el("div", { class: "project-title", text: p.title }),
              el("div", { class: "project-client", text: p.client })
            ),
            inner
          );
          projNodes.push({ node: d, themes: p.themes || [] });
          list.appendChild(d);
        });
        body.appendChild(list);
      }

      var node = el("details", { class: "role", id: "role-" + role.id, open: idx === 0 }, summary, body);
      roleNodes[role.id] = { node: node, role: role, projects: projNodes };
      host.appendChild(node);
    });
  }

  function jumpToRole(id) {
    setFilter(null);
    var r = roleNodes[id];
    if (!r) return;
    r.node.open = true;
    r.node.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    r.node.classList.add("is-flash");
    setTimeout(function () { r.node.classList.remove("is-flash"); }, 1400);
    if (history.replaceState) history.replaceState(null, "", "#role-" + id);
  }

  // ---------- filters ----------

  var activeTheme = null;

  function renderChips() {
    var host = $("chips");
    var all = el("button", { type: "button", class: "chip", "data-theme": "", "aria-pressed": "true", text: "All" });
    host.appendChild(all);
    THEMES.forEach(function (t) {
      host.appendChild(el("button", { type: "button", class: "chip", "data-theme": t.id, "aria-pressed": "false", text: t.label }));
    });
    host.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      setFilter(b.getAttribute("data-theme") || null);
    });
  }

  function setFilter(themeId) {
    activeTheme = themeId;
    Array.prototype.forEach.call(document.querySelectorAll(".chip"), function (c) {
      var on = (c.getAttribute("data-theme") || null) === themeId;
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });

    var shown = 0;
    ROLES.forEach(function (role) {
      var r = roleNodes[role.id];
      var roleMatch = !themeId || role.themes.indexOf(themeId) !== -1;
      var matchingProjects = r.projects.filter(function (p) { return p.themes.indexOf(themeId) !== -1; });
      var visible = !themeId || roleMatch || matchingProjects.length > 0;
      r.node.hidden = !visible;
      if (visible) shown++;

      r.projects.forEach(function (p) {
        var showProject = !themeId || matchingProjects.length === 0 || p.themes.indexOf(themeId) !== -1;
        p.node.hidden = !showProject;
      });
      if (themeId && visible) r.node.open = true;
    });

    ribbonBars.forEach(function (b) {
      var role = roleNodes[b.getAttribute("data-role")].role;
      var dim = themeId && role.themes.indexOf(themeId) === -1 &&
        !roleNodes[role.id].projects.some(function (p) { return p.themes.indexOf(themeId) !== -1; });
      b.classList.toggle("is-dim", !!dim);
    });

    $("filter-note").textContent = themeId
      ? "Showing " + shown + " of " + ROLES.length + " roles for “" + themeLabel(themeId) + "”, with the most relevant projects."
      : "";
  }

  function setAllOpen(open) {
    Array.prototype.forEach.call(document.querySelectorAll("#roles details"), function (d) { d.open = open; });
  }

  // ---------- publications ----------

  function renderPublications() {
    var host = $("pubs");
    var count = 0;
    window.PUBLICATION_GROUPS.forEach(function (group) {
      var items = group.items.filter(function (i) { return !i.draft; });
      if (!items.length) return;
      host.appendChild(el("h3", { class: "pub-year", text: group.label }));
      items.forEach(function (p) {
        count++;
        var authors = el("p", { class: "pub-authors" });
        p.authors.forEach(function (a, i) {
          authors.appendChild(a === "Martin, K." ? el("strong", { text: a }) : document.createTextNode(a));
          if (i < p.authors.length - 1) authors.appendChild(document.createTextNode("; "));
        });
        var title = p.link
          ? el("a", { href: p.link, rel: "noopener", text: p.title })
          : document.createTextNode(p.title);
        var metaText = (p.year ? "(" + p.year + ") " : "") + p.publisher;
        var meta = el("p", { class: "pub-meta" }, metaText.trim());
        if (p.forthcoming) meta.appendChild(el("span", { class: "pub-tag", text: "forthcoming" }));
        host.appendChild(el("article", { class: "pub" }, p.authors.length ? authors : null, el("p", { class: "pub-title" }, title), meta));
      });
    });
    $("pub-lede").textContent =
      count + " reports, policy briefs and studies, co-authored unless stated. Items marked forthcoming are not yet published.";
  }

  // ---------- skills, reach, education, contact ----------

  function renderSkills() {
    var grid = $("skills-grid");
    window.SKILLS.forEach(function (s) {
      var ul = el("ul", {});
      s.items.forEach(function (i) { ul.appendChild(el("li", { text: i })); });
      grid.appendChild(el("div", { class: "skill" }, el("h3", { text: s.area }), ul));
    });

    var geo = $("geo");
    window.GEOGRAPHIES.forEach(function (g) {
      geo.appendChild(el("div", {}, el("dt", { text: g.region }), el("dd", { text: g.places.join(", ") })));
    });

    var clients = $("clients");
    window.CLIENTS.forEach(function (c) { clients.appendChild(el("li", { text: c })); });
  }

  function renderEducation() {
    var edu = $("edu");
    window.EDUCATION.forEach(function (e) {
      edu.appendChild(
        el("div", { class: "edu-item" },
          el("p", { class: "edu-title", text: e.title }),
          el("p", { class: "edu-meta", text: e.where + ", " + e.years }),
          e.text ? el("p", { text: e.text }) : null
        )
      );
    });
    var certs = $("certs");
    window.CERTIFICATES.forEach(function (c) { certs.appendChild(el("li", { text: c })); });
  }

  function renderContact() {
    var list = $("contact-list");
    PROFILE.links.forEach(function (l) {
      list.appendChild(el("li", {}, el("a", { href: l.url, rel: "noopener", text: l.label })));
    });
    if (PROFILE.email) list.appendChild(el("li", {}, el("a", { href: "mailto:" + PROFILE.email, text: PROFILE.email })));
    $("foot-text").textContent = "© " + new Date().getFullYear() + " " + PROFILE.name + ". " + PROFILE.location + ".";
  }

  // ---------- navigation highlight ----------

  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll("#nav a"));
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          var a = map[en.target.id];
          if (a) a.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.keys(map).forEach(function (id) { var s = $(id); if (s) obs.observe(s); });
  }

  // ---------- init ----------

  renderProfile();
  renderRibbon();
  renderChips();
  renderRoles();
  renderPublications();
  renderSkills();
  renderEducation();
  renderContact();
  initScrollSpy();

  $("expand-all").addEventListener("click", function () { setAllOpen(true); });
  $("collapse-all").addEventListener("click", function () { setAllOpen(false); });

  // Print a fully expanded, unfiltered page.
  window.addEventListener("beforeprint", function () { setFilter(null); setAllOpen(true); });

  if (location.hash.indexOf("#role-") === 0) {
    var id = location.hash.slice(6);
    if (roleNodes[id]) { roleNodes[id].node.open = true; roleNodes[id].node.scrollIntoView(); }
  }
})();
