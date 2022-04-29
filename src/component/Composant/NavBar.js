import * as React from 'react';
import { useContext, useState, useEffect, useLayoutEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../../Images/mass_barre_1.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import profil from '../../Images/profil.jpg'
/*import {
    useFonts,
    Prompt_100Thin,
    Prompt_100Thin_Italic,
    Prompt_200ExtraLight,
    Prompt_200ExtraLight_Italic,
    Prompt_300Light,
    Prompt_300Light_Italic,
    Prompt_400Regular,
    Prompt_400Regular_Italic,
    Prompt_500Medium,
    Prompt_500Medium_Italic,
    Prompt_600SemiBold,
    Prompt_600SemiBold_Italic,
    Prompt_700Bold,
    Prompt_700Bold_Italic,
    Prompt_800ExtraBold,
    Prompt_800ExtraBold_Italic,
    Prompt_900Black,
    Prompt_900Black_Italic,
  } from '@expo-google-fonts/prompt';
*/
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return (width);
}

const useStyles = makeStyles((theme) => ({
    Toolbar: {
        width: '98.9vw', backgroundColor: '#CED5FD', display: 'flex', flexdirection: 'row',
        [theme.breakpoints.down('900')]: { height: '20px' },
    },
    LogoBloc: {
        marginLeft: '40px', width: '36vw', //backgroundColor: 'black',
        [theme.breakpoints.down('900')]: { width: 80, height: 20, marginRight: 40, },
        [theme.breakpoints.down('600')]: {marginLeft: '0px',},
    },
    Logo: {
        width: 154, height: 34, marginRight: 40,
        [theme.breakpoints.down('900')]: { width: 80, height: 20, marginRight: 40, },
        [theme.breakpoints.down('600')]: {marginRight: '0px',},
    },
    Action: {
        color: 'black',
       // marginRight:'5px',
       '&:hover': {cursor: 'pointer'},
       // backgroundColor:'red',
    },
    ActionText: {
        fontFamily:" 'Prompt', sans-serif",
        fontSize: '15px',
        [theme.breakpoints.down('1380')]: { fontSize: '14px',},
        [theme.breakpoints.down('1100')]: { fontSize: '13px', },
        [theme.breakpoints.down('900')]: { fontSize: '12px', },
        [theme.breakpoints.down('800')]: { fontSize: '11px', },
        [theme.breakpoints.down('600')]: { fontSize: '10px', },
    },
    ActionBloc: {
        width: '22vw',
        minWidth:'22vw',
        //backgroundColor: 'red',
        marginLeft: '45px',
        
        [theme.breakpoints.down('1380')]: { fontSize: '14px',},
        [theme.breakpoints.down('1100')]: { fontSize: '13px', },
        [theme.breakpoints.down('900')]: { marginRight: '25px', },
        [theme.breakpoints.down('800')]: { fontSize: '11px', },
        [theme.breakpoints.down('600')]: {  marginLeft: '-25px',marginRight: '15px', },
        marginRight: '45px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    vide: {
        //backgroundColor: 'black',
        width: '18vw',
        marginRight: '20px',
        height: '40px',

    },
    ButtonBloc: {
      //  backgroundColor: 'black',
        width: '13vw',
        right: '0px',
        height: '40px',

        [theme.breakpoints.down('650')]: { marginRight: '0px', },
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

const ButtonSpe = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    width: '13vw',
    minWidth: '140px',
    height: '40px',
    fontSize: 16,
    padding: '6px 12px',
    border: '2px solid black',
    lineHeight: 1.5,
    borderRadius: '5px',
    backgroundColor: '#CED5FD',
    borderColor: '#000000',
    color: 'black',
    fontFamily:" 'Prompt', sans-serif",
    '&:hover': {
        backgroundColor: '#CED5FD',
        //borderColor: '#0062cc',
        boxShadow: 'none',
    },

});

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(false);
    const [width, setwidth] = React.useState(getWindowDimensions());
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();

        }, []);
        return size;
    }
    useWindowSize();
    return (
        <Box sx={{ flexGrow: 1, width: '98.9vw', }}>
            <AppBar position="static" elevation={0}>
                <Toolbar className={classes.Toolbar}>
                    <div className={classes.LogoBloc}>
                        <img src={Logo} className={classes.Logo} alt="fireSpot" />
                    </div>
                   
                    <div className={classes.ActionBloc}>
                    
                            <div className={classes.Action}>
                                <div className={classes.ActionText} onClick={(e) => { alert('clicked 1') }}>contact us</div>
                            </div>
                            <div className={classes.Action}>
                                <div className={classes.ActionText} onClick={(e) => { alert('clicked 2') }}>projects</div>
                            </div>
                            <div className={classes.Action}>
                                <div className={classes.ActionText} onClick={(e) => { alert('clicked 3') }} >who we are ?</div>
                            </div>
                   
                    </div>
                    {getWindowDimensions() > 830 &&
                        <div className={classes.vide}  >
                            <Typography></Typography>
                        </div>
                    }
                    <div className={classes.ButtonBloc}  >
                        <ButtonSpe variant="contained" disableRipple onClick={(e) => {
                            alert('clicked')
                        }}
                        >Join The Team</ButtonSpe>
                    </div>




                </Toolbar>
            </AppBar>
        </Box>
    );
}
