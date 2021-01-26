import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const Navigation = () => {
  return (
    <ul className='list'>
      {mainRoutes.map(({ path, exact, name }) => (
        <li className='listItem' key={path}>
          <NavLink to={path} exact={exact}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
