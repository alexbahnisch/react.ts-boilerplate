"use strict";


export function assign(object: any, ...objects: any[]): object {
  let obj: any = {};
  let key: string;

  for (obj of objects) {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        object[key] = obj[key]
      }
    }
  }

  return object;
}

export function pureAssign(...objects: any[]): object {
  return assign({}, ...objects)
}
