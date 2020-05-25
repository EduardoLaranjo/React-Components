import React from 'react';
import {Link} from "react-router-dom";
import './Sidebar.css'

function Sidebar() {
  return (
    <div className={"sidebar-container"}>
      <ul>
        <li>
          <Link to={"/drop"}>Drag & Drop Components</Link></li>
        <li>
          <Link to={"/dropdown"}>Dropdowns Components</Link></li>
        <li>
          <Link to={"/button"}>Buttons Components</Link></li>
        <li>
          <Link to={"/input"}>Inputs Components</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;