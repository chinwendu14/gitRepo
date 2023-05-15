import React from "react";
import WebHeader from "./WebHeader";
import styles from "../../../styles/header.module.scss";
import MobileHeader from "./MobileHeader";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__webDv}>
        <WebHeader />
      </div>
      <div className={styles.header__mobileDv}>
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
