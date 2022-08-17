import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  increaseProductQuantity,
} from "../../redux/cart/actions";
import { addProduct } from "../../redux/products/actions";

const Product = ({ id, productName, productPrice, productQuantity }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(id, productName, productPrice, productQuantity);

  const addProductHandler = (id) => {
    console.log(id);
    if (cart.find((product) => product.id === id)) {
      dispatch(increaseProductQuantity(id));
      dispatch(addProduct(id, 1));
    } else {
      dispatch(addProductToCart(id, productName, productPrice));
      dispatch(addProduct(id, 1));
    }
  };

  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p>
            {productName} ({productQuantity})
          </p>

          <p className="text-gray-400 text-base">Tk {productPrice}</p>
        </div>
        <div className="text-lg font-semibold">
          <button
            onClick={() => addProductHandler(id)}
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
