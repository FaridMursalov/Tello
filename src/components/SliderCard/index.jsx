/* eslint-disable react/no-unescaped-entities */
import styles from "./slider.module.scss";
// eslint-disable-next-line react/prop-types
const SliderCard = ({image, campaign,title,description,key}) => {
    
  return (
    <div key={key} className={styles.SliderCard}>
      <div className={styles.SliderInfo}>
        <img className={styles.SliderImg} src={image} alt="" />
        <div className={styles.SliderContent}>
          <p className={styles.CardTitle}>{campaign} </p>
              <p className={styles.CardTitle}>{title}</p>
              <p className={styles.CardText}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
