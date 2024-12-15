
// import React from 'react';

// const StudentModal = ({ student, setShowModal }) => {
//   if (!student) return null; // Prevent rendering if no student data is passed

//   return (
//     <div className=" student_modal bg-primary p-5 position-fixed top-50 start-50 translate-middle" 
//     style={{
//         width: '60%',
//         height: 'auto',
//         maxHeight: '80%',
//         overflowY: 'auto',
//         padding: '20px',
//         borderRadius: '8px',
//       }}>
//       <h3>Edit Student Details</h3>
//       <form>
//         <div className="p-2">
//           <label>Name:</label>
//           <input type="text" defaultValue={student.student_name} className="form-control" />
//         </div>
//         <div className="p-2">
//           <label>Email:</label>
//           <input type="email" defaultValue={student.student_email} className="form-control" />
//         </div>
//         <div className="p-2">
//           <label>Mobile:</label>
//           <input type="text" defaultValue={student.student_mobile} className="form-control" />
//         </div>
//         <div className="p-2">
//           <label>Branch:</label>
//           <input type="text" defaultValue={student.branch_name} className="form-control" />
//         </div>
//         <div className="p-2">
//           <label>Standard:</label>
//           <input type="text" defaultValue={student.standard_name} className="form-control" />
//         </div>
//         <div className="p-2">
//           <label>Entrance:</label>
//           <input type="text" defaultValue={student.entrance_name} className="form-control" />
//         </div>
//         <div className="p-2">
//           <label>Stream:</label>
//           <input type="text" defaultValue={student.stream_name} className="form-control" />
//         </div>
//         <button type="button" className="btn btn-success mt-3 me-3" onClick={() => alert("Update logic here")}>
//           Save Changes
//         </button>
//         <button type="button" className="btn btn-danger mt-3" onClick={() => setShowModal(false)}>
//           Close
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StudentModal;


import React, { useState, useEffect } from 'react';

const StudentModal = ({ student, setShowModal }) => {
  const [branches, setBranches] = useState([]);
  const [standards, setStandards] = useState([]);
  const [entrances, setEntrances] = useState([]);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const studentModalData = async () => {
      try {
        const branchResponse = await fetch('http://localhost:9999/branch_crud/read_branch/');
        const branchData = await branchResponse.json();
        setBranches(branchData);

        const standardResponse = await fetch('http://localhost:9999/standard_crud/read_standard/');
        const standardData = await standardResponse.json();
        setStandards(standardData);

        const entranceResponse = await fetch('http://localhost:9999/entrance_crud/read_entrance/');
        const entranceData = await entranceResponse.json();
        setEntrances(entranceData);

        const streamResponse = await fetch('http://localhost:9999/stream_crud/read_stream/');
        const streamData = await streamResponse.json();
        setStreams(streamData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    studentModalData();
  }, []);

  return (
    <div
      className="student_modal bg-primary p-5 position-fixed top-50 start-50 translate-middle"
      style={{
        width: '60%',
        height: 'auto',
        maxHeight: '80%',
        overflowY: 'auto',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
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

        {/* Branch Dropdown */}
        <div className="p-2">
          <label>Branch:</label>
          <select
            defaultValue={student.branch_name} // Display the original branch
            className="form-control"
          >
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.branch}>
                {branch.branch}
              </option>
            ))}
          </select>
        </div>

        {/* Standard Dropdown */}
        <div className="p-2">
          <label>Standard:</label>
          <select
            defaultValue={student.standard_name} // Display the original standard
            className="form-control"
          >
            <option value="">Select Standard</option>
            {standards.map((standard) => (
              <option key={standard.id} value={standard.std}>
                {standard.std}
              </option>
            ))}
          </select>
        </div>

        {/* Entrance Dropdown */}
        <div className="p-2">
          <label>Entrance:</label>
          <select
            defaultValue={student.entrance_name} // Display the original entrance
            className="form-control"
          >
            <option value="">Select Entrance</option>
            {entrances.map((entrance) => (
              <option key={entrance.id} value={entrance.entrance}>
                {entrance.entrance}
              </option>
            ))}
          </select>
        </div>

        {/* Stream Dropdown */}
        <div className="p-2">
          <label>Stream:</label>
          <select
            defaultValue={student.stream_name} // Display the original stream
            className="form-control"
          >
            <option value="">Select Stream</option>
            {streams.map((stream) => (
              <option key={stream.id} value={stream.stream}>
                {stream.stream}
              </option>
            ))}
          </select>
        </div>

        <button type="button" className="btn btn-success mt-3 me-3" onClick={() => alert('Update logic here')}>
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
