import database from '../firebase/firebaseConfig';


export const addBlog = (blog) => ({
    type:'ADD_BLOG',
    blog

})

export const addBlogToDatabase = (blogdata={}) => {
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const {title='',description='',imgUrl="",dateAdded=0}=blogdata
        const blog={title,description,imgUrl,dateAdded,uid}
        
        database.ref("blogs").push(blog).then((res)=>{
            
            dispatch(addBlog({
                id:res.path.pieces_[1],
                ...blog
            }))
        })

        /*push(ref(database,"blogs"),blog).then((res)=>{
            dispatch(addBlog({
                id:res.key,
                ...blog

            }))
        })*/


    }
}

export const removeBlog = (id) =>({
        type:'REMOVE_BLOG',
        id:id
})

export const removeBlogFromDB = (id) =>{
    return (dispatch) => {
        return database.ref(`blogs/${id}`).remove().then(()=>{
            dispatch(removeBlog(id))
        })
        /*remove(ref(database,`blogs/${id}`)).then(()=>{
            dispatch(removeBlog(id))
        })*/
    }
}

export const editBlog=(id,updates)=>({
    type:'EDIT_BLOG',
    id,
    updates
})

export const editBlogFromDB = (id,updates) =>{
    return (dispatch) => {
        return database.ref(`blogs/${id}`).update(updates).then(()=>{
            dispatch(editBlog(id,updates))
        })
        /*update(ref(database,`blogs/${id}`),updates).then(()=>{
            dispatch(editBlog(id,updates))
        })*/
    }
}

export const setBlogs=(blogs)=>({
    type:"SET_BLOGS",
    blogs
})

export const getBlogsFromDB = () => {
    return (dispatch,getState) => {
        const uid=getState().auth.uid;
        return database.ref("blogs").once("value").then((snapshot)=>{
            const blogs=[]
            
            snapshot.forEach((blog)=>{
                const results=blog.val()

                if(results.uid===uid){
                    blogs.push({
                        id:blog.key,
                        ...results
                    })
                }
            })
            dispatch(setBlogs(blogs))
        })
        
        /*get(ref(database,"blogs")).then((snapshot)=>{
            const blogs=[]
            snapshot.forEach((blog)=>{
                blogs.push({
                    id:blog.key,
                    ...blog.val()
                })
            })

           
        })*/
    }
}

export const clearBlogs=()=>({
    type:"CLEAR_BLOGS"
})