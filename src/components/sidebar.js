import React from "react";
import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <div>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item">
          <Link to="/dashboard">
            {" "}
            <a class="nav-link" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div class="sidebar-heading">Interface</div>
        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item">
          <Link to="/add-students">
            <button class="nav-link" href="#">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Add Student</span>
            </button>
          </Link>
        </li>
        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item">
          <Link to="/all-students">
            <button class="nav-link" href="#">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>All Students</span>
            </button>
          </Link>
        </li>
        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />
      </ul>
    </div>
  );
}

export default SideBar;
