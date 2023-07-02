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
import { useState, useEffect } from "react"; // useEffect'i burada ekledim
import SignButton from "../SignButton";
import { Link } from "react-router-dom";
import axios from "../../api/index";
import { useSelector } from "react-redux";

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeList, setActiveList] = useState(false);
  const [ activeListIndex, setActiveIndexList] = useState(null)
  const [categoryName, setCategoryName] = useState([]);

  const { value } = useSelector((state) => state.counterReducer);

  useEffect(() => {
    const getCategoryName = async () => {
      const response = await axios.get("https://api.chec.io/v1/categories");
      const data = response.data.data;
      setCategoryName(data);
    };

    getCategoryName();
  }, []);

  const clickHamburger = () => {
    setActive(!active);
  };

  const getActiveList = (index) => {
    // setActiveList(!activeList);
    setActiveIndexList(activeListIndex === index? null : index)
  };


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
          <Link to={"/Login"}><img src={people} alt="" /></Link>
          <Link><img src={heart} alt="" /></Link>
          <Link to={"/basket"}>
            <div className={styles.sebet}>
              <img src={sebet} alt="" />{" "}
              <span className={styles.count}>{value}</span>
            </div>
          </Link>
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

          {
            categoryName.map((cat,index) => (
              <div key={cat?.id}>
                <li className={styles.navList}>
                  <Link
                    to={`/products/${cat ? cat.slug : ""}/1`}
                    onClick={() => setActive(false)}
                  >
                    {cat?.name}
                  </Link>
                  {cat.children.length > 0 &&  (
                    <span
                      onClick={()=> getActiveList(index)}
                      className={
                        activeListIndex === index? styles.rightIcon : styles.rightIcons
                      }
                    >
                      <img src={right} alt="" />
                    </span>
                  )}
                </li>
                {cat.children.length > 0 && (
                  <div className={` ${ activeListIndex=== index?  styles.categoriesWindow : styles.display_none} ${  styles.categoriesWindow }` }>
                    {cat?.children?.map((subCategory) => (
                      <Link
                      key={subCategory.slug}
                      onClick={()=> setActive(false)}
                        to={`/products/${subCategory ? subCategory?.slug : ""}/1`}
                      >
                        {subCategory?.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}

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
