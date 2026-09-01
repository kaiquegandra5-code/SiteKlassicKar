import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Analytics } from '@vercel/analytics'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics>
      <App />
    </Analytics>
  </StrictMode>,
)
