import FooterComponent from "../components/footer";
import NavbarComponent from "../components/navbar";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <NavbarComponent />
      <nav>
        <div>
          <ul>
            <li>
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/contact">Contact</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/about">About</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <p>Halaman Contact</p>
      <FooterComponent />
    </>
  );
}
