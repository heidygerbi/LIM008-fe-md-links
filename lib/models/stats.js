"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrLinksBroken = exports.getArrLinksUnique = exports.calculateStats = void 0;

const calculateStats = (arrObjLinks, valValuate) => {
  if (valValuate) {
    const stats = {
      total: arrObjLinks.length,
      unique: getArrLinksUnique(arrObjLinks).length,
      broken: getArrLinksBroken(arrObjLinks).length
    };
    return stats;
  } else {
    const stats = {
      total: arrObjLinks.length,
      unique: getArrLinksUnique(arrObjLinks).length
    };
    return stats;
  }
};

exports.calculateStats = calculateStats;

const getArrLinksUnique = arrObjLinks => {
  const arrHref = [];
  arrObjLinks.forEach(element => arrHref.push(element.href));
  return arrHref.filter((value, index, result) => result.indexOf(value) === index);
};

exports.getArrLinksUnique = getArrLinksUnique;

const getArrLinksBroken = arrObjLinks => {
  const arrBroken = [];
  arrObjLinks.forEach(element => {
    if (element.status < 200 || element.status >= 400) arrBroken.push(element.status);
  });
  return arrBroken;
};

exports.getArrLinksBroken = getArrLinksBroken;