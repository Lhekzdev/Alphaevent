import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Route, Routes } from "react-router-dom";
//import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const Landing = lazy(() => import("./components/Landingcont/landing/Landing.jsx"));
const Eventshome = lazy(() => import("./components/events/eventshome/Eventshome.jsx"));
const ExploreEvents = lazy(() => import("./components/events/exploreEvents/ExploreEvents.jsx"));
const Eventsdetailshome = lazy(() => import("./components/eventdetails/eventsdetailshome/Eventsdetailshome.jsx"));
const OnboardingMain = lazy(() => import("./components/dashboard/OnboardingMain/OnboardingMain.jsx"));
const CreateEvent = lazy(() => import("./components/dashboard/createEvent/CreateEvent.jsx"));
const OnboardEvent = lazy(() => import("./components/dashboard/OnboardingMain/OnboardingMain.jsx"));
const OnboardingMain1 = lazy(() => import("./components/dashboard/OnboardingMain1/OnboardingMain1.jsx"));
// const SettingsPage = lazy(() => import("../features/settings/SettingsPage.jsx"));

import { SignUp } from "./components/signup/SignUp.jsx";
import { LogIn } from "./components/LogIn/LogIn.jsx";
import VerifyAcc from './components/signup/VerifyAcc.jsx';
import SetAcc from './components/signup/SetAcc.jsx';
import ForgotPassword from './components/signup/ForgotPassword.jsx';
import TermsSer from './components/TermsSer/TermsSer.jsx';
import Privacypolicy from './components/privacypolicy/Privacypolicy.jsx';
import VerifyAcc2 from './components/signup/VerifyAcc2.jsx';
import CreateAcc from './components/signup/CreateAcc.jsx';
import SuccessAcc from './components/signup/SuccessAcc.jsx';
import Herocontainer from "./components/Landingcont/herocontainer/Herocontainer.jsx";
import ReviewEvent from "./components/dashboard/createEvent/ReviewEvent.jsx";
import Details from "./components/dashboard/createEvent/Detailsoldw.jsx";
import SettingsPage from "./components/dashboard/SettingsPage/SettingsPage.jsx";
import Applayout from "./components/Landingcont/layout/Applayout.jsx";
import AccountInfo from "./components/dashboard/SettingsPage/AccountInfo.jsx";
import MyEvent from "./components/dashboard/OnboardingMain/MyEvent.jsx";
import MyEventDetails from "./components/dashboard/OnboardingMain/MyEventDetails.jsx"
import MyEventFullDetail from "./components/dashboard/OnboardingMain/MyEventFullDetail.jsx"
import Support from "./components/Landingcont/Footer/Support.jsx";
import About from "./components/About/About.jsx"
import Footer from "./components/Landingcont/Footer/Footer.jsx";
import Footer2 from "./components/Landingcont/Footer/Footer2.jsx";
 import Finance from "./components/dashboard/OnboardingMain/Finance.jsx";
import WithdrawalHistory from "./components/dashboard/OnboardingMain/WithdrawalHistory.jsx";
import WithdrawFund from "./components/dashboard/OnboardingMain/WithdrawFund.jsx";
import WithdrawalSuccessfully from "./components/dashboard/OnboardingMain/WithdrawalSuccessfully.jsx";
import ConfirmWithdrawal from "./components/dashboard/OnboardingMain/ConfirmWithdrawal.jsx";
import ChangePassword from "./components/dashboard/SettingsPage/ChangePassword.jsx";

const Spinner =()=> {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="animate-spin rounded-full h-24 w-24 border-t-8 border-blue-500 border-solid border-r-transparent"></div>
    </div>
  );
}

function App() {





  return (
    <>
      <Suspense
        fallback={
          Spinner()
          // <div className="font-poppins text-center text-4xl font-semibold text-red-600">
          //   Please wait...
          // </div>
        }
      >
  <ToastContainer 
    position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark"
  
  
  />
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

        


          {/* Standalone  route */}
          <Route path="/states/:countryId" element={<Herocontainer />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/VerifyAcc" element={<VerifyAcc />} />
          <Route path="/SetAcc" element={<SetAcc />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/VerifyAcc2" element={<VerifyAcc2 />} />
          <Route path="/CreateAcc" element={<CreateAcc />} />
          <Route path="/SuccessAcc" element={<SuccessAcc />} />
          <Route path="/Login" element={<LogIn />} />
        
        

  <Route
           path="/About"
            element={
           < div> 
           <About/>
              <Footer/>
          
            </div>}
                       
          />
  <Route
           path="/TermsSer"
            element={
           < div> 
           <TermsSer />
              <Footer2/>
          
            </div>}
                       
          />
  <Route
           path="/Privacypolicy"
            element={
           < div> 
           <Privacypolicy />
              <Footer2/>
          
            </div>}
                       
          />

          {/* <Route path="/TermsSer" element={<TermsSer />} /> */}
          <Route path="/privacypolicy" element={<Privacypolicy />} />
         
         
          <Route path="/OnboardingMain" element={<OnboardingMain />} />
          <Route path="/OnboardingMain1" element={<OnboardingMain1 />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/OnboardEvent" element={<OnboardEvent />} />
          {/* <Route path="/createEvent" element={<CreateEvent />} /> */}
          <Route path="/ReviewEvent" element={<ReviewEvent />} />
          <Route path="/Details" element={<Details />} />


          <Route path="/MyEvent" element={<MyEvent />} />
          <Route path="/MyEventFullDetail" element={<MyEventFullDetail />} />
          <Route path="/MyEventDetails" element={<MyEventDetails />} />
          <Route path="/MyEventDetails/:id" element={<MyEventFullDetail />} />

          <Route path="/settingsPage" element={<SettingsPage/>} />
    <Route path="/Support" element={<Support />} />
          <Route path="/About" element={<About />} />
  <Route path="/Finance" element={<Finance />} />
  <Route path="/WithdrawalHistory" element={<WithdrawalHistory />} />
  <Route path="/WithdrawFund" element={<WithdrawFund/>} />
  <Route path="/WithdrawalSuccessfully" element={<WithdrawalSuccessfully/>} />
  <Route path="/ConfirmWithdrawal" element={<ConfirmWithdrawal/>} />
  <Route path="/ChangePassword" element={<ChangePassword/>} />

         

       
          {/* Define the route here */}


          {/* <Route path="/Eventsdetailshome/:eventID" element={<Eventsdetailshome />} /> */}





        </Routes>

      </Suspense>
    </>
  );
}

export default App;