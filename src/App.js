import React, { Component } from 'react';
import './App.css';
import DataContainer from './DataContainer';

class App extends Component {
  render(state) {
    return (
      <div className="container">
        <div className="App-header">
          <h1 className="display-2 text-center align-middle">Crypto-Dash</h1>
        </div>
        {/*{this.state.initialized}*/}
        <DataContainer
        handler={this.handler} 
        />
      </div>
    );
  }
}

export default App;
