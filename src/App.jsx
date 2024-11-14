import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Pages/Login/Login'
import Home from './components/Pages/HomePage/Home'
import Dicas from './components/Pages/Dicas/Dicas'
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dicas" element={<Dicas />} />
        </Routes>
    </Router>
  )
}

export default App