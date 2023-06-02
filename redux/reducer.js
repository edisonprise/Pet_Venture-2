import { GET_PRODUCTS, USERS_ERROR } from "./actions";

const initialState = {
  products: [],
  //   loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        // loading: false,
      };
    case USERS_ERROR:
      return {
        // loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
