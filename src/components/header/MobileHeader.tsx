import React, { useState } from "react";
import styles from "../../../styles/header.module.scss";
import Image from "next/image";
import { Logo, avart } from "../../images/index";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSignOutAlt } from "react-icons/fa";
import Search from "../search/Search";

const MobileHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.mobileHeader}>
      <div className={styles.mobileHeader__flex}>
        <i onClick={handleToggle}>
          <RxHamburgerMenu />
        </i>

        <Image
          src={Logo}
          alt="Vercel Logo"
          width={40}
          height={37}
          className={styles.webHeader__img}
        />
        <i>
          <IoMdNotificationsOutline />
        </i>
      </div>
      <div
        className={`${styles.mobileHeader__dropDv} ${
          toggle ? styles.showT : ""
        }`}
        onClick={handleToggle}
      >
        <Search searchicon penicon placeholder="Search or jump to..." />
        <p>Dashboard</p>
        <p>Pullrequest</p>
        <p>Issues</p>
        <p> codespace</p>
        <p>Marketplace</p>
        <p>Explore</p>
        <p>Sponsors</p>
        <p>Setting</p>
        <p>
          <Image
            src={avart}
            alt="Vercel Logo"
            width={15}
            height={15}
            style={{ borderRadius: "50%", marginRight: "5px" }}
          />
          Chinwend14
        </p>
        <p>
          <i style={{ marginRight: "5px" }}>
            <FaSignOutAlt />
          </i>
          Sign out
        </p>
      </div>
    </div>
  );
};

export default MobileHeader;
