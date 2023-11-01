import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import img from "../assets/logo.png";
import { SideBarContext } from "@/utils/context/sideBar";
import { CartContext } from "@/utils/context/cartContext";
import { Link } from "react-router-dom";
import { axiosConfig } from "@/utils/api/axiosConfig";
import { ProductContext } from "@/utils/context/productContext";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);
  const [nameList, setNameList] = useState([]);
  const [search, setSearch] = useState("");
  const { products } = useContext(ProductContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  useEffect(() => {
    axiosConfig.get("/product").then((response) => {
      setNameList(response.data);
    });
  }, []);

  return (
    <div
      className={`${
        isActive ? "bg-[#FAF8ED] shadow-md" : "bg-[#99B080]"
      } fixed w-full z-10 transition-all`}
    >
      <div className="flex p-4 justify-between font-body font-semibold text-lg container">
        <Link to={"/"}>
          <div className="flex items-center space-x-3">
            <img src={img} className="w-10" alt="" />
            <a href="#" className="text-black text-xl">
              KafeinCommerce
            </a>
          </div>
        </Link>
        <div className="relative">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch
            className="absolute top-1.5 mt-3 ml-56  text-gray-400"
            size={20}
          />
          {search && (
            <div className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-36 overflow-y-auto">
              {nameList
                .filter((data) => {
                  if (search === "") {
                    return data;
                  } else if (
                    data.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .map((data) => {
                  return (
                    <Link to={`/product/${data.id}`} key={data.id}>
                      <div className="hover:bg-slate-300">{data.name}</div>
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
        <div>
          <ul className="flex space-x-6">
            <li className="hover:bg-[#B2533E] p-2 rounded">
              <a href="/" className="text-black hover:text-white">
                Home
              </a>
            </li>
            <li className="hover:bg-[#B2533E] p-2 rounded">
              <a href="/openai" className="text-black hover:text-white">
                Service
              </a>
            </li>
            <li className="hover:bg-[#B2533E] p-2 rounded">
              <a
                href="/product"
                className="text-black hover:text-white transition-all"
              >
                Product
              </a>
            </li>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="icon_wrapper relative cursor-pointer"
            >
              <AiOutlineShoppingCart />
              <div className="w-4 h-4 text-center absolute -mt-10 ml-7 rounded-full text-xs bg-red-600 text-white">
                {itemAmount}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
