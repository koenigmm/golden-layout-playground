const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

let mainWindow: Electron.BrowserWindow;

function createBrowserWindow(): void {
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

    mainWindow.loadFile("./index.html");
}

app.whenReady().then(() => {
    createBrowserWindow();
    mainWindow.webContents.openDevTools()
})


