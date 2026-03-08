import React from 'react'
import Section2EE from './Section2EE'
import Section3EE from '../exploreEvents/Section3EE'
import ExploreEventsHero from '../exploreEvents/ExploreEventsHero'

const ExploreEvents = () => {
  return (
    <>
    <section className='bg-[#F3F5FA]'>
      <ExploreEventsHero />
        <Section2EE />
        <Section3EE />
    </section>
    </>
  )
}

export default ExploreEvents