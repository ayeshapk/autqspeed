import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBannerA from "../container/SmallBannerA"
import TableDataA from "../container/TableDataA"

const CarA = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carA.title} />
      <SmallBannerA />
      <br />
      <h1 style={{textAlign:'center'}}>{mainCarData.carA.name}</h1>
      <Typography style={{textAlign:'center'}}>{mainCarData.carA.description}</Typography>
      <TableDataA />
      <br />
      <Typography>Image</Typography>
      <br />
      <div>
        <img src={mainCarData.carA.image}  alt={mainCarData.carA.title}/>
      </div>
      <Typography>{mainCarData.carC.text}</Typography>
      <br />
      <Link to={mainCarData.carC.link}>{mainCarData.carC.linkData}</Link>
    </Layout>
  </div>
)

export default CarA
