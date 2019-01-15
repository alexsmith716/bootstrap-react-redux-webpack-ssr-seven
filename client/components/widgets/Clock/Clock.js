import React, { Component } from 'react';


class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};

  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {

    // const styles = require('./scss/Clock.scss');

    return (

      <div>

        <h2>Clock: state and lifecycle in a basic React component!</h2>

        <hr/>

        <h4>'this.state.date': { this.state.date.toLocaleTimeString() }</h4>

      </div>

    );
  }
}

export default Clock;

// Date object methods:

// new Date().toLocaleTimeString():
//    * '05:10:30 PM'
//    * Returns a string that represents the time portion of the date, 
//      expressed in the local time zone, using the local time formatting conventions

// new Date().toLocaleDateString():
//    * '01/01/2010'
//    * Returns a string that represents the date portion of the date, 
//      expressed in the local time zone, using the local date formatting conventions
