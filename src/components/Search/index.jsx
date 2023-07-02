import styles from "./search.module.scss";
import search from "../../assets/icons/Search.svg";
import close from "../../assets/icons/closeSearch.svg";
import { useEffect, useState,useRef } from "react";
import { getFindProduct } from "../../api/product";
import { Link, useNavigate } from "react-router-dom";
import FadingLoader from "./SearchLoader";
const Search = () => {
  const [isFocus, setIsFocused] = useState(false);
  const [findProducts, setFindProducts] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
const useReff = useRef()

window.addEventListener('click', (e) => {
  if (!useReff.current?.contains(e.target)) {
    setIsFocused(false)
  }
})


console.log(useReff, "ref");
  useEffect(() => {
    const getFindProducts = async () => {
      try {
        setIsLoading(true);
        const response = await getFindProduct(findProducts);
        setSearchProduct(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    

    getFindProducts();
  }, [findProducts]);
  console.log("dedefedfef", searchProduct);

  console.log(findProducts);
  return (
    <div  ref={useReff} className={styles.c}>
      <form className={styles.searchForm}>
        <img className={styles.searchIcon} src={search} alt="" />
        <input
          onFocus={() => setIsFocused(true)}
          className={styles.search}
          type="search"
          value={findProducts}
          onChange={(e) => setFindProducts(e.target.value)}
          placeholder="Axtarış..."
        />
      </form>
      <div  className={isFocus ? styles.SearchList : styles.closeSearch}>
        {isLoading ? (
          <div className={styles.searchLoader}>
            <FadingLoader />
            <FadingLoader />
            <FadingLoader />
          </div>
        ) : findProducts !== "" && searchProduct.data !== undefined ? (
          searchProduct?.data?.map((product) => (
            <Link 

              key={product.id}
              onClick={()=>setIsFocused(false)}
              to={`/Product-details/${product.id}`}
              
            >
              <div className={styles.searchProduct}>
                <img src={product.image.url} alt="" />
                <div>
                  {" "}
                  <span>{product.name}</span>{" "}
                </div>{" "}
              </div>
            </Link>
          ))
        ) : (
          <div>
            <div className={styles.endSearch}>
              <h3>Son axtarışlar</h3>{" "}
              <span className={styles.Clear}>Təmizlə</span>
            </div>
            <div className={styles.verySearch}>
              <h3>Çox axtarılanlar</h3>
            </div>
          </div>
        )}
      </div>
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
