import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';


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

    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > typeof this.props.content: ', typeof this.props.content);
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > this.props.content: ', this.props.content);

    const styles = require('./scss/FilterableProductTable.scss');

    return (

      <div className={styles.filterableProductTableContainer}>

        <div className="d-flex justify-content-center">

          <div className={styles.productTable}>

            <div className={styles.tableContainer}>

              <ProductTable products={ this.props.content } />

            </div>

          </div>

        </div>
      </div>

    );
  }
}

export default FilterableProductTable;
