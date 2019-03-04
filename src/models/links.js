import paths from 'path';
import fs from 'fs';
import marked from 'marked';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export const evaluatePath = (path) => paths.isAbsolute(path);

export const transformToAbsPath = (path) => paths.resolve(path);
// `${process.cwd(path)}/${paths.basename(path)}`; 

export const recognizeIfIsFile = (pathAbs) => fs.statSync(pathAbs).isFile();

export const validateExtMD = (pathAbs) => paths.extname(pathAbs);

export const getMDContent = (pathAbs) => fs.readFileSync(pathAbs, 'utf8');

export const convertMDToHtml = (contMD) => marked(contMD);

export const extractATagAttr = (contHTML, pathAbs) => {
  const dom = new JSDOM(contHTML);
  let objInfLinks = {};
  let arrObjInfLinks = [];
  const text = dom.window.document.querySelectorAll('a');
  for (let tagA of text) {
    objInfLinks = {
      href: tagA.href,
      text: tagA.textContent,
      file: pathAbs
    };
    arrObjInfLinks.push(objInfLinks);
  }
  return arrObjInfLinks;
};


export const getFile = (path) => {
  let result = [];
  let pathEachChildrenFile = [];
  let pathEachChildren = [];
  const contentPath = fs.readdirSync(path);
  contentPath.forEach(ele => pathEachChildren.push(paths.normalize(path + '/' + ele)));
  if (pathEachChildren.length > 0) {
    pathEachChildren.forEach(element => {
      if (fs.statSync(element).isFile()) {
        if (element !== '') pathEachChildrenFile.push(element);
        result = result.concat(pathEachChildrenFile);
      } else result = result.concat(getFile(element));
    });
  }
  return result;
};

  // arrObjAllInfLinks.push(arrObjInfLinks);
  // const arrObjAllInfLinks = [];
  // for (let i = 0; i < arrObjInfLinks.length; i++) {
  //   console.log(`esto es element: ${arrObjInfLinks[i]}`);
  //   arrObjAllInfLinks.push(arrObjInfLinks[i]);
  // } 

//   return arrObjAllInfLinks;
// };
