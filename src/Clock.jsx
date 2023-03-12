import React, { Component } from 'react';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.timerHandler,1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timerHandler = () => {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <>
        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        <p>The time is now</p>
        <p>{this.state.date.toLocaleString()}</p>
        <p>Shows time when seconds are even</p>
        <ChildClock 
          time={this.state.date}
        />
      </>
    );
  }
}

class ChildClock extends Component {

  shouldComponentUpdate(nextProps) {
    console.log(nextProps.time.toLocaleString());
    return nextProps.time.getSeconds() %2 === 0;
  }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.time.toLocaleString());
  // }

  render() {
    return <p>{this.props.time.toLocaleString()}</p>
  }
}

export default Clock;