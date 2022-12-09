import React, { useState } from "react";
import ReactDOM from "react-dom";

// this is Modal component which uses Portals to show the Modal
const Modal = ({ handleModal, children }) => {
  return ReactDOM.createPortal(
    <div className="portal-modal">
      {children}
      <hr />
      <button onClick={() => handleModal(false)}>Close</button>
    </div>,
    document.getElementById("portal-root")
  );
};

const Page = () => {
  const [isOpen, setOpen] = useState(false);

  const handleModal = (modalState) => {
    setOpen(modalState);
  };

  return (
    <div>
      <p>This is the Page Component</p>
      <hr />
      <button onClick={() => handleModal(true)}>Show Modal</button>
      {isOpen && (
        <Modal handleModal={handleModal}>
          <p>This is the Modal</p>
        </Modal>
      )}
    </div>
  );
};

export default Page;
