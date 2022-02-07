import React, { useState, useEffect, useRef } from "react";
import * as styles from "./navbar.module.css";
import { Link } from "gatsby";
import pageLinks from "../../constants/links";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const mobileNav = useRef(null);

  // Conditionally render mobileNav
  // and setIsOpen to false when user resizes to desktop view
  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
    const checkWidth = () => {
      const match = window.matchMedia("(min-width: 48em");
      if (match.matches) {
        setIsOpen(false);
      }
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  // Detect when user clicks outside of sidebar
  useEffect(() => {
    const listener = (event) => {
      if (!mobileNav.current || mobileNav.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [mobileNav]);

  // Blurs content when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("blur");
    } else {
      document.body.classList.remove("blur");
    }
  }, [isOpen]);

  // Compares the current path with the url from the nav-links
  // If nav-link has the same path as the current path, then return true
  // Used to decide which nav-link to set as active
  const checkActivePath = (url) => {
    if (
      window.location.pathname === url ||
      window.location.pathname.slice(0, -1) === url
    ) {
      return true;
    } else {
      return false;
    }
  };
  const navLinks = pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <Link
          to={link.url}
          className={checkActivePath(link.url) ? styles.activeLink : ""}
          onClick={() => setIsOpen(false)}
        >
          {link.text}
        </Link>
      </li>
    );
  });
  return (
    <nav className={styles.navbar}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <div></div>
        <ul className={styles.links}>{navLinks}</ul>
        {!isDesktop && (
          <div className={styles.mobileNav} ref={mobileNav}>
            <button
              aria-label="menu"
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={
                  isOpen
                    ? `${styles.hamburgerInner} ${styles.active}`
                    : styles.hamburgerInner
                }
              ></div>
            </button>
            <Sidebar navLinks={navLinks} isOpen={isOpen} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
