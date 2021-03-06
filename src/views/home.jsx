import React, {Component} from "react";
import MyNavLink from "../components/MyNavLink";
import {Route,Switch,Redirect} from 'react-router-dom'

import News from "./news";
import Message from "./message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是 HOME</h2>
        <div>
          <ul>
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path='/home/news'  component={News}/>
              <Route path='/home/message' component={Message}/>
              <Redirect to='/home/news' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}