/* eslint-disable react/prop-types */
import { useProduct } from "../services/mutations";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import styles from "./AddModal.module.css";
import { useContext } from "react";
import { ModalContext } from "../providers/ContextProvider";

const AddModal = () => {
  const { register, handleSubmit } = useForm();
  const { modalStates, toggleModal } = useContext(ModalContext);

  //====================== Mutate Product =============================

  const { mutate } = useProduct();

  const onSubmit = (product) => {
    console.log("product", product);
    toggleModal("addModal");
    mutate(product, {
      onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error),
    });
  };
  return (
    <div>
      <Modal
        isOpen={modalStates.addModal}
        onRequestClose={() => toggleModal("addModal")}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Create New Product"
      >
        <h2>ایجاد محصول جدید</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          <button className={styles.submitBtn} type="submit">
            ایجاد
          </button>
          <button
            className={styles.cancelBtn}
            type="button"
            onClick={() => toggleModal("addModal")}
          >
            انصراف
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddModal;
