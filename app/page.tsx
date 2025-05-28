import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { BenefitCards } from '@/components/sections/BenefitCards'
import { Benefits } from '@/components/sections/Benefits'
import { Contact } from '@/components/sections/Contact'
import { FAQ } from '@/components/sections/faq'
import { Hero } from '@/components/sections/Hero'
import Panels from '@/components/sections/scroll'
import { Services } from '@/components/sections/Services'
import { Testimonials } from '@/components/sections/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Benefits/>
      <BenefitCards/>
      <Panels/>
    
      <Testimonials/>
      <FAQ/>
      <Contact/>
     
      <Footer/>
    </div>
  )
}

export default page
