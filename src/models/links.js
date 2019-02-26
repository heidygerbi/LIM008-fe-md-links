let paths = require('path');
let fs = require('fs');
export const evaluatePath = (path) => paths.isAbsolute(path);
// console.log('evaluatePath: ' + evaluatePath('C:/Users/heidy/Desktop/LIM008-fe-md-links/src/index.js'))
export const transformToAbsPath = (path) => paths.resolve(path);
// console.log('transformToAbsPath: ' + transformToAbsPath('../index.js'))
export const recognizeIfIsFile = (pathAbs) => fs.statSync(pathAbs).isFile();

export const getFiles = (pathAbs) => {
    if (pathAbs) {
        const arrPath = ['ruta1','ruta2'];
        return arrPath;
    }
};
export const getMDContent = (pathAbs) => {
    if (pathAbs) {
        const contMD = 'contenido MD';
        return contMD;
    }
};
export const convertMDToHtml = (contMD) => {
    if (contMD) {
        const contHTML = 'contenido HTML';
        return contHTML;
    }
};
export const extractATagAttr = (contHTML) => {
    if (contHTML) {
        const objInfLinks = {
            href:'link',
            text:'text',
            file:'path'
        };
        return objInfLinks;
    }
};
export const createArrLinkObj = (objInfLinks) => {
    if (objInfLinks) return [{href:'link',text:'text',file:'path'}];
};