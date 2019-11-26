import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import {carData,commonText} from "../data/Data"

const Griditem = () => (
  <div style={{padding:`20px`}}>
      <Grid container spacing={0} >
        {(carData) && (carData.map (car => (
          (
            <Grid
              item xs={12} sm={5} md={4}
              key={car.id}>
              <div style={{margin:'10px'}}>
                <div>
                  <Link to={car.link}>
                  <img
                    alt={car.image}
                    src={car.image}
                    style={{marginBottom:'0px'}}
                  />
                  </Link>
                </div>
                <div style={{margin:'5%'}}>
                  <Typography style={{color:'purple',fontSize:'32px'}}><Link style={{textDecoration: 'none'}} to={car.link}>{car.name} {car.version}</Link></Typography>
                </div>
                <div style={{margin:'5%'}}>
                  <Grid container spacing={0} >
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography>Name:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography>{car.name}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} >
                    <Grid item xs={12} sm={6} md={6}><Typography>Version:</Typography></Grid>
                    <Grid item xs={12} sm={6} md={6}><Typography>{car.version}</Typography></Grid>
                  </Grid>
                  <Grid container spacing={0} >
                    <Grid item xs={12} sm={6} md={6}><Typography>Date:</Typography></Grid>
                    <Grid item xs={12} sm={6} md={6}><Typography>{car.date}</Typography></Grid>
                  </Grid>
                  <hr style={{marginBottom:'5%',marginTop:'5%'}} />
                  <Typography>{car.description}</Typography>
                 <Typography style={{textAlign:'right',paddingRight:'5%',paddingTop:'5%'}}> <Link style={{textDecoration: 'none'}} to={car.link}>{commonText.seeMore}</Link></Typography>

                </div>
              </div>
            </Grid>
          )
        )))}
      </Grid>
  </div>
)

export default Griditem
