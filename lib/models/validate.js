"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyLink = exports.updateArrObjLinks = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateArrObjLinks = arrObjInfLinks => new Promise(resolve => resolve(Promise.all(arrObjInfLinks.map(element => verifyLink(element)))));

exports.updateArrObjLinks = updateArrObjLinks;

const verifyLink = objInfLink => new Promise(resolve => (0, _nodeFetch.default)(objInfLink.href).then(resul => {
  if (resul.status >= 200 && resul.status < 400) {
    objInfLink.status = resul.status;
    objInfLink.value = 'OK';
    resolve(objInfLink);
  } else if (resul.status < 200 || resul.status >= 400) {
    objInfLink.status = resul.status;
    objInfLink.value = 'Fail';
    resolve(objInfLink);
  }
}).catch(err => {
  objInfLink.status = 404;
  objInfLink.value = 'Fail';
  resolve(objInfLink);
}));

exports.verifyLink = verifyLink;