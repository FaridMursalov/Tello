import axios from "./index";

export const getProducts = (limit) => axios.get(`/products?limit=${limit}`);

export const getCategories = async (categories, limit) => {
  return axios.get(
    `/products?${categories && "category_slug=" + categories}&limit=${limit}`
  );
};
export const getCategoriesDetail = async (category) => {
  return axios.get(`https://api.chec.io/v1/categories/${category}?type=slug`);
};

export const getProductsList = (slug, page, limit,sortBy,sortDirection) =>
  axios.get(
    `https://api.chec.io/v1/products?category_slug=${slug}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortDirection=${sortDirection}`
  );



  export const getProductVariant = (id) =>
  axios.get(
    `https://api.chec.io/v1/products/${id}`
  );

  export const getFindProduct = (product) =>
  axios.get(
    `https://api.chec.io/v1/products?query=${product}`
  );






 
