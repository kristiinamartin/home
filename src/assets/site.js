/* Small enhancements. The pages are complete HTML without this file; it adds
   the topic filter, expand/collapse, timeline captions and opening a role from a link. */
(function () {
  "use strict";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function has(el, attr, value) { return (el.getAttribute(attr) || "").split(" ").indexOf(value) !== -1; }

  // ---------- timeline ----------

  var bars = $$(".tl-bar");
  var caption = $("#timeline-caption");
  var defaultCaption = caption ? caption.textContent : "";

  bars.forEach(function (bar) {
    var text = bar.getAttribute("data-caption");
    function show() { if (caption) caption.textContent = text; }
    function hide() { if (caption) caption.textContent = defaultCaption; }
    bar.addEventListener("mouseenter", show);
    bar.addEventListener("focus", show);
    bar.addEventListener("mouseleave", hide);
    bar.addEventListener("blur", hide);
  });

  // A bar too narrow for its label stays empty; its row name, caption and aria-label still name it.
  function fitLabels() {
    bars.forEach(function (b) {
      b.textContent = b.getAttribute("data-label");
      if (b.scrollWidth > b.clientWidth + 1) b.textContent = "";
    });
  }
  if (bars.length) {
    fitLabels();
    window.addEventListener("resize", fitLabels);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitLabels);
  }

  // ---------- topic filter (Experience page) ----------

  var chipHost = $(".chips");
  var items = $$("[data-filter-item]");
  var note = $("#filter-note");

  function applyFilter(theme) {
    $$(".chip").forEach(function (c) {
      var on = (c.getAttribute("data-theme") || null) === theme;
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });

    var shown = 0;
    items.forEach(function (it) {
      var show = !theme || has(it, "data-themes", theme);
      it.hidden = !show;
      if (show) shown++;

      // Inside a matching role, show only the projects on that topic (all of them if none match).
      var subs = $$("[data-sub-themes]", it);
      var matching = theme ? subs.filter(function (s) { return has(s, "data-sub-themes", theme); }) : [];
      subs.forEach(function (s) {
        s.hidden = !!theme && matching.length > 0 && !has(s, "data-sub-themes", theme);
      });
      if (theme && show) it.open = true;
    });

    bars.forEach(function (b) {
      b.classList.toggle("is-dim", !!theme && !has(b, "data-themes", theme));
    });

    if (note) {
      var chip = theme ? $('.chip[data-theme="' + theme + '"]') : null;
      note.textContent = theme
        ? "Showing " + shown + " of " + items.length + " " + (chipHost.getAttribute("data-noun") || "items") +
          " for “" + (chip ? chip.textContent : theme) + "”, with the matching projects."
        : "";
    }
  }

  if (chipHost) {
    chipHost.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (b) applyFilter(b.getAttribute("data-theme") || null);
    });
  }

  // ---------- expand / collapse ----------

  $$("[data-expand]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("data-expand") === "open";
      $$("#roles details").forEach(function (d) { if (!d.hidden) d.open = open; });
    });
  });

  // ---------- open the role or project a link points at ----------

  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    if (chipHost && (target.hidden || (target.closest("[hidden]")))) applyFilter(null);
    var node = target;
    while (node) {
      if (node.tagName === "DETAILS") node.open = true;
      node = node.parentElement;
    }
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();

  // ---------- print: everything open and unfiltered ----------

  window.addEventListener("beforeprint", function () {
    if (chipHost) applyFilter(null);
    $$("details").forEach(function (d) { d.open = true; });
  });
})();
