import styles from "./Products.module.scss";
import Filters from "./Filters";
import testImg from "../../imgs/Slider 1.svg";
import Card from "../Home/Card";
import FiltersDesktop from "./FiltersDesktop";
import { useParams } from "react-router-dom";
import { getCategories, getProductsList } from "../../../api/product";

import { useEffect, useState } from "react";
import PageNation from "../../../components/pageNation";
const Products = () => {
  const [listCategory, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productsLength, setProductsLength] = useState(0);
  const { id, page } = useParams();
  const pageLimit = 3
  useEffect(() => {
    const lengthProducts = async () => {
      const response = await getCategories(id);
      const data = await response.data.data;
      setProductsLength(data.length);
    };
    const getData = async () => {
      try {
        const response = await getProductsList(id, page, pageLimit);
        const products = await response?.data?.data;
        console.log(products, "xeta");
        
        setCategory(products);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    lengthProducts();
    getData();
  }, [id]);
  //   const dispatch = useDispatch()
  //  const {categories} = useSelector((state)=> state.categoriesReducer)
  //  console.log(categories);
  //  useEffect(()=>{
  // dispatch(fetchCategoriesAsync())

  //  },[])

  return (
    <div className={styles.products}>
      <Filters />
      <FiltersDesktop />
      <div className={styles.cardContainer}>
        <div className={styles.title}>
          {productsLength} Məhsul tapıldı
          <select className={styles.selectDesktop}>
            {" "}
            <option value=">Ən yenilər">Ən yenilər</option>
            <option value="Ən köhnə">Köhnələr</option>
            <option value="Ən baha">Ən Bahalı</option>
            <option value="Ən ucuz">Ən ucuz</option>
          </select>
        </div>
        <div className={styles.card}>
          {listCategory.map((category) => (
            <Card img={testImg} product={category} />
          ))}
        </div>
        <PageNation   productsLength={productsLength} category={id} pageLimit={pageLimit} />
      </div>
    </div>
  );
};

export default Products;
