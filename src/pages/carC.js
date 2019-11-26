import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"

const CarC = () => (
  <Layout>
    <SEO title={mainCarData.carC.title} />
    <h1>{mainCarData.carC.name}</h1>
    <div>
      <img src={mainCarData.carC.image}  alt={mainCarData.carC.title}/>
    </div>
    <Typography>{mainCarData.carC.description}</Typography>
    <Link to={mainCarData.carC.link}>{mainCarData.carC.linkData}</Link>
  </Layout>
)

export default CarC
