import React from "react"
import Typography from "@material-ui/core/Typography"

const Banner = ({bannerItem}) => (
  <div>
    <div style={{position: 'relative',display: 'inline-block'}}>
      <img
        src={bannerItem.image}
        alt={bannerItem.image}
        style={Object.assign({},{objectFit: 'cover',marginBottom:'-10px',height:'40vh',width:'300vh'})}
      />

        <Typography
          style={Object.assign({},
            {position: 'absolute',
              zIndex: '9',
              margin: '0 auto',
              left: '1%',
              textAlign: 'center',
              bottom: '1%'},{color:'#333333',backgroundColor:'#ffffff6b'},
            {fontSize:'55px',textAlign:'left'})}
        >
        {bannerItem.text}
      </Typography>
    </div>
  </div>
)
export default Banner
