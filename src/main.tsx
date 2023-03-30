import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router'
import './global.css'
import remInit from "./utils/rem"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

remInit()
