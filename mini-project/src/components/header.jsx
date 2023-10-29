import React from "react";
import main from "@/assets/banner.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex">
        <div className="grid grid-cols-2">
          <div className="my-auto ml-44">
            <h1 className="font-body font-bold my-5 text-7xl md:text-6xl">
              Welcome to
              <span className="text-amber-900"> KafeinComerce.</span>
            </h1>
            <p className="font-normal text-gray-700">
              Kami sebagai platform terpercaya untuk jual beli biji kopi terbaik
              secara online. Temukan beragam jenis biji kopi dari seluruh
              penjuru dunia. Nikmati kualitas premium dan cita rasa yang luar
              biasa.
            </p>
            <div className="mt-4">
              <button className="bg-[#99B080] text-black hover:bg-[#FAF8ED] hover:text-black text-lg font-body py-2 px-4 rounded">
                <a href="/">Get Started</a>
              </button>
            </div>
          </div>
          <div>
            <img className="w-1/2 float-right" src={main} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
