# Terminal in Editor

A VS Code extension that opens a terminal as a main editor tab — not tucked away in the bottom panel.

By default it launches **Claude Code** directly in the editor, giving Claude a full-panel workspace alongside your files.

![Claude Code running in an editor tab](https://raw.githubusercontent.com/brettpappas/terminal-in-editor/main/media/sidebar-icon.svg)

## Features

- Opens a terminal as a first-class editor tab
- Launches Claude Code automatically on open (configurable)
- Two trigger methods: activity bar icon or keyboard shortcut
- Tab icon matches the Claude logo

## Usage

| Method | Action |
|---|---|
| Click the Claude icon in the activity bar | Opens terminal in editor |
| `Ctrl+Alt+T` / `Cmd+Alt+T` | Opens terminal in editor |

## Configuration

| Setting | Default | Description |
|---|---|---|
| `terminalInEditor.command` | `claude` | Command to run when the terminal opens. Set to empty string for a plain shell. |
| `terminalInEditor.name` | `Editor Terminal` | Name shown on the editor tab. |

Settings can be changed in **File → Preferences → Settings** and searching for `Terminal in Editor`.

## Keybinding

The default shortcut is `Ctrl+Alt+T` (Windows/Linux) or `Cmd+Alt+T` (Mac). To rebind it:

1. Open the Keyboard Shortcuts editor: `Cmd+K Cmd+S`
2. Search for `Open Terminal in Editor Tab`
3. Click the pencil icon and press your preferred key combination

## Requirements

- VS Code 1.74 or later
- [Claude Code](https://claude.ai/code) installed and available on your `PATH` (for the default behavior)
