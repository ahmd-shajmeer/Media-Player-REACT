import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-content w-100 mt-5">
        <div className="container d-flex justify-content-between text-white">
          <div className="title w-25 text-dark">
            <h3 className="fw-normal">
              {" "}
              <i class="fa-solid fa-cloud-arrow-up me-2"></i>
              Media Player
            </h3>
            <p>
              Designed and build with all the love in the world by the Bootstrap
              team with the help of our contributors.
            </p>
            <span>Code licensed MIT,docs CC BY 3.0.</span> <br />
            <span>Currently v5.3.2.</span>
          </div>
          <div className="links d-flex flex-column">
            <h3 className="fw-normal">Links</h3>
            <Link to={'/'} className="nav-link">
              <a>
                Landing Page
              </a>
            </Link>
            <Link to={'home'} className="nav-link">
              <a>
                Home
              </a>
            </Link>
            <Link to={'history'} className="nav-link">
              <a>
                Watch History
              </a>
            </Link>
          </div>
          <div className="guides">
            <h3 className="fw-normal">Guides</h3>
            <a className="nav-link" href="https://react.dev/" target="_blank">
              React
            </a>
            <a className="nav-link" href="https://react-bootstrap.netlify.app/" target="_blank">
              React Bootstrap
            </a>
            <a className="nav-link" href="https://www.w3schools.com/react/react_router.asp" target="_blank">
              React Routing
            </a>
          </div>
          <div className="contact">
            <h3 className="fw-normal">Contact Us</h3>
            <div className="d-flex gap-2">
              <input
                placeholder="Enter Your Email"
                type="text"
                className="form-control"
              />
              <div className="bg-info d-flex justify-content-center align-items-center" style={{width:'60px', borderRadius:'5px'}}>
              <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="icons d-flex justify-content-between mt-2">
            <i class="fa-solid fa-envelope fa-2x"></i>
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-twitter fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
            <i class="fa-brands fa-github fa-2x"></i>
            <i class="fa-brands fa-linkedin fa-2x"></i>
            </div>
          </div>
        </div>
        <p className="text-center mt-4">Copyright &copy;2023 Media Player. Build With React.</p>
      </div>
    </>
  );
}

export default Footer;
