import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../utils/context/productContext";
import ProductShop from "./product";

function Cart() {
  const { products } = useContext(ProductContext);
  const filters = products.slice(0, 5);

  return (
    <div className="bg-[#748E63] py-20">
      <div className="text-center my-10">
        <h1 id="product" className="font-body font-bold text-5xl">
          Product
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {filters.map((product) => {
            return <ProductShop product={product} key={product.id} />;
          })}
        </div>
        <Link to="/product">
          <div className="font-body font-bold text-xl mx-auto mt-16 text-center hover:underline hover:text-white cursor-pointer">
            More Products
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
