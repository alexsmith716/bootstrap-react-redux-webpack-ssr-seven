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
    category: PropTypes.string,
    heading: PropTypes.array,
  };

  static defaultProps = {
    //
  };

  render() {

    // console.log('>>>>>>>>>>>>>>>> TableHead > this.props.data:', this.props.data);

    let rows = [];

    rows.push( <TableRow type="thead" className="table-info" colSpan={ this.props.heading.length } category={ this.props.category } key="table-info" /> );

    rows.push( <TableRow type="thead" data={ this.props.heading } key={ this.props.heading } /> );

    // console.log('>>>>>>>>>>>>>>>> TableHead !!!!!!! > rows:', rows);

    return (

      <thead>

        {rows}

      </thead>

    );
  }
}

export default TableHead;
