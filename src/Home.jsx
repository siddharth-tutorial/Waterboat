import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Headers from "./Headers";
import "./Demo.css";
import { Container, Row ,Col, Figure } from 'react-bootstrap';
import { FaShieldAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6"
import { MdDateRange } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import Footers from "./Footers";


function Home() {
  
  return (
    <div>
      <Headers/>
 
    {/* carousel section start */} 
     <Carousel data-bs-theme="dark">
      
      <Carousel.Item className="intro-section">
        <img
          className="d-block w-100"
          src={require("./img/hero1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="conatiner">
          <div className="row align-items-center">
            <div className="col-md-12 mx-auto text-center aos-init aos-animate" data-aos="fade-up">
            <h1>Explore, Discover The Ocean</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
            <p><a href="/#" class="btn btn-primary py-3 px-5">Read More</a></p>
            </div>
            
          </div>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      {/* slide 2 start */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/hero2.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="conatiner">
          <div className="row align-items-center">
            <div className="col-md-12 mx-auto text-center aos-init aos-animate" data-aos="fade-up">
            <h1 className="d2">Enjoy The Ocean With Your Family</h1>
            <p className="d1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
            <p><a href="/#" class="btn btn-primary py-3 px-5">Read More</a></p>
            </div>
          </div>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="intro-section">
        <img
          className="d-block w-100"
          src={require("./img/hero1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="conatiner">
          <div className="row align-items-center">
            <div className="col-md-12 mx-auto text-center aos-init aos-animate" data-aos="fade-up">
            <h1>Explore, Discover The Ocean</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
            <p><a href="/#" class="btn btn-primary py-3 px-5">Read More</a></p>
            </div>
            
          </div>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/hero2.jpg")}
          alt="Second slide" 
        />
        <Carousel.Caption>
          <div className="conatiner">
          <div className="row align-items-center">
            <div className="col-md-12 mx-auto text-center aos-init aos-animate" data-aos="fade-up">
            <h1 className="d2">Enjoy The Ocean With Your Family</h1>
            <p className="d1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
            <p><a href="/#" class="btn btn-primary py-3 px-5">Read More</a></p>
            </div>
          </div>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
     
{/* slider section end */}

{/* About us section start */}
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
     
     {/* Destination */}

    <div className="site-section bg-light">
      <Container>
        <Row>
          <div className="justify-content-center mb-5">
            <div className="col-md-12 text-center">
              <span className="text-serif text-primary">Destination</span>
              <h3 className="heading-92913 text-black text-center">Our Destinations</h3>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-39381">
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              <div className="p-4">
                <h3><a href="/#">
                  <span className="icon-room mr-1 text-primary"><FaLocationDot/></span>
                  Croatia — Columbia
                  </a>
                  </h3>
                  <div className="d-flex">
                    <div className="mr-auto">
                      <span className="icon-date"><MdDateRange /></span>
                      Sep. 05 — Oct. 15
                    </div>
                    <div className="ml-auto price">
                      <span className="bg-primary">$600</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-39381">
              <img src={require('./img/hero2.jpg')} alt="img" className="img-fluid" />
              <div className="p-4">
                <h3><a href="/#">
                  <span className="icon-room mr-1 text-primary"><FaLocationDot/></span>
                  Croatia — Columbia
                  </a>
                  </h3>
                  <div className="d-flex">
                    <div className="mr-auto">
                      <span className="icon-date"><MdDateRange /></span>
                      Sep. 05 — Oct. 15
                    </div>
                    <div className="ml-auto price">
                      <span className="bg-primary">$600</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-39381">
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              <div className="p-4">
                <h3><a href="/#">
                  <span className="icon-room mr-1 text-primary"><FaLocationDot/></span>
                  Croatia — Columbia
                  </a>
                  </h3>
                  <div className="d-flex">
                    <div className="mr-auto">
                      <span className="icon-date"><MdDateRange /></span>
                      Sep. 05 — Oct. 15
                    </div>
                    <div className="ml-auto price">
                      <span className="bg-primary">$600</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-39381">
              <img src={require('./img/hero2.jpg')} alt="img" className="img-fluid" />
              <div className="p-4">
                <h3><a href="/#">
                  <span className="icon-room mr-1 text-primary"><FaLocationDot/></span>
                  Croatia — Columbia
                  </a>
                  </h3>
                  <div className="d-flex">
                    <div className="mr-auto">
                      <span className="icon-date"><MdDateRange /></span>
                      Sep. 05 — Oct. 15
                    </div>
                    <div className="ml-auto price">
                      <span className="bg-primary">$600</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-39381">
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              <div className="p-4">
                <h3><a href="/#">
                  <span className="icon-room mr-1 text-primary"><FaLocationDot/></span>
                  Croatia — Columbia
                  </a>
                  </h3>
                  <div className="d-flex">
                    <div className="mr-auto">
                      <span className="icon-date"><MdDateRange /></span>
                      Sep. 05 — Oct. 15
                    </div>
                    <div className="ml-auto price">
                      <span className="bg-primary">$600</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-39381">
              <img src={require('./img/hero2.jpg')} alt="img" className="img-fluid" />
              <div className="p-4">
                <h3><a href="/#">
                  <span className="icon-room mr-1 text-primary"><FaLocationDot/></span>
                  Croatia — Columbia
                  </a>
                  </h3>
                  <div className="d-flex">
                    <div className="mr-auto">
                      <span className="icon-date"><MdDateRange /></span>
                      Sep. 05 — Oct. 15
                    </div>
                    <div className="ml-auto price">
                      <span className="bg-primary">$600</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>

{/* destination end */}

{/* Book a now */}
<div className="site-container">
  <Container>
    <Row>
      <div className="col-md-7">
        <p>
          <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
        </p>
      </div>
      <div className="col-md-5">
        <span className="text-serif text-primary">Book Now</span>
        <h3 className="heading-92913 text-black">Book A Yacht</h3>
        <Form action="#" className="row">
          <div className="form-group col-md-6">
            <label htmlFor="input-1">Full Name:</label>
            <input type="text" className="from-control" id="input-1" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="input-2">Number of People:</label>
            <input type="text" className="from-control" id="input-2" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="input-3">Date From:</label>
            <input type="date" className="from-control" id="input-3" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="input-4">Date To:</label><br/>
            <input type="date" className="from-control" id="input-4" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="input-5">Yacht You're Interested in:</label><br/>
           <select name="#" id="input-5" className="from-control">
            <option value="#">Motor Yacht</option>
            <option value="#">Hi-Speed Yacht</option>
            <option value="#">Premium Yacht</option>
            <option value="#">Presidential Yacht</option>
           </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="input-6">Email Address</label><br/>
            <input type="text" className="from-control" id="input-6" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="input-7">Phone Number</label><br/>
            <input type="text" className="from-control" id="input-7" />
          </div>
          <div className="form-group col-md-12">
          <label htmlFor="input-8">Notes</label>
          <textarea name="#" id="input-8" cols={30} rows={5} className="from-control"></textarea>
          </div>
          <div className="form-group col-md-12">
            <input type="submit" className="btn btn-primary py-3 px-5" value={'Book Now'} />
          </div>
        </Form>
      </div>
    </Row>
  </Container>
</div>
{/*book now end  */}

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

{/* testimonial section start */}
<div className="site-section">
  <Container>
    <Row>
      <div className="justify-content-center mb-5">
        <div className="col-md-12 text-center">
          <span className="text-serif text-primary">Testimonial</span>
          <h3 className="heading-92913 text-black text-center">What Customer Saying...</h3>
        </div>
      </div>
    </Row>
<Row>
  <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
    <div className="testimony-39291">
      <blockquote>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.
        <span className="quote"><FaQuoteRight/></span>
        </p>
      </blockquote>
      <div className="d-flex vcard align-items-center">
        <div className="pic mr-3">
          <img src={require('./img/person4.jpg')} alt="img" className="img-fluid" />
        </div>
        <div className="textt">
          <strong className="d-block">John Doe</strong>
          <span>CEO and Co-Founder</span>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
    <div className="testimony-39291">
      <blockquote>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.
        <span className="quote"><FaQuoteRight/></span>
        </p>
      </blockquote>
      <div className="d-flex vcard align-items-center">
        <div className="pic mr-3">
          <img src={require('./img/person2.jpg')} alt="img" className="img-fluid" />
        </div>
        <div className="textt">
          <strong className="d-block">John Doe</strong>
          <span>CEO and Co-Founder</span>
        </div>
      </div>
    </div>
  </div>
  <div className="mb-4 mb-lg-0 col-md-6 col-lg-4">
    <div className="testimony-39291">
      <blockquote>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.
        <span className="quote"><FaQuoteRight/></span>
        </p>
      </blockquote>
      <div className="d-flex vcard align-items-center">
        <div className="pic mr-3">
          <img src={require('./img/person4.jpg')} alt="img" className="img-fluid" />
        </div>
        <div className="textt">
          <strong className="d-block">John Doe</strong>
          <span>CEO and Co-Founder</span>
        </div>
      </div>
    </div>
  </div>
</Row>
  </Container>
</div>
{/* testimonial section end */}

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
 

{/* footer section start */}


<Footers/>


    </div>  
  );
}

export default Home;
