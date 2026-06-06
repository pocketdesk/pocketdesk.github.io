---
title: "Multi-screen (AR)"
weight: 3
---

# Multi-screen (AR) — glasses & where multi-screen lives

The glasses are just a **DisplayPort monitor you wear**. Any DP-Alt-Mode pair works for
basic display; the differences that matter for coding are **spatial anchoring**
(does the screen stay put as your head moves?) and **how multi-screen is achieved**
(glasses hardware, companion app, or your window manager).

{{< hint info >}}
**Specs & software are a snapshot — June 2026.** This space moves fast (Android XR is
landing). Re-verify before buying.
{{< /hint >}}

## Specs comparison

| | **XREAL 1S** | **Viture Luma Ultra** | **Viture Beast** |
|---|---|---|---|
| Price | **$449** | $599 | $549 |
| Per-eye resolution | 1920×1200 | 1920×1200 | 1920×1200 |
| Refresh | 120 Hz | 120 Hz | 120 Hz |
| FOV | 52° | 52° | **58°** |
| Brightness | 700 nits | **1500 nits** | 1250 nits |
| Panel | Sony 0.68″ µ-OLED | Sony µ-OLED | Sony µ-OLED |
| Weight | ~82 g | 83 g | 88 g |
| Myopia adjust | — | **−4.0 D** | — |
| Electrochromic | — | ✅ | ✅ (9 levels) |
| Cameras / depth | — | **RGB + dual depth** | RGB (front) |
| Spatial engine | **X1 chip (hardware)** | SpaceWalker + **6DoF** (cameras) | SpaceWalker + 3DoF |

All three are **1200p / 120 Hz** Sony micro-OLED. The Beast has the **widest FOV (58°)**;
the **Luma Ultra is the brightest (1500 nits)** and the only one with **6DoF + depth
cameras** (hand tracking); the **1S is the cheapest and the only one with on-glasses
spatial compute (X1)**.

{{< hint warning >}}
**Luma Ultra 6DoF needs a host.** Its 6DoF / hand-tracking requires the Viture **Pro
Neckband**, a Mac or a PC — **not** a bare phone DisplayPort link. Over a Pixel you get
the bright display + SpaceWalker, but not full 6DoF.
{{< /hint >}}

## Software available right now (June 2026)

| Approach | Glasses | What it does | Platforms |
|---|---|---|---|
| **X1 chip (built-in)** | XREAL 1S / One / One Pro | Native **3DoF anchoring**, **Ultrawide** (up to 310″), 3 ms latency — **no app** | Any DP/DeX source |
| **SpaceWalker** (app) | Viture Beast / Luma (Pro/Ultra) | 3DoF (6DoF on Ultra w/ host), **multi-screen (up to 3)**, ultrawide, 1-click 2D→3D | Windows, macOS, iOS, Android |
| **Nebula** (legacy) | XREAL **Air** series only | Old multi-monitor app — **not supported on X1 glasses** | — |
| **Android XR / Project Aura** | XREAL (partner) | Native Android multi-screen — **expected later 2026** | Android XR |

### Key distinction

- **XREAL X1 = spatial in hardware.** Anchoring and Ultrawide live in the glasses. You
  do **not** install (and **cannot** use) Nebula on the 1S. Just connect over USB-C
  DisplayPort.
- **Viture = spatial in software.** Multi-screen / 3DoF come from the **SpaceWalker**
  app, which is built for **Android content** — its benefit on a Linux-VM workflow is
  uncertain (see below).

## The pocketdesk reality: multi-screen comes from your WM

A phone outputs **one** display over DisplayPort. So the glasses give you **one** big
(optionally anchored / ultrawide) screen — not three independent OS monitors. Your
"multiple screens" come from **tiling in the Wayland compositor**, not from glasses
software:

```
Pixel → 1 ultrawide display → glasses (anchored)
         └─ sway/labwc tiles:  VS Code │ terminal │ browser
```

→ For coding you need **neither Nebula nor SpaceWalker** to get a multi-pane layout —
[tiling]({{< relref "desktop-wayland" >}}) does it. The glasses' job is to **anchor and
enlarge** that single canvas.

## Recommendation for a dev setup

| Priority | Pick |
|---|---|
| Cleanest spatial coding (anchor + ultrawide, **zero app**) | 🥇 **XREAL 1S** |
| Brightest panel + 6DoF / hand tracking (needs neckband/PC) | **Viture Luma Ultra** |
| Widest FOV, big bright canvas | **Viture Beast** |

The **XREAL 1S** fits pocketdesk best: hardware Ultrawide anchoring (stable on a bumpy
commute) **without depending on a companion app**, paired with WM tiling for multi-pane.
The Viture pair are excellent DP monitors, but their multi-screen routes through the
Android-oriented SpaceWalker app, which is a weaker match for the Linux-VM flow.

{{< hint warning >}}
**Caveats.** SpaceWalker targets Android content — its multi-screen may not wrap the
Linux Terminal's graphical surface cleanly (test it). True OS-level multi-monitor from a
phone awaits **Android XR**. Specs/prices above are June 2026 and change often.
{{< /hint >}}
