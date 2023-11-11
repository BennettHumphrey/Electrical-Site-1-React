import React from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import InfoSection from './components/InfoSection'
import BubblesSection from './components/BubblesSection'
import Footer from './components/Footer'
import { about, services } from './assets/data'

function App() {

  return (
    <div className='h-full'>
      <Nav  />
      <Banner  />
      <InfoSection header = {services.header} />
      <BubblesSection bubbles = {services.bubbles} img = {services.img} />
      <InfoSection header = {about.header} body = {about.body} />
      <BubblesSection bubbles = {about.bubbles} img = {about.img} />
      <Footer  />
    </div>
  )
}

export default App
