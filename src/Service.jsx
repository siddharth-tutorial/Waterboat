import React from 'react'
import Headers from './Headers'
import { Container, Row } from 'react-bootstrap';
import { FaShieldAlt } from "react-icons/fa";
import { FcMultipleDevices } from "react-icons/fc";
import { FaQuoteRight } from "react-icons/fa";
import Footers from './Footers';

function Service() {
  return (
    <div>
      <Headers />
      <div className='intro-section1'>
        <div className="col-md-12 mx-auto text-center">
      <h1>Our Services</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
      <p><a href="/#" class="btn btn-primary py-3 px-5">Contact</a></p>
      </div>
      </div>
    {/* service section start */}
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
      <div className="col-md-6 col-lg-4">
        <div className="service-29283">
          <span className="wrap-icon-39293">
            <span className='flaticon-device'>
              <FcMultipleDevices/>
              
            </span>
          </span>
          <h3>Luxuries Yacht</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-29283">
          <span className="wrap-icon-39293">
            <span className='flaticon-badge'>
            <img src={require('./img/badge.png')} alt="img" className='img-fluid' />
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
              <img src={require("./img/captains.png")} alt="img" className='img-fluid' />
            </span>
          </span>
          <h3>Good Captain</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>
        </div>
      </div>
    </Row>
  </Container>
</div>


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

<Footers/>
    </div>




  )
}

export default Service
