import React from "react";
import catLogo from "../../images/cat.png"
import { NavLink } from "react-router-dom";

import "../../styles/Header.scss";

const Header = ({ isLoggedIn, login }) => {
  
  return (
    <header className="header-area">
      <div className="header-logo">
        <img height={"60px"} alt="" src={catLogo} />
      </div>
      <div className="header-title">
        MEOWGRAM
      </div>
      <div className="header-login">
        {isLoggedIn ? 
        <NavLink to={"/login"}>
          {login}
        </NavLink> : "LOGIN"}
      </div>
    </header>
  )
};

export default Header;