---
title: "code-server (fallback)"
weight: 7
---

# code-server — the reliable fallback

`code-server` runs VS Code as a **local web server**; you open it in the **Android
browser**. It does not depend on the Wayland/X11 graphical layer, so it works even
when:

- AVF graphical apps are unavailable (non-Pixel device), or
- the native VS Code GUI is unstable.

## Install

In the Debian VM (or in Termux if there is no native VM):

```bash
curl -fsSL https://code-server.dev/install.sh | sh
code-server --bind-addr 127.0.0.1:8080
```

## Use

1. Open Chrome (or any browser) on the phone → `http://127.0.0.1:8080`.
2. Display the browser window on the **glasses** via Desktop Mode.
3. The Bluetooth keyboard and trackpad/mouse are handled by the browser — pointer and
   input "just work".

{{< hint info >}}
**No native VM?** If `getprop ro.virtualization.supported` returned `false`, install a
Debian/Ubuntu userland via **Termux + proot-distro** and run `code-server` there. Same
browser-based result, no AVF required.
{{< /hint >}}

## Trade-offs

- ✅ Maximum reliability and portability (any capable phone).
- ✅ Perfect pointer/keyboard handling via the browser.
- ➖ Browser chrome around the editor; some native-extension features differ from
  desktop VS Code.
