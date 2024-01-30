import { useState } from "react";
import PropTypes from "prop-types";

import css from "./Products.module.css";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalAbout from "../ModalAbout/ModalAbout";
import ModalBuy from "../ModalBuy/ModalBuy";
import { NavLink } from "react-router-dom";

const ProductsItem = ({ item }) => {
  const { name, title, img } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalBuyOpen, setIsModalBuyOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModalBuy = () => {
    setIsModalBuyOpen(!isModalBuyOpen);
  };

  return (
    <>
      <li className={css.productItem}>
        <img className={css.img} alt={name} loading="lazy" src={img} />
        <h3 className={css.productTitle}>{name}</h3>
        <p className={css.text}>{title}</p>
        <div className={css.btnBox}>
          <button
            type="button"
            className={`${css.btn} ${css.btnAbout}`}
            onClick={() => toggleModal(item)}
          >
            Про товар
          </button>
          <NavLink to="/order" className={`${css.btn} ${css.btnBuy}`}>
            Купити
          </NavLink>
        </div>
      </li>
      {isModalOpen && (
        <ModalContainer toggleModal={toggleModal}>
          <ModalAbout item={item} />
        </ModalContainer>
      )}
      {isModalBuyOpen && (
        <ModalContainer toggleModal={toggleModalBuy}>
          <ModalBuy />
        </ModalContainer>
      )}
    </>
  );
};

export default ProductsItem;
ProductsItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
