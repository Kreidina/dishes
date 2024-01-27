import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import css from "./Layout.module.css";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1280
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={css.header}>
        <Header isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
      </header>
      <main className={css.main}>
        <Outlet isDesktop={isDesktop} />
      </main>
      <footer className={css.footer}>
        <Footer isMobile={isMobile} />
      </footer>
    </>
  );
};

export default Layout;
