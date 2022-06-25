import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'
import BlogIndex from '../../components/Blog/BlogIndex'


export default function Blog() {
    return (
        <Layout>
            <BlogIndex/>
        </Layout>
    )
}
