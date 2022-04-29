import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import logos from '../../Images/Group 45.png';

const useStyles = makeStyles((theme) => ({
  vide2: {
    height: "50px",
  },
  Corp4: {
    width: '98.9vw',
    height: '90vh',
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down('1380')]: { height: '800px', },
    [theme.breakpoints.down('1100')]: { height: '1100px', },
    [theme.breakpoints.down('900')]: { height: '1600px', },
  },
  titreBleu: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  head: {
    fontFamily: " 'Prompt', sans-serif", color: 'black', fontSize: 32, width: '320px', marginLeft: 'auto', marginRight: '0px', fontWeight: 'bold',//backgroundColor:'red'
  },
  mission: {
    fontFamily: " 'Prompt', sans-serif", color: '#435EF7', fontSize: 32, width: '280px', marginLeft: '0px', marginRight: 'auto', fontWeight: 'bold',//backgroundColor:'black' 
  },
  desc: {
    fontFamily: " 'Prompt', sans-serif", fontSize: 24, marginTop: '00px', color: '#7D87C0',
  },
  boitebleu: {
    height: "420px", width: "65vw", marginRight: 'auto', marginLeft: 'auto', marginTop: '40px', borderRadius: '10px', backgroundColor: '#9DABFB'
  },
  content2: {
    marginTop: '0px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('1100')]: {
      display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)',

    },
  },
  EcritGauche2: {
    height: '400px',
    width: '30vw',
    margin: '70px',
    //backgroundColor: 'green',
  },
  titre2: {
    fontFamily: " 'Prompt', sans-serif", fontSize: '20px', color: '#15192D', fontWeight: 'bold'
  },
  Text2: {
    fontFamily: " 'Prompt', sans-serif", marginTop: '14px', fontSize: '14px', color: '#2E3664'
  },
  Textb: {
    fontFamily: " 'Prompt', sans-serif", marginTop: '25px', fontSize: '16px', color: '#AA222D', fontWeight: 'bold',
  },
}));
export default function LandingPage() {
  const classes = useStyles();
  //************************************************* */
  return (
    <div >
        <div className={classes.Corp4} id="4">
          <div className={classes.vide2}><Typography></Typography> </div>
          <div className={classes.titreBleu}>
            <Typography className={classes.head} component="div" align={"center"}>
              The Head Company,
            </Typography>
            <Typography className={classes.mission} component="div" align={"center"}>
              The Head Mission
            </Typography>
          </div>
          <Typography className={classes.desc} align={"center"}>
            we believe that we will make an ecosystem that contain the Algerian Digital Life
          </Typography>
          <div className={classes.boitebleu}>
            <div className={classes.content2}>
              <div className={classes.EcritGauche2}>
                <Typography component="div">
                  <Box className={classes.titre2}>
                    Solutions We Made To Fix Many People Lifes & Bring New Kind Of Experience To Our Growing Country.
                  </Box>
                  <Box className={classes.Text2}>
                    Algeria Deserve better quality products, products that can lead the young generation forward and create chances for those who want to show their skills.
                    Also We help people to achieve their dreams and build their future by their hands.</Box>
                  <Box className={classes.Textb}>
                    CHECK OUR PRODUCTS {"=>"}
                  </Box>
                </Typography>

              </div>
              <div style={{ marginRight: '90px', }}>
                <img src={logos} style={{
                  marginTop: '70px',
                  width: 240, height: 240, display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }} alt="fireSpot" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
  //******************************************** */
}