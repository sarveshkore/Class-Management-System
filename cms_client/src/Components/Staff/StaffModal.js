// import React from 'react'

// const StaffModal = ({setShowModal,staff}) => {
//   return (
//     // <div>
//     //   <h1>This is modal for staff</h1>
//     // </div>
//     <div
//       className="student_modal bg-primary p-5 position-fixed top-50 start-50 translate-middle"
//       style={{
//         width: '60%',
//         height: 'auto',
//         maxHeight: '80%',
//         overflowY: 'auto',
//         padding: '20px',
//         borderRadius: '8px',
//       }}
//     >
//       <h3>Edit Staff Details</h3>
//       <form>

//         <div className='p-2'>
//           <lable>Name</lable>
//           <input type="text" value={staff.staff_name}></input>
//         </div>

//         <div className='p-2'>
//           <lable>E-mail</lable>
//           <input type="text"></input>
//         </div>

//         <div className='p-2'>
//           <lable>Mobile</lable>
//           <input type="text"></input>
//         </div>

//         <div className='p-2'>
//           <lable>Subject</lable>
//           <input type="text"></input>
//         </div>

//       </form>

//       <button type="button" className="btn btn-success mt-3 "  onClick={() => setShowModal(false)}>
//           Update
//         </button>

//       <button type="button" className="btn btn-danger mt-3" onClick={() => setShowModal(false)}>
//           Close
//         </button>
//     </div>
//   )
// }

// export default StaffModal






import React, { useEffect, useState } from 'react';

const StaffModal = ({ setShowModal, staff }) => {
  const [staffData, setStaffData] = useState({
    name: staff.staff_name || '',
    email: staff.staff_email || '',
    mobile: staff.staff_mobile || '',
    subject: staff.subject_name || '',
  });
  const [subject,setSubject]=useState([]);

  useEffect(()=>{
    const fetchDropdownData = async()=>{
      const subjectResponse=await fetch('http://localhost:9999/subject_crud/read_subject/');
      const subjectData = await subjectResponse.json();
      setSubject(subjectData);
    }
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStaffData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // console.log('Updated Staff Data:', staffData);
    // TODO: Make an API call to update the staff data
    setShowModal(false);
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
      <h3>Edit Staff Details</h3>
      <form>
        <div className="p-2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={staffData.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="p-2">
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            value={staffData.email}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="p-2">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={staffData.mobile}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        {/* <div className="p-2">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={staffData.subject}
            onChange={handleInputChange}
            className="form-control"
          />
        </div> */}
        <div className="p-2">
          <label>Subject:</label>
          <select
            name="stream_name"
            value={subject.subject}
            // onChange={handleChange}
            className="form-control"          >
            <option value="">Select Subject</option>
            {subject.map((subject) => (
              <option key={subject.id} value={subject.subject}>
                {subject.subject}
              </option>
            ))}
          </select>
        </div>
      </form>
      <button type="button" className="btn btn-success mt-3" onClick={handleUpdate}>
        Update
      </button>
      <button type="button" className="btn btn-danger mt-3" onClick={() => setShowModal(false)}>
        Close
      </button>
    </div>
  );
};

export default StaffModal;
