<p align="center">
  <a href="https://Codeymn.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Codeymn logo">
    </picture>
  </a>
</p>
<p align="center">The open source AI coding agent.</p>
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

### Installation

```bash
# YOLO
curl -fsSL https://Codeymn.ai/install | bash

# Package managers
npm i -g Codeymn-ai@latest        # or bun/pnpm/yarn
scoop install Codeymn             # Windows
choco install Codeymn             # Windows
brew install anomalyco/tap/Codeymn # macOS and Linux (recommended, always up to date)
brew install Codeymn              # macOS and Linux (official brew formula, updated less)
sudo pacman -S Codeymn            # Arch Linux (Stable)
paru -S Codeymn-bin               # Arch Linux (Latest from AUR)
mise use -g Codeymn               # Any OS
nix run nixpkgs#Codeymn           # or github:anomalyco/Codeymn for latest dev branch
```

> [!TIP]
> Remove versions older than 0.1.x before installing.

### Desktop App (BETA)

Codeymn is also available as a desktop application. Download directly from the [releases page](https://github.com/anomalyco/Codeymn/releases) or [Codeymn.ai/download](https://Codeymn.ai/download).

| Platform              | Download                           |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `Codeymn-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `Codeymn-desktop-mac-x64.dmg`     |
| Windows               | `Codeymn-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, or `.AppImage`     |

```bash
# macOS (Homebrew)
brew install --cask Codeymn-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/Codeymn-desktop
```

#### Installation Directory

The install script respects the following priority order for the installation path:

1. `$CODEYMN_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if it exists or can be created)
4. `$HOME/.Codeymn/bin` - Default fallback

```bash
# Examples
CODEYMN_INSTALL_DIR=/usr/local/bin curl -fsSL https://Codeymn.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://Codeymn.ai/install | bash
```

### Agents

Codeymn includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full-access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

Learn more about [agents](https://Codeymn.ai/docs/agents).

### Documentation

For more info on how to configure Codeymn, [**head over to our docs**](https://Codeymn.ai/docs).

### Contributing

If you're interested in contributing to Codeymn, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on Codeymn

If you are working on a project that's related to Codeymn and is using "Codeymn" as part of its name, for example "Codeymn-dashboard" or "Codeymn-mobile", please add a note to your README to clarify that it is not built by the Codeymn team and is not affiliated with us in any way.

---

**Join our community** [Discord](https://discord.gg/Codeymn) | [X.com](https://x.com/Codeymn)
