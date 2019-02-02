import React, { Component } from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {

    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (

      <div className="form-group">

        <label htmlFor="temperatureInput">Enter temperature in { scaleNames[scale] }:</label>

        <input
          type="text"
          className="form-control"
          id="temperatureInput"
          placeholder={`${scaleNames[scale]} value...`}
          value={ temperature }
          onChange={ this.handleChange }
        />

      </div>

    );
  }
};

export default TemperatureInput;
