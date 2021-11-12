import Container from '@mui/material/Container';
import React from 'react'
import BlogList from './BlogList'

const BlogListPage = () => {
    return (
        <div>
            <Container fixed >
                <BlogList/>
            </Container>  
        </div>
    )
}

export default BlogListPage
