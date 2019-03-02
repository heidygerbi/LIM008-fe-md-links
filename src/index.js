import {
  evaluatePath,
  transformToAbsPath,
  recognizeIfIsFile,
  getMDContent,
  convertMDToHtml,
  extractATagAttr,
  createArrLinkObj,
  validateExtMD,
  getFile
} from './models/links.js';
import {
  extractHref,
  verifyLink,
  addVerification
} from '../src/models/validate.js';
import { calculateStats } from '../src/models/stats.js';
export const mdLinks = (path, options) => {
  let pathAbs = path;
  let contHTML = '';
  let objInfLinks;
  if (!evaluatePath(path)) pathAbs = transformToAbsPath(path);
  if (recognizeIfIsFile(pathAbs)) {
    if (validateExtMD(pathAbs)) {
      contHTML = convertMDToHtml(getMDContent(pathAbs));
      extractATagAttr(contHTML);
      objInfLinks = getObjInfLinks();
    }
  }
  return objInfLinks;
};
