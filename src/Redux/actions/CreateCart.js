import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCart } from "../../api/card";
import axios from "axios";
import api from "../../api/index";

export const createCartRedux = createAsyncThunk(
  "getCart/fetchGetCart",
  async () => {
    const response = await createCart();
    localStorage.setItem("cartId", JSON.stringify(response.data.id));
    return response.data;
  }
);

const cartID = localStorage.getItem("cartId");
export const getBasketThunk = createAsyncThunk(
  "getBasket/fetchGetBasket",
  async () => {
    const response = await api.get(`/carts/${JSON.parse(cartID)}`);
    const basket = response?.data;
    return basket;
  }
);

export const updateBasket = createAsyncThunk('basket/fetchBasket', async(itemId, data) => {

  const response = await api.put(`/carts/${JSON.parse( cartID)}/items/${itemId}`, data)
  return response?.data
  
})

export const addBasketThunk = createAsyncThunk(
  "addBasket/fetchAddBasket",
  async (data) => {
    console.log(cartID, "+++++++");
    const response = await api.post(`/carts/${JSON.parse(cartID)}`, data);

    const addBasket = response?.data;
    // console.log(addBasket);
    return addBasket;
  }
);
//   export const createBasketThunk = createAsyncThunk(
//     "creatBasket/fetchCreateBasket",
//     async () => {
//       const response = await api.createBasket();
//       const creatBasket = response;
//       return creatBasket;
//     }
//   );
