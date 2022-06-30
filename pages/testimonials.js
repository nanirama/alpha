import { fetchAPI } from '../lib/api'
import Layout from '../components/layout'
import FaqIndex from '../components/FAQ'


import Testimonialsection from '../components/Testimonials/Testimonials'

export default function Testimonialspage(props) {    
    return (
        <Layout>
            <Testimonialsection data={props.data} />
        </Layout>

    )

}

export async function getStaticProps() {
    const res = await fetchAPI('/api/testimonies?populate=*')
    return {
      props: {
        data: res.data
      },
    }
  }

