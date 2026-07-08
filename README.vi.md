<p align="center">
  <a href="https://Codeymn.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Codeymn logo">
    </picture>
  </a>
</p>
<p align="center">Tr? lý l?p trình AI mã ngu?n m?.</p>
<p align="center">
  <a href="https://Codeymn.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/Codeymn-ai"><img alt="npm" src="https://img.shields.io/npm/v/Codeymn-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/Codeymn/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/Codeymn/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">????</a> |
  <a href="README.zht.md">????</a> |
  <a href="README.ko.md">???</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">???</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">???????</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">???????</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">???</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">??????????</a> |
  <a href="README.bn.md">?????</a> |
  <a href="README.gr.md">????????</a> |
  <a href="README.vi.md">Ti?ng Vi?t</a>
</p>

[![Codeymn Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://Codeymn.ai)

---

### Cài d?t

```bash
# YOLO
curl -fsSL https://Codeymn.ai/install | bash

# Các trình qu?n lý gói (Package managers)
npm i -g Codeymn-ai@latest        # ho?c bun/pnpm/yarn
scoop install Codeymn             # Windows
choco install Codeymn             # Windows
brew install anomalyco/tap/Codeymn # macOS và Linux (khuyên dùng, luôn c?p nh?t)
brew install Codeymn              # macOS và Linux (công th?c brew chính th?c, ít c?p nh?t hon)
sudo pacman -S Codeymn            # Arch Linux (B?n ?n d?nh)
paru -S Codeymn-bin               # Arch Linux (B?n m?i nh?t t? AUR)
mise use -g Codeymn               # M?i h? di?u hành
nix run nixpkgs#Codeymn           # ho?c github:anomalyco/Codeymn cho nhánh dev m?i nh?t
```

> [!TIP]
> Hãy xóa các phiên b?n cu hon 0.1.x tru?c khi cài d?t.

### ?ng d?ng Desktop (BETA)

Codeymn cung có s?n du?i d?ng ?ng d?ng desktop. T?i tr?c ti?p t? [trang releases](https://github.com/anomalyco/Codeymn/releases) ho?c [Codeymn.ai/download](https://Codeymn.ai/download).

| N?n t?ng              | T?i xu?ng                          |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `Codeymn-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `Codeymn-desktop-mac-x64.dmg`     |
| Windows               | `Codeymn-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, ho?c AppImage      |

```bash
# macOS (Homebrew)
brew install --cask Codeymn-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/Codeymn-desktop
```

#### Thu m?c cài d?t

T?p l?nh cài d?t tuân theo th? t? uu tiên sau cho du?ng d?n cài d?t:

1. `$CODEYMN_INSTALL_DIR` - Thu m?c cài d?t tùy ch?nh
2. `$XDG_BIN_DIR` - Ðu?ng d?n tuân th? XDG Base Directory Specification
3. `$HOME/bin` - Thu m?c nh? phân tiêu chu?n c?a ngu?i dùng (n?u t?n t?i ho?c có th? t?o)
4. `$HOME/.Codeymn/bin` - M?c d?nh d? phòng

```bash
# Ví d?
CODEYMN_INSTALL_DIR=/usr/local/bin curl -fsSL https://Codeymn.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://Codeymn.ai/install | bash
```

### Agents (Ð?i di?n)

Codeymn bao g?m hai agent du?c tích h?p s?n mà b?n có th? chuy?n d?i b?ng phím `Tab`.

- **build** - Agent m?c d?nh, có toàn quy?n truy c?p cho công vi?c l?p trình
- **plan** - Agent ch? d?c dùng d? phân tích và khám phá mã ngu?n
  - M?c d?nh t? ch?i vi?c ch?nh s?a t?p
  - H?i quy?n tru?c khi ch?y các l?nh bash
  - Lý tu?ng d? khám phá các codebase l? ho?c lên k? ho?ch thay d?i

Ngoài ra còn có m?t subagent **general** dùng cho các tìm ki?m ph?c t?p và tác v? nhi?u bu?c.
Agent này du?c s? d?ng n?i b? và có th? g?i b?ng cách dùng `@general` trong tin nh?n.

Tìm hi?u thêm v? [agents](https://Codeymn.ai/docs/agents).

### Tài li?u

Ð? bi?t thêm thông tin v? cách c?u hình Codeymn, [**hãy truy c?p tài li?u c?a chúng tôi**](https://Codeymn.ai/docs).

### Ðóng góp

N?u b?n mu?n dóng góp cho Codeymn, vui lòng d?c [tài li?u hu?ng d?n dóng góp](./CONTRIBUTING.md) tru?c khi g?i pull request.

### Xây d?ng trên n?n t?ng Codeymn

N?u b?n dang làm vi?c trên m?t d? án liên quan d?n Codeymn và s? d?ng "Codeymn" nhu m?t ph?n c?a tên d? án, ví d? "Codeymn-dashboard" ho?c "Codeymn-mobile", vui lòng thêm m?t ghi chú vào README c?a b?n d? làm rõ r?ng d? án dó không du?c xây d?ng b?i d?i ngu Codeymn và không liên k?t v?i chúng tôi du?i b?t k? hình th?c nào.

---

**Tham gia c?ng d?ng c?a chúng tôi** [Discord](https://discord.gg/Codeymn) | [X.com](https://x.com/Codeymn)
