import React from 'react'
import Header from './components/header/Header'
import ServicesSection from './components/services/ServicesSection'
import Testimonials from './components/testimonials/Testimonials'
import Faqs from './components/faqs/Faqs'

const page = () => {
  return (
    <>
      <Header/>
      <ServicesSection/>
      <Testimonials/>
      <Faqs/>
    </>
  )
}

export default page

