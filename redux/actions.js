// redux/actions.js
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH = "SEARCH";
export const USERS_ERROR = "USERS_ERROR";

// Función para obtener todos los productos
export async function getProducts(dispatch) {
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

// Función para obtener productos por nombre
export async function getnameProducts(name) {
  try {
    return dispatch({ type: SEARCH, payload: name });
  } catch (error) {
    return dispatch({ type: error });
  }
};


