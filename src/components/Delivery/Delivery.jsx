import {
  File,
  FileBig,
  Phone,
  PhoneBig,
  Wallet,
  WalletBig,
} from "../../helpers/icons";
import PropTypes from "prop-types";

import css from "./Delivery.module.css";

const Delivery = ({ isDesktop }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Доставка та оплата</h2>
      <ul className={css.list}>
        <li className={css.item}>
          {!isDesktop ? (
            <File className={css.icon} />
          ) : (
            <FileBig className={css.icon} />
          )}
          <h3 className={css.titleStep}>Заявка</h3>
          <p className={css.text}>
            Залишаєте номер телефону та Ваше ім’я. Менеджер буде телефонувати
            впорядку черги
          </p>
        </li>
        <li className={css.item}>
          {!isDesktop ? (
            <Phone className={css.icon} />
          ) : (
            <PhoneBig className={css.icon} />
          )}
          <h3 className={css.titleStep}>Дзвінок</h3>
          <p className={css.text}>
            Менеджер передзвонить Вам для уточнення деталей протягом дня
          </p>
        </li>
        <li className={css.item}>
          {!isDesktop ? (
            <Wallet className={css.icon} />
          ) : (
            <WalletBig className={css.icon} />
          )}
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

Delivery.propTypes = {
  isDesktop: PropTypes.bool,
};
