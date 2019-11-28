import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBanner from "../container/SmallBanner"
import Paper from "@material-ui/core/Paper"
import {smallBanner} from "../data/Data"
import { carTable } from "../data/Function"
import TableData from "../container/TableData"

const CarC = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carC.title} />
      <SmallBanner bannerItem={smallBanner.bannerB}/>
      <br />
      <h1 style={{textAlign:'center'}}>{mainCarData.carC.name}</h1>
      <Typography style={{textAlign:'center'}}>{mainCarData.carC.description}</Typography>
      <TableData rows={carTable.rowC}/>
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
