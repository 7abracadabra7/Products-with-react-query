/* eslint-disable react/prop-types */

import styles from "./ProductsTable.module.css";

import editIcon from "../images/edit.png";
import deleteIcon from "../images/trash.png";

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
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}هزار تومان</td>
                <td>{product.id}</td>
                <td>
                  <img src={editIcon} alt="icon" />
                  <img src={deleteIcon} alt="icon" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
