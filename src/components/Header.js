import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const useStyles = makeStyles((theme)=>({
    navItem: {
      color: 'white',   
      textDecoration:"none",
      fontWeight:"500",
      fontFamily:"roboto",
      marginLeft:"5%"
     
    },
    navMid:{
      width:"50%"
    },
    logOutText:{
     [theme.breakpoints.down("lg")]:{
        fontSize:"0!important",
        minWidth:"0!important"
     }   
    },
    toggleForBlogsAndCreate:{
        [theme.breakpoints.down("lg")]:{
           display:"none!important",
           
        } 
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <header >
            <Box sx={{ flexGrow: 1, marginTop:"100px"}}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="white" component={Link}  to="/blogs"  sx={{ flexGrow: 1,textDecoration:"none" }}>
                            Blog-App
                        </Typography>
                        <Button component={Link} color="inherit" to="/blogs"  startIcon={<MenuBookIcon/>} className={classes.toggleForBlogsAndCreate}  >Blogs</Button>   
                        <Button component={Link} color="inherit" to="/create"  startIcon={<AddCircleOutlineIcon/>} className={classes.toggleForBlogsAndCreate}>Create</Button> 
                        <Button className={classes.logOutText} color="inherit" onClick={logout}  endIcon={<ExitToAppIcon/>}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

export default Header
