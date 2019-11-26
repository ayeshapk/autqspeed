import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Griditem from "../container/Griditem"
import Banner from "../container/Banner"
import {commonText} from "../data/Data"
import { Typography } from "@material-ui/core"

const IndexPage = () => (
  <div>
    <Banner/>
  <Layout>
    <SEO title="Home" />
    <h1>{commonText.siteName}</h1>
    <Typography>{commonText.siteDescription}</Typography>
    <Griditem/>
    {/*<div style={{ maxWidth: `300px`,maxHeight: `300px`, marginBottom: `1.45rem` }}>
      <p>Mazda</p>
      <Link to="/carA/">See this car</Link>
      <img src={'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574653795/28872587_1840641622637502_3855369617967748203_n_y75rcx.jpg'}  alt={'carA'}/>
    </div>
    <div style={{ maxWidth: `300px`,maxHeight: `300px`, marginBottom: `1.45rem` }}>
      <p>Nisson Note</p>
      <Link to="/carB/">See this car</Link>
      <img src={'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574654810/72660065_2777626128939042_6995830804047724544_o_zvklyf.jpg'}  alt={'carB'}/>
    </div>
    <div style={{ maxWidth: `300px`,maxHeight: `300px`, marginBottom: `1.45rem` }}>
      <p>Toyota Aqua</p>
      <Link to="/carC/">See this car</Link>
      <img src={'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574653796/45823334_2171481439553517_2539651863347724288_o_zsqpvl.jpg'}  alt={'carC'}/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
  </div>
)

export default IndexPage
