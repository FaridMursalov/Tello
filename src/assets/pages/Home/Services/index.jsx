import styles from "./services.module.scss";
// eslint-disable-next-line react/prop-types
const Services = ({logo,title,text}) => {
  return (
    <div className={styles.service}> 
      <img src={logo} alt="" />
      <h3> {title} </h3>
      <p>
        {text}
      </p>
    </div>
  );
};

export default Services;
