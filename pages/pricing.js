import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import Pricingsection from '../components/Pricing/pricing'
import Testimonialsection from '../components/Pricing/Testimonials'



export default function Pricingpage() {
    return (

        <Layout>
            <Pricingsection />
            <Testimonialsection />
        </Layout>

    )
}