import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  
  Corp7: {
    width: '98.9vw',
    height: '60vh',
    border: '2px solid #404444',
    backgroundColor: "#1B1C31",
    [theme.breakpoints.down('1100')]: { height: '1300px', alignItems: 'center' },
  },
  Title: {
    fontFamily: " 'Prompt', sans-serif", fontSize: '20px', color: '#FFFFFF', fontWeight: 'bold', marginTop: '50px'
  },
  Links: {
    fontFamily: " 'Prompt', sans-serif", fontSize: '14px', color: '#FFFFFF', marginTop: '20px', '&:hover': { cursor: 'pointer' },
  },
  desci: {
    fontFamily: " 'Prompt', sans-serif", fontSize: '14px', color: '#9B9B9B', marginTop: '25px', width: '26vw'
  },
}));

export default function LandingPage() {
  const classes = useStyles();


  //************************************************* */
  return (
    <div >  
        <div className={classes.Corp7} id="2">
          <div style={{ width: '80vw', height: '320px', display: 'grid', marginRight: 'auto', marginLeft: 'auto', marginTop: '40px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div style={{ paddingRight: '40px', width: '35vw', height: '320px', }}>
              <Typography component="div">
                <Box className={classes.Title}>
                  MASS
                </Box>
                <Box className={classes.desci}>
                  Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</Box>

              </Typography>
            </div>
            <div style={{ width: '15vw', height: '320px', }}>
              <Typography component="div">
                <Box className={classes.Title}>
                  Company
                </Box>
                <Box className={classes.Links}>
                  About Us
                </Box>
                <Box className={classes.Links}>
                  Careers
                </Box>
                <Box className={classes.Links}>
                  Blog
                </Box>
              </Typography>
            </div>
            <div style={{ width: '15vw', height: '320px', }}>
              <Typography component="div">
                <Box className={classes.Title}>
                  Product
                </Box>
                <Box className={classes.Links}>
                  Servy
                </Box>
                <Box className={classes.Links}>
                  Tahadi
                </Box>
                <Box className={classes.Links}>
                  Comming soon...
                </Box>
              </Typography>
            </div>
            <div style={{ width: '20vw', height: '320px', }}>
              <Typography component="div">
                <Box className={classes.Title}>
                  Resources
                </Box>
                <Box className={classes.Links}>
                  Design Systems
                </Box>
                <Box className={classes.Links}>
                  Managment
                </Box>
                <Box className={classes.Links}>
                  IT
                </Box>
                <Box className={classes.Links}>
                  Service
                </Box>
              </Typography>
            </div>
          </div>
        </div>
    </div>

  );

  //******************************************** */
}