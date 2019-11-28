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
import Grid from "@material-ui/core/Grid/Grid"

const CarC = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carC.title} />
      <SmallBanner bannerItem={smallBanner.bannerC}/>
      <br />
      <h1 style={{textAlign:'center'}}>{mainCarData.carC.name}</h1>

      <TableData rows={carTable.rowC}/>
      <br />
      <Grid  container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <h1 style={{textAlign:'center'}}>MODELS</h1>
            {mainCarData.carC.models&&<div style={{padding:'10px'}}>
              {mainCarData.carC.models&&mainCarData.carC.models.map(models => (<Typography key={models.model}>►{models.model}</Typography>))}
            </div>}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <h1 style={{textAlign:'center'}}>ACCESSORY OPTIONS</h1>
            {mainCarData.carC.accessory_Options&&<div style={{padding:'10px'}}>
              {mainCarData.carC.accessory_Options&&mainCarData.carC.accessory_Options.map(accessory_Options => (<Typography  key={accessory_Options.option}>►{accessory_Options.option}</Typography>))}
            </div>}
          </Paper>
        </Grid>
      </Grid>
      <Typography>Image</Typography>
      <br />
      <div style={{textAlign:'center'}}>
        <img src={mainCarData.carC.image}  alt={mainCarData.carC.title}/>
      </div>
      <Paper style={{padding:"2%"}}>
      <Typography>{mainCarData.carC.text}</Typography>
      </Paper>
      <br />
      <h1 style={{textAlign:'center'}}>Feature</h1>
      <div style={{textAlign:'center'}}>
        <img src={mainCarData.carC.features}  alt={mainCarData.carC.features}/>
      </div>
      <br />
      <Link to={mainCarData.carC.link}>{mainCarData.carC.linkData}</Link>
    </Layout>
  </div>
)

export default CarC
