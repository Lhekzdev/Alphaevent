import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ActiveLinkProvider } from "./components/dashboard/OnboardEvent/ActiveLinkContext.jsx";
 // ✅ Import context

// Lazy imports
const Landing = lazy(() => import("./components/Landingcont/landing/Landing.jsx"));
const Eventshome = lazy(() => import("./components/events/eventshome/Eventshome.jsx"));
const ExploreEvents = lazy(() => import("./components/events/exploreEvents/ExploreEvents.jsx"));
const Eventsdetailshome = lazy(() => import("./components/eventdetails/eventsdetailshome/Eventsdetailshome.jsx"));
const OnboardingMain = lazy(() => import("./components/dashboard/OnboardingMain/OnboardingMain.jsx"));
const CreateEvent = lazy(() => import("./components/dashboard/createEvent/CreateEvent.jsx"));
const OnboardEvent = lazy(() => import("./components/dashboard/OnboardEvent/OnboardEvent.jsx"));

// Static imports
import { SignUp } from "./components/signup/SignUp.jsx";
import { LogIn } from "./components/LogIn/LogIn.jsx";
import VerifyAcc from "./components/signup/VerifyAcc.jsx";
import VerifyAcc2 from "./components/signup/VerifyAcc2.jsx";
import SetAcc from "./components/signup/SetAcc.jsx";
import ForgotPassword from "./components/signup/ForgotPassword.jsx";
import TermsSer from "./components/TermsSer/TermsSer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import CreateAcc from "./components/signup/CreateAcc.jsx";
import SuccessAcc from "./components/signup/SuccessAcc.jsx";
import MyEvent from "./components/dashboard/OnboardEvent/MyEvent.jsx";
import MyEventDetails from "./components/dashboard/OnboardEvent/MyEventDetails.jsx";
import MyEventFullDetail from "./components/dashboard/OnboardEvent/MyEventFullDetail.jsx";

import "./App.css";
import Applayout from "./components/Landingcont/layout/Applayout.jsx";

function App() {
  return (
    <ActiveLinkProvider> {/* ✅ Wrap your entire app here */}
      <Suspense
        fallback={
          <div className="font-poppins text-center text-4xl font-semibold text-red-600">
            Please wait...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Applayout><Landing /></Applayout>} />
          <Route path="/Landing" element={<Applayout><Landing /></Applayout>} />
          <Route path="/eventshome" element={<Applayout><Eventshome /></Applayout>} />
          <Route path="/eventsdetailshome/:id" element={<Applayout><Eventsdetailshome /></Applayout>} />
          <Route path="/exploreEvents" element={<Applayout><ExploreEvents /></Applayout>} />
          <Route path="/exploreEvents/:id" element={<Applayout><ExploreEvents /></Applayout>} />

          {/* Auth routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/VerifyAcc" element={<VerifyAcc />} />
          <Route path="/VerifyAcc2" element={<VerifyAcc2 />} />
          <Route path="/SetAcc" element={<SetAcc />} />
          <Route path="/CreateAcc" element={<CreateAcc />} />
          <Route path="/SuccessAcc" element={<SuccessAcc />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/TermsSer" element={<TermsSer />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          {/* Dashboard routes */}
          <Route path="/OnboardingMain" element={<OnboardingMain />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/OnboardEvent" element={<OnboardEvent />} />
          <Route path="/MyEvent" element={<MyEvent />} />
          <Route path="/MyEventFullDetail" element={<MyEventFullDetail />} />
          <Route path="/MyEventDetails" element={<MyEventDetails />} />
          <Route path="/MyEventDetails/:id" element={<MyEventFullDetail />} />
        </Routes>
      </Suspense>
    </ActiveLinkProvider>
  );
}

export default App;
