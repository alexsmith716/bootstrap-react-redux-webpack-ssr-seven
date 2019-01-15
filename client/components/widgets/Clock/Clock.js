import React, { Component } from 'react';


class Clock extends Component {

  constructor(props) {

    super(props);

    this.state = {
      date: new Date(),
      alertColor: this.getRandomAlert()
    };

  }

  componentDidMount() {
    // register function to be invoked repeatedly after elapse of 1 sec
    this.timerID = setInterval( () => this.callbackFunction(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // getRandomAlert() {
  getRandomAlert = () => {
    const alerts = ['primary','secondary','success','danger','warning','info','light','dark'];
    const randomAlert = alerts[ Math.floor( Math.random() * alerts.length ) ];
    return randomAlert;
  }
  // getRandomColor = () => {
  //   const characters = '0123456789ABCDEF';
  //   const color = '#';
  //   for (const i = 0; i < 6; i++) {
  //     color += characters[getRandomNumber(0, 15)];
  //   }
  //   return color;
  // }
  // 
  // getRandomNumber = (low, high) => {
  //   const r = Math.floor(Math.random() * (high - low + 1)) + low;
  //   return r;
  // }

  callbackFunction() {
    this.setState({ date: new Date(), alertColor: this.getRandomAlert() });
  }

  render() {

    // const styles = require('./scss/Clock.scss');

    return (

      <div className="card text-center">
        <h2 className="card-header">
          Clock: state and lifecycle in a basic React component!
        </h2>
        <div className="card-body">
          <div className="card-title">
            <div className={`alert alert-${this.state.alertColor}`} role="alert">{`This is a Bootstrap v4 ${this.state.alertColor.toUpperCase()} alert`}</div>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card-footer text-muted">
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>

      // <div>
      //   <h2>Clock: state and lifecycle in a basic React component!</h2>
      //   <hr/>
      //   <blockquote className="blockquote text-center">
      //     <h4 className="display-4">{this.state.date.toLocaleTimeString()}</h4>
      //   </blockquote>
      //   <blockquote className={`blockquote text-center alert alert-${this.state.alertColor}`} role="alert">
      //     {`This is a Bootstrap v4 ${this.state.alertColor.toUpperCase()} alert—check it out!`}
      //   </blockquote>
      // </div>

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
