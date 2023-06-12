import axios from "./index";

export const getProducts = (limit) => axios.get(`/products?limit=${limit}`);

export const getCategories = async (categories, limit )=>{
    return axios.get(
        `/products?${categories && "category_slug=" + categories}&limit=${limit}`
      )
} 

export const getProductsList = (slug,page,limit) =>  axios.get(`https://api.chec.io/v1/products?category_slug=${slug}&page=${page}&limit=${limit}`)