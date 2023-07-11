import { createAsyncThunk } from "@reduxjs/toolkit";
import { Register } from "../../api";
import { userInfo } from "../../api/auth";

const CustomerID = localStorage.getItem("CustomerId");
export const userAccount = createAsyncThunk(
  "login/fetchuserAccoun",
  async (data) => {
    const response = await userInfo(JSON.parse(CustomerID),data);
    return response?.data;
  }
);
