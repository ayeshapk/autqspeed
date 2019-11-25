import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Car B" />
    <h1>Nisson Note</h1>
    <div>
      <img src={'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574654810/72660065_2777626128939042_6995830804047724544_o_zvklyf.jpg'}  alt={'carA'}/>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
