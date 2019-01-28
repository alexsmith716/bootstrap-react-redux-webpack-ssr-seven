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
    // className: PropTypes.string,
    // colSpan: PropTypes.number,
    // category: PropTypes.string,
    // tHeadRowData: PropTypes.array,
    className: PropTypes.string,
    data: PropTypes.object
  };

  static defaultProps = {
    //
  };

  render() {

    console.log('>>>>>>>>>>>>>>>> TableRow > THEAD > DATA:', this.props.data);

    let rows;

    if (this.props.tHeadClassName === null) {

      console.log('>>>>>>>>>>>>>>>> TableRow > THEAD > NOOOOO:', this.props.className);

      // rows = <TableData />;

      return (

        <tr>

          <TableData />

        </tr>
      );

    } else {

      console.log('>>>>>>>>>>>>>>>> TableRow > THEAD > YESSSS > className:', this.props.className);

      // const tableHeadings = Object.keys(this.props.data);

      return (

        <tr className="table-info">

          <TableHeadData data={ this.props.data } />

        </tr>
      );
    }
  }
}

export default TableRow;
