import React, { useContext } from "react";

import { ProductContext } from "../utils/context/productContext";
import ProductShop from "./product";

function Cart() {
  const { products } = useContext(ProductContext);

  return (
    <div className="bg-[#748E63] py-20">
      <div className="text-center my-10">
        <h1 id="product" className="font-body font-bold text-5xl">
          Product
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {products.map((product) => {
            return <ProductShop product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
