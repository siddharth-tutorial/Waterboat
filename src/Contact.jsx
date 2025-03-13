import React from 'react'
import Headers from './Headers'
import { Container,Row } from 'react-bootstrap'
import Footers from './Footers'

function Contact() {
  return (
    <div>
      <Headers/>
      <div className='intro-section2 site-blocks-cover innerpage'>
        <Container>
          <Row>
            <div className="align-items-center text-center-border">
              <div className="col-lg-12 mt-5">
                <h1>Get In Touch</h1>
                <p className='text-white text-center'>
                  <a href="/home">Home</a>
                  <span className='mx-2'>/</span>
                  <span>Contact Us</span>
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      {/* contact form */}
      <div className="site-section">
        <Container>
          <Row>
            <div className="col-md-6 form-group">
            <label htmlFor="fname">First Name</label>
             <input type="text" id='fname' className='form-control form-control-lg' />          
            </div>
            <div className="col-md-6 form-group">
            <label htmlFor="lname">Last Name</label>
             <input type="text" id='lname' className='form-control form-control-lg' />          
              </div>
            </Row>
            <Row>
            <div className="col-md-6 form-group">
            <label htmlFor="email">Email Address</label>
             <input type="email" id='email' className='form-control form-control-lg' />          
              </div>
            <div className="col-md-6 form-group">
            <label htmlFor="tnumber">Tel. Number</label>
             <input type="number" id='tnumber' className='form-control form-control-lg' />          
              </div>
          </Row>
          <Row>
            <div className="col-md-12 form-group">
              <label htmlFor="message">Message</label>
              <textarea name="#" id="message" cols={30} rows={10} className='.form-control'></textarea>
            </div>
          </Row>
          <Row>
            <div className="col-12">
              <input type="submit"value={'Send Message'} className='btn btn-primary rounded-0 px-3 px-5' />
            </div>
          </Row>
        </Container>
      </div>

      {/* section-bg */}
      <div className="section-bg style-1">
        <Container>
          <Row>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <span className="icon flaticon-mortarboard">
                <h3>Our Philosphy</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.</p>
              </span>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <span className="icon flaticon-mortarboard">
                <h3>Academics Principle</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.</p>
              </span>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <span className="icon flaticon-mortarboard">
                <h3>Key of Success</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.</p>
              </span>
            </div>
          </Row>
        </Container>
      </div>
      {/* footer section start */}

      <Footers/>
    </div>
  )
}


export default Contact
