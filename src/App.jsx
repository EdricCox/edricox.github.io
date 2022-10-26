import React from 'react'
import Weather from './components/Weather/Weather'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Information from './components/Information/Information'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Weather />
      <Header />
      <Information />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
