import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Union.png";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { useRegister } from "../services/mutations";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const { mutate } = useRegister();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("registered data", data);
    const { username, password, confirmPassword } = data;

    if (!username || !password)
      return alert("User Name and Password is Necessary");
    if (password !== confirmPassword)
      return alert("Passwords aren't The Same!");

    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          console.log(data.data.message);
          navigate("/login");
        },
        onError: (error) => console.log(error.response.data.message),
      }
    );
  };
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>بوتکمپ بوتواستارت</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.topSide}>
            <img src={logo} alt="logo" />
            <h1>فرم ثبت نام</h1>
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
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="تکرار رمز عبور"
            />
          </div>
          <button type="submit" className={styles.formButton}>
            ثبت نام
          </button>
          <div className={styles.rightAlign}>
            <Link className={styles.link} to="/login">
              حساب کاربری دارید؟
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
