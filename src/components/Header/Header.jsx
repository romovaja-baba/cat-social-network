import React from "react";
import styles from "./Header.module.css";
import catLogo from "../../images/cat.png"
import { NavLink } from "react-router-dom";

const Header = ({ isLoggedIn, login }) => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img height={"60px"} alt="" src={catLogo} />
      </div>
      <div className={styles.title}>
        MEOWGRAM
      </div>
      <div className={styles.login}>
        {isLoggedIn ? 
        <NavLink to={"/login"}>
          {login}
        </NavLink> : "LOGIN"}
      </div>
    </header>
  )
};

export default Header;