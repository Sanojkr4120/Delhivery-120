
import './App.css';
// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog'
import Privacy from './components/Privacy'
import Contactus from './components/Contactus';



function App() {
 

  return (
    <>
      
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>



          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/contactus" element={<Contactus/>} />
          
          



        </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
