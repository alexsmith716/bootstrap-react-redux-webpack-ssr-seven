import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';


class SearchBar extends Component {

  constructor(props) {

    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);

  }

  static propTypes = {
    filterText: PropTypes.string,
    inStockOnly: PropTypes.bool,
    onFilterTextChange: PropTypes.func,
    onInStockChange: PropTypes.func
  };

  handleFilterTextChange(e) {
    // console.log('>>>>>>>>>>>>>>> SearchBar > handleFilterTextChange > e.target.value:', e.target.value)
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    // console.log('>>>>>>>>>>>>>>> SearchBar > handleInStockChange > e.target.checked:', e.target.checked)
    this.props.onInStockChange(e.target.checked);
  }

  render() {

    const styles = require('./scss/SearchBar.scss');

    return (

      <form>

        <input
          type="text"
          placeholder="Search..." 
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />

        <div>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </div>

      </form>

    );
  }
}

export default SearchBar;
