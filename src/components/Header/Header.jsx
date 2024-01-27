import { IconFace, IconInsta, IconMenu } from "../../helpers/icons";
import PropTypes from "prop-types";

import css from "./Header.module.css";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

const Header = ({ isMobile, isTablet, isDesktop }) => {
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
Header.propTypes = {
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
  isDesktop: PropTypes.bool,
};
