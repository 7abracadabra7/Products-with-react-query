/* eslint-disable react/prop-types */
// import { useDeleteProduct } from "../services/mutations";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/trash.png";
import { useContext } from "react";
import { ModalContext } from "../providers/ContextProvider";

function ProductCard({ product }) {
  const { toggleModal, setSelectedProduct } = useContext(ModalContext);

  const deleteHandler = (id, name, quantity, price) => {
    const addSelectedProduct = async () =>
      await setSelectedProduct({ id, name, quantity, price });

    console.log("Delete icon clicked");
    console.log("clicked on:", id);
    addSelectedProduct();
    toggleModal("deleteModal");
  };

  const editHandler = (id, name, quantity, price) => {
    const addSelectedProduct = async () =>
      await setSelectedProduct({ id, name, quantity, price });

    console.log("Edit icon clicked");
    console.log("clicked on:", id);
    addSelectedProduct();
    toggleModal("editModal");
  };

  return (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}هزار تومان</td>
      <td>{product.id}</td>
      <td>
        <img
          src={editIcon}
          alt="icon"
          onClick={() =>
            editHandler(
              product.id,
              product.name,
              product.quantity,
              product.price
            )
          }
        />
        <img
          src={deleteIcon}
          onClick={() =>
            deleteHandler(
              product.id,
              product.name,
              product.quantity,
              product.price
            )
          }
          alt="icon"
        />
      </td>
    </tr>
  );
}

export default ProductCard;
