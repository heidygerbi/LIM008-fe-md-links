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
import { exists } from 'fs';
export const mdLinks = (path, options) => {
  let pathAbs = path;
  let contHTML = '';
  if (!evaluatePath(path)) pathAbs = transformToAbsPath(path);
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
    return arrLinks;
  }
};