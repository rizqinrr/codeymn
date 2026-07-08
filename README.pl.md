<p align="center">
  <a href="https://Codeymn.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Codeymn logo">
    </picture>
  </a>
</p>
<p align="center">Otwartozródlowy agent kodujacy AI.</p>
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

### Instalacja

```bash
# YOLO
curl -fsSL https://Codeymn.ai/install | bash

# Menedzery pakietów
npm i -g Codeymn-ai@latest        # albo bun/pnpm/yarn
scoop install Codeymn             # Windows
choco install Codeymn             # Windows
brew install anomalyco/tap/Codeymn # macOS i Linux (polecane, zawsze aktualne)
brew install Codeymn              # macOS i Linux (oficjalna formula brew, rzadziej aktualizowana)
sudo pacman -S Codeymn            # Arch Linux (Stable)
paru -S Codeymn-bin               # Arch Linux (Latest from AUR)
mise use -g Codeymn               # dowolny system
nix run nixpkgs#Codeymn           # lub github:anomalyco/Codeymn dla najnowszej galezi dev
```

> [!TIP]
> Przed instalacja usun wersje starsze niz 0.1.x.

### Aplikacja desktopowa (BETA)

Codeymn jest takze dostepny jako aplikacja desktopowa. Pobierz ja bezposrednio ze strony [releases](https://github.com/anomalyco/Codeymn/releases) lub z [Codeymn.ai/download](https://Codeymn.ai/download).

| Platforma             | Pobieranie                         |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `Codeymn-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `Codeymn-desktop-mac-x64.dmg`     |
| Windows               | `Codeymn-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` lub AppImage        |

```bash
# macOS (Homebrew)
brew install --cask Codeymn-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/Codeymn-desktop
```

#### Katalog instalacji

Skrypt instalacyjny stosuje nastepujacy priorytet wyboru sciezki instalacji:

1. `$CODEYMN_INSTALL_DIR` - Wlasny katalog instalacji
2. `$XDG_BIN_DIR` - Sciezka zgodna ze specyfikacja XDG Base Directory
3. `$HOME/bin` - Standardowy katalog binarny uzytkownika (jesli istnieje lub mozna go utworzyc)
4. `$HOME/.Codeymn/bin` - Domyslny fallback

```bash
# Przyklady
CODEYMN_INSTALL_DIR=/usr/local/bin curl -fsSL https://Codeymn.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://Codeymn.ai/install | bash
```

### Agents

Codeymn zawiera dwóch wbudowanych agentów, miedzy którymi mozesz przelaczac sie klawiszem `Tab`.

- **build** - Domyslny agent z pelnym dostepem do pracy developerskiej
- **plan** - Agent tylko do odczytu do analizy i eksploracji kodu
  - Domyslnie odmawia edycji plików
  - Pyta o zgode przed uruchomieniem komend bash
  - Idealny do poznawania nieznanych baz kodu lub planowania zmian

Dodatkowo jest subagent **general** do zlozonych wyszukiwan i wieloetapowych zadan.
Jest uzywany wewnetrznie i mozna go wywolac w wiadomosciach przez `@general`.

Dowiedz sie wiecej o [agents](https://Codeymn.ai/docs/agents).

### Dokumentacja

Wiecej informacji o konfiguracji Codeymn znajdziesz w [**dokumentacji**](https://Codeymn.ai/docs).

### Wspóltworzenie

Jesli chcesz wspóltworzyc Codeymn, przeczytaj [contributing docs](./CONTRIBUTING.md) przed wyslaniem pull requesta.

### Budowanie na Codeymn

Jesli pracujesz nad projektem zwiazanym z Codeymn i uzywasz "Codeymn" jako czesci nazwy (na przyklad "Codeymn-dashboard" lub "Codeymn-mobile"), dodaj prosze notatke do swojego README, aby wyjasnic, ze projekt nie jest tworzony przez zespól Codeymn i nie jest z nami w zaden sposób powiazany.

---

**Dolacz do naszej spolecznosci** [Discord](https://discord.gg/Codeymn) | [X.com](https://x.com/Codeymn)
