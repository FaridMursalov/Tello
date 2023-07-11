import { createSlice } from '@reduxjs/toolkit'
import { userAccount } from '../actions/auth';
const initialState = {
 loading : false ,
  data: {},
  error : null
}

export const loginReducer = createSlice({
  name: 'data',
  initialState,
  extraReducers: {

    [userAccount.pending]: (state) => {
      state.loading = true;
    },
    [userAccount.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userAccount.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { } = loginReducer.actions

export default loginReducer.reducer