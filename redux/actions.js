export const GET_PRODUCTS = "GET_PRODUCTS";
export const USERS_ERROR = "USERS_ERROR";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`api/products`);
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
};
gi;
