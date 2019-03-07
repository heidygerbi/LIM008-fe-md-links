import { fetch } from 'node-fetch';

export const extractHref = (arrObjInfLinks) => {
  const arrHref = [];
  arrObjInfLinks.forEach(element => {
    arrHref.push(element.href);     
  });
  return arrHref;
};

export const verifyLink = (arrHref) => {
  // if (arrHref) {
  //   const arrStatus = ['status', 'ok'];
  //   return arrStatus;
  // }
  return arrHref.forEach(element => {
    fetch(element.href)
      .then(resul => {
        if (resul.status >= 200 && resul.status < 300) {
          element.status = resul.status;
          element.value = 'OK';
          resolve(element);
        }
      }).catch(err => {
        if (resul.status < 200 || resul.status >= 300) {
          element.status = err.code;
          element.value = 'Fail';
          resolve(element);
        }
      });
  });
};
export const addVerification = (arrStatus) => new Promise((resolve, reject) => {
  // if (arrStatus) {
  //   const arrLinkStatus = ['link', 'status', 'ok'];
  //   return arrLinkStatus;
  // }
  const arrLinkStatus = arrStatus.map(element => verifyLink(element));
  resolve(Promise.all(arrLinkStatus));
});