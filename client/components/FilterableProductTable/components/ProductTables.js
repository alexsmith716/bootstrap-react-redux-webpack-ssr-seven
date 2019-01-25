import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import ProductCategoryRow from './ProductCategoryRow';
// import ProductRow from './ProductRow';
import ProductTable from './ProductTable';


class ProductTables extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    filterText: PropTypes.string,
    inStockOnly: PropTypes.bool
  };

  render() {

    console.log('>>>>>>>>>>>>>>>> ProductTables > this.props.products:', this.props.products);

    const styles = require('./scss/ProductTables.scss');

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    // iterate through 'this.props.products' array
    // invoking arrow function specified for each element
    this.props.products.forEach((product) => {

      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {

        rows.push(

          <ProductTable category={product.category} key={product.category}/>

        );
      }

      lastCategory = product.category;

      console.log('>>>>>>>>>>>>>>>> ProductTables > this.props.products > {rows}:', {rows});

    });

    return (

      <div>
        {rows}
      </div>

    );
  }
}

export default ProductTables;

// # of unique category's === # of table's
// # of category's === # of table <tr> rows
// # of keys's === # of table <td> columns
