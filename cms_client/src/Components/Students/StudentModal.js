import React, { useState, useEffect } from 'react';

const StudentModal = ({ setShowModal }) => {
  // console.log(student)

  // const [branches, setBranches] = useState([]);
  // const [standards, setStandards] = useState([]);
  // const [entrances, setEntrances] = useState([]);
  // const [streams, setStreams] = useState([]);

  // const [updatedStudent, setUpdatedStudent] = useState({
  //   student_name: student.student_name,
  //   student_email: student.student_email,
  //   student_mobile: student.student_mobile,
  //   branch_name: student.branch_name,
  //   standard_name: student.standard_name,
  //   entrance_name: student.entrance_name,
  //   stream_name: student.stream_name,
  // });
  const [student,setStudent]=useState('');

  // console.log(updatedStudent)

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const branchResponse = await fetch('http://localhost:9999/branch_crud/read_branch/');
        const branchData = await branchResponse.json();
        // setBranches(branchData);

        const standardResponse = await fetch('http://localhost:9999/standard_crud/read_standard/');
        const standardData = await standardResponse.json();
        // setStandards(standardData);

        const entranceResponse = await fetch('http://localhost:9999/entrance_crud/read_entrance/');
        const entranceData = await entranceResponse.json();
        // setEntrances(entranceData);

        const streamResponse = await fetch('http://localhost:9999/stream_crud/read_stream/');
        const streamData = await streamResponse.json();
        // setStreams(streamData);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchDropdownData();
  }, []);

  const handleChange = (e) => {
    setStudent(e.value);

  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // setUpdatedStudent({ ...updatedStudent, [name]: value });
  // };
let data = [];
  const handleSaveChanges = async (student_id) => {
    try {
      const response = await fetch('http://localhost:9999/student_details_crud/read_single_student/:id');
      data = await response.json();
      console.log('data : ', data[0].student_name);
      setStudent()
      // if (response.ok) {
        //   alert('Student details updated successfully!');
        //   setShowModal(false);
        // } else {
          //   alert('Failed to update student details.');
          // }
        } catch (error) {
          console.error('Error updating student details:', error);
          alert('An error occurred while updating student details.');
        }
  };

  

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
      {/* {{data}} */}
      <h3>Edit Student Details</h3>
      <form>
        <div className="p-2">
          <label>Name:</label>
          <input
            type="text"
            name="student_name"
            // value={data[0].student_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* <div className="p-2">
          <label>Email:</label>
          <input
            type="email"
            name="student_email"
            // value={data[0].student_email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="p-2">
          <label>Mobile:</label>
          <input
            type="text"
            name="student_mobile"
            // value={data[0].student_mobile}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Branch Dropdown */}
        {/* <div className="p-2">
          <label>Branch:</label>
          <select
            name="branch_name"
            // value={data[0].branch_name}
            onChange={handleChange}
            className="form-control"
          > */}
            {/* <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.branch}>
                {branch.branch}
              </option>
            ))} */}
          {/* </select>
        </div> */}

        {/* Standard Dropdown */}
        {/* <div className="p-2">
          <label>Standard:</label>
          <select
            name="standard_name"
            // value={data[0].standard_name}
            onChange={handleChange}
            className="form-control"
          > */}
            {/* <option value="">Select Standard</option>
            {standards.map((standard) => (
              <option key={standard.id} value={standard.std}>
                {standard.std}
              </option>
            ))} */}
          {/* </select>
        </div> */}

        {/* Entrance Dropdown */}
        {/* <div className="p-2">
          <label>Entrance:</label>
          <select
            name="entrance_name"
            // value={data[0].entrance_name}

            onChange={handleChange}
            className="form-control"
          > */}
            {/* <option value="">Select Entrance</option>
            {entrances.map((entrance) => (
              <option key={entrance.id} value={entrance.entrance}>
                {entrance.entrance}
              </option>
            ))} */}
          {/* </select>
        </div> */}

        {/* Stream Dropdown */}
        {/* <div className="p-2">
          <label>Stream:</label>
          <select
            name="stream_name"
            // value={data[0].stream_name}
            onChange={handleChange}
            className="form-control"
          > */}
            {/* <option value="">Select Stream</option>
            {streams.map((stream) => (
              <option key={stream.id} value={stream.stream}>
                {stream.stream}
              </option>
            ))} */}
          {/* </select>
        </div>  */}

        <button type="button" className="btn btn-success mt-3 me-3" onClick={handleSaveChanges()}>
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
