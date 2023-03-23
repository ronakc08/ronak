import React from "react";
import * as styles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { ImQuotesLeft } from "react-icons/im";
import LinkButton from "../Button/LinkButton";
import Social from "../Social/Social";

const About = () => {
  return (
    <section className={styles.about}>
      {" "}
      <StaticImage
        src="../../images/profile.jpg"
        alt="Gavin's headshot"
        height={180}
        quality={95}
        className={styles.profileImg}
        style={{ borderRadius: "50%" }}
      />
      <div className={styles.aboutTitle}>
        <h1>Ronak Chougule</h1>
        <h2>ronakc@bu.edu</h2>
      </div>
      <div className={styles.aboutDescription}>
        <ImQuotesLeft className={styles.quotes} />
        <p>
         Hi I'm Ronak, a Product Design and Manufacturing Engineer with a background in Mechanical Engineering and 2+ years’ 
         experience in quality improvement, CAD, injection molding, product design, 3D printing and manufacturing. 
         Exhibited ability to design for manufacturability and improvement of product performance. Strong understanding of metal and plastic industry such as sand casting, sheet metal fabrication, blow molding, plastic 
         extrusion, precision machining and assembly.
        </p>
      </div>
      <LinkButton
        text="view resume"
        url={"/resume.pdf"}
        dark
        arrow={{ maxWidth: "168px" }}
      />
      <div className={styles.aboutContact}>
        <Social />
      </div>
    </section>
  );
};

export default About;
