import SignButton from "../../../../components/SignButton";
import styles from "./productDetail.module.scss";
import React, { useState } from "react";
import Sebet from "../../../icons/detailBasket.svg";
import ColorBox from "../../../../components/ColorBox";
import MemoryBox from "../../../../components/GbBox";
import axios from "../../../../api/index";
import CountButton from "../../../../components/CountButton";

import { useSelector, useDispatch } from "react-redux";
import { addBasketThunk } from "../../../../Redux/actions/CreateCart";
import { useEffect } from "react";
const ProductDetail = ({
  variantGroups1,
  variantGroups2,
  colorBasketOptions,
  sizeBasketOptions,

  id,
  productAssets,
  setProductAssets,
  setDetailIndex,
  detailIndex,
  productPricee,
  setPriceIndex,
  PriceIndex,
}) => {
  const { loading } = useSelector((state) => state.cartReducers);
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const cartID = localStorage.getItem("cartId");
  console.log(cartID, "LOCAL ID");

  const Memory = productAssets?.variant_groups?.[1]?.options?.map(
    (memo, index) => memo?.name
  );
  console.log(variantGroups1, "PPPPPPPPP");
  const CountIncrement = () => {
    if (
      counter < productAssets?.inventory?.available ||
      productAssets?.inventory?.managed == false
    ) {
      setCounter(counter + 1);
    }
  };
  const CountDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  // const addToBasket = () => {

  // };

  const addToBasket = async () => {
    console.log(variantGroups1, colorBasketOptions);
    const data = {
      id: id,
      quantity: counter,
    };
    dispatch(addBasketThunk(data));
  };

  return (
    <div>
      <div className={styles.productName}>
        {productAssets.name}{" "}
        {productAssets?.variant_groups?.[1]?.options?.[PriceIndex].name} (
        {productAssets?.variant_groups?.[0]?.options?.[detailIndex]?.name}){" "}
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.DefaultPrice}>
          {productPricee
            ? productPricee.toString().split(",")
            : productAssets?.price?.formatted.toString().split(",")}
          <span className={styles.manatIcon}> ₼</span>
        </span>
        <span className={styles.basket}>
          <SignButton
            loading={loading}
            onClickFunction={addToBasket}
            background={"#2DD06E"}
            border={"white"}
            title={"Səbətə at"}
            color={"white"}
            icon={Sebet}
          />
        </span>
      </div>
      <div className={styles.variants}>
        <div className={styles.colors}>
          Rəng:
          {productAssets?.variant_groups?.[0]?.options.map((color, index) => (
            <ColorBox
              key={index}
              index={index}
              setDetailIndex={setDetailIndex}
              detailIndex={detailIndex}
              BgColor={color?.name}
            />
          ))}
        </div>
        <div className={styles.memory}>
          {" "}
          {Memory ? "Yaddaş:" : ""}{" "}
          {Memory?.map((memo, index) => (
            <MemoryBox
              PriceIndex={PriceIndex}
              index={index}
              setPriceIndex={setPriceIndex}
              memo={memo}
            />
          ))}{" "}
        </div>
        <div className={styles.ProductCount}>
          <span className={styles.countTitle}>Miqdar:</span>
          <CountButton clickFunction={CountDecrement} content={"-"} />
          <span className={styles.count}>{counter}</span>{" "}
          <CountButton clickFunction={CountIncrement} content={"+"} />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
