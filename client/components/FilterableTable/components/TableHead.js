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
    // category: PropTypes.string,
    // heading: PropTypes.array
    // data: PropTypes.array
  };

  static defaultProps = {
    //
  };

  render() {

    console.log('>>>>>>>>>>>>>>>> TableHead > this.props.data:', this.props.data);

    let rows = [];

    this.props.data.forEach((object, index, arr) => {

      if (object.category) {
        rows.push( <TableRow type="thead" className="table-info" colSpan={ object.heading.length } category={ object.category } key="table-info" /> );
      }

      rows.push( <TableRow type="thead" data={ object.heading } key={ index } /> );

    });

    console.log('>>>>>>>>>>>>>>>> TableHead !!!!!!! > rows:', rows);

    return (

      <thead>
  
        {rows}

      </thead>

    );
  }
}

export default TableHead;
