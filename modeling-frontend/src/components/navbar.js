import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class NavBar extends Component {

    renderAdmin(){
        if (this.props.user.admin){
            return (<Link to='/admin'> Admin </Link>)
        }
    }

    renderSessionControl(){
        if (this.props.isLoggedIn) {
            return(<Link to='/logout'>Logout</Link>)
        } else {
            return(
                <>
                <Link to='/signup'>Sign up</Link><br/>
                <Link to='/login'>Log In</Link><br/>
                </>
            )
        }
    }

    render(){
        return(
        <div>
            <h4 style={{color:'red'}}>navbar styled vertical right</h4>
            <Link to='/about'>About Us</Link><br/>
            <Link to='/albums'>View Albums</Link><br/>
            <br/>
            {this.renderAdmin()}<br/>
            <br/>
            {this.renderSessionControl()}
        </div>
        )
    }
}

const mapStateToProps = ({ isLoggedIn, user }) => {
    return { isLoggedIn, user }
}

export default connect(mapStateToProps)(NavBar)