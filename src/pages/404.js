import * as React from "react";
import Seo from "../components/Seo/Seo";
import LinkButton from "../components/Button/LinkButton";
import * as styles from "../styles/notFound.module.css";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Not Found" />
      <main className={styles.notFound}>
        <h1 className={styles.title}>Page not found</h1>
        <LinkButton
          dark
          link
          text="Go Home"
          url="/"
          arrow={{ maxWidth: "136px" }}
        />
      </main>
    </>
  );
};

export default NotFoundPage;
