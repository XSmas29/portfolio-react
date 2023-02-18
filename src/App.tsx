import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import '@styles/app.scss'
import { themeConfig } from '@theme'
import { ThemeProvider } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import router from '@router/route'

function App() { 

  const mode = useSelector((state: any) => state.mode)
  return (
    <ThemeProvider theme={themeConfig(mode.value)}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  )
}

export default App
