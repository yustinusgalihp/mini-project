import React, { useEffect, useState } from "react";

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Cart from "@/components/cart";
import SideBar from "./sidebar/sideBar";
import Footer from "@/components/footer";
import PuffLoader from "react-spinners/PuffLoader";
import About from "@/components/about";
import { useTitle } from "@/utils/hook/hooks";

function LandingPage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useTitle("KAFEINCOMMERCE");

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
          <Header />
          <About />
          <Cart />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default LandingPage;
