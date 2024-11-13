import React from 'react'
import Herocontainer from "../herocontainer/Herocontainer.jsx"
import Amazing from "../amazing/Amazing.jsx"
import Eventcoming from '../eventcoming/Eventcoming.jsx'
import FeacturedEvents from '../FeacturedEvents/FeacturedEvents.jsx'
import TrendingEvent from '../TrendingEvent/TrendingEvent.jsx'
const Landing = () => {
  return (
    <div> 

         <Herocontainer /> 
         <Amazing/>
         <Eventcoming/>
      <Amazing />
      <FeacturedEvents />
      <TrendingEvent />
     
    </div>
  )
}

export default Landing