<p align="center">
  <a href="https://Codeymn.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Codeymn logo">
    </picture>
  </a>
</p>
<p align="center">AI-kodeagent med åpen kildekode.</p>
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

### Installasjon

```bash
# YOLO
curl -fsSL https://Codeymn.ai/install | bash

# Pakkehåndterere
npm i -g Codeymn-ai@latest        # eller bun/pnpm/yarn
scoop install Codeymn             # Windows
choco install Codeymn             # Windows
brew install anomalyco/tap/Codeymn # macOS og Linux (anbefalt, alltid oppdatert)
brew install Codeymn              # macOS og Linux (offisiell brew-formel, oppdateres sjeldnere)
sudo pacman -S Codeymn            # Arch Linux (Stable)
paru -S Codeymn-bin               # Arch Linux (Latest from AUR)
mise use -g Codeymn               # alle OS
nix run nixpkgs#Codeymn           # eller github:anomalyco/Codeymn for nyeste dev-branch
```

> [!TIP]
> Fjern versjoner eldre enn 0.1.x før du installerer.

### Desktop-app (BETA)

Codeymn er også tilgjengelig som en desktop-app. Last ned direkte fra [releases-siden](https://github.com/anomalyco/Codeymn/releases) eller [Codeymn.ai/download](https://Codeymn.ai/download).

| Plattform             | Nedlasting                         |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `Codeymn-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `Codeymn-desktop-mac-x64.dmg`     |
| Windows               | `Codeymn-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` eller AppImage      |

```bash
# macOS (Homebrew)
brew install --cask Codeymn-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/Codeymn-desktop
```

#### Installasjonsmappe

Installasjonsskriptet bruker følgende prioritet for installasjonsstien:

1. `$CODEYMN_INSTALL_DIR` - Egendefinert installasjonsmappe
2. `$XDG_BIN_DIR` - Sti som følger XDG Base Directory Specification
3. `$HOME/bin` - Standard brukerbinar-mappe (hvis den finnes eller kan opprettes)
4. `$HOME/.Codeymn/bin` - Standard fallback

```bash
# Eksempler
CODEYMN_INSTALL_DIR=/usr/local/bin curl -fsSL https://Codeymn.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://Codeymn.ai/install | bash
```

### Agents

Codeymn har to innebygde agents du kan bytte mellom med `Tab`-tasten.

- **build** - Standard, agent med full tilgang for utviklingsarbeid
- **plan** - Skrivebeskyttet agent for analyse og kodeutforsking
  - Nekter filendringer som standard
  - Spør om tillatelse før bash-kommandoer
  - Ideell for å utforske ukjente kodebaser eller planlegge endringer

Det finnes også en **general**-subagent for komplekse søk og flertrinnsoppgaver.
Den brukes internt og kan kalles via `@general` i meldinger.

Les mer om [agents](https://Codeymn.ai/docs/agents).

### Dokumentasjon

For mer info om hvordan du konfigurerer Codeymn, [**se dokumentasjonen**](https://Codeymn.ai/docs).

### Bidra

Hvis du vil bidra til Codeymn, les [contributing docs](./CONTRIBUTING.md) før du sender en pull request.

### Bygge på Codeymn

Hvis du jobber med et prosjekt som er relatert til Codeymn og bruker "Codeymn" som en del av navnet; for eksempel "Codeymn-dashboard" eller "Codeymn-mobile", legg inn en merknad i README som presiserer at det ikke er bygget av Codeymn-teamet og ikke er tilknyttet oss på noen måte.

---

**Bli med i fellesskapet** [Discord](https://discord.gg/Codeymn) | [X.com](https://x.com/Codeymn)
