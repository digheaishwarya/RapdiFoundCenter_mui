import React from 'react'
import { Grid, Typography } from '@mui/material';
function Home() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 ms-1 h1">
          <h2>Rapid<span className="text-primary">Found</span><span>Center</span></h2>
         </span>
       </div>
      </nav>
        <Grid container spacing={2} className="pt-200">
        {/* Content on the left */}
        <Grid item xs={12} md={6}>
            <div>
            <Typography variant="h4" gutterBottom>
            We take your financial problem seriously.
            </Typography>
            <Typography variant="body1">
            Get started by submitting a loan request. Enter amount below between $100 - $10000.
            </Typography>
            </div>
        </Grid>

        {/* Image on the right */}
        <Grid item xs={12} md={6}>
            <img src="https://rapidfundcenter.com/static/assets/images/banner.svg" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        </Grid>

    </div>

    
  )

}


export default Home
