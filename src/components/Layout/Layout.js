import React from "react";
import Navbar from "../Navbar/Navbar";

import "../../styles/GlobalStyle.css";

const Layout = ({ children }) => {
  return (
    <div id="root">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
