/* eslint-disable react/prop-types */

import styles from "./ProductsTable.module.css";
import ProductCard from "./Product";

const ProductsTable = ({ data, isError, isLoading }) => {
  if (isLoading) {
    <h1>isLoadingg....</h1>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  console.log("table", data);
  return (
    <div className={styles.container}>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
