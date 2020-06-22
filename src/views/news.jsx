import React, {Component} from "react";

export default class News extends Component {

  state = {
    newslist: [
      'news001',
      'news002',
      'news003'
    ]
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.newslist.map((item,index) => <li key={index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}