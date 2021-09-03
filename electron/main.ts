import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import isDev from "electron-is-dev";
import installExtension, {
    REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";
import ipc from "./ipc";

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
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

    if (isDev) {
        installExtension(REACT_DEVELOPER_TOOLS)
            .then((name) => console.log(`${name} extension added`))
            .catch((err) =>
                console.error(`Error occurred when installing extension ${err}`)
            );
    }

    for (const key in ipc) {
        console.log(key, ipc[key]);
        ipcMain.handle(key, ipc[key]);
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
