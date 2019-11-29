import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBanner from "../container/SmallBanner"
import TableData from "../container/TableData"
import Paper from "@material-ui/core/Paper"
import {smallBanner} from "../data/Data"
import {carTable} from "../data/Function"
import Grid from "@material-ui/core/Grid/Grid"

const VENTRAC_SSV = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carA.title} />
      <SmallBanner bannerItem={smallBanner.bannerA}/>
      <br />
      <h1 style={{textAlign:'center'}}>PRODUCT OVERVIEW</h1>
      <TableData rows={carTable.rowA}/>
      <br />
      <Grid  container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
          <h1 style={{textAlign:'center'}}>MODELS</h1>
            {mainCarData.carA.models&&<div style={{padding:'10px'}}>
              {mainCarData.carA.models&&mainCarData.carA.models.map(models => (<Typography key={models.id}>►{models.model}</Typography>))}
            </div>}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
          <h1 style={{textAlign:'center'}}>ACCESSORY OPTIONS</h1>
            {mainCarData.carA.accessory_Options&&<div style={{padding:'10px'}}>
              {mainCarData.carA.accessory_Options&&mainCarData.carA.accessory_Options.map(accessory_Options => (<Typography key={accessory_Options.id}>►{accessory_Options.option}</Typography>))}
            </div>}
          </Paper>
        </Grid>
      </Grid>
      <Typography>Image</Typography>
      <br />
      <div style={{textAlign:'center'}}>
        <img src={mainCarData.carA.image}  alt={mainCarData.carA.title}/>
      </div>
      <Paper style={{padding:"2%"}}>
      <Typography>{mainCarData.carC.text}</Typography>
      </Paper>
      <br />
      <h1 style={{textAlign:'center'}}>Feature</h1>
      <div style={{textAlign:'center'}}>
        <img src={mainCarData.carA.features}  alt={mainCarData.carA.features}/>
      </div>
      <br />
      <Link to={mainCarData.carC.link}>{mainCarData.carC.linkData}</Link>
    </Layout>
  </div>
)

export default VENTRAC_SSV
