"use strict";


export function addLiveReloadSource() : void {
  if (process.env.NODE_ENV !== "production") {
    let liveReload : HTMLElement = document.createElement("script");
    liveReload.setAttribute("src", "http://localhost:35729/livereload.js");
    document.body.appendChild(liveReload);
  }
}


export function createElement(id : string, tagName : string = "div") : HTMLElement {
  let element : HTMLElement = document.getElementById(id);

  if (!element) {
    element = document.createElement(tagName);
    element.setAttribute("id", id);
    document.body.appendChild(element);
  }

  return element;
}
