// import SearchBar from '../SearchBar';
import AddStudent from './AddStudent';
import Student_Data from './Student_Data';

const Student = () => {


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student List</h1>      
      {/* <SearchBar/> */}
      {/* <AddStudent/> */}
      <Student_Data/>
    </div>
  );
};

export default Student;

