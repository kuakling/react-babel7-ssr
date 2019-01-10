import jwt from 'jsonwebtoken'
import config from 'app-src/shared/core/config'

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = (name) => {
  function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
  const match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
  return match ? match[1] : null;
}

export const parserCookies = () => {
  const cookies = {};
  const cookiesStr = document.cookie;
  const c1 = cookiesStr.split('; ');
  c1.map(item => {
    const arr = item.split("=");
    cookies[arr[0]] = arr[1]
  })

  return cookies;
}

export const removeCookie = (name) => {
  document.cookie = `${name}=;path=/;Expires=${new Date().toUTCString()};`;
}

export const base64Encode = (str="") => {
  return Buffer.from(str).toString('base64');
}

export const base64Decode = (str="") => {
  return Buffer.from(str, 'base64').toString('ascii');
}


/* JWT */

// Sign a JWT.  Pass in an object, which will be publicly visible.
export function encodeJWT(data) {
  return jwt.sign(data, config.jwt.secretKey);
}

// Verify a JWT.  Note:  This can throw an error if the token is invalid,
// so always catch it!
export function decodeJWT(token) {
  return jwt.verify(token, config.jwt.secretKey);
}


export const encodeFakeId = id => {
  const idLength = 10
  const pos = Math.floor(Math.random() * idLength)
  const arrayId = []
  const a = [...Array(idLength).keys()].map((v, i) => {
    if (i === pos) arrayId.push(id)
    arrayId.push(Math.floor(Math.random() * 10))
  })
  arrayId.push(pos)

  return arrayId.join('')
}

export const decodeFakeId = code => {
  const codeLen = 11 //11 ตัวได้มาจากการ encodeFakeId 10 ตัว + ตำแนห่ง 1 ตัว เป็น 11 ไง
  const len = code.length - codeLen
  const pos = code.slice(-1)
  
  return parseInt(code.substr(pos, len))
}