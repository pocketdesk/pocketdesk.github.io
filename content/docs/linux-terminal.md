---
title: "Linux Terminal"
weight: 4
---

# Enable the Linux Terminal (Debian VM)

The graphical environment runs inside Android's built-in **Debian VM** (AVF/KVM).

## 1. Enable Developer Mode

```
Settings → About phone → tap "Build number" 7 times
```

## 2. (Optional) Verify AVF support via ADB

From a PC with USB debugging enabled:

```bash
adb shell getprop ro.virtualization.supported
# "true"      → the Linux VM is available
# empty/false → no native VM; use the code-server fallback instead
```

## 3. Turn on the Linux environment

```
Settings → System → Developer options → "Linux development environment"
```

A **Terminal** app appears in the launcher. On first run it **downloads the Debian
image** (several hundred MB). Open it to get a shell.

## 4. Connect the glasses + Desktop Mode

1. Plug the Viture Beast into the phone's USB-C port — the image appears in the lenses.
2. If needed, enable desktop output:
   `Developer options → "Force desktop mode on external displays"`
   (or manage it via `Settings → Connected devices → External displays`).
3. Recommended resolution: **1080p or 1440p** (matches the 1200p panels).

## 5. Prepare the VM

Inside the Terminal app:

```bash
sudo apt update && sudo apt full-upgrade -y
sudo apt install -y wget gpg curl ca-certificates
```

{{< hint info >}}
Next: install a [Wayland desktop]({{< relref "desktop-wayland" >}}) and
[VS Code]({{< relref "vscode" >}}). If the graphical layer is unavailable or unstable,
jump straight to [code-server]({{< relref "code-server" >}}).
{{< /hint >}}
