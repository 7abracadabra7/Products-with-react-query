import { useProduct } from "../services/mutations";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import styles from "./AddModal.module.css";
import { useContext } from "react";
import { ModalContext } from "../providers/ContextProvider";

const EditModal = () => {
  const { register, handleSubmit } = useForm();
  const { modalStates, toggleModal } = useContext(ModalContext);

  //====================== Mutate Product =============================

  const { mutate } = useProduct();

  const onSubmit = (product) => {
    console.log("product", product);
    toggleModal("editModal");
    mutate(product, {
      onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error),
    });
  };
  return (
    <div>
      <Modal
        isOpen={modalStates.editModal}
        onRequestClose={() => toggleModal("editModal")}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Edit Product"
      >
        <h2>  ویرایش اطلاعات </h2>
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
            ثبت اطلاعات جدید 
          </button>
          <button
            className={styles.cancelBtn}
            type="button"
            onClick={() => toggleModal("editModal")}
          >
            انصراف
          </button>
         
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
