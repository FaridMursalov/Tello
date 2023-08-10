import Card from "../../assets/pages/Home/Card";
import styles from "./cardSlider.module.scss";
import right from "../../assets/icons/rightt.svg";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatalogMagic from '../ReactSkeleton/index'

// eslint-disable-next-line react/prop-types
const CardSlider = ({ title, category }) => {
  
  const [listCategory, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategories(category, 4);
        const product = response?.data?.data;
        setCategory(product);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [category]);

  
 

  return (
    <div className={styles.cardSlider}>
      <h3 className={styles.cardInf}> {title} </h3>
      <div className={styles.cards}>
        {loading? (<div className={styles.center}>
          <CatalogMagic/>
          <CatalogMagic/>
          <CatalogMagic/>
          <CatalogMagic/>
        </div>) :  listCategory?.map((product) => (
          <Link key={product.id} to={`/Product-details/${product.id}`}>
            <Card key={product.id} product={product} />
          </Link>
        ))}
      </div>
      <div className={styles.AllCard}>
        <Link
          className={styles.link}
          to={`/products/${category ? category : ""}/1`}
        >
          <h4>
            Hamısına bax <img src={right} alt="" />
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default CardSlider;
