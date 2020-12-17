import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {

    render(){
        return(
        <div>
            <h4 style={{color:'red'}}>navbar styled vertical right</h4>
            <Link to='/signup'>Sign up</Link><br/>
            <Link to='/login'>Log In</Link><br/>
            <Link to='/about'>About Us</Link><br/>
            <Link to='/albums'>View Albums</Link><br/>
        </div>
        )
    }
}

export default NavBar