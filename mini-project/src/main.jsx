import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router";
import "./style/index.css";

import ProductProvider from "./utils/context/productContext";
import SideBarProvider from "./utils/context/sideBar";
import CartProvider from "./utils/context/cartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
);
