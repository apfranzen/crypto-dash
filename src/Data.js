import React, { Component } from 'react';
import moment from 'moment';

class Data extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(props) { 
    return <div>
        {Object.keys(this.props).map((currency) => 
        <div className="col-8" key={currency}>
          <h1 className="display-5">{currency}</h1>
          <table className="table table-bordered table-striped table-sm">
          <thead className="thead-inverse">
            <tr>
              <th>Timestamp</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/*{this.props.eth.map(console.log('yolo'))}*/}
            {console.log(this.props)}
            {this.props[currency].map(this.renderCurrency)}
          </tbody>
        </table>
        </div>
          )}
      </div>;
  }
  
  renderTables(props, currency) {
    return <table className="table">
          <thead className="thead-inverse">
            
            <tr>
              <th>Timestamp</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dsfh</td>
              <td>sdfh</td>
            </tr>
          </tbody>
        </table>
  }
  
  renderCurrency(entry) {
    return <tr key={entry.id}>
              <td>{moment(entry.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</td>
              <td>{entry.price}</td>
            </tr>
  }
}

export default Data;


