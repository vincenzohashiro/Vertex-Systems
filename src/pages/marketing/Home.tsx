import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AboutTeam from '../../components/marketing/AboutTeam'
import BeyondWebsites from '../../components/marketing/BeyondWebsites'
import ClientWork from '../../components/marketing/ClientWork'
import ContactForm from '../../components/marketing/ContactForm'
import FlagshipProject from '../../components/marketing/FlagshipProject'
import Hero from '../../components/marketing/Hero'
import HowWeWork from '../../components/marketing/HowWeWork'
import SystemDemonstrations from '../../components/marketing/SystemDemonstrations'
import TechStack from '../../components/marketing/TechStack'
import WhatWeBuild from '../../components/marketing/WhatWeBuild'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const id = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (id) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <WhatWeBuild />
      <ClientWork />
      <FlagshipProject />
      <SystemDemonstrations />
      <BeyondWebsites />
      <HowWeWork />
      <TechStack />
      <AboutTeam />
      <ContactForm />
    </>
  )
}
