import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import chabab1 from '../../Images/Rectangle 207 (1).png';
import chabab2 from '../../Images/Rectangle 207.png';

const useStyles = makeStyles((theme) => ({

  vide2: {
    height: "50px",
  },
  
  Corp5: {
    width: '98.9vw',
    height: '70vh',
    backgroundColor: "#1F1614",
    [theme.breakpoints.down('1380')]: { height: '800px', },
    [theme.breakpoints.down('1100')]: { height: '1100px', },
    [theme.breakpoints.down('900')]: { height: '1600px', },
  },
  titreBleu2: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '550px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  head2: {
    fontFamily: " 'Prompt', sans-serif", color: 'white', fontSize: 32, width: '340px', marginLeft: 'auto', marginRight: '0px', fontWeight: 'bold',//backgroundColor:'red'
  },
  mission2: {
    fontFamily: " 'Prompt', sans-serif", color: 'white', fontSize: 32, width: '240px', marginLeft: '0px', marginRight: 'auto', fontWeight: 'bold',//backgroundColor:'black' 
  },
  desc2: {
    fontFamily: " 'Prompt', sans-serif", fontSize: 18, marginTop: '00px', color: '#FFFFFF',
  },
  boitebleu2: {
    height: "280px", width: "75vw", marginRight: 'auto', marginLeft: 'auto', marginTop: '40px', borderRadius: '10px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
  },
  content3: {
    marginTop: '0px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('1100')]: {
      display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)',

    },
  },
  EcritGauche3: {
    fontFamily: " 'Prompt', sans-serif",
    height: '280px',
    width: '22vw',
    marginLeft: '0px',
    // backgroundColor: 'green',
  },
  titre3: {
    fontFamily: " 'Prompt', sans-serif", fontSize: '20px', color: '#FFFFFF', fontWeight: 'bold', marginTop: '80px'
  },
  Text3: {
    fontFamily: " 'Prompt', sans-serif", marginTop: '8px', fontSize: '12px', color: '#FFFFFF'
  },
  Text4: {
    fontFamily: " 'Prompt', sans-serif", marginTop: '5px', fontSize: '14px', color: '#FFFFFF', fontWeight: 'bold', '&:hover': { cursor: 'pointer' },
  },
}));

export default function LandingPage() {
  const classes = useStyles();


  //************************************************* */
  return (
    <div >
      <div className={classes.Corp5} id="4">
        <div className={classes.vide2}><Typography></Typography> </div>
        <div className={classes.titreBleu2}>
          <Typography className={classes.head2} component="div" align={"center"}>
            We Like Hackathons...
          </Typography>
          <Typography className={classes.mission2} component="div" align={"center"}>
            Let’s Compete
          </Typography>
        </div>
        <Typography align={"center"}>
          <Box className={classes.desc2} align={"center"}>
            We like to join many hackathon as we coiuld so we can find problems ato solve plus
          </Box>
          <Box className={classes.desc2} align={"center"}>
            new teams anbd people to join us in MASS journey
          </Box>
        </Typography>
        <div className={classes.boitebleu2}>
          <div className={classes.content3}>
            <div style={{ width: '37.5vw', height: '280px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', }}>
              <div style={{ marginRight: '0px', marginLeft: '50px', width: '12vw' }}>
                <img src={chabab1} style={{
                  marginTop: '70px',
                  width: 140, height: 140, display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }} alt="fireSpot" />
              </div>
              <div className={classes.EcritGauche3}>
                <Typography component="div">
                  <Box className={classes.titre3}>
                    Digimact Hackathon
                  </Box>
                  <Box className={classes.Text3}>
                    Choosing the discover Oran Challenge we could win the Hackathon with our Solutoin Tahadi</Box>
                  <Box className={classes.Text4}>
                    Join us by Yourself {"( )"}
                  </Box>
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.content3}>
            <div style={{ width: '37.5vw', height: '280px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', }}>
              <div style={{ marginRight: '0px', marginLeft: '50px', width: '12vw' }}>
                <img src={chabab2} style={{
                  marginTop: '70px',
                  width: 140, height: 140, display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }} alt="fireSpot" />
              </div>
              <div className={classes.EcritGauche3}>
                <Typography component="div">
                  <Box className={classes.titre3}>
                    IWD Hackathon
                  </Box>
                  <Box className={classes.Text3}>
                    Choosing the discover Oran Challenge we could win the Hackathon with our Solutoin Tahadi</Box>
                  <Box className={classes.Text4}>
                    Join us with a Team {"( )"}
                  </Box>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );

  //******************************************** */
}