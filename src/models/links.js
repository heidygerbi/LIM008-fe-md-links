let paths = require('path');
let fs = require('fs');
let marked = require('marked');
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
export const evaluatePath = (path) => paths.isAbsolute(path);
// console.log(`evaluatePath: ${evaluatePath('C:/Users/heidy/Desktop/LIM008-fe-md-links/src/index.js')}`)
export const transformToAbsPath = (path) => paths.resolve(path); 
// `${process.cwd(path)}/${paths.basename(path)}`; 
// console.log(`transformToAbsPath: ${transformToAbsPath('../index.js')}`);
export const recognizeIfIsFile = (pathAbs) => fs.statSync(pathAbs).isFile();
// console.log(`recognizeIfIsFile: ${recognizeIfIsFile('C:/Users/Usuario/Desktop/LIM008-fe-md-links/')}`);
export const validateExtMD = (pathAbs) => paths.extname(pathAbs);
// console.log(`validateExtMD: ${validateExtMD('C:/Users/Usuario/Desktop/LIM008-fe-md-links/index.js')}`);
export const getMDContent = (pathAbs) => fs.readFileSync(pathAbs, 'utf8');
// console.log(getMDContent('C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/testDir/a/a1/a1.md'));
export const convertMDToHtml = (contMD) => marked(contMD);
// console.log(`convertMDToHtml: ${convertMDToHtml('[GitHub](http://github.com')}`);
export const extractATagAttr = (contHTML, pathAbs) => {
    const dom = new JSDOM(contHTML);
    const text = dom.window.document.querySelector('a').textContent;
    const link = dom.window.document.querySelector('a').href;
    const path = pathAbs;  
    const objInfLinks = {
        href: link,
        text: text,
        file: path
    };
    return objInfLinks;
};
// console.log(const objInfLinks = extractATagAttr('<p><a href="http://github.com">texto de ruta</a></p>'));

export const createArrLinkObj = (objInfLinks) => {
    const arrObjInfLinks = [];
    arrObjInfLinks.push(objInfLinks);
    return arrObjInfLinks;
};
// export const openFile = (path) => fs.openSync(path, 'rs');
// console.log(openFile('C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/testDir'));
// const path = 'C:/Users/Usuario/Desktop/LIM008-fe-md-links/test/testDir/a/a1';
// const ContentPath = fs.readdirSync(path); 
// const pathEachChildrenDir = [];
// const pathEachChildrenFile = [];
// let pathEachChildren = '';
// console.log(ContentPath);
// ContentPath.forEach((element) => {
//     pathEachChildren = paths.normalize(path + '/' + element);
//     if (fs.statSync(pathEachChildren).isFile()) console.log('entra aqui'); 
    // pathEachChildrenFile.push(pathEachChildren);
//    else if (fs.statSync(pathEachChildren).isDirectory()) pathEachChildrenDir.push(pathEachChildren);
// });
// console.log(pathEachChildrenFile);
// console.log(pathEachChildrenDir);



    // children: Fs.readdirSync(dir).map(file => {
    //     const path = Path.join(dir, file);
    //     return Fs.lstatSync(path).isDirectory()
    //     ? traverseSync(path)
    //     : [path];
    //     })
    //   });
    // fs.readdirSync (path [, opciones]) // leer una ruta  