import "./Layout.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar shadow  navbar-expand-lg pt-0 pb-0">
        <div class="container-fluid ">
          <div class="logofull">
            <Link to="home">
              <i class="fa-brands fa-react fs-3 ps-5" href="home"></i>
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item me-5">
                <Link to="home" class="nav-link fs-5 text-center">
                  Home
                </Link>
              </li>

              <li class="nav-item me-5">
                <Link to="/displaystu" class="nav-link fs-6  text-center">
                  Student
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/displaystu/add" class="nav-link fs-6 text-center">
                  Add New Student
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/displayfacu" class="nav-link fs-6 text-center">
                  Faculty
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/aboutus" class="nav-link fs-6  text-center">
                  About Us
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/contactus" class="nav-link fs-6  text-center">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
