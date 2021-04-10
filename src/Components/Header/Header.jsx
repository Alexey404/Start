import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";

let Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <NavLink className={style.nav__link} activeClassName={style.active} to="profile">
            Profile
          </NavLink>
          <NavLink className={style.nav__link} activeClassName={style.active} to="dialogs">
            Messages
          </NavLink>
          <NavLink className={style.nav__link} activeClassName={style.active} to="news">
            News
          </NavLink>
          <NavLink className={style.nav__link} activeClassName={style.active} to="music">
            Music
          </NavLink>
          <NavLink className={style.nav__link} activeClassName={style.active} to="settings">
            Settings
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
