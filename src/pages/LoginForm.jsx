import styles from "./Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Union.png";
import { useForm } from "react-hook-form";
import { useLogin } from "../services/mutations";
import { setCookie } from "../utils/cookie";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("login data", data);
    const { username, password } = data;

    if (!username || !password)
      return alert("User Name and Password is Necessary");

    mutate(data, {
      onSuccess: (data) => {
        console.log(data.data.token);
        setCookie("token", data.data?.token);
        navigate("/");
      },
      onError: (error) => console.log(error.response.data.message),
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
              {...register("username")}
              type="text"
              placeholder="نام کاربری"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="رمز عبور"
            />
          </div>
          <button type="submit" className={styles.formButton}>
            ورود
          </button>
          <div className={styles.rightAlign}>
            <Link className={styles.link} to="/login">
              ایجاد حساب کاربری!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
