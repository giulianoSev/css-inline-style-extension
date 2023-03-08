import * as vscode from 'vscode';
import { getResult } from 'css-inline-styler';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.languages.registerDocumentFormattingEditProvider(
    { language: 'css', scheme: 'file' },
    {
      provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
        const result = getResult(document.getText());
        return [vscode.TextEdit.replace(new vscode.Range(0, 0, document.lineCount, 0), result)];
      },
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
