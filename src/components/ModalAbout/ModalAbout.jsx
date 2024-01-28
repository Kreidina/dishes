import PropTypes from "prop-types";
import css from "./ModalAbout.module.css";

const ModalAbout = ({ item }) => {
  const { name, img, title, text } = item;
  return (
    <>
      <h2 className={css.title}>Опис товару</h2>
      <div className={css.description}>
        <img alt="dishes" src={img} className={css.img} />
        <div className={css.descriptionBox}>
          <h3 className={css.titleName}>{name}</h3>
          <p className={css.descrip}>{title}</p>
          <p className={css.text}>{text}</p>
        </div>
      </div>
      <div className={css.design}>
        <h2 className={`${css.title} ${css.designTitle}`}>Швидке оформлення</h2>
        <form className={css.form}>
          <input placeholder="Ваше ім’я" className={css.input} />
          <input placeholder="Телефон" className={css.input} />
          <button className={css.btn}>Зателефонуйте мені</button>
        </form>
      </div>
    </>
  );
};

export default ModalAbout;
ModalAbout.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
