import styles from "./filterSort.module.scss";
import plus from "../../../icons/pluss.svg";
import minus from "../../../icons/minuss.svg";
import { useState } from "react";
import PriceInput from "../../../../components/PriceInput";

const Sort = ({title,price}) => {
  const [active, setActive] = useState(false);

  const openList = () => {
    setActive(!active);
  };
  return (
    <div className={styles.sortContainer}>
      <div className={styles.Sort}>
        {title}
        <div>
          <img
            onClick={openList}
            className={active ? styles.close : styles.active}
            src={plus}
            alt=""
          />
          <img
            onClick={openList}
            className={active ? styles.active : styles.close}
            src={minus}
            alt=""
          />
        </div>
      </div>
      <form action="">
        {price?(
           <div className={active?styles.PriceForm: styles.close}>
             <PriceInput placeholder={"Ən az"} />
             <div className={styles.border}></div>
             <PriceInput placeholder={"Ən çox"}/>
           </div>
        )  :( <ul
          className={
            active ?styles.sortList  : styles.close
          }
        >
          <li>
            {" "}
            <input type="checkbox" className={styles.checkbox} /> Apple
          </li>
          <li>
            <input type="checkbox" className={styles.checkbox} /> Samsung
          </li>
          <li>
            <input type="checkbox" className={styles.checkbox} /> Xiaomi
          </li>
          <li>
            <input type="checkbox" className={styles.checkbox} /> Honor
          </li>
        </ul>)   }
       
      </form>
    </div>
  );
};

export default Sort;
