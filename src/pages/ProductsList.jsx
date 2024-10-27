import setting3 from "../images/setting-3.png";
import styles from "./ProductsList.module.css";
import ProductsTable from "../components/ProductsTable";
import { useState } from "react";
import AddModal from "../components/AddModal";
import SearchBox from "../components/SearchBox";
import { useFetchProducts } from "../services/query";

const ProductsList = () => {

  //======================= Modal ========================
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const { data, isLoading, isError, refetch ,isPending,error} = useFetchProducts();
  if (isPending) return <p>Loading...</p>;

  if (error) return <p>Something went wrong!</p>;
  console.log(data)
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <SearchBox />
        <div className={styles.productManagement}>
          <div className={styles.title}>
            <img src={setting3} alt="icon" />
            <h2>مدیریت کالا</h2>
          </div>
          <button onClick={openModal} className={styles.addProductBtn}>
            افزودن محصول
          </button>
        </div>
        <AddModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          closeModal={closeModal}
          refetch={refetch}
        />

        <ProductsTable data={data} isLoading={isLoading} isError={isError} />
      </div>
      {/* <button onClick={setPage((page) => page + 1)}>+</button> */}
    </div>
  );
};

export default ProductsList;
