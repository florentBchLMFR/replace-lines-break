import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "replace-line-breaks" is now active!');

    let replaceNewlinesCommand = vscode.commands.registerCommand('extension.replaceNewlines', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);

            // Remplacer les retours à la ligne par \n
            const updatedText = text.replace(/\r?\n/g, '\\n');
            editor.edit(editBuilder => {
                editBuilder.replace(selection, updatedText);
            });
        }
    });

    let restoreNewlinesCommand = vscode.commands.registerCommand('extension.restoreNewlines', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);

            // Remplacer \n par les retours à la ligne
            const updatedText = text.replace(/\\n/g, '\n');
            editor.edit(editBuilder => {
                editBuilder.replace(selection, updatedText);
            });
        }
    });

    context.subscriptions.push(replaceNewlinesCommand);
    context.subscriptions.push(restoreNewlinesCommand);
}

export function deactivate() {}
