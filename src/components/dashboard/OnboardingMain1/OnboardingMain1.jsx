import React from 'react'
import Onboardingleft from '../onboardingleft/Onboardingleft.jsx'
import ProfileSearchBar from '../OnBoarding/ProfileSearchBar.jsx'
import OnBoarding from '../OnBoarding/OnBoarding.jsx'

const Onboarding = () => {
  return (
    <>
    <section>
        <div className='flex' >
          <div className=''><Onboardingleft/></div>
       <div className=''><ProfileSearchBar />
        <OnBoarding /></div> 
        </div>
    </section>
    </>
  )
}

export default Onboarding