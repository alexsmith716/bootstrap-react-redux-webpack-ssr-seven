import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SearchBar from './SearchBar';
// import ProductTable from './ProductTable';
import List from './List';

// component hierarchy:

// FilterableProductTable
//     SearchBar
// 
//     ProductTable
//         ProductCategoryRow
//         ProductRow

// <div className={styles.uniqueColor}>
//   { this.props.list }
// </div>

class FilterableProductTable extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentDidMount() <<<<<<<<<<<<<<');
  }

  // handleFilterTextChange(filterText) {

  // }

  // handleInStockChange(inStockOnly) {

  // }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  render() {

    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > typeof this.props.list: ', typeof this.props.list);
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > this.props.list: ', this.props.list);

    const styles = require('./scss/FilterableProductTable.scss');

    return (

      <React.Fragment>

        <List list={ this.props.list } />

      </React.Fragment>

    );
  }
}

export default FilterableProductTable;
