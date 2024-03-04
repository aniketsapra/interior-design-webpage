import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function App() { 
  return (
    <div className='App'>
      <Router>
        <Navbar />       
        <Routes >
          <Route  path='/' exact element={<Home />} />
          <Route path='/portfolio' exact element={<Portfolio />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>        
      </Router>
      <Footer />
    </div>
  );
}

export default App
