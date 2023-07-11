import axios from "./index";

export const getProducts = (limit) => axios.get(`/products?limit=${limit}`);

export const getCategories = async (categories, limit) => {
  return axios.get(
    `/products?${categories && "category_slug=" + categories}&limit=${limit}`
  );
};
export const getCategoriesDetail = async (category ) => {
  return axios.get(`https://api.chec.io/v1/categories/${category}?type=slug`);
};

export const getProductsList = (query= null, slug = null , page = 1, limit= 3,sortBy= null,sortDirection = null) =>
  axios.get(
    `/products? ${query && `query= ${query}`} & ${slug && ` category_slug=${slug}`}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortDirection=${sortDirection}`
  );



  export const getProductVariant = (id) =>
  axios.get(
    `/products/${id}`
  );

  export const getFindProduct = (product) =>
  axios.get(
    `/products?query=${product}`
  );






 
