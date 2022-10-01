import React, { useState } from "react";

// this is Modal component
const Modal = ({ closeModalHandle, children }) => {
  return (
    <div className="portal_modal">
      {children}
      <hr />
      <button onClick={closeModalHandle}>Close</button>
    </div>
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
    <div className="portal_page_component">
      {/* In the App.css we have added style for this "div" as
        .portal_page_component {  
          position: relative;
          max-width: 400px;
        }
        And the Modal is a child of above "div" & due to above style,
        the Modal also has the above stlye applied & it messes up the UI
      */}

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
