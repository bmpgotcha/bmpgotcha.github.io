import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      {/* navbar using tailwindcss */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Brandon Porter</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
            <Link to="/projects" className="mr-5 hover:text-gray-900">Projects</Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
