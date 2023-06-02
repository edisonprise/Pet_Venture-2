import axios from "axios";

export const SEARCH = "SEARCH"
export const GET_PRODUCTS = "GET_PRODUCTS";
export const USERS_ERROR = "USERS_ERROR";

// -------------------- Todos los Productos --------------- //
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
};

// -------------------- Productos Por Name --------------- //
// export default async function getnameProducts(name){
//   try {
//     return dispatch({ type: SEARCH, payload: name}); 
//   } catch (error) {
//     return dispatch({ type: error})
//   }
// }; 

