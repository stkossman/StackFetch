# StackFetch

> **The Project-Context Tool.** 
> Minimalist, lightning-fast CLI that displays essential information about your current working directory.

## Philosophy

StackFetch is CLI that displays essential information about your current working directory. Instead of showing global OS info (like Neofetch), it shows context relevant to the **project you are working on**.

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
```bash
curl -fsSL https://raw.githubusercontent.com/stkossman/StackFetch/main/install.sh | bash
```

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

StackFetch currently supports **10+ languages and frameworks** including:
* **Languages**: JS, TS, C#, Java, Rust, Go, Python, C/C++.
* **Frameworks**: React, Next.js, Astro, Vue, NestJS

**[View full list of supported stacks & detection rules](docs/supported_stacks.md)**

## Configuration
StackFetch is highly customizable. Upon first launch, it automatically creates a config file at `~/.config/stackfetch/config.json`.

You can toggle the ASCII logo, borders, titles, or specific data lines to match your terminal aesthetic.

**[Read the Configuration Guide](docs/configuration.md)**

## Roadmap

### Core
* [x] **One-Line Installer**: Universal install.sh script for Linux/macOS.
* [x] **Native Binaries**: Automated GitHub Actions to build .exe (Windows) and binary (Linux) on release.
* [x] **Config System**: Allow users to hide logo or specific lines via JSON config.
* [ ] **Package Repositories**: Official support for apt, dnf, brew.

### Analysis Engine
* [x] **Basic Frameworks:** React, Astro, Next.js, NestJS.
* [ ] **Desktop & Mobile:** Detect Electron, Tauri, React Native, Expo.
* [ ] **Full-stack & Meta:** Nuxt, SvelteKit, Remix.
* [ ] **Styling & UI:** Detect TailwindCSS, Bootstrap, Sass, PostCSS, Material UI, Chakra UI.
* [ ] **Infrastructure:** Detect Docker, Kubernetes.
* [ ] **Package Manager:** Identify npm, pnpm, yarn, or bun usage.

---

<div align="center"> <p>Developed with ❤️ by <a href="https://github.com/stkossman">Kossman</a> 🇺🇦</p>