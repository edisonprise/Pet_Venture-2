import { GET_PRODUCTS, GET_PRODUCTS_DETAIL } from "./actions";

const initialState = {
  products: [],
  productsDetail:{},
  paginaactual: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
   
 
    

    case GET_PRODUCTS_DETAIL:
		
    return {
        ...state,
        productsDetail: action.payload,
       
      
    };
    



    default:
      return state;
  }
}

