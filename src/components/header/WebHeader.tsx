import styles from "../../../styles/header.module.scss";
import React, { useState } from "react";
import { Logo, avart } from "../../images/index";
import Image from "next/image";
import Search from "../search/Search";
import Link from "next/link";
import { IoMdNotificationsOutline, IoMdArrowDropup } from "react-icons/io";
import { BiSmile } from "react-icons/bi";
const WebHeader = () => {
  const [toggleplus, setTogglePlus] = useState<boolean>(false);
  const handleTogglePlus = () => {
    setTogglePlus(!toggleplus);
    setToggleImg(false);
  };
  const [toggleimg, setToggleImg] = useState<boolean>(false);
  const handleToggleImg = () => {
    setTogglePlus(false);
    setToggleImg(!toggleimg);
  };

  return (
    <div className={styles.webHeader}>
      <div className={styles.webHeader__container}>
        <Image
          src={Logo}
          alt="Vercel Logo"
          width={40}
          height={37}
          className={styles.webHeader__img}
        />

        <Search width searchicon penicon placeholder="Search or jump to..." />
        <div className={styles.webHeader__containerLink}>
          <Link href="#"> Pull requests</Link>
          <Link href="#"> Issues</Link>
          <Link href="#"> Codespace</Link>
          <Link href="#"> Marketplace</Link>
          <Link href="#"> Explore</Link>
        </div>
      </div>
      <div className={styles.webHeader__containerDrop}>
        <span>
          <i>
            <IoMdNotificationsOutline />
          </i>
        </span>
        <div
          className={styles.webHeader__spanPlusContainer}
          onClick={handleTogglePlus}
        >
          <div
            className={styles.webHeader__spanPlus}
            onClick={handleTogglePlus}
          >
            <span>+</span>
            <i>
              <IoMdArrowDropup />
            </i>
          </div>
          <div
            className={`${styles.webHeader__dropdownContainer} ${
              toggleplus ? styles.showplus : ""
            }`}
          >
            <p>New repository</p>
            <p>Import reporsitory</p>
            <p>New codespace</p>
            <p>New gist</p>
            <p>New orgainsation</p>
            <p>New project</p>
          </div>
        </div>
        <div
          className={`${styles.webHeader__dropdownImgContainer} 
          
          `}
          onClick={handleToggleImg}
        >
          <div
            className={styles.webHeader__imgparagraph}
            onClick={handleToggleImg}
          >
            <Image
              src={avart}
              alt="Vercel Logo"
              width={20}
              height={20}
              style={{ borderRadius: "50%" }}
            />
            <span>
              <i>
                <IoMdArrowDropup />
              </i>
            </span>
          </div>
          <div
            className={`${styles.webHeader__dropdownImg} 
          ${toggleimg ? styles.showImg : ""}
          `}
          >
            <p>Signed in as</p>
            <h4>Chinwendu14</h4>

            <div className={styles.webHeader__smileDivLine}>
              <p>
                <span>
                  <i>
                    <BiSmile />
                  </i>
                </span>
                Set status
              </p>
            </div>
            <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.145) " }}>
              <p>Your profile</p>
              <p>Your repositories</p>
              <p className={styles.webHeader__dot}>Your organisation</p>
              <p>Your projects</p>
              <p>Your star</p>
              <p>Your gist</p>

              <p>Your sponsors</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.145) " }}>
              <p>Upgrade</p>
              <p>Try enterprise</p>
              <p className={styles.webHeader__dot}>Feature preview</p>
              <p>Help</p>
              <p>Setting</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.145) " }}>
              <p>Sign out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHeader;
