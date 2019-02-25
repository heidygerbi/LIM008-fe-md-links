import {
    evaluatePath,
    transformToAbsPath,
    recognizeIfIsFile,
    getFiles,
    getMDContent,
    convertMDToHtml,
    extractATagAttr,
    createArrLinkObj,
} from './models/links.js';
import {
    extractHref,
    verifyLink,
    addVerification
} from '../src/models/validate.js';
import {calculateStats} from '../src/models/stats.js';
export const mdLinks = (path, options) =>{
    evaluatePath(path);
    transformToAbsPath(path);
    recognizeIfIsFile(pathAbs);
    getFiles(pathAbs);
    convertMDToHtml(contMD);
    extractATagAttr(contHTML);
    createArrLinkObj(objInfLinks);
    extractHref(arrObjInfLinks);
    verifyLink(arrHref);
    addVerification(arrStatus);
    calculateStats(arrObjComplet);
};
