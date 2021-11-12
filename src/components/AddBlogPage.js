import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { addBlogToDatabase } from '../actions/blogs'
import { Typography } from '@mui/material'

const AddBlogPage = (props) => {
    
    return (
        <div>
            <Typography variant="h6" sx={{textAlign:"center",paddingTop:"5%"}}>
            Write New Blog
            </Typography>
            <BlogForm onSubmit={(blog)=>{
                props.dispatch(addBlogToDatabase(blog));
                props.history.push('/blogs')

            }}/>
        </div>
    )
}

export default connect()(AddBlogPage)
