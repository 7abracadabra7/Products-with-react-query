/* eslint-disable react/prop-types */
import styles from "./SearchBox.module.css";
import profileImg from "../images/profile.png";
import searchIcon from "../images/search.png";
import { useRef, useEffect } from "react";

const SearchBox = ({ setSearchItem, searchItem }) => {



  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchItem]);

  const searchHandler = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setSearchItem(search);
  };
  return (
    <div className={styles.searchBox}>
      <img className={styles.searchIcon} src={searchIcon} alt="icon" />
      <input
        type="text"
        placeholder="جستجوی کالا"
        onChange={searchHandler}
        ref={inputRef}
        value={searchItem}
        onFocus={() => console.log("Input focused")}
        onBlur={() => console.log("Input blurred")}
      />
      <div className={styles.userInfo}>
        <img src={profileImg} alt="profile" />
        <p>میلاد عظمی</p>
      </div>
    </div>
  );
};

export default SearchBox;
