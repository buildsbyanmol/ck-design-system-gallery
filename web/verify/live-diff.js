/**
 * Computed-style diff: DS components vs cashkaro.com, at 375 and 1440.
 *
 * LIVE holds values read from https://cashkaro.com on 2026-10-14 with getComputedStyle at those
 * viewport widths (header, search, category circle, section title, store card, ribbon, cashback
 * button, flash title, Grab Deal button, footer, bottom nav).
 * DS side renders each component's first story in a hidden same-origin iframe of the same width
 * (so Tailwind breakpoints apply) and reads the same properties.
 *
 * Run from the gallery origin:  (await import('/verify/live-diff.js')).run()
 * Not covered: widths of flex-shrunk nodes, the server-themed countdown colours, hover/focus states,
 * desktop StoreCard (the 1440 homepage renders no store rail), InstallAppBanner, BannerCarousel, SideMenu, Icon glyphs.
 */
const T = "rgba(0, 0, 0, 0)", INK = "rgb(38, 38, 38)", W = "rgb(255, 255, 255)", G = "rgb(92, 92, 92)", Z = "0px 0px 0px 0px";
const BLUE = "rgb(0, 54, 218)";
// [height, fontSize, fontWeight, lineHeight, color, background, radius, padding]; null = not compared
const LIVE = {
  1440: {
    header: [82, "16px", "400", "24px", INK, W, "0px", Z],
    search: [50, "14px", "500", "20px", INK, "rgb(245, 247, 249)", "12px", "8px 12px 8px 65px"],
    catCircle: [136, null, null, null, null, T, "9999px", Z],
    catLabel: [22, "18px", "600", "22px", G, T, "0px", Z],
    sectionTitle: [24, "24px", "700", "24px", "rgb(0, 0, 0)", T, "0px", "0px 40px 0px 40px"],
    flashTitle: [40, "56px", "800", "40px", W, T, "0px", Z],
    grab: [36, "16px", "600", "24px", BLUE, W, "8px", "6px 16px 6px 16px"],
    footer: [null, "16px", "400", "24px", W, G, "0px", "32px 160px 32px 160px"],
    footerLink: [21, "14px", "400", "21px", W, T, "0px", Z],
    footerTitle: [16, "16px", "500", "16px", W, T, "0px", Z],
  },
  375: {
    header: [56, "16px", "400", "24px", INK, W, "0px", Z],
    search: [48, "14px", "500", "20px", INK, "rgb(245, 247, 249)", "8px", "8px 16px 8px 40px"],
    catCircle: [73, null, null, null, null, T, "9999px", Z],
    catLabel: [16, "12px", "600", "16px", G, T, "0px", Z],
    sectionTitle: [24, "16px", "800", "24px", "rgb(0, 0, 0)", T, "0px", "0px 16px 0px 16px"],
    storeCard: [160, null, null, null, null, W, "8px", "0px 0px 8px 0px"],
    storeArea: [110, null, null, null, null, T, "0px", Z],
    ribbon: [20, null, null, null, null, "rgba(255, 53, 53, 0.12)", "8px", "0px 16px 0px 16px"],
    ribbonText: [15, "10px", "500", "15px", "rgb(228, 0, 82)", T, "0px", Z],
    storeLogo: [46, null, null, null, null, T, "0px", Z],
    cashbackBtn: [40, "10px", "600", "14px", W, BLUE, "8px", "4px 12px 4px 12px"],
    flashTitle: [33, "33.63px", "900", "33px", W, T, "0px", Z],
    footer: [null, "16px", "400", "24px", W, G, "0px", "24px 0px 24px 0px"],
    bottomNavUl: [65, "16px", "400", "24px", INK, T, "0px", "6px 0px 12px 0px"],
    bottomNavItem: [47, "10px", "600", "15px", BLUE, T, "0px", Z],
    bottomNavIcon: [24, "24px", "400", "24px", BLUE, T, "0px", Z],
  },
};
// key -> [book id, story index, selector, nth]
const DS = {
  header: ["Header", 0, "header", 0], search: ["Header", 0, "input", 0],
  catCircle: ["CategoryCircle", 0, "button > span:first-child", 0], catLabel: ["CategoryCircle", 0, "button > span:nth-child(2)", 0],
  sectionTitle: ["SectionHeader", 0, "h2", 0],
  storeCard: ["StoreCard", 0, "div.rounded-lg.bg-white", 0], storeArea: ["StoreCard", 0, "div.rounded-lg.bg-white > div:first-child", 0],
  ribbon: ["StoreCard", 0, '[class*="bg-ck-vertical-store-labelBg"]', 0], ribbonText: ["StoreCard", 0, '[class*="bg-ck-vertical-store-labelBg"] p', 0],
  storeLogo: ["StoreCard", 0, "img", 0], cashbackBtn: ["StoreCard", 0, "button", 0],
  flashTitle: ["FlashDeals", 0, "h2", 0], grab: ["FlashDeals", 0, "button", 0],
  footer: ["Footer", 0, "footer", 0], footerLink: ["Footer", 0, "footer a", 0], footerTitle: ["Footer", 0, "footer p", 0],
  bottomNavUl: ["BottomNav", 0, "ul", 0], bottomNavItem: ["BottomNav", 0, "li button", 0], bottomNavIcon: ["BottomNav", 0, "li button i", 0],
};
// Geometry the style diff cannot see: [width, y relative to the preview top]. Read from the live site
// with getBoundingClientRect (375: search input 359 wide, 56px below the top of the header).
const GEOM = { 375: { search: [359, 56] }, 1440: { search: [584, null] } };
const NAMES = ["height", "fontSize", "weight", "lineHeight", "color", "background", "radius", "padding"];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function measure(width, key) {
  const [id, story, sel, nth] = DS[key];
  const f = document.createElement("iframe");
  f.style.cssText = `position:absolute;left:0;top:0;width:${width}px;height:1400px;border:0;visibility:hidden`;
  f.src = `?preview=${id}&story=${story}`;
  document.body.appendChild(f);
  await new Promise((r) => (f.onload = r));
  await wait(700);
  const e = [...f.contentDocument.querySelectorAll(sel)].filter((x) => x.getBoundingClientRect().width > 0)[nth]; // visible only
  let res = null;
  if (e) {
    const c = f.contentWindow.getComputedStyle(e);
    const r = e.getBoundingClientRect();
    res = [Math.round(r.height * 10) / 10, c.fontSize, c.fontWeight, c.lineHeight, c.color, c.backgroundColor, c.borderTopLeftRadius, [c.paddingTop, c.paddingRight, c.paddingBottom, c.paddingLeft].join(" ")];
  }
  if (e) res.geom = [Math.round(e.getBoundingClientRect().width), Math.round(e.getBoundingClientRect().top)];
  f.remove();
  return res;
}

export async function run() {
  const diffs = [];
  let checked = 0, matched = 0;
  for (const width of [375, 1440]) {
    for (const key of Object.keys(LIVE[width])) {
      const got = await measure(width, key);
      if (!got) { diffs.push(`${width} ${key}: DS element not found`); continue; }
      LIVE[width][key].forEach((want, i) => {
        if (want === null) return;
        checked++;
        if (String(got[i]) === String(want)) matched++;
        else diffs.push(`${width} ${key}.${NAMES[i]}: live=${want} ds=${got[i]}`);
      });
      const g = GEOM[width][key];
      if (g) {
        [["width", 0], ["y", 1]].forEach(([n, i]) => {
          if (g[i] === null) return;
          checked++;
          if (got.geom[i] === g[i]) matched++;
          else diffs.push(`${width} ${key}.${n}: live=${g[i]} ds=${got.geom[i]}`);
        });
      }
    }
  }
  return { checked, matched, diffs };
}
