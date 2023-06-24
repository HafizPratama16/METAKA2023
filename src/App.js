import React from 'react'
import Header from './pages/Header'
import 'bulma/css/bulma.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/components/Home';
import About from './pages/components/About';
import Jobs from './pages/components/Jobs';
import Contact from "./pages/components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Jobs" element={<Jobs />}/>
          <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}
