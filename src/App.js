// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Service from './Service';
import Testimonial from './Testimonial';
import Blog from './Blog';
import Contact from './Contact';
import './Demo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
   <>
  
  <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/service" element={<Service/>} />
    <Route path="/testimonial" element={<Testimonial />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element ={<Contact />}/>
 


    
</Routes>
   </>
  );
}

export default App;
