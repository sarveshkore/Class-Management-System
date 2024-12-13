import SearchBar from '../SearchBar';
import Student_Data from './Student_Data';

const Student = () => {


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student List</h1>      
      <SearchBar/>
      <Student_Data/>
    </div>
  );
};

export default Student;

