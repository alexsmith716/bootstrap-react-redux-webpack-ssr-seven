import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';


class SearchBar extends Component {

  constructor(props) {

    super(props);

  }

  static propTypes = {
    // filterText: PropTypes.string,
    // inStockOnly: PropTypes.bool,
    // onFilterTextChange: PropTypes.string,
    // onInStockChange: PropTypes.bool
  };

  // handleFilterTextChange(e) {

  // }

  // handleInStockChange(e) {

  // }

  render() {

    const styles = require('./scss/SearchBar.scss');

    return (

      <form>

        <input type="text" placeholder="Search..." />

        <div>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </div>

      </form>

    );
  }
}

export default SearchBar;
