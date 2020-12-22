import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

export default App;
