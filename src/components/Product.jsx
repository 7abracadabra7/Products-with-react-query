/* eslint-disable react/prop-types */
import editIcon from "../images/edit.png";
import deleteIcon from "../images/trash.png";
import { useContext } from "react";
import { ModalContext } from "../providers/ContextProvider";
import styles from "./Product.module.css";

function ProductCard({ product: { id, name, quantity, price } }) {
  const { toggleModal, setSelectedProduct } = useContext(ModalContext);

  const deleteHandler = (id, name, quantity, price) => {
    const addSelectedProduct = async () =>
      await setSelectedProduct({ id, name, quantity, price });
    addSelectedProduct();
    toggleModal("deleteModal");
  };

  const editHandler = (id, name, quantity, price) => {
    const addSelectedProduct = async () =>
      await setSelectedProduct({ id, name, quantity, price });
    addSelectedProduct();
    toggleModal("editModal");
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price} هزار تومان</td>
      <td>{id}</td>
      <td>
        <img
          src={editIcon}
          alt="icon"
          className={styles.editBtn}
          onClick={() => editHandler(id, name, quantity, price)}
        />
        <img
          src={deleteIcon}
          onClick={() => deleteHandler(id, name, quantity, price)}
          className={styles.deleteBtn}
          alt="icon"
        />
      </td>
    </tr>
  );
}

export default ProductCard;
