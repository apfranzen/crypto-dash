import React, { Component } from 'react';
import logo from './logo.svg';

class Data extends Component {
  constructor(props) {
    super(props);
  }
  render(props) { 
    return <div>
        <p> ETH: {this.props.eth} </p>
        <p> ZEC: {this.props.zec} </p>
      </div>;
    // return <p>Data Component</p>
  }
  
  // renderComment({body, author}) {
  //   return <li>{body}—{author}</li>;
  // }
}

export default Data;


