import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBanner from "../container/SmallBanner"
import TableDataA from "../container/TableDataA"
import Paper from "@material-ui/core/Paper"
import {smallBanner} from "../data/Data"

const CarA = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carA.title} />
      <SmallBanner bannerItem={smallBanner.bannerA}/>
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
      <Paper style={{padding:"2%"}}>
      <Typography>{mainCarData.carC.text}</Typography>
      </Paper>
      <br />
      <Link to={mainCarData.carC.link}>{mainCarData.carC.linkData}</Link>
    </Layout>
  </div>
)

export default CarA
