import { ADD_TO_CART_FIRST, DECREASE_TO_CART } from "./actionTypes";


export const addProduct = (id, quantity) => {
  return {
    type: ADD_TO_CART_FIRST,
    payload: {
        id,
        quantity,
    },
  };
}

export const decreaseProduct = (id, quantity) => {
  return {
    type: DECREASE_TO_CART,
    payload: {
        id,
        quantity,
    },
  };
}
