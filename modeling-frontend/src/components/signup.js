import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions/userActions'


class Signup extends Component{
    state = {
        username:'', 
        email:'', 
        password:'',
        passsword_confirmation: ''
    }
    
    formChange = event => {
        this.setState({
            ...this.state, 
            [event.target.name]: event.target.value })
    }

    formSubmit = e => {
        e.preventDefault()
        this.props.signup(this.state)
        this.setState({username:'', password:'', email:'', password_confirmation:''})

    }

    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <h1>Sign-up Form</h1>
                <p>Username</p> 
                <input type="text" value={this.state.username} name="username" onChange={this.formChange}></input>
                <p>Email</p>
                <input type="text" value={this.state.email} name="email" onChange={this.formChange}></input>
                <p>Password</p>
                <input type="password" value={this.state.password} name="password" onChange={this.formChange}></input>
                <br/>
                <p>Confirm Password</p>
                <input type="password" value={this.state.password_confirmation} name="password_confirmation" onChange={this.formChange}></input>
                <br/>
                <input type="submit"></input>
            </form>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return(
        {signup: (data) => dispatch(signUp(data))}
    )
}

export default connect(null, mapDispatchToProps)(Signup)
