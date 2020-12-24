import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import { logout } from './actions/userActions'
import './App.css';
import NavBar from './components/navbar'
import Home from './components/home'
import Login from './components/login'
import Albums from './components/albums'
import About from './components/about'
import React from 'react'
import Signup from './components/signup'
import { Component } from 'react'
import Banner from './components/banner'

class App extends Component {

  componentDidMount(){
    this.loginStatus()
  }

  loginStatus = () => {
    fetch('http://localhost:3001/logged_in', {
      headers: {
        "withCredentials": true,
        "content-type": "application/json",
        "accept": "application-json"
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
            <Route path="/signup" component={Signup}/>
            <Route path="/about" component={About}/>
            <Route path="/albums" component={Albums}/>
            <Route path='/login' component={Login}/>
          </Switch>
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
