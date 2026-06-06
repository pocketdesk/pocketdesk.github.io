---
title: "Overview"
weight: 1
---

# Overview

pocketdesk is a **laptop-free development setup**. The phone is the computer; the
glasses are the screen; a folding keyboard is the input. You get a real Linux
desktop with VS Code, anywhere — on a train, a plane tray table, or a café.

## Why it works

Three recent pieces line up:

1. **Android's Linux Terminal** (Android 16+) runs a full **Debian VM** on the phone
   via the Android Virtualization Framework (AVF/KVM). On Pixel devices this includes
   **GPU-accelerated graphical apps** — so a real VS Code window, not just a shell.
2. **USB-C DisplayPort Alt Mode** lets the phone drive an external display. The
   **Viture Beast** glasses are just a 1200p-per-eye DisplayPort monitor you wear.
3. **Bluetooth HID** keyboard/mouse pair at the **Android** level and are forwarded
   into the Linux VM — no Bluetooth stack to configure inside Debian.

## Device targets

| | Pixel 10 Pro XL (today) | Pixel 11 Pro XL (tomorrow) |
|---|---|---|
| Status | Available now | Expected **Sep 2026** (leaks) |
| SoC | Tensor G5 (3 nm) | **Tensor G6 (2 nm)** — ~15-20% more efficient |
| Linux/AVF | Mature | More mature (newer Android) |
| Why it matters | Proven, buy today | Better **sustained** load (VM is CPU/thermal heavy) |

{{< hint info >}}
**Model-agnostic.** The whole software chain depends on **Android + AVF**, not the
specific phone. Every guide works on the 10 Pro XL today and transposes unchanged to
the 11 Pro XL at launch.
{{< /hint >}}

## Two paths to VS Code

- **Native GUI** — VS Code as a Linux app inside the Debian VM, on a Wayland
  compositor ([labwc]({{< relref "desktop-wayland" >}})). Best experience; Pixel-only
  for the graphical layer today.
- **code-server** — VS Code served locally, opened in the Android browser. Works on
  *any* capable phone, independent of the Linux GUI. The reliable
  [fallback]({{< relref "code-server" >}}).

## Honest caveats

- The Linux Terminal **GUI support is recent** — expect rough edges (window focus,
  pointer capture, performance under load).
- **AVF availability depends on the build** — verify with `getprop`
  ([Linux Terminal]({{< relref "linux-terminal" >}})).
- A folding keyboard needs a **flat, stable surface** — laps are shaky.
- Pre-release **Pixel 11 specs are leaks**; re-confirm at launch.
