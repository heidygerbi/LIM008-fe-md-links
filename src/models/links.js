let paths = require('path');
let fs = require('fs');

export const evaluatePath = (path) => {
   if(paths.isAbsolute(path)) return true;
   else return false;    
};

export const transformToAbsPath = (path) => paths.resolve(path);
// export 
// const recognizeIfIsFile = (pathAbs) => {
//     console.log(fs.lstat.isFile());
//     // if (fs.lstat.isFile(pathAbs)) return true;
//     // else return false;
// };  
// const inputPathAbs = 'C:/Users/Usuario/Desktop/src/models/stats.js';
// const inputPathAbsDir = 'C:/Users/Usuario/Desktop/src/models';   
// console.log(recognizeIfIsFile(inputPathAbs));
// console.log(transformToAbsPath('../../test'));

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