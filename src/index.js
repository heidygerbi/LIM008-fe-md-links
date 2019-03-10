import {
  extractATagAttr,
  getFile
} from './models/links.js';
import {updateArrObjLinks} from '../src/models/validate.js';
import { calculateStats } from '../src/models/stats.js';
import { exists, promises } from 'fs';
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

export const getArrObjValidate = (pathAbs) => new Promise((resolve) => {
  const arrObjLinks = getArrObjLinks(pathAbs)
    .then(response => resolve(response))
    .catch(console.error);
  const result = updateArrObjLinks(arrObjLinks)
    .then(response => resolve(response))
    .catch(console.error);
  resolve(result);
});
