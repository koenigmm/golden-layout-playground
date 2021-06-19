"use strict";
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow, ipcMain = _a.ipcMain;
var path = require('path');
var mainWindow;
function createBrowserWindow() {
    mainWindow = new BrowserWindow({
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
app.whenReady().then(function () {
    createBrowserWindow();
    mainWindow.webContents.openDevTools();
});
