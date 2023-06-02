import { GET_PRODUCTS, USERS_ERROR } from "./actions";

const initialState = {
  products: [],
  paginaactual: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case USERS_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
}
