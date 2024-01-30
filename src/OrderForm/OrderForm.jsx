import { Field, Form, Formik } from "formik";
// import { schema } from "../schemas";
import css from "./OrderForm.module.css";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  delivery: "",
  address: "",
  comment: "",
  checkbox: false,
  payment: "",
};

const OrderForm = () => {
  const onSubmit = () => {};
  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={schema}
        onSubmit={onSubmit}
        className={css.formik}
      >
        {() => {
          return (
            <Form className={css.form}>
              <Field name="name" placeholder="ПІБ"  className={css.input}/>
              <Field type="number" name="phone" placeholder="Телефон"  className={css.input}/>
              <Field type="email" name="email" placeholder="Ваш email" className={css.input} />
              <div id="delivery-radio-group" className={css.title}>Доставка</div>
              <div role="group" aria-labelledby="delivery-radio-group" className={css.group}>
                <label className={css.radioLabel}>
                  <Field type="radio" name="delivery" value="Нова Пошта"  className={css.radio}/>
                  Нова Пошта
                </label>
                <label className={css.radioLabel}>
                  <Field type="radio" name="delivery" value="Укрпошта"  className={css.radio}/>
                  Укрпошта
                </label>
              </div>
              <label className={css.title}>
                Адреса доставки
                <Field className={css.input}
                  type="text"
                  name="address"
                  placeholder="Вкажіть населений пункт та номер відділення або індекс"
                />
              </label>
              <label className={css.title}>
                Коментар
                <Field className={css.input}
                  type="text"
                  name="comment"
                  placeholder="Вкажіть свій коментар за потребою"
                />
              </label>
              <label className={css.checkboxLabel}>
                <Field type="checkbox" name="checkbox"  className={css.checkbox}/>
                Підтверджую, що я погоджуюсь з умовами роботи магазину та
                політикою конфіденційност
              </label>
              <div id="payment-radio-group" className={css.title}>Спосіб оплати</div>
              <div role="group" aria-labelledby="payment-radio-group" className={css.group}>
                <label className={css.radioLabel}>
                  <Field className={css.radio}
                    type="radio"
                    name="payment"
                    value="Накладеним платежем"
                  />
                  Накладеним платежем
                </label>
                <label className={css.radioLabel}>
                  <Field type="radio" name="payment" value="Передоплата"  className={css.radio}/>
                  Передоплата
                </label>
              </div>
              <button type="submit" className={css.btn}>Підтвердити замовлення</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default OrderForm;
