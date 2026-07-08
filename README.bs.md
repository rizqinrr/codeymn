<p align="center">
  <a href="https://Codeymn.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Codeymn logo">
    </picture>
  </a>
</p>
<p align="center">Codeymn je open source AI agent za programiranje.</p>
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

### Instalacija

```bash
# YOLO
curl -fsSL https://Codeymn.ai/install | bash

# Package manageri
npm i -g Codeymn-ai@latest        # ili bun/pnpm/yarn
scoop install Codeymn             # Windows
choco install Codeymn             # Windows
brew install anomalyco/tap/Codeymn # macOS i Linux (preporuceno, uvijek ažurno)
brew install Codeymn              # macOS i Linux (zvanicna brew formula, rjede se ažurira)
sudo pacman -S Codeymn            # Arch Linux (Stable)
paru -S Codeymn-bin               # Arch Linux (Latest from AUR)
mise use -g Codeymn               # Bilo koji OS
nix run nixpkgs#Codeymn           # ili github:anomalyco/Codeymn za najnoviji dev branch
```

> [!TIP]
> Ukloni verzije starije od 0.1.x prije instalacije.

### Desktop aplikacija (BETA)

Codeymn je dostupan i kao desktop aplikacija. Preuzmi je direktno sa [stranice izdanja](https://github.com/anomalyco/Codeymn/releases) ili sa [Codeymn.ai/download](https://Codeymn.ai/download).

| Platforma             | Preuzimanje                        |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `Codeymn-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `Codeymn-desktop-mac-x64.dmg`     |
| Windows               | `Codeymn-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, ili AppImage       |

```bash
# macOS (Homebrew)
brew install --cask Codeymn-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/Codeymn-desktop
```

#### Instalacijski direktorij

Instalacijska skripta koristi sljedeci redoslijed prioriteta za putanju instalacije:

1. `$CODEYMN_INSTALL_DIR` - Prilagodeni instalacijski direktorij
2. `$XDG_BIN_DIR` - Putanja uskladena sa XDG Base Directory specifikacijom
3. `$HOME/bin` - Standardni korisnicki bin direktorij (ako postoji ili se može kreirati)
4. `$HOME/.Codeymn/bin` - Podrazumijevana rezervna lokacija

```bash
# Primjeri
CODEYMN_INSTALL_DIR=/usr/local/bin curl -fsSL https://Codeymn.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://Codeymn.ai/install | bash
```

### Agenti

Codeymn ukljucuje dva ugradena agenta izmedu kojih možeš prebacivati tasterom `Tab`.

- **build** - Podrazumijevani agent sa punim pristupom za razvoj
- **plan** - Agent samo za citanje za analizu i istraživanje koda
  - Podrazumijevano zabranjuje izmjene datoteka
  - Traži dozvolu prije pokretanja bash komandi
  - Idealan za istraživanje nepoznatih codebase-ova ili planiranje izmjena

Ukljucen je i **general** pod-agent za složene pretrage i višekoracne zadatke.
Koristi se interno i može se pozvati pomocu `@general` u porukama.

Saznaj više o [agentima](https://Codeymn.ai/docs/agents).

### Dokumentacija

Za više informacija o konfiguraciji Codeymn-a, [**pogledaj dokumentaciju**](https://Codeymn.ai/docs).

### Doprinosi

Ako želiš doprinositi Codeymn-u, procitaj [upute za doprinošenje](./CONTRIBUTING.md) prije slanja pull requesta.

### Gradnja na Codeymn-u

Ako radiš na projektu koji je povezan s Codeymn-om i koristi "Codeymn" kao dio naziva, npr. "Codeymn-dashboard" ili "Codeymn-mobile", dodaj napomenu u svoj README da projekat nije napravio Codeymn tim i da nije povezan s nama.

---

**Pridruži se našoj zajednici** [Discord](https://discord.gg/Codeymn) | [X.com](https://x.com/Codeymn)
