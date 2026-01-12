# StackFetch

> **The Project-Context Tool.** > Minimalist, lightning-fast CLI that displays essential information about your current working directory.

## Philosophy

StackFetch is designed for developers who value minimalism and focus. Instead of showing global OS info (like Neofetch), it shows context relevant to the **project you are working on**.

## Install

### From Source

Requirements: [Bun](https://bun.sh)

```bash
# 1. Clone the repository
git clone [https://github.com/stkossman/StackFetch](https://github.com/stkossman/StackFetch)
cd StackFetch

# 2. Install dependencies
bun install

# 3. Link globally
bun link
```

Now you can run `stackfetch` anywhere in your terminal.

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

## Roadmap

* [ ] Framework Detection:
    * Identify ecosystems like React, Astro, Next.js, NestJS, Django, Flask.
* [ ] Git Integration:
    * Show current branch (main, dev).
    * Visualize dirty state (modified files count).
* [ ] Health Check:
    * Count TODO and FIXME comments in the codebase.
* [ ] Package Manager Detection:
    * Show icon for npm, pnpm, bun, yarn, or cargo.
* [ ] Deep C# Analysis:
    * Parse .csproj for target framework (e.g., .net8.0).