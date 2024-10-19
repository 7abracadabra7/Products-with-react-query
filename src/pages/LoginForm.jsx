import styles from "./Form.module.css";
import { Link } from "react-router-dom";
import logo from "../images/Union.png";

const LoginForm = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>بوتکمپ بوتواستارت</h1>
        <div className={styles.form}>
          <div className={styles.topSide}>
            <img src={logo} alt="logo" />
            <h1>فرم ورود</h1>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="نام کاربری" />
            <input type="password" placeholder="رمز عبور" />
          </div>
          <button className={styles.formButton}>ورود</button>
          <div className={styles.rightAlign}>
            <Link className={styles.link} to="/login">
              ایجاد حساب کاربری!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
