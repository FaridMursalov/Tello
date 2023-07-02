import styles from "./Products.module.scss";
import Filters from "./Filters";
import testImg from "../../imgs/Slider 1.svg";
import Card from "../Home/Card";
import FiltersDesktop from "./FiltersDesktop";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { getCategoriesDetail, getProductsList } from "../../../api/product";

import { useEffect, useState } from "react";
import PageNation from "../../../components/pageNation";
import CatalogMagic from "../../../components/ReactSkeleton";
const Products = () => {
  const [listCategory, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productsLength, setProductsLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageOne, setPageOne] = useState(false)// Mevcut sayfa numarası state'i
  const [sortBY, setSortBy] = useState("sort_order")
  const [sortDirection, setSortDirection] = useState("")

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const pageLimit = 3;
  // console.log(listCategory, "ss");
  useEffect(() => {
   if(currentPage === 1 ){
    setPageOne(!pageOne)
   }
   else{ setCurrentPage(1);}
   
    
  }, [id]);

  // useEffect(() => {
  //   console.log("currentPage", currentPage);
  //   // setCurrentPage(1)
  //   navigate(`/products/${id}/${currentPage}`);
  //   console.log("Salam");
  // }, [currentPage]);


  useEffect(() => {
    console.log("fetch", currentPage, location);
    navigate(`/products/${id}/${currentPage}`);
    const getData = async () => {
      
      try {
        setIsLoading(true);

        const response = await getProductsList(id, currentPage, pageLimit,sortBY);
        const products = await response.data?.data;

        setCategory(products);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const lengthProducts = async () => {
      const response = await getCategoriesDetail(id);
      const data = await response?.data?.products;
      console.log(data, "lengthhh");
      setProductsLength(data);
    };
    lengthProducts();
    getData();
  }, [pageOne,currentPage,sortDirection,sortBY]);

  const sortByDirection = (e)=>{
  

    setSortBy(e.target.value)
  }
  console.log(sortBY);
  
  
  return (
    <div className={styles.products}>
      <Filters sortBY={sortBY}  sortByDirection={sortByDirection} />
      <FiltersDesktop />
      <div className={styles.cardContainer}>
        <div className={styles.title}>
          {productsLength} Məhsul tapıldı
          <select  className={styles.selectDesktop } value={sortBY} onChange={sortByDirection}>
            {" "}
            <option   value="sort_order">Ən yenilər</option>
            <option   value="name">Ada görə</option>
            <option  value="price">Qiymətə görə</option>
          </select>
        </div>
        <div className={styles.card}>
        <>
    {isLoading ? (
    <div className={styles.loader}>
<CatalogMagic/>
<CatalogMagic/>
<CatalogMagic/></div>
    ) : (
      listCategory.map((category) => (
        <Link className={styles.cardLink} key={category.id} to={`/Product-details/${category.id}`}>
          <Card img={testImg} product={category} />
        </Link>
      ))
    )}
  </>

        </div>
        <PageNation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsLength={productsLength}
          category={id}
          pageLimit={pageLimit}
        />
      </div>
    </div>
  );
};

export default Products;
