import React from "react";
import * as styles from "./hero.module.css";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../Button/LinkButton";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <StaticImage
        src="../../images/profile.jpg"
        alt="Gavin's headshot"
        height={180}
        quality={95}
        className={styles.profileImg}
      />
      <div className={styles.heroInfo}>
        <h3>Hi, I'm Ronak.</h3>
        <h1>mechanical product design and manufacturing engineer</h1>
        <div className={styles.heroButtons}>
          <LinkButton text="view resume" url={"/resume.pdf"} />

          <LinkButton
            text="view projects"
            url={"/projects"}
            link
            dark
            arrow={{ maxWidth: "167px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
