import React from 'react'
import { useState,useEffect } from 'react';
const Student_Data = () => {

    const [students, setStudents] = useState([]); // State to store student data

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:9999/student_details_crud/read_student/');
        const data = await response.json(); // Parse JSON response
        setStudents(data); // Store the fetched data in state
      };
  
      fetchData(); // Call the async function inside useEffect
    }, []);
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
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
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
    </div>
  )
}

export default Student_Data
