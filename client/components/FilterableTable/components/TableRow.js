import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeadData from './TableHeadData';
import TableData from './TableData';

// null: 'no value' for numbers and strings,  objects
// Composition vs Inheritance

// <tr>
//   <TableData />
// </tr>

class TableRow extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    colSpan: PropTypes.number,
    category: PropTypes.string,
    data: PropTypes.array
  };

  static defaultProps = {
    type: null,
    className: null
  };

  render() {

    //console.log('>>>>>>>>>>>>>>>> TableRow > this.props.className:', this.props.className);
    //console.log('>>>>>>>>>>>>>>>> TableRow > this.props.category:', this.props.category);
    //console.log('>>>>>>>>>>>>>>>> TableRow > this.props.data:', this.props.data);

    const row = [];

    if (this.props.type && this.props.className) {

      console.log('>>>>>>>>>>>>>>>> TableRow > THEAD > YESSSSSSS > type thead 111 <<<<<<<<<<<<<<<');

      return (

        <tr className="table-info">
          <TableHeadData colSpan={ this.props.colSpan } category={ this.props.category } />
        </tr>

      );

    } else if (this.props.type && !this.props.className) {

      console.log('>>>>>>>>>>>>>>>> TableRow > THEAD > YESSSSSSS > type thead 222 <<<<<<<<<<<<<<<');

      return (

        <tr>
          <TableHeadData />
          <TableHeadData />
          <TableHeadData />
          <TableHeadData />
        </tr>

      );

    } else {

      console.log('>>>>>>>>>>>>>>>> TableRow > THEAD > NOOOOOOOOO > type thead 333 <<<<<<<<<<<<<<<');

      return (

        <tr>
          <TableData />
        </tr>
      );
    }
  }
}

export default TableRow;
