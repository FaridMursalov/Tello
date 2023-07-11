import style from "./basket.module.scss";
import React, { useDebugValue } from "react";
// import style from "./Basket.module.scss";
// import shoppingCart from "../../assets/image/shopping-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import {
  addBasketThunk,
  getBasketThunk,
  updateBasket,
} from "../../../Redux/actions/CreateCart";
import { cartReducers } from "../../../Redux/reducers/cartReducers";
import { useEffect } from "react";
import sebet from "../../icons/shopping-cart.svg";
// import {  } from "../../Redux/actions/basketAction";
import { useState } from "react";
import Delete from "../../icons/delete.svg";
// import ClipLoader from "react-spinners/ClipLoader";

import api from "../../../api/index";
import { set } from "react-hook-form";
import { ClipLoader } from "react-spinners";

// import iphone from "../../assets/image/iphone11KontaktBlack.jpg";
// import deleteIcon from "../../assets/image/delete.svg";

const GetBasket = () => {
  const { cart, loading } = useSelector((state) => state.cartReducers);
  const [boolen, setBoolen] = useState(false);
  const [countIndex, setCountIndex] = useState();
  const [deleteIndex, setDeleteIndex] = useState();

  const [count, setCount] = useState([]);
  const navigate = useNavigate();
  // console.log(line_items, " BASSFEFEF");
  const dispatch = useDispatch();

  const [counter, setcounter] = useState(false);

  useEffect(() => {
    dispatch(getBasketThunk());
  }, [cart?.line_items?.length, boolen, counter]);

  console.log(count, "Cart");

  const CartID = localStorage.getItem("cartId");
  const handleUpdate = async (say, itemID, param, index) => {
    setCountIndex(index);
    const data = {
      quantity: param === "minus" ? say - 1 : say + 1,
    };
    try {
      setcounter(true);
      const response = await api.put(
        `/carts/${JSON.parse(CartID)}/items/${itemID}`,
        data
      );
setCount(response?.data)
      console.log(response.data, "leyla");
    } catch (error) {
      "Error", error;
    } finally {
      setcounter(false);
    }
  };

  const cartID = localStorage.getItem("cartId");

  const deleteBasket = async (item,index) => {
    setCountIndex(index)
    try {
      setBoolen(true);
      const response = await api.delete(
        `carts/${JSON.parse(cartID)}/items/${item}`
      );
      return response;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setBoolen(false);
    }
  };

  return (
    <div className={style.BasketCont}>
      <p className={style.count}>
        Səbət (<span>{cart?.line_items?.length}</span> məhsul)
      </p>
      {cart?.line_items?.length === 0 ? (
        <div className={style.emptyBasket}>
          <img src={sebet} />
          <p className={style.emptyBasketText}>Səbətiniz halhazırda boşdur</p>
          <button onClick={() => navigate("/")} className={style.btn}>
            Alış-verişə davam et
          </button>
        </div>
      ) : (
        <div className={style.fullBasketCont}>
          {" "}
          <ul className={style.cardsList}>
            {cart?.line_items?.map((item, index) => (
              <li className={style.basketCard}>
                <img src={item?.image?.url} className={style.image} alt="" />
                <div className={style.cardDetail}>
                  <p>{item?.name}</p>
                  <div className={style.counterAndOther}>
                    <div className={style.colorAndPrice}>
                      {/* <div className={style.colorCont}>
                        <h4 className={style.colorText}>Rəng:</h4>
                        <h4 className={style.realColor}>Bənövşəyi</h4>
                      </div> */}
                      <h3> {item?.price?.raw} AZN</h3>
                    </div>
                    <div className={style.countProductCont}>
                      <div
                        className={style.btnCount}
                        onClick={() =>
                          handleUpdate(item.quantity, item?.id, "minus", index)
                        }
                      >
                        -
                      </div>
                      {countIndex === index && counter ? (
                        <ClipLoader />
                      ) : (
                        <span className={style.countValue}>
                          {" "}
                          {item?.quantity}
                        </span>
                      )}

                      <div
                        className={style.btnCount}
                        onClick={() =>
                          handleUpdate(item.quantity, item?.id, "plus", index)
                        }
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                { countIndex === index && boolen? (<span className={style.deleteBtn}> <ClipLoader/></span>):
                  <img
                    onClick={() => deleteBasket(item?.id, index)}
                    src={Delete}
                    alt=""
                    className={style.deleteBtn}
                  />
                }
              </li>
            ))}
          </ul>
          <div className={style.balance}>
            <h1>Ümumi</h1>
            <ul>
              <li>
                <h2>Məbləğ </h2> <p>{cart?.subtotal?.formatted}</p>
              </li>
              <li>
                <h2>Çatdırılma</h2> <p>0.00</p>
              </li>
              <li>
                <h2>Hədiyyə paketi</h2> <p>0.00</p>
              </li>
              <li>
                <h2>Promo kod</h2> <p>0.00</p>
              </li>
              <hr />
              <li>
                <h2>Cəmi</h2>{" "}
                <p className={style.totalBalance}>
                  {cart?.subtotal?.formatted}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetBasket;
