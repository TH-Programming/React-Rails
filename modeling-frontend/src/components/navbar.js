import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class NavBar extends Component {

    renderProfile(){
        const { id } = this.props.user
        if (id){
            return (<Link to={`/user/${id}`}> Profile </Link>)
        }
    }

    renderSessionControl(){
        if (this.props.isLoggedIn) {
            return(
                <>
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
        <div>
            <h4 style={{color:'red'}}>navbar styled vertical right</h4>
            <Link to='/about'>About</Link><br/>
            <Link to='/blog'>View Blog</Link><br/>
            <br/>
            {this.renderProfile()}<br/>
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