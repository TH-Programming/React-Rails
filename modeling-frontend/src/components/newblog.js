import React from 'react'
import { Component } from 'react'
import {connect} from "react-redux"
import {createBlog} from "../actions/blogActions"

class NewBlog extends Component {
    state = {
        title: "",
        content: ""
    }

    //? changes the state when an input changes
    change = (event) => {
        console.log(event.target.name)
        console.log(this.state)
        this.setState({...this.state, [event.target.name]: event.target.value})
    }

        //? submits form to backend, resets state
    submit = (event) => {
        event.preventDefault()
        this.props.createBlog(this.state)
        this.setState({title:"", content:""})
    }

    render(){
        return(<div class="main-content">
            <h1> What Are You Writing Today?</h1>
            <form onSubmit = {this.submit}><br/>
                <label for="title">Title</label>
                <input type="text" name="title" onChange={this.change}/><br/>
                <label for="content">  Content</label>
                <textarea rows="20" cols="50" name="content" onChange={this.change}/><br/>
                <input type="submit"/>
            </form>
        </div>)
    }
}

export default connect(null, {createBlog})(NewBlog)