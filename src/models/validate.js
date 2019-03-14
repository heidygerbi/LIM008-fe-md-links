import fetch from 'node-fetch';

export const updateArrObjLinks = (arrObjInfLinks) => new Promise((resolve) =>
  resolve(Promise.all(arrObjInfLinks.map((element => verifyLink(element))))));

export const verifyLink = (objInfLink) =>
  new Promise((resolve) => fetch(objInfLink.href)
    .then(resul => {
      if (resul.status >= 200 && resul.status < 400) {
        objInfLink.status = resul.status;
        objInfLink.value = 'OK';
        resolve(objInfLink);
      } else if (resul.status < 200 || resul.status >= 400) {
        objInfLink.status = resul.status;
        objInfLink.value = 'Fail';
        resolve(objInfLink);
      }
    })
    .catch(err => {
      objInfLink.status = 404; 
      objInfLink.value = 'Fail';
      resolve(objInfLink);
    }));