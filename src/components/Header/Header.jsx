import React from "react";
import styles from "./Header.module.css";
import catLogo from "../../images/cat.png"

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img height={"60px"} alt="" src={catLogo}/>
      </div>
      <div className={styles.title}>
        MEOWGRAM
      </div>
    </header>
  )
};

export default Header;