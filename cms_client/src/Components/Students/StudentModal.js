
import React from 'react';

const StudentModal = ({ student, setShowModal }) => {
  if (!student) return null; // Prevent rendering if no student data is passed

  return (
    <div className=" student_modal bg-primary p-5 position-fixed top-50 start-50 translate-middle" 
    style={{
        width: '60%',
        height: 'auto',
        maxHeight: '80%',
        overflowY: 'auto',
        padding: '20px',
        borderRadius: '8px',
      }}>
      <h3>Edit Student Details</h3>
      <form>
        <div className="p-2">
          <label>Name:</label>
          <input type="text" defaultValue={student.student_name} className="form-control" />
        </div>
        <div className="p-2">
          <label>Email:</label>
          <input type="email" defaultValue={student.student_email} className="form-control" />
        </div>
        <div className="p-2">
          <label>Mobile:</label>
          <input type="text" defaultValue={student.student_mobile} className="form-control" />
        </div>
        <div className="p-2">
          <label>Branch:</label>
          <input type="text" defaultValue={student.branch_name} className="form-control" />
        </div>
        <div className="p-2">
          <label>Standard:</label>
          <input type="text" defaultValue={student.standard_name} className="form-control" />
        </div>
        <div className="p-2">
          <label>Entrance:</label>
          <input type="text" defaultValue={student.entrance_name} className="form-control" />
        </div>
        <div className="p-2">
          <label>Stream:</label>
          <input type="text" defaultValue={student.stream_name} className="form-control" />
        </div>
        <button type="button" className="btn btn-success mt-3 me-3" onClick={() => alert("Update logic here")}>
          Save Changes
        </button>
        <button type="button" className="btn btn-danger mt-3" onClick={() => setShowModal(false)}>
          Close
        </button>
      </form>
    </div>
  );
};

export default StudentModal;
