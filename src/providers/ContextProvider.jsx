/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalContext = createContext();
const ContextProvider = ({ children }) => {
  const [modalStates, setModalStates] = useState({
    addModal: false,
    editModal: false,
    deleteModal: false,
  });
  const toggleModal = (modal) => {
    setModalStates((prev) => ({ ...prev, [modal]: !prev[modal] }));
  };

  return (
    <ModalContext.Provider value={{ modalStates, setModalStates, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
