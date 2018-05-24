"use strict";
import {app, BrowserWindow} from "electron"
import * as path from "path"
import * as url from "url"


function createWindow() {
  const win = new BrowserWindow();

  win.loadURL(url.format({
    pathname: path.resolve(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  }))
}

app.on("ready", createWindow);
