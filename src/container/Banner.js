import React from "react"
import Typography from "@material-ui/core/Typography"


const Banner = () => (
  <div>
    <div style={{position: 'relative',display: 'inline-block'}}>
      <img
        src={'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574654810/72660065_2777626128939042_6995830804047724544_o_zvklyf.jpg'}
        style={Object.assign({},{objectFit: 'cover',marginBottom:'-10px',})}
      />
      <Typography
        style={Object.assign({},
          {position: 'absolute',
            zIndex: '9',
            margin: '0 auto',
            left: 0,
            right: 0,textAlign: 'center',
            width: '60%',top: '30%'},
          {fontSize:'55px',textAlign:'left'})}
       >
        Autqspeed
      </Typography>
    </div>
  </div>
)
export default Banner
