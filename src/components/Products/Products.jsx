import css from "./Products.module.css";
import Product from "../../helpers/products.json";
import ProductsItem from "./ProductsItem";

const Products = () => {
  return (
    <section className={css.productsContainer}>
      <h2 className={css.title}>Популярні товари</h2>
      <ul className={css.productList}>
        {Product.map((item, index) => {
          return <ProductsItem key={index} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
