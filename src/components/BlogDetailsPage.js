import React from 'react'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'


const BlogDetailsPage = (props) => {
    return (
        <BlogDetailsItem userName={props.userName} {...props.blog}/>
    )
}

const mapStatetoProps = (state,props)=>{
    return {
        blog:state.blogs.find((blog)=>{
            return blog.id===props.match.params.id
        }),
        userName:state.auth.userName    
    }
}

export default connect(mapStatetoProps)(BlogDetailsPage)
