import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { EventFormProvider } from './components/context/context.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from '../app/store.js'
import { ActiveLinkProvider } from './components/dashboard/OnboardingMain/ActiveLinkContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <StrictMode>

    <EventFormProvider>
     < ActiveLinkProvider>
      <Provider store={store}> <App/></Provider>
</ ActiveLinkProvider>
    </EventFormProvider>
</StrictMode>
</BrowserRouter>
)

