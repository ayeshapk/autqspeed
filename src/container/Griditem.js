import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Paper } from "@material-ui/core"

const Griditem = ({carData,commonText}) => (
  <div style={{padding:`20px`}}>
      <Grid container spacing={0} >
        {(carData) && (carData.map (car => (
          (
            <Grid item xs={12} sm={5} md={4} key={car.id}>
              <Paper style={{margin:'10px'}}>
                <div>
                  <Link to={car.link}>
                    <div style={{position: 'relative',
                      textAlign: 'center',
                      color: 'white',backgroundColor:'#550080'}}>
                      <img
                        alt={car.image}
                        src={car.image}
                        style={{marginBottom:'0px', }}
                      />
                      <div style={{ borderRadius: '0px 20px 0px 0px',position: 'absolute',
                        bottom: '0px',
                        minWidth:'220px',
                        left: '0px',backgroundColor:'#550080'}}>price:{car.price}</div>
                    </div>
                  </Link>
                </div>
                <div style={{margin:'5%'}}>
                  <Typography style={{color:'purple',fontSize:'32px'}}><Link style={{textDecoration: 'none'}} to={car.link}>{car.name} </Link></Typography>
                </div>
                <div style={{margin:'5%'}}>
                  <Grid container spacing={0} >
                    <Grid item xs={12} sm={4} md={4}>
                      <Typography>Name:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                      <Typography>{car.name}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} >
                    <Grid item xs={12} sm={4} md={4}><Typography>Model:</Typography></Grid>
                    <Grid item xs={12} sm={8} md={8}>
                      {car.version&&car.version.map(v => (
                        (<div key={v.id}>
                          <Typography> ► {v.ver}</Typography>
                        </div>)))
                      }
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} >
                    <Grid item xs={12} sm={4} md={4}><Typography>Date:</Typography></Grid>
                    <Grid item xs={12} sm={8} md={8}><Typography>{car.date}</Typography></Grid>
                  </Grid>
                  <hr style={{marginBottom:'5%',marginTop:'5%'}} />

                  {car.highlight&&<div>
                    <Typography>HighLight</Typography>
                    <br />
                    {car.highlight&&car.highlight.map(h => (
                      <Typography key={h.id}>►{h.text}</Typography>
                    ))}
                  </div>}

                  <Typography style={{textAlign:'right',padding:'5%'}}> <Link style={{textDecoration: 'none'}} to={car.link}>{commonText.seeMore}</Link></Typography>
                </div>
              </Paper>
            </Grid>
          )
        )))}
      </Grid>
  </div>
)

export default Griditem
