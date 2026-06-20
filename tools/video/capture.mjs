// Capture frames of an animated (SMIL) SVG via headless Chrome.
// The SMIL timeline is paused and stepped with setCurrentTime() so frames are
// deterministic. Output PNGs are then encoded to video by the Taskfile.
//
// Usage:  node capture.mjs <svg-path> <out-dir>
// Env:    CHROME (browser binary), FPS, START, DUR, WIDTH, HEIGHT
//
// The capture window [START, START+DUR) must sit in the animation's periodic
// regime so the resulting clip loops seamlessly (all SMIL periods divide DUR).

import puppeteer from 'puppeteer-core';
import { readFileSync, mkdirSync, rmSync } from 'node:fs';

const SVG_PATH = process.argv[2] || '../../static/media/hero-demo.svg';
const OUT = process.argv[3] || 'frames';

const CHROME = process.env.CHROME
  || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const W = +(process.env.WIDTH || 1280);
const H = +(process.env.HEIGHT || 720);
const FPS = +(process.env.FPS || 30);
const START = +(process.env.START || 2.6);
const DUR = +(process.env.DUR || 7.0);
const N = Math.round(DUR * FPS);

const SVG = readFileSync(SVG_PATH, 'utf8');
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const html = `<!doctype html><html><head><meta charset="utf-8">
<style>html,body{margin:0;padding:0;background:#0b0f17}svg{display:block;width:${W}px;height:${H}px}</style>
</head><body>${SVG}</body></html>`;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'],
});
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.querySelector('svg').pauseAnimations());

for (let i = 0; i < N; i++) {
  const t = START + i / FPS;
  await page.evaluate((tt) => document.querySelector('svg').setCurrentTime(tt), t);
  await new Promise(r => setTimeout(r, 8)); // let it paint
  await page.screenshot({
    path: `${OUT}/${String(i).padStart(4, '0')}.png`,
    clip: { x: 0, y: 0, width: W, height: H },
  });
}

await browser.close();
console.log(`captured ${N} frames (${W}x${H}, ${FPS}fps, [${START},${START + DUR})) -> ${OUT}`);
