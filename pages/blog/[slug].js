import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import BlogMain from "../../components/Blog";


export default function Blog(props) {
    const { data } = props;
    console.log('Props', props)
    return (
      <Layout>
        <BlogMain data={data} />
      </Layout>
    );
  }


  export async function getStaticPaths() {
    const articles = await fetchAPI("/api/blogs/");
    return {
      paths: articles?.data?.map((article) => ({
        params: {
          slug: article?.attributes?.slug,
        },
      })),
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const { slug } = params;
    const blog = await fetchAPI(`/api/blogs?filters[slug][$eq]=${slug}&populate=*`)
    return {
      props: { data: blog.data[0] },
      revalidate: 1,
    };
  }
  