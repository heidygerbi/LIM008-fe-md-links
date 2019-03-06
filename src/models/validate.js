import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import {fetch} from 'whatwg-fetch';

export const extractHref = (arrObjInfLinks) => {
  const arrHref = [];
  arrObjInfLinks.forEach(element => {
    arrHref.push(element.href);     
  });
  console.log(arrHref);
  return arrHref;
};

export const verifyLink = (arrHref) => {
  // use native browser implementation if it supports aborting
  const abortableFetch = ('signal' in new Request('')) ? window.fetch : fetch;
  const controller = new AbortController();
  abortableFetch('/avatars', {
    signal: controller.signal
  }).catch((ex) => {
    if (ex.name === 'AbortError') {
      console.log('request aborted');
    }
  });
  // if (arrHref) {
  //   const arrStatus = ['status', 'ok'];
  //   return arrStatus;
  // }
};
export const addVerification = (arrStatus) => {
  if (arrStatus) {
    const arrLinkStatus = ['link', 'status', 'ok'];
    return arrLinkStatus;
  }
};
