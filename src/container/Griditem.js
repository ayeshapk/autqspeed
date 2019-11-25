import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const carData = [
  {
    id:1,
    name: "Mazda",
    version: "3",
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574653795/28872587_1840641622637502_3855369617967748203_n_y75rcx.jpg',
    date:'12 nov 2017',
    link:'/carA/'
  },
  {
    id:2,
    name: "Nisson",
    version: "Note",
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574654810/72660065_2777626128939042_6995830804047724544_o_zvklyf.jpg',
    date:'9 dec 2018',
    link:'/carB/'
  },
  {
    id:3,
    name: "Toyota",
    version: "Aqua",
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574653796/45823334_2171481439553517_2539651863347724288_o_zsqpvl.jpg',
    date:'6 sep 2019',
    link:'/carC/',
  },
]

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
                 <Typography style={{textAlign:'right',paddingRight:'5%',paddingTop:'5%'}}> <Link style={{textDecoration: 'none'}} to={car.link}>See this car</Link></Typography>

                </div>
              </div>
            </Grid>
          )
        )))}
      </Grid>
  </div>
)

export default Griditem
