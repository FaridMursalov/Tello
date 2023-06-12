import styles from "./search.module.scss";
import search from "../../assets/icons/Search.svg";
import close from "../../assets/icons/closeSearch.svg";
import { useState } from "react";
const Search = () => {
  const [isFocus, setIsFocused] = useState(false);

  return (
    <div className={styles.c}>
      <form className={styles.searchForm}>
        <img className={styles.searchIcon} src={search} alt="" />
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={styles.search}
          type="search"
          placeholder="Axtarış..."
        />
      </form>
      <img
        className={isFocus ? styles.activeSearch : styles.closeSearch}
        onClick={() => setIsFocused(false)}
        src={close}
        alt=""
      />
    </div>
  );
};

export default Search;
