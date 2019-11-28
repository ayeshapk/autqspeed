import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBannerA from "../container/SmallBanner"
import TableDataA from "../container/nouse/TableDataA"

const carAA= () => (
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
    <Link to={mainCarData.carA.link}>{mainCarData.carA.linkData}</Link>
  </Layout>
  </div>
)

export default carAA
