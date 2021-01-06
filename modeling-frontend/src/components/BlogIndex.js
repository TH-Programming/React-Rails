import React from 'react'
import { getBlogs } from "../actions/blogActions"
import {connect} from "react-redux"
import BlogPost from "./Blog"

class BlogIndex extends React.Component{
    componentDidMount(){
        this.props.getBlogs()
    }

    
    render(){
        console.log(this.props)
            return(
                <div className="main-content">
                {this.props.blogs.map((blog) => <BlogPost key={blog.id} blog={blog}/>)}
                </div>
            )
        }}


const mapStateToProps = (state) => {
    console.log(state)
    return(
        {blogs: state.blog.all}
    )
}

export default connect(mapStateToProps, { getBlogs })(BlogIndex)