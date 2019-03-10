import paths from 'path';
import fs from 'fs';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export const extractATagAttr = (contHTML, pathAbs) => {
  const dom = new JSDOM(contHTML);
  let objInfLinks = {};
  let arrObjInfLinks = [];
  const text = dom.window.document.querySelectorAll('a');
  for (let tagA of text) {
    objInfLinks = {
      href: tagA.href,
      text: (tagA.textContent).slice(0, 50),
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