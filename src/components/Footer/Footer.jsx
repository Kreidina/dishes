import PropTypes from "prop-types";
import FooterMob from "./FooterMob";
import FooterTab from "./FooterTab";

const Footer = ({ isMobile }) => {
  return isMobile ? <FooterMob /> : <FooterTab />;
};

export default Footer;
Footer.propTypes = {
  isMobile: PropTypes.bool,
};
