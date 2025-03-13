import React from 'react'
import Headers from './Headers'
import { Container, Row } from 'react-bootstrap';
import Footers from './Footers';

function blog() {
  return (
    <div>
      <Headers/>
      <div className='intro-section1'>
        <div className="col-lg-12 mx-auto text-center">
      <h1>Blog Posts</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
      </div>
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
          <div className="col-md-6 col-lg-4 mb-lg-5 mb-5">
            <div className="blog-entry">
              <a href="/#" className='img-link'>
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              </a>
              
              <div className="blog-entry-content">
                <h3><a href="/#">
                Consectetur Adipisicing Elit Expedita Beatea
                  </a>
                  </h3>
                  <div className="meta">
                    Posted by
                    <a href="/#">Admin</a>
                    in
                    <a href="/#">News</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-lg-5 mb-5">
            <div className="blog-entry">
              <a href="/#" className='img-link'>
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              </a>
              
              <div className="blog-entry-content">
                <h3><a href="/#">
                Consectetur Adipisicing Elit Expedita Beatea
                  </a>
                  </h3>
                  <div className="meta">
                    Posted by
                    <a href="/#">Admin</a>
                    in
                    <a href="/#">News</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-lg-5 mb-5">
            <div className="blog-entry">
              <a href="/#" className='img-link'>
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              </a>
              
              <div className="blog-entry-content">
                <h3><a href="/#">
                Consectetur Adipisicing Elit Expedita Beatea
                  </a>
                  </h3>
                  <div className="meta">
                    Posted by
                    <a href="/#">Admin</a>
                    in
                    <a href="/#">News</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-lg-5 mb-5">
            <div className="blog-entry">
              <a href="/#" className='img-link'>
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              </a>
              
              <div className="blog-entry-content">
                <h3><a href="/#">
                Consectetur Adipisicing Elit Expedita Beatea
                  </a>
                  </h3>
                  <div className="meta">
                    Posted by
                    <a href="/#">Admin</a>
                    in
                    <a href="/#">News</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-lg-5 mb-5">
            <div className="blog-entry">
              <a href="/#" className='img-link'>
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              </a>
              
              <div className="blog-entry-content">
                <h3><a href="/#">
                Consectetur Adipisicing Elit Expedita Beatea
                  </a>
                  </h3>
                  <div className="meta">
                    Posted by
                    <a href="/#">Admin</a>
                    in
                    <a href="/#">News</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-lg-5 mb-5">
            <div className="blog-entry">
              <a href="/#" className='img-link'>
              <img src={require('./img/hero1.jpg')} alt="img" className="img-fluid" />
              </a>
              
              <div className="blog-entry-content">
                <h3><a href="/#">
                Consectetur Adipisicing Elit Expedita Beatea
                  </a>
                  </h3>
                  <div className="meta">
                    Posted by
                    <a href="/#">Admin</a>
                    in
                    <a href="/#">News</a>
                  </div>
              </div>
            </div>
          </div>
        </Row>
        <Row>
      <div className="text-center mt-5">
        <div className="col-12">
          <a href="/#" className='p-3 d-inline-block'>1</a>
          <a href="/#" className='p-3 d-inline-block'>2</a>
          <span className='p-3 d-inline-block text-black'>3</span>
          <a href="/#" className='p-3 d-inline-block'>4</a>
          <a href="/#" className='p-3 d-inline-block'>5</a>
        </div>
      </div>
    </Row>
      </Container>
    </div>

   <Footers/>

{/* destination end */}
    </div>
  )
}

export default blog
