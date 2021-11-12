import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AddCircleOutlined, MenuBook } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { fontSize } from '@mui/system';

const useStyles = makeStyles((theme)=>({
    footerMenu:{
        [theme.breakpoints.down("lg")]:{
            width:"100%",
            position: 'fixed',
            bottom: 0, left: 0, right: 0 
        },
        [theme.breakpoints.up("lg")]:{ 
            display:"none"
        }
       },

}));

const Footer = ({history}) => {
    const [value, setValue] = React.useState(history.location.pathname);
    const classes = useStyles();
    
    return (
        <Box className={classes.footerMenu}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
            <BottomNavigationAction component={Link} to="/blogs" value="/blogs"  label="Blogs" icon={<MenuBook/>} />
            <BottomNavigationAction component={Link} to="/create" value="/create"  label="New Blog"   icon={<AddCircleOutlined />} />
            </BottomNavigation>
      </Box>
    )
}

export default Footer
