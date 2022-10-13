import React, { useState } from "react";
import ReactDOM from "react-dom";

// this is Modal component which uses Portals to show the Modal
const Modal = ({ closeModalHandle, children }) => {
  return ReactDOM.createPortal(
    <div className="portal-modal">
      {children}
      <hr />
      <button onClick={closeModalHandle}>Close</button>
    </div>,
    document.getElementById("portal-root")
  );
};

const Page = () => {
  const [isOpen, setOpen] = useState(false);

  const showModalHandle = () => {
    setOpen(true);
  };

  const closeModalHandle = () => {
    setOpen(false);
  };

  return (
    <div className="portal-page-component">
      <p>This is the Page Component</p>
      <hr />
      <button onClick={showModalHandle}>Show Modal</button>
      {isOpen && (
        <Modal closeModalHandle={closeModalHandle}>
          <p>This is the Modal</p>
        </Modal>
      )}
    </div>
  );
};

export default Page;
