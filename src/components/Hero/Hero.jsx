import { useState } from "react";
import css from "./Hero.module.css";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalAbout from "../ModalAbout/ModalAbout";

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
      <button type="button" onClick={toggleModal} className={css.btn}>
        ПРИДБАТИ ТОВАР
      </button>
      {isModalOpen && (
        <ModalContainer toggleModal={toggleModal}>
          <ModalAbout />
        </ModalContainer>
      )}
    </section>
  );
};

export default Hero;
