import styles from "./home.module.scss";
import Slider from "./Slider/index";
import CardSlider from "../../../components/CardSlider";
import AdvertisingCard from "./AdvertisingCard";
import Mob from "../../imgs/Slider 1.svg";
import Mob2 from "../../imgs/Rectangle 158.svg";
import Aks from "../../imgs/Rectangle 160.svg";
import ProductsNumber from "./ProductsNumber";
import SmartWatch from "../../imgs/smartWatch 7.svg";
import PrNUmbImg from "../../imgs/prnNmbr11.svg";
import PrNumbEnd from "../../imgs/PrNumbEnd.svg";
import Services from "./Services";
import Card from "../../imgs/card-pos.svg";
import Box from "../../imgs/boww.svg";
import Medal from "../../imgs/medal-star.svg";
import MarkaSlider from "./MarkaSlider";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { createCartRedux } from "../../../Redux/actions/CreateCart";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProductsAsync } from "../../../Redux/actions/productAction";
// import { fetchCategoriesAsync } from "../../../Redux/actions/fetchCategoriesAsync";
import { getCategories } from "../../../api/product";
import axios from "../../../api/index";

const Home = () => {
  const dispatch = useDispatch()
const cartID = localStorage.getItem("cartId")

  useEffect(() => {
    if (!cartID) {
      console.log(cartID, "LOCAL ID");
      dispatch(createCartRedux());
    } else {
      const parsedCartID = JSON.parse(cartID);
    }
  }, []);
  return (
    <div className="home">
      <Slider />

      <CardSlider title={"Ən çox satılan məhsullar"} category="apple" />
      <CardSlider
        category="yeni"
        title={"Yeni Gələn məhsullar"}
        img={Mob2}
      />
      <div className={styles.advertisings}>
        <AdvertisingCard />
        <AdvertisingCard backgroundColor={"#E5E5E5"} />
      </div>
      <CardSlider
        title={"Yeni gələn aksessuarlar"}
        img={Aks}
        category="aksessuar"
      />
      <div className={styles.ProductsNumber}>
        <ProductsNumber
          product={"Telefon"}
          count={322}
          flexDirection={"column"}
          productImg={PrNUmbImg}
          background={"linear-gradient(-230deg, #F2E4DD, #FFFFFF)"}
        />
        <div className={styles.container}>
          <ProductsNumber
            product={"Smart Saat"}
            count={46}
            flexDirection={"column"}
            productImg={SmartWatch}
            width={"50%"}
            gap={"0"}
            background={"linear-gradient(350deg, #F2E4DD, #FFFFFF)"}
            paddingRight={"10px"}
          />
          <ProductsNumber
            product={"Aksesuar"}
            count={891}
            flexDirection={"column"}
            background={"linear-gradient(5232deg, #F2E4DD, #FFFFFF)"}
            productImg={PrNumbEnd}
            width={"60%"}
            gap={"10px"}
            paddingRight={"10px"}
          />
        </div>
      </div>
      <div className={styles.ServicesContainer}>
        <Services
          logo={Box}
          title={"Çatdırılma"}
          text={" Lorem, ipsum dolor sit amet consectetur adipisicing elit. "}
        />
        <Services
          logo={Card}
          title={"Kredit"}
          text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <Services
          logo={Medal}
          title={"Zəmanət"}
          text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
      <MarkaSlider />
    </div>
  );
};

export default Home;
