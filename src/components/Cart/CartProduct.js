import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../redux/cart/actions";
import { addProduct, decreaseProduct } from "../../redux/products/actions";

const CartProduct = ({ id, productName, productPrice, addedQuantity }) => {
  const dispatch = useDispatch();
  const incrementHandler = (id) => {
    dispatch(increaseProductQuantity(id, 1));
    dispatch(addProduct(id, 1));
  };

  const decrementHandler = (id) => {
    dispatch(decreaseProductQuantity(id, 1));
    dispatch(decreaseProduct(id, 1));
  };

  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{productName}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button
            onClick={() => decrementHandler(id)}
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 12H6"
              />
            </svg>
          </button>
          <p>{addedQuantity}</p>
          <button
            onClick={() => incrementHandler(id)}
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
