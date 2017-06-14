import React from 'react';


class Timer extends React.Component {
  constructor(props) {

    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick(props) {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
    if (this.state.secondsElapsed === 60) {
        clearInterval(this.interval);
      this.setState((prevState) => ({
        secondsElapsed: 0
      }));
    this.componentDidMount()
    // call handler to fire AJAX call
    this.props.handler()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

export default Timer;
