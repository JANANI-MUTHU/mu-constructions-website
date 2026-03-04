import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Projects from './components/Projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
