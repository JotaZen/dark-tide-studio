import mainRoutes from "@/routes/routes";
import Cookies from "js-cookie";

export const getLocation = () => {
  return "/" + (Cookies.get("NEXT_LOCALE") || "es");
};

export const getMainRoute = (route: string, additionalPath?: string) => {
  if (Object.keys(mainRoutes).includes(route)) {
    return getLocation() + mainRoutes[route].path + (additionalPath || "");
  }
  return getLocation() + "/404";
};
export const getRoute = (route: string, additionalPath?: string) => {
  return getLocation() + route + (additionalPath || "");
};
