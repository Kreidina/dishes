import css from "./Footer.module.css";
import { IconFace, IconInsta, Right } from "../../helpers/icons";

const FooterMob = () => {
  return (
    <div className={css.footerContainer}>
      <div className={css.orderItem}>
        <div className={css.iconBox}>
          <IconFace className={css.socialIcon} />
          <IconInsta className={css.socialIcon} />
        </div>
        <div>
          <h2 className={css.orderTitle}>Замовити дзвінок</h2>
          <form className={css.form}>
            <input type="number" className={css.input} placeholder="Телефон" />
            <button className={css.btnForm}>
              <Right className={css.iconRight} />
            </button>
          </form>
        </div>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <h2 className={css.title}>Меню</h2>
          <ul className={css.menuList}>
            <li className={css.text}>Головна </li>
            <li className={css.text}>Посуд</li>
            <li className={css.text}>Доставка та оплата</li>
            <li className={css.text}>Відгуки</li>
          </ul>
          <h2 className={`${css.title} ${css.timeTitle}`}>Графік роботи</h2>
          <p className={`${css.text} ${css.workText}`}>
            Без вихідних з 10:00 до 18:00
          </p>
        </li>
        <li className={`${css.contactItem} ${css.item}`}>
          <h2 className={css.title}>Контакти</h2>
          <ul className={css.contactList}>
            <li className={css.text}>
              <a href="tel:+380991232255" className={css.telLink}>
                <span className={css.span}> +380 (99) 123-22-55</span>
              </a>
            </li>
            <li className={css.text}>
              <a href="mailto:google@gmail.com" className={css.telLink}>
                <span className={css.span}> google@gmail.com</span>
              </a>
            </li>
          </ul>
          <h2 className={`${css.title} ${css.docTitle}`}>Документи</h2>
          <ul className={css.docList}>
            <li className={css.text}>Політика конфіденційності</li>
            <li className={css.text}>Публічна оферта</li>
            <li className={css.text}>Повернення</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FooterMob;
