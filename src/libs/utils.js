import moment from "moment";
import api from "@/services/api";
import Swal from "sweetalert2";

export class ToastMessage {
  notif(icon, title) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon,
      title,
    });
  }
}

export class ConfirmDialog {
  confirm(icon, title, text) {
    return Swal.fire({
      icon,
      title,
      text,
      showCancelButton: true,
      confirmButtonText: "Yes",
    });
  }
}

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
  localStorage.removeItem("user-bookmark");
  window.location.href = "/";
};

export const handlePhoneInput = (event) => {
  const { value } = event.target;
  event.target.value = value.replace(/\D/g, "").slice(0, 10);
};

export const handlePwdIdNo = (event) => {
  const { value } = event.target;
  event.target.value = value.replace(/[^0-9-]/g, "").slice(0, 30);
};

const authUser = getLocalStorage("auth-user");

export const isPWD = () => {
  return authUser && authUser.id && authUser.role_id == 2;
};

export const formatCount = (value) => {
  return value ? value.toLocaleString() : "0";
};

export const formatDate = (dateVal) => {
  return moment(dateVal).format("LL");
};

export const formatData = (user) => {
  const formattedEmployer = {
    ...user,
    company: {
      id: user?.company?.id,
      name: user?.company?.name,
      address: user?.company?.address,
    },
  };
  const formattedPWD = {
    ...user,
  };
  const formattedAdmin = {
    ...user,
  };
  return user.role_id == 2
    ? formattedPWD
    : user?.role_id == 3
    ? formattedEmployer
    : formattedAdmin;
};

export const capitalized = (str) => {
  return str
    ? str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    : "";
};

export const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const limitBirthday = () => {
  return new Date(new Date().setFullYear(new Date().getFullYear() - 18))
    .toISOString()
    .split("T")[0];
};
