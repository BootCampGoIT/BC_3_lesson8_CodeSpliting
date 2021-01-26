import React, { Suspense } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { coursesRoutes } from "../routes/coursesRoutes";
// import { coursesRoutes, coursesSecondaryRoute } from "../routes/coursesRoutes";
import { useRouteMatch } from "react-router-dom";
import Loader from "../components/loader/Loader";
import TestPage from "./TestPage";
import styles from "./CoursesPage.module.css";

const CoursesPage = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h2>Courses</h2>
      {coursesRoutes.map(
        ({ path, exact, name, renderLink, icon }) =>
          renderLink && (
            <li key={path}>
              <div className={styles.link}>
                <svg className={styles.svg}>
                  <use href={icon} />
                </svg>
                <NavLink to={`${match.url}${path}`} exact={exact}>
                  {name}
                </NavLink>
              </div>
            </li>
          )
      )}

      <Suspense fallback={<Loader />}>
        <Switch>
          {coursesRoutes.map(({ path, exact, component }) => (
            <Route
              key={path}
              path={`${match.url}${path}`}
              exact={exact}
              component={component}
            />
          ))}
          {/* <Route
            path={`${match.url}${coursesSecondaryRoute.path}`}
            exact={coursesSecondaryRoute.exact}
            component={coursesSecondaryRoute.component}
          /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default CoursesPage;
