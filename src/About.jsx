import React from 'react'
import Headers from './Headers'
// import Home from './Home'
import "./Demo.css";
import { Container, Row,Col,Figure } from 'react-bootstrap';
import { FaShieldAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Footers from './Footers';
// import { FaQuoteRight } from "react-icons/fa";
function Aboutus() {
 
  return (
    <div>
      <Headers/>
      {/* <Home/> */}
      <div className='intro-section1'>
        <div className="col-md-12 mx-auto  text-center" >
      <h1 id='about'>About WaterBoat</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
      <p><a href="/#" class="btn btn-primary py-3 px-5">Contact</a></p>
      </div>
      </div>
      
<div className="site-section">
  <Container>
    <Row>
      <div className="col-md-6">
      <img src={require("./img/hero2.jpg")} alt="img" className='img-fluid' />
      </div>
      <div className="col-md-6">
        <span className="text-serif text-primary">About Us</span>
        <h3 className="heading-92913 text-black">
        Welcome To Our Website
        </h3>
        <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, illum, quasi. Odit velit deserunt eligendi unde, enim. Enim fugiat.</p>
        <p className='mb-3' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius ullam impedit architecto debitis facilis!</p>
        <p><a href="/#" class="btn btn-primary py-3 px-4">Learn More</a></p>
      </div>
    </Row>
  </Container>
</div>
<div className="py-5">
  <Container>
    <Row>
      <div className="col-md-6 col-lg-4">
        <div className="service-29283">
          <span className="wrap-icon-39293">
            <span className='flaticon-yacht'>
              <img src={require("./img/yacht.png")} alt="img" className='img-fluid' />
            </span>
          </span>
          <h3>Luxuries Yacht</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-29283">
          <span className="wrap-icon-39293">
            <span className='flaticon-shield'>
            <FaShieldAlt/>
            </span>
          </span>
          <h3>30 Years of Experience</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-29283">
          <span className="wrap-icon-39293">
            <span className='flaticon-captain'>
              <img src={require("./img/captain.png")} alt="img" className='img-fluid' />
            </span>
          </span>
          <h3>Good Captain</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>
        </div>
      </div>
    </Row>
  </Container>
</div>
{/* bg-image overlay1 */}

{/* bg-image overlay */}

<div className="site-section bg-image overlay">
  <Container>
    <Row>
    <Col>
    <div className="counter-39392">
      <h3>349</h3>
      <span>Number of Yacht</span>
    </div>
    </Col>
    <Col>
    <div className="counter-39392">
      <h3>7000+</h3>
      <span>Customers Satisfied</span>
    </div>
    </Col>
    <Col>
    <div className="counter-39392">
      <h3>120</h3>
      <span>Number of Staffs</span>
    </div>
    </Col>
    <Col>
    <div className="counter-39392">
      <h3>493</h3>
      <span>Sea Destinations</span>
    </div>
    </Col>
    <Col>
    <div className="counter-39392">
      <h3>230</h3>
      <span>Professional Sailors</span>
    </div>
    </Col>
    </Row>
  </Container>
  </div>     
{/* team section start */}
<div className="site-section">
  <Container>
    <Row>
      <div className="justify-content-center mb-5">
        <div className="col-md-12 text-center">
          <span className="text-serif text-primary">Team</span>
          <h3 className="heading-92913 text-black text-center">Our Team</h3>
        </div>
      </div>
    </Row>
    <Row>
      <div className="col-lg-3 col-md-6 mb-lg-0">
        <div className="person">
          <Figure>
            <img src={require('./img/person1.jpg')} alt="img" className="img-fluid" />
            <div className="social">
              <a href="/#"><span className="icon-facebook"><FaFacebookF/></span></a>
              <a href="/#"><span className="icon-twitter"><FaTwitter/></span></a>
              <a href="/#"><span className="icon-linkdin"><FaLinkedinIn/></span></a>
            </div>
          </Figure>
          <div className="person-contents">
            <h3>Craig Daniel</h3>
            <span className="position">Engineer</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-lg-0">
        <div className="person">
          <Figure>
            <img src={require('./img/person2.jpg')} alt="img" className="img-fluid" />
            <div className="social">
              <a href="/#"><span className="icon-facebook"><FaFacebookF/></span></a>
              <a href="/#"><span className="icon-twitter"><FaTwitter/></span></a>
              <a href="/#"><span className="icon-linkdin"><FaLinkedinIn/></span></a>
            </div>
          </Figure>
          <div className="person-contents">
            <h3>Craig Daniel</h3>
            <span className="position">Engineer</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-lg-0">
        <div className="person">
          <Figure>
            <img src={require('./img/person3.jpg')} alt="img" className="img-fluid" />
            <div className="social">
              <a href="/#"><span className="icon-facebook"><FaFacebookF/></span></a>
              <a href="/#"><span className="icon-twitter"><FaTwitter/></span></a>
              <a href="/#"><span className="icon-linkdin"><FaLinkedinIn/></span></a>
            </div>
          </Figure>
          <div className="person-contents">
            <h3>Craig Daniel</h3>
            <span className="position">Engineer</span>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-lg-0">
        <div className="person">
          <Figure>
            <img src={require('./img/person4.jpg')} alt="img" className="img-fluid" />
            <div className="social">
              <a href="/#"><span className="icon-facebook"><FaFacebookF/></span></a>
              <a href="/#"><span className="icon-twitter"><FaTwitter/></span></a>
              <a href="/#"><span className="icon-linkdin"><FaLinkedinIn/></span></a>
            </div>
          </Figure>
          <div className="person-contents">
            <h3>Craig Daniel</h3>
            <span className="position">Engineer</span>
          </div>
        </div>
      </div>
    </Row>
  </Container>
</div>
{/* team section end */}
{/* bg-image overlay2 */}
<div className="site-section bg-image overlayy">
  <Container>
    <Row>
      <div className="justify-content-center">
        <div className="col-md-12 text-center">
          <h2 className="text-white">Get In Touch With Us</h2>
          <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className="mb-0"><a href="/#" className="btn btn-warning py-3 px-5 text-white ">Contact Us</a></p>
           </div>
      </div>
    </Row>
  </Container>
</div>
{/* bg-image overlay 2 */}

<Footers/>
    </div>
  )
}

export default Aboutus
