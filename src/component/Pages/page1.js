import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Back1 from '../../Images/image7.jpg';
import comp from '../../Images/logos.png';
import NavBar from '../Composant/NavBar';

const Buttone = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  width: '204px',
  height: '40px',
  fontSize: 16,
  padding: '6px 12px',
  // border: '2px solid black',
  lineHeight: 1.5,
  borderRadius: '5px',
  boxShadow: '0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7',
  backgroundColor: '#435EF7',
  //  borderColor: '#000000',
  color: 'white',
  fontFamily: '',
  '&:hover': {
    backgroundColor: '#435EF7',
    boxShadow: '0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7',
    //  borderColor: '#0062cc',
    //boxShadow: 'none',
  },

});
const useStyles = makeStyles((theme) => ({
  vide: {
    height: "80px",
  },
  Corp1: {
    width: '98.9vw',
    height: '90vh',
    backgroundImage: `url(${Back1})`
  },

  probButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    height: '80px',
    width: '350px',
    padding: '15px'
  },
  footer: {
    height: '100px',
    width: '98.9vw',
    backgroundColor: 'white',
    display: 'flex',
    flexItems: 2,
    position: 'absolute',
    bottom: '0px',
    flexdirection: 'row',
    justifycontent: 'flex-start',
    flexwrap: 'nowrap',
    alignitems: 'stretch',
    aligncontent: 'stretch',
  },
}));

export default function LandingPage() {
  const classes = useStyles();


  //************************************************* */
  return (
    <div >
        <div className={classes.Corp1}>
        <NavBar />
          <div>
            <div className={classes.vide}><Typography></Typography> </div>
            <Typography style={{ fontFamily: " 'Prompt', sans-serif", color: 'black', fontSize: 48, fontWeight: 'bold', }} component="div" align={"center"}>
              Structured Solutions Provided
            </Typography>
            <Typography style={{ fontFamily: " 'Prompt', sans-serif", color: 'black', fontSize: 48, marginTop: '-20px', fontWeight: 'bold', }} component="div" align={"center"}>
              by Algerian Hands
            </Typography>
            <Typography style={{ fontFamily: " 'Prompt', sans-serif", color: '#7D87C0', fontSize: 16, marginTop: '10px' }} component="div" align={"center"}>
              We create Modern solutions for your Problems, and we
            </Typography>
            <Typography style={{ fontFamily: " 'Prompt', sans-serif", color: '#7D87C0', fontSize: 16 }} component="div" align={"center"}>
              builds an ultimate teams to work on them.
            </Typography>
          </div>
          <div className={classes.probButton}>
            <Buttone sx={{ fontFamily: " 'Prompt', sans-serif", flexGrow: 1, height: '50px', width: '320px', borderRadius: '5px' }} variant="contained" disableRipple
              onClick={(e) => {
                alert('clicked')
              }}
            >Do You Have a Problem ?</Buttone>
          </div>
          <div className={classes.footer}>
            <Typography style={{ fontFamily: " 'Prompt', sans-serif", color: 'black', flex: '25%', marginTop: '35px', fontSize: 16, color: '#9B9B9B' }} component="div" align={"center"}>
              Many Companies Trust us
            </Typography>
            <img src={comp} style={{ width: '60%', height: '65%', flex: '25%', marginLeft: '10px', marginRight: '80px', marginTop: '15px' }} alt="fireSpot" />
          </div>
        </div>
    </div>

  );

  //******************************************** */
}