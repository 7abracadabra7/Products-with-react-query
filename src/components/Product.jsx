/* eslint-disable react/prop-types */
import { useDeleteProduct } from "../services/mutations";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/trash.png";

function ProductCard({ product }) {
  const { mutate } = useDeleteProduct();

  const deleteHandler = (id) => {
    const data = {
      ids: [id],
    };

    console.log(data);

    mutate(
      { data },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}هزار تومان</td>
      <td>{product.id}</td>
      <td>
        <img src={editIcon} alt="icon" />
        <img
          src={deleteIcon}
          onClick={() => deleteHandler(product?.id)}
          alt="icon"
        />
      </td>
    </tr>
  );
}

export default ProductCard;
