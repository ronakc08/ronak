import React from "react";
import * as styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>&copy; gavin zheng {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
