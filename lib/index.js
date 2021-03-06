"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrObjValidate = exports.getArrObjLinks = exports.mdLinks = void 0;

var _links = require("./models/links.js");

var _validate = require("./models/validate.js");

var _marked = _interopRequireDefault(require("marked"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mdLinks = (path, options) => {
  let pathAbs = path;
  if (!_path.default.isAbsolute(path)) pathAbs = _path.default.resolve(path);
  return new Promise(resolve => {
    if (options === undefined || !options.validate) {
      getArrObjLinks(pathAbs).then(response => resolve(response)).catch(console.error);
    } else if (options.validate) {
      getArrObjValidate(pathAbs).then(response => resolve(response)).catch(console.error);
    }
  });
};

exports.mdLinks = mdLinks;

const getArrObjLinks = pathAbs => new Promise(resolve => {
  let contHTML = '';

  if (_fs.default.statSync(pathAbs).isFile()) {
    if (_path.default.extname(pathAbs) === '.md' || _path.default.extname(pathAbs) === '.MD') {
      // aqui hay que usar funcion para convertir todo a mayuscula o minuscula
      contHTML = (0, _marked.default)(_fs.default.readFileSync(pathAbs, 'utf8'));
      resolve((0, _links.extractATagAttr)(contHTML, pathAbs));
    }
  } else {
    let arrLinks = [];
    (0, _links.getFile)(pathAbs).forEach(element => {
      if (_path.default.extname(element) === '.md' || _path.default.extname(pathAbs) === '.MD') {
        // aqui hay que usar funcion para convertir todo a mayuscula o minuscula
        contHTML = (0, _marked.default)(_fs.default.readFileSync(element, 'utf8'));
        arrLinks = arrLinks.concat((0, _links.extractATagAttr)(contHTML, element));
      }
    });
    resolve(arrLinks);
  }
});

exports.getArrObjLinks = getArrObjLinks;

const getArrObjValidate = pathAbs => new Promise(resolve => getArrObjLinks(pathAbs).then(response => (0, _validate.updateArrObjLinks)(response)).then(response => resolve(response)));

exports.getArrObjValidate = getArrObjValidate;