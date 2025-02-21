import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Route, Routes } from "react-router-dom";
//import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


const Landing = lazy(() => import("./components/Landingcont/landing/Landing.jsx"));
const Eventshome = lazy(() => import("./components/events/eventshome/Eventshome.jsx"));
const ExploreEvents = lazy(() => import("./components/events/exploreEvents/ExploreEvents.jsx"));
const Eventsdetailshome = lazy(() => import("./components/eventdetails/eventsdetailshome/Eventsdetailshome.jsx"));
const OnboardingMain = lazy(() => import("./components/dashboard/OnboardingMain/OnboardingMain.jsx"));
const CreateEvent = lazy(() => import("./components/dashboard/createEvent/CreateEvent.jsx"));
const OnboardEvent = lazy(() => import("./components/dashboard/OnboardEvent/OnboardEvent.jsx"));

import { SignUp } from "./components/signup/SignUp.jsx";
import { LogIn } from "./components/LogIn/LogIn.jsx";
import VerifyAcc from './components/signup/VerifyAcc.jsx';
import SetAcc from './components/signup/SetAcc.jsx';
import ForgotPassword from './components/signup/ForgotPassword.jsx';
import VerifyAcc2 from './components/signup/VerifyAcc2.jsx';
import CreateAcc from './components/signup/CreateAcc.jsx';
import SuccessAcc from './components/signup/SuccessAcc.jsx';


import "./App.css";
import Applayout from "./components/Landingcont/layout/Applayout.jsx";

function App() {

  return (
    <>
      <Suspense
        fallback={
          <div className="font-poppins text-center text-4xl font-semibold text-red-600">
            Please wait...
          </div>
        }
      >

        <Routes>
          {/* Routes wrapped with Applayout */}
          <Route
            path="/"
            element={
              <Applayout>
                <Landing />
              </Applayout>
            }
          />
          <Route
            path="/eventshome"
            element={
              <Applayout>
                <Eventshome />
              </Applayout>
            }
          />


          <Route
            path="/eventsdetailshome/:eventID"
            element={
              <Applayout>
                <Eventsdetailshome />
              </Applayout>
            }
          />

          <Route
            path="/exploreEvents"
            element={
              <Applayout>
                <ExploreEvents />
              </Applayout>
            }
          />


          <Route
            path="/exploreEvents/:eventID"
            element={
              <Applayout>
                <ExploreEvents />
              </Applayout>
            }
          />


          {/* Standalone SignUp route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/VerifyAcc" element={<VerifyAcc />} />
          <Route path="/SetAcc" element={<SetAcc />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/VerifyAcc2" element={<VerifyAcc2 />} />
          <Route path="/CreateAcc" element={<CreateAcc />} />
          <Route path="/SuccessAcc" element={<SuccessAcc />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/OnboardingMain" element={<OnboardingMain />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/OnboardEvent" element={<OnboardEvent />} />


          {/* Define the route here */}


          {/* <Route path="/Eventsdetailshome/:eventID" element={<Eventsdetailshome />} /> */}





        </Routes>

      </Suspense>
    </>
  );
}

export default App;