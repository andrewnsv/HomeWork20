import React, { Component } from 'react';
import Clock from './Clock';
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Clock 
          imgSrc={require('./pepega.jpg')} 
          imgAlt="PEPEGA" 
        />
      </>
    );
  }
}

export default App;