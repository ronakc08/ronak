import React from "react";
import * as styles from "./contact.module.css";
import LinkButton from "../Button/LinkButton";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <h1 className={styles.title}>Want To Get In Touch?</h1>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <p>
            Feel free to reach out if you have any questions or just want to
            have a chat! I am currently looking for new opportunities!
          </p>

          <LinkButton
            text="Send me an email"
            url="mailto:ronakc@bu.edu"
            email
            dark
            hoverDark
            arrow={{ maxWidth: "201px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
