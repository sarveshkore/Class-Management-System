
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="nav flex-column p-3">
      <li className="nav-item mb-2">
        <Link to="/" className="nav-link text-white">
          Home
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/student" className="nav-link text-white">
          Students
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/staff" className="nav-link text-white">
          Staff
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/" className="nav-link text-white">
          Admissions
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/" className="nav-link text-white">
          Attendance
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/" className="nav-link text-white">
          Stream
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/"  className="nav-link text-white">
          Subjects
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/"  className="nav-link text-white">
          Branches
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link text-white">
          Reports
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
