import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Car A" />
    <h1>Mazda</h1>
    <div>
      <img src={'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574653795/28872587_1840641622637502_3855369617967748203_n_y75rcx.jpg'}  alt={'carA'}/>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
