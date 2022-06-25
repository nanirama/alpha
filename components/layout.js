import Header from "./header"
import Footer from "./footer"
import Seo from "./seo"

const Layout = ({ children, seo }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout