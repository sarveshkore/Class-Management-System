
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="nav flex-column p-3">
      <li className="nav-item mb-2">
        <Link to="/" className="nav-link text-white">
          Students
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/staff" className="nav-link text-white">
          Staff
        </Link>
      </li>
      {/* <li className="nav-item mb-2">
        <NavLink to="" className="nav-link text-white">
          Admissions
        </NavLink>
      </li>
      <li className="nav-item mb-2">
        <NavLink to="" className="nav-link text-white">
          Attendance
        </NavLink>
      </li>
      <li className="nav-item mb-2">
        <NavLink to="" className="nav-link text-white">
          Stream
        </NavLink>
      </li>
      <li className="nav-item mb-2">
        <NavLink to=""  className="nav-link text-white">
          Subjects
        </NavLink>
      </li>
      <li className="nav-item mb-2">
        <NavLink to=""  className="nav-link text-white">
          Branches
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="" className="nav-link text-white">
          Reports
        </NavLink>
      </li> */}
    </ul>
  );
};

export default Navbar;
