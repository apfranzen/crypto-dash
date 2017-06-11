import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import Data from './Data'

class DataContainer extends Component {
  constructor() {
    super();
    this.state = { 
      eth: null,
      zec: null
     }
  }
  
  componentDidMount() {
    const now = Date.now()
    Promise.all([ethFetch(now), zecFetch(now)])
      .then((payload) => {
        console.log(this)
        this.setState({
          eth: payload[0].ETH.USD,
          zec: payload[1].ZEC.USD
        })
      })
    
    function ethFetch(ts){
      console.log('now from one ', now)
      return axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=${ts}`)
          .then(function (response) {
            // console.log(response.data);
            return response.data
            // {
            //     this.setState({comments: comments});
            //   }.bind(this)
          })
        .catch(function (error) {
          console.log(error);
        });
    }

    function zecFetch(ts) {
      console.log('now from two ', now)
      return axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=ZEC&tsyms=USD&ts=${ts}`)
          .then(function (response) {
            // console.log(response.data);
            return response.data
            // {
            //     this.setState({comments: comments});
            //   }.bind(this)
          })
        .catch(function (error) {
          console.log(error);
        });
    }
   

    // $.ajax({
    //   url: "/my-comments.json",
    //   dataType: 'json',
    //   success: function(comments) {
    //     this.setState({comments: comments});
    //   }.bind(this)
    // });
  }
  
  render() {
    return <Data 
    eth={this.state.eth} 
    zec={this.state.zec}
    />;
    // return <h1>DataContainer</h1>
  }
}

export default DataContainer;


