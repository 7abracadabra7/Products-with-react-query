import styles from "./SearchBox.module.css";
import profileImg from "../images/profile.png";
import searchIcon from "../images/search.png";

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <img className={styles.searchIcon} src={searchIcon} alt="icon" />
      <input type="text" placeholder="جستجوی کالا" />
      <div className={styles.userInfo}>
        <img src={profileImg} alt="profile" />
        <p>میلاد عظمی</p>
      </div>
    </div>
  );
};

export default SearchBox;
