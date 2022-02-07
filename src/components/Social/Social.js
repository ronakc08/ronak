import React from "react";
import * as styles from "./social.module.css";
import socialLinks from "../../constants/social_links";

const Social = () => {
  return (
    <div className={styles.social}>
      {socialLinks.map((link, index) => {
        let inputProps;
        !link.target
          ? (inputProps = {})
          : (inputProps = { target: "_blank", rel: "noopener noreferrer" });
        return (
          <a
            href={link.url}
            key={index}
            {...inputProps}
            className={styles.socialLink}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
