import { NavigationOutlined } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import {login} from '../actions/auth'
import { makeStyles } from '@mui/styles';
import GoogleIcon from '@mui/icons-material/Google';

const useStyles = makeStyles((theme) => ({
    google:{
        fontSize:"medium!important",
    }
}));

const LoginPage = () =>{
    const classes = useStyles();
    return(
            <Container maxWidth="sm" fixed>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://image.winudf.com/v2/image1/Y29tLkppbGwuQ2FyLkNvb2xDaGV2cm9sZXRDYW1hcm9XYWxscGFwZXJfc2NyZWVuXzlfMTU0NzYzMTg5Ml8wNTg/screen-9.jpg?fakeurl=1&type=.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Blog App <GoogleIcon className={classes.google} />
                        </Typography> 
                        <Typography variant="body2" color="text.secondary"  >
                         You can start by logging in with your Google account.
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                    <Button variant="contained" endIcon={<NavigationOutlined/>} onClick={login} >Login</Button>
                    </CardActions>
                </Card>
            </Container>
        
    )
}

export default LoginPage;