import React, { Component } from 'react';


class ProductRow extends Component {

  render() {

    const product = this.props.product;

    const name = product.stocked ? product.name : <span style={ { color: 'red' } }>{ product.name }</span>;

    return (

      <div>

        <div>{name}</div>

        <div>{product.price}</div>

      </div>

    );
  }
}

export default ProductRow;
