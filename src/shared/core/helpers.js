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