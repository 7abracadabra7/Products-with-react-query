import { useEditProduct } from "../services/mutations";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import styles from "./AddModal.module.css";
import { useContext, useEffect } from "react";
import { ModalContext } from "../providers/ContextProvider";

const EditModal = () => {
  const { register, handleSubmit, reset } = useForm();
  const { modalStates, toggleModal, selectedProduct } =
    useContext(ModalContext);

  //====================== Mutate Product =============================

  const { mutate } = useEditProduct();

  const onSubmit = (product) => {
    const id = selectedProduct.id;
    const data = { id: id, ...product };
    console.log("editedData:", data);
    mutate(data, {
      onSuccess: (data) => console.log("new data", data),
      onError: (error) => console.log(error),
    });
    toggleModal("editModal");
  };

  useEffect(() => {
    if (modalStates.editModal) {
      reset({
        name: selectedProduct.name,
        quantity: selectedProduct.quantity,
        price: selectedProduct.price,
      });
    }
  }, [modalStates.editModal, reset]);

  return (
    <div>
      <Modal
        isOpen={modalStates.editModal}
        onRequestClose={() => toggleModal("editModal")}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Edit Product"
      >
        <h2> ویرایش اطلاعات </h2>
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
