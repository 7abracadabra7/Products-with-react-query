import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Union.png";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { useRegister } from "../services/mutations";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const { mutate } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log("registered data", data);
    const { username, password, confirmPassword } = data;

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
            <input
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "رمز عبور را تکرار کنید",
                validate: (value) =>
                  value === password || "رمز عبور و تکرار آن باید شبیه باشند",
              })}
              type="password"
              placeholder="تکرار رمز عبور"
              className={errors.confirmPassword ? styles.error : styles.normal}
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}
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
