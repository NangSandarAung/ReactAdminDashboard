import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
const SingedInLinks = (props) =>{
    return(
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to='/'>Dashboard</NavLink>
                 
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/create'>Add New</NavLink>
                 
            </li>
            <li><a className="nav-link" onClick={props.signOut}>Log Out</a></li>  
        </ul>
       
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SingedInLinks)