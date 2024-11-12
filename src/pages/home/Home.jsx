import React from 'react'
import Eventcoming from "../../components/eventcoming/Eventcoming.jsx"
import FeacturedEvents from '../../components/FeacturedEvents/FeacturedEvents.jsx'
import TrendingEvent from '../../components/TrendingEvent/TrendingEvent.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Herocontainer from "../../components/herocontainer/herocontainer.jsx"
import Amazing from "../../components/amazing/Amazing.jsx"
import Navbar from '../../components/navbar/Navbar.jsx'

const Home = () => {
  return (
    <div> 
      <Navbar/>
      <Herocontainer/>
      <Amazing />
      <Eventcoming />
      <FeacturedEvents />
      <TrendingEvent />
      <Eventcoming />
      <Footer />
    </div>
  )
}

export default Home