import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


class ProductTable extends Component {

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

    const styles = require('./scss/ProductTable.scss');

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

          <ProductCategoryRow category={product.category} key={product.category} />

        );
      }

      rows.push(

        <ProductRow product={product} key={product.name} />

      );

      lastCategory = product.category;

    });

    return (

      <div>
        {rows}
      </div>

    );
  }
}

export default ProductTable;
