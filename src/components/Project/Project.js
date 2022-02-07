import React from "react";
import * as styles from "./project.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import LinkButton from "../Button/LinkButton";

const Project = ({
  title,
  tools,
  description,
  github,
  demo,
  reversed,
  image,
}) => {
  return (
    <div className={`${styles.project} ${reversed ? styles.reversed : ""}`}>
      <div className={styles.projectInfo}>
        <h2>{title}</h2>
        <p>{tools.join(", ")}</p>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.buttons}>
          {github && <LinkButton text="View" url={github} />}
        </div>
      </div>
      <GatsbyImage image={image} alt={title} className={styles.projectImg} />
    </div>
  );
};

export default Project;
