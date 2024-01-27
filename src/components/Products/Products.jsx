import css from "./Products.module.css";

const Products = () => {
  return (
    <section className={css.productsContainer}>
      <h2 className={css.title}>Популярні товари</h2>
      <ul className={css.productList}>
        <li className={css.productItem}>
          <img
            className={css.img}
            alt="dishes"
            src="../../images/products/dish1sm.png"
            loading="lazy"
          />
          <h3 className={css.productTitle}>Чайник заварювальний</h3>
          <p className={css.text}>Fissman Shamsi</p>
          <div className={css.btnBox}>
            <button className={`${css.btn} ${css.btnAbout}`}>Про товар</button>
            <button className={`${css.btn} ${css.btnBuy}`}>Купити</button>
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
            <button className={`${css.btn} ${css.btnAbout}`}>Про товар</button>
            <button className={`${css.btn} ${css.btnBuy}`}>Купити</button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Products;
