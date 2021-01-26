import { lazy } from "react";
import sprite from "../icons/courses/navigation_sprite.svg";

const coursesRoutes = [
  {
    path: "/list",
    name: "List",
    exact: true,
    component: lazy(() =>
      import(
        "../components/courseList/CourseList" /* webpackChunkName: "List" */
      )
    ),
    icon: sprite + "#icon-book",
    renderLink: true,
  },
  {
    path: "/list/:id",
    name: "ListItem",
    exact: true,
    component: lazy(() =>
      import("../pages/TestPage" /* webpackChunkName: "TestPage" */)
    ),
    renderLink: false,
    icon: "",
  },
  {
    path: "/create",
    name: "Create",
    exact: true,
    component: lazy(() =>
      import(
        "../components/courseRedactor/CourseRedactor" /* webpackChunkName: "CourseRedactor" */
      )
    ),
    renderLink: true,
    icon: sprite + "#icon-calendar",
  },
];

// const coursesSecondaryRoute = {
//   path: "/list/:id",
//   exact: true,
//   component: lazy(() =>
//     import("../pages/TestPage" /* webpackChunkName: "TestPage" */)
//   ),
// };

export { coursesRoutes };
// export { coursesRoutes, coursesSecondaryRoute };
