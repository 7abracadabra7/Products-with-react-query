import { Link } from "react-router-dom";
import logo from "../images/Union.png";
import styles from "./Form.module.css";

const RegistrationForm = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>بوتکمپ بوتواستارت</h1>
        <div className={styles.form}>
          <div className={styles.topSide}>
            <img src={logo} alt="logo" />
            <h1>فرم ثبت نام</h1>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="نام کاربری" />
            <input type="password" placeholder="رمز عبور" />
            <input type="password" placeholder="تکرار رمز عبور" />
          </div>
          <button className={styles.formButton}>ثبت نام</button>
          <div className={styles.rightAlign}>
            <Link className={styles.link} to="/login">حساب کاربری دارید؟</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
