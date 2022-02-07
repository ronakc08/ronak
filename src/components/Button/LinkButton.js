import React from "react";
import * as styles from "./button.module.css";
import { Link } from "gatsby";
import { BsArrowRight } from "react-icons/bs";

const LinkButton = ({ dark, arrow, text, url, email, link, hoverDark }) => {
  const style = `${styles.button} ${dark ? styles.dark : styles.primary} ${
    hoverDark ? styles.hoverDark : ""
  }`;
  let renderedButton;
  if (link) {
    renderedButton = (
      <Link to={url} className={style}>
        {text}
        {arrow ? <BsArrowRight className={styles.arrow} /> : null}
      </Link>
    );
  } else {
    let inputProps;
    email
      ? (inputProps = {})
      : (inputProps = { target: "_blank", rel: "noopener noreferrer" });
    renderedButton = (
      <a className={style} href={url} {...inputProps}>
        {text}
        {arrow ? <BsArrowRight className={styles.arrow} /> : null}
      </a>
    );
  }
  if (arrow) {
    return <div style={arrow}>{renderedButton}</div>;
  } else {
    return renderedButton;
  }
};

export default LinkButton;
