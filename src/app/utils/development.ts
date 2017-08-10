"use strict";


export function createElement(id : string, tagName : string = "div") : HTMLElement {
  let element : HTMLElement = document.getElementById(id);

  if (!element) {
    element = document.createElement(tagName);
    element.setAttribute("id", id);
    document.body.appendChild(element);
  }

  return element;
}
