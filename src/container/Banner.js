import React from "react"

const Banner = ({banner}) => (
  <div>
    <div style={{position: 'relative',display: 'inline-block'}}>
      <img
        src={banner.image}
        alt={banner.image}
        style={Object.assign({},{objectFit: 'cover',marginBottom:'-10px',height:'40vh',width:'300vh'})}
      />

      {/*<Typography
          style={Object.assign({},
            {position: 'absolute',
              zIndex: '9',
              margin: '0 auto',
              left: 0,
              right: 0,textAlign: 'center',
              width: '60%',top: '30%'},{color:'yellow'},
            {fontSize:'55px',textAlign:'left'})}
        >
        {banner.text}
      </Typography>*/}
    </div>
  </div>
)
export default Banner
