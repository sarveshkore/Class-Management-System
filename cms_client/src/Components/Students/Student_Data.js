import React, { useState, useEffect } from 'react';
import StudentModal from './StudentModal';

const Student_Data = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9999/student_details_crud/read_student/');
      const data = await response.json();
      setStudents(data);
    };

    fetchData();
  }, []);

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Branch</th>
            <th>Standard</th>
            <th>Entrance</th>
            <th>Stream</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.student_name}</td>
                <td>{student.student_email}</td>
                <td>{student.student_mobile}</td>
                <td>{student.branch_name}</td>
                <td>{student.standard_name}</td>
                <td>{student.entrance_name}</td>
                <td>{student.stream_name}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && 
           <StudentModal
          student={selectedStudent}
          setShowModal={setShowModal}
        />
      }
    </div>
  );
};

export default Student_Data;
