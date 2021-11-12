import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'
import Footer from '../components/Footer';
import Header from '../components/Header';

const PrivateRoute = ({isAuth,component:Component,...rest}) => (
    <Route {...rest} component={(props)=>(
        isAuth ? (
            <div>
                <Header/>
                <Component {...props}/>
                <Footer history={props.history} />
            </div>
        ):(
            <Redirect to='/'/>
        )
    )}/>
)
const mapStateToProps=(state)=>({
    isAuth: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)
