import yaml from "js-yaml";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2019-02" -> "Feb 2019"; a missing value means the role is current.
function fmt(ym) {
  if (!ym) return "present";
  const [y, m] = String(ym).split("-");
  return `${MONTHS[parseInt(m, 10) - 1]} ${y}`;
}

// Months since January of startYear. The end of a period counts through its last month.
function monthIndex(ym, startYear, endInclusive) {
  let y, m;
  if (!ym) {
    const now = new Date();
    y = now.getFullYear();
    m = now.getMonth();
  } else {
    const p = String(ym).split("-");
    y = parseInt(p[0], 10);
    m = parseInt(p[1], 10) - 1;
  }
  return (y - startYear) * 12 + m + (endInclusive ? 1 : 0);
}

// Topics for a role = its own topics plus the topics of its projects, so a filter finds both.
function themesOf(role, projects) {
  const set = new Set(role.themes || []);
  for (const p of projects || []) {
    if (p.role === role.id) for (const t of p.themes || []) set.add(t);
  }
  return [...set].join(" ");
}

export default function (eleventyConfig) {
  // Content files are YAML so they are easy to edit by hand.
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addGlobalData("buildYear", new Date().getFullYear());

  eleventyConfig.addFilter("periodText", (p) => `${fmt(p.start)} to ${fmt(p.end)}`);
  eleventyConfig.addFilter("periodsText", (role) =>
    role.periods.map((p) => `${fmt(p.start)} to ${fmt(p.end)}`).join(" and ")
  );
  eleventyConfig.addFilter("forRole", (projects, roleId) => (projects || []).filter((p) => p.role === roleId));
  eleventyConfig.addFilter("themesOf", themesOf);

  // Publications grouped by year. 2024 and later get their own heading; older ones share one.
  eleventyConfig.addFilter("pubGroups", (pubs) => {
    const CUTOFF = 2024;
    const OLDER = "2023 and earlier";
    const groups = new Map();
    for (const p of pubs || []) {
      const label = p.year && p.year >= CUTOFF ? String(p.year) : OLDER;
      if (!groups.has(label)) groups.set(label, []);
      groups.get(label).push(p);
    }
    return [...groups.entries()]
      .sort((a, b) => (a[0] === OLDER) - (b[0] === OLDER) || Number(b[0]) - Number(a[0]))
      .map(([label, items]) => ({ label, items }));
  });

  // Everything the career timeline needs: one row per employer, bars placed in percent.
  eleventyConfig.addFilter("timeline", (roles, projects) => {
    const startYear = Math.min(...roles.flatMap((r) => r.periods.map((p) => parseInt(String(p.start).slice(0, 4), 10))));
    const endYear = new Date().getFullYear() + 1;
    const years = endYear - startYear;
    const total = years * 12;

    const ticks = [];
    for (let y = startYear; y < endYear; y++) ticks.push({ year: y, minor: (y - startYear) % 4 !== 0 });

    const rows = new Map();
    for (const r of roles) {
      if (!rows.has(r.row)) rows.set(r.row, { label: r.row, latest: 0, bars: [] });
      const row = rows.get(r.row);
      for (const p of r.periods) {
        const s = monthIndex(p.start, startYear, false);
        const e = monthIndex(p.end, startYear, true);
        row.latest = Math.max(row.latest, s);
        const when = `${fmt(p.start)} to ${fmt(p.end)}`;
        row.bars.push({
          id: r.id,
          label: r.bar || r.org,
          kind: r.kind,
          themes: themesOf(r, projects),
          left: ((s / total) * 100).toFixed(3),
          width: (((e - s) / total) * 100).toFixed(3),
          aria: `${r.title}, ${r.org}, ${when}. Jump to details.`,
          caption: `${r.title} at ${r.row}, ${when}. Select to see the details.`
        });
      }
    }
    const sorted = [...rows.values()].sort((a, b) => b.latest - a.latest);
    return { years, ticks, rows: sorted };
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
