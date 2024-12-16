// import React,{useState,useEffect} from 'react'
// import StaffModal from './StaffModal';
// const StaffData = () => {

//         const [staff, setStaff] = useState([]); // State to store student data
//         const [showModal, setShowModal]=useState(false);
//         useEffect(() => {
//           const fetchData = async () => {
//             const response = await fetch('http://localhost:9999/staff_details_crud/read_staff/');
//             const data = await response.json(); // Parse JSON response
//             setStaff(data); // Store the fetched data in state
//           };
      
//           fetchData(); // Call the async function inside useEffect
//         }, []);
        
//   return (
//     <div>
//       <div>
//       {/* <SearchBar/> */}
//       <table className="table table-striped table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Role</th>
//             <th>Subject</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {staff.length > 0 ? (
//             staff.map((staff) => (
//               <tr key={staff.id}>
//                 <td>{staff.staff_name}</td>
//                 <td>{staff.staff_email}</td>
//                 <td>{staff.staff_mobile}</td>
//                 <td>{staff.role_name}</td>
//                 <td>{staff.subject_name}</td>

//                 <td>
//                   <button className="btn btn-primary btn-sm me-2" onClick={()=>{setShowModal(true)}}>Edit</button>
//                   <button className="btn btn-danger btn-sm">Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" className="text-center">
//                 No staff found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {
//         showModal && <StaffModal
//         staff={staff}
//         setShowModal={setShowModal}
//         />
//       }
//     </div>
//     </div>
//   )
// }

// export default StaffData





import React, { useState, useEffect } from 'react';
import StaffModal from './StaffModal';

const StaffData = () => {
  const [staff, setStaff] = useState([]); // State to store staff data
  const [showModal, setShowModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null); // State to store the selected staff member

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9999/staff_details_crud/read_staff/');
      const data = await response.json(); // Parse JSON response
      setStaff(data); // Store the fetched data in state
    };

    fetchData(); // Call the async function inside useEffect
  }, []);

  const handleEditClick = (staff) => {
    setSelectedStaff(staff); // Set the selected staff member
    setShowModal(true); // Show the modal
  };

  return (
    <div>
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
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEditClick(staff)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No staff found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showModal && (
        <StaffModal
          staff={selectedStaff} // Pass the selected staff member
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default StaffData;
