import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError , auth } =this.props;
        console.log(this.props)
        if(auth.uid) return <Redirect to="/" />
        return (
            <div className="container form-wrapper mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" onChange={this.handleChange} required/>
                                <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password"  onChange={this.handleChange} required/>
                            </div>

                            <button type="submit" className="btn btn-info">Login</button>
                            <div className="red-text center">
                            { authError ? <p className="error-msg">{authError}</p> : null}
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)