import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  Corp8: {
    width: '98.9vw',
    height: '10vh',
    backgroundColor: "#1B1C31",
    [theme.breakpoints.down('1100')]: { height: '1300px', alignItems: 'center' },
  },
}));

export default function LandingPage() {
  const classes = useStyles();


  //************************************************* */
  return (
    <div >
        <div className={classes.Corp8} id="2">
          <div style={{ height: '60px', width: '98.9vw', paddingTop: '20px' }}>
            <Typography style={{ color: 'black', fontSize: 16, color: '#9B9B9B', marginLeft: '80px' }} component="div" align={"left"}>
              2022 MASS. All rights reserved. -- Privacy Policy - Terms of Services
            </Typography>
          </div>
        </div>
    </div>

  );

  //******************************************** */
}