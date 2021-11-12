import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    mycard:{
        [theme.breakpoints.down("md")]:{
            margin:"2% 0 0 0",
            maxWidth:"100%"
        },[theme.breakpoints.up("md")]:{
            margin:"1% 25% 0 25%",
            maxWidth:"50%"
        },
    }
}));


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const BlogDetailsItem = ({userName,id,title,description,imgUrl,dateAdded}) => {
    
    
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const classes = useStyles();
    let t=userName.split(" ")
    let avatar=t[0][0]+t[1][0]

    let desTop=description
    if(desTop.length>150)
        desTop=desTop.substring(0,150)+"..."
    

    return (
        <div>
            <Card className={classes.mycard}  >
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {avatar?avatar:null}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        
                    </IconButton>
                    }
                    title={title}
                    subheader={dateAdded}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={imgUrl}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="subtitle1" color="text.secondary">
                    {desTop}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                    <Typography variant="subtitle2" color="text.secondary">
                    More
                    </Typography>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" paragraph color="text.secondary">Details...</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}


export default BlogDetailsItem
