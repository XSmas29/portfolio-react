import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '@styles/app.scss'
import Home from '@pages/home'
import { themeConfig } from '@theme'
import { ThemeProvider } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

function App() { 

  const mode = useSelector((state: any) => state.mode)
  return (
    <ThemeProvider theme={themeConfig(mode.value)}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
