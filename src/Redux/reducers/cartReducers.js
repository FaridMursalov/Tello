import { createSlice } from '@reduxjs/toolkit'
import { createCartRedux,addBasketThunk,getBasketThunk } from '../actions/CreateCart';
import { updateBasket } from '../actions/CreateCart';
const initialState = {
 loading : false ,
  cart: {},
  error : null
}

export const cartReducers = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {

    [getBasketThunk.pending]: (state) => {
      state.loading = true;
    },
    [getBasketThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getBasketThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cart = payload;
    },
    [addBasketThunk.pending]: (state) => {
      state.loading = true;
    },
    [addBasketThunk.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addBasketThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cart = payload;
    },
    [createCartRedux.pending]: (state) => {
      state.loading = true;
    },
    [createCartRedux.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [createCartRedux.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cart = payload;
    },
    [updateBasket.pending]: (state) => {
      state.loading = true;
    },
    [updateBasket.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateBasket.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cart = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { } = cartReducers.actions

export default cartReducers.reducer