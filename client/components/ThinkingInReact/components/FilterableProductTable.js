import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
// import List from './List';

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

    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > typeof this.props.data: ', typeof this.props.data);
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > this.props.data: ', this.props.data);

    const styles = require('./scss/FilterableProductTable.scss');

    return (

      <div className={styles.filterableProductTableContainer}>

        <div className="d-flex justify-content-center">

          <div className={styles.productTable}>

            <div className={styles.tableContainer}>

              <ProductTable products={ this.props.data } />

            </div>

          </div>

        </div>
      </div>

    );
  }
}

export default FilterableProductTable;
