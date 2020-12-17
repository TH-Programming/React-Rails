import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'


class Signup extends Component{
    state = {
        username:'', 
        email:'', 
        password:''
    }
    
    formChange = event => {
        this.setState({
            ...this.state, 
            [event.target.name]: event.target.value })
    }

    formSubmit = e => {
        e.preventDefault()
        console.log('submitted')
        this.setState({username:'', password:'', email:''})

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
                <input type="text" value={this.state.password} name="password" onChange={this.formChange}></input>
                <br/>
                <input type="submit"></input>
            </form>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return(
        {add:(dispatch) => dispatch({type:"AFEW"})}
    )
}

export default connect(null, mapDispatchToProps)(Signup)
