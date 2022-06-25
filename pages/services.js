import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Hero from '../components/Services/Hero'
import Features from '../components/Services/Features'
import Testimonials from '../components/Services/Testimonial'
import Cta from '../components/Services/Cta'

export default function Home() {
  return (
    <Layout>
   
     <Hero />
     <Features />
     <Testimonials />
     <Cta />
   
    </Layout>
  )
}
