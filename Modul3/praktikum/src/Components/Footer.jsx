import "../Assests/css/style.css";
import "../bootstrap.css";
import logo from "../Assests/img/logo-ilab.png";
import instagram from "../Assests/img/logo-instagram.png";
import twitter from "../Assests/img/logo-twitter.png";
import facebook from "../Assests/img/logo-facebook.png";

function Footer() {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
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

        <div className="col mb-3" />

        <div className="col mb-3">
          <h5 className="mb-3" style={{ color: "grey" }}>
            Services
          </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-4">
              <a
                href=""
                className="nav-link p-0 text-body-secondary fw-semibold"
              >
                Email Marketing
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href=""
                className="nav-link p-0 text-body-secondary fw-semibold"
              >
                Campaigns
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href=""
                className="nav-link p-0 text-body-secondary fw-semibold"
              >
                Branding
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href=""
                className="nav-link p-0 text-body-secondary fw-semibold"
              >
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
              <a
                href=""
                className="nav-link p-0 text-body-secondary fw-semibold"
              >
                Our Story
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href=""
                className="nav-link p-0 text-body-secondary fw-semibold"
              >
                Benefits
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href=""
                className="nav-link p-0 text-body-secondary fw-semibold"
              >
                Team
              </a>
            </li>
            <li className="nav-item mb-4">
              <a
                href=""
                className="nav-link p-0 text-body-secondary fw-semibold"
              >
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
                <a
                  href=""
                  className="nav-link p-0 text-body-secondary fw-semibold"
                >
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
                <a
                  href=""
                  className="nav-link p-0 text-body-secondary fw-semibold"
                >
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
                <a
                  href=""
                  className="nav-link p-0 text-body-secondary fw-semibold"
                >
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
      </footer>
    </div>
  );
}

export default Footer;
