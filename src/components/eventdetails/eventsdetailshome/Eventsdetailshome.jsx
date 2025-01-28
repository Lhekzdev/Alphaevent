import React from 'react'
import Eventsdetailshero from '../Eventsdetailshero/Eventsdetailshero'
import EventSchedule from '../Eventsdetailshero/EventSchedule.jsx'
import Eventicket from '../eventticket/Eventticket.jsx'
import TrendingEvents from "../TrendingEvent/TrendingEvent.jsx"

const Eventsdetailshome = () => {
  return (
    <div>
      <Eventsdetailshero />
      <TrendingEvents />
    </div>

  )
}

export default Eventsdetailshome