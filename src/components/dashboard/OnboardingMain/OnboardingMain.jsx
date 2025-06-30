import React from 'react'
import Section1a from './Section1'
import Section1 from './Section1a'
import Section2 from './Section2'
import Section2a from './Section2a'

import ProfileSearchBar from '../OnBoarding/ProfileSearchBar'
import Onboardingleft from '../onboardingleft/Onboardingleft'

const OnboardingMain = () => {
  return (
    <>

      <section className='flex'>
        <Onboardingleft />
        <div className='bg-[#F8F9FC] flex flex-col gap-y-[24px]'>

          <div >
            <ProfileSearchBar />
          </div>
          <div>

            <Section1a />

            <Section2a />
            <Section2 />
            <Section1 />
          </div></div>
      </section>

    </>
  )
}

export default OnboardingMain