import React from "react";
import * as styles from "./sidebar.module.css";

const Sidebar = ({ isOpen, navLinks }) => {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? "" : styles.hidden}`}
      aria-hidden={isOpen ? "false" : "true"}
    >
      <ul className={styles.links}>{navLinks}</ul>
    </aside>
  );
};

export default Sidebar;
