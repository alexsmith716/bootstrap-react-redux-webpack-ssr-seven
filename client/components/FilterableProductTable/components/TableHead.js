import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';


class TableHead extends Component {

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

      <div>

        <thead>

          <TableRow />

        </thead>

      </div>

    );
  }
}

export default TableHead;
