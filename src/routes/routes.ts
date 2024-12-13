const titleLocalization = (title: string) => {
  return `routes.${title}.title`;
};

const mainRoutes = {
  home: {
    titleId: titleLocalization("home"),
    path: "/",
  },
  aboutUs: {
    titleId: titleLocalization("about-us"),
    path: "/about-us",
  },
  projects: {
    titleId: titleLocalization("projects"),
    path: "/projects",
  },
};
export default mainRoutes;
