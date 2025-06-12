import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { EventFormProvider } from './components/context/context.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from '../app/store.js'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <StrictMode>
    <EventFormProvider>
      <Provider store={store}> <App/></Provider>
   
    </EventFormProvider>
</StrictMode>
</BrowserRouter>
)

