import axios from "axios";

export let _localStorage = {};

export const updateLocalStorage = async (data) => {
  // UPDATE LOCAL STORAGE

  _localStorage = data;

  if (localStorage) {
    localStorage.removeItem("user");
    window.location.replace("/");
  }
};

// RETURN TOKEN ACCORDING TO CURRENT PANEL USER
const returnToken = () => {
  let token = localStorage.getItem("user");

  token = token ? JSON.parse(token) : null;

  return token?.User?.id;
};

export const baseUrl = 'https://admify-api.apt.shiksha/api/';

// export const baseUrl = `http://192.168.1.39:3010/api/`;

// INTERCEPTORS FOR REQUESTS
axios.defaults.timeout = 180000;
axios.interceptors.request.use(
  function (config) {
    // config.timeout = 1800000;
    config.headers.Authorization = returnToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const post = async (url, data) => {
  try {
    const res = await axios.post(baseUrl + url, data);
    return { statusCode: res?.status, data: res.data };
  } catch (e) {
    if (e?.response?.data?.error?.statusCode === 401) {
      updateLocalStorage();
    }

    return {
      statusCode: e?.response?.data?.error?.statusCode || 404,
      message:
        e.response.data === undefined
          ? e?.message
          : e?.response?.data?.error?.message,
    };
  }
};

export const patch = async (url, data) => {
  try {
    const res = await axios.patch(baseUrl + url, data);
    return { statusCode: res.status, data: res.data };
  } catch (e) {
    if (e?.response?.data?.error?.statusCode === 401) {
      updateLocalStorage();
    }
    return {
      statusCode: e?.response?.data?.error?.statusCode || 404,
      message:
        e.response.data === undefined
          ? e?.message
          : e?.response?.data?.error?.message,
    };
  }
};

export const get = async (url) => {
  try {
    const res = await axios.get(baseUrl + url);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    if (err?.response?.data?.error?.statusCode === 401) {
      updateLocalStorage();
    }
  }
};

export const deletethis = async (url) => {
  try {
    const res = await axios.delete(baseUrl + url);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    if (err?.response?.data?.error?.statusCode === 401) {
      updateLocalStorage();
    }
  }
};


export const yyyymmdd = (date) => {
  const _date = {
    y: new Date(date).getFullYear(),
    m: new Date(date).getMonth() + 1 < 10 ? `0${new Date(date).getMonth() + 1}` : new Date(date).getMonth(),
    d: new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate()
  }

  return `${_date.y}-${_date.m}-${_date.d}`
}
export   function capitalizeFirstLetter(str) {
  // Check if the input string is not empty
  if (str.length === 0) {
    return str;
  }

  // Capitalize the first letter and concatenate it with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}