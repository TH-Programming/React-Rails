import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class NavBar extends Component {


    renderSessionControl(){
        if (this.props.isLoggedIn) {
            return(
                <>
                <Link to="/blogs/new"> New Post </Link><br/>
                <Link to="/logout">Logout</Link>
                </>
            )
        } else {
            return(
                <>
                <Link to='/login'>Log In</Link><br/>
                </>
            )
        }
    }

    render(){
        return(
        <div class="navbar">
            <Link to='/about'>About</Link><br/>
            <Link to='/blog'>View Blog</Link><br/>
            <br/>
            {this.renderSessionControl()}
        </div>
        )
    }
}

const mapStateToProps = ({ isLoggedIn, user }) => {
    return { isLoggedIn, user }
}

const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch({type: "LOGOUT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)