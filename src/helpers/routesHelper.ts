import mainRoutes from "@/routes/routes";
import Cookies from "js-cookie";

export const getLocation = () => {
  return "/" + (Cookies.get("NEXT_LOCALE") || "es");
};

export const getRoute = (route: string, additionalPath?: string) => {
  if (Object.keys(mainRoutes).includes(route)) {
    return getLocation() + mainRoutes[route].path + (additionalPath || "");
  }
  return getLocation() + "/404";
};
