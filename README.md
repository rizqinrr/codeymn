<p align="center">
  <a href="https://github.com/rizqinrr/codeymn">
    <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Codeymn logo" width="200">
  </a>
</p>

<p align="center"><strong>Codeymn</strong> — A fork of <a href="https://github.com/anomalyco/opencode">OpenCode</a>, the open source AI coding agent.</p>

<p align="center">
  <a href="https://github.com/rizqinrr/codeymn"><img alt="GitHub Repo" src="https://img.shields.io/badge/github-codeymn-black?style=flat-square&logo=github" /></a>
</p>

---

### Installation

```bash
# Install from source
git clone https://github.com/rizqinrr/codeymn.git
cd codeymn
bun install && bun dev
```

> [!TIP]
> This is a development fork. For the original project, visit [https://github.com/anomalyco/opencode](https://github.com/anomalyco/opencode).

### Desktop App (BETA)

Download from the original OpenCode project: [https://github.com/anomalyco/opencode/releases](https://github.com/anomalyco/opencode/releases)

### Agents

Codeymn includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full-access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

### Documentation

For more info on how to configure Codeymn, please refer to the original project's documentation: [https://github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

### Contributing

If you're interested in contributing to Codeymn, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on Codeymn

If you are working on a project that's related to Codeymn and is using "Codeymn" as part of its name, for example "Codeymn-dashboard" or "Codeymn-mobile", please add a note to your README to clarify that it is not built by the Codeymn team and is not affiliated with us in any way.

---

**Original OpenCode community:** [Discord](https://discord.gg/opencode) | [X.com](https://x.com/opencode)
