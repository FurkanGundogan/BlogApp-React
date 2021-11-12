import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const useStyles = makeStyles((theme)=>({
    forUl:{
        [theme.breakpoints.down("lg")]:{
            padding:"0"
        },
       },

}));

const BlogList = (props) => {
    const classes = useStyles();
    return (
        <ul className={classes.forUl}>
            <Grid container marginBottom="15px">
                <Grid item xs={4}>
                    <Typography textAlign="center" variant="h6">
                        Blog Title
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography textAlign="center" variant="h6">
                        Details
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography textAlign="center" variant="h6">
                        Edit Blog
                    </Typography>
                </Grid>
            </Grid>
            {props.blogs.map(blog =>{
                return <BlogListItem key={blog.id} {...blog}/>
            })}
            
        </ul>
    )
}

const mapStateToProps = (state) =>{
    return {
        blogs:state.blogs
    }
}

export default connect(mapStateToProps)(BlogList)
