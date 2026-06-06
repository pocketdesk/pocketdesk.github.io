---
title: "VS Code"
weight: 6
---

# VS Code (native GUI)

Install VS Code as a Linux **ARM64** app inside the Debian VM.

## Install from the Microsoft repo

```bash
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -D -o root -g root -m 644 microsoft.gpg /etc/apt/keyrings/microsoft.gpg
echo "deb [arch=arm64 signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/code stable main" \
  | sudo tee /etc/apt/sources.list.d/vscode.list
rm -f microsoft.gpg
sudo apt update && sudo apt install -y code
```

## Launch on Wayland

By default Electron may fall back to XWayland. Force native Wayland:

```bash
code --ozone-platform-hint=auto --enable-features=UseOzonePlatform,WaylandWindowDecorations
```

(or `--ozone-platform=wayland`).

{{< hint info >}}
**GUI apps need a Pixel-class device.** The graphical Linux layer (X11/Wayland, GPU)
is, in 2026, effectively limited to Pixel. On other phones, VS Code GUI won't run
natively — use [code-server]({{< relref "code-server" >}}) instead.
{{< /hint >}}

## If the GUI is flaky

VS Code is heavy. If windows misbehave, the pointer is captured oddly, or performance
drops under load, prefer the [code-server]({{< relref "code-server" >}}) path — it runs
VS Code as a local server in the Android browser and sidesteps the Wayland layer
entirely.
