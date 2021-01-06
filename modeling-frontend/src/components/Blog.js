import React from 'react'

class BlogPost extends React.Component{

    render(){
        return(
        <div id={this.props.blog.id}>
            <h1>{this.props.blog.title}</h1>
            <p>{this.props.blog.content}</p>
        </div>
        )
    }
}

export default BlogPost
