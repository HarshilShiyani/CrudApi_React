import "./Layout.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar shadow navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="logofull">
            <Link to="home">
              <i class="fa-brands fa-react fs-1 ps-5" href="home"></i>
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
                  <strong className="fs-4">Home</strong>
                </Link>
              </li>
              <li class="nav-item dropdown me-5">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong className="fs-4">Student </strong>
                </a>
                <ul class="dropdown-menu">
                  <li><Link to="/displaystu/add" class="dropdown-item" href="#"><strong className="fs-4">Add New Student <b> &nbsp;+ </b></strong></Link></li>
                  <li><Link to="/displaystu" class="dropdown-item" href="#"><strong className="fs-4">Display All Student</strong></Link></li>

                </ul>
              </li>
              <li class="nav-item dropdown me-5">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong className="fs-4">Faculty</strong>
                </a>
                <ul class="dropdown-menu">
                  <li><Link to="/displayfacu/add" class="dropdown-item" href="#"><strong className="fs-4">Add New Faculty <b> &nbsp;+ </b></strong></Link></li>
                  <li><Link to="/displayfacu" class="dropdown-item" href="#"><strong className="fs-4">Display All Faculty</strong></Link></li>
                </ul>
              </li>
              <li class="nav-item me-5">
                <Link to="/aboutus" class="nav-link fs-6  text-center">
                  <strong className="fs-4">About Us</strong>
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/contactus" class="nav-link fs-6  text-center">
                  <strong className="fs-4">Contact Us</strong>
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
