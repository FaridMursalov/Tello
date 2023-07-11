import styles from "./filterSort.module.scss";
import plus from "../../../icons/pluss.svg";
import minus from "../../../icons/minuss.svg";
import { useState } from "react";
import PriceInput from "../../../../components/PriceInput";
import { set } from "react-hook-form";

const Sort = ({ title, price,setQuery,query  }) => {
  const [active, setActive] = useState(false);
  const [checkedProduct, setCheckedProduct] = useState([]);

  const Object = [
    {
      name: "Apple",
      slug: "apple",
    },
    { name: "Samsung", slug: "samsung" },
    { name: "Xiaomi", slug: "xiaomi" },
  ];
  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedProduct([...checkedProduct, value]);
      // setQuery(...checkedProduct.join(","), value)
      setQuery(...checkedProduct.join(","), value)
      
      
    } else {
      setCheckedProduct(checkedProduct.filter((item) => item !== value))
      setQuery(checkedProduct.filter((item) => item !== value).join(","))
    }
  };
  
console.log(query,"Ff");
  
  console.log(checkedProduct);
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
        {price ? (
          <div className={active ? styles.PriceForm : styles.close}>
            <PriceInput placeholder={"Ən az"} />
            <div className={styles.border}></div>
            <PriceInput placeholder={"Ən çox"} />
          </div>
        ) : (
          <ul className={active ? styles.sortList : styles.close}>
            {Object.map((checkbox) => (
              <li key={checkbox.slug}>
                {" "}
                <input
                  checked={
                    checkedProduct?.includes(checkbox?.slug) ? true : false
                  }
                  type="checkbox"
                  value={checkbox.slug}
                  onChange={(e) => handleCheckBox(e)}
                  className={styles.checkbox}
                />
                {checkbox.name}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default Sort;
