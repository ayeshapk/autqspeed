import React from "react"
import Typography from "@material-ui/core/Typography"
import {smallBanner} from "../data/Data"

const Banner = () => (
  <div>
    <div style={{position: 'relative',display: 'inline-block'}}>
      <img
        src={smallBanner.bannerA.image}
        alt={smallBanner.bannerA.image}
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
        {smallBanner.bannerA.text}
      </Typography>
    </div>
  </div>
)
export default Banner
