import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "@/utils/context/cartContext";

function CartItem({ data }) {
  const { removeCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, name, price, image, amount } = data;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm font-body font-normal max-w-[240px] hover:underline"
            >
              {name}
            </Link>
            <div
              onClick={() => removeCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-black hover:text-red-600 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex flex-1 h-full justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2 ">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex flex-1 h-full justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              Rp {price}
            </div>
            <div className="flex-1 flex justify-end items-center font-body font-medium">{`Rp ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
