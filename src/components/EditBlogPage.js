import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { editBlogFromDB, removeBlogFromDB } from '../actions/blogs'
import { Button, Container, Typography } from '@mui/material'
import { Delete, StarOutline } from '@mui/icons-material'
const EditBlogPage = (props) => {
    return (
        <div>
            <Container sx={{textAlign:"center",paddingTop:"5%"}}>
                <Typography variant="h6">
                    Edit Blog
                </Typography>
                <Button sx={{color:"gray"}} startIcon={<Delete/>} onClick={()=>{
                    props.dispatch(removeBlogFromDB(props.blog.id));
                    props.history.push("/blogs")
                }}></Button>
            </Container>
            <BlogForm 
                blog={props.blog} 
                onSubmit={(blog)=>{
                    props.dispatch(editBlogFromDB(props.blog.id,blog))
                    props.history.push("/blogs")
                }}
            
            />
            
        </div>
    )
}

const mapStatetoProps=(state,props)=>{
    return {
        blog:state.blogs.find((b)=>{
            return b.id===props.match.params.id
        })
    }
}

export default connect(mapStatetoProps)(EditBlogPage)
