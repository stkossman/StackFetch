# StackFetch

> **The Project-Context Tool.** 
> Minimalist, lightning-fast CLI that displays essential information about your current working directory.

## Philosophy

StackFetch is designed for developers who value minimalism. Instead of showing global OS info (like Neofetch), it shows context relevant to the **project you are working on**.

##### Check out my projects
<table>
    <tbody>
        <tr>
        <td><a href="https://github.com/stkossman/soliloquy"><img src="https://raw.githubusercontent.com/stkossman/soliloquy/9cfab307c5185642f57ddbe56c432058b4b3b026/public/logo.svg" width="14px"/> Soliloquy</a></td>
        <td>A local-first note-taking application with the UX of a messenger.</td>
        </tr>
    </tbody>
</table>

## Install

### From Source

Requirements: [Bun](https://bun.sh)

```bash
# 1. Clone the repository
git clone https://github.com/stkossman/StackFetch.git
cd StackFetch

# 2. Install dependencies
bun install

# 3. Link globally
bun link
```

Now you can run `stackfetch` anywhere in your terminal.

### Curl
> Coming Soon

### Package Managers
> Coming Soon

## Usage

Scan current directory:

```bash
stackfetch
```

Scan a specific project:
```bash
stackfetch ../my-other-project
stackfetch /var/www/website
```

## Supported Stacks

Currently detects and parses:
* JavaScript (`package.json`)
* TypeScript (`tsconfig.json`)
* Rust (`Cargo.toml`)
* Python (`requirements.txt` / `pyproject.toml`)
* C# (`*.csproj`)

## Configuration
> Coming Soon

You will be able to customize the output via `~/.config/stackfetch/config.json`

## Roadmap

* [ ] **One-Line Installer**: Universal install.sh script for Linux/macOS.
* [ ] **Native Binaries**: Automated GitHub Actions to build .exe (Windows) and binary (Linux) on release.
* [x] **Config System**: Allow users to hide logo or specific lines via JSON config.
* [ ] **Git Integration**: Display current branch and "dirty" state (modified files).
* [ ] **Framework Detection**: React, Astro, Next.js, NestJS, Django, Flask.
* [ ] **Package Repositories**: Official support for apt, dnf, brew.
* [ ] **Health Check**: Count TODO / FIXME comments in source code

---

<div align="center"> <p>Developed with ❤️ by <a href="https://github.com/stkossman">Kossman</a> 🇺🇦</p>