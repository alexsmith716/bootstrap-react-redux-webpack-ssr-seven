import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeadData from './TableHeadData';
import TableData from './TableData';


class TableRow extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    // product: PropTypes.object.isRequired,
  };

  render() {

    // const product = this.props.product;

    return (

      <tr>

        <TableData />

      </tr>

    );
  }
}

export default TableRow;
