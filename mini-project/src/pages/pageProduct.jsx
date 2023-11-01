import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../utils/context/productContext";
import ProductShop from "@/components/product";
import Navbar from "@/components/navbar";
import SideBar from "./sidebar/sideBar";
import Footer from "@/components/footer";
import PuffLoader from "react-spinners/PuffLoader";

function PageProduct() {
  const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-full my-96">
          <PuffLoader color="#36d7b7" size={100} />
        </div>
      ) : (
        <div>
          <Navbar />
          <SideBar />
          <div>
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
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default PageProduct;
