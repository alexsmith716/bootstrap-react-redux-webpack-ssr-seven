import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProductCategoryRow extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    category: PropTypes.string.isRequired,
    // key: PropTypes.number.isRequired,
  };

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
