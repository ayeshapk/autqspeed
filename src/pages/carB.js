import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { mainCarData, smallBanner } from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBanner from "../container/SmallBanner"
import TableDataB from "../container/TableDataB"
import Paper from "@material-ui/core/Paper"

const CarB = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carB.title} />
      <SmallBanner bannerItem={smallBanner.bannerB}/>
      <br />
      <h1 style={{textAlign:'center'}}>{mainCarData.carB.name}</h1>
      <Typography style={{textAlign:'center'}}>{mainCarData.carB.description}</Typography>
      <TableDataB />
      <br />
      <Typography>Image</Typography>
      <br />
      <div>
        <img src={mainCarData.carB.image}  alt={mainCarData.carB.title}/>
      </div>
      <Paper style={{padding:"2%"}}>
      <Typography>{mainCarData.carC.text}</Typography>
      </Paper>
      <br />
      <Link to={mainCarData.carC.link}>{mainCarData.carC.linkData}</Link>
    </Layout>
  </div>
)

export default CarB
