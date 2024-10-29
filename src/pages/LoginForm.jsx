import styles from "./Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Union.png";
import { useForm } from "react-hook-form";
import { useLogin } from "../services/mutations";
import { setCookie } from "../utils/cookie";
import { useState } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate } = useLogin();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    console.log("login data", data);
    // const { username, password } = data;

    mutate(data, {
      onSuccess: (data) => {
        console.log(data.data.token);
        setCookie("token", data.data?.token);
        navigate("/");
      },
      onError: (error) => {
        console.log(error.response.data.message);
        if (error.response.data.message == "Invalid credentials") {
          setLoginError("اطلاعات وارد شده نادرست است");
        } else {
          setLoginError("خطایی رخ داده است");
        }
      },
    });
  };
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>بوتکمپ بوتواستارت</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.topSide}>
            <img src={logo} alt="logo" />
            <h1>فرم ورود</h1>
          </div>
          <div className={styles.inputContainer}>
            <input
              {...register("username", { required: "این فیلد الزامی است" })}
              type="text"
              id="username"
              placeholder={
                errors.username ? errors.username.message : "نام کاربری"
              }
              className={errors.username ? styles.error : styles.normal}
            />
            <input
              id="password"
              {...register("password", { required: "این فیلد الزامی است" })}
              type="password"
              placeholder={
                errors.password ? errors.password.message : "رمز عبور"
              }
              className={errors.password ? styles.error : styles.normal}
            />
          </div>
          <button type="submit" className={styles.formButton}>
            ورود
          </button>
          {loginError && <p className={styles.error}>{loginError}</p>}
          <div className={styles.rightAlign}>
            <Link className={styles.link} to="/registration">
              ایجاد حساب کاربری!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
