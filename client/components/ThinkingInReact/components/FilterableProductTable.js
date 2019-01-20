import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SearchBar from './components/SearchBar';
// import ProductTable from './components/ProductTable';

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

    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > typeof this.props.list: ', this.props.list);

    return (

      <React.Fragment>

        <p>
          { this.props.list }
        </p>
        
      </React.Fragment>
    );
  }
}

export default FilterableProductTable;
