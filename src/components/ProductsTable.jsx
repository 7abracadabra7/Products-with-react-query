import styles from "./ProductsTable.module.css";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/trash.png";

const ProductsTable = ({ products }) => {
  return (
    <div className={styles.container}>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
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
