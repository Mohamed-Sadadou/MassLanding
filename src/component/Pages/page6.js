import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({

  vide2: {
    height: "50px",
  },
  Corp6: {
    width: '98.9vw',
    height: '50vh',
    backgroundColor: "#1B1C31",
    [theme.breakpoints.down('1100')]: { height: '1300px', alignItems: 'center' },
  },

}));

export default function LandingPage() {
  const classes = useStyles();
  //************************************************* */
  return (
    <div>
      <div className={classes.Corp6} id="2">
        <div className={classes.vide2}><Typography></Typography> </div>
        <Typography style={{ color: 'white', fontSize: '44px', marginTop: '10px', fontWeight: 'bold' }} component="div" align={"center"} className={classes.ecrit}>
          Join millions of
        </Typography>
        <Typography style={{ color: 'white', fontSize: '44px', marginTop: '-5px', fontWeight: 'bold', marginBottom: '60px', }} component="div" align={"center"}>
          creative people with MASS
        </Typography>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '200px', height: '45px', marginTop: '-20px' }}>
          <Button style={{ fontFamily: " 'Prompt', sans-serif", width: '200px', height: '45px', backgroundColor: '#F9896B', borderRadius: '0px', color: '#121313', fontWeight: 'bold' }} variant="contained" endIcon={<ArrowRightAltIcon sx={{ color: '#121313' }} />}>
            Join The Waitlist
          </Button>
        </div>
      </div>
    </div>

  );

  //******************************************** */
}