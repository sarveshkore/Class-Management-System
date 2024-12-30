import React, { useState, useEffect } from 'react';
import StudentModal from './StudentModal';
import { ReadStudent } from '../../hooks/ReadStudent';
// import axios from 'axios';

const Student_Data = () => {
  const [students, setStudents] = useState([]);
  const[count,setCount]=useState(1)
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState();
  // const studentObj=ReadStudent();
  // console.log(studentObj)
  useEffect(() => {
    // setStudents(studentObj.students)
    // console.log(cout)
    const fetchData = async () => {
      const response = await fetch('http://localhost:9999/student_details_crud/read_student/');
      const data = await response.json();
      setStudents(data);
      console.log(data)
    };

    fetchData();
  }, [count]);

  const handleEdit = async (student) => {
    const response = await fetch(`http://localhost:9999/student_details_crud/read_single_student/${student}`);
    const data = await response.json();
    console.log("data test new",data)
    setSelectedStudent(data[0]);
    // eslint-disable-next-line array-callback-return
    // data.map( (dataSingle) => {
    //   setSelectedStudent(dataSingle);

    // })
    setShowModal(true);
  };

  const deleteStudent = async(id)=>{
    console.log(id)
    const res=await fetch(`http://localhost:9999/student_details_crud/delete_student/${id}`,{
      method:'DELETE'
    });
    const data=await res.json();
    console.log(data)
    setCount(()=>{
      return count+1
    })
  }
  
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
            students.map((student) => {
              console.log(student)
              const{id,student_name,student_email,student_mobile,branch_name,standard_name,entrance_name,stream_name}=student
              console.log(id)
              return (
              <tr key={id}>
                <td>{student_name}</td>
                <td>{student_email}</td>
                <td>{student_mobile}</td>
                <td>{branch_name}</td>
                <td>{standard_name}</td>
                <td>{entrance_name}</td>
                <td>{stream_name}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(id)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm"
                    onClick={()=>{
                        deleteStudent(id);
                    }}
                  >Delete</button>
                </td>
              </tr>
            )})
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
