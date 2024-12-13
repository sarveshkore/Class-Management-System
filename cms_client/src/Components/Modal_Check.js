import React, { useState } from 'react';

const Modal_Check = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <div className="bg-primary p-5">
          <h1>This is the modal</h1>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Modal_Check;
