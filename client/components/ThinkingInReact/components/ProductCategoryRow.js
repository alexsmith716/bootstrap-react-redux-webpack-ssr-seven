import React, { Component } from 'react';


class ProductCategoryRow extends Component {

  render() {

    const category = this.props.category;

    return (

      <div>

        {category}

      </div>

    );
  }
}

export default ProductCategoryRow;
