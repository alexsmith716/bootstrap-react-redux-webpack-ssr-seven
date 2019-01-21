import React, { Component } from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


class ProductTable extends Component {

  render() {

    const rows = [];
    let lastCategory = null;

    // iterate through 'this.props.products' array
    // invoking arrow function specified for each element
    this.props.products.forEach((product) => {

      if (product.category !== lastCategory) {

        rows.push(

          <ProductCategoryRow
            category={product.category}
            key={product.category} 
          />

        );
      }

      rows.push(

        <ProductRow
          product={product}
          key={product.name}
        />

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

//
// 'forEach()' method iterates through an 'array', invoking a 'function' specified for each element
// 
// 'function' is passed as the first argument to 'forEach()'
// 
// 'forEach()' then invokes the 'function' with 3 arguments:
// 
//   1) the value of the 'array' element
//   2) the index of the 'array' element
//   3) 'array'
