import React from 'react';
import {  useSelector } from "react-redux";
import Product from './Product';

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  

  // const incrementHandler = () => {
  //   dispatch(increment());
  // };

  // const decrementHandler = () => {
  //   dispatch(decrement());
  // };
    return (
      <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
        {/* <Product/>
        <Product/>
        <Product/> */}
        {products.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            {...product}
            />
        ))}
        {/* <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div className="flex justify-between px-4 items-center">
            <div className="text-lg font-semibold">
              <p>Asus Vivobook X515MA (20)</p>
              <p className="text-gray-400 text-base">Tk 35,500</p>
            </div>
            <div className="text-lg font-semibold">
              <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div className="flex justify-between px-4 items-center">
            <div className="text-lg font-semibold">
              <p>Dell E1916HV 18.5 Inch (35)</p>
              <p className="text-gray-400 text-base">Tk 9,300</p>
            </div>
            <div className="text-lg font-semibold">
              <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div className="flex justify-between px-4 items-center">
            <div className="text-lg font-semibold">
              <p>Canon Eos 4000D 18MP (72)</p>
              <p className="text-gray-400 text-base">Tk 36,500</p>
            </div>
            <div className="text-lg font-semibold">
              <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    );
};

export default Products;