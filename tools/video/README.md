# Hero video regeneration

The landing hero plays `static/media/demo.mp4` / `demo.webm`. Both are **generated**
from the in-theme animated SVG `static/media/hero-demo.svg` — edit the SVG, then
regenerate.

## Regenerate

From the repo root:

```sh
task video
```

That runs the pipeline below (headless Chrome capture → ffmpeg encode).

## Requirements

- **node** (for `puppeteer-core`, which drives an existing Chrome — no Chromium download)
- **Google Chrome** (override the path with `CHROME=/path/to/chrome`)
- **ffmpeg** with libx264 + libvpx — provided on demand via `pkgx +ffmpeg.org`

## How it works

1. `capture.mjs` loads the SVG in headless Chrome, **pauses the SMIL timeline**, and
   steps `setCurrentTime()` frame by frame, screenshotting each one.
2. The capture window `[START, START+DUR)` sits in the animation's **periodic regime**
   so the clip **loops seamlessly** (every SMIL period divides `DUR`).
3. `ffmpeg` encodes the PNG frames to MP4 (H.264) and WebM (VP9).

## Tunables (env vars)

| Var | Default | Meaning |
|-----|---------|---------|
| `CHROME` | macOS Chrome path | Browser binary |
| `FPS` | 30 | Frames per second |
| `START` | 2.6 | Capture window start (s) |
| `DUR` | 7.0 | Loop length (s) — keep SMIL periods dividing this |
| `WIDTH` / `HEIGHT` | 1280 / 720 | Output resolution |

> If you change the SVG's animation periods, keep them dividing `DUR` (e.g. 7s, 3.5s,
> 1s) and verify the first/last frames match so the loop stays seamless.
