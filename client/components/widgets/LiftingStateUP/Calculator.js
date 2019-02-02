import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { toCelsius, toFahrenheit, tryConvert } from './stateHelpers';


class Calculator extends Component {

  // called before mounting
  constructor(props) {

    // implement 'constructor' for the React.Component subclass
    // define 'this.props'
    super(props);

    // bind methods
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

    // initialize state
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState( {scale: 'c', temperature} );
  }

  handleFahrenheitChange(temperature) {
    this.setState( {scale: 'f', temperature} );
  }

  // examine 'this.props' and 'this.state' and return a React element
  render() {

    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    const styles = require('./scss/Calculator.scss');

    return (

      <div className={styles.tableContainer}>

        <div className={styles.tableSearchContainer}>

          <div className={styles.tableSearch}>

              <form>

                <TemperatureInput
                  scale="c"
                  temperature={ celsius }
                  onTemperatureChange={ this.handleCelsiusChange } />

                <TemperatureInput
                  scale="f"
                  temperature={ fahrenheit }
                  onTemperatureChange={ this.handleFahrenheitChange } />

                <BoilingVerdict celsius={ parseFloat(celsius) } />

              </form>

            </div>
          </div>
      </div>
    );
  }
};

export default Calculator;
