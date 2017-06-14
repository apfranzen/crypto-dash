import React from 'react';
import moment from "moment";


class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {secondsElapsed: 0};
  }


  render(props) {
    // console.log(this.props)


    function parse(props, curr, time) {
      // var latestEth = props.eth.splice(1, 1)
      // console.log(latestEth)
      // console.log(latestZec)
      if (!time) {  return props[curr].splice(1, 1)[0]}

      if (time) {
        var then = moment(props[curr].splice(1, 1)[0].timestamp)
      var now  = moment(Date.now());
return (
moment(now.diff(then)).format("mm:ss"))
      }
      
      
    }

    // function timeAgo(props, curr) {
      

    // }

    
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">Latest ETH</h3>
              <p className="card-text">${parse(this.props, 'eth').price}</p>
              {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">Latest ZEC</h3>
              <p className="card-text">Time ago: {parse(this.props, 'zec', 'time')} ${parse(this.props, 'zec').price}</p>
              {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;