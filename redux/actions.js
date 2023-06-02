import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const USERS_ERROR = "USERS_ERROR";

export default async function getProducts(dispatch) {
  try {
    const res = await axios.get("/api/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
}

