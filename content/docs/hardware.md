---
title: "Hardware"
weight: 2
---

# Hardware

| Item | Role | Connection |
|---|---|---|
| **Pixel 10 Pro XL** *(today)* / **11 Pro XL** *(tomorrow)* | The computer: desktop mode + Linux VM | — |
| **Viture Beast** | Wearable display, 1920×1200/eye, 120 Hz | USB-C DisplayPort Alt Mode |
| **ProtoArc XK01 TP (AZERTY)** | Keyboard + trackpad (replaces the mouse) | Bluetooth (paired in Android) |
| *(optional)* Bluetooth mouse | Dedicated pointer | Bluetooth (in Android) |

## Phone

{{< figure src="/images/products/pixel-9-pro.svg" alt="Google Pixel Pro front render" width="190" caption="*Illustrative* — Pixel 9 Pro render; the 10/11 Pro XL share the family design." attr="Mliu92, CC BY-SA 4.0 (Wikimedia Commons)" attrlink="https://commons.wikimedia.org/wiki/File:Google_Pixel_9_(Obsidian)_front.svg" >}}

The reference device is the largest Pixel Pro: **Pixel 10 Pro XL** now, **Pixel 11
Pro XL** when it ships (~September 2026). Pixel matters here because the **graphical**
Linux Terminal (Wayland + GPU) is, as of 2026, effectively a Pixel feature.

- Pixel 8 / 9 / 10 / 11 all expose **USB-C DisplayPort Alt Mode** → external display.
- Android 16 **Desktop Mode** drives a monitor with windows, a dock, and peripherals.
- External output is typically **1080p / 1440p** (no 4K60 here) — a perfect match for
  the glasses' 1200p panels.

{{< hint warning >}}
**Pixel 11 Pro XL is unreleased (June 2026).** Leaked highlights: Tensor G6 on TSMC
2 nm, new OLED panels, MediaTek M90 modem, *smaller* battery offset by efficiency.
Re-confirm SoC, battery, USB/DisplayPort and Android version at launch.
{{< /hint >}}

## Glasses — Viture Beast

{{< figure src="/images/products/ar-glasses-nreal-light.jpg" alt="AR glasses kit" width="430" caption="*Illustrative* — Nreal Light (Nreal is XReal's former name). The Beast / Luma Ultra / XReal 1S are different, newer models." attr="Mkkwan, CC BY-SA 4.0 (Wikimedia Commons)" attrlink="https://commons.wikimedia.org/wiki/File:Nreal_Light_Consumer_Kit.jpg" >}}

XR glasses that present as a **plug-and-play DisplayPort monitor**: one USB-C cable,
no software needed for basic display.

- **1920×1200 per eye**, micro-OLED, **120 Hz**, up to 1250 nits.
- Simulates a large virtual screen (~174" at 4 m), 58° FoV.
- The Pixel sees them as an ordinary external display, so Desktop Mode "just works".

## Keyboard — ProtoArc XK01 TP (AZERTY)

{{< figure src="/images/products/foldable-keyboard.jpg" alt="A folding Bluetooth keyboard" width="430" caption="*Illustrative* — Microsoft Universal Foldable Keyboard (a bi-fold). The ProtoArc XK01 TP is a tri-fold with an integrated trackpad." attr="Toshiyuki IMAI, CC BY-SA 2.0 (Wikimedia Commons)" attrlink="https://commons.wikimedia.org/wiki/File:Microsoft_Universal_Foldable_Keyboard_-_25228852970.jpg" >}}

A **tri-fold** Bluetooth keyboard that unfolds to a **true full-size 105-key layout**
(F-row, **dedicated arrow keys**, numpad) with an **integrated trackpad**.

- **AZERTY** variant exists and ships in France (~€40 on Amazon.fr, ProtoArc EU).
- **3-device Bluetooth 5.1**, USB-C rechargeable.
- The integrated trackpad means **one device** replaces keyboard + mouse in transit.

Coding-specific buying notes:

- Prefer layouts that keep **arrow keys + full-size Ctrl/Alt/Esc/Tab**. The XK01 does.
- A **rigid surface** is required — folding keyboards flex on laps.
- Alternatives: **XK01 Plus** (backlit, no trackpad) for dark cabins; **XKM01**
  (keyboard + real folding mouse) if you prefer a mouse over a trackpad.

{{< hint info >}}
**All input pairs in Android, not in the VM.** Pair the keyboard/trackpad/mouse under
*Settings → Connected devices*, set the physical layout to **French (AZERTY)** under
*Settings → System → Languages → Physical keyboard*. Android forwards events into the
Linux graphical surface — no `bluez` setup inside Debian.
{{< /hint >}}
