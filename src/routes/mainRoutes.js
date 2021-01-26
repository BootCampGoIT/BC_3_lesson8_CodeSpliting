import { lazy } from "react";

// import AboutPage from "../pages/AboutPage";
// import CoursesPage from "../pages/CoursesPage";
// import HomePage from "../pages/HomePage";
// import SignUpPage from "../pages/SignUpPage";
// import SignInPage from "../pages/SingInPage";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage" */)
    ),
  },
  {
    path: "/about",
    name: "About",
    exact: true,
    component: lazy(() =>
      import("../pages/AboutPage" /* webpackChunkName: "AboutPage" */)
    ),
  },
  {
    path: "/courses",
    name: "Courses",
    exact: false,
    component: lazy(() =>
      import("../pages/CoursesPage" /* webpackChunkName: "CoursesPage" */)
    ),
  },
  {
    path: "/signin",
    name: "Sign In",
    exact: true,
    component: lazy(() =>
      import("../pages/SingInPage" /* webpackChunkName: "SingInPage" */)
    ),
  },
  {
    path: "/signup",
    name: "Sign Up",
    exact: true,
    component: lazy(() =>
      import("../pages/SignUpPage" /* webpackChunkName: "SignUpPage" */)
    ),
  },
];
