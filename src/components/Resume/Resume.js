import React from "react";
import * as styles from "./resume.module.css";
import experiences from "../../constants/experiences.js";

const Resume = () => {
  return (
    <section className={styles.resume}>
      <div className={styles.container}>
        <div className={styles.label}>Education</div>
        <div className={styles.content}>
          <h3>Master of Science in Product design and Manufacturing </h3>
          <span>
            Boston University, Boston, MA &#183; Aug. 2021 – Dec. 2022
          </span>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.label}>Experiences</div>
        <div>
          {experiences.map((experience, index) => {
            return (
              <div className={styles.content} key={index}>
                <h3>{experience.title}</h3>
                <span>
                  {experience.workplace} &#183; {experience.timespan}
                </span>
                <ul>
                  {experience.description.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
