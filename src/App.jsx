
import Navbar from "./components/navbar/Navbar.jsx"
import Herocontainer from "./components/herocontainer/Herocontainer.jsx"
import Amazing from "./components/amazing/Amazing.jsx"
import Eventcoming from "./components/eventcoming/Eventcoming.jsx"
import FeacturedEvents from './components/FeacturedEvents/FeacturedEvents.jsx'
import TrendingEvent from './components/TrendingEvent/TrendingEvent.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Herocontainer />
      <Amazing />
      <FeacturedEvents />
      <TrendingEvent />
      <Eventcoming />
      <Footer />
    </>


  )
}

export default App
