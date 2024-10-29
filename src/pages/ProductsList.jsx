import setting3 from "../images/setting-3.png";
import styles from "./ProductsList.module.css";
import ProductsTable from "../components/ProductsTable";
import { useState } from "react";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import { useContext } from "react";
import SearchBox from "../components/SearchBox";
import { useFetchProducts } from "../services/query";
import { ModalContext } from "../providers/ContextProvider";

const ProductsList = () => {
  //======================= Modal ========================
  const { toggleModal, modalStates } = useContext(ModalContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchItem, setSearchItem] = useState("");

  //======================= Fetching Data ===================

  const { data, isLoading, isError, isPending, error } = useFetchProducts(
    pageNumber,
    searchItem
  );

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>Something went wrong!</p>;
  console.log(data.data);

  //==========================================================
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <SearchBox setSearchItem={setSearchItem} searchItem={searchItem} />
        <div className={styles.productManagement}>
          <div className={styles.title}>
            <img src={setting3} alt="icon" />
            <h2>مدیریت کالا</h2>
          </div>
          <button
            onClick={() => toggleModal("addModal")}
            className={styles.addProductBtn}
          >
            افزودن محصول
          </button>
        </div>
        {modalStates.addModal && <AddModal />}
        {modalStates.editModal && <EditModal />}
        {modalStates.deleteModal && <DeleteModal />}

        <ProductsTable
          data={data.data}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
      <button
        className={pageNumber == 1 ? styles.disableBtn : styles.button}
        onClick={() => setPageNumber((page) => page - 1)}
      >
        قبل
      </button>
      <span>{pageNumber}</span>
      <button
        className={
          pageNumber == data.totalPages ? styles.disableBtn : styles.button
        }
        onClick={() => setPageNumber((page) => page + 1)}
      >
        بعد
      </button>
    </div>
  );
};

export default ProductsList;
