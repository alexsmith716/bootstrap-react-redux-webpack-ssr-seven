import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProductRow extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    product: PropTypes.object.isRequired,
    // key: PropTypes.array.isRequired,
  };

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
