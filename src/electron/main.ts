"use strict";
import {app, BrowserWindow} from "electron"
import * as path from "path"
import * as url from "url"


let win: any;


function createWindow() {
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    center: true,
    // title: "boilerplate",
    darkTheme: true
  });

  win.loadURL(url.format({
    pathname: path.resolve(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  }));

  win.on("close", () => {
    win = null;
  });
}


app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});

app.on("ready", createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
