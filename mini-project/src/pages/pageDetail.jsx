import { useEffect, useState } from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartContext } from "@/utils/context/cartContext";
import { ProductContext } from "@/utils/context/productContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./sidebar/sideBar";
import { BsStarFill } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";

function PageDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const product = products.find((data) => {
    return data.id === parseInt(id);
  });
  if (!product) {
    return product;
  }
  const {
    rating,
    name,
    roaster,
    location,
    desc_1,
    desc_2,
    desc_3,
    price,
    image,
  } = product;
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
          <div className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
                  <img
                    className="max-w-[200px] lg:max-w-sm"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-[26px] font-body font-bold max-w-[450px] mx-auto lg:mx-0">
                    {name}
                  </h1>
                  <div className="text-xl text-red-500 font-medium mb-4">
                    Rp {price}
                  </div>
                  <div className="flex mb-6 space-x-4">
                    <div className="font-semibold font-body flex justify-center items-center gap-x-2">
                      <BsStarFill color="gold" />
                      {rating}/100
                    </div>
                    <div className="font-semibold font-body">
                      <span className="font-light">Roaster : </span>
                      {roaster}
                    </div>
                    <div className="font-semibold font-body">
                      <span className="font-light">Location : </span>
                      {location}
                    </div>
                  </div>
                  <p className="mb-8">{`${desc_1}, ${desc_2}, ${desc_3}`}</p>
                  <button
                    onClick={() => addCart(product, product.id)}
                    className="bg-[#99B080] py-3 px-8 font-semibold font-body"
                  >
                    Add To Cart
                  </button>
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

export default PageDetail;
