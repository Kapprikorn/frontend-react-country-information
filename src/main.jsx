import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* Generic CSS must haves for better UX */
import './styling/css-reset.css'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
