
import Navbar from "./components/navbar/Navbar.jsx"
import Herocontainer from "./components/herocontainer/Herocontainer.jsx"
import FeacturedEvents from './components/FeacturedEvents/FeacturedEvents.jsx'
import TrendingEvent from './components/TrendingEvent/TrendingEvent.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar/>
      <Herocontainer/>
      <FeacturedEvents />
      <TrendingEvent />
      <Footer />
      </>
     
    
  )
}

export default App
