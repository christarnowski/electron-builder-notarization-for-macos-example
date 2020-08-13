import * as path from "path";
import * as url from "url";

import {app, BrowserWindow} from "electron";

let win: BrowserWindow | null = null;

async function createWindow(): Promise<BrowserWindow | null> {
  if (win !== null) {
    return win;
  }

  win = new BrowserWindow();

  await win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  }));

  win.on("closed", () => {
    win = null;
  });

  return win;
}

async function main() {
  try {
    app.on("ready", async () => {
      win = await createWindow();
    });

    app.on("window-all-closed", () => {
      app.quit();
    });

    app.on("activate", async () => {
      if (win === null) {
        await createWindow();
      }
    });
  } catch (e) {
    process.exit(1);
  }
}

// noinspection JSIgnoredPromiseFromCall
main();
