import { Register } from "./index";

export const request = async (userData) => {
    return Register.post(
      `/exchange-token`, userData
    );}

    export const userInfo = async (id,userData) => {
        return Register.put(
          `/${id}`, userData
        );}