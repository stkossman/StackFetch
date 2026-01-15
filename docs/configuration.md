# Configuration

StackFetch is designed to work out of the box with sensible defaults. However, it gives you granular control over the output to fit your specific workflow or aesthetic preferences.

## File Location

On the **first run**, StackFetch automatically generates a configuration file at:

```bash
~/.config/stackfetch/config.json
```

You can edit this file with any text editor to change the settings.

## Default Schema

The configuration uses a standard JSON format. Here are the default settings generated for you:

```bash
{
  "display": {
    "logo": true,
    "title": true,
    "border": true
  },
  "modules": {
    "project": true,
    "version": true,
    "stack": true,
    "styles": true,
    "config": true
  }
}
```

## Options Reference

### Display Settings (`display`)

Control the visual container and artistic elements.

| Key | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| logo | boolean | true | Show the ASCII art logo of the detected language or framework |
| title | boolean | true | Show the "StackFetch" title embedded in the top border |
| border | boolean | true | Draw the rounded box around the content. If false, outputs plain text |

### Data Modules (`modules`)

Toggle specific lines of information on/off.

| Key | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| project | boolean | true | Display project name (parsed from config file or folder name) |
| version | boolean | true | Display project version (e.g., `1.0.0`) |
| stack | boolean | true | Display the detected technology (e.g., `React`, `Rust`) |
| styles | boolean | true | Display detected CSS frameworks/libraries (e.g., `Tailwind`, `Sass`) |
| config | boolean | true | Display the source file used for detection (e.g., `package.json`) |