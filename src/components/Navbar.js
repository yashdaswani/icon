import React from "react";
import "./Navbar.css";
import ShoppingCart from "../../node_modules/@material-ui/icons/ShoppingCart"
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Icons
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Illustrations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  3D Illustrations
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Designers
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Top Selling
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Most Followers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                     Newest Designers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                     Most Icons
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                     Following
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item " href="#" style={{fontSize:"14px",fontWeight:"650",color:"rgb(135, 133, 133)"}}>
                      Featured Categories
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Social Media
                    </a>
                  </li> 
                  <li>
                    <a class="dropdown-item" href="#">
                      Spring
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      All Categories
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pricing
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="menuitem">
              <ShoppingCart />
            </div>
            <div className="menuitem">Sign IN</div>
            <div className="menuitem">Sign UP</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
