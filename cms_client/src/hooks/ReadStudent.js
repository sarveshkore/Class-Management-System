import { useEffect,useState } from "react";
export const ReadStudent=()=>{
    const [students, setStudents] = useState([]);

     useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:9999/student_details_crud/read_student/');
          const data = await response.json();
          setStudents(data);
          console.log(data)
        };
    
        fetchData();
      }, []);
      const studentObj={
        students:students,
      }

      return studentObj;
}