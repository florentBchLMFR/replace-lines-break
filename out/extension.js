"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
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
function deactivate() { }
//# sourceMappingURL=extension.js.map