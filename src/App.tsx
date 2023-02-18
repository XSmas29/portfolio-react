import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import '@styles/app.scss'
import Home from '@pages/home'


function App() { 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
