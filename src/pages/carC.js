import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBannerC from "../container/SmallBannerC"
import TableDataC from "../container/TableDataC"
import Paper from "@material-ui/core/Paper"

const CarC = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carC.title} />
      <SmallBannerC />
      <br />
      <h1 style={{textAlign:'center'}}>{mainCarData.carC.name}</h1>
      <Typography style={{textAlign:'center'}}>{mainCarData.carC.description}</Typography>
      <TableDataC />
      <br />
      <Typography>Image</Typography>
      <br />
      <div>
        <img src={mainCarData.carC.image}  alt={mainCarData.carC.title}/>
      </div>
      <Paper style={{padding:"2%"}}>
      <Typography>{mainCarData.carC.text}</Typography>
      </Paper>
      <br />
      <Link to={mainCarData.carC.link}>{mainCarData.carC.linkData}</Link>
    </Layout>
  </div>
)

export default CarC
