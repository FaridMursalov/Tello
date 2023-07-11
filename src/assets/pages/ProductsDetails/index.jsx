import React, { useEffect, useState } from "react";
import ProductDetailSlider from "./productDetailsSlider";
import { useParams } from "react-router-dom";
import { getProductVariant } from "../../../api/product";
import styles from "./productsDetails.module.scss";
import axios from "../../../api/index";
import ProductDetail from "./ProductDetail";
import HashLoader from "react-spinners/HashLoader";
import Breadcrumb from "../../../components/breadCrumb";

// import { useSelector, useDispatch } from 'react-redux'
// import { fetchProductsAsync } from '../../../Redux/actions/productAction'

const ProductsDetails = () => {
  const [productAssets, setProductAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [PriceIndex, setPriceIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);
  const { id } = useParams();

  const productPricee =
    productAssets?.variant_groups?.[1]?.options[PriceIndex].price?.formatted;
  const sliderImages = productAssets?.variant_groups?.[0]?.options[
    detailIndex
  ]?.assets.map((id) => productAssets.assets.find((el) => el.id === id));
const colorBasket = productAssets?.variant_groups?.[0]?.id
const SizeBasket = productAssets?.variant_groups?.[1]?.id

const colorBasketOptions = productAssets?.variant_groups?.[0]?.options?.[detailIndex]?.id
const SizeBasketOptions = productAssets?.variant_groups?.[1]?.options?.[PriceIndex]?.id
console.log(colorBasketOptions, "FFFFFFFFFf");
  // console.log(sliderImages, "sliderImages");
  // console.log(sliderImages);
  useEffect(() => {
    const productVariants = async () => {
      try {
        setIsLoading(true);
        window.scrollTo(0, 0);
        const variants = await getProductVariant(id);
        const response = await variants.data;
        console.log(response, "+++++++___________");

        setProductAssets(response);
        console.log("response", response);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    productVariants();
  }, [id]);

  console.log(colorBasket, "prof");

  return (
    <div>
      {isLoading ? (
        <div className={styles.HashLoader}>
          <HashLoader color="#2DD06E" />
        </div>
      ) : (
        <div className={styles.ProductDetails}>
          
          <div>
            <ProductDetailSlider sliderImages={sliderImages} />
          </div>
          <div className={styles.DetailsContainer}>
            <ProductDetail
            colorBasketOptions={colorBasketOptions}
            SizeBasketOptions= {SizeBasketOptions}
              variantGroups1={colorBasket}
              variantGroups2={SizeBasket}
              id={id}
              PriceIndex={PriceIndex}
              setPriceIndex={setPriceIndex}
              productPricee={productPricee}
              productAssets={productAssets}
              setProductAssets={setProductAssets}
              detailIndex={detailIndex}
              setDetailIndex={setDetailIndex}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
