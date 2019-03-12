import {
  extractATagAttr,
  getFile
} from './models/links.js';
import {updateArrObjLinks} from '../src/models/validate.js';
import {calculateStats} from '../src/models/stats.js';
import marked from 'marked';
import paths from 'path';
import fs from 'fs';
let options = {
  validate: false,
  stats: false,
};
export const mdLinks = (path, options) => {
  let pathAbs = path;
  if (!paths.isAbsolute(path)) pathAbs = paths.resolve(path);
  return new Promise((resolve) => {
    if (options === undefined || (!options.validate && !options.stats)) {
      getArrObjLinks(pathAbs)
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.validate && !options.stats) {
      getArrObjValidate(pathAbs)
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.stats && options.validate) {
      // const arrComplet = [];
      // arrComplet.push(getArrObjValidate(pathAbs));
      getObjStats(pathAbs, options)
        .then(response => resolve(response))
        .catch(console.error);
      // resolve(arrComplet);
    } else if (options.stats && !options.validate) {
      // const arrComplet = [];
      // arrComplet.push(getArrObjLinks(pathAbs));
      getObjStats(pathAbs, options)
        .then(response => resolve(response))
        .catch(console.error);
      // resolve(arrComplet);
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

export const getObjStats = (pathAbs, options) => new Promise((resolve) => {
  if (options.validate) {
    return getArrObjValidate(pathAbs)
      .then(response => calculateStats(response))
      .then(response => resolve(response));
  } else {
    return getArrObjLinks(pathAbs)
      .then(response => calculateStats(response))
      .then(response => resolve(response));
  }
});
module.exports = mdLinks;