import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "./actionTypes";

export const increaseProductQuantity = (id, quantity) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};

export const decreaseProductQuantity = (id, quantity) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};

export const addProductToCart = (
  id,
  productName,
  productPrice
) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      productName,
      productPrice,
      addedQuantity: 1,
    },
  };
};
