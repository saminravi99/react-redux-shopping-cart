import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "./actionTypes";

//Intial State
const initialState = {
  cart: [
    // {
    //   id: 1,
    //   productName: "Asus Vivobook X515MA",
    //   productPrice: 35000,
    //   addedQuantity: 1,
    // },
  ],
};
//Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              addedQuantity: product?.addedQuantity ? product?.addedQuantity + 1 : 1,
            };
          } else {
            return product;
          }
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              addedQuantity: product.addedQuantity - 1,
            };
          } else {
            return product;
          }
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
