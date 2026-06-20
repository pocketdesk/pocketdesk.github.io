# Hero media

The landing hero uses, in priority order:

1. `demo.mp4` / `demo.webm` — the demo **video** (used when `demo.mp4` exists)
2. `hero-demo.svg` — the in-theme **animated SVG** loop (also the video poster)
3. the CSS mock in the template

## The video is generated

`demo.mp4` / `demo.webm` are **rendered from `hero-demo.svg`**, not hand-made. Edit the
SVG, then regenerate from the repo root:

```sh
task video
```

See [`tools/video/`](../../tools/video/) for the pipeline (headless Chrome frame
capture → ffmpeg) and tunables. Output is 1280×720, 30 fps, ~7 s, seamless loop, ~125 KB.

## Hand-supplied clip

To use your own footage instead, just drop a `demo.mp4` (H.264, muted, 16:9) here — the
hero will pick it up at build time. Keep it small (< ~5 MB).
