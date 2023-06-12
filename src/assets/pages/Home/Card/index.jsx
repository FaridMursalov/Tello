import styles from "./card.module.scss";

// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <img className={styles.CardImg} src={product?.image?.url} alt="" />
      <div className={styles.productInf}>
        <span className={styles.productName}>{product?.name}</span>
        <div className={styles.prices}>
          <span className={styles.oldPrice}> </span>{" "}
          <span className={styles.sale}> </span>{" "}
          <span className={styles.price}> {product?.price?.formatted}₼</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
