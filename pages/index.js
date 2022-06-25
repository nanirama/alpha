import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Stats from '../components/Home/Stats'
import SuccessStories from '../components/Home/SuccessStories'
import Logos from '../components/Home/Logos'
import OurServices from '../components/Home/OurServices'
import Testimonials from '../components/Home/Testimonial'
import Cta from '../components/Home/Cta'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Stats />
      <SuccessStories/>
      <Logos />
      <OurServices />
      <Testimonials />
    </Layout>
  )
}
