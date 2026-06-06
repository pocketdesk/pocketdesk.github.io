---
title: "Troubleshooting"
weight: 8
---

# Troubleshooting

| Symptom | Where to look |
|---|---|
| Glasses show a black screen | Check the USB-C cable, force desktop mode, try 1080p |
| Keyboard types QWERTY | Set AZERTY in Android (physical keyboard) **and/or** `XKB_DEFAULT_LAYOUT=fr` |
| Trackpad pointer missing in the GUI | Confirm it moves in Android first; otherwise use code-server |
| VS Code blurry / slow | Force Wayland (`--ozone-platform-hint=auto`); otherwise code-server |
| `getprop … = false` | No native VM → Termux + code-server |
| Keyboard flexes / unstable | Use a rigid surface; folding keyboards don't work well on laps |

## Honest caveats

- The **Linux Terminal GUI** is recent — build up in stages and expect rough edges
  (window focus, pointer capture, sustained-load performance).
- **Full XFCE** is possible but DIY; labwc / Weston / Sway are lighter and sufficient.
- **AVF** is a flagship Pixel feature (10 and 11) but depends on the build — verify on
  a fresh device.
- **Pixel 11 Pro XL is unreleased** (June 2026): specs are leaks. Re-confirm
  SoC / battery / USB-DisplayPort / Android version at launch (Sept 2026).
- Everything here moves fast across Android 16/17 — re-verify after major updates.
