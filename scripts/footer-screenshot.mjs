import { chromium } from "playwright";

const url = process.argv[2] ?? "http://127.0.0.1:4173/";
const out = process.argv[3] ?? "footer-preview.png";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => {
  const footer = document.querySelector("footer");
  footer?.scrollIntoView({ block: "end" });
});
await page.waitForTimeout(500);
const footer = page.locator("footer");
await footer.screenshot({ path: out });
await browser.close();
console.log(`Saved ${out}`);
