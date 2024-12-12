// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='sidenavbar'>
//         <ul>
//             <li>
//                 <a href="/home">ha</a>
//             </li>
//         </ul>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';

const Navbar = () => {
  return (
    <ul className="nav flex-column p-3">
      <li className="nav-item mb-2">
        <a href="#students" className="nav-link text-white">
          Students
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#staff" className="nav-link text-white">
          Staff
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#admissions" className="nav-link text-white">
          Admissions
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#attendance" className="nav-link text-white">
          Attendance
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#courses" className="nav-link text-white">
          Courses
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#subjects" className="nav-link text-white">
          Subjects
        </a>
      </li>
      <li className="nav-item mb-2">
        <a href="#branches" className="nav-link text-white">
          Branches
        </a>
      </li>
      <li className="nav-item">
        <a href="#reports" className="nav-link text-white">
          Reports
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
