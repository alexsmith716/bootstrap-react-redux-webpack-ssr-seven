import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class FilterableProductTable extends React.Component {

  static propTypes = {
    optionalString: PropTypes.string, // declared string JS primitive
    optionalNumber: PropTypes.number, // declared number JS primitive
    optionalNode: PropTypes.node, // Anything that can be rendered
  };

  constructor(props) {

    super(props);
    this.state = {

    };
  }

  render() {

    const styles = require('./scss/FilterableProductTable.scss');

    return (

      <div>
      </div>

    );
  }
}
