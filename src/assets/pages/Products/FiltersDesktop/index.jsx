import styles from "./filtersDesk.module.scss";
import Sort from "../Sort";

const FiltersDesktop = ({setCheckedProduct, checkedProduct,query,setQuery}) => {
//   const [activeFilter, setActiveFilter] = useState(false);

  return (
    <>
      <div className={styles.filters}>
        
        <ul className={styles.sortBar}>
          <li>
            {" "}
            <Sort query={query} title={"Brend"} setQuery={setQuery} setCheckedProduct={setCheckedProduct} checkedProduct={checkedProduct} />
          </li>
          {/* <li>
            <Sort title={"Type"} />
          </li>
          <li>
            <Sort title={"Category"} />
          </li>
          <li>
            <Sort title={"Rəng"} />
          </li>
          <li> */}
            {/* <Sort title={"Qiymət"} price />
          </li> */}
         
        </ul>
      </div>
    </>
  );
};

export default FiltersDesktop;
