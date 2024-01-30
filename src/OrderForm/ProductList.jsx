import css from "./OrderForm.module.css";
import { SmallMinus, SmallPlus } from "../helpers/icons";
import Products from "../helpers/products.json";

const ProductList = () => {
  return (
    <>
      <ul className={css.list}>
        {Products.map((item, index) => {
          const { img, name, title, article, price } = item;
          //  const count = price
          return (
            <li key={index} className={css.item}>
              <img alt={name} src={img} className={css.img} />
              <h2 className={css.name}>{name}</h2>
              <p className={css.title}>{title}</p>
              <p className={css.article}>{article}</p>
              <SmallMinus className={css.minus} />
              {/* {count} */}
              <span className={css.count}>0</span>
              <SmallPlus className={css.plus} />
              <p className={css.price}>
                {/* {countPrice} грн*/}
                {price} грн
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
