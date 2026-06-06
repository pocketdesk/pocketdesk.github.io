---
title: "pocketdesk"
type: docs
---

# pocketdesk

**A pocket-sized Linux dev workstation — phone, AR glasses, and a folding keyboard.**

pocketdesk documents a fully mobile development setup: code in **VS Code on Linux
(Debian / Wayland)** running directly on a Pixel phone, displayed on **AR glasses**,
driven by a **folding Bluetooth keyboard with trackpad**. No laptop required.

The hardware reference is the **Google Pixel 10 Pro XL today**, and the
**Pixel 11 Pro XL tomorrow** (expected September 2026) — the software chain is
identical on both, so every guide here is model-agnostic.

## The stack at a glance

![pocketdesk stack: Pixel host → AR display, Bluetooth keyboard, Android Linux Terminal → labwc + VS Code / code-server](/images/stack.svg)

```
Pixel 10 Pro XL (today) / 11 Pro XL (tomorrow)
  ├─ Beast · Luma Ultra · XReal 1S → USB-C DisplayPort → 1200p virtual screen
  ├─ ProtoArc XK01 TP   → Bluetooth (paired in Android) → keyboard + trackpad
  └─ Android Linux Terminal (Debian VM, AVF/KVM)
       └─ labwc + VS Code (Wayland)   [fallback: code-server in the browser]
```

## Start here

- [Overview]({{< relref "docs/overview" >}}) — what this is and why it works
- [Hardware]({{< relref "docs/hardware" >}}) — phone, glasses, keyboard
- [Multi-screen (AR)]({{< relref "docs/multi-screen" >}}) — what's real, and where it lives
- [Linux Terminal]({{< relref "docs/linux-terminal" >}}) — enable the Debian VM
- [Wayland desktop]({{< relref "docs/desktop-wayland" >}}) — labwc + input
- [VS Code]({{< relref "docs/vscode" >}}) — native GUI install
- [code-server]({{< relref "docs/code-server" >}}) — the reliable fallback
- [Troubleshooting]({{< relref "docs/troubleshooting" >}})

> This is a community knowledge base, not affiliated with Google, Viture, or ProtoArc.
> Pre-release device specs are leaks and must be re-confirmed at launch.
