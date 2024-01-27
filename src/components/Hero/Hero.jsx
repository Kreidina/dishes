import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.heroContainer}>
      <h1 className={css.title}>
        Заварюйте улюблений чай з комфортом і стилем
      </h1>
      <button className={css.btn}>ПРИДБАТИ ТОВАР</button>
    </section>
  );
};

export default Hero;
