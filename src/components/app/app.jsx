import React, {Component} from "react";
import { Switch, Route, Redirect} from 'react-router-dom'
import './app.css'

import About from '../../views/about'
import Home from "../../views/home";
import MyNavLink from "../MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div className='head'>
        <div className="left">
          <MyNavLink to='/about'>About</MyNavLink>
          <MyNavLink to='/home'>Home</MyNavLink>
        </div>
        <div className='right'>
          <Switch>
            <Route path='/about' component={About}/>
            <Route path='/home' component={Home}/>
            <Redirect to='/about'/>
          </Switch>
        </div>
      </div>
    )
  }
}