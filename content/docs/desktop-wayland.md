---
title: "Wayland desktop"
weight: 5
---

# Wayland desktop (labwc)

Android's Linux Terminal exposes a **Wayland** session. By default it has **no real
window manager** — you install a Wayland compositor, which *is* the window manager.

> XFCE is a full **X11** desktop and heavier; for this setup a lightweight Wayland
> compositor is the better fit.

## Pick a compositor

| Compositor | Type | Best for |
|---|---|---|
| **labwc** | Stacking (Openbox-style) | **Mouse/trackpad-driven** windows — recommended here |
| **Weston** | Reference compositor | Simplest "just works" baseline |
| **Sway** | Tiling (i3-like) | Keyboard-driven, great on a single screen |
| **Cage** | Kiosk (single app) | Run *only* VS Code, fullscreen |

Since the ProtoArc has a trackpad, **labwc** (point-and-click, stacking) is the most
natural choice.

## Install labwc + helpers

```bash
sudo apt install -y labwc waybar wofi foot
```

- `waybar` — top bar (clock, taskbar)
- `wofi` — application launcher
- `foot` — lightweight Wayland terminal

## Keyboard layout (AZERTY) inside the VM

```bash
echo 'export XKB_DEFAULT_LAYOUT=fr' >> ~/.profile
```

{{< hint warning >}}
If Android already forwards AZERTY characters (physical-keyboard layout set in Android),
this is redundant but harmless. **Test both** — if you get QWERTY, this setting wins.
{{< /hint >}}

## Start the desktop

1. In the Terminal app, open the **graphical surface** (the Terminal's *Display* button).
2. Launch the compositor:
   ```bash
   labwc
   ```
3. Inside labwc, start `foot`, then `waybar`, then VS Code
   (see [VS Code]({{< relref "vscode" >}})).
4. Drag the VS Code window onto the **external display** (the glasses) via Desktop Mode.

## Optional autostart script

```bash
cat > ~/dev.sh <<'EOF'
#!/usr/bin/env bash
waybar &
foot &
code --ozone-platform-hint=auto --enable-features=UseOzonePlatform &
EOF
chmod +x ~/dev.sh
```

Wire it into `~/.config/labwc/autostart` to launch everything on login.

## Input note

The Bluetooth keyboard, trackpad and mouse are paired in **Android** and forwarded to
the Wayland surface — they work in **any** compositor. The compositor choice only
changes the *window paradigm*, not input support.
