import {
  extractATagAttr,
  getFile
} from './models/links.js';
import {updateArrObjLinks} from './models/validate.js';
import marked from 'marked';
import paths from 'path';
import fs from 'fs';

export const mdLinks = (path, options) => {
  let pathAbs = path;
  if (!paths.isAbsolute(path)) pathAbs = paths.resolve(path);
  return new Promise((resolve) => {
    if (options === undefined || (!options.validate)) {
      getArrObjLinks(pathAbs)
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.validate) {
      getArrObjValidate(pathAbs)
        .then(response => resolve(response))
        .catch(console.error);
    } 
  });
};
export const getArrObjLinks = (pathAbs) => new Promise((resolve) => {
  let contHTML = '';
  if (fs.statSync(pathAbs).isFile()) {
    if (paths.extname(pathAbs)) {
      contHTML = marked(fs.readFileSync(pathAbs, 'utf8'));
      resolve(extractATagAttr(contHTML, pathAbs));
    }
  } else {
    let arrLinks = [];
    getFile(pathAbs).forEach(element => {
      if (paths.extname(element)) {
        contHTML = marked(fs.readFileSync(element, 'utf8'));
        arrLinks = arrLinks.concat(extractATagAttr(contHTML, element));
      }
    });
    resolve(arrLinks);
  }
});

export const getArrObjValidate = (pathAbs) => new Promise((resolve) =>  
  getArrObjLinks(pathAbs)
    .then(response => updateArrObjLinks(response))
    .then(response => resolve(response)));