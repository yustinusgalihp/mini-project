import { createContext, useState, useEffect } from "react";
import { axiosConfig } from "../api/axiosConfig";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosConfig.get('/product');
        setProducts(response.data);
      } catch (error) {
        console.error("Gagal mengambil data produk:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;