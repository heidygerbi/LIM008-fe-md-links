import {
  evaluatePath,
  transformToAbsPath,
  recognizeIfIsFile,
  getMDContent,
  convertMDToHtml,
  extractATagAttr,
  validateExtMD,
  getFile
} from './models/links.js';
import {
  extractHref,
  verifyLink,
  addVerification
} from '../src/models/validate.js';
import { calculateStats } from '../src/models/stats.js';
import { exists, promises } from 'fs';
export const mdLinks = (path, options) => new promise((resolve, reject)=> {
  let pathAbs = path;
  if (!evaluatePath(path)) pathAbs = transformToAbsPath(path);
  resolve(getArrObjLinks(pathAbs).then());
});
const getArrObjLinks = (pathAbs) => new Promise((resolve, reject) => {
  let contHTML = '';
  if (recognizeIfIsFile(pathAbs)) {
    if (validateExtMD(pathAbs)) {
      contHTML = convertMDToHtml(getMDContent(pathAbs));
      return extractATagAttr(contHTML, pathAbs);
    }
  } else {
    let arrLinks = [];
    getFile(pathAbs).forEach(element => {
      if (validateExtMD(element)) {
        contHTML = convertMDToHtml(getMDContent(element));
        arrLinks = arrLinks.concat(extractATagAttr(contHTML, element));
      }
    });
    resolve(arrLinks);
  }
});