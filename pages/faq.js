import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from '../lib/api'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import Sidebar from '../components/FAQ/sidebar'
import FaqIndex from '../components/FAQ'



export default function FAQ(props) {    
    return (
        <Layout>
            <FaqIndex data={props}/>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetchAPI('/api/faqs?populate=*')
    const cat_res = await fetchAPI('/api/faq-categories?populate=*')
    return {
      props: {
        faq: res.data,
        categories: cat_res.data
      },
    }
  }

