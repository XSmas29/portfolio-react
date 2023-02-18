import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@styles/index.scss'
import themeConfig from '@theme'
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themeConfig}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
