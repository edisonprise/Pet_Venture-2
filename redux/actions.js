import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH = "SEARCH";
export const USERS_ERROR = "USERS_ERROR";
export const SORT_BY_CATEGORY = "SORT_BY_CATEGORY";
export const SORT_BY_SUB_CATEGORY = "SORT_BY_SUB_CATEGORY";

export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";
// export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
// export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";

export function getProducts() {
  return async function (dispatch) {
    const apiData = await axios.get("/api/products");
    return dispatch({ type: GET_PRODUCTS, payload: apiData.data });
  };
}

// Función para obtener productos por nombre
// export async function getProdctByName(name) {
//   const res = "";

//   try {
//     return dispatch({ type: GET_PRODUCTS_BY_NAME, payload: res.data });
//   } catch (error) {
//     return dispatch({ type: error });
//   }
// }


export function getProductsDetail() {
  return async function (dispatch) {
    const apiData2 = await axios.get("/api/productsById");
    return dispatch({ type: GET_PRODUCTS_DETAIL, payload: apiData2.data });
  };
}

  
