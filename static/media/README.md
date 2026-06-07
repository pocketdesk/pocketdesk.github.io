# Hero demo video

Drop a demo clip here and the landing hero will use it automatically (instead of the
animated CSS mock):

- `demo.mp4`  — required (H.264/AAC, muted, ~10–20 s loop, 16:9)
- `demo.webm` — optional (VP9), used as an extra `<source>`

The hero renders the video only when `static/media/demo.mp4` exists (checked at build
time). Keep it small (< ~5 MB) so the page stays fast. Poster falls back to
`/images/stack.svg`.
