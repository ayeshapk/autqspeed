import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { mainCarData, smallBanner } from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBanner from "../container/SmallBanner"
import Paper from "@material-ui/core/Paper"
import { carTable } from "../data/Function"
import TableData from "../container/TableData"
import Grid from "@material-ui/core/Grid/Grid"

const CarB = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carB.title} />
      <SmallBanner bannerItem={smallBanner.bannerB}/>
      <br />
      <h1 style={{textAlign:'center'}}>{mainCarData.carB.name}</h1>

      <TableData rows={carTable.rowB}/>
      <br />
      <Grid  container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <h1 style={{textAlign:'center'}}>MODELS</h1>
            {mainCarData.carB.models&&<div style={{padding:'10px'}}>
              {mainCarData.carB.models&&mainCarData.carB.models.map(models => (<Typography  key={models.model}>►{models.model}</Typography>))}
            </div>}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <h1 style={{textAlign:'center'}}>ACCESSORY OPTIONS</h1>
            {mainCarData.carB.accessory_Options&&<div style={{padding:'10px'}}>
              {mainCarData.carB.accessory_Options&&mainCarData.carB.accessory_Options.map(accessory_Options => (<Typography  key={accessory_Options.option}>►{accessory_Options.option}</Typography>))}
            </div>}
          </Paper>
        </Grid>
      </Grid>
      <Typography>Image</Typography>
      <br />
      <div style={{textAlign:'center'}}>
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
