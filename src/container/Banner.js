import React from "react"
import Typography from "@material-ui/core/Typography"


const Banner = () => (
  <div>
    <div style={{position: 'relative',display: 'inline-block'}}>
      <img
        src={'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574653795/28872587_1840641622637502_3855369617967748203_n_y75rcx.jpg'}
        style={Object.assign({},{objectFit: 'cover',marginBottom:'-10px',height:'40vh',width:'300vh'})}
      />

        <Typography
          style={Object.assign({},
            {position: 'absolute',
              zIndex: '9',
              margin: '0 auto',
              left: 0,
              right: 0,textAlign: 'center',
              width: '60%',top: '30%'},{color:'yellow'},
            {fontSize:'55px',textAlign:'left'})}
        >
        Autqspeed
      </Typography>
    </div>
  </div>
)
export default Banner
