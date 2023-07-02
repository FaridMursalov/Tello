import styles from "./filters.module.scss";
import SortIcon from "../../../icons/sort.svg";
import Filter from "../../../icons/filter.svg";
import Sort from "../Sort";
import closeIcon from "../../../icons/closeSearch.svg";
import { useState } from "react";

const Filters = ({sortBY, sortByDirection}) => {
  const [activeFilter, setActiveFilter] = useState(false);
  if (activeFilter) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <div className={styles.filters}>
        <div className={styles.sort}>
          <img src={SortIcon} alt="" />
          <select name="" id="" className={styles.selectMobile} value={sortBY} onChange={sortByDirection} >
            <option className={styles.optionMobile} value="sort_order">Sıralama</option>
            <option className={styles.optionMobile} value="updated_at">Ən yenilər</option>
            <option className={styles.optionMobile} value="name">Ada Görə</option>
            <option className={styles.optionMobile} value="price">Qiymətə Görə</option>
          </select>
        </div>
        <div className={styles.border}></div>
        <div
          onClick={() => setActiveFilter(!activeFilter)}
          className={styles.filter}
        >
          <img src={Filter} alt="" /> Filterləmələr
        </div>
      </div>
      <div
        className={`${
          activeFilter ? styles.activeList : styles.sortBarContiner
        }  ${styles.sortBarContainer}`}
      >
        <div className={styles.FilterHeader}>
          {" "}
          <img
            onClick={() => setActiveFilter(!activeFilter)}
            src={closeIcon}
            alt=""
          />{" "}
          Filterləmələr
        </div>
        <ul className={styles.sortBar}>
          <li>
            {" "}
            <Sort title={"Brend"} />
          </li>
          <li>
            <Sort title={"Type"} />
          </li>
          <li>
            <Sort title={"Category"} />
          </li>
          <li>
            <Sort title={"Rəng"} />
          </li>
          <li>
            <Sort title={"Qiymət"} price />
          </li>
          <button className={styles.button}>
            {" "}
            Filterlənmiş məhsulları göstər
          </button>
        </ul>
      </div>
    </>
  );
};

export default Filters;
