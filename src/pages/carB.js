import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"

const CarB = () => (
  <Layout>
    <SEO title={mainCarData.carB.title} />
    <h1>{mainCarData.carB.name}</h1>
    <div>
      <img src={mainCarData.carB.image}  alt={mainCarData.carB.title}/>
    </div>
    <Typography>{mainCarData.carB.description}</Typography>
    <Link to={mainCarData.carB.link}>{mainCarData.carB.linkData}</Link>
  </Layout>
)

export default CarB
