import React from "react";
import styles from "../../../styles/footer.module.scss";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__gitLogo}>
        <i>
          <BsGithub />
        </i>
        © 2023 GitHub, Inc.
      </div>
      <div className={styles.footer__linksDiv}>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
        <p>Status</p>
        <p>Status</p>
        <p>Contact GitHub</p>
        <p>Pricing</p>
        <p>API</p>
        <p>Training</p>
        <p>Blog</p>
        <p>About</p>
      </div>
    </div>
  );
};

export default Footer;
