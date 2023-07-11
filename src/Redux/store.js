import { configureStore } from '@reduxjs/toolkit'
import cartReducers from './reducers/cartReducers'
import loginReducer from './reducers/loginReducer'
export const store = configureStore({
  reducer: {
    cartReducers,
    loginReducer
  },
})