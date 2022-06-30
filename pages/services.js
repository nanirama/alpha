import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Hero from '../components/Services/Hero'
import Features from '../components/Services/Features'
import Trustedcompanies from '../components/Services/Trustedcompanies'
import Cta from '../components/Services/Cta'
import Startupsection from '../components/Services/Startup'
import Testimonials from '../components/Services/Testimonials'
import Blocksection from '../components/Services/Blocks'
import BoostProductivity from '../components/Services/BoostProductivity'
import FaqSectioninService from '../components/Services/Faq'



export default function Home(props) {
  return (
    <Layout>
      <Hero />
      <Features />
      <Trustedcompanies />
      <Cta />
      <Startupsection />
      <Testimonials />
      <Blocksection/>
      <BoostProductivity />
      <FaqSectioninService />
     
    </Layout>
  )
}
