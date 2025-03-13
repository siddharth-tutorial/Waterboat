import React from 'react'
import "./Demo.css";
import { Container, Row } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";

export default function Footers() {
  return (
    <div>
      <div className="footer bg-light">
       <Container>
          <Row>
            <div className="col-lg-3">
              <p className="mb-4">
                <img src={require('./img/logo.png')} alt="logo" className="img-fluid" />
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>
              <p className='p'><a href="/#">Learn More</a></p>
            </div>
            <div className="col-lg-3">
             <h3 className="footer-heading">
              <span>Our Company</span>
              </h3>
              <ul className="list-unstyled">
                <li><a href="/#">About</a></li>
                <li><a href="/#">News</a></li>
                <li><a href="/#">Services</a></li>
                <li><a href="/#">Our Team</a></li>
                <li><a href="/#">Careers</a></li>
                <li><a href="/#">Projects</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
             <h3 className="footer-heading">
              <span>Our Services</span>
              </h3>
              <ul className="list-unstyled">
                <li><a href="/#">Industrial</a></li>
                <li><a href="/#">Construction</a></li>
                <li><a href="/#">Remodeling</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
             <h3 className="footer-heading">
              <span>Contact</span>
              </h3>
              <ul className="list-unstyled">
                <li><a href="/#">Help Center</a></li>
                <li><a href="/#">Support Community</a></li>
                <li><a href="/#">Press</a></li>
                <li><a href="/#">FAQ</a></li>
                <li><a href="/#">Our Partners</a></li>
              </ul>
            </div>
          </Row>
          <Row>
            <div className="col-12">
                <div className="copyright">
                    <p>Copyright ©2025 All rights reserved | This template is made with <span className='text-danger'><FaHeart/></span> by
                    <a href="https://colorlib.com" target="_/blank">Colorlib</a></p>
 
                                   </div>
            </div>
          </Row>
        </Container>
      </div> 
      
        </div>
  )
}
