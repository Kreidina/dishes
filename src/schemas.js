import * as yup from "yup";

const emailExp = /.+@.+\..+/i;

export const schema = yup.object().shape({
  name: yup.string().min(2).max(16).required("Обов'язково"),
  phone: yup.number().required("Обов'язково"),
  email: yup
    .string()
    .email(emailExp, "Будь ласка, введіть дійсну адресу електронної пошти"),
  delivery: yup.string,
  address: yup.string().required("Обов'язково"),
  comment: yup.string(),
  checkbox: yup.boolean().required("Обов'язково"),
  payment: yup.string().required("Обов'язково"),
});
