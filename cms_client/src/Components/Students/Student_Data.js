import React from 'react'
import { useState,useEffect } from 'react';
const Student_Data = () => {

    

    const [students, setStudents] = useState([]); 
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:9999/student_details_crud/read_student/');
        const data = await response.json(); 
        setStudents(data); 
      };
  
      fetchData(); 
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
                  {/* <button className="btn btn-primary btn-sm me-2">Edit</button> */}
                  <div>
                      <button  className="btn btn-primary btn-sm me-2" onClick={() => setShowModal(true)}>Edit</button>
                      {showModal && (
                        <div className="bg-primary p-5">
                          {/* <h1>This is the modal</h1> */}
                          {/* <h1>{student.student_name}</h1> */} 
                          <form>
                              <div className='p-2'>
                                <input type="text" value={student.student_name}></input>
                              </div>
                              <div className='p-2'>
                                <input type="text" value={student.student_email}></input>
                              </div>
                              <div className='p-2'>
                                <input type="text" value={student.student_mobile}></input>
                              </div>
                              <div className='p-2'>
                                <input type="text" value={student.branch_name}></input>
                              </div>
                              <div className='p-2'>
                                <input type="text" value={student.standard_name}></input>
                              </div>
                              <div className='p-2'>
                                <input type="text" value={student.entrance_name}></input>
                              </div>
                              <div className='p-2'>
                                <input type="text" value={student.stream_name}></input>
                              </div>
                          </form>
                          <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                      )}
                    </div>
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



