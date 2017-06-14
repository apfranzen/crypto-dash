import React, { Component } from 'react';
import axios from 'axios'
import Data from './Data'
import Timer from './Timer'
import Jumbotron from './Jumbotron'

// import db from './db/db.json'
const { List } = require('immutable')


class DataContainer extends Component {
  
  constructor() {
    super();
    this.state = { 
      eth: null,
      zec: null,
      initialized: false,
      secondsRemaining: 10
     }
     this.init = this.init.bind(this);
    //  this.handler = this.handler.bind(this);
  }
  
  componentWillMount() {
    const now = Date.now()
    const currencies = ['eth', 'zec']
    // currencies.map((currency) => this.init(currency))
    Promise.all([this.init('eth'), this.init('zec')])
      .then((payload) => {
        console.log(payload)
        this.setState({
          eth: payload[0],
          zec: payload[1]
        }, function() {
          console.log(this.state)
          this.setState({initialized: true})
        })
      })
  }

  // componentDidMount() {
  //   this.setState
  // }

  fetchData(ts, curr) {
      return axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${curr}&tsyms=USD&ts=${ts}`)
          .then(function (response) {
            return response.data
          })
        .catch(function (error) {
          console.log(error);
        });
    };

  init(currency) {
    return axios.get(`http://localhost:8080/${currency}?_sort=timestamp&_order=desc&_limit=10`)
      .then((response) => {
        return response.data
      })
  }

  handler() {
    console.log('hit')
    const now = Date.now()
    
    Promise.all([this.fetchData(now, 'ETH'), this.fetchData(now, 'ZEC')])
      .then((payload, eth, zec) => {
        
        // console.log(payload)
        const latestEth = {
            id: Date.now(),
            timestamp: now,
            price: payload[0].ETH.USD
        }

        const latestZec = {
            id: Date.now(),
            timestamp: now,
            price: payload[1].ZEC.USD
        }

        

        var ethList1 = this.state.eth

        var ethList2 = this.state.eth.concat(latestEth)
        var zecList1 = this.state.zec
        var zecList2 = this.state.zec.concat(latestZec)

        ethList2.sort(function (a, b) {
          return b.timestamp - a.timestamp;
        });
        zecList2.sort(function (a, b) {
          return b.timestamp - a.timestamp;
        });
        
        ethList2.splice(10, 1)
        zecList2.splice(10, 1)
       
        this.setState({
          eth: ethList2,
          zec: zecList2
        })

        axios.post('http://localhost:8080/eth', {
            timestamp: Date.now(),
            price: payload[0].ETH.USD
        })
          .then(function(response) {
          })
        axios.post('http://localhost:8080/zec', {
            timestamp: Date.now(),
            price: payload[1].ZEC.USD
        })
          .then(function(response) {
          })
      })
  }
  
  render(state) {
    {console.log(this.state.initialized)}
      if (this.state.initialized && this.state.zec.length === 10) {
        {console.log(this.state.initialized)}
        return <div>
          <Timer handler={this.handler}/>
        <Jumbotron 
        eth={this.state.eth}
        zec={this.state.zec}
        />
        <Data
          eth={this.state.eth}
          zec={this.state.zec}
        />
        </div>
      }
      return <h3>Still loading</h3>;
  }
}

export default DataContainer;