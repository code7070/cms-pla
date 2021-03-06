import Cookies from "js-cookie";

export const getCookie = (name) => {
  if (!name) return "";
  return Cookies.get(name);
};

export const setCookie = (name, value, expires = 1, path = "/") => {
  return Cookies.set(name, value, { expires, path });
};

export const removeCookie = (name) => Cookies.remove(name);

export const isLogin = () => {
  return getCookie("super-login") || getCookie("token");
};

export const isLocalLogin = () => {
  return localStorage.getItem("super-login");
};
