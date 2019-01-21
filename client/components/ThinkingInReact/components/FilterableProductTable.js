import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
// import List from './List';

// component hierarchy:

// FilterableProductTable
//     SearchBar
// 
//     ProductTable
//         ProductCategoryRow
//         ProductRow

class FilterableProductTable extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentDidMount() <<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  render() {

    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > typeof this.props.list: ', typeof this.props.list);
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > this.props.list: ', this.props.list);

    const styles = require('./scss/FilterableProductTable.scss');

    return (

      // <List list={ this.props.list } />

      <ProductTable
        products={ this.props.list }
      />

    );
  }
}

export default FilterableProductTable;
