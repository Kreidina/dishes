import { IconFaceBig, IconInstaBig } from "../../helpers/icons";
import Logo from "../Logo/Logo";
import css from "./Nav.module.css";
import PropTypes from "prop-types";

export default function Nav({ isTablet, isDesktop }) {
  return (
    <>
      <Logo />
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>Головна</li>
          <li className={css.navItem}>Посуд</li>
          <li className={css.navItem}>Доставка та оплата</li>
          <li className={css.navItem}>Відгуки</li>
        </ul>
      </nav>
      {isTablet && (
        <div className={css.socialIcons}>
          <IconInstaBig className={css.social} />
          <IconFaceBig className={`${css.social} ${css.face}`} />
        </div>
      )}
      {isDesktop && (
        <div className={css.contacts}>
          <a href="tel:++380991232255" className={css.telLink}>
            <span className={css.span}> +380 (99) 123-22-55</span>
          </a>
          <p className={css.weekend}>Без вихідних з 10:00 до 18:00</p>
          <div className={css.socialIcons}>
            <IconInstaBig className={css.social} />
            <IconFaceBig className={`${css.social} ${css.face}`} />
          </div>
        </div>
      )}
    </>
  );
}
Nav.propTypes = {
  isTablet: PropTypes.bool,
  isDesktop: PropTypes.bool,
};
