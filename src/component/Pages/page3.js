import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Langages from '../../Images/Group 47.png';

const Buttone2 = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  width: '360px',
  height: '50px',
  fontSize: '20px',
  padding: '6px 12px',
  lineHeight: 1.5,
  marginTop: '50px',
  borderRadius: '5px',
  boxShadow: '0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7',
  backgroundColor: '#1F1614',
  color: 'white',
  fontFamily: '',
  '&:hover': {
    backgroundColor: '#1F1614',
    boxShadow: '0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7',

  },

});
const useStyles = makeStyles((theme) => ({
  vide2: {
    height: "50px",
  },
  Corp3: {
    width: '98.9vw',
    height: '90vh',
    backgroundColor: "#F1F3FE",
    [theme.breakpoints.down('1380')]: { height: '800px', },
    [theme.breakpoints.down('1100')]: { height: '1100px', },
    [theme.breakpoints.down('900')]: { height: '1600px', },
  },
  content: {
    marginTop: '70px',
    display: 'grid',
    padding: '10px',
    height: '400px',
    width: '80vw',
    marginRight: 'auto',
    marginLeft: 'auto',
    // backgroundColor:'red',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('1100')]: {
      display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)',

    },
  },
  EcritGauche: {
    height: '400px',
    width: '35vw',
    marginLeft: '100px',
    marginRight: '40px',
    //backgroundColor: 'green',
  },
  titre: {
    fontFamily: " 'Prompt', sans-serif", fontSize: '37px', color: 'black', fontWeight: 'bold'
  },
  Text: {
    fontFamily: " 'Prompt', sans-serif", marginTop: '20px', fontSize: '20px', color: 'black'
  },
  imglan: {
    marginRight: '90px', width: 390, height: 380,
    [theme.breakpoints.down('1100')]: {
      marginTop: '340px',
      marginLeft: 'auto',
      marginRight: 'auto',

    },
  },
  Button2: {
    [theme.breakpoints.down('1100')]: {
      width: '360px', height: '10px',
      // backgroundColor:'red',
      //marginTop:'20px',
      marginLeft: '-10px',
      marginRight: 'auto',


    },
  }
}));

export default function LandingPage() {
  const classes = useStyles();


  //************************************************* */
  return (
    <div > 
        <div className={classes.Corp3} id="4">
          <div className={classes.vide2}><Typography></Typography></div>
          <div className={classes.content}>
            <div className={classes.EcritGauche}>
              <Typography component="div">
                <Box className={classes.titre}>
                  Modern Technologies Integration
                </Box>
                <Box className={classes.Text}>
                  Our Industrial Solutions package is for enterprise users who require hardware and API integration. Connect your prototype to multiple screens, devices, and hardware - such as gamepads and steering wheels.
                </Box>
              </Typography>
              <div className={classes.Button2}>
                <Buttone2 style={{ fontFamily: " 'Prompt', sans-serif", }} variant="contained" disableRipple onClick={(e) => { alert('clicked') }}>
                  Build Your Software Now
                </Buttone2>
              </div>
            </div>
            <div className={classes.imglan}>
              <img src={Langages} style={{
                width: 390, height: 380, display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }} alt="fireSpot" />
            </div>
          </div>
        </div>
    </div>
  );

  //******************************************** */
}