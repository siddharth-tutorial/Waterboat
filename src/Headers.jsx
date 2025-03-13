import React from "react";
import "./Demo.css";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import logo from "./img/logo.png";
import { Container } from "react-bootstrap";

function Headers() {
  return (
    <div>
      {/*top header section start */}
      <div className="header-top bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-lg-3">
              <Link href="/home" />
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="quick-contact-icons d-flex">
                <div className="icon align-self-start">
                  <span className="icon">
                    <span className="location-arrow text-primary">
                      <FaLocationArrow />
                    </span>
                  </span>
                </div>
                <div className="text">
                  <span className="h4 d-block">San Francisco</span>
                  <span className="caption-text">
                    Mountain View, Fake st., CA
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 d-none d-lg-block">
              <div className="quick-contact-icons d-flex">
                <div className="icon align-self-start">
                  <span className="icon">
                    <span className="location-arrow text-primary">
                      <FaPhone />
                    </span>
                  </span>
                </div>
                <div className="text">
                  <span className="h4 d-block">000 209 392 312</span>
                  <span className="caption-text">Toll free</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 d-none d-lg-block">
              <div className="quick-contact-icons d-flex">
                <div className="icon align-self-start">
                  <span className="icon">
                    <span className="location-arrow text-primary">
                      <HiOutlineMail />
                    </span>
                  </span>
                </div>
                <div className="text">
                  <span className="h4 d-block">info@gmail.com</span>
                  <span className="caption-text">Gournadi, 1230 Bariasl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* top header section end */}

      <div
        id="sticky-wrapper"
        className="sticky-wrapper is-sticky"
      >
        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
          style={{ width: "1519.2px" }}
        >
          <Container>
          
           
              <div className="d-flex align-items-center">
                <div className="mx-auto">
                  <nav>
                    <Link to="/" className="text-left">
                      Home
                    </Link>

                    <Link to="/about" className=" text-left">
                      About Us
                    </Link>

                    <Link to="/service" className="text-left">
                      services
                    </Link>

                    <Link to="/Testimonial" className="text-left">
                      Testimonials
                    </Link>

                    <Link to="/Blog" className="text-left">
                      Blog
                    </Link>

                    <Link to="/contact" className="text-left">
                      contact
                    </Link>
                  </nav>
                </div>
              </div>
          
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Headers;
