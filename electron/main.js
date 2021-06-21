"use strict";
//const {app, BrowserWindow, ipcMain} = require('electron');
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require('path');
var mainWindow;
function createBrowserWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1280,
        height: 720,
        title: "Golden Layout Test",
        webPreferences: {
            nodeIntegration: true,
            //contextIsolation: false
            //preload: path.join(__dirname, "./app/preload.js"),
            contextIsolation: false
        }
    });
    mainWindow.loadFile("./app/index.html");
}
electron_1.app.whenReady().then(function () {
    createBrowserWindow();
    mainWindow.webContents.openDevTools();
});
//# sourceMappingURL=main.js.map