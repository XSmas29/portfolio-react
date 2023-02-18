import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@styles/index.scss'
import { Provider } from 'react-redux'
import store from '@store/store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
