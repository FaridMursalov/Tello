import styles from "./Header.module.scss";
import hamburger from "../../assets/icons/hamburger.svg";
import mainLogo from "../../assets/icons/TelloLogo.svg";
import people from "../../assets/icons/people.svg";
import heart from "../../assets/icons/heart.svg";
import sebet from "../../assets/icons/sebet.svg";
import Search from "../Search";
import close from "../../assets/icons/close.svg";
import search from "../../assets/icons/searchHamburger.svg";
import right from "../../assets/icons/right.svg";
import { useState } from "react";
import SignButton from "../SignButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/index";
import { useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeList, setActiveList] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log('local', localCategory);

  useEffect(() => {
    const getCategoryName = async () => {
      const localCategory = JSON.parse(localStorage.getItem("categoryName")) || [];

      setCategoryName(localCategory);

      const response = await axios.get("https://api.chec.io/v1/categories");
      const data = response.data.data;

      setCategoryName(data);
      console.log(categoryName, "second");
    };

    getCategoryName();
  }, []);

  console.log(categoryName, "Catego");
  useEffect(() => {

    if (
          categoryName.length !== 0
    ) {
      localStorage.setItem(
        "categoryName",
        JSON.stringify(categoryName.map((category) => category.slug)),
        []
      );
    }
  }, [categoryName]);

  console.log(categoryName);

  const clickHamburger = () => {
    setActive(!active);
  };
  const getActiveList = () => {
    setActiveList(!activeList);
  };
  console.log(activeList);

  if (active) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.leftLogos}>
          <img
            className={styles.hamburgerIcon}
            onClick={clickHamburger}
            src={hamburger}
            alt=""
          />
          <Link to={"/"}>
            <img src={mainLogo} alt="" />
          </Link>
        </div>
        <div className={styles.rightLogos}>
          <img src={people} alt="" />
          <img src={heart} alt="" />
          <div className={styles.sebet}>
            <img src={sebet} alt="" /> <span className={styles.count}>0</span>
          </div>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <Search />
        <ul
          className={`${active ? styles["active-navBar"] : styles["navbar"]} ${
            styles.navbar
          } `}
        >
          <div className={styles.hamburgerHeader}>
            <div className={styles.hamburgerMenu}>
              <img onClick={clickHamburger} src={close} alt="" />
              <img src={mainLogo} alt="" />
            </div>
            <img className={styles.searchNavIcon} src={search} alt="" />
          </div>
          {categoryName.map((cat) => (
            <li className={styles.navList} key={cat.id}>
              <Link
                to={`/products/${cat? cat.slug : ''}/1`} 
                onClick={() => setActive(false)}
              >
                {cat.name}
              </Link>
              <img
                onClick={getActiveList}
                style={{ transform: activeList ? "rotate(90deg)" : "none" }}
                src={right}
                alt=""
              />
            </li>
          ))}

          <div className={styles.login}>
            <SignButton
              background={"white"}
              color={"#2DD06E"}
              title={"Daxil Ol"}
              border={"1px solid #2DD06E"}
            />
            <SignButton
              background={"#2DD06E"}
              color={"white"}
              title={"Qeydiyyat"}
              border={"1px solid #2DD06E"}
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
