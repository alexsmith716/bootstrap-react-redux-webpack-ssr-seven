import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';


class FilterableProductTable extends Component {

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

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentDidMount() <<<<<<<<<<<<<<');
  }

  handleFilterTextChange(filterText) {

  }
  
  handleInStockChange(inStockOnly) {

  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  render() {

    const styles = require('./scss/FilterableProductTable.scss');

    return (

    );
  }
}

export default FilterableProductTable;
