import styles from "./ProductsList.module.css";
import setting3 from "../images/setting-3.png";
import { api } from "../services/config";
import { useEffect, useState } from "react";
import ProductsTable from "../components/ProductsTable";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const addProductHandler = () => {
    
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  console.log("ps", products);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="جستجوی کالا" />
        </div>
        <div style={{ display: "flex" }} className={styles.productManagement}>
          <div style={{ display: "flex" }}>
            <img src={setting3} alt="icon" />
            <h2>مدیریت کالا</h2>
          </div>
          <button onClick={addProductHandler} className={styles.addProduct}>افزودن محصول</button>
        </div>
        <ProductsTable products={products} />
      </div>
    </div>
  );
};

export default ProductsList;
