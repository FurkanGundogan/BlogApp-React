import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter,{history} from './routers/AppRouter';
import "./App.css"
import configureStore from './store/configureStore';
import {getBlogsFromDB,clearBlogs} from './actions/blogs'
import {firebase} from './firebase/firebaseConfig'
import {loginAction,logoutAction} from './actions/auth'
//Default theme kullanabilmek için aşağıdaki iki import gerekli
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
const theme = createTheme({

});

const store=configureStore();

const myresult=(
    
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    
)


ReactDOM.render(<h2>Loading...</h2>, document.getElementById('root'));

let isPageRendered=false
const renderApp=()=>{
    if(!isPageRendered){
        ReactDOM.render(myresult, document.getElementById('root'));
        isPageRendered=true;
    }
}

firebase.auth().onAuthStateChanged(function(user){
    
    if(user){
        store.dispatch(loginAction(user.uid,user.displayName))
        store.dispatch(getBlogsFromDB()).then(()=>{
            renderApp();
            if(history.location.pathname==='/'){
                history.push('/blogs')
            }
        })
        
        
    }else {
        store.dispatch(logoutAction())
        store.dispatch(clearBlogs())
        renderApp();
        
        history.push('/')
    }
})



/*
store.subscribe(()=>{
    console.log(store.getState())
})

const blog1=store.dispatch(addBlog({title:'title1', description:'blog 1 descr'}))
const blog2=store.dispatch(addBlog({title:'title2', description:'blog 2 descr'}))
const blog3=store.dispatch(addBlog({title:'title3', description:'blog 3 descr'}))

store.dispatch(removeBlog({id:blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id,{title:'new title',description:'new descr'}))
*/
//incr, decr, reset = actions (obj)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
