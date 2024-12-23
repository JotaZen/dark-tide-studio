const titleLocalization = (title: string) => {
  return `routes.${title}.title`;
};

const mainRoutes: {
  [key: string]: {
    titleId: string;
    path: string;
  };
} = {
  home: {
    titleId: titleLocalization("home"),
    path: "",
  },
  aboutUs: {
    titleId: titleLocalization("about-us"),
    path: "/about-us",
  },
  projects: {
    titleId: titleLocalization("projects"),
    path: "/projects",
  },
  team: {
    titleId: titleLocalization("team"),
    path: "/team",
  },
};
export default mainRoutes;
