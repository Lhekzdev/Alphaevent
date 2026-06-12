import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EventFormProvider } from './components/context/context.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from '../app/store.js'
import { ActiveLinkProvider } from './components/dashboard/OnboardingMain/ActiveLinkContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <StrictMode>

      <EventFormProvider>
        < ActiveLinkProvider>
          <Provider store={store}>
             <App />
            {/* Toast Notifications */}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              theme="light"
            />
            </Provider>
        </ ActiveLinkProvider>
      </EventFormProvider>
    </StrictMode>
  </BrowserRouter>
)

