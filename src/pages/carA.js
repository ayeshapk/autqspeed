import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"

const CarA = () => (
  <Layout>
    <SEO title={mainCarData.carA.title} />
    <h1>{mainCarData.carA.name}</h1>
    <div>
      <img src={mainCarData.carA.image}  alt={mainCarData.carA.title}/>
    </div>
    <Typography>{mainCarData.carA.description}</Typography>
    <Link to={mainCarData.carA.link}>{mainCarData.carA.linkData}</Link>
  </Layout>
)

export default CarA
