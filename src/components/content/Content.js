import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import DefaultPage from "../../pages/DefaultPage";
import TestPage from "../../pages/TestPage";
import { mainRoutes } from "../../routes/mainRoutes";
import Loader from "../loader/Loader";

const Content = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Switch>
          {/* <Route path='/courses/:id' component={TestPage} /> */}
          {mainRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} key={path} component={component} />
          ))}
          <Route component={DefaultPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
