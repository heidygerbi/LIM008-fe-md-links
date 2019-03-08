import { fetch } from 'node-fetch';

// export const extractHref = (arrObjInfLinks) => {
//   const arrHref = [];
//   arrObjInfLinks.forEach(element => {
//     arrHref.push(element.href);     
//   });
//   return arrHref;
// };

// Esta función queda sin efecto pues se puede pasar el arr de objeto directo

export const verifyLink = (arrObjInfLinks) => {
  // if (arrHref) {
  //   const arrStatus = ['status', 'ok'];
  //   return arrStatus;
  // }
  return arrObjInfLinks.forEach(element => {
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
// http . cats 
//httpstatus.com


// export const addVerification = (objStatus) => new Promise((resolve, reject) => {
//   // if (arrStatus) {
//   //   const arrLinkStatus = ['link', 'status', 'ok'];
//   //   return arrLinkStatus;
//   // }
//   const arrLinkStatus = objStatus.map(element => verifyLink(element));
//   resolve(Promise.all(arrLinkStatus));
// });