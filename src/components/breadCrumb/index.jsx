import React from "react";
import { useLocation, Link } from "react-router-dom";
import style from "./Breadcrumb.module.scss";

const Breadcrumb = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className={style.crumb} key={crumb}>
          <Link to={currentLink} className={style.crumbLink}>
            {` > ${crumb.charAt(0).toUpperCase() + crumb.slice(1)} `}
          </Link>
        </div>
      );
    });

  return (
    <div className={style.breadcrumbs}>
      <Link className={style.crumbLink} to="/">
        Ana Sayfa
      </Link>
      
      {crumbs}
    </div>
  );
};

export default Breadcrumb;
