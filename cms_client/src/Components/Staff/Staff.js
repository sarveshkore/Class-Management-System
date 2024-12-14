import React from 'react'
import { useState,useEffect } from 'react';
import SearchBar from '../SearchBar'
const Student_Data = () => {

    const [staff, setStaff] = useState([]); // State to store student data

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:9999/staff_details_crud/read_staff/');
        const data = await response.json(); // Parse JSON response
        setStaff(data); // Store the fetched data in state
      };
  
      fetchData(); // Call the async function inside useEffect
    }, []);
  return (
    
    <div>
      {/* <SearchBar/> */}
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Role</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {staff.length > 0 ? (
            staff.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.staff_name}</td>
                <td>{staff.staff_email}</td>
                <td>{staff.staff_mobile}</td>
                <td>{staff.role_name}</td>
                <td>{staff.subject_name}</td>

                <td>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No staff found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Student_Data
