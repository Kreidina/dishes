import { useState } from "react";
import css from "./Hero.module.css";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalBuy from "../ModalBuy/ModalBuy";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("cli");
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className={css.heroContainer}>
      <h1 className={css.title}>
        Заварюйте улюблений чай з комфортом і стилем
      </h1>
      <NavLink to="/order" className={css.btn}>
        ПРИДБАТИ ТОВАР
      </NavLink>
      {isModalOpen && (
        <ModalContainer toggleModal={toggleModal}>
          <ModalBuy />
        </ModalContainer>
      )}
    </section>
  );
};

export default Hero;
