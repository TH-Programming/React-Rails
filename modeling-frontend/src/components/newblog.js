import React from 'react'
import { Component } from 'react'

class NewBlog extends Component {
    state = {
        title: "",
        content: ""
    }

    change = (event) => {
        this.setState({...this.state, [event.name]: event.value})
    }

    submit = (event) => {
        event.preventDefault()
        fetch('localhost:3001/blogs', {
            method: 'POST',
            headers: {
                "accept": "application/json",
                "content-type":"application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(this.setState({title:"", content:""}))
    }

    render(){
        return(<div class="main-content">
            <h1> What Are You Writing Today?</h1>
            <form onSubmit = {this.submit()}>
                <input type="text" onChange={this.change()}/>
                <input type="textarea" onchange={this.change()}/>
            </form>
        </div>)
    }
}

export default NewBlog