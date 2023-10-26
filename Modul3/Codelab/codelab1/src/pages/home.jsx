import FooterComponent from "../components/footer";
import NavbarComponent from "../components/navbar";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <NavbarComponent />
      <nav>
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
      </nav>
      <p>Halaman Home</p>
      <FooterComponent />
    </>
  );
}
