import Cookies from "js-cookie";

export const getLocation = () => {
  return "/" + (Cookies.get("NEXT_LOCALE") || "es");
};
