import styles from "./ProductsNumber.module.scss";
import rightLink from "../../../imgs/rightLinkIcon.svg";

// eslint-disable-next-line react/prop-types
const ProductsNumber = ({
  // eslint-disable-next-line react/prop-types
  background,
  // eslint-disable-next-line react/prop-types
  flexDirection,
  // eslint-disable-next-line react/prop-types
  width,
  // eslint-disable-next-line react/prop-types
  productImg,
  // eslint-disable-next-line react/prop-types
  gap,
  // eslint-disable-next-line react/prop-types
  paddingRight,
  // eslint-disable-next-line react/prop-types
  count,
  // eslint-disable-next-line react/prop-types
  product,
}) => {
  return (
    <div
      style={{
        background: background,
        flexDirection: flexDirection,
        gap: gap,
        paddingRight: paddingRight,
      }}
      className={styles.productsNumber}
    >
      <div className={styles.productsInf}>
        <span className={styles.product}> {product}</span>
        <span className={styles.productNumber}> Məhsul sayı: {count}</span>
        <a href="" className={styles.productLink}>
          {" "}
          Məhsullara keçid <img src={rightLink} alt="" />{" "}
        </a>
      </div>
      <div className={styles.productImgs}>
        <img
          style={{ width: width }}
          className={styles.productImg}
          src={productImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductsNumber;
