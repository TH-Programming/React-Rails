import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import { logout } from './actions/userActions'
import './App.css';
import NavBar from './components/navbar'
import Home from './components/home'
import Login from './components/login'
import About from './components/about'
import React from 'react'
import { Component } from 'react'
import Banner from './components/banner'
import BlogIndex from './components/BlogIndex'
import NewBlog from './components/newblog'
import Footer from "./components/footer"

class App extends Component {

  componentDidMount(){
    this.loginStatus()
  }

  loginStatus = () => {
    fetch('http://localhost:3001/logged_in', {
      headers: {
        "withCredentials": true
      }
    })
    .then(response => {
      if (response.data.logged_in) {
        this.props.login(response)
      } else {
        this.props.logout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  render(){
  return (
    <div className="App">
      <Router>
        <Banner/>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/blogs/new" component={NewBlog}/>
            <Route path="/blogs" component={BlogIndex}/>
            <Route path='/login' component={Login}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (data) => dispatch({type: "LOGIN", payload: data}),
      logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(App);
