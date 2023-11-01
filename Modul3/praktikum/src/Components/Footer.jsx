import "../App.css";
import "../bootstrap.css";
import logo from "../Assests/logo-ilab.png";
import instagram from "../Assests/logo-instagram.png";
import twitter from "../Assests/logo-twitter.png";
import facebook from "../Assests/logo-facebook.png";

const Footer = () => {
  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
      <div className="container">
        <div className="col mb-3">
          <a
            href=""
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img
              src={logo}
              alt=""
              style={{ marginTop: "3rem", marginLeft: "3rem" }}
            />
          </a>
          <p
            className=""
            style={{
              marginLeft: "3rem",
              marginTop: "5rem",
              display: "inline-block",
            }}
          >
            Copyright ©, 2023 Infinite Learning
          </p>
        </div>
        {/* Spacing Div */}
        <div className="col mb-3" />
        {/* Continue The Navbar */}
        <div className="col mb-3">
          <h5 className="mb-3" style={{ color: "grey" }}>
            Services
          </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-4">
              <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                Email Marketing
              </a>
            </li>
            <li className="nav-item mb-4">
              <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                Campaigns
              </a>
            </li>
            <li className="nav-item mb-4">
              <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                Branding
              </a>
            </li>
            <li className="nav-item mb-4">
              <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                Offline
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="mb-3" style={{ color: "gray" }}>
            About
          </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-4">
              <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                Our Story
              </a>
            </li>
            <li className="nav-item mb-4">
              <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                Benefits
              </a>
            </li>
            <li className="nav-item mb-4">
              <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                Team
              </a>
            </li>
            <li className="nav-item mb-4">
              <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 style={{ color: "gray" }}>Follow Us</h5>
          <div className="row">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                  <img
                    src={facebook}
                    alt=""
                    width="11px"
                    style={{ margin: 13 }}
                  />
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                  <img
                    src={twitter}
                    alt=""
                    width="20px"
                    style={{ margin: 13 }}
                  />
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-body-secondary fw-bold">
                  <img
                    src={instagram}
                    alt=""
                    width="20px"
                    style={{ margin: 13 }}
                  />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
