import styles from "./AdvertisingCard.module.scss";
import image from "../../../imgs/Rectangle 158.svg";
import Button from "../../../../components/Button";
// eslint-disable-next-line react/prop-types
const AdvertisingCard = ({backgroundColor}) => {
  return (
    
      
      <div className={styles.Card} style={{background: backgroundColor}}>
        <div className={styles.Info}>
          <img className={styles.Img} src={image} alt="" />
          <div className={styles.Content}>
            <div>
                <p className={styles.CardTitle}>Iphone 13 </p>
                <p className={styles.CardTitle}>Rəngli Güclü</p>
                <p className={styles.CardTitle}>Əsil Sizə Lazım Olan</p>
            </div>
            <div className={styles.Price}>
                
                <p className={styles.CardTitle}>1 519 AZN</p>
                <p className={styles.CardText}>Faizsiz taksitlə 127 AZN-dən</p>
            </div>
            <Button text={"İndi alın"}/>
          </div>
        </div>
      </div>
    
  );
};

export default AdvertisingCard;
