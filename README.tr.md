<p align="center">
  <a href="https://Codeymn.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Codeymn logo">
    </picture>
  </a>
</p>
<p align="center">Açik kaynakli yapay zeka kodlama asistani.</p>
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

### Kurulum

```bash
# YOLO
curl -fsSL https://Codeymn.ai/install | bash

# Paket yöneticileri
npm i -g Codeymn-ai@latest        # veya bun/pnpm/yarn
scoop install Codeymn             # Windows
choco install Codeymn             # Windows
brew install anomalyco/tap/Codeymn # macOS ve Linux (önerilir, her zaman güncel)
brew install Codeymn              # macOS ve Linux (resmi brew formülü, daha az güncellenir)
sudo pacman -S Codeymn            # Arch Linux (Stable)
paru -S Codeymn-bin               # Arch Linux (Latest from AUR)
mise use -g Codeymn               # Tüm isletim sistemleri
nix run nixpkgs#Codeymn           # veya en güncel gelistirme dali için github:anomalyco/Codeymn
```

> [!TIP]
> Kurulumdan önce 0.1.x'ten eski sürümleri kaldirin.

### Masaüstü Uygulamasi (BETA)

Codeymn ayrica masaüstü uygulamasi olarak da mevcuttur. Dogrudan [sürüm sayfasindan](https://github.com/anomalyco/Codeymn/releases) veya [Codeymn.ai/download](https://Codeymn.ai/download) adresinden indirebilirsiniz.

| Platform              | Indirme                            |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `Codeymn-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `Codeymn-desktop-mac-x64.dmg`     |
| Windows               | `Codeymn-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` veya AppImage       |

```bash
# macOS (Homebrew)
brew install --cask Codeymn-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/Codeymn-desktop
```

#### Kurulum Dizini (Installation Directory)

Kurulum betigi (install script), kurulum yolu (installation path) için asagidaki öncelik sirasini takip eder:

1. `$CODEYMN_INSTALL_DIR` - Özel kurulum dizini
2. `$XDG_BIN_DIR` - XDG Base Directory Specification uyumlu yol
3. `$HOME/bin` - Standart kullanici binary dizini (varsa veya olusturulabiliyorsa)
4. `$HOME/.Codeymn/bin` - Varsayilan yedek konum

```bash
# Örnekler
CODEYMN_INSTALL_DIR=/usr/local/bin curl -fsSL https://Codeymn.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://Codeymn.ai/install | bash
```

### Ajanlar

Codeymn, `Tab` tusuyla aralarinda geçis yapabileceginiz iki yerlesik (built-in) ajan içerir.

- **build** - Varsayilan, gelistirme çalismalari için tam erisimli ajan
- **plan** - Analiz ve kod kesfi için salt okunur ajan
  - Varsayilan olarak dosya düzenlemelerini reddeder
  - Bash komutlarini çalistirmadan önce izin ister
  - Tanimadiginiz kod tabanlarini kesfetmek veya degisiklikleri planlamak için ideal

Ayrica, karmasik aramalar ve çok adimli görevler için bir **genel** alt ajan bulunmaktadir.
Bu dahili olarak kullanilir ve mesajlarda `@general` ile çagrilabilir.

[Ajanlar](https://Codeymn.ai/docs/agents) hakkinda daha fazla bilgi edinin.

### Dokümantasyon

Codeymn'u nasil yapilandiracaginiz hakkinda daha fazla bilgi için [**dokümantasyonumuza göz atin**](https://Codeymn.ai/docs).

### Katkida Bulunma

Codeymn'a katkida bulunmak istiyorsaniz, lütfen bir pull request göndermeden önce [katkida bulunma dokümanlarimizi](./CONTRIBUTING.md) okuyun.

### Codeymn Üzerine Gelistirme

Codeymn ile ilgili bir proje üzerinde çalisiyorsaniz ve projenizin adinin bir parçasi olarak "Codeymn" kullaniyorsaniz (örnegin, "Codeymn-dashboard" veya "Codeymn-mobile"), lütfen README dosyaniza projenin Codeymn ekibi tarafindan gelistirilmedigini ve bizimle hiçbir sekilde baglantili olmadigini belirten bir not ekleyin.

---

**Toplulugumuza katilin** [Discord](https://discord.gg/Codeymn) | [X.com](https://x.com/Codeymn)
