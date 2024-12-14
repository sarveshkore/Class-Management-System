import React from 'react';
import Student from '../Students/Student';
import Navbar from '../Navbar';
import Staff from '../Staff/Staff'

const Body = () => {
  return (
    <div className="d-flex">
      <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <Navbar />
      </div>

      <div className="flex-grow-1 p-4">
        <Student />
        <Staff/>
      </div>
    </div>
  );
};

export default Body;
