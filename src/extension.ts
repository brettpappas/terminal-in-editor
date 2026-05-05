import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext): void {
  const treeView = vscode.window.createTreeView('terminalInEditor.sidebarView', {
    treeDataProvider: new EmptyTreeProvider(),
  });

  treeView.onDidChangeVisibility(e => {
    if (e.visible) {
      vscode.commands.executeCommand('terminalInEditor.open');
      vscode.commands.executeCommand('workbench.action.closeSidebar');
    }
  });

  context.subscriptions.push(treeView);

  const cmd = vscode.commands.registerCommand('terminalInEditor.open', () => {
    const config = vscode.workspace.getConfiguration('terminalInEditor');
    const name = config.get<string>('name', 'Editor Terminal');
    const command = config.get<string>('command', '');

    const iconPath = vscode.Uri.joinPath(context.extensionUri, 'media', 'sidebar-icon.svg');

    const terminal = vscode.window.createTerminal({
      name,
      location: vscode.TerminalLocation.Editor,
      iconPath,
    });

    terminal.show();

    if (command.trim()) {
      terminal.sendText(command);
    }
  });

  context.subscriptions.push(cmd);
}

class EmptyTreeProvider implements vscode.TreeDataProvider<never> {
  getTreeItem(_element: never): vscode.TreeItem {
    return new vscode.TreeItem('');
  }

  getChildren(): never[] {
    return [];
  }
}

export function deactivate(): void {}
