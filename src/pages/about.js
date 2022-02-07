import React from "react";
import Seo from "../components/Seo/Seo";
import * as styles from "../styles/about.module.css";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";

const AboutPage = () => {
  return (
    <>
      <Seo title="About" />
      <main className={styles.about}>
        <About />
        <Resume />
      </main>
    </>
  );
};

export default AboutPage;
