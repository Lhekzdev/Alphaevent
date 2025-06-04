import React from 'react'
import Section1a from '../OnboardEvent/Section1'
import Section1 from '../OnboardEvent/Section1a'
import Section2 from '../OnboardEvent/Section2'
import Section2a from '../OnboardEvent/Section2a'

import ProfileSearchBar from '../../dashboard/OnBoarding/ProfileSearchBar'
import Onboardingleft from '../../dashboard/onboardingleft/Onboardingleft'

const OnboardEvent = () => {
  return (
    <>

      <section className='flex'>
        <Onboardingleft />
        <div className='bg-[#F8F9FC]'> 
        
        <div ><ProfileSearchBar /></div>
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

export default OnboardEvent