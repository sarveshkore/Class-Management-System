import React, { useState, useEffect } from 'react';

const Student = () => {
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
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student List</h1>      
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
  );
};

export default Student;





// import React, { useState, useEffect } from 'react';

// const Student = () => {
//   const [students, setStudents] = useState([]); // State to store student data
//   const [page, setPage] = useState(1); // Current page number
//   const [hasMore, setHasMore] = useState(true); // To disable "Next" button if no more data
//   const [error, setError] = useState(null); // To store any errors

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:9999/student_details_crud/read_student/?page=${page}`);
//         const data = await response.json();
//         setStudents(data.data); // Set the fetched student data
//         setHasMore(data.data.length > 0); // Check if more data exists
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, [page]); // Fetch data whenever the page changes

//   // Function to handle "Next" button click
//   const handleNext = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   // Function to handle "Previous" button click
//   const handlePrevious = () => {
//     setPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure the page doesn't go below 1
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">Student List</h1>

//       {error && <div className="alert alert-danger">Error: {error}</div>}

//       <table className="table table-striped table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Branch</th>
//             <th>Standard</th>
//             <th>Entrance</th>
//             <th>Stream</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.length > 0 ? (
//             students.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.student_name}</td>
//                 <td>{student.student_email}</td>
//                 <td>{student.student_mobile}</td>
//                 <td>{student.branch_name}</td>
//                 <td>{student.standard_name}</td>
//                 <td>{student.entrance_name}</td>
//                 <td>{student.stream_name}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center">
//                 No students found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <div className="d-flex justify-content-between">
//         <button 
//           className="btn btn-primary" 
//           onClick={handlePrevious} 
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <button 
//           className="btn btn-primary" 
//           onClick={handleNext} 
//           disabled={!hasMore}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Student;





// import React, { useState, useEffect } from 'react';

// const Student = () => {
//   const [students, setStudents] = useState([]); // State to store student data
//   const [page, setPage] = useState(1); // Current page number
//   const [hasMore, setHasMore] = useState(true); // To disable "Next" button if no more data
//   const [search, setSearch] = useState(''); // Search term
//   const [error, setError] = useState(null); // To store any errors

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:9999/student_details_crud/read_student/?page=${page}&search=${search}`
//       );
//       const data = await response.json();
//       setStudents(data); // Set the fetched student data
//       setHasMore(data.length > 0); // Check if more data exists
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [page, search]); // Fetch data whenever the page or search changes

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value); // Update the search term
//     setPage(1); // Reset to the first page when the search term changes
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">Student List</h1>

//       {error && <div className="alert alert-danger">Error: {error}</div>}

//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by name, email, or mobile"
//           value={search}
//           onChange={handleSearchChange}
//         />
//       </div>

//       <table className="table table-striped table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Branch</th>
//             <th>Standard</th>
//             <th>Entrance</th>
//             <th>Stream</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.length > 0 ? (
//             students.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.student_name}</td>
//                 <td>{student.student_email}</td>
//                 <td>{student.student_mobile}</td>
//                 <td>{student.branch_name}</td>
//                 <td>{student.standard_name}</td>
//                 <td>{student.entrance_name}</td>
//                 <td>{student.stream_name}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center">
//                 No students found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <div className="d-flex justify-content-between">
//         <button 
//           className="btn btn-primary" 
//           onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))} 
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <button 
//           className="btn btn-primary" 
//           onClick={() => setPage((prevPage) => prevPage + 1)} 
//           disabled={!hasMore}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Student;
