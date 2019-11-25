import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Car C" />
    <h1>Toyota Aqua</h1>
    <div>
      <img src={'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574653796/45823334_2171481439553517_2539651863347724288_o_zsqpvl.jpg'}  alt={'carA'}/>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
