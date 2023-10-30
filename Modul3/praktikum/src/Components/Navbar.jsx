function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-custom-bg fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://infotech.umm.ac.id/">
          <img src="./Assets/logo-ilab.png" alt="" width="100" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav w-100 d-flex justify-content-center">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav mx-auto">
              <li>
                <a
                  class="nav-link active ml-3"
                  aria-current="page"
                  style="margin-left: 2rem"
                  href="https://infotech.umm.ac.id/"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  class="nav-link active ml-3"
                  style="margin-left: 2rem"
                  href="https://infotech.umm.ac.id/"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  class="nav-link active ml-3"
                  style="margin-left: 2rem"
                  href="https://infotech.umm.ac.id/"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-login w-10 dflex justify-content-start">
          <button type="button" class="btn btn-outline-dark m-lg-3">
            Sign Up
          </button>
          <button type="button" class="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
