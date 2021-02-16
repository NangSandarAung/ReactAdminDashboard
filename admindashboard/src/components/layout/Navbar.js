import React from 'react'
import { Link } from 'react-router-dom'
import SingedInLinks from './SignedInLinks'
import { connect } from 'react-redux'
import logo from '../../img/logo.svg'
const Navbar = (props) => {
    const { auth } = props;
    //console.log(auth)
    const links = auth.uid ? <SingedInLinks/> : null
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img width="60" src={logo} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto"></ul>
                {links}
            </div>
        </nav>
    )
}



const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)