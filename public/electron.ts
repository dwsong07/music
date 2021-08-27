import { app, BrowserWindow } from "electron";
import path from "path";
import isDev from "electron-is-dev";

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
    });

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
}

app.whenReady().then(() => {
    createWindow();

    // For mac OS
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
