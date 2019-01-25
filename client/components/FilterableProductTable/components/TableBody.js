import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';


class TableBody extends Component {

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

      <tbody>

        <TableRow />

      </tbody>

    );
  }
}

export default TableBody;
