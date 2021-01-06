import React from 'react'
import { getBlogs } from "../actions/blogActions"
import {connect} from "react-redux"

class BlogIndex extends React.Component{
    componentDidMount(){
        this.props.getBlogs()
    }

    
    render(){
        return(
            <div className="main-content">
            <h1 class='main-content'>You're @ BlogIndex!</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return(
        {blogs: state.blogs}
    )
}

export default connect(mapStateToProps, { getBlogs })(BlogIndex)