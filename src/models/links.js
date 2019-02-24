export const evaluatePath = (path) => {
    if (path.isAbsolute) return true;
    else return false;    
};
export const transformToAbsPath = (path) => {
    const pathRelative = path;
    const pathAbs= 'C:/rutaAbsoluta/archivo.md';
    return pathAbs;
};
export const recognizeIfIsFile = (pathAbs) => {
    if (pathAbs) return true;
    else return false;
};
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
    if (objInfLinks) {
        const arrObjInfLinks = [{
            href:'link',
            text:'text',
            file:'path'
        }];
        return arrObjInfLinks;
    }
};