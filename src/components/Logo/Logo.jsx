import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logoCont}>
      <div className={css.logo}></div>
      <p className={css.logoName}>DISHES</p>
    </div>
  );
};

export default Logo;
