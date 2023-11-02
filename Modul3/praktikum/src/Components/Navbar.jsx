import "../Assests/css/style.css";
import "../bootstrap.css";
import logo from "../Assests/img/logo-ilab.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-custom-bg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <img src={logo} alt="" width={100} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100 d-flex justify-content-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link active ml-3"
                  aria-current="page"
                  style={{ marginLeft: "2rem" }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active ml-3"
                  style={{ marginLeft: "2rem" }}
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active ml-3"
                  style={{ marginLeft: "2rem" }}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-login w-10 dflex justify-content-start">
          <button type="button" className="btn btn-outline-dark m-lg-3">
            Sign Up
          </button>
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
