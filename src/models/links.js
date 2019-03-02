import paths from 'path';
import fs from 'fs';
import marked from 'marked';
import jsdom from 'jsdom';
// import { stringify } from 'querystring';
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
// export const getFile = (path) => {
//   const contentPath = fs.readdirSync(path);
//   let result = [];
//   contentPath.forEach((element) => {
//     console.log('est es pathEachChildren: ' + pathEachChildren.push(paths.normalize(path + '/' + element)));
//     pathEachChildren.forEach((ele) => {
//       // result = fs.statSync(ele).isFile() 
//       // ? pathEachChildrenFile.push(ele) 
//       // : getFile(ele);
//       if (fs.statSync(ele).isFile()) {
//         pathEachChildrenFile.push(ele);
//         result = pathEachChildrenFile;
//       } else result = getFile(ele);
//     });
//   });
//   return result;
// };
export const getFile = (path) => {
  let pathEachChildrenFile = [];
  let pathEachChildren = [];
  const ContentPath = fs.readdirSync(path);
  for (let i = 0; i < ContentPath.length; i++) 
    pathEachChildren[i] = paths.normalize(path + '/' + ContentPath[i]);
  for (let j = 0; j < pathEachChildren.length; j++) {  
    if (fs.statSync(pathEachChildren[j]).isFile()) {
      pathEachChildrenFile.push(pathEachChildren[j]);
      return pathEachChildrenFile;
    } else return getFile(pathEachChildren[j]);
  }
};