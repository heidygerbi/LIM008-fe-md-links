export const extractHref = (arrObjInfLinks) => {
  const arrHref = [];
  arrObjInfLinks.forEach(element => {
    arrHref.push(element.href);     
  });
  console.log(arrHref);
  return arrHref;
};

export const verifyLink = (arrHref) => {
  if (arrHref) {
    const arrStatus = ['status', 'ok'];
    return arrStatus;
  }
};
export const addVerification = (arrStatus) => {
  if (arrStatus) {
    const arrLinkStatus = ['link', 'status', 'ok'];
    return arrLinkStatus;
  }
};
