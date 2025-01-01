const titleLocalization = (title: string) => {
  return `routes.${title}.title`;
};
type Routes = {
  [key: string]: {
    titleId: string;
    path: string;
  };
};

const mainRoutes: Routes = {
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

  sotd: {
    titleId: "Sons of the Depths",
    path: "/projects/sotd",
  },
};
export default mainRoutes;

export const projectRoutes: Routes = {
  sotd: {
    titleId: "Sons of the Depths",
    path: "/projects/sotd",
  },
};
