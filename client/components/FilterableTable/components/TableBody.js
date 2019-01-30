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
    data: PropTypes.array
  };

  static defaultProps = {
    //
  };

  render() {

    // console.log('>>>>>>>>>>>>>>>> TableBody !!!!!!! > this.props.data:', this.props.data);

    const rows = [];

    rows.push( <TableRow data={ this.props.data } key={this.props.data} /> );

    return (

      <tbody>

        {rows}

      </tbody>

    );
  }
}

export default TableBody;
