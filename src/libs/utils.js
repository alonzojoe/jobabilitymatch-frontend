import moment from "moment";
import api from "@/services/api";

export const formatDateTime = (cdate) => {
  return moment(cdate).format("lll");
};

export const setLocalStorage = (key, value) => {
  const stringifiedVal = JSON.stringify(value);
  localStorage.setItem(key, stringifiedVal);
};

export const getLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return JSON.parse(storedValue) ?? undefined;
};

export const logout = () => {
  api.post("/auth/logout");
  localStorage.removeItem("auth-token");
  localStorage.removeItem("auth-user");
  window.location.href = "/";
};

export const handlePhoneInput = (event) => {
  const { value } = event.target;
  event.target.value = value.replace(/\D/g, "").slice(0, 10);
};
