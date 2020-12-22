import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {

    renderAdmin(){
        if (this.props.currentUser.admin){
            return (<Link to='/admin'> Admin </Link>)
        }
    }

    render(){
        return(
        <div>
            <h4 style={{color:'red'}}>navbar styled vertical right</h4>
            <Link to='/signup'>Sign up</Link><br/>
            <Link to='/login'>Log In</Link><br/>
            <Link to='/about'>About Us</Link><br/>
            <Link to='/albums'>View Albums</Link><br/>
            <br/>
            {this.renderAdmin()}
        </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return { currentUser }
}

export default connect(mapStateToProps)(NavBar)