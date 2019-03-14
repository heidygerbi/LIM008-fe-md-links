"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFile = exports.extractATagAttr = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _jsdom = _interopRequireDefault(require("jsdom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  JSDOM
} = _jsdom.default;

const extractATagAttr = (contHTML, pathAbs) => {
  const dom = new JSDOM(contHTML);
  let objInfLinks = {};
  let arrObjInfLinks = [];
  const text = dom.window.document.querySelectorAll('a');

  for (let tagA of text) {
    objInfLinks = {
      href: tagA.href,
      text: tagA.textContent.slice(0, 50),
      file: pathAbs
    };
    arrObjInfLinks.push(objInfLinks);
  }

  return arrObjInfLinks;
};

exports.extractATagAttr = extractATagAttr;

const getFile = path => {
  let result = [];
  let pathEachChildrenFile = [];
  let pathEachChildren = [];

  const contentPath = _fs.default.readdirSync(path);

  contentPath.forEach(ele => pathEachChildren.push(_path.default.normalize(path + '/' + ele)));

  if (pathEachChildren.length > 0) {
    pathEachChildren.forEach(element => {
      if (_fs.default.statSync(element).isFile()) {
        if (element !== '') pathEachChildrenFile.push(element);
        result = result.concat(pathEachChildrenFile);
      } else result = result.concat(getFile(element));
    });
  }

  return result;
};

exports.getFile = getFile;