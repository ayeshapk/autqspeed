import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {mainCarData} from "../data/Data"
import { Typography } from "@material-ui/core"
import SmallBannerB from "../container/SmallBannerB"
import TableDataB from "../container/TableDataB"

const CarB = () => (
  <div>
    <Layout>
      <SEO title={mainCarData.carB.title} />
      <SmallBannerB />
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
      <Link to={mainCarData.carB.link}>{mainCarData.carB.linkData}</Link>
    </Layout>
  </div>
)

export default CarB
