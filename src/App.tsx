import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/sections/Navbar'
import Home from './pages/Home'
import JoinTalentPool from './pages/JoinTalentPool'
import RequestTalent from './pages/RequestTalent'
import Sponsorship from './pages/Sponsorship'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-talent-pool" element={<JoinTalentPool />} />
        <Route path="/request-talent" element={<RequestTalent />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
