export const calculateStats = (arrObjLinks) => {
  if (arrObjLinks[0].status && arrObjLinks[0].value) {
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

export const getArrLinksUnique = (arrObjLinks) => {
  const arrHref = [];
  arrObjLinks.forEach(element => arrHref.push(element.href));
  return arrHref.filter((value, index, result) => result.indexOf(value) === index);
};

export const getArrLinksBroken = (arrObjLinks) => {
  const arrBroken = [];
  arrObjLinks.forEach(element => {
    if (element.status < 200 || element.status >= 400)
      arrBroken.push(element.status);
  });
  return arrBroken;
};