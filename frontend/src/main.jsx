import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SiteLayout from './layout/SiteLayout.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SiteLayout>
        <App />
      </SiteLayout>
    </BrowserRouter>
  </StrictMode>,
   
)
