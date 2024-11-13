
// import Navbar from "./components/navbar/Navbar.jsx"
import React, { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom'
const Landing = lazy(() => import("./components/landing/Landing.jsx"));
const Eventshome = lazy(() => import("./components/events/eventshome/Eventshome.jsx"));

// import Footer from './components/Footer/Footer.jsx'

import './App.css'
import Applayout from "./components/layout/Applayout.jsx"


function App() {


  return (
    <Applayout>

    <>
    <Suspense 
    
     fallback={
          <div className="font-poppins  text-center text-4xl  font-semibold text-red-600">
            Please wait...
          </div>
        }
    >

      <Routes>
 <Route path="/" element={<Landing />} /> 
  
   <Route path="/eventshome" element={<Eventshome />} />
   </Routes>
     
  

     
      
      </Suspense>
     



    </>

    </Applayout>
  )
}

export default App
