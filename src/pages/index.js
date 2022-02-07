import * as React from "react";
import Seo from "../components/Seo/Seo";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
