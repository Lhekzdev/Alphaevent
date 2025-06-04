import React from 'react'
import Onboardingleft from '../onboardingleft/Onboardingleft.jsx'
import ProfileSearchBar from '../../dashboard/OnBoarding/ProfileSearchBar.jsx'
import OnBoarding from '../../dashboard/OnBoarding/OnBoarding.jsx'

const OnboardingMain = () => {
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

export default OnboardingMain