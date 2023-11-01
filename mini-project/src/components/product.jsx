import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill, BsStarFill } from "react-icons/bs";
import Button from "./button";
import { CartContext } from "@/utils/context/cartContext";

const ProductShop = ({ product }) => {
  const { addCart } = useContext(CartContext);

  const { id, rating, name, roaster, price, image } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition rounded-2xl">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300 rounded-2xl"
              src={image}
              alt=""
            />
          </div>
          <div>
            <Button className="absolute top-6 -right-11 group-hover:right-5 text-black p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button onClick={() => addCart(product, id)}>
                <div className="flex justify-center items-center w-12 h-12 hover:bg-[#F9B572]">
                  <BsPlus className="text-3xl" />
                </div>
              </Button>
              <Link
                to={`/product/${id}`}
                className="w-12 h-12 bg- flex hover:bg-[#F9B572] justify-center items-center"
              >
                <BsEyeFill />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-white mb-1">{roaster}</div>
        <Link to={`/product/${id}`}>
          <h1 className="font-body font-semibold mb-1">{name}</h1>
        </Link>
        <div className="flex items-center gap-x-2 mb-1 font-normal">
          <BsStarFill color="gold" />
          {rating}/100
        </div>
        <div className="font-medium">Rp {price}</div>
      </div>
    </div>
  );
};

export default ProductShop;
