import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Composant/Paper';


const useStyles = makeStyles((theme) => ({
  
  vide2: {
    height: "50px",
  },
  Corp2: {
    width: '98.9vw',
    height: '100vh',
    backgroundImage: 'linear-gradient(#CED5FD, white)',
    [theme.breakpoints.down('1380')]: { height: '800px', },
    [theme.breakpoints.down('1100')]: { height: '1100px', },
    [theme.breakpoints.down('900')]: { height: '1600px', },
  },

  bloc: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',

    height: '450px',
    alignItems: 'center',
    width: '80vw',
    //backgroundColor:'red',
    display: 'Grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Cards: {

    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    [theme.breakpoints.down('1380')]: {
      marginLeft: '-80px',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('1100')]: {
      marginLeft: '-80px',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('900')]: {
      marginLeft: '-80px',
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();


  //************************************************* */
  return (
    <div >
      <div className={classes.Corp2} id="2">
        <div className={classes.vide2}><Typography></Typography> </div>
        <Typography style={{ fontFamily: " 'Prompt', sans-serif", color: '#757575', fontSize: 16 }} component="div" align={"center"}>
          Research, Design, Manage & Develope
        </Typography>
        <Typography style={{ fontFamily: " 'Prompt', sans-serif", color: 'black', fontSize: '38px', marginTop: '10px', fontWeight: 'bold' }} component="div" align={"center"} className={classes.ecrit}>
          Building Your Solution Step By Step from
        </Typography>
        <Typography style={{ fontFamily: " 'Prompt', sans-serif", color: 'black', fontSize: '38px', marginTop: '-5px', fontWeight: 'bold', marginBottom: '60px', }} component="div" align={"center"}>
          Sketches till Making Profits
        </Typography>

        <div className={classes.bloc}>
          <div className={classes.Cards}>
            <Card
              titre="Brainstorming sessions with the most creatives people."
              description="Every modern Problem have a Modern creative team for the solution."
              image='1'
              description2="Every modern Problem have a Modern creative team for the solution. Every modern Problem have a Modern creative team for the solution. "
            />
            <Card
              titre="Design your Solution and test it out."
              description="Build your brand and the visual identity plus the design system."
              image='2'
              description2="Every modern Problem have a Modern creative team for the solution. Every modern Problem have a Modern creative team for the solution. "
            />
            <Card
              titre="Special IT Team to move foward to the final results."
              description="Every Project has a Special Team for the building with it own Technologies."
              image='3'
              description2="Every modern Problem have a Modern creative team for the solution. Every modern Problem have a Modern creative team for the solution. "
            />
          </div>
        </div>
      </div>
    </div>

  );

  //******************************************** */
}