import React, { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "@/components/cartItem";
import { SideBarContext } from "@/utils/context/sideBar";
import { CartContext } from "@/utils/context/cartContext";
import Swal from "sweetalert2";
import Button from "@/components/button";

function SideBar() {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Want to order this Beans Coffee?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Success!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Failed!", "", "error");
      }
    });
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-[#99B080] h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b-2">
        <div className="uppercase text-sm font-body font-semibold">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((data) => {
          return <CartItem key={data.id} data={data} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-body font-semibold">
            <span>Total : </span>Rp {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 hover:bg-[#F9B572] text-black w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="flex justify-between">
          <input className="border-2 rounded-md w-2/3 p-1" type="text" />
          <Button
            className="bg-[#F9B572] px-2 justify-end items-center font-semibold"
            type="submit"
          >
            Reedem Voucher
          </Button>
        </div>
        <Button
          onClick={handleSubmit}
          className="bg-[#F9B572] flex p-2 justify-center items-center w-full font-semibold"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
