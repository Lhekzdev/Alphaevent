import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { EventFormProvider } from './components/context/context.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <StrictMode>
    <EventFormProvider>
    <App/>
    </EventFormProvider>
</StrictMode>
</BrowserRouter>
)

