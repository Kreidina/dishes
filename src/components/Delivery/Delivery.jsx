import { File, Phone, Wallet } from "../../helpers/icons";
import css from "./Delivery.module.css";

const Delivery = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Доставка та оплата</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <File className={css.icon} />
          <h3 className={css.titleStep}>Заявка</h3>
          <p className={css.text}>
            Залишаєте номер телефону та Ваше ім’я. Менеджер буде телефонувати
            впорядку черги
          </p>
        </li>
        <li className={css.item}>
          <Phone className={css.icon} />
          <h3 className={css.titleStep}>Дзвінок</h3>
          <p className={css.text}>
            Менеджер передзвонить Вам для уточнення деталей протягом дня
          </p>
        </li>
        <li className={css.item}>
          <Wallet className={css.icon} />
          <h3 className={css.titleStep}>Отримання</h3>
          <p className={css.text}>
            При замовленні за товар сплачуєте повністю по предоплаті Доставляємо
            товар протягом 1-4 дні на Нову Пошту
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Delivery;
