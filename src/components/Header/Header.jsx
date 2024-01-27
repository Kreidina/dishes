import { useState } from "react";
import { IconFace, IconInsta, IconMenu } from "../../helpers/icons";

import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import { useEffect } from "react";
import Nav from "../Nav/Nav";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1280
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <>
      <Logo />
      <div className={css.socialIcons}>
        <IconInsta className={css.social} />
        <IconFace className={css.social} />
      </div>
      <IconMenu className={css.menu} />
    </>
  ) : (
    <Nav isTablet={isTablet} isDesktop={isDesktop} />
  );
};

export default Header;
