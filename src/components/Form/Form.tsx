import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import s from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const schema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{7,15}$/, "Введите корректный номер телефона")
    .required("Введите номер телефона"),
  company: yup.string().required("Введите компанию"),
});

interface FormData {
  name: string;
  phone: string;
  company: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Отправлено:", data);
    alert("Заявка отправлена!");
    reset();
  };

  return (
    <div className={s.formWrapper}>
      <div className={s.backgroundContainer}></div>
      <div className={s.gradientBox}>
        <div className={s.formContainer}>
          <h2 className={s.title}>
            Получите <br />
            бесплатное демо
          </h2>
          <p className={s.discription}>Испытайте функционал на практике</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder="Ваше имя" {...register("name")} />
            {errors.name && <p className={s.error}>{errors.name.message}</p>}

            <Input
              type="tel"
              placeholder="Номер телефона"
              {...register("phone")}
            />
            {errors.phone && <p className={s.error}>{errors.phone.message}</p>}

            <Input
              type="text"
              placeholder="Компания"
              {...register("company")}
            />
            {errors.company && (
              <p className={s.error}>{errors.company.message}</p>
            )}

            <Button type="submit" className={s.buttonForm}>
              Получить демо
            </Button>
          </form>
          <p className={s.terms}>
            Отправляя форму, вы соглашаетесь с{" "}
            <a href="#" className={s.span}>
              Политикой обработки персональных данных
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
