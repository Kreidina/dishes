import { useState } from "react";
import css from "./Products.module.css";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalAbout from "../ModalAbout/ModalAbout";
import ModalBuy from "../ModalBuy/ModalBuy";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalBuyOpen, setIsModalBuyOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModalBuy = () => {
    setIsModalBuyOpen(!isModalBuyOpen);
  };
  return (
    <section className={css.productsContainer}>
      <h2 className={css.title}>Популярні товари</h2>
      <ul className={css.productList}>
        <li className={css.productItem}>
          <img
            className={css.img}
            alt="dishes"
            src="../../images/products/dishJ.jpg"
            loading="lazy"
          />
          <h3 className={css.productTitle}>Чайник заварювальний</h3>
          <p className={css.text}>Fissman Shamsi</p>
          <div className={css.btnBox}>
            <button
              type="button"
              className={`${css.btn} ${css.btnAbout}`}
              onClick={toggleModal}
            >
              Про товар
            </button>
            <button
              type="button"
              className={`${css.btn} ${css.btnBuy}`}
              onClick={toggleModalBuy}
            >
              Купити
            </button>
          </div>
        </li>
        <li className={css.productItem}>
          <img
            className={css.img}
            alt="cup"
            src="../../images/products/cup1sm.png"
            loading="lazy"
          />
          <h3 className={css.productTitle}>Термо чашка</h3>
          <p className={css.text}>RINGEL Guten Morgen</p>
          <div className={css.btnBox}>
            <button
              type="button"
              className={`${css.btn} ${css.btnAbout}`}
              onClick={toggleModal}
            >
              Про товар
            </button>
            <button
              type="button"
              className={`${css.btn} ${css.btnBuy}`}
              onClick={toggleModalBuy}
            >
              Купити
            </button>
          </div>
        </li>
      </ul>
      {isModalOpen && (
        <ModalContainer toggleModal={toggleModal}>
          <ModalAbout />
        </ModalContainer>
      )}
      {isModalBuyOpen && (
        <ModalContainer toggleModal={toggleModalBuy}>
          <ModalBuy />
        </ModalContainer>
      )}
    </section>
  );
};

export default Products;
