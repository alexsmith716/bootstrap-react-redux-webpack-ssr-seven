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
    products: PropTypes.array.isRequired
  };

  render() {

    const styles = require('./scss/ProductTable.scss');
    const rows = [];
    let lastCategory = null;

    // iterate through 'this.props.products' array
    // invoking arrow function specified for each element
    this.props.products.forEach((product) => {

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
