import React, { useState } from "react";

// this is Modal component
const Modal = ({ handleModal, children }) => {
  return (
    <div className="portal-modal">
      {children}
      <hr />
      <button onClick={() => handleModal(false)}>Close</button>
    </div>
  );
};

const Page = () => {
  const [isOpen, setOpen] = useState(false);

  const handleModal = (modalState) => {
    setOpen(modalState);
  };

  return (
    <div className="portal-page-component">
      {/* In the App.css we have added style for this "div" as
        .portal-page-component {  
          position: relative;
          max-width: 400px;
        }
        And the Modal is a child of above "div" & due to above style,
        the Modal also has the above style applied & it messes up the UI
      */}

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
