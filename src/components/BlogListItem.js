import { Edit } from '@mui/icons-material'
import { Fab, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article';
const BlogListItem = ({id,title}) => {
    return (
        <>
                <Grid container spacing={2} marginBottom="15px">
                    <Grid item xs={4} textAlign="center">
                        <Typography variant="subtitle1">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="center">
                        <Fab size="small" color="primary" component={Link} to={`/blogs/${id}`} aria-label="edit">
                            <ArticleIcon/>
                        </Fab>
                    </Grid>
                    <Grid item xs={4} textAlign="center">
                        <Fab size="small" color="primary" component={Link} to={`/edit/${id}`} aria-label="edit">
                            <Edit/>
                        </Fab>
                    </Grid>
                </Grid>
            
        </>
    )
}

export default BlogListItem
