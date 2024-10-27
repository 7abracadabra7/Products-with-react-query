/* eslint-disable react/prop-types */
import { useProduct } from "../services/mutations";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import styles from "./AddModal.module.css";

const AddModal = ({ modalIsOpen, closeModal, setModalIsOpen, refetch }) => {
  const { register, handleSubmit } = useForm();

  //====================== Mutate Product =============================

  const { mutate } = useProduct();

  const onSubmit = (product) => {
    console.log("product", product);
    setModalIsOpen(false);
    mutate(product, {
      onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error),
    });
    refetch();
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Create New Product"
      >
        <h2>ایجاد محصول جدید</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <h1>محصول جدید</h1>
          </div>
          <div>
            <label>نام کالا</label>
            <input {...register("name")} type="text" placeholder="نام کالا" />
            <label>تعداد موجودی </label>

            <input
              {...register("quantity")}
              type="number"
              placeholder="تعداد"
            />
            <label> قیمت</label>

            <input {...register("price")} type="number" placeholder="قیمت" />
          </div>
          <button type="button" onClick={closeModal}>
            انصراف
          </button>
          <button type="submit">ایجاد</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddModal;
